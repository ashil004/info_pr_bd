'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ItSupportHero() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  const containerStagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  return (
    <section className="relative w-full bg-[#FAFAFA] py-16 md:py-24 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Content */}
        <motion.div 
          className="lg:col-span-7 flex flex-col items-start space-y-7"
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Top Badge */}
          <motion.div 
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="inline-block bg-[#FDE8E8] text-[#A61C30] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm cursor-default"
          >
            LEADING IT SUPPORT & TECH SOLUTION
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] leading-[1.15] tracking-tight"
          >
            Trusted{" "}
            <span className="text-[#A61C30] relative inline-block group">
              IT Support
              <span className="absolute bottom-1 left-0 w-0 h-1 bg-[#A61C30] transition-all duration-300 group-hover:w-full"></span>
            </span>{" "}
            Services in Bangladesh
          </motion.h1>

          {/* Subtitle / Description */}
          <motion.p 
            variants={fadeInUp}
            className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl"
          >
            Looking for reliable IT support and infrastructure management? We help growing businesses maintain 99.9% uptime with end-to-end server setup, cloud security, 24/7 helpdesk, and network troubleshooting.
          </motion.p>

          {/* Call To Action Buttons */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-wrap items-center gap-4 pt-3"
          >
            <motion.a
              href="#consultation"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group bg-[#A61C30] hover:bg-[#8B1728] text-white font-semibold px-7 py-4 rounded-xl shadow-md transition-colors flex items-center gap-2.5"
            >
              <span>Get a Free Tech Audit</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.a>
            
            <motion.a
              href="#plans"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group bg-white border border-gray-200 text-[#0F172A] hover:bg-gray-50/50 hover:border-gray-300 font-semibold px-7 py-4 rounded-xl shadow-sm transition-colors flex items-center gap-2.5"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 fill-current text-[#0F172A] transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24">
                <path d="M3 22v-20l18 10-18 10z"/>
              </svg>
              <span>View Support Plans</span>
            </motion.a>
          </motion.div>

          {/* Bottom Trust Badges */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-wrap items-center gap-6 pt-7 text-xs sm:text-sm font-semibold text-gray-700 border-t border-gray-200/70 w-full max-w-xl"
          >
            <div className="flex items-center gap-2.5 transition-colors hover:text-[#A61C30]">
              <span className="text-[#A61C30] text-lg">🛡️</span>
              <span>99.9% Server Uptime Guarantee</span>
            </div>
            <div className="flex items-center gap-2.5 transition-colors hover:text-[#A61C30]">
              <span className="text-[#A61C30] text-lg">👨‍💻</span>
              <span>24/7 Expert Tech Support</span>
            </div>
          </motion.div>

        </motion.div>

        {/* Right Column: Image Card */}
        <motion.div 
          className="lg:col-span-5 relative group"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-[#FDE8E8] to-[#FDE8E8]/30 rounded-[30px] blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-slate-900 z-10">
            
            {/* Top Right Live Indicator Badge */}
            <div className="absolute top-4 right-4 z-20 bg-black/80 backdrop-blur-md text-white text-xs font-semibold px-3.5 py-1.5 rounded-full flex items-center gap-2.5 border border-white/10 shadow-lg">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500 animate-[pulse_1.5s_ease-in-out_infinite] shadow-[0_0_8px_2px_rgba(239,68,68,0.7)]"></span>
              24/7 Live Monitoring
            </div>

            {/* Server / IT Support Image */}
            <div className="relative h-[400px] sm:h-[480px] lg:h-[450px] w-full overflow-hidden">
              <motion.img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop"
                alt="IT Support Server Center"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </div>

            {/* Overlay Card (Bottom) */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
              className="absolute bottom-4 left-4 right-4 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-4.5 shadow-xl flex items-center justify-between border border-gray-100/50"
            >
              <div className="flex items-center gap-4">
                <motion.div 
                  whileHover={{ rotate: 10 }}
                  className="w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center text-[#A61C30] text-xl border border-red-100"
                >
                  💻
                </motion.div>
                <div>
                  <h4 className="font-bold text-[#0F172A] text-sm sm:text-base leading-tight">Full Technical Setup</h4>
                  <p className="text-xs text-gray-500 mt-1">Servers, Cloud Security & Helpdesk</p>
                </div>
              </div>
              <span className="text-xs font-bold text-[#A61C30] bg-red-50 px-3 py-1.5 rounded-full border border-red-100 shadow-inner">
                Managed
              </span>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}