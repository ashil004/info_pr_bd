"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Globe } from 'lucide-react';

export default function EnglishNewspapers() {
  // Complete List of Popular English Newspapers using Local Asset Paths
  const englishNewspapers = [
    { name: "The Daily Star", src: "/news_paper/The-Daily-Star-Logo.png", url: "https://www.thedailystar.net", type: "ইংরেজি দৈনিক (শীর্ষ)" },
    { name: "Dhaka Tribune", src: "/news_paper/Dhaka-Tribune-Logo.png", url: "https://www.dhakatribune.com", type: "ইংরেজি দৈনিক" },
    { name: "The Business Standard", src: "/news_paper/Daily-Business-Standard-Logo.png", url: "https://www.tbsnews.net", type: "বিজনেস নিউজ" },
    { name: "The Financial Express", src: "/news_paper/Daily-Financial-Express-Logo.png", url: "https://thefinancialexpress.com.bd", type: "ইংরেজি বিজনেস দৈনিক" },
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
            <Globe size={14} /> Leading English Dailies & Business News
          </motion.span>

          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
          >
            Bangladesh <span className="text-rose-700">English Newspapers</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-sm sm:text-base text-slate-600 max-w-xl mx-auto"
          >
            Access top English daily newspapers and business news portals directly with a single click.
          </motion.p>

        </div>
      </section>

      {/* Grid Display */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {englishNewspapers.map((item, index) => (
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