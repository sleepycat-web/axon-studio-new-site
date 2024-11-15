"use client";
import Navbar from "@/components/ui/layout/header";
import Footer from "@/components/ui/layout/footer";
import { useState, FormEvent } from "react";
import React, { useEffect } from "react";
import { HoverBorderGradientDemo } from "@/components/ui/aceternity/hover-border-gradient";
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
    <div className="bg-neutral-950">
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
          {shouldShowFloatingButton && <HoverBorderGradientDemo />}
        </a>
      </div>

      <div>
        <section className="text-white pt-8   ">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <dl className="grid grid-cols-2 gap-4">
              {/* Address */}
              <div className="bg-primary-400/10 rounded-3xl px-6 py-8 w-full">
                <dd className="flex flex-col lg:flex-row lg:items-center items-start gap-4">
                  <MapPin className="h-6 w-6 md:h-8 md:w-8 text-primary-400" />
                  <div className="text-base font-medium">
                    <div className="flex flex-col md:flex-row md:gap-1">
                      <span className="text-sm md:text-base">Sevoke Road,</span>
                      <span className="text-sm md:text-base">
                        Siliguri - 734001
                      </span>
                    </div>
                  </div>
                </dd>
              </div>

              {/* Email */}
              <div className="bg-primary-400/10 rounded-3xl px-6 py-8 w-full ">
                <dd className="flex flex-col lg:flex-row lg:items-center items-start gap-4">
                  <MessageCircle className="h-6 w-6 md:h-8 md:w-8 text-primary-400 shrink-0" />
                  <p className="text-sm md:text-base font-medium">
                    <a
                      href="mailto:info@axonstudio.tech"
                      className="inline-flex flex-wrap"
                    >
                      <span className="break-keep">info@axonstudio</span>
                      <span className="break-all">.tech</span>
                    </a>
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </section>{" "}
        <section className="py-16 sm:py-20 ">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 ">
              {/* Left Column - Header Content */}
              <div className="flex flex-col gap-4 sm:gap-6">
                <h2 className="text-3xl font-medium tracking-tight sm:text-4xl text-white">
                  Let&apos;s work together
                </h2>
                <p className="text-primary-200/70 max-w-lg text-lg sm:text-xl">
                  We&apos;d love to learn more about you and what we can build
                  together.
                </p>
              </div>
              <div>
                {isSubmitted && (
                  <div className="flex flex-col items-center justify-center p-8 bg-neutral-900 rounded-lg">
                    <div className="w-16 h-16 mb-6 bg-green-500/10 rounded-full flex items-center justify-center">
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
                    <h3 className="text-2xl font-semibold mb-4">
                      Thank you for reaching out!
                    </h3>
                    <p className="text-center text-lg text-primary-200/70">
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
