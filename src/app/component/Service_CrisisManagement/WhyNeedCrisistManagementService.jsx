"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Newspaper,
  Share2,
  MessageSquareWarning,
  GlobeLock,
  Sparkles
} from "lucide-react";

export default function WhyNeedCrisistManagementService() {
  const points = [
    {
      id: "01",
      icon: Newspaper,
      title: "Sudden Negative News",
      description:
        "When bad news spreads fast, it can hurt your brand's trust. In that case, a Public Relations crisis management service in BD helps control the story and protect your image."
    },
    {
      id: "02",
      icon: Share2,
      title: "Viral Social Media Issues",
      description:
        "One wrong post can go viral and damage your reputation instantly. To fix that, expert PR crisis management can help to lessen the harm and rebuild positive attention."
    },
    {
      id: "03",
      icon: MessageSquareWarning,
      title: "Customer Complaints Going Public",
      description:
        "It impacts the company's trust when unhappy clients post complaints online. With expert crisis management, you can handle the issue quickly and protect your credibility."
    },
    {
      id: "04",
      icon: GlobeLock,
      title: "Online Reputation at Risk",
      description:
        "Negative articles or comments can affect business growth. For that, a PR crisis management expert makes sure your brand's image stays safe and trusted online."
    }
  ];

  // Container Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Item Framer Motion Variants
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-white text-slate-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- SECTION HEADER --- */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-[#a4223a] text-xs font-black uppercase tracking-wider mb-4 border border-red-100">
            <Sparkles className="w-3.5 h-3.5 text-[#a4223a]" />
            <span>Protection Pillars</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Why Do You Need a <span className="text-[#a4223a]">PR Crisis Management</span> Service in BD?
          </h2>

          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            To protect your brand image, it's vital to go for a PR crisis management service in Dhaka. Here's why having expert support matters:
          </p>
        </motion.div>

        {/* --- PURE MINIMALIST EDITORIAL GRID (WITH FRAMER MOTION STAGGER) --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12"
        >
          {points.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="space-y-3 group"
              >
                {/* Number & Icon Header Line */}
                <div className="flex items-center justify-between border-b border-slate-200 pb-3 group-hover:border-[#a4223a] transition-colors duration-300">
                  <div className="flex items-center gap-2 text-[#a4223a]">
                    <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-xs font-black uppercase tracking-widest">
                      Risk Area
                    </span>
                  </div>
                  <span className="text-xl font-black text-slate-300 group-hover:text-[#a4223a] transition-colors duration-300">
                    {item.id}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug group-hover:text-[#a4223a] transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Paragraph */}
                <p className="text-sm text-slate-600 leading-relaxed pt-1">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}