import { BrowserRouter as Router, Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import HowToUseCalculator from '@/src/components/blog/HowToUseCalculator';
import AmortizationSchedule from '@/src/components/blog/AmortizationSchedule';
import BiWeeklyPayments from '@/src/components/blog/BiWeeklyPayments';
import WhatIsPmi from '@/src/components/blog/WhatIsPmi';
import ThirtyVsFifteenYear from '@/src/components/blog/ThirtyVsFifteenYear';
import HowMuchHouseCanIAfford from '@/src/components/blog/HowMuchHouseCanIAfford';
import MonthlyPaymentBreakdown from '@/src/components/blog/MonthlyPaymentBreakdown';
import IncomeNeeded from '@/src/components/blog/IncomeNeeded';
import WhyMostlyInterest from '@/src/components/blog/WhyMostlyInterest';
import PayOffEarly from '@/src/components/blog/PayOffEarly';
import FhaVsConventional from '@/src/components/blog/FhaVsConventional';
import IsBuyingWorthIt2026 from '@/src/components/blog/IsBuyingWorthIt2026';
import FivePercentDown from '@/src/components/blog/FivePercentDown';
import CreditScoreNeeded from '@/src/components/blog/CreditScoreNeeded';
import WhenShouldYouRefinance from '@/src/components/blog/WhenShouldYouRefinance';
import ClosingCostsExplained from '@/src/components/blog/ClosingCostsExplained';
import RentVsBuy2026 from '@/src/components/blog/RentVsBuy2026';
import ArmVsFixedArm from '@/src/components/blog/ArmVsFixedArm';
import PropertyTaxesAndInsurance from '@/src/components/blog/PropertyTaxesAndInsurance';
import DebtToIncomeRatio from '@/src/components/blog/DebtToIncomeRatio';
import ContactPage from '@/src/components/pages/ContactPage';
import EditorialPolicyPage from '@/src/components/pages/EditorialPolicyPage';
import CalculatorMethodologyPage from '@/src/components/pages/CalculatorMethodologyPage';
import RouteMetaManager from '@/src/components/pages/RouteMetaManager';
import NotFoundPage from '@/src/components/pages/NotFoundPage';
import {
  MortgageCalculatorPage,
  AffordabilityCalculatorPage,
  BiWeeklyCalculatorPage,
  RentVsBuyCalculatorPage,
  FIRECalculatorPage,
  PmiCalculatorPage,
  RefinanceCalculatorPage,
  ClosingCostCalculatorPage,
  ExtraPaymentCalculatorPage,
  ArmVsFixedCalculatorPage,
} from '@/src/components/pages/CalculatorPages';

import { Home, Calculator as CalculatorIcon, BookOpen, Info, ShieldAlert, Menu, X, ChevronDown } from 'lucide-react';

const CALCULATOR_LINKS = [
  { name: 'Mortgage Calculator', path: '/mortgage-calculator' },
  { name: 'Affordability Calculator', path: '/affordability-calculator' },
  { name: 'Bi-Weekly Calculator', path: '/biweekly-mortgage-calculator' },
  { name: 'Rent vs Buy Calculator', path: '/rent-vs-buy-calculator' },
  { name: 'FIRE Impact Calculator', path: '/fire-impact-calculator' },
  { name: 'PMI Calculator', path: '/pmi-calculator' },
  { name: 'Refinance Calculator', path: '/refinance-calculator' },
  { name: 'Closing Cost Calculator', path: '/closing-cost-calculator' },
  { name: 'Extra Payment Calculator', path: '/extra-payment-calculator' },
  { name: 'ARM vs Fixed Calculator', path: '/arm-vs-fixed-calculator' },
];

function DropdownNav({ isMobile = false, onItemClick }: { isMobile?: boolean; onItemClick?: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const isCalculatorActive = location.pathname.startsWith('/calculator') || 
    CALCULATOR_LINKS.some(l => location.pathname.startsWith(l.path));

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (isMobile) {
    return (
      <div className="border-l-4 border-transparent">
        <div 
          className={`flex items-center px-4 py-3 text-base font-medium transition-colors cursor-pointer ${
            isCalculatorActive 
              ? 'bg-primary/10 border-l-4 border-primary text-primary' 
              : 'text-muted-foreground hover:bg-muted'
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <CalculatorIcon className="w-5 h-5 mr-3" />
          Calculators
          <ChevronDown className={`w-4 h-4 ml-auto transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </div>
        {isOpen && (
          <div className="pl-10 space-y-1 pb-2">
            {CALCULATOR_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => { setIsOpen(false); onItemClick?.(); }}
                className={`block px-3 py-2 text-sm rounded-md transition-colors ${
                  location.pathname === link.path
                    ? 'bg-primary/10 text-primary font-medium'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`inline-flex items-center px-1 pt-1 border-b-2 text-base font-medium transition-colors gap-1 ${
          isCalculatorActive
            ? 'border-primary text-foreground'
            : 'border-transparent text-muted-foreground hover:border-border hover:text-foreground'
        }`}
      >
        <CalculatorIcon className="w-4 h-4" />
        Calculators
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-64 bg-background border border-border rounded-lg shadow-lg z-50 py-2 max-h-[70vh] overflow-y-auto">
          {CALCULATOR_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-2.5 text-sm transition-colors ${
                location.pathname === link.path
                  ? 'bg-primary/10 text-primary font-medium'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Calculators placed right after Home
  const linksBefore = [
    { name: 'Home', path: '/', icon: Home },
  ];
  const linksAfter = [
    { name: 'Blog', path: '/blog', icon: BookOpen },
    { name: 'About', path: '/about', icon: Info },
  ];

  const closeMobile = () => setIsOpen(false);

  const navLinkClass = (isActive: boolean) =>
    `inline-flex items-center px-1 pt-1 border-b-2 text-base font-medium transition-colors ${
      isActive
        ? 'border-primary text-foreground'
        : 'border-transparent text-muted-foreground hover:border-border hover:text-foreground'
    }`;

  return (
    <nav className="border-b bg-background sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
              M
            </div>
            <span className="font-bold text-xl tracking-tight text-foreground">MortgagePro</span>
          </div>

          {/* Desktop nav */}
          <div className="hidden sm:flex sm:items-center sm:gap-8">
            {linksBefore.map((link) => {
              const isActive = location.pathname === link.path;
              const Icon = link.icon;
              return (
                <Link key={link.path} to={link.path} className={navLinkClass(isActive)}>
                  <Icon className="w-4 h-4 mr-2" />
                  {link.name}
                </Link>
              );
            })}
            <DropdownNav />
            {linksAfter.map((link) => {
              const isActive = location.pathname === link.path || location.pathname.startsWith(link.path);
              const Icon = link.icon;
              return (
                <Link key={link.path} to={link.path} className={navLinkClass(isActive)}>
                  <Icon className="w-4 h-4 mr-2" />
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile hamburger */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden border-t">
          <div className="pt-2 pb-3 space-y-1">
            {[...linksBefore, ...linksAfter].map((link) => {
              const isActive = link.path === '/' ? location.pathname === '/' : location.pathname.startsWith(link.path);
              const Icon = link.icon;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={closeMobile}
                  className={`flex items-center px-4 py-3 text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-primary/10 border-l-4 border-primary text-primary'
                      : 'border-l-4 border-transparent text-muted-foreground hover:bg-muted hover:border-border hover:text-foreground'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  {link.name}
                </Link>
              );
            })}
            <DropdownNav isMobile onItemClick={closeMobile} />
          </div>
        </div>
      )}
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-muted/50 border-t mt-auto">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">M</div>
              <span className="font-bold text-lg text-foreground">MortgagePro</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Free mortgage calculators and educational content for first-time homebuyers. Transparent, independent, and always free.
            </p>
          </div>
          
          {/* Trust & Legal */}
          <div>
            <h3 className="font-semibold text-foreground mb-3 text-sm">Trust & Legal</h3>
            <div className="flex flex-col gap-2 text-sm">
              <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">About Us</Link>
              <Link to="/editorial-policy" className="text-muted-foreground hover:text-foreground transition-colors">Editorial Policy</Link>
              <Link to="/calculator-methodology" className="text-muted-foreground hover:text-foreground transition-colors">Calculator Methodology</Link>
              <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact Us</Link>
            </div>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="font-semibold text-foreground mb-3 text-sm">Legal</h3>
            <div className="flex flex-col gap-2 text-sm">
              <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
              <Link to="/disclaimer" className="text-muted-foreground hover:text-foreground transition-colors">Disclaimer</Link>
            </div>
            <div className="flex items-center gap-2 mt-4 text-muted-foreground">
              <ShieldAlert className="w-4 h-4" />
              <span className="text-xs">Not intended to provide financial advice. Estimates only.</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-6 text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} MortgagePro. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

// Hero CTA dropdown — lets users pick which calculator to open
function HeroCalculatorDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors text-lg gap-2"
      >
        <CalculatorIcon className="w-5 h-5" />
        Open a Calculator
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-2 w-72 bg-background border border-border rounded-xl shadow-xl z-50 py-2 overflow-hidden">
          <p className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Choose a Calculator</p>
          {CALCULATOR_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-4 py-2.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
            >
              <CalculatorIcon className="w-4 h-4 shrink-0 text-primary" />
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

// ============================================================
// Home Page — rich content for SEO and user engagement
// ============================================================
function HomePage() {
  const calculatorTools = [
    {
      icon: "🏠",
      title: "Standard Mortgage Calculator",
      desc: "Calculate your monthly payment with real-time sliders for home price, down payment, interest rate, and loan term. See the full amortization schedule and your PITI breakdown at a glance.",
      link: "/mortgage-calculator",
    },
    {
      icon: "📅",
      title: "Bi-Weekly vs Monthly",
      desc: "Compare standard monthly payments against an accelerated bi-weekly schedule. See how much interest you can save and how many years you can shave off your loan.",
      link: "/biweekly-mortgage-calculator",
    },
    {
      icon: "🏡",
      title: "Rent vs Buy Analyzer",
      desc: "Is renting or buying the smarter financial move for you? This tool factors in home appreciation, rent inflation, property taxes, and closing costs to find your breakeven year.",
      link: "/rent-vs-buy-calculator",
    },
    {
      icon: "🔥",
      title: "FIRE Impact Calculator",
      desc: "Thinking about Financial Independence or Early Retirement? See how buying a home could delay — or accelerate — your FIRE timeline.",
      link: "/fire-impact-calculator",
    },
  ];

  const blogPosts = [
    {
      title: "What Is a Good Debt-to-Income Ratio for Buying a House?",
      path: "/blog/debt-to-income-ratio",
      date: "August 3, 2026",
    },
    {
      title: "How Much Are Property Taxes and Insurance on a Mortgage?",
      path: "/blog/property-taxes-and-insurance",
      date: "July 29, 2026",
    },
    {
      title: "Rent vs Buy in 2026: The Decision That's Keeping Everyone Up at Night",
      path: "/blog/rent-vs-buy-2026",
      date: "July 24, 2026",
    },
    {
      title: "ARM vs Fixed Mortgage: Which One Makes Sense Right Now?",
      path: "/blog/arm-vs-fixed-arm",
      date: "July 20, 2026",
    },
    {
      title: "Closing Costs Explained: The Money You Need Beyond the Down Payment",
      path: "/blog/closing-costs-explained",
      date: "July 12, 2026",
    },
    {
      title: "When Should You Refinance Your Home Loan?",
      path: "/blog/when-should-you-refinance",
      date: "July 10, 2026",
    },
    {
      title: "How Much Will My Monthly Mortgage Payment Be? (PITI Explained)",
      path: "/blog/monthly-payment-breakdown",
      date: "June 5, 2026",
    },
    {
      title: "What Credit Score Do I Need to Buy a House?",
      path: "/blog/credit-score-needed",
      date: "July 1, 2026",
    },
    {
      title: "Can I Buy a House With 5% Down?",
      path: "/blog/can-i-buy-with-5-percent-down",
      date: "June 25, 2026",
    },
    {
      title: "Is Buying a Home Still Worth It in 2026?",
      path: "/blog/is-buying-worth-it-2026",
      date: "June 19, 2026",
    },
    {
      title: "FHA vs Conventional Loan: Which One Actually Costs You Less?",
      path: "/blog/fha-vs-conventional",
      date: "June 19, 2026",
    },
    {
      title: "Should I Pay Off My Mortgage Early?",
      path: "/blog/pay-off-early",
      date: "June 10, 2026",
    },
    {
      title: "Why Do Mortgage Payments Go Mostly to Interest?",
      path: "/blog/why-mostly-interest",
      date: "June 9, 2026",
    },
    {
      title: "How Much Income Do I Need for a $500,000 House?",
      path: "/blog/income-needed",
      date: "June 5, 2026",
    },
    {
      title: "30-Year vs 15-Year Mortgage: The Decision That Shapes Your Future",
      path: "/blog/30-vs-15-year",
      date: "May 24, 2026",
    },
    {
      title: "How Much House Can I Afford? A Step-by-Step Guide",
      path: "/blog/how-much-house-can-i-afford",
      date: "May 23, 2026",
    },
    {
      title: "PMI in Mortgages: What It Is and How to Get Rid of It",
      path: "/blog/what-is-pmi",
      date: "May 22, 2026",
    },
    {
      title: "Bi-Weekly Mortgage Payments: Are They Worth It?",
      path: "/blog/biweekly-payments",
      date: "May 20, 2026",
    },
  ];

  const faqs = [
    {
      q: "How is my monthly mortgage payment calculated?",
      a: "Your monthly payment (often called PITI) has four components: Principal (the loan amount you borrowed), Interest (the cost of borrowing), Taxes (property taxes), and Insurance (homeowner's insurance). Our calculator uses the standard amortization formula: M = P × [r(1+r)^n] / [(1+r)^n − 1], where P is the loan amount, r is the monthly interest rate, and n is the number of payments.",
    },
    {
      q: "What credit score do I need to buy a house?",
      a: "Minimum credit score requirements vary by loan type. Conventional loans typically require 620+, FHA loans allow 580 (or 500 with 10% down), and VA loans have no official minimum but most lenders look for 620+. A higher score can qualify you for a lower interest rate, which can save tens of thousands of dollars over the life of the loan.",
    },
    {
      q: "How much should I put down on a house?",
      a: "While 20% down eliminates Private Mortgage Insurance (PMI), many first-time buyers put down much less. FHA loans require as little as 3.5% down, and conventional loans can go as low as 3–5%. However, a smaller down payment means higher monthly payments and the added cost of PMI — typically 0.5% to 1% of the loan amount annually.",
    },
    {
      q: "What is PMI and when can I cancel it?",
      a: "PMI (Private Mortgage Insurance) protects the lender, not you. It's required when your down payment is less than 20% of the home's value. You can request cancellation once your loan balance reaches 80% of the home's original value, and it must be automatically canceled at 78%. Making extra principal payments can help you reach this threshold faster.",
    },
    {
      q: "Should I choose a 30-year or 15-year mortgage?",
      a: "A 30-year mortgage offers lower monthly payments but you'll pay significantly more interest over time. A 15-year mortgage typically has a lower interest rate and cuts your total interest roughly in half, but the monthly payment is much higher. The right choice depends on your cash flow, other financial goals, and how long you plan to stay in the home.",
    },
    {
      q: "What is an amortization schedule?",
      a: "An amortization schedule breaks down every mortgage payment into principal and interest. In the early years, the vast majority of your payment goes toward interest — often 80% or more. Over time, this reverses. Understanding your amortization schedule can help you decide whether making extra payments, refinancing, or choosing a shorter term makes sense for you.",
    },
    {
      q: "Are bi-weekly mortgage payments worth it?",
      a: "Making half your monthly payment every two weeks results in 26 half-payments per year — the equivalent of 13 full monthly payments instead of 12. This extra payment per year can shave 4–5 years off a 30-year loan and save tens of thousands of dollars in interest. Before setting this up, confirm your lender applies payments correctly and check for any fees.",
    },
    {
      q: "How much house can I afford based on my income?",
      a: "Lenders typically follow the 28/36 rule: your total monthly housing costs should not exceed 28% of your gross monthly income, and your total debt payments (housing + car loans + student loans + credit cards) should not exceed 36%. For example, with a $100,000 annual income ($8,333/month), your housing budget would be about $2,333/month maximum.",
    },
    {
      q: "What's included in closing costs?",
      a: "Closing costs typically range from 2% to 5% of the home's purchase price. They include loan origination fees, appraisal, title search and insurance, attorney fees, prepaid property taxes, homeowners insurance, and escrow deposits. Some costs are negotiable, and you may be able to roll them into the loan or negotiate for the seller to pay a portion.",
    },
    {
      q: "How does my interest rate affect my monthly payment?",
      a: "Even a small change in interest rate can have a big impact. On a $400,000 loan, a 6% rate gives a monthly P&I payment of about $2,398, while a 7% rate increases it to $2,661 — that's $263 more per month and nearly $95,000 more in interest over 30 years. Use our interactive calculator to see how different rates affect your specific scenario.",
    },
  ];

  return (
    <div className="space-y-16 pb-16">

      {/* ========== HERO ========== */}
      <section className="flex flex-col items-center text-center pt-8 md:pt-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
          Free Mortgage Calculator & Home Financing Guide
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed">
          Professional-grade calculators, deep educational content, and transparent data — built for first-time buyers, 
          refinancers, and FIRE enthusiasts navigating the US real estate market.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <HeroCalculatorDropdown />
          <Link
            to="/blog"
            className="inline-flex items-center justify-center bg-secondary text-secondary-foreground px-8 py-3 rounded-md font-medium hover:bg-secondary/80 transition-colors text-lg border border-border"
          >
            <BookOpen className="w-5 h-5 mr-2" />
            Read Guides & Articles
          </Link>
        </div>
      </section>

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

      {/* ========== WHY US ========== */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-8 text-center">Why Use MortgagePro?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Interactive Real-Time Calculators</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Unlike static calculators that give you a single number, our tools respond instantly as you adjust sliders. 
              Drag the home price, down payment, or interest rate to see your monthly payment change in real time — 
              with visual charts that show exactly where every dollar goes.
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Full Transparency, No Upsells</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We don't ask for your email, phone number, or any personal data. All calculations happen locally in your 
              browser. No ads disguised as "lender recommendations." No sales calls. Just the math — clear, accurate, 
              and honest.
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="text-3xl mb-3">📍</div>
            <h3 className="text-lg font-semibold text-foreground mb-2">State-Specific Accuracy</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Property taxes and insurance costs vary wildly across the US. Our calculators include real state-level data 
              — from California's 0.76% effective tax rate to New Jersey's 2.4% — so your estimates are grounded in 
              the reality of your local market.
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="text-3xl mb-3">🧠</div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Deep Educational Content</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Every article we publish is researched and cross-verified against authoritative sources 
              (CFPB, Investopedia, IRS guidelines) to ensure accuracy. We don't just give you a number — 
              we help you understand the <em>why</em> behind it, so you can make informed decisions with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* ========== ALL 10 CALCULATORS ========== */}
      <section className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-2 text-center">All Calculators</h2>
        <p className="text-muted-foreground text-center mb-8">
          Choose the tool that matches your situation — or use them all to build a complete picture.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: "🏠", title: "Mortgage Calculator", desc: "Monthly payment with sliders, PITI breakdown, amortization chart.", link: "/mortgage-calculator" },
            { icon: "💰", title: "Affordability Calculator", desc: "How much house can you afford? 28/36 rule with state data.", link: "/affordability-calculator" },
            { icon: "📅", title: "Bi-Weekly Calculator", desc: "Compare standard vs bi-weekly. Save interest, pay off early.", link: "/biweekly-mortgage-calculator" },
            { icon: "🏡", title: "Rent vs Buy Analyzer", desc: "Find your breakeven year with appreciation and investment returns.", link: "/rent-vs-buy-calculator" },
            { icon: "🔥", title: "FIRE Impact Calculator", desc: "How home buying affects your early retirement timeline.", link: "/fire-impact-calculator" },
            { icon: "🛡️", title: "PMI Calculator", desc: "Calculate PMI cost, cancellation timeline, and total paid.", link: "/pmi-calculator" },
            { icon: "🔄", title: "Refinance Calculator", desc: "Compare current vs refi. Break-even point and lifetime savings.", link: "/refinance-calculator" },
            { icon: "📋", title: "Closing Cost Calculator", desc: "Itemized closing costs with state-specific data.", link: "/closing-cost-calculator" },
            { icon: "💵", title: "Extra Payment Calculator", desc: "See how extra principal payments save interest and time.", link: "/extra-payment-calculator" },
            { icon: "📊", title: "ARM vs Fixed Calculator", desc: "Compare 30yr/15yr fixed vs 5/1 and 7/1 ARMs.", link: "/arm-vs-fixed-calculator" },
          ].map((tool, i) => (
            <Link
              key={i}
              to={tool.link}
              className="group bg-card border border-border rounded-xl p-5 hover:shadow-md hover:border-primary/30 transition-all duration-200"
            >
              <div className="text-2xl mb-3">{tool.icon}</div>
              <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {tool.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {tool.desc}
              </p>
            </Link>
          ))}
        </div>
      </section>

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

      {/* ========== LATEST ARTICLES ========== */}
      <section className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">Latest Articles</h2>
            <p className="text-muted-foreground">In-depth guides and strategies published by our editorial process.</p>
          </div>
          <Link to="/blog" className="text-sm text-primary hover:underline font-medium whitespace-nowrap">
            View all articles →
          </Link>
        </div>
        <div className="space-y-3">
          {blogPosts.map((post, i) => (
            <Link
              key={i}
              to={post.path}
              className="group flex items-center justify-between bg-card border border-border rounded-lg px-5 py-4 hover:shadow-sm hover:border-primary/30 transition-all duration-200"
            >
              <span className="text-foreground group-hover:text-primary transition-colors font-medium">
                {post.title}
              </span>
              <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">{post.date}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-2 text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-muted-foreground text-center mb-8">
          Answers to the most common questions about mortgages, payments, and our tools.
        </p>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <details key={i} className="group bg-card border border-border rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer text-foreground font-medium hover:bg-muted/50 transition-colors list-none">
                <span className="pr-4">{faq.q}</span>
                <svg
                  className="w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-200 group-open:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed border-t border-border pt-3">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

    </div>
  );
}


function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold tracking-tight mb-6">About MortgagePro</h1>
      <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
          <p className="text-lg leading-relaxed">
            MortgagePro is your independent guide to smarter home financing. Founded by <strong>Chong Song</strong>, a passionate software developer and personal finance enthusiast, this platform was born out of a simple frustration: most mortgage calculators are confusing, opaque, or loaded with hidden sales pitches.
          </p>
          <h2 className="text-2xl font-semibold text-foreground mt-8">Our Mission</h2>
          <p>
            We believe that understanding the math behind your mortgage shouldn't require a finance degree — or a call to a salesperson. Our goal is to build the most intuitive and transparent mortgage tools on the web, empowering you to run your own numbers and gain the confidence to make one of life's biggest financial decisions.
          </p>
          <h2 className="text-2xl font-semibold text-foreground mt-8">Meet the Founder</h2>
          <p>
            Hi, I'm <strong>Chong Song</strong>. My background is in software engineering, but my passion lies in dissecting the financial structures that shape our lives. I built MortgagePro after spending weeks analyzing amortization tables for my own home purchase and realizing how much hidden information exists in a standard loan agreement.
          </p>
          <p>
            I'm dedicated to maintaining this platform as an independent, ad-supported resource, ensuring all tools remain free for everyone.
          </p>
          <h2 className="text-2xl font-semibold text-foreground mt-8">Our Editorial Process</h2>
          <p>
            Accuracy matters, especially when it comes to your money. Every article is researched, written, and reviewed through the MortgagePro editorial process — grounded in publicly available financial data and authoritative sources including Investopedia, the Consumer Financial Protection Bureau (CFPB), and official IRS guidelines. Each piece undergoes rigorous cross-verification before publication to ensure the information you receive is reliable, clear, and up to date.
          </p>
        <h2 className="text-2xl font-semibold text-foreground mt-8">What We Offer</h2>
        <p className="text-muted-foreground">
          All of our tools are free to use and run directly in your browser — no data is ever stored or shared.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Interactive Mortgage Calculator</strong> — Real-time monthly payment estimates with adjustable sliders for home price, down payment, interest rate, and loan term.</li>
          <li><strong>Bi-Weekly vs Monthly Comparison</strong> — See exactly how much you can save by switching to bi-weekly payments.</li>
          <li><strong>Rent vs Buy Analysis</strong> — Data-driven comparison to determine whether renting or buying makes more financial sense in your situation.</li>
          <li><strong>FIRE Impact Calculator</strong> — Understand how buying a home affects your path to Financial Independence / Retire Early.</li>
          <li><strong>State-Specific Data</strong> — Location-aware property tax rates and insurance estimates for more accurate calculations.</li>
        </ul>
        <h2 className="text-2xl font-semibold text-foreground mt-8">Editorial Independence & Disclaimer</h2>
        <p>
          All tools and content are built with editorial independence as our core principle. We do not accept payment to feature specific lenders or products.
        </p>
        <p>
          <strong>Important Disclaimer:</strong> MortgagePro is an educational platform for informational purposes only. We do not provide financial, investment, or legal advice. All financial decisions should be made in consultation with a qualified professional. Please review our full <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link> and <Link to="/disclaimer" className="text-primary hover:underline">Terms of Use</Link>.
        </p>
        <h2 className="text-2xl font-semibold text-foreground mt-8">Contact</h2>
        <p>
          I read every email. For suggestions, feedback, or corrections, reach out to <strong>hello@mortgagepro.io</strong>.
        </p>
      </div>
    </div>
  );
}

function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold tracking-tight mb-6">Privacy Policy</h1>
      <div className="text-muted-foreground space-y-6 leading-relaxed">
        <p><strong>Last updated:</strong> May 11, 2026</p>

        <h2 className="text-xl font-semibold text-foreground mt-6">1. Information We Collect</h2>
        <p>MortgagePro does not require user registration and does not collect personal information such as your name, email address, or phone number.</p>
        <p>We may collect anonymous usage data through:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Cookies and similar tracking technologies (e.g., Google Analytics, AdSense cookies)</li>
          <li>Anonymous aggregate data about page views and user interactions</li>
        </ul>

        <h3 className="text-lg font-semibold text-foreground mt-4">Important Note on Financial Data</h3>
        <p className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4 text-blue-800 dark:text-blue-300">
          Our mortgage calculators run entirely in your browser. We do not store, transmit, or have access to any financial figures you enter (loan amounts, interest rates, down payments, etc.).
        </p>

        <h2 className="text-xl font-semibold text-foreground mt-6">2. How We Use Your Information</h2>
        <p>Any data collected is used exclusively for:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Improving the user experience and website functionality</li>
          <li>Serving relevant advertisements via Google AdSense</li>
          <li>Analyzing traffic patterns to enhance content</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground mt-6">3. Third-Party Services</h2>
        <p>We use the following third-party services that may collect data:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Google AdSense</strong> — Serves personalized ads based on your browsing history. See <a href="https://policies.google.com/technologies/ads" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google's Advertising Privacy Policy</a>.</li>
          <li><strong>Cloudflare</strong> — Provides CDN and security services.</li>
          <li><strong>GitHub Pages</strong> — Hosting provider.</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground mt-6">4. Cookies</h2>
        <p>You can control cookie preferences through your browser settings. Disabling cookies may affect the functionality of certain website features.</p>

        <h2 className="text-xl font-semibold text-foreground mt-6">5. Do Not Track Signals</h2>
        <p>Our website does not respond to Do Not Track (DNT) signals. However, you can control the use of cookies through your browser settings as described above.</p>

        <h2 className="text-xl font-semibold text-foreground mt-6">6. Children's Privacy</h2>
        <p>MortgagePro is not directed to children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal data, please contact us.</p>

        <h2 className="text-xl font-semibold text-foreground mt-6">7. Data Security</h2>
        <p>We implement industry-standard security measures to protect any data collected. However, no method of transmission over the Internet is 100% secure.</p>

        <h2 className="text-xl font-semibold text-foreground mt-6">8. Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.</p>

        <h2 className="text-xl font-semibold text-foreground mt-6">9. Contact</h2>
        <p>For questions about this privacy policy, contact us at <strong>hello@mortgagepro.io</strong>.</p>
      </div>
    </div>
  );
}

function DisclaimerPage() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold tracking-tight mb-6">Disclaimer</h1>
      <div className="text-muted-foreground space-y-6 leading-relaxed">
        <p><strong>Last updated:</strong> May 11, 2026</p>

        <h2 className="text-xl font-semibold text-foreground mt-6">Not Financial Advice</h2>
        <p>
          The calculators, tools, and content provided on MortgagePro are for <strong>informational and educational purposes only</strong>. They do not constitute financial, legal, or real estate advice. You should not rely solely on the information provided by this website when making financial decisions.
        </p>

        <h2 className="text-xl font-semibold text-foreground mt-6">No Professional-Client Relationship</h2>
        <p>
          Use of this website does not create a fiduciary, advisor-client, or broker-client relationship between you and MortgagePro or its operators.
        </p>

        <h2 className="text-xl font-semibold text-foreground mt-6">Accuracy of Calculations</h2>
        <p>
          While we strive for accuracy, mortgage calculations involve complex variables and assumptions. The results generated by our calculators are <strong>estimates only</strong> and may differ from the actual figures provided by lenders, tax authorities, and insurance companies.
        </p>
        <p>
          We strongly recommend consulting with a qualified mortgage professional, tax advisor, or financial planner for personalized advice tailored to your specific circumstances.
        </p>

        <h2 className="text-xl font-semibold text-foreground mt-6">Tax Advice Disclaimer</h2>
        <p>
          Any information related to taxes (including property tax estimates) is provided for general informational purposes only. It should not be construed as tax advice. Consult a qualified tax professional regarding your individual tax situation.
        </p>

        <h2 className="text-xl font-semibold text-foreground mt-6">No Guarantees</h2>
        <p>
          MortgagePro makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is strictly at your own risk.
        </p>

        <h2 className="text-xl font-semibold text-foreground mt-6">External Links</h2>
        <p>
          This website may contain links to external websites. We have no control over the content, privacy policies, or practices of these third-party sites and assume no responsibility for them.
        </p>

        <h2 className="text-xl font-semibold text-foreground mt-6">Liability</h2>
        <p>
          In no event will MortgagePro be liable for any loss or damage including, without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
        </p>

        <h2 className="text-xl font-semibold text-foreground mt-6">Changes</h2>
        <p>
          We reserve the right to update or change this disclaimer at any time. Changes will be posted on this page.
        </p>

        <h2 className="text-xl font-semibold text-foreground mt-6">Contact</h2>
        <p>
          For questions about this disclaimer, contact us at <strong>hello@mortgagepro.io</strong>.
        </p>
      </div>
    </div>
  );
}

function BlogStub() {
  const posts = [
    { 
      title: "What Is a Good Debt-to-Income Ratio for Buying a House?",
      path: "/blog/debt-to-income-ratio",
      category: "Education",
      date: "August 3, 2026",
      readTime: "12 min read",
      description: "A friend of mine makes $100,000 a year and got pre-approved for $340,000 — way less than he expected. Here's the DTI math that explains why two people with the same salary get wildly different loan offers."
    },
    { 
      title: "How Much Are Property Taxes and Insurance on a Mortgage?",
      path: "/blog/property-taxes-and-insurance",
      category: "Education",
      date: "July 29, 2026",
      readTime: "10 min read",
      description: "My brother-in-law Chris thought his mortgage payment was $2,528. Then his Loan Estimate arrived — over $3,100. Here's why property taxes and insurance add hundreds to your monthly payment."
    },
    { 
      title: "Rent vs Buy in 2026: The Decision That's Keeping Everyone Up at Night",
      path: "/blog/rent-vs-buy-2026",
      category: "Guides",
      date: "July 24, 2026",
      readTime: "12 min read",
      description: "My neighbors Jen and Mike have been renting the same apartment for four years. They have a baby due in September. Should they buy a house or keep renting? Here's what they decided."
    },
    { 
      title: "ARM vs Fixed Mortgage: Which One Makes Sense Right Now?",
      path: "/blog/arm-vs-fixed-arm",
      category: "Comparisons",
      date: "July 20, 2026",
      readTime: "11 min read",
      description: "My friend Dave had two loan estimates on the same house. His agent told him fixed. His brother-in-law said ARM. Here's how he decided in five minutes."
    },
    { 
      title: "Closing Costs Explained: The Money You Need Beyond the Down Payment",
      path: "/blog/closing-costs-explained",
      category: "Education",
      date: "July 12, 2026",
      readTime: "10 min read",
      description: "My neighbors Jen and Mike thought they had the numbers figured out. Then a week before closing, they found out they needed nearly $12,000 more than they'd planned."
    },
    { 
      title: "When Should You Refinance Your Home Loan?",
      path: "/blog/when-should-you-refinance",
      category: "Strategies",
      date: "July 10, 2026",
      readTime: "11 min read",
      description: "My friend Kevin refinanced his mortgage twice in three years. My cousin Lisa almost did but it would have cost her thousands. Here's how to know which camp you're in."
    },
    { 
      title: "What Credit Score Do I Need to Buy a House?",
      path: "/blog/credit-score-needed",
      category: "Education",
      date: "July 1, 2026",
      readTime: "12 min read",
      description: "A friend of mine spent six months convinced he couldn't buy a house because his credit score was 640. Here's the real truth about minimum credit scores, rate tiers, and how much improving your score is actually worth in monthly savings."
    },
    { 
      title: "Can I Buy a House With 5% Down?",
      path: "/blog/can-i-buy-with-5-percent-down",
      category: "Education",
      date: "June 25, 2026",
      readTime: "11 min read",
      description: "My brother-in-law Chris had $22,000 saved and was told he needed 20% down. Turned out he could buy with 5%. Here's the real math on low-down-payment mortgages, including PMI, closing costs, and when it makes sense to pull the trigger."
    },
    { 
      title: "Is Buying a Home Still Worth It in 2026?",
      path: "/blog/is-buying-worth-it-2026",
      category: "Guides",
      date: "June 19, 2026",
      readTime: "12 min read",
      description: "My neighbors Jen and Mike have been saving since 2021. Stable jobs, a decent down payment, a baby due in September. They're ready to buy by every measure. So why can't they pull the trigger?"
    },
    { 
      title: "FHA vs Conventional Loan: Which One Actually Costs You Less?", 
      path: "/blog/fha-vs-conventional",
      category: "Comparisons",
      date: "June 19, 2026",
      readTime: "11 min read",
      description: "My cousin Maria bought her first house with an FHA loan because the bank said it was easier to qualify for. Two years later, she learned why that 'easy' loan could cost her $30K more. Here's what she wishes someone had explained on day one."
    },
    { 
      title: "How to Use Our Mortgage Calculator to Plan Your Monthly Payment", 
      path: "/blog/how-to-use-calculator",
      category: "Guides",
      date: "May 10, 2026",
      readTime: "5 min read",
      description: "A step-by-step guide to calculating your optimal house budget using our interactive tools."
    },
    {
      title: "Amortization Schedule: The Hidden Truth About Your Mortgage Payments",
      path: "/blog/amortization-schedule",
      category: "Education",
      date: "May 15, 2026",
      readTime: "10 min read",
      description: "In month one of a $400,000 mortgage at 6.5%, only $361 of your $2,528 payment goes to principal. My friend Rob discovered this after six months of payments had barely moved his balance. Here's why that happens and how to change it."
    },
    {
      title: "Bi-Weekly Mortgage Payments: Are They Worth It?",
      path: "/blog/biweekly-payments",
      category: "Strategies",
      date: "May 20, 2026",
      readTime: "9 min read",
      description: "An honest look at the math, the gotchas, and whether accelerating your mortgage makes sense for your financial situation."
    },
    {
      title: "PMI in Mortgages: What It Is and How to Get Rid of It",
      path: "/blog/what-is-pmi",
      category: "Education",
      date: "May 22, 2026",
      readTime: "8 min read",
      description: "If you're putting down less than 20%, you're paying for something that doesn't protect you. Here's exactly how to cancel it."
    },
    {
      title: "30-Year vs 15-Year Mortgage: The Decision That Shapes Your Future",
      path: "/blog/30-vs-15-year",
      category: "Comparisons",
      date: "May 24, 2026",
      readTime: "10 min read",
      description: "The math favors one side clearly. But the right answer depends on five questions that have nothing to do with interest rates."
    },
    {
      title: "How Much House Can I Afford? A Step-by-Step Guide",
      path: "/blog/how-much-house-can-i-afford",
      category: "Education",
      date: "May 23, 2026",
      readTime: "12 min read",
      description: "Dave called me stressed out about whether he could afford a home. Here's the exact math lenders use and how to find your number."
    },
    {
      title: "How Much Will My Monthly Mortgage Payment Be? (PITI Explained)",
      path: "/blog/monthly-payment-breakdown",
      category: "Guides",
      date: "June 5, 2026",
      readTime: "9 min read",
      description: "Most first-time buyers only look at the loan amount and rate. Here's why your actual payment can be hundreds more — and how to calculate the real number before you shop."
    },
    {
      title: "How Much Income Do I Need for a $500,000 House?",
      path: "/blog/income-needed",
      category: "Education",
      date: "June 5, 2026",
      readTime: "8 min read",
      description: "The short answer is around $135,000 a year. The longer answer depends on your down payment, interest rate, other debts, and the expenses most people forget."
    },
    {
      title: "Why Do Mortgage Payments Go Mostly to Interest?",
      path: "/blog/why-mostly-interest",
      category: "Education",
      date: "June 9, 2026",
      readTime: "10 min read",
      description: "My friend Rob paid over $15,000 in his first six months. His loan balance dropped by less than $3,000. Here's how the math really works."
    },
    {
      title: "Should I Pay Off My Mortgage Early?",
      path: "/blog/pay-off-early",
      category: "Strategies",
      date: "June 10, 2026",
      readTime: "9 min read",
      description: "My aunt burned her mortgage statement in a fire pit. My financial advisor won't pay off his 2.75% rate. Two smart people, two different answers. Here's how to figure out yours."
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Guides': return 'bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300';
      case 'Education': return 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300';
      case 'Strategies': return 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300';
      case 'Comparisons': return 'bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Financial Insights</h1>
        <p className="text-xl text-muted-foreground">Expert strategies and guides to navigate the US real estate market.</p>
      </div>
      
      <div className="grid gap-8">
        {posts.map((post, i) => (
          <article key={i} className="group relative flex flex-col items-start justify-between p-6 sm:p-8 bg-card rounded-2xl border border-border shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer">
            <div className="flex items-center gap-x-4 text-xs mb-4">
              <time dateTime={post.date} className="text-muted-foreground">
                {post.date}
              </time>
              <span className={`relative z-10 rounded-full px-3 py-1 font-medium ${getCategoryColor(post.category)}`}>
                {post.category}
              </span>
              <span className="text-muted-foreground flex items-center gap-1">
                {post.readTime}
              </span>
            </div>
            <div className="group relative">
              <h3 className="mt-3 text-2xl font-semibold leading-8 text-foreground group-hover:text-primary transition-colors">
                <Link to={post.path}>
                  <span className="absolute inset-0" />
                  {post.title}
                </Link>
              </h3>
              <p className="mt-4 line-clamp-3 text-base leading-7 text-muted-foreground">
                {post.description}
              </p>
            </div>
            <div className="mt-6 flex items-center gap-x-4">
               <div className="text-sm font-medium text-primary hover:underline flex items-center">
                 Read article
                 <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                 </svg>
               </div>
            </div>
          </article>
        ))}
      </div>

      {/* Coming Soon */}
      <div className="mt-8 border border-dashed border-border rounded-2xl p-8 text-center">
        <div className="text-4xl mb-4">✍️</div>
        <h3 className="text-xl font-semibold text-foreground mb-2">More Articles Coming Soon</h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          The author is continuously working on in-depth guides, comparisons, and strategies. 
          Check back soon for new content!
        </p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-background font-sans">
        <Navigation />
        <RouteMetaManager />
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>

            <Route path="/" element={<HomePage />} />
            
            {/* Calculator routes — standalone pages with individual SEO */}
            <Route path="/calculator" element={<Navigate to="/mortgage-calculator" replace />} />
            <Route path="/mortgage-calculator" element={<MortgageCalculatorPage />} />
            <Route path="/affordability-calculator" element={<AffordabilityCalculatorPage />} />
            <Route path="/biweekly-mortgage-calculator" element={<BiWeeklyCalculatorPage />} />
            <Route path="/rent-vs-buy-calculator" element={<RentVsBuyCalculatorPage />} />
            <Route path="/fire-impact-calculator" element={<FIRECalculatorPage />} />
            <Route path="/pmi-calculator" element={<PmiCalculatorPage />} />
            <Route path="/refinance-calculator" element={<RefinanceCalculatorPage />} />
            <Route path="/closing-cost-calculator" element={<ClosingCostCalculatorPage />} />
            <Route path="/extra-payment-calculator" element={<ExtraPaymentCalculatorPage />} />
            <Route path="/arm-vs-fixed-calculator" element={<ArmVsFixedCalculatorPage />} />

            {/* Blog routes */}
            <Route path="/blog" element={<BlogStub />} />
            <Route path="/blog/how-to-use-calculator" element={<HowToUseCalculator />} />
            <Route path="/blog/amortization-schedule" element={<AmortizationSchedule />} />
            <Route path="/blog/biweekly-payments" element={<BiWeeklyPayments />} />
            <Route path="/blog/what-is-pmi" element={<WhatIsPmi />} />
            <Route path="/blog/30-vs-15-year" element={<ThirtyVsFifteenYear />} />
            <Route path="/blog/how-much-house-can-i-afford" element={<HowMuchHouseCanIAfford />} />
            <Route path="/blog/monthly-payment-breakdown" element={<MonthlyPaymentBreakdown />} />
            <Route path="/blog/income-needed" element={<IncomeNeeded />} />
            <Route path="/blog/why-mostly-interest" element={<WhyMostlyInterest />} />
            <Route path="/blog/pay-off-early" element={<PayOffEarly />} />
            <Route path="/blog/fha-vs-conventional" element={<FhaVsConventional />} />
            <Route path="/blog/is-buying-worth-it-2026" element={<IsBuyingWorthIt2026 />} />
            <Route path="/blog/can-i-buy-with-5-percent-down" element={<FivePercentDown />} />
            <Route path="/blog/credit-score-needed" element={<CreditScoreNeeded />} />
            <Route path="/blog/when-should-you-refinance" element={<WhenShouldYouRefinance />} />
            <Route path="/blog/closing-costs-explained" element={<ClosingCostsExplained />} />
            <Route path="/blog/arm-vs-fixed-arm" element={<ArmVsFixedArm />} />
            <Route path="/blog/rent-vs-buy-2026" element={<RentVsBuy2026 />} />
            <Route path="/blog/property-taxes-and-insurance" element={<PropertyTaxesAndInsurance />} />
            <Route path="/blog/debt-to-income-ratio" element={<DebtToIncomeRatio />} />

            {/* Other pages */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/editorial-policy" element={<EditorialPolicyPage />} />
            <Route path="/calculator-methodology" element={<CalculatorMethodologyPage />} />
            
            {/* 404 catch-all */}
            <Route path="*" element={<NotFoundPage />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
