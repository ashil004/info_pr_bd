"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ExternalLink, Globe } from 'lucide-react';

export default function OnlineBanglaNewspapers() {
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

  // Dedicated List of Top Online Bangla News Portals
  const onlinePortals = [
    { name: "bdnews24.com", url: "https://bdnews24.com" },
    { name: "banglanews24.com", url: "https://www.banglanews24.com" },
    { name: "Dhaka Post", url: "https://www.dhakapost.com" },
    { name: "Jago News 24", url: "https://www.jagonews24.com" },
    { name: "Risingbd", url: "https://www.risingbd.com" },
    { name: "Barta24", url: "https://barta24.com" },
    { name: "Bangla Tribune", url: "https://www.banglatribune.com" },
    { name: "Priyo.com", url: "https://www.priyo.com" },
    { name: "Bangladesh Journal", url: "https://www.bgdjournal.com" },
    { name: "Poriborton", url: "https://www.poriborton.news" },
    { name: "Janaswar", url: "https://janaswar.com" },
    { name: "Press Bangla News", url: "https://pressbanglanews.com" },
    { name: "Mawlana Bhashani News", url: "https://www.mbnews24.com" },
    { name: "Asia Post", url: "https://www.asia-post.com/" },
    { name: "Times Today BD", url: "https://timestodaybd.com/" },
    { name: "NPB News", url: "https://npbnews.com/" },
    { name: "Star News BD", url: "https://starnews.com.bd/" }
  ];

  // Filtering based on search query
  const filteredPortals = onlinePortals.filter(portal =>
    portal.name.toLowerCase().includes(searchQuery.toLowerCase())
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
            <Globe size={14} /> 24/7 Digital News Coverage
          </motion.span>

          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
          >
            Online <span className="text-rose-700">Bangla News Portals</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-sm sm:text-base text-slate-600 max-w-xl mx-auto"
          >
            Access Bangladesh's leading digital news outlets and online portals directly.
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
                placeholder="Search online news portal..."
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
          {filteredPortals.map((item, index) => (
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
        {filteredPortals.length === 0 && (
          <div className="text-center py-16 text-slate-400 text-sm">
            No online news portals found matching your search.
          </div>
        )}

      </main>

    </div>
  );
}