import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Home, Calculator, BookOpen } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="max-w-3xl mx-auto py-20 px-4 text-center">
      <Helmet>
        <title>Page Not Found (404) | MortgagePro</title>
        <meta name="description" content="The page you were looking for could not be found. Browse our free mortgage calculators and guides instead." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="text-8xl font-black text-primary/20 mb-6">404</div>
      <h1 className="text-4xl font-bold tracking-tight mb-4">Page Not Found</h1>
      <p className="text-lg text-muted-foreground mb-10 max-w-lg mx-auto">
        The page you're looking for doesn't exist, may have been moved, or the link
        is broken. Let's get you back on track:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        <Link
          to="/"
          className="flex flex-col items-center gap-3 p-6 bg-card border border-border rounded-xl hover:border-primary/40 hover:shadow-md transition-all group"
        >
          <Home className="w-8 h-8 text-primary" />
          <span className="font-semibold text-foreground group-hover:text-primary transition-colors">Homepage</span>
          <span className="text-sm text-muted-foreground">Start fresh from our homepage</span>
        </Link>
        <Link
          to="/mortgage-calculator"
          className="flex flex-col items-center gap-3 p-6 bg-card border border-border rounded-xl hover:border-primary/40 hover:shadow-md transition-all group"
        >
          <Calculator className="w-8 h-8 text-primary" />
          <span className="font-semibold text-foreground group-hover:text-primary transition-colors">Calculators</span>
          <span className="text-sm text-muted-foreground">Free tools to estimate your payment</span>
        </Link>
        <Link
          to="/blog"
          className="flex flex-col items-center gap-3 p-6 bg-card border border-border rounded-xl hover:border-primary/40 hover:shadow-md transition-all group"
        >
          <BookOpen className="w-8 h-8 text-primary" />
          <span className="font-semibold text-foreground group-hover:text-primary transition-colors">Blog</span>
          <span className="text-sm text-muted-foreground">Guides for home buyers</span>
        </Link>
      </div>

      <p className="text-sm text-muted-foreground">
        Still can't find what you need?{' '}
        <Link to="/contact" className="text-primary hover:underline font-medium">
          Contact us
        </Link>{' '}
        and we'll help you out.
      </p>
    </div>
  );
}
