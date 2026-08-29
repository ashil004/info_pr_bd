"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PenTool,
  Globe,
  Volume2,
  Share2,
  SearchCheck,
  TrendingUp,
  Sparkles,
  CheckCircle2,
  ChevronRight
} from "lucide-react";

export default function WhatweContactConsultancy() {
  const [activeStep, setActiveStep] = useState(0);

  const services = [
    {
      id: "01",
      icon: PenTool,
      title: "Content Strategy Planning",
      subtitle: "Strategic Direction & Goal Mapping",
      description:
        "We make clear and in-depth content plans for your brand. This sets your goals, defines your target customers, and selects the exact direction needed for long-term growth as a top content consultancy service in Dhaka.",
      keyTakeaways: [
        "Buyer Persona Identification",
        "Editorial Calendar & Roadmaps",
        "Channel-Specific Distribution Goal"
      ],
      badge: "Phase 01"
    },
    {
      id: "02",
      icon: Globe,
      title: "Website & Blog Guidance",
      subtitle: "SEO-Optimized Web Architecture",
      description:
        "We guide you in picking the right structure, topics, and tone for your site or blog. This improves visitor experience, boosts SEO rankings, and turns casual readers into loyal buyers.",
      keyTakeaways: [
        "High Domain Authority Alignment",
        "User Intent Topic Clustering",
        "Conversion-Led Content Structure"
      ],
      badge: "Phase 02"
    },
    {
      id: "03",
      icon: Volume2,
      title: "Brand Messaging & Tone",
      subtitle: "Consistent Brand Identity",
      description:
        "We help your brand find the right voice and style for all public communication. This makes your message clear, consistent, and instantly recognizable to build a stronger connection.",
      keyTakeaways: [
        "Brand Identity Guidelines",
        "Contextual Tone Adaptation",
        "Public PR Positioning"
      ],
      badge: "Phase 03"
    },
    {
      id: "04",
      icon: Share2,
      title: "Social Media Planning",
      subtitle: "Omnichannel Engagement",
      description:
        "We create easy-to-follow posting schedules and creative campaign ideas for social platforms. Our plan keeps your visitors engaged, fuels virality, and makes your business stand out.",
      keyTakeaways: [
        "Multi-Platform Campaign Strategy",
        "Visual & Copy Synergy",
        "Audience Engagement Optimization"
      ],
      badge: "Phase 04"
    },
    {
      id: "05",
      icon: SearchCheck,
      title: "Content Audit & Improvement",
      subtitle: "Data-Backed Gap Analysis",
      description:
        "We audit your recent content to find improvement areas and structural gaps. Our team gives clear, actionable recommendations to increase performance, search reach, and overall brand impact.",
      keyTakeaways: [
        "Content Performance Health Check",
        "Underperforming Asset Optimization",
        "Competitor Gap Analysis"
      ],
      badge: "Phase 05"
    },
    {
      id: "06",
      icon: TrendingUp,
      title: "SEO & User Insights",
      subtitle: "Search & Human Centric Insights",
      description:
        "We show you how to make your content friendly for search engine algorithms while remaining interesting for real readers. This balanced approach improves search visibility and drives genuine engagement.",
      keyTakeaways: [
        "Search Engine Alignment",
        "Dwell Time & Bounce Rate Fixes",
        "Actionable Performance Reports"
      ],
      badge: "Phase 06"
    }
  ];

  // Safe Fallback for mobile accordion toggle
  const current = (activeStep !== null && services[activeStep]) ? services[activeStep] : services[0];

  return (
    <section className="py-16 sm:py-24 bg-white text-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- SECTION HEADER --- */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-[#a4223a] text-xs font-black uppercase tracking-wider mb-4 border border-red-100">
            <Sparkles className="w-3.5 h-3.5 text-[#a4223a]" />
            <span>Info PR Services Architecture</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            What We Do as a <span className="text-[#a4223a]">Content Consultancy</span> Company?
          </h2>

          <p className="mt-3 sm:mt-4 text-slate-600 text-xs sm:text-base leading-relaxed">
            <a href="https://www.infoprbd.com" target="_blank" rel="noopener noreferrer" className="text-[#a4223a] hover:underline">
              Info PR
            </a> offers the best content consultancy service in Bangladesh that matches your brand’s needs and client expectations. It includes:
          </p>
        </motion.div>

        {/* --- DESKTOP INNOVATIVE HORIZONTAL PROCESS PIPELINE (LG SCREENS) --- */}
        <div className="hidden lg:block max-w-6xl mx-auto mb-12">
          
          {/* Connecting Track Line */}
          <div className="relative flex items-center justify-between before:absolute before:top-1/2 before:-translate-y-1/2 before:left-8 before:right-8 before:h-[2px] before:bg-slate-200 before:z-0">
            
            {services.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeStep === index;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveStep(index)}
                  onMouseEnter={() => setActiveStep(index)}
                  className="relative z-10 flex flex-col items-center group focus:outline-none"
                >
                  {/* Step Node Circle */}
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black text-sm transition-all duration-300 ${
                      isActive
                        ? "bg-[#a4223a] text-white shadow-xl shadow-red-950/20 scale-110"
                        : "bg-white border-2 border-slate-200 text-slate-500 group-hover:border-[#a4223a]/50 group-hover:text-[#a4223a]"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Label under node */}
                  <div className="mt-3 text-center max-w-[120px]">
                    <span
                      className={`text-[10px] font-black uppercase tracking-wider block ${
                        isActive ? "text-[#a4223a]" : "text-slate-400"
                      }`}
                    >
                      {item.id}
                    </span>
                    <span
                      className={`text-xs font-bold leading-tight block line-clamp-1 transition-colors ${
                        isActive ? "text-slate-900" : "text-slate-600 group-hover:text-slate-900"
                      }`}
                    >
                      {item.title}
                    </span>
                  </div>

                  {/* Active Indicator Arrow */}
                  {isActive && (
                    <motion.div
                      layoutId="pipelinePointer"
                      className="absolute -bottom-6 w-3 h-3 bg-[#a4223a] rotate-45 rounded-sm"
                    />
                  )}
                </button>
              );
            })}
          </div>

        </div>

        {/* --- DESKTOP FLOATING SPOTLIGHT DISPLAY --- */}
        <div className="hidden lg:block max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="border-t-2 border-[#a4223a] pt-8 grid grid-cols-12 gap-8 items-center"
            >
              {/* Left Column (Main Info) */}
              <div className="col-span-7">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-black uppercase tracking-widest text-[#a4223a] bg-red-50 border border-red-100 px-3 py-1 rounded-full">
                    {current.badge}
                  </span>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    {current.subtitle}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                  {current.title}
                </h3>

                <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                  {current.description}
                </p>
              </div>

              {/* Right Column (Key Takeaways List) */}
              <div className="col-span-5 bg-slate-50 border border-slate-100 rounded-2xl p-6">
                <h4 className="text-xs font-black uppercase text-slate-400 tracking-wider mb-4">
                  Execution Deliverables:
                </h4>
                <div className="space-y-3">
                  {current.keyTakeaways.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs font-bold text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-[#a4223a] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* --- MOBILE & TABLET ACCORDION / STACK VIEW --- */}
        <div className="flex lg:hidden flex-col gap-3">
          {services.map((item, index) => {
            const Icon = item.icon;
            const isOpen = activeStep === index;

            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "bg-white border-[#a4223a]/40 shadow-xl shadow-red-950/5"
                    : "bg-slate-50/80 border-slate-200"
                }`}
              >
                <button
                  onClick={() => setActiveStep(isOpen ? null : index)}
                  className="w-full text-left p-4 flex items-center justify-between gap-3 focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isOpen ? "bg-[#a4223a] text-white" : "bg-red-50 text-[#a4223a]"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase text-[#a4223a]">
                        Step {item.id}
                      </span>
                      <h3 className="text-sm font-black text-slate-900 leading-tight">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                      isOpen ? "rotate-90 text-[#a4223a]" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-4 pb-5 pt-0 border-t border-slate-100 mt-1">
                        <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                          {item.description}
                        </p>

                        <div className="mt-4 space-y-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
                          {item.keyTakeaways.map((pt, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#a4223a] shrink-0" />
                              <span>{pt}</span>
                            </div>
                          ))}
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