"use client";
import React from "react";
import Mission from "../../components/ui/about/mission";
import Values from "../../components/ui/about/values";
import Navbar from "../../components/ui/layout/header";
import Cta from "../../components/ui/cta";
import Footer from "../../components/ui/layout/footer";

export default function Main() {
  return (
    <div>
      <Navbar />
      <Mission />
      <Values />
      <Cta />
      <Footer />
    </div>
  );
}
