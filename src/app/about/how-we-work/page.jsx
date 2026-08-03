"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Search, PenTool, Users, TrendingUp } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

const stepIcons = [Search, PenTool, Users, TrendingUp];

export default function HowWeWork() {
  const { t } = useLanguage();
  const stepsData = t("HowWeWork.steps") || [];

  return (
    <section className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#a4223a]/10 via-rose-500/10 to-amber-500/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#a4223a]/10 dark:bg-[#a4223a]/20 border border-[#a4223a]/20 text-[#a4223a] text-xs sm:text-sm font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5" />
              {t("HowWeWork.badge")}
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight"
          >
            {t("HowWeWork.title_part1")}{" "}
            <span className="bg-gradient-to-r from-[#a4223a] via-rose-600 to-red-500 bg-clip-text text-transparent">
              {t("HowWeWork.title_highlight")}
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 text-sm sm:text-base lg:text-lg leading-relaxed"
          >
            {t("HowWeWork.subtitle")}
          </motion.p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {Array.isArray(stepsData) &&
            stepsData.map((item, index) => {
              const Icon = stepIcons[index % stepIcons.length] || Search;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="group relative bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-8 sm:p-10 shadow-xs hover:shadow-2xl hover:border-[#a4223a]/40 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#a4223a]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <span className="absolute right-6 top-4 text-7xl sm:text-8xl font-black text-slate-100 dark:text-slate-800/40 select-none group-hover:text-[#a4223a]/10 dark:group-hover:text-[#a4223a]/20 transition-colors duration-300 pointer-events-none">
                    {item.step}
                  </span>

                  <div className="relative z-10 space-y-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#a4223a]/10 dark:bg-[#a4223a]/20 border border-[#a4223a]/20 flex items-center justify-center text-[#a4223a] group-hover:bg-[#a4223a] group-hover:text-white transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-[#a4223a] dark:group-hover:text-rose-400 transition-colors duration-300">
                      {item.title}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
        </div>
      </div>
    </section>
  );
}