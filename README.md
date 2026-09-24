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

## Maintaining `src/data/county_data.json` (annual, with each ACS release)

On top of its statewide numbers, every generated state page prints the largest
county's owner-reported figures (median home value, median real estate taxes
paid, median household income) from the Census Bureau's American Community
Survey:

```bash
npm run refresh:county          # one nationwide Census request + a per-state table
npm run refresh:county:write    # apply the 51 rows
npm run refresh:county:check    # CI/cron: exit code 2 when a newer release exists
```

What the script guarantees:

* the release year is pinned (`--year`, default 2024 = the 2020–2024 vintage) and
  the script asks for exactly that year — when the Census Bureau ships the next
  release, pass `--year 2025` to pull 2021–2025 instead of letting a new vintage
  reach the site unnoticed;
* one request to `api.census.gov/data/<year>/acs/acs5` for **every county in the
  country** — a state-level query would still look plausible, so the row count is
  the wrong-geography guard (fewer than 2500 rows blocks a write);
* the API key is optional and read from `CENSUS_API_KEY` only — never stored in
  the repo; raw payloads are cached under `data/census/` (gitignored, a local
  audit trail), and `--offline` / `--refresh` / `--file <json>` cover sandboxes;
* picks the most populous county — or county equivalent, e.g. the District of
  Columbia — per state, and derives the county effective tax rate as median real
  estate taxes paid ÷ median home value;
* treats ACS "estimate not available" sentinels as missing, range-checks every
  measure, and refuses to write when a county's home value would move more than
  25% or when a state's chosen county changes (`--force` overrides once a human
  has read the diff);
* keeps the citation in one place: the card text and the ACS entry on
  `/calculator-methodology` both follow `_meta` in this file, and the value is
  never compared with the Zillow sale price printed on the same page.

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
