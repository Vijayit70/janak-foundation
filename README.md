# Janak Foundation — React SPA

This is the React (Vite) rebuild of the Janak Foundation NGO website, converted
from the original static HTML/CSS/Bootstrap site, with a full visual redesign.

## Design refresh (v2)

- **New color palette**: deep forest green, marigold gold, and warm clay —
  drawn from the site's own golden-hour photography (marigolds are also a
  recurring symbol in Indian community/festival life, tying into the org's
  work)
- **New typography**: Fraunces (serif, for headings) + Work Sans (body)
- **Hover animations everywhere**: cards lift and glow, buttons sweep-fill
  or lift with shadow, nav links get an animated gold underline, images
  zoom slightly on hover, social icons lift
- **Scroll-reveal animation**: sections gently fade + slide into view as
  you scroll (respects `prefers-reduced-motion` for accessibility)
- **"Eyebrow" labels** above headings for a more editorial, professional
  layout rhythm
- **Organic wave divider** under the homepage hero
- Every page now has a proper hero banner (About and Causes previously had
  none)
- Footer bottom bar now reads "© 2026 Tech Vijay. All rights reserved."
- Images are all your own real site photos — no external stock images were
  hotlinked, to avoid any copyright/licensing risk on a live public site

## What changed from the original static site (v1)

- 7 static HTML pages → 7 React route components (`/`, `/about`, `/causes`,
  `/work`, `/volunteer`, `/contact`, `/donate`)
- Repeated navbar/footer HTML → single `Navbar` and `Footer` components
  used everywhere
- Client-side `fetch()`-based includes → React Router
- Volunteer & Contact forms → controlled React forms, still using EmailJS
  to send messages, but with credentials moved out of the source code and
  into a `.env` file
- Right-click / DevTools-blocking behavior — kept, exactly as before


## 1. Install dependencies

```bash
npm install
```

## 2. Set up EmailJS credentials

A `.env` file is already included with your original EmailJS keys, so the
Volunteer and Contact forms will work immediately. If you ever need to
change them (e.g. new EmailJS account), edit `.env`:

```
VITE_EMAILJS_PUBLIC_KEY=...
VITE_EMAILJS_CONTACT_SERVICE_ID=...
VITE_EMAILJS_CONTACT_TEMPLATE_ID=...
VITE_EMAILJS_VOLUNTEER_SERVICE_ID=...
VITE_EMAILJS_VOLUNTEER_TEMPLATE_ID=...
```

`.env` is git-ignored, so it will never be committed to GitHub — this is the
fix for the old site's problem of having these keys sitting in plain view
in the JS files.

## 3. Run it locally

```bash
npm run dev
```

Open the URL it prints (usually `http://localhost:5173`).

## 4. Build for production

```bash
npm run build
```

This outputs a production-ready build into the `dist/` folder.

## 5. Deploy (free options)

**Vercel (recommended, easiest):**
1. Push this project to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → "Add New Project" → import the repo
3. Vercel auto-detects Vite. Click Deploy.
4. Add your `.env` variables under Project Settings → Environment Variables
   (same names as in `.env`)

**Netlify:**
1. Push to GitHub
2. [netlify.com](https://netlify.com) → "Add new site" → import repo
3. Build command: `npm run build`, publish directory: `dist`
4. Add the same environment variables under Site Settings → Environment Variables

Either way you'll get a free `.vercel.app` / `.netlify.app` URL, and can
attach a custom domain later (e.g. `janakfoundation.org`) from the same
dashboard.

## Project structure

```
src/
  components/
    Navbar.jsx        Site navigation, active-link highlighting
    Footer.jsx         Address, quick links, socials, copyright bar
    CauseCard.jsx       Reusable icon+title+text card
  hooks/
    useDisableInspect.js  Right-click / DevTools blocking (site-wide)
  pages/
    Home.jsx
    About.jsx
    Causes.jsx
    Work.jsx
    Volunteer.jsx
    Contact.jsx
    Donate.jsx
  App.jsx             Routes + scroll-to-top/hash handling
  main.jsx            React root, Router, Bootstrap imports
  index.css            All site styling
public/
  images/              All site images
```

## Notes

- Bank details on the Donate page (`src/pages/Donate.jsx`) are in the same
  spot as before — plain text, meant to be publicly visible for donors.
- To add a new page: create a component in `src/pages/`, add a `<Route>`
  in `App.jsx`, and add a link in `Navbar.jsx` and `Footer.jsx`.
