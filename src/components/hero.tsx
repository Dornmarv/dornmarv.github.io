"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Terminal,
  Twitter
} from "lucide-react";

export default function Hero() {
  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120 },
    },
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center bg-slate-950 text-white overflow-hidden selection:bg-cyan-500/30">
      {/* Background: Technical Grid Pattern */}
      <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Background: Subtle Glow Effect */}
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-cyan-500 opacity-20 blur-[100px]"></div>

      <div className="container px-4 md:px-6 relative z-10 max-w-5xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center space-y-8"
        >
          {/* Top Badge: Experience */}
          <motion.div variants={itemVariants} className="mt-8 md:mt-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-800 bg-slate-900/50 backdrop-blur-sm text-xs font-medium text-cyan-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Senior FullStack Engineer (7+ Years)
            </div>
          </motion.div>
          {/* Main Headline */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-4xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">
              Marvellous Posu
            </h1>
            <h2 className="text-xl md:text-3xl text-slate-400 font-light max-w-2xl mx-auto">
              Building {" "}
              <span className="text-cyan-400 font-normal">scalable</span> &{" "}
              <span className="text-purple-400 font-normal">user-centric</span>{" "}
              products.
            </h2>
          </motion.div>
          {/* Bio / Value Prop */}
          <motion.div variants={itemVariants}>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Full Stack Engineer, Frontend specialist architecting high-performance applications.
              Expertise in React, Next.js, Node.js, and TypeScript. Previously secured
              $2.5M+ TVL and scaled platforms for 5,000+ active users.
            </p>
          </motion.div>
          {/* Metrics Grid (Social Proof from Resume) */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl mt-8"
          >
            {[
              { label: "Years", value: "7+" },
              { label: "Projects", value: "50+" },
              { label: "Tvl secured", value: "$2.5M+" },
              { label: "Users Impacted", value: "50k+" },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-4 rounded-2xl border border-slate-800 bg-slate-900/50 hover:border-slate-700 transition-colors"
              >
                <div className="text-2xl md:text-3xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-500 uppercase tracking-wider font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
          {/* Action Buttons */}

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 pt-4"
          >
            <a
              href="#experience" // <-- Target the Projects section ID
              className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-cyan-500 px-8 font-medium text-white transition-all duration-300 hover:bg-cyan-600 hover:scale-105"
            >
              <span className="mr-2">View Selected Work</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="/Marvellous-Posu-FE-Resume.pdf"
              download
              className="inline-flex h-12 items-center justify-center rounded-md border border-slate-800 bg-slate-950 px-8 font-medium text-slate-300 transition-all hover:bg-slate-900 hover:text-white"
            >
              <Download className="mr-2 w-4 h-4" />
              Download CV
            </a>
          </motion.div>
          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-6 pt-8 text-slate-500"
          >
            <a
              href="https://github.com/dornmarv"
              target="_blank"
              className="hover:text-white transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/marvellous-posu"
              target="_blank"
              className="hover:text-cyan-400 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://x.com/in/0xDonMarv"
              target="_blank"
              className="hover:text-cyan-400 transition-colors"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="mailto:posumarvellous@gmail.com"
              className="hover:text-cyan-400 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
