import Link from "next/link";
import { Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground py-12 text-background/80">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 border-b border-primary/20 pb-8">
          
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="bg-primary text-primary-foreground p-1.5 rounded-lg">
                <Globe className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-background">
                Greenleaf<span className="text-primary">Overseas</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-background/60 max-w-xs">
              Navigating global markets with precision, security, and world-class customer service.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-primary transition-colors">Ocean Freight</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Air Freight</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Customs Brokerage</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Supply Chain Solutions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#global-reach" className="hover:text-primary transition-colors">Global Network</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="#contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Compliance Framework</Link></li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-background/50">
          <p>© {new Date().getFullYear()} Greenleaf Overseas. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            {/* Social Icons Placeholders */}
            <Link href="#" className="hover:text-primary transition-colors">LinkedIn</Link>
            <Link href="#" className="hover:text-primary transition-colors">Twitter</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
