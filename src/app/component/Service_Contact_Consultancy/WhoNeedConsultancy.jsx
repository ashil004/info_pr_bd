"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  TrendingUp,
  Users,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

export default function WhoNeedConsultancy() {
  const audienceList = [
    {
      id: "01",
      icon: Globe,
      target: "Startups & Enterprises",
      title: "Businesses Launching a New Website",
      description:
        "Most business sites' first online impression is significant. For that, we help you plan and write your website content. Thanks to this, it attracts visitors, builds trust, and increases visits."
    },
    {
      id: "02",
      icon: TrendingUp,
      target: "Growing Brands",
      title: "Brands Struggling with Content Reach",
      description:
        "Good content of brands is wasted if people don't see it. In that case, we create strategies that help your content reach the right audience on the right platforms."
    },
    {
      id: "03",
      icon: Users,
      target: "Corporate Teams",
      title: "Teams Looking for Clearer Messaging",
      description:
        "If your content feels unclear or unsteady, we can fix it with the best content consultancy service in BD. Our team also ensures every message is simple and matches your brand’s style."
    },
    {
      id: "04",
      icon: ExternalLink,
      target: "Digital Agencies",
      title: "Agencies Needing External Expertise",
      description:
        "Even qualified agencies sometimes need expert help. To help, we give you fresh ideas, strategic planning, and creative direction. It also gives stronger results for their clients."
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white text-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- SECTION HEADER --- */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Who Needs Our Content Consultancy Service <span className="text-[#a4223a]">in Dhaka?</span>
          </h2>

          <p className="mt-3 sm:mt-4 text-slate-600 text-xs sm:text-base leading-relaxed">
            Our content consultancy service fits any brand that wants clear, strong, and result-focused content. Here’s who needs it:
          </p>
        </motion.div>

        {/* --- BORDERLESS INTERACTIVE LIST (2-COLUMN GRID) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 lg:gap-y-16">
          {audienceList.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative pl-6 border-l-2 border-slate-200 hover:border-[#a4223a] transition-all duration-300"
              >
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#a4223a] bg-red-50 border border-red-100 px-2.5 py-0.5 rounded-full">
                    {item.target}
                  </span>

                  <div className="w-9 h-9 rounded-xl bg-slate-50 text-slate-500 group-hover:bg-[#a4223a] group-hover:text-white flex items-center justify-center transition-all duration-300">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug group-hover:text-[#a4223a] transition-colors duration-200">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>

                {/* Micro CTA indicator on hover */}
                
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}