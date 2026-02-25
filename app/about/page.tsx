"use client";
import React from "react";
import Mission from "../../components/ui/about/mission";
import Values from "../../components/ui/about/values";
import Faq from "../../components/ui/about/faq";
import Navbar from "../../components/ui/layout/header";
import Cta1 from "../../components/ui/cta/cta1";
import Footer from "../../components/ui/layout/footer";

export default function Main() {
  return (
    <div className="bg-neutral-950 relative">
      {/* Grid pattern background */}
      <div className="fixed inset-0 grid-pattern opacity-30 pointer-events-none"></div>

      <Navbar />
      <Mission />
      <Values />

      <Faq />
      <Cta1 />
      <Footer />
    </div>
  );
}
