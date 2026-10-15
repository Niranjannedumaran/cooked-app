# COOKED public website

A responsive React + Vite + TypeScript front-end for the COOKED public website. It uses the supplied COOKED logo and is intentionally built as a pre-launch website: no download URL, contact route, product screenshot, launch date, or backend connection is fabricated.

## Run locally

1. Install Node.js 20+ and pnpm (or use the bundled runtime available in Codex).
2. Run `pnpm install`.
3. Run `pnpm dev` and open the shown local address.
4. Run `pnpm build` before deployment.

## Waitlist configuration

The current form validates email in the browser but does **not** submit data. After the separate website-only waitlist service is approved, add a documented public endpoint to `.env` using the variable shown in `.env.example`, then implement the verified submission flow. Do not add service-role keys, Android-app credentials, or a public waitlist read API.

## Content and routes

Content is intentionally local in `src/App.tsx` for this first static implementation. The app includes Home, Product, How It Works, Resources + article template, FAQ, Help, Privacy, Contact, Updates, Download, About, Terms, and a 404 state. Update claims only after they are verified against the Android product and approved support/legal information.

## Deployment checklist

- Configure a verified contact route and approved privacy/terms copy.
- Add the official Android URL only after it is live and tested.
- Verify waitlist permissions and public INSERT-only access if a backend is added.
- Check mobile, keyboard, and reduced-motion behaviour before publishing.
