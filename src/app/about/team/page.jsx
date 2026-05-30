// "use client";

// import React, { useMemo } from "react";
// import { motion } from "framer-motion";
// import { Crown, ShieldCheck, Sparkles, Mail } from "lucide-react";

// import { FaLinkedinIn } from "react-icons/fa";

// /* -------------------------------------------------------
//    TEAM DATA
// ------------------------------------------------------- */

// const leadership = [
//   {
//     name: "MD FAHIM BILLAH",
//     role: "Chairman",
//     image: "/images/Fahim.jpg",
//     badge: "Founder",
//   },
//   {
//     name: "Md Masum Billah",
//     role: "Vice Chairman",
//     image: "/team/masum.jpg",
//     badge: "Executive",
//   },
//   {
//     name: "Anuwarul Islam Akhanda",
//     role: "Secretary",
//     image: "/team/anuwarul.jpg",
//     badge: "Operations",
//   },
// ];

// const members = [
//   {
//     name: "Abdullah bin akil",
//     role: "Joint Secretary",
//     image: "/team/member-1.jpg",
//   },
//   {
//     name: "Md. Naim billah",
//     role: "Treasurer",
//     image: "/images/Naim.jpg",
//   },
//   {
//     name: "Mahfuz Billah",
//     role: "Member",
//     image: "/images/Jarif.jpg",
//   },
//   {
//     name: "Md Sadekur Rahman Akanda",
//     role: "Member",
//     image: "/team/member-3.jpg",
//   },
//   {
//     name: "Fazle Rabbi",
//     role: "Member",
//     image: "/team/member-4.jpg",
//   },
//   {
//     name: "Tahmina Shahan",
//     role: "Member",
//     image: "/team/member-5.jpg",
//   },

//   {
//     name: "Md. Mukhlesur Rahman",
//     role: "Member",
//     image: "/team/member-7.jpg",
//   },
//   {
//     name: "Md. Aminul Islam",
//     role: "Member",
//     image: "/team/member-8.jpg",
//   },
//   {
//     name: "Humayra Akther",
//     role: "Member",
//     image: "/team/member-9.jpg",
//   },
//   {
//     name: "Md. Saifullah Khalid",
//     role: "Member",
//     image: "/team/member-10.jpg",
//   },
//   {
//     name: "Lutfur Zaman Orpon",
//     role: "Member",
//     image: "/team/member-11.jpg",
//   },
//   {
//     name: "Md. Main Uddin",
//     role: "Member",
//     image: "/team/member-12.jpg",
//   },
// ];

// /* -------------------------------------------------------
//    MAIN PAGE
// ------------------------------------------------------- */

// export default function TeamPage() {
//   return (
//     <main className="relative min-h-screen overflow-hidden bg-[#020617] text-white">
//       {/* Animated Background */}
//       <AnimatedBackground />

//       {/* Top Glow */}
//       <div className="absolute inset-x-0 top-0 h-[500px] bg-gradient-to-b from-indigo-500/10 via-fuchsia-500/5 to-transparent blur-3xl" />

//       {/* HERO */}
//       <section className="relative z-10 px-4 pt-24 pb-20 sm:px-6 lg:px-8">
//         <div className="mx-auto max-w-7xl text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{
//               duration: 1,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//           >
//             <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl">
//               <Sparkles size={15} className="text-indigo-400" />
//               <span className="text-xs font-semibold tracking-[0.25em] text-zinc-300 uppercase">
//                 Leadership & Team
//               </span>
//             </div>

//             <h1 className="mx-auto max-w-5xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
//               Meet The People
//               <span className="block bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
//                 Behind The Mission
//               </span>
//             </h1>

//             <p className="mx-auto mt-6 max-w-3xl text-sm leading-relaxed text-zinc-400 sm:text-base md:text-lg">
//               A world-class leadership and operational team committed to
//               innovation, transparency, collaboration, and long-term social
//               impact.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* LEADERSHIP */}
//       <TeamSection
//         title="Executive Leadership"
//         subtitle="Strategic leaders driving the vision and global direction."
//         data={leadership}
//         leadership
//       />

//       {/* MEMBERS */}
//       <TeamSection
//         title="Core Team Members"
//         subtitle="Dedicated professionals working together to create impact."
//         data={members}
//       />

//       {/* FOOTER */}
//       <footer className="relative z-10 border-t border-white/10 px-6 py-10">
//         <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center text-sm text-zinc-500 md:flex-row">
//           <p>© 2026 Organization. All rights reserved.</p>

//           <div className="flex items-center gap-2">
//             <ShieldCheck size={16} />
//             Trusted • Secure • Professional
//           </div>
//         </div>
//       </footer>
//     </main>
//   );
// }

// /* -------------------------------------------------------
//    TEAM SECTION
// ------------------------------------------------------- */

// function TeamSection({ title, subtitle, data, leadership = false }) {
//   return (
//     <section className="relative z-10 px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
//       <div className="mx-auto max-w-7xl">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{
//             duration: 0.8,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//           className="mb-14 text-center"
//         >
//           <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
//             {title}
//           </h2>

//           <p className="mx-auto mt-4 max-w-2xl text-sm text-zinc-400 sm:text-base">
//             {subtitle}
//           </p>
//         </motion.div>

//         {/* Grid */}
//         <div
//           className={`grid gap-6 sm:gap-8 ${
//             leadership
//               ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
//               : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
//           }`}
//         >
//           {data.map((member, index) => (
//             <TeamCard
//               key={member.name}
//               member={member}
//               index={index}
//               leadership={leadership}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* -------------------------------------------------------
//    TEAM CARD
// ------------------------------------------------------- */

// function TeamCard({ member, index, leadership }) {
//   const randomStat = useMemo(() => Math.floor(Math.random() * 40) + 60, []);

//   return (
//     <motion.div
//       initial={{
//         opacity: 0,
//         y: 50,
//         scale: 0.95,
//       }}
//       whileInView={{
//         opacity: 1,
//         y: 0,
//         scale: 1,
//       }}
//       viewport={{ once: true, amount: 0.2 }}
//       transition={{
//         duration: 0.7,
//         delay: index * 0.08,
//         ease: [0.22, 1, 0.36, 1],
//       }}
//       whileHover={{
//         y: -12,
//       }}
//       className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-2xl transition-all duration-500"
//     >
//       {/* Animated Glow */}
//       <motion.div
//         animate={{
//           rotate: [0, 360],
//         }}
//         transition={{
//           duration: 18,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//         className="absolute inset-[-150%] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
//         style={{
//           background:
//             "conic-gradient(from 90deg at 50% 50%, transparent, rgba(99,102,241,0.12), transparent, rgba(217,70,239,0.12), transparent)",
//         }}
//       />

//       {/* Card Content */}
//       <div className="relative z-10">
//         {/* Top Badge */}
//         <div className="mb-5 flex items-center justify-between">
//           <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-300">
//             {leadership ? (
//               <Crown size={12} className="text-yellow-400" />
//             ) : (
//               <Sparkles size={12} className="text-indigo-400" />
//             )}

//             {member.role}
//           </div>

//           <div className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(74,222,128,0.9)]" />
//         </div>

//         {/* Image */}
//         <div className="relative mx-auto mb-6 h-28 w-28 sm:h-32 sm:w-32">
//           {/* Ring */}
//           <motion.div
//             animate={{
//               rotate: [0, 360],
//             }}
//             transition={{
//               duration: 12,
//               repeat: Infinity,
//               ease: "linear",
//             }}
//             className="absolute inset-[-6px] rounded-full border border-dashed border-indigo-500/40"
//           />

//           {/* Glow */}
//           <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/20 to-fuchsia-500/20 blur-xl" />

//           {/* Image */}
//           <motion.img
//             whileHover={{
//               scale: 1.08,
//             }}
//             transition={{
//               duration: 0.4,
//             }}
//             src={member.image}
//             alt={member.name}
//             className="relative z-10 h-full w-full rounded-full object-cover border-4 border-white/10 shadow-2xl"
//           />
//         </div>

//         {/* Info */}
//         <div className="text-center">
//           <h3 className="text-lg font-bold text-white sm:text-xl">
//             {member.name}
//           </h3>

//           <p className="mt-2 text-sm font-medium text-indigo-300">
//             {member.role}
//           </p>
//         </div>

//         {/* Divider */}
//         <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

//         {/* Stats */}
//         <div className="space-y-3">
//           <div className="flex items-center justify-between text-xs text-zinc-400">
//             <span>Contribution</span>
//             <span className="font-bold text-white">{randomStat}%</span>
//           </div>

//           <div className="h-2 overflow-hidden rounded-full bg-white/5">
//             <motion.div
//               initial={{ width: 0 }}
//               whileInView={{ width: `${randomStat}%` }}
//               transition={{
//                 duration: 1.2,
//                 delay: 0.2,
//               }}
//               className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-500"
//             />
//           </div>
//         </div>

//         {/* Hover Actions */}
//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           whileHover={{ opacity: 1, y: 0 }}
//           className="mt-6 flex items-center justify-center gap-3"
//         >
//           <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 transition-all hover:border-indigo-500 hover:bg-indigo-500/10 hover:text-white">
//             <FaLinkedinIn size={14} />
//           </button>

//           <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 transition-all hover:border-indigo-500 hover:bg-indigo-500/10 hover:text-white">
//             <Mail size={16} />
//           </button>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// }

// /* -------------------------------------------------------
//    ANIMATED BACKGROUND
// ------------------------------------------------------- */

// function AnimatedBackground() {
//   return (
//     <>
//       {/* Moving Gradient Orb 1 */}
//       <motion.div
//         animate={{
//           x: [0, 120, 0],
//           y: [0, -80, 0],
//         }}
//         transition={{
//           duration: 16,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         className="absolute left-[-120px] top-[-120px] h-[350px] w-[350px] rounded-full bg-indigo-500/20 blur-3xl"
//       />

//       {/* Moving Gradient Orb 2 */}
//       <motion.div
//         animate={{
//           x: [0, -100, 0],
//           y: [0, 80, 0],
//         }}
//         transition={{
//           duration: 20,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         className="absolute bottom-[-150px] right-[-120px] h-[350px] w-[350px] rounded-full bg-fuchsia-500/20 blur-3xl"
//       />

//       {/* Floating Particles */}
//       <div className="absolute inset-0 overflow-hidden">
//         {[...Array(20)].map((_, i) => (
//           <motion.span
//             key={i}
//             animate={{
//               y: [0, -40, 0],
//               opacity: [0.2, 1, 0.2],
//             }}
//             transition={{
//               duration: 4 + i,
//               repeat: Infinity,
//               delay: i * 0.2,
//             }}
//             className="absolute h-1 w-1 rounded-full bg-white/40"
//             style={{
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//             }}
//           />
//         ))}
//       </div>

//       {/* Grid */}
//       <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
//     </>
//   );
// }
"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Crown,
  Sparkles,
  ShieldCheck,
  User,
  MapPin,
  Mail,
  Phone,
  Hash,
  Lock,
  Unlock,
} from "lucide-react";

/* -------------------------------------------------------
   TEAM DATA
------------------------------------------------------- */
const leadership = [
  {
    name: "MD FAHIM BILLAH",
    role: "Chairman",
    image: "/images/Fahim.jpg",
    father: "Md Abul Hashem",
    mother: "Hoshna Yasmin",
    address: "HOLDING No,31/1/1, Village, Masakanda, Mymansingh Sadar, Mymansing",
    email: "fahimbillah786@gmail.com",
    phone: "01913768439",
    nid: "1020022362",
  },
  {
    name: "Md Masum Billah",
    role: "Vice Chairman",
    image: "/team/masum.jpg",
    father: "Md Abul Hashem",
    mother: "Hoshna Yasmin",
    address: "HOLDING No,29/3, Village, Masakanda, Mymansingh Sadar, Mymansing",
    email: "nishpapmasum1@gmail.com",
    phone: "01929-687800",
    nid: "5081529165",
  },
  {
    name: "Anuwarul Islam Akhanda",
    role: "Secretary",
    image: "/team/anuwarul.jpg",
    father: "Fazlul Haque Akhanda",
    mother: "Mst Amina Akter Khatun",
    address: "House No 31/3004, Village: Kamalpur, Post: Kendua Pourashava, Netrokona",
    email: "anuwarulislam78@gmail.com",
    phone: "+880 1724-283408",
    nid: "6444658303",
  },
];

const members = [
  {
    name: "Abdullah bin akil",
    role: "Joint Secretary",
    image: "/team/member-1.jpg",
    father: "akiluddin",
    mother: "chamchunnahar",
    address: "House: Shekh Bari, Village: Puran Battajur, Battajur, Post: Notun Bajar-2140. Bokshigonj, Jamalpur",
    email: "mullanoman1992@gmail.com",
    phone: "+880 1854-942631",
    nid: "6015140533",
  },
  {
    name: "Md. Naim billah",
    role: "Treasurer",
    image: "/images/Naim.jpg",
    father: "Md Abul Hashem",
    mother: "Hosna Yasmin",
    address: "HOLDING No,31/1/1, Village, Masakanda, Mymansingh Sadar, Mymansing",
    email: "naimbillah1@gmail.com",
    phone: "+880 1911-445902",
    nid: "8253700739",
  },
  {
    name: "Mahfuz Billah",
    role: "Member",
    image: "/images/Jarif.jpg",
    father: "anuwarul islam akanda",
    mother: "Nasrin jahan",
    address: "Komolpur, Post: Kendua-2480, Kendua, Netrokona.",
    email: "jarifmahfuz0@gmail.com",
    phone: "+880 1904-947118",
    nid: "6474744569",
  },
  {
    name: "Md Sadekur Rahman Akanda",
    role: "Member",
    image: "/team/member-3.jpg",
    father: "Abdul Qaiyum Akanda",
    mother: "Lutfunnesa Akter",
    address: "Bade Atharobari, Bade Atharobari, Post: Kendua Pourashava, Netrokona",
    email: "sadikkiron84@gmail.com",
    phone: "+880 1791-666619",
    nid: "4203909959",
  },
  {
    name: "Fazle Rabbi",
    role: "Member",
    image: "/team/member-4.jpg",
    father: "Anisur Rahman",
    mother: "Mst Rawshan Ara Anis",
    address: "House: Darul Ulum Nizamia Momenshahi, Broira, Amlitoala, Sadar, Mymansingh.",
    email: "frabbi1411@gmail.com",
    phone: "01777982934",
    nid: "8655721002",
  },
  {
    name: "Tahmina Shahan",
    role: "Member",
    image: "/team/member-5.jpg",
    father: "Tafazzal Hossain Khan",
    mother: "Shahana Akter Benu",
    address: "House:23/5, Village: Maskanda, Mymensing",
    email: "shahanmonira00@gmail.com",
    phone: "+880 1716-993555",
    nid: "8231334999",
  },
  {
    name: "Md. Mukhlesur Rahman",
    role: "Member",
    image: "/team/member-7.jpg",
    father: "Md. Shamsul Hoque",
    mother: "Sultana Begum",
    address: "Village: Parulitola, Post; Caria Bajar, Tarakanda, Mymanshing",
    email: "mukhlesurrahman161@gmail.com",
    phone: "+880 1757-717975",
    nid: "5066784199",
  },
  {
    name: "Md. Aminul Islam",
    role: "Member",
    image: "/team/member-8.jpg",
    father: "Md. Lokman Hossen",
    mother: "Achia Begum",
    address: "Holding:38-00, Village:Boira, Valuka, Post: Krishi University, Sadar, Mymanshing",
    email: "aminulislamrahid@gmail.com",
    phone: "+880 1915-454126",
    nid: "8253689494",
  },
  {
    name: "Humayra Akther",
    role: "Member",
    image: "/team/member-9.jpg",
    father: "Md. Abdul Hannan",
    mother: "Shahanara Akther",
    address: "Village: Haripur, Post: Amtola, Kendua, Netrokona",
    email: "humayrahimu436@gamil.com",
    phone: "01305163558",
    nid: "3763803750",
  },
  {
    name: "Md. Saifullah Khalid",
    role: "Member",
    image: "/team/member-10.jpg",
    father: "Md.Abdur Rouf",
    mother: "Shamsunnahar Rouf",
    address: "House no: 16/10, Azam Road, Mohammadpur, Dhaka.",
    email: "khalid07073@gmail.com",
    phone: "01829000295",
    nid: "1476720428",
  },
  {
    name: "Lutfur Zaman Orpon",
    role: "Member",
    image: "/team/member-11.jpg",
    father: "Md. Jasim Uddin",
    mother: "Rukiya Begum",
    address: "Holding no:21/ka, Maharaja Road, Mymanshing Sadar, Mymanshing.",
    email: "rahamanorpon@gmail.com",
    phone: "+880 1716-868841",
    nid: "4613210824",
  },
  {
    name: "Md. Main Uddin",
    role: "Member",
    image: "/team/member-12.jpg",
    father: "Md. Rezaul Karim",
    mother: "Nur Nahar Begum",
    address: "Holding no:200, Village: Maizbaria, Post: Kalidah-3900, Sadar, Feni.",
    email: "mdmahin5621@gmail.com",
    phone: "+880 1859-035621",
    nid: "1513259018",
  },
];

/* -------------------------------------------------------
   MAIN PAGE
------------------------------------------------------- */

export default function TeamPage() {
  const [activeCard, setActiveCard] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden bg-white text-zinc-900 transition-colors duration-300 dark:bg-[#020617] dark:text-white">
      <AnimatedBackground />
      <div className="absolute inset-x-0 top-0 h-[500px] bg-gradient-to-b from-indigo-500/10 via-fuchsia-500/5 to-transparent blur-3xl" />
      <section className="relative z-10 px-4 pt-24 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-100 px-5 py-2 backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
              <Sparkles size={15} className="text-indigo-600 dark:text-indigo-400" />
              <span className="text-xs font-semibold tracking-[0.25em] text-zinc-600 uppercase dark:text-zinc-300">Leadership & Team</span>
            </div>
            <h1 className="mx-auto max-w-5xl text-4xl font-black leading-tight tracking-tight text-zinc-900 sm:text-5xl md:text-6xl lg:text-7xl dark:text-white">
              Meet The People
              <span className="block bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-cyan-600 bg-clip-text text-transparent dark:from-indigo-400 dark:via-fuchsia-400 dark:to-cyan-400">Behind The Mission</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <TeamSection title="Executive Leadership" subtitle="Strategic leaders driving the vision." data={leadership} leadership activeCard={activeCard} setActiveCard={setActiveCard} isAdmin={isAdmin} />
      <TeamSection title="Core Team Members" subtitle="Dedicated professionals." data={members} activeCard={activeCard} setActiveCard={setActiveCard} isAdmin={isAdmin} />

      <footer className="relative z-10 border-t border-zinc-200 px-6 py-10 dark:border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center text-sm text-zinc-600 dark:text-zinc-500 md:flex-row">
          <p>© 2026 Organization. All rights reserved.</p>
          <button onClick={() => setIsAdmin(!isAdmin)} className="flex items-center gap-2 text-indigo-500 hover:text-indigo-400 transition-colors">
            {isAdmin ? <Unlock size={16} /> : <Lock size={16} />}
            {isAdmin ? "Admin Access Active" : "Admin Login"}
          </button>
        </div>
      </footer>
    </main>
  );
}

function TeamSection({ title, subtitle, data, leadership = false, activeCard, setActiveCard, isAdmin }) {
  return (
    <section className="relative z-10 px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-black tracking-tight text-zinc-900 sm:text-4xl md:text-5xl dark:text-white">{title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-zinc-600 sm:text-base dark:text-zinc-400">{subtitle}</p>
        </div>
        <div className={`grid gap-6 sm:gap-8 ${leadership ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"}`}>
          {data.map((member) => (
            <div key={member.name} className="[perspective:1000px] h-[450px]">
              <TeamCard member={member} leadership={leadership} activeCard={activeCard} setActiveCard={setActiveCard} isAdmin={isAdmin} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamCard({ member, leadership, activeCard, setActiveCard, isAdmin }) {
  const randomStat = useMemo(() => Math.floor(Math.random() * 40) + 60, []);
  const isFlipped = activeCard === member.name;

  return (
    <motion.div className="relative h-full w-full cursor-pointer [transform-style:preserve-3d]" animate={{ rotateY: isFlipped ? 180 : 0 }} transition={{ duration: 0.7 }} onClick={() => setActiveCard(isFlipped ? null : member.name)}>
      <div className="absolute inset-0 [backface-visibility:hidden] rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-lg backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.03]">
        <div className="mb-5 flex items-center justify-between">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
            {leadership ? <Crown size={12} className="text-amber-500" /> : <Sparkles size={12} className="text-indigo-500 dark:text-indigo-400" />}
            {member.role}
          </div>
        </div>
        <div className="relative mx-auto mb-6 h-32 w-32">
          <img src={member.image} alt={member.name} className="h-full w-full rounded-full border-4 border-zinc-100 object-cover shadow-lg dark:border-white/10" />
        </div>
        <div className="text-center">
          <h3 className="text-lg font-bold text-zinc-900 sm:text-xl dark:text-white">{member.name}</h3>
          <p className="mt-2 text-sm font-medium text-indigo-600 dark:text-indigo-300">{member.role}</p>
        </div>
        <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-zinc-300 to-transparent dark:via-white/10" />
        <div className="h-2 overflow-hidden rounded-full bg-zinc-200 dark:bg-white/5">
          <div className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-500" style={{ width: `${randomStat}%` }} />
        </div>
      </div>
      <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-[2rem] border border-indigo-500/30 bg-zinc-900 p-6 text-white shadow-2xl">
        <h3 className="mb-4 border-b border-white/10 pb-2 text-xl font-bold">Full Profile</h3>
        <div className="space-y-3 text-sm">
          <p className="flex items-center gap-2"><User size={14} className="text-indigo-400" /> {member.name}</p>
          {isAdmin && (
            <p className="flex items-center gap-2 text-emerald-400">
              <Hash size={14} /> NID: {member.nid}
            </p>
          )}
          <p className="flex items-start gap-2"><MapPin size={14} className="mt-1 shrink-0 text-indigo-400" /> {member.address}</p>
          <p className="flex items-center gap-2"><Mail size={14} className="text-indigo-400" /> {member.email}</p>
          <p className="flex items-center gap-2"><Phone size={14} className="text-indigo-400" /> {member.phone}</p>
          <div className="mt-4 border-t border-white/10 pt-4 text-xs text-zinc-400">
            <p>Father: {member.father}</p>
            <p>Mother: {member.mother}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-100">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]" />
    </div>
  );
}