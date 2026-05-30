// import { motion } from "framer-motion";
// import { X, Upload, User, Briefcase, ShieldCheck, FileBadge } from "lucide-react";
// import Swal from 'sweetalert2';

// export const VolunteerForm = ({ onClose }) => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     Swal.fire({
//       title: "Application Submitted!",
//       text: "Thank you for volunteering. We will review your application soon.",
//       icon: "success",
//       confirmButtonColor: "#000",
//       background: "#fff",
//       color: "#000"
//     }).then(() => {
//       onClose();
//     });
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
//     >
//       <motion.div
//         initial={{ scale: 0.95, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         exit={{ scale: 0.95, opacity: 0 }}
//         className="w-full max-w-3xl bg-white dark:bg-zinc-950 rounded-[2rem] p-6 md:p-12 shadow-2xl border border-zinc-200 dark:border-zinc-800 relative max-h-[90vh] overflow-y-auto"
//       >
//         <button onClick={onClose} className="absolute top-6 right-6 md:top-8 md:right-8 p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
//           <X size={24} className="text-zinc-500" />
//         </button>

//         <div className="mb-8 md:mb-10">
//           <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-950 dark:text-white">Volunteer Application</h2>
//           <p className="text-zinc-500 mt-3 text-base md:text-lg">Help us build a better future. Please complete your profile to verify your candidacy.</p>
//         </div>

//         <form className="space-y-8 md:space-y-12" onSubmit={handleSubmit}>

//           <section className="space-y-6">
//             <h3 className="flex items-center gap-2 text-indigo-600 font-bold uppercase tracking-widest text-xs"><User size={16} /> Personal Profile</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
//               <input type="text" placeholder="Full Legal Name *" required className="w-full p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 outline-none focus:border-indigo-500" />
//               <input type="email" placeholder="Professional Email *" required className="w-full p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 outline-none focus:border-indigo-500" />
//               <input type="tel" placeholder="Mobile Number *" required className="w-full p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 outline-none focus:border-indigo-500" />
//               <input type="text" placeholder="City, Country *" required className="w-full p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 outline-none focus:border-indigo-500" />
//             </div>
//           </section>

//           <section className="space-y-6">
//             <h3 className="flex items-center gap-2 text-indigo-600 font-bold uppercase tracking-widest text-xs"><Briefcase size={16} /> Professional & Identification</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
//               <input type="text" placeholder="LinkedIn Profile URL" className="w-full p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 outline-none focus:border-indigo-500" />
//               <select className="w-full p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
//                 <option>Area of Expertise *</option>
//                 <option>Strategy & Management</option>
//                 <option>Tech & Engineering</option>
//               </select>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
//               <select className="w-full p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
//                 <option>Identity Document Type *</option>
//                 <option>National ID</option>
//                 <option>Passport</option>
//               </select>
//               <input type="text" placeholder="Document ID Number *" required className="w-full p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 outline-none" />
//             </div>

//             <textarea placeholder="Tell us why you are a good fit? *" required className="w-full p-4 h-32 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 outline-none resize-none"></textarea>
//           </section>

//           <section className="space-y-6 pt-6 border-t border-zinc-100 dark:border-zinc-800">
//             <h3 className="flex items-center gap-2 text-emerald-600 font-bold uppercase tracking-widest text-xs"><FileBadge size={16} /> Secure Attachments</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
//               <div className="border-2 border-dashed border-zinc-300 dark:border-zinc-700 rounded-2xl p-6 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-indigo-500 transition-colors">
//                 <Upload size={24} className="text-zinc-400" />
//                 <span className="text-xs font-bold text-zinc-500 text-center">Upload CV/Resume (PDF)</span>
//               </div>
//               <div className="border-2 border-dashed border-zinc-300 dark:border-zinc-700 rounded-2xl p-6 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-indigo-500 transition-colors">
//                 <Upload size={24} className="text-zinc-400" />
//                 <span className="text-xs font-bold text-zinc-500 text-center">Upload ID Copy (Max 5MB)</span>
//               </div>
//             </div>
//           </section>

//           <button type="submit" className="w-full py-5 rounded-2xl bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-bold text-lg hover:opacity-90 transition-all shadow-xl">
//             Submit Final Application
//           </button>
//         </form>

//         <div className="mt-8 text-center text-zinc-400 text-xs">
//           <p className="flex items-center justify-center gap-2">
//             <ShieldCheck size={14} /> Data processed in accordance with GDPR standards.
//           </p>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };

"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import {
  ArrowLeft,
  Upload,
  User,
  Briefcase,
  ShieldCheck,
  FileBadge,
  Sparkles,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function JoinWithUsPage() {
  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Application Submitted!",
      text: "Thank you for volunteering. We will review your application soon.",
      icon: "success",
      confirmButtonColor: "#000",
      background: "#fff",
      color: "#000",
      customClass: {
        popup: "rounded-[2rem]",
        confirmButton: "rounded-xl px-6 py-3 font-bold",
      },
    });
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-white dark:bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -60, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 12,
            ease: "easeInOut",
          }}
          className="absolute top-[-120px] left-[-100px] h-[320px] w-[320px] rounded-full bg-indigo-500/20 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, 70, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 14,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-140px] right-[-100px] h-[320px] w-[320px] rounded-full bg-fuchsia-500/10 blur-3xl"
        />
      </div>

      <div className="relative z-10 px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mx-auto w-full max-w-5xl"
        >
          {/* Back Button */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <Link
              href="/"
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-xl px-4 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-indigo-600 hover:border-indigo-500 transition-all"
            >
              <ArrowLeft size={18} />
              Back to Home
            </Link>
          </motion.div>

          {/* Main Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] border border-zinc-200/70 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-2xl shadow-[0_10px_80px_rgba(0,0,0,0.08)]"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-fuchsia-500/[0.05]" />

            <div className="relative p-5 sm:p-8 md:p-12 lg:p-16">
              {/* Header */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={1}
                className="mb-10 md:mb-14"
              >
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">
                  <Sparkles size={14} />
                  Become a Volunteer
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-zinc-950 dark:text-white leading-tight">
                  Volunteer
                  <span className="block bg-gradient-to-r from-indigo-600 to-fuchsia-500 bg-clip-text text-transparent">
                    Application
                  </span>
                </h1>

                <p className="mt-5 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-zinc-500 dark:text-zinc-400">
                  Help us build a better future. Please complete your profile to
                  verify your candidacy and become part of our mission.
                </p>
              </motion.div>

              {/* Form */}
              <form
                onSubmit={handleSubmit}
                className="space-y-10 md:space-y-14"
              >
                {/* Personal Section */}
                <motion.section
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={2}
                  className="space-y-6"
                >
                  <h3 className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.25em] text-indigo-600">
                    <User size={16} />
                    Personal Profile
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <Input
                      type="text"
                      placeholder="Full Legal Name *"
                      required
                    />

                    <Input
                      type="email"
                      placeholder="Professional Email *"
                      required
                    />

                    <Input type="tel" placeholder="Mobile Number *" required />

                    <Input type="text" placeholder="City, Country *" required />
                  </div>
                </motion.section>

                {/* Professional Section */}
                <motion.section
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={3}
                  className="space-y-6"
                >
                  <h3 className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.25em] text-indigo-600">
                    <Briefcase size={16} />
                    Professional & Identification
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <Input type="text" placeholder="LinkedIn Profile URL" />

                    <select className="inputStyle">
                      <option>Area of Expertise *</option>
                      <option>Strategy & Management</option>
                      <option>Tech & Engineering</option>
                      <option>Marketing & Branding</option>
                      <option>Community Support</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <select className="inputStyle">
                      <option>Identity Document Type *</option>
                      <option>National ID</option>
                      <option>Passport</option>
                      <option>Driving License</option>
                    </select>

                    <Input
                      type="text"
                      placeholder="Document ID Number *"
                      required
                    />
                  </div>

                  <textarea
                    placeholder="Tell us why you are a good fit? *"
                    required
                    className="min-h-[160px] w-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-900/70 p-5 text-sm sm:text-base text-zinc-800 dark:text-zinc-200 outline-none transition-all duration-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 resize-none"
                  />
                </motion.section>

                {/* Upload Section */}
                <motion.section
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={4}
                  className="space-y-6 border-t border-zinc-200 dark:border-zinc-800 pt-8"
                >
                  <h3 className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.25em] text-emerald-600">
                    <FileBadge size={16} />
                    Secure Attachments
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <UploadCard text="Upload CV/Resume (PDF)" />
                    <UploadCard text="Upload ID Copy (Max 5MB)" />
                  </div>
                </motion.section>

                {/* Submit Button */}
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={5}
                >
                  <motion.button
                    whileHover={{
                      scale: 1.02,
                      y: -2,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    type="submit"
                    className="group relative w-full overflow-hidden rounded-2xl bg-zinc-950 dark:bg-white py-5 text-base sm:text-lg font-black text-white dark:text-zinc-950 shadow-2xl transition-all"
                  >
                    <span className="relative z-10">
                      Submit Final Application
                    </span>

                    <motion.div
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.8 }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    />
                  </motion.button>
                </motion.div>
              </form>

              {/* Footer */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={6}
                className="mt-10 text-center"
              >
                <p className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm text-zinc-400">
                  <ShieldCheck size={14} />
                  Data processed securely in accordance with GDPR standards.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

/* ---------- Reusable Components ---------- */

function Input({ type, placeholder, required }) {
  return (
    <motion.input
      whileFocus={{ scale: 1.01 }}
      type={type}
      placeholder={placeholder}
      required={required}
      className="w-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-900/70 p-4 text-sm sm:text-base text-zinc-800 dark:text-zinc-200 outline-none transition-all duration-300 placeholder:text-zinc-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
    />
  );
}

function UploadCard({ text }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        y: -4,
      }}
      whileTap={{
        scale: 0.98,
      }}
      className="group flex cursor-pointer flex-col items-center justify-center gap-3 rounded-[1.5rem] border-2 border-dashed border-zinc-300 dark:border-zinc-700 bg-zinc-50/50 dark:bg-zinc-900/40 p-8 transition-all hover:border-indigo-500 hover:bg-indigo-500/[0.03]"
    >
      <motion.div
        whileHover={{ rotate: 8 }}
        className="rounded-2xl bg-white dark:bg-zinc-800 p-4 shadow-md"
      >
        <Upload
          size={28}
          className="text-zinc-400 group-hover:text-indigo-500 transition-colors"
        />
      </motion.div>

      <span className="text-center text-xs sm:text-sm font-bold text-zinc-500 group-hover:text-indigo-600 transition-colors">
        {text}
      </span>
    </motion.div>
  );
}
