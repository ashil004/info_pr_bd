"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/app/context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12, 
      },
    },
  };

  
  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative bg-white text-slate-900 py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6 text-center lg:text-left z-10 relative"
          >
            
           
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold shadow-inner" style={{ color: '#a4223a' }}>
                <span className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ backgroundColor: '#a4223a' }}></span>
                {t('Hero.badge')}
              </div>
            </motion.div>

           
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-slate-950">
              {t('Hero.headline_part1')} <br className="hidden sm:inline" />
              {t('Hero.headline_part2')} <span style={{ color: '#a4223a' }}>{t('Hero.headline_highlight')}</span>
            </motion.h1>

            
            <motion.p variants={itemVariants} className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              {t('Hero.description')}
            </motion.p>

           
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 pt-3">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-white shadow-lg transition-all duration-300 hover:opacity-90 shadow-red-900/10"
                style={{ backgroundColor: '#a4223a' }}
              >
                {t('Hero.btn_primary')}
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                className="w-full sm:w-auto text-sm px-6 py-3 font-semibold text-slate-700 bg-white hover:text-slate-950 transition-all duration-300"
              >
                {t('Hero.btn_secondary')}
              </motion.button>
            </motion.div>

            
            <motion.div variants={itemVariants} className="pt-8 border-t border-slate-200 flex items-center justify-center lg:justify-start gap-6 text-slate-600 text-xs sm:text-sm font-medium">
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-900 text-base">14+</span> {t('Hero.metric_years')}
              </div>
              <div className="h-5 w-[1px] bg-slate-200"></div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-900 text-base">100+</span> {t('Hero.metric_clients')}
              </div>
              <div className="h-5 w-[1px] bg-slate-200"></div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-900 text-base">500+</span> {t('Hero.metric_reach')}
              </div>
            </motion.div>

          </motion.div>

        
          <div className="lg:col-span-5 relative lg:block">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              
              <motion.img 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                whileHover={{ scale: 1.02 }}
                src="/Hero_Image_2.jpg" 
                alt={t('Hero.img_alt')}
                className="w-full h-auto rounded-3xl object-cover shadow-2xl relative z-20 border border-slate-100 transition-all duration-300"
                style={{
                  aspectRatio: '4/5'
                }}
              />

              
              <motion.div 
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.15, 0.25, 0.15]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-10 -right-10 w-[300px] h-[300px] blur-[100px] rounded-full pointer-events-none z-0"
                style={{ backgroundColor: '#a4223a' }}
              ></motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}