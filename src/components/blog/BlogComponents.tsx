import React from 'react';
import { Link } from 'react-router-dom';
import { Lightbulb, AlertTriangle, Info, Star, Sparkles, Calculator, ArrowRight, CheckCircle2, XCircle } from 'lucide-react';

// ============================================================
// TipBox — green/emerald. For helpful tips and best practices
// ============================================================
export function TipBox({ children, title = "💡 Tip" }: { children: React.ReactNode; title?: string }) {
  return (
    <div className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/30 dark:to-green-950/30 border border-emerald-200 dark:border-emerald-800 rounded-xl p-5 my-6">
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center flex-shrink-0 mt-0.5">
          <Lightbulb className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-emerald-800 dark:text-emerald-300 text-sm mb-1">{title}</p>
          <div className="text-emerald-700 dark:text-emerald-200 text-sm leading-relaxed space-y-2 [&_strong]:text-emerald-900 dark:[&_strong]:text-emerald-100">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// WarningBox — amber/orange. For common mistakes / caution
// ============================================================
export function WarningBox({ children, title = "⚠️ Common Mistake" }: { children: React.ReactNode; title?: string }) {
  return (
    <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-5 my-6">
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center flex-shrink-0 mt-0.5">
          <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-amber-800 dark:text-amber-300 text-sm mb-1">{title}</p>
          <div className="text-amber-700 dark:text-amber-200 text-sm leading-relaxed space-y-2 [&_strong]:text-amber-900 dark:[&_strong]:text-amber-100">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// InfoBox — blue. For additional context / explanation
// ============================================================
export function InfoBox({ children, title = "📘 Did You Know?" }: { children: React.ReactNode; title?: string }) {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border border-blue-200 dark:border-blue-800 rounded-xl p-5 my-6">
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center flex-shrink-0 mt-0.5">
          <Info className="w-4 h-4 text-blue-600 dark:text-blue-400" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-blue-800 dark:text-blue-300 text-sm mb-1">{title}</p>
          <div className="text-blue-700 dark:text-blue-200 text-sm leading-relaxed space-y-2 [&_strong]:text-blue-900 dark:[&_strong]:text-blue-100">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// KeyTakeaway — purple/indigo. For important conclusions
// ============================================================
export function KeyTakeaway({ children, title = "🔑 Key Takeaway" }: { children: React.ReactNode; title?: string }) {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30 border-2 border-purple-200 dark:border-purple-800 rounded-xl p-5 my-6">
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center flex-shrink-0 mt-0.5">
          <Star className="w-4 h-4 text-purple-600 dark:text-purple-400" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-purple-800 dark:text-purple-300 text-sm mb-1">{title}</p>
          <div className="text-purple-700 dark:text-purple-200 text-sm leading-relaxed space-y-2 [&_strong]:text-purple-900 dark:[&_strong]:text-purple-100">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// ExampleBox — cyan/teal. For real-life scenarios / examples
// ============================================================
export function ExampleBox({ children, title = "📌 Real-World Example" }: { children: React.ReactNode; title?: string }) {
  return (
    <div className="bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-cyan-950/30 dark:to-teal-950/30 border border-cyan-200 dark:border-cyan-800 rounded-xl p-5 my-6">
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-full bg-cyan-100 dark:bg-cyan-900/50 flex items-center justify-center flex-shrink-0 mt-0.5">
          <Sparkles className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-cyan-800 dark:text-cyan-300 text-sm mb-1">{title}</p>
          <div className="text-cyan-700 dark:text-cyan-200 text-sm leading-relaxed space-y-2 [&_strong]:text-cyan-900 dark:[&_strong]:text-cyan-100">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// ComparisonTable — styled table with header coloring
// ============================================================
interface Column {
  header: string;
  key: string;
  align?: 'left' | 'right' | 'center';
}

interface ComparisonTableProps {
  columns: Column[];
  rows: Record<string, React.ReactNode>[];
  highlightRow?: number | number[];
  highlightColor?: 'emerald' | 'amber' | 'red' | 'blue' | 'purple';
  caption?: string;
}

const highlightMap = {
  emerald: 'bg-emerald-50 dark:bg-emerald-950/20',
  amber: 'bg-amber-50 dark:bg-amber-950/20',
  red: 'bg-red-50 dark:bg-red-950/20',
  blue: 'bg-blue-50 dark:bg-blue-950/20',
  purple: 'bg-purple-50 dark:bg-purple-950/20',
};

export function ComparisonTable({ columns, rows, highlightRow, highlightColor = 'emerald', caption }: ComparisonTableProps) {
  const highlightIndices = highlightRow !== undefined
    ? (Array.isArray(highlightRow) ? highlightRow : [highlightRow])
    : [];

  return (
    <div className="overflow-x-auto my-6">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b-2 border-border">
            {columns.map((col) => (
              <th
                key={col.key}
                className={`py-3 px-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider ${
                  col.align === 'right' ? 'text-right' : col.align === 'center' ? 'text-center' : 'text-left'
                }`}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr
              key={idx}
              className={`border-b border-border transition-colors ${
                highlightIndices.includes(idx) ? highlightMap[highlightColor] : 'hover:bg-muted/30'
              }`}
            >
              {columns.map((col) => (
                <td
                  key={col.key}
                  className={`py-3 px-3 ${
                    col.align === 'right' ? 'text-right' : col.align === 'center' ? 'text-center' : 'text-left'
                  } ${idx === rows.length - 1 ? 'font-semibold text-foreground' : 'text-muted-foreground'}`}
                >
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {caption && (
        <p className="text-xs text-muted-foreground mt-2 px-1">{caption}</p>
      )}
    </div>
  );
}

// ============================================================
// CalculatorCTA — prominent call-to-action card for calculator
// ============================================================
export function CalculatorCTA({ 
  to, 
  label = "Try the Mortgage Calculator", 
  description = "Get your full PITI breakdown in seconds. No sign-up required."
}: { 
  to: string; 
  label?: string; 
  description?: string;
}) {
  return (
    <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-2 border-primary/20 rounded-xl p-8 my-8 text-center">
      <div className="flex justify-center mb-3">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
          <Calculator className="w-6 h-6 text-primary" />
        </div>
      </div>
      <h3 className="text-xl font-bold text-foreground mb-2">{label}</h3>
      <p className="text-muted-foreground mb-5 max-w-md mx-auto text-sm">
        {description}
      </p>
      <Link
        to={to}
        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-sm"
      >
        <Calculator className="w-4 h-4" />
        Try It Now
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}

// ============================================================
// StatHighlight — for emphasizing a single big number
// ============================================================
export function StatHighlight({ 
  value, 
  label, 
  color = 'blue' 
}: { 
  value: string; 
  label: string; 
  color?: 'blue' | 'emerald' | 'amber' | 'red' | 'purple';
}) {
  const colorMap = {
    blue: 'from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300',
    emerald: 'from-emerald-50 to-green-50 dark:from-emerald-950/30 dark:to-green-950/30 border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300',
    amber: 'from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-300',
    red: 'from-red-50 to-rose-50 dark:from-red-950/30 dark:to-rose-950/30 border-red-200 dark:border-red-800 text-red-700 dark:text-red-300',
    purple: 'from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30 border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300',
  };

  return (
    <div className={`bg-gradient-to-br ${colorMap[color]} border rounded-xl p-5 my-4 text-center`}>
      <div className="text-3xl font-bold mb-1">{value}</div>
      <div className="text-sm opacity-80">{label}</div>
    </div>
  );
}

// ============================================================
// Checklist — for pros/cons or actionable steps
// ============================================================
export function Checklist({ items, type = 'pro' }: { items: string[]; type?: 'pro' | 'con' }) {
  const Icon = type === 'pro' ? CheckCircle2 : XCircle;
  const colorClass = type === 'pro' 
    ? 'text-emerald-600 dark:text-emerald-400' 
    : 'text-red-500 dark:text-red-400';

  return (
    <ul className="space-y-2 my-4">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
          <Icon className={`w-4 h-4 flex-shrink-0 mt-0.5 ${colorClass}`} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
