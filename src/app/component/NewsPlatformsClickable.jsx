"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/app/context/LanguageContext';

export default function NewsPlatformsClickable() {
  const { t } = useLanguage();

  const newsPlatforms = [
    {
      name: "Jamuna TV",
      src: "/Tv_Channel/Jamuna-TV-Logo.png",
      url: "https://www.jamuna.tv/",
    },
    {
      name: "Somoy TV",
      src: "/Tv_Channel/Somoy-TV-Logo.png",
      url: "https://www.somoynews.tv/",
    },
    {
      name: "DBC TV",
      src: "/Tv_Channel/DBC-Logo.png",
      url: "https://www.dbctv.com",
    },
    {
      name: "Ekattor TV",
      src: "/Tv_Channel/Ekattor-TV-Logo.png",
      url: "https://ekattor.tv",
    },
    {
      name: "ATN Bangla",
      src: "/Tv_Channel/ATN-Bangla-Logo.png",
      url: "https://atnbangla.tv",
    },
    {
      name: "Prothom Alo",
      src: "/news_paper/Daily-Prothom-Alo-Logo.png",
      url: "https://www.prothomalo.com",
    },
    {
      name: "Bangladesh Pratidin",
      src: "/news_paper/Daily-Bangladesh-Pratidin-Logo.png",
      url: "https://www.bd-pratidin.com",
    },
    {
      name: "Jugantor",
      src: "/news_paper/Daily-Jugantor-Logo.png",
      url: "https://www.jugantor.com",
    },
    {
      name: "The Daily Star",
      src: "/news_paper/The-Daily-Star-Logo.png",
      url: "https://www.thedailystar.net",
    },
    {
      name: "Dhaka Tribune",
      src: "/news_paper/Dhaka-Tribune-Logo.png",
      url: "https://www.dhakatribune.com",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section className="py-16 lg:py-24 bg-white text-slate-800 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div 
            className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-50 border border-red-100 shadow-sm" 
            style={{ color: '#a4223a' }}
          >
            {t('MediaPlatforms.badge')}
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            {t('MediaPlatforms.title_part1')}{' '}
            <span style={{ color: '#a4223a' }}>{t('MediaPlatforms.title_highlight')}</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {t('MediaPlatforms.subtitle')}
          </p>
        </div>

        {/* PLATFORMS GRID */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6"
        >
          {newsPlatforms.map((platform, index) => (
            <motion.a
              key={index}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative flex flex-col items-center justify-center p-6 bg-slate-50/70 border border-slate-200/80 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-red-950/5 cursor-pointer overflow-hidden"
            >
              <div 
                className="absolute top-2.5 right-2.5 p-1.5 rounded-full bg-red-50 text-[#a4223a] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 shadow-sm"
              >
                <ExternalLink size={14} />
              </div>

              {/* Logo Area (Fixed Original Color) */}
              <div className="h-24 w-full flex items-center justify-center">
                <img
                  src={platform.src}
                  alt={platform.name}
                  className="max-h-24 max-w-[85%] object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="mt-2 text-center">
                <span className="block text-xs font-semibold text-slate-700 transition-colors">
                  {platform.name}
                </span>
                
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#a4223a] opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-0.5">
                  <span>{t('MediaPlatforms.visit_site')}</span>
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* VIEW ALL BUTTON */}
        <div className="mt-12 text-center">
          <Link
            href="/featured-on"
            className="inline-flex items-center gap-2 bg-[#a4223a] hover:bg-[#851b2e] text-white font-semibold text-sm px-7 py-3 rounded-full transition-all shadow-md hover:shadow-lg active:scale-95 group"
          >
            <span>{t('MediaPlatforms.view_all') || 'View All Media'}</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}