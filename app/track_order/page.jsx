"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function TrackOrderMaintenance() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f1d1f] relative overflow-hidden px-6 py-10">
      {/* Animated Background Orbs */}
      <div className="absolute top-1/3 left-10 w-60 h-60 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-teal-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/4 right-20 w-52 h-52 bg-cyan-400/10 rounded-full blur-2xl animate-ping"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl w-full p-12 rounded-[32px] bg-[#122728]/50 backdrop-blur-2xl border border-teal-400/20 shadow-[0_0_50px_-4px_rgba(0,255,255,0.25)] relative z-10"
      >
        {/* Animated Icon */}
        <motion.div
          initial={{ rotate: -10 }}
          animate={{ rotate: 10 }}
          transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.5 }}
          className="mx-auto mb-10 w-32 h-32 rounded-full bg-gradient-to-br from-teal-500/30 to-cyan-500/20 flex items-center justify-center border border-teal-400/40 shadow-[0_0_20px_rgba(0,255,255,0.25)]"
        >
          <span className="text-teal-300 text-6xl font-bold drop-shadow-lg">⚙️</span>
        </motion.div>

        {/* Title */}
        <h1 className="text-[42px] font-extrabold tracking-[2px] text-teal-300 drop-shadow-lg leading-tight">
          Upgrading for Something
          <span className="text-cyan-300"> Amazing</span>
        </h1>

        <p className="text-gray-300 mt-5 text-xl leading-relaxed">
          Our Track Order system is currently being enhanced to provide
          real-time tracking, live delivery updates & a futuristic experience.
          Thank you for your patience — greatness is loading.
        </p>

        {/* Animated Loader Line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.2 }}
          className="h-[3px] mt-10 bg-gradient-to-r from-transparent via-teal-400 to-transparent"
        />

        {/* Pulsing Loader */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 1.2 }}
          className="mt-8 text-teal-300 font-semibold tracking-widest text-lg"
        >
          Updating...
        </motion.div>

        {/* Button */}
        <motion.div whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.96 }} className="inline-block mt-10">
          <Link
            href="/"
            className="px-8 py-4 rounded-2xl text-lg font-semibold bg-teal-500/20 border border-teal-400/40 text-teal-200 hover:bg-teal-500/30 backdrop-blur-xl transition-all duration-300 shadow-lg"
          >
            Go Back Home
          </Link>
        </motion.div>

        <p className="text-gray-500 text-sm mt-8">
          Have queries? <span className="text-teal-400 font-medium cursor-pointer">Contact Support</span>
        </p>
      </motion.div>
    </div>
  );
}