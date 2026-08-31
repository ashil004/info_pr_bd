"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Rocket, 
  Maximize2, 
  Briefcase, 
  HeartHandshake, 
  Sparkles, 
  ArrowUpRight 
} from "lucide-react";

export default function WhoWeHelp() {
  // Times PR Content mapped with Lucide Icons
  const targetAudience = [
    {
      id: "01",
      title: "Startups Launching Their First Product",
      icon: Rocket,
      description:
        "Our team helps startups launch new products or services. It also makes sure the launch creates excitement and interest in the media as well as customers."
    },
    {
      id: "02",
      title: "Companies Expanding or Rebranding",
      icon: Maximize2,
      description:
        "We help growing businesses announce changes, new branches, or fresh branding. With this, it helps the customers and media to know about your new direction quickly."
    },
    {
      id: "03",
      title: "New Businesses Entering the Market",
      icon: Briefcase,
      description:
        "Our service supports new companies entering Bangladesh's market. It also gives them strong media exposure from day one to attract buyers and partners easily."
    },
    {
      id: "04",
      title: "NGOs & Public Initiatives Going Public",
      icon: HeartHandshake,
      description:
        "We help NGOs share projects, events, or campaigns with the public. Plus, it ensures their messages reach the right communities and supporters nationwide."
    }
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-white text-slate-900 relative overflow-hidden">
      {/* Background Accent Lines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-slate-100" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-slate-100" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- HEADER SECTION --- */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-[#a4223a] text-xs font-black uppercase tracking-wider mb-4 border border-red-100">
            <Sparkles className="w-3.5 h-3.5 text-[#a4223a]" />
            <span>Target Audience</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Who We Help with Launch Press Releases in <span className="text-[#a4223a]">Dhaka & Across Bangladesh?</span>
          </h2>

          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            We support many types of clients to give our brand launch press release service in BD. It includes:
          </p>
        </motion.div>

        {/* --- UNIQUE MINIMALIST FEATURE ROWS (NO CARD SHAPES) --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-12 sm:space-y-16"
        >
          {targetAudience.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="group relative pt-8 border-t border-slate-200 transition-colors duration-300 hover:border-[#a4223a]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  
                  {/* Left Column: Number Badge & Icon */}
                  <div className="lg:col-span-4 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center font-mono font-bold text-sm group-hover:bg-[#a4223a] group-hover:text-white transition-colors duration-300">
                      {item.id}
                    </div>
                    
                    <div className="flex items-center gap-2 text-slate-500 group-hover:text-[#a4223a] transition-colors duration-300 font-semibold text-sm tracking-wide uppercase">
                      <Icon className="w-4 h-4" />
                      <span>PR Segment</span>
                    </div>
                  </div>

                  {/* Middle Column: Title & Description */}
                  <div className="lg:col-span-7">
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight group-hover:text-[#a4223a] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Right Column: Arrow Indicator */}
                  <div className="lg:col-span-1 hidden lg:flex justify-end pt-1">
                    <div className="w-8 h-8 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center group-hover:bg-red-50 group-hover:text-[#a4223a] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}