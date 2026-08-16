"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Send, Globe, ChevronDown, Menu, X } from 'lucide-react';
import { useLanguage } from '@/app/context/LanguageContext';



const LanguageSelect = ({ lang, onChange }) => (
  <div className="flex items-center space-x-1.5 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full px-2.5 py-1 text-gray-700 dark:text-gray-200 hover:border-gray-300 dark:hover:border-gray-600 transition-colors">
    <Globe size={14} className="text-[#a4223a] shrink-0" />
    <select
      value={lang}
      onChange={onChange}
      className="bg-transparent text-xs font-bold focus:outline-none cursor-pointer text-gray-800 dark:text-white border-none outline-none"
      aria-label="Select Language"
    >
      <option value="en" className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white">EN</option>
      <option value="bn" className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white">বাংলা</option>
    </select>
  </div>
);

export default function Navbar() {
  const { lang, changeLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menuName) => {
    setOpenDropdown(openDropdown === menuName ? null : menuName);
  };

  const handleLanguageChange = (e) => {
    changeLanguage(e.target.value);
  };

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">


        <Link href="/" className="flex items-center gap-2 focus:outline-none flex-shrink-0">
          <img
            src="/logo.jpg"
            alt="InfoPR Logo"
            className="h-16 w-auto object-contain max-h-none shrink-0"
          />
        </Link>


        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-gray-700 dark:text-gray-200">
          <Link href="/" className="hover:text-[#a4223a] transition-colors">
            {t('Header.home')}
          </Link>


          <div className="relative group">
            <button
              className="flex items-center gap-1 hover:text-[#a4223a] py-2 transition-colors focus:outline-none"
              aria-haspopup="true"
            >
              <Link href="/about" className="focus:outline-none">{t('Header.about')}</Link>
              <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
            </button>
            <div className="absolute left-0 top-full hidden group-hover:block w-52 bg-white dark:bg-gray-800 shadow-xl rounded-lg border border-gray-100 dark:border-gray-700 py-2 z-50">
              <Link href="/about/mission" className="block px-4 py-2 text-xs hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-[#a4223a] transition-colors">{t('Header.about_mission')}</Link>
              <Link href="/about/who-we-are" className="block px-4 py-2 text-xs hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-[#a4223a] transition-colors">{t('Header.about_who_we_are')}</Link>
              <Link href="/about/how-we-work" className="block px-4 py-2 text-xs hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-[#a4223a] transition-colors">{t('Header.about_how_we_work')}</Link>
              <Link href="/about/concept" className="block px-4 py-2 text-xs hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-[#a4223a] transition-colors">{t('Header.about_concept')}</Link>
              <Link href="/about/management" className="block px-4 py-2 text-xs hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-[#a4223a] transition-colors">{t('Header.about_management')}</Link>
            </div>
          </div>


          <div className="relative group">
            <button
              className="flex items-center gap-1 hover:text-[#a4223a] py-2 transition-colors focus:outline-none"
              aria-haspopup="true"
            >
              {/* <span>{t('Header.services')}</span> */}
              <Link href="/services" className="focus:outline-none">{t('Header.services')}</Link>
              <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
            </button>
            <div className="absolute left-0 top-full hidden group-hover:block w-56 bg-white dark:bg-gray-800 shadow-xl rounded-lg border border-gray-100 dark:border-gray-700 py-2 z-50">
              <Link
                href="/services/press-conference"
                className="block px-4 py-2 text-xs hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-[#a4223a] transition-colors"
              >
                {t('Header.srv_press_conference')}
              </Link>

              <Link
                href="/services/digital-pr"
                className="block px-4 py-2 text-xs hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-[#a4223a] transition-colors"
              >
                {t('Header.srv_digital_pr')}
              </Link>

              <Link
                href="/services/content-consultancy"
                className="block px-4 py-2 text-xs hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-[#a4223a] transition-colors"
              >
                {t('Header.srv_content_consultancy')}
              </Link>

              <Link
                href="/services/crisis-management"
                className="block px-4 py-2 text-xs hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-[#a4223a] transition-colors"
              >
                {t('Header.srv_crisis_management')}
              </Link>

              <Link
                href="/services/brand-launch"
                className="block px-4 py-2 text-xs hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-[#a4223a] transition-colors"
              >
                {t('Header.srv_brand_launch')}
              </Link>

              <Link
                href="/services/sample-coverage"
                className="block px-4 py-2 text-xs hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-[#a4223a] transition-colors"
              >
                {t('Header.srv_sample_coverage')}
              </Link>
            </div>
          </div>

          <Link href="/press-releases" className="hover:text-[#a4223a] transition-colors">{t('Header.pressReleases')}</Link>
          <Link href="/blog" className="hover:text-[#a4223a] transition-colors">{t('Header.blog')}</Link>
          <Link href="/contact" className="hover:text-[#a4223a] transition-colors">{t('Header.contact')}</Link>
        </nav>


        <div className="flex items-center gap-2 sm:gap-3">


          <LanguageSelect lang={lang} onChange={handleLanguageChange} />


          <Link
            href="/submit-pr"
            className="hidden sm:flex items-center gap-1.5 bg-[#a4223a] hover:bg-[#851b2e] text-white text-xs font-bold px-4 py-2 rounded-full transition-all shadow-sm active:scale-95"
          >
            <Send size={12} />
            <span>{t('Header.submitPR')}</span>
          </Link>


          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 dark:text-gray-200 hover:text-[#a4223a] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

        </div>

      </div>


      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-bold text-gray-800 dark:text-gray-200 hover:text-[#a4223a]"
          >
            {t('Header.home')}
          </Link>


          <div>
            <button
              onClick={() => toggleDropdown('about')}
              className="flex items-center justify-between w-full text-sm font-bold text-gray-800 dark:text-gray-200 hover:text-[#a4223a] py-1"
            >
              <span>{t('Header.about')}</span>
              <ChevronDown size={16} className={`transition-transform duration-200 ${openDropdown === 'about' ? 'rotate-180' : ''}`} />
            </button>
            {openDropdown === 'about' && (
              <div className="pl-4 pt-2 space-y-2 text-xs font-medium text-gray-600 dark:text-gray-400">
                <Link href="/about/mission" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#a4223a]">{t('Header.about_mission')}</Link>
                <Link href="/about/who-we-are" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#a4223a]">{t('Header.about_who_we_are')}</Link>
                <Link href="/about/how-we-work" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#a4223a]">{t('Header.about_how_we_work')}</Link>
                <Link href="/about/concept" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#a4223a]">{t('Header.about_concept')}</Link>
                <Link href="/about/management" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#a4223a]">{t('Header.about_management')}</Link>
              </div>
            )}
          </div>


          <div>
            <button
              onClick={() => toggleDropdown('services')}
              className="flex items-center justify-between w-full text-sm font-bold text-gray-800 dark:text-gray-200 hover:text-[#a4223a] py-1"
            >
              <span>{t('Header.services')}</span>
              <ChevronDown size={16} className={`transition-transform duration-200 ${openDropdown === 'services' ? 'rotate-180' : ''}`} />
            </button>
            {openDropdown === 'services' && (
              <div className="pl-4 pt-2 space-y-2 text-xs font-medium text-gray-600 dark:text-gray-400">
                <Link href="/services/bangla-newspapers" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#a4223a]">{t('Header.srv_bangla_newspapers')}</Link>
                <Link href="/services/english-newspapers" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#a4223a]">{t('Header.srv_english_newspapers')}</Link>
                <Link href="/services/online-bangla" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#a4223a]">{t('Header.srv_online_bangla')}</Link>
                <Link href="/services/online-english" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#a4223a]">{t('Header.srv_online_english')}</Link>
                <Link href="/services/tv-channels" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#a4223a]">{t('Header.srv_tv_channels')}</Link>
              </div>
            )}
          </div>

          <Link href="/press-releases" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-bold text-gray-800 dark:text-gray-200 hover:text-[#a4223a]">
            {t('Header.pressReleases')}
          </Link>
          <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-bold text-gray-800 dark:text-gray-200 hover:text-[#a4223a]">
            {t('Header.blog')}
          </Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-bold text-gray-800 dark:text-gray-200 hover:text-[#a4223a]">
            {t('Header.contact')}
          </Link>


          <Link
            href="/submit-pr"
            onClick={() => setMobileMenuOpen(false)}
            className="flex sm:hidden items-center justify-center gap-1.5 bg-[#a4223a] text-white text-xs font-bold px-4 py-2.5 rounded-full transition w-full mt-3 active:scale-98"
          >
            <Send size={12} />
            <span>{t('Header.submitPR')}</span>
          </Link>
        </div>
      )}
    </header>
  );
}