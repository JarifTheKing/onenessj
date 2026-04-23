"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { CalendarDays, ArrowUpRight, X, Sparkles, Heart } from "lucide-react";

const stories = [
  {
    id: 1,
    date: "JAN 01, 2026",
    tag: "Education",
    title: "Lighting the Way: The Classroom Impact",
    desc: "Renovating 15 rural classrooms with digital tools for 500+ children.",
    detailDesc: "This initiative provided modern learning tools, ergonomic seating, and digital literacy resources. We implemented a continuous teacher training program to ensure sustained academic excellence for years to come.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000",
  },
  {
    id: 2,
    date: "MAR 12, 2026",
    tag: "Community",
    title: "Empowering Local Leadership",
    desc: "Training 25 community leaders in project management and finance.",
    detailDesc: "The Community Renaissance Project focused on identifying and training leaders from within marginalized communities, equipping them with critical skills to drive their own economic growth.",
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=1000",
  },
  {
    id: 3,
    date: "APR 25, 2026",
    tag: "Health",
    title: "Breaking the Cycle of Care",
    desc: "Providing vaccinations and maternal support to 1,200 beneficiaries.",
    detailDesc: "Our healthcare program reached thousands, providing free medical check-ups and essential vaccinations by partnering with local clinics and deploying mobile units to remote areas.",
    image: "https://images.unsplash.com/photo-1459183885447-568d760ee39a?q=80&w=1000",
  },
];

const RecentStories = () => {
  const [selectedStory, setSelectedStory] = useState(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section ref={containerRef} className="relative py-24 bg-white dark:bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 mb-6"
            >
              <Sparkles size={14} className="text-[#EC9232]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">The Journal</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black text-slate-950 dark:text-white tracking-tighter leading-[0.9]"
            >
              Stories that <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-950 via-slate-500 to-slate-950 dark:from-white dark:via-slate-400 dark:to-white animate-pulse">Change Lives.</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-slate-500 dark:text-slate-400 font-medium max-w-xs text-base md:text-lg border-l-2 border-[#EC9232] pl-6"
          >
            Real-time impact reports from the field, powered by your generosity.
          </motion.p>
        </div>

        <motion.div style={{ y }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, idx) => (
            <StoryCard key={story.id} story={story} index={idx} onOpen={() => setSelectedStory(story)} />
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedStory && <Modal story={selectedStory} close={() => setSelectedStory(null)} />}
      </AnimatePresence>
    </section>
  );
};

const StoryCard = ({ story, index, onOpen }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, type: "spring", stiffness: 50 }}
    viewport={{ once: true }}
    whileHover={{ y: -10 }}
    className="group relative"
  >
    <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-[2.5rem] bg-slate-200 dark:bg-zinc-900">
      <motion.img
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.8 }}
        src={story.image}
        alt={story.title}
        className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-6 md:p-8 flex flex-col justify-end translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
        <div className="flex items-center gap-3 mb-3">
          <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[9px] font-bold text-white uppercase tracking-widest">
            {story.tag}
          </span>
          <span className="text-white/60 text-[10px] font-bold uppercase">{story.date}</span>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight tracking-tighter mb-4">
          {story.title}
        </h3>
        <button
          onClick={onOpen}
          className="w-12 h-12 rounded-full bg-[#EC9232] flex items-center justify-center text-white shadow-xl hover:scale-110 transition-transform"
        >
          <ArrowUpRight size={20} />
        </button>
      </div>
    </div>
  </motion.div>
);

const Modal = ({ story, close }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl"
    onClick={close}
  >
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 50, opacity: 0 }}
      className="relative bg-white dark:bg-[#0a0a0a] w-full max-w-5xl rounded-[3rem] overflow-hidden flex flex-col lg:flex-row max-h-[90vh] border border-white/5"
      onClick={(e) => e.stopPropagation()}
    >
      <button onClick={close} className="absolute top-6 right-6 z-50 p-3 bg-black dark:bg-white text-white dark:text-black rounded-full hover:rotate-90 transition-transform">
        <X size={18} />
      </button>
      <div className="lg:w-1/2 h-64 lg:h-auto">
        <img src={story.image} className="w-full h-full object-cover" alt="" />
      </div>
      <div className="lg:w-1/2 p-8 md:p-12 overflow-y-auto">
        <span className="text-[#EC9232] font-black text-[10px] uppercase tracking-[0.3em] block mb-4">Case Study 2026</span>
        <h2 className="text-4xl md:text-5xl font-black text-slate-950 dark:text-white tracking-tighter leading-none mb-6">{story.title}</h2>
        <p className="text-xl font-medium text-slate-900 dark:text-slate-200 leading-snug mb-6 italic border-l-4 border-[#EC9232] pl-6">"{story.desc}"</p>
        <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-8">{story.detailDesc}</p>
        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-between gap-4">
          <p className="text-sm font-bold dark:text-white">Join the mission</p>
          <button className="px-6 py-3 bg-[#EC9232] text-white rounded-xl font-bold text-sm transition-all">Donate Now</button>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

export default RecentStories;