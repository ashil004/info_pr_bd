"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

export default function Concept() {
  const { t } = useLanguage();

  return (
    <section className="w-full font-sans bg-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Content with Motion & Language Context */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#a4223a]/10 border border-[#a4223a]/20 text-[#a4223a] text-xs sm:text-sm font-semibold tracking-wide">
              <Sparkles className="w-4 h-4" />
              <span>{t("Concept.badge")}</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {t("Concept.title")}{" "}
              <span className="bg-gradient-to-r from-[#a4223a] to-red-600 bg-clip-text text-transparent">
                {t("Concept.title_highlight")}
              </span>
            </h2>

            {/* Paragraphs */}
            <div className="space-y-4 text-slate-600 leading-relaxed text-base sm:text-lg font-normal">
              <p>{t("Concept.description_1")}</p>
              <p>{t("Concept.description_2")}</p>
              <p>
                {t("Concept.description_3_start")}{" "}
                <span className="font-bold text-[#a4223a]">Info PR</span>
                {t("Concept.description_3_end")}
              </p>
            </div>
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="flex justify-center items-center w-full relative group"
          >
            {/* Ambient Background Glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#a4223a]/20 to-red-500/10 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition duration-500" />

            <motion.img
              
              src="/about_concept.png"
              alt="Info PR Concept Illustration"
              className="relative w-full h-auto max-w-lg lg:max-w-none rounded-2xl object-contain drop-shadow-lg"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}