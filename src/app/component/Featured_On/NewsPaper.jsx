"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Newspaper, Globe, Tv } from 'lucide-react';

export default function NewsPaper() {
  const [activeTab, setActiveTab] = useState('bangla');

  // ওয়েবসাইট ডোমেইন থেকে সরাসরি লোগো/আইকন লোড করার ফাংশন (গুগল সিডিএন)
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
      { name: "Prothom Alo (প্রথম আলো)", url: "https://www.prothomalo.com", type: "জাতীয় দৈনিক (শীর্ষ)" },
      { name: "bdnews24.com (বিডিনিউজ২৪)", url: "https://bdnews24.com", type: "অনলাইন নিউজ পোর্টাল (বড়)" },
      { name: "banglanews24.com (বাংলানিউজ২৪)", url: "https://www.banglanews24.com", type: "অনলাইন নিউজ পোর্টাল (বড়)" },
      { name: "Dhaka Post (ঢাকা পোস্ট)", url: "https://www.dhakapost.com", type: "অনলাইন নিউজ পোর্টাল (বড়)" },
      { name: "Jago News 24 (জাগো নিউজ)", url: "https://www.jagonews24.com", type: "অনলাইন নিউজ পোর্টাল (বড়)" },
      { name: "Risingbd (রাইজিংবিডি)", url: "https://www.risingbd.com", type: "অনলাইন নিউজ পোর্টাল (বড়)" },
      { name: "Barta24 (বার্তা২৪)", url: "https://barta24.com", type: "অনলাইন নিউজ পোর্টাল (বড়)" },
      { name: "Bangla Tribune (বাংলা ট্রিবিউন)", url: "https://www.banglatribune.com", type: "অনলাইন নিউজ পোর্টাল (বড়)" },
      { name: "UNB (ইউনাইটেড নিউজ অফ বাংলাদেশ)", url: "https://unb.com.bd", type: "সংবাদ সংস্থা" },
      { name: "BSS (বাসস)", url: "https://www.bssnews.net", type: "জাতীয় সংবাদ সংস্থা" },
      { name: "Poriborton (পরিবর্তন)", url: "https://www.poriborton.news", type: "অনলাইন নিউজ পোর্টাল" },
      { name: "Janaswar (জনস্বর)", url: "https://janaswar.com", type: "অনলাইন নিউজ পোর্টাল" },
      { name: "Priyo.com (প্রিয় ডট কম)", url: "https://www.priyo.com", type: "অনলাইন ইনফো ও নিউজ" },
      { name: "Mawlana Bhashani News", url: "https://www.mbnews24.com", type: "অনলাইন নিউজ পোর্টাল" },
      { name: "Bangladesh Journal (বাংলাদেশ জার্নাল)", url: "https://www.bgdjournal.com", type: "অনলাইন নিউজ পোর্টাল" },
      { name: "Press Bangla News (প্রেস বাংলা নিউজ)", url: "https://pressbanglanews.com", type: "অনলাইন পোর্টাল" },
      { name: "Kaler Kantho (কালের কণ্ঠ)", url: "https://www.kalerkantho.com", type: "জাতীয় দৈনিক (বড়)" },
      { name: "Jugantor (যুগান্তর)", url: "https://www.jugantor.com", type: "জাতীয় দৈনিক (বড়)" },
      { name: "Ittefaq (ইত্তেফাক)", url: "https://www.ittefaq.com.bd", type: "জাতীয় দৈনিক (ঐতিহ্যবাহী)" },
      { name: "Bangladesh Pratidin (বাংলাদেশ প্রতিদিন)", url: "https://www.bd-pratidin.com", type: "জাতীয় দৈনিক" },
      { name: "Samakal (সমকাল)", url: "https://samakal.com", type: "জাতীয় দৈনিক" },
      { name: "Daily Inqilab (ইনকিলাব)", url: "https://www.dailyinqilab.com", type: "জাতীয় দৈনিক" },
      { name: "Daily Manab Zamin (মানবজমিন)", url: "https://mzamin.com", type: "জাতীয় দৈনিক (ট্যাবলয়েড)" },
      { name: "Naya Diganta (নয়া দিগন্ত)", url: "https://www.dailynayadiganta.com", type: "জাতীয় দৈনিক" },
      { name: "Jaijaidin (যায়যায়দিন)", url: "https://www.jaijaidinnews.com", type: "জাতীয় দৈনিক" },
      { name: "Daily Janakantha (জনকণ্ঠ)", url: "https://www.dailyjanakantha.com", type: "জাতীয় দৈনিক" },
      { name: "Daily Amader Shomoy (আমাদের সময়)", url: "https://www.ainews24.com", type: "জাতীয় দৈনিক" },
      { name: "Daily Sangbad (সংবাদ)", url: "https://thedailysangbad.com", type: "জাতীয় দৈনিক (ঐতিহ্যবাহী)" },
      { name: "Daily Manobkantha (মানবকণ্ঠ)", url: "https://www.manobkantha.com.bd", type: "জাতীয় দৈনিক" },
      { name: "Daily Bhorer Kagoj (ভোরের কাগজ)", url: "https://www.bhorerkagoj.com", type: "জাতীয় দৈনিক" },
      { name: "Daily Naya Bangla (নয়া বাংলা)", url: "https://nayabangla.com", type: "জাতীয় দৈনিক" },
      { name: "Daily Desh Rupantor (দেশ রূপান্তর)", url: "https://www.deshrupantor.com", type: "জাতীয় দৈনিক" },
      { name: "Daily Sangram (সংগ্রাম)", url: "https://dailysangram.com", type: "জাতীয় দৈনিক" },
      { name: "Daily Alokito Bangladesh", url: "https://www.alokitobangladesh.com", type: "জাতীয় দৈনিক" },
      { name: "Bonik Barta (বণিক বার্তা)", url: "https://bonikbarta.net", type: "বিজনেস দৈনিক" },
      { name: "ShareBiz (শেয়ার বিজ)", url: "https://sharebiz.net", type: "শেয়ারবাজার নিউজ" },
      { name: "TechZoom (টেকজুড)", url: "https://techzoom.tv", type: "প্রযুক্তি নিউজ" },
      { name: "DigiBangla (ডিজিবাংলা)", url: "https://digibangla.tech", type: "প্রযুক্তি নিউজ" },
      { name: "TechShohor (টেক শহর)", url: "https://techshohor.com", type: "প্রযুক্তি নিউজ" },
      { name: "AgriNews24 (এগ্রি নিউজ)", url: "https://agrinews24.com", type: "কৃষি নিউজ পোর্টাল" },
      { name: "SportsMail24 (স্পোর্টস মেইল)", url: "https://sportsmail24.com", type: "খেলাধুলার খবর" },
      { name: "BD Crime News (বিডি ক্রাইম)", url: "https://bdcrimenews24.com", type: "অপরাধ ও আইন" },
      { name: "Dainik Azadi (দৈনিক আজাদী)", url: "https://dainikazadi.net", type: "চট্টগ্রাম আঞ্চলিক দৈনিক" },
      { name: "Dainik Purbokon (দৈনিক পূর্বকোণ)", url: "https://dainikpurbokon.net", type: "চট্টগ্রাম আঞ্চলিক দৈনিক" },
      { name: "Dainik Karatoa (দৈনিক করোতোয়া)", url: "https://www.karatoa.com.bd", type: "উত্তরবঙ্গ আঞ্চলিক দৈনিক" },
      { name: "Sylhet View 24 (সিলেট ভিউ)", url: "https://www.sylhetview24.net", type: "সিলেট আঞ্চলিক পোর্টাল" },
      { name: "Gramer Kagoj (গ্রামের কাগজ)", url: "https://gramerkagoj.com", type: "যশোর/দক্ষিণবঙ্গ দৈনিক" },
      { name: "Khulna News (খুলনা নিউজ)", url: "https://khulnanews.com", type: "খুলনা আঞ্চলিক পোর্টাল" },
      { name: "Dainik Purvanchal (দৈনিক পূর্বঞ্চল)", url: "https://purbanchal.com", type: "খুলনা আঞ্চলিক দৈনিক" },
      { name: "Coxsbazar News (কক্সবাজার নিউজ)", url: "https://www.cbn24.com", type: "কক্সবাজার স্থানীয় পোর্টাল" },
      { name: "Asia Post (এশিয়া পোস্ট)", url: "https://www.asia-post.com/", type: "অনলাইন নিউজ পোর্টাল" },
      { name: "Times Today BD (টাইমস টুডে বিডি)", url: "https://timestodaybd.com/", type: "অনলাইন নিউজ পোর্টাল" },
      { name: "NPB News (এনপিবি নিউজ)", url: "https://npbnews.com/", type: "অনলাইন নিউজ পোর্টাল" },
      { name: "Star News BD (স্টার নিউজ বিডি)", url: "https://starnews.com.bd/", type: "অনলাইন নিউজ পোর্টাল" }
    ],
    english: [
      { name: "The Daily Star (ডেইলি স্টার)", url: "https://www.thedailystar.net", type: "ইংরেজি দৈনিক (শীর্ষ)" },
      { name: "Dhaka Tribune (ঢাকা ট্রিবিউন)", url: "https://www.dhakatribune.com", type: "ইংরেজি দৈনিক" },
      { name: "New Age (নিউ এজ)", url: "https://www.newagebd.net", type: "ইংরেজি দৈনিক" },
      { name: "The Financial Express", url: "https://thefinancialexpress.com.bd", type: "ইংরেজি বিজনেস দৈনিক" },
      { name: "The Daily Observer (অবজারভার)", url: "https://www.observerbd.com", type: "ইংরেজি দৈনিক" },
      { name: "Daily Sun (ডেইলি সান)", url: "https://www.daily-sun.com", type: "ইংরেজি দৈনিক" },
      { name: "The Business Standard (TBS)", url: "https://www.tbsnews.net", type: "বিজনেস নিউজ (শীর্ষ)" }
    ],
    tv: [
      { name: "Somoy TV (সময় টিভি)", url: "https://www.somoynews.tv", type: "২৪/৭ নিউজ চ্যানেল" },
      { name: "Jamuna TV (যমুনা টিভি)", url: "https://www.jamuna.tv", type: "২৪/৭ নিউজ চ্যানেল" },
      { name: "Ekattor TV (একাত্তর টিভি)", url: "https://ekattor.tv", type: "২৪/৭ নিউজ চ্যানেল" },
      { name: "Channel 24 (চ্যানেল ২৪)", url: "https://www.channel24bd.tv", type: "২৪/৭ নিউজ ও ইনফোটেইনমেন্ট" },
      { name: "Independent TV (ইন্ডিপেনডেন্ট টিভি)", url: "https://www.independent24.com", type: "২৪/৭ নিউজ চ্যানেল" },
      { name: "DBC News (ডিবিসি নিউজ)", url: "https://dbcnews.tv", type: "২৪/৭ নিউজ চ্যানেল" },
      { name: "NEWS24 (নিউজ ২৪)", url: "https://www.news24bd.tv", type: "২৪/৭ নিউজ চ্যানেল" },
      { name: "ATN News (এটিএন নিউজ)", url: "https://atnnewstv.com", type: "২৪/৭ নিউজ চ্যানেল" },
      { name: "Ekhon TV (এখন টিভি)", url: "https://www.ekhontv.com", type: "২৪/৭ বিজনেস ও নিউজ" },
      { name: "BTV News (বিটিভি নিউজ)", url: "https://btv.gov.bd", type: "সরকারি সংবাদ চ্যানেল" },
      { name: "Channel i (চ্যানেল আই)", url: "https://www.channelionline.com", type: "সংবাদ ও বিনোদন" },
      { name: "NTV (এনটিভি)", url: "https://www.ntvbd.com", type: "সংবাদ ও বিনোদন" },
      { name: "RTV (আরটিভি)", url: "https://www.rtvonline.com", type: "সংবাদ ও বিনোদন" },
      { name: "Banglavision (বাংলাভিশন)", url: "https://www.bvnews24.com", type: "সংবাদ ও বিনোদন" },
      { name: "ATN Bangla (এটিএন বাংলা)", url: "https://atnbangla.tv", type: "সংবাদ ও বিনোদন" },
      { name: "Desh TV (দেশ টিভি)", url: "https://www.desh.tv", type: "সংবাদ ও বিনোদন" },
      { name: "Ekushey TV (একুশে টিভি)", url: "https://www.ekushey-tv.com", type: "সংবাদ ও বিনোদন" },
      { name: "Maasranga TV (মাছরাঙা টিভি)", url: "https://maasranga.tv", type: "সংবাদ ও বিনোদন" },
      { name: "GTV (গাজী টিভি)", url: "https://www.gazitv.com", type: "স্পোর্টস, নিউজ ও বিনোদন" },
      { name: "Boishakhi TV (বৈশাখী টিভি)", url: "https://boishakhionline.com", type: "সংবাদ ও বিনোদন" },
      { name: "Asian TV (এশিয়ান টিভি)", url: "https://asiantvbd.com", type: "সংবাদ ও বিনোদন" },
      { name: "SA TV (এসএ টিভি)", url: "https://satv.com.bd", type: "সংবাদ ও বিনোদন" },
      { name: "Mohona TV (মোহনা টিভি)", url: "https://mohonatv.com", type: "সংবাদ ও বিনোদন" },
      { name: "My TV (মাই টিভি)", url: "https://mytvbd.tv", type: "সংবাদ ও বিনোদন" },
      { name: "Bijoy TV (বিজয় টিভি)", url: "https://bijoytv.media", type: "সংবাদ ও বিনোদন" },
      { name: "Channel 9 (চ্যানেল নাইন)", url: "https://channel9bd.tv", type: "সংবাদ ও বিনোদন" },
      { name: "Ananda TV (আনন্দ টিভি)", url: "https://anandatv.tv", type: "সংবাদ ও বিনোদন" },
      { name: "Global TV (গ্লোবাল টিভি)", url: "https://globaltvbd.com", type: "সংবাদ ও বিনোদন" },
      { name: "Citizen TV (সিটিজেন টিভি)", url: "https://citizentvbd.com", type: "সংবাদ ও ইনফোটেইনমেন্ট" },
      { name: "Nexus Television (নেক্সাস টিভি)", url: "https://nexustv.com", type: "ইনফোটেইনমেন্ট ও নিউজ" },
      { name: "T Sports (টি স্পোর্টস)", url: "https://tsports.com", type: "২৪/৭ স্পোর্টস ও সংবাদ" },
      { name: "BTV (বাংলাদেশ টেলিভিশন)", url: "https://btv.gov.bd", type: "জাতীয় সরকারি চ্যানেল" },
      { name: "BTV World (বিটিভি ওয়ার্ল্ড)", url: "https://btv.gov.bd", type: "আন্তর্জাতিক সরকারি চ্যানেল" },
      { name: "Duronto TV (দুরন্ত টিভি)", url: "https://duronto.tv", type: "শিশু ও শিক্ষামূলক" }
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
                {mediaCategories[tab.id].length}
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
            {mediaCategories[activeTab].map((item, index) => (
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