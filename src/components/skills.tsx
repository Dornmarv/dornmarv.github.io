"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Database, 
  Layout, 
  Cpu, 
  Globe, 
  Zap, 
  ShieldCheck, 
  Terminal 
} from "lucide-react";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

export default function Skills() {
  return (
    <section className="py-24 bg-slate-950 text-slate-200 relative overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Technical Arsenal
          </h2>
          <p className="text-slate-400 max-w-2xl">
            I don't just use frameworks; I build scalable architectures.
            Backend services and payment rails, on-chain systems, and the interfaces on top of them.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[minmax(180px,auto)]"
        >
          
          {/* Card 1: The Core Stack (Large Square) */}
          <motion.div 
            variants={cardVariants}
            className="row-span-2 p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 transition-colors group"
          >
            <div className="h-10 w-10 rounded-full bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
              <Code2 className="text-cyan-400 h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Core Stack</h3>
            <p className="text-sm text-slate-400 mb-6">
              What I reach for daily, across the whole stack.
            </p>
            <div className="flex flex-wrap gap-2">
              {["TypeScript", "JavaScript (ES6+)", "React", "Next.js", "Node.js", "NestJS", "Express"].map((tag) => (
                <span key={tag} className="px-2 py-1 text-xs rounded-md bg-slate-800 text-cyan-100 border border-slate-700">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 2: Web3 & Blockchain (Wide) */}
          <motion.div 
            variants={cardVariants}
            className="md:col-span-2 p-6 rounded-2xl bg-gradient-to-br from-slate-900/80 to-purple-900/20 border border-slate-800 hover:border-purple-500/50 transition-colors group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Globe className="w-24 h-24" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-purple-500/10 flex items-center justify-center">
                  <Database className="text-purple-400 h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-white">Web3 & Blockchain</h3>
              </div>
              <p className="text-sm text-slate-400 mb-4 max-w-md">
                Four years on-chain. I write contracts as well as the apps that talk to them, including the escrow contract behind a $2.5M+ TVL marketplace.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Solidity", "Rust", "Anchor", "Hardhat", "Truffle", "Viem", "Wagmi", "Ethers.js", "Web3.js"].map((tag) => (
                  <span key={tag} className="px-2 py-1 text-xs rounded-md bg-purple-900/30 text-purple-200 border border-purple-800/50">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 3: UI Engineering */}
          <motion.div 
            variants={cardVariants}
            className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 transition-colors"
          >
            <div className="flex items-center gap-3 mb-3">
              <Layout className="text-pink-400 h-5 w-5" />
              <h3 className="text-lg font-semibold text-white">Backend & Data</h3>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {["PostgreSQL", "MongoDB", "Redis", "Kafka", "BullMQ", "GraphQL", "WebSockets", "Microservices"].map((tag) => (
                <span key={tag} className="px-2 py-1 text-xs rounded-md bg-pink-900/20 text-pink-200 border border-pink-800/30">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 4: State & Data */}
          <motion.div 
            variants={cardVariants}
            className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 transition-colors"
          >
            <div className="flex items-center gap-3 mb-3">
              <Cpu className="text-emerald-400 h-5 w-5" />
              <h3 className="text-lg font-semibold text-white">AI & Automation</h3>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {["OpenAI (incl. Realtime)", "Anthropic Claude", "LangChain", "LLM agents", "Playwright", "Puppeteer"].map((tag) => (
                <span key={tag} className="px-2 py-1 text-xs rounded-md bg-emerald-900/20 text-emerald-200 border border-emerald-800/30">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 5: Performance & Testing (Wide) */}
          <motion.div 
            variants={cardVariants}
            className="md:col-span-2 p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-orange-500/50 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-6"
          >
            <div className="flex-1">
               <div className="flex items-center gap-3 mb-2">
                <ShieldCheck className="text-orange-400 h-5 w-5" />
                <h3 className="text-lg font-semibold text-white">Payments & Correctness</h3>
              </div>
              <p className="text-sm text-slate-400">
                Code that moves real money. Integer-cent balances, idempotency keys on every mutating endpoint, transactional outbox and an append-only audit log.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 justify-start md:justify-end flex-1">
               {["Stripe", "Stripe Connect", "Flutterwave", "Paystack", "PayPal", "Idempotency", "Audit ledgers", "Jest", "CI/CD"].map((tag) => (
                <span key={tag} className="px-2 py-1 text-xs rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 6: Tools */}
          <motion.div 
            variants={cardVariants}
            className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 transition-colors"
          >
            <div className="flex items-center gap-3 mb-3">
              <Terminal className="text-blue-400 h-5 w-5" />
              <h3 className="text-lg font-semibold text-white">UI & DevOps</h3>
            </div>
             <div className="flex flex-wrap gap-2 mt-4">
              {["Tailwind CSS", "Framer Motion", "Electron", "Docker", "GitHub Actions", "DigitalOcean", "Sentry"].map((tag) => (
                <span key={tag} className="px-2 py-1 text-xs rounded-md bg-blue-900/20 text-blue-200 border border-blue-800/30">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}