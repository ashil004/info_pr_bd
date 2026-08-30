"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  Search,
  Globe2,
  Clock,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowUpRight
} from "lucide-react";

export default function BestContentConsultancy() {
  const pillars = [
    {
      id: "01",
      icon: Award,
      tag: "Experience",
      title: "10+ Years of Content Marketing Experience",
      description:
        "With more than ten years in content marketing, we know what works. Our experience helps us make smart, engaging, and result-driven content that builds trust and drives business growth."
    },
    {
      id: "02",
      icon: Search,
      tag: "Research",
      title: "Research-Based Content Strategy",
      description:
        "We never rely on guesswork. Our team conducts in-depth studies on audience behavior and market trends, ensuring every article, post, or page delivers measurable ROI."
    },
    {
      id: "03",
      icon: Globe2,
      tag: "Global Standard",
      title: "Local Expertise with Global Standards",
      description:
        "We combine deep knowledge of the Bangladeshi market with international quality standards. Your content speaks to both local and global audiences with professionalism."
    },
    {
      id: "04",
      icon: Clock,
      tag: "Punctuality",
      title: "Clear Communication & On-Time Delivery",
      description:
        "We maintain transparent communication with regular updates so you always stay informed. Count on prompt execution without worrying about delays or missed deadlines."
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white text-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- MAIN ASYMMETRIC GRID (5:7 RATIO) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT STICKY BANNER BLOCK (5 COLUMNS) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 lg:sticky lg:top-24"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-[#a4223a] text-xs font-black uppercase tracking-wider mb-6 border border-red-100">
              <Sparkles className="w-3.5 h-3.5 text-[#a4223a]" />
              <span>Unmatched Standard</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
              Why Are We the <span className="text-[#a4223a]">Best Choice</span> in Dhaka?
            </h2>

            <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              We are trusted in this field to give you proven results, clear strategies, and always put our clients first. Here is how we redefine content consultancy in BD.
            </p>

            <div className="mt-8 pt-8 border-t border-slate-200 flex flex-col gap-3">
              <div className="flex items-center gap-3 text-xs font-black text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-[#a4223a]" />
                <span>Custom-tailored strategies for every brand</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-black text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-[#a4223a]" />
                <span>Dedicated support with continuous optimization</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT VERTICAL FEATURE FLOW (7 COLUMNS) */}
          <div className="lg:col-span-7 space-y-8 sm:space-y-10">
            {pillars.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group relative pl-6 sm:pl-8 border-l-2 border-slate-200 hover:border-[#a4223a] transition-all duration-300"
                >
                  {/* Item Top Metadata */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#a4223a] bg-red-50 border border-red-100 px-2.5 py-0.5 rounded-full">
                      {item.tag}
                    </span>

                    <span className="text-3xl font-black text-slate-200 group-hover:text-[#a4223a]/20 transition-colors">
                      {item.id}
                    </span>
                  </div>

                  {/* Title & Icon Header */}
                  <div className="flex items-start gap-3 mt-1">
                    <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-600 group-hover:bg-[#a4223a] group-hover:text-white flex items-center justify-center shrink-0 transition-colors duration-300 mt-1">
                      <Icon className="w-4 h-4" />
                    </div>

                    <h3 className="text-lg sm:text-2xl font-black text-slate-900 leading-snug group-hover:text-[#a4223a] transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  {/* Content Description */}
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed pl-12">
                    {item.description}
                  </p>

                  {/* Hover Arrow Indicator */}
                  <div className="mt-4 pl-12 flex items-center gap-1.5 text-xs font-bold text-slate-400 group-hover:text-[#a4223a] transition-colors">
                    <ShieldCheck className="w-4 h-4 text-[#a4223a]" />
                    <span>Proven Benchmark</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}