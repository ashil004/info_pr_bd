"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Bookmark, 
  FileSpreadsheet, 
  Send, 
  Eye, 
  TrendingUp, 
  FileText, 
  Sparkles,
  CheckCircle2,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

export default function OurDigitalPrProcess() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: "01",
      icon: Bookmark,
      title: "Understanding Your Brand Message",
      subtitle: "In-depth Discovery & Brand Analysis",
      description:
        "We learn about your goals, target audience, and core values to craft a distinct PR narrative that truly represents your brand in the market.",
      keyOutputs: ["Audience Persona Mapping", "Core Brand Narrative", "Goal Alignment"]
    },
    {
      step: "02",
      icon: FileSpreadsheet,
      title: "Creating the Right PR Strategy",
      subtitle: "Data-Driven Campaign Planning",
      description:
        "Our team designs a personalized, high-impact PR plan tailored to your brand's specific needs, media opportunities, and industry trends.",
      keyOutputs: ["Custom PR Roadmap", "Target Media Outlets", "Campaign Timeline"]
    },
    {
      step: "03",
      icon: Send,
      title: "Reaching the Right Online Platforms",
      subtitle: "Targeted Media Outreach",
      description:
        "We pitch and distribute your story across top-tier online news portals, leading blogs, and relevant industry influencers for maximum exposure.",
      keyOutputs: ["Press Release Outreach", "Journalist Pitching", "Influencer Placement"]
    },
    {
      step: "04",
      icon: Eye,
      title: "Tracking Coverage & Performance",
      subtitle: "Real-Time Media Monitoring",
      description:
        "We track live coverage, backlinks, and brand mentions across all digital channels to measure real-time engagement and reach.",
      keyOutputs: ["Live Media Tracking", "Brand Mention Analysis", "Backlink Verification"]
    },
    {
      step: "05",
      icon: TrendingUp,
      title: "Optimizing Based on Results",
      subtitle: "Campaign Refinement & Scaling",
      description:
        "We continuously analyze performance metrics and fine-tune our approach to ensure your campaign delivers maximum ROI and visibility.",
      keyOutputs: ["A/B Pitch Testing", "Channel Strategy Optimization", "ROI Enhancements"]
    },
    {
      step: "06",
      icon: FileText,
      title: "Reporting & Transparency",
      subtitle: "Comprehensive Impact Analytics",
      description:
        "We provide detailed, easy-to-read performance reports so you have total clarity on campaign metrics, placements, and total reach.",
      keyOutputs: ["Transparent Coverage Report", "Audience Reach Metrics", "Final Campaign Insights"]
    },
  ];

  const current = steps[activeStep];
  const CurrentIcon = current.icon;

  const handleNext = () => {
    setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1));
  };

  return (
    <section className="py-12 sm:py-20 lg:py-28 bg-slate-50/70 text-slate-900 relative overflow-hidden">
      
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[700px] h-[300px] sm:h-[700px] bg-red-100/40 rounded-full blur-[90px] sm:blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-red-50 text-[#a4223a] text-[11px] sm:text-xs font-black uppercase tracking-wider mb-3 sm:mb-4 border border-red-100">
            <Sparkles className="w-3.5 h-3.5" />
            <span>How Info PR Works</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Our Digital PR <span className="text-[#a4223a]">Workflow Process</span>
          </h2>

          <p className="mt-2 sm:mt-4 text-slate-600 text-xs sm:text-base leading-relaxed">
            Click through the workflow steps below to see how we transform your brand narrative into high-authority media coverage:
          </p>
        </motion.div>

        {/* --- STEP SELECTOR BAR (Scrollable Track for Mobile) --- */}
        <div className="mb-8 sm:mb-12 overflow-x-auto pb-4 pt-1 no-scrollbar sm:scrollbar-none">
          <div className="flex items-center justify-between min-w-[620px] sm:min-w-[700px] border-b border-slate-200/80 pb-5 sm:pb-6 relative px-2">
            
            {steps.map((item, index) => {
              const isActive = activeStep === index;

              return (
                <button
                  key={item.step}
                  onClick={() => setActiveStep(index)}
                  className="flex flex-col items-center gap-2 sm:gap-3 transition-all duration-300 relative group focus:outline-none shrink-0"
                >
                  {/* Step Number Circle */}
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center font-black text-xs sm:text-sm transition-all duration-300 ${
                      isActive
                        ? "bg-[#a4223a] text-white shadow-lg shadow-red-950/15 scale-105 sm:scale-110"
                        : "bg-white text-slate-500 border border-slate-200 hover:border-slate-300 hover:text-slate-900 shadow-sm"
                    }`}
                  >
                    {item.step}
                  </div>

                  {/* Step Label */}
                  <span
                    className={`text-[11px] sm:text-xs font-bold transition-colors duration-300 max-w-[80px] sm:max-w-[100px] text-center ${
                      isActive ? "text-[#a4223a]" : "text-slate-400 group-hover:text-slate-700"
                    }`}
                  >
                    Step {item.step}
                  </span>

                  {/* Active Indicator Bar */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTimelineBarLight"
                      className="absolute -bottom-[21px] sm:-bottom-[25px] w-full h-1 bg-[#a4223a] rounded-full"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* --- DYNAMIC DISPLAY SPOTLIGHT CARD --- */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-slate-200/90 rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12 relative overflow-hidden shadow-xl shadow-red-950/5"
            >
              {/* Background Number Watermark */}
              <span className="absolute -bottom-6 -right-2 sm:-bottom-10 sm:-right-5 text-7xl sm:text-9xl font-black text-slate-100/80 select-none pointer-events-none">
                {current.step}
              </span>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center relative z-10">
                
                {/* Left Info Column */}
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-2 text-[#a4223a] font-bold text-[11px] sm:text-xs uppercase tracking-widest mb-2 sm:mb-3">
                    <CurrentIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                    <span>{current.subtitle}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 leading-snug">
                    {current.title}
                  </h3>

                  <p className="mt-2.5 sm:mt-4 text-slate-600 text-xs sm:text-base leading-relaxed">
                    {current.description}
                  </p>
                </div>

                {/* Right Key Deliverables Column */}
                <div className="lg:col-span-5 bg-slate-50/90 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-200/70">
                  <h4 className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-slate-400 mb-3 sm:mb-4">
                    Key Deliverables in Phase {current.step}:
                  </h4>

                  <div className="space-y-2.5 sm:space-y-3">
                    {current.keyOutputs.map((output, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm font-semibold text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#a4223a] shrink-0" />
                        <span>{output}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Mobile Quick Navigation Controls */}
              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-slate-100 flex items-center justify-between text-xs relative z-10">
                <button
                  onClick={handlePrev}
                  className="flex items-center gap-1 font-bold text-slate-500 hover:text-[#a4223a] transition-colors focus:outline-none"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                <span className="text-[11px] font-black text-slate-400">
                  {activeStep + 1} of {steps.length}
                </span>

                <button
                  onClick={handleNext}
                  className="flex items-center gap-1 font-bold text-[#a4223a] hover:text-[#801326] transition-colors focus:outline-none"
                >
                  <span>Next Step</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}