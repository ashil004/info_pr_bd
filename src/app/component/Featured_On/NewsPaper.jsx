"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Newspaper, Globe, Tv } from 'lucide-react';

export default function NewsPaper() {
  const [activeTab, setActiveTab] = useState('bangla');

  // Website domain theke sorasori logo/icon load korar function (Google CDN)
  const getLogoUrl = (websiteUrl) => {
    try {
      const domain = new URL(websiteUrl).hostname;
      return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
    } catch {
      return '';
    }
  };

  const mediaCategories = {
    bangla: [
      { name: "Prothom Alo (প্রথম আলো)", url: "https://www.prothomalo.com", type: "জাতীয় দৈনিক (শীর্ষ)" },
      { name: "Ittefaq (ইত্তেফাক)", url: "https://www.ittefaq.com.bd", type: "জাতীয় দৈনিক (ঐতিহ্যবাহী)" },
      { name: "Naya Diganta (নয়া দিগন্ত)", url: "https://www.dailynayadiganta.com", type: "জাতীয় দৈনিক" },
      { name: "Daily Amader Desh (আমার দেশ)", url: "https://dailyamardesh.com", type: "জাতীয় দৈনিক" },
      { name: "Dainik Azadi (দৈনিক আজাদী)", url: "https://dainikazadi.net", type: "চট্টগ্রাম আঞ্চলিক দৈনিক" },
      { name: "Star News BD (স্টার নিউজ বিডি)", url: "https://starnews.com.bd/", type: "অনলাইন নিউজ পোর্টাল" },
      { name: "bdnews24.com (বিডিনিউজ২৪)", url: "https://bdnews24.com", type: "অনলাইন নিউজ পোর্টাল (বড়)" },
      { name: "Bangla Tribune (বাংলা ট্রিবিউন)", url: "https://www.banglatribune.com", type: "অনলাইন নিউজ পোর্টাল (বড়)" },
      { name: "Dhaka Post (ঢাকা পোস্ট)", url: "https://www.dhakapost.com", type: "অনলাইন নিউজ পোর্টাল (বড়)" },
      { name: "Jago News 24 (জাগো নিউজ)", url: "https://www.jagonews24.com", type: "অনলাইন নিউজ পোর্টাল (বড়)" },
      { name: "banglanews24.com (বাংলানিউজ২৪)", url: "https://www.banglanews24.com", type: "অনলাইন নিউজ পোর্টাল (বড়)" },
      { name: "Kaler Kantho (কালের কণ্ঠ)", url: "https://www.kalerkantho.com", type: "জাতীয় দৈনিক (বড়)" },
      { name: "Jugantor (যুগান্তর)", url: "https://www.jugantor.com", type: "জাতীয় দৈনিক (বড়)" },
      { name: "Bangladesh Pratidin (বাংলাদেশ প্রতিদিন)", url: "https://www.bd-pratidin.com", type: "জাতীয় দৈনিক" },
      { name: "Samakal (সমকাল)", url: "https://samakal.com", type: "জাতীয় দৈনিক" },
      { name: "Daily Manab Zamin (মানবজমিন)", url: "https://mzamin.com", type: "জাতীয় দৈনিক (ট্যাবলয়েড)" },
      { name: "Asia Post (এশিয়া পোস্ট)", url: "https://www.asia-post.com/", type: "অনলাইন নিউজ পোর্টাল" },
      { name: "NPB News (এনপিবি নিউজ)", url: "https://npbnews.com/", type: "অনলাইন নিউজ পোর্টাল" },
      { name: "UNB (ইউনাইটেড নিউজ অফ বাংলাদেশ)", url: "https://unb.com.bd", type: "সংবাদ সংস্থা" }
    ],
    english: [
      { name: "The Daily Star (ডেইলি স্টার)", url: "https://www.thedailystar.net", type: "ইংরেজি দৈনিক (শীর্ষ)" },
      { name: "Dhaka Tribune (ঢাকা ট্রিবিউন)", url: "https://www.dhakatribune.com", type: "ইংরেজি দৈনিক" },
      { name: "The Business Standard (TBS)", url: "https://www.tbsnews.net", type: "বিজনেস নিউজ (শীর্ষ)" },
      { name: "New Age (নিউ এজ)", url: "https://www.newagebd.net", type: "ইংরেজি দৈনিক" },
      { name: "The Financial Express", url: "https://thefinancialexpress.com.bd", type: "ইংরেজি বিজনেস দৈনিক" },
      { name: "Daily Sun (ডেইলি সান)", url: "https://www.daily-sun.com", type: "ইংরেজি দৈনিক" }
    ],
    tv: [
      { name: "Somoy TV (সময় টিভি)", url: "https://www.somoynews.tv", type: "২৪/৭ নিউজ চ্যানেল" },
      { name: "Jamuna TV (যমুনা টিভি)", url: "https://www.jamuna.tv", type: "২৪/৭ নিউজ চ্যানেল" },
      { name: "Ekattor TV (একাত্তর টিভি)", url: "https://ekattor.tv", type: "২৪/৭ নিউজ চ্যানেল" },
      { name: "Channel 24 (চ্যানেল ২৪)", url: "https://www.channel24bd.tv", type: "২৪/৭ নিউজ ও ইনফো" },
      { name: "Independent TV (ইন্ডিপেন্ডেন্ট টিভি)", url: "https://www.independent24.com", type: "২৪/৭ নিউজ চ্যানেল" },
      { name: "DBC News (ডিবিসি নিউজ)", url: "https://dbcnews.tv", type: "২৪/৭ নিউজ চ্যানেল" },
      { name: "T Sports (টি স্পোর্টস)", url: "https://tsports.com", type: "২৪/৭ স্পোর্টস ও সংবাদ" }
    ]
  };

  const tabs = [
    { id: 'bangla', label: 'Bangla News Portal', icon: <Newspaper size={18} /> },
    { id: 'english', label: 'English News Portal', icon: <Globe size={18} /> },
    { id: 'tv', label: 'TV Channels', icon: <Tv size={18} /> },
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
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            {mediaCategories[activeTab]?.map((item, index) => (
              <motion.a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative flex flex-col justify-between p-5 bg-white border border-slate-200/80 rounded-2xl transition-all duration-300 hover:shadow-xl hover:border-red-200 cursor-pointer overflow-hidden"
              >
                <div className="absolute top-3 right-3 p-1 rounded-full bg-slate-100 text-slate-400 group-hover:bg-red-50 group-hover:text-[#a4223a] transition-colors">
                  <ExternalLink size={14} />
                </div>

                {/* Dynamic CDN Logo */}
                <div className="h-16 w-full flex items-center justify-center my-2">
                  <img
                    src={getLogoUrl(item.url)}
                    alt={item.name}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="pt-3 border-t border-slate-100 text-center">
                  <span className="inline-block px-2 py-0.5 mb-1 text-[10px] font-medium text-[#a4223a] bg-red-50 rounded">
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