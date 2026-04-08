# Cycle Wellness App (Vercel-ready)

This is your uploaded single-file React app converted into a **Next.js + Tailwind CSS** project that you can run locally and deploy to **Vercel**.

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Deploy to Vercel

1. Upload this folder to a GitHub repo.
2. Import the repo into Vercel.
3. Vercel should detect **Next.js** automatically.
4. Deploy.

## Main files

- `components/CycleWellnessPage.jsx` — your original app component
- `app/page.jsx` — home page entry
- `app/layout.jsx` — root layout
- `app/globals.css` — global styles + Tailwind import
- `postcss.config.mjs` — Tailwind PostCSS config

## Notes

- I added the `"use client"` directive because your component uses hooks and `localStorage`.
- The Tailwind classes from your original file are preserved so you can keep editing the UI easily.
- The external placeholder links like `https://yourapp.com/...` are still placeholders and can be replaced later.
