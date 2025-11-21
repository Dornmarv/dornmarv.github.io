"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Copy, 
  Check, 
  ArrowUpRight,
  Phone
} from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "posumarvellous@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-900" id="contact">
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container px-4 md:px-6 mx-auto max-w-4xl relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-xs font-medium text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for New Opportunities
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Ready to scale your engineering team?
          </h2>
          
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            I specialize in building high-performance financial applications and decentralized systems. 
          </p>
        </motion.div>

        {/* Primary Action: Copy Email */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10"
        >
          <div className="flex flex-col items-center gap-4">
            <button 
              onClick={handleCopy}
              className="group relative flex items-center gap-3 px-6 py-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800/50 transition-all duration-300"
            >
              <Mail className="w-5 h-5 text-cyan-400" />
              <span className="text-lg font-medium text-slate-200 font-mono">{email}</span>
              <div className="pl-3 border-l border-slate-700">
                {copied ? (
                  <Check className="w-5 h-5 text-emerald-400" />
                ) : (
                  <Copy className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" />
                )}
              </div>
              
              {/* Tooltip for feedback */}
              <span className={`absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-white bg-slate-800 px-2 py-1 rounded transition-opacity duration-200 ${copied ? 'opacity-100' : 'opacity-0'}`}>
                Copied to clipboard!
              </span>
            </button>

          </div>
        </motion.div>

        {/* Social Links Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto"
        >
          {[
            { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/marvellous-posu", color: "hover:text-blue-400", handle: "/marvellous-posu" },
            { name: "GitHub", icon: Github, url: "https://github.com/dornmarv", color: "hover:text-white", handle: "/dornmarv" },
            { name: "Resume", icon: ArrowUpRight, url: "/Marvellous-Posu-FE-Resume.pdf", color: "hover:text-cyan-400", handle: "View Resume" },
          ].map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-3 p-4 rounded-lg border border-slate-800 bg-slate-900/30 hover:bg-slate-900 transition-all group`}
            >
              <social.icon className={`w-5 h-5 text-slate-400 transition-colors ${social.color}`} />
              <span className="text-slate-300 font-medium">{social.handle}</span>
            </a>
          ))}
        </motion.div>

        {/* Footer Copyright */}
        <div className="mt-24 pt-8 border-t border-slate-900 text-slate-600 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Marvellous Posu. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <span className="text-slate-400">Next.js</span> & <span className="text-slate-400">Tailwind</span>
          </p>
        </div>

      </div>
    </section>
  );
}