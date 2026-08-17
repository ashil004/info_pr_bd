"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mic, ShieldCheck, Users, Radio, Play } from "lucide-react";

export default function PcHeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50 py-16 lg:py-24 overflow-hidden border-b border-slate-100">
      
      {/* Decorative Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#a4223a]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-slate-200/50 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* --- LEFT CONTENT (Col-7) --- */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            
            {/* Top Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-100 text-[#a4223a] text-xs font-bold tracking-wide uppercase"
            >
              <span className="flex h-2 w-2 rounded-full bg-[#a4223a] animate-ping" />
              <span>Leading Press Conference Organizer</span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.15] tracking-tight">
              Trusted <span className="text-[#a4223a] relative">Press Conference</span> Organizers in Bangladesh
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Looking for professional Press Conference Management? We help top brands host flawless press events with end-to-end planning, stage setup, TV media coverage, and journalist management.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#consultation"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-[#a4223a] hover:bg-[#8a1c30] text-white font-bold text-sm shadow-lg shadow-[#a4223a]/25 transition-all duration-200"
              >
                <span>Get a Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#coverage"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white border border-slate-200 hover:border-slate-300 text-slate-700 font-bold text-sm shadow-sm transition-all duration-200 hover:bg-slate-50"
              >
                <Play className="w-4 h-4 fill-slate-700" />
                <span>View Live Coverage</span>
              </motion.a>
            </div>

            {/* Social Trust Metrics */}
            <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs font-semibold text-slate-500">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#a4223a]" />
                <span>100% Guaranteed Media Presence</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-[#a4223a]" />
                <span>50+ Print & TV Journalists</span>
              </div>
            </div>

          </motion.div>

          {/* --- RIGHT IMAGE & FLOATING CARDS (Col-5) --- */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
              <img
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1000&auto=format&fit=crop"
                alt="Press Conference Setup"
                className="w-full h-[380px] sm:h-[440px] object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

              {/* Floating Top Badge */}
              <motion.div 
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 flex items-center gap-2 text-white text-xs font-bold"
              >
                <Radio className="w-3.5 h-3.5 text-red-500 animate-pulse" />
                <span>TV & Online Live</span>
              </motion.div>

              {/* Bottom Floating Info Card */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-red-50 text-[#a4223a]">
                      <Mic className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Full Event Setup</h4>
                      <p className="text-xs text-slate-500">Q&A, Backdrop & PR Kits</p>
                    </div>
                  </div>
                  <span className="text-xs font-extrabold text-[#a4223a] bg-red-50 px-2.5 py-1 rounded-lg">
                    Turnkey
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>

       

      </div>
    </section>
  );
}