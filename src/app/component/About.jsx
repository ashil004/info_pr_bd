"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Award, Globe2, ShieldCheck, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/app/context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  // Container variants for staggered grid items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // একটি কার্ডের পর আরেকটি আসার ডিলে
      },
    },
  };

  // Card entrance variants
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="py-16 lg:py-24 bg-slate-50 text-slate-800 border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Animated Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="relative">
              <img
                src="/About_Team.jpeg" 
                alt="About InfoPR Team"
                className="w-full h-auto rounded-2xl object-cover shadow-lg border border-slate-200"
                style={{ aspectRatio: '4/3' }}
              />
              
              {/* Floating Badge with Spring Animation */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3, type: "spring", stiffness: 200 }}
                className="absolute -bottom-6 -right-4 sm:right-6 bg-white p-4 sm:p-5 rounded-xl shadow-xl border border-slate-100 flex items-center gap-4"
              >
                <div className="p-3 rounded-lg text-white font-bold" style={{ backgroundColor: '#a4223a' }}>
                  <Award size={24} />
                </div>
                <div>
                  <div className="text-xl font-extrabold text-slate-900">100%</div>
                  <div className="text-xs text-slate-500 font-medium">Trusted Media Partner</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Animated Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Badge */}
            <div className="inline-block px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-red-50 border border-red-100" style={{ color: '#a4223a' }}>
              {t('About.badge')}
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 leading-tight">
              {t('About.heading_part1')} <span style={{ color: '#a4223a' }}>{t('About.heading_highlight')}</span>
            </h2>

            {/* Paragraphs */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {t('About.description_1')}
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {t('About.description_2')}
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <Link
                href="/about/who-we-are"
                className="inline-flex items-center gap-2 text-sm font-bold text-white px-6 py-3 rounded-xl shadow-md hover:opacity-90 transition-all active:scale-95 group"
                style={{ backgroundColor: '#a4223a' }}
              >
                <span>{t('About.btn_text')}</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

        </div>

        {/* Bottom Feature Cards: Staggered Motion Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-slate-200"
        >
          {/* Card 1 */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow group"
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-red-50 text-[#a4223a] group-hover:bg-[#a4223a] group-hover:text-white transition-colors duration-300">
              <Award size={20} />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">{t('About.feature_1_title')}</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{t('About.feature_1_desc')}</p>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow group"
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-red-50 text-[#a4223a] group-hover:bg-[#a4223a] group-hover:text-white transition-colors duration-300">
              <Globe2 size={20} />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">{t('About.feature_2_title')}</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{t('About.feature_2_desc')}</p>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow group"
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-red-50 text-[#a4223a] group-hover:bg-[#a4223a] group-hover:text-white transition-colors duration-300">
              <ShieldCheck size={20} />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">{t('About.feature_3_title')}</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{t('About.feature_3_desc')}</p>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}