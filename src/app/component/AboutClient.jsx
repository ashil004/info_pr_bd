"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";

// লোগো ডাটা (ক্যাটাগরি সহ)
const clientsData = [
  { id: 1, name: "Asian Post", category: "Media", logo: "/asian-post.jpg" },
  { id: 2, name: "Facebook", category: "Tech", logo: "/facebook.png" },
  { id: 3, name: "Citygroup", category: "Corporate", logo: "/city-group.jpg" },
  { id: 4, name: "BASIS", category: "Tech", logo: "/basis.png" },
  { id: 5, name: "Realme", category: "Tech", logo: "/realme_logo.png" },
  { id: 6, name: "Tecno", category: "Tech", logo: "/tecno-logo.png" },
  { id: 7, name: "Rokomari", category: "Corporate", logo: "/rokomari.jpg" },
  { id: 8, name: "CGTN", category: "Media", logo: "/cgtn.png" },
  { id: 9, name: "Al Jazeera", category: "Media", logo: "/Al-Jazeera-Logo.png" },
  { id: 10, name: "British Council", category: "Education", logo: "/british-council-logo.png" },
  { id: 11, name: "Shyamoli Engineering College", category: "Education", logo: "/Shamoli.jpg" },
  { id: 12, name: "Akij Air", category: "Corporate", logo: "/akij.jpg" },
];

const categories = ["All", "Tech", "Corporate", "Media", "Education"];

export default function AboutClient() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredClients =
    activeCategory === "All"
      ? clientsData
      : clientsData.filter((client) => client.category === activeCategory);

  // Motion Variants
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const bannerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut", delay: 0.2 } }
  };

  return (
    <section className="pt-16 sm:pt-24 pb-0 bg-gradient-to-b from-white via-slate-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 relative overflow-hidden">
      
      {/* Background Decorative Glow Orbs */}
      <div className="absolute top-1/3 left-0 -translate-y-1/2 w-72 h-72 bg-[#a4223a]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-0 -translate-y-1/2 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16 sm:mb-20">
        
        {/* SECTION HEADER (Motion Animated) */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
          className="text-center max-w-3xl mx-auto space-y-4 mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#a4223a]/10 dark:bg-[#a4223a]/20 border border-[#a4223a]/20 text-[#a4223a] dark:text-red-400 text-xs sm:text-sm font-semibold tracking-wide">
            <ShieldCheck className="w-4 h-4" />
            <span>Trusted Partners & Clients</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Trusted by <span className="text-[#a4223a]">Industry Leaders</span> Worldwide
          </h2>

          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
            As a leading PR agency in BD, <strong className="text-gray-900 dark:text-white">Info PR</strong> proudly delivers strategic coverage across diverse sectors—from global tech giants and news networks to top corporate conglomerates.
          </p>
        </motion.div>

        {/* CATEGORY FILTER BUTTONS */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors duration-300 cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#a4223a] text-white shadow-md shadow-[#a4223a]/25"
                  : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-[#a4223a]/40"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* CLIENT LOGOS GRID (Framed Cards with Motion) */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6"
        >
          <AnimatePresence>
            {filteredClients.map((client) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                whileHover={{ y: -6, scale: 1.03 }}
                key={client.id}
                className="group relative bg-white dark:bg-gray-800/90 rounded-2xl p-4 border border-gray-100 dark:border-gray-700/60 shadow-2xs hover:shadow-xl hover:border-[#a4223a]/30 transition-shadow duration-300 flex items-center justify-center min-h-[100px]"
              >
                {/* Logo Image */}
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-16 w-auto object-contain filter grayscale group-hover:grayscale-0 opacity-75 group-hover:opacity-100 transition-all duration-300"
                />

                {/* Company Name Badge on Hover */}
                <div className="absolute inset-x-2 -bottom-3 flex justify-center opacity-0 group-hover:opacity-100 group-hover:bottom-2 transition-all duration-300 pointer-events-none z-10">
                  <span className="px-2.5 py-1 rounded-md bg-gray-900/90 dark:bg-gray-100/90 backdrop-blur-xs text-white dark:text-gray-900 text-[10px] font-bold shadow-md truncate max-w-full text-center">
                    {client.name}
                  </span>
                </div>

                {/* Micro Category Tag (Top Right) */}
                <span className="absolute top-2 right-2 px-1.5 py-0.5 rounded-md bg-gray-100 dark:bg-gray-700 text-[9px] font-semibold text-gray-500 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  {client.category}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* FULL-WIDTH CTA BANNER (Motion Animated) */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={bannerVariants}
        className="w-full bg-gradient-to-r from-[#a4223a] via-[#8f1d32] to-[#6d1324] text-white py-12 sm:py-16 relative overflow-hidden shadow-2xl"
      >
        {/* Subtle Background Lighting & Pattern */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-black/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            
            {/* CTA Content */}
            <div className="space-y-2 max-w-2xl">
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Reach Out to Us
              </h3>
              <p className="text-white/80 text-sm sm:text-base font-medium">
                Your brand could be next on this list—backed by our strong media network and senior PR expertise.
              </p>
            </div>

            {/* CTA Button with Framer Motion Hover/Tap */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-[#a4223a] font-bold text-sm px-8 py-4 rounded-full shadow-lg transition-colors duration-300 shrink-0 group"
            >
              <span>CONTACT US</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.a>

          </div>
        </div>
      </motion.div>

    </section>
  );
}