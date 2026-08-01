"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Compass, Building2, MessageSquareCheck } from 'lucide-react';
import { useLanguage } from '@/app/context/LanguageContext';

export default function WhyChooseUs() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Award,
      titleKey: "WhyChooseUs.card1_title",
      descKey: "WhyChooseUs.card1_desc",
    },
    {
      icon: Compass,
      titleKey: "WhyChooseUs.card2_title",
      descKey: "WhyChooseUs.card2_desc",
    },
    {
      icon: Building2,
      titleKey: "WhyChooseUs.card3_title",
      descKey: "WhyChooseUs.card3_desc",
    },
    {
      icon: MessageSquareCheck,
      titleKey: "WhyChooseUs.card4_title",
      descKey: "WhyChooseUs.card4_desc",
    },
  ];

  // Container variants for staggered child animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // একটি কার্ডের পর আরেকটি আসার ডিলে
      },
    },
  };

  // Individual card entrance variants
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="py-16 lg:py-24 bg-slate-50/60 text-slate-800 border-b border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Motion */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-50 border border-red-100 shadow-sm" style={{ color: '#a4223a' }}>
            {t('WhyChooseUs.badge')}
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            {t('WhyChooseUs.title_part1')}{' '}
            <span style={{ color: '#a4223a' }}>{t('WhyChooseUs.title_highlight')}</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {t('WhyChooseUs.subtitle')}
          </p>
        </motion.div>

        {/* Animated Feature Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {features.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div 
                key={index}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative bg-white p-8 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Top Glowing Red Accent Bar */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  style={{ backgroundColor: '#a4223a' }}
                ></div>

                {/* Card Icon & Title */}
                <div className="flex items-start gap-4 mb-4">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="p-3.5 rounded-xl bg-red-50 text-[#a4223a] group-hover:bg-[#a4223a] group-hover:text-white transition-colors duration-300 flex-shrink-0 shadow-sm"
                  >
                    <IconComponent size={26} />
                  </motion.div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#a4223a] transition-colors duration-300">
                      {t(item.titleKey)}
                    </h3>
                  </div>
                </div>

                {/* Card Description */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed pl-1">
                  {t(item.descKey)}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}