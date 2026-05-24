// // components/ContactPage.js
// "use client";

// import { motion } from "framer-motion";
// import { Mail, Phone, MapPin, Send, Clock3, MessageSquare } from "lucide-react";

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.15 },
//   },
// };

// const itemVariants = {
//   hidden: { y: 30, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       duration: 0.6,
//       ease: [0.16, 1, 0.3, 1],
//     },
//   },
// };

// export default function ContactPage() {
//   return (
//     <section className="relative overflow-hidden bg-white dark:bg-slate-950 py-24 px-6 md:px-12 lg:px-20">
//       {/* BACKGROUND GLOW */}
//       <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full" />
//       <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/10 blur-[120px] rounded-full" />

//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//         className="relative z-10 max-w-7xl mx-auto"
//       >
//         {/* HEADER */}
//         <motion.div
//           variants={itemVariants}
//           className="text-center max-w-3xl mx-auto mb-20"
//         >
//           <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md text-sm text-primary font-semibold">
//             <MessageSquare size={16} />
//             Contact Us
//           </span>

//           <h1 className="mt-6 text-4xl md:text-6xl font-black tracking-tight leading-tight text-slate-950 dark:text-white">
//             Let’s Build Something
//             <span className="block text-secondary">Meaningful Together</span>
//           </h1>

//           <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
//             Have questions, ideas, or collaboration opportunities? Reach out to
//             our team and we’ll get back to you as soon as possible.
//           </p>
//         </motion.div>

//         {/* MAIN GRID */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
//           {/* LEFT SIDE */}
//           <motion.div
//             variants={itemVariants}
//             className="relative rounded-[32px] border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-2xl p-8 md:p-10 overflow-hidden shadow-soft"
//           >
//             {/* CARD GLOW */}
//             <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />

//             <div className="relative z-10">
//               <div className="mb-10">
//                 <h2 className="text-3xl font-bold mb-3 text-slate-950 dark:text-white">
//                   Send us a message
//                 </h2>

//                 <p className="text-slate-600 dark:text-slate-400">
//                   Fill out the form below and our team will contact you shortly.
//                 </p>
//               </div>

//               <form className="space-y-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//                   <InputField label="Your Name" placeholder="Jarif Mahfuz" />

//                   <InputField
//                     label="Phone / Email"
//                     placeholder="you@example.com"
//                   />
//                 </div>

//                 <InputField label="Subject" placeholder="Write your subject" />

//                 <div className="space-y-3">
//                   <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
//                     Message
//                   </label>

//                   <textarea
//                     placeholder="Write your message..."
//                     className="w-full h-40 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] px-5 py-4 text-slate-950 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-secondary/40 focus:bg-white dark:focus:bg-white/[0.05] focus:shadow-[0_0_0_4px_rgba(236,146,50,0.12)] resize-none"
//                   />
//                 </div>

//                 <motion.button
//                   whileHover={{
//                     scale: 1.02,
//                     boxShadow: "0 10px 20px rgba(236, 146, 50, 0.2)",
//                   }}
//                   whileTap={{ scale: 0.98 }}
//                   className="group w-full md:w-auto inline-flex items-center justify-center gap-3 rounded-2xl bg-secondary px-8 py-4 font-bold text-white transition-all duration-300 hover:opacity-90 shadow-secondary"
//                 >
//                   Send Message
//                   <Send
//                     size={18}
//                     className="transition-transform duration-300 group-hover:translate-x-1"
//                   />
//                 </motion.button>
//               </form>
//             </div>
//           </motion.div>

//           {/* RIGHT SIDE */}
//           <motion.div variants={itemVariants} className="space-y-6">
//             {/* MAP CARD */}
//             <div className="rounded-[32px] overflow-hidden border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-2xl shadow-soft">
//               <div className="p-6 border-b border-slate-200 dark:border-white/10">
//                 <h3 className="text-2xl font-bold text-slate-950 dark:text-white">
//                   Our Location
//                 </h3>
//               </div>

//               <div className="h-[320px] w-full">
//                 <iframe
//                   title="map"
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.629396225574!2d90.3879201760434!3d24.7570414779435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37564f9976735a29%3A0x1646279f5383f982!2sMaskandha%2C+Mymensingh!5e0!3m2!1sen!2sbd!4v1715690000000"
//                   className="w-full h-full border-0"
//                   allowFullScreen=""
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                 />
//               </div>
//             </div>

//             {/* INFO CARDS */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//               <InfoCard
//                 icon={<Phone size={20} />}
//                 title="Phone"
//                 value="+8801911445902, 
//                  +8801913768439"
//               />

//               <InfoCard
//                 icon={<Mail size={20} />}
//                 title="Email"
//                 value="contact@oneness.org"
//               />

//               <InfoCard
//                 icon={<MapPin size={20} />}
//                 title="Location"
//                 value="31/1/1 Maskandha, Mymensingh Sadar, Mymensingh-2200"
//               />

//               <InfoCard
//                 icon={<Clock3 size={20} />}
//                 title="Working Hours"
//                 value="Sat - Thu, 9AM - 6PM"
//               />
//             </div>
//           </motion.div>
//         </div>
//       </motion.div>
//     </section>
//   );
// }

// function InputField({ label, placeholder }) {
//   return (
//     <div className="space-y-3">
//       <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
//         {label}
//       </label>

//       <input
//         type="text"
//         placeholder={placeholder}
//         className="w-full rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] px-5 py-4 text-slate-950 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-primary/40 focus:bg-white dark:focus:bg-white/[0.05] focus:shadow-[0_0_0_4px_rgba(79,70,229,0.12)]"
//       />
//     </div>
//   );
// }

// function InfoCard({ icon, title, value }) {
//   return (
//     <motion.div
//       whileHover={{ y: -4 }}
//       className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl p-6 transition-all duration-300 hover:border-secondary/20 hover:bg-white dark:hover:bg-slate-900 shadow-soft"
//     >
//       <div className="w-12 h-12 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center mb-5">
//         {icon}
//       </div>

//       <h4 className="text-lg font-bold mb-2 text-slate-950 dark:text-white">
//         {title}
//       </h4>

//       <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
//         {value}
//       </p>
//     </motion.div>
//   );
// }



"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock3, MessageSquare } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden bg-slate-50 dark:bg-slate-950 py-24 px-6 md:px-12 lg:px-20 transition-colors duration-500">
      {/* BACKGROUND ELEMENTS - Refined for subtlety */}
      <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-indigo-500/5 dark:bg-indigo-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-orange-500/5 dark:bg-orange-500/10 blur-[120px] rounded-full" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto"
      >
        {/* HEADER */}
        <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-bold tracking-widest uppercase text-slate-500">
            <MessageSquare size={14} />
            Contact Us
          </span>
          <h1 className="mt-8 text-5xl md:text-6xl font-extrabold tracking-tighter text-slate-950 dark:text-white">
            Let’s work together.
          </h1>
          <p className="mt-6 text-xl text-slate-600 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
            Have a project in mind? Reach out and our team will get back to you within 24 hours.
          </p>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT SIDE: FORM */}
          <motion.div variants={itemVariants} className="lg:col-span-7">
            <div className="bg-white dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200 dark:border-white/10 p-8 md:p-10 rounded-[2rem] shadow-sm">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField label="Full Name" placeholder="John Doe" />
                  <InputField label="Email Address" placeholder="john@company.com" />
                </div>
                <InputField label="Subject" placeholder="How can we help you?" />
                
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-slate-900 dark:text-slate-300">Message</label>
                  <textarea
                    placeholder="Tell us about your project..."
                    className="w-full h-40 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 px-5 py-4 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all resize-none"
                  />
                </div>

                <button className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-slate-950 dark:bg-white text-white dark:text-slate-950 px-8 py-4 rounded-2xl font-bold hover:opacity-90 transition-opacity">
                  Send Message <Send size={16} />
                </button>
              </form>
            </div>
          </motion.div>

          {/* RIGHT SIDE: INFO & MAP */}
          <motion.div variants={itemVariants} className="lg:col-span-5 space-y-6">
            <div className="rounded-[2rem] overflow-hidden border border-slate-200 dark:border-white/10 h-[300px] shadow-sm">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.629396225574!2d90.3879201760434!3d24.7570414779435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37564f9976735a29%3A0x1646279f5383f982!2sMaskandha%2C+Mymensingh!5e0!3m2!1sen!2sbd!4v1715690000000"
                className="w-full h-full grayscale-[50%] dark:grayscale-[80%] invert-[0] dark:invert-[90%]"
                loading="lazy"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InfoCard icon={<Phone size={18} />} title="Phone" value="+8801911445902" />
              <InfoCard icon={<Mail size={18} />} title="Email" value="contact@oneness.org" />
              <InfoCard icon={<MapPin size={18} />} title="Location" value="Mymensingh, BD" />
              <InfoCard icon={<Clock3 size={18} />} title="Hours" value="Sat-Thu, 9am-6pm" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function InputField({ label, placeholder }) {
  return (
    <div className="space-y-3">
      <label className="text-sm font-semibold text-slate-900 dark:text-slate-300">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 px-5 py-4 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all"
      />
    </div>
  );
}

function InfoCard({ icon, title, value }) {
  return (
    <div className="bg-white dark:bg-slate-900/50 p-5 rounded-2xl border border-slate-200 dark:border-white/10">
      <div className="text-indigo-600 dark:text-indigo-400 mb-3">{icon}</div>
      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">{title}</h4>
      <p className="font-semibold text-slate-900 dark:text-white mt-1 text-sm truncate">{value}</p>
    </div>
  );
}