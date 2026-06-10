"use client";
import Navbar from "@/components/ui/layout/header";
import Footer from "@/components/ui/layout/footer";
import { useState } from "react";
import React, { useEffect } from "react";
import { MessageCircle } from "lucide-react";
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

              {/* LinkedIn */}
              <div className="glass-card glass-card-hover rounded-3xl px-6 py-8 w-full">
                <dd className="flex flex-col lg:flex-row lg:items-center items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center">
                    <svg className="h-5 w-5 text-accent-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div className="text-base font-medium">
                    <span className="text-sm text-neutral-500 block mb-1">Connect on LinkedIn</span>
                    <a
                      href="https://www.linkedin.com/company/the-axon-studio/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base hover:text-accent-400 transition-colors"
                    >
                      Axon Studio
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
