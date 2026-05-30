// "use client";

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Sparkles,
//   ArrowRight,
//   UserPlus,
//   BookCheck,
//   ShieldCheck,
//   Heart,
//   Users,
// } from "lucide-react";

// // --- 1. CONFIGURATION: Ultra Animation Variants ---
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.15, // High delay between child animations
//       delayChildren: 0.3,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { y: 30, opacity: 0, scale: 0.95 },
//   visible: {
//     y: 0,
//     opacity: 1,
//     scale: 1,
//     transition: {
//       type: "spring",
//       stiffness: 110,
//       damping: 22,
//     },
//   },
// };

// const cardVariants = {
//   hidden: { y: 20, opacity: 0 },
//   visible: { y: 0, opacity: 1 },
// };

// // --- 2. THE VOLUNTEER DATA ---
// const volunteerData = [
//   {
//     id: 1,
//     name: "Fahim Billah",
//     role: "Chairman Of Oneness",
//     img: "/images/Fahim.jpg",
//     bio: "Join Oneness Global Reached प्लेटफार्म",
//   },
//   {
//     id: 2,
//     name: "Jarif Mahfuz",
//     role: "Verified Developer",
//     img: "/images/Jarif.jpg",
//     bio: "End-to-end Tracking & Verified Platform",
//   },
//   {
//     id: 3,
//     name: "Naim Billah",
//     role: "Impact Coordinator (Verified)",
//     img: "/images/Naim.jpg",
//     bio: "Join Oneness Impact & Transparency प्लेटफार्म",
//   },
//   {
//     id: 4,
//     name: "Arifuzzaman Bayezid",
//     role: "Project Verification Expert",
//     img: "/images/Arif.jpeg",
//     bio: "ShieldCheck End-to-end Tracking & Trust प्लेटफार्म",
//   },
// ];

// const perks = [
//   { icon: Heart, label: "Friendly to each other.", color: "text-red-500" },
//   {
//     icon: BookCheck,
//     label: "If you join with us,We will give you free training.",
//     color: "text-emerald-500",
//   },
//   {
//     icon: ShieldCheck,
//     label: "Its an opportunity to help poor children.",
//     color: "text-[#EC9232]",
//   },
//   {
//     icon: Users,
//     label: "Verified Platform (Global Reached).",
//     color: "text-indigo-600",
//   },
// ];

// export const VolunteersPage = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   return (
//     <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-black font-sans transition-colors duration-500">
//       <main className="flex-1 relative overflow-hidden">
//         {/* --- ULTRA ANIMATED BACKGROUND AURORA (Synced with brand contrast) --- */}
//         <div className="pointer-events-none absolute inset-0 overflow-hidden">
//           <motion.div
//             animate={{
//               scale: [1, 1.1, 1],
//               rotate: [0, 5, 0],
//             }}
//             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//             className="absolute top-[-20%] left-1/2 -z-10 h-[800px] w-full -translate-x-1/2 opacity-30 blur-[130px] dark:opacity-20"
//           >
//             <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-indigo-600/40 dark:bg-indigo-600/30" />
//             <motion.div
//               animate={{ x: [-100, 100, -100] }}
//               transition={{ duration: 15, repeat: Infinity }}
//               className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-[#EC9232]/30 dark:bg-[#EC9232]/20"
//             />
//           </motion.div>
//         </div>

//         <motion.section
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="max-w-7xl mx-auto px-6 py-24 md:py-32 relative z-10"
//         >
//           {/* --- TOP SECTION: Staggered Entrance --- */}
//           <div className="flex flex-col items-center text-center">
//             <motion.div
//               variants={itemVariants}
//               whileHover={{ scale: 1.05 }}
//               className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/50 px-4 py-1.5 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-indigo-700 dark:border-white/10 dark:text-indigo-400 shadow-sm"
//             >
//               <Sparkles size={14} className="text-[#EC9232] animate-pulse" />{" "}
//               OneNess Global Platform
//             </motion.div>

//             <motion.h1
//               variants={itemVariants}
//               className="mt-8 max-w-4xl text-5xl font-black tracking-tight text-slate-950 sm:text-6xl lg:text-7xl dark:text-white leading-[1.1]"
//             >
//               Meet Our
//               <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-[#EC9232] bg-clip-text text-transparent">
//                 {" "}
//                 Verified Volunteers.
//               </span>
//             </motion.h1>

//             <motion.p
//               variants={itemVariants}
//               className="mt-8 max-w-2xl text-base md:text-lg font-medium leading-relaxed text-slate-600 dark:text-slate-400 mx-auto"
//             >
//               Help today because tomorrow you may be the one who needs more
//               helping! স্বচ্ছতা যেখানে মূল ভিত্তি। প্রতিটি অনুদান সরাসরি
//               পরিবর্তন নিয়ে আসে।
//             </motion.p>
//           </div>

//           {/* --- MAIN INTERACTIVE SECTION (Responsive Layout) --- */}
//           <motion.div
//             variants={containerVariants}
//             className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
//           >
//             {/* 🌌 VOLUNTEER GRID: Ultra-Interactions with Magic Move */}
//             <motion.div
//               variants={containerVariants}
//               className="grid grid-cols-2 gap-5 relative group"
//             >
//               {volunteerData.map((v, index) => (
//                 <motion.div
//                   key={v.id}
//                   variants={cardVariants}
//                   onMouseEnter={() => setHoveredIndex(index)}
//                   onMouseLeave={() => setHoveredIndex(null)}
//                   whileHover={{ y: -5 }} // subtle float
//                   className="relative p-6 group/card rounded-[2.5rem] bg-white dark:bg-zinc-900 shadow-soft border border-slate-100 hover:border-indigo-100 dark:border-white/5 dark:hover:border-indigo-900/30 transition-all shadow- soft"
//                 >
//                   {/* --- ULTRA Micro-Interactions on hover --- */}
//                   <div className="flex flex-col items-center text-center gap-3 relative z-10">
//                     <motion.div
//                       whileHover={{ scale: 1.1, rotate: 5 }}
//                       transition={{ type: "spring", stiffness: 300 }}
//                       className="relative w-28 h-28 overflow-hidden rounded-[2rem] shadow-xl group-hover/card:shadow-indigo-500/30"
//                     >
//                       <img
//                         src={v.img}
//                         alt={v.name}
//                         className="h-full w-full object-cover transform hover:scale-110 transition-transform duration-700"
//                       />
//                     </motion.div>

//                     <h3 className="text-xl font-black tracking-tight text-slate-950 dark:text-white leading-tight mt-2">
//                       {v.name}
//                     </h3>
//                     <p className="text-[10px] font-bold uppercase tracking-widest text-indigo-700 dark:text-indigo-400">
//                       {v.role}
//                     </p>
//                     <p className="text-xs font-medium text-slate-500 dark:text-slate-500 max-w-[150px]">
//                       {v.bio}
//                     </p>
//                   </div>

//                   {/* Magic Move Highlight Pill */}
//                   <AnimatePresence>
//                     {hoveredIndex === index && (
//                       <motion.div
//                         layoutId="volunteerHover"
//                         initial={{ opacity: 0, scale: 0.9 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         exit={{ opacity: 0, scale: 0.9 }}
//                         className="absolute inset-0 bg-indigo-50 dark:bg-indigo-900/10 rounded-[2.5rem] -z-10 border border-indigo-100/50 dark:border-indigo-900/30"
//                         transition={{
//                           type: "spring",
//                           bounce: 0.3,
//                           duration: 0.5,
//                         }}
//                       />
//                     )}
//                   </AnimatePresence>
//                 </motion.div>
//               ))}
//             </motion.div>

//             {/* 💎 CALL TO ACTION & BENEFITS (Glassmorphism Fix) */}
//             <motion.div
//               variants={itemVariants}
//               className="relative p-10 lg:sticky lg:top-32 rounded-[3rem] border border-slate-200/50 bg-white/80 dark:border-white/10 dark:bg-white/5 backdrop-blur-xl shadow- soft"
//             >
//               <UserPlus size={40} className="text-[#EC9232]" />
//               <h2 className="mt-8 text-3xl font-black tracking-tight text-slate-950 dark:text-white">
//                 Become a Volunteer?
//               </h2>
//               <p className="mt-3 text-lg font-bold text-indigo-700 dark:text-indigo-400">
//                 Join your hand with us for a better life and beautiful future.
//               </p>

//               <p className="mt-6 text-sm font-medium leading-relaxed text-slate-600 dark:text-slate-400">
//                 Oneness Verified प्लेटफार्म স্বচ্ছতা connects directly witness
//                 real time transparency and unwavering audit verificatio. Active
//                 Donors प्लेटफार्म!
//               </p>

//               {/* Verified Perks List (Ultra List enter) */}
//               <motion.div
//                 variants={containerVariants}
//                 className="mt-8 space-y-3"
//               >
//                 {perks.map((p, idx) => (
//                   <motion.div
//                     key={idx}
//                     variants={itemVariants}
//                     whileHover={{ x: 5 }}
//                     className="flex items-center gap-3 p-3 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 shadow-soft shadow- soft transition-transform"
//                   >
//                     <div
//                       className={`w-8 h-8 rounded-full ${p.color}/10 flex items-center justify-center`}
//                     >
//                       <p.icon size={16} className={`${p.color}`} />
//                     </div>
//                     <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">
//                       {p.label}
//                     </p>
//                   </motion.div>
//                 ))}
//               </motion.div>

//               {/* Ultra CTA with subtle orange pulse */}
//               <motion.button
//                 whileHover={{ scale: 1.05, backgroundColor: "#EC9232" }}
//                 whileTap={{ scale: 0.95 }}
//                 className="group w-full h-16 mt-10 flex items-center justify-center gap-2 rounded-2xl bg-slate-950 text-white font-black text-lg transition-all shadow-xl dark:bg-white dark:text-black"
//               >
//                 Join With Us
//                 <ArrowRight
//                   size={18}
//                   className="transition-transform group-hover:translate-x-1"
//                 />
//               </motion.button>
//             </motion.div>
//           </motion.div>
//         </motion.section>
//       </main>
//     </div>
//   );
// };

// export default VolunteersPage;

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, UserPlus, BookCheck, ShieldCheck, Heart, Users } from "lucide-react";
import Link from "next/link"; // Import Link for routing

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0, scale: 0.95 },
  visible: { y: 0, opacity: 1, scale: 1, transition: { type: "spring", stiffness: 110, damping: 22 } },
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const volunteerData = [
  { id: 1, name: "Fahim Billah", role: "Chairman Of Oneness", img: "/images/Fahim.jpg", bio: "Join Oneness Global Reached प्लेटफार्म" },
  { id: 2, name: "Jarif Mahfuz", role: "Verified Developer", img: "/images/Jarif.jpg", bio: "End-to-end Tracking & Verified Platform" },
  { id: 3, name: "Naim Billah", role: "Impact Coordinator (Verified)", img: "/images/Naim.jpg", bio: "Join Oneness Impact & Transparency प्लेटफार्म" },
  { id: 4, name: "Arifuzzaman Bayezid", role: "Project Verification Expert", img: "/images/Arif.jpeg", bio: "ShieldCheck End-to-end Tracking & Trust प्लेटफार्म" },
];

const perks = [
  { icon: Heart, label: "Friendly to each other.", color: "text-red-500" },
  { icon: BookCheck, label: "If you join with us, We will give you free training.", color: "text-emerald-500" },
  { icon: ShieldCheck, label: "Its an opportunity to help poor children.", color: "text-[#EC9232]" },
  { icon: Users, label: "Verified Platform (Global Reached).", color: "text-indigo-600" },
];

export const VolunteersPage = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-black font-sans transition-colors duration-500">
      <main className="flex-1 relative overflow-hidden">
        {/* ... Background Animations remain the same ... */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute top-[-20%] left-1/2 -z-10 h-[800px] w-full -translate-x-1/2 opacity-30 blur-[130px] dark:opacity-20">
            <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-indigo-600/40 dark:bg-indigo-600/30" />
            <motion.div animate={{ x: [-100, 100, -100] }} transition={{ duration: 15, repeat: Infinity }} className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-[#EC9232]/30 dark:bg-[#EC9232]/20" />
          </motion.div>
        </div>

        <motion.section variants={containerVariants} initial="hidden" animate="visible" className="max-w-7xl mx-auto px-6 py-24 md:py-32 relative z-10">
          <div className="flex flex-col items-center text-center">
            <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/50 px-4 py-1.5 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-indigo-700 dark:border-white/10 dark:text-indigo-400 shadow-sm">
              <Sparkles size={14} className="text-[#EC9232] animate-pulse" /> OneNess Global Platform
            </motion.div>
            <motion.h1 variants={itemVariants} className="mt-8 max-w-4xl text-5xl font-black tracking-tight text-slate-950 sm:text-6xl lg:text-7xl dark:text-white leading-[1.1]">
              Meet Our <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-[#EC9232] bg-clip-text text-transparent">Verified Volunteers.</span>
            </motion.h1>
          </div>

          <motion.div variants={containerVariants} className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div variants={containerVariants} className="grid grid-cols-2 gap-5 relative group">
              {volunteerData.map((v, index) => (
                <motion.div key={v.id} variants={cardVariants} onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)} whileHover={{ y: -5 }} className="relative p-6 rounded-[2.5rem] bg-white dark:bg-zinc-900 shadow-soft border border-slate-100 hover:border-indigo-100 dark:border-white/5 transition-all">
                  <div className="flex flex-col items-center text-center gap-3 relative z-10">
                    <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: "spring", stiffness: 300 }} className="relative w-28 h-28 overflow-hidden rounded-[2rem] shadow-xl">
                      <img src={v.img} alt={v.name} className="h-full w-full object-cover" />
                    </motion.div>
                    <h3 className="text-xl font-black tracking-tight text-slate-950 dark:text-white mt-2">{v.name}</h3>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-indigo-700 dark:text-indigo-400">{v.role}</p>
                    <p className="text-xs font-medium text-slate-500 max-w-[150px]">{v.bio}</p>
                  </div>
                  <AnimatePresence>
                    {hoveredIndex === index && (<motion.div layoutId="volunteerHover" className="absolute inset-0 bg-indigo-50 dark:bg-indigo-900/10 rounded-[2.5rem] -z-10 border border-indigo-100/50" />)}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="relative p-10 lg:sticky lg:top-32 rounded-[3rem] border border-slate-200/50 bg-white/80 dark:border-white/10 dark:bg-white/5 backdrop-blur-xl">
              <UserPlus size={40} className="text-[#EC9232]" />
              <h2 className="mt-8 text-3xl font-black tracking-tight text-slate-950 dark:text-white">Become a Volunteer?</h2>
              <p className="mt-3 text-lg font-bold text-indigo-700 dark:text-indigo-400">Join your hand with us for a better life and beautiful future.</p>
              <div className="mt-8 space-y-3">
                {perks.map((p, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5">
                    <div className={`w-8 h-8 rounded-full ${p.color}/10 flex items-center justify-center`}><p.icon size={16} className={p.color} /></div>
                    <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">{p.label}</p>
                  </div>
                ))}
              </div>
              {/* Redirecting using Link component */}
              <Link href="/joinWithUs">
                <motion.button whileHover={{ scale: 1.05, backgroundColor: "#EC9232" }} whileTap={{ scale: 0.95 }} className="group w-full h-16 mt-10 flex items-center justify-center gap-2 rounded-2xl bg-slate-950 text-white font-black text-lg transition-all dark:bg-white dark:text-black">
                  Join With Us <ArrowRight size={18} />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.section>
      </main>
    </div>
  );
};

export default VolunteersPage;