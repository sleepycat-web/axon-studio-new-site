"use client";
import React, { useState } from "react";
import CaseStudyDeck from "@/components/ui/portfolio/case-study-deck";
import { hospitalitySlides } from "@/components/ui/portfolio/hospitality-case-study";
import { consultingSlides } from "@/components/ui/portfolio/consulting-case-study";

const tabs = [
  {
    key: "consulting",
    label: "Consulting",
    slides: consultingSlides,
    description:
      "How a consulting firm replaced fragmented, branch-led training with one unified platform spanning 20 branches in 9 countries.",
  },
  {
    key: "hospitality",
    label: "Hospitality",
    slides: hospitalitySlides,
    description:
      "How a multi-outlet cafe chain went from manual operations to a fully systemised platform, and doubled revenue along the way.",
  },
] as const;

export default function CaseStudiesSection() {
  const [active, setActive] = useState<(typeof tabs)[number]["key"]>("consulting");
  const activeTab = tabs.find((t) => t.key === active)!;

  return (
    <section id="case-study" className="relative py-24 sm:py-24 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 section-divider"></div>

      {/* Background orbs */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 orb-gradient orb-primary opacity-20"></div>
      <div className="absolute bottom-1/4 -right-40 w-80 h-80 orb-gradient orb-secondary opacity-20"></div>

      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 relative">
        <div className="flex flex-col gap-4">
          <span className="text-sm font-medium uppercase tracking-widest text-accent-400">
            Case Studies
          </span>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Real Client Transformations
          </h2>
        </div>

        {/* Triggers */}
        <div className="mt-8 flex flex-wrap gap-2">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors border ${
                active === t.key
                  ? "bg-accent-500 border-accent-500 text-white"
                  : "bg-white/5 border-white/10 text-neutral-300 hover:bg-white/10"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <p className="mt-5 max-w-2xl text-base text-neutral-400 sm:text-lg">
          {activeTab.description}
        </p>

        <CaseStudyDeck key={activeTab.key} slides={[...activeTab.slides]} />
      </div>
    </section>
  );
}
