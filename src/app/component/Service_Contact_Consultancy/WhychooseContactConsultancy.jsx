"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Award, 
  Globe2, 
  ShieldCheck, 
  Sliders, 
  Sparkles, 
  CheckCircle2,
  Cpu,
  Layers
} from "lucide-react";

export default function WhychooseContactConsultancy() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: "01",
      icon: Award,
      title: "Experienced Content Experts",
      subtitle: "Strategic Narrative Engineers",
      description:
        "We offer dedicated and skilled experts to solve complex content tasks with proven methods. Our team turns tough ideas into clear, high-impact brand stories that resonate deeply with target audiences.",
      points: [
        "Tone & Voice Optimization",
        "High-Converting Editorial Structure",
        "Measurable Audience Resonance"
      ],
      metric: "99% Quality Benchmark",
      badge: "Expert Team"
    },
    {
      id: "02",
      icon: Globe2,
      title: "Local & Global Market Insight",
      subtitle: "BD Reality meets International Standards",
      description:
        "Our agency combines deep Bangladesh market nuances with international media trends. We ensure your brand speaks naturally to local audiences while staying competitive on global platforms.",
      points: [
        "Native Cultural Alignment",
        "Global SEO & PR Synergy",
        "Multi-Platform Authority"
      ],
      metric: "Global Impact",
      badge: "Cross-Market"
    },
    {
      id: "03",
      icon: ShieldCheck,
      title: "Trusted by Leading Brands",
      subtitle: "Verified Authority & Credibility",
      description:
        "We help brands build lasting authority and reach through transparent content. Leading corporate and technology organizations trust us because we consistently deliver verified results.",
      points: [
        "100% Transparent Audits",
        "Tier-1 Press Placements",
        "Sustainable Brand Equity"
      ],
      metric: "300+ Verified Partners",
      badge: "High Trust"
    },
    {
      id: "04",
      icon: Sliders,
      title: "Tailored Content Solutions",
      subtitle: "Custom-Built Content Engines",
      description:
        "We don't rely on generic templates. We deeply analyze your business goals, target audience, and brand voice to craft bespoke content roadmaps that drive measurable business outcomes.",
      points: [
        "Zero Template Policy",
        "Goal-Aligned Content KPIs",
        "Dynamic Campaign Scaling"
      ],
      metric: "100% Customized",
      badge: "Bespoke PR"
    },
  ];

  const current = features[activeFeature];
  const ActiveIcon = current.icon;

  return (
    <section className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Background Neon Grid Decor */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#a4223a]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/60 text-red-400 text-xs font-black uppercase tracking-wider mb-4 border border-red-800/40 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#a4223a]" />
            <span>Why Choose Info PR</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Why Choose Our Content Consultancy Service in <span className="text-[#a4223a]">BD?</span>
          </h2>

          <p className="mt-3 sm:mt-4 text-slate-400 text-xs sm:text-base leading-relaxed">
            Click on any feature node to explore how our content engine accelerates your brand's market voice:
          </p>
        </motion.div>

        {/* --- UNIQUE INTERACTIVE ORBIT SCANNER ENGINE (DESKTOP) --- */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-center max-w-6xl mx-auto min-h-[480px]">
          
          {/* LEFT 6 COLUMNS: ORBIT ENGINE CONTROLLER */}
          <div className="col-span-6 relative flex items-center justify-center h-[420px]">
            
            {/* Concentric Orbit Rings */}
            <div className="absolute w-[360px] h-[360px] rounded-full border border-slate-800 border-dashed animate-[spin_60s_linear_infinite]" />
            <div className="absolute w-[240px] h-[240px] rounded-full border border-red-900/30" />

            {/* Central Core Branding */}
            <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-[#a4223a] to-rose-950 border border-red-500/30 shadow-2xl shadow-red-600/40 flex flex-col items-center justify-center text-center p-2 relative z-20">
              <Cpu className="w-8 h-8 text-white mb-1 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest text-red-200">Info PR</span>
              <span className="text-[8px] font-bold text-red-300/80">Engine</span>
            </div>

            {/* Interactive Feature Nodes (Positioned around Orbit) */}
            {features.map((item, idx) => {
              const Icon = item.icon;
              const isActive = activeFeature === idx;

              // Orbit Position Angles
              const positions = [
                "top-2 left-1/2 -translate-x-1/2",       // Node 1: Top
                "right-2 top-1/2 -translate-y-1/2",    // Node 2: Right
                "bottom-2 left-1/2 -translate-x-1/2",    // Node 3: Bottom
                "left-2 top-1/2 -translate-y-1/2"      // Node 4: Left
              ];

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveFeature(idx)}
                  className={`absolute ${positions[idx]} group transition-all duration-300 focus:outline-none z-30`}
                >
                  <div
                    className={`flex items-center gap-3 p-2.5 pr-4 rounded-2xl border transition-all duration-300 ${
                      isActive
                        ? "bg-[#a4223a] border-red-400 text-white shadow-lg shadow-red-900/50 scale-110"
                        : "bg-slate-800/90 border-slate-700/80 text-slate-300 hover:border-slate-500 hover:bg-slate-800"
                    }`}
                  >
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 font-bold text-xs ${
                        isActive ? "bg-white text-[#a4223a]" : "bg-slate-700 text-red-400"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>

                    <div className="text-left">
                      <span className="text-[9px] font-black uppercase tracking-wider block opacity-70">
                        {item.id}
                      </span>
                      <span className="text-xs font-black whitespace-nowrap">
                        {item.title}
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT 6 COLUMNS: LIVE SCANNER DISPLAY PANEL */}
          <div className="col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/80 rounded-3xl p-8 relative overflow-hidden shadow-2xl"
              >
                {/* Top Accent Glowing Status Bar */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-700/60">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-red-400">
                      Feature scanner // {current.id}
                    </span>
                  </div>

                  <span className="text-xs font-black uppercase text-slate-400 bg-slate-900/80 border border-slate-700 px-3 py-1 rounded-full">
                    {current.badge}
                  </span>
                </div>

                {/* Subtitle & Title */}
                <span className="text-xs font-bold uppercase tracking-wider text-red-400">
                  {current.subtitle}
                </span>

                <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight mt-1">
                  {current.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-slate-300 text-sm leading-relaxed">
                  {current.description}
                </p>

                {/* Capability Bullet Highlights */}
                <div className="mt-6 space-y-2.5">
                  {current.points.map((pt, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs font-bold text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-[#a4223a] shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom Metric Indicator */}
                <div className="mt-8 pt-4 border-t border-slate-700/60 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-slate-400 font-medium">
                    <Layers className="w-4 h-4 text-red-400" />
                    <span>Info PR Precision System</span>
                  </div>

                  <span className="font-extrabold text-[#a4223a] bg-red-950/80 border border-red-800/60 px-3 py-1 rounded-md">
                    {current.metric}
                  </span>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* --- MOBILE RESPONSIVE STACK (MOBILE & TABLET SCREENS) --- */}
        <div className="flex lg:hidden flex-col gap-4">
          {features.map((item, index) => {
            const Icon = item.icon;
            const isOpen = activeFeature === index;

            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-slate-800 border-red-500/40 shadow-lg shadow-red-950/20"
                    : "bg-slate-800/40 border-slate-800"
                }`}
              >
                <button
                  onClick={() => setActiveFeature(isOpen ? null : index)}
                  className="w-full text-left p-4 flex items-center justify-between gap-3 focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                        isOpen ? "bg-[#a4223a] text-white" : "bg-slate-700 text-red-400"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-red-400">
                        Reason {item.id}
                      </span>
                      <h3 className="text-sm font-black text-white leading-tight">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <span className="text-xs font-bold text-slate-500">
                    0{index + 1}
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-4 pb-5 pt-0 border-t border-slate-700/60 mt-1">
                        <p className="mt-3 text-xs text-slate-300 leading-relaxed">
                          {item.description}
                        </p>

                        <div className="mt-4 space-y-2 bg-slate-900/60 p-3 rounded-xl border border-slate-700/50">
                          {item.points.map((pt, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#a4223a] shrink-0" />
                              <span>{pt}</span>
                            </div>
                          ))}
                        </div>

                        <div className="mt-3 text-[11px] font-black text-red-400">
                          • {item.metric}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}