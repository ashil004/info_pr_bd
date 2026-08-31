"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, ChevronUp, Sparkles } from "lucide-react";

export default function FqasBrand() {
  const [openIndex, setOpenIndex] = useState(0);

  // Brand Launch FAQ Content
  const faqData = [
    {
      question: "How long does it take to prepare the press release?",
      answer:
        "It takes us a few working days to prepare, write, and finalize your press release. However, this can be longer or shorter based on your goals."
    },
    {
      question: "Will my launch be featured in top media outlets?",
      answer:
        "Yes, your launch will be featured in the top media outlets. We also increase chances through strong journalist connections and the press."
    },
    {
      question: "Do you support launches outside Dhaka?",
      answer:
        "Yes, our service covers all of Bangladesh. In fact, we ensure your launch gets media coverage in any city or region you target."
    },
    {
      question: "Can you arrange a launch event or press briefing?",
      answer:
        "Yes, we can arrange a launch event or press briefing. With that, our team launches ceremonies to give your announcement extra attention and credibility."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 sm:py-28 bg-white text-slate-900 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- HEADER SECTION --- */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-[#a4223a] text-xs font-black uppercase tracking-wider mb-4 border border-red-100">
            <Sparkles className="w-3.5 h-3.5 text-[#a4223a]" />
            <span>Got Questions?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            FAQs About <span className="text-[#a4223a]">Brand Launch Press Release Services</span>
          </h2>

          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Everything you need to know about our reputation and brand launch management services to elevate your brand.
          </p>
        </motion.div>

        {/* --- MATCHED BRAND FAQ CARDS --- */}
        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-slate-50/80 border-red-200 shadow-sm"
                    : "bg-white border-slate-200/80 hover:border-slate-300"
                }`}
              >
                {/* FAQ Header / Toggle Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-5 sm:p-6 flex items-center justify-between text-left group gap-4 focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    {/* Left Question Circle Icon */}
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                      isOpen
                        ? "bg-[#a4223a] text-white"
                        : "bg-red-50 text-[#a4223a] group-hover:bg-[#a4223a] group-hover:text-white"
                    }`}>
                      <HelpCircle className="w-5 h-5" />
                    </div>

                    {/* Question Title */}
                    <span className={`text-base sm:text-lg font-extrabold transition-colors duration-300 ${
                      isOpen ? "text-[#a4223a]" : "text-slate-900 group-hover:text-[#a4223a]"
                    }`}>
                      {faq.question}
                    </span>
                  </div>

                  {/* Right Arrow Chevron */}
                  <div className="text-slate-400 group-hover:text-[#a4223a] transition-colors flex-shrink-0">
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-[#a4223a]" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </button>

                {/* FAQ Expanded Answer */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-slate-200/60 ml-[52px]">
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                          {faq.answer}
                        </p>
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