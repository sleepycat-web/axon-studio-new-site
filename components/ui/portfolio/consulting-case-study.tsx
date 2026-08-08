"use client";
import React from "react";
import Link from "next/link";
import type { CaseStudySlide } from "@/components/ui/portfolio/case-study-deck";

const SlideKicker = ({ children }: { children: React.ReactNode }) => (
  <span className="text-xs sm:text-sm font-medium uppercase tracking-widest text-accent-400">
    {children}
  </span>
);

/* ── Architecture diagram (converted from static SVG) ── */
const SystemDiagram = () => (
  <div className="glass-card rounded-2xl p-4 sm:p-5 border border-white/10">
    <svg viewBox="0 0 1000 590" className="w-full h-auto block" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="cc-ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M1 1 L9 5 L1 9" fill="none" stroke="#a3a3a3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </marker>
        <marker id="cc-ara" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M1 1 L9 5 L1 9" fill="none" stroke="#a78bfa" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </marker>
      </defs>

      {/* ACCESS LAYER */}
      <text x="40" y="24" fontSize="11" letterSpacing="1.5" fill="#a3a3a3">ACCESS LAYER</text>

      <rect x="40" y="38" width="286" height="62" rx="10" fill="#0a0a0a" stroke="#262626" strokeWidth="1" />
      <text x="183" y="64" textAnchor="middle" fontSize="15" fill="#f5f5f5">Staff Access</text>
      <text x="183" y="84" textAnchor="middle" fontSize="11" fill="#a3a3a3">All employees across every branch</text>

      <rect x="357" y="38" width="286" height="62" rx="10" fill="#0a0a0a" stroke="#262626" strokeWidth="1" />
      <text x="500" y="64" textAnchor="middle" fontSize="15" fill="#f5f5f5">Management Console</text>
      <text x="500" y="84" textAnchor="middle" fontSize="11" fill="#a3a3a3">Facilitators and team leads</text>

      <rect x="674" y="38" width="286" height="62" rx="10" fill="#0a0a0a" stroke="#262626" strokeWidth="1" />
      <text x="817" y="64" textAnchor="middle" fontSize="15" fill="#f5f5f5">Head Office Admin</text>
      <text x="817" y="84" textAnchor="middle" fontSize="11" fill="#a3a3a3">Firm-wide configuration</text>

      <path d="M183 100 L183 138" stroke="#a3a3a3" strokeWidth="1.4" fill="none" markerEnd="url(#cc-ar)" />
      <path d="M500 100 L500 138" stroke="#a3a3a3" strokeWidth="1.4" fill="none" markerEnd="url(#cc-ar)" />
      <path d="M817 100 L817 138" stroke="#a3a3a3" strokeWidth="1.4" fill="none" markerEnd="url(#cc-ar)" />

      {/* IAM */}
      <rect x="40" y="142" width="920" height="66" rx="10" fill="#0a0a0a" stroke="#a78bfa" strokeWidth="1.4" />
      <text x="500" y="170" textAnchor="middle" fontSize="16" fill="#a78bfa">Identity and Access Management</text>
      <text x="500" y="190" textAnchor="middle" fontSize="11" fill="#a3a3a3">Passwordless sign-in, role-based permissions mapped to the org structure</text>

      <path d="M183 208 L183 250" stroke="#a78bfa" strokeWidth="1.4" fill="none" markerEnd="url(#cc-ara)" />
      <path d="M500 208 L500 250" stroke="#a78bfa" strokeWidth="1.4" fill="none" markerEnd="url(#cc-ara)" />
      <path d="M817 208 L817 250" stroke="#a78bfa" strokeWidth="1.4" fill="none" markerEnd="url(#cc-ara)" />

      {/* CORE SERVICES */}
      <text x="40" y="240" fontSize="11" letterSpacing="1.5" fill="#a3a3a3">CORE SERVICES</text>

      <rect x="40" y="254" width="286" height="76" rx="10" fill="#0a0a0a" stroke="#262626" strokeWidth="1" />
      <text x="183" y="282" textAnchor="middle" fontSize="15" fill="#f5f5f5">Programme Delivery</text>
      <text x="183" y="302" textAnchor="middle" fontSize="11" fill="#a3a3a3">Modules, resources, progress</text>

      <rect x="357" y="254" width="286" height="76" rx="10" fill="#0a0a0a" stroke="#262626" strokeWidth="1" />
      <text x="500" y="282" textAnchor="middle" fontSize="15" fill="#f5f5f5">Assessment and Grading</text>
      <text x="500" y="302" textAnchor="middle" fontSize="11" fill="#a3a3a3">Submissions through to sign-off</text>

      <rect x="674" y="254" width="286" height="76" rx="10" fill="#0a0a0a" stroke="#262626" strokeWidth="1" />
      <text x="817" y="282" textAnchor="middle" fontSize="15" fill="#f5f5f5">Onboarding and Assignment</text>
      <text x="817" y="302" textAnchor="middle" fontSize="11" fill="#a3a3a3">Automated account and team setup</text>

      <path d="M183 330 L183 372" stroke="#a3a3a3" strokeWidth="1.4" fill="none" markerEnd="url(#cc-ar)" />
      <path d="M500 330 L500 372" stroke="#a3a3a3" strokeWidth="1.4" fill="none" markerEnd="url(#cc-ar)" />
      <path d="M817 330 L817 372" stroke="#a3a3a3" strokeWidth="1.4" fill="none" markerEnd="url(#cc-ar)" />

      {/* DATA */}
      <rect x="40" y="376" width="920" height="62" rx="10" fill="#0a0a0a" stroke="#262626" strokeWidth="1" />
      <text x="500" y="402" textAnchor="middle" fontSize="15" fill="#f5f5f5">Unified Data Layer</text>
      <text x="500" y="422" textAnchor="middle" fontSize="11" fill="#a3a3a3">One profile per employee, synced across every branch</text>

      {/* REPORTING ROLLUP */}
      <text x="40" y="478" fontSize="11" letterSpacing="1.5" fill="#a3a3a3">REPORTING ROLLUP</text>

      <path d="M500 438 L500 496" stroke="#a78bfa" strokeWidth="1.4" fill="none" markerEnd="url(#cc-ara)" />

      <rect x="70" y="500" width="250" height="58" rx="10" fill="#0a0a0a" stroke="#262626" strokeWidth="1" />
      <text x="195" y="524" textAnchor="middle" fontSize="14" fill="#f5f5f5">Team Lead</text>
      <text x="195" y="543" textAnchor="middle" fontSize="11" fill="#a3a3a3">Own team</text>

      <path d="M320 529 L370 529" stroke="#a3a3a3" strokeWidth="1.4" fill="none" markerEnd="url(#cc-ar)" />

      <rect x="375" y="500" width="250" height="58" rx="10" fill="#0a0a0a" stroke="#262626" strokeWidth="1" />
      <text x="500" y="524" textAnchor="middle" fontSize="14" fill="#f5f5f5">Branch Manager</text>
      <text x="500" y="543" textAnchor="middle" fontSize="11" fill="#a3a3a3">Every team in the branch</text>

      <path d="M625 529 L675 529" stroke="#a3a3a3" strokeWidth="1.4" fill="none" markerEnd="url(#cc-ar)" />

      <rect x="680" y="500" width="250" height="58" rx="10" fill="#0a0a0a" stroke="#a78bfa" strokeWidth="1.4" />
      <text x="805" y="524" textAnchor="middle" fontSize="14" fill="#a78bfa">Head Office</text>
      <text x="805" y="543" textAnchor="middle" fontSize="11" fill="#a3a3a3">Firm-wide performance</text>
    </svg>
  </div>
);

export const consultingSlides: CaseStudySlide[] = [
  {
    key: "intro",
    content: (
      <div className="flex flex-col items-center justify-center text-center h-full">
        <SlideKicker>Consulting</SlideKicker>
        <h3 className="mt-5 sm:mt-4 max-w-2xl text-2xl sm:text-4xl font-semibold tracking-tight leading-[1.15]">
          Standardised employee training, across{" "}
          <span className="gradient-text-subtle">20 branches</span> in{" "}
          <span className="gradient-text-subtle">9 countries</span>
        </h3>
        <p className="mt-5 sm:mt-4 max-w-xl text-sm sm:text-base text-neutral-400 leading-relaxed">
          How we replaced fragmented, branch-led training with one custom platform for a
          consulting firm&apos;s entire workforce.
        </p>
        <div className="mt-8 sm:mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-3">
          {[
            { l: "Service", v: "Employee training platform" },
            { l: "Timeline", v: "2 months, ongoing" },
            { l: "Industry", v: "Consulting" },
          ].map((m) => (
            <div key={m.l} className="glass-card rounded-2xl px-4 py-2.5 text-left">
              <p className="text-[10px] uppercase tracking-widest text-neutral-500 font-medium">
                {m.l}
              </p>
              <p className="mt-0.5 text-xs sm:text-sm font-medium text-neutral-200">{m.v}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    key: "context",
    content: (
      <div className="flex flex-col justify-center h-full w-full max-w-3xl mx-auto">
        <SlideKicker>01 / Context</SlideKicker>
        <h3 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight">
          Business overview
        </h3>
        <div className="mt-8 sm:mt-6 grid gap-4 sm:gap-3 sm:grid-cols-3">
          {[
            { l: "Type", v: "Global consulting firm" },
            { l: "Stage", v: "20 branches live, 9 countries" },
            { l: "Model", v: "Centralized branch operations" },
          ].map((c) => (
            <div key={c.l} className="glass-card glass-card-hover rounded-3xl p-6 sm:p-5">
              <p className="text-xs uppercase tracking-widest text-neutral-500 font-medium">
                {c.l}
              </p>
              <p className="mt-3 text-sm sm:text-base font-medium text-neutral-200">{c.v}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    key: "gaps",
    content: (
      <div className="flex flex-col justify-center h-full w-full max-w-3xl mx-auto">
        <SlideKicker>02 / Training Gaps</SlideKicker>
        <h3 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight">
          What was holding them back
        </h3>
        <p className="mt-3 text-base font-semibold text-accent-300">
          Manual didn&apos;t scale
        </p>
        <div className="mt-5 sm:mt-4 flex flex-col divide-y divide-white/5">
          {[
            "Training assignment varied by branch, with no firm-wide consistency",
            "Content updates couldn't scale past a single branch",
            "Head office had no way to measure training quality across branches",
            "Every update meant duplicating effort across the entire firm",
          ].map((t, i) => (
            <div key={t} className="flex items-baseline gap-4 py-3.5 sm:py-2.5">
              <span className="text-lg font-semibold text-accent-400 min-w-[2rem]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-sm sm:text-base text-neutral-300">{t}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    key: "realisation",
    content: (
      <div className="flex flex-col justify-center h-full w-full max-w-3xl mx-auto">
        <SlideKicker>03 / Realisation</SlideKicker>
        <h3 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight">
          The real problem
        </h3>
        <div className="mt-8 sm:mt-6 grid gap-4 sm:gap-3 sm:grid-cols-2">
          {[
            { h: "Scale broke consistency", p: "Certified in one branch didn't mean certified to the same bar in another" },
            { h: "No shared backbone", p: "Local strength existed, but nothing tied it together at the firm level" },
          ].map((c) => (
            <div key={c.h} className="glass-card glass-card-hover rounded-3xl p-6 sm:p-5">
              <h4 className="text-base sm:text-lg font-semibold leading-tight">{c.h}</h4>
              <p className="mt-2 text-sm text-neutral-400 leading-relaxed">{c.p}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    key: "system",
    content: (
      <div className="flex flex-col justify-center h-full w-full max-w-3xl mx-auto">
        <SlideKicker>04 / The System</SlideKicker>
        <h3 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight">
          Core components
        </h3>
        <ul className="mt-6 sm:mt-4 space-y-2.5 sm:space-y-2">
          {[
            "Unified IAM system across every branch",
            "Programme delivery and assessment tracked end to end",
            "Automated employee onboarding and team assignment",
            "A single platform spanning the entire organizational structure",
          ].map((t) => (
            <li key={t} className="flex items-start gap-3 glass-card rounded-2xl px-5 py-3 sm:py-2.5">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" />
              <span className="text-sm sm:text-base text-neutral-300">{t}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    key: "architecture",
    content: (
      <div className="flex flex-col justify-center h-full w-full max-w-3xl mx-auto">
        <SlideKicker>04 / The System</SlideKicker>
        <h3 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight">
          System architecture
        </h3>
        <div className="mt-5 sm:mt-4">
          <SystemDiagram />
        </div>
      </div>
    ),
  },
  {
    key: "impact",
    content: (
      <div className="flex flex-col justify-center h-full w-full max-w-3xl mx-auto">
        <SlideKicker>05 / Impact</SlideKicker>
        <h3 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight">
          Performance metrics
        </h3>
        <div className="mt-8 sm:mt-6 grid grid-cols-2 gap-3">
          {[
            { v: "9", l: "Countries covered" },
            { v: "20", l: "Branches operating to one standard" },
          ].map((s) => (
            <div
              key={s.l}
              className="glass-card glass-card-hover rounded-2xl p-6 sm:p-5 text-center flex flex-col items-center justify-center"
            >
              <p className="font-semibold tracking-tight text-3xl sm:text-4xl gradient-text-subtle">{s.v}</p>
              <p className="mt-1.5 text-xs sm:text-sm text-neutral-400">{s.l}</p>
            </div>
          ))}
        </div>
        <div className="mt-3">
          <div className="glass-card glass-card-hover rounded-2xl p-6 sm:p-5 text-center flex flex-col items-center justify-center">
            <p className="font-semibold tracking-tight text-3xl sm:text-4xl gradient-text-subtle">6</p>
            <p className="mt-1.5 text-xs sm:text-sm text-neutral-400">Departments, one access layer</p>
          </div>
        </div>
        <div className="mt-8 sm:mt-6 flex justify-center">
          <Link href="/contact">
            <button className="btn-premium inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm sm:text-base font-semibold text-white">
              Build something like this
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    ),
  },
];
