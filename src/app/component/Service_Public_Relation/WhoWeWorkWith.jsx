"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Rocket, 
  Building2, 
  ShieldAlert, 
  ShoppingBag, 
  Sparkles, 
  ArrowUpRight,
  Check,
  Zap,
  Globe2,
  ShieldCheck,
  TrendingUp
} from "lucide-react";

export default function WhoWeWorkWith() {
  const categories = [
    {
      id: "01",
      icon: Rocket,
      accentBg: "bg-red-500/10 text-[#a4223a]",
      badge: "Fast Growth",
      badgeIcon: Zap,
      title: "Startups & Tech Brands",
      description:
        "We help tech innovators and fast-growing startups build strong market presence, secure press coverage, and capture early investor interest.",
      bullets: [
        "Product Launch & Funding PR",
        "Tech & Business Portal Features",
        "Founder Narrative & Brand Story"
      ]
    },
    {
      id: "02",
      icon: Building2,
      accentBg: "bg-rose-500/10 text-[#a4223a]",
      badge: "Enterprise",
      badgeIcon: Globe2,
      title: "Corporations & NGOs",
      description:
        "Our agency supports corporate entities and non-profits with corporate reputation management, CSR campaign outreach, and trusted media ties.",
      bullets: [
        "Corporate Reputation Building",
        "National Newspaper Outreach",
        "CSR Campaign Amplification"
      ]
    },
    {
      id: "03",
      icon: ShieldAlert,
      accentBg: "bg-amber-500/10 text-amber-600",
      badge: "High Precision",
      badgeIcon: ShieldCheck,
      title: "Healthcare, Finance & Public Figures",
      description:
        "We handle delicate PR needs with utmost confidentiality—protecting brand reputation while positioning leaders and entities as top authorities.",
      bullets: [
        "Crisis Communication Support",
        "Executive & Personal Branding",
        "Search Reputation Management"
      ]
    },
    {
      id: "04",
      icon: ShoppingBag,
      accentBg: "bg-emerald-500/10 text-emerald-600",
      badge: "D2C & Retail",
      badgeIcon: TrendingUp,
      title: "E-Commerce & Consumer Brands",
      description:
        "We increase digital visibility and boost sales by pairing consumer brands with high-impact influencer campaigns and popular digital magazines.",
      bullets: [
        "Influencer & Blogger Outreach",
        "Product Placement & Reviews",
        "Multi-Platform Campaign Strategy"
      ]
    }
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
      
      {/* Background Decor Elements */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-red-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-rose-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-[#a4223a] text-xs font-black uppercase tracking-wider mb-4 border border-red-100">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Target Industries</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Who We <span className="text-[#a4223a]">Work With?</span>
          </h2>

          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Info PR serves clients across various business scales and domains. Here is how our Digital PR Agency in BD creates specialized impact:
          </p>
        </motion.div>

        {/* --- CREATIVE GRID (4 CARDS WITH HOVER EXPANSION) --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto"
        >
          {categories.map((item) => {
            const IconComponent = item.icon;
            const BadgeIcon = item.badgeIcon;

            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-2xl hover:shadow-red-950/10 transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1"
              >
                {/* Glowing Top Border Accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#a4223a] to-rose-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Top Bar: Icon + Unique Pill */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-red-50 text-[#a4223a] group-hover:bg-[#a4223a] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm">
                      <IconComponent className="w-7 h-7" />
                    </div>

                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/60 text-slate-700 text-xs font-bold group-hover:bg-red-50 group-hover:text-[#a4223a] group-hover:border-red-100 transition-all duration-300">
                      <BadgeIcon className="w-3.5 h-3.5" />
                      <span>{item.badge}</span>
                    </div>
                  </div>

                  {/* Title & Arrow Link */}
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-[#a4223a] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-[#a4223a] group-hover:text-white flex items-center justify-center transition-all duration-300 shrink-0 mt-1">
                      <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white" />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>

                 
                  <div className="mt-6 pt-6 border-t border-slate-100 space-y-2.5">
                    {item.bullets.map((bullet, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs font-bold text-slate-700">
                        <div className="w-4 h-4 rounded-full bg-red-50 text-[#a4223a] flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>  
              </motion.div>
            );
          })}
        </motion.div>

        

      </div>
    </section>
  );
}