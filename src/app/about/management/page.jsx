"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Network, X, Mail, Info, Newspaper, PenTool, Code, Megaphone } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

// Node Motion Variants for smooth cascading appearance
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

  const nodesData = t("ManagementTree.nodes") || {};

  const handleNodeClick = (nodeKey) => {
    if (nodesData[nodeKey]) {
      setSelectedNode(nodesData[nodeKey]);
    }
  };

  return (
    <section className="w-full font-sans bg-slate-50 py-16 md:py-24 overflow-x-auto relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 min-w-[900px] xl:min-w-0">
        
        {/* --- HEADER --- */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#a4223a]/10 border border-[#a4223a]/20 text-[#a4223a] text-xs sm:text-sm font-semibold">
            <Network className="w-4 h-4" />
            <span>{t("ManagementTree.badge") || "Organizational Structure"}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            {t("ManagementTree.title_main") || "Info PR"}{" "}
            <span className="bg-gradient-to-r from-[#a4223a] to-red-600 bg-clip-text text-transparent">
              {t("ManagementTree.title_highlight") || "Team Structure"}
            </span>
          </h2>
        </motion.div>

        {/* --- DIAGRAM TREE STRUCTURE --- */}
        <div className="flex flex-col items-center justify-center space-y-0 py-6 relative">
          
          {/* LEVEL 1: CEO */}
          <motion.button
            custom={0.1}
            variants={nodeVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -4, boxShadow: "0px 10px 25px rgba(164, 34, 58, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNodeClick("ceo")}
            className="px-10 py-4 rounded-full bg-[#a4223a] text-white font-bold text-lg shadow-lg border-2 border-red-400 cursor-pointer z-10 flex items-center gap-2 hover:bg-red-700 transition-colors"
          >
            <span>{nodesData.ceo?.title || "CEO"}</span>
            <Info className="w-4 h-4 opacity-75" />
          </motion.button>

          {/* Vertical Connecting Line From CEO */}
          <motion.div
            custom={0.25}
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-0.5 h-10 bg-slate-400 origin-top"
          />

          {/* Horizontal Splitter Line for 4 Departments */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-[82%] h-0.5 bg-slate-400 relative"
          >
            {/* 4 Vertical Ticks pointing down to the departments */}
            <div className="absolute top-0 left-0 w-0.5 h-8 bg-slate-400" />
            <div className="absolute top-0 left-[33.33%] -translate-x-1/2 w-0.5 h-8 bg-slate-400" />
            <div className="absolute top-0 left-[66.66%] -translate-x-1/2 w-0.5 h-8 bg-slate-400" />
            <div className="absolute top-0 right-0 w-0.5 h-8 bg-slate-400" />
          </motion.div>

          {/* LEVEL 2: 4 DEPARTMENTS ROW */}
          <div className="w-full grid grid-cols-4 gap-4 pt-8">
            
            {/* 1. News & Reporter */}
            <motion.button
              custom={0.4}
              variants={nodeVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -3, boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNodeClick("news_reporter")}
              className="px-4 py-5 rounded-2xl bg-white text-slate-800 font-bold text-sm shadow-md border-2 border-slate-200 hover:border-[#a4223a] cursor-pointer flex flex-col items-center gap-2 transition-all"
            >
              <Newspaper className="w-5 h-5 text-[#a4223a]" />
              <span>{nodesData.news_reporter?.title || "News & Reporter"}</span>
            </motion.button>

            {/* 2. Design & Creative */}
            <motion.button
              custom={0.5}
              variants={nodeVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -3, boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNodeClick("design_creative")}
              className="px-4 py-5 rounded-2xl bg-white text-slate-800 font-bold text-sm shadow-md border-2 border-slate-200 hover:border-[#a4223a] cursor-pointer flex flex-col items-center gap-2 transition-all"
            >
              <PenTool className="w-5 h-5 text-[#a4223a]" />
              <span>{nodesData.design_creative?.title || "Design & Creative"}</span>
            </motion.button>

            {/* 3. IT & Development */}
            <motion.button
              custom={0.6}
              variants={nodeVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -4, boxShadow: "0px 10px 25px rgba(164, 34, 58, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNodeClick("it_development")}
              className="px-4 py-5 rounded-2xl bg-slate-900 text-white font-extrabold text-sm shadow-lg border-2 border-[#a4223a] cursor-pointer flex flex-col items-center gap-2 transition-all"
            >
              <Code className="w-5 h-5 text-red-400" />
              <span>{nodesData.it_development?.title || "IT & Development"}</span>
            </motion.button>

            {/* 4. Digital Marketing */}
            <motion.button
              custom={0.7}
              variants={nodeVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -3, boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNodeClick("digital_marketing")}
              className="px-4 py-5 rounded-2xl bg-white text-slate-800 font-bold text-sm shadow-md border-2 border-slate-200 hover:border-[#a4223a] cursor-pointer flex flex-col items-center gap-2 transition-all"
            >
              <Megaphone className="w-5 h-5 text-[#a4223a]" />
              <span>{nodesData.digital_marketing?.title || "Digital Marketing"}</span>
            </motion.button>

          </div>

        </div>
      </div>

      {/* --- POPUP MODAL --- */}
      <AnimatePresence>
        {selectedNode && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedNode(null)}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.75, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 z-10 overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#a4223a] to-rose-500" />

              {/* Close Icon */}
              <motion.button
                whileHover={{ rotate: 90, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedNode(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-[#a4223a] hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </motion.button>

              {/* Node Title & Category */}
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#a4223a] bg-red-50 px-3 py-1 rounded-full">
                  {selectedNode.category || "Team Members"}
                </span>
                <h3 className="text-2xl font-black text-slate-900 mt-2">
                  {selectedNode.title}
                </h3>
              </div>

              {/* Members Data Mapping */}
              <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-1">
                {selectedNode.members && selectedNode.members.length > 0 ? (
                  selectedNode.members.map((member, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1, duration: 0.3 }}
                      className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 hover:bg-slate-100/80 transition-all"
                    >
                      <div className="w-14 h-14 rounded-xl overflow-hidden bg-slate-200 flex-shrink-0">
                        <img
                          src={member.image || "/team/default.jpg"}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="text-base font-bold text-slate-900 truncate">
                          {member.name}
                        </h4>
                        <p className="text-xs font-semibold text-[#a4223a]">
                          {member.role}
                        </p>
                        {member.email && (
                          <p className="text-xs text-slate-500 flex items-center gap-1 mt-1 truncate">
                            <Mail className="w-3 h-3" /> {member.email}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <p className="text-sm text-slate-500">No member info available.</p>
                )}
              </div>

              {/* Close Footer Action */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedNode(null)}
                  className="px-5 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-[#a4223a] transition-colors"
                >
                  {t("ManagementTree.close") || "Close"}
                </motion.button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}