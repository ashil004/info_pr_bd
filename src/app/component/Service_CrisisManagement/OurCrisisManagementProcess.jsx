"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ClipboardCheck,
  MessageSquareCode,
  Users,
  ShieldCheck,
  Activity,
  FileSpreadsheet,
  Sparkles
} from "lucide-react";

export default function OurCrisisManagementProcess() {
  // Screenshot 1 & 2 - Total 6 Steps Content
  const processSteps = [
    {
      step: "01",
      icon: ClipboardCheck,
      title: "Quick Situation Assessment",
      description:
        "As a reputation management companies in BD, we start by quickly analyzing the crisis. Plus, our team identifies risks and decides the best steps forward."
    },
    {
      step: "02",
      icon: MessageSquareCode,
      title: "Building the Right Response",
      description:
        "Our team crafts a strong response strategy. Then, we make sure every message is accurate and reduces harm. Besides, our team keeps your reputation stable during difficult times."
    },
    {
      step: "03",
      icon: Users,
      title: "Talking to the Right People",
      description:
        "We connect with the right media, clients, and stakeholders. With our guidance, your message reaches the right audience at the right time."
    },
    {
      step: "04",
      icon: ShieldCheck,
      title: "Protecting Your Brand Long-Term",
      description:
        "With our Public Relations crisis management service in Dhaka, we focus not just on quick fixes. Plus, our team secures your brand's image using Digital PR."
    },
    {
      step: "05",
      icon: Activity,
      title: "Monitoring Outcomes & Adjusting",
      description:
        "We monitor results and adjust strategies when needed. With that, our team ensures your reputation fully recovers from the crisis."
    },
    {
      step: "06",
      icon: FileSpreadsheet,
      title: "Post-Crisis Communication Planning",
      description:
        "Once the crisis ends, we will prepare a clear communication plan. This also helps rebuild trust and ensures your brand is ready for future crises."
    }
  ];

  // Motion Container Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  // Motion Child Item Variants
  const itemVariants = {
    hidden: { opacity: 0, x: -25 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-white text-slate-900 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- HEADER SECTION --- */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-[#a4223a] text-xs font-black uppercase tracking-wider mb-4 border border-red-100">
            <Sparkles className="w-3.5 h-3.5 text-[#a4223a]" />
            <span>Execution Protocol</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Our Crisis Management <span className="text-[#a4223a]">Process</span>
          </h2>

          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            We follow a step-by-step procedure to handle crises effectively. Our approach also makes sure your brand stays safe during and after any challenge. That's how we work:
          </p>
        </motion.div>

        {/* --- UNIQUE STEPPER TIMELINE (NO CARDS) --- */}
        <div className="relative pl-6 sm:pl-10">
          
          {/* Main Vertical Connecting Line */}
          <div className="absolute left-[19px] sm:left-[31px] top-3 bottom-8 w-[2px] bg-gradient-to-b from-[#a4223a] via-red-200 to-slate-200" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-12 sm:space-y-16"
          >
            {processSteps.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.step}
                  variants={itemVariants}
                  className="relative flex items-start gap-6 sm:gap-8 group"
                >
                  {/* Step Node Indicator Dot */}
                  <div className="absolute -left-[25px] sm:-left-[37px] top-1.5 w-6 h-6 rounded-full bg-white border-2 border-[#a4223a] flex items-center justify-center group-hover:scale-125 transition-transform duration-300 z-10">
                    <div className="w-2 h-2 rounded-full bg-[#a4223a]" />
                  </div>

                  {/* Main Content Area */}
                  <div className="flex-1">
                    {/* Top Row: Icon + Step Label */}
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-red-50 text-[#a4223a] flex items-center justify-center group-hover:bg-[#a4223a] group-hover:text-white transition-colors duration-300">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-black uppercase tracking-widest text-[#a4223a]">
                        STEP {item.step}
                      </span>
                    </div>

                    {/* Step Title */}
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight group-hover:text-[#a4223a] transition-colors duration-300">
                      {item.title}
                    </h3>

                    {/* Step Description */}
                    <p className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}