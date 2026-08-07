const fs = require('node:fs');

const h = fs.readFileSync('dist/mortgage-payment/florida/index.html', 'utf-8');
console.log('LENGTH:', h.length);
console.log('has id="root":', h.includes('id="root"'));
console.log('title tag count:', (h.match(/<title/g) || []).length);
console.log('h1 tag count:', (h.match(/<h1/g) || []).length);
console.log('application/ld+json count:', (h.match(/application\/ld\+json/g) || []).length);

// Show everything between <body ...> and </body>
const bodyStart = h.indexOf('<body');
const bodyEnd = h.indexOf('</body>');
console.log('\n--- BODY CONTENT (first 3000 chars) ---');
console.log(h.slice(bodyStart, bodyStart + 3000));
