"use client";
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { COMPANY_METRICS } from "@/constants/metrics";
import type { CaseStudySlide } from "@/components/ui/portfolio/case-study-deck";

/* ── Lightbox for case-study screenshots ── */
const CaseStudyLightbox = ({
  images,
  initialIndex,
  onClose,
}: {
  images: { src: string; label: string }[];
  initialIndex: number;
  onClose: () => void;
}) => {
  const [idx, setIdx] = useState(initialIndex);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") setIdx((i) => (i + 1) % images.length);
      else if (e.key === "ArrowLeft") setIdx((i) => (i - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [images.length, onClose]);

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-md flex flex-col items-center justify-center"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white transition-all z-[10000]"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Image */}
      <div
        className="relative w-[90%] h-[78%] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[idx].src}
          alt={images[idx].label}
          fill
          className="object-contain object-center"
        />

        {images.length > 1 && (
          <>
            <button
              onClick={() => setIdx((i) => (i - 1 + images.length) % images.length)}
              className="absolute left-0 p-3 rounded-full bg-black/60 text-white hover:bg-black/90 backdrop-blur-sm transition-all border border-white/10 hover:scale-110 z-10"
            >
              <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setIdx((i) => (i + 1) % images.length)}
              className="absolute right-0 p-3 rounded-full bg-black/60 text-white hover:bg-black/90 backdrop-blur-sm transition-all border border-white/10 hover:scale-110 z-10"
            >
              <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Counter */}
        <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-sm text-white/80 font-medium z-10">
          {idx + 1} / {images.length}
        </div>
      </div>

      {/* Caption */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center pointer-events-none z-10">
        <div className="bg-neutral-100 border border-white/10 px-6 py-3 rounded-2xl text-center shadow-2xl">
          <h4 className="text-neutral-900 font-semibold text-base sm:text-lg">{images[idx].label}</h4>
        </div>
      </div>
    </motion.div>,
    document.body
  );
};

/* ── Clickable screenshot thumbnail ── */
const ClickableShot = ({
  shot,
  index,
  allShots,
  aspect,
  sizes,
}: {
  shot: { src: string; label: string };
  index: number;
  allShots: { src: string; label: string }[];
  aspect: string;
  sizes: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className="flex flex-col gap-2 cursor-pointer group/shot"
        onClick={(e) => { e.stopPropagation(); setOpen(true); }}
      >
        <div className={`relative ${aspect} rounded-xl overflow-hidden border border-white/10 bg-neutral-900 group-hover/shot:border-accent-400 transition-colors`}>
          <Image
            src={shot.src}
            alt={`${shot.label} screen`}
            fill
            className="object-cover object-top"
            sizes={sizes}
          />
        </div>
        <p className="text-xs text-neutral-500 text-center">{shot.label}</p>
      </div>
      {open && (
        <CaseStudyLightbox images={allShots} initialIndex={index} onClose={() => setOpen(false)} />
      )}
    </>
  );
};

const selfOrderShots = [
  { src: "/assets/saas/restaurant/self-order-home.jpg", label: "Home" },
  { src: "/assets/saas/restaurant/self-order-menu.jpg", label: "Menu" },
  { src: "/assets/saas/restaurant/self-order-cart.jpg", label: "Cart" },
  { src: "/assets/saas/restaurant/self-order-otp.jpg", label: "OTP Verification" },
];

const platformShots = [
  { src: "/assets/saas/restaurant/pos-page-ss.png", label: "Point of Sale" },
  { src: "/assets/saas/restaurant/order-panel-ss-1.png", label: "Billing & Finances" },
  { src: "/assets/saas/restaurant/booking-page-ss.png", label: "Reservations & Bookings" },
  { src: "/assets/saas/restaurant/inventory-panel-ss.png", label: "Inventory & Cost Control" },
  { src: "/assets/saas/restaurant/admin-panel-ss.png", label: "Admin Console & CRM" },
  { src: "/assets/saas/restaurant/aggregated-panel-ss.png", label: "Central Operations" },
];

const SlideKicker = ({ children }: { children: React.ReactNode }) => (
  <span className="text-xs sm:text-sm font-medium uppercase tracking-widest text-accent-400">
    {children}
  </span>
);

export const hospitalitySlides: CaseStudySlide[] = [
  {
    key: "intro",
    content: (
      <div className="flex flex-col items-center justify-center text-center h-full">
        <SlideKicker>Hospitality</SlideKicker>
        <h3 className="mt-5 sm:mt-4 max-w-2xl text-2xl sm:text-4xl font-semibold tracking-tight leading-[1.15]">
          How we helped our client
          <br />
         manage  <span className="gradient-text-subtle">13K+</span> bookings
        </h3>
        <p className="mt-5 sm:mt-4 max-w-xl text-sm sm:text-base text-neutral-400 leading-relaxed">
          From manual chaos to fully systemised operations, where customers self-order
          from their phones, all run on one custom platform.
        </p>
        <div className="mt-8 sm:mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-3">
          {[
            { l: "Service", v: "Custom operations platform" },
            { l: "Timeline", v: "9 months, ongoing" },
            { l: "Industry", v: "Hospitality" },
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
            { l: "Type", v: "Multi-outlet cafe chain" },
            { l: "Stage", v: "Started at 2 outlets" },
            { l: "Model", v: "Kiosk-based self-service" },
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
        <SlideKicker>02 / Operational Gaps</SlideKicker>
        <h3 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight">
          What was holding them back
        </h3>
        <p className="mt-3 text-base font-semibold text-accent-300">
          Growth = more chaos
        </p>
        <div className="mt-5 sm:mt-4 flex flex-col divide-y divide-white/5">
          {[
            "Orders and billing handled manually",
            "Different platforms for POS, reservations and inventory",
            "Cash flow mismatch and poor visibility into daily finances",
            "No centralised control across multiple outlets",
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
    key: "system",
    content: (
      <div className="flex flex-col justify-center h-full w-full max-w-3xl mx-auto">
        <SlideKicker>03 / The System</SlideKicker>
        <h3 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight">
          Core components
        </h3>
        <ul className="mt-8 sm:mt-6 space-y-3 sm:space-y-2.5">
          {[
            "Ordering, reservations, billing and customer feedback in a single flow",
            "Inventory linked with menu for accurate stock and cost tracking",
            "Daily cash flow and expense tracking",
            "Unified control across all outlets",
          ].map((t) => (
            <li key={t} className="flex items-start gap-3 glass-card rounded-2xl px-5 py-3.5 sm:py-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" />
              <span className="text-sm sm:text-base text-neutral-300">{t}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    key: "self-order",
    content: (
      <div className="flex flex-col justify-center h-full w-full max-w-3xl mx-auto">
        <SlideKicker>03 / The System</SlideKicker>
        <h3 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight">
          Self ordering
        </h3>
        <p className="mt-2 text-sm sm:text-base text-neutral-400">
          Customers order from their phones. No queue, no front-of-house dependency.
        </p>
        <div className="mt-6 sm:mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {selfOrderShots.map((s, i) => (
            <ClickableShot
              key={s.src}
              shot={s}
              index={i}
              allShots={selfOrderShots}
              aspect="aspect-[9/16]"
              sizes="(max-width: 640px) 45vw, 180px"
            />
          ))}
        </div>
      </div>
    ),
  },
  {
    key: "platform",
    content: (
      <div className="flex flex-col justify-center h-full w-full max-w-3xl mx-auto">
        <SlideKicker>03 / The System</SlideKicker>
        <h3 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight">
          One platform, every workflow
        </h3>
        <div className="mt-6 sm:mt-5 grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {platformShots.map((s, i) => (
            <ClickableShot
              key={s.src}
              shot={s}
              index={i}
              allShots={platformShots}
              aspect="aspect-[16/10]"
              sizes="(max-width: 1024px) 45vw, 280px"
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
        <SlideKicker>04 / Impact</SlideKicker>
        <h3 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight">
          Performance metrics
        </h3>
        <div className="mt-8 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { v: "2 → 4", l: "New outlets launched in 9 months" },
            { v: "2x", l: "Monthly revenue doubled (April 2025 → January 2026)" },
          ].map((s) => (
            <div
              key={s.l}
              className="glass-card glass-card-hover rounded-2xl p-5 sm:p-4 text-center flex flex-col items-center justify-center"
            >
              <p className="font-semibold tracking-tight text-2xl sm:text-3xl gradient-text-subtle">
                {s.v}
              </p>
              <p className="mt-1.5 text-xs sm:text-sm text-neutral-400">{s.l}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 grid grid-cols-3 gap-3">
          {[
            { v: COMPANY_METRICS.ordersProcessed, l: "Orders processed" },
            { v: COMPANY_METRICS.reservationsProcessed, l: "Reservations handled" },
            { v: COMPANY_METRICS.usersManaged, l: "Users" },
          ].map((s) => (
            <div
              key={s.l}
              className="glass-card glass-card-hover rounded-2xl p-5 sm:p-4 text-center flex flex-col items-center justify-center"
            >
              <p className="font-semibold tracking-tight text-xl sm:text-2xl text-neutral-100">
                {s.v}
              </p>
              <p className="mt-1.5 text-xs sm:text-sm text-neutral-400">{s.l}</p>
            </div>
          ))}
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

