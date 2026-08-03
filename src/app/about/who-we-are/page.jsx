"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  CheckCircle2, 
  Layout, 
  Code, 
  TrendingUp, 
  Share2, 
  ShoppingBag, 
  Headphones,
  Award,
  Globe
} from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

const serviceIcons = [
  Layout, 
  Code, 
  TrendingUp, 
  Share2, 
  ShoppingBag, 
  Headphones
];

export default function WhoWeAre() {
  const { t } = useLanguage();
  const services = t("WhoWeAre.services") || [];

  return (
    <section className="py-16 lg:py-24 bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 relative flex items-center justify-center p-2"
          >
           
            <div className="absolute w-full h-full bg-gradient-to-tr from-[#a4223a]/15 to-rose-500/10 rounded-3xl blur-2xl pointer-events-none" />

            
            <div className="relative w-full max-w-lg aspect-[4/3] rounded-[2rem] bg-gradient-to-tr from-[#a4223a] to-rose-500 p-1 shadow-2xl">
              <div className="relative w-full h-full rounded-[1.8rem] overflow-hidden bg-slate-100 dark:bg-slate-900">
                <Image
                  src="/who we are.png"
                  alt={t("WhoWeAre.img_alt")}
                  fill
                  priority
                  className="object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>

            
            <motion.div 
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-3 right-0 sm:right-2 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-800 p-3 rounded-2xl shadow-lg flex items-center gap-3 z-10"
            >
              <div className="w-9 h-9 rounded-xl bg-[#a4223a] flex items-center justify-center text-white shadow-md">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">PR Agency</p>
                <p className="text-xs font-bold text-slate-900 dark:text-white">#1 Top Rated</p>
              </div>
            </motion.div>

            
            <motion.div 
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-3 left-0 sm:left-2 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-800 p-3 rounded-2xl shadow-lg flex items-center gap-3 z-10"
            >
              <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[#a4223a]">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Coverage</p>
                <p className="text-xs font-bold text-slate-900 dark:text-white">360° Media</p>
              </div>
            </motion.div>

          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="lg:col-span-6 space-y-6"
          >
            <div>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#a4223a]/10 dark:bg-[#a4223a]/20 border border-[#a4223a]/20 text-[#a4223a] text-xs sm:text-sm font-semibold tracking-wide">
                <Sparkles className="w-3.5 h-3.5" />
                {t("WhoWeAre.badge")}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.2]">
              {t("WhoWeAre.title_part1")}{" "}
              <span className="bg-gradient-to-r from-[#a4223a] via-rose-600 to-red-500 bg-clip-text text-transparent">
                {t("WhoWeAre.title_highlight")}
              </span>
            </h2>

            <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
              <p>{t("WhoWeAre.paragraph1")}</p>
              <p>{t("WhoWeAre.paragraph2")}</p>
            </div>

            <div className="pt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {Array.isArray(services) &&
                  services.map((service, index) => {
                    const Icon = serviceIcons[index % serviceIcons.length] || CheckCircle2;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.08 }}
                        whileHover={{ scale: 1.02, x: 3 }}
                        className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-[#a4223a]/40 transition-all duration-300 group cursor-default"
                      >
                        <div className="w-9 h-9 rounded-lg bg-[#a4223a]/10 flex items-center justify-center text-[#a4223a] group-hover:bg-[#a4223a] group-hover:text-white transition-colors duration-300 shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 group-hover:text-[#a4223a] transition-colors">
                          {service}
                        </span>
                      </motion.div>
                    );
                  })}
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}