const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'App.tsx');
let c = fs.readFileSync(filePath, 'utf8');

// Check the exact pattern around WHY US
const whyUsIdx = c.indexOf('WHY US');
console.log('Context around WHY US:', JSON.stringify(c.substring(whyUsIdx - 20, whyUsIdx + 40)));

// Use a regex to find the closing of the HERO section before WHY US
// Pattern: </section> followed by newlines, then WHY US comment
const heroCloseRegex = /<\/section>\s*\n\s*\n\s*\{\/\* ======+ WHY US =======+ \*\/\}/;
const match = heroCloseRegex.exec(c);
if (match) {
  const matchStr = match[0];
  console.log('Matched hero section end:', JSON.stringify(matchStr.substring(0, 50)));
  
  const startHereSection = `</section>

      {/* ====== START HERE — First-Time Buyer Path ====== */}
      <section className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-8 md:p-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">NEW HOME BUYER?</span>
            <span className="text-xs text-muted-foreground">Start here</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-4">
            How Much House Can You Afford? A Simple 3-Step Plan
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed max-w-3xl">
            Not sure where to start? Follow this path designed for first-time buyers — from understanding your budget to picking the right mortgage. Each step links to a calculator and an in-depth guide.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <Link to="/affordability-calculator" className="flex items-start gap-3 bg-background/80 backdrop-blur-sm rounded-xl p-4 border border-border hover:border-primary/40 transition-all group">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold shrink-0 mt-0.5">1</div>
              <div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">Find Your Budget</h3>
                <p className="text-sm text-muted-foreground mt-1">Use our Affordability Calculator to see how much home you can afford based on income, debt, and down payment.</p>
              </div>
            </Link>
            <Link to="/mortgage-calculator" className="flex items-start gap-3 bg-background/80 backdrop-blur-sm rounded-xl p-4 border border-border hover:border-primary/40 transition-all group">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold shrink-0 mt-0.5">2</div>
              <div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">Estimate Your Payment</h3>
                <p className="text-sm text-muted-foreground mt-1">Adjust home price, rate, and down payment to see your monthly PITI with real-time sliders.</p>
              </div>
            </Link>
            <Link to="/blog/how-much-house-can-i-afford" className="flex items-start gap-3 bg-background/80 backdrop-blur-sm rounded-xl p-4 border border-border hover:border-primary/40 transition-all group">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold shrink-0 mt-0.5">3</div>
              <div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">Read the Guide</h3>
                <p className="text-sm text-muted-foreground mt-1">Step-by-step guide to the 28/36 rule, closing costs, down payment strategies, and hidden expenses.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ========== WHY US ========== */}`;

  c = c.replace(matchStr, startHereSection);
  console.log('✓ Start Here section added');
} else {
  console.log('✗ Could not match hero section end');
}

// Same approach for LATEST ARTICLES
const articlesRegex = /<\/section>\s*\n\s*\n\s*\{\/\* ======+ LATEST ARTICLES =======+ \*\/\}/;
const articlesMatch = articlesRegex.exec(c);
if (articlesMatch) {
  const matchStr = articlesMatch[0];
  console.log('Matched LATEST ARTICLES section end:', JSON.stringify(matchStr.substring(0, 50)));
  
  const priceSection = `</section>

      {/* ========== MORTGAGE PAYMENTS BY PRICE ========== */}
      <section className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-2 text-center">Mortgage Payments by Home Price</h2>
        <p className="text-muted-foreground text-center mb-8">
          See how home price affects your monthly payment. Based on 20% down, 6.5% APR, 30-year fixed.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link to="/mortgage-calculator" className="bg-card border border-border rounded-xl p-5 hover:shadow-md hover:border-primary/30 transition-all group">
            <div className="text-2xl mb-2">$</div>
            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">$150,000 Home</h3>
            <p className="text-sm text-muted-foreground mt-1">~$760/mo P&I · ~$950/mo PITI</p>
            <p className="text-xs text-muted-foreground mt-1">A good entry-level price point in many markets. Monthly costs stay manageable with room for taxes and insurance.</p>
          </Link>
          <Link to="/mortgage-calculator" className="bg-card border border-border rounded-xl p-5 hover:shadow-md hover:border-primary/30 transition-all group">
            <div className="text-2xl mb-2">$</div>
            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">$300,000 Home</h3>
            <p className="text-sm text-muted-foreground mt-1">~$1,520/mo P&I · ~$1,900/mo PITI</p>
            <p className="text-xs text-muted-foreground mt-1">The median home price in many U.S. metro areas. A 10% down buyer would add ~$175/mo for PMI.</p>
          </Link>
          <Link to="/mortgage-calculator" className="bg-card border border-border rounded-xl p-5 hover:shadow-md hover:border-primary/30 transition-all group">
            <div className="text-2xl mb-2">$</div>
            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">$500,000 Home</h3>
            <p className="text-sm text-muted-foreground mt-1">~$2,530/mo P&I · ~$3,160/mo PITI</p>
            <p className="text-xs text-muted-foreground mt-1">A common price in coastal markets. A buyer with $100K down at 7% rate could pay ~$2,660/mo P&I.</p>
          </Link>
        </div>
        <div className="text-center mt-6">
          <Link to="/mortgage-calculator" className="text-sm text-primary hover:underline font-medium">
            Calculate your exact payment with our interactive calculator →
          </Link>
        </div>
      </section>

      {/* ========== LATEST ARTICLES ========== */}`;

  c = c.replace(matchStr, priceSection);
  console.log('✓ Mortgage Payments by Price section added');
} else {
  console.log('✗ Could not match LATEST ARTICLES section end');
}

fs.writeFileSync(filePath, c, 'utf8');
console.log('✓ File saved successfully');

// Verify
const verify = fs.readFileSync(filePath, 'utf8');
console.log('Start Here:', verify.includes('START HERE'));
console.log('Price:', verify.includes('Mortgage Payments by Home Price'));
console.log('File size after edit:', verify.length);
