"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, MapPin, Phone, Send, Sparkles, 
  Clock, MessageSquare, Building2, CheckCircle2 
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Future API integration for backend submission
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-16 px-4 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-semibold">
            <Sparkles size={14} className="text-rose-400" />
            <span>Get in Touch with InfoPR</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Let’s Connect & Elevate Your Brand
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto font-normal leading-relaxed">
            Have questions about press release distribution or media syndication? Reach out to our global team.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Side: Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-6">
              <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4">
                Contact Information
              </h2>

              {/* Address / Upcoming Office */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-rose-50 text-rose-600 rounded-xl shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold text-slate-800">Corporate Office</h3>
                    <span className="text-[10px] font-bold px-2 py-0.5 bg-amber-50 text-amber-700 border border-amber-200/60 rounded">
                      Opening Soon
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                   Dhaka, Bangladesh
                  </p>
                  <p className="text-[11px] text-slate-400 mt-1">
                    (Physical operations starting in future phase)
                  </p>
                </div>
              </div>

              {/* Email Contact */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-rose-50 text-rose-600 rounded-xl shrink-0">
                  <Mail size={22} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-800">Email Us</h3>
                  <p className="text-xs text-slate-600 mt-1">
                    infoprbd1@gmail.com
                  </p>
                  
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-rose-50 text-rose-600 rounded-xl shrink-0">
                  <Clock size={22} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-800">Response Hours</h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Saturday - Tuesday: 9:00 AM – 6:00 PM (BST)
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Guaranteed response within 24 hours
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Info Box */}
            <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase tracking-wider">
                <Building2 size={16} />
                <span>Global Media Relations</span>
              </div>
              <h3 className="text-base font-bold text-white">
                Looking for Custom PR Distribution Packages?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                If you need high-volume distribution across AP, Bloomberg, or Yahoo Finance, contact our sales desk directly via email.
              </p>
            </div>

          </div>

          {/* Right Side: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200/80 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                Send Us a Message
              </h2>
              <p className="text-xs text-slate-500 mb-8">
                Fill out the form below and our PR specialists will get back to you promptly.
              </p>

              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-xl text-center space-y-2"
                >
                  <CheckCircle2 size={36} className="text-emerald-600 mx-auto" />
                  <h3 className="text-base font-bold">Thank You!</h3>
                  <p className="text-xs text-emerald-700">
                    Your message has been sent successfully. Our team will contact you shortly.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-xs font-bold text-emerald-800 underline hover:text-emerald-900"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Your Name *
                      </label>
                      <input 
                        type="text" 
                        name="name" 
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe" 
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Email Address *
                      </label>
                      <input 
                        type="email" 
                        name="email" 
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com" 
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Phone Number
                      </label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+880 1700-000000" 
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Subject *
                      </label>
                      <input 
                        type="text" 
                        name="subject" 
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Press Release Inquiry" 
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Your Message *
                    </label>
                    <textarea 
                      name="message" 
                      rows={5} 
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write details about your press release requirement..." 
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:bg-white transition-all resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-xl shadow-md shadow-rose-600/20 transition-all flex items-center justify-center gap-2"
                  >
                    <Send size={14} />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </main>

    </div>
  );
}