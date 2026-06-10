"use client";
import React, { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/ui/layout/header";
import Footer from "@/components/ui/layout/footer";
import Cta1 from "@/components/ui/cta/cta1";
import Reviews from "@/components/ui/home/reviews";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { COMPANY_METRICS } from "@/constants/metrics";
import Process from "@/components/ui/home/process";

import { BackgroundBeamsWithCollision } from "@/components/ui/aceternity/background-beams";

const ProjectPlaceholderSVG = ({ title }: { title: string }) => {
  return (
    <div className="w-full h-full bg-neutral-900/40 flex flex-col items-center justify-center relative overflow-hidden group/placeholder border border-white/5">
      {/* Background grid */}
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />

      {/* Visual representation */}
      <div className="z-10 flex flex-col items-center gap-3 text-center px-4">
        <div className="w-10 h-10 rounded-full bg-accent-500/10 border border-accent-500/20 flex items-center justify-center text-accent-400 group-hover/placeholder:scale-110 transition-transform duration-500">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
          </svg>
        </div>
        <div>
          <span className="text-[9px] text-accent-400 uppercase tracking-widest font-semibold">System Interface Mockup</span>
          <h4 className="mt-1 text-[11px] text-neutral-400 font-medium max-w-[220px] mx-auto leading-tight">{title}</h4>
        </div>
      </div>

      {/* Decorative linear lines */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent-500/0 via-accent-500/30 to-accent-500/0" />
    </div>
  );
};

const ProjectGallery = ({ title, images, previewImage }: { title: string; images?: string[]; previewImage?: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (!isLightboxOpen || !images || images.length === 0) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsLightboxOpen(false);
      } else if (e.key === "ArrowRight") {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      } else if (e.key === "ArrowLeft") {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, images]);

  if (!images || images.length === 0) return null;

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const currentImage = images[currentIndex];
  const isPlaceholder = !currentImage || currentImage.startsWith("placeholder");

  const getImageTitle = (img: string, idx: number) => {
    if (img) {
      if (img.includes(":")) {
        return img.substring(img.indexOf(":") + 1);
      }
      // Map local screenshot paths to clean, human-readable titles
      const filename = img.split("/").pop() || "";
      if (img.toLowerCase().endsWith(".pdf")) {
        if (filename.toLowerCase().includes("aurea")) {
          return "Introduction page of the Aurea document";
        }
        return filename.replace(".pdf", "").replace("-", " ");
      }
      if (filename.includes("admin-panel-ss")) return "Admin Panel";
      if (filename.includes("booking-page-ss")) return "Booking Page";
      if (filename.includes("pos-page-ss")) return "POS Terminal";
      if (filename.includes("order-panel-ss")) return "Kitchen Display System (KDS)";
      if (filename.includes("aggregated-panel-ss")) return "Aggregated Analytics Dashboard";
      if (filename.includes("inventory-panel-ss")) return "Inventory Control";
      if (filename.includes("crm")) return "Sales CRM";
      if (filename.includes("vendors")) return "Supplier & Procurement Portal";
      if (filename.includes("inventory")) return "Inventory Management";
      if (filename.includes("logistics")) return "Logistics & Dispatch";
      if (filename.includes("settings")) return "Settings";
      if (filename.includes("staff")) return "Home Collection Staff Mobile App";
      if (filename.includes("records")) return "Patient Medical Records Dashboard";
      if (filename.includes("user")) return "Online Collection Booking Page";
      if (filename.includes("directory")) return "Healthcare Staff & Schedule Directory";
    }
    return `${title} (Mockup ${idx + 1})`;
  };

  const getPlaceholderTitle = () => {
    return getImageTitle(currentImage, currentIndex);
  };

  return (
    <>
      <div
        onClick={() => setIsLightboxOpen(true)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsLightboxOpen(true);
          }
        }}
        role="button"
        tabIndex={0}
        aria-label={`Open photo gallery for ${title}`}
        className="relative w-full aspect-[16/9] mt-6 rounded-lg overflow-hidden group border border-white/10 cursor-pointer focus:outline-none focus:ring-[1px] focus:ring-accent-400"
      >
        {isPlaceholder ? (
          <ProjectPlaceholderSVG title={getPlaceholderTitle()} />
        ) : (
          <div className="relative w-full h-full bg-neutral-950 flex items-center justify-center">
            {previewImage ? (
              <div className="absolute inset-0 transition-opacity duration-300 opacity-100">
                <Image
                  src={previewImage}
                  alt={previewImage.toLowerCase().includes("aurea")
                    ? `Introduction page image of the ${title} project document`
                    : `Interface preview of the ${title} software platform`}
                  fill
                  className="object-cover"
                  style={{ objectPosition: 'center 40%' }}
                  priority
                />
              </div>
            ) : (
              images.map((img, idx) => {
                if (img.toLowerCase().endsWith(".pdf")) {
                  return (
                    <div
                      key={img}
                      className={`absolute inset-0 bg-white flex items-center justify-center overflow-hidden pointer-events-none transition-opacity duration-300 ${idx === currentIndex ? "opacity-100" : "opacity-0"
                        }`}
                    >
                      {idx === currentIndex && (
                        <iframe
                          src={`${img}#page=1&view=FitH&toolbar=0&navpanes=0&scrollbar=0`}
                          className="absolute top-1/2 left-0 w-full pointer-events-none"
                          style={{ height: '200%', border: 'none', transform: 'translateY(-50%)' }}
                          scrolling="no"
                          tabIndex={-1}
                        />
                      )}
                    </div>
                  );
                }

                return (
                  <div
                    key={img}
                    className={`absolute inset-0 transition-opacity duration-300 ${idx === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
                      }`}
                  >
                    <Image
                      src={img}
                      alt={`Screenshot of ${getImageTitle(img, idx)} interface within the ${title} application`}
                      fill
                      className={
                        img.toLowerCase().includes("booking") ||
                          img.toLowerCase().includes("vhss") ||
                          img.toLowerCase().includes("tpss") ||
                          img.toLowerCase().includes("sonass") ||
                          img.toLowerCase().includes("docbox") ||
                          img.toLowerCase().includes("/lab/")
                          ? "object-contain object-center"
                          : "object-cover object-top"
                      }
                      priority={idx === 0 || idx === currentIndex}
                    />
                  </div>
                );
              })
            )}
          </div>
        )}
        {currentImage.toLowerCase().endsWith(".pdf") && (
          <div className="absolute bottom-4 right-4 z-20 px-3 py-1.5 bg-black text-white text-xs font-semibold rounded-full shadow-lg flex items-center gap-1.5 border border-white/10 pointer-events-none">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            PDF
          </div>
        )}
        {images.length > 1 && (
          <>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-100 transition-opacity duration-300 flex items-center justify-between px-3 pointer-events-none">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="pointer-events-auto p-2 rounded-full bg-black/40 text-white hover:bg-black/80 backdrop-blur-sm transition-colors border border-white/10 z-10"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="pointer-events-auto p-2 rounded-full bg-black/40 text-white hover:bg-black/80 backdrop-blur-sm transition-colors border border-white/10 z-10"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(idx);
                  }}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`pointer-events-auto w-1.5 h-1.5 rounded-full transition-colors ${idx === currentIndex ? "bg-white" : "bg-white/40 hover:bg-white/60"}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Lightbox Modal rendered at body level to escape transform/filter stacking contexts */}
      {mounted && typeof document !== "undefined" && createPortal(
        <AnimatePresence>
          {isLightboxOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-md flex flex-col items-center justify-center"
              onClick={() => setIsLightboxOpen(false)}
            >
              {/* Close button */}
              <motion.button
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={() => setIsLightboxOpen(false)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white transition-all duration-200 z-[10000]"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>

              {/* Lightbox content container (90% width, 80% height) */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ delay: 0.05, duration: 0.25 }}
                className={`relative flex items-center justify-center overflow-hidden ${currentImage.toLowerCase().endsWith(".pdf") ? "w-[95%] h-[95%]" : "w-[90%] h-[78%]"
                  }`}
                onClick={(e) => e.stopPropagation()}
              >
                {isPlaceholder ? (
                  <ProjectPlaceholderSVG title={getPlaceholderTitle()} />
                ) : currentImage.toLowerCase().endsWith(".pdf") ? (
                  <iframe
                    src={`${currentImage}#zoom=100`}
                    className="w-full h-full bg-white rounded-lg shadow-2xl"
                    style={{ border: 'none' }}
                  />
                ) : (
                  <Image
                    src={currentImage}
                    alt={`Detailed view of ${getPlaceholderTitle()} for the ${title} system dashboard`}
                    fill
                    className="object-contain object-center"
                  />
                )}

                {/* Navigation arrows in Lightbox */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        prevImage();
                      }}
                      className="absolute left-0 p-3 rounded-full bg-black/60 text-white hover:bg-black/90 backdrop-blur-sm transition-all border border-white/10 hover:scale-110 z-10"
                    >
                      <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        nextImage();
                      }}
                      className="absolute right-0 p-3 rounded-full bg-black/60 text-white hover:bg-black/90 backdrop-blur-sm transition-all border border-white/10 hover:scale-110 z-10"
                    >
                      <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </>
                )}

                {/* Indicator badge */}
                <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-sm text-white/80 font-medium z-10">
                  {currentIndex + 1} / {images.length}
                </div>
              </motion.div>

              {/* Subtitle / caption (High contrast off-white card to prevent black-on-black confusion) */}
              {!currentImage.toLowerCase().endsWith(".pdf") && (
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 10, opacity: 0 }}
                  transition={{ delay: 0.1 }}
                  className="absolute bottom-6 left-0 right-0 flex flex-col items-center pointer-events-none z-10"
                >
                  <div className="bg-neutral-100 border border-white/10 px-6 py-3 rounded-2xl text-center shadow-2xl">
                    <h4 className="text-neutral-900 font-semibold text-base sm:text-lg">{getPlaceholderTitle()}</h4>
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};

const showcaseItems = [
  {
    title: "Chai Mine",
    src: "/assets/screenshots/chaimine.png",
    isFiveFour: false,
    category: "Website"
  },
  {
    title: "Vista Haven",
    src: "/assets/screenshots/vhss.png",
    isFiveFour: true,
    category: "Resort & Hotel Booking System"
  },
  {
    title: "Clayo AI",
    src: "/assets/screenshots/clss.png",
    isFiveFour: false,
    category: "Conversational AI Platform"
  },
  {
    title: "TablePro",
    src: "/assets/screenshots/tpss.png",
    isFiveFour: true,
    category: "Restaurant Booking System"
  },
  {
    title: "Sona Hotels",
    src: "/assets/screenshots/sonass.png",
    isFiveFour: true,
    category: "Hospitality Management Platform"
  },
  {
    title: "Axon Studio",
    src: "/assets/screenshots/axon.jpg",
    isFiveFour: false,
    category: "Agency Landing Page"
  },
  {
    title: "Andromeda",
    src: "/assets/screenshots/andromeda.jpg",
    isFiveFour: false,
    category: "Design Portfolio"
  },
  {
    title: "DocBox",
    src: "/assets/screenshots/docbox.png",
    isFiveFour: true,
    category: "AI Document & Workflow Automation Platform"
  },
  {
    title: "Invoker Labs",
    src: "/assets/screenshots/invoker.png",
    isFiveFour: false,
    category: "Developer Tool"
  },
  {
    title: "Inversiones Ibéricas",
    src: "/assets/screenshots/ibericass.png",
    isFiveFour: false,
    category: "Finance Firm"
  },
  {
    title: "Moonbeam",
    src: "/assets/screenshots/moonbeam.png",
    isFiveFour: false,
    category: "SaaS Platform"
  },
  {
    title: "SmartBridge",
    src: "/assets/screenshots/smartbridge.png",
    isFiveFour: false,
    category: "IoT Control Panel"
  },
  {
    title: "Alter",
    src: "/assets/screenshots/alss.png",
    isFiveFour: false,
    category: "Digital Agency"
  }
];

const WebShowcase = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hasEnteredView, setHasEnteredView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEnteredView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isAutoPlaying || !hasEnteredView) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % showcaseItems.length);
    }, 6000); // Slower autoplay: 6 seconds per slide
    return () => clearInterval(timer);
  }, [isAutoPlaying, hasEnteredView]);

  const goTo = (idx: number) => {
    setCurrent(idx);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // 10 seconds delay before resuming autoplay
  };

  const next = () => goTo((current + 1) % showcaseItems.length);
  const prev = () => goTo((current - 1 + showcaseItems.length) % showcaseItems.length);

  return (
    <div ref={containerRef} className="mt-12">
      {/* Main showcase container - 16:9 ratio on desktop */}
      <div
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") {
            e.preventDefault();
            next();
          } else if (e.key === "ArrowLeft") {
            e.preventDefault();
            prev();
          }
        }}
        aria-label="Web showcase gallery. Use left and right arrow keys to navigate."
        className="relative w-full aspect-[5/3] sm:aspect-[16/9] rounded-3xl overflow-hidden border border-white/10 glass-card group focus:outline-none focus:ring-[1px] focus:ring-accent-400"
      >
        {showcaseItems.map((item, idx) => {
          const isNear = idx === current ||
            idx === (current + 1) % showcaseItems.length ||
            idx === (current - 1 + showcaseItems.length) % showcaseItems.length;
          return (
            <div
              key={item.src}
              className={`absolute inset-0 transition-opacity duration-300 ${idx === current ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
            >
              {item.isFiveFour ? (
                // Centered image using object-contain - keeps natural aspect ratio (e.g. 5:4 or vertical) and fits height
                <div className="relative w-full h-full flex items-center justify-center bg-neutral-950">
                  <Image
                    src={item.src}
                    alt={`${item.title} ${item.category} web interface showcase`}
                    fill
                    className="object-contain object-center"
                    priority={isNear}
                  />
                </div>
              ) : (
                // Full Widescreen Layout
                <div className="relative w-full h-full">
                  <Image
                    src={item.src}
                    alt={`${item.title} ${item.category} web interface showcase`}
                    fill
                    className="object-cover object-top"
                    priority={isNear}
                  />
                </div>
              )}

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none z-10" />

              {/* Title overlay - positioned bottom-left */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 z-10 pointer-events-none">
                <div className="max-w-xl">
                  <h3 className="text-base sm:text-2xl lg:text-3xl font-semibold text-white tracking-tight">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          );
        })}

        {/* Navigation arrows */}
        <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          <button onClick={prev} className="p-3 rounded-full bg-black/50 text-white hover:bg-black/80 backdrop-blur-sm transition-all border border-white/10 hover:scale-110">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button onClick={next} className="p-3 rounded-full bg-black/50 text-white hover:bg-black/80 backdrop-blur-sm transition-all border border-white/10 hover:scale-110">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Counter badge */}
        <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-xs text-white/80 font-medium z-20">
          {current + 1} / {showcaseItems.length}
        </div>
      </div>

      {/* Thumbnail strip */}
      <div className="mt-4 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {showcaseItems.map((item, idx) => (
          <button
            key={item.src}
            onClick={() => goTo(idx)}
            className={`relative shrink-0 w-20 h-14 sm:w-24 sm:h-16 rounded-xl overflow-hidden border-2 transition-all duration-300 ${idx === current
              ? "border-accent-400 ring-2 ring-accent-400/30 scale-105"
              : "border-white/10 hover:border-white/30 opacity-60 hover:opacity-100"
              }`}
          >
            <Image src={item.src} alt={`Thumbnail navigation for ${item.title} project`} fill className="object-cover object-top" />
          </button>
        ))}
      </div>
    </div>
  );
};

const projects = [
  {
    title: "Multi-Outlet Restaurant POS & Franchise Control System",
    industry: "Restaurant & Hospitality",
    tag: "Operations Infrastructure",
    mobileTag: "Restaurant Operations Infrastructure",
    description:
      "Centralized POS and operations system built for restaurant franchises to manage billing, table flow, kitchen coordination, self-ordering, and performance tracking across multiple outlets.",

    results: [
      "Unified billing and kitchen operations across outlets",
      "Self-ordering kiosks reduced front-of-house dependency",
      "Centralized reporting for franchise-level decision making",
    ],
    images: [
      "/assets/saas/restaurant/admin-panel-ss.png",
      "/assets/saas/restaurant/pos-page-ss.png",
      "/assets/saas/restaurant/booking-page-ss.png",
      "/assets/saas/restaurant/order-panel-ss-1.png",
      "/assets/saas/restaurant/aggregated-panel-ss.png",
      "/assets/saas/restaurant/inventory-panel-ss.png"
    ]
  },
  {
    title: "Salon Chain Appointment & Workforce Management Platform",
    industry: "Salon & Wellness",
    tag: "Franchise Operations System",
    mobileTag: "Salon Franchise Operations System",
    description:
      "End-to-end management platform for salon franchises covering appointments, staff allocation, inventory tracking, and customer retention workflows across branches.",

    results: [
      "Single dashboard for multi-location franchise control",
      "Dynamic staff scheduling aligned to appointment load",
      "Staff performance and payroll tracking in one system",
    ],
    previewImage: "/assets/saas/aurea/aureass.png",
    images: ["/assets/saas/aurea/Aurea.pdf"]
  },
  {
    title: "Manufacturing CRM & Supply Chain Suite",
    industry: "Manufacturing & Industrial",
    tag: "Enterprise Workflow System",
    mobileTag: "Manufacturing Workflow System",
    description:
      "Custom-built CRM and supply chain platform enabling manufacturers to manage leads, vendor coordination, procurement cycles, inventory movement, and order fulfillment within a structured operational workflow.",

    results: [
      "Reduced procurement delays with automated supplier workflows",
      "Full visibility from raw material intake to dispatch",
      "Real-time operational reporting across sales, procurement, and logistics teams",
    ],
    images: [
      "/assets/saas/supplier/crm.png",
      "/assets/saas/supplier/vendors.png",
      "/assets/saas/supplier/inventory.png",
      "/assets/saas/supplier/logistics.png",
      "/assets/saas/supplier/settings.png"
    ]
  },
  // {
  //   title: "Automotive Dealership Service Records & Workshop Automation System",
  //   industry: "Automotive",
  //   tag: "Dealership Operations Platform",
  //   mobileTag: "Automotive Dealership Operations Platform",
  //   description:
  //     "Centralized dealership system designed to manage vehicle records, service history, workshop scheduling, automated reminders, and customer communication through integrated workflows.",
  //   results: [
  //     "Complete digital service history tracking for every vehicle",
  //     "Automated service reminders with WhatsApp integration",
  //     "Workshop job allocation and status tracking in one dashboard",
  //   ],
  //   images: ["placeholder-1", "placeholder-2"]
  // },
  {
    title: "Diagnostic Centre Booking & Home Sample Collection App",
    industry: "Healthcare & Diagnostics",
    tag: "Healthcare Operations Platform",
    mobileTag: "Healthcare Operations Platform",
    description:
      "Online booking and payment system built for diagnostic centres to manage lab test scheduling, home sample collection logistics, digital reports, and staff coordination through a unified platform.",
    results: [
      "Secure online test booking with integrated payment processing",
      "Field staff dashboard for viewing assigned home collections and updating status in real time",
      "Central lab panel to coordinate technicians, routes, and report delivery",
    ],
    images: [
      "/assets/saas/lab/staff.png",
      "/assets/saas/lab/records.png",
      "/assets/saas/lab/user.png",
      "/assets/saas/lab/directory.png"
    ]
  },
];

const capabilities = [
  {
    title: "Revenue Infrastructure Systems",
    description:
      "We build structured digital systems that eliminate operational chaos and unlock predictable revenue growth for businesses.",
    items: [
      "POS, ordering, reservation systems",
      "Franchise and multi-location management platforms",
      "CRM, supply chain, and operations software",
      "Dashboards, reporting, and analytics tools",
    ],
  },
  {
    title: "Operational ERP & Internal Platforms",
    description:
      "Purpose-built internal systems engineered around your workflow, from multi-location management to role-based operational control.",
    items: [
      "Custom ERP for service businesses",
      "Multi-branch & franchise management platforms",
      "Role-based admin dashboards & access control",
      "Inventory, supply chain & process automation",
    ],
  },
  {
    title: "Automation & Scalable Architecture",
    description:
      "Backend systems structured for long-term scale. Resilient, secure, and designed to handle growth without breaking operations.",
    items: [
      "Automated workflows and system integrations",
      "Payment lifecycle & reconciliation logic",
      "API integrations & workflow automation",
      "Architecture designed for long-term expansion",
    ],
  },
];

const stats = [
  { value: COMPANY_METRICS.projects, label: "Projects Delivered" },
  { value: COMPANY_METRICS.industriesServed, label: "Industries Served" },
  { value: COMPANY_METRICS.clientsWorldwide, label: "Clients Worldwide" },
  { value: COMPANY_METRICS.usersManaged, label: "Users Managed" },
];

export default function PortfolioPage() {
  const workRef = useRef<HTMLElement | null>(null);
  const [scrollToWork, setScrollToWork] = useState(false);
  const router = useRouter();

  // scroll when the button on this page is clicked
  useEffect(() => {
    if (scrollToWork && workRef.current) {
      workRef.current.scrollIntoView({ behavior: "smooth" });
      setScrollToWork(false);
    }
  }, [scrollToWork]);

  // if the URL contains a hash when the page loads, scroll to the section
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash === "#work" && workRef.current) {
      workRef.current.scrollIntoView({ behavior: "smooth" });
      // clear the hash from url without scrolling again
      router.replace("/portfolio", { scroll: false });
    }
  }, [router]);

  return (
    <div className="bg-neutral-950 text-white relative overflow-x-hidden ">
      {/* Grid pattern background */}
      {/* grid pattern is global; removed to avoid double overlay */}

      <Navbar />

      {/* ── Hero ── */}
      <BackgroundBeamsWithCollision className="pt-24 pb-6 sm:pt-28 sm:pb-20 relative overflow-hidden h-auto md:h-auto min-h-screen bg-transparent dark:bg-transparent bg-none dark:bg-none flex flex-col justify-start">
        {/* Background orbs */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] orb-gradient orb-primary opacity-40 pointer-events-none"></div>
        <div className="absolute top-20 -right-40 w-[400px] h-[400px] orb-gradient orb-secondary opacity-30 pointer-events-none"></div>

        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 relative z-20">
          <div className="flex flex-col items-center text-center mt-12">
            <h1 className="max-w-6xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-7xl leading-[1.1]">
              Software that runs businesses.
              <br />
              <span className="gradient-text-subtle">Websites that grow them.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-neutral-400 sm:text-xl leading-relaxed">
              We partner with businesses across industries to design and build software platforms, internal systems and high-converting websites engineered to deliver real, measurable results.
            </p>
            <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
              <Link href="/contact" className="w-full sm:w-auto">
                <button className="btn-premium w-full sm:w-auto inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold text-white">
                  Start a project
                  <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </Link>
              <button
                onClick={() => setScrollToWork(true)}
                className="btn-secondary w-full sm:w-auto inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-medium text-white"
              >
                View our work
              </button>
            </div>
          </div>

          {/* Stats bar */}
          <div className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass-card glass-card-hover rounded-2xl p-6 text-center"
              >
                <p className="text-3xl font-semibold tracking-tight gradient-text-subtle sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-neutral-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </BackgroundBeamsWithCollision>

      {/* ── What We Do ── */}
      <section className="relative py-24 sm:py-32">
        <div className="absolute bottom-0 left-0 right-0 section-divider"></div>

        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="flex flex-col gap-4">
            <span className="text-sm font-medium uppercase tracking-widest text-accent-400">
              What We Do
            </span>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Our Capabilities
            </h2>
            <p className="max-w-2xl text-base text-neutral-400 sm:text-lg">
              We design and engineer business-critical systems that improve efficiency, visibility, and revenue control.
            </p>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {capabilities.map((cap, index) => (
              <div
                key={cap.title}
                className="glass-card glass-card-hover flex flex-col rounded-3xl p-8 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center mb-6 group-hover:bg-accent-500/20 transition-colors">
                  <span className="text-accent-400 font-semibold">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="text-xl font-semibold group-hover:text-accent-300 transition-colors">{cap.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                  {cap.description}
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {cap.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-neutral-300"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Work ── */}
      <section id="work" ref={workRef} className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 section-divider"></div>
        <div className="absolute bottom-0 left-0 right-0 section-divider"></div>

        {/* Background orbs */}
        <div className="absolute top-1/3 -left-40 w-96 h-96 orb-gradient orb-secondary opacity-20"></div>
        <div className="absolute bottom-1/4 -right-40 w-80 h-80 orb-gradient orb-primary opacity-20"></div>

        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 relative">
          <div className="flex flex-col gap-4">
            <span className="text-sm font-medium uppercase tracking-widest text-accent-400">
              Portfolio
            </span>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Featured Projects
            </h2>
            <p className="max-w-2xl text-base text-neutral-400 sm:text-lg">
              A selection of operational systems we&apos;ve built for
              our clients across industries.
            </p>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            {projects.map((project, idx) => (
              <article
                key={project.title}
                className="glass-card glass-card-hover group relative flex flex-col justify-between rounded-3xl p-8"
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="rounded-full bg-accent-500/10 border border-accent-500/20 px-4 py-1.5 text-xs font-medium text-accent-300">
                      <span className="sm:hidden">{project.mobileTag}</span>
                      <span className="hidden sm:inline">{project.tag}</span>
                    </span>
                    <span className="hidden sm:inline text-xs text-neutral-500 font-medium">
                      {project.industry}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold group-hover:text-accent-300 transition-colors sm:text-2xl">{project.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-neutral-400">
                    {project.description}
                  </p>
                  <ProjectGallery title={project.title} images={project.images} previewImage={project.previewImage} />
                </div>
                <ul className="mt-8 space-y-3 border-t border-white/5 pt-6">
                  {project.results.map((r) => (
                    <li
                      key={r}
                      className="flex items-start gap-3 text-sm text-neutral-300"
                    >
                      <svg
                        className="mt-0.5 h-5 w-5 shrink-0 text-accent-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Web Development & SEO Showcase ── */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 section-divider"></div>

        {/* Background orbs */}
        <div className="absolute top-1/4 -right-40 w-96 h-96 orb-gradient orb-primary opacity-20"></div>
        <div className="absolute bottom-1/3 -left-40 w-80 h-80 orb-gradient orb-secondary opacity-15"></div>

        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 relative">
          <div className="flex flex-col gap-4">
            <span className="text-sm font-medium uppercase tracking-widest text-accent-400">
              Web Development & SEO
            </span>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              High-Converting Business Websites & Lead Systems
            </h2>
            <p className="max-w-3xl text-base text-neutral-400 sm:text-lg">
              Performance-focused websites and landing systems engineered to generate qualified leads, establish authority, and align directly with revenue goals.
            </p>
          </div>

          {/* Results row */}
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              "Optimized build structure for strong performance scores",
              "Clear conversion journeys aligned with sales objectives",
              "SEO-aligned architecture for long-term organic visibility",
            ].map((r) => (
              <div key={r} className="flex items-start gap-3 glass-card rounded-2xl px-5 py-4">
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-neutral-300">{r}</span>
              </div>
            ))}
          </div>

          {/* Slideshow */}
          <WebShowcase />
        </div>
      </section>

      <Process />

      <Reviews />
      <Cta1 />
      <Footer />
    </div>
  );
}
