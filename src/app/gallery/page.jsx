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
  Inbox,
  Beef,
} from "lucide-react";

// --- CONFIGURATIONS & STATIC DATA ---
const mediaTypes = [
  { id: "picture", name: "Photos", icon: ImageIcon },
  { id: "video", name: "Videos", icon: Video },
];

const categories = [
  { id: "all", name: "Global All", desc: "All ongoing impacts", icon: Layers },
  {
    id: "flood",
    name: "Global Relief",
    desc: "Flood & natural disasters",
    icon: Flame,
  },
  {
    id: "qurbani",
    name: "Qurbani Donate",
    desc: "Sustainable distributions",
    icon: Beef,
  },
  {
    id: "self",
    name: "Self Reliance",
    desc: "Livelihood & rehabilitation",
    icon: HeartHandshake,
  },
  {
    id: "water",
    name: "Water & Sanitation",
    desc: "Clean water accessibility",
    icon: Droplet,
  },
];

const galleryItems = [
  // --- Existing Items ---
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

  // --- New Qurbani Gallery Items ---
  {
    id: 9,
    type: "picture",
    category: "qurbani",
    title: "Qurbani Distribution Day 1",
    location: "Global",
    img: "/images/Gallery/Pics1.jpg",
  },
  {
    id: 10,
    type: "picture",
    category: "qurbani",
    title: "Community Meat Distribution",
    location: "Global",
    img: "/images/Gallery/Pics2.jpeg",
  },
  {
    id: 11,
    type: "picture",
    category: "qurbani",
    title: "Qurbani Preparation",
    location: "Global",
    img: "/images/Gallery/Pics3.jpeg",
  },
  {
    id: 12,
    type: "picture",
    category: "qurbani",
    title: "Distribution Outreach",
    location: "Global",
    img: "/images/Gallery/Pics4.jpeg",
  },
  {
    id: 13,
    type: "picture",
    category: "qurbani",
    title: "Sustainable Qurbani Aid",
    location: "Global",
    img: "/images/Gallery/Pics5.jpeg",
  },
  {
    id: 14,
    type: "picture",
    category: "qurbani",
    title: "Final Distribution Batch",
    location: "Global",
    img: "/images/Gallery/Pics6.jpeg",
  },
];

const ITEMS_PER_PAGE = 6;

export default function GalleryPage() {
  const [activeType, setActiveType] = useState("picture");
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedItem, setSelectedItem] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedItem(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredItems = useMemo(() => {
    return galleryItems.filter((item) => {
      return (
        item.type === activeType &&
        (activeCategory === "all" || item.category === activeCategory)
      );
    });
  }, [activeType, activeCategory]);

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE) || 1;
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const paginatedItems = filteredItems.slice(
    (safeCurrentPage - 1) * ITEMS_PER_PAGE,
    safeCurrentPage * ITEMS_PER_PAGE,
  );

  const resetFilters = () => {
    setActiveType("picture");
    setActiveCategory("all");
    setCurrentPage(1);
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black text-slate-900 dark:text-white pt-24 md:pt-32 pb-20 overflow-x-hidden">
      {/* HERO HEADER */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10 md:mb-16">
        <motion.div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold tracking-wider uppercase mb-4 border border-indigo-500/20">
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
          Pure Transparency In Action
        </motion.div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight">
          Our World of Action:{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
            Global Gallery
          </span>
        </h1>

        <p className="mt-4 text-sm sm:text-base md:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto font-medium px-2">
          Witness real-time programmatic impact across the globe.
        </p>

        {/* MEDIA TYPE TABS */}
        <div className="flex justify-center mt-8 md:mt-10">
          <div className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-1.5 rounded-full flex items-center gap-1 shadow-lg w-full max-w-[280px] sm:max-w-xs">
            {mediaTypes.map((type, index) => {
              const Icon = type.icon;
              const isActive = activeType === type.id;
              return (
                <button
                  key={type.id}
                  onClick={() => {
                    setActiveType(type.id);
                    setActiveCategory("all");
                    setCurrentPage(1);
                  }}
                  className={`relative flex-1 flex items-center justify-center gap-2 py-2.5 text-xs sm:text-sm font-bold rounded-full transition-colors duration-300 ${isActive ? "text-white" : "text-zinc-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white"}`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Icon size={16} /> {type.name}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="activeMediaTab"
                      className="absolute inset-0 bg-indigo-600 rounded-full"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* GALLERY MAIN CANVAS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="lg:col-span-1 bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-4 lg:sticky lg:top-28 self-start">
          <div className="flex lg:flex-col gap-2">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setCurrentPage(1);
                  }}
                  className={`flex items-center gap-3 p-3.5 rounded-2xl w-full text-left transition-all ${isSelected ? "bg-indigo-600/10 dark:bg-indigo-600/20 text-indigo-700 dark:text-white" : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800/50"}`}
                >
                  <Icon size={18} />
                  <span className="text-sm font-bold">{cat.name}</span>
                </button>
              );
            })}
          </div>
        </aside>

        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {paginatedItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-3 cursor-pointer transition-all hover:border-indigo-500"
              >
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-zinc-200 dark:bg-zinc-800">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="mt-4 px-1">
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-zinc-200 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-500 mt-1">{item.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="relative bg-white dark:bg-zinc-900 p-6 rounded-3xl max-w-lg w-full border border-zinc-200 dark:border-zinc-800"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-zinc-100 dark:bg-zinc-800"
              >
                <X size={18} />
              </button>
              <img
                src={selectedItem.img}
                className="w-full rounded-2xl"
                alt=""
              />
              <h2 className="mt-4 text-xl font-bold">{selectedItem.title}</h2>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
