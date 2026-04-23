// "use client";

// import React, { useState, useEffect } from "react";
// import {
//   motion,
//   AnimatePresence,
//   useScroll,
//   useMotionValueEvent,
// } from "framer-motion";
// import { Menu, X, Rocket, ArrowUpRight } from "lucide-react";
// import Link from "next/link";
// import { ThemeToggle } from "./ThemeToggle"; // Adjust path as needed

// const navLinks = [
//   { name: "Projects", href: "#projects" },
//   { name: "About Us", href: "#about" },
//   { name: "Impact", href: "#impact" },
//   { name: "Transparency", href: "#transparency" },
// ];

// export const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isHidden, setIsHidden] = useState(false);
//   const [dark, setDark] = useState(false);

//   // Theme Initializer
//   useEffect(() => {
//     const theme = localStorage.getItem("theme");
//     if (
//       theme === "dark" ||
//       (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)
//     ) {
//       document.documentElement.classList.add("dark");
//       setDark(true);
//     }
//   }, []);

//   const toggleTheme = () => {
//     if (dark) {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//       setDark(false);
//     } else {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//       setDark(true);
//     }
//   };

//   const { scrollY } = useScroll();

//   useMotionValueEvent(scrollY, "change", (latest) => {
//     const previous = scrollY.getPrevious() ?? 0;
//     setIsScrolled(latest > 50);
//     if (latest > previous && latest > 150) {
//       setIsHidden(true);
//       setIsOpen(false);
//     } else {
//       setIsHidden(false);
//     }
//   });

//   return (
//     <header
//       className={`fixed left-0 w-full z-[100] flex justify-center px-4 pointer-events-none transition-all duration-500 ${
//         isScrolled ? "top-4" : "top-8"
//       }`}
//     >
//       <motion.nav
//         variants={{
//           visible: { y: 0, opacity: 1 },
//           hidden: { y: -120, opacity: 0 },
//         }}
//         animate={isHidden ? "hidden" : "visible"}
//         transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
//         className={`pointer-events-auto relative flex items-center justify-between rounded-full transition-all duration-500 ${
//           isScrolled
//             ? "w-full max-w-5xl px-6 py-2.5 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200 dark:border-white/10 shadow-lg"
//             : "w-full max-w-7xl px-8 py-4 bg-transparent border border-transparent"
//         }`}
//       >
//         {/* LOGO */}
//         <Link href="/" className="flex items-center gap-3 group z-50">
//           <motion.div
//             whileHover={{ rotate: -10, scale: 1.1 }}
//             className="w-10 h-10 bg-indigo-600 dark:bg-indigo-500 rounded-2xl flex items-center justify-center text-white shadow-lg"
//           >
//             <Rocket size={20} fill="currentColor" />
//           </motion.div>
//           <span className="text-xl font-black tracking-tighter uppercase">
//             <span className="text-slate-900 dark:text-white">One</span>
//             <span className="text-indigo-600 dark:text-indigo-400">ness</span>
//           </span>
//         </Link>

//         {/* DESKTOP NAV */}
//         <div className="hidden lg:flex items-center gap-1">
//           {navLinks.map((link, index) => (
//             <Link
//               key={link.name}
//               href={link.href}
//               onMouseEnter={() => setHoveredIndex(index)}
//               onMouseLeave={() => setHoveredIndex(null)}
//               className="relative px-5 py-2 text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white transition-colors"
//             >
//               <span className="relative z-10">{link.name}</span>
//               <AnimatePresence>
//                 {hoveredIndex === index && (
//                   <motion.div
//                     layoutId="navHover"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     className="absolute inset-0 bg-slate-100 dark:bg-white/10 rounded-full -z-10"
//                     transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
//                   />
//                 )}
//               </AnimatePresence>
//             </Link>
//           ))}
//         </div>

//         {/* ACTIONS */}
//         <div className="flex items-center gap-4 z-50">
//           {/* ULTRA THEME TOGGLE */}
//           <ThemeToggle dark={dark} toggleTheme={toggleTheme} />

//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-slate-900 dark:bg-slate-50 text-white dark:text-slate-950 text-[13px] font-bold rounded-full transition-all shadow-md"
//           >
//             Donate Here
//             <ArrowUpRight size={16} strokeWidth={3} />
//           </motion.button>

//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="lg:hidden p-2.5 text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800 rounded-full"
//           >
//             {isOpen ? <X size={22} /> : <Menu size={22} />}
//           </button>
//         </div>

//         {/* MOBILE MENU */}
//         <AnimatePresence>
//           {isOpen && (
//             <motion.div
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               className="lg:hidden absolute top-[110%] left-0 right-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border border-slate-200 dark:border-white/10 rounded-[2rem] p-8 shadow-2xl"
//             >
//               <div className="flex flex-col gap-5 items-center">
//                 {navLinks.map((link) => (
//                   <Link
//                     key={link.name}
//                     href={link.href}
//                     onClick={() => setIsOpen(false)}
//                     className="text-2xl font-black text-slate-900 dark:text-white"
//                   >
//                     {link.name}
//                   </Link>
//                 ))}
//                 <button className="w-full py-4 bg-indigo-600 text-white font-bold rounded-2xl">
//                   Join Oneness
//                 </button>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </motion.nav>
//     </header>
//   );
// };

"use client";

import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Menu, X, Rocket, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { name: "Projects", href: "#projects" },
  { name: "About Us", href: "#about" },
  { name: "Impact", href: "#impact" },
  { name: "Transparency", href: "#transparency" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dark, setDark] = useState(false);

  // Theme Initializer
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark" || (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
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
        className={`pointer-events-auto relative flex items-center justify-between rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled
            ? "mt-4 w-full max-w-5xl px-6 py-2 bg-white/90 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
            : "mt-8 w-full max-w-7xl px-8 py-4 bg-transparent border border-transparent"
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
        </div>

        {/* ACTIONS */}
        <div className="flex items-center gap-4 z-50">
          <ThemeToggle dark={dark} toggleTheme={toggleTheme} />

          <motion.button
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "#EC9232",
              boxShadow: "0 10px 20px rgba(236, 146, 50, 0.3)" 
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

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              className="lg:hidden absolute top-[115%] left-0 right-0 bg-white/98 dark:bg-slate-900/98 backdrop-blur-2xl border border-slate-200 dark:border-white/10 rounded-[2.5rem] p-8 shadow-2xl origin-top"
            >
              <div className="flex flex-col gap-6 items-center">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-black text-slate-950 dark:text-white hover:text-[#EC9232] transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <motion.button 
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-4 bg-[#EC9232] text-white font-black rounded-2xl shadow-lg shadow-orange-500/20"
                >
                  Join Oneness
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
};