import path from "path";
import type { IncomingMessage, ServerResponse } from "node:http";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv, type Plugin } from "vite";
// Vercel consumes this JavaScript function directly; Vite only needs it for local dev.
// @ts-expect-error The API file intentionally lives outside the TypeScript app build.
import sendEmailHandler from "./api/send-email.js";

interface DevApiRequest extends IncomingMessage {
  body?: unknown;
}

interface DevApiResponse extends ServerResponse {
  status: (statusCode: number) => DevApiResponse;
  json: (payload: unknown) => void;
}

function readJsonBody(req: IncomingMessage) {
  return new Promise<unknown>((resolve, reject) => {
    let rawBody = "";

    req.on("data", (chunk: Buffer) => {
      rawBody += chunk.toString("utf8");
    });
    req.on("end", () => {
      if (!rawBody) {
        resolve({});
        return;
      }

      try {
        resolve(JSON.parse(rawBody));
      } catch (error) {
        reject(error);
      }
    });
    req.on("error", reject);
  });
}

function contactApiDevPlugin(env: Record<string, string>): Plugin {
  return {
    name: "contact-api-dev",
    apply: "serve",
    configureServer(server) {
      process.env.RESEND_API_KEY = env.RESEND_API_KEY || process.env.RESEND_API_KEY;
      process.env.CONTACT_TO_EMAIL = env.CONTACT_TO_EMAIL || process.env.CONTACT_TO_EMAIL;
      process.env.CONTACT_FROM_EMAIL =
        env.CONTACT_FROM_EMAIL || process.env.CONTACT_FROM_EMAIL;

      server.middlewares.use("/api/send-email", async (req, res, next) => {
        try {
          const apiReq = req as DevApiRequest;
          const apiRes = res as DevApiResponse;

          apiReq.body = await readJsonBody(req);
          apiRes.status = (statusCode: number) => {
            res.statusCode = statusCode;
            return apiRes;
          };
          apiRes.json = (payload: unknown) => {
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify(payload));
          };

          await sendEmailHandler(apiReq, apiRes);
        } catch (error) {
          next(error);
        }
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react(), tailwindcss(), contactApiDevPlugin(env)],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
