import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, FileText, ExternalLink, ClipboardCheck } from 'lucide-react';
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
// Same two LawDepot affiliate offers the home-purchase-contract guide uses
// (see src/data/affiliate-offers.ts). The CJ account has two live LawDepot
// links — the Real Estate Purchase Agreement and the Offer to Purchase — so we
// reuse them here rather than invent a tracking URL for a lease product.
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

export default function LeaseClausesThatCostRenters() {
  return (
    <article className="max-w-3xl mx-auto py-8 px-4">
      <BlogSchema
        title="Rent vs. Buy in 2026: Don't Sign That Lease Until You Check These 3 Clauses"
        description="An early-termination fee, a vague maintenance clause and an automatic renewal deadline can cost a renter thousands. How to read those three terms, and the five-minute check to run before you sign."
        datePublished="2026-11-18"
        dateModified="2026-11-18"
        url="https://www.mortgagepro.io/blog/lease-clauses-that-cost-renters"
        faqs={[
          {
            q: 'Can a landlord keep my security deposit if I break my lease?',
            a: 'Not automatically. A deposit is security, not a termination fee, and most states limit deductions to unpaid rent, unpaid utilities and damage beyond normal wear and tear, with an itemized statement required by a deadline. If the lease has a separate early termination fee, read that clause too, because it can be owed even when the deposit comes back.',
          },
          {
            q: 'Am I responsible for rent after I move out early?',
            a: 'Often, yes, but usually not for the entire remaining term. Most states require the landlord to make reasonable efforts to re-rent the unit, and a landlord cannot collect rent from both you and the new tenant for the same months. Some leases replace that exposure with a fixed early termination fee.',
          },
          {
            q: 'Can my lease renew automatically without a new signature?',
            a: 'Yes, if the lease contains an automatic renewal clause. Miss the notice deadline and you can be locked into another fixed term, or rolled into a month-to-month tenancy at a higher rent. Notice periods of 30, 60 and 90 days are all common, and the lease may require a specific delivery method.',
          },
          {
            q: 'Who is responsible for repairs in a rental?',
            a: 'In most states the landlord must keep the property habitable and maintain major systems such as heat, plumbing and electrical service, and that duty generally cannot be waived by the lease. You are responsible for damage you or your guests cause, and for minor items the lease specifically assigns to you.',
          },
        ]}
      />

      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <span className="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300 rounded-full px-3 py-1 font-medium text-xs">
            Guides
          </span>
          <span>November 18, 2026</span>
          <span>·</span>
          <span>12 min read</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4 leading-tight">
          Rent vs. Buy in 2026: Don't Sign That Lease Until You Check These 3 Clauses
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          My friend Maya and her boyfriend spent three months deciding whether to buy a house or keep
          renting. They ran the numbers, watched rates, and landed on an answer that made sense: rent one
          more year, save a bigger down payment, buy in 2027.
        </p>
        <p className="text-xl text-muted-foreground leading-relaxed mt-4">
          They found an apartment they liked, paid a $2,000 deposit, and signed a 12-month lease.
        </p>
        <p className="text-xl text-muted-foreground leading-relaxed mt-4">
          Six months later, Maya got a job offer in another city. She had to break the lease. Clause 14
          cost her two months of rent, and getting her deposit back took another six weeks of emails.
        </p>
        <p className="text-xl text-muted-foreground leading-relaxed mt-4">
          The decision to rent wasn't the mistake. Signing a document she hadn't read was.
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
            ['the-story', 'The Clause That Cost $5,600'],
            ['early-termination', 'Clause 1: Early Termination'],
            ['maintenance', 'Clause 2: Maintenance and Repairs'],
            ['renewal', 'Clause 3: Automatic Renewal'],
            ['checklist', 'The 5-Minute Lease Checklist'],
            ['paperwork', 'If You Want to Change the Lease'],
            ['bottom-line', 'The Bottom Line'],
            ['sources', 'Sources'],
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

      {/* 1. The story */}
      <section id="the-story" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">
          The Clause That Cost $5,600
        </h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Maya's lease was 14 pages. She read the first three — rent, deposit, pets — and skimmed the
          rest in the leasing office while the agent waited with a pen.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Clause 14 said that if the tenant vacates before the end of the term, the tenant owes an early
          termination fee equal to two months' rent, and that the security deposit may be applied to
          unpaid rent and damages.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          At $1,800 a month, that fee is $3,600. Add the $2,000 deposit, which the landlord held for a
          month while "repainting" was itemized, and the bill came to about $5,600 before Maya disputed
          part of it — right when she was starting a job in a different city.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Nothing in that lease was illegal. That is exactly what makes this kind of clause effective.
          Most of the expensive terms in a residential lease are perfectly lawful, printed in the same
          font as everything else, and still negotiable right up until both people sign.
        </p>
        <ExampleBox title="📌 What Maya actually paid">
          <p>
            Two months' rent at $1,800 = <strong>$3,600</strong> early termination fee.
          </p>
          <p>
            The $2,000 deposit was held for 30 days, then itemized: $1,200 for "repainting" and $800 for
            cleaning. Maya disputed the repainting charge with her move-in photos and recovered{' '}
            <strong>$1,200</strong>.
          </p>
          <p>
            Net cost of leaving six months early: <strong>$4,400</strong> — the fee plus the $800 the
            landlord kept — and six weeks of emails and phone calls she will not get back.
          </p>
        </ExampleBox>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          If you have run our{' '}
          <Link to="/rent-vs-buy-calculator" className="text-primary hover:underline font-medium">
            Rent vs Buy Calculator
          </Link>{' '}
          and renting wins for the next year or two, that is a legitimate answer. Renting buys you
          flexibility, and flexibility is worth real money when your down payment is still growing. But
          the lease is a separate commitment from the decision, and it can quietly take back the savings
          the calculator told you to protect.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Here are the three clauses that do the most damage, and what to ask for before you sign.
        </p>
      </section>

      {/* 2. Early termination */}
      <section id="early-termination" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">
          Clause 1: Early Termination
        </h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Most renters assume that breaking a lease means losing the security deposit and nothing more.
          That is rarely the whole bill. Depending on your state and the lease language, you can stay
          responsible for rent until the unit is re-rented or the term ends — and you may owe a separate
          fee on top of it.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Three different mechanisms can hit you at once: unpaid rent for the months you left behind, an
          early termination fee, and deductions from the deposit. They are separate line items, governed
          by different rules, and a lease can legally include all three.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          The good news is that rent is not usually owed for the entire remaining term. Most states
          require the landlord to make reasonable efforts to re-rent the unit and to credit what the new
          tenant pays. A handful of states do not impose that duty, which is why the same move-out can
          cost one month of rent in one state and six in another. What no state allows is collecting
          rent from you and the new tenant for the same unit and the same months.
        </p>
        <InfoBox title="A deposit is not a fee">
          <p>
            A security deposit is regulated separately from an early termination fee. Most states give
            the landlord a deadline — commonly two weeks to a month — to return the deposit or send an
            itemized statement of what was withheld, and they limit deductions to things like unpaid
            rent, unpaid utilities and damage beyond normal wear and tear.
          </p>
          <p>
            That means a lease clause saying the deposit is "forfeited" if you leave early does not
            automatically beat your state's statute. But the termination fee still stands if it is in
            the lease. That is how Maya ended up paying both.
          </p>
        </InfoBox>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Before you sign, read the clause for four things:
        </p>
        <ul className="space-y-3 my-5 text-lg leading-relaxed text-foreground">
          <li className="flex items-start gap-3">
            <span className="text-primary font-bold shrink-0">1.</span>
            <span>
              <strong>Is there a fee, and how is it calculated?</strong> A flat amount, one or two
              months' rent, or the rent remaining on the term are three very different numbers.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary font-bold shrink-0">2.</span>
            <span>
              <strong>How much notice does the lease require?</strong> Thirty days is common. Sixty is
              not unusual. The clock usually starts when the landlord receives notice, not when you send
              it.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary font-bold shrink-0">3.</span>
            <span>
              <strong>Does the landlord have to try to re-let?</strong> If the lease is silent, your
              state's mitigation rule fills the gap. If the lease says the fee is owed "regardless of
              re-letting," ask a local tenant advocate about it.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary font-bold shrink-0">4.</span>
            <span>
              <strong>Can you sublet or assign the lease with approval?</strong> A replacement tenant
              you bring is often the cheapest exit of all, but many leases prohibit it unless the clause
              says otherwise.
            </span>
          </li>
        </ul>
        <ExampleBox title="📌 The same six months, two exits">
          <p>
            <strong>Signed as offered:</strong> two months' rent ($3,600) plus the deposit withheld
            pending itemization. That is what Maya agreed to.
          </p>
          <p>
            <strong>Negotiated version:</strong> 30 days' written notice plus one month's rent ($1,800),
            with the deposit returned by the state deadline minus documented damage.
          </p>
          <p>
            Same apartment, same twelve months, <strong>$1,800 difference</strong> — one month of rent,
            and a much shorter argument.
          </p>
        </ExampleBox>
        <KeyTakeaway title="Ask what it costs to leave before you ask what it costs to stay">
          <p>
            The moment to negotiate a buyout is while the landlord still wants you to sign. Once you are
            the one asking to leave, you have no leverage and a signed contract. Even a small change —
            "one month's rent with 30 days' notice" instead of "two months' rent" — is worth asking for.
          </p>
        </KeyTakeaway>
        <WarningBox title="⚠️ The military exception, and a few others">
          <p>
            Servicemembers who receive permanent change-of-station orders, or orders for deployment of 90
            days or more, can terminate a residential lease under the Servicemembers Civil Relief Act.
            The notice has to be in writing and include a copy of the orders, and the lease generally ends
            30 days after the next rent due date.
          </p>
          <p>
            Many states add their own early-termination protections, including for victims of domestic
            violence and for units that become uninhabitable. Those rights are separate from whatever the
            lease says, so check your state's tenant guide before you assume a clause controls.
          </p>
        </WarningBox>
      </section>

      {/* 3. Maintenance */}
      <section id="maintenance" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">
          Clause 2: Maintenance and Repairs
        </h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          When you own the house, the plumber's invoice is yours. When you rent, it is the landlord's —
          unless the landlord decides you broke something. That ambiguity usually lives in one sentence:
          "Tenant is responsible for all minor repairs."
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Minor compared to what? If the air conditioning dies in July, the lease does not say who pays
          for the compressor. The landlord's answer may arrive with a bill attached.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Most states impose an implied warranty of habitability: the landlord has to keep the unit safe
          and functional — heat, water, plumbing, electrical service, structural elements, working smoke
          and carbon monoxide detectors — and a lease generally cannot waive that duty. What varies is
          the remedy. Some states let you repair and deduct, some let you withhold rent, and nearly all
          of them require written notice and a reasonable chance to fix the problem first.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          So the maintenance clause is doing two jobs at once. It defines the small stuff you handle, and
          it tries to blur the line on the expensive stuff. The fix is to replace an adjective with a
          number and a list.
        </p>
        <TipBox title="💡 A sentence worth asking for">
          <p>
            "Tenant is responsible for minor repairs and maintenance costing less than $75 per item.
            Landlord is responsible for HVAC, plumbing, electrical, structural repairs, and all
            appliances provided by Landlord."
          </p>
          <p>
            You do not need a lawyer to propose that. You need it in the lease, initialed by both
            parties, before you move in.
          </p>
        </TipBox>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          The other half of the maintenance trap is the deposit argument that arrives months later. It
          almost always comes down to one question: was this wear or damage? Here is how that line is
          usually drawn.
        </p>
        <ComparisonTable
          columns={[
            { key: 'item', header: 'Item' },
            { key: 'wear', header: 'Normal wear and tear' },
            { key: 'damage', header: 'Tenant-caused damage' },
          ]}
          rows={[
            {
              item: 'Paint',
              wear: 'Faded or scuffed along doorways and switches',
              damage: 'Holes, painted-over outlets, an unapproved color change',
            },
            {
              item: 'Carpet',
              wear: 'Worn traffic paths, flattened pile',
              damage: 'Burns, pet stains, torn seams',
            },
            {
              item: 'Walls and trim',
              wear: 'Small nail holes from hanging pictures',
              damage: 'Large anchors, deep gouges, torn-out shelving',
            },
            {
              item: 'Appliances',
              wear: 'An older appliance the landlord supplied simply aging',
              damage: 'Broken parts from misuse, missing pieces',
            },
            {
              item: 'Bathroom',
              wear: 'Loose grout, worn caulk',
              damage: 'Overflow damage, an unreported leak that spread',
            },
          ]}
          caption="A rough guide, not a legal definition. Your state's deposit statute and the move-in condition report control what can actually be withheld."
        />
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Photographs are what turn this from an argument into a record. Walk the unit with the landlord
          or agent, write down every existing scratch, stain, chip and broken blind, and get the condition
          report signed. Then photograph and video every room, including inside cabinets and closets, and
          email the whole set to yourself and to the landlord the same day.
        </p>
        <InfoBox title="If the landlord will not do a walkthrough">
          <p>
            Do it alone. Fill out your own condition report, date it, attach the photos, and email it to
            the landlord within 24 hours of getting the keys. A written record you created is far better
            than a memory you recite eight months later. If the landlord replies with corrections, even
            better — now you have their version in writing too.
          </p>
        </InfoBox>
      </section>

      {/* 4. Automatic renewal */}
      <section id="renewal" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">
          Clause 3: Automatic Renewal
        </h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Many leases include an automatic renewal provision: if neither side gives notice before a
          deadline, the lease renews on its own — often for another full year, sometimes month to month
          at a higher rent. The clause is not sneaky. The deadline is.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Notice periods of 30, 60 and 90 days are all common, and the clock usually starts when the
          landlord <em>receives</em> your notice, not when you mail it. Some leases also require certified
          mail or hand delivery, which means the email where you casually mentioned moving out does not
          count. Miss the window by a day and you can be on the hook for another twelve months.
        </p>
        <ExampleBox title="📌 The 60-day deadline, worked out">
          <p>
            The lease ends August 31 and requires 60 days' written notice. Sixty days before August 31 is
            July 2, so the notice has to arrive by July 2 — not be postmarked on July 2.
          </p>
          <p>
            If the lease requires certified mail, put it in the mail in the third week of June and keep the
            receipt. If it allows email, send it, ask for a reply confirming receipt, and save both
            messages.
          </p>
        </ExampleBox>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          If you are renting while you house-hunt, the renewal deadline is the one date that connects the
          two decisions. Closings slip, appraisals come in low, and sellers ask for a week. A lease that
          renews automatically turns a two-week delay into a year of paying rent for an apartment you no
          longer live in.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Before you sign, find the renewal section and answer three questions: how many days' notice,
          what delivery method, and what happens if you miss it. Then put the deadline in your calendar
          two weeks early, with the delivery method in the note.
        </p>
        <WarningBox title="⚠️ Verbal notice is not notice">
          <p>
            A phone call, a text, or a conversation in the hallway will not stop an automatic renewal in
            most leases. Neither will an email if the lease requires written notice by mail. Follow the
            method the clause names, keep proof, and ask the landlord to confirm in writing that they
            received it.
          </p>
        </WarningBox>
      </section>

      {/* 5. Checklist */}
      <section id="checklist" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">
          The 5-Minute Lease Checklist
        </h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Before you put pen to paper, scan the lease for these five items. Five minutes now is cheaper
          than one clause later.
        </p>
        <div className="bg-card border border-border rounded-xl p-6 my-6">
          <div className="flex items-center gap-2 mb-4">
            <ClipboardCheck className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-foreground">Before you sign</h3>
          </div>
          <ul className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <li>
              <strong className="text-foreground">1. Early termination.</strong> Is there a fee, and is it
              a flat amount or months of rent? How much notice does it require?
            </li>
            <li>
              <strong className="text-foreground">2. Security deposit.</strong> How much is it, when must
              it be returned, and what can the landlord deduct? Is there a separate cleaning or
              redecorating fee?
            </li>
            <li>
              <strong className="text-foreground">3. Maintenance.</strong> Who pays for HVAC, plumbing,
              electrical and the appliances the landlord supplies? Is there a dollar cap on "minor
              repairs"?
            </li>
            <li>
              <strong className="text-foreground">4. Renewal.</strong> Is there an automatic renewal
              clause, and what are the notice deadline and delivery method?
            </li>
            <li>
              <strong className="text-foreground">5. Notices.</strong> Does the lease require mail, email
              or hand delivery, and to what address? Does a notice count when sent or when received?
            </li>
          </ul>
        </div>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Two more lines worth finding while you are in there: the late-fee amount and the guest or pet
          rules. Neither is usually a deal-breaker, but both show up in deposit disputes. And if a clause
          contradicts a right your state gives you, the statute usually wins — but proving it is a
          dispute, not a convenience. Ask for the clause to be changed before you sign instead.
        </p>
      </section>

      {/* 6. Paperwork (LawDepot) */}
      <section id="paperwork" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">
          If You Want to Change the Lease
        </h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          You do not have to accept the first draft. Landlords negotiate more often than tenants expect,
          especially with a tenant who has good credit, a steady job and a clean rental history. The
          request is easier to grant when it arrives as a specific number rather than a feeling.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Put the change in writing. A conversation with the leasing agent is not a change to the lease;
          an addendum signed by both parties is. If you want to propose a change to your lease, a{' '}
          <a
            href={LAWDEPOT_PURCHASE_AGREEMENT.url}
            target="_blank"
            rel={LAWDEPOT_PURCHASE_AGREEMENT.rel}
            className="text-primary font-medium underline hover:opacity-80"
          >
            state-specific lease addendum template from LawDepot
          </a>{' '}
          may help you put the proposed terms in writing. The landlord still has to agree, and both
          parties should sign the updated agreement.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          The same logic applies when you leave. Verbal notice is how people end up in a renewal
          argument, so put it on paper with the date, the property address, your intended move-out date
          and the delivery method the lease requires. You can use a{' '}
          <a
            href={LAWDEPOT_OFFER_TO_PURCHASE.url}
            target="_blank"
            rel={LAWDEPOT_OFFER_TO_PURCHASE.rel}
            className="text-primary font-medium underline hover:opacity-80"
          >
            Termination by Tenant form from LawDepot
          </a>{' '}
          to create a formal written record of your notice.
        </p>

        <div className="bg-card border border-border rounded-xl p-6 my-6">
          <div className="flex items-center gap-2 mb-3">
            <FileText className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-foreground">Two requests worth making</h3>
          </div>
          <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
            <li>
              <strong className="text-foreground">A defined exit:</strong> 30 days' written notice plus a
              one-month buyout, instead of two months' rent with no notice credit.
            </li>
            <li>
              <strong className="text-foreground">A defined repair split:</strong> a dollar cap on minor
              repairs, with HVAC, plumbing, electrical and supplied appliances staying with the landlord.
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
            attorney-client relationship. Landlord-tenant law is set state by state, and some cities add
            their own rules on top. If the lease involves a large deposit, a rent-to-own arrangement, a
            sublet, or a dispute that has already started, have a local tenant attorney or legal aid
            office review the paperwork before you sign it.
          </p>
        </WarningBox>
      </section>

      {/* 7. Bottom line */}
      <section id="bottom-line" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">The Bottom Line</h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Renting is not throwing money away if it gives you the financial flexibility to buy later. That
          was Maya's plan, and it was a sound one. What cost her money was not the rent. It was a clause
          she never read.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Use the calculator for the financial decision and the lease for the legal one, because they
          answer different questions:
        </p>
        <ul className="space-y-3 my-5 text-lg leading-relaxed text-foreground">
          <li className="flex items-start gap-3">
            <span className="text-primary font-bold shrink-0">→</span>
            <span>
              <strong>The calculator:</strong> does buying beat renting in my market, at my price, over the
              years I actually plan to stay?
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary font-bold shrink-0">→</span>
            <span>
              <strong>The lease:</strong> what does it cost me to leave, who fixes the furnace, and when
              does this renew if I do nothing?
            </span>
          </li>
        </ul>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          If the answer to any of those three is "I don't know", you are not ready to sign. Ask the
          question, get the answer in writing, and make sure the answer is in the document — not just in
          the leasing agent's memory.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Maya's story ended reasonably. She paid the fee, recovered most of her deposit, and rented a
          smaller place in the new city — with a lease she read end to end before signing. Clause 14 is
          now the first thing she looks for. You can skip that tuition payment.
        </p>
        <p className="text-lg leading-relaxed text-foreground">
          If you are still deciding whether to rent or buy, start with the math:{' '}
          <Link to="/rent-vs-buy-calculator" className="text-primary hover:underline font-medium">
            our Rent vs Buy Calculator
          </Link>{' '}
          shows the breakeven year with your rent, your price and your state. If the answer is "keep
          renting for now", that is a plan. Just make the lease match it.
        </p>
      </section>

      <CalculatorCTA
        to="/rent-vs-buy-calculator"
        label="Run the rent vs buy math before you sign anything"
        description="Enter your rent, a home price and your state to see the exact year buying passes renting. Free, no sign-up."
      />

      {/* 8. Sources */}
      <section id="sources" className="mb-12">
        <div className="bg-muted/40 border border-border rounded-xl p-6">
          <h2 className="font-semibold text-foreground mb-4 flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Sources
          </h2>
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
            Landlord-tenant law is set by state and sometimes by city, so the federal resources below are
            a starting point rather than an answer. For the rules that apply to your address, use the
            state guide linked from these sites or call a local legal aid office.
          </p>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="https://www.hud.gov/topics/rental_assistance/tenantrights"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-primary hover:underline"
              >
                <ExternalLink className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>U.S. Department of Housing and Urban Development (HUD)</strong> — tenant rights
                  resources and rental assistance programs.
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://www.lawhelp.org"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-primary hover:underline"
              >
                <ExternalLink className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>LawHelp.org</strong> — state-by-state directory of nonprofit legal aid, plain
                  language tenant guides and free self-help forms.
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://www.justice.gov/servicemembers/servicemembers-civil-relief-act-scra"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-primary hover:underline"
              >
                <ExternalLink className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>U.S. Department of Justice</strong> — Servicemembers and Veterans Initiative
                  resources on the SCRA, including housing and lease protections.
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://www.lsc.gov/find-legal-aid"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-primary hover:underline"
              >
                <ExternalLink className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Legal Services Corporation</strong> — find a free legal aid office near you if a
                  deposit or termination dispute is already underway.
                </span>
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Continue Reading */}
      <div className="mt-10 pt-8 border-t border-border">
        <h3 className="text-lg font-semibold text-foreground mb-4">Continue Reading</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link to="/blog/rent-vs-buy-2026" className="block p-4 bg-card border border-border rounded-lg hover:shadow-sm transition-all group">
            <div className="text-xs text-muted-foreground mb-1">Related guide</div>
            <div className="font-medium text-foreground group-hover:text-primary transition-colors">Rent vs Buy in 2026: The Math Most People Get Wrong</div>
          </Link>
          <Link to="/blog/home-purchase-contract-traps" className="block p-4 bg-card border border-border rounded-lg hover:shadow-sm transition-all group">
            <div className="text-xs text-muted-foreground mb-1">Related guide</div>
            <div className="font-medium text-foreground group-hover:text-primary transition-colors">The Hidden Traps in a Home Purchase Contract</div>
          </Link>
          <Link to="/blog/is-buying-worth-it-2026" className="block p-4 bg-card border border-border rounded-lg hover:shadow-sm transition-all group">
            <div className="text-xs text-muted-foreground mb-1">Related guide</div>
            <div className="font-medium text-foreground group-hover:text-primary transition-colors">Is Buying a Home Worth It in 2026?</div>
          </Link>
          <Link to="/rent-vs-buy-calculator" className="block p-4 bg-card border border-border rounded-lg hover:shadow-sm transition-all group">
            <div className="text-xs text-muted-foreground mb-1">Calculator</div>
            <div className="font-medium text-foreground group-hover:text-primary transition-colors">Rent vs Buy Calculator</div>
          </Link>
        </div>
      </div>

      <AllCalculatorsGrid />

      {/* Curated topical links between posts - see RelatedPosts.tsx */}
      <RelatedPosts />

    </article>
  );
}
