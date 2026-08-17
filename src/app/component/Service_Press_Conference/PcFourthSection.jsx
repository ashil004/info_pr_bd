"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Briefcase, 
  HeartHandshake, 
  Landmark, 
  GraduationCap, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles 
} from "lucide-react";

export default function PcFourthSection() {
  const sectors = [
    {
      id: "corporate",
      icon: Briefcase,
      title: "Corporate Brands & MNCs",
      shortDesc: "Product launches, quarterly briefings & brand reputation.",
      fullDesc:
        "We support local companies and multinational brands looking to launch breakthrough products, deliver financial announcements, or establish a strong executive presence across Bangladesh's top media outlets.",
      highlights: [
        "Product & Service Launches",
        "Executive & Leadership Briefings",
        "Crisis Communication & PR",
      ],
    },
    {
      id: "ngo",
      icon: HeartHandshake,
      title: "NGOs & Development Agencies",
      shortDesc: "Social impact stories, research publication & public outreach.",
      fullDesc:
        "Our Press Conference Organizers in Dhaka assist national NGOs and international development agencies in publishing ground research, highlighting social impact, and connecting with global audiences effectively.",
      highlights: [
        "Research & Report Releases",
        "Social Campaign Announcements",
        "Donor & Stakeholder Briefings",
      ],
    },
    {
      id: "government",
      icon: Landmark,
      title: "Government & Public Sector",
      shortDesc: "Official notices, policy declarations & protocol management.",
      fullDesc:
        "We execute official press announcements, ministry updates, and public agency briefs with full protocol support, high-level security coordination, and guaranteed national broadcast coverage.",
      highlights: [
        "Policy & Policy Change Updates",
        "Official Ministry Briefings",
        "High-Security Protocol Setup",
      ],
    },
    {
      id: "edu",
      icon: GraduationCap,
      title: "Education & Tech Startups",
      shortDesc: "Funding announcements, course launches & innovation PR.",
      fullDesc:
        "We help universities, online education platforms, and tech startups present their achievements to the media with absolute clarity—helping them showcase funding rounds, innovations, and new programs.",
      highlights: [
        "Startup Funding Announcements",
        "Academic & Research Milestones",
        "Tech Product Showcases",
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState(sectors[0]);

  return (
    <section className="py-20 lg:py-28 bg-slate-50/70 relative overflow-hidden border-t border-b border-slate-200/60">
      {/* Background Soft Ambient Glow */}
      <div className="absolute top-1/2 -left-20 -translate-y-1/2 w-96 h-96 bg-red-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-red-50 text-[#a4223a] text-xs font-black uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Client Ecosystem</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Who We Work With?
          </h2>

          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Our clients rely on us for seamless PR support and high-impact press events across corporate, social, and public sectors.
          </p>
        </motion.div>

        {/* --- NO-CARD SPLIT INTERACTIVE LAYOUT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* LEFT: Sector Selection List (Col-5) */}
          <div className="lg:col-span-5 space-y-3">
            {sectors.map((item) => {
              const IconComponent = item.icon;
              const isActive = activeTab.id === item.id;

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveTab(item)}
                  className={`group cursor-pointer p-5 rounded-2xl transition-all duration-300 relative border-l-4 ${
                    isActive
                      ? "border-[#a4223a] bg-white shadow-md"
                      : "border-transparent hover:bg-white/60"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-xl transition-colors ${
                        isActive
                          ? "bg-[#a4223a] text-white"
                          : "bg-slate-200/60 text-slate-600 group-hover:bg-red-50 group-hover:text-[#a4223a]"
                      }`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3
                          className={`text-base sm:text-lg font-bold transition-colors ${
                            isActive ? "text-[#a4223a]" : "text-slate-800"
                          }`}
                        >
                          {item.title}
                        </h3>
                        <ArrowRight
                          className={`w-4 h-4 transition-transform ${
                            isActive
                              ? "text-[#a4223a] translate-x-1"
                              : "text-slate-400 opacity-0 group-hover:opacity-100"
                          }`}
                        />
                      </div>
                      <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                        {item.shortDesc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT: Dynamic Display Box (Col-7) */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/80 shadow-xl relative min-h-[380px] flex flex-col justify-between overflow-hidden">
            
            {/* Background Accent Lines */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-full pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="space-y-6 relative z-10"
              >
                {/* Active Sector Icon & Title */}
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-red-50 text-[#a4223a] rounded-xl font-bold">
                    <activeTab.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#a4223a]">
                      Selected Sector
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                      {activeTab.title}
                    </h3>
                  </div>
                </div>

                {/* Detailed Description */}
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                  {activeTab.fullDesc}
                </p>

                {/* Key Deliverables Bullet List */}
                <div className="pt-4 border-t border-slate-100">
                  <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-3">
                    Key Focus Areas & Support:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeTab.highlights.map((point, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                        <CheckCircle2 className="w-4 h-4 text-[#a4223a] shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
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