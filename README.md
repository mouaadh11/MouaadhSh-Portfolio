# MouaadhSh Portfolio

Personal portfolio built with React, TypeScript, Vite, Tailwind CSS, and shadcn-style UI components.

## Requirements

- Node.js 20 or newer
- npm

## Run Locally

```bash
npm install
npm run dev
```

Vite will print the local URL, usually `http://localhost:5173/`.

## Useful Scripts

```bash
npm run dev      # start the development server
npm run build    # type-check and create a production build
npm run preview  # preview the production build locally
npm run lint     # run ESLint
```

## Contact Form

The contact form posts to `/api/send-email`. For production email sending, configure the deployment environment with the variables expected by `api/send-email.js`.
