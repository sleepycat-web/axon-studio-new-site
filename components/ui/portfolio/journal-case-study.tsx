"use client";
import { ArrowRight } from "lucide-react";
import React from "react";
import Link from "next/link";
import type { CaseStudySlide } from "@/components/ui/portfolio/case-study-deck";
import { ClickableDiagram, ClickableShot } from "@/components/ui/portfolio/case-study-figure";
import {
  JournalSystemDiagram,
  JournalProcessDiagram,
} from "@/components/ui/portfolio/case-study-diagrams";

const SlideKicker = ({ children }: { children: React.ReactNode }) => (
  <span className="text-xs sm:text-sm font-medium uppercase tracking-widest text-accent-400">
    {children}
  </span>
);

const liveShots = [
  { src: "/assets/case-studies/journal-homepage.jpg", label: "Journal homepage" },
  { src: "/assets/case-studies/journal-issue-archive.jpg", label: "Issue archive" },
  { src: "/assets/case-studies/journal-special-issue.jpg", label: "Special issue" },
  { src: "/assets/case-studies/journal-article-page.jpg", label: "Article page" },
];

export const journalSlides: CaseStudySlide[] = [
  {
    key: "intro",
    content: (
      <div className="flex flex-col items-center justify-center text-center h-full">
        <SlideKicker>Education</SlideKicker>
        <h3 className="mt-5 sm:mt-4 max-w-2xl text-2xl sm:text-4xl font-normal tracking-tight leading-[1.15]">
          An end-to-end <span className="gradient-text-subtle">management system</span> for an
          international business journal
        </h3>
        <p className="mt-5 sm:mt-4 max-w-xl text-sm sm:text-base text-neutral-400 leading-relaxed">
          How we took a journal off email and onto a system that runs every manuscript from
          submission to publication.
        </p>
        <div className="mt-8 sm:mt-6 flex flex-wrap items-center justify-center gap-3">
          {[
            { l: "Service", v: "Editorial workflow automation" },
            { l: "Market", v: "International" },
            { l: "Industry", v: "Education" },
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
        <div className="mt-8 sm:mt-6 grid gap-4 sm:gap-3 sm:grid-cols-3">
          {[
            { l: "Type", v: "Academic journal" },
            { l: "Audience", v: "Researchers and academics worldwide" },
            { l: "Model", v: "Open access, bi-annual, double-anonymous review" },
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
        <SlideKicker>02 / Editorial Gaps</SlideKicker>
        <h3 className="mt-3 text-2xl sm:text-3xl font-normal tracking-tight">
          What was holding them back
        </h3>
        <p className="mt-3 text-base font-normal text-accent-300">The inbox didn&apos;t scale</p>
        <div className="mt-5 sm:mt-4 flex flex-col divide-y divide-white/5">
          {[
            "Submissions and author emails scattered across inboxes",
            "No live status on manuscripts, so editors had to chase to find out",
            "Reviewer invites, reminders and decisions chased by hand",
            "No audit trail of who reviewed, decided or edited a manuscript",
            "No searchable archive or tracked indexing for published papers",
          ].map((t, i) => (
            <div key={t} className="flex items-baseline gap-4 py-3 sm:py-2">
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
              h: "Publishing is a workflow",
              p: "Every manuscript moves through the same stages, and each stage needs an owner and a record",
            },
            {
              h: "Credibility lives in the archive",
              p: "Authors and readers judge a journal by how its issues and articles are presented, and by whether its emails reach an inbox",
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
    key: "implementation",
    content: (
      <div className="flex flex-col justify-center h-full w-full max-w-3xl mx-auto">
        <SlideKicker>04 / Implementation</SlideKicker>
        <h3 className="mt-3 text-2xl sm:text-3xl font-normal tracking-tight">
          How the system is structured
        </h3>
        <ul className="mt-6 sm:mt-4 space-y-2.5 sm:space-y-2">
          {[
            "Online submission with status tracking, then double-anonymous peer review with reviewer invitations, forms and decisions",
            "Role-based dashboards for editors, reviewers and authors",
            "Copyediting and production through to published articles and PDFs",
            "Public journal website with 48 existing papers migrated into two published issues",
            "Workflow emails written for every stage, sent from one editor identity",
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
        <SlideKicker>04 / Implementation</SlideKicker>
        <h3 className="mt-3 text-2xl sm:text-3xl font-normal tracking-tight">System architecture</h3>
        <div className="mt-5 sm:mt-4">
          <ClickableDiagram render={(className) => <JournalSystemDiagram className={className} />} />
        </div>
      </div>
    ),
  },
  {
    key: "process",
    content: (
      <div className="flex flex-col justify-center h-full w-full max-w-3xl mx-auto">
        <SlideKicker>04 / Implementation</SlideKicker>
        <h3 className="mt-3 text-2xl sm:text-3xl font-normal tracking-tight">
          From submission to archive
        </h3>
        <div className="mt-5 sm:mt-4">
          <ClickableDiagram render={(className) => <JournalProcessDiagram className={className} />} />
        </div>
      </div>
    ),
  },
  {
    key: "custom-builds",
    content: (
      <div className="flex flex-col justify-center h-full w-full max-w-3xl mx-auto">
        <SlideKicker>04 / Implementation</SlideKicker>
        <h3 className="mt-3 text-2xl sm:text-3xl font-normal tracking-tight">
          What we added for the journal
        </h3>
        <div className="mt-6 sm:mt-5 grid gap-3 sm:grid-cols-3">
          {[
            {
              t: "Payments",
              h: "Simple author payments",
              p: "Authors pay the publication fee by UPI or PayPal, and the editor confirms it in the system. Nothing goes live until payment is confirmed.",
            },
            {
              t: "Communication",
              h: "Professional communication",
              p: "Every stage sends a clear, branded email from one editor identity, so messages reach inboxes and authors always know what happens next.",
            },
            {
              t: "Public site",
              h: "A journal that looks credible",
              p: "A branded public website with the issue archive, editorial team profiles, indexing details and a Call for Papers on the homepage.",
            },
          ].map((c) => (
            <div key={c.t} className="glass-card glass-card-hover rounded-3xl p-5">
              <span className="text-[10px] uppercase tracking-widest text-accent-400 font-medium">
                {c.t}
              </span>
              <h4 className="mt-2 text-base font-normal leading-tight">{c.h}</h4>
              <p className="mt-2 text-sm text-neutral-400 leading-relaxed">{c.p}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    key: "live-journal",
    content: (
      <div className="flex flex-col justify-center h-full w-full max-w-3xl mx-auto">
        <SlideKicker>04 / Implementation</SlideKicker>
        <h3 className="mt-3 text-2xl sm:text-3xl font-normal tracking-tight">The live journal</h3>
        <div className="mt-6 sm:mt-5 grid grid-cols-2 gap-3 w-full max-w-xl mx-auto">
          {liveShots.map((s, i) => (
            <ClickableShot
              key={s.src}
              shot={s}
              index={i}
              allShots={liveShots}
              aspect="aspect-[16/10]"
              sizes="(max-width: 640px) 45vw, 360px"
            />
          ))}
        </div>
      </div>
    ),
  },
  {
    key: "impact",
    content: (
      <div className="flex flex-col justify-center h-full w-full max-w-3xl mx-auto">
        <SlideKicker>05 / Impact</SlideKicker>
        <h3 className="mt-3 text-2xl sm:text-3xl font-normal tracking-tight">Reach and Scale</h3>
        <div className="mt-8 sm:mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { v: "48", l: "Papers published across 2 issues, all searchable in one public archive" },
            { v: "7", l: "Editorial board members, led by 2 managing editors" },
            { v: "28", l: "Indexing databases carrying the journal, so published research gets found" },
          ].map((s) => (
            <div
              key={s.l}
              className="glass-card glass-card-hover rounded-2xl p-6 sm:p-5 text-center flex flex-col items-center justify-center"
            >
              <p className="font-medium tracking-tight text-3xl sm:text-4xl gradient-text-subtle">{s.v}</p>
              <p className="mt-1.5 text-xs sm:text-sm text-neutral-400">{s.l}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 sm:mt-6 flex justify-center">
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
