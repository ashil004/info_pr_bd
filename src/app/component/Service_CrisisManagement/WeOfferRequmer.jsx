"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  Camera,
  Globe,
  Eye,
  Bookmark,
  PenTool,
  Sparkles,
  ArrowRight,
  ShieldCheck
} from "lucide-react";

export default function WeOfferRequmer() {
  const [activeTab, setActiveTab] = useState(0);

  // Screeshot-1 & Screenshot-2 Total 6 Contents
  const services = [
    {
      id: "01",
      icon: FileText,
      title: "Crisis Communication Planning",
      subtitle: "Strategic Blueprint",
      description:
        "We make a clear communication plan to handle difficult times. As a reputation management company in Bangladesh, our team prepares your brand with the right press and timing."
    },
    {
      id: "02",
      icon: Camera,
      title: "Media Handling & Press Statements",
      subtitle: "Narrative Control",
      description:
        "Our experts manage press interactions smoothly. With PR crisis management service in BD, we ensure your side of the story is delivered correctly via the proper media channels."
    },
    {
      id: "03",
      icon: Globe,
      title: "Online Reputation Repair",
      subtitle: "Digital Recovery",
      description:
        "We take care of the negative news and harmful content by using proven methods to repair your brand's name. With that, our team brings a positive image using a Press Conference."
    },
    {
      id: "04",
      icon: Eye,
      title: "Monitoring News & Social Media",
      subtitle: "24/7 Intelligence",
      description:
        "Our team tracks every aspect of your brand to track news and social media. With advanced monitoring tools, we act fast before issues grow into bigger problems and solve them."
    },
    {
      id: "05",
      icon: Bookmark,
      title: "Brand Protection Strategy",
      subtitle: "Long-Term Shielding",
      description:
        "We build strong strategies that safeguard your company's image. As an expert reputation management company, our team focuses on long-term brand protection."
    },
    {
      id: "06",
      icon: PenTool,
      title: "Crisis Response Content Creation",
      subtitle: "Tailored Messaging",
      description:
        "Our team uses effective narratives to respond to the crisis. We also make carefully written statements and social media posts. With that, our team maintains your brand's voice."
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- HEADER SECTION --- */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-[#a4223a] text-xs font-black uppercase tracking-wider mb-4 border border-red-100">
            <Sparkles className="w-3.5 h-3.5 text-[#a4223a]" />
            <span>Core Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            What We Offer as a <span className="text-[#a4223a]">Reputation Management</span> Company in Dhaka?
          </h2>

          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            <a href="https://www.infoprbd.com" className="text-[#a4223a] hover:underline">
              Info PR
            </a>{" "}
            gives expert solutions to manage crises effectively. Our services are made to keep your business reputation safe in every situation. Here's the solution:
          </p>
        </motion.div>

        {/* --- NON-CARD SPLIT INTERACTIVE ARCHITECTURE --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: INTERACTIVE ITEM LIST (5 Columns) */}
          <div className="lg:col-span-5 space-y-2 border-l border-slate-200 pl-4 sm:pl-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isActive = activeTab === index;

              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(index)}
                  className={`w-full text-left p-3.5 sm:p-4 rounded-xl transition-all duration-300 flex items-center justify-between group relative ${
                    isActive
                      ? "text-[#a4223a]"
                      : "text-slate-700 hover:text-slate-900 hover:pl-5"
                  }`}
                >
                  {/* Left Active Line Accent */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabLine"
                      className="absolute -left-[17px] sm:-left-[25px] top-0 bottom-0 w-[3px] bg-[#a4223a]"
                    />
                  )}

                  <div className="flex items-center gap-3.5">
                    <span className="text-xs font-black text-slate-300 group-hover:text-[#a4223a] transition-colors">
                      {service.id}
                    </span>
                    <Icon className={`w-4 h-4 transition-transform ${isActive ? "scale-110 text-[#a4223a]" : "text-slate-400 group-hover:text-slate-600"}`} />
                    <span className="text-sm font-bold tracking-tight">
                      {service.title}
                    </span>
                  </div>

                  <ArrowRight className={`w-4 h-4 transition-transform ${isActive ? "opacity-100 translate-x-1" : "opacity-0 group-hover:opacity-50"}`} />
                </button>
              );
            })}
          </div>

          {/* RIGHT COLUMN: DETAILED VIEW WITH ANIMATION (7 Columns) */}
          <div className="lg:col-span-7 lg:pl-8 lg:border-l lg:border-slate-100 min-h-[360px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="space-y-6"
              >
                {/* Top Badge & Number */}
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-50 text-[#a4223a] text-xs font-black uppercase tracking-wider">
                    {React.createElement(services[activeTab].icon, { className: "w-4 h-4" })}
                    <span>{services[activeTab].subtitle}</span>
                  </div>
                  <span className="text-4xl font-black text-slate-100">
                    {services[activeTab].id}
                  </span>
                </div>

                {/* Main Selected Title */}
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-snug">
                  {services[activeTab].title}
                </h3>

                {/* Detailed Description */}
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  {services[activeTab].description}
                </p>

                {/* Key Benefits List */}
                <div className="pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                    <ShieldCheck className="w-4 h-4 text-[#a4223a]" />
                    <span>Tailored for Bangladesh Market</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                    <ShieldCheck className="w-4 h-4 text-[#a4223a]" />
                    <span>Immediate Strategic Execution</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}