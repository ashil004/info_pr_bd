"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Newspaper } from 'lucide-react';

export default function BanglaNewspapers() {
  // Top & Most Popular Bangla News Portals (Using Local Asset Paths)
  const banglaNewspapers = [
    { name: "Prothom Alo (প্রথম আলো)", src: "/news_paper/Daily-Prothom-Alo-Logo.png", url: "https://www.prothomalo.com", type: "জাতীয় দৈনিক (শীর্ষ)" },
    { name: "Bangladesh Pratidin (বাংলাদেশ প্রতিদিন)", src: "/news_paper/Daily-Bangladesh-Pratidin-Logo.png", url: "https://www.bd-pratidin.com", type: "জাতীয় দৈনিক (শীর্ষ প্রচলন)" },
    { name: "Daily Amar Desh (আমার দেশ)", src: "/news_paper/Daily-Amar-Desh-Logo.png", url: "https://dailyamardesh.com", type: "জাতীয় দৈনিক" },
    { name: "Jugantor (যুগান্তর)", src: "/news_paper/Daily-Jugantor-Logo.png", url: "https://www.jugantor.com", type: "জাতীয় দৈনিক" },
    { name: "Kaler Kantho (কালের কণ্ঠ)", src: "/news_paper/Daily-Kaler-Kantho-Logo.png", url: "https://www.kalerkantho.com", type: "জাতীয় দৈনিক" },
    { name: "Ittefaq (ইত্তেফাক)", src: "/news_paper/Daily-Ittefaq-Logo.png", url: "https://www.ittefaq.com.bd", type: "জাতীয় দৈনিক (ঐতিহ্যবাহী)" },
    { name: "Samakal (সমকাল)", src: "/news_paper/Daily-Samakal-Logo.png", url: "https://samakal.com", type: "জাতীয় দৈনিক" },
    { name: "Ajker Patrika (আজকের পত্রিকা)", src: "/news_paper/Daily-Ajker-Patrika-Logo.png", url: "https://www.ajkerpatrika.com", type: "জাতীয় দৈনিক" },
    { name: "Alokito Bangladesh (আলোকিত বাংলাদেশ)", src: "/news_paper/Daily-Alokito-Bangladesh-Logo.png", url: "https://www.alokitobangladesh.com", type: "জাতীয় দৈনিক" },
    { name: "Amader Shomoy (আমাদের সময়)", src: "/news_paper/Daily-Amader-Shomoy-Logo.png", url: "https://www.dainikamadershomoy.com", type: "জাতীয় দৈনিক" },
    { name: "Bhorer Kagoj (ভোরের কাগজ)", src: "/news_paper/Daily-Bhorer-Kagoj-Logo.png", url: "https://www.bhorerkagoj.com", type: "জাতীয় দৈনিক" },
    { name: "Bonik Barta (বণিক বার্তা)", src: "/news_paper/Daily-Bonik-Barta-Logo.png", url: "https://bonikbarta.net", type: "বিজনেস দৈনিক" },
    { name: "Khoborer Kagoj (খবরের কাগজ)", src: "/news_paper/Daily-Khoborer-Kagoj-Logo.png", url: "https://www.khoborerkagoj.com", type: "জাতীয় দৈনিক" },
    { name: "Manabkantha (মানবকণ্ঠ)", src: "/news_paper/Daily-Manabkantha-Logo.png", url: "https://www.manobkantha.com.bd", type: "জাতীয় দৈনিক" },
    { name: "Manabzamin (মানবজমিন)", src: "/news_paper/Daily-Manabzamin-Logo.png", url: "https://mzamin.com", type: "জাতীয় দৈনিক (ট্যাবলয়েড)" },
    { name: "Pratidiner Bangladesh (প্রতিদিনের বাংলাদেশ)", src: "/news_paper/Daily-Pratidiner-Bangladesh-Logo.png", url: "https://www.protidinerbangladesh.com", type: "জাতীয় দৈনিক" },
    { name: "Share Biz (শেয়ার বিজ)", src: "/news_paper/Daily-Share-Biz-Logo.png", url: "https://sharebiz.net", type: "অর্থনৈতিক দৈনিক" },
    { name: "Daily Inqilab (ইনকিলাব)", src: "/news_paper/Daily-Inqilab-Logo.png", url: "https://www.dailyinqilab.com", type: "জাতীয় দৈনিক" },
  ];

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      
      {/* Soft & Subtle Colored Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-rose-50/70 via-slate-50 to-slate-50 border-b border-slate-200/60 pt-16 pb-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-rose-100/80 text-rose-800 mb-4 border border-rose-200/60"
          >
            <Newspaper size={14} /> Top Verified Portals
          </motion.span>

          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
          >
            Popular <span className="text-rose-700">Bangla Newspapers</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-sm sm:text-base text-slate-600 max-w-xl mx-auto"
          >
            Access top verified newspaper websites directly with a single click.
          </motion.p>

        </div>
      </section>

      {/* Grid Display */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {banglaNewspapers.map((item, index) => (
            <motion.a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative flex flex-col justify-between p-5 bg-white border border-slate-200/90 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-red-900/10 hover:border-rose-300 cursor-pointer overflow-hidden"
            >
              <div className="absolute top-3 right-3 p-1.5 rounded-full bg-slate-100 text-slate-400 group-hover:bg-rose-50 group-hover:text-rose-700 transition-colors z-10">
                <ExternalLink size={14} />
              </div>

              {/* High Quality Large Image Container (w-64 h-64) */}
              <div className="h-72 w-full flex items-center justify-center my-1 p-2 bg-slate-50/70 rounded-xl group-hover:bg-slate-100/60 transition-colors">
                <img
                  src={item.src}
                  alt={item.name}
                  loading="lazy"
                  className="w-64 h-64 object-contain brightness-110 contrast-125 saturate-110 group-hover:scale-105 transition-transform duration-300 drop-shadow-md"
                />
              </div>

              <div className="pt-3 border-t border-slate-100 text-center">
                <span className="inline-block px-2.5 py-0.5 mb-1.5 text-[10px] font-semibold text-rose-700 bg-rose-50 rounded-full">
                  {item.type}
                </span>
                <h3 className="text-xs font-bold text-slate-800 group-hover:text-rose-700 transition-colors leading-snug truncate">
                  {item.name}
                </h3>
              </div>
            </motion.a>
          ))}
        </div>

      </main>

    </div>
  );
}