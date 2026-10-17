"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Sparkles } from "lucide-react";

export default function FaqsItsupport() {
  const [openIndex, setOpenIndex] = useState(0); // By default first FAQ is open

  const faqs = [
    {
      question: "What services are included in your Managed IT Support?",
      answer:
        "Our IT support includes 24/7 server monitoring, cloud infrastructure setup (AWS/VPS), bug fixes, database query tuning, SSL management, vulnerability patching, and continuous software updates for web and mobile platforms.",
    },
    {
      question: "How fast does your team respond to critical technical issues?",
      answer:
        "We offer guaranteed SLA response times. For critical server outages or security threats, our technical team responds instantly within 15 to 30 minutes to initiate troubleshooting and restore platform uptime.",
    },
    {
      question: "Do you support custom tech stacks like Next.js, NestJS, or Mobile Apps?",
      answer:
        "Yes! Our engineers specialize in modern full-stack development and DevOps including Next.js, React Native, Node.js, NestJS, Golang, Docker, PostgreSQL, Prisma, MongoDB, Electron, and Machine Learning integrations.",
    },
    {
      question: "How do you ensure data security and prevent outages?",
      answer:
        "We enforce multi-layer security protocols including automated daily database backups, SSL encryption, DDoS protection, firewall setups, and regular vulnerability audits to keep your platform 99.9% online and safe.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-28 bg-slate-50/50 relative overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-red-50 text-[#a4223a] text-xs font-black uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            FAQs About IT Support & Engineering Services
          </h2>

          <p className="mt-4 text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            Find clear answers to common questions regarding server management, platform maintenance, response SLA, and technical infrastructure.
          </p>
        </motion.div>

        {/* --- ACCORDION CONTAINER --- */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? "bg-white border-[#a4223a]/30 shadow-xl shadow-red-900/5"
                    : "bg-white/80 hover:bg-white border-slate-200/80 shadow-sm"
                }`}
              >
                {/* Accordion Header / Question Button */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className={`text-base sm:text-lg font-bold transition-colors duration-300 ${
                    isOpen ? "text-[#a4223a]" : "text-slate-900 hover:text-[#a4223a]"
                  }`}>
                    {faq.question}
                  </span>

                  {/* Toggle Plus/Minus Icon */}
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "bg-[#a4223a] text-white rotate-45"
                        : "bg-red-50 text-[#a4223a]"
                    }`}
                  >
                    <Plus className="w-5 h-5" />
                  </div>
                </button>

                {/* Accordion Answer Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-0 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 mt-1">
                        <p className="pt-4">{faq.answer}</p>
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