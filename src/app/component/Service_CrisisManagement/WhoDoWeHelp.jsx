"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Newspaper,
  UserCheck,
  Building2,
  GraduationCap,
  Sparkles,
  Plus,
  Minus,
  ArrowUpRight
} from "lucide-react";

export default function WhoDoWeHelp() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const clients = [
    {
      id: "01",
      icon: Newspaper,
      title: "Companies Facing Negative Press",
      badge: "Media Risk Management",
      description:
        "We help brands that are facing backlash on media coverage with negative press. For that, our team helps regain control and restore trust in your brand."
    },
    {
      id: "02",
      icon: UserCheck,
      title: "Public Figures and Influencers",
      badge: "Personal Reputation",
      description:
        "As a reputation management company in Dhaka, we help influencers and public figures. In that case, our team manages press and keeps the image strong in the public eye."
    },
    {
      id: "03",
      icon: Building2,
      title: "Startups & Corporations with Online Issues",
      badge: "Digital Defense",
      description:
        "We assist startups and corporations to solve online problems quickly, from harmful reviews to viral posts. Our team also protects the business's reputation long-term."
    },
    {
      id: "04",
      icon: GraduationCap,
      title: "NGOs and Educational Institutions",
      badge: "Institutional Integrity",
      description:
        "Our agency supports NGOs and schools in handling sensitive issues. We also ensure their reputation stays respected while they continue their valuable work in society."
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-slate-950 text-white overflow-hidden relative border-t border-slate-900">
      {/* Background Subtle Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#a4223a]/15 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- HEADER --- */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#a4223a]/20 text-[#a4223a] border border-[#a4223a]/30 text-xs font-black uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#a4223a]" />
            <span>Target Clienteles</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Who Do We Help with <span className="text-[#a4223a]">Crisis Management</span> in BD?
          </h2>

          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Info PR serves different kinds of clients from many industries and business sizes. Here's who our Digital PR Company in BD works with:
          </p>
        </motion.div>

        {/* --- ROW-BASED INTERACTIVE EXPANDABLE ACCORDION (NO CARDS) --- */}
        <div className="space-y-4">
          {clients.map((item, index) => {
            const Icon = item.icon;
            const isOpen = expandedIndex === index;

            return (
              <motion.div
                key={item.id}
                initial={false}
                onMouseEnter={() => setExpandedIndex(index)}
                className={`transition-colors duration-300 border-b border-slate-800/80 pb-6 pt-2 ${
                  isOpen ? "border-[#a4223a]" : "hover:border-slate-700"
                }`}
              >
                {/* Header Row */}
                <button
                  onClick={() => setExpandedIndex(isOpen ? -1 : index)}
                  className="w-full text-left flex items-center justify-between gap-4 group py-2 focus:outline-none"
                >
                  <div className="flex items-center gap-4 sm:gap-8">
                    {/* Number Indicator */}
                    <span className={`text-sm sm:text-base font-mono font-bold transition-colors duration-300 ${
                      isOpen ? "text-[#a4223a]" : "text-slate-600 group-hover:text-slate-400"
                    }`}>
                      /{item.id}
                    </span>

                    {/* Icon & Title */}
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className={`p-2.5 rounded-lg transition-all duration-300 ${
                        isOpen ? "bg-[#a4223a] text-white" : "bg-slate-900 text-slate-400 group-hover:text-slate-200"
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>

                      <h3 className={`text-lg sm:text-2xl font-black transition-colors duration-300 ${
                        isOpen ? "text-white" : "text-slate-300 group-hover:text-white"
                      }`}>
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Right Action Badge & Icon */}
                  <div className="flex items-center gap-4">
                    <span className={`hidden md:inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider transition-colors duration-300 ${
                      isOpen ? "bg-[#a4223a]/20 text-[#a4223a] border border-[#a4223a]/30" : "bg-slate-900 text-slate-500"
                    }`}>
                      {item.badge}
                    </span>

                    <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      isOpen ? "border-[#a4223a] bg-[#a4223a] text-white" : "border-slate-800 text-slate-500 group-hover:border-slate-600 group-hover:text-slate-300"
                    }`}>
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </div>
                </button>

                {/* Animated Expandable Area */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pl-10 sm:pl-20 pr-4 pt-4 sm:pt-6 pb-2 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                        <p className="md:col-span-10 text-slate-400 text-sm sm:text-base leading-relaxed">
                          {item.description}
                        </p>
                        
                        <div className="md:col-span-2 flex justify-start md:justify-end">
                          <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase text-[#a4223a] tracking-wider cursor-pointer group/link">
                            <span>Strategic Defense</span>
                            <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}