import { Mail, MessageSquare, Clock, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold tracking-tight mb-6">Contact Us</h1>

      <div className="text-muted-foreground space-y-6 leading-relaxed">
        <p className="text-lg">
          We read every message. Whether you found a bug in one of our calculators, spotted an error
          in an article, or have a suggestion for a new tool — we want to hear from you.
        </p>

        {/* Email */}
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Email Us</h2>
              <p className="text-muted-foreground mb-3">
                The fastest way to reach us. We typically respond within 24–48 hours on business days.
              </p>
              <a
                href="mailto:hello@mortgagepro.io"
                className="text-primary hover:underline font-medium text-lg"
              >
                hello@mortgagepro.io
              </a>
            </div>
          </div>
        </div>

        {/* Response time */}
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Response Time</h2>
              <p className="text-muted-foreground">
                We aim to respond to all inquiries within <strong>24–48 hours</strong> during business
                days. If you haven't heard back within 72 hours, please follow up — your message may
                have been caught by a filter.
              </p>
            </div>
          </div>
        </div>

        {/* What to include */}
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400 flex items-center justify-center flex-shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Help Us Help You</h2>
              <p className="text-muted-foreground mb-3">
                To help us respond quickly, please include the following in your message:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>A clear subject line (e.g., "Bug Report: Mortgage Calculator", "Suggestion: New Tool")</li>
                <li>The page URL or tool you're referring to</li>
                <li>Your browser and device type (if reporting a technical issue)</li>
                <li>As much detail as possible about your question or suggestion</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Privacy note */}
        <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-xl p-5">
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-amber-800 dark:text-amber-300">
              <strong>Privacy note:</strong> We do not share your email address or personal information
              with third parties. Email communications are kept confidential and used solely to respond
              to your inquiry. See our{' '}
              <Link to="/privacy" className="underline font-medium">Privacy Policy</Link> for details.
            </p>
          </div>
        </div>

        {/* Quick links */}
        <div className="pt-4">
          <h2 className="text-xl font-semibold text-foreground mb-4">Quick Links</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              to="/about"
              className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg hover:border-primary/30 transition-colors group"
            >
              <div className="flex-1">
                <div className="font-medium text-foreground group-hover:text-primary transition-colors">About MortgagePro</div>
                <div className="text-sm text-muted-foreground">Learn about our mission and team</div>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary flex-shrink-0" />
            </Link>
            <Link
              to="/editorial-policy"
              className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg hover:border-primary/30 transition-colors group"
            >
              <div className="flex-1">
                <div className="font-medium text-foreground group-hover:text-primary transition-colors">Editorial Policy</div>
                <div className="text-sm text-muted-foreground">How we create and review our content</div>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary flex-shrink-0" />
            </Link>
            <Link
              to="/calculator-methodology"
              className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg hover:border-primary/30 transition-colors group"
            >
              <div className="flex-1">
                <div className="font-medium text-foreground group-hover:text-primary transition-colors">Calculator Methodology</div>
                <div className="text-sm text-muted-foreground">How our calculators work under the hood</div>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary flex-shrink-0" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
