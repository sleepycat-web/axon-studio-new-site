"use client";
import React from "react";

export default function Process() {
  const steps = [
    {
      step: "01",
      title: "Discovery",
      text: "We learn your business, your goals and the challenges you need solved.",
    },
    {
      step: "02",
      title: "Process Mapping",
      text: "We document workflows, define SOPs and identify automation opportunities.",
    },
    {
      step: "03",
      title: "System Development",
      text: "We build software around your SOPs and critical business operations",
    },
    {
      step: "04",
      title: "Deployment",
      text: "We implement the system, train your team, and ensure adoption.",
    },
  ];

  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute top-0 left-0 right-0 section-divider"></div>

      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex flex-col gap-4">
          <span className="text-sm font-medium uppercase tracking-widest text-accent-400">
            How We Work
          </span>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Our Process
          </h2>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl glass-card sm:grid-cols-2 lg:grid-cols-[1.05fr_1.15fr_1.1fr_1fr]">
          {steps.map((s, index) => (
            <div key={s.step} className="bg-neutral-950/50 p-6  relative group hover:bg-accent-500/5 transition-colors">
              {index < 3 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-6 transform -translate-y-1/2 z-10">
                  <svg className="w-6 h-6 text-accent-500/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
              <span className="text-2xl font-bold gradient-text-subtle">
                {s.step}
              </span>
              <h3 className="mt-4 text-lg font-semibold group-hover:text-accent-300 transition-colors">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-400    ">
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
