"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Award, TrendingUp, Newspaper, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/app/context/LanguageContext';

export default function TopPRAgencyTimeline() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Award,
      titleKey: "TopPR.card1_title",
      descKey: "TopPR.card1_desc",
    },
    {
      icon: TrendingUp,
      titleKey: "TopPR.card2_title",
      descKey: "TopPR.card2_desc",
    },
    {
      icon: Newspaper,
      titleKey: "TopPR.card3_title",
      descKey: "TopPR.card3_desc",
    },
    {
      icon: ShieldCheck,
      titleKey: "TopPR.card4_title",
      descKey: "TopPR.card4_desc",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white text-slate-800 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column - Sticky Title Section */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-4">
            <div className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-50 border border-red-100" style={{ color: '#a4223a' }}>
              {t('TopPR.badge')}
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
              {t('TopPR.title_part1')}{' '}
              <span style={{ color: '#a4223a' }}>{t('TopPR.title_highlight')}</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed pt-2">
              {t('TopPR.subtitle')}
            </p>
          </div>

          {/* Right Column - Connected Line Steps */}
          <div className="lg:col-span-7 space-y-10 relative before:absolute before:left-6 before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-200">
            {features.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex items-start gap-6 group"
                >
                  {/* Step Icon Node */}
                  <div 
                    className="relative z-10 w-12 h-12 rounded-2xl flex items-center justify-center bg-red-50 text-[#a4223a] group-hover:bg-[#a4223a] group-hover:text-white transition-colors duration-300 shadow-sm flex-shrink-0"
                  >
                    <IconComponent size={22} />
                  </div>

                  {/* Text Content */}
                  <div className="space-y-2 pt-1">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#a4223a] transition-colors duration-300">
                      {t(item.titleKey)}
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      {t(item.descKey)}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}