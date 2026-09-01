"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ExternalLink, Newspaper } from 'lucide-react';

export default function BanglaNewspapers() {
  const [searchQuery, setSearchQuery] = useState('');

  // Function to load logo via Google Favicon API
  const getLogoUrl = (websiteUrl) => {
    try {
      const domain = new URL(websiteUrl).hostname;
      return `https://www.google.com/s2/favicons?domain=${domain}&sz=256`;
    } catch {
      return '';
    }
  };

  // Complete List of Bangla News Portals in English
  const banglaNewspapers = [
    { name: "Prothom Alo", url: "https://www.prothomalo.com" },
    { name: "bdnews24", url: "https://bdnews24.com" },
    { name: "banglanews24", url: "https://www.banglanews24.com" },
    { name: "Dhaka Post", url: "https://www.dhakapost.com" },
    { name: "Jago News 24", url: "https://www.jagonews24.com" },
    { name: "Risingbd", url: "https://www.risingbd.com" },
    { name: "Kaler Kantho", url: "https://www.kalerkantho.com" },
    { name: "Jugantor", url: "https://www.jugantor.com" },
    { name: "Ittefaq", url: "https://www.ittefaq.com.bd" },
    { name: "Bangladesh Pratidin", url: "https://www.bd-pratidin.com" },
    { name: "Samakal", url: "https://samakal.com" },
    { name: "Bangla Tribune", url: "https://www.banglatribune.com" },
    { name: "Barta24", url: "https://barta24.com" },
    { name: "Manab Zamin", url: "https://mzamin.com" },
    { name: "Naya Diganta", url: "https://www.dailynayadiganta.com" },
    { name: "Daily Inqilab", url: "https://www.dailyinqilab.com" },
    { name: "Jaijaidin", url: "https://www.jaijaidinnews.com" },
    { name: "Daily Janakantha", url: "https://www.dailyjanakantha.com" },
    { name: "Daily Amader Shomoy", url: "https://www.ainews24.com" },
    { name: "Desh Rupantor", url: "https://www.deshrupantor.com" },
    { name: "Daily Sangbad", url: "https://thedailysangbad.com" },
    { name: "Manobkantha", url: "https://www.manobkantha.com.bd" },
    { name: "Bhorer Kagoj", url: "https://www.bhorerkagoj.com" },
    { name: "UNB News", url: "https://unb.com.bd" },
    { name: "BSS News", url: "https://www.bssnews.net" },
    { name: "Bonik Barta", url: "https://bonikbarta.net" },
    { name: "ShareBiz", url: "https://sharebiz.net" },
    { name: "Poriborton", url: "https://www.poriborton.news" },
    { name: "Janaswar", url: "https://janaswar.com" },
    { name: "Priyo.com", url: "https://www.priyo.com" },
    { name: "Bangladesh Journal", url: "https://www.bgdjournal.com" },
    { name: "Press Bangla News", url: "https://pressbanglanews.com" },
    { name: "Naya Bangla", url: "https://nayabangla.com" },
    { name: "Daily Sangram", url: "https://dailysangram.com" },
    { name: "Alokitobangladesh", url: "https://www.alokitobangladesh.com" },
    { name: "Somoy News", url: "https://www.somoynews.tv" },
    { name: "Jamuna News", url: "https://www.jamuna.tv" },
    { name: "Ekattor News", url: "https://ekattor.tv" },
    { name: "Independent News", url: "https://www.independent24.com" },
    { name: "Channel 24", url: "https://www.channel24bd.tv" },
    { name: "DBC News", url: "https://dbcnews.tv" },
    { name: "NEWS24 BD", url: "https://www.news24bd.tv" },
    { name: "ATN News", url: "https://atnnewstv.com" },
    { name: "Ekhon TV", url: "https://www.ekhontv.com" },
    { name: "Channel i Online", url: "https://www.channelionline.com" },
    { name: "NTV Online", url: "https://www.ntvbd.com" },
    { name: "RTV Online", url: "https://www.rtvonline.com" },
    { name: "Banglavision", url: "https://www.bvnews24.com" },
    { name: "TechShohor", url: "https://techshohor.com" },
    { name: "DigiBangla", url: "https://digibangla.tech" },
    { name: "TechZoom", url: "https://techzoom.tv" },
    { name: "AgriNews24", url: "https://agrinews24.com" },
    { name: "SportsMail24", url: "https://sportsmail24.com" },
    { name: "BD Crime News", url: "https://bdcrimenews24.com" },
    { name: "Dainik Azadi", url: "https://dainikazadi.net" },
    { name: "Dainik Purbokon", url: "https://dainikpurbokon.net" },
    { name: "Dainik Karatoa", url: "https://www.karatoa.com.bd" },
    { name: "Sylhet View 24", url: "https://www.sylhetview24.net" },
    { name: "Gramer Kagoj", url: "https://gramerkagoj.com" },
    { name: "Khulna News", url: "https://khulnanews.com" },
    { name: "Dainik Purvanchal", url: "https://purbanchal.com" },
    { name: "Coxsbazar News", url: "https://www.cbn24.com" },
    { name: "Asia Post", url: "https://www.asia-post.com/" },
    { name: "Times Today BD", url: "https://timestodaybd.com/" },
    { name: "NPB News", url: "https://npbnews.com/" },
    { name: "Star News BD", url: "https://starnews.com.bd/" }
  ];

  // Filtering based on search query
  const filteredNewspapers = banglaNewspapers.filter(paper =>
    paper.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
            <Newspaper size={14} /> All Online Portals in One Place
          </motion.span>

          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
          >
            Popular <span className="text-rose-700">Bangla News Portals</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-sm sm:text-base text-slate-600 max-w-xl mx-auto"
          >
            Access live news websites directly with a single click.
          </motion.p>

          {/* Search Box */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 max-w-md mx-auto relative"
          >
            <div className="relative flex items-center">
              <Search className="absolute left-4 text-slate-400" size={18} />
              <input
                type="text"
                placeholder="Search newspaper name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white border border-slate-200 shadow-sm text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-600 transition-all"
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* Grid Display */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5">
          {filteredNewspapers.map((item, index) => (
            <motion.a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="group flex flex-col justify-between bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:border-rose-200 transition-all duration-300"
            >
              {/* Logo Area */}
              <div className="h-28 w-full p-4 flex items-center justify-center bg-white border-b border-slate-100 relative">
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 text-slate-400 group-hover:text-rose-700 transition-opacity">
                  <ExternalLink size={12} />
                </div>
                <img
                  src={getLogoUrl(item.url)}
                  alt={item.name}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Title */}
              <div className="py-3 px-3 bg-slate-50/50 text-center border-t border-slate-100">
                <h3 className="text-xs font-semibold text-slate-800 group-hover:text-rose-700 transition-colors truncate">
                  {item.name}
                </h3>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Empty Search Result State */}
        {filteredNewspapers.length === 0 && (
          <div className="text-center py-16 text-slate-400 text-sm">
            No news portals found matching your search.
          </div>
        )}

      </main>

    </div>
  );
}