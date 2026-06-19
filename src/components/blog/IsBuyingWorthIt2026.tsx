import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, DollarSign, Home, TrendingUp, BookOpen, Calculator, AlertTriangle, Shield, Calendar } from 'lucide-react';

function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) {
  e.preventDefault();
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export default function IsBuyingWorthIt2026() {
  return (
    <article className="max-w-3xl mx-auto py-8 px-4">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <span className="bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 rounded-full px-3 py-1 font-medium text-xs">
            Guides
          </span>
          <span>June 19, 2026</span>
          <span>·</span>
          <span>12 min read</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4 leading-tight">
          Is Buying a Home Still Worth It in 2026?
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          My neighbors Jen and Mike have been saving since 2021. Stable jobs, a decent down payment, a baby due in September. 
          They're ready to buy by every measure. So why can't they pull the trigger? Here's what I told them — and what 
          anyone trying to decide in this market needs to hear.
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
            ['jen-and-mike', 'Jen and Mike Are Stuck. So Are a Lot of People.'],
            ['the-squeeze', 'The Squeeze Is Real'],
            ['people-still-buying', 'But People Are Still Buying'],
            ['timing-the-market', 'Timing the Market Is a Trap'],
            ['beyond-spreadsheets', 'The Part Spreadsheets Miss'],
            ['when-buying-makes-sense', 'When Buying Makes Sense Right Now'],
            ['when-to-wait', 'When Waiting Probably Makes More Sense'],
            ['renting-not-enemy', 'Renting Is Not the Enemy'],
            ['how-they-decided', 'How Jen and Mike Decided'],
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

      {/* 1. Jen and Mike */}
      <section id="jen-and-mike" className="mb-12">
        <p className="text-lg leading-relaxed text-foreground mb-4">
          My neighbors Jen and Mike have been saving for a house since 2021. They've got stable jobs, a decent down payment 
          stashed away, and a baby due in September. By almost every measure, they're ready to buy.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          But every time they find a house they like, they hesitate. Jen's mom keeps telling them to wait. "Rates are too 
          high," she says. "Prices are crazy. It's a terrible time to buy."
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Mike isn't so sure. "What if we wait two years and everything is even more expensive?" he asked me last weekend. 
          "What if this is the window and we're just watching it close?"
        </p>
        <p className="text-lg leading-relaxed text-foreground">
          They're stuck. And a lot of people are stuck in the exact same spot right now. If you feel like you can't figure 
          out whether this market makes sense, you're not alone.
        </p>
      </section>

      {/* 2. The Squeeze */}
      <section id="the-squeeze" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">The Squeeze Is Real</h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Let's be honest about what buyers are facing in 2026. It's not pretty.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Mortgage rates are hovering in the 6–7% range. Not the 2–3% we saw in 2020 and 2021, but also not the 18% of the 
          early 1980s. Historically speaking, 6–7% is actually fairly normal. It just feels terrible because we all remember 
          when money was practically free.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Home prices, meanwhile, haven't dropped the way a lot of people predicted. In many markets, they've kept climbing—just 
          more slowly. So you're paying more for the house <em>and</em> more to borrow the money. That combination makes for some 
          brutal monthly payments.
        </p>
        <div className="bg-card border border-border rounded-xl p-6 mb-4">
          <p className="text-center text-lg">
            A house that would have cost <strong>$1,500/month</strong> at 3% in 2021 could easily run{' '}
            <strong>$2,500+ today</strong>. Same house. Same loan amount. Different rate environment.
          </p>
        </div>
        <p className="text-lg leading-relaxed text-foreground">
          Nobody wants to be the person who bought at the top. That fear is real, and it's keeping a lot of would-be buyers 
          on the sidelines. You can run your own numbers with our{' '}
          <Link to="/calculator" className="text-primary hover:underline font-medium">interactive mortgage calculator</Link>{' '}
          to see exactly how the current rate environment affects your monthly payment.
        </p>
      </section>

      {/* 3. But People Are Still Buying */}
      <section id="people-still-buying" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">But People Are Still Buying</h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Despite all that, homes are selling. Not at the frenzied pace of 2021, but they're selling.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Why? Because life has its own timeline.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Babies don't wait for interest rates to drop. Job relocations don't pause while you wait for the housing market to 
          correct. Leases expire. Families outgrow apartments. Parents want to be in a certain school district before their 
          kid starts kindergarten.
        </p>
        <p className="text-lg leading-relaxed text-foreground">
          Jen and Mike's baby is coming in September. They're currently in a one-bedroom rental. Waiting two years for the 
          market to "normalize" means raising a toddler in a living room that doubles as a nursery. That might be worth it if 
          the financial case for waiting were overwhelming. But it's not clear that it is.
        </p>
      </section>

      {/* 4. Timing the Market */}
      <section id="timing-the-market" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">Timing the Market Is a Trap</h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Here's something I've noticed: the same people who predicted a housing crash in 2022 are still predicting it in 2026. 
          Eventually they'll be right, just like a broken clock. The question is whether you're willing to put your life on 
          hold waiting for that moment.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Because here's what could happen:
        </p>
        <ul className="space-y-3 mb-4">
          <li className="flex items-start gap-3 text-lg leading-relaxed text-foreground">
            <TrendingUp className="w-5 h-5 text-primary flex-shrink-0 mt-1.5" />
            <span><strong>Rates could drop</strong> — but then prices could spike as all the sidelined buyers rush back in. Your monthly payment might not improve at all.</span>
          </li>
          <li className="flex items-start gap-3 text-lg leading-relaxed text-foreground">
            <Calendar className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1.5" />
            <span><strong>Rates could stay elevated</strong> for years. The Fed doesn't move quickly, and mortgage rates don't follow the Fed directly anyway.</span>
          </li>
          <li className="flex items-start gap-3 text-lg leading-relaxed text-foreground">
            <Home className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1.5" />
            <span><strong>Prices could dip</strong> in some markets, but the factors that make homes expensive—limited supply, especially—aren't going away anytime soon.</span>
          </li>
        </ul>
        <p className="text-lg leading-relaxed text-foreground">
          Waiting is a bet. Sometimes it pays off. But it's not the no-risk move people pretend it is. If you wait two years 
          and prices are up 8% and rates are the same, you've made your situation worse, not better. If you want to see the 
          numbers for yourself, our{' '}
          <Link to="/calculator?tab=standard" className="text-primary hover:underline font-medium">standard mortgage calculator</Link>{' '}
          lets you plug in different rate and price scenarios to compare.
        </p>
      </section>

      {/* 5. Beyond Spreadsheets */}
      <section id="beyond-spreadsheets" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">The Part Spreadsheets Miss</h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          A lot of financial advice about homeownership focuses entirely on numbers. Is the cap rate attractive? Are you better 
          off renting and investing the difference? Is this the optimal moment to deploy capital?
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          These are reasonable questions for an investor buying a rental property. They're not the right framework for a family 
          buying a home to live in.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Owning a home comes with financial downsides—transaction costs are high, maintenance is a constant drain, and you 
          lose the flexibility to pick up and move easily. But it also comes with things that don't appear on a spreadsheet:
        </p>
        <ul className="space-y-3 mb-4">
          <li className="flex items-start gap-3 text-lg leading-relaxed text-foreground">
            <Shield className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-1.5" />
            <span>Knowing your kid will stay in the same school for more than one year at a time</span>
          </li>
          <li className="flex items-start gap-3 text-lg leading-relaxed text-foreground">
            <Shield className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-1.5" />
            <span>Not having a landlord who might sell the building out from under you</span>
          </li>
          <li className="flex items-start gap-3 text-lg leading-relaxed text-foreground">
            <Shield className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-1.5" />
            <span>Being able to paint the walls a color you actually like</span>
          </li>
          <li className="flex items-start gap-3 text-lg leading-relaxed text-foreground">
            <Shield className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-1.5" />
            <span>Not dreading the annual lease renewal letter with a rent increase</span>
          </li>
        </ul>
        <p className="text-lg leading-relaxed text-foreground">
          For some people, those things matter a lot. For others, they don't. Neither group is wrong. But you have to know 
          which group you're in before you can make this decision. Our{' '}
          <Link to="/blog/monthly-payment-breakdown" className="text-primary hover:underline font-medium">PITI breakdown guide</Link>{' '}
          can help you understand exactly what your monthly payment would cover.
        </p>
      </section>

      {/* 6. When Buying Makes Sense */}
      <section id="when-buying-makes-sense" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">When Buying Makes Sense Right Now</h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          You're probably in a decent position to buy if:
        </p>
        <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-6">
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-foreground">
              <span className="text-blue-600 mt-1">•</span>
              <span>Your income is stable and you have a few months of savings beyond the down payment</span>
            </li>
            <li className="flex items-start gap-2 text-foreground">
              <span className="text-blue-600 mt-1">•</span>
              <span>The monthly payment, even at 6–7%, fits comfortably within your budget without requiring you to cut retirement contributions or live on ramen</span>
            </li>
            <li className="flex items-start gap-2 text-foreground">
              <span className="text-blue-600 mt-1">•</span>
              <span>You plan to stay in the same place for at least five years</span>
            </li>
            <li className="flex items-start gap-2 text-foreground">
              <span className="text-blue-600 mt-1">•</span>
              <span>You're buying a house because you want to live in it, not because you're trying to flip it for a quick profit</span>
            </li>
          </ul>
        </div>
        <p className="text-lg leading-relaxed text-foreground">
          If those things are true, the "perfect time to buy" might be whenever you find a house you like. Not because the 
          market is great, but because your personal situation is solid enough to absorb whatever the market does next. Our{' '}
          <Link to="/blog/how-much-house-can-i-afford" className="text-primary hover:underline font-medium">How Much House Can I Afford guide</Link>{' '}
          lays out the exact math lenders use to figure this out.
        </p>
      </section>

      {/* 7. When to Wait */}
      <section id="when-to-wait" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">When Waiting Probably Makes More Sense</h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          On the other hand, you should probably wait if:
        </p>
        <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-6 mb-6">
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-foreground">
              <span className="text-amber-600 mt-1">•</span>
              <span>You don't have much savings beyond the down payment—houses come with expensive surprises, and you need a buffer</span>
            </li>
            <li className="flex items-start gap-2 text-foreground">
              <span className="text-amber-600 mt-1">•</span>
              <span>The monthly payment would stretch you thin enough that one unexpected expense would put you in the red</span>
            </li>
            <li className="flex items-start gap-2 text-foreground">
              <span className="text-amber-600 mt-1">•</span>
              <span>Your job situation feels shaky</span>
            </li>
            <li className="flex items-start gap-2 text-foreground">
              <span className="text-amber-600 mt-1">•</span>
              <span>You're carrying a lot of high-interest debt</span>
            </li>
            <li className="flex items-start gap-2 text-foreground">
              <span className="text-amber-600 mt-1">•</span>
              <span>You're not sure you'll still be in the same city two years from now</span>
            </li>
          </ul>
          <p className="mt-4 text-sm text-muted-foreground italic">
            In those situations, renting isn't throwing money away. It's buying time.
          </p>
        </div>
        <p className="text-lg leading-relaxed text-foreground">
          Time to save more, improve your credit, figure out where you actually want to live, and wait until the monthly 
          payment doesn't keep you up at night. If you're carrying debt, our{' '}
          <Link to="/blog/pay-off-early" className="text-primary hover:underline font-medium">Should I Pay Off My Mortgage Early?</Link>{' '}
          article has a section on why credit card debt absolutely comes first.
        </p>
      </section>

      {/* 8. Renting Is Not the Enemy */}
      <section id="renting-not-enemy" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">Renting Is Not the Enemy</h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          The "renting is throwing money away" line is one of the most repeated pieces of financial advice in America. It's 
          also one of the most misleading.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Renting buys you flexibility. No property tax bills. No surprise $8,000 HVAC replacements. No real estate agent 
          commissions when you move. In some markets, especially expensive coastal cities, renting and investing the difference 
          actually beats buying over a 10-year horizon—even accounting for home price appreciation.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Renting for another year or two while you shore up your finances isn't failure. It's preparation.
        </p>
        <p className="text-lg leading-relaxed text-foreground">
          If you're torn between the two, our{' '}
          <Link to="/calculator?tab=rentvsbuy" className="text-primary hover:underline font-medium">Rent vs Buy Analyzer</Link>{' '}
          factors in home appreciation, rent inflation, property taxes, and closing costs to find your breakeven year—that 
          critical point where buying starts to make more financial sense than renting.
        </p>
      </section>

      {/* 9. How They Decided */}
      <section id="how-they-decided" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">How Jen and Mike Decided</h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          I don't know what Jen and Mike will end up doing. But I know what I told them: stop trying to guess where rates and 
          prices will be next year. <strong>Focus on what you can control.</strong>
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Can you afford the monthly payment on a house you'd actually want to live in, with room to spare? Do you have enough 
          savings to handle a broken water heater without panicking? Are you planning to stay put long enough for the transaction 
          costs to make sense?
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          If the answers are yes, the market conditions are secondary. If the answers are no, the market conditions don't 
          matter—you're not ready regardless.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-6">
          The best home purchase isn't the one that perfectly times the market. It's the one you can afford without losing 
          sleep. The one you'll still be happy in five years from now. Everything else is noise.
        </p>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border border-blue-200 dark:border-blue-800 rounded-xl p-8 text-center mt-8">
          <Calculator className="w-10 h-10 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-bold text-foreground mb-3">Run Your Own Numbers</h3>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Talking about the market in general terms only gets you so far. What matters is how the numbers work for your 
            situation — your income, your local market, your timeline. Try a few scenarios and see what feels comfortable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/calculator"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
            >
              Try the Calculator
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/calculator?tab=rentvsbuy"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-3 rounded-md font-medium hover:bg-secondary/80 transition-colors border border-border"
            >
              Rent vs Buy Tool
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </article>
  );
}
