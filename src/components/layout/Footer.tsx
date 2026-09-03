import Link from "next/link";
import { ArrowRight, Briefcase, MessageCircle, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-slate-300 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-emerald rounded flex items-center justify-center text-white font-bold text-xl">
                O
              </div>
              <span className="font-serif font-bold text-2xl text-white tracking-tight">Ox Consults</span>
            </div>
            <p className="text-sm mb-6 text-slate-400">
              Clarity in Strategy. Confidence in Execution. We partner with ambitious organizations to solve complex problems and unlock growth.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white hover:bg-white/10">
                <Briefcase className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white hover:bg-white/10">
                <MessageCircle className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-serif font-semibold mb-6">Services</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/services/strategy-growth" className="hover:text-emerald transition-colors">Strategy & Growth</Link></li>
              <li><Link href="/services/operations-process" className="hover:text-emerald transition-colors">Operations & Process</Link></li>
              <li><Link href="/services/digital-transformation" className="hover:text-emerald transition-colors">Digital Transformation</Link></li>
              <li><Link href="/services/financial-advisory" className="hover:text-emerald transition-colors">Financial Advisory</Link></li>
              <li><Link href="/services/hr-organizational-design" className="hover:text-emerald transition-colors">HR & Org Design</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-white font-serif font-semibold mb-6">Industries</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/industries/financial-services" className="hover:text-emerald transition-colors">Financial Services</Link></li>
              <li><Link href="/industries/healthcare" className="hover:text-emerald transition-colors">Healthcare</Link></li>
              <li><Link href="/industries/technology-saas" className="hover:text-emerald transition-colors">Technology & SaaS</Link></li>
              <li><Link href="/industries/manufacturing-supply-chain" className="hover:text-emerald transition-colors">Manufacturing</Link></li>
              <li><Link href="/industries/public-sector" className="hover:text-emerald transition-colors">Public Sector</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-serif font-semibold mb-6">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald shrink-0" />
                <span>100 Oxford Street<br/>London, W1D 1LL<br/>United Kingdom</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-emerald shrink-0" />
                <a href="mailto:hello@oxconsults.com" className="hover:text-white transition-colors">hello@oxconsults.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Ox Consults. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-slate-300">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-300">Terms of Service</Link>
            <Link href="/portal" className="hover:text-slate-300">Client Portal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
