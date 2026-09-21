# زَروان — Zarvan Global Trade

Persian (RTL) export-catalog website. React 18 + TypeScript + Vite + Tailwind CSS 3 + React Router 6.
The hero image uses a WebGL chromatic-aberration component (Aceternity `chromatic-image`).

## Requirements

Node.js 18.18 or newer (`.nvmrc` pins 20).

## Install and run

```bash
npm install
npm run dev        # http://localhost:5173
```

## Build

```bash
npm run build      # type-checks, then writes static files to dist/
npm run preview    # serve dist/ locally
```

## Deploy

The output in `dist/` is a static single-page app. Deep links such as
`/products/saffron-sargol-negin` need a rewrite of all paths to `/index.html`.
That rewrite is already configured for both hosts below.

- **Netlify:** `netlify.toml` (build command, publish dir, SPA redirect). Connect the repo, or run `npx netlify deploy --prod --dir=dist`.
- **Vercel:** `vercel.json` (build command, output dir, SPA rewrite). Connect the repo, or run `npx vercel --prod`.
- **Any other static host:** upload `dist/` and add an "all routes → /index.html" fallback.

## Project layout

```
src/
  components/ui/     button, input, badge, chromatic-image (WebGL)
  components/site/   Navbar, Footer, ProductCard, SectionHeading
  data/catalog.ts    categories and products (edit this to change content)
  pages/             Home, Products, ProductDetail, Categories, About, Contact
  lib/utils.ts       cn() class merger and fa() Persian-digit helper
```

## Notes

- Product and category photos are `picsum.photos` placeholders (random, not topical). Replace the `img()` helper in `src/data/catalog.ts` with real product photography.
- The hero image is served from `assets.aceternity.com`. If you replace it, host the new image with `Access-Control-Allow-Origin` headers; otherwise the WebGL canvas stays hidden and the plain `<img>` fallback shows.
- The contact form is a demo: nothing is sent to any server.
- Body copy, phone numbers, and company details are placeholders.
