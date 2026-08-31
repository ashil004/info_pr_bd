"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Award, 
  Newspaper, 
  Rocket, 
  BarChart3, 
  Sparkles, 
  CheckCircle2 
} from "lucide-react";

export default function WhyWeAreBest() {
  // Times PR Content mapped with Lucide Icons
  const features = [
    {
      id: "01",
      title: "Trusted by Top Local & Global Brands",
      icon: Award,
      description:
        "Many famous businesses go with us to introduce and promote their services. To help, we give quality solutions, meet deadlines, and make press releases. Thanks to this, it actually brings them attention and results."
    },
    {
      id: "02",
      title: "Strong Media & Journalist Network",
      icon: Newspaper,
      description:
        "We have close relationships with top journalists, editors, and news outlets in BD. This also means your press release has a higher chance of being published. Plus, our work ensures your brand reaches the right audience."
    },
    {
      id: "03",
      title: "Experience in 100+ Successful Launches",
      icon: Rocket,
      description:
        "Our team works hard to launch into hundreds of different industries. This experience also helps us plan, write, and share press releases. And, we ensure to show your brand story that makes a real impact."
    },
    {
      id: "04",
      title: "Results-Driven Approach with Transparent Reporting",
      icon: BarChart3,
      description:
        "We focus on giving you results that are measurable instead of relying on promises. For that, our team tracks media coverage and grants in-depth reports. We also make sure you see exactly how your launch is performing in real time."
    }
  ];

  // Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-white text-slate-900 relative overflow-hidden">
      {/* Light Soft Red Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-red-50 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- HEADER SECTION --- */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-20 sm:mb-28"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-[#a4223a] border border-red-100 text-xs font-black uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#a4223a]" />
            <span>Why Choose Info PR</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-slate-900">
            Why Are We <span className="text-[#a4223a]">the Best Choice in Bangladesh</span> for Company Launch PR?
          </h2>

          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Our company launch press release service in Bangladesh is reliable for giving results to grow your brand and increase ROI. Here’s why you need us:
          </p>
        </motion.div>

        {/* --- UNIQUE ZIG-ZAG LIGHT PATH (NO CARDS) --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="relative space-y-16 sm:space-y-24"
        >
          {/* Vertical Connecting Line for Large Screens */}
          <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-[2px] bg-slate-200 -translate-x-1/2" />

          {features.map((item, index) => {
            const Icon = item.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                  isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Text Content Column */}
                <div className={`flex-1 ${isEven ? "lg:text-right" : "lg:text-left"}`}>
                  <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#a4223a] mb-2 uppercase tracking-widest">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Pillar {item.id}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight mb-3">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl inline-block">
                    {item.description}
                  </p>
                </div>

                {/* Center Floating Icon Node */}
                <div className="relative z-10 flex-shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-red-50 border-2 border-red-200 text-[#a4223a] flex items-center justify-center shadow-md"
                  >
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10" />
                  </motion.div>
                </div>

                {/* Balance Column */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}