"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Newspaper, 
  Megaphone, 
  Tv, 
  TrendingUp, 
  ArrowUpRight, 
  CheckCircle2, 
  Sparkles 
} from "lucide-react";

// ডানপাশের সার্ভিস কার্ডগুলোর ডেটা
const serviceCards = [
  {
    id: 1,
    title: "Press Release & Media",
    desc: "Guaranteed coverage in top tier national daily newspapers.",
    icon: Newspaper,
    tag: "Popular",
    color: "from-[#a4223a] to-rose-600",
  },
  {
    id: 2,
    title: "Digital PR & Marketing",
    desc: "Boost online presence with data-driven strategic campaigns.",
    icon: Megaphone,
    tag: "High ROI",
    color: "from-slate-900 to-slate-800",
  },
  {
    id: 3,
    title: "Broadcast & TV Coverage",
    desc: "Organize press conferences and arrange TV interviews.",
    icon: Tv,
    tag: "Exclusive",
    color: "from-slate-800 to-slate-900",
  },
  {
    id: 4,
    title: "Brand Reputation",
    desc: "Protect and elevate your company's image digitally.",
    icon: TrendingUp,
    tag: "Growth",
    color: "from-rose-600 to-[#a4223a]",
  },
];

export default function HeroServices() {
  return (
    <section className="w-full bg-slate-50 text-slate-900 py-16 md:py-24 relative overflow-hidden">
      
      {/* Background Subtle Lines Grid */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#a4223a 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN: Headline & Value Proposition */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Unique Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#a4223a]/10 border border-[#a4223a]/20 text-[#a4223a] text-xs sm:text-sm font-bold tracking-wide">
              <Sparkles className="w-4 h-4" />
              <span>Tailored PR & Communications</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
              Solutions Built To{" "}
              <span className="bg-gradient-to-r from-[#a4223a] to-rose-600 bg-clip-text text-transparent">
                Amplify
              </span>{" "}
              Your Brand Voice
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              We design bespoke PR strategies that help brands command attention, build credibility, and dominate their industry vertical with precision.
            </p>

            {/* Quick Benefits Pills */}
            <div className="flex flex-wrap gap-3 pt-1">
              {["500+ Media Partners", "Guaranteed Publication", "24/7 Crisis Response"].map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 shadow-sm">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#a4223a]" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#all-services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-[#a4223a] hover:bg-red-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-[#a4223a]/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore Solutions</span>
                <ArrowUpRight className="w-5 h-5" />
              </a>

              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 font-semibold text-sm sm:text-base shadow-sm transition-all"
              >
                <span>Get Custom Quote</span>
              </a>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Interactive Service Cards Grid (Visual Highlight) */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {serviceCards.map((card, index) => {
                const IconComponent = card.icon;
                return (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -6, transition: { duration: 0.2 } }}
                    className="relative group p-6 bg-white rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-red-200 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                  >
                    {/* Top Tag & Icon */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${card.color} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] uppercase font-extrabold tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 group-hover:bg-[#a4223a]/10 group-hover:text-[#a4223a] transition-colors">
                          {card.tag}
                        </span>
                      </div>

                      {/* Title & Desc */}
                      <h3 className="text-lg font-bold text-slate-900 mb-1.5 group-hover:text-[#a4223a] transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {card.desc}
                      </p>
                    </div>

                    {/* Bottom Action Icon */}
                    <div className="mt-6 flex items-center gap-1 text-xs font-bold text-[#a4223a] opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                      <span>Learn more</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}