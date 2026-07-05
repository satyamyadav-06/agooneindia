# Agro One India — Website

A modern, SEO-friendly, fully responsive marketing website for **Agro One**, an agricultural
machinery manufacturer based in Indore, Madhya Pradesh.

## Tech Stack

- **React 18** + **Vite 5** — fast, modern build tooling
- **Tailwind CSS 3** — utility-first styling with a custom brand theme
- **React Router 6** — client-side routing (Home, About, Products, Services, Videos, Contact)
- **Framer Motion** — smooth scroll & page animations
- **react-helmet-async** — per-page SEO meta tags
- **lucide-react** — clean, lightweight icons

## Pages

| Route | Page |
|-------|------|
| `/` | Home (hero, stats, about teaser, products, why-us, services, testimonials) |
| `/about` | About Us (company profile, mission, vision, strengths) |
| `/products` | Products (filterable grid of all machinery) |
| `/services` | Services (offerings + how-it-works process) |
| `/videos` | Videos (lazy-loaded YouTube demos) |
| `/contact` | Contact (enquiry form → WhatsApp, map, details) |

## Getting Started

```bash
npm install      # install dependencies
npm run dev      # start dev server at http://localhost:5173
npm run build    # production build → /dist
npm run preview  # preview the production build
```

## Customising Content

Everything is data-driven — no need to touch the components:

- **Company info** (phone, email, address, social links): `src/data/site.js`
- **Products** (name, image, features, category): `src/data/products.js`
- **Services / Why-us / Testimonials / Stats**: `src/data/site.js`
- **YouTube videos**: update the `videos` array in `src/data/site.js` with your real
  video IDs (the part after `v=` in a YouTube URL).
- **Product images**: currently use Unsplash placeholders. Drop your real photos in
  `public/images/` and point each product's `image` field to `/images/your-photo.jpg`.

## Deploying

Run `npm run build` and upload the contents of `dist/` to your host.

- The included `public/.htaccess` handles SPA routing on **Apache / XAMPP**.
- The `public/_redirects` file handles SPA routing on **Netlify**.
- `robots.txt` and `sitemap.xml` are included for SEO.

> Note: the contact form forwards enquiries to WhatsApp (no backend required). To collect
> emails instead, wire the form in `src/pages/Contact.jsx` to your API or a service like
> Formspree / EmailJS.
