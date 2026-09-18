<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/acf0dcb5-96cd-494b-9893-e0e0ab2309f3

## Maintaining `src/data/state_data.json` (quarterly)

Every state page, the `/mortgage-payment` hub and the calculators read housing,
tax, closing-cost and insurance figures from `src/data/state_data.json`.
The housing column is refreshed from Zillow's public CSV:

```bash
npm run refresh:data          # download + print a per-state diff (dry run)
npm run refresh:data:write    # apply the median_home_price numbers
npm run refresh:data:check    # CI/cron: exit code 2 when the data is stale
```

What the script guarantees:

* pulls `State_median_sale_price_uc_sfrcondo_month.csv` (median sale price, raw,
  all homes, monthly) from `files.zillowstatic.com` — no API key, no scraping;
* picks the newest month that is complete for all 51 regions and caches the CSV
  under `data/zillow/` (gitignored — a local audit trail, not a site asset);
* rewrites **only** `median_home_price`, one state per line, and aborts if a line
  no longer matches the expected shape or any other field drifted;
* refuses to write when the CSV is not the median-sale-price series (wrong file
  name, history before 2008-02, more than 300 monthly columns — the sales file
  has ~225) or when the change looks
  implausible (>25% for a state, >15% for the 51-state mean) — override with
  `--force` once a human has checked;
* prints the citation labels that must follow the new vintage, so
  `scripts/generate-pages.ts`, `src/App.tsx` and the methodology page never drift
  from the data.

Insurance premiums are not machine-readable (NAIC publishes a PDF), so they are
passed in explicitly:

```bash
node scripts/refresh-state-data.mjs --insurance-file data/naic-2022.json --write
# {"vintage":"NAIC 2022","values":{"AL":1748,"AK":1129, ...}}  # all 51 states
```

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
