import React from 'react';
import { Link } from 'react-router-dom';
import { Home, DollarSign, Calendar, Building2, Flame, Shield, RefreshCw, FileText, Plus, BarChart3, Calculator } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  '🏠': <Home className="w-4 h-4 text-primary" />,
  '💰': <DollarSign className="w-4 h-4 text-emerald-600" />,
  '📅': <Calendar className="w-4 h-4 text-blue-600" />,
  '🏡': <Building2 className="w-4 h-4 text-amber-600" />,
  '🔥': <Flame className="w-4 h-4 text-orange-600" />,
  '🛡️': <Shield className="w-4 h-4 text-indigo-600" />,
  '🔄': <RefreshCw className="w-4 h-4 text-cyan-600" />,
  '📋': <FileText className="w-4 h-4 text-violet-600" />,
  '💵': <Plus className="w-4 h-4 text-green-600" />,
  '📊': <BarChart3 className="w-4 h-4 text-purple-600" />,
};

const CALCULATORS = [
  { icon: '🏠', name: 'Mortgage Calculator', path: '/mortgage-calculator' },
  { icon: '💰', name: 'Affordability Calculator', path: '/affordability-calculator' },
  { icon: '📅', name: 'Bi-Weekly Calculator', path: '/biweekly-mortgage-calculator' },
  { icon: '🏡', name: 'Rent vs Buy Analyzer', path: '/rent-vs-buy-calculator' },
  { icon: '🔥', name: 'FIRE Impact Calculator', path: '/fire-impact-calculator' },
  { icon: '🛡️', name: 'PMI Calculator', path: '/pmi-calculator' },
  { icon: '🔄', name: 'Refinance Calculator', path: '/refinance-calculator' },
  { icon: '📋', name: 'Closing Cost Calculator', path: '/closing-cost-calculator' },
  { icon: '💵', name: 'Extra Payment Calculator', path: '/extra-payment-calculator' },
  { icon: '📊', name: 'ARM vs Fixed Calculator', path: '/arm-vs-fixed-calculator' },
];

export default function AllCalculatorsGrid() {
  return (
    <div className="mt-10 pt-8 border-t border-border">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-primary/10 rounded-lg w-9 h-9 flex items-center justify-center shrink-0">
          <Calculator className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-foreground">All Mortgage Calculators</h2>
          <p className="text-sm text-muted-foreground">
            10 free tools — find the one that fits your situation.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {CALCULATORS.map((calc) => (
          <Link
            key={calc.path}
            to={calc.path}
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-foreground hover:border-primary/40 hover:bg-primary/5 transition-colors duration-200"
          >
            <span className="flex-shrink-0">{iconMap[calc.icon]}</span>
            <span className="group-hover:text-primary transition-colors">{calc.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
