"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Globe2, Landmark, HeartHandshake } from 'lucide-react';
import { useLanguage } from '@/app/context/LanguageContext';

export default function DiverseIndustries() {
  const { t } = useLanguage();

  const industries = [
    {
      icon: Building2,
      titleKey: "Industries.i1_title",
      descKey: "Industries.i1_desc",
    },
    {
      icon: HeartHandshake,
      titleKey: "Industries.i2_title",
      descKey: "Industries.i2_desc",
    },
    {
      icon: Landmark,
      titleKey: "Industries.i3_title",
      descKey: "Industries.i3_desc",
    },
    {
      icon: Globe2,
      titleKey: "Industries.i4_title",
      descKey: "Industries.i4_desc",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="py-16 lg:py-24 bg-white text-slate-800 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-50 border border-red-100 shadow-sm" style={{ color: '#a4223a' }}>
            {t('Industries.badge')}
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            {t('Industries.title_part1')}{' '}
            <span style={{ color: '#a4223a' }}>{t('Industries.title_highlight')}</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {t('Industries.subtitle')}
          </p>
        </motion.div>

        {/* 2-Column Responsive Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {industries.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group relative bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                
                <div 
                  className="absolute left-0 top-0 bottom-0 w-1.5 transition-all duration-300 group-hover:w-2"
                  style={{ backgroundColor: '#a4223a' }}
                />

                <div className="space-y-4 pl-2">
                  {/* Icon Box */}
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center bg-red-50 text-[#a4223a] group-hover:bg-[#a4223a] group-hover:text-white transition-colors duration-300"
                  >
                    <IconComponent size={28} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#a4223a] transition-colors duration-300">
                    {t(item.titleKey)}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {t(item.descKey)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}