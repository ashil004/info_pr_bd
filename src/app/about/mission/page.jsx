"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Lightbulb, Users2, Target, Sparkles, ArrowUpRight } from "lucide-react";

export default function Mission() {
  const missions = [
    {
      id: "01",
      title: "Analyze & Study Project",
      description:
        "We review each campaign, select the best platforms, and measure impact step by step. Our team tracks results and continuously optimizes for maximum ROI.",
      icon: Search,
      accent: "from-red-600 to-rose-500",
      badge: "Phase 01",
    },
    {
      id: "02",
      title: "Grant Smart Solutions",
      description:
        "Our expert team designs creative and effective PR strategies to elevate your brand reputation with tailored, unique plans that stand out in the market.",
      icon: Lightbulb,
      accent: "from-[#a4223a] to-red-600",
      badge: "Phase 02",
    },
    {
      id: "03",
      title: "Reach Your Audience",
      description:
        "With focused PR campaigns, we connect you directly with the right target audience, ensuring your message reaches authority media outlets to build visibility.",
      icon: Users2,
      accent: "from-slate-800 to-slate-950",
      badge: "Phase 03",
    },
  ];

  return (
    <section className="w-full font-sans overflow-hidden">
      
      
      <div className="bg-slate-950 text-white pt-20 pb-36 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-slate-800/60">
        
        
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#a4223a]/20 blur-3xl rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10">
          
          
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#a4223a]/15 border border-[#a4223a]/30 text-red-400 text-xs sm:text-sm font-semibold tracking-wide"
          >
            <Target className="w-4 h-4 text-[#a4223a]" />
            <span>Our Driving Force</span>
          </motion.div>

          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black tracking-tight"
          >
            Our <span className="bg-gradient-to-r from-red-500 via-rose-400 to-white bg-clip-text text-transparent">Mission</span>
          </motion.h2>

          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-medium"
          >
            At <strong className="text-white">Info PR</strong>, we believe every brand deserves a plan that truly works. As a leading PR agency in Bangladesh, our goals are given below:
          </motion.p>
        </div>
      </div>

      
      <div>
        <div className="max-w-6xl mx-auto">
          
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 -mt-24 relative z-20">
            {missions.map((item, index) => {
              const IconComponent = item.icon;
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
                  
                  <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${item.accent}`} />

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
                      <Sparkles className="w-3.5 h-3.5 text-[#a4223a]" /> Info PR Standard
                    </span>
                    <span className="group-hover:text-slate-900 font-semibold transition-colors">Details →</span>
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