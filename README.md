# Milwaukee Water Damage Restoration

Marketing website for **Milwaukee Water Damage Restoration** — water extraction, drying, water-related mold remediation, and rebuilding in **Milwaukee County** and **Waukesha County**.

- Canonical site: https://milwaukeewaterdamagerestoration.org
- Office: 205 Bishops Way #4, Brookfield, WI 53005
- Phone: not published yet (`Phone coming soon`). Use the estimate form.

This project is a Next.js App Router site modeled on the section rhythm of a professional restoration marketing page (hero, trust chips, water explainer, services, values, reviews, gallery, service area, footer). Scope is water, mold, and rebuild only.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Server Action estimate form with a demo thank-you page

## Local run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Pages

| Path | Purpose |
| --- | --- |
| `/` | Homepage (Milwaukee / Greater Milwaukee H1) |
| `/services` | Services overview |
| `/services/water-damage` | Extraction, drying, moisture tracking, removal |
| `/services/mold-remediation` | Water-related mold work |
| `/services/rebuilding` | Reconstruction after water mitigation |
| `/about` | Company and core values |
| `/service-areas` | Milwaukee County and Waukesha County |
| `/contact` | Estimate form |
| `/contact/thank-you` | Demo confirmation |
| `/privacy` | Privacy policy |

`app/robots.ts` and `app/sitemap.ts` use `metadataBase` / canonical host `https://milwaukeewaterdamagerestoration.org`.

## Placeholder images

Files in `public/images/` use the ChatGPT-approved filenames so New Bot can drop in final JPGs without code changes:

- `hero.jpg`
- `water-extraction.jpg`
- `drying-equipment.jpg`
- `moisture-inspection.jpg`
- `mold-remediation.jpg`
- `rebuild.jpg`
- `milwaukee-skyline.jpg`
- `waukesha-street.jpg`
- `gallery-1.jpg`
- `gallery-2.jpg`
- `gallery-3.jpg`
- `gallery-4.jpg`

Regenerate labeled placeholders (requires Python + Pillow):

```bash
python3 scripts/generate-placeholders.py
```

## Notes

- Do not invent a phone number or email.
- Do not add cities outside Milwaukee County and Waukesha County.
- Reviews are labeled placeholders — no fabricated Google ratings.
