"use client";
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion } from "framer-motion";

/* ── Fullscreen lightbox shared by case study diagrams and screenshots ── */
const Lightbox = ({
  onClose,
  maxWidth,
  children,
}: {
  onClose: () => void;
  maxWidth: string;
  children: React.ReactNode;
}) => {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 sm:top-6 sm:right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white transition-all z-[10000]"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <div
        className={`relative w-full ${maxWidth} max-h-full overflow-auto`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </motion.div>,
    document.body
  );
};

/* ── Clickable diagram, opens larger in a lightbox ── */
export const ClickableDiagram = ({
  render,
  maxWidth = "max-w-5xl",
}: {
  render: (className?: string) => React.ReactNode;
  maxWidth?: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="cursor-pointer group/shot" onClick={() => setOpen(true)}>
        {render("group-hover/shot:border-accent-400 transition-colors")}
      </div>
      {open && (
        <Lightbox onClose={() => setOpen(false)} maxWidth={maxWidth}>
          {render()}
        </Lightbox>
      )}
    </>
  );
};

export type Shot = { src: string; label: string };

/* ── Gallery lightbox for screenshots, same as the hospitality case study ── */
const ShotLightbox = ({
  images,
  initialIndex,
  onClose,
}: {
  images: Shot[];
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
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 sm:top-6 sm:right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white transition-all z-[10000]"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

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
              aria-label="Previous image"
              className="absolute left-0 p-3 rounded-full bg-black/60 text-white hover:bg-black/90 backdrop-blur-sm transition-all border border-white/10 hover:scale-110 z-10"
            >
              <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setIdx((i) => (i + 1) % images.length)}
              aria-label="Next image"
              className="absolute right-0 p-3 rounded-full bg-black/60 text-white hover:bg-black/90 backdrop-blur-sm transition-all border border-white/10 hover:scale-110 z-10"
            >
              <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-sm text-white/80 font-medium z-10">
          {idx + 1} / {images.length}
        </div>
      </div>

      <div className="absolute bottom-6 left-0 right-0 flex justify-center pointer-events-none z-10">
        <div className="bg-neutral-100 border border-white/10 px-6 py-3 rounded-2xl text-center shadow-2xl">
          <h4 className="text-neutral-900 font-normal text-base sm:text-lg">{images[idx].label}</h4>
        </div>
      </div>
    </motion.div>,
    document.body
  );
};

/* ── Clickable screenshot thumbnail ── */
export const ClickableShot = ({
  shot,
  index,
  allShots,
  aspect,
  sizes,
}: {
  shot: Shot;
  index: number;
  allShots: Shot[];
  aspect: string;
  sizes: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className="flex flex-col gap-2 cursor-pointer group/shot"
        onClick={(e) => {
          e.stopPropagation();
          setOpen(true);
        }}
      >
        <div
          className={`relative ${aspect} rounded-xl overflow-hidden border border-white/10 bg-neutral-900 group-hover/shot:border-accent-400 transition-colors`}
        >
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
        <ShotLightbox images={allShots} initialIndex={index} onClose={() => setOpen(false)} />
      )}
    </>
  );
};
