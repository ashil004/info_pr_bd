"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Newspaper, Globe, Tv, BookOpen } from 'lucide-react';

export default function NewsPaper() {
  const [activeTab, setActiveTab] = useState('tv');

  const mediaCategories = {
    daily_newspaper: [
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
      { name: "Share Biz (শেয়ার বিজ)", src: "/news_paper/Daily-Share-Biz-Logo.png", url: "https://sharebiz.net", type: "অর্থনৈতিক দৈনিক" },
      { name: "Daily Inqilab (ইনকিলাব)", src: "/news_paper/Daily-Inqilab-Logo.png", url: "https://www.dailyinqilab.com", type: "জাতীয় দৈনিক" },
    ],

    online_portal: [
      { name: "bdnews24.com", src: "/news_paper/Daily-Share-Biz-Logo.png", url: "https://bdnews24.com", type: "অনলাইন নিউজ পোর্টাল" },
      { name: "Dhaka Tribune", src: "/news_paper/Dhaka-Tribune-Logo.png", url: "https://www.dhakatribune.com", type: "অনলাইন নিউজ পোর্টাল" },
      { name: "The Daily Star", src: "/news_paper/The-Daily-Star-Logo.png", url: "https://www.thedailystar.net", type: "অনলাইন নিউজ পোর্টাল" },
      { name: "The Asian Age", src: "/news_paper/The-Asian-Age.png", url: "https://dailyasianage.com/", type: "অনলাইন নিউজ পোর্টাল" },
      { name: "The Business Standard", src: "/news_paper/Daily-Business-Standard-Logo.png", url: "https://www.tbsnews.net", type: "বিজনেস নিউজ" },
    ],

    english: [
      { name: "The Daily Star", src: "/news_paper/The-Daily-Star-Logo.png", url: "https://www.thedailystar.net", type: "ইংরেজি দৈনিক (শীর্ষ)" },
      { name: "Dhaka Tribune", src: "/news_paper/Dhaka-Tribune-Logo.png", url: "https://www.dhakatribune.com", type: "ইংরেজি দৈনিক" },
      { name: "The Business Standard", src: "/news_paper/Daily-Business-Standard-Logo.png", url: "https://www.tbsnews.net", type: "বিজনেস নিউজ" },
      { name: "The Financial Express", src: "/news_paper/Daily-Financial-Express-Logo.png", url: "https://thefinancialexpress.com.bd", type: "ইংরেজি বিজনেস দৈনিক" },
    ],

    tv: [
      {
        name: "Jamuna TV",
        src: "/Tv_Channel/Jamuna-TV-Logo.png",
        url: "https://www.jamuna.tv/.",
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
        src: "/Tv_Channel/Rtv_Logo.png",
        url: "https://rtvonline.com/",
        type: "সংবাদ ও বিনোদন"
      },
      {
        name:"maasranga tv",
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
        name:'News24',
        src: "/Tv_Channel/News-24-TV-Logo.png",
        url: "https://www.news24.com.bd",
        type: "২৪/৭ নিউজ চ্যানেল"
      },
      {
        name: "My Tv",
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
        name: "NTv",
        src: "/Tv_Channel/Ntv_logo.png",
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
     },
    ]
  };

  const tabs = [
    { id: 'tv', label: 'TV Channels', icon: <Tv size={18} /> },
    { id: 'daily_newspaper', label: 'Newspapers', icon: <BookOpen size={18} /> },
    { id: 'english', label: 'English News', icon: <Globe size={18} /> },
    { id: 'online_portal', label: 'Online Portals', icon: <Newspaper size={18} /> },
    
  ];

  return (
    <section className="py-16 bg-slate-50 text-slate-800 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-[#a4223a] text-white shadow-lg shadow-red-950/20 scale-105'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-[#a4223a]/50 hover:text-[#a4223a]'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
              <span className="ml-1 text-xs px-2 py-0.5 rounded-full bg-slate-100/30 text-current">
                {mediaCategories[tab.id]?.length || 0}
              </span>
            </button>
          ))}
        </div>

        {/* Media Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {mediaCategories[activeTab]?.map((item, index) => (
              <motion.a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -6, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative flex flex-col justify-between p-5 bg-white border border-slate-200/90 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-red-900/10 hover:border-[#a4223a]/40 cursor-pointer overflow-hidden"
              >
                <div className="absolute top-3 right-3 p-1.5 rounded-full bg-slate-100 text-slate-400 group-hover:bg-red-50 group-hover:text-[#a4223a] transition-colors z-10">
                  <ExternalLink size={14} />
                </div>

                {/* h-64 w-64 Image Integration */}
                <div className="h-72 w-full flex items-center justify-center my-1 p-2 bg-slate-50/70 rounded-xl group-hover:bg-slate-100/60 transition-colors">
                  <img
                    src={item.src}
                    alt={item.name}
                    loading="lazy"
                    className="w-48 h-48 object-contain brightness-110 contrast-125 saturate-110 group-hover:scale-105 transition-transform duration-300 drop-shadow-md"
                  />
                </div>

                <div className="pt-3 border-t border-slate-100 text-center">
                  <span className="inline-block px-2.5 py-0.5 mb-1.5 text-[10px] font-semibold text-[#a4223a] bg-red-50 rounded-full">
                    {item.type}
                  </span>
                  <h3 className="text-xs font-bold text-slate-800 group-hover:text-[#a4223a] transition-colors leading-snug truncate">
                    {item.name}
                  </h3>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}