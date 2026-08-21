"use client";
import { ArrowRight } from "lucide-react";
import React from "react";
import Link from "next/link";

export default function Cta1() {
  return (
    <section className="w-full max-w-5xl mx-auto py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-white bg-neutral-900/50 border-white/10 relative isolate flex flex-col items-center justify-between gap-8 overflow-hidden rounded-[2rem] border p-8 shadow-sm md:flex-row md:gap-12 md:px-12 md:py-20">
          <div
            aria-hidden="true"
            className="absolute top-1/2 left-[max(-7rem,calc(50%-52rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
              }}
              className="from-accent-500 to-accent-500/60 aspect-[577/310] w-[36rem] bg-gradient-to-r opacity-30"
            />
          </div>

          <div
            aria-hidden="true"
            className="absolute top-1/2 left-[max(45rem,calc(50%+8rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
              }}
              className="from-accent-500 to-accent-500/60 aspect-[577/310] w-[36rem] bg-gradient-to-r opacity-30"
            />
          </div>

          <div className="flex max-w-sm flex-col items-center gap-6 text-center md:flex-row md:items-center md:gap-8 md:text-left">
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight md:text-4xl text-white leading-tight">
                Got a process that should be software?
              </h2>
              <p className="text-neutral-400 max-w-[600px] text-base">
                Tell us how your business runs today. We&apos;ll show you what to build, what to automate, and what it takes to get there.
              </p>
            </div>
          </div>

          <div className="mt-2 flex w-full flex-col shrink-0 justify-center md:mt-0 md:w-auto gap-4">
            <Link href="/contact" className="w-full">
              <button className="btn-premium group w-full inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold text-white">
                  <span>Start Your Project</span>
                  <span className="ml-2 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-1">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </button>
            </Link>
            <Link href="/portfolio#work" className="w-full">
              <button className="btn-secondary w-full inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-medium text-white">
                View Our Work
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
