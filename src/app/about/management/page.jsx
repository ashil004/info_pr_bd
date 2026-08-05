"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Network, X, Mail, Info } from "lucide-react";
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
      ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for smooth pop
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 min-w-[750px] md:min-w-0">
        
        {/* Header with Motion & Info PR Branding Text */}
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
              {t("ManagementTree.title_highlight") || "Top Management"}
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed max-w-3xl mx-auto">
            {t("ManagementTree.description") || 
              "At Info PR, we believe strong leadership drives innovation and excellence. Our top management team brings together a wealth of experience, vision, and dedication to shape the future of strategic communications and public relations."}
          </p>
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
            whileHover={{ scale: 1.08, y: -4, boxShadow: "0px 10px 25px rgba(164, 34, 58, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNodeClick("ceo")}
            className="px-8 py-3.5 rounded-full bg-[#a4223a] text-white font-bold text-lg shadow-lg border-2 border-red-400 cursor-pointer z-10 flex items-center gap-2 hover:bg-red-700 transition-colors"
          >
            <span>{nodesData.ceo?.title || "CEO"}</span>
            <Info className="w-4 h-4 opacity-75" />
          </motion.button>

          {/* Vertical Line 1 */}
          <motion.div
            custom={0.25}
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-0.5 h-8 bg-slate-400 origin-top"
          />

          {/* Horizontal Line across Level 2 */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-[80%] max-w-[600px] h-0.5 bg-slate-400 relative"
          >
            <div className="absolute top-0 left-0 w-0.5 h-6 bg-slate-400" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-6 bg-slate-400" />
            <div className="absolute top-0 right-0 w-0.5 h-6 bg-slate-400" />
          </motion.div>

          {/* LEVEL 2: Founder & CEO | Director | Manager */}
          <div className="w-[85%] max-w-[650px] flex justify-between items-center pt-6 pb-2">
            
            {/* Founder & CEO */}
            <motion.button
              custom={0.4}
              variants={nodeVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.06, y: -3, boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNodeClick("founder_ceo")}
              className="px-6 py-3 rounded-full bg-slate-900 text-white font-semibold text-sm shadow-md border border-slate-700 cursor-pointer hover:border-[#a4223a] transition-colors"
            >
              {nodesData.founder_ceo?.title || "Founder and CEO"}
            </motion.button>

            {/* Director */}
            <motion.button
              custom={0.45}
              variants={nodeVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.06, y: -3, boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNodeClick("director")}
              className="px-8 py-3.5 rounded-full bg-slate-800 text-white font-bold text-base shadow-md border border-slate-600 cursor-pointer hover:border-[#a4223a] transition-colors"
            >
              {nodesData.director?.title || "Director"}
            </motion.button>

            {/* Manager */}
            <motion.button
              custom={0.5}
              variants={nodeVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.06, y: -3, boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNodeClick("manager")}
              className="px-6 py-3 rounded-full bg-slate-900 text-white font-semibold text-sm shadow-md border border-slate-700 cursor-pointer hover:border-[#a4223a] transition-colors"
            >
              {nodesData.manager?.title || "Manager"}
            </motion.button>
          </div>

          {/* Curved Connections Down to IT Section */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.55 }}
            className="w-[70%] max-w-[550px] h-10 border-b-2 border-x-2 border-slate-400 rounded-b-3xl relative" 
          />
          
          <motion.div
            custom={0.6}
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-0.5 h-6 bg-slate-400 origin-top"
          />

          {/* LEVEL 3: IT Section */}
          <motion.button
            custom={0.65}
            variants={nodeVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.08, y: -4, boxShadow: "0px 12px 28px rgba(164, 34, 58, 0.35)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNodeClick("it_section")}
            className="px-10 py-4 rounded-full bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white font-black text-xl shadow-xl border-2 border-[#a4223a] cursor-pointer z-10 hover:shadow-2xl transition-all"
          >
            {nodesData.it_section?.title || "IT Section"}
          </motion.button>

          {/* Line: IT Section to Sub-branches */}
          <motion.div
            custom={0.75}
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-0.5 h-8 bg-slate-400 origin-top"
          />

          {/* Horizontal Line for Bottom Branches */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="w-[85%] max-w-[650px] h-0.5 bg-slate-400 relative"
          >
            <div className="absolute top-0 left-0 w-0.5 h-6 bg-slate-400" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-6 bg-slate-400" />
            <div className="absolute top-0 right-0 w-0.5 h-6 bg-slate-400" />
          </motion.div>

          {/* LEVEL 4: Design | Software Development | Marketing */}
          <div className="w-full max-w-[720px] flex justify-between items-center pt-6">
            
            {/* Design */}
            <motion.button
              custom={0.85}
              variants={nodeVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.06, y: -3, boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNodeClick("design")}
              className="px-6 py-3 rounded-full bg-white text-slate-800 font-bold text-sm shadow-md border-2 border-slate-200 hover:border-[#a4223a] cursor-pointer transition-colors"
            >
              {nodesData.design?.title || "Design"}
            </motion.button>

            {/* Software Development */}
            <motion.button
              custom={0.9}
              variants={nodeVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.08, y: -4, boxShadow: "0px 10px 25px rgba(164, 34, 58, 0.25)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNodeClick("software_dev")}
              className="px-6 py-3.5 rounded-full bg-white text-[#a4223a] font-black text-base shadow-md border-2 border-[#a4223a]/40 hover:border-[#a4223a] cursor-pointer transition-colors"
            >
              {nodesData.software_dev?.title || "Software Development"}
            </motion.button>

            {/* Marketing */}
            <motion.button
              custom={0.95}
              variants={nodeVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.06, y: -3, boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNodeClick("marketing")}
              className="px-6 py-3 rounded-full bg-white text-slate-800 font-bold text-sm shadow-md border-2 border-slate-200 hover:border-[#a4223a] cursor-pointer transition-colors"
            >
              {nodesData.marketing?.title || "Marketing"}
            </motion.button>
          </div>

        </div>
      </div>

      {/* --- POPUP MODAL WITH SPRING ANIMATION --- */}
      <AnimatePresence>
        {selectedNode && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Dark Blurred Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedNode(null)}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
            />

            {/* Elastic Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.75, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 20 }}
              transition={{ 
                type: "spring", 
                damping: 25, 
                stiffness: 300 
              }}
              className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 z-10 overflow-hidden"
            >
              {/* Top Decorative Bar */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#a4223a] to-rose-500" />

              {/* Close Button */}
              <motion.button
                whileHover={{ rotate: 90, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedNode(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-[#a4223a] hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </motion.button>

              {/* Header Info */}
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#a4223a] bg-red-50 px-3 py-1 rounded-full">
                  {selectedNode.category}
                </span>
                <h3 className="text-2xl font-black text-slate-900 mt-2">
                  {selectedNode.title}
                </h3>
              </div>

              {/* Members List */}
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
                      {/* Image */}
                      <div className="w-14 h-14 rounded-xl overflow-hidden bg-slate-200 flex-shrink-0">
                        <img
                          src={member.image || "/team/default.jpg"}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Details */}
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

              {/* Footer Button */}
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