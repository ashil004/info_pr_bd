"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Compass,
  FileSearch,
  MapPin,
  PenTool,
  LineChart,
  Headphones,
  Sparkles,
  CheckCircle2,
  ArrowUpRight
} from "lucide-react";

export default function ContactConsultancyWork() {
  const steps = [
    {
      step: "01",
      icon: Compass,
      title: "Understanding Your Goals",
      subtitle: "Discovery & Alignment",
      description:
        "We begin by talking to you about your business aims, target audience, and current challenges. Plus, this helps us make a plan that matches your exact needs.",
      deliverable: "Goal Alignment Sheet"
    },
    {
      step: "02",
      icon: FileSearch,
      title: "Reviewing Current Content",
      subtitle: "Audit & Assessment",
      description:
        "Our agency carefully checks your site, blogs, and materials. It helps us to see what is working well and what needs to change to boost efficiency.",
      deliverable: "Content Audit Report"
    },
    {
      step: "03",
      icon: MapPin,
      title: "Building the Right Plan",
      subtitle: "Strategic Blueprinting",
      description:
        "We prepare a simple and clear plan that explains what content to create and publish. Our team also defines measurable success metrics.",
      deliverable: "Actionable Content Roadmap"
    },
    {
      step: "04",
      icon: PenTool,
      title: "Creating Better Content",
      subtitle: "Editorial Guidance",
      description:
        "Our team works with your writers or makes content for you. This makes sure it fits your brand voice, SEO standards, and marketing goals seamlessly.",
      deliverable: "High-Converting Assets"
    },
    {
      step: "05",
      icon: LineChart,
      title: "Monitoring Results",
      subtitle: "Performance Analytics",
      description:
        "We regularly check how your content is performing by analyzing key metrics. Our team makes ongoing updates to continuously improve your reach.",
      deliverable: "Monthly ROI Analytics"
    },
    {
      step: "06",
      icon: Headphones,
      title: "Strategic Support",
      subtitle: "Brand Authority",
      description:
        "Our agency stays with you even after the initial project. We provide ongoing strategic advice to keep your content strong and relevant in the future.",
      deliverable: "Dedicated Advisory"
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white text-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- SECTION HEADER --- */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-[#a4223a] text-xs font-black uppercase tracking-wider mb-4 border border-red-100">
            <Sparkles className="w-3.5 h-3.5 text-[#a4223a]" />
            <span>Info PR Execution Process</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            How Our Content Consultancy <span className="text-[#a4223a]">Works?</span>
          </h2>

          <p className="mt-3 sm:mt-4 text-slate-600 text-xs sm:text-base leading-relaxed">
            Info PR follows a step-by-step process to give you the best content consultancy service in Dhaka. Our work approach is given below:
          </p>
        </motion.div>

        {/* --- MODERN FEATURE GRID WITH HOVER SHINE & STEP BADGES --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group relative bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 hover:border-[#a4223a]/40 hover:shadow-xl hover:shadow-red-950/5 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top Header Row in Item */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#a4223a] flex items-center justify-center group-hover:bg-[#a4223a] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-3xl font-black text-slate-200 group-hover:text-[#a4223a]/20 transition-colors">
                      {item.step}
                    </span>
                  </div>

                  {/* Subtitle & Title */}
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#a4223a]">
                    {item.subtitle}
                  </span>
                  
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug mt-1 group-hover:text-[#a4223a] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Deliverable Pill */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700">
                  <div className="flex items-center gap-1.5 text-[#a4223a]">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span className="text-[11px] font-extrabold">{item.deliverable}</span>
                  </div>

                  <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-[#a4223a] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}