"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BarChart3, 
  Newspaper, 
  ShieldCheck, 
  Award, 
  Sparkles, 
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Globe2,
  Lock,
  Zap,
  ChevronDown
} from "lucide-react";

export default function LandingPublicRelation() {
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const [mobileExpandedIndex, setMobileExpandedIndex] = useState(0);

  const pillars = [
    {
      id: "01",
      icon: BarChart3,
      tag: "Data & Strategy",
      badgeIcon: Zap,
      title: "Data-Driven & Story-Led Campaigns",
      shortText: "Analytics meets creative narrative for high-impact brand placement.",
      description:
        "We combine deep data insights with creative narrative design to craft PR campaigns that resonate deeply with target audiences, protect brand integrity, and deliver trackable business outcomes.",
      points: [
        "Audience Behavior Analysis",
        "Strategic Brand Positioning",
        "Measurable Engagement Metrics"
      ],
      metric: "98% Campaign Accuracy",
      accentColor: "from-[#a4223a] to-rose-600"
    },
    {
      id: "02",
      icon: Newspaper,
      tag: "Media Access",
      badgeIcon: Globe2,
      title: "Media Relationships That Work",
      shortText: "Direct line to top national press, news portals & media hubs.",
      description:
        "Our strong and long-standing relationships with top national news portals, magazines, and journalists ensure your press announcements get rapid placement and maximum credibility.",
      points: [
        "Tier-1 Bangladesh Outlets",
        "Fast-Track Press Releases",
        "Journalist Outreach Network"
      ],
      metric: "50+ Top Outlets",
      accentColor: "from-rose-600 to-red-500"
    },
    {
      id: "03",
      icon: ShieldCheck,
      tag: "100% Trust",
      badgeIcon: Lock,
      title: "Full Transparency with Clients",
      shortText: "Real-time coverage reports and verified metrics with zero fluff.",
      description:
        "We keep you informed at every phase of your campaign. Receive live dashboards, verified coverage links, and real-time reach metrics without ambiguity.",
      points: [
        "Live Coverage Dashboards",
        "Verified Backlink Records",
        "Weekly Impact Audits"
      ],
      metric: "100% Transparency",
      accentColor: "from-red-600 to-amber-600"
    },
    {
      id: "04",
      icon: Award,
      tag: "Proven Track",
      badgeIcon: TrendingUp,
      title: "Proven Results Across Industries",
      shortText: "Tailored approaches tested across tech, corporate, and retail.",
      description:
        "Having successfully scaled visibility for hundreds of brands in tech, e-commerce, healthcare, and finance, our strategies are tried, tested, and tailored to win.",
      points: [
        "Multi-Industry Expertise",
        "High Domain Authority PR",
        "Sustainable SEO Lift"
      ],
      metric: "300+ Successful Campaigns",
      accentColor: "from-slate-900 to-[#a4223a]"
    },
  ];

  const toggleMobileAccordion = (index) => {
    setMobileExpandedIndex(mobileExpandedIndex === index ? null : index);
  };

  return (
    <section className="py-12 sm:py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      
      {/* Background Decor Lights */}
      <div className="absolute top-1/3 -left-20 sm:left-10 w-64 sm:w-96 h-64 sm:h-96 bg-red-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-rose-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-[#a4223a] text-xs font-black uppercase tracking-wider mb-3 sm:mb-4 border border-red-100">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Why Choose Info PR</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            What Makes Info PR a Leading Digital PR Agency in <span className="text-[#a4223a]">BD?</span>
          </h2>

          <p className="mt-3 sm:mt-4 text-slate-600 text-xs sm:text-base leading-relaxed">
            Our Digital PR Agency in Bangladesh uses highly effective approaches for strong media relationships and top-tier coverage:
          </p>
        </motion.div>

        {/* --- HORIZONTAL ACCORDION EXPANDABLE SHOWCASE (DESKTOP ONLY) --- */}
        <div className="hidden lg:flex gap-4 h-[480px] max-w-6xl mx-auto">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            const BadgeIcon = item.badgeIcon;
            const isExpanded = hoveredIndex === index;

            return (
              <motion.div
                key={item.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onClick={() => setHoveredIndex(index)}
                animate={{
                  flex: isExpanded ? 3.5 : 1,
                }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 border ${
                  isExpanded
                    ? "bg-white border-[#a4223a]/30 shadow-2xl shadow-red-950/10"
                    : "bg-white/70 border-slate-200 hover:border-slate-300"
                }`}
              >
                {/* Active Top Accent Line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${item.accentColor} transition-opacity duration-300 ${
                    isExpanded ? "opacity-100" : "opacity-0"
                  }`}
                />

                {/* COLLAPSED STATE VIEW */}
                {!isExpanded && (
                  <div className="h-full w-full p-6 flex flex-col justify-between items-center text-center">
                    <span className="text-xs font-black tracking-widest text-[#a4223a] uppercase">
                      {item.id}
                    </span>

                    <div className="flex flex-col items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-red-50 text-[#a4223a] flex items-center justify-center">
                        <Icon className="w-7 h-7" />
                      </div>
                      <h3 className="text-lg font-black text-slate-900 writing-mode-vertical rotate-180 tracking-wide line-clamp-1">
                        {item.title}
                      </h3>
                    </div>

                    <div className="w-2 h-2 rounded-full bg-slate-300" />
                  </div>
                )}

                {/* EXPANDED STATE VIEW */}
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="h-full p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden"
                  >
                    <Icon className="absolute -bottom-8 -right-8 w-60 h-60 text-slate-100/70 pointer-events-none select-none" />

                    <div>
                      {/* Top Bar */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl bg-[#a4223a] text-white flex items-center justify-center shadow-md shadow-red-950/20">
                            <Icon className="w-6 h-6" />
                          </div>
                          <div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-[#a4223a]">
                              Pillar {item.id}
                            </span>
                            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500">
                              <BadgeIcon className="w-3.5 h-3.5 text-[#a4223a]" />
                              <span>{item.tag}</span>
                            </div>
                          </div>
                        </div>

                        <span className="text-xs font-black text-[#a4223a] bg-red-50 border border-red-100 px-3 py-1 rounded-full">
                          {item.metric}
                        </span>
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-2xl font-black text-slate-900 leading-snug">
                        {item.title}
                      </h3>
                      
                      <p className="mt-3 text-slate-600 text-sm leading-relaxed max-w-lg">
                        {item.description}
                      </p>

                      {/* Bullet Highlights */}
                      <div className="mt-6 space-y-2.5">
                        {item.points.map((pt, i) => (
                          <div key={i} className="flex items-center gap-2.5 text-xs font-bold text-slate-800">
                            <CheckCircle2 className="w-4 h-4 text-[#a4223a] shrink-0" />
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action */}
                    <div className="pt-6 border-t border-slate-100 flex items-center justify-between relative z-10">
                      <span className="text-xs font-medium text-slate-400">
                        Hover adjacent tiles to explore more
                      </span>

                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-white bg-[#a4223a] hover:bg-[#801326] px-5 py-2.5 rounded-xl transition-all shadow-md shadow-red-950/10"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* --- MODERN ACCORDION SHOWCASE (MOBILE & TABLET SCREENS) --- */}
        <div className="flex lg:hidden flex-col gap-3.5">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            const BadgeIcon = item.badgeIcon;
            const isOpen = mobileExpandedIndex === index;

            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-white border-[#a4223a]/30 shadow-xl shadow-red-950/5"
                    : "bg-white/80 border-slate-200 hover:border-slate-300"
                }`}
              >
                {/* Header / Clickable Area */}
                <button
                  onClick={() => toggleMobileAccordion(index)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-3 focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${
                        isOpen
                          ? "bg-[#a4223a] text-white shadow-md shadow-red-900/15"
                          : "bg-red-50 text-[#a4223a]"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#a4223a]">
                          Pillar {item.id}
                        </span>
                        <span className="text-[10px] font-bold text-slate-400">•</span>
                        <span className="text-[10px] font-bold text-slate-500 flex items-center gap-1">
                          <BadgeIcon className="w-3 h-3 text-[#a4223a]" />
                          {item.tag}
                        </span>
                      </div>
                      <h3 className="text-sm sm:text-base font-black text-slate-900 leading-snug mt-0.5">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <div
                    className={`w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-600 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-red-50 text-[#a4223a]" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Collapsible Content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-4 pb-5 sm:px-5 pt-0 border-t border-slate-100/80 mt-1">
                        
                        {/* Short Description */}
                        <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {item.description}
                        </p>

                        {/* Deliverable Highlights */}
                        <div className="mt-4 space-y-2 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                          {item.points.map((pt, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#a4223a] shrink-0" />
                              <span>{pt}</span>
                            </div>
                          ))}
                        </div>

                        {/* Card Bottom Stats & CTA */}
                        <div className="mt-4 pt-3 flex items-center justify-between border-t border-slate-100 text-xs">
                          <span className="font-extrabold text-[#a4223a] bg-red-50 px-2.5 py-1 rounded-md text-[11px]">
                            {item.metric}
                          </span>

                          <a
                            href="#contact"
                            className="inline-flex items-center gap-1.5 font-black text-xs text-white bg-[#a4223a] px-3.5 py-1.5 rounded-lg shadow-sm"
                          >
                            <span>Learn More</span>
                            <ArrowRight className="w-3 h-3" />
                          </a>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}