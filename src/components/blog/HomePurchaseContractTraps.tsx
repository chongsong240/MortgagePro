import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Calendar, FileText, ShieldCheck, AlertTriangle, DollarSign, Home } from 'lucide-react';
import BlogSchema from './BlogSchema';
import AllCalculatorsGrid from './AllCalculatorsGrid';
import RelatedPosts from './RelatedPosts';
import {
  AffiliateDisclosure,
  WarningBox,
  TipBox,
  InfoBox,
  KeyTakeaway,
  ExampleBox,
  ComparisonTable,
  CalculatorCTA,
} from './BlogComponents';
import {
  LAWDEPOT_PURCHASE_AGREEMENT,
  LAWDEPOT_OFFER_TO_PURCHASE,
} from '@/src/data/affiliate-offers';

function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) {
  e.preventDefault();
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export default function HomePurchaseContractTraps() {
  return (
    <article className="max-w-3xl mx-auto py-8 px-4">
      <BlogSchema
        title="The Hidden Traps in Your Home Purchase Contract (And How to Avoid Them)"
        description="A seven-day inspection window. An earnest-money release. An as-is clause. The expensive parts of a purchase contract hide in dates and initials — here is what to check before you sign."
        datePublished="2026-10-21"
        dateModified="2026-10-21"
        url="https://www.mortgagepro.io/blog/home-purchase-contract-traps"
        faqs={[
          {
            q: 'Can I back out of a home purchase contract and get my earnest money back?',
            a: 'Usually only if you cancel while a contingency is still active — for example, during the inspection, appraisal or financing window — or if the seller breaches the contract. Once a contingency deadline passes, missing it is often treated as a waiver, and the seller may be entitled to keep the deposit.',
          },
          {
            q: 'How long is the inspection contingency?',
            a: 'It depends on the contract form your state or local association uses. Seven to fourteen calendar days is common, but some forms use business days and some start counting the day after mutual acceptance. The contract’s definition controls, not the number your agent quotes at the showing.',
          },
          {
            q: 'Does buying a house as-is mean I cannot inspect it?',
            a: 'No. “As-is” generally means the seller will not make repairs. It does not remove your right to inspect, and in most states it does not erase the seller’s duty to disclose known material defects. Whether you can cancel after the inspection depends on the inspection contingency you kept in the contract.',
          },
          {
            q: 'Is a standard real estate contract negotiable?',
            a: 'Yes. A “standard” form is usually a template published by a state or local real estate association, not a law. Timelines, repair credits, closing dates, possession and contingency periods are all terms the buyer and seller can negotiate before signing.',
          },
        ]}
      />
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <span className="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300 rounded-full px-3 py-1 font-medium text-xs">
            Guides
          </span>
          <span>October 21, 2026</span>
          <span>·</span>
          <span>13 min read</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4 leading-tight">
          The Hidden Traps in Your Home Purchase Contract (And How to Avoid Them)
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          My friend Sarah almost lost $10,000 over a number she never noticed. The price was fine.
          The rate was fine. The problem was a seven-day window buried on page nine of a document
          she signed on a Friday night.
        </p>
      </div>

      <AffiliateDisclosure />

      {/* Table of Contents */}
      <div className="bg-muted/40 border border-border rounded-xl p-6 mb-10">
        <h2 className="font-semibold text-foreground mb-3 flex items-center gap-2">
          <BookOpen className="w-4 h-4" />
          What's in This Article
        </h2>
        <nav className="space-y-2 text-sm">
          {[
            ['sarahs-story', 'The number Sarah never noticed'],
            ['standard-contract', '“Standard” is a starting point, not a rule'],
            ['contingency-clock', 'The contingency clock'],
            ['earnest-money', 'Earnest money: who holds it, when it moves'],
            ['as-is', 'What “as-is” actually means'],
            ['hoa', 'The HOA packet that arrives too late'],
            ['appraisal-financing', 'Appraisal gaps and financing deadlines'],
            ['title-survey', 'Title, survey and the surprises in between'],
            ['read-like-a-pro', 'How to read the contract like a pro'],
            ['diy-drafting', 'If you are drafting the paperwork yourself'],
            ['bottom-line', 'The bottom line'],
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
      {/* 1. Sarah's story */}
      <section id="sarahs-story" className="mb-12">
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Sarah found a townhouse she could afford, in a neighborhood she liked, from a seller who
          accepted her offer in less than a day. She signed the paperwork on a Friday night, poured
          a glass of wine, and started pricing paint.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Four days later, her agent mentioned that the inspection was scheduled for the following
          Tuesday. Sarah blinked. She had assumed she had two weeks. She had been told the contract
          included an inspection contingency, and in her mind that meant a comfortable window to
          look around and ask for repairs.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          The contract said seven calendar days. Day seven was that Friday, at 5 p.m. The
          inspection was booked for day eleven. If the seller had refused an extension — and in a
          competitive market, sellers often do — Sarah's only options would have been to waive the
          inspection or walk away and forfeit roughly $10,000 in earnest money.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          She got lucky. A cancellation opened up, she paid a $475 rush fee, and the inspector
          found active termite damage and a roof near the end of its life. She negotiated a $6,500
          credit at closing. Lucky is not a strategy. Every part of that near-miss was written down
          in a document she had skimmed.
        </p>
        <p className="text-lg leading-relaxed text-foreground">
          Most buyers treat the purchase contract like a receipt: the price is on page one, the
          closing date is on page two, sign at the bottom. In reality it is the rulebook for every
          disagreement you might have over the next 30 to 60 days — including whether you get your
          deposit back if the deal falls apart.
        </p>
      </section>
      {/* 2. Standard contract */}
      <section id="standard-contract" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">
          “Standard” is a starting point, not a rule
        </h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          The most expensive myth in home buying is that there is one official contract everybody
          has to use. There isn't. Most states have forms drafted by a real estate association, a
          bar association, or both. Those forms are researched and regularly updated, but they are
          templates. They are not statutes, and nobody is required to accept every line of them.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Look closely at a “standard” form and you will find blank lines, checkboxes, optional
          addenda and sections that say “unless otherwise agreed in writing.” That language exists
          because the parties are expected to fill it in. The inspection window, the closing date,
          the repair cap, the seller credit, the appliances that stay, the day you get the keys —
          all of it is negotiable until both signatures are on the page.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Sellers can absolutely say no. A “no” is a negotiating position, though, not a law. The
          trap is assuming you have to accept a clause because it was pre-printed. You don't. You
          have to understand it, and then decide whether it is worth asking to change.
        </p>
        <WarningBox title="⚠️ “Standard” usually means “the form this agent uses every day”">
          <p>
            That does not make it fair, current, or suited to your situation. Some forms favor the
            seller on repair limits and deposit release. Others are outdated versions a local
            association stopped recommending years ago. Ask which form you are signing, who
            publishes it, and whether an updated version exists.
          </p>
        </WarningBox>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          One more thing worth saying plainly: your real estate agent is not your lawyer. In most
          states agents are prohibited from giving legal advice, even when they are experienced and
          well meaning. If a clause affects a large amount of money, an unusual property, or your
          ability to walk away, pay an attorney for an hour. It is cheaper than being wrong.
        </p>
        <InfoBox title="📘 Attorney review is a real thing in some states">
          <p>
            A handful of states build an attorney-review period into the process, giving you a few
            days after signing to have counsel review and sometimes cancel the contract. If you
            live in one of them, use it. If you don't, you can still ask for a short review period
            as a contract term — especially on a private sale.
          </p>
        </InfoBox>
      </section>
      {/* 3. Contingency clock */}
      <section id="contingency-clock" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">
          The contingency clock is where the money hides
        </h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          A contingency is an exit ramp. It lets you cancel and get your deposit back if something
          specific goes wrong. Every contingency has two parts: a deadline, and an action you have
          to take before that deadline. Buyers remember the first part and forget the second.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          The language to look for is some version of “if Buyer does not deliver written notice of
          objection within X days, Buyer shall be deemed to have approved.” That sentence is why
          missing a date by one day can cost you your deposit. The contingency did not expire
          because you were still thinking about it. It expired because the contract says so.
        </p>

        <ComparisonTable
          columns={[
            { header: 'Deadline', key: 'deadline' },
            { header: 'Typical window', key: 'typical' },
            { header: 'What you must actually do', key: 'action' },
            { header: 'If you miss it', key: 'cost' },
          ]}
          rows={[
            {
              deadline: 'Inspection',
              typical: '7–14 days',
              action: 'Inspect, then deliver a written objection or repair request',
              cost: 'Termination right is often deemed waived',
            },
            {
              deadline: 'Appraisal',
              typical: '14–21 days',
              action: 'Review the appraisal and object, renegotiate or cancel',
              cost: 'You may have to cover the gap in cash',
            },
            {
              deadline: 'Financing',
              typical: '21–30 days',
              action: 'Apply, document, and get a written denial or commitment',
              cost: 'Deposit can be at risk if the loan fails',
            },
            {
              deadline: 'Title review',
              typical: 'Varies by state',
              action: 'Read the title commitment and object to exceptions',
              cost: 'You accept the easement or defect',
            },
            {
              deadline: 'HOA review',
              typical: '3–5 days after delivery',
              action: 'Read the full package and object in writing',
              cost: 'Rules are deemed approved',
            },
          ]}
          caption="Illustrative windows only. Your contract defines the actual length, the counting method and the remedy."
        />

        <p className="text-lg leading-relaxed text-foreground mb-4">
          Then there is the counting problem. Some contracts count calendar days, some count
          business days, and some say the clock starts the day after mutual acceptance rather than
          on it. Some roll a deadline that lands on a weekend or holiday to the next business day;
          others do not. A contract that says time is of the essence means the dates are strict, not
          approximate.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          So do the boring thing the night you sign. Open a calendar, write down every deadline in
          the contract, and count the days the way the contract's definition section tells you to.
          Then subtract two business days from each one for scheduling. If the inspection has to be
          done by day seven, you want the inspector there on day two or three, not day six.
        </p>

        <TipBox title="💡 Put extensions in writing — before the deadline">
          <p>
            A text message saying “we'll figure it out” is not an extension. Most contracts require
            a written amendment or a specific form signed by both parties. Ask for the extension
            while you still have time to negotiate; a request that arrives after the deadline is
            just a request for a favor.
          </p>
        </TipBox>

        <ExampleBox title="📌 What Sarah's calendar should have looked like">
          <p>
            Accepted Friday, October 2. If the form counts the acceptance date as day one, the
            inspection deadline is Thursday, October 8 at 5 p.m. — not the following Tuesday. The
            inspection should have been booked for Monday, October 5, with a written objection
            delivered by Wednesday, October 7 to leave room for a reply.
          </p>
        </ExampleBox>

        <p className="text-lg leading-relaxed text-foreground">
          This is also the point where a good buyer's agent earns their commission. Not by telling
          you the market is hot, but by putting every deadline on a shared calendar, booking
          vendors on day one, and telling you in plain language what happens if a date slips. If
          that is not happening, make it happen.
        </p>
      </section>
      {/* 4. Earnest money */}
      <section id="earnest-money" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">
          Earnest money: who holds it, and when it moves
        </h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Earnest money is the deposit you put down to show you are serious — usually 1% to 3% of
          the purchase price, sometimes more in a bidding war. On a $400,000 house, that is $4,000
          to $12,000 sitting somewhere between you and the seller. Where it sits matters more than
          most buyers realize.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          In a normal deal, the money goes to a neutral third party: a title company, escrow agent,
          attorney, or sometimes the listing broker's trust account, depending on local practice.
          It is released at closing, or returned to you if you cancel within a contingency. That is
          the system working the way it should.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          The trap is a clause that asks you to release the deposit to the seller early — sometimes
          called a non-refundable deposit, sometimes dressed up as a “show of good faith” to make
          your offer more competitive. Once that money leaves escrow, it is gone. If your financing
          falls through three weeks later, you are not asking for your deposit back. You are asking
          the seller to voluntarily return money they already have, and your leverage is a lawsuit.
        </p>

        <WarningBox title="⚠️ “Release” has two very different meanings">
          <p>
            A release to the escrow holder — the title company or attorney — is normal. A release
            to the seller before closing is not. Read the sentence twice and, if you are unsure,
            ask the escrow officer to explain it in writing before you sign.
          </p>
        </WarningBox>

        <p className="text-lg leading-relaxed text-foreground mb-4">
          There is also a deadline attached to the deposit itself, usually one to three business
          days after acceptance. Miss it and you are in breach before the inspection even happens.
          And because wire fraud is common in real estate, call the escrow officer at a number you
          looked up yourself before wiring anything. An email with correct-looking instructions is
          not proof.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          One last distinction: earnest money is not a cap on what you can lose. If you breach the
          contract, the seller may be entitled to the deposit and may also pursue other remedies
          the contract allows. The deposit is a motivator, not a liability shield.
        </p>

        <KeyTakeaway>
          <p>
            Your deposit should stay in a neutral escrow account until closing or a mutual release.
            If a seller wants it early, that is not a detail — it is a transfer of risk from them to
            you, and it should be priced like one.
          </p>
        </KeyTakeaway>
      </section>
      {/* 5. As-is */}
      <section id="as-is" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">
          What “as-is” actually means
        </h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          “As-is” shows up on estate sales, foreclosures, investor flips and plenty of ordinary
          listings where the seller simply does not want to fix anything. It sounds final. It is
          narrower than it sounds.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          In most cases, as-is means the seller will not repair defects or give you a credit for
          them. It does not mean you cannot inspect the property. It does not mean the seller can
          lie about a leak they have known about for years — most states still require a written
          disclosure of known material defects — and it does not automatically strip you of the
          inspection contingency you negotiated.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          This is where buyers confuse two different clauses. “As-is” is a statement about repairs.
          “Waiving the inspection contingency” is a statement about your exit ramp. You can buy
          as-is and still keep the right to inspect and cancel for a material defect. You can also
          buy a non-as-is house and stupidly waive the inspection. The second scenario is the more
          dangerous one.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Read the as-is addendum carefully, because some forms require you to accept the property
          in its present condition and limit your ability to request repairs, while preserving your
          right to terminate during the inspection period. Others are more aggressive. If the
          addendum makes the deposit non-refundable and removes your inspection right, you are not
          buying a house with cosmetic issues. You are buying a lawsuit with a roof.
        </p>

        <InfoBox title="📘 As-is is not a free pass for the seller">
          <p>
            Disclosure duties vary by state, but the general idea is consistent: a seller cannot
            knowingly conceal a material defect and then point at an as-is clause. If you find
            evidence of concealment, talk to a real estate attorney before you close — not after.
          </p>
        </InfoBox>

        <TipBox title="💡 Inspection, then specialists">
          <p>
            A general inspector is a good first pass, not a diagnosis. On an older home, budget for
            a roof inspection, sewer scope, foundation evaluation or mold test if the general report
            raises a flag. Spending $600 on specialists is cheaper than discovering the problem
            after you own it.
          </p>
        </TipBox>
      </section>
      {/* 6. HOA */}
      <section id="hoa" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">
          The HOA packet that arrives after your review period
        </h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          If you are buying a condo, a townhouse, or a house in a planned community, there is an HOA
          addendum. The addendum usually says you agree to abide by the association's rules and
          regulations. What it does not always say — at least not in a way anyone notices — is that
          you may not receive those rules until a few days before closing.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          That sequence is backwards. You are agreeing to a set of rules you have not read, and the
          review clock often starts when the packet is delivered, not when you sign. If the seller
          delivers on day 25 of a 30-day escrow, you have five days to read a document that can
          change whether the property works for you at all.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Here is what to ask for, in writing, within three days of acceptance: the declaration and
          CC&Rs, bylaws, current rules, the operating budget, the reserve study, board meeting
          minutes for the last 12 to 24 months, any pending special assessments, current litigation,
          master insurance policy, rental restrictions, pet restrictions, parking rules, and the
          transfer and capital contribution fees. If the association has a management company, call
          them and ask what the packet does not answer.
        </p>

        <WarningBox title="⚠️ The dealbreakers hide in the documents, not the listing">
          <p>
            Rental caps and waiting lists can turn a future rental into an impossible one. A
            pending special assessment can add five figures to your first year of ownership. A
            reserve study that shows the association is underfunded is a warning about future dues
            increases. Pending construction-defect litigation can make the unit difficult to
            finance. None of that appears in the listing photos.
          </p>
        </WarningBox>

        <p className="text-lg leading-relaxed text-foreground mb-4">
          The fix is mechanical: put a delivery deadline and a review period in the contract. For
          example, “Seller shall deliver a complete HOA resale package within three days of
          acceptance; Buyer shall have five days after delivery to review and may terminate for any
          reason.” That converts a vague promise into a deadline you can enforce.
        </p>
        <p className="text-lg leading-relaxed text-foreground">
          And do not forget the fees that are not dues: a transfer fee, a capital contribution (often
          equivalent to one or two months of dues), a move-in or move-out fee, and a document fee.
          These belong in your closing cost estimate. If you are still budgeting, our{' '}
          <Link to="/closing-cost-calculator" className="text-primary hover:underline font-medium">
            closing cost calculator
          </Link>{' '}
          lets you add them before they show up on the settlement statement.
        </p>
      </section>
      {/* 7. Appraisal and financing */}
      <section id="appraisal-financing" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">
          The appraisal gap and the financing deadline
        </h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Your lender will send an appraiser to confirm the house is worth what you agreed to pay.
          If the appraisal comes in low, the bank does not care that you love the kitchen. It will
          lend against the appraised value, which means you need to cover the difference or
          renegotiate.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          An appraisal contingency protects you in that situation: you can ask the seller to lower
          the price, meet somewhere in the middle, or cancel and recover your deposit. Waive it and
          the gap becomes your problem. That is what “appraisal gap coverage” means in a competitive
          offer — you are promising to bring extra cash if the number comes in low, often up to a
          specific dollar amount.
        </p>

        <ExampleBox title="📌 A $20,000 gap on a $400,000 house">
          <p>
            You offer $400,000 with 10% down. The appraisal comes back at $380,000. The lender bases
            the loan on the appraised value, so the maximum loan drops from $360,000 to $342,000 —
            and you need $18,000 more cash than you planned. If you promised $15,000 of gap
            coverage, you are $3,000 short of what the deal now requires, before you even get to
            closing costs.
          </p>
        </ExampleBox>

        <p className="text-lg leading-relaxed text-foreground mb-4">
          The financing contingency is the other half of this. It protects you if you cannot get a
          loan, but it is not a “changed my mind” clause. You generally have to apply promptly,
          provide the documents the lender asks for, and cooperate in good faith. A lender denying
          you because you stopped answering emails is not the same as a lender denying you because
          your debt-to-income ratio does not work.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          During escrow, treat your finances like a patient in recovery. Do not change jobs, finance
          a car, open a new credit card, move large sums between accounts without a paper trail, or
          co-sign a loan for a relative. Lenders re-check credit and employment before closing. The
          most common way a financing contingency gets tested is not a market crash; it is a buyer
          who buys furniture on a store card two weeks before closing.
        </p>

        <WarningBox title="⚠️ Pre-approval is not a loan commitment">
          <p>
            Pre-approval means someone looked at your file and liked it. Underwriting can still
            condition, suspend or deny the loan after the appraisal, the title search or the final
            income verification. Ask your lender what has to happen before they will issue a
            written commitment — and put that date on your calendar next to the contract deadline.
          </p>
        </WarningBox>

        <p className="text-lg leading-relaxed text-foreground">
          If the loan is running late, ask for a written extension before the deadline. Lenders miss
          dates for boring reasons: a missing statement, a slow appraisal, a title issue. A short
          extension is usually cheaper for the seller than putting the house back on the market. If
          you are comparing loan types and wondering how the financing terms change the math, our{' '}
          <Link to="/blog/fha-vs-conventional" className="text-primary hover:underline font-medium">
            FHA vs conventional comparison
          </Link>{' '}
          and{' '}
          <Link to="/blog/can-i-buy-with-5-percent-down" className="text-primary hover:underline font-medium">
            5% down guide
          </Link>{' '}
          go deeper into the trade-offs.
        </p>
      </section>
      {/* 8. Title and survey */}
      <section id="title-survey" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">
          Title, survey and the surprises in between
        </h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Title work sounds like paperwork for the adults in the room. It is actually where a
          property's history shows up: old liens, judgments, prior mortgages, easements, deed
          restrictions, mineral rights, heirs who were never removed from the chain of ownership.
          The title company will send you a commitment. Read it. All of it, including the exceptions
          in Schedule B that everyone skips.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          A survey answers a different set of questions. Where is the property line, really? Does
          the neighbor's fence sit six feet inside your yard? Is there an addition that was built
          without a permit? Does the driveway cross a utility easement? Is any part of the house in
          a flood zone? Some states require a new survey; others leave it optional. Optional does
          not mean unnecessary, especially on a rural lot or an older home with a mystery addition.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Then there is insurance. Your lender will require a lender's title policy, which protects
          the lender if the title turns out to be defective. It does not protect you. An owner's
          policy costs extra and is easy to decline when you are staring at a closing disclosure
          full of numbers. It is also one of the few closing costs that keeps protecting you after
          you own the place.
        </p>

        <InfoBox title="📘 Unpermitted work is a contract problem, not just a construction problem">
          <p>
            A finished basement, a converted garage or a deck without permits can be discovered by
            an appraiser, an insurer or the city years later. Ask the seller for permits and
            inspection records for any significant work. If they cannot produce them, get an
            attorney's read on what the city can require you to remove or legalize after closing.
          </p>
        </InfoBox>

        <p className="text-lg leading-relaxed text-foreground">
          If your contract gives you a title review period, it comes with a written objection
          deadline. Use it. Ask the title officer to explain each exception in plain English, and
          ask your agent whether any of them would affect resale, insurance or financing. If the
          answer is “that's just standard,” ask what it means anyway. Standard is not the same as
          harmless.
        </p>
      </section>
      {/* 9. Read like a pro */}
      <section id="read-like-a-pro" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">
          How to read the contract like a pro
        </h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          You do not need a law degree to catch the expensive stuff. You need a highlighter, an
          hour, and the discipline to stop when something does not make sense. Read the contract
          once for the story — who is buying what, for how much, by when — and then read it again
          with a pen.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          On the second pass, mark six categories:
        </p>

        <div className="space-y-4 mb-6">
          {[
            {
              icon: Calendar,
              title: 'Every date',
              text: 'Acceptance, deposit, inspection, appraisal, financing, title review, HOA review, walk-through, closing, possession. Write them on one calendar and work backward for scheduling.',
            },
            {
              icon: DollarSign,
              title: 'Every dollar amount',
              text: 'Purchase price, deposit, seller credits, repair caps, per-diem penalties, HOA transfer fees, prorated taxes. A credit is not a discount if it disappears in a fee.',
            },
            {
              icon: FileText,
              title: 'Every initial and blank',
              text: 'Initial blocks usually mark the clauses where you are making a specific choice: accepting the as-is condition, waiving a contingency, acknowledging a disclosure. Read the sentence above the blank.',
            },
            {
              icon: Home,
              title: 'What stays and what goes',
              text: 'Appliances, light fixtures, window treatments, a mounted TV, the hot tub, the shed. If it is not listed as included, assume it leaves with the seller.',
            },
            {
              icon: ShieldCheck,
              title: 'Who pays what',
              text: 'Title insurance, escrow fees, transfer taxes, recording fees, HOA transfer and capital contribution fees, and the cost of any repairs you negotiated. These can add thousands to your cash-to-close.',
            },
            {
              icon: AlertTriangle,
              title: 'Every exit route',
              text: 'Contingencies, termination rights, mediation or arbitration clauses, attorney fees, liquidated damages. Know how you get out, and what it costs to use the door.',
            },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-start gap-3 p-4 bg-card border border-border rounded-lg">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Icon className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm mb-1">{title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-lg leading-relaxed text-foreground mb-4">
          Then play the “what happens if” game. What happens if the inspection finds a cracked
          foundation? What happens if the appraisal is low? What happens if my loan is denied? What
          happens if the seller dies, refuses to move, or leaves a tenant in the basement? For each
          scenario, find the clause that answers it. If you cannot find one, ask. “There is no
          clause” is useful information.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Put your questions in one email instead of sprinkling them across a week of phone calls.
          Ask your agent to point to the specific paragraph, not just summarize it. And never accept
          “don't worry about that” as an answer to a question about money you cannot afford to lose.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Contract law is state law, and no article — including this one — can tell you what a
          specific form means in your jurisdiction.{' '}
          <a
            href="https://www.consumerfinance.gov/owning-a-home/prepare/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium"
          >
            The CFPB's plain-language guide to preparing for a mortgage
          </a>{' '}
          is a useful companion for the financing side. For the contract itself, the document and a
          local attorney are the authorities.
        </p>

        <TipBox title="💡 Three sentences you can copy">
          <p>
            “Can we set the inspection period to ten days instead of seven? I would rather not pay
            for a rush inspection.”
          </p>
          <p>
            “Please confirm in writing that the earnest money will be held in escrow until closing
            or a mutual release.”
          </p>
          <p>
            “We would like the HOA resale package delivered within three days of acceptance, with a
            five-day review period after delivery.”
          </p>
        </TipBox>

        <KeyTakeaway>
          <p>
            Verbal promises are not contract terms. If the seller agrees to fix the furnace, leave
            the washer and dryer, or extend your inspection, get it into a signed amendment before
            the deadline. The contract is the only version of the deal that exists after everyone
            stops being polite.
          </p>
        </KeyTakeaway>
      </section>
      {/* 10. Drafting it yourself (LawDepot) */}
      <section id="diy-drafting" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">
          If you are drafting the paperwork yourself
        </h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Not every purchase runs through two agents and a state association form. You might be
          buying from a private seller who has never listed a house, buying land, transferring a
          property between family members, or putting together a lease-option or seller-financing
          arrangement. In those situations the “standard” form may not exist, and Googling “free
          house contract” is how people end up with a document that omits the deposit terms, the
          legal description, or any way to get out if the title is defective.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          A better middle ground is a state-specific template that walks you through the clauses
          buyers forget. {' '}
          <a
            href={LAWDEPOT_PURCHASE_AGREEMENT.url}
            target="_blank"
            rel={LAWDEPOT_PURCHASE_AGREEMENT.rel}
            className="text-primary font-medium underline hover:opacity-80"
          >
            LawDepot's Real Estate Purchase Agreement
          </a>{' '}
          asks for the parties, the property description, the purchase price, the deposit, the
          contingencies, the closing date and the possession terms, then generates a document for
          your state. It is not a substitute for an attorney, but it is a more sensible starting
          point than a blank page — and far cheaper than asking a lawyer to draft a simple contract
          from scratch.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          If you are still at the offer stage and want to put terms in writing before a formal
          agreement exists,{' '}
          <a
            href={LAWDEPOT_OFFER_TO_PURCHASE.url}
            target="_blank"
            rel={LAWDEPOT_OFFER_TO_PURCHASE.rel}
            className="text-primary font-medium underline hover:opacity-80"
          >
            LawDepot's Offer to Purchase Real Estate
          </a>{' '}
          covers the earlier step: identifying the property, stating the price and deposit, and
          setting the deadlines that will eventually become the contract's contingencies.
        </p>

        <div className="bg-card border border-border rounded-xl p-6 my-6">
          <div className="flex items-center gap-2 mb-3">
            <FileText className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-foreground">Two documents, two stages</h3>
          </div>
          <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
            <li>
              <strong className="text-foreground">Offer to Purchase:</strong> the first written
              offer. Useful when there is no agent-prepared form and you want the price, deposit and
              deadlines on paper.
            </li>
            <li>
              <strong className="text-foreground">Real Estate Purchase Agreement:</strong> the full
              contract. Use it once the offer is accepted and you need contingencies, closing terms
              and possession in one document.
            </li>
          </ul>
          <p className="text-xs text-muted-foreground leading-relaxed mt-4">
            {LAWDEPOT_PURCHASE_AGREEMENT.terms}{' '}
            <Link to="/disclaimer" className="text-primary underline hover:opacity-80">
              Affiliate disclosure
            </Link>
          </p>
        </div>

        <WarningBox title="⚠️ A template is not legal advice">
          <p>
            LawDepot is a document service, not a law firm, and using a template does not create an
            attorney-client relationship. If the deal involves a large amount of money, an unusual
            property, a family transfer, seller financing, or a tenant in place, have a local real
            estate attorney review the final document. Some states also require an attorney at
            closing. The template gets you organized; the attorney keeps you out of trouble.
          </p>
        </WarningBox>
      </section>
      {/* 11. Bottom line */}
      <section id="bottom-line" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">
          The bottom line
        </h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          A home purchase contract is the largest financial document most people will ever sign.
          The price gets all the attention, but the price is one line. The dates, the deposit terms,
          the contingencies and the initials decide what happens when something goes wrong — and
          something usually does.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Read it before you sign, not after. Ask for an extra day on the inspection if the
          schedule is tight. Ask where the deposit is held. Ask what “as-is” means in your state.
          Ask for the HOA documents early and read the reserve study. If an agent or seller pressures
          you to skip those steps, that is information about the deal, not a reason to hurry.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Sarah got lucky. Her story ended with a $6,500 credit and a roof that is still somebody
          else's problem. The next buyer with the same seven-day clause may not be. The best deal is
          not the one you win fastest. It is the one you fully understand.
        </p>
        <p className="text-lg leading-relaxed text-foreground">
          If you are still working out what you can afford before you start writing offers, run the
          numbers first with our{' '}
          <Link to="/affordability-calculator" className="text-primary hover:underline font-medium">
            affordability calculator
          </Link>{' '}
          and{' '}
          <Link to="/mortgage-calculator" className="text-primary hover:underline font-medium">
            mortgage calculator
          </Link>
          . Knowing your ceiling makes it much easier to walk away from a contract that asks you to
          take on more risk than you can carry.
        </p>
      </section>

      <CalculatorCTA
        to="/mortgage-calculator"
        label="Know your numbers before you negotiate"
        description="See your full PITI payment, closing-cost range and cash needed to close in seconds. Free, no sign-up."
      />

      {/* Continue Reading */}
      <div className="mt-10 pt-8 border-t border-border">
        <h3 className="text-lg font-semibold text-foreground mb-4">Continue Reading</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link to="/blog/closing-costs-explained" className="block p-4 bg-card border border-border rounded-lg hover:shadow-sm transition-all group">
            <div className="text-xs text-muted-foreground mb-1">Related guide</div>
            <div className="font-medium text-foreground group-hover:text-primary transition-colors">Closing Costs Explained: What You Pay Beyond the Down Payment</div>
          </Link>
          <Link to="/blog/can-i-buy-with-5-percent-down" className="block p-4 bg-card border border-border rounded-lg hover:shadow-sm transition-all group">
            <div className="text-xs text-muted-foreground mb-1">Related guide</div>
            <div className="font-medium text-foreground group-hover:text-primary transition-colors">Can I Buy a House With 5% Down?</div>
          </Link>
          <Link to="/blog/fha-vs-conventional" className="block p-4 bg-card border border-border rounded-lg hover:shadow-sm transition-all group">
            <div className="text-xs text-muted-foreground mb-1">Related guide</div>
            <div className="font-medium text-foreground group-hover:text-primary transition-colors">FHA vs Conventional: Which Loan Costs Less?</div>
          </Link>
          <Link to="/closing-cost-calculator" className="block p-4 bg-card border border-border rounded-lg hover:shadow-sm transition-all group">
            <div className="text-xs text-muted-foreground mb-1">Tools</div>
            <div className="font-medium text-foreground group-hover:text-primary transition-colors">Estimate Your Closing Costs →</div>
          </Link>
        </div>
      </div>

      <AllCalculatorsGrid />

      {/* Curated topical links between posts - see RelatedPosts.tsx */}
      <RelatedPosts />

    </article>
  );
}

