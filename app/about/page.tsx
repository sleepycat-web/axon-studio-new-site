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
    <div className="bg-neutral-950 relative ">
      {/* global grid handled by root layout */}

      <Navbar />
      <Mission />
      <Values />

      <Faq />
      <Cta1 />
      <Footer />
    </div>
  );
}
