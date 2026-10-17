'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function WhyChoosItSupport() {
  const containerStagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const features = [
    {
      icon: '⚡',
      title: '99.9% Server Uptime',
      description:
        'Proactive 24/7 monitoring and instant automated failovers to prevent downtime and keep your platforms blazing fast.',
    },
    {
      icon: '🛡️',
      title: 'Advanced Cybersecurity',
      description:
        'Comprehensive malware protection, threat mitigation, and SSL configurations to keep your business data fully secured.',
    },
    {
      icon: '👨‍💻',
      title: '24/7 Expert Helpdesk',
      description:
        'Dedicated system engineers available round-the-clock to resolve critical bugs and technical emergencies instantly.',
    },
    {
      icon: '🚀',
      title: 'Performance Optimization',
      description:
        'Code and server-level optimizations for Next.js, Node.js, and cloud platforms to drastically improve response times.',
    },
    {
      icon: '🔄',
      title: 'Regular Maintenance',
      description:
        'Scheduled software patches, database cleanup, and continuous health audits to ensure smooth, hassle-free operations.',
    },
    {
      icon: '💰',
      title: 'Cost-Effective Solution',
      description:
        'Get enterprise-level IT management and infrastructure support without the overhead cost of hiring a full in-house tech team.',
    },
  ];

  return (
    <section className="w-full bg-white py-16 md:py-24 px-6 md:px-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-block bg-[#FDE8E8] text-[#A61C30] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
            WHY CHOOSE US
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Why Partner with <span className="text-[#A61C30]">Info PR</span> for IT Support?
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Empower your digital platforms with robust infrastructure, ironclad security, and seamless technical support.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="bg-[#FAFAFA] p-8 rounded-2xl border border-gray-200/80 hover:border-[#A61C30]/30 hover:shadow-xl transition-all duration-300 flex flex-col items-start group"
            >
              {/* Icon Container */}
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="w-14 h-14 rounded-2xl bg-white border border-gray-200 text-2xl flex items-center justify-center mb-6 shadow-sm group-hover:border-[#A61C30]/20 group-hover:bg-[#FDE8E8]"
              >
                {feature.icon}
              </motion.div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-[#0F172A] mb-3 group-hover:text-[#A61C30] transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}