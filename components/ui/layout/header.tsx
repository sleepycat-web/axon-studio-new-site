"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "../../../utils/cn";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto z-[5000] items-center justify-center",
          className
        )}
      >
        {/* floating panel with blurred/light background like other page elements */}
        <div className=" flex items-center justify-center gap-2 rounded-full border  px-2 py-1.5 shadow-lg shadow-black/10 backdrop-blur-md border-white/10 bg-neutral-950">
          {/* Nav items container */}
          <div className="flex items-center gap-1">
            {navItems.map((navItem: any, idx: number) => (
              <Link
                key={`link-${idx}`}
                href={navItem.link}
                target={navItem.name === "SaaS" ? "_blank" : undefined}
                rel={navItem.name === "SaaS" ? "noopener" : undefined}
                className={cn(
                  "relative flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  navItem.name === "Contact" ? "hidden sm:flex" : "",
                  "text-neutral-300 hover:bg-white/10 hover:text-white"
                )}
              >
                {navItem.icon && (
                  <span className="block sm:hidden">{navItem.icon}</span>
                )}
                {/* always show name so mobile users can see links */}
                <span className="block">{navItem.name}</span>
              </Link>
            ))}
          </div>

          {/* Divider */}
          <div className="h-5 w-px bg-neutral-200 dark:bg-white/10" />

          {/* CTA / premium button */}
          <Link
            href="/contact"
            className="btn-premium inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold text-white ml-2"
          >
            <span className="hidden sm:inline">Get Started</span>
            <span className="sm:hidden">Contact</span>
          </Link>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default function Header() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Portfolio",
      link: "/portfolio",
    },
    {
      name: "Contact",
      link: "/contact",
    },
    // example of external SaaS link if needed in future
    // {
    //   name: "SaaS",
    //   link: "https://launch.axonstudio.in/",
    // },
  ];

  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
