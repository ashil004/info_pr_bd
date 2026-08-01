"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/app/context/LanguageContext';

export default function NewsPlatformsMarquee() {
  const { t } = useLanguage();

  // ছবিতে থাকা সংবাদ মাধ্যমগুলোর লিস্ট
  const newsLogos = [
    { name: "Prothom Alo", src: "/media/prothom_alo.png" },
    { name: "Jugantor", src: "/media/jugantor.png" },
    { name: "Ittefaq", src: "/media/ittefaq.png" },
    { name: "Bangladesh Pratidin", src: "/media/bangladesh_pratidin.png" },
    { name: "Samakal", src: "/media/samakal.png" },
    { name: "Kaler Kantho", src: "/media/kaler_kantho.png" },
    { name: "Kalbela", src: "/media/kalbela.png" },
    { name: "The Daily Star", src: "/media/daily_star.png" },
    { name: "The Business Standard", src: "/media/tbs.png" },
    { name: "Dhaka Tribune", src: "/media/dhaka_tribune.png" },
  ];

  // সিমেট্রিক স্মুথ লুপ অ্যানিমেশনের জন্য লোগো লিস্ট ডাবল করা হয়েছে
  const duplicatedLogos = [...newsLogos, ...newsLogos];

  return (
    <section className="py-16 lg:py-24 bg-white text-slate-800 border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
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

      </div>

      {/* Infinite Auto-Scrolling Track */}
      <div className="relative w-full flex overflow-hidden py-6">
        
        {/* Left & Right Gradient Smooth Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Animated Marquee Row */}
        <motion.div
          className="flex items-center gap-10 sm:gap-14 whitespace-nowrap min-w-max"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            ease: 'linear',
            duration: 30, // অ্যানিমেশন স্পিড (কমালে দ্রুত হবে, বাড়ালে ধীর হবে)
          }}
        >
          {duplicatedLogos.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center h-20 w-44 sm:w-52 px-6 py-3 rounded-xl bg-slate-50/80 border border-slate-200/60 hover:border-red-200 hover:bg-white hover:shadow-xl hover:shadow-red-950/5 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
            >
              <img
                src={item.src}
                alt={item.name}
                className="max-h-10 w-auto object-contain grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all duration-300"
              />
              <span className="text-[11px] font-medium text-slate-400 group-hover:text-[#a4223a] transition-colors mt-1.5 opacity-0 group-hover:opacity-100">
                {item.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}