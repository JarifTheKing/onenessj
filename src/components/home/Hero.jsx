"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, Globe, Users } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -5 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-24 md:pt-24 md:pb-36 dark:bg-black font-sans transition-colors duration-500">
      {/* --- ULTRA ANIMATED BACKGROUND AURORA --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-1/2 -z-10 h-[600px] w-full -translate-x-1/2 opacity-30 blur-[100px] dark:opacity-20"
        >
          <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-indigo-600/40" />
          <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-[#EC9232]/30" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* --- Left Content --- */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start text-left"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/50 dark:bg-zinc-900/50 backdrop-blur-md px-4 py-1.5 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-indigo-600 dark:border-white/10 dark:text-indigo-400 shadow-sm"
            >
              <Sparkles size={14} className="text-[#EC9232] animate-pulse" />
              Redefining Global Transparency
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="mt-6 text-5xl font-black tracking-tight text-slate-950 sm:text-6xl lg:text-7xl dark:text-white leading-[1.1]"
            >
              Empower Change with <br />
              <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-[#EC9232] bg-clip-text text-transparent">
                Radical Trust.
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-8 max-w-xl text-base md:text-lg font-medium leading-relaxed text-slate-600 dark:text-slate-400"
            >
              Oneness connects you directly to verified global projects. Track
              every single taka and witness measurable impact in real-time.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-col items-center gap-4 sm:flex-row w-full sm:w-auto"
            >
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#EC9232" }}
                whileTap={{ scale: 0.98 }}
                className="flex h-14 w-full sm:w-auto items-center justify-center gap-2 rounded-2xl bg-slate-950 px-10 text-base font-bold text-white transition-all shadow-xl dark:bg-white dark:text-black"
              >
                Start Your Impact
                <ArrowRight size={18} />
              </motion.button>

              <Link
                href="#transparency"
                className="group flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white"
              >
                View Transparency Report
                <motion.div className="w-8 h-8 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center group-hover:bg-[#EC9232] group-hover:text-white transition-colors">
                  <ArrowRight size={14} className="-rotate-45" />
                </motion.div>
              </Link>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              variants={itemVariants}
              className="mt-12 flex items-center gap-8 border-t border-slate-100 dark:border-white/5 pt-8 w-full"
            >
              <div>
                <p className="text-2xl font-black text-slate-950 dark:text-white">
                  50k+
                </p>
                <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400">
                  Donors
                </p>
              </div>
              <div className="w-px h-8 bg-slate-200 dark:bg-white/10" />
              <div>
                <p className="text-2xl font-black text-slate-950 dark:text-white">
                  100%
                </p>
                <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400">
                  Audit Verified
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* --- Right Content: The Visual Grid --- */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Large Image */}
              <motion.div
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                className="relative h-[450px] w-full overflow-hidden rounded-[2.5rem] shadow-2xl"
              >
                <img
                  src="/images/photo2.jpg"
                  alt="Impact"
                  className="h-full w-full object-cover transform hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                    <Globe size={14} className="text-[#EC9232]" /> Africa
                    Project
                  </p>
                </div>
              </motion.div>

              <div className="flex flex-col gap-4">
                {/* Secondary Image */}
                <motion.div
                  variants={imageVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 }}
                  className="relative h-[215px] w-full overflow-hidden rounded-[2.5rem] shadow-xl"
                >
                  <img
                    src="/images/photo3.jpg"
                    alt="Success"
                    className="h-full w-full object-cover"
                  />
                </motion.div>

                {/* Floating Badge Card */}
                <motion.div
                  variants={imageVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.4 }}
                  className="h-[215px] w-full bg-indigo-600 rounded-[2.5rem] p-8 text-white flex flex-col justify-between shadow-xl"
                >
                  <Users size={32} className="text-[#EC9232]" />
                  <div>
                    <p className="text-3xl font-black">1.2M+</p>
                    <p className="text-xs font-bold uppercase opacity-80">
                      Lives Impacted Globally
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Floating Element */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 bg-white dark:bg-zinc-900 p-6 rounded-3xl shadow-2xl border border-slate-100 dark:border-white/10 z-20 hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#EC9232]/10 rounded-full flex items-center justify-center text-[#EC9232]">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <p className="text-sm font-black dark:text-white text-slate-900">
                    Blockchain Secured
                  </p>
                  <p className="text-[10px] text-slate-500 font-bold uppercase">
                    End-to-End Tracking
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
