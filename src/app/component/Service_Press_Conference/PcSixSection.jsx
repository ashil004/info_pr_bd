"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall, Sparkles, CheckCircle2 } from "lucide-react";

export default function PcSixSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-gradient-to-br from-[#801326] via-[#a4223a] to-[#590d1a] text-white">
      
      {/* Background Abstract Glows & Patterns */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-red-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-80 h-80 bg-black/30 rounded-full blur-2xl pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
          
          {/* Left Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            {/* Top Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider text-red-100 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-red-200" />
              <span>Let's Host Your Press Event</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
              Planning a Press Conference in Dhaka? <br className="hidden sm:inline" />
              <span className="text-red-200">We’re Ready to Help!</span>
            </h2>

            {/* Subtext */}
            <p className="mt-4 text-red-100/90 text-base sm:text-lg max-w-2xl leading-relaxed">
              We take full control of your event so you don’t have to worry. Expect a powerful media presence, flawless execution, and high-impact coverage.
            </p>

            {/* Quick Trust Highlights */}
            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs sm:text-sm font-semibold text-red-100/80">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-red-300" />
                <span>Top Journalist Attendance</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-red-300" />
                <span>Full Protocol & Setup</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-red-300" />
                <span>24/7 Expert Support</span>
              </div>
            </div>
          </motion.div>

          {/* Right Action Button */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="shrink-0 flex flex-col items-center gap-3"
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center gap-3 bg-white text-[#a4223a] px-8 py-4 sm:px-10 sm:py-5 rounded-2xl font-black text-base sm:text-lg shadow-2xl hover:bg-slate-100 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
            >
              <PhoneCall className="w-5 h-5 text-[#a4223a] group-hover:rotate-12 transition-transform duration-300" />
              <span>Contact Us Today</span>
              <ArrowRight className="w-5 h-5 text-[#a4223a] group-hover:translate-x-1.5 transition-transform duration-300" />
            </a>

            
          </motion.div>

        </div>
      </div>
    </section>
  );
}