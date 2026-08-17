"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Building2, 
  Camera, 
  Palette, 
  Video, 
  Headphones, 
  FileText,
  ArrowUpRight 
} from "lucide-react";

export default function PcThirdSection() {
  const servicesData = [
    {
      id: "01",
      icon: Building2,
      title: "Venue Selection & Setup",
      description:
        "We help you select a venue that fits your brand and audience. Plus, our team handles the full setup to make an effective and comfortable space to host a press briefing.",
    },
    {
      id: "02",
      icon: Camera,
      title: "Media Invite & Coverage",
      description:
        "We connect with the press and invite the right media. Our team also ensures your press event gets wide, meaningful coverage for the brand launch and digital platforms.",
    },
    {
      id: "03",
      icon: Palette,
      title: "Branding & Backdrop Design",
      description:
        "We design banners, backdrops, and logos that match your message. With this plan, your brand will look professional and stay in the minds of all attendees and media.",
    },
    {
      id: "04",
      icon: Video,
      title: "Stage & AV Management",
      description:
        "We take care of stage design, sound, and lighting. In fact, our agency ensures that every speaker is seen and heard clearly with proper setup for press management.",
    },
    {
      id: "05",
      icon: Headphones,
      title: "Guest Handling & Protocol Support",
      description:
        "Our trained team welcomes guests, manages protocol, and ensures VIPs are respected. We maintain a friendly and organized environment from start to end.",
    },
    {
      id: "06",
      icon: FileText,
      title: "Press Kit Preparation & Distribution",
      description:
        "We prepare press kits with the right info, images, and materials. Plus, our team helps distribute them to cover your event accurately across all platforms.",
    },
  ];

  // Framer Motion Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
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
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background Glow Overlay */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-50/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-100/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-red-50 text-[#a4223a] text-xs font-extrabold uppercase tracking-wider mb-3">
            What We Deliver
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Our Press Conference Services
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            We give you all the resources to hold press activities that actually work. As top Press Conference Organizers in BD, we offer comprehensive services:
          </p>
        </motion.div>

        {/* 3x2 Grid Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicesData.map((item) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="group relative bg-slate-50/60 hover:bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Top Border Highlight on Hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#a4223a] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Background Watermark Number */}
                <span className="absolute -right-2 -top-2 text-7xl font-black text-slate-200/40 group-hover:text-red-100/50 transition-colors pointer-events-none select-none">
                  {item.id}
                </span>

                <div>
                  {/* Icon Wrapper */}
                  <div className="w-14 h-14 rounded-2xl bg-white group-hover:bg-[#a4223a] text-[#a4223a] group-hover:text-white flex items-center justify-center shadow-md border border-slate-100 transition-all duration-300 mb-6">
                    <IconComponent className="w-7 h-7" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-[#a4223a] transition-colors duration-200">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Action Link */}
                <div className="mt-8 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-slate-500 group-hover:text-[#a4223a] transition-colors">
                  
                  <div className="p-1.5 rounded-full bg-slate-100 group-hover:bg-red-50 text-slate-600 group-hover:text-[#a4223a] transition-all">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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