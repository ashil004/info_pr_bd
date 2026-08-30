"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, Sparkles, MessageCircle } from "lucide-react";

export default function FqaContentConsultancy() {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const faqs = [
    {
      question: "What is content consultancy?",
      answer:
        "Content consultancy is a solution that experts suggest to plan, make, and improve content creation. Plus, it guides brands to advance their content strategy to ensure growth."
    },
    {
      question: "How is it different from content writing?",
      answer:
        "Content writing means making the content. On the other hand, content consultancy is to suggest, analyze, and improve the content with a solid plan."
    },
    {
      question: "How long does it take to see results?",
      answer:
        "It can take a few months to half a year to see the real result on content consultancy plans. However, some can see the changes in a month based on goals."
    },
    {
      question: "Is content consultancy suitable for small businesses?",
      answer:
        "Yes, it is suitable for small businesses to grow faster. With the right content plan, we can help small brands reach more clients and make a strong place in the market."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-24 bg-white text-slate-900 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- SECTION HEADER --- */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-[#a4223a] text-xs font-black uppercase tracking-wider mb-4 border border-red-100">
            <Sparkles className="w-3.5 h-3.5 text-[#a4223a]" />
            <span>Got Questions?</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            FAQs About Content Consultancy <span className="text-[#a4223a]">in Bangladesh</span>
          </h2>

          <p className="mt-3 text-slate-600 text-xs sm:text-base leading-relaxed">
            Everything you need to know about how our consultancy services add value to your business.
          </p>
        </motion.div>

        {/* --- MODERN BORDERLESS ACCORDION LIST --- */}
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
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? "bg-slate-50 border-[#a4223a]/30 shadow-xs"
                    : "bg-white border-slate-200/80 hover:border-slate-300"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none group"
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${
                        isOpen
                          ? "bg-[#a4223a] text-white"
                          : "bg-red-50 text-[#a4223a] group-hover:bg-red-100"
                      }`}
                    >
                      <HelpCircle className="w-4 h-4" />
                    </div>

                    <h3
                      className={`text-base sm:text-lg font-black transition-colors ${
                        isOpen ? "text-[#a4223a]" : "text-slate-900 group-hover:text-[#a4223a]"
                      }`}
                    >
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-180 text-[#a4223a]" : "text-slate-400 group-hover:text-slate-600"
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 pt-0 sm:px-6 sm:pb-6 pl-[3.25rem] text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 mt-1 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* --- BOTTOM CTA HELP BOX --- */}
        

      </div>
    </section>
  );
}