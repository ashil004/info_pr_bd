"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Newspaper, 
  Users, 
  Send, 
  ShieldCheck, 
  LifeBuoy, 
  Share2, 
  Sparkles, 
  ArrowRight 
} from "lucide-react";

export default function WhatWeOffer() {
  const services = [
    {
      id: "01",
      icon: Newspaper,
      title: "Online Media Coverage",
      description:
        "We help your business appear in top online newspapers, magazines, and news portals in Bangladesh. This solution ensures you reach a larger and trusted audience.",
      tag: "Press & News",
    },
    {
      id: "02",
      icon: Users,
      title: "Influencer & Blogger Outreach",
      description:
        "We connect you with the right influencers and bloggers to share your story. It creates authentic engagement and spreads your brand message faster across social networks.",
      tag: "Outreach",
    },
    {
      id: "03",
      icon: Send,
      title: "Press Release Distribution",
      description:
        "We write and send press releases to the right media outlets. This plan ensures your announcements reach journalists and readers who matter most.",
      tag: "Distribution",
    },
    {
      id: "04",
      icon: ShieldCheck,
      title: "Online Reputation Management",
      description:
        "We protect and improve your brand’s online image. This service ensures positive search results and handles any negative content that may harm your reputation.",
      tag: "ORM & SEO",
    },
    {
      id: "05",
      icon: LifeBuoy,
      title: "Crisis Communication Support",
      description:
        "We act fast to control the narrative and protect your reputation during crisis situations. This service keeps public trust in your brand rock-solid.",
      tag: "24/7 Support",
    },
    {
      id: "06",
      icon: Share2,
      title: "Social Media PR Integration",
      description:
        "We align PR efforts with social media plans. Thanks to this, your campaigns reach people across platforms like Facebook, LinkedIn, Instagram, and more.",
      tag: "Multi-Channel",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      
      {/* Background Decor Ambient Circles */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-red-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-rose-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-[#a4223a] text-xs font-black uppercase tracking-wider mb-4 border border-red-100">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Service Offerings</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            What We Offer as a Digital PR Company in <span className="text-[#a4223a]">Bangladesh?</span>
          </h2>

          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Our Digital PR Firm in Bangladesh covers every step of your brand’s online visibility and reputation growth. Explore our specialized solutions:
          </p>
        </motion.div>

        {/* Services Grid (3 Columns Desktop) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((item) => {
            const IconComponent = item.icon;

            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                className="group relative bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-2xl hover:shadow-red-950/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top Colored Accent Line on Hover */}
                <div className="absolute top-0 left-8 right-8 h-1 bg-[#a4223a] rounded-b-md opacity-0 group-hover:opacity-100 transition-all duration-300" />

                <div>
                  {/* Icon & Service Number Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-red-50 text-[#a4223a] flex items-center justify-center group-hover:bg-[#a4223a] group-hover:text-white transition-all duration-300 shadow-sm">
                      <IconComponent className="w-7 h-7" />
                    </div>

                    <span className="text-xs font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-full group-hover:bg-red-50 group-hover:text-[#a4223a] transition-colors duration-300">
                      Service {item.id}
                    </span>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-[#a4223a] transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                  <span className="text-slate-400 font-semibold">{item.tag}</span>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-[#a4223a] group-hover:translate-x-1 transition-transform duration-300"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA Banner inside Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 text-center bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="text-left">
            <h4 className="text-lg font-bold text-slate-900">Need a custom Digital PR strategy?</h4>
            <p className="text-xs sm:text-sm text-slate-500">We tailor PR packages based on your brand's unique goals.</p>
          </div>
          <a
            href="/contact"
            className="shrink-0 bg-[#a4223a] hover:bg-[#801326] text-white text-xs font-bold px-6 py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Consult Our Experts
          </a>
        </motion.div>

      </div>
    </section>
  );
}