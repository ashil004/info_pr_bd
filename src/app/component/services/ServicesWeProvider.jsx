"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Mic2, 
  Globe2, 
  FileText, 
  ShieldAlert, 
  Rocket, 
  Sparkles,
  Headphones,
  Calendar
} from "lucide-react";

// সার্ভিসগুলোর ডাইনামিক ডেটা (IT Support এবং Event Management যোগ করা হয়েছে)
const servicesData = [
  {
    id: "press-conference",
    title: "Press Conference",
    category: "Media Event",
    description: "Organize high-impact press conferences with top media outlets, journalists, and broadcast channels.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop",
    icon: Mic2,
    features: ["TV Coverage", "Journalist Q&A", "Venue Setup"]
  },
  {
    id: "digital-pr",
    title: "Digital PR",
    category: "Online Branding",
    description: "Amplify your brand presence across high-authority digital news platforms and international media.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop",
    icon: Globe2,
    features: ["SEO Backlinks", "Global Outlets", "Viral Reach"]
  },
  {
    id: "content-consultancy",
    title: "Content Consultancy",
    category: "Strategic Media",
    description: "Craft compelling press releases and brand stories designed to catch editor attention instantly.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    icon: FileText,
    features: ["PR Writing", "Editorial Review", "Storytelling"]
  },
  {
    id: "crisis-management",
    title: "Crisis Management",
    category: "Reputation Protection",
    description: "Rapid, tactical communication strategies to protect and restore your brand reputation during emergencies.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop",
    icon: ShieldAlert,
    features: ["24/7 Monitoring", "Statement Drafting", "Damage Control"]
  },
  {
    id: "brand-launch",
    title: "Brand & Company Launch",
    category: "Corporate PR",
    description: "Launch your business or new product line with maximum nationwide visibility and media buzz.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop",
    icon: Rocket,
    features: ["Launch Events", "Influencer PR", "Mass Distribution"]
  },
  {
    id: "it-support",
    title: "IT Support & Services",
    category: "Tech Infrastructure",
    description: "Reliable, round-the-clock technical support, infrastructure management, and digital security for seamless business operations.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=800&auto=format&fit=crop",
    icon: Headphones,
    features: ["24/7 Helpdesk", "System Security", "Cloud Solutions"]
  },
  {
    id: "event-management",
    title: "Event Management",
    category: "Corporate Events",
    description: "End-to-end management for corporate events, product launches, brand activations, and large-scale summits.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop",
    icon: Calendar,
    features: ["Event Planning", "Audio & Visual", "Guest Coordination"]
  }
];

export default function ServicesWeProvider() {
  return (
    <section id="all-services" className="w-full bg-slate-50 py-16 md:py-24 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- SECTION HEADER --- */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#a4223a]/10 border border-[#a4223a]/20 text-[#a4223a] text-xs sm:text-sm font-bold"
          >
            <Sparkles className="w-4 h-4" />
            <span>EXPERT SOLUTIONS</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight"
          >
            Services We <span className="text-[#a4223a]">Provide</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal"
          >
            Explore our tailored public relations, IT solutions, and media event services designed to position your brand at the forefront of the market.
          </motion.p>
        </div>

        {/* --- UNIQUE SERVICES GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-2xl hover:border-red-200 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image Container with Floating Badge */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  {/* Subtle Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80" />

                  {/* Top Floating Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[#a4223a] text-xs font-bold tracking-wide shadow-sm">
                      {service.category}
                    </span>
                  </div>

                  {/* Floating Action Icon (Top Right) */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center group-hover:bg-[#a4223a] group-hover:border-[#a4223a] transition-colors">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#a4223a] transition-colors">
                      {service.title}
                    </h3>

                    <p className="mt-2.5 text-sm text-slate-600 leading-relaxed font-normal">
                      {service.description}
                    </p>
                  </div>

                  {/* Mini Features List */}
                  <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-2">
                    {service.features.map((feat, fIdx) => (
                      <span 
                        key={fIdx} 
                        className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md"
                      >
                        • {feat}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <div className="pt-3">
                    <a
                      href={`/services/${service.id}`}
                      className="w-full inline-flex items-center justify-between px-5 py-3.5 rounded-2xl bg-slate-100 text-slate-800 font-bold text-sm group-hover:bg-[#a4223a] group-hover:text-white transition-all duration-300 shadow-sm"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}