"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Briefcase,
  Building2,
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";

// Tailwind scans source statically, so accent classes must appear in full.
// Interpolating `text-${color}-400` silently produces no styling.
const ACCENT: Record<string, string> = {
  cyan: "text-cyan-400",
  purple: "text-purple-400",
  blue: "text-blue-400",
  emerald: "text-emerald-400",
  amber: "text-amber-400",
  pink: "text-pink-400",
};

const experiences = [
  {
    id: 1,
    role: "Senior Full Stack Engineer",
    company: "Thelix Holdings",
    liveUrl: "https://lightforth.io",
    period: "Jan 2026 - Present",
    location: "Hybrid, Lagos",
    description:
      "Backend owner across an AI career platform (Lightforth) and an AI sales copilot (Cosella).",
    highlights: [
      "Own 10+ NestJS microservices serving 13,946 users and 281 paying customers.",
      "Built an autonomous job-application engine: 11,000+ applications at a 70% success rate across 27 ATS platforms.",
      "Built payment infrastructure across Stripe, Stripe Connect, Flutterwave, Paystack and PayPal with idempotent money movement and an append-only audit log.",
      "Shipped Cosella from commit zero: API, dashboard, admin console and an Electron desktop copilot over OpenAI Realtime.",
    ],
    tech: [
      "TypeScript",
      "NestJS",
      "React",
      "MongoDB",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "Playwright",
      "Stripe",
      "Electron",
    ],
    color: "cyan",
  },
  {
    id: 2,
    role: "Lead Frontend Engineer",
    company: "DexPay",
    liveUrl: "https://app.dexpay.io",
    period: "Dec 2023 - Dec 2025",
    location: "Remote",
    description:
      "Architected a decentralized P2P marketplace across EVM & non-EVM chains.",
    highlights: [
      "Wrote the on-chain escrow contract securing peer-to-peer trades (Solidity, Rust, Anchor).",
      "Secured $2.5M+ in Total Value Locked across BSC, Solana, Tron and Hedera.",
      "Built multi-wallet onboarding for 150+ wallets and 5,000+ active users.",
      "Integrated on/off-ramp automation, crypto-fiat escrow and real-time pricing.",
    ],
    tech: [
      "TypeScript",
      "Next.js",
      "Solidity",
      "Rust",
      "Anchor",
      "Viem",
      "Wagmi",
      "WebSockets",
    ],
    color: "purple",
  },
  {
    id: 3,
    role: "Senior Frontend Engineer",
    company: "Convexity",
    liveUrl: "#",
    period: "Jan 2023 - Nov 2023",
    location: "Remote",
    description:
      "Central bank digital currency and crypto-compliance infrastructure.",
    highlights: [
      "Built a CBDC platform for a central-bank regulator: token lifecycle dashboard and FSP portal.",
      "Delivered wallet operations, cross-border payments and institutional onboarding flows.",
      "Shipped KYC/KYB verification, wallet risk scoring and sanction screening.",
    ],
    tech: ["TypeScript", "Next.js", "Radix UI", "RTK Query"],
    color: "blue",
  },
  {
    id: 4,
    role: "Lead Frontend Engineer",
    company: "Syarpa",
    liveUrl: "https://www.syarpa.com",
    period: "Jun 2021 - Dec 2022",
    location: "Remote",
    description:
      "Early engineering lead for a cross-border money remittance platform.",
    highlights: [
      "Helped secure $500K in company funding.",
      "Led a team of 3 engineers and modernized the codebase.",
      "Developed fiat & crypto wallets with bank-grade security.",
      "Migrated legacy views to Next.js/TypeScript for performance.",
    ],
    tech: ["TypeScript", "Next.js", "Tailwind", "Redux Saga"],
    color: "emerald",
  },
  {
    id: 5,
    role: "Senior Frontend Engineer",
    company: "Intercity",
    liveUrl: "https://www.intercity.ng/",
    period: "Jan 2021 - Mar 2021",
    location: "Lagos, Nigeria",
    description:
      "Core developer for Nigeria's largest online bus-ticketing platform.",
    highlights: [
      "Onboarded 100+ operators to the digital platform.",
      "Built an Admin Dashboard for 1,000+ daily users.",
      "Enabled complex search, compare, and booking flows.",
    ],
    tech: ["JavaScript", "React", "Redux", "Chakra UI"],
    color: "amber",
  },
  {
    id: 6,
    role: "Full Stack Engineer",
    company: "Physiona",
    liveUrl: "#",
    period: "Jun 2020 - Jan 2021",
    location: "Nigeria",
    description: "Developed Nigeria's first tele-physiotherapy platform.",
    highlights: [
      "Built secure video consultation features.",
      "Developed full-stack MERN application (MongoDB, Express, React, Node).",
      "Implemented patient-therapist payment flows.",
    ],
    tech: ["JavaScript", "React", "Node.js", "Express", "MongoDB"],
    color: "pink",
  },
  {
    id: 7,
    role: "Full Stack Engineer",
    company: "Protech Advance",
    liveUrl: "#",
    period: "Apr 2019 - Sep 2019",
    location: "Lagos, Nigeria",
    description: "Dispatch logistics platform for riders and operators.",
    highlights: [
      "Built pricing and rider-matching algorithms serving 10,000+ users and 1,000+ daily rides.",
      "Led the legacy migration to DigitalOcean.",
    ],
    tech: ["Node.js", "PHP", "Laravel", "MySQL"],
    color: "cyan",
  },
];

export default function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      className="py-24 bg-slate-950 text-slate-200 relative"
      id="experience"
    >
      <div
        className="container px-4 md:px-6 mx-auto max-w-5xl"
        ref={containerRef}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-800 bg-slate-900/50 text-xs font-medium text-cyan-400 mb-4">
            <Briefcase className="w-3 h-3" />
            Career Trajectory
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Professional Experience
          </h2>
        </motion.div>

        <div className="relative">
          {/* The Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-800 transform md:-translate-x-1/2">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-cyan-500 via-purple-500 to-blue-500 origin-top"
            />
          </div>

          <div className="space-y-12 md:space-y-24">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-2 border-slate-950 bg-slate-700 z-10 transform -translate-x-1/2 mt-6 md:mt-8 shadow-[0_0_0_4px_#0f172a]" />

                  <div className="hidden md:block flex-1" />

                  {/* Content Card */}
                  <div className="flex-1 pl-12 md:pl-0">
                    <div
                      className={`relative p-6 rounded-2xl border border-slate-800 bg-slate-900/60 hover:border-slate-700 transition-colors group ${
                        isEven ? "md:text-right" : "md:text-left"
                      }`}
                    >
                      <div
                        className={`flex flex-col gap-1 mb-4 ${
                          isEven ? "md:items-end" : "md:items-start"
                        }`}
                      >
                        <h3 className="text-xl font-bold text-white flex items-center gap-2">
                          {exp.role}
                        </h3>

                        <div className="flex items-center gap-2 text-slate-400 text-sm">
                          <Building2 className="w-3 h-3" />
                          <span className="font-medium text-slate-300">
                            {exp.company}
                          </span>
                          <span>•</span>
                          <span>{exp.period}</span>

                          {/* LIVE URL LINK HERE */}
                          {exp.liveUrl && exp.liveUrl !== "#" && (
                            <a
                              href={exp.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              title={`Visit ${exp.company} site`}
                              className={`ml-2 ${ACCENT[exp.color]} hover:text-white transition-colors`}
                            >
                              <ExternalLink className="w-4 h-4 inline-block" />
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Key Achievements (Highlights) */}
                      <ul
                        className={`space-y-2 mb-6 ${
                          isEven ? "md:items-end" : "md:items-start"
                        } flex flex-col`}
                      >
                        {exp.highlights.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-slate-300"
                          >
                            <ArrowUpRight
                              className={`w-4 h-4 mt-0.5 shrink-0 ${
                                ACCENT[exp.color]
                              } ${isEven ? "md:order-last" : ""}`}
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Stack Pills */}
                      <div
                        className={`flex flex-wrap gap-2 ${
                          isEven ? "md:justify-end" : "md:justify-start"
                        }`}
                      >
                        {exp.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-800 text-slate-300 border border-slate-700/50"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
