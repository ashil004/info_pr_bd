"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Lightbulb, Users2, Target, Sparkles, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

// আইকন ম্যাপ
const iconMap = {
  "01": Search,
  "02": Lightbulb,
  "03": Users2,
};

// অ্যাকসেন্ট গ্রেডিয়েন্ট ম্যাপ
const accentMap = {
  "01": "from-red-600 to-rose-500",
  "02": "from-[#a4223a] to-red-600",
  "03": "from-slate-800 to-slate-950",
};

export default function Mission() {
  const { t } = useLanguage();

  const missions = t("Mission.items") || [];

  return (
    <section className="w-full font-sans overflow-hidden">
      
      {/* Top Header Banner Section */}
      <div className="bg-slate-950 text-white pt-20 pb-36 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-slate-800/60">
        
        {/* Glow Light */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#a4223a]/20 blur-3xl rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#a4223a]/15 border border-[#a4223a]/30 text-red-400 text-xs sm:text-sm font-semibold tracking-wide"
          >
            <Target className="w-4 h-4 text-[#a4223a]" />
            <span>{t("Mission.badge")}</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black tracking-tight"
          >
            {t("Mission.headline_main")}{" "}
            <span className="bg-gradient-to-r from-red-500 via-rose-400 to-white bg-clip-text text-transparent">
              {t("Mission.headline_highlight")}
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-medium"
          >
            {t("Mission.description")}
          </motion.p>
        </div>
      </div>

      {/* Cards Section */}
      <div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 -mt-24 relative z-20 pb-16">
            {Array.isArray(missions) &&
              missions.map((item, index) => {
                const IconComponent = iconMap[item.id] || Search;
                const accentGradient = accentMap[item.id] || "from-red-600 to-rose-500";

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15, duration: 0.5 }}
                    whileHover={{ y: -8 }}
                    className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl border border-slate-100 flex flex-col justify-between relative overflow-hidden transition-all duration-300"
                  >
                    <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${accentGradient}`} />

                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-md group-hover:bg-[#a4223a] transition-colors duration-300">
                          <IconComponent className="w-6 h-6" />
                        </div>

                        <span className="text-xs font-bold text-slate-500 uppercase tracking-widest bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                          {item.badge}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#a4223a] transition-colors flex items-center gap-1">
                        <span>{item.title}</span>
                        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all text-[#a4223a]" />
                      </h3>

                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-medium">
                      <span className="flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#a4223a]" /> {t("Mission.card_footer_badge")}
                      </span>
                      <span className="group-hover:text-slate-900 font-semibold transition-colors">
                        {t("Mission.card_footer_action")}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
          </div>

        </div>
      </div>

    </section>
  );
}