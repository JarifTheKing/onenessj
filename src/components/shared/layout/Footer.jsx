// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import {
//   Rocket,
//   ArrowUpRight,
//   Mail,
//   Globe,
//   Sparkles,
//   Heart,
//   ShieldCheck,
// } from "lucide-react";

// const footerLinks = [
//   { label: "Projects", href: "#" },
//   { label: "How it Works", href: "#" },
//   { label: "Transparency", href: "#" },
//   { label: "Impact", href: "#" },
//   { label: "About Us", href: "#" },
//   { label: "Contact", href: "#" },
// ];

// const containerVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { staggerChildren: 0.1 },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, scale: 0.95 },
//   visible: { opacity: 1, scale: 1 },
// };

// export const Footer = () => {
//   return (
//     <footer className="relative overflow-hidden border-t border-slate-200 bg-white pt-24 pb-12 dark:border-white/10 dark:bg-black transition-colors duration-500">

//       {/* --- BACKGROUND AURORA (Synced with Hero) --- */}
//       <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
//         <motion.div
//           animate={{
//             scale: [1, 1.1, 1],
//             opacity: [0.1, 0.2, 0.1],
//           }}
//           transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
//           className="absolute -bottom-32 left-1/2 h-[500px] w-full -translate-x-1/2 bg-indigo-500/20 blur-[120px] dark:bg-indigo-600/10"
//         />
//         <motion.div
//           animate={{ x: [-30, 30, -30], y: [0, 20, 0] }}
//           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute bottom-0 right-[5%] h-64 w-64 rounded-full bg-[#EC9232]/10 blur-[100px]"
//         />
//       </div>

//       <div className="max-w-7xl mx-auto px-6 relative z-10">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           variants={containerVariants}
//           className="flex flex-col items-center text-center"
//         >
//           {/* Brand Badge */}
//           <motion.div
//             variants={itemVariants}
//             className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/50 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-700 dark:border-indigo-500/20 dark:bg-indigo-500/10 dark:text-indigo-400"
//           >
//             <Sparkles size={12} className="text-[#EC9232] fill-[#EC9232]/20" />
//             Trust through transparency
//           </motion.div>

//           {/* Logo Section */}
//           <motion.div variants={itemVariants} className="mt-10">
//             <Link href="/" className="flex items-center justify-center gap-3 group">
//               <motion.div
//                 whileHover={{ rotate: 12, scale: 1.1 }}
//                 className="w-12 h-12 bg-slate-950 dark:bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-2xl transition-transform"
//               >
//                 <Rocket size={22} fill="currentColor" />
//               </motion.div>
//               <span className="text-3xl font-black tracking-tighter uppercase text-slate-950 dark:text-white">
//                 One<span className="text-indigo-600 dark:text-indigo-400">ness</span>
//               </span>
//             </Link>
//           </motion.div>

//           {/* Slogan */}
//           <motion.p
//             variants={itemVariants}
//             className="mt-6 max-w-lg text-sm md:text-base font-semibold leading-relaxed text-slate-700 dark:text-slate-400"
//           >
//             স্বচ্ছতা যেখানে মূল ভিত্তি। প্রতিটি অনুদান সরাসরি মানুষের জীবনে
//             পরিবর্তন নিয়ে আসে।
//           </motion.p>

//           {/* Links Grid */}
//           <motion.div
//             variants={containerVariants}
//             className="mt-12 flex flex-wrap items-center justify-center gap-3"
//           >
//             {footerLinks.map((item) => (
//               <motion.div key={item.label} variants={itemVariants}>
//                 <Link
//                   href={item.href}
//                   className="group relative flex items-center gap-1 overflow-hidden rounded-full border border-slate-200 bg-white/80 px-6 py-2.5 text-xs font-bold text-slate-800 transition-all hover:border-[#EC9232] hover:text-[#EC9232] dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-[#EC9232] shadow-sm hover:shadow-md"
//                 >
//                   {item.label}
//                   <ArrowUpRight size={14} className="opacity-40 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
//                 </Link>
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* Contact Bar (Glassmorphism Fix) */}
//           <motion.div
//             variants={itemVariants}
//             className="mt-16 w-full max-w-2xl flex flex-col sm:flex-row gap-4 rounded-[2.5rem] border border-slate-200/60 bg-slate-50/50 p-3 backdrop-blur-md dark:border-white/10 dark:bg-white/5"
//           >
//             <a
//               href="mailto:support@oneness.com"
//               className="flex-1 flex items-center justify-center gap-3 rounded-[1.8rem] bg-white px-6 py-4 text-sm font-bold text-slate-900 shadow-sm transition-all hover:bg-slate-100 dark:bg-zinc-900/50 dark:text-slate-200 dark:hover:bg-zinc-800"
//             >
//               <div className="w-9 h-9 rounded-full bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center">
//                 <Mail size={16} className="text-indigo-600 dark:text-indigo-400" />
//               </div>
//               support@oneness.com
//             </a>
//             <div className="flex-1 flex items-center justify-center gap-3 rounded-[1.8rem] bg-white/40 px-6 py-4 text-sm font-bold text-slate-600 dark:bg-zinc-900/20 dark:text-slate-400">
//               <div className="w-9 h-9 rounded-full bg-[#EC9232]/10 flex items-center justify-center">
//                 <ShieldCheck size={18} className="text-[#EC9232]" />
//               </div>
//               Verified Platform
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* Bottom Bar */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 0.6 }}
//           className="mt-24 flex flex-col gap-8 border-t border-slate-200/80 pt-12 text-[11px] font-bold uppercase tracking-[0.15em] text-slate-500 dark:border-white/10 sm:flex-row sm:items-center sm:justify-between"
//         >
//           <p className="text-slate-400 dark:text-slate-500">© {new Date().getFullYear()} Oneness Project.</p>

//           <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
//             Made with <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" />
//             for Global Impact
//           </div>

//           <div className="flex items-center gap-8">
//             <Link href="#" className="hover:text-indigo-600 transition-colors">Privacy</Link>
//             <Link href="#" className="hover:text-indigo-600 transition-colors">Terms</Link>
//             <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100/80 dark:bg-zinc-900 border border-slate-200 dark:border-white/5">
//               <Globe size={12} className="text-[#EC9232]" /> <span>BD</span>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Rocket,
  ArrowUpRight,
  Mail,
  Globe,
  Sparkles,
  Heart,
  Code2,
} from "lucide-react";

const footerLinks = [
  { label: "Projects", href: "#" },
  { label: "Transparency", href: "#" },
  { label: "Impact", href: "#" },
  { label: "About Us", href: "#" },
];

// --- ULTRA REVEAL VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.2 },
  },
};

const liftVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-white pt-16 pb-8 dark:border-white/10 dark:bg-black transition-colors duration-500">
      {/* --- REFINED COMPACT AURORA --- */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 left-1/2 h-[300px] w-full -translate-x-1/2 bg-indigo-500/20 blur-[100px] dark:bg-indigo-600/10"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-6 items-start"
        >
          {/* 1. Brand Section - Column 5 */}
          <div className="md:col-span-5 flex flex-col items-start">
            <motion.div variants={liftVariants}>
              <Link href="/" className="flex items-center gap-2.5 group">
                <motion.div
                  whileHover={{ rotate: -10, scale: 1.1 }}
                  className="w-10 h-10 bg-slate-950 dark:bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-xl"
                >
                  <Rocket size={20} fill="currentColor" />
                </motion.div>
                <span className="text-2xl font-black tracking-tighter uppercase text-slate-950 dark:text-white">
                  One
                  <span className="text-indigo-600 dark:text-indigo-400">
                    ness
                  </span>
                </span>
              </Link>
              <p className="mt-4 max-w-sm text-xs font-bold leading-relaxed text-slate-600 dark:text-slate-400">
                স্বচ্ছতা যেখানে মূল ভিত্তি। প্রতিটি অনুদান সরাসরি মানুষের জীবনে
                পরিবর্তন নিয়ে আসে।
              </p>
            </motion.div>
          </div>

          {/* 2. Links Section - Column 3 */}
          <div className="md:col-span-3">
            <motion.h4
              variants={liftVariants}
              className="text-[10px] font-black uppercase tracking-widest text-indigo-600 mb-4"
            >
              Navigation
            </motion.h4>
            <motion.div
              variants={containerVariants}
              className="flex flex-col gap-2.5"
            >
              {footerLinks.map((item) => (
                <motion.div key={item.label} variants={liftVariants}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-1 text-sm font-bold text-slate-800 hover:text-[#EC9232] dark:text-slate-300 dark:hover:text-[#EC9232] transition-colors"
                  >
                    {item.label}
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                    />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* 3. Dynamic Contact Card - Column 4 */}
          <div className="md:col-span-4">
            <motion.div
              variants={liftVariants}
              className="rounded-3xl border border-slate-200/60 bg-slate-50/50 p-4 backdrop-blur-md dark:border-white/10 dark:bg-white/5"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#EC9232]/10 flex items-center justify-center">
                  <Sparkles size={14} className="text-[#EC9232]" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                  Reach Out
                </span>
              </div>
              <a
                href="mailto:support@oneness.com"
                className="flex items-center gap-3 group text-sm font-bold text-slate-900 dark:text-slate-200"
              >
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-900 flex items-center justify-center shadow-sm group-hover:shadow-indigo-500/20 transition-all">
                  <Mail size={16} className="text-indigo-600" />
                </div>
                support@oneness.com
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* REFINED BOTTOM BAR */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex flex-col gap-6 border-t border-slate-100 pt-8 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:border-white/5 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
            <p>© {new Date().getFullYear()} Oneness.</p>
            <div className="flex items-center gap-1 text-slate-600 dark:text-slate-500">
              Made with{" "}
              <Heart size={12} className="text-red-500 fill-red-500" />
            </div>

            {/* --- FANCY AUTHOR BADGE --- */}
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/30 font-bold lowercase tracking-normal normal-case">
              <Code2 size={11} className="text-[#EC9232]" />
              crafted by{" "}
              <span className="font-black bg-gradient-to-r from-indigo-600 to-[#EC9232] bg-clip-text text-transparent dark:from-indigo-400 dark:to-[#EC9232]">
                Jarif Mahfuz
              </span>
            </span>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="hover:text-indigo-600 transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="#"
                className="hover:text-indigo-600 transition-colors"
              >
                Terms
              </Link>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-white/5">
              <Globe size={12} className="text-[#EC9232]" /> <span>BD</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
