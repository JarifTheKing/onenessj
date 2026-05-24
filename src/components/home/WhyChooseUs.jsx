// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import {
//   ShieldCheck,
//   Globe,
//   HeartHandshake,
//   BarChart3,
//   Users,
//   Zap,
//   CheckCircle2,
//   ArrowRight,
//   Sparkles,
//   Wallet,
//   Eye,
// } from "lucide-react";

// const reasons = [
//   {
//     icon: ShieldCheck,
//     title: "100% Transparency",
//     desc: "Track every donation in real-time with verified impact reports and blockchain-secured records.",
//   },
//   {
//     icon: Globe,
//     title: "Global Reach",
//     desc: "Support projects and communities worldwide from one unified platform.",
//   },
//   {
//     icon: HeartHandshake,
//     title: "Trusted Community",
//     desc: "Verified volunteers, NGOs, and donors working together for real change.",
//   },
//   {
//     icon: BarChart3,
//     title: "Live Impact Dashboard",
//     desc: "See measurable results, analytics, and progress updates instantly.",
//   },
//   {
//     icon: Wallet,
//     title: "Secure Donations",
//     desc: "Safe and seamless multi-currency payments with advanced protection.",
//   },
//   {
//     icon: Eye,
//     title: "Real-Time Visibility",
//     desc: "Watch how your contribution transforms lives through direct field updates.",
//   },
// ];

// const stats = [
//   { number: "50K+", label: "Global Donors" },
//   { number: "1.2M+", label: "Lives Impacted" },
//   { number: "100%", label: "Verified Projects" },
//   { number: "24/7", label: "Transparency Access" },
// ];

// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.12,
//     },
//   },
// };

// const itemVariants = {
//   hidden: {
//     opacity: 0,
//     y: 30,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       type: "spring",
//       stiffness: 100,
//       damping: 18,
//     },
//   },
// };

// const WhyChooseOneness = () => {
//   return (
//     <section className="relative overflow-hidden py-24 md:py-32 bg-white dark:bg-black transition-colors duration-500">
//       {/* Animated Background */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <motion.div
//           animate={{
//             scale: [1, 1.1, 1],
//             rotate: [0, 8, 0],
//           }}
//           transition={{
//             duration: 20,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//           className="absolute top-[-10%] left-1/2 -translate-x-1/2 h-[700px] w-full blur-[120px] opacity-20"
//         >
//           <div className="absolute top-0 left-1/4 h-[400px] w-[400px] rounded-full bg-primary/40" />
//           <div className="absolute bottom-0 right-1/4 h-[350px] w-[350px] rounded-full bg-secondary/30" />
//         </motion.div>
//       </div>

//       <div className="max-w-7xl mx-auto px-6 relative z-10">
//         {/* Top Section */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="text-center max-w-4xl mx-auto"
//         >
//           <motion.div
//             variants={itemVariants}
//             className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-primary"
//           >
//             <Sparkles size={14} className="text-secondary animate-pulse" />
//             Why People Trust Oneness
//           </motion.div>

//           <motion.h1
//             variants={itemVariants}
//             className="mt-8 text-5xl md:text-7xl font-black tracking-tight text-slate-950 dark:text-white leading-[1]"
//           >
//             Why Choose{" "}
//             <span className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
//               Oneness?
//             </span>
//           </motion.h1>

//           <motion.p
//             variants={itemVariants}
//             className="mt-8 text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium"
//           >
//             Oneness is more than a donation platform. It is a complete
//             transparency ecosystem connecting donors, volunteers, and
//             communities with trust, accountability, and measurable impact.
//           </motion.p>
//         </motion.div>

//         {/* Stats */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
//         >
//           {stats.map((stat, index) => (
//             <motion.div
//               key={index}
//               variants={itemVariants}
//               whileHover={{ y: -5 }}
//               className="rounded-[2rem] border border-slate-100 dark:border-white/5 bg-white/80 dark:bg-zinc-900/50 backdrop-blur-xl p-8 text-center shadow-xl"
//             >
//               <h2 className="text-4xl md:text-5xl font-black text-slate-950 dark:text-white">
//                 {stat.number}
//               </h2>

//               <p className="mt-3 text-xs uppercase tracking-[0.2em] font-bold text-slate-500">
//                 {stat.label}
//               </p>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Features Grid */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-24"
//         >
//           {reasons.map((reason, index) => (
//             <motion.div
//               key={index}
//               variants={itemVariants}
//               whileHover={{ y: -10 }}
//               className="group relative overflow-hidden rounded-[2.5rem] border border-slate-100 dark:border-white/5 bg-white dark:bg-zinc-900 p-8 shadow-xl transition-all"
//             >
//               <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//               <div className="relative z-10">
//                 <div className="w-16 h-16 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center mb-8">
//                   <reason.icon size={30} />
//                 </div>

//                 <h3 className="text-2xl font-black text-slate-950 dark:text-white tracking-tight mb-4">
//                   {reason.title}
//                 </h3>

//                 <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
//                   {reason.desc}
//                 </p>

//                 <div className="mt-8 flex items-center gap-2 text-sm font-bold text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
//                   Learn More
//                   <ArrowRight size={16} />
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Bottom CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mt-28 rounded-[3rem] overflow-hidden relative bg-slate-950 dark:bg-white p-10 md:p-16"
//         >
//           <div className="absolute inset-0 opacity-20">
//             <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-primary blur-[120px]" />
//             <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-secondary blur-[120px]" />
//           </div>

//           <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
//             <div className="max-w-2xl">
//               <div className="inline-flex items-center gap-2 text-secondary font-bold uppercase tracking-[0.2em] text-xs mb-6">
//                 <CheckCircle2 size={16} />
//                 Trusted Worldwide
//               </div>

//               <h2 className="text-4xl md:text-6xl font-black text-white dark:text-black tracking-tight leading-[1]">
//                 Together We Create
//                 <br />
//                 Real Impact.
//               </h2>

//               <p className="mt-6 text-slate-300 dark:text-slate-700 text-lg font-medium leading-relaxed">
//                 Join thousands of donors and volunteers building a transparent,
//                 accountable, and united future through Oneness.
//               </p>
//             </div>

//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.96 }}
//               className="group flex items-center gap-3 rounded-2xl bg-secondary px-8 py-5 text-white font-black text-lg shadow-2xl"
//             >
//               Get Started
//               <ArrowRight
//                 size={20}
//                 className="transition-transform group-hover:translate-x-1"
//               />
//             </motion.button>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseOneness;




"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Globe,
  HeartHandshake,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Wallet,
  Eye,
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "100% Transparency",
    desc: "Track every donation in real-time with verified impact reports and blockchain-secured records.",
    iconColor: "text-indigo-600 dark:text-indigo-400",
    bgColor: "bg-indigo-50 dark:bg-indigo-950/30",
    floatDelay: 0,
  },
  {
    icon: Globe,
    title: "Global Reach",
    desc: "Support projects and communities worldwide from one unified platform.",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    bgColor: "bg-emerald-50 dark:bg-emerald-950/30",
    floatDelay: 1.5,
  },
  {
    icon: HeartHandshake,
    title: "Trusted Community",
    desc: "Verified volunteers, NGOs, and donors working together for real change.",
    iconColor: "text-pink-600 dark:text-pink-400",
    bgColor: "bg-pink-50 dark:bg-pink-950/30",
    floatDelay: 0.7,
  },
  {
    icon: BarChart3,
    title: "Live Impact Dashboard",
    desc: "See measurable results, analytics, and progress updates instantly.",
    iconColor: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-50 dark:bg-blue-950/30",
    floatDelay: 2.2,
  },
  {
    icon: Wallet,
    title: "Secure Donations",
    desc: "Safe and seamless multi-currency payments with advanced protection.",
    iconColor: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-50 dark:bg-purple-950/30",
    floatDelay: 1.1,
  },
  {
    icon: Eye,
    title: "Real-Time Visibility",
    desc: "Watch how your contribution transforms lives through direct field updates.",
    iconColor: "text-[#EC9232]",
    bgColor: "bg-orange-50 dark:bg-orange-950/30",
    floatDelay: 2.9,
  },
];

const stats = [
  { number: "50K+", label: "Global Donors" },
  { number: "1.2M+", label: "Lives Impacted" },
  { number: "100%", label: "Verified Projects" },
  { number: "24/7", label: "Transparency Access" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.92,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 14,
    },
  },
};

const WhyChooseOneness = () => {
  return (
    <section className="relative overflow-hidden py-24 md:py-36 bg-white dark:bg-black font-sans transition-colors duration-500">
      
      {/* --- CINEMATIC ANIMATED BACKGROUND AURORA --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, 8, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[-15%] left-1/2 -translate-x-1/2 h-[700px] w-full blur-[140px] opacity-30 dark:opacity-20"
        >
          <div className="absolute top-0 left-1/4 h-[450px] w-[450px] rounded-full bg-indigo-600/40 animate-pulse" />
          <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-[#EC9232]/30" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- Top Section --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-left border-l-4 border-[#EC9232] pl-6 max-w-4xl"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/50 dark:bg-zinc-900/50 backdrop-blur-md px-4 py-1.5 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-indigo-600 dark:border-white/10 dark:text-indigo-400 shadow-sm"
          >
            <Sparkles size={14} className="text-[#EC9232] animate-spin" style={{ animationDuration: "3s" }} />
            Why People Trust Oneness
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="mt-6 text-5xl md:text-7xl font-black tracking-tighter text-slate-950 dark:text-white leading-[0.9]"
          >
            Why Choose{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-500 to-[#EC9232] bg-clip-text text-transparent">
              Oneness?
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-base md:text-lg leading-relaxed text-slate-500 dark:text-slate-400 max-w-2xl font-medium"
          >
            Oneness is more than a donation platform. It is a complete
            transparency ecosystem connecting donors, volunteers, and
            communities with trust, accountability, and measurable impact.
          </motion.p>
        </motion.div>

        {/* --- Stats Display --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                y: -8,
                boxShadow: "0 20px 40px -15px rgba(99, 102, 241, 0.15)"
              }}
              className="rounded-[2rem] border border-slate-100 dark:border-white/5 bg-zinc-50/50 dark:bg-zinc-900/40 backdrop-blur-xl p-8 text-center shadow-xl transition-colors duration-300 cursor-pointer"
            >
              <motion.h3 
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 100, delay: index * 0.1 }}
                className="text-4xl md:text-5xl font-black text-slate-950 dark:text-white tracking-tight"
              >
                {stat.number}
              </motion.h3>
              <p className="mt-3 text-[10px] uppercase tracking-widest font-bold text-slate-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* --- Features Grid (Supercharged Animations) --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-24"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              custom={reason.floatDelay}
              animate={{
                y: [0, -6, 0],
                transition: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: reason.floatDelay,
                }
              }}
              whileHover={{ 
                scale: 1.03,
                y: -14,
                rotateZ: index % 2 === 0 ? 0.5 : -0.5,
                boxShadow: "0 30px 60px -20px rgba(0, 0, 0, 0.15)"
              }}
              className="group relative overflow-hidden rounded-[2.5rem] border border-slate-100 dark:border-white/5 bg-white dark:bg-zinc-900 p-8 shadow-xl transition-all duration-300 hover:border-[#EC9232]/50 cursor-pointer"
            >
              {/* Dynamic Radial Hover Gradient */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.08),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-[#EC9232]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Bouncing Icon Area */}
                <motion.div 
                  whileHover={{ rotate: [0, -15, 15, 0], scale: 1.15 }}
                  transition={{ duration: 0.4 }}
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${reason.bgColor} shadow-sm group-hover:shadow-md transition-shadow`}
                >
                  <reason.icon size={26} className={`${reason.iconColor} transition-transform duration-300`} />
                </motion.div>

                <h3 className="text-2xl font-black text-slate-950 dark:text-white tracking-tight mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {reason.title}
                </h3>

                <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium text-sm md:text-base">
                  {reason.desc}
                </p>

                {/* Animated Call-to-Action Link */}
                <div className="mt-8 flex items-center gap-2 text-xs font-black text-[#EC9232] opacity-70 group-hover:opacity-100 transition-all duration-300">
                  <span className="tracking-wider">LEARN MORE</span> 
                  <ArrowRight size={14} className="transform transition-transform duration-300 group-hover:translate-x-2" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* --- Bottom Cinematic CTA --- */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 80, damping: 15 }}
          className="mt-28 rounded-[3rem] overflow-hidden relative bg-slate-950 dark:bg-white p-10 md:p-16 shadow-2xl group/cta"
        >
          {/* Enhanced Inner Floating Glows */}
          <div className="absolute inset-0 opacity-25 pointer-events-none">
            <motion.div 
              animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 left-0 h-80 w-80 rounded-full bg-indigo-600 blur-[120px]" 
            />
            <motion.div 
              animate={{ x: [0, -25, 0], y: [0, 25, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#EC9232] blur-[120px]" 
            />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-[#EC9232] font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs mb-6">
                <CheckCircle2 size={16} className="animate-bounce" />
                Trusted Worldwide
              </div>

              <h2 className="text-4xl md:text-6xl font-black text-white dark:text-black tracking-tighter leading-[1]">
                Together We Create <br />
                Real Impact.
              </h2>

              <p className="mt-6 text-slate-400 dark:text-slate-600 text-base md:text-lg font-medium leading-relaxed">
                Join thousands of donors and volunteers building a transparent,
                accountable, and united future through Oneness.
              </p>
            </div>

            <motion.button
              whileHover={{ 
                scale: 1.06, 
                backgroundColor: "#d67e26",
                boxShadow: "0 20px 35px -10px rgba(236, 146, 50, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 rounded-2xl bg-[#EC9232] px-9 py-5 text-white font-black text-base shadow-xl transition-all duration-300"
            >
              Get Started
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-2"
              />
            </motion.button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseOneness;