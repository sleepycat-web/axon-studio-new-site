"use client";
import React from "react";
import { HeroParallaxDemo } from "@/components/ui/aceternity/hero-parallax";
import Navbar from "@/components/ui/layout/header";
import Services from "../components/ui/home/services";
import Footer from "../components/ui/layout/footer";
import Cta1 from "../components/ui/cta/cta1";
import Reviews from "@/components/ui/home/reviews";
import Registration from "@/components/ui/about/registration";
import Faq from "@/components/ui/about/faq";
export default function Main() {
  return (
    <div className="bg-neutral-950 relative">
      {/* Grid pattern background */}
      <div className="fixed inset-0 grid-pattern opacity-30 pointer-events-none"></div>

      <HeroParallaxDemo />
      <Navbar />
      <Services />
      <Reviews />
      <Registration />
      <Faq />
      <Cta1 />
      <Footer />
    </div>
  );
}
