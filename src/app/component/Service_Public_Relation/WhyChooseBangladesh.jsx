"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Award, 
  Globe2, 
  Handshake, 
  SlidersHorizontal, 
  Sparkles, 
  ArrowRight,
  CheckCircle2
} from "lucide-react";

export default function WhyChooseBangladesh() {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      id: "01",
      badge: "10+ Years",
      icon: Award,
      title: "10+ Years of PR & Media Experience",
      shortTitle: "PR & Media Experience",
      description:
        "With over 10 years in PR and media, we know exactly how to get your brand noticed. Our long experience also means we understand Bangladesh’s media world. Plus, our team can create campaigns that reach the right people effectively.",
      highlights: [
        "Decade-long industry authority",
        "Deep media landscape insights",
        "Proven crisis management strategies"
      ]
    },
    {
      id: "02",
      badge: "500+ Outlets",
      icon: Globe2,
      title: "Strong Online Media Network",
      shortTitle: "Online Media Network",
      description:
        "We have strong relationships with top online news sites, bloggers, and influencers in Bangladesh. This network allows us to share your brand’s story quickly and widely, ensuring you get trusted media coverage that helps your brand grow faster.",
      highlights: [
        "Direct connection with journalists",
        "Fast-track press distribution",
        "High-domain authority placement"
      ]
    },
    {
      id: "03",
      badge: "Top Brands",
      icon: Handshake,
      title: "Trusted by Leading Brands in BD",
      shortTitle: "Trusted by BD Top Brands",
      description:
        "Many top companies and respected organizations in Bangladesh rely on us to manage their PR. They trust our team to protect their reputation, tell compelling stories, and connect with their audience in a professional way.",
      highlights: [
        "Corporate & MNC clientele",
        "Reputation protection & growth",
        "High-retention client trust"
      ]
    },
    {
      id: "04",
      badge: "Tailored",
      icon: SlidersHorizontal,
      title: "Tailored Strategies for the Digital Landscape",
      shortTitle: "Tailored Digital Strategies",
      description:
        "We never use a one-size-fits-all plan. Our strategies are specially made for your business, audience, and industry. Plus, we ensure your online presence matches your brand goals perfectly.",
      highlights: [
        "Customized audience targeting",
        "Data-backed campaign roadmap",
        "Measurable PR performance"
      ]
    },
  ];

  const currentFeature = features[activeTab];

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      
      {/* Background Subtle Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/70 pointer-events-none hidden lg:block" />
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-red-50/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center lg:text-left max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-[#a4223a] text-xs font-black uppercase tracking-wider mb-4 border border-red-100">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Why Info PR Stands Out</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Why Choose Our Digital PR Firm in <span className="text-[#a4223a]">Bangladesh?</span>
          </h2>

          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Info PR is an ideal Digital PR Company in Bangladesh that helps brands get noticed with powerful narratives and media connections. Here is why top brands select us:
          </p>
        </motion.div>

        {/* --- SPLIT INTERACTIVE LAYOUT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Interactive Nav List */}
          <div className="lg:col-span-5 space-y-3">
            {features.map((item, index) => {
              const IconComponent = item.icon;
              const isActive = activeTab === index;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(index)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 flex items-center justify-between border ${
                    isActive
                      ? "bg-[#a4223a] text-white border-[#a4223a] shadow-xl shadow-red-950/10 scale-[1.02]"
                      : "bg-white text-slate-800 border-slate-200/80 hover:bg-slate-50 hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-red-50 text-[#a4223a]"
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <div>
                      <span className={`text-xs font-bold uppercase tracking-wider block ${
                        isActive ? "text-red-200" : "text-slate-400"
                      }`}>
                        Feature {item.id}
                      </span>
                      <h3 className="font-extrabold text-base sm:text-lg">
                        {item.shortTitle}
                      </h3>
                    </div>
                  </div>

                  <ArrowRight
                    className={`w-5 h-5 transition-transform duration-300 ${
                      isActive ? "translate-x-1 text-white" : "text-slate-300"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Detailed Content View */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl border border-slate-800"
              >
                {/* Decorative Red Accent Lines */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#a4223a]/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-rose-500/10 rounded-full blur-2xl pointer-events-none" />

                <div className="relative z-10">
                  {/* Top Badge */}
                  <div className="inline-block px-3.5 py-1.5 rounded-full bg-[#a4223a] text-white text-xs font-extrabold uppercase tracking-wider mb-6">
                    {currentFeature.badge}
                  </div>

                  {/* Main Title */}
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
                    {currentFeature.title}
                  </h3>

                  {/* Paragraph */}
                  <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                    {currentFeature.description}
                  </p>

                  {/* Highlight Checklist */}
                  <div className="mt-8 pt-6 border-t border-slate-800 space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">
                      Key Highlights:
                    </h4>
                    {currentFeature.highlights.map((point, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm font-semibold text-slate-200">
                        <CheckCircle2 className="w-5 h-5 text-red-400 shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* Footer Stats / Action */}
                  <div className="mt-8 flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-medium">
                      Select options on the left to explore
                    </span>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-xs font-bold text-red-400 hover:text-red-300 uppercase tracking-wider transition-colors"
                    >
                      <span>Get Started</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}