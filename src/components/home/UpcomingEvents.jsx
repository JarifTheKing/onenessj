"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  FastForward,
  GraduationCap,
  Droplets,
  HeartHandshake,
  Landmark,
  Globe,
  Zap,
  Map,
  BarChart3,
  Users2,
  BellRing,
} from "lucide-react";

const platformFeatures = [
  {
    id: 1,
    title: "Sahajogita",
    desc: "Live tracking & transparency dashboard for every donation.",
    icon: BarChart3,
    color: "text-blue-500",
  },
  {
    id: 2,
    title: "Annadan",
    desc: "Redistributing surplus food from events to those in need.",
    icon: FastForward,
    color: "text-emerald-500",
  },
  {
    id: 3,
    title: "Sushikkha",
    desc: "Skill-based volunteering & expert session booking.",
    icon: GraduationCap,
    color: "text-purple-500",
  },
  {
    id: 4,
    title: "Rokter Bondhon",
    desc: "Real-time emergency blood donor management system.",
    icon: Droplets,
    color: "text-red-500",
  },
  {
    id: 5,
    title: "Smriti",
    desc: "Digital memorial pages for community fundraising.",
    icon: HeartHandshake,
    color: "text-orange-500",
  },
  {
    id: 6,
    title: "OneNess Wallet",
    desc: "Secure multi-currency gateway for global donors.",
    icon: Landmark,
    color: "text-indigo-500",
  },
  {
    id: 7,
    title: "Impact Heatmap",
    desc: "Visual geographic map of ongoing aid projects.",
    icon: Map,
    color: "text-cyan-500",
  },
  {
    id: 8,
    title: "Verified Badges",
    desc: "Trust-based verification for volunteers and NGOs.",
    icon: ShieldCheck,
    color: "text-teal-500",
  },
  {
    id: 9,
    title: "Eco-Unity",
    desc: "Crowdfunding for local environmental & green projects.",
    icon: Globe,
    color: "text-green-600",
  },
  {
    id: 10,
    title: "Flash-Aid",
    desc: "Instant funding alerts for natural disaster relief.",
    icon: Zap,
    color: "text-yellow-500",
  },
  {
    id: 11,
    title: "Unity Circles",
    desc: "Private group-based donation circles for friends.",
    icon: Users2,
    color: "text-pink-500",
  },
  {
    id: 12,
    title: "Smart Notify",
    desc: "Socket.io powered real-time updates on impact.",
    icon: BellRing,
    color: "text-slate-500",
  },
];

const UpcomingEvents = () => {
  // We double the array to create a seamless loop
  const marqueeData = [...platformFeatures, ...platformFeatures];

  return (
    <section className="py-24 bg-zinc-50 dark:bg-black overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-left border-l-4 border-[#EC9232] pl-6"
        >
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter">
            THE ONENESS <span className="text-[#EC9232]">ECOSYSTEM</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl font-medium">
            12 core pillars built for transparency, impact, and global unity.
            Every donation, every volunteer, every life changed—tracked in
            real-time.
          </p>
        </motion.div>
      </div>

      {/* --- Marquee Container --- */}
      <div className="relative flex overflow-hidden">
        <motion.div
          animate={{ x: [0, -2000] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
          className="flex gap-6 whitespace-nowrap"
        >
          {marqueeData.map((feature, idx) => (
            <div
              key={idx}
              className="w-[350px] flex-shrink-0 p-8 rounded-[2rem] bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 shadow-xl transition-all hover:border-[#EC9232]/50 group"
            >
              <div
                className={`w-14 h-14 rounded-2xl mb-6 flex items-center justify-center bg-zinc-50 dark:bg-black group-hover:scale-110 transition-transform duration-500`}
              >
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed whitespace-normal">
                {feature.desc}
              </p>

              <div className="mt-6 flex items-center gap-2 text-xs font-bold text-[#EC9232] opacity-0 group-hover:opacity-100 transition-opacity">
                EXPLORE MODULE <span>→</span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Gradient Fades for Cinematic Depth */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-zinc-50 dark:from-black to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-zinc-50 dark:from-black to-transparent z-10" />
      </div>

      <div className="mt-20 text-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-10 py-4 bg-slate-950 dark:bg-white text-white dark:text-black font-black rounded-full shadow-2xl hover:shadow-[#EC9232]/20 transition-all"
        >
          VIEW DETAILED ROADMAP
        </motion.button>
      </div>
    </section>
  );
};

export default UpcomingEvents;
