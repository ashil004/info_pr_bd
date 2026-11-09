"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  Calendar, 
  Users, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  Plus, 
  Heart, 
  Gift, 
  Music, 
  Camera, 
  PartyPopper,
  Bookmark as BookmarkIcon, 
  Share2 as ShareIcon, 
  Target as TargetIcon
} from "lucide-react";

export default function EventManagementPage() {
  // --- 1. Event Category Filter State ---
  const [activeCategory, setActiveCategory] = useState("all");

  const eventServices = [
    {
      category: "personal",
      icon: PartyPopper,
      title: "Birthday & Milestone Parties",
      desc: "Theme-based stage design, balloon & floral decor, customized cake setup, entertainment, DJ, and professional photography for kids & adult birthdays.",
    },
    {
      category: "personal",
      icon: Heart,
      title: "Weddings, Halud & Reception",
      desc: "Complete end-to-end wedding management, Mehendi/Halud stage decor, lighting setups, catering, bride-groom entry concepts, and photography/cinematography.",
    },
    {
      category: "personal",
      icon: Gift,
      title: "Anniversaries & Family Galas",
      desc: "Intimate family gatherings, anniversary dinners, reunion celebrations, and special milestone surprise party arrangements.",
    },
    {
      category: "corporate",
      icon: Calendar,
      title: "Corporate Dinners & AGMs",
      desc: "Annual general meetings, executive dinners, dealer meets, employee appreciation nights, and corporate milestone celebrations.",
    },
    {
      category: "corporate",
      icon: Music,
      title: "Concerts & Cultural Shows",
      desc: "Artist booking, high-end sound and stage lighting setup, venue permissions, security management, and ticketed/private live shows.",
    },
    {
      category: "corporate",
      icon: Camera,
      title: "Product Launches & Exhibitions",
      desc: "High-impact brand unveilings, pavilion/stall fabrication, LED screen setups, media coverage, and interactive customer activation events.",
    },
  ];

  const filteredServices = activeCategory === "all" 
    ? eventServices 
    : eventServices.filter((s) => s.category === activeCategory);

  // --- 2. FAQ Accordion State ---
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const faqs = [
    {
      question: "Do you organize private family events like Birthdays and Weddings?",
      answer:
        "Yes! We offer complete end-to-end management for birthday celebrations, Holud, wedding receptions, and family anniversaries—including custom theme decoration, catering, sound, lighting, and photography.",
    },
    {
      question: "How far in advance should we book a birthday or wedding event?",
      answer:
        "For birthday parties and small family events, we recommend booking 1 to 2 weeks prior. For grand weddings or large corporate events, booking 3 to 4 weeks in advance ensures the best venue and decor availability.",
    },
    {
      question: "Can we customize the theme, decor, and budget for our party?",
      answer:
        "Absolutely! We design customized packages tailored specifically to your theme, guest count, venue choice, and budget constraints without compromising quality.",
    },
    {
      question: "Do you provide catering, photography, and sound setup?",
      answer:
        "Yes, we provide full vendor management. Our packages include premium catering, professional DSLR photography/cinematography, DJ/sound systems, and custom stage lighting.",
    },
  ];

  // --- 3. Experience Timeline Data ---
  const experiences = [
    {
      id: "01",
      number: "250+",
      statLabel: "Events Executed",
      icon: BookmarkIcon,
      title: "250+ Successful Family & Corporate Events",
      description:
        "From grand wedding receptions and magical birthday parties to corporate gala nights, we have delivered memorable experiences across Dhaka and major cities in BD.",
    },
    {
      id: "02",
      number: "100%",
      statLabel: "Custom Management",
      icon: Users,
      title: "Dedicated Event Managers & Stylists",
      description:
        "Our creative theme designers, decor specialists, and event managers handle every single detail so you can enjoy your special day completely stress-free.",
    },
    {
      id: "03",
      number: "50+",
      statLabel: "Trusted Vendors",
      icon: ShareIcon,
      title: "Top Catering, Venue & Artist Network",
      description:
        "We partner with Bangladesh’s finest convention halls, top caterers, stage decorators, and performers to guarantee high quality at competitive rates.",
    },
    {
      id: "04",
      number: "100%",
      statLabel: "Client Satisfaction",
      icon: TargetIcon,
      title: "Flawless On-Time Execution",
      description:
        "We pride ourselves on punctuality, pristine decor setup, guest hospitality, and smooth event coordination from start to finish.",
    },
  ];

  return (
    <div className="w-full bg-white text-slate-800 font-sans">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-slate-900 text-white py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        {/* Soft Maroon Radial Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#a4223a]/30 rounded-full blur-3xl pointer-events-none -translate-y-1/3 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#a4223a]/20 rounded-full blur-3xl pointer-events-none translate-y-1/3 -translate-x-1/3" />

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#a4223a]/20 border border-[#a4223a]/40 text-red-300 text-xs font-bold uppercase tracking-wider mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#a4223a]" />
            <span>Unforgettable Personal & Corporate Events</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight"
          >
            Full-Service Event Management <span className="text-[#a4223a]">in Bangladesh</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-slate-300 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            From magical birthday parties, weddings, and family anniversaries to corporate galas and grand product launches — we turn your visions into extraordinary celebrations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <a
              href="#services"
              className="px-8 py-4 rounded-xl bg-[#a4223a] text-white font-bold text-base hover:bg-red-800 transition-all shadow-lg shadow-red-950/40 flex items-center gap-2"
            >
              Explore Our Services <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#faqs"
              className="px-8 py-4 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-200 font-bold text-base hover:bg-slate-800 hover:text-white transition-all"
            >
              Frequently Asked Questions
            </a>
          </motion.div>
        </div>
      </section>

      {/* ================= WHAT WE DELIVER (SERVICES) ================= */}
      <section id="services" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#a4223a] bg-red-50 px-3.5 py-1.5 rounded-full uppercase tracking-wider inline-block mb-3">
              WHAT WE DELIVER
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Event Solutions for Every Occasion
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg">
              Whether it’s an intimate birthday party or a corporate brand launch, we handle decor, venue, catering, and entertainment.
            </p>

            {/* Category Filter Buttons */}
            <div className="mt-8 flex justify-center gap-3">
              {[
                { id: "all", label: "All Events" },
                { id: "personal", label: "Personal & Family (Birthdays/Weddings)" },
                { id: "corporate", label: "Corporate & PR Events" },
              ].map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => setActiveCategory(btn.id)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                    activeCategory === btn.id
                      ? "bg-[#a4223a] text-white shadow-md shadow-red-900/20"
                      : "bg-white text-slate-600 border border-slate-200 hover:border-red-200 hover:text-[#a4223a]"
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, idx) => {
              const ServiceIcon = service.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -6 }}
                  className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#a4223a]/30 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-red-50 text-[#a4223a] flex items-center justify-center mb-6 group-hover:bg-[#a4223a] group-hover:text-white transition-colors duration-300">
                      <ServiceIcon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#a4223a] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#a4223a]">
                    <span>Custom Planning</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= EXPERIENCES TIMELINE ================= */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-red-50 text-[#a4223a] text-xs font-black uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PROVEN TRACK RECORD</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Our Experience as Event Organizers in BD
            </h2>
            <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              We handle each birthday, wedding, and corporate function with creativity and precision.
            </p>
          </div>

          <div className="relative">
            {/* Center Vertical Connecting Line */}
            <div className="absolute left-6 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#a4223a] via-red-200 to-transparent -translate-x-1/2 hidden sm:block" />

            <div className="space-y-12 sm:space-y-16">
              {experiences.map((item, index) => {
                const IconComponent = item.icon;
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={`relative flex flex-col sm:flex-row items-center gap-8 ${
                      isEven ? "sm:flex-row-reverse text-left" : "text-left"
                    }`}
                  >
                    <div className="w-full sm:w-1/2 group">
                      <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:border-red-100 transition-all duration-300">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#a4223a] flex items-center justify-center group-hover:bg-[#a4223a] group-hover:text-white transition-colors duration-300">
                            <IconComponent className="w-6 h-6" />
                          </div>
                          <div>
                            <span className="text-2xl font-black text-[#a4223a]">
                              {item.number}
                            </span>
                            <span className="text-xs font-bold text-slate-400 block uppercase tracking-wider">
                              {item.statLabel}
                            </span>
                          </div>
                        </div>

                        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 group-hover:text-[#a4223a] transition-colors">
                          {item.title}
                        </h3>

                        <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Timeline Bullet Node */}
                    <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-4 border-[#a4223a] shadow-md hidden sm:flex items-center justify-center z-10">
                      <div className="w-3 h-3 rounded-full bg-[#a4223a]" />
                    </div>

                    <div className="w-full sm:w-1/2 hidden sm:block" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQs ACCORDION ================= */}
      <section id="faqs" className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-red-50 text-[#a4223a] text-xs font-black uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>GOT QUESTIONS?</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              FAQs About Event Management
            </h2>
            <p className="mt-4 text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
              Find answers to common questions about birthday planning, wedding setups, catering, and budget options.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-2xl transition-all duration-300 border ${
                    isOpen
                      ? "bg-white border-[#a4223a]/30 shadow-xl shadow-red-900/5"
                      : "bg-white/80 hover:bg-white border-slate-200/80 shadow-sm"
                  }`}
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span
                      className={`text-base sm:text-lg font-bold transition-colors ${
                        isOpen ? "text-[#a4223a]" : "text-slate-900 hover:text-[#a4223a]"
                      }`}
                    >
                      {faq.question}
                    </span>
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
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}