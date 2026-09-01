"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Newspaper, Tv, Globe2, Award, Sparkles } from 'lucide-react';
import { useLanguage } from '@/app/context/LanguageContext';

export default function FeaturedHero() {
  const { t } = useLanguage();

  const stats = [
    {
      icon: <Newspaper className="w-5 h-5 text-[#a4223a]" />,
      label: t('FeaturedHero.stat_print') || 'Print Newspapers',
      value: '50+',
    },
    {
      icon: <Globe2 className="w-5 h-5 text-[#a4223a]" />,
      label: t('FeaturedHero.stat_online') || 'Online Portals',
      value: '50+',
    },
    {
      icon: <Tv className="w-5 h-5 text-[#a4223a]" />,
      label: t('FeaturedHero.stat_tv') || 'TV Channels',
      value: '20+',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white py-20 lg:py-28">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#a4223a] rounded-full filter blur-[128px]"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#a4223a] rounded-full filter blur-[128px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 backdrop-blur-md text-xs font-semibold tracking-wider text-[#a4223a] uppercase shadow-inner"
          >
            <Sparkles size={14} className="text-[#a4223a] animate-pulse" />
            <span>{t('FeaturedHero.badge') || 'Media Coverage & Network'}</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight sm:leading-tight"
          >
            {t('FeaturedHero.title_part1') || 'Amplifying Your Brand Across'}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a4223a] via-red-400 to-[#a4223a]">
              {t('FeaturedHero.title_highlight') || 'Top News Networks'}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal"
          >
            {t('FeaturedHero.subtitle') || 'Explore our extensive press publishing network. We connect your story with Bangladesh’s leading print newspapers, digital news portals, and major television networks.'}
          </motion.p>

          {/* Statistics Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
          >
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-slate-800/40 border border-slate-700/50 backdrop-blur-sm shadow-sm"
              >
                <div className="p-2.5 rounded-xl bg-red-950/40 border border-red-900/30">
                  {stat.icon}
                </div>
                <div className="text-left">
                  <div className="text-xl font-extrabold text-white tracking-tight">{stat.value}</div>
                  <div className="text-xs text-slate-400 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}