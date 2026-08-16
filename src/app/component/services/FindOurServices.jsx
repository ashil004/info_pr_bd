"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FileText, 
  Globe, 
  Share2, 
  Award, 
  Mic2, 
  Rocket, 
  Layers, 
  Compass, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  Target,
  Megaphone,
  TrendingUp
} from "lucide-react";


const servicesCategoryData = [
  {
    id: "press-release",
    title: "Press Release Services",
    icon: FileText,
    subtitle: "Complete PR Writing & Global Distribution Solutions",
    subServices: [
      "Press Release Distribution (Local/National/International)",
      "Corporate Announcements",
      "Product/Brand Launch Releases",
      "Partnership & Collaboration News",
      "Financial & Business Updates",
      "CSR Activities & Social Impact Stories",
      "Press Release Optimization for Search Engines",
      "SEO Optimization for Online Visibility",
      "Multimedia Integration (Images, Videos, Infographics)",
      "Localization & Language Translation",
      "Media Coverage Tracking & Real-time Alerts",
      "Clipping Reports & Performance Metrics"
    ]
  },
  {
    id: "digital-pr",
    title: "Digital PR",
    icon: Globe,
    subtitle: "High-Authority Online Media Presence & ORM",
    subServices: [
      "Digital Press Release Distribution",
      "Online News Portal Outreach",
      "Digital & Multimedia PR (Videos, Reels)",
      "Campaign Strategy & Creative Planning",
      "Social Media Influencer Collaboration",
      "Online Reputation Management (ORM)",
      "Brand Sentiment Monitoring",
      "Crisis Handling on Digital Platforms",
      "Guest Posts & Thought Leadership Op-Eds",
      "Infographics & Visual Content Distribution"
    ]
  },
  {
    id: "digital-communications",
    title: "Digital Communications",
    icon: Share2,
    subtitle: "Strategic Social & Online Brand Positioning",
    subServices: [
      "Social Media Strategy & Management",
      "Search Engine Optimization (SEO) for PR",
      "Online Reputation Management (ORM)",
      "Content Marketing (Digital Assets)",
      "Email Marketing (PR-Focused Outreaches)",
      "Website PR Content Optimization"
    ]
  },
  {
    id: "international-outreach",
    title: "International Media Outreach",
    icon: Award,
    subtitle: "Cross-Border Media & Global Press Relations",
    subServices: [
      "Global Press Release Distribution",
      "International Media Relations & Outreach",
      "Cross-border Campaign Coordination",
      "Localization of Regional PR Content"
    ]
  },
  {
    id: "press-conference",
    title: "Press Conference",
    icon: Mic2,
    subtitle: "End-to-End Media Event Management & Briefing",
    subServices: [
      "Press Conference Planning & Management",
      "Venue Selection & Stage Setup",
      "Media Invitation & Journalist Follow-up",
      "Spokesperson Briefing & Q&A Prep",
      "Logistics & Technical Support",
      "Post-Conference Media Relations"
    ]
  },
  {
    id: "brand-launch",
    title: "Brand Launch Strategy & Execution",
    icon: Rocket,
    subtitle: "High-Impact Market Entry & Pre-Launch Hype",
    subServices: [
      "Market Entry Strategy & Positioning",
      "Launch Event Management",
      "Pre-Launch Hype Generation",
      "Post-Launch Sustenance Campaigns",
      "Media Kit Development & Assets"
    ]
  },
  {
    id: "logistics-support",
    title: "On-Ground Logistics & Activation Support",
    icon: Layers,
    subtitle: "Flawless Event Execution & Media Coordination",
    subServices: [
      "Media Registration & Kit Distribution",
      "Spokesperson & VVIP Guest Management",
      "Event Flow & Coordination (Media Points)",
      "Photography & Videography Coordination",
      "Post-Event Media Follow-up",
      "Branding & Signage Placement"
    ]
  },
  {
    id: "strategy-planning",
    title: "Strategy And Planning",
    icon: Compass,
    subtitle: "Bespoke PR Campaigns & Sentiment Analysis",
    subServices: [
      "Event Concept Development",
      "Budgeting & Vendor Management (PR-specific)",
      "Guest List Management & Invitation Design",
      "Media Guest List & Accreditation",
      "Logistics Planning (Venue, Catering)",
      "Security & Emergency Planning"
    ]
  },
  {
    id: "campaign-execution",
    title: "Campaign Execution",
    icon: Target,
    subtitle: "Targeted Media Rollouts & Audience Engagement",
    subServices: [
      "Multi-channel PR Deployment",
      "Real-time Campaign Performance Tracking",
      "Audience Targeting & Message Alignment",
      "Cross-Media Amplification"
    ]
  },
  {
    id: "media-engagement",
    title: "Media Engagement",
    icon: Megaphone,
    subtitle: "Building Strong Journalist & Publication Relationships",
    subServices: [
      "Direct Journalist Pitching",
      "Media Networking Events & Roundtables",
      "Exclusive Interview Placements",
      "Press Briefing Sessions"
    ]
  },
  {
    id: "media-monitoring",
    title: "Media Monitoring",
    icon: TrendingUp,
    subtitle: "Real-Time Tracking, Analytics & Clipping Reports",
    subServices: [
      "24/7 News & Press Tracking",
      "Sentiment & Share of Voice Analysis",
      "Comprehensive Clipping Reports",
      "Competitor Media Benchmarking"
    ]
  }
];

export default function FindOurServices() {
  const [activeTab, setActiveTab] = useState(servicesCategoryData[0].id);

  const activeCategory = servicesCategoryData.find((cat) => cat.id === activeTab);

  return (
    <section className="w-full bg-slate-50 text-slate-900 py-16 md:py-24 relative overflow-hidden border-b border-slate-200">
      
      
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#a4223a]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#a4223a]/10 border border-[#a4223a]/20 text-[#a4223a] text-xs sm:text-sm font-bold">
            <Sparkles className="w-4 h-4" />
            <span>EXPLORE EXTENDED CAPABILITIES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Find More <span className="text-[#a4223a]">Services</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Select any service category below to view detailed features and execution coverage.
          </p>
        </div>

        
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-12 max-w-6xl mx-auto">
          {servicesCategoryData.map((cat) => {
            const IconComponent = cat.icon;
            const isActive = activeTab === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 border ${
                  isActive
                    ? "bg-[#a4223a] text-white border-[#a4223a] shadow-md shadow-[#a4223a]/25 scale-105"
                    : "bg-white text-slate-700 border-slate-200/90 hover:bg-slate-100 hover:border-slate-300 hover:text-slate-900 shadow-sm"
                }`}
              >
                <IconComponent className={`w-4 h-4 ${isActive ? "text-white" : "text-slate-500"}`} />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

          
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl"
          >
            {/* Active Header inside Panel */}
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 mb-8 border-b border-slate-100 gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-[#a4223a]/10 border border-[#a4223a]/20 text-[#a4223a] flex items-center justify-center">
                    {activeCategory && <activeCategory.icon className="w-5 h-5" />}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    {activeCategory?.title}
                  </h3>
                </div>
                <p className="text-sm text-slate-500 font-normal">
                  {activeCategory?.subtitle}
                </p>
              </div>

              {/* Quick Action Button */}
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white font-bold text-xs sm:text-sm hover:bg-[#a4223a] transition-colors shadow-sm self-start md:self-auto"
              >
                <span>Consult For This Service</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Sub-services Interactive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              {activeCategory?.subServices.map((subItem, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.02 }}
                  className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200/70 hover:border-red-300 hover:bg-red-50/40 transition-all duration-200 group"
                >
                  <div className="mt-0.5 w-6 h-6 rounded-lg bg-[#a4223a]/10 text-[#a4223a] flex items-center justify-center shrink-0 group-hover:bg-[#a4223a] group-hover:text-white transition-colors">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium text-slate-700 leading-snug group-hover:text-slate-900 transition-colors">
                    {subItem}
                  </span>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}