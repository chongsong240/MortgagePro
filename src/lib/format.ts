/**
 * Shared money formatting for every calculator.
 *
 * WHY THIS FILE EXISTS
 * --------------------
 * Every calculator used to declare its own `new Intl.NumberFormat(...,
 * maximumFractionDigits: 0)` — twelve copies of the same rule. Beyond the
 * duplication, rounding each line independently made the visible columns
 * disagree: on /mortgage-calculator the four payment components added up to $1
 * less than the total roughly one time in six, because the total was rounded
 * from the exact sum while each component was rounded on its own.
 *
 * Two exports fix that:
 *   - `formatUsd` keeps whole-dollar display (readability: nobody budgets to the
 *     cent, and false precision invites distrust).
 *   - `alignUsdParts` rounds a set of parts so that they add up EXACTLY to the
 *     rounded total. The largest part absorbs the residual (at most $1 in
 *     practice), so the one number that is nudged is the one nobody re-derives,
 *     while the column every visitor actually adds holds together.
 */

const USD_0 = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

/** Whole-dollar USD, the sitewide calculator convention. */
export function formatUsd(value: number): string {
  return USD_0.format(value);
}

/**
 * The same rounding the formatter applies (half away from zero), returned as an
 * integer so callers can add displayed values without re-parsing " $1,234 ".
 */
export function roundUsd(value: number): number {
  return Math.sign(value) * Math.round(Math.abs(value));
}

/**
 * Rounds `parts` to whole dollars so that they sum to `total`'s rounded value
 * (or to the rounded sum of the parts when `total` is omitted).
 *
 * The residual is applied to the part with the largest magnitude: a $1 shift on
 * the biggest slice is invisible (0.04% of a $2,200 P&I) whereas the same shift
 * on a $125 line looks like an error.
 */
export function alignUsdParts(parts: readonly number[], total?: number): number[] {
  const rounded = parts.map(roundUsd);
  if (parts.length === 0) return rounded;

  const target = roundUsd(total ?? parts.reduce((sum, part) => sum + part, 0));
  const diff = target - rounded.reduce((sum, part) => sum + part, 0);
  if (diff === 0) return rounded;

  let largest = 0;
  for (let i = 1; i < parts.length; i++) {
    if (Math.abs(parts[i]) > Math.abs(parts[largest])) largest = i;
  }
  rounded[largest] += diff;
  return rounded;
}
