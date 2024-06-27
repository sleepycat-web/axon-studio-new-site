// Calendly.tsx
'use client'
import React, { useEffect } from "react";
import { HoverBorderGradientDemo } from "@/components/ui/aceternity/hover-border-gradient";

declare global {
  interface Window {
    Calendly: {
      initPopupWidget(options: { url: string }): void;
      // Add other Calendly methods or properties if needed
    };
  }
}

const Calendly: React.FC = () => {
  useEffect(() => {
    // Load Calendly script dynamically
    if (typeof window !== "undefined" && !window.Calendly) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        if (window.Calendly) {
          // Calendly script loaded, now use it
          console.log("Calendly script loaded.");
        } else {
          console.error("Calendly script failed to load.");
        }
      };

      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  const openCalendlyPopup = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (typeof window !== "undefined" && window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/axon-studio/meet",
      });
    } else {
      console.error("Calendly script not loaded.");
    }
  };

  return (
    <div className="z-50">
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
      <a className="" href="" onClick={openCalendlyPopup}>
        <HoverBorderGradientDemo/>
      </a>
    </div>
  );
};

export default Calendly;
