import Link from "next/link";
import { Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0A1628] py-14 text-slate-400">
      <div className="container px-4 md:px-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10 border-b border-white/10 pb-10">
          
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="bg-[#D4A853] text-[#0A1628] p-1.5 rounded-lg">
                <Globe className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Greenleaf<span className="text-[#D4A853]">Overseas</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-500 max-w-xs">
              Navigating global markets with precision, security, and world-class customer service.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="#" className="hover:text-[#D4A853] transition-colors">Ocean Freight</Link></li>
              <li><Link href="#" className="hover:text-[#D4A853] transition-colors">Air Freight</Link></li>
              <li><Link href="#" className="hover:text-[#D4A853] transition-colors">Customs Brokerage</Link></li>
              <li><Link href="#" className="hover:text-[#D4A853] transition-colors">Supply Chain Solutions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="#global-reach" className="hover:text-[#D4A853] transition-colors">About Us</Link></li>
              <li><Link href="#global-reach" className="hover:text-[#D4A853] transition-colors">Global Network</Link></li>
              <li><Link href="#" className="hover:text-[#D4A853] transition-colors">Careers</Link></li>
              <li><Link href="#contact" className="hover:text-[#D4A853] transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="#" className="hover:text-[#D4A853] transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-[#D4A853] transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-[#D4A853] transition-colors">Compliance Framework</Link></li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-600">
          <p>© {new Date().getFullYear()} Greenleaf Overseas. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-[#D4A853] transition-colors">LinkedIn</Link>
            <Link href="#" className="hover:text-[#D4A853] transition-colors">Twitter</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
