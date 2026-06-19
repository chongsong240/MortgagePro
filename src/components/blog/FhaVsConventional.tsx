import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, DollarSign, Percent, Calendar, Shield, BookOpen, Calculator, AlertTriangle, TrendingUp, Home } from 'lucide-react';

function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) {
  e.preventDefault();
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export default function FhaVsConventional() {
  return (
    <article className="max-w-3xl mx-auto py-8 px-4">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <span className="bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300 rounded-full px-3 py-1 font-medium text-xs">
            Comparisons
          </span>
          <span>June 19, 2026</span>
          <span>·</span>
          <span>11 min read</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4 leading-tight">
          FHA vs Conventional Loan: Which One Actually Costs You Less?
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          My cousin Maria bought her first house with an FHA loan because the bank said it was easier to qualify for.
          Two years later, she learned the hard way why that "easy" loan might cost her thirty thousand dollars more
          than her friend's conventional mortgage. Here's what she wishes someone had explained on day one.
        </p>
      </div>

      {/* Table of Contents */}
      <div className="bg-muted/40 border border-border rounded-xl p-6 mb-10">
        <h2 className="font-semibold text-foreground mb-3 flex items-center gap-2">
          <BookOpen className="w-4 h-4" />
          What's in This Article
        </h2>
        <nav className="space-y-2 text-sm">
          {[
            ['marias-story', `Maria's Story`],
            ['what-each-loan-is', 'What Each Loan Actually Is'],
            ['down-payment-myth', 'The Down Payment Myth'],
            ['where-fha-wins', 'Where FHA Wins: Getting Your Foot in the Door'],
            ['where-conventional-wins', 'Where Conventional Wins: The Long Game'],
            ['mip-vs-pmi', 'The Trap Most People Miss'],
            ['monthly-reality', 'The Monthly Payment Reality'],
            ['which-one', 'So Which One Should You Pick?'],
            ['right-question', 'The Question You Should Actually Ask'],
          ].map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => scrollToSection(e, id)}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowRight className="w-3 h-3" />
              {label}
            </a>
          ))}
        </nav>
      </div>

      {/* 1. Maria's Story */}
      <section id="marias-story" className="mb-12">
        <p className="text-lg leading-relaxed text-foreground mb-4">
          My cousin Maria bought her first house in 2022. She had a steady job, a 640 credit score, and about $12,000 saved up.
          She walked into her bank, asked about a mortgage, and the loan officer immediately suggested an FHA loan.
          "Easier to qualify for," he told her. "Lower down payment. It's designed for people like you."
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          She took the FHA loan. The rate was decent. The monthly payment felt manageable. She was happy.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Then, two years later, she called me frustrated. A friend of hers with a similar house and a similar loan amount
          had just refinanced and dropped her mortgage insurance. Maria asked her lender if she could do the same. The answer
          was no—and the explanation that followed made her realize she hadn't understood the fine print when she signed.
        </p>
        <p className="text-lg leading-relaxed text-foreground">
          The loan officer wasn't wrong. FHA loans <em>are</em> easier to qualify for. But "easier to get" and "cheaper in the
          long run" are two different things. Maria learned that the hard way. Let's walk through the real differences so you
          don't have to.
        </p>
      </section>

      {/* 2. What Each Loan Actually Is */}
      <section id="what-each-loan-is" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">What Each Loan Actually Is</h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          An <strong>FHA loan</strong> is backed by the Federal Housing Administration. The government promises to cover some
          of the lender's losses if you default. That guarantee makes banks more willing to lend to people with lower credit
          scores, smaller down payments, or past financial hiccups. It's a government program designed to get more people into
          homeownership.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          A <strong>conventional loan</strong> has no government backing. It's just you and the lender, following guidelines
          set by Fannie Mae and Freddie Mac. Because there's no government safety net for the bank, the standards are
          higher—better credit, more income documentation, lower debt levels.
        </p>
        <p className="text-lg leading-relaxed text-foreground">
          Think of FHA as the program that gives people a shot when they don't meet conventional standards. And conventional
          as the loan that rewards people who do.
        </p>
      </section>

      {/* 3. The Down Payment Myth */}
      <section id="down-payment-myth" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">The Down Payment Myth</h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          A lot of people assume FHA means low down payment and conventional means 20% down. That's not really true anymore.
        </p>
        <div className="bg-card border border-border rounded-xl p-6 mb-4">
          <p className="mb-3"><strong>FHA</strong> requires <strong>3.5% down</strong> if your credit score is 580 or above. On a $300,000 house, that's <strong>$10,500</strong>.</p>
          <p><strong>Conventional</strong> loans can go as low as <strong>3% down</strong> for first-time buyers through programs like Fannie Mae's HomeReady or Freddie Mac's Home Possible. That's <strong>$9,000</strong> on the same house—actually <em>less</em> than FHA.</p>
        </div>
        <p className="text-lg leading-relaxed text-foreground">
          So on down payment alone, the two loan types are surprisingly similar. The real differences show up elsewhere.
        </p>
      </section>

      {/* 4. Where FHA Wins */}
      <section id="where-fha-wins" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">Where FHA Wins: Getting Your Foot in the Door</h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          If your credit score is below 680, FHA is often the easier path. Here's why.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          FHA lenders will approve scores as low as 580 with 3.5% down, and sometimes even lower scores with a larger down
          payment. Conventional lenders generally want to see 620 or higher, and the best rates go to borrowers above 740.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          FHA is also more forgiving of past credit problems. If you had a bankruptcy a few years ago or a stretch of late
          payments, FHA might still work with you while conventional lenders might pass.
        </p>
        <p className="text-lg leading-relaxed text-foreground">
          For borrowers with thin credit files, irregular income, or higher debt-to-income ratios, FHA can be the difference
          between buying now and waiting years. That's genuinely valuable. Maria wouldn't have qualified for a conventional
          loan in 2022 with her 640 score and limited credit history. FHA put her in a home.
        </p>
      </section>

      {/* 5. Where Conventional Wins */}
      <section id="where-conventional-wins" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">Where Conventional Wins: The Long Game</h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Here's where Maria's story takes a turn, and where FHA's biggest drawback lives.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          <strong>Mortgage insurance.</strong> Both loan types require it when your down payment is under 20%. But they treat
          it very differently.
        </p>

        <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-6 mb-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold text-foreground mb-2">The detail Maria missed — and it's expensive.</p>
              <p className="text-foreground">FHA's mortgage insurance (MIP) can last the entire life of the loan.
              Conventional's PMI disappears when you hit 20% equity. That difference can cost you $18,000–$34,000.</p>
            </div>
          </div>
        </div>

        <h3 id="mip-vs-pmi" className="text-xl font-semibold text-foreground mb-3">The Trap Most People Miss: MIP vs PMI</h3>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          With an <strong>FHA loan</strong>, if you put down less than 10%, the mortgage insurance premium—called MIP, not PMI—stays
          on your loan <strong>for the entire life of the loan</strong>. Thirty years. No way out unless you refinance into a
          different loan type. If you put down more than 10%, it still lasts for 11 years.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          With a <strong>conventional loan</strong>, the mortgage insurance—called PMI—can be canceled once your equity reaches
          20%. That can happen by paying down the balance, home value appreciation, or both. The lender must automatically cancel
          it when your balance hits 78% of the original value, and you can request cancellation at 80%.
        </p>
        <p className="text-lg leading-relaxed text-foreground">
          This is the detail Maria missed. Her friend had a conventional loan. The home values in their neighborhood went up,
          her friend's equity crossed 20%, and PMI was removed. Maria's FHA insurance? Still there. Would be there for 28 more
          years unless she refinanced. If you want to understand more about how mortgage insurance works and when you can get
          rid of it, our <Link to="/blog/what-is-pmi" className="text-primary hover:underline font-medium">complete guide to PMI</Link> breaks down every rule and loophole.
        </p>
      </section>

      {/* 6. Monthly Payment Reality */}
      <section id="monthly-reality" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">The Monthly Payment Reality</h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Let's put numbers on this so the difference is concrete.
        </p>
        <p className="text-sm text-muted-foreground mb-4">
          Assume a $350,000 home with 5% down in both cases. Current rates for both loan types are in the mid-6% range for
          borrowers with decent credit.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Category</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">FHA Loan</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Conventional Loan</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Down Payment</td>
                <td className="py-3 px-4">$17,500</td>
                <td className="py-3 px-4">$17,500</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Loan Amount</td>
                <td className="py-3 px-4">$332,500</td>
                <td className="py-3 px-4">$332,500</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Approx. Interest Rate</td>
                <td className="py-3 px-4">6.5%</td>
                <td className="py-3 px-4">6.5%</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Mortgage Insurance</td>
                <td className="py-3 px-4">MIP: ~0.55% annually, <strong className="text-red-600">for life of loan</strong></td>
                <td className="py-3 px-4">PMI: ~0.5–1% annually, <strong className="text-green-600">cancelable</strong></td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium border-t-2 border-border">Monthly Insurance Cost</td>
                <td className="py-3 px-4 border-t-2 border-border">~$150–$180/month, permanent</td>
                <td className="py-3 px-4 border-t-2 border-border">~$140–$280/month, temporary</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-lg leading-relaxed text-foreground mb-4">
          At first, the monthly payments might look similar. But fast-forward five years. If the home appreciates and the
          conventional borrower's equity crosses 20%, that PMI disappears—saving $150–$280 every month from then on. The
          FHA borrower keeps paying MIP, year after year.
        </p>
        <p className="text-lg leading-relaxed text-foreground">
          Over a decade, that gap could total <strong>$18,000 to $34,000</strong> in extra insurance costs on the FHA side.
          Want to see the exact impact on your numbers? Use our <Link to="/calculator" className="text-primary hover:underline font-medium">interactive mortgage calculator</Link> to
          compare both loan types side by side with real PMI and MIP estimates.
        </p>
      </section>

      {/* 7. So Which One Should You Pick? */}
      <section id="which-one" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">So Which One Should You Pick?</h2>
        <p className="text-lg leading-relaxed text-foreground mb-6">
          There's no universal answer, but there is a useful way to think about it.
        </p>

        <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-6">
          <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
            <Home className="w-5 h-5 text-blue-600" />
            Go FHA if:
          </h3>
          <ul className="space-y-2 text-foreground">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>Your credit score is below 680 and you can't improve it quickly</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>You have limited savings and need the lowest possible barrier to entry</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>You don't mind refinancing later into a conventional loan once your finances improve</span>
            </li>
          </ul>
          <p className="mt-4 text-sm text-muted-foreground italic">
            FHA is a perfectly good entry ramp. Just know that staying on it long-term costs you money, so plan to get
            off it when you can.
          </p>
        </div>

        <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-xl p-6 mb-6">
          <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-emerald-600" />
            Go conventional if:
          </h3>
          <ul className="space-y-2 text-foreground">
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 mt-1">•</span>
              <span>Your credit score is 680 or above</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 mt-1">•</span>
              <span>Your debt-to-income ratio is manageable</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 mt-1">•</span>
              <span>You can swing at least 3–5% down</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 mt-1">•</span>
              <span>You want to avoid permanent mortgage insurance</span>
            </li>
          </ul>
          <p className="mt-4 text-sm text-muted-foreground italic">
            For most borrowers who qualify for both, conventional wins over the long haul. The monthly savings after PMI
            cancellation add up fast.
          </p>
        </div>

        <p className="text-lg leading-relaxed text-foreground">
          And if you're wondering how your <Link to="/blog/monthly-payment-breakdown" className="text-primary hover:underline font-medium">total monthly payment (PITI) actually breaks down</Link>—principal,
          interest, taxes, insurance, and PMI—our dedicated guide walks through each component with real examples.
        </p>
      </section>

      {/* 8. The Question You Should Actually Ask */}
      <section id="right-question" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">The Question You Should Actually Ask</h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Everyone walks into a lender's office asking, "Which loan can I get approved for?" That's the wrong first question.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          The right question is: <strong>"If I qualify for both, which one costs me less over the next five to ten years?"</strong>
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Get both estimates in writing. Compare the total monthly payment—not just the interest rate. And pay special attention
          to the mortgage insurance line. Ask explicitly: "How long does this insurance last, and how do I cancel it?"
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Maria refinanced her FHA loan into a conventional one about three years after buying. Her credit score had improved,
          her home had appreciated, and the math finally worked. She pays less now. But she told me she wished someone had
          explained the insurance difference on day one.
        </p>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border border-blue-200 dark:border-blue-800 rounded-xl p-8 text-center mt-8">
          <Calculator className="w-10 h-10 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-bold text-foreground mb-3">Run Your Own Numbers</h3>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Our mortgage calculator lets you compare both loan types side by side with realistic insurance estimates built in.
            Try your numbers before you walk into any lender's office.
          </p>
          <Link
            to="/calculator"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
          >
            Open the Calculator
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </article>
  );
}
