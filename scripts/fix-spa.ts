import * as fs from 'fs';
const content = fs.readFileSync('d:/MortgagePro/scripts/generate-pages.ts', 'utf-8');
const search = `    { path: 'blog/closing-costs-explained', title: 'Closing Costs Explained: The Money You Need Beyond the Down Payment | MortgagePro', description: 'My neighbors Jen and Mike thought they had the numbers figured out. Then a week before closing, they found out they needed nearly $12,000 more than they\\'d planned.', priority: 0.8 },`;
const insert = `    { path: 'blog/arm-vs-fixed-arm', title: 'ARM vs Fixed Mortgage: Which One Makes Sense Right Now? | MortgagePro', description: 'My friend Dave had two loan estimates on the same house. His agent told him fixed. His brother-in-law said ARM. Here\\'s how he decided in five minutes.', priority: 0.8 },`;
const result = content.replace(search, search + '\n    ' + insert);
fs.writeFileSync('d:/MortgagePro/scripts/generate-pages.ts', result, 'utf-8');
console.log('DONE');
