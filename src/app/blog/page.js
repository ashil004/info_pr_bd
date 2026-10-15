"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowUpRight, Search, Tag, Newspaper } from 'lucide-react';

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  
  const categories = ["All", "PR Strategy", "Digital Marketing", "Media Relations", "Branding"];

  
  const posts = [
    {
      id: 1,
      title: "How to Write a Press Release That Journalists Actually Want to Read",
      excerpt: "Learn the essential structure and headline formulas that get your story noticed by major news outlets and publication editors.",
      category: "PR Strategy",
      date: "Aug 28, 2026",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Building Brand Authority in Global Digital Markets",
      excerpt: "Key insights into regional media landscapes and how to customize your PR pitch for maximum reach and credibility.",
      category: "Branding",
      date: "Aug 22, 2026",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Top 7 SEO Benefits of Guaranteed News Syndication",
      excerpt: "High-authority backlinks from news websites can significantly elevate your brand's organic search visibility and trust.",
      category: "Digital Marketing",
      date: "Aug 15, 2026",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Crisis Communication Strategies for Modern Business Leadership",
      excerpt: "Essential steps for corporate brands during fast-moving public challenges and online media reputation management.",
      category: "Media Relations",
      date: "Aug 10, 2026",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop"
    }
  ];

  // Search and Category Filter
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      
      {/* Header Section */}
      <section className="bg-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-semibold">
            <Newspaper size={14} />
            <span>InfoPR Articles</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Latest Insights & PR News
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto font-normal leading-relaxed">
            Stay updated with the latest strategies, press release techniques, and media coverage guides.
          </p>

          {/* Search Bar */}
          <div className="pt-4 max-w-md mx-auto">
            <div className="relative flex items-center">
              <Search className="absolute left-4 text-slate-400" size={18} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">

        {/* Category Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200/80">
          {categories.map((category, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                selectedCategory === category 
                  ? 'bg-rose-600 text-white' 
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPosts.map((post) => (
            <motion.article 
              key={post.id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Image */}
                <div className="h-44 w-full overflow-hidden relative bg-slate-100">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-slate-800 text-[10px] font-bold px-2 py-0.5 rounded shadow-sm border border-slate-200">
                    {post.category}
                  </span>
                </div>

                {/* Body Content */}
                <div className="p-5">
                  <div className="flex items-center gap-3 text-[11px] text-slate-400 mb-2.5">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-rose-600 transition-colors leading-snug mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-5 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-slate-500">InfoPR Editorial</span>
                <span className="text-xs font-bold text-rose-600 group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                  Read <ArrowUpRight size={14} />
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Empty Search Result */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
            <p className="text-sm font-semibold text-slate-700">No blogs found.</p>
            <p className="text-xs text-slate-400 mt-1">Try changing search keywords or categories.</p>
          </div>
        )}

      </main>

    </div>
  );
}