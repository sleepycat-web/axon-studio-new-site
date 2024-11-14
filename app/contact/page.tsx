"use client";
 import Navbar from "../../components/ui/layout/header";
import Footer from "../../components/ui/layout/footer";
 import { useState, FormEvent } from "react";
  import React, { useEffect } from "react";
 import { HoverBorderGradientDemo } from "@/components/ui/aceternity/hover-border-gradient";
  import { MapPin, MessageCircle } from "lucide-react";

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


 
const ContactForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [services, setServices] = useState<string[]>([]);
  const [projectObjectives, setProjectObjectives] = useState("");
  const [niche, setNiche] = useState("");
  const [website, setWebsite] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [serviceError, setServiceError] = useState(false);

  const sanitizeInput = (input: string): string => {
    return input
      .replace(/<script.*?>.*?<\/script>/gi, "") // Remove <script> tags entirely
      .replace(/<[^>]*>/g, "") // Remove any remaining HTML tags
      .replace(/javascript:/gi, "") // Remove javascript: protocol
      .replace(/data:/gi, "") // Remove data: protocol
      .replace(/vbscript:/gi, "") // Remove vbscript: protocol
      .replace(/on\w+=/gi, "") // Remove inline event handlers
      .replace(/&/g, "") // Encode &
      .replace(/"/g, "") // Encode "
      .replace(/'/g, "") // Encode '
      .replace(/`/g, ";") // Encode backticks
      .replace(/[<>\/]/g, ""); // Remove <, >, /
  };

  const isValidUrlFormat = (url: string): boolean => {
    // Allow empty strings (optional field)
    if (!url) return true;

    // Check for query parameters or fragments
    if (url.includes("?") || url.includes("=") || url.includes("#")) {
      return false;
    }

    // Basic URL validation
    try {
      // If URL doesn't start with http:// or https://, add https://
      const urlToCheck = url.match(/^https?:\/\//) ? url : `https://${url}`;
      new URL(urlToCheck);

      // Additional check to ensure no query parameters were added during URL parsing
      return !urlToCheck.includes("?") && !urlToCheck.includes("=");
    } catch (e) {
      return false;
    }
  };

  const handleWebsiteChange = (input: string) => {
    // Remove potentially dangerous characters but keep URL-safe special characters
    const sanitized = input
      .replace(/<script.*?>.*?<\/script>/gi, "")
      .replace(/<[^>]*>/g, "")
      .replace(/javascript:/gi, "")
      .replace(/data:/gi, "")
      .replace(/vbscript:/gi, "")
      .replace(/[?=&#]/g, "") // Remove query parameters and hash
      .trim();

    if (isValidUrlFormat(sanitized)) {
      setWebsite(sanitized);
    }
  };
  const handleEmailChange = (input: string) => {
    const sanitizedEmail = sanitizeInput(input).replace(/\s/g, "");
    setEmail(sanitizedEmail);
  };
  const sanitizePhoneInput = (input: string): string => {
    return input.replace(/[^\d\-+()]/g, ""); // Allow digits, hyphens, plus signs, and parentheses
  };

  // Simplified handlers
  const handleServicesChange = (service: string) => {
    setServiceError(false);
    setServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (services.length === 0) {
      setServiceError(true);
      // Reset the error state after 2 seconds
      setTimeout(() => {
        setServiceError(false);
      }, 2500);

      return;
    }
    setIsSubmitting(true);

    const sanitizedData = {
      fullName: sanitizeInput(fullName),
      email: sanitizeInput(email),
      phoneNumber: sanitizePhoneInput(phoneNumber),
      services,
      projectObjectives: sanitizeInput(projectObjectives),
      niche: sanitizeInput(niche),
      website: sanitizeInput(website),
    };

    try {
      const response = await fetch("/api/submitContact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sanitizedData),
      });

      if (response.status === 201) {
        console.log("Form submitted successfully");
        setIsSubmitted(true);
      } else {
        const result = await response.json();
        console.error("Form submission failed:", result);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left Column - Header Content */}
          <div className="flex flex-col gap-4 sm:gap-6">
            <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
              Let&apos;s work together
            </h2>
            <p className="text-primary-200/70 max-w-lg text-lg sm:text-xl">
              We&apos;d love to learn more about you and what we can build
              together.
            </p>
          </div>

          {/* Right Column - Form */}
          {isSubmitted ? (
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
                Your message has been received. We&apos;ll respond to you soon.
              </p>
            </div>
          ) : (
            <form
              id="contact"
              className="mt-3 flex flex-col gap-y-4"
              onSubmit={handleSubmit}
            >
              {/* Name, Email, Phone, Website - 2 columns */}
              <div className="grid grid-cols-2  gap-4">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="full-name"
                    className="block text-sm font-medium text-primary-200/70 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="full-name"
                    id="full-name"
                    autoComplete="name"
                    className="bg-neutral-800/50 ring-primary-400/50 hover:ring-primary-400/70 focus:ring-primary-400 placeholder:text-primary-200/40 block w-full appearance-none rounded-lg border-0 px-4 py-3 text-base ring-1 transition focus:outline-none focus:ring-2 backdrop-blur-sm"
                    value={fullName}
                    onChange={(e) => setFullName(sanitizeInput(e.target.value))}
                    maxLength={50}
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-primary-200/70 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="bg-neutral-800/50 ring-primary-400/50 hover:ring-primary-400/70 focus:ring-primary-400 placeholder:text-primary-200/40 block w-full appearance-none rounded-lg border-0 px-4 py-3 text-base ring-1 transition focus:outline-none focus:ring-2 backdrop-blur-sm"
                    value={email}
                    onChange={(e) => handleEmailChange(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === " ") {
                        e.preventDefault();
                      }
                    }}
                    maxLength={100}
                    required
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label
                    htmlFor="phone-number"
                    className="block text-sm font-medium text-primary-200/70 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone-number"
                    id="phone-number"
                    autoComplete="tel"
                    className="bg-neutral-800/50 ring-primary-400/50 hover:ring-primary-400/70 focus:ring-primary-400 placeholder:text-primary-200/40 block w-full appearance-none rounded-lg border-0 px-4 py-3 text-base ring-1 transition focus:outline-none focus:ring-2 backdrop-blur-sm"
                    value={phoneNumber}
                    onChange={(e) =>
                      setPhoneNumber(sanitizePhoneInput(e.target.value))
                    }
                    maxLength={20}
                    required
                  />
                </div>
                {/* Website */}
                <div>
                  <label
                    htmlFor="website"
                    className="block text-sm font-medium text-primary-200/70 mb-2"
                  >
                    Company Website
                  </label>
                  <input
                    type="text"
                    name="website"
                    id="website"
                    className="bg-neutral-800/50 ring-primary-400/50 hover:ring-primary-400/70 focus:ring-primary-400 placeholder:text-primary-200/40 block w-full appearance-none rounded-lg border-0 px-4 py-3 text-base ring-1 transition focus:outline-none focus:ring-2 backdrop-blur-sm"
                    value={website}
                    onChange={(e) => handleWebsiteChange(e.target.value)}
                    maxLength={200}
                  />
                </div>
              </div>

              {/* Niche */}
              <div className="">
                <label
                  htmlFor="niche"
                  className="block text-sm font-medium text-primary-200/70 mb-2"
                >
                  What niche do you serve?
                </label>
                <input
                  type="text"
                  id="niche"
                  name="niche"
                  className="bg-neutral-800/50 ring-primary-400/50 hover:ring-primary-400/70 focus:ring-primary-400 placeholder:text-primary-200/40 block w-full appearance-none rounded-lg border-0 px-4 py-3 text-base ring-1 transition focus:outline-none focus:ring-2 backdrop-blur-sm"
                  value={niche}
                  onChange={(e) => setNiche(sanitizeInput(e.target.value))}
                  maxLength={100}
                  required
                />
              </div>

              {/* Services */}
              <div className="space-y-4 ">
                <label className="block text-sm font-medium text-primary-200/70">
                  What services are you interested in?
                </label>

                <div className="flex flex-col gap-4 whitespace-nowrap md:flex-row">
                  {[
                    ["landing-pages", "Landing Pages / Websites", "p-4"],
                    ["mobile-apps", "Web / Mobile Applications", "p-4"],
                    ["custom-software", "Custom Software", "p-4"],
                  ].map(([id, label, padding]) => (
                    <div
                      key={id}
                      className={`relative flex flex-grow items-center justify-center ${padding} rounded-lg transition cursor-pointer ${
                        services.includes(label)
                          ? "bg-neutral-900 ring-2 ring-neutral-400"
                          : "bg-neutral-900 hover:bg-neutral-800/70"
                      } ${serviceError ? "ring-2 ring-red-700" : ""}`}
                      onClick={() => handleServicesChange(label)}
                    >
                      <input
                        type="checkbox"
                        id={id}
                        className="sr-only"
                        checked={services.includes(label)}
                        onChange={() => handleServicesChange(label)}
                      />
                      <label
                        htmlFor={id}
                        className="text-sm cursor-pointer text-center"
                      >
                        {label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Objectives */}
              <div className="">
                <label
                  htmlFor="project-objectives"
                  className="block text-sm font-medium text-primary-200/70 mb-2"
                >
                  What are the project objectives?
                </label>
                <textarea
                  id="project-objectives"
                  name="project-objectives"
                  rows={4}
                  className="bg-neutral-800/50 ring-primary-400/50 hover:ring-primary-400/70 focus:ring-primary-400 placeholder:text-primary-200/40 block w-full appearance-none rounded-lg border-0 px-4 py-3 text-base ring-1 transition focus:outline-none focus:ring-2 backdrop-blur-sm"
                  value={projectObjectives}
                  onChange={(e) =>
                    setProjectObjectives(sanitizeInput(e.target.value))
                  }
                  maxLength={1000}
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="mt-8">
                <button
                  className="bg-primary-400 hover:bg-primary-300 focus-visible:outline-primary-400 text-primary-950 inline-flex items-center justify-center gap-2 rounded-full border border-transparent px-5 py-3 text-base font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="loading loading-spinner loading-sm" />
                    </>
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};


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

        script.onload = () => {
         if (window.Calendly) {
           window.Calendly.initPopupWidget({
             url: "https://calendly.com/axon-studio/meet?hide_gdpr_banner=1",
           });
         }
       };
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


const Details = () => {
  return (
    <section className="text-white pt-8">
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
          <div className="bg-primary-400/10 rounded-3xl px-6 py-8 w-full">
            <dd className="flex flex-col lg:flex-row lg:items-center items-start gap-4">
              <MessageCircle className="h-6 w-6 md:h-8 md:w-8 text-primary-400" />
              <p className="text-sm md:text-base font-medium">
                <a href="mailto:info@axonstudio.tech">info@axonstudio.tech</a>
              </p>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
};

//  here what i want is by default whenever the page mounts, the calendly widget gets opened, and when widget is open , , the right column-form is invisible, and if it is closed and it is visible, and if event gets successfully scheduled, the right side form should be ivible regardless, of whether widget is opened or not, and also the right side should show the isSubmitted? part, and in this case, the HoverBorderGradientDemo component only is invisible, what can be done, pls check and temme, perhaps create me a single component after including all 3