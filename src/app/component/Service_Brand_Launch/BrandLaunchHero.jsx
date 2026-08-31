"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Rocket, Award } from "lucide-react";

export default function BrandLaunchHero() {
  return (
    <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 overflow-hidden bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* --- LEFT CONTENT COLUMN --- */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#a4223a]/10 text-[#a4223a] text-xs font-black uppercase tracking-wider mb-6 border border-[#a4223a]/20">
              <Rocket className="w-4 h-4 text-[#a4223a]" />
              <span>Brand Launch Strategy</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
              Brand & Company Launch <br className="hidden sm:block" />
              <span className="text-[#a4223a]">Press Release Service</span> in Bangladesh
            </h1>

            {/* Paragraph / Description */}
            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Need a trusted brand launch press release service in Bangladesh? Info PR helps your new brand launch with high-impact press releases. Plus, our experts are ready 24/7 to write and share engaging press releases with the right audience. Start your new company with us today!
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href="#consultation"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#a4223a] hover:bg-[#8b1b30] text-white font-black text-sm tracking-wider uppercase transition-all duration-300 shadow-lg shadow-[#a4223a]/25 hover:shadow-xl hover:shadow-[#a4223a]/35 hover:-translate-y-0.5"
              >
                <span>Get a Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <div className="flex items-center justify-center gap-2 px-4 py-3 text-slate-500 font-bold text-xs uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>24/7 Media Coverage Support</span>
              </div>
            </div>

            {/* Bottom Mini Metrics */}
            <div className="mt-12 pt-8 border-t border-slate-100 grid grid-cols-3 gap-6 w-full max-w-lg">
              <div>
                <h4 className="text-2xl sm:text-3xl font-black text-slate-900">500+</h4>
                <p className="text-xs text-slate-500 font-medium mt-1">Press Releases</p>
              </div>
              <div>
                <h4 className="text-2xl sm:text-3xl font-black text-[#a4223a]">24/7</h4>
                <p className="text-xs text-slate-500 font-medium mt-1">Active Support</p>
              </div>
              <div>
                <h4 className="text-2xl sm:text-3xl font-black text-slate-900">100%</h4>
                <p className="text-xs text-slate-500 font-medium mt-1">Guaranteed Reach</p>
              </div>
            </div>
          </motion.div>

          {/* --- RIGHT IMAGE COLUMN --- */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image Frame */}
              <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 shadow-2xl bg-slate-100 aspect-[4/3] lg:aspect-[5/4]">
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200&auto=format&fit=crop"
                  alt="Brand Launch Press Release Team"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
              </div>

              {/* Floating Glass Trophy Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-slate-200 shadow-xl flex items-center gap-4 max-w-xs"
              >
                <div className="w-12 h-12 rounded-xl bg-[#a4223a]/10 text-[#a4223a] flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="text-sm font-black text-slate-900">Top PR Agency</h5>
                  <p className="text-xs text-slate-500 font-medium">Leading Brand Launch Partner in BD</p>
                </div>
              </motion.div>

              {/* Decorative Accent */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#a4223a]/10 rounded-full blur-2xl -z-10" />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}