// "use client";

// import { motion } from "framer-motion";

// // Workaround for TypeScript/react peer typing differences: cast motion to any
// const m = motion as any;

// export default function Hero() {
//   return (
//     <section className="w-full flex items-center justify-center py-24 bg-gradient-to-b from-white to-zinc-50 dark:from-black dark:to-zinc-900">
//       <div className="max-w-3xl text-center px-6">
//         <m.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.1, duration: 0.6 }}
//         >
//           <h1 className="text-4xl sm:text-5xl font-bold text-black dark:text-zinc-50">
//             Bonjour — Je suis Arlette Ologuie
//           </h1>
//   </m.div>

//         <m.div
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.25, duration: 0.6 }}
//           className="mt-4"
//         >
//           <p className="text-lg text-zinc-600 dark:text-zinc-400">
//             Je conçois des interfaces web élégantes avec une attention portée à
//             l'UX.
//           </p>
//   </m.div>

//         <m.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5 }}
//           className="mt-8 flex justify-center gap-4"
//         >
//           <a
//             href="#projects"
//             className="rounded-full bg-black text-white px-6 py-3 font-medium hover:opacity-90"
//           >
//             Voir mes projets
//           </a>
//           <a
//             href="#contact"
//             className="rounded-full border border-zinc-200 px-6 py-3 text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
//           >
//             Contact
//           </a>
//   </m.div>
//       </div>
//     </section>
//   );
// }
