/**
 * ============================================================
 * Build-time prerender driver for MortgagePro.
 *
 * Why this exists:
 *   The prerender script (scripts/prerender.tsx) imports the full
 *   React app, which pulls in `react-helmet-async`. When run through
 *   `tsx`, Node v24's ESM loader fails with:
 *
 *     SyntaxError: The requested module 'react-helmet-async' does not
 *     provide an export named 'Helmet'
 *
 *   ...because tsx's CJS->ESM interop can't statically detect the
 *   named exports. Running the script directly with plain `node`
 *   would also fail on the .tsx syntax.
 *
 *   Fix: bundle scripts/prerender.tsx + the entire app with esbuild
 *   (already a Vite dependency) into ONE flat CommonJS file, then run
 *   that with node. esbuild resolves all CJS/ESM interop itself, so
 *   the named-export detection problem disappears.
 *
 * Usage (after `vite build`, dist must exist):
 *   node scripts/build-prerender.mjs
 * ============================================================
 */
import { build } from 'esbuild';
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT_DIR = path.join(ROOT, 'node_modules', '.cache', 'mortgagepro');
const OUT_FILE = path.join(OUT_DIR, 'prerender.cjs');

fs.mkdirSync(OUT_DIR, { recursive: true });

console.log('📦 Bundling prerender script with esbuild...');

await build({
  entryPoints: [path.join(ROOT, 'scripts', 'prerender.tsx')],
  outfile: OUT_FILE,
  bundle: true,
  platform: 'node',
  format: 'cjs',
  target: 'node20',
  jsx: 'automatic',
  logLevel: 'info',
  // Match the `@/* -> ./*` alias from tsconfig / vite.config.
  alias: { '@': ROOT },
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
});

console.log(`🚀 Running prerender bundle (${OUT_FILE})...\n`);

const run = spawnSync(process.execPath, [OUT_FILE], { stdio: 'inherit' });
if (run.status !== 0) {
  process.exit(run.status ?? 1);
}
