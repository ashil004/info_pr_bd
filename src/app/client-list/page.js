"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ExternalLink, Sparkles, Building2 } from 'lucide-react';

export default function ClientList() {
  const [searchQuery, setSearchQuery] = useState('');

  // Client Array
  const logos = [
    { name: "Asian Post", src: "/asian-post.jpg" },
    { name: "Facebook", src: "/facebook.png" },
    { name: "Citygroup", src: "/city-group.jpg" },
    { name: "BASIS", src: "/basis.png" },
    { name: "Realme", src: "/realme_logo.png" },
    { name: "Tecno", src: "/tecno-logo.png" },
    { name: "Rokomari", src: "/rokomari.jpg" },
    { name: "CGTN", src: "/cgtn.png" },
    { name: "Al Jazeera", src: "/Al-Jazeera-Logo.png" },
    { name: "British Council", src: "/british-council-logo.png" },
    { name: "Shyamoli Engineering College", src: "/Shamoli.jpg" },
    { name: "Akij Air", src: "/akij.jpg" },
  ];

  // Search filter
  const filteredClients = logos.filter(client =>
    client.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      
      {/* Premium Redesigned Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 text-white pt-24 pb-20 px-4">
        {/* Decorative Soft Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
          <div className="absolute top-[-20%] left-[20%] w-72 h-72 bg-rose-500/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-[-10%] right-[20%] w-80 h-80 bg-rose-700/15 rounded-full blur-[120px]" />
        </div>

        {/* Hero Content Box */}
        <div className="max-w-4xl mx-auto text-center relative z-10">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-semibold tracking-wide backdrop-blur-md mb-6 shadow-sm"
          >
            <Sparkles size={14} className="text-rose-400" />
            <span>Trusted Partnerships & Collaborations</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-4xl sm:text-6xl font-black tracking-tight leading-tight sm:leading-none"
          >
            Empowering Top Brands & <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-rose-400 via-rose-300 to-amber-200 bg-clip-text text-transparent">
              Global Organizations
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed"
          >
            We are proud to work alongside leading industry innovators, media giants, and reputable institutions worldwide.
          </motion.p>

          {/* Floating Search Field */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-10 max-w-lg mx-auto"
          >
            <div className="relative flex items-center shadow-2xl">
              <Search className="absolute left-4 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Search our clients..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-5 py-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/15 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500/40 focus:border-rose-400/60 transition-all shadow-inner"
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* Grid Display */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 sm:gap-6">
          {filteredClients.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              className="group flex flex-col justify-between bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-rose-200 transition-all duration-300"
            >
              {/* Logo Area */}
              <div className="h-36 w-full p-6 flex items-center justify-center bg-white border-b border-slate-100 relative">
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 text-slate-400 group-hover:text-rose-600 transition-opacity">
                  <ExternalLink size={14} />
                </div>
                <img
                  src={item.src}
                  alt={item.name}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
                />
              </div>

              {/* Client Title */}
              <div className="py-4 px-3 bg-slate-50/60 text-center border-t border-slate-100">
                <h3 className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-rose-700 transition-colors truncate">
                  {item.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty Search Result */}
        {filteredClients.length === 0 && (
          <div className="text-center py-20 text-slate-400 text-sm">
            No clients found matching your search.
          </div>
        )}

      </main>

    </div>
  );
}