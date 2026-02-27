# ⚽ Sharps Intelligence — Website

Multi-league football betting analysis website, automatically updated by the [EPL Sharps Bot](../EPL%20Sharps%20Bot/epl-sharps-bot).

Built with [Astro](https://astro.build) + Tailwind CSS. Hosted on GitHub Pages.

## Setup

```bash
npm install
npm run dev        # localhost:4321
npm run build      # production build → dist/
npm run preview    # preview production build
```

## Adding Reports

Reports are stored as JSON files in `src/data/reports/[league]/`. The bot commits new files here automatically on each run.

### Report format

```json
{
  "id": "2026-02-28-friday",
  "date": "2026-02-28",
  "type": "friday",
  "league": "epl",
  "title": "EPL Sharps Brief — February 28, 2026",
  "summary": "Short teaser shown on cards.",
  "htmlContent": "<h2>Section</h2><p>Content...</p>"
}
```

### Adding a new league

1. Add an entry to `src/data/leagues.ts` with `active: true`
2. Create the folder `src/data/reports/[slug]/`
3. Start adding report JSON files

## Deployment

Pushes to `main` auto-deploy via GitHub Actions → GitHub Pages.

Update `site` and `base` in `astro.config.mjs` with your GitHub username:
```js
site: 'https://YOUR_USERNAME.github.io',
base: '/epl-sharps-website',
```
