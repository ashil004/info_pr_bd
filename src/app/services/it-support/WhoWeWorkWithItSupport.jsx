'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function WhoWeWorkWithItSupport() {
  const [activeTab, setActiveTab] = useState(0);

  const sectors = [
    {
      id: 0,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m3 0h1m-1-4h.01M12 12h.01M12 8h.01M16 12h.01M16 8h.01M8 12h.01M8 8h.01" />
        </svg>
      ),
      title: 'Corporate Brands & Enterprises',
      subtitle: 'Scalable infrastructure, server management, and 24/7 support.',
      heading: 'Corporate Brands & Large Enterprises',
      description:
        'Our Specialized IT Engineers assist high-growth enterprise clients and corporate firms with managed IT infrastructure, security compliance, network reliability, and dedicated helpdesk services to keep core operations running smoothly.',
      focusAreas: [
        'Enterprise Network Management',
        '24/7 Dedicated Tier-3 Support',
        'Cloud Server Infrastructure',
        'Data Compliance & Backup Security',
      ],
    },
    {
      id: 1,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Startups & Tech-Enabled Ventures',
      subtitle: 'Rapid-growth SaaS, platform optimization, and on-call tech services.',
      heading: 'Startups & Tech-Enabled Platforms',
      description:
        'We help fast-scaling startups deploy, optimize, and secure their core software products. From NestJS microservices and Golang APIs to React Native apps, we ensure high performance and maximum uptime.',
      focusAreas: [
        'Cloud Platform Scaling & DevOps',
        'Fast API Integration & Microservices',
        'Real-Time Performance Audits',
        'Database Optimization & Caching',
      ],
    },
    {
      id: 2,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      title: 'E-Commerce & High Traffic Stores',
      subtitle: 'Zero downtime during peak sales, gateway security & speed.',
      heading: 'E-Commerce & Digital Marketplaces',
      description:
        'High-volume online stores require bulletproof security and instant response times. We provide continuous load monitoring, database query tuning, SSL management, and payment gateway security.',
      focusAreas: [
        'Zero-Downtime Guarantee',
        'Payment Gateway & Security Patches',
        'Database Tuning & Redis Caching',
        'Fast Load Speed Optimization',
      ],
    },
    {
      id: 3,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      ),
      title: 'Public Sector & NGOs',
      subtitle: 'Official notices, secure data systems & policy management.',
      heading: 'Public Sector & Development Agencies',
      description:
        'We assist national NGOs and public institutions with secure database management, strict vulnerability audits, and protocol compliance to protect sensitive information and maintain public trust.',
      focusAreas: [
        'Strict Vulnerability & Audit Fixes',
        'Secure Data Storage & Encryption',
        'Multi-Layer Access Control',
        'Regulatory Compliance Support',
      ],
    },
  ];

  return (
    <section className="w-full bg-[#FAFAFA] py-16 md:py-24 px-6 md:px-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header Badge & Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-[#FDE8E8] text-[#A61C30] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
            <span>✨</span> CLIENT ECOSYSTEM
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Who We Work With?
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Our clients rely on us for seamless managed IT services, critical tech solutions, and proactive platform support across corporate, startup, and public sectors.
          </p>
        </div>

        {/* Main Content Layout (Split Left Tabs & Right Card) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Interactive Tabs */}
          <div className="lg:col-span-5 space-y-3">
            {sectors.map((sector, index) => {
              const isActive = activeTab === index;
              return (
                <button
                  key={sector.id}
                  onClick={() => setActiveTab(index)}
                  className={`w-full text-left p-5 rounded-2xl transition-all duration-300 flex items-center gap-4 relative border ${
                    isActive
                      ? 'bg-white border-[#A61C30]/20 shadow-lg shadow-red-500/5 ring-1 ring-[#A61C30]/20'
                      : 'bg-white/60 border-transparent hover:bg-white hover:border-gray-200'
                  }`}
                >
                  {/* Left Active Red Accent Bar */}
                  {isActive && (
                    <motion.div
                      layoutId="activeBar"
                      className="absolute left-0 top-3 bottom-3 w-1.5 bg-[#A61C30] rounded-r-full"
                    />
                  )}

                  {/* Icon Box */}
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isActive
                        ? 'bg-[#A61C30] text-white shadow-md shadow-[#A61C30]/30'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {sector.icon}
                  </div>

                  {/* Text Details */}
                  <div className="flex-1 min-w-0">
                    <h3
                      className={`text-base font-bold transition-colors truncate ${
                        isActive ? 'text-[#A61C30]' : 'text-[#0F172A]'
                      }`}
                    >
                      {sector.title}
                    </h3>
                    <p className="text-xs text-gray-500 truncate mt-0.5">
                      {sector.subtitle}
                    </p>
                  </div>

                  {/* Arrow Indicator on Active */}
                  {isActive && (
                    <div className="text-[#A61C30] text-sm font-bold pr-1">
                      →
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Side: Selected Sector Card Display */}
          <div className="lg:col-span-7">
            <div className="relative bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-xl overflow-hidden min-h-[420px] flex flex-col justify-between">
              
              {/* Background Light Red Glow Circle (Matching Image 3 & 4) */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-50 rounded-full blur-3xl -z-0 pointer-events-none translate-x-1/3 -translate-y-1/3 opacity-70" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="relative z-10 space-y-6"
                >
                  {/* Selected Sector Top Tag */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-red-50 text-[#A61C30] flex items-center justify-center border border-red-100 font-bold">
                      {sectors[activeTab].icon}
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#A61C30]">
                        SELECTED SECTOR
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight">
                        {sectors[activeTab].heading}
                      </h3>
                    </div>
                  </div>

                  {/* Main Paragraph */}
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                    {sectors[activeTab].description}
                  </p>

                  <hr className="border-gray-100 my-6" />

                  {/* Key Focus Areas List */}
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
                      KEY FOCUS AREAS & SUPPORT:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {sectors[activeTab].focusAreas.map((area, i) => (
                        <div key={i} className="flex items-center gap-2.5 text-sm font-bold text-[#0F172A]">
                          <span className="text-[#A61C30] text-base">✦</span>
                          <span>{area}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}