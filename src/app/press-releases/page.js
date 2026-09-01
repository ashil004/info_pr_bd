"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, Globe2, Send, ShieldCheck, Newspaper, ExternalLink, 
  Sparkles, CheckCircle2, Users, Award, ArrowRight 
} from 'lucide-react';

export default function PressReleases() {
  const [searchQuery, setSearchQuery] = useState('');

  // InfoPR Global Press Release Networks & Features
  const prFeatures = [
    {
      title: "Global News Distribution",
      desc: "Reach top-tier international media networks including AP, Bloomberg, Yahoo Finance, and Reuters instantly.",
      icon: <Globe2 className="text-rose-600" size={22} />
    },
    {
      title: "Guaranteed Media Placement",
      desc: "Get guaranteed publication on high-authority news portals with organic search indexing.",
      icon: <ShieldCheck className="text-rose-600" size={22} />
    },
    {
      title: "Targeted Audience Reach",
      desc: "Distribute your press release by specific geographical regions, industries, and target demographics.",
      icon: <Send className="text-rose-600" size={22} />
    },
    {
      title: "Comprehensive Analytics Report",
      desc: "Receive a detailed placement report with live links, readership stats, and SEO impact metrics.",
      icon: <Newspaper className="text-rose-600" size={22} />
    }
  ];

  // Impact Statistics
  const stats = [
    { label: "Global Media Outlets", value: "500+", icon: <Globe2 size={20} /> },
    { label: "Guaranteed Indexing", value: "100%", icon: <CheckCircle2 size={20} /> },
    { label: "Monthly Audience Reach", value: "50M+", icon: <Users size={20} /> },
    { label: "Successful Campaigns", value: "1,200+", icon: <Award size={20} /> }
  ];

  // Global Coverage Networks
  const coverageRegions = [
    { name: "North America (USA & Canada)", portals: "AP News, MarketWatch, Yahoo Finance, Digital Journal" },
    { name: "Europe & UK", portals: "BBC Networks, European Business, London PR, Financial Outlets" },
    { name: "Asia-Pacific (APAC)", portals: "AsiaOne, TechInAsia, Xinhua News, National Dailies" },
    { name: "Middle East & GCC", portals: "Arabian Business, Gulf News, Zawya, Khaleej Times" }
  ];

  // Sample Recent Press Releases
  const recentPRs = [
    {
      title: "InfoPR Expands Global News Wire to Over 500 Media Networks",
      date: "September 2026",
      category: "Corporate",
      link: "#"
    },
    {
      title: "Fintech Leader Announces Series B Funding via InfoPR Network",
      date: "August 2026",
      category: "Finance",
      link: "#"
    },
    {
      title: "Global Tech Summit 2026 Partners with InfoPR for International Media",
      date: "August 2026",
      category: "Technology",
      link: "#"
    }
  ];

  // Filtering regions based on search query
  const filteredRegions = coverageRegions.filter(region =>
    region.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    region.portals.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen overflow-x-hidden">
      
      {/* Animated Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 text-white pt-24 pb-20 px-4">
        {/* Animated Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.25, 0.15]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-20%] left-[20%] w-72 h-72 bg-rose-500 rounded-full blur-[100px]" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-[-10%] right-[20%] w-80 h-80 bg-rose-700 rounded-full blur-[120px]" 
          />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-semibold tracking-wide backdrop-blur-md mb-6 shadow-sm"
          >
            <Sparkles size={14} className="text-rose-400 animate-pulse" />
            <span>InfoPR International Public Relations</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl sm:text-6xl font-black tracking-tight leading-tight sm:leading-none"
          >
            Global Press Release <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-rose-400 via-rose-300 to-amber-200 bg-clip-text text-transparent">
              Distribution Network
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed"
          >
            Amplify your brand message globally with InfoPR. Instant distribution to major international news outlets, journalists, and search engines.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-10 max-w-lg mx-auto"
          >
            <div className="relative flex items-center shadow-2xl">
              <Search className="absolute left-4 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Search global networks or outlets..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-5 py-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/15 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500/40 focus:border-rose-400/60 transition-all shadow-inner"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-20">
        
        {/* Impact Statistics */}
        <motion.section 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 -mt-20 relative z-20"
        >
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-lg flex flex-col items-center text-center"
            >
              <div className="p-3 bg-rose-50 text-rose-600 rounded-xl mb-3">
                {stat.icon}
              </div>
              <h4 className="text-2xl sm:text-3xl font-black text-slate-900">{stat.value}</h4>
              <p className="text-xs text-slate-500 mt-1 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.section>

        {/* Core Features */}
        <section>
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Why Choose InfoPR Distribution?</h2>
            <p className="text-sm text-slate-500 mt-2">Maximum exposure for your press releases with guaranteed placements.</p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {prFeatures.map((feature, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-rose-200 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-rose-50 flex items-center justify-center mb-4 border border-rose-100">
                  {feature.icon}
                </div>
                <h3 className="text-base font-bold text-slate-800 mb-2">{feature.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* International Coverage */}
        <section>
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Global Coverage Networks</h2>
            <p className="text-sm text-slate-500 mt-2">Target specific international markets and top news aggregators.</p>
          </motion.div>

          <motion.div 
            layout
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {filteredRegions.map((region, index) => (
              <motion.div
                key={index}
                layout
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="group p-6 bg-white border border-slate-200/80 rounded-2xl shadow-sm hover:shadow-xl hover:border-rose-200 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold px-3 py-1 bg-rose-50 text-rose-700 rounded-full border border-rose-100">
                      Region Network
                    </span>
                    <ExternalLink size={16} className="text-slate-400 group-hover:text-rose-600 transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-rose-700 transition-colors">
                    {region.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <span className="font-semibold text-slate-700">Major Media Outlets:</span> {region.portals}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Recent Press Releases */}
        <section>
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-between mb-8"
          >
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">Recent Press Releases</h2>
              <p className="text-xs text-slate-500 mt-1">Live updates from our global media syndication feed.</p>
            </div>
            
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {recentPRs.map((pr, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
                className="bg-white p-5 rounded-xl border border-slate-200/80 hover:border-rose-200 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[10px] font-bold px-2 py-0.5 bg-slate-100 text-slate-600 rounded">
                      {pr.category}
                    </span>
                    <span className="text-[10px] text-slate-400">{pr.date}</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-800 hover:text-rose-600 cursor-pointer transition-colors">
                    {pr.title}
                  </h4>
                </div>
                <button className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-rose-600 shrink-0">
                  <span>Read Article</span>
                  <ExternalLink size={12} />
                </button>
              </motion.div>
            ))}
          </motion.div>
        </section>

      </main>

    </div>
  );
}