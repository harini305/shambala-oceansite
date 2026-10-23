# Shambala Oceanside Retreat: frontend redesign

Next.js (App Router, JavaScript), React, GSAP + ScrollTrigger, CSS Modules. Fonts: Playfair Display (headings) and Montserrat (everything else) via `next/font`.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm run start
```

## Routes

| Route | Content | Replaces (301 redirects in `next.config.mjs`) |
|---|---|---|
| `/` | Home, origin story | `index.html`, `vission-and-mission.html`, `team.html` |
| `/rooms` | Buildings, grounds, house rules, booking | `roomsNEW.html`, `rooms.html`, `rates-availabilities.html`, galleries |
| `/retreats` | Personal retreats, groups, long stays | `wellness.html`, `groupbooking-info.html`, `LongStay/shambala.html` |
| `/wellness` | Spa, yoga, excursions | `spa.html`, `yoga.html`, `Activites.html` |
| `/contact` | Contact, directions, travel documents | `contact.html`, `map.html` |
| `/book` | Booking options (WeTravel for rooms and retreats; office for groups and long stays) | (new) |

## Content and assets

- Source of truth: `docs/source-audit/`. Facts and links live in `src/data/site.js`.
- Images are derived from `docs/source-audit/original-assets/` (never modified) by `npm run images` (`scripts/build-images.py`, needs Python + Pillow): WebP at 480/800/1200/1600 px plus one 800 px JPEG fallback each, only for images the pages use. Many originals are collages or carry baked-in text, so each derivative is a crop of a single photo; `src/data/images.json` records the source file and crop box for every image.
- Request budget: links do not prefetch (`src/components/Link.jsx`), CSS is inlined, audio and YouTube load only on click, and `/images`, `/docs`, `/media` are browser-cached for 30 days (`next.config.mjs`). `.vercelignore` keeps `docs/` and `scripts/` out of deployments.
- PDFs and the MP3 voice message are copied to `public/docs/` and `public/media/` with web-safe names.
- Not shown on purpose, pending owner answers (audit 08 §A): room, spa, flower-bath, yoga, long-stay and group prices; capacity figures; cancellation wording; health entry requirements. Booking details point to WeTravel or the office.
