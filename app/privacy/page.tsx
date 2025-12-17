"use client";
import Link from "next/link";
import React from "react";
import { ArrowLeft } from "lucide-react";

export default function Page() {
  return (
    <div className="bg-neutral-950 text-white">
      <div className="navbar w-full ">
        <Link href="/" className="btn btn-ghost text-xl">
          <ArrowLeft />
        </Link>
      </div>
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-12 lg:px-8">
        <div className="sm:pb-20 flex flex-col gap-4 pb-16 text-center">
          <h1 className="text-4xl font-medium tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="text-base">Last update: December 17, 2025</p>
        </div>
        <div>
          <p className="mb-4">
            At Axon Studio, we are committed to safeguarding your privacy. This
            Privacy Policy outlines how we collect, use, and protect your
            personal information when you use our website and services. Please
            take a moment to read through this document to understand our
            practices.
          </p>

          <h2 className="mb-6 mt-12 text-xl font-medium sm:text-2xl">
            1. Information We Collect
          </h2>
          <p className="mb-6">
            We may collect the following types of personal information when you
            use our website:
          </p>
          <ul className="list-inside list-disc space-y-4">
            <li>
              Information you provide: When you sign up for our newsletter,log in to our platforms including TablePro and Aurea, or use our services, we may collect your name, email address, and phone number.
            </li>
            <li>
              Usage data: We may collect data about how you use our website,
              including but not limited to your browser type, pages visited, and
              interactions with the content.
            </li>
            <li>
              Cookies and similar technologies: We use cookies and similar
              technologies to enhance your experience, understand usage
              patterns, and improve our website.
            </li>
          </ul>

          <h2 className="mb-6 mt-12 text-xl font-medium sm:text-2xl">
            2. How We Use Your Information
          </h2>
          <p className="mb-4">
            We may use your personal information for the following purposes:
          </p>
          <ul className="list-inside list-disc space-y-4">
            <li>
              To provide and improve our website/service: Your information helps
              us offer a personalized and user-friendly experience.
            </li>
            <li>
              Communication: We may use your email address or contact details to
              send you important updates, newsletters, and promotional content.
              You can opt-out of these communications at any time.
            </li>
            <li>
              Analytics: We use aggregated and anonymized data to analyze user
              behavior and improve our website.
            </li>
          </ul>

          <h2 className="mb-6 mt-12 text-xl font-medium sm:text-2xl">
            3. Changes to the Privacy Policy
          </h2>
          <p className="mb-4">
            We may update this Privacy Policy from time to time. The most
            current version of the policy will always be available on our
            website. By continuing to use our services after any changes to the
            policy, you agree to the updated terms.
          </p>

          <h2 className="mb-6 mt-12 text-xl font-medium sm:text-2xl">
            Contact Us
          </h2>
          <p className="mb-4">
            If you have any questions or concerns about our Privacy Policy or
            our services, please contact us at
            <a href="mailto:info@axonstudio.in"> info@axonstudio.in</a>
          </p>
        </div>
      </div>
    </div>
  );
}
