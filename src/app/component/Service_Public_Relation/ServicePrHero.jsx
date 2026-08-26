"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, TrendingUp } from "lucide-react";

export default function ServicePrHero() {
  return (
    <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 bg-gradient-to-b from-slate-50 via-white to-slate-50/50 overflow-hidden">
      
      {/* Background Glow Elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-rose-50/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-[#a4223a] text-xs font-black uppercase tracking-wider mb-6 shadow-sm border border-red-100">
              <Sparkles className="w-4 h-4 text-[#a4223a]" />
              <span>Leading Digital PR Agency in Bangladesh</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
              Trusted Digital PR Agency <br className="hidden sm:inline" />
              in <span className="text-[#a4223a] underline decoration-red-200 decoration-wavy decoration-1">Bangladesh</span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Want a specialized and effective Digital PR Agency in Dhaka? Times PR makes it happen to increase visibility via online channels. We put your brand in front using targeted media outreach and strategic PR plans.
            </p>

            {/* Feature Check Points */}
            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm font-bold text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#a4223a]" />
                <span>Targeted Media Outreach</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#a4223a]" />
                <span>Strategic Online Growth</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#a4223a] text-white px-8 py-4 rounded-2xl font-black text-base shadow-xl shadow-red-900/20 hover:bg-[#801326] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Get A Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-200 px-7 py-4 rounded-2xl font-bold text-base hover:bg-slate-50 transition-all duration-300 shadow-sm"
              >
                <span>Explore Services</span>
              </a>
            </motion.div>

            {/* Trust Metrics Bar */}
            <div className="mt-12 pt-8 border-t border-slate-200/80 grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <h4 className="text-2xl sm:text-3xl font-black text-slate-900">100+</h4>
                <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">Media Events</p>
              </div>
              <div>
                <h4 className="text-2xl sm:text-3xl font-black text-slate-900">500+</h4>
                <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">Media Network</p>
              </div>
              <div>
                <h4 className="text-2xl sm:text-3xl font-black text-slate-900">10+</h4>
                <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">Years Experience</p>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Featured Image / Visual Showcase */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image Wrapper with Premium Border & Glow */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1000&auto=format&fit=crop" 
                  alt="Digital PR Agency Press Conference in Dhaka"
                  className="w-full h-[420px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
                />

                {/* Dark Gradient Overlay for Rich Look */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

                {/* Floating Bottom Card Inside Image */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/20 shadow-lg flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-red-50 text-[#a4223a] flex items-center justify-center shrink-0">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="text-slate-900 font-extrabold text-sm sm:text-base">Guaranteed Online Reach</h5>
                    <p className="text-slate-500 text-xs font-medium">Boost your brand visibility instantly</p>
                  </div>
                </div>
              </div>

              {/* Decorative Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 hidden sm:flex items-center gap-3 px-4 py-3 rounded-2xl bg-white shadow-xl border border-slate-100"
              >
                <div className="w-10 h-10 rounded-xl bg-[#a4223a] text-white flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 block uppercase">Verified Agency</span>
                  <span className="text-sm font-extrabold text-slate-900">#1 in Bangladesh</span>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}