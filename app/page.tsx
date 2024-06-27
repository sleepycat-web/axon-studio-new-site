"use client";
import React from "react";
import { HeroParallaxDemo } from "@/components/ui/aceternity/hero-parallax";
import { FloatingNavDemo } from "@/components/ui/aceternity/floating-navbar";
import Services from "../components/ui/home/services";
import Footer from "../components/ui/layout/footer";
import Cta1 from "../components/ui/cta/cta1";

export default function Main() {
  return (
    <div className="bg-neutral-950">
      <HeroParallaxDemo />
      <FloatingNavDemo />
      <Services />
      <Cta1 />
      <Footer />
    </div>
  );
}
