# TechPartners

Public site for TechPartners.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Content

Page copy lives in `src/content/site.ts`.

## Contact form

Copy `.env.example` to `.env.local` and set:

- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL`
- `CONTACT_FROM_EMAIL` (optional; Resend default works for testing)
- `NEXT_PUBLIC_SITE_URL` (your live domain)

Without those keys, the form validates but returns a clear error and asks the visitor to call.

## Build

```bash
npm run build
npm start
```
