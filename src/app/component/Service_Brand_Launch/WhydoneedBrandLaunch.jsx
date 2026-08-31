"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  ShieldCheck,
  Sparkles,
  Award,
  ArrowRight,
  Zap
} from "lucide-react";

export default function WhydoneedBrandLaunch() {
  const [activeTab, setActiveTab] = useState(0);

  const points = [
    {
      id: "01",
      title: "Get Noticed by the Right People",
      subtitle: "Targeted Audience Connection",
      icon: Users,
      description:
        "With the brand launch press release service in Dhaka, you can ensure your news connects to the media. Plus, it helps your clients and new people to know about you in the market."
    },
    {
      id: "02",
      title: "Build Trust from Day One",
      subtitle: "Instant Market Credibility",
      icon: ShieldCheck,
      description:
        "Your brand is introduced as professional and reliable with the right brand launch press release plan. It also makes people believe in your business before they try your products or services."
    },
    {
      id: "03",
      title: "Make a Strong First Impression",
      subtitle: "High-Impact Press Launch",
      icon: Sparkles,
      description:
        "A well-written press release for brand launch creates excitement and confidence in your audience. It also helps your launch message to leave a positive and lasting impact on everyone."
    },
    {
      id: "04",
      title: "Stand Out in a Competitive Market",
      subtitle: "Dominate Industry Noise",
      icon: Award,
      description:
        "In a market full of new names, you can have a unique presence with a press release on your new brand launch. It also ensures your launch gets seen above the competitors."
    }
  ];

  const ActiveIcon = points[activeTab].icon;

  return (
    <section className="py-20 sm:py-28 bg-white text-slate-900 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- HEADER --- */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#a4223a]/10 text-[#a4223a] border border-[#a4223a]/20 text-xs font-black uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5 text-[#a4223a]" />
            <span>Core Brand Advantage</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-slate-900">
            Why Do You Need a Professional <br className="hidden sm:block" />
            <span className="text-[#a4223a]">Launch Press Release</span> in BD?
          </h2>

          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            We offer you a great new company launch press release service in Dhaka to make it known and reliable. Here's why you need our service.
          </p>
        </motion.div>

        {/* --- UNIQUE SPLIT FEATURE FOCUS (NO CARDS / NO TIMELINE) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Navigation List */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-3">
            {points.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeTab === index;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(index)}
                  onMouseEnter={() => setActiveTab(index)}
                  className={`relative w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 flex items-center justify-between group ${
                    isActive
                      ? "bg-slate-900 text-white shadow-xl translate-x-2"
                      : "bg-slate-50 hover:bg-slate-100 text-slate-700"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`font-mono text-xs font-extrabold ${isActive ? "text-[#a4223a]" : "text-slate-400"}`}>
                      /{item.id}
                    </span>
                    <span className="font-bold text-sm sm:text-base tracking-tight">
                      {item.title}
                    </span>
                  </div>

                  <div className={`p-2 rounded-xl transition-colors ${isActive ? "bg-[#a4223a] text-white" : "text-slate-400 group-hover:text-slate-900"}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Highlighting Feature Display Panel */}
          <div className="lg:col-span-7 bg-slate-900 text-white rounded-3xl p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden shadow-2xl min-h-[380px]">
            
            {/* Background Aesthetic Color Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#a4223a]/25 blur-[100px] pointer-events-none rounded-full" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 flex flex-col justify-between h-full"
              >
                <div>
                  {/* Top Tag & Icon Badge */}
                  <div className="flex items-center justify-between border-b border-slate-800 pb-6 mb-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#a4223a]/20 text-[#a4223a] text-xs font-extrabold uppercase tracking-widest border border-[#a4223a]/30">
                      <span>{points[activeTab].subtitle}</span>
                    </div>

                    <div className="w-12 h-12 rounded-2xl bg-[#a4223a] text-white flex items-center justify-center shadow-lg shadow-[#a4223a]/30">
                      <ActiveIcon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Main Title & Description */}
                  <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">
                    {points[activeTab].title}
                  </h3>

                  <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
                    {points[activeTab].description}
                  </p>
                </div>

                {/* Bottom Interactive Footer Indicator */}
                <div className="pt-8 mt-8 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-bold uppercase tracking-wider">
                  <span>Strategic Advantage #{points[activeTab].id}</span>
                  <div className="flex items-center gap-2 text-[#a4223a]">
                    <span>Info PR Launch Standard</span>
                    <ArrowRight className="w-4 h-4" />
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