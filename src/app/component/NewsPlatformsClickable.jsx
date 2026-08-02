"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '@/app/context/LanguageContext';

export default function NewsPlatformsClickable() {
  const { t } = useLanguage();

  
  const newsPlatforms = [
    {
      name: "Prothom Alo",
      src: "/prothom-alo.png",
      url: "https://www.prothomalo.com",
    },
    {
      name: "The Daily Star",
      src: "/daily_star.png",
      url: "https://www.thedailystar.net",
    },
    {
      name: "Asian Post",
      src: "/asian-post.jpg",
      url: "https://www.asia-post.com/",
    },
    {
      name: "Jugantor",
      src: "/jugantor.jpg",
      url: "https://www.jugantor.com",
    },
    {
      name: "Dhaka Tribune",
      src: "/dhaka_tribune.png",
      url: "https://www.dhakatribune.com",
    },
    {
      name: "Ittefaq",
      src: "/ittefaq.png",
      url: "https://www.ittefaq.com.bd",
    },
    {
      name: "Samakal",
      src: "/samakal.png",
      url: "https://samakal.com",
    },
    {
      name: "Kaler Kantho",
      src: "/kaler_kantho.png",
      url: "https://www.kalerkantho.com",
    },
    {
      name: "Bangladesh Pratidin",
      src: "/bangladesh_pratidin.png",
      url: "https://www.bd-pratidin.com",
    },
    {
      name: "Kalbela",
      src: "/kalbela.png",
      url: "https://www.kalbela.com",
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
              className="group relative flex flex-col items-center justify-center p-6 bg-slate-50/70 border border-slate-200/80 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-red-950/5 hover:border-red-200/80 cursor-pointer overflow-hidden"
            >
              
              <div 
                className="absolute top-2.5 right-2.5 p-1.5 rounded-full bg-red-50 text-[#a4223a] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 shadow-sm"
              >
                <ExternalLink size={14} />
              </div>

              
              <div className="h-24 w-full flex items-center justify-center">
                <img
                  src={platform.src}
                  alt={platform.name}
                  className="max-h-24 max-w-[85%] object-contain filter grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all duration-300"
                />
              </div>

              {/* Bottom Label & Hover Action Indicator */}
              <div className="mt-2 text-center">
                <span className="block text-xs font-semibold text-slate-700 group-hover:text-[#a4223a] transition-colors">
                  {platform.name}
                </span>
                
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#a4223a] opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-0.5">
                  <span>{t('MediaPlatforms.visit_site')}</span>
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>

      </div>
    </section>
  );
}