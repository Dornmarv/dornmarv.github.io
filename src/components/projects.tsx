"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  Code,
  Server,
  Zap,
  Globe,
  ArrowUpRight,
} from "lucide-react";

// Placeholder data for your side projects. Update these with your real projects.
const sideProjects = [
  {
    id: 1,
    title: "Solana Escrow dAPP",
    description:
      "EscrowDAPP is a secure peer-to-peer escrow service built on Solana that enables trustless SOL transfers between two parties. Users can create escrow accounts where funds are locked until the designated recipient claims them, or the depositor cancels the transaction",
    tech: ["Next.js", "Tailwind", "Rust", "Anchor", "Web3js"],
    icon: Globe,
    githubUrl: "https://github.com/Dornmarv/program-Dornmarv.git",
    liveUrl: "https://escrow-dapp-jade.vercel.app/",
    color: "purple",
  },
  {
    id: 2,
    title: "Serverless Performance Benchmark",
    description:
      "A lightweight utility that benchmarks the latency and cold-start times of various serverless providers (Vercel, AWS Lambda).",
    tech: ["Node.js", "TypeScript", "AWS Lambda", "CI/CD"],
    icon: Zap,
    githubUrl: "#",
    liveUrl: "#",
    color: "cyan",
  },
  {
    id: 3,
    title: "Custom Component Library (dorn-ui)",
    description:
      "A private library of custom, accessible React components built from scratch, focusing on Framer Motion animations.",
    tech: ["React.js", "Framer Motion", "Storybook", "A11y"],
    icon: Code,
    githubUrl: "#",
    liveUrl: "#",
    color: "pink",
  },
];

// Animation variants
const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export default function Projects() {
  return (
    <section
      className="py-24 bg-slate-950 text-slate-200 relative"
      id="projects"
    >
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Labs & Side Projects
          </h2>
          <p className="text-slate-400 max-w-2xl">
            My sandbox for continuous learning and demonstrating specialized
            skills in Web3, performance, and advanced UI/UX concepts.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {sideProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Project Icon */}
                <project.icon
                  className={`h-8 w-8 text-${project.color}-400 mb-4`}
                />

                {/* Title and Description */}
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-400 mb-4 h-12 overflow-hidden">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs rounded-md bg-slate-800 text-slate-300 border border-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex justify-start gap-4 mt-auto pt-4 border-t border-slate-900">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-white transition-colors"
                >
                  View Demo <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-white transition-colors"
                >
                  Code <Github className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA for more projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-400">
            Find the full list of repositories on my&nbsp;
            <a
              href="https://github.com/dornmarv"
              target="_blank"
              className="text-cyan-400 hover:underline inline-flex items-center"
            >
              GitHub Profile <ArrowUpRight className="w-4 h-4 ml-1" />
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
