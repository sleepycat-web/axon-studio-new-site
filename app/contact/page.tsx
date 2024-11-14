"use client"
import React, { useRef, useEffect } from "react";
import Navbar from "../../components/ui/layout/header";
import Footer from "../../components/ui/layout/footer";
import Details from "../../components/ui/contact/details";
import ContactForm from "../../components/ui/contact/form";
import Calendly from "../../components/ui/contact/calendly";

export default function Main() {
  const contactFormRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    contactFormRef.current?.scrollIntoView({ behavior: "smooth" });
    const firstInput = contactFormRef.current?.querySelector(
      "input, textarea, select"
    );
    (firstInput as HTMLElement)?.focus();
  }, []);

  return (
    <div className="bg-neutral-950">
      <Navbar />
      <Calendly />
      <Details />
      <div ref={contactFormRef}>
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}
