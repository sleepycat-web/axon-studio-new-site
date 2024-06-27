"use client";
import React from "react";
import Navbar from "../../components/ui/layout/header";
import Footer from "../../components/ui/layout/footer";
import Details from "../../components/ui/contact/details";
import Calendly from "../../components/ui/contact/calendly";
import { FlipWordsDemo } from "@/components/ui/aceternity/flip-words";
import { GlobeDemo } from "@/components/ui/aceternity/globeadd";

export default function Main() {
  return (
    <div className="bg-neutral-950">
      <Navbar />
      <GlobeDemo />

      {/* <FlipWordsDemo /> */}
      <Calendly />
      <Details />

      <Footer />
    </div>
  );
}
