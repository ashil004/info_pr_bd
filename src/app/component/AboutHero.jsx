"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Sparkles, ArrowRight } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function AboutHero() {
  const { t } = useLanguage();

  
  const servicesList = t("AboutHero.services") || [];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 py-12 lg:py-20">
      
     
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#a4223a]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          
          <motion.div
            className="lg:col-span-7 space-y-6 text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#a4223a]/10 dark:bg-[#a4223a]/20 border border-[#a4223a]/20 text-[#a4223a] dark:text-red-400 text-xs sm:text-sm font-semibold tracking-wide">
                <Sparkles className="w-4 h-4 animate-pulse" />
                <span>{t("AboutHero.badge")}</span>
              </div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white leading-[1.2] tracking-tight"
            >
              {t("AboutHero.headline_part1")} <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-[#a4223a] to-red-600 bg-clip-text text-transparent">
                {t("AboutHero.headline_highlight")}
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed"
            >
              {t("AboutHero.description")}
            </motion.p>

            <motion.div variants={itemVariants} className="pt-2 space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                {t("AboutHero.solutions_title")}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {Array.isArray(servicesList) &&
                  servicesList.map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-2 p-2.5 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-100 dark:border-gray-700/60 shadow-xs hover:border-[#a4223a]/40 hover:shadow-md transition-all group cursor-default"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#a4223a] shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-200 truncate">
                        {item}
                      </span>
                    </motion.div>
                  ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#a4223a] hover:bg-[#851b2e] text-white text-sm font-bold px-6 py-3.5 rounded-full shadow-lg shadow-[#a4223a]/25 transition-all hover:gap-3 active:scale-95"
              >
                <span>{t("AboutHero.btn_consultation")}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/submit-pr"
                className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-800 dark:text-white border border-gray-200 dark:border-gray-700 text-sm font-semibold px-6 py-3.5 rounded-full transition-all active:scale-95"
              >
                <span>{t("AboutHero.btn_submit_pr")}</span>
              </Link>
            </motion.div>
          </motion.div>

          
          <motion.div
            className="lg:col-span-5 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative w-full max-w-lg aspect-square bg-gradient-to-tr from-[#a4223a]/10 via-red-500/5 to-transparent rounded-3xl p-3 sm:p-4 border border-gray-100 dark:border-gray-800 shadow-xl backdrop-blur-xs flex items-center justify-center overflow-hidden group">
              
              <Image
                src="/About_Team.jpeg"
                alt={t("AboutHero.img_alt")}
                width={600}
                height={600}
                priority
                className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
              />

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}