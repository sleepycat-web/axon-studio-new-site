"use client";
import React, { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

export type CaseStudySlide = {
  key: string;
  content: React.ReactNode;
};

const swipeThreshold = 60;

export default function CaseStudyDeck({ slides }: { slides: CaseStudySlide[] }) {
  const [[index, direction], setSlide] = useState<[number, number]>([0, 0]);

  const paginate = useCallback((dir: number) => {
    setSlide(([i]) => {
      const next = i + dir;
      if (next < 0 || next >= slides.length) return [i, dir];
      return [next, dir];
    });
  }, [slides.length]);

  return (
    <div
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") {
          e.preventDefault();
          paginate(1);
        } else if (e.key === "ArrowLeft") {
          e.preventDefault();
          paginate(-1);
        }
      }}
      aria-label="Case study slides. Use left and right arrow keys to navigate."
      className="mt-12 sm:mt-8 relative rounded-3xl overflow-hidden glass-card focus:outline-none focus:ring-[1px] focus:ring-accent-400"
    >
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

      {/* Progress segments */}
      <div className="relative z-20 flex gap-1.5 px-4 sm:px-8 pt-5">
        {slides.map((s, i) => (
          <button
            key={s.key}
            onClick={() => setSlide([i, i > index ? 1 : -1])}
            aria-label={`Go to slide ${i + 1}`}
            className="flex-1 h-1 rounded-full overflow-hidden bg-white/10"
          >
            <div
              className={`h-full rounded-full transition-all duration-300 ${
                i <= index ? "bg-accent-400 w-full" : "w-0"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Slide area */}
      <div className="relative z-10 h-[620px] sm:h-[560px] overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={slides[index].key}
            custom={direction}
            variants={{
              enter: (dir: number) => ({ x: dir >= 0 ? 80 : -80, opacity: 0 }),
              center: { x: 0, opacity: 1 },
              exit: (dir: number) => ({ x: dir >= 0 ? -80 : 80, opacity: 0 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeOut" }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              if (info.offset.x < -swipeThreshold) paginate(1);
              else if (info.offset.x > swipeThreshold) paginate(-1);
            }}
            className="absolute inset-0 overflow-y-auto px-5 sm:px-10 py-6 sm:py-4 cursor-grab active:cursor-grabbing"
          >
            <div className="min-h-full flex flex-col justify-center">
              {slides[index].content}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom nav */}
      <div className="relative z-20 flex items-center justify-between px-4 sm:px-8 pb-5">
        <button
          onClick={() => paginate(-1)}
          disabled={index === 0}
          className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-colors disabled:opacity-30 disabled:pointer-events-none"
          aria-label="Previous slide"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <span className="text-xs text-neutral-600">
          {index + 1} / {slides.length}
        </span>
        <button
          onClick={() => paginate(1)}
          disabled={index === slides.length - 1}
          className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-colors disabled:opacity-30 disabled:pointer-events-none"
          aria-label="Next slide"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
