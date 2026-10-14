"use client";
import { ArrowRight, Video, Play, LayoutGrid, FileText, Mail } from "lucide-react";
import React from "react";
import Link from "next/link";
import type { CaseStudySlide } from "@/components/ui/portfolio/case-study-deck";
import { ClickableDiagram, ClickableShot } from "@/components/ui/portfolio/case-study-figure";
import { CoachingFunnelDiagram } from "@/components/ui/portfolio/case-study-diagrams";

const SlideKicker = ({ children }: { children: React.ReactNode }) => (
  <span className="text-xs sm:text-sm font-medium uppercase tracking-widest text-accent-400">
    {children}
  </span>
);

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="mt-6 sm:mt-4 space-y-2.5 sm:space-y-2">
    {items.map((t) => (
      <li key={t} className="flex items-start gap-3 glass-card rounded-2xl px-5 py-3 sm:py-2.5">
        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" />
        <span className="text-sm sm:text-base text-neutral-300">{t}</span>
      </li>
    ))}
  </ul>
);

const landingShots = [
  { src: "/assets/case-studies/coaching-core-message.png", label: "Core message" },
  { src: "/assets/case-studies/coaching-programmes-pricing.png", label: "Programmes and pricing" },
];

const outputs = [
  { icon: Play, label: "Short-form clips" },
  { icon: LayoutGrid, label: "Carousel set" },
  { icon: FileText, label: "LinkedIn post" },
  { icon: Mail, label: "Newsletter issue" },
];

const routes = [
  { what: "Short-form clips", where: ["LinkedIn", "Instagram", "YouTube Shorts", "X"] },
  { what: "Carousels", where: ["LinkedIn", "Instagram", "X"] },
  { what: "LinkedIn posts", where: ["LinkedIn, the main channel"] },
  { what: "Newsletter", where: ["The email list"] },
];

export const coachingSlides: CaseStudySlide[] = [
  {
    key: "intro",
    content: (
      <div className="flex flex-col items-center justify-center text-center h-full">
        <SlideKicker>Coaching</SlideKicker>
        <h3 className="mt-5 sm:mt-4 max-w-2xl text-2xl sm:text-4xl font-normal tracking-tight leading-[1.15]">
          Turning a doctor&apos;s expertise into{" "}
          <span className="gradient-text-subtle">booked discovery calls</span>
        </h3>
        <p className="mt-5 sm:mt-4 max-w-xl text-sm sm:text-base text-neutral-400 leading-relaxed">
          How we gave a GP and sports doctor coaching high achievers in the UK a clear route from a
          first visit to a conversion.
        </p>
        <div className="mt-8 sm:mt-6 flex flex-wrap items-center justify-center gap-3">
          {[
            { l: "Service", v: "Landing page, newsletter and sales funnel" },
            { l: "Market", v: "United Kingdom" },
            { l: "Industry", v: "Coaching" },
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
        <h3 className="mt-3 text-2xl sm:text-3xl font-normal tracking-tight">Business overview</h3>
        <div className="mt-8 sm:mt-6 grid grid-cols-2 gap-4 sm:gap-3 sm:grid-cols-4">
          {[
            { l: "Type", v: "Health and performance coaching" },
            { l: "Founder", v: "GP and sports doctor" },
            { l: "Audience", v: "Ambitious professionals, 35 to 60" },
            { l: "Offers", v: "Reset £1,500, Partnership £6,000" },
          ].map((c) => (
            <div key={c.l} className="glass-card glass-card-hover rounded-3xl p-6 sm:p-5">
              <p className="text-xs uppercase tracking-widest text-neutral-500 font-medium">{c.l}</p>
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
        <SlideKicker>02 / Growth Gaps</SlideKicker>
        <h3 className="mt-3 text-2xl sm:text-3xl font-normal tracking-tight">
          What was holding them back
        </h3>
        <p className="mt-3 text-base font-normal text-accent-300">
          Expertise wasn&apos;t converting
        </p>
        <div className="mt-5 sm:mt-4 flex flex-col divide-y divide-white/5">
          {[
            "Programmes weren't packaged into clear, priced offers",
            "No single path from a website visit to a discovery call",
            "Visitors not ready to buy left without joining an email list",
            "Content was posted ad hoc, with no system feeding the funnel",
          ].map((t, i) => (
            <div key={t} className="flex items-baseline gap-4 py-3.5 sm:py-2.5">
              <span className="text-lg font-medium text-accent-400 min-w-[2rem]">
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
        <h3 className="mt-3 text-2xl sm:text-3xl font-normal tracking-tight">The real problem</h3>
        <div className="mt-8 sm:mt-6 grid gap-4 sm:gap-3 sm:grid-cols-2">
          {[
            {
              h: "High-ticket sells on trust",
              p: "At £1,500 and up, people need a conversation before they buy, not a checkout page",
            },
            {
              h: "Content needed a system",
              p: "Posting without a funnel builds reach, but not clients",
            },
          ].map((c) => (
            <div key={c.h} className="glass-card glass-card-hover rounded-3xl p-6 sm:p-5">
              <h4 className="text-base sm:text-lg font-normal leading-tight">{c.h}</h4>
              <p className="mt-2 text-sm text-neutral-400 leading-relaxed">{c.p}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    key: "landing-page",
    content: (
      <div className="flex flex-col justify-center h-full w-full max-w-3xl mx-auto">
        <SlideKicker>04 / The Landing Page</SlideKicker>
        <h3 className="mt-3 text-2xl sm:text-3xl font-normal tracking-tight">
          Where visitors decide
        </h3>
        <BulletList
          items={[
            "A clear message that leads with wellbeing, then performance",
            "Offers presented simply, so the next step is obvious",
            "One main action: book a discovery call",
            "A softer path for visitors not ready yet: the free ebook and newsletter",
            "Social proof placed right beside the offer",
          ]}
        />
      </div>
    ),
  },
  {
    key: "landing-page-shots",
    content: (
      <div className="flex flex-col justify-center h-full w-full max-w-3xl mx-auto">
        <SlideKicker>04 / The Landing Page</SlideKicker>
        <h3 className="mt-3 text-2xl sm:text-3xl font-normal tracking-tight">
          The live page
        </h3>
        <div className="mt-6 sm:mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {landingShots.map((s, i) => (
            <ClickableShot
              key={s.src}
              shot={s}
              index={i}
              allShots={landingShots}
              aspect="aspect-[16/9]"
              sizes="(max-width: 640px) 90vw, 360px"
            />
          ))}
        </div>
      </div>
    ),
  },
  {
    key: "traffic",
    content: (
      <div className="flex flex-col justify-center h-full w-full max-w-3xl mx-auto">
        <SlideKicker>05 / Traffic</SlideKicker>
        <h3 className="mt-3 text-2xl sm:text-3xl font-normal tracking-tight">
          Bringing the right people in
        </h3>
        <p className="mt-3 text-sm sm:text-base text-neutral-400">
          One source feeds every channel, so a steady flow of the right people reaches the landing
          page and newsletter.
        </p>
        <div className="mt-5 sm:mt-4 flex flex-col items-center">
          <div className="glass-card rounded-2xl px-5 py-3 flex items-center gap-3 border border-accent-400/40">
            <Video className="w-5 h-5 text-accent-400 shrink-0" />
            <div>
              <p className="text-sm sm:text-base font-medium text-neutral-100">Long-form YouTube video</p>
              <p className="text-xs text-neutral-400">Recorded in blocks, one idea per block</p>
            </div>
          </div>
          <div className="h-4 w-px bg-white/20" />
          <div className="grid w-full gap-3 sm:grid-cols-3">
            {["Block 1", "Block 2", "Block 3"].map((b) => (
              <div key={b} className="glass-card rounded-2xl p-4 sm:p-3">
                <p className="text-xs uppercase tracking-widest text-accent-400 font-medium">{b}</p>
                <ul className="mt-2 space-y-1.5">
                  {outputs.map((o) => (
                    <li key={o.label} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-300">
                      <o.icon className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                      {o.label}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-neutral-500">
            And so on. Every block follows the same pattern, one block a week.
          </p>
        </div>
      </div>
    ),
  },
  {
    key: "traffic-routes",
    content: (
      <div className="flex flex-col justify-center h-full w-full max-w-3xl mx-auto">
        <SlideKicker>05 / Traffic</SlideKicker>
        <h3 className="mt-3 text-2xl sm:text-3xl font-normal tracking-tight">
          Where each output goes
        </h3>
        <div className="mt-5 sm:mt-4 flex flex-col gap-2.5 sm:gap-2">
          {routes.map((r) => (
            <div
              key={r.what}
              className="glass-card rounded-2xl px-5 py-3 sm:py-2.5 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4"
            >
              <span className="text-sm sm:text-base font-medium text-neutral-100 sm:w-44 shrink-0">
                {r.what}
              </span>
              <span className="flex flex-wrap gap-2">
                {r.where.map((w) => (
                  <span
                    key={w}
                    className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs sm:text-sm text-neutral-300"
                  >
                    {w}
                  </span>
                ))}
              </span>
            </div>
          ))}
          <div className="rounded-2xl border border-accent-400/40 bg-accent-500/10 px-5 py-3 sm:py-2.5 text-sm sm:text-base text-neutral-200">
            Every piece ends the same way: join the newsletter or get the free ebook.
          </div>
        </div>
        <p className="mt-3 text-xs sm:text-sm text-neutral-500">
          Later: turn each video transcript into a blog article for search.
        </p>
      </div>
    ),
  },
  {
    key: "funnel",
    content: (
      <div className="flex flex-col justify-center h-full w-full max-w-3xl mx-auto">
        <SlideKicker>06 / The Funnel</SlideKicker>
        <h3 className="mt-3 text-2xl sm:text-3xl font-normal tracking-tight">
          From first view to coaching
        </h3>
        <BulletList
          items={[
            "Every channel points to one place: the website, then the email list",
            "Welcome emails build trust before anyone is asked to book",
            "Everyone buys through a discovery call; the Reset leads into the Partnership",
            "Not ready yet? They stay on the newsletter until they are",
          ]}
        />
      </div>
    ),
  },
  {
    key: "funnel-diagram",
    content: (
      <div className="flex flex-col justify-center h-full w-full max-w-4xl mx-auto">
        <SlideKicker>06 / The Funnel</SlideKicker>
        <h3 className="mt-3 text-2xl sm:text-3xl font-normal tracking-tight">Funnel map</h3>
        <div className="mt-5 sm:mt-4">
          <ClickableDiagram
            maxWidth="max-w-7xl"
            render={(className) => <CoachingFunnelDiagram className={className} />}
          />
        </div>
        <p className="mt-2 text-xs text-neutral-500 text-center">Tap the map to enlarge</p>
      </div>
    ),
  },
  {
    key: "cta",
    content: (
      <div className="flex flex-col items-center justify-center text-center h-full max-w-2xl mx-auto">
        <SlideKicker>07 / Next Step</SlideKicker>
        <h3 className="mt-4 text-2xl sm:text-4xl font-normal tracking-tight leading-[1.15]">
          Your expertise, turned into <span className="gradient-text-subtle">booked calls</span>
        </h3>
        <p className="mt-5 sm:mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed">
          One clear path from first visit to discovery call, built around how you already sell.
        </p>
        <div className="mt-8 sm:mt-6">
          <Link href="/contact">
            <button className="btn-premium group inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm sm:text-base font-semibold text-white">
              <span>Build something like this</span>
              <span className="ml-2 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-1">
                <ArrowRight className="w-4 h-4" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    ),
  },
];
