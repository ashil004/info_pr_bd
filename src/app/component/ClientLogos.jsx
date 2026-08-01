"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/app/context/LanguageContext';

export default function ClientLogos() {
  const { t } = useLanguage();

  // আপনার লোগো ইমেজের ফাইল পাথগুলো এখানে লিস্ট করুন
  const logos = [
    { name: "Asian Post", src: "/asian-post.jpg" },
    { name: "Facebook", src: "/facebook.png" },
    { name: "Citygroup", src: "/city-group.jpg" },
    { name: "BASIS", src: "/basis.png" },
    { name: "Realme", src: "/realme_logo.png" },
    { name: "Tecno", src: "/tecno-logo.png" },
    { name: "Rokomari", src: "/rokomari.jpg" },
    { name: "CGTN", src: "/cgtn.png" },
    { name: "Al Jazeera", src: "/Al-Jazeera-Logo.png" },
    { name: "British Council", src: "/british-council-logo.png" },
    { name: "Akij Air", src: "/akij.jpg" },
    
  ];

  
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-16 lg:py-20 bg-slate-50/60 border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-50 border border-red-100 shadow-sm" style={{ color: '#a4223a' }}>
            {t('ClientLogos.badge')}
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            {t('ClientLogos.title_part1')}{' '}
            <span style={{ color: '#a4223a' }}>{t('ClientLogos.title_highlight')}</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {t('ClientLogos.subtitle')}
          </p>
        </div>

      </div>

      {/* Infinite Auto-Scrolling Marquee Track */}
      <div className="relative w-full flex overflow-hidden py-4 mask-gradient">
        
        {/* Left & Right Smooth Edge Fade Effects */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        {/* Animated Row */}
        <motion.div
          className="flex items-center gap-12 sm:gap-16 whitespace-nowrap min-w-max"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            ease: 'linear',
            duration: 25,
          }}
        >
          {duplicatedLogos.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-16 w-36 sm:w-44 px-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-110 cursor-pointer"
            >
              <img
                src={item.src}
                alt={item.name}
                className="max-h-12 w-auto object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}