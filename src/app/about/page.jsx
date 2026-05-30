// // "use client";

// // import React from "react";
// // import { motion } from "framer-motion";
// // import {
// //   Compass,
// //   Eye,
// //   Award,
// //   Users2,
// //   ArrowRight,
// //   Globe2,
// //   Activity,
// //   HeartHandshake,
// // } from "lucide-react";

// // // --- ULTRA PREMIUM CINEMATIC EASING ---
// // const ultraEase = [0.16, 1, 0.3, 1];

// // const containerVariants = {
// //   hidden: {},
// //   visible: {
// //     transition: { staggerChildren: 0.08 },
// //   },
// // };

// // const itemVariants = {
// //   hidden: { opacity: 0, y: 30 },
// //   visible: {
// //     opacity: 1,
// //     y: 0,
// //     transition: { duration: 0.8, ease: ultraEase },
// //   },
// // };

// // const values = [
// //   {
// //     icon: Compass,
// //     title: "Uncompromising Integrity",
// //     desc: "We clear the fog of global philanthropy. Every single block of data, currency exchange, and localized milestone is mathematically traceable and public.",
// //     color: "text-indigo-600 dark:text-indigo-400",
// //     bg: "bg-indigo-50/60 dark:bg-indigo-950/20",
// //   },
// //   {
// //     icon: Globe2,
// //     title: "Radical Inclusivity",
// //     desc: "Human optimization knows no borders. Our infrastructure links decentralized donors to grassroot micro-communities safely, everywhere.",
// //     color: "text-emerald-600 dark:text-emerald-400",
// //     bg: "bg-emerald-50/60 dark:bg-emerald-950/20",
// //   },
// //   {
// //     icon: Activity,
// //     title: "Velocity & Impact",
// //     desc: "Bureaucracy dilutes purpose. We deploy automated validation mechanisms to transfer capital directly into real-world executions within cycles, not quarters.",
// //     color: "text-[#EC9232]",
// //     bg: "bg-orange-50/60 dark:bg-orange-950/20",
// //   },
// // ];

// // const timeline = [
// //   {
// //     year: "2023",
// //     title: "The Architecture",
// //     desc: "Founded with a mission to decentralize trust and build an unalterable global verification model for philanthropic organizations.",
// //   },
// //   {
// //     year: "2024",
// //     title: "Cross-Border Scaling",
// //     desc: "Engineered multi-currency secure nodes across 4 continents, facilitating zero-leakage donation routes to high-need zones.",
// //   },
// //   {
// //     year: "2025",
// //     title: "Ecosystem Maturation",
// //     desc: "Surpassed 1.2M lives optimized with integrated blockchain-secured auditing layers and real-time live video field logs.",
// //   },
// // ];

// // const AboutUs = () => {
// //   return (
// //     <section className="relative overflow-hidden bg-white dark:bg-[#030303] text-slate-900 dark:text-zinc-100 font-sans transition-colors duration-500 selection:bg-indigo-500 selection:text-white">
// //       {/* --- BACKGROUND AURORA ENGINE --- */}
// //       <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
// //         <motion.div
// //           animate={{
// //             scale: [1, 1.03, 1],
// //             rotate: [0, -3, 0],
// //           }}
// //           transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
// //           className="absolute top-[-10%] right-0 h-[900px] w-full blur-[160px] opacity-20 dark:opacity-[0.12]"
// //         >
// //           <div className="absolute top-10 right-1/4 h-[600px] w-[600px] rounded-full bg-indigo-500/20 dark:bg-indigo-600/10" />
// //           <div className="absolute bottom-10 left-1/3 h-[500px] w-[500px] rounded-full bg-[#EC9232]/20 dark:bg-[#EC9232]/10" />
// //         </motion.div>
// //       </div>

// //       <div className="max-w-7xl mx-auto px-6 py-24 md:py-36 relative z-10 space-y-32 md:space-y-48">
// //         {/* --- SECTION 1: HERO NARRATIVE --- */}
// //         <motion.div
// //           variants={containerVariants}
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true, margin: "-100px" }}
// //           className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
// //         >
// //           <div className="lg:col-span-7 border-l-2 border-indigo-600 pl-6 md:pl-8">
// //             <motion.div
// //               variants={itemVariants}
// //               className="inline-flex items-center gap-2 rounded-full border border-slate-100 dark:border-white/5 bg-zinc-50 dark:bg-zinc-900/50 backdrop-blur-md px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400 shadow-sm"
// //             >
// //               <Users2 size={12} className="text-[#EC9232]" />
// //               Who We Are
// //             </motion.div>

// //             <motion.h1
// //               variants={itemVariants}
// //               className="mt-6 text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-[1.05] text-slate-950 dark:text-white"
// //             >
// //               We engineer trust where it matters{" "}
// //               <span className="bg-gradient-to-r from-indigo-600 via-purple-500 to-[#EC9232] bg-clip-text text-transparent">
// //                 most.
// //               </span>
// //             </motion.h1>
// //           </div>

// //           <div className="lg:col-span-5 lg:mt-16">
// //             <motion.p
// //               variants={itemVariants}
// //               className="text-base md:text-lg leading-relaxed text-slate-500 dark:text-zinc-400 font-normal"
// //             >
// //               Oneness is an international technology collective rewriting the
// //               mechanics of human care. We construct high-integrity data
// //               pipelines that securely channel corporate and private capital
// //               directly into vetted micro-infrastructure projects worldwide.
// //             </motion.p>
// //             <motion.p
// //               variants={itemVariants}
// //               className="mt-4 text-sm md:text-base leading-relaxed text-slate-400 dark:text-zinc-500"
// //             >
// //               By blending live cryptographic accountability modules with
// //               zero-friction global networks, we permanently eliminate the
// //               administrative inefficiencies that historically bottlenecked
// //               humanitarian progress.
// //             </motion.p>
// //           </div>
// //         </motion.div>

// //         {/* --- SECTION 2: CORE VALUES --- */}
// //         <div className="space-y-16">
// //           <motion.div
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.6, ease: ultraEase }}
// //             className="text-center max-w-2xl mx-auto"
// //           >
// //             <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-950 dark:text-white">
// //               Architectural Pillars
// //             </h2>
// //             <p className="mt-4 text-slate-500 dark:text-zinc-400 text-sm md:text-base">
// //               The structural mandates that dictate our design choices,
// //               distribution networks, and daily operations.
// //             </p>
// //           </motion.div>

// //           <motion.div
// //             variants={containerVariants}
// //             initial="hidden"
// //             whileInView="visible"
// //             viewport={{ once: true, margin: "-60px" }}
// //             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
// //           >
// //             {values.map((val, idx) => (
// //               <motion.div
// //                 key={idx}
// //                 variants={itemVariants}
// //                 whileHover={{ y: -6, scale: 1.015 }}
// //                 transition={{ duration: 0.4, ease: ultraEase }}
// //                 className="group relative overflow-hidden rounded-[2rem] border border-slate-100 dark:border-white/[0.03] bg-zinc-50/40 dark:bg-zinc-950 p-8 shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-zinc-800 transition-all duration-300 cursor-default"
// //               >
// //                 <div
// //                   className={`w-12 h-12 rounded-xl flex items-center justify-center mb-8 ${val.bg} border border-transparent dark:border-white/[0.02] transition-transform duration-500 group-hover:scale-105`}
// //                 >
// //                   <val.icon size={20} className={val.color} />
// //                 </div>
// //                 <h3 className="text-xl md:text-2xl font-bold tracking-tight text-slate-950 dark:text-white mb-3">
// //                   {val.title}
// //                 </h3>
// //                 <p className="text-slate-500 dark:text-zinc-400 text-sm md:text-base leading-relaxed font-normal">
// //                   {val.desc}
// //                 </p>
// //               </motion.div>
// //             ))}
// //           </motion.div>
// //         </div>

// //         {/* --- SECTION 3: INTERACTIVE CHRONOLOGY --- */}
// //         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
// //           <motion.div
// //             initial={{ opacity: 0, x: -20 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.8, ease: ultraEase }}
// //             className="lg:col-span-4 lg:sticky lg:top-24 space-y-4"
// //           >
// //             <div className="text-xs font-bold tracking-[0.2em] text-[#EC9232] uppercase">
// //               The Proof Matrix
// //             </div>
// //             <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-950 dark:text-white leading-tight">
// //               Our Evolution at a Glance
// //             </h2>
// //             <p className="text-slate-500 dark:text-zinc-400 text-sm md:text-base leading-relaxed">
// //               We measure systemic progression through deployed software
// //               architecture, audited transparency markers, and validated
// //               ecosystem scale.
// //             </p>
// //           </motion.div>

// //           <motion.div
// //             variants={containerVariants}
// //             initial="hidden"
// //             whileInView="visible"
// //             viewport={{ once: true, margin: "-100px" }}
// //             className="lg:col-span-8 space-y-6"
// //           >
// //             {timeline.map((item, idx) => (
// //               <motion.div
// //                 key={idx}
// //                 variants={itemVariants}
// //                 whileHover={{ x: 8 }}
// //                 transition={{ duration: 0.3, ease: "easeOut" }}
// //                 className="flex gap-6 p-6 md:p-8 rounded-3xl bg-zinc-50/20 dark:bg-zinc-950/20 border border-slate-100 dark:border-white/[0.02] hover:border-slate-200 dark:hover:border-zinc-800 transition-colors group cursor-default"
// //               >
// //                 <div className="text-2xl md:text-3xl font-black text-[#EC9232] tracking-tight opacity-80 group-hover:opacity-100 transition-opacity">
// //                   {item.year}
// //                 </div>
// //                 <div className="space-y-2">
// //                   <h3 className="text-lg md:text-xl font-bold tracking-tight text-slate-950 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
// //                     {item.title}
// //                   </h3>
// //                   <p className="text-slate-500 dark:text-zinc-400 text-sm md:text-base leading-relaxed font-normal">
// //                     {item.desc}
// //                   </p>
// //                 </div>
// //               </motion.div>
// //             ))}
// //           </motion.div>
// //         </div>

// //         {/* --- SECTION 4: INTERNATIONAL AMBIENT CTA --- */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 40 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true, margin: "-40px" }}
// //           transition={{ duration: 1, ease: ultraEase }}
// //           className="rounded-[2.5rem] overflow-hidden relative bg-slate-950 dark:bg-zinc-900/30 border border-transparent dark:border-white/[0.04] p-10 md:p-16 shadow-2xl group"
// //         >
// //           {/* Subtle Kinetic Lighting Fluid Dynamics */}
// //           <div className="absolute inset-0 opacity-15 pointer-events-none mix-blend-screen dark:mix-blend-normal">
// //             <motion.div
// //               animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
// //               transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
// //               className="absolute top-0 right-0 h-96 w-96 rounded-full bg-indigo-600 blur-[140px]"
// //             />
// //             <motion.div
// //               animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
// //               transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
// //               className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[#EC9232] blur-[140px]"
// //             />
// //           </div>

// //           <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
// //             <div className="max-w-2xl">
// //               <div className="inline-flex items-center gap-2 text-[#EC9232] font-bold uppercase tracking-[0.25em] text-[11px] mb-6">
// //                 <HeartHandshake size={14} />
// //                 Global Infrastructure Alliance
// //               </div>
// //               <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-[1.1]">
// //                 {" "}
// //                 Ready to experience <br />
// //                 absolute transparency?
// //               </h2>
// //               <p className="mt-4 text-slate-400 dark:text-zinc-400 text-sm md:text-base font-normal leading-relaxed">
// //                 Connect into our ecosystem as a corporate benefactor, verified
// //                 non-governmental implementation group, or private donor today.
// //               </p>
// //             </div>

// //             <motion.button
// //               whileHover={{ scale: 1.025, backgroundColor: "#e08526" }}
// //               whileTap={{ scale: 0.98 }}
// //               transition={{ duration: 0.3, ease: ultraEase }}
// //               className="group flex items-center gap-2.5 rounded-xl bg-[#EC9232] px-7 py-4 text-white font-bold text-sm tracking-wide shadow-lg transition-colors whitespace-nowrap"
// //             >
// //               Partner With Us
// //               <ArrowRight
// //                 size={15}
// //                 className="transition-transform duration-300 ease-out group-hover:translate-x-1"
// //               />
// //             </motion.button>
// //           </div>
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default AboutUs;



// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import {
//   Compass,
//   Eye,
//   Award,
//   Users2,
//   ArrowRight,
//   Globe2,
//   Activity,
//   HeartHandshake,
// } from "lucide-react";

// // --- ULTRA PREMIUM CINEMATIC EASING ---
// const ultraEase = [0.16, 1, 0.3, 1];

// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: { staggerChildren: 0.08 },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.8, ease: ultraEase },
//   },
// };

// const values = [
//   {
//     icon: Compass,
//     title: "Radical Transparency",
//     desc: "We eliminate the fog of traditional charity. Every book purchased, localized academic milestone achieved, and meal served to a child is traceably documented and publicly accountable.",
//     color: "text-indigo-600 dark:text-indigo-400",
//     bg: "bg-indigo-50/60 dark:bg-indigo-950/20",
//   },
//   {
//     icon: Globe2,
//     title: "Grassroots Inclusivity",
//     desc: "Education knows no borders or social status. Our network maps directly into urban centers and marginalized communities to safely reach vulnerable street children where they are.",
//     color: "text-emerald-600 dark:text-emerald-400",
//     bg: "bg-emerald-50/60 dark:bg-emerald-950/20",
//   },
//   {
//     icon: Activity,
//     title: "Direct Kinetic Impact",
//     desc: "Bureaucracy stalls human progress. We utilize streamlined delivery structures to convert incoming capital directly into classrooms, teachers, and nutritional resources inside active learning cycles.",
//     color: "text-[#EC9232]",
//     bg: "bg-orange-50/60 dark:bg-orange-950/20",
//   },
// ];

// const timeline = [
//   {
//     year: "2023",
//     title: "The Visionary Blueprint",
//     desc: "Founded with an urgent mission to construct an unalterable, fully verified operational framework for free street education systems.",
//   },
//   {
//     year: "2024",
//     title: "Localized Infrastructure Development",
//     desc: "Established fully functional, secure learning hubs and safe sanctuary centers directly near high-density urban labor and street sectors.",
//   },
//   {
//     year: "2025",
//     title: "Ecosystem Prototyping",
//     desc: "Surpassed thousand of lives transformed, delivering comprehensive free curricula, daily nutritional plans, and integrated tracking software.",
//   },
// ];

// const AboutUs = () => {
//   return (
//     <section className="relative overflow-hidden bg-white dark:bg-[#030303] text-slate-900 dark:text-zinc-100 font-sans transition-colors duration-500 selection:bg-indigo-500 selection:text-white">
//       {/* --- BACKGROUND AURORA ENGINE --- */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
//         <motion.div
//           animate={{
//             scale: [1, 1.03, 1],
//             rotate: [0, -3, 0],
//           }}
//           transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute top-[-10%] right-0 h-[900px] w-full blur-[160px] opacity-20 dark:opacity-[0.12]"
//         >
//           <div className="absolute top-10 right-1/4 h-[600px] w-[600px] rounded-full bg-indigo-500/20 dark:bg-indigo-600/10" />
//           <div className="absolute bottom-10 left-1/3 h-[500px] w-[500px] rounded-full bg-[#EC9232]/20 dark:bg-[#EC9232]/10" />
//         </motion.div>
//       </div>

//       <div className="max-w-7xl mx-auto px-6 py-24 md:py-36 relative z-10 space-y-32 md:space-y-48">
//         {/* --- SECTION 1: HERO NARRATIVE --- */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
//         >
//           <div className="lg:col-span-7 border-l-2 border-indigo-600 pl-6 md:pl-8">
//             <motion.div
//               variants={itemVariants}
//               className="inline-flex items-center gap-2 rounded-full border border-slate-100 dark:border-white/5 bg-zinc-50 dark:bg-zinc-900/50 backdrop-blur-md px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400 shadow-sm"
//             >
//               <Users2 size={12} className="text-[#EC9232]" />
//               Our Mission
//             </motion.div>

//             <motion.h1
//               variants={itemVariants}
//               className="mt-6 text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-[1.05] text-slate-950 dark:text-white"
//             >
//               We design free schooling systems where it matters{" "}
//               <span className="bg-gradient-to-r from-indigo-600 via-purple-500 to-[#EC9232] bg-clip-text text-transparent">
//                 most.
//               </span>
//             </motion.h1>
//           </div>

//           <div className="lg:col-span-5 lg:mt-16">
//             <motion.p
//               variants={itemVariants}
//               className="text-base md:text-lg leading-relaxed text-slate-500 dark:text-zinc-400 font-normal"
//             >
//               Oneness is a structured philanthropic foundation rewriting the
//               mechanics of humanitarian child development. We construct safe,
//               high-integrity pathways that securely channel resources directly
//               into targeted educational infrastructure for street children and the poor.
//             </motion.p>
//             <motion.p
//               variants={itemVariants}
//               className="mt-4 text-sm md:text-base leading-relaxed text-slate-400 dark:text-zinc-500"
//             >
//               By combining rigorous on-the-ground transparency matrices with a
//               zero-barrier school environment, we remove the financial and
//               structural bottlenecks that permanently prevent street children from learning.
//             </motion.p>
//           </div>
//         </motion.div>

//         {/* --- SECTION 2: CORE VALUES --- */}
//         <div className="space-y-16">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, ease: ultraEase }}
//             className="text-center max-w-2xl mx-auto"
//           >
//             <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-950 dark:text-white">
//               Educational Pillars
//             </h2>
//             <p className="mt-4 text-slate-500 dark:text-zinc-400 text-sm md:text-base">
//               The ethical and logistical pillars dictating our structural builds,
//               classroom models, and daily outreach setups.
//             </p>
//           </motion.div>

//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-60px" }}
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
//           >
//             {values.map((val, idx) => (
//               <motion.div
//                 key={idx}
//                 variants={itemVariants}
//                 whileHover={{ y: -6, scale: 1.015 }}
//                 transition={{ duration: 0.4, ease: ultraEase }}
//                 className="group relative overflow-hidden rounded-[2rem] border border-slate-100 dark:border-white/[0.03] bg-zinc-50/40 dark:bg-zinc-950 p-8 shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-zinc-800 transition-all duration-300 cursor-default"
//               >
//                 <div
//                   className={`w-12 h-12 rounded-xl flex items-center justify-center mb-8 ${val.bg} border border-transparent dark:border-white/[0.02] transition-transform duration-500 group-hover:scale-105`}
//                 >
//                   <val.icon size={20} className={val.color} />
//                 </div>
//                 <h3 className="text-xl md:text-2xl font-bold tracking-tight text-slate-950 dark:text-white mb-3">
//                   {val.title}
//                 </h3>
//                 <p className="text-slate-500 dark:text-zinc-400 text-sm md:text-base leading-relaxed font-normal">
//                   {val.desc}
//                 </p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>

//         {/* --- SECTION 3: INTERACTIVE CHRONOLOGY --- */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, ease: ultraEase }}
//             className="lg:col-span-4 lg:sticky lg:top-24 space-y-4"
//           >
//             <div className="text-xs font-bold tracking-[0.2em] text-[#EC9232] uppercase">
//               The Metric of Hope
//             </div>
//             <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-950 dark:text-white leading-tight">
//               Our Journey Forward
//             </h2>
//             <p className="text-slate-500 dark:text-zinc-400 text-sm md:text-base leading-relaxed">
//               We track systemic expansion through built classroom environments, 
//               verified student health indexes, and continuous performance growth maps.
//             </p>
//           </motion.div>

//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-100px" }}
//             className="lg:col-span-8 space-y-6"
//           >
//             {timeline.map((item, idx) => (
//               <motion.div
//                 key={idx}
//                 variants={itemVariants}
//                 whileHover={{ x: 8 }}
//                 transition={{ duration: 0.3, ease: "easeOut" }}
//                 className="flex gap-6 p-6 md:p-8 rounded-3xl bg-zinc-50/20 dark:bg-zinc-950/20 border border-slate-100 dark:border-white/[0.02] hover:border-slate-200 dark:hover:border-zinc-800 transition-colors group cursor-default"
//               >
//                 <div className="text-2xl md:text-3xl font-black text-[#EC9232] tracking-tight opacity-80 group-hover:opacity-100 transition-opacity">
//                   {item.year}
//                 </div>
//                 <div className="space-y-2">
//                   <h3 className="text-lg md:text-xl font-bold tracking-tight text-slate-950 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
//                     {item.title}
//                   </h3>
//                   <p className="text-slate-500 dark:text-zinc-400 text-sm md:text-base leading-relaxed font-normal">
//                     {item.desc}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>

//         {/* --- SECTION 4: INTERNATIONAL AMBIENT CTA --- */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-40px" }}
//           transition={{ duration: 1, ease: ultraEase }}
//           className="rounded-[2.5rem] overflow-hidden relative bg-slate-950 dark:bg-zinc-900/30 border border-transparent dark:border-white/[0.04] p-10 md:p-16 shadow-2xl group"
//         >
//           {/* Subtle Kinetic Lighting Fluid Dynamics */}
//           <div className="absolute inset-0 opacity-15 pointer-events-none mix-blend-screen dark:mix-blend-normal">
//             <motion.div
//               animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
//               transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
//               className="absolute top-0 right-0 h-96 w-96 rounded-full bg-indigo-600 blur-[140px]"
//             />
//             <motion.div
//               animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
//               transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
//               className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[#EC9232] blur-[140px]"
//             />
//           </div>

//           <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
//             <div className="max-w-2xl">
//               <div className="inline-flex items-center gap-2 text-[#EC9232] font-bold uppercase tracking-[0.25em] text-[11px] mb-6">
//                 <HeartHandshake size={14} />
//                 Global Educational Alliance
//               </div>
//               <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-[1.1]">
//                 {" "}
//                 Ready to break the <br />
//                 cycle of street poverty?
//               </h2>
//               <p className="mt-4 text-slate-400 dark:text-zinc-400 text-sm md:text-base font-normal leading-relaxed">
//                 Connect into our collective ecosystem as a corporate partner, volunteer 
//                 educator, or independent patron to empower street youth today.
//               </p>
//             </div>

//             <motion.button
//               whileHover={{ scale: 1.025, backgroundColor: "#e08526" }}
//               whileTap={{ scale: 0.98 }}
//               transition={{ duration: 0.3, ease: ultraEase }}
//               className="group flex items-center gap-2.5 rounded-xl bg-[#EC9232] px-7 py-4 text-white font-bold text-sm tracking-wide shadow-lg transition-colors whitespace-nowrap"
//             >
//               Partner With Us
//               <ArrowRight
//                 size={15}
//                 className="transition-transform duration-300 ease-out group-hover:translate-x-1"
//               />
//             </motion.button>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default AboutUs;

"use client";

import React from "react";
import Link from "next/link"; // 1. Import Link
import { motion } from "framer-motion";
import {
  Compass,
  Users2,
  Globe2,
  Activity,
  ArrowRight,
  HeartHandshake,
  ShieldCheck,
  Target
} from "lucide-react";

const ultraEase = [0.16, 1, 0.3, 1];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: ultraEase } },
};

const values = [
  {
    icon: ShieldCheck,
    title: "Accountability First",
    desc: "We believe trust is built on proof. Every resource deployed—from educational materials to nutritional support—is verified through immutable logs, ensuring donors see the direct outcome of their contribution.",
    color: "text-indigo-600 dark:text-indigo-400",
    bg: "bg-indigo-50/60 dark:bg-indigo-950/20",
  },
  {
    icon: Globe2,
    title: "Universal Access",
    desc: "Education is a fundamental human right, not a privilege. We dismantle systemic barriers that exclude street-connected children, creating safe, localized learning environments where they are.",
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-50/60 dark:bg-emerald-950/20",
  },
  {
    icon: Target,
    title: "Sustainable Impact",
    desc: "Efficiency is our mandate. By streamlining the flow of capital and reducing administrative friction, we ensure that the maximum possible value reaches the child, fostering long-term developmental growth.",
    color: "text-[#EC9232]",
    bg: "bg-orange-50/60 dark:bg-orange-950/20",
  },
];

const timeline = [
  {
    year: "2023",
    title: "Foundation & Framework",
    desc: "Established the core operational model for high-integrity, data-driven education outreach to bridge the gap for vulnerable street youth.",
  },
  {
    year: "2024",
    title: "Strategic Scaling",
    desc: "Deployed secure, mobile-integrated learning hubs in high-density urban centers, creating safe zones for education and nutritional support.",
  },
  {
    year: "2025",
    title: "Ecosystem Integration",
    desc: "Achieved significant milestones in student enrollment and health outcomes, supported by real-time tracking and comprehensive impact reporting.",
  },
];

const AboutUs = () => {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-[#030303] text-slate-900 dark:text-zinc-100 font-sans">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-36 relative z-10">
        
        {/* HERO */}
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.div variants={itemVariants} className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-white/10 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            <Users2 size={14} /> Our Mission & Mandate
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            Empowering potential <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-indigo-500 to-orange-400 bg-clip-text text-transparent">where it's needed most.</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl text-slate-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
            Oneness is an international humanitarian foundation committed to eradicating the educational poverty cycle. We leverage modern infrastructure to provide street-connected children with the resources, safety, and opportunities they need to thrive.
          </motion.p>
        </motion.div>

        {/* VALUES */}
        <div className="grid md:grid-cols-3 gap-8 mt-32">
          {values.map((v, i) => (
            <div key={i} className="p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800">
              <v.icon className={`mb-6 ${v.color}`} size={32} />
              <h3 className="text-2xl font-semibold mb-4">{v.title}</h3>
              <p className="text-slate-600 dark:text-zinc-400 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* TIMELINE */}
        <div className="mt-32 border-t border-zinc-200 dark:border-zinc-800 pt-20">
          <h2 className="text-4xl font-bold mb-16">Our Operational Evolution</h2>
          <div className="space-y-12">
            {timeline.map((t, i) => (
              <div key={i} className="flex gap-8 group">
                <div className="text-orange-500 font-mono font-bold text-xl pt-1">{t.year}</div>
                <div className="border-l-2 border-zinc-200 dark:border-zinc-800 pl-8 pb-12">
                  <h4 className="text-xl font-semibold mb-2">{t.title}</h4>
                  <p className="text-slate-500 max-w-xl">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-32 rounded-[2rem] bg-slate-950 p-12 md:p-20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Join the Global Alliance</h2>
            <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto">Whether you are an institutional partner or a private philanthropist, your support powers the next generation of education.</p>
            
            {/* 2. Changed button to Link */}
            <Link 
              href="/joinWithUs" 
              className="bg-white text-slate-950 px-8 py-4 rounded-full font-bold inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
            >
              Partner With Us <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;