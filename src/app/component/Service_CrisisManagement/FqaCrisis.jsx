"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, Sparkles } from "lucide-react";

export default function FqaCrisis() {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const faqs = [
    {
      question: "How fast can you respond to a crisis?",
      answer:
        "We respond immediately to a crisis to solve it and build a strong image. Our team is also trained to act within hours when needed."
    },
    {
      question: "Can you remove negative news from Google?",
      answer:
        "No, we can't directly delete news. Instead, Info PR uses plans to lessen reach and push positive content to save your image."
    },
    {
      question: "Do you help with social media reputation issues?",
      answer:
        "Yes, we help you with social media reputation issues. For that, our team handles negative press and restores a positive social presence."
    },
    {
      question: "What industries do you specialize in?",
      answer:
        "We specialize in taking care of your public image and press with media relations. For that, we use journalism and marketing tricks to help you out."
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#a4223a]/10 text-[#a4223a] text-xs font-black uppercase tracking-wider mb-4 border border-[#a4223a]/20">
            <Sparkles className="w-3.5 h-3.5 text-[#a4223a]" />
            <span>Got Questions?</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            FAQs About Reputation and <span className="text-[#a4223a]">Crisis Management</span>
          </h2>

          <p className="mt-3 text-slate-600 text-xs sm:text-base leading-relaxed">
            Everything you need to know about how our reputation and crisis management services protect your brand.
          </p>
        </motion.div>

        {/* --- CARD ACCORDION LIST --- */}
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
                          : "bg-[#a4223a]/10 text-[#a4223a] group-hover:bg-[#a4223a]/20"
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

      </div>
    </section>
  );
}