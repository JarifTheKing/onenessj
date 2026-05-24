"use client";

import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Image as ImageIcon,
  Video,
  MapPin,
  ArrowRight,
  Maximize2,
  Layers,
  Flame,
  Utensils,
  HeartHandshake,
  Droplet,
  ChevronLeft,
  ChevronRight,
  X,
  Play,
  Inbox
} from "lucide-react";

// --- CONFIGURATIONS & STATIC DATA ---
const mediaTypes = [
  { id: "picture", name: "Photos", icon: ImageIcon },
  { id: "video", name: "Videos", icon: Video },
];

const categories = [
  { id: "all", name: "Global All", desc: "All ongoing impacts", icon: Layers },
  { id: "flood", name: "Global Relief", desc: "Flood & natural disasters", icon: Flame },
  { id: "food", name: "Food Security", desc: "Sustainable distributions", icon: Utensils },
  { id: "self", name: "Self Reliance", desc: "Livelihood & rehabilitation", icon: HeartHandshake },
  { id: "water", name: "Water & Sanitation", desc: "Clean water accessibility", icon: Droplet },
];

const galleryItems = [
  {
    id: 1,
    type: "picture",
    category: "food",
    title: "Sustainable Food Distribution",
    location: "Bangladesh",
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    type: "picture",
    category: "flood",
    title: "Emergency Flood Relief Action",
    location: "Yemen",
    img: "https://images.unsplash.com/photo-1594708767771-a7502209ff51?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    type: "picture",
    category: "self",
    title: "Community Rehabilitation Project",
    location: "Kenya",
    img: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    type: "picture",
    category: "water",
    title: "Clean Water Deep Tube-Well Project",
    location: "Nepal",
    img: "https://images.unsplash.com/photo-1541542684-d2c682d5a62d?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 5,
    type: "video",
    category: "flood",
    title: "On-Ground Emergency Medical Response",
    location: "Syria",
    img: "https://images.unsplash.com/photo-1504151932400-72d425550d2d?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 6,
    type: "picture",
    category: "food",
    title: "Nutrition & Food Pack Distribution",
    location: "Somalia",
    img: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 7,
    type: "picture",
    category: "flood",
    title: "Rescue Boat Deployment & Evacuations",
    location: "Bangladesh",
    img: "https://images.unsplash.com/photo-1461532257747-82c6f91afe9d?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 8,
    type: "picture",
    category: "water",
    title: "Water Filtration System Assembly",
    location: "Pakistan",
    img: "https://images.unsplash.com/photo-1538300342682-85519b3d9641?auto=format&fit=crop&q=80&w=800",
  },
];

const ITEMS_PER_PAGE = 6;

export default function GalleryPage() {
  const [activeType, setActiveType] = useState("picture");
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedItem, setSelectedItem] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // --- KEYBOARD LISTENERS FOR ACCESSIBILITY ---
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedItem(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // --- FILTER & PAGINATION LOGIC ---
  const filteredItems = useMemo(() => {
    return galleryItems.filter((item) => {
      const typeMatch = item.type === activeType;
      const categoryMatch = activeCategory === "all" || item.category === activeCategory;
      return typeMatch && categoryMatch;
    });
  }, [activeType, activeCategory]);

  const totalPages = useMemo(() => {
    return Math.ceil(filteredItems.length / ITEMS_PER_PAGE) || 1;
  }, [filteredItems]);

  const safeCurrentPage = Math.min(currentPage, totalPages);

  const paginatedItems = useMemo(() => {
    const startIndex = (safeCurrentPage - 1) * ITEMS_PER_PAGE;
    return filteredItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredItems, safeCurrentPage]);

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    setCurrentPage(1);
  };

  const handleTypeChange = (typeId) => {
    setActiveType(typeId);
    setActiveCategory("all");
    setCurrentPage(1);
  };

  const resetFilters = () => {
    setActiveType("picture");
    setActiveCategory("all");
    setCurrentPage(1);
  };

  // --- ANIMATION VARIANTS ---
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.05 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 140, damping: 20 },
    },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
  };

  return (
    <main className="min-h-screen bg-black text-white pt-24 md:pt-32 pb-20 overflow-x-hidden selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* HERO HEADER */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10 md:mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-semibold tracking-wider uppercase mb-4 border border-indigo-500/20"
        >
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
          Pure Transparency In Action
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight"
        >
          Our World of Action:{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
            Global Gallery
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-sm sm:text-base md:text-lg text-zinc-400 max-w-2xl mx-auto font-medium px-2"
        >
          Witness real-time programmatic impact across the globe. Every picture
          and video represents thousands of lives transformed.
        </motion.p>

        {/* MEDIA TYPE TABS */}
        <div className="flex justify-center mt-8 md:mt-10">
          <div className="bg-zinc-900 border border-zinc-800 p-1.5 rounded-full flex items-center gap-1 shadow-2xl w-full max-w-[280px] sm:max-w-xs">
            {mediaTypes.map((type, index) => {
              const Icon = type.icon;
              const isActive = activeType === type.id;
              return (
                <button
                  key={type.id}
                  onClick={() => handleTypeChange(type.id)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`relative flex-1 flex items-center justify-center gap-2 py-2.5 text-xs sm:text-sm font-bold rounded-full transition-colors duration-300 z-10 ${
                    isActive ? "text-white" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Icon size={16} />
                    {type.name}
                  </span>
                  
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        layoutId="activeMediaTab"
                        className="absolute inset-0 bg-indigo-600 border border-indigo-500 rounded-full -z-10 shadow-lg shadow-indigo-600/20"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 28,
                        }}
                      />
                    )}
                    {!isActive && hoveredIndex === index && (
                      <motion.div
                        layoutId="navHover"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="absolute inset-0 bg-zinc-800 rounded-full -z-10 border border-zinc-700"
                        transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
                      />
                    )}
                  </AnimatePresence>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* GALLERY MAIN CANVAS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        {/* RESPONSIVE FILTER SIDEBAR */}
        <aside className="lg:col-span-1 bg-zinc-900/60 backdrop-blur-xl border border-zinc-800 rounded-3xl p-4 shadow-2xl lg:sticky lg:top-28 z-20 overflow-x-auto lg:overflow-visible custom-scrollbar">
          <div className="flex lg:flex-col gap-2 min-w-[580px] lg:min-w-0">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`group relative flex-1 lg:w-full flex items-center lg:items-start gap-3 p-3.5 rounded-2xl text-left transition-all duration-300 overflow-hidden ${
                    isSelected
                      ? "text-white scale-[0.99]"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
                  }`}
                >
                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        layoutId="activeCategoryPill"
                        className="absolute inset-0 bg-indigo-600/10 border border-indigo-500/20 -z-10 rounded-2xl"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 26,
                        }}
                      />
                    )}
                  </AnimatePresence>
                  <div
                    className={`p-2 rounded-xl transition-colors duration-200 shrink-0 bg-zinc-800 text-zinc-400 group-hover:bg-indigo-600/20 group-hover:text-indigo-400 ${
                      isSelected ? "bg-indigo-600 !text-white" : ""
                    }`}
                  >
                    <Icon size={16} />
                  </div>
                  <div className="flex-1 min-w-0 pr-1">
                    <h4 className="text-xs sm:text-sm font-bold tracking-tight truncate">
                      {cat.name}
                    </h4>
                    <p
                      className={`hidden sm:block text-[11px] mt-0.5 truncate font-medium ${
                        isSelected ? "text-indigo-300/80" : "text-zinc-500"
                      }`}
                    >
                      {cat.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </aside>

        {/* CONTENT CANVAS */}
        <div className="lg:col-span-3 flex flex-col gap-8 md:gap-10">
          <AnimatePresence mode="wait">
            {paginatedItems.length === 0 ? (
              <motion.div 
                key="empty-state"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex flex-col items-center justify-center text-center p-12 bg-zinc-900 border border-zinc-800 rounded-3xl min-h-[300px]"
              >
                <div className="p-4 bg-zinc-800 text-zinc-500 rounded-full mb-4">
                  <Inbox size={32} />
                </div>
                <h3 className="text-lg font-bold text-white">No items found</h3>
                <p className="text-sm text-zinc-400 mt-1 max-w-sm">
                  We don't have records for this combination right now. Try checking our complete timeline.
                </p>
                <button
                  onClick={resetFilters}
                  className="mt-5 px-5 py-2.5 bg-white text-black font-bold text-xs uppercase tracking-wider rounded-xl transition-all hover:bg-zinc-200 shadow-lg"
                >
                  Clear Active Filters
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="grid-canvas"
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
              >
                <AnimatePresence mode="popLayout">
                  {paginatedItems.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      variants={cardVariants}
                      initial="hidden"
                      animate="show"
                      exit="exit"
                      onClick={() => setSelectedItem(item)}
                      className="group bg-zinc-900/40 hover:bg-zinc-900 border border-zinc-800 rounded-3xl p-3 shadow-2xl transition-all duration-300 cursor-pointer flex flex-col h-full hover:border-zinc-700"
                    >
                      {/* Card Image Container */}
                      <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-zinc-800 shrink-0">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black shadow-2xl transform scale-90 group-hover:scale-100 transition-transform duration-300">
                            {item.type === "video" ? <Play size={16} fill="currentColor" /> : <Maximize2 size={16} />}
                          </div>
                        </div>
                      </div>

                      {/* Card Details */}
                      <div className="mt-4 flex flex-col flex-1 px-1">
                        <div className="flex items-center gap-1.5 text-zinc-500 text-[11px] font-bold uppercase tracking-wider">
                          <MapPin size={12} className="text-indigo-400" />
                          {item.location}
                        </div>
                        <h3 className="mt-2 text-sm sm:text-base font-semibold text-zinc-200 group-hover:text-white transition-colors duration-200 leading-snug line-clamp-2 flex-1">
                          {item.title}
                        </h3>
                        <div className="mt-4 pt-3 border-t border-zinc-800 flex items-center justify-between text-xs font-semibold text-zinc-400 group-hover:text-indigo-400 transition-colors duration-200 shrink-0">
                          <span>View details</span>
                          <ArrowRight size={14} className="transform -rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>

          {/* PAGINATION INTERFACE */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between border-t border-zinc-800 pt-6 mt-2">
              <button
                disabled={safeCurrentPage === 1}
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                className="flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-bold text-zinc-400 hover:text-white disabled:opacity-20 disabled:hover:text-zinc-400 transition-colors duration-200 bg-zinc-900 border border-zinc-800 rounded-full shadow-lg"
              >
                <ChevronLeft size={16} />
                Previous
              </button>

              <div className="flex items-center gap-1.5">
                {Array.from({ length: totalPages }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentPage(idx + 1)}
                    className={`w-8 h-8 rounded-full text-xs font-bold flex items-center justify-center border transition-all duration-200 ${
                      safeCurrentPage === idx + 1
                        ? "bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-600/20"
                        : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white"
                    }`}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>

              <button
                disabled={safeCurrentPage === totalPages}
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                className="flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-bold text-zinc-400 hover:text-white disabled:opacity-20 disabled:hover:text-zinc-400 transition-colors duration-200 bg-zinc-900 border border-zinc-800 rounded-full shadow-lg"
              >
                Next
                <ChevronRight size={16} />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* MODERN MEDIA MODAL LIGHTBOX */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop Layer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative bg-zinc-900 w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl z-10 border border-zinc-800 flex flex-col md:flex-row max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-visible"
            >
              {/* Close Button Trigger */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-sm transition-colors border border-zinc-800"
              >
                <X size={18} />
              </button>

              {/* View Screen Container */}
              <div className="md:flex-1 bg-black flex items-center justify-center aspect-video md:aspect-auto md:min-h-[450px] relative">
                {selectedItem.type === "video" ? (
                  <div className="w-full h-full relative flex items-center justify-center">
                    <img
                      src={selectedItem.img}
                      alt={selectedItem.title}
                      className="w-full h-full object-cover opacity-50"
                    />
                    <div className="absolute p-4 rounded-full bg-indigo-600 text-white shadow-xl shadow-indigo-600/30 cursor-pointer hover:scale-110 transition-transform">
                      <Play size={24} fill="currentColor" />
                    </div>
                  </div>
                ) : (
                  <img
                    src={selectedItem.img}
                    alt={selectedItem.title}
                    className="w-full h-full object-contain"
                  />
                )}
              </div>

              {/* Details Side Context Panel */}
              <div className="p-6 md:w-72 flex flex-col justify-between bg-zinc-900 shrink-0 border-t md:border-t-0 md:border-l border-zinc-800">
                <div>
                  <div className="flex items-center gap-1.5 text-zinc-500 text-xs font-bold uppercase tracking-wider">
                    <MapPin size={12} className="text-indigo-400" />
                    {selectedItem.location}
                  </div>
                  <h2 className="mt-3 text-lg font-bold text-white tracking-tight leading-tight">
                    {selectedItem.title}
                  </h2>
                  <p className="mt-4 text-xs sm:text-sm text-zinc-400 leading-relaxed font-medium">
                    This programmatic output undergoes structured field auditations. Every contribution is mapped transparently directly on-ground.
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-zinc-800 flex flex-col gap-2">
                  <button className="w-full py-3 bg-white hover:bg-zinc-200 text-black font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-colors">
                    Support This Cause
                  </button>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="w-full py-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors border border-zinc-700"
                  >
                    Close Gallery
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}