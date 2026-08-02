// src/components/Footer.jsx
import Link from 'next/link';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-6 border-t border-gray-800 mt-16">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Grid: Mobile-এ 1 Column, Tablet-এ 2 Column, Desktop-এ 4 Column */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-gray-800">

          {/* 1. Brand Info */}
          <div className="space-y-3">
            <Link href="/" className="inline-block shrink-0">
              <img
                src="/logo.jpg"
                alt="INFOPRBD Logo"
                className="h-12 sm:h-16 w-auto object-contain brightness-200"
              />
            </Link>
            <p className="text-xs text-gray-400 leading-relaxed pr-2">
              INFOPR is a premier digital PR and press release portal connecting businesses with media channels globally.
            </p>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h3 className="text-white text-xs sm:text-sm font-bold uppercase tracking-wider mb-3 border-l-2 border-[#a4223a] pl-2">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs font-medium">
              <li><Link href="/" className="hover:text-[#a4223a] transition-colors">Home</Link></li>
              <li><Link href="/press-releases" className="hover:text-[#a4223a] transition-colors">Press Releases</Link></li>
              <li><Link href="/pr-insights" className="hover:text-[#a4223a] transition-colors">PR Insights</Link></li>
              <li><Link href="/tech-pr" className="hover:text-[#a4223a] transition-colors">Tech PR</Link></li>
              <li><Link href="/business" className="hover:text-[#a4223a] transition-colors">Business</Link></li>
            </ul>
          </div>

          {/* 3. Company Links */}
          <div>
            <h3 className="text-white text-xs sm:text-sm font-bold uppercase tracking-wider mb-3 border-l-2 border-[#a4223a] pl-2">
              Company
            </h3>
            <ul className="space-y-2 text-xs font-medium">
              <li><Link href="/about" className="hover:text-[#a4223a] transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-[#a4223a] transition-colors">Contact Us</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-[#a4223a] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-[#a4223a] transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* 4. Contact & CTA */}
          <div>
            <h3 className="text-white text-xs sm:text-sm font-bold uppercase tracking-wider mb-3 border-l-2 border-[#a4223a] pl-2">
              Get In Touch
            </h3>
            <div className="space-y-2 text-xs text-gray-400 mb-4">
              <p className="flex items-center gap-2">
                <Mail size={14} className="text-[#a4223a] shrink-0" />
                <span className="truncate">info@infoprbd.com</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={14} className="text-[#a4223a] shrink-0" />
                <span>+880 1700-000000</span>
              </p>
              <p className="flex items-center gap-2">
                <MapPin size={14} className="text-[#a4223a] shrink-0" />
                <span>Dhaka, Bangladesh</span>
              </p>
            </div>

            <Link
              href="/submit-pr"
              className="inline-flex items-center gap-1.5 bg-[#a4223a] text-white text-xs font-bold px-4 py-2 rounded-full hover:bg-[#851b2e] transition shadow-sm"
            >
              <Send size={12} />
              <span>Submit Your PR</span>
            </Link>
          </div>

        </div>

        {/* Bottom Copyright Section */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-2">
          <p>© {new Date().getFullYear()} INFOPR. All rights reserved.</p>
          <p>Designed for Digital Media & PR</p>
        </div>

      </div>
    </footer>
  );
}