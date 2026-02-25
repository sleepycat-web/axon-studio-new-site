"use client";
import React from "react";
import Link from "next/link";

export default function Cta1() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 orb-gradient orb-primary opacity-40"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 orb-gradient orb-secondary opacity-30"></div>

      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:max-w-7xl lg:px-8 relative">
        <div className="glass-card gradient-border flex flex-col items-center gap-10 rounded-3xl px-8 py-20 sm:px-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/10 border border-accent-500/20">
            <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse"></span>
            <span className="text-sm text-accent-300 font-medium">Let&apos;s Build Together</span>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-white mx-auto max-w-lg text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl leading-tight">
              Ready to Transform Your Business?
            </h2>
            <p className="text-neutral-400 mx-auto max-w-xl text-lg">
              Start your journey with Axon Studio and build something extraordinary.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact">
              <button className="btn-premium inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold text-white">
                Start Your Project
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </Link>
            <Link href="/portfolio#work">
              <button className="btn-secondary inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-medium text-white">
                View Portfolio
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
