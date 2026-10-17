'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function WhatWeDeliver() {
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

  const deliverables = [
    {
      step: '01',
      title: 'Mobile & App Development',
      description:
        'Cross-platform iOS and Android applications with high performance, smooth UI/UX, and native capabilities.',
      tags: ['React Native', 'TypeScript', 'iOS & Android', 'Push Notifications'],
    },
    {
      step: '02',
      title: 'Backend & High-Speed APIs',
      description:
        'Scalable microservices and type-safe API architectures built for high concurrency and ultra-low latency.',
      tags: ['Golang', 'NestJS', 'TypeScript', 'Redis', 'REST & GraphQL'],
    },
    {
      step: '03',
      title: 'Database Architecture & ORM',
      description:
        'Robust database setup, query optimization, migration management, and real-time data syncing.',
      tags: ['PostgreSQL', 'Prisma', 'Mongoose', 'Firebase', 'Supabase'],
    },
    {
      step: '04',
      title: 'DevOps, Cloud & Infrastructure',
      description:
        'Containerized deployments, server management, reverse proxies, and automated cloud workflows.',
      tags: ['AWS', 'Docker', 'Nginx', 'SSL Management', 'CI/CD'],
    },
    {
      step: '05',
      title: 'Security & Vulnerability Patches',
      description:
        'Comprehensive security audits, threat mitigation, DDoS protection, firewall rules, and automated backups.',
      tags: ['Firewall', 'Security Audit', 'Data Backup', 'SSL', 'Vulnerability Patch'],
    },
    {
      step: '06',
      title: 'Desktop Apps & AI Integration',
      description:
        'Cross-platform desktop solutions and embedding intelligent Machine Learning models directly into applications.',
      tags: ['Electron', 'TensorFlow.js', 'Machine Learning', 'Cross-Platform'],
    },
  ];

  return (
    <section className="w-full bg-[#FAFAFA] py-16 md:py-24 px-6 md:px-16 border-t border-gray-200/80">
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
            WHAT WE DELIVER
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Full-Stack <span className="text-[#A61C30]">IT & Infrastructure</span> Solutions
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            From mobile & desktop applications to secure cloud architecture, DevOps, and Machine Learning integrations.
          </p>
        </motion.div>

        {/* Deliverables Grid */}
        <motion.div
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {deliverables.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="bg-white p-8 rounded-3xl border border-gray-200/80 shadow-sm hover:border-[#A61C30]/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Step Number & Check Icon */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-black text-[#A61C30]/20 group-hover:text-[#A61C30] transition-colors duration-300">
                    {item.step}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-red-50 text-[#A61C30] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-[#0F172A] mb-3 group-hover:text-[#A61C30] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Feature Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                {item.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs font-semibold text-gray-600 bg-gray-100 group-hover:bg-[#FDE8E8] group-hover:text-[#A61C30] px-3 py-1 rounded-full transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}