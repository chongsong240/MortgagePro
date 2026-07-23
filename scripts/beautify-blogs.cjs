/**
 * Script to add BlogComponents imports to blog articles
 */
const fs = require('fs');
const path = require('path');

const blogDir = path.resolve(__dirname, '..', 'src', 'components', 'blog');

const IMPORT_LINE = `import { TipBox, WarningBox, InfoBox, KeyTakeaway, ComparisonTable, CalculatorCTA, StatHighlight, ExampleBox, Checklist } from './BlogComponents';`;

const filesToUpdate = [
  'ThirtyVsFifteenYear.tsx',
  'PayOffEarly.tsx',
  'WhyMostlyInterest.tsx',
  'WhenShouldYouRefinance.tsx',
  'ClosingCostsExplained.tsx',
  'WhatIsPmi.tsx',
  'FhaVsConventional.tsx',
  'CreditScoreNeeded.tsx',
  'HowMuchHouseCanIAfford.tsx',
  'FivePercentDown.tsx',
  'MonthlyPaymentBreakdown.tsx',
  'BiWeeklyPayments.tsx',
  'AmortizationSchedule.tsx',
  'ArmVsFixedArm.tsx',
  'IsBuyingWorthIt2026.tsx',
];

const SEARCH_IMPORT = `import { ArrowRight, DollarSign, Percent, Calendar, Home, PieChart, BookOpen, Calculator } from 'lucide-react';`;

console.log('Adding BlogComponents imports to blog articles...');
let successCount = 0;

for (const fileName of filesToUpdate) {
  const filePath = path.join(blogDir, fileName);
  if (!fs.existsSync(filePath)) {
    console.log(`  ❌ File not found: ${fileName}`);
    continue;
  }

  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Skip if already has import from BlogComponents
  if (content.includes("from './BlogComponents'")) {
    console.log(`  ⏭️  Already has import: ${fileName}`);
    continue;
  }

  // Insert import after the lucide-react import
  content = content.replace(SEARCH_IMPORT, SEARCH_IMPORT + '\n' + IMPORT_LINE);
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`  ✅ Added import to: ${fileName}`);
  successCount++;
}

console.log(`\n✅ Done! Updated ${successCount} files.`);
