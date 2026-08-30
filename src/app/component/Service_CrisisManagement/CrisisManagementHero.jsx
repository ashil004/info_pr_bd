"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Lock,
  Activity,
  FileCheck2
} from "lucide-react";

export default function CrisisManagementHero() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-28 bg-white text-slate-900 overflow-hidden">
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#a4223a_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT CONTENT COLUMN (7 Columns) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 sm:space-y-8"
          >
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-[#a4223a] text-xs font-black uppercase tracking-wider border border-red-100">
              <ShieldAlert className="w-4 h-4 text-[#a4223a]" />
              <span>Rapid Brand Defense System</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
              Trusted Reputation & <br className="hidden sm:block" />
              <span className="text-[#a4223a]">PR Crisis Management</span> <br />
              Company in Bangladesh
            </h1>

            {/* Subtitle / Paragraph */}
            <p className="text-slate-600 text-sm sm:text-lg leading-relaxed max-w-2xl">
              Want a reliable PR crisis management service in Bangladesh? Info PR is here to help you. We control the narrative, protect your image, and rebuild trust through expert PR strategies. Protect your brand reputation from sudden threats today.
            </p>

            {/* Key Service Highlights (No Buttons) */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="w-8 h-8 rounded-lg bg-red-50 text-[#a4223a] flex items-center justify-center shrink-0 mt-0.5">
                  <Lock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-slate-900">100% Strict Confidentiality</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Complete privacy for corporate and individual brands.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="w-8 h-8 rounded-lg bg-red-50 text-[#a4223a] flex items-center justify-center shrink-0 mt-0.5">
                  <Activity className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-slate-900">24/7 Real-Time Monitoring</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Continuous media scanning to prevent escalation.</p>
                </div>
              </div>
            </div>

            {/* Live Trust Metrics Bar */}
            <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-6 sm:gap-10">
              <div>
                <span className="block text-2xl font-black text-slate-900">100+</span>
                <span className="text-xs font-semibold text-slate-500">Crises Mitigated</span>
              </div>
              <div className="h-8 w-[1px] bg-slate-200 hidden sm:block" />
              <div>
                <span className="block text-2xl font-black text-[#a4223a]">99.8%</span>
                <span className="text-xs font-semibold text-slate-500">Brand Recovery Rate</span>
              </div>
              <div className="h-8 w-[1px] bg-slate-200 hidden sm:block" />
              <div>
                <span className="block text-2xl font-black text-slate-900">15 Mins</span>
                <span className="text-xs font-semibold text-slate-500">Rapid Response Time</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT VISUAL COLUMN (5 Columns) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Main Visual Image Wrapper */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/10 border border-slate-200/80 bg-slate-900 group">
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop"
                alt="PR Crisis Management Team"
                className="w-full h-[400px] sm:h-[480px] object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />

              {/* Floating Status Card */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/20 shadow-lg flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <div>
                    <h4 className="text-xs font-black text-slate-900">Active Reputation Defense</h4>
                    <p className="text-[10px] text-slate-500">Protecting Brand Integrity in BD</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs font-black text-[#a4223a] bg-red-50 px-2.5 py-1 rounded-md">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#a4223a]" />
                  <span>Verified</span>
                </div>
              </div>
            </div>

            {/* Decorative Top Right Accent */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#a4223a]/15 rounded-full blur-2xl pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}