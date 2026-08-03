"use client";

import Link from "next/link";
import Image from "next/image";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-6 border-t border-gray-800 mt-16">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Grid: Mobile-এ 1 Column, Tablet-এ 2 Column, Desktop-এ 4 Column */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-gray-800">

          {/* 1. Brand Info */}
          <div className="space-y-3">
            <Link href="/" className="inline-block shrink-0">
              <Image
                src="/logo.jpg"
                alt="INFOPRBD Logo"
                width={180}
                height={60}
                className="h-12 sm:h-16 w-auto object-contain brightness-200"
              />
            </Link>
            <p className="text-xs text-gray-400 leading-relaxed pr-2">
              {t("Footer.about_desc")}
            </p>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h3 className="text-white text-xs sm:text-sm font-bold uppercase tracking-wider mb-3 border-l-2 border-[#a4223a] pl-2">
              {t("Footer.quick_links_title")}
            </h3>
            <ul className="space-y-2 text-xs font-medium">
              <li><Link href="/" className="hover:text-[#a4223a] transition-colors">{t("Footer.links.home")}</Link></li>
              <li><Link href="/press-releases" className="hover:text-[#a4223a] transition-colors">{t("Footer.links.press_releases")}</Link></li>
              <li><Link href="/pr-insights" className="hover:text-[#a4223a] transition-colors">{t("Footer.links.pr_insights")}</Link></li>
              <li><Link href="/tech-pr" className="hover:text-[#a4223a] transition-colors">{t("Footer.links.tech_pr")}</Link></li>
              <li><Link href="/business" className="hover:text-[#a4223a] transition-colors">{t("Footer.links.business")}</Link></li>
            </ul>
          </div>

          {/* 3. Company Links */}
          <div>
            <h3 className="text-white text-xs sm:text-sm font-bold uppercase tracking-wider mb-3 border-l-2 border-[#a4223a] pl-2">
              {t("Footer.company_title")}
            </h3>
            <ul className="space-y-2 text-xs font-medium">
              <li><Link href="/about" className="hover:text-[#a4223a] transition-colors">{t("Footer.company_links.about")}</Link></li>
              <li><Link href="/contact" className="hover:text-[#a4223a] transition-colors">{t("Footer.company_links.contact")}</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-[#a4223a] transition-colors">{t("Footer.company_links.privacy")}</Link></li>
              <li><Link href="/terms" className="hover:text-[#a4223a] transition-colors">{t("Footer.company_links.terms")}</Link></li>
            </ul>
          </div>

          {/* 4. Contact & CTA */}
          <div>
            <h3 className="text-white text-xs sm:text-sm font-bold uppercase tracking-wider mb-3 border-l-2 border-[#a4223a] pl-2">
              {t("Footer.contact_title")}
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
              <span>{t("Footer.submit_btn")}</span>
            </Link>
          </div>

        </div>

        {/* Bottom Copyright Section */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-2">
          <p>© {new Date().getFullYear()} {t("Footer.rights_reserved")}</p>
          <p>{t("Footer.footer_tagline")}</p>
        </div>

      </div>
    </footer>
  );
}