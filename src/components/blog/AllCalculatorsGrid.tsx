import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Home, DollarSign, Calendar, Building2, Flame, Shield, RefreshCw, FileText, Plus, BarChart3 } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  '🏠': <Home className="w-5 h-5 text-primary" />,
  '💰': <DollarSign className="w-5 h-5 text-emerald-600" />,
  '📅': <Calendar className="w-5 h-5 text-blue-600" />,
  '🏡': <Building2 className="w-5 h-5 text-amber-600" />,
  '🔥': <Flame className="w-5 h-5 text-orange-600" />,
  '🛡️': <Shield className="w-5 h-5 text-indigo-600" />,
  '🔄': <RefreshCw className="w-5 h-5 text-cyan-600" />,
  '📋': <FileText className="w-5 h-5 text-violet-600" />,
  '💵': <Plus className="w-5 h-5 text-green-600" />,
  '📊': <BarChart3 className="w-5 h-5 text-purple-600" />,
};

const CALCULATORS = [
  { icon: '🏠', name: 'Mortgage Calculator', desc: 'Monthly payment with sliders, PITI breakdown, amortization chart.', path: '/mortgage-calculator' },
  { icon: '💰', name: 'Affordability Calculator', desc: 'How much house can you afford? 28/36 rule with state data.', path: '/affordability-calculator' },
  { icon: '📅', name: 'Bi-Weekly Calculator', desc: 'Compare standard vs bi-weekly. Save interest, pay off early.', path: '/biweekly-mortgage-calculator' },
  { icon: '🏡', name: 'Rent vs Buy Analyzer', desc: 'Find your breakeven year with appreciation and investment returns.', path: '/rent-vs-buy-calculator' },
  { icon: '🔥', name: 'FIRE Impact Calculator', desc: 'How home buying affects your early retirement timeline.', path: '/fire-impact-calculator' },
  { icon: '🛡️', name: 'PMI Calculator', desc: 'Calculate PMI cost, cancellation timeline, and total paid.', path: '/pmi-calculator' },
  { icon: '🔄', name: 'Refinance Calculator', desc: 'Compare current vs refi. Break-even point and lifetime savings.', path: '/refinance-calculator' },
  { icon: '📋', name: 'Closing Cost Calculator', desc: 'Itemized closing costs with state-specific data.', path: '/closing-cost-calculator' },
  { icon: '💵', name: 'Extra Payment Calculator', desc: 'See how extra principal payments save interest and time.', path: '/extra-payment-calculator' },
  { icon: '📊', name: 'ARM vs Fixed Calculator', desc: 'Compare 30yr/15yr fixed vs 5/1 and 7/1 ARMs.', path: '/arm-vs-fixed-calculator' },
];

export default function AllCalculatorsGrid() {
  return (
    <div className="mt-10 pt-8 border-t border-border">
      <h2 className="text-xl font-bold text-foreground mb-2">📊 All Mortgage Calculators</h2>
      <p className="text-muted-foreground text-sm mb-6">
        Choose the tool that matches your situation — or use them all to build a complete picture.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {CALCULATORS.map((calc) => (
          <Link
            key={calc.path}
            to={calc.path}
            className="group flex items-start gap-3 p-3.5 bg-card border border-border rounded-lg hover:shadow-sm hover:border-primary/30 transition-all duration-200"
          >
            <div className="text-lg flex-shrink-0 mt-0.5">{calc.icon}</div>
            <div>
              <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                {calc.name}
              </div>
              <div className="text-xs text-muted-foreground leading-relaxed">
                {calc.desc}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
