/**
 * Script to add BlogComponents imports and key visual enhancements 
 * to each blog article that doesn't already have them.
 * 
 * Usage: npx ts-node scripts/beautify-blogs.ts
 */

import * as fs from 'fs';
import * as path from 'path';

const blogDir = path.resolve(__dirname, '../src/components/blog');

const IMPORT_LINE = `import { TipBox, WarningBox, InfoBox, KeyTakeaway, ComparisonTable, CalculatorCTA, StatHighlight, ExampleBox, Checklist } from './BlogComponents';`;

const filesToUpdate: { file: string; insertAfter: string; addBeforeEnd?: string }[] = [
  // === ThirtyVsFifteenYear - already has some color boxes, add import + info highlights ===
  {
    file: 'ThirtyVsFifteenYear.tsx',
    insertAfter: `import { ArrowRight, DollarSign, Percent, Calendar, Home, PieChart, BookOpen, Calculator } from 'lucide-react';`,
  },
  // === PayOffEarly - already has color ===
  {
    file: 'PayOffEarly.tsx',
    insertAfter: `import { ArrowRight, DollarSign, Percent, Calendar, Home, PieChart, BookOpen, Calculator } from 'lucide-react';`,
  },
  // === WhyMostlyInterest ===
  {
    file: 'WhyMostlyInterest.tsx',
    insertAfter: `import { ArrowRight, DollarSign, Percent, Calendar, Home, PieChart, BookOpen, Calculator } from 'lucide-react';`,
  },
  // === WhenShouldYouRefinance ===
  {
    file: 'WhenShouldYouRefinance.tsx',
    insertAfter: `import { ArrowRight, DollarSign, Percent, Calendar, Home, PieChart, BookOpen, Calculator } from 'lucide-react';`,
  },
  // === ClosingCostsExplained - already has some color ===
  {
    file: 'ClosingCostsExplained.tsx',
    insertAfter: `import { ArrowRight, DollarSign, Percent, Calendar, Home, PieChart, BookOpen, Calculator } from 'lucide-react';`,
  },
  // === Already color-rich articles - just add import ===
  {
    file: 'WhatIsPmi.tsx',
    insertAfter: `import { ArrowRight, DollarSign, Percent, Calendar, Home, PieChart, BookOpen, Calculator } from 'lucide-react';`,
  },
  {
    file: 'FhaVsConventional.tsx',
    insertAfter: `import { ArrowRight, DollarSign, Percent, Calendar, Home, PieChart, BookOpen, Calculator } from 'lucide-react';`,
  },
  {
    file: 'CreditScoreNeeded.tsx',
    insertAfter: `import { ArrowRight, DollarSign, Percent, Calendar, Home, PieChart, BookOpen, Calculator } from 'lucide-react';`,
  },
  {
    file: 'HowMuchHouseCanIAfford.tsx',
    insertAfter: `import { ArrowRight, DollarSign, Percent, Calendar, Home, PieChart, BookOpen, Calculator } from 'lucide-react';`,
  },
  {
    file: 'FivePercentDown.tsx',
    insertAfter: `import { ArrowRight, DollarSign, Percent, Calendar, Home, PieChart, BookOpen, Calculator } from 'lucide-react';`,
  },
  {
    file: 'MonthlyPaymentBreakdown.tsx',
    insertAfter: `import { ArrowRight, DollarSign, Percent, Calendar, Home, PieChart, BookOpen, Calculator } from 'lucide-react';`,
  },
  {
    file: 'BiWeeklyPayments.tsx',
    insertAfter: `import { ArrowRight, DollarSign, Percent, Calendar, Home, PieChart, BookOpen, Calculator } from 'lucide-react';`,
  },
  {
    file: 'AmortizationSchedule.tsx',
    insertAfter: `import { ArrowRight, DollarSign, Percent, Calendar, Home, PieChart, BookOpen, Calculator } from 'lucide-react';`,
  },
  {
    file: 'ArmVsFixedArm.tsx',
    insertAfter: `import { ArrowRight, DollarSign, Percent, Calendar, Home, PieChart, BookOpen, Calculator } from 'lucide-react';`,
  },
  {
    file: 'IsBuyingWorthIt2026.tsx',
    insertAfter: `import { ArrowRight, DollarSign, Percent, Calendar, Home, PieChart, BookOpen, Calculator } from 'lucide-react';`,
  },
  {
    file: 'IncomeNeeded.tsx',
    insertAfter: `import { ArrowRight, DollarSign, Percent, Calendar, Home, PieChart, BookOpen, Calculator } from 'lucide-react';`,
  },
];

function addImport(filePath: string, afterLine: string) {
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Skip if already has import
  if (content.includes("from './BlogComponents'")) {
    console.log(`  ⏭️  Already has import: ${path.basename(filePath)}`);
    return content;
  }

  const lines = content.split('\n');
  let insertIdx = -1;
  
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes(afterLine)) {
      insertIdx = i + 1;
      break;
    }
  }

  if (insertIdx === -1) {
    console.log(`  ❌ Could not find insert point in: ${path.basename(filePath)}`);
    return content;
  }

  lines.splice(insertIdx, 0, IMPORT_LINE);
  const newContent = lines.join('\n');
  fs.writeFileSync(filePath, newContent, 'utf-8');
  console.log(`  ✅ Added import to: ${path.basename(filePath)}`);
  return newContent;
}

console.log('Adding BlogComponents imports to blog articles...');
let successCount = 0;

for (const fileInfo of filesToUpdate) {
  const filePath = path.join(blogDir, fileInfo.file);
  if (!fs.existsSync(filePath)) {
    console.log(`  ❌ File not found: ${fileInfo.file}`);
    continue;
  }
  addImport(filePath, fileInfo.insertAfter);
  successCount++;
}

console.log(`\n✅ Done! Updated ${successCount} files.`);
