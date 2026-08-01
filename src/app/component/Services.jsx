"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/app/context/LanguageContext';

export default function ServicesTab() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      id: "press-conference",
      img: "/press-conference.jpg",
      titleKey: "Services.s1_title",
      descKey: "Services.s1_desc",
    },
    {
      id: "international-pr",
      img: "/international-pr.jpg",
      titleKey: "Services.s2_title",
      descKey: "Services.s2_desc",
    },
    {
      id: "digital-pr",
      img: "/digital-pr.jpg",
      titleKey: "Services.s3_title",
      descKey: "Services.s3_desc",
    },
    {
      id: "content-consultancy",
      img: "/Content Consultancy.jpg",
      titleKey: "Services.s4_title",
      descKey: "Services.s4_desc",
    },
    {
      id: "crisis-management",
      img: "/Crisis Management.jpg",
      titleKey: "Services.s5_title",
      descKey: "Services.s5_desc",
    },
    {
      id: "brand-launch",
      img: "/Brand Launch.jpg",
      titleKey: "Services.s6_title",
      descKey: "Services.s6_desc",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-slate-50 text-slate-800 border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-50 border border-red-100" style={{ color: '#a4223a' }}>
            {t('Services.badge')}
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            {t('Services.title_part1')}{' '}
            <span style={{ color: '#a4223a' }}>{t('Services.title_highlight')}</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {t('Services.subtitle')}
          </p>
        </div>

        {/* Interactive Tab Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white p-6 sm:p-10 rounded-3xl border border-slate-200/80 shadow-sm">
          
          {/* Left Column: Interactive Navigation List */}
          <div className="lg:col-span-5 space-y-2">
            {services.map((item, index) => {
              const isActive = activeTab === index;
              return (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  onMouseEnter={() => setActiveTab(index)}
                  className={`w-full p-4 rounded-2xl text-left transition-all duration-300 flex items-center justify-between group cursor-pointer ${
                    isActive 
                      ? 'bg-red-50/80 text-[#a4223a] font-bold shadow-sm border border-red-100' 
                      : 'text-slate-700 hover:bg-slate-50 hover:text-slate-950'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-md transition-colors ${
                      isActive ? 'bg-[#a4223a] text-white' : 'bg-slate-100 text-slate-500'
                    }`}>
                      0{index + 1}
                    </span>
                    <span className="text-base sm:text-lg">
                      {t(item.titleKey)}
                    </span>
                  </div>

                  <ChevronRight size={18} className={`transition-transform duration-300 ${
                    isActive ? 'translate-x-1 text-[#a4223a]' : 'opacity-0 group-hover:opacity-100 text-slate-400'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Content & Image Display */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="space-y-6"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-2xl aspect-[16/9] shadow-md border border-slate-100">
                  <img 
                    src={services[activeTab].img} 
                    alt={t(services[activeTab].titleKey)} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>
                </div>

                {/* Text & Action Button */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-slate-950">
                    {t(services[activeTab].titleKey)}
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {t(services[activeTab].descKey)}
                  </p>

                  <div className="pt-2">
                    <a
                      href={`/services/${services[activeTab].id}`}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white px-6 py-3 rounded-xl shadow-md transition-all hover:opacity-90 active:scale-95 group"
                      style={{ backgroundColor: '#a4223a' }}
                    >
                      <span>{t('Services.btn_details')}</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}