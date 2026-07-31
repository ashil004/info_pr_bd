"use client";

import React from 'react';
import { useLanguage } from '@/app/context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-white text-slate-900 py-16 lg:py-24">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left z-10 relative">
            
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold shadow-inner" style={{ color: '#a4223a' }}>
              <span className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ backgroundColor: '#a4223a' }}></span>
              {t('Hero.badge')}
            </div>

            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-slate-950">
              {t('Hero.headline_part1')} <br className="hidden sm:inline" />
              {t('Hero.headline_part2')} <span style={{ color: '#a4223a' }}>{t('Hero.headline_highlight')}</span>
            </h1>

            
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              {t('Hero.description')}
            </p>

            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 pt-3">
              <button
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-white shadow-lg transition-all duration-300 hover:opacity-90 active:scale-95"
                style={{ backgroundColor: '#a4223a' }}
              >
                {t('Hero.btn_primary')}
              </button>
              
              <button className="w-full sm:w-auto text-sm px-6 py-3 font-semibold text-slate-700 bg-white hover:text-slate-950 transition-all duration-300">
                {t('Hero.btn_secondary')}
              </button>
            </div>

            
            <div className="pt-8 border-t border-slate-200 flex items-center justify-center lg:justify-start gap-6 text-slate-600 text-xs sm:text-sm font-medium">
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
            </div>

          </div>

         
          <div className="lg:col-span-5 relative lg:block">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
             
              <img 
                src="/Hero_image_1.png" 
                alt={t('Hero.img_alt')}
                className="w-full h-auto rounded-3xl object-cover shadow-2xl relative z-20 border border-slate-100"
                style={{
                  aspectRatio: '4/5'
                }}
              />

            
              <div 
                className="absolute -top-10 -right-10 w-[300px] h-[300px] opacity-15 blur-[100px] rounded-full pointer-events-none z-0"
                style={{ backgroundColor: '#a4223a' }}
              ></div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}