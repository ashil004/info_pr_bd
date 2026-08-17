"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Bookmark as BookmarkIcon, 
  Users as UsersIcon, 
  Share2 as ShareIcon, 
  Target as TargetIcon,
  Sparkles 
} from "lucide-react";

export default function PcFiveSection() {
  const experiences = [
    {
      id: "01",
      number: "100+",
      statLabel: "Events Delivered",
      icon: BookmarkIcon,
      title: "100+ Successful Media Events",
      description:
        "We have established an impressive record of hosting successful PR events over the years. In fact, our agency successfully organizes hundreds of media events for top brands like Adata. Plus, we carefully plan and execute to achieve our client's PR goals with measurable results.",
    },
    {
      id: "02",
      number: "10+",
      statLabel: "Years Excellence",
      icon: UsersIcon,
      title: "Expert Team with 10+ Years in PR",
      description:
        "Our dedicated PR experts bring over a decade of hands-on experience in media briefings. Besides, we plan press events and public relations using proper skills. Our team knows what works, adapts to challenges, and delivers events that truly stand out.",
    },
    {
      id: "03",
      number: "500+",
      statLabel: "Media Network",
      icon: ShareIcon,
      title: "Strong Media Relationships That Deliver",
      description:
        "We secure real coverage through long-term relationships with journalists and media outlets. Our agency carefully crafts plans to ensure all clients get better attention. Plus, we turn each event into a successful brand moment with extensive press coverage.",
    },
    {
      id: "04",
      number: "100%",
      statLabel: "Quality Record",
      icon: TargetIcon,
      title: "Proven Track Record in High-Profile Events",
      description:
        "We have a proven record of hosting high-profile events like press briefings, product launches, and corporate updates. Our agency always delivers on quality and impact, so your brand sees real results and top-tier press coverage.",
    },
  ];

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-red-50/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-red-50 text-[#a4223a] text-xs font-black uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Proven Track Record</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Our Experience as PR Event Organizers in Bangladesh
          </h2>

          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            We handle each project with precision to stay at the top as the finest PR Event Organizers in Bangladesh. Here is our experience in this field:
          </p>
        </motion.div>

        {/* --- NO-CARD TIMELINE LAYOUT --- */}
        <div className="relative">
          
          {/* Vertical Connecting Line */}
          <div className="absolute left-6 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#a4223a] via-red-200 to-transparent -translate-x-1/2 hidden sm:block" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-12 sm:space-y-16"
          >
            {experiences.map((item, index) => {
              const IconComponent = item.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className={`relative flex flex-col sm:flex-row items-center gap-8 ${
                    isEven ? "sm:flex-row-reverse text-left" : "text-left"
                  }`}
                >
                  
                  {/* Content Column */}
                  <div className="w-full sm:w-1/2 group">
                    <div className="p-6 sm:p-8 rounded-3xl hover:bg-slate-50/80 transition-all duration-300">
                      
                      {/* Stat Badge & Icon Line */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#a4223a] flex items-center justify-center group-hover:bg-[#a4223a] group-hover:text-white transition-all duration-300 shadow-sm">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-2xl font-black text-[#a4223a]">
                            {item.number}
                          </span>
                          <span className="text-xs font-bold text-slate-400 block uppercase tracking-wider">
                            {item.statLabel}
                          </span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 group-hover:text-[#a4223a] transition-colors">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Central Node Indicator */}
                  <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-4 border-[#a4223a] shadow-md hidden sm:flex items-center justify-center z-10">
                    <div className="w-3 h-3 rounded-full bg-[#a4223a]" />
                  </div>

                  {/* Empty Opposite Column for Spacing Balance */}
                  <div className="w-full sm:w-1/2 hidden sm:block" />

                </motion.div>
              );
            })}
          </motion.div>

        </div>

      </div>
    </section>
  );
}