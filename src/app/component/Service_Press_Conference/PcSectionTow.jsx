"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Clock, Handshake, SlidersHorizontal } from "lucide-react";

export default function PcSectionTow() {
  const features = [
    {
      id: 1,
      icon: Award,
      title: "Skilled PR Event Organizers in Dhaka & Beyond",
      description:
        "Our agency has planned press events in Dhaka and other cities. We also bring creative ideas and careful planning to every press conference with a digital PR system. Besides, our team ensures everything runs smoothly.",
    },
    {
      id: 2,
      icon: Clock,
      title: "On-Time Setup and Smooth Execution",
      description:
        "We manage every detail on time that includes venue, guests, branding, and media. As PR Event Organizers in BD, our team ensures your event starts and ends without stress or delays. It also gives you peace of mind.",
    },
    {
      id: 3,
      icon: Handshake,
      title: "Trusted by National and International Brands",
      description:
        "Top companies choose us because of our results and reliability. In fact, we have worked with local and global businesses that trust us to handle media events. And, our team does the work professionally.",
    },
    {
      id: 4,
      icon: SlidersHorizontal,
      title: "Custom Strategies for Every Event",
      description:
        "We understand that events for PR needs can vary based on the theme. To organize it, our PR Event Organizers in Dhaka create unique plans based on your goals. It also helps you get proper media attention.",
    },
  ];

  // Framer Motion Variants for Staggered Animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 bg-slate-50/70 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-50/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading with Motion */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Why Choose Us for Your Press Conference?
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            We are the finest PR Event Organizers in Bangladesh with an expert team, timely service, and custom plans. Here’s why you should go with us:
          </p>
        </motion.div>

        {/* 2x2 Feature Cards Grid with Staggered Scroll Animation */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {features.map((item) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative bg-white p-8 sm:p-10 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Left Accent Border Animation */}
                <div className="absolute top-0 left-0 w-1.5 h-full bg-[#a4223a] opacity-90 group-hover:w-2.5 transition-all duration-300" />

                {/* Icon Box */}
                <div className="w-14 h-14 rounded-xl bg-red-50 text-[#a4223a] flex items-center justify-center mb-6 border border-red-100/60 group-hover:scale-110 group-hover:bg-[#a4223a] group-hover:text-white transition-all duration-300">
                  <IconComponent className="w-7 h-7" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-[#a4223a] transition-colors duration-200">
                  {item.title}
                </h3>

                <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}