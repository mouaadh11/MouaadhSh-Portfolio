import { useState } from "react";
import type { FormEvent } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { isFirebaseConfigured } from "@/lib/firebase";
import { useAuth } from "@/hooks/useAuth";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user, login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as { from?: { pathname?: string } } | null)?.from?.pathname ?? "/admin";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email || !password) {
      toast.error("Email and password are required.");
      return;
    }

    setIsSubmitting(true);

    try {
      await login(email, password);
      toast.success("Logged in.");
      navigate(from, { replace: true });
    } catch (caughtError) {
      toast.error(caughtError instanceof Error ? caughtError.message : "Unable to log in.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (user) {
    return <Navigate to="/admin" replace />;
  }

  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-black px-4 py-12 text-white">
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-md flex-col gap-5 rounded-2xl border border-white/10 bg-white/10 p-6 shadow-xl"
      >
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-orange">Admin</p>
          <h1 className="mt-2 text-3xl font-black">Portfolio CMS</h1>
          <p className="mt-2 text-sm leading-6 text-gray">
            Sign in with the Firebase admin account. Credentials are never stored in the app.
          </p>
        </div>

        {!isFirebaseConfigured && (
          <div className="rounded-lg border border-orange/40 bg-orange/10 p-3 text-sm text-orange">
            Firebase environment variables are missing. Add them before logging in.
          </div>
        )}

        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="border-white/20 bg-black/30 text-white"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="border-white/20 bg-black/30 pr-10 text-white"
            />
            <button
              type="button"
              aria-label={showPassword ? "Hide password" : "Show password"}
              aria-pressed={showPassword}
              onClick={() => setShowPassword((currentValue) => !currentValue)}
              className="absolute right-2 top-1/2 flex size-7 -translate-y-1/2 items-center justify-center rounded-md text-gray transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange"
            >
              {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
            </button>
          </div>
        </div>

        <Button
          type="submit"
          disabled={isSubmitting || !isFirebaseConfigured}
          className="bg-orange text-black hover:bg-orange/90"
        >
          {isSubmitting ? "Signing in..." : "Sign in"}
        </Button>
      </form>
    </main>
  );
}
