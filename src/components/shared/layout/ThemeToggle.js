"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Sparkles } from "lucide-react";

export const ThemeToggle = ({ dark, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="relative flex h-10 w-20 items-center rounded-full bg-slate-200 p-1 transition-colors duration-500 focus:outline-none dark:bg-slate-800 border border-slate-300 dark:border-slate-700 shadow-inner"
    >
      {/* Moving Background Glow */}
      <motion.div
        animate={{
          x: dark ? 40 : 0,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="absolute h-8 w-8 rounded-full bg-white shadow-lg dark:bg-slate-900 flex items-center justify-center z-10"
      >
        <AnimatePresence mode="wait">
          {dark ? (
            <motion.div
              key="moon"
              initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2 }}
            >
              <Moon size={16} className="text-yellow-400 fill-yellow-400" />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2 }}
            >
              <Sun size={16} className="text-orange-500 fill-orange-500" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Decorative Background Icons */}
      <div className="flex w-full justify-between px-2">
        <Sun size={14} className="text-slate-400 opacity-50" />
        <Moon size={14} className="text-slate-500 opacity-50" />
      </div>

      {/* Ultra Animation: Particles on click */}
      {dark && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute -top-1 -right-1"
        >
          <Sparkles size={12} className="text-yellow-200 animate-pulse" />
        </motion.div>
      )}
    </button>
  );
};
