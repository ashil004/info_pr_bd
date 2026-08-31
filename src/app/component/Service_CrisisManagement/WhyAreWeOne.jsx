"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Clock,
  Award,
  Target,
  Handshake,
  Sparkles,
  CheckCircle2
} from "lucide-react";

export default function WhyAreWeOne() {
  const features = [
    {
      id: "01",
      highlight: "24/7",
      subTag: "Instant Response",
      icon: Clock,
      title: "24/7 Support During Crises",
      description:
        "A crisis can hit anytime with a bad news story, a viral post, or negative press. In that case, our reputation management company in Bangladesh works all day to check, respond, and control the press. We also ensure your side of the story is heard quickly."
    },
    {
      id: "02",
      highlight: "10+ Yrs",
      subTag: "Industry Mastery",
      icon: Award,
      title: "Experienced Team with 10+ Years in PR",
      description:
        "For over a decade, we have enough experience with PR and press relations to guide brands through difficult times. Our team also prepares the right messages, talks to the media, and creates smart strategies. Thanks to this, your brand can reduce damage and rebuild trust."
    },
    {
      id: "03",
      highlight: "Proven",
      subTag: "Zero Flop Record",
      icon: Target,
      title: "Proven Crisis Handling Track Record",
      description:
        "When your reputation is at risk, we step in with a clear action plan that has a proven record. In fact, our team has solved PR crises in many ways, like stopping false information, handling public relations, and so on. We also solve the issue in a way that protects your brand long-term."
    },
    {
      id: "04",
      highlight: "Direct",
      subTag: "Media Alliance",
      icon: Handshake,
      title: "Trusted by Media & Business Leaders",
      description:
        "To help your brand in a press level, we maintain strong relationships with journalists and business leaders. This also helps us handle media pressure faster and gives your brand a stronger voice when it matters most. Plus, our relationship with them helps your brand name."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- HEADER --- */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 text-[#a4223a] text-xs font-black uppercase tracking-widest mb-3">
            <Sparkles className="w-4 h-4 text-[#a4223a]" />
            <span>Competitive Advantage</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Why Are We One of the <span className="text-[#a4223a]">Best Reputation Management</span> Companies in BD?
          </h2>

          <p className="mt-4 text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            We are trusted because of our skill, long experience, and strong results. Here's how we help businesses during tough times:
          </p>
        </motion.div>

        {/* --- NO-BACKGROUND TRANSPARENT GRID --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16"
        >
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="group relative flex flex-col justify-between border-t border-slate-200 dark:border-slate-800 pt-8"
              >
                <div>
                  {/* Top Stats & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <span className="text-4xl sm:text-5xl font-black group-hover:text-[#a4223a] transition-colors duration-300 font-mono">
                        {item.highlight}
                      </span>
                      <span className="block text-xs font-black uppercase tracking-widest text-[#a4223a] mt-1">
                        {item.subTag}
                      </span>
                    </div>

                    <div className="w-12 h-12 rounded-xl text-slate-500 group-hover:text-[#a4223a] flex items-center justify-center transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-black group-hover:text-[#a4223a] transition-colors duration-300 mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Status Line */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-900/60 flex items-center gap-2 text-xs font-bold text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-[#a4223a]" />
                  <span>Verified Agency Standard</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}