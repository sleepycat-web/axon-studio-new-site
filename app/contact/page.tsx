"use client";
import React from "react";
import Navbar from "../../components/ui/layout/header";
import Footer from "../../components/ui/layout/footer";
import Details from "../../components/ui/contact/details";
import ContactForm from "../../components/ui/contact/form";

import Calendly from "../../components/ui/contact/calendly";

export default function Main() {
  return (
    <div className="bg-neutral-950">
      <Navbar />

      <Calendly />
      <Details />
      <ContactForm />
      <Footer />
    </div>
  );
}
