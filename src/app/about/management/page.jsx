"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Network, X, Mail, Info, Code, UserCheck } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

// Node Motion Variants
const nodeVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: delay,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

// Line Animation Variants
const lineVariants = {
  hidden: { scaleY: 0, opacity: 0 },
  visible: (delay = 0) => ({
    scaleY: 1,
    opacity: 1,
    transition: { duration: 0.4, delay: delay, ease: "easeOut" },
  }),
};

export default function Management() {
  const { t } = useLanguage();
  const [selectedNode, setSelectedNode] = useState(null);

  // Default Structured Team Data
  const defaultNodes = {
    ceo: {
      title: "CEO",
      category: "EXECUTIVE LEADERSHIP",
      members: [
        {
          name: "Md Asraful Alam",
          role: "Chief Executive Officer",
          email: "ceo@infopr.com",
          description: "Leading the overall strategic direction and business operations.",
          image: "/ceo.jpeg",
        },
      ],
    },
    co_chairman: {
      title: "Co-Chairman",
      category: "BOARD OF DIRECTORS",
      members: [
        {
          name: "Md. Jahangir Alam",
          role: "Co-Chairman",
          email: "cochairman@infopr.com",
          description: "Overseeing board decisions and strategic corporate growth.",
          image: "/co-chairman.jpeg",
        },
      ],
    },
    head_of_it: {
      title: "Head of IT",
      category: "IT & DEVELOPMENT",
      members: [
        {
          name: "Md Ashik Paramanik",
          role: "Head of IT",
          email: "ashik@infopr.com",
          description: "Driving tech innovation, software architecture, and IT operations.",
          image: "/Ashik_Pramanik.jpg",
        },
      ],
    },
  };

  const nodesData = t("ManagementTree.nodes") || defaultNodes;

  const handleNodeClick = (nodeKey) => {
    if (nodesData[nodeKey]) {
      setSelectedNode(nodesData[nodeKey]);
    }
  };

  return (
    <section className="w-full font-sans bg-[#f8fafc] text-slate-900 py-12 sm:py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- HEADER --- */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 sm:space-y-4 mb-10 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100/80 border border-red-200 text-[#be123c] text-xs sm:text-sm font-semibold uppercase tracking-wider">
            <Network className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#be123c]" />
            <span>{t("ManagementTree.badge") || "Organizational Structure"}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            {t("ManagementTree.title_main") || "Info PR"}{" "}
            <span className="text-[#be123c]">
              {t("ManagementTree.title_highlight") || "Team Structure"}
            </span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed px-2">
            {t("ManagementTree.description") || "At Info PR, we believe strong leadership drives innovation and excellence. Our dedicated team structure is committed to delivering the best strategic communications and public relations outcomes for our clients."}
          </p>
        </motion.div>

        {/* --- EXECUTIVE TREE STRUCTURE --- */}
        <div className="flex flex-col items-center justify-center space-y-0 relative py-2 sm:py-4">
          
          {/* LEVEL 1: CEO */}
          <motion.button
            custom={0.1}
            variants={nodeVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNodeClick("ceo")}
            className="w-full sm:w-auto px-8 sm:px-10 py-3.5 rounded-full bg-[#be123c] text-white font-extrabold text-sm sm:text-base md:text-lg shadow-md cursor-pointer z-10 flex items-center justify-center gap-2 transition-all hover:bg-[#9f0f32]"
          >
            <span>{nodesData.ceo?.title || "CEO"}</span>
            <Info className="w-4 h-4 opacity-80" />
          </motion.button>

          {/* Vertical Connecting Line From CEO (Desktop & Tablet) */}
          <motion.div
            custom={0.25}
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="hidden md:block w-0.5 h-10 md:h-12 bg-slate-300 origin-top"
          />

          {/* Horizontal Branch Line for Co-Chairman & Head of IT (Desktop & Tablet) */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden md:block w-[60%] h-0.5 bg-slate-300 relative"
          >
            {/* Left Ticks pointing down */}
            <div className="absolute top-0 left-0 w-0.5 h-8 md:h-10 bg-slate-300" />
            {/* Right Ticks pointing down */}
            <div className="absolute top-0 right-0 w-0.5 h-8 md:h-10 bg-slate-300" />
          </motion.div>

          {/* Mobile Connecting Line */}
          <div className="block md:hidden w-0.5 h-6 bg-slate-300 my-2" />

          {/* LEVEL 2: CO-CHAIRMAN & HEAD OF IT ROW */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 pt-0 md:pt-8">
            
            {/* 1. Co-Chairman Node */}
            <motion.button
              custom={0.4}
              variants={nodeVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleNodeClick("co_chairman")}
              className="w-full px-5 py-4 sm:py-6 rounded-2xl bg-white text-slate-800 font-bold text-sm sm:text-base shadow-sm border border-slate-200 hover:border-[#be123c] hover:shadow-md cursor-pointer flex items-center justify-center gap-3 transition-all group"
            >
              <UserCheck className="w-5 h-5 text-[#be123c] flex-shrink-0" />
              <span className="font-extrabold">{nodesData.co_chairman?.title || "Co-Chairman"}</span>
            </motion.button>

            {/* Mobile Vertical Gap Line between items */}
            <div className="block md:hidden w-0.5 h-4 bg-slate-300 mx-auto -my-2" />

            {/* 2. Head of IT Node */}
            <motion.button
              custom={0.5}
              variants={nodeVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleNodeClick("head_of_it")}
              className="w-full px-5 py-4 sm:py-6 rounded-2xl bg-white text-slate-800 font-bold text-sm sm:text-base shadow-sm border border-slate-200 hover:border-[#be123c] hover:shadow-md cursor-pointer flex items-center justify-center gap-3 transition-all group"
            >
              <Code className="w-5 h-5 text-[#be123c] flex-shrink-0" />
              <span className="font-extrabold">{nodesData.head_of_it?.title || "IT & Development"}</span>
            </motion.button>

          </div>

        </div>
      </div>

      {/* --- POPUP MODAL --- */}
      <AnimatePresence>
        {selectedNode && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
            
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedNode(null)}
              className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-lg bg-white text-slate-900 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-2xl z-10 max-h-[90vh] flex flex-col border border-slate-100 overflow-hidden"
            >
              {/* Close Icon Button */}
              <button
                onClick={() => setSelectedNode(null)}
                className="absolute top-4 right-4 sm:top-5 sm:right-5 p-1.5 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors z-20"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Node Title & Category Tag */}
              <div className="mb-4 sm:mb-6 pr-6">
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#be123c] bg-pink-100/70 px-2.5 py-1 rounded-full inline-block">
                  {selectedNode.category || "EXECUTIVE LEADERSHIP"}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-2 sm:mt-3">
                  {selectedNode.title}
                </h3>
              </div>

              {/* Members Data Mapping */}
              <div className="space-y-3 sm:space-y-4 overflow-y-auto pr-1 flex-1">
                {selectedNode.members && selectedNode.members.length > 0 ? (
                  selectedNode.members.map((member, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1, duration: 0.3 }}
                      className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 sm:gap-5 p-4 sm:p-5 rounded-2xl bg-[#f8fafc] border border-slate-200/80 shadow-sm"
                    >
                      {/* Avatar Image */}
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden bg-slate-200 flex-shrink-0 border border-slate-300/60 shadow-inner">
                        <img
                          src={member.image || "/team/default.jpg"}
                          alt={member.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.src = "https://ui-avatars.com/api/?name=" + encodeURIComponent(member.name) + "&background=be123c&color=fff&size=128";
                          }}
                        />
                      </div>

                      <div className="flex-1 min-w-0 w-full">
                        <h4 className="text-base sm:text-lg font-bold text-slate-900 truncate">
                          {member.name}
                        </h4>
                        <p className="text-xs font-semibold text-[#be123c] mt-0.5">
                          {member.role}
                        </p>

                        {/* Description field */}
                        {member.description && (
                          <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                            {member.description}
                          </p>
                        )}

                        {member.email && (
                          <p className="text-xs text-slate-500 flex items-center justify-center sm:justify-start gap-1.5 mt-2 truncate">
                            <Mail className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" /> {member.email}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <p className="text-sm text-slate-500">No member info available.</p>
                )}
              </div>

              {/* Close Footer Button */}
              <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() => setSelectedNode(null)}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#0f172a] text-white text-xs font-bold hover:bg-slate-800 transition-colors"
                >
                  {t("ManagementTree.close") || "Close"}
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}