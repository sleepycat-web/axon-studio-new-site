"use client";
import Navbar from "@/components/ui/layout/header";
import Footer from "@/components/ui/layout/footer";
import { useState, FormEvent } from "react";
import React, { useEffect } from "react";
import { MapPin, MessageCircle } from "lucide-react";
import { BackgroundComets } from "@/components/ui/aceternity/background-comets";

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
    <div className="bg-neutral-950 relative overflow-x-hidden min-h-screen ">
      {/* Fixed Background Comets covering the entire screen */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <BackgroundComets className="w-full h-full bg-transparent dark:bg-transparent bg-none dark:bg-none" />
      </div>

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

      <div className="relative overflow-x-hidden z-20">
        {/* Background orbs */}
        <div className="absolute top-0 -left-40 w-[500px] h-[500px] orb-gradient orb-primary opacity-30 pointer-events-none"></div>
        <div className="absolute top-40 -right-40 w-[400px] h-[400px] orb-gradient orb-secondary opacity-20 pointer-events-none"></div>

        <section className="text-white pt-24 pb-16 sm:pt-28 sm:pb-20 relative min-h-[calc(100vh-80px)]">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 w-full">
            {/* Header */}
            <div className="text-center mb-12 mt-20">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl leading-[1.1] mb-6">
                Let&apos;s <span className="gradient-text-subtle">Connect</span>
              </h1>
              <p className="text-neutral-400 mx-auto max-w-xl text-lg">
                Tell us what you&apos;re building or what&apos;s slowing you down. Book a call and we&apos;ll take it from there.
              </p>
              <div className="mt-8 flex justify-center">
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center p-6 glass-card rounded-3xl max-w-md">
                    <div className="w-12 h-12 mb-4 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 gradient-text-subtle text-center">
                      Thank you for scheduling a call!
                    </h3>
                    <p className="text-center text-sm text-neutral-400">
                      We have received your booking and look forward to speaking with you.
                    </p>
                  </div>
                ) : (
                  <button
                    onClick={openCalendlyPopup}
                    className="btn-premium inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold text-white"
                  >
                    Schedule a Call
                    <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                )}
              </div>
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
                      <span className="text-base">Sevoke Road,</span>
                      <span className="text-base text-neutral-300">
                        Siliguri - 734001
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
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
