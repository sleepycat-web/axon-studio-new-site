"use client";
import React, { useEffect } from "react";
import { HoverBorderGradientDemo } from "@/components/ui/aceternity/hover-border-gradient";

declare global {
  interface Window {
    Calendly: {
      initPopupWidget(options: { url: string }): void;
    };
  }
}

const Calendly: React.FC = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && !window.Calendly) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);

      // Removed the automatic initPopupWidget call
      // script.onload = () => {
      //   if (window.Calendly) {
      //     window.Calendly.initPopupWidget({
      //       url: "https://calendly.com/axon-studio/meet?hide_gdpr_banner=1",
      //     });
      //   }
      // };
    }

    const handleMessage = (e: MessageEvent) => {
      if (e.data.event === "calendly.event_scheduled") {
        fetch("/api/saveMeeting", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({}),
        }).catch((error) => {
          console.error("Error:", error);
        });
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  const openCalendlyPopup = () => {
    window.Calendly.initPopupWidget({
      url: "https://calendly.com/axon-studio/meet?hide_gdpr_banner=1",
    });
  };

  return (
    <div className="fixed z-[9999]">
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          openCalendlyPopup();
        }}
      >
        <HoverBorderGradientDemo />
      </a>
    </div>
  );
};

export default Calendly;
