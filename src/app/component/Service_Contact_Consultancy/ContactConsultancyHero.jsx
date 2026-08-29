"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle2, TrendingUp, Users } from "lucide-react";

export default function ContactConsultancyHero() {
  return (
    <section className="relative py-12 sm:py-20 lg:py-28 bg-slate-50 overflow-hidden">
      
      {/* Background Decor Ambient Light Spheres */}
      <div className="absolute top-1/4 -left-20 w-72 sm:w-96 h-72 sm:h-96 bg-red-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-72 sm:w-96 h-72 sm:h-96 bg-rose-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* --- LEFT COLUMN: CONTENT & HEADLINE --- */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 text-left"
          >
            {/* Top Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-[#a4223a] text-xs font-black uppercase tracking-wider mb-5 border border-red-100/80 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Content Strategy & Consultancy</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
              Best Content Consultancy Service in{" "}
              <span className="text-[#a4223a] relative inline-block">
                Bangladesh
                {/* Underline Highlight Decorative */}
                <svg
                  className="absolute left-0 -bottom-2 w-full h-2 text-red-200"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 5 Q 50 10 100 5"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                  />
                </svg>
              </span>
            </h1>

            {/* Paragraph / Description */}
            <p className="mt-5 text-slate-600 text-sm sm:text-base leading-relaxed">
              Are you publishing content but not getting the reach or authority you deserve? At <strong className="text-slate-900 font-extrabold">Info PR</strong>, our content consultancy services help brands identify market gaps, refine messaging, and execute data-backed communication strategies that amplify your brand voice across national media channels.
            </p>

            {/* Feature Highlights Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {[
                "Targeted Brand Messaging",
                "SEO-Driven Storytelling",
                "Strategic Media Alignment",
                "High Domain Authority Placement"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#a4223a] shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-slate-800">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* --- RIGHT COLUMN: IMAGE & TRUST BADGES --- */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Image Frame Container */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/80 shadow-2xl shadow-red-950/10 group">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
                  alt="Info PR Content Consultancy Team Strategy"
                  className="w-full h-[320px] sm:h-[420px] lg:h-[460px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Glassmorphism Badge 1 - Top Right */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -top-4 -right-2 sm:-top-6 sm:-right-6 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl p-3 sm:p-4 shadow-xl flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[#a4223a] flex items-center justify-center shrink-0">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-900">98% Success</p>
                  <p className="text-[10px] font-bold text-slate-500">PR Reach Boost</p>
                </div>
              </motion.div>

              {/* Floating Glassmorphism Badge 2 - Bottom Left */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-6 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl p-3 sm:p-4 shadow-xl flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#a4223a] text-white flex items-center justify-center shrink-0 shadow-md shadow-red-950/20">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-900">300+ Brands</p>
                  <p className="text-[10px] font-bold text-slate-500">Consulted in BD</p>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}