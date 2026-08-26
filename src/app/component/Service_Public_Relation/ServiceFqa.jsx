"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  HelpCircle, 
  Plus, 
  Minus, 
  Headphones, 
  ArrowRight,
  Sparkles
} from "lucide-react";

export default function ServiceFqa() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What's the difference between digital PR and traditional PR?",
      answer:
        "The difference between digital and traditional PR is the channels used. Digital PR uses online tools like websites, tech portals, blogs, and social media to share your message and build SEO authority. Traditional PR primarily uses offline tools like printed newspapers, TV, and radio.",
    },
    {
      question: "How long does it take to see results?",
      answer:
        "It can take a few weeks to a few months to see the full long-term SEO and brand impact using digital PR. However, press release placements and immediate media coverage often go live within 48 to 72 hours. At Info PR, we aim for early wins and share regular performance reports.",
    },
    {
      question: "Can digital PR help improve my brand image?",
      answer:
        "Yes, absolutely! Digital PR places your brand stories on trusted and high-authority media portals. This builds supreme credibility, improves organic search ranking, and shapes a strong, reliable public identity.",
    },
    {
      question: "Do you offer customized PR packages?",
      answer:
        "Yes! Info PR provides fully customizable PR packages tailored to your specific budget, targeted industry, and campaign goals. You can reach out to our strategy team to build a tailored plan for your brand.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      
      {/* Background Decor Ambient Spheres */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-red-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-80 h-80 bg-rose-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-[#a4223a] text-xs font-black uppercase tracking-wider mb-4 border border-red-100">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            FAQs About Digital PR Services in <span className="text-[#a4223a]">Bangladesh</span>
          </h2>

          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Everything you need to know about our PR solutions, strategy, and media coverage processes.
          </p>
        </motion.div>

        {/* --- ACCORDION LIST --- */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.08 }}
                className={`relative rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-white border-[#a4223a]/30 shadow-xl shadow-red-950/5"
                    : "bg-white/80 border-slate-200/80 hover:border-slate-300 hover:bg-white"
                }`}
              >
                {/* Active Left Indicator Strip */}
                {isOpen && (
                  <motion.div
                    layoutId="activeFaqIndicator"
                    className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#a4223a]"
                  />
                )}

                {/* Question Header Button */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${
                        isOpen
                          ? "bg-red-50 text-[#a4223a]"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      <HelpCircle className="w-5 h-5" />
                    </div>

                    <span className="text-base sm:text-lg font-extrabold text-slate-900 leading-snug">
                      {faq.question}
                    </span>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "bg-[#a4223a] text-white rotate-180"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {/* Answer Content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-0 text-slate-600 text-sm sm:text-base leading-relaxed pl-16">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        
        

      </div>
    </section>
  );
}