"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Tv } from 'lucide-react';

export default function TvChannels() {
  const tvChannels = [
    {
      name: "Jamuna TV",
      src: "/Tv_Channel/Jamuna-TV-Logo.png",
      url: "https://www.jamuna.tv/",
      type: "২৪/৭ নিউজ চ্যানেল"
    },
    { 
      name: "Somoy TV",
      src: "/Tv_Channel/Somoy-TV-Logo.png",
      url: "https://www.somoynews.tv/",
      type: "২৪/৭ নিউজ চ্যানেল"
    },
    {
      name: "DBC TV",
      src: "/Tv_Channel/DBC-Logo.png",
      url: "https://www.dbctv.com",
      type: "২৪/৭ নিউজ চ্যানেল"
    },
    {
       name: "Ekattor TV",
       src: "/Tv_Channel/Ekattor-TV-Logo.png",
       url: "https://ekattor.tv",
       type: "২৪/৭ নিউজ চ্যানেল"
    },
    {
      name: "ATN Bangla",
      src: "/Tv_Channel/ATN-Bangla-Logo.png",
      url: "https://atnbangla.tv",
      type: "সংবাদ ও বিনোদন"
    },
    {
      name: "Independent TV",
      src: "/Tv_Channel/Independent-TV-Logo.png",
      url: "https://www.independent.tv",
      type: "২৪/৭ নিউজ চ্যানেল"
    },
    {
      name: "Bangladesh Television (BTV)",
      src: "/Tv_Channel/Bangladesh-Television-BTV-Logo.png",
      url: "https://btv.gov.bd",
      type: "জাতীয় সরকারি চ্যানেল"
    },
    {
      name: "Banglavision",
      src: "/Tv_Channel/Banglavision-TV-Logo.png",
      url: "https://www.bvnews24.com",
      type: "সংবাদ ও বিনোদন"
    },
    {
      name: "Boishakhi TV",
      src: "/Tv_Channel/Boishakhi_TV-Logo.png",
      url: "https://www.boishakhitv.com",
      type: "সংবাদ ও বিনোদন"
    },
    {
      name: "Channel 24",
      src: "/Tv_Channel/Channel-24-Logo.png",
      url: "https://www.channel24bd.tv",
      type: "২৪/৭ নিউজ ও ইনফো"
    },
    {
      name: "Channel i",
      src: "/Tv_Channel/Channel-i-Logo.png",
      url: "https://www.channelionline.com",
      type: "সংবাদ ও বিনোদন"
    },
    {
      name: "Rtv",
      src: "/Tv_Channel/Rtv-Logo.png",
      url: "https://dbcnews.tv",
      type: "সংবাদ ও বিনোদন"
    },
    {
      name: "Maasranga TV",
      src: "/Tv_Channel/Maasranga-Television-Logo.png",
      url: "https://www.maasranga.tv",
      type: "সংবাদ ও বিনোদন"
    },
    {
      name: "Desh TV",
      src: "/Tv_Channel/Desh-TV-Logo.png",
      url: "https://www.desh.tv",
      type: "সংবাদ ও বিনোদন"
    },
    {
      name: "Ekushey TV",
      src: "/Tv_Channel/Ekushey-TV-Logo.png",
      url: "https://ekushey.tv",
      type: "সংবাদ ও বিনোদন"
    },
    {
      name: "News24",
      src: "/Tv_Channel/News-24-TV-Logo.png",
      url: "https://www.news24.com.bd",
      type: "২৪/৭ নিউজ চ্যানেল"
    },
    {
      name: "My TV",
      src: "/Tv_Channel/My-TV-Logo.png",
      url: "https://mytvbd.tv/",
      type: "সংবাদ ও বিনোদন"
    },
    {
      name: "Mohona TV",
      src: "/Tv_Channel/Mohona-TV-Logo.png",
      url: "https://www.mohonatv.com",
      type: "সংবাদ ও বিনোদন"
    },
    {
      name: "SA TV",
      src: "/Tv_Channel/SA-TV-Logo.png",
      url: "https://www.satv.tv/",
      type: "সংবাদ ও বিনোদন"
    },
    {
      name: "NTV",
      src: "/Tv_Channel/NTv-Logo.png",
      url: "https://www.ntvbd.tv/",
      type: "সংবাদ ও বিনোদন"
    },
    {
      name: "Ekhon TV",
      src: "/Tv_Channel/Ekhon-TV-Logo.png",
      url: "https://www.ekhontv.com/",
      type: "সংবাদ ও বিনোদন"
    },
    {
      name: "GTV",
      src: "/Tv_Channel/GTV-Logo.png",
      url: "https://www.gtvbd.tv/",
      type: "সংবাদ ও বিনোদন"
    },
    {
      name: "Star News",
      src: "/Tv_Channel/Star-News-TV-Logo.png",
      url: "https://www.starnews.tv/",
      type: "সংবাদ ও বিনোদন"
    }
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
            <Tv size={14} /> Live News & Entertainment Channels
          </motion.span>

          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
          >
            Bangladesh <span className="text-rose-700">TV Channels</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-sm sm:text-base text-slate-600 max-w-xl mx-auto"
          >
            Watch and stream news, entertainment, and sports from popular television channels directly.
          </motion.p>

        </div>
      </section>

      {/* Grid Display */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {tvChannels.map((item, index) => (
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