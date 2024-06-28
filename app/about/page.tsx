"use client";
import React from "react";
import Mission from "../../components/ui/about/mission";
import Values from "../../components/ui/about/values";
import Faq from "../../components/ui/about/faq";
import Navbar from "../../components/ui/layout/header";
import Cta2 from "../../components/ui/cta/cta2";
import Footer from "../../components/ui/layout/footer";

export default function Main() {
  return (
    <div className="bg-neutral-950">
      <Navbar />
      <Mission />
      <Values />

      <Faq />
      <Cta2 />
      <Footer />
    </div>
  );
}
