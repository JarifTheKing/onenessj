"use client";

import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import {
  Menu,
  X,
  Rocket,
  ArrowUpRight,
  ChevronDown,
  Heart,
  History,
  User,
  CreditCard,
  Info,
  Users,
  Award,
  Phone,
} from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

// Filtered static links (Removed About Us and Contact as they are now dropdowns/sublinks)
const navLinks = [
  { name: "Home", href: "/" },
  { name: "Activities", href: "#activities" },
  { name: "Gallery", href: "/gallery" },
  { name: "Join Us", href: "/joinWithUs" },
];

const aboutSubLinks = [
  { name: "About Us", href: "/about", icon: Info },
  { name: "Team", href: "/about/team", icon: Users },
  { name: "Awards & Recognition", href: "/about/awards", icon: Award },
  { name: "Contact", href: "/about/contact", icon: Phone },
];

const donateSubLinks = [
  { name: "Donate Now", href: "/donate", icon: Heart },
  { name: "Donation History", href: "/dashboard/history", icon: History },
  { name: "Account Information", href: "/dashboard/account", icon: User },
  { name: "Auto Pay", href: "/dashboard/autopay", icon: CreditCard },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dark, setDark] = useState(false);

  // Dropdown states
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isDonateOpen, setIsDonateOpen] = useState(false);

  // Mobile accordions
  const [isAboutMobileOpen, setIsAboutMobileOpen] = useState(false);
  const [isDonateMobileOpen, setIsDonateMobileOpen] = useState(false);

  // Theme Initializer
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (
      theme === "dark" ||
      (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDark(false);
    }
  }, []);

  const toggleTheme = () => {
    if (dark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDark(true);
    }
  };

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  return (
    <header className="sticky top-0 left-0 w-full z-[100] flex justify-center px-4 pointer-events-none">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        // className={`pointer-events-auto relative flex items-center justify-between rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        //   isScrolled
        //     ? "mt-4 w-full max-w-5xl px-6 py-2 bg-white/90 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
        //     : "mt-8 w-full max-w-7xl px-8 py-4 bg-transparent border border-transparent"
        // }`}
        className={`pointer-events-auto relative flex items-center justify-between rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] w-full max-w-7xl px-8 ${
          isScrolled
            ? "mt-4 py-2 bg-white/90 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
            : "mt-8 py-4 bg-transparent border border-transparent"
        }`}
      >
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 group z-50">
          <motion.div
            whileHover={{ rotate: -10, scale: 1.1 }}
            className="w-10 h-10 bg-indigo-600 dark:bg-indigo-500 rounded-2xl flex items-center justify-center text-white shadow-lg"
          >
            <Rocket size={20} fill="currentColor" />
          </motion.div>
          <span className="text-xl font-black tracking-tighter uppercase">
            <span className="text-slate-950 dark:text-white">One</span>
            <span className="text-indigo-600 dark:text-indigo-400">ness</span>
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative px-5 py-2 text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-[#EC9232] dark:hover:text-[#EC9232] transition-colors duration-300"
            >
              <span className="relative z-10">{link.name}</span>
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    layoutId="navHover"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="absolute inset-0 bg-[#EC9232]/10 dark:bg-[#EC9232]/20 rounded-full -z-10 border border-[#EC9232]/20"
                    transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
                  />
                )}
              </AnimatePresence>
            </Link>
          ))}

          {/* ABOUT DROPDOWN TRIGGER */}
          <div
            className="relative"
            onMouseEnter={() => setIsAboutOpen(true)}
            onMouseLeave={() => setIsAboutOpen(false)}
          >
            <button className="flex items-center gap-1 px-5 py-2 text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-[#EC9232] dark:hover:text-[#EC9232] transition-colors duration-300">
              About
              <motion.span
                animate={{ rotate: isAboutOpen ? 180 : 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <ChevronDown size={14} strokeWidth={2.5} />
              </motion.span>
            </button>

            {/* ABOUT DROPDOWN CARD */}
            <AnimatePresence>
              {isAboutOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 15, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{
                    type: "spring",
                    mass: 0.6,
                    stiffness: 150,
                    damping: 16,
                  }}
                  className="absolute left-1/2 -translate-x-1/2 top-[100%] pt-3 w-64 origin-top z-50 filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.1)]"
                >
                  <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 rounded-3xl p-3.5 flex flex-col gap-1 shadow-inner">
                    {aboutSubLinks.map((subLink, idx) => {
                      const Icon = subLink.icon;
                      return (
                        <motion.div
                          key={subLink.name}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.04 }}
                        >
                          <Link
                            href={subLink.href}
                            className="group flex items-center gap-3 px-4 py-3 rounded-2xl text-[13px] font-bold text-slate-700 dark:text-slate-300 hover:text-[#EC9232] dark:hover:text-[#EC9232] hover:bg-slate-50 dark:hover:bg-white/5 transition-all duration-200"
                          >
                            <span className="p-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:bg-[#EC9232]/10 group-hover:text-[#EC9232] transition-colors duration-200">
                              <Icon size={16} />
                            </span>
                            {subLink.name}
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* DONATE DROPDOWN TRIGGER */}
          <div
            className="relative"
            onMouseEnter={() => setIsDonateOpen(true)}
            onMouseLeave={() => setIsDonateOpen(false)}
          >
            <button className="flex items-center gap-1 px-5 py-2 text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-[#EC9232] dark:hover:text-[#EC9232] transition-colors duration-300">
              Donate
              <motion.span
                animate={{ rotate: isDonateOpen ? 180 : 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <ChevronDown size={14} strokeWidth={2.5} />
              </motion.span>
            </button>

            {/* DONATE DROPDOWN CARD */}
            <AnimatePresence>
              {isDonateOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 15, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{
                    type: "spring",
                    mass: 0.6,
                    stiffness: 150,
                    damping: 16,
                  }}
                  className="absolute left-1/2 -translate-x-1/2 top-[100%] pt-3 w-64 origin-top z-50 filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.1)]"
                >
                  <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 rounded-3xl p-3.5 flex flex-col gap-1 shadow-inner">
                    {donateSubLinks.map((subLink, idx) => {
                      const Icon = subLink.icon;
                      return (
                        <motion.div
                          key={subLink.name}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.04 }}
                        >
                          <Link
                            href={subLink.href}
                            className="group flex items-center gap-3 px-4 py-3 rounded-2xl text-[13px] font-bold text-slate-700 dark:text-slate-300 hover:text-[#EC9232] dark:hover:text-[#EC9232] hover:bg-slate-50 dark:hover:bg-white/5 transition-all duration-200"
                          >
                            <span className="p-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:bg-[#EC9232]/10 group-hover:text-[#EC9232] transition-colors duration-200">
                              <Icon size={16} />
                            </span>
                            {subLink.name}
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* ACTIONS */}
        <div className="flex items-center gap-4 z-50">
          <ThemeToggle dark={dark} toggleTheme={toggleTheme} />

          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: "#EC9232",
              boxShadow: "0 10px 20px rgba(236, 146, 50, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-slate-950 dark:bg-slate-50 text-white dark:text-slate-950 text-[13px] font-bold rounded-full transition-all duration-300 shadow-md"
          >
            Donate Here
            <ArrowUpRight size={16} strokeWidth={3} />
          </motion.button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2.5 text-slate-950 dark:text-white bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* MOBILE MENU (PREMIUM LEFT SIDE SLIDE SHEET WITH GLASSMORPHISM) */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Overlay Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => {
                  setIsOpen(false);
                  setIsAboutMobileOpen(false);
                  setIsDonateMobileOpen(false);
                }}
                className="lg:hidden fixed inset-0 bg-slate-950/20 dark:bg-black/40 backdrop-blur-sm z-40"
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100vw",
                  height: "100vh",
                }}
              />

              {/* Sidebar Sheet */}
              <motion.div
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "-100%", opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 180 }}
                className="lg:hidden fixed top-0 left-0 h-screen w-[85vw] max-w-[360px] bg-white/40 dark:bg-slate-900/40 backdrop-blur-2xl border-r border-white/20 dark:border-white/5 p-6 flex flex-col justify-between shadow-2xl z-50 overflow-y-auto"
              >
                <div className="flex flex-col gap-8 pt-20">
                  <div className="flex flex-col gap-4 items-start w-full">
                    {navLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => {
                          setIsOpen(false);
                          setIsAboutMobileOpen(false);
                          setIsDonateMobileOpen(false);
                        }}
                        className="text-lg font-bold text-slate-900 dark:text-white hover:text-[#EC9232] dark:hover:text-[#EC9232] transition-colors py-2 w-full border-b border-slate-200/20 dark:border-white/5"
                      >
                        {link.name}
                      </Link>
                    ))}

                    {/* Mobile About Dropdown Container */}
                    <div className="w-full flex flex-col items-start border-b border-slate-200/20 dark:border-white/5">
                      <button
                        onClick={() => setIsAboutMobileOpen(!isAboutMobileOpen)}
                        className="flex items-center justify-between w-full text-lg font-bold text-slate-900 dark:text-white hover:text-[#EC9232] dark:hover:text-[#EC9232] transition-colors py-2"
                      >
                        About
                        <motion.span
                          animate={{ rotate: isAboutMobileOpen ? 180 : 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 15,
                          }}
                        >
                          <ChevronDown size={18} strokeWidth={2.5} />
                        </motion.span>
                      </button>

                      <motion.div
                        initial={false}
                        animate={{
                          height: isAboutMobileOpen ? "auto" : 0,
                          opacity: isAboutMobileOpen ? 1 : 0,
                        }}
                        className="w-full overflow-hidden flex flex-col items-start gap-2 bg-slate-950/5 dark:bg-white/5 rounded-2xl transition-all duration-300"
                        style={{ padding: isAboutMobileOpen ? "12px" : "0" }}
                      >
                        {aboutSubLinks.map((subLink) => {
                          const Icon = subLink.icon;
                          return (
                            <Link
                              key={subLink.name}
                              href={subLink.href}
                              onClick={() => {
                                setIsOpen(false);
                                setIsAboutMobileOpen(false);
                                setIsDonateMobileOpen(false);
                              }}
                              className="flex items-center gap-3 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-[#EC9232] dark:hover:text-[#EC9232] transition-colors py-2 w-full"
                            >
                              <Icon
                                size={16}
                                className="text-slate-500 dark:text-slate-400"
                              />
                              {subLink.name}
                            </Link>
                          );
                        })}
                      </motion.div>
                    </div>

                    {/* Mobile Donate Dropdown Container */}
                    <div className="w-full flex flex-col items-start border-b border-slate-200/20 dark:border-white/5">
                      <button
                        onClick={() =>
                          setIsDonateMobileOpen(!isDonateMobileOpen)
                        }
                        className="flex items-center justify-between w-full text-lg font-bold text-slate-900 dark:text-white hover:text-[#EC9232] dark:hover:text-[#EC9232] transition-colors py-2"
                      >
                        Donate
                        <motion.span
                          animate={{ rotate: isDonateMobileOpen ? 180 : 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 15,
                          }}
                        >
                          <ChevronDown size={18} strokeWidth={2.5} />
                        </motion.span>
                      </button>

                      <motion.div
                        initial={false}
                        animate={{
                          height: isDonateMobileOpen ? "auto" : 0,
                          opacity: isDonateMobileOpen ? 1 : 0,
                        }}
                        className="w-full overflow-hidden flex flex-col items-start gap-2 bg-slate-950/5 dark:bg-white/5 rounded-2xl transition-all duration-300"
                        style={{ padding: isDonateMobileOpen ? "12px" : "0" }}
                      >
                        {donateSubLinks.map((subLink) => {
                          const Icon = subLink.icon;
                          return (
                            <Link
                              key={subLink.name}
                              href={subLink.href}
                              onClick={() => {
                                setIsOpen(false);
                                setIsAboutMobileOpen(false);
                                setIsDonateMobileOpen(false);
                              }}
                              className="flex items-center gap-3 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-[#EC9232] dark:hover:text-[#EC9232] transition-colors py-2 w-full"
                            >
                              <Icon
                                size={16}
                                className="text-slate-500 dark:text-slate-400"
                              />
                              {subLink.name}
                            </Link>
                          );
                        })}
                      </motion.div>
                    </div>
                  </div>
                </div>

                <div className="mt-auto pb-6">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3.5 bg-[#EC9232] text-white font-bold rounded-full shadow-lg shadow-orange-500/10 text-sm"
                  >
                    Join Oneness
                  </motion.button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
};
