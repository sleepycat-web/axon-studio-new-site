"use client";
import Navbar from "@/components/ui/layout/header";
import Footer from "@/components/ui/layout/footer";
import { useState, FormEvent } from "react";
import React, { useEffect } from "react";
import { MapPin, MessageCircle } from "lucide-react";

const ContactPage: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);

  // Update the useEffect hook event handler
  useEffect(() => {
    if (typeof window !== "undefined" && !window.Calendly) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        if (window.Calendly) {
          window.Calendly.initPopupWidget({
            url: "https://calendly.com/axon-studio/meet?hide_gdpr_banner=1",
          });
          setIsWidgetOpen(true);
        }
      };
    }

    const handleMessage = (e: MessageEvent) => {
      if (e.data.event === "calendly.event_scheduled") {
        // Only update these states, don't close the widget
        setIsSubmitted(true);
        fetch("/api/saveMeeting", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({}),
        }).catch((error) => {
          console.error("Error:", error);
        });
      } else if (e.data.event === "calendly.popup_opened") {
        setIsWidgetOpen(true);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  // Update the visibility condition
  const openCalendlyPopup = () => {
    window.Calendly.initPopupWidget({
      url: "https://calendly.com/axon-studio/meet?hide_gdpr_banner=1",
    });
  };
  const shouldShowFloatingButton = !isSubmitted;

  return (
    <div className="bg-neutral-950 relative overflow-x-hidden pt-20">
      {/* global grid handled by root layout */}

      <Navbar />

      <div className="fixed z-[9999]">
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
          className="min-h-max"
        />
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            openCalendlyPopup();
          }}
        >
        </a>
      </div>

      <div className="relative overflow-x-hidden">
        {/* Background orbs */}
        <div className="absolute top-0 -left-40 w-[500px] h-[500px] orb-gradient orb-primary opacity-30"></div>
        <div className="absolute top-40 -right-40 w-[400px] h-[400px] orb-gradient orb-secondary opacity-20"></div>

        <section className="text-white pt-16 sm:pt-24 relative">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
                <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse"></span>
                <span className="text-sm text-neutral-300 font-medium">Get in Touch</span>
              </div>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl leading-[1.1] mb-6">
                Let&apos;s <span className="gradient-text-subtle">Connect</span>
              </h1>
              <p className="text-neutral-400 mx-auto max-w-xl text-lg">
                Ready to start your project? We&apos;d love to hear from you.
              </p>
            </div>

            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Address */}
              <div className="glass-card glass-card-hover rounded-3xl px-6 py-8 w-full">
                <dd className="flex flex-col lg:flex-row lg:items-center items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-accent-400" />
                  </div>
                  <div className="text-base font-medium">
                    <div className="flex flex-col">
                      <span className="text-sm text-neutral-500 mb-1">Our Location</span>
                      <span className="text-base">Greater Noida Link Road,</span>
                      <span className="text-base text-neutral-300">
                        Noida - 201301
                      </span>
                    </div>
                  </div>
                </dd>
              </div>

              {/* Email */}
              <div className="glass-card glass-card-hover rounded-3xl px-6 py-8 w-full">
                <dd className="flex flex-col lg:flex-row lg:items-center items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 text-accent-400" />
                  </div>
                  <div className="text-base font-medium">
                    <span className="text-sm text-neutral-500 block mb-1">Email Us</span>
                    <a
                      href="mailto:info@axonstudio.in"
                      className="text-base hover:text-accent-400 transition-colors"
                    >
                      info@axonstudio.in
                    </a>
                  </div>
                </dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="py-20 sm:py-28 relative">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Left Column - Header Content */}
              <div className="flex flex-col gap-6">
                <span className="text-sm font-medium uppercase tracking-widest text-accent-400">
                  Work With Us
                </span>
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-white">
                  Let&apos;s Build Something Amazing
                </h2>
                <p className="text-neutral-400 max-w-lg text-lg leading-relaxed">
                  We&apos;d love to learn more about you and what we can build
                  together. Schedule a call to get started.
                </p>
                <button
                  onClick={openCalendlyPopup}
                  className="btn-premium inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold text-white w-fit mt-4"
                >
                  Schedule a Call
                  <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
              <div>
                {isSubmitted && (
                  <div className="flex flex-col items-center justify-center p-10 glass-card rounded-3xl">
                    <div className="w-16 h-16 mb-6 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 gradient-text-subtle">
                      Thank you for reaching out!
                    </h3>
                    <p className="text-center text-lg text-neutral-400">
                      Your message has been received. We&apos;ll respond to you
                      soon.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
