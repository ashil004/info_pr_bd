"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FileEdit,
  Globe,
  Newspaper,
  Mic,
  MessageSquare,
  Compass,
  Sparkles,
  ArrowUpRight
} from "lucide-react";

export default function WhatweOfferBrandLaunch() {
  const services = [
    {
      id: "01",
      title: "Press Release Writing & Editing",
      icon: FileEdit,
      description:
        "We write your story in a way that attracts attention and fits media standards. Our new company launch press release service in BD also makes clear, engaging, and newsworthy content. Plus, we edit your draft to make it ready for both local and national media."
    },
    {
      id: "02",
      title: "Local & National Media Distribution",
      icon: Globe,
      description:
        "We connect your news with the right newspapers, TV channels, and journalists across the country. Plus, our team sends your story to trusted media partners. This also ensures increased exposure to your target audience, both in Dhaka and other major cities."
    },
    {
      id: "03",
      title: "Online News Portal Coverage",
      icon: Newspaper,
      description:
        "We help your launch appear on leading Bangladeshi online platforms for wider reach. Our team also shares your press release with top Digital PR portals. Thanks to this, your brand is visible to online readers to increase your chances of attracting new customers quickly."
    },
    {
      id: "04",
      title: "Press Conference Support (If Needed)",
      icon: Mic,
      description:
        "We help organize events to share your launch directly with the press. If you need a Press Conference, we handle invitations, setup, and coordination. With that, the media press gets first-hand experience of your brand to give more detailed coverage of your launch."
    },
    {
      id: "05",
      title: "Brand Messaging Consultation",
      icon: MessageSquare,
      description:
        "We guide you on the right words to represent your brand strongly. Our experts also help you define a clear brand voice to ensure every word in your press release matches your image. Moreover, this builds consistency in how people see and remember your company."
    },
    {
      id: "06",
      title: "PR Strategy Tailored to Your Industry",
      icon: Compass,
      description:
        "We make a launch plan that fits your market and audience perfectly. Plus, our team researches your field before making a PR strategy. By understanding your brand, we create messages that connect with your audience to make your launch more successful and impactful."
    }
  ];

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
    <section className="py-20 sm:py-28 bg-slate-950 text-white relative overflow-hidden border-t border-slate-900">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#a4223a]/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- HEADER --- */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#a4223a]/20 text-[#a4223a] border border-[#a4223a]/30 text-xs font-black uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#a4223a]" />
            <span>Complete Solutions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
            What We Offer for Your <br className="hidden sm:block" />
            <span className="text-[#a4223a]">Brand or Company Launch?</span>
          </h2>

          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Times PR comes with a brand or company launch press release service in Dhaka. In that case, these are our solutions:
          </p>
        </motion.div>

        {/* --- UNIQUE MODERN BENTO GRID LAYOUT --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {services.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="group relative bg-slate-900/60 backdrop-blur-sm border border-slate-800 hover:border-[#a4223a]/60 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#a4223a]/10"
              >
                {/* Top Subtle Number & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-[#a4223a] bg-[#a4223a]/10 border border-[#a4223a]/20 px-3 py-1 rounded-full">
                      Service #{item.id}
                    </span>

                    <div className="w-12 h-12 rounded-2xl bg-slate-800/80 group-hover:bg-[#a4223a] text-slate-300 group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-inner">
                      <Icon className="w-6 h-6 transition-transform group-hover:scale-110" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-black text-white group-hover:text-[#a4223a] transition-colors duration-300 mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Interactive Link Line */}
                <div className="pt-6 mt-6 border-t border-slate-800/60 flex items-center justify-between text-xs font-bold text-slate-500 group-hover:text-slate-300 transition-colors">
                  <span>Launch Execution</span>
                  <ArrowUpRight className="w-4 h-4 text-[#a4223a] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}