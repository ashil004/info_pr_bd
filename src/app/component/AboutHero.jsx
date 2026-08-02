"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import { CheckCircle2, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutHero() {
  const [teamAnimation, setTeamAnimation] = useState(null);

  
  useEffect(() => {
    fetch("/team.json")
      .then((res) => res.json())
      .then((data) => setTeamAnimation(data))
      .catch((err) => console.error("Error loading animation:", err));
  }, []);

  const services = [
    "Press Conference",
    "International PR",
    "Digital PR",
    "Crisis Management",
    "Brand Launch",
    "Content Consultancy",
  ];

  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12, 
      },
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
                <span>About Info PR</span>
              </div>
            </motion.div>

            
            <motion.h1 
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white leading-[1.2] tracking-tight"
            >
              Connecting Your Brand with <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-[#a4223a] to-red-600 bg-clip-text text-transparent">
                Nationwide Media Reach
              </span>
            </motion.h1>

            
            <motion.p 
              variants={itemVariants}
              className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed"
            >
              At <strong className="text-gray-900 dark:text-white font-semibold">Info PR</strong>, we bridge the gap between your brand and high-authority journalism. We empower organizations across Bangladesh and internationally with strategic public relations, high-impact media coverage, and digital visibility.
            </motion.p>

            
            <motion.div variants={itemVariants} className="pt-2 space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                Specialized Solutions We Offer:
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {services.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-100 dark:border-gray-700/60 shadow-2xs hover:border-[#a4223a]/40 hover:shadow-md transition-all group cursor-default"
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
                <span>Get Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <Link
                href="/submit-pr"
                className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-800 dark:text-white border border-gray-200 dark:border-gray-700 text-sm font-semibold px-6 py-3.5 rounded-full transition-all active:scale-95"
              >
                <span>Submit Press Release</span>
              </Link>
            </motion.div>

          </motion.div>

         
          <motion.div 
            className="lg:col-span-5 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative w-full max-w-lg aspect-square bg-gradient-to-tr from-[#a4223a]/10 via-red-500/5 to-transparent rounded-3xl p-4 sm:p-8 border border-gray-100 dark:border-gray-800 shadow-xl backdrop-blur-xs flex items-center justify-center">
              
              {/* Animation Render */}
              {teamAnimation ? (
                <Lottie 
                  animationData={teamAnimation} 
                  loop={true} 
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="text-sm text-gray-400">Loading animation...</div>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}