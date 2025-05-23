"use client";
import Link from "next/link";
import React from "react";
import { ArrowLeft } from "lucide-react";

export default function Page() {
  return (
    <div className="bg-neutral-950 text-white ">
      <div className="navbar w-full ">
        <Link href="/" className="btn btn-ghost text-xl">
          <ArrowLeft />
        </Link>
      </div>
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="sm:pb:20 flex flex-col gap-4 pb-16 text-center">
          <h1 className="text-4xl font-medium tracking-tight sm:text-5xl">
            Refund Policy
          </h1>
          <p className="text-base">Last update: April 15, 2025</p>
        </div>
        <div>
          <p className="mb-4">
            At Axon Studio, we strive to provide high-quality services to our
            clients. However, we understand that sometimes a refund may be
            necessary. This Refund Policy explains our refund process and the
            conditions under which refunds may be granted.
          </p>
          <h2 className="mb-6 mt-12 text-xl font-medium sm:text-2xl">
            1. Refund Eligibility{" "}
          </h2>
          <p className="mb-6">We offer refunds for the following services:</p>
          <ul className="list-inside list-disc space-y-4">
            <li>Website and App Development</li>
            <li>Search Engine Optimisation</li>
            <li>TablePro (SaaS)</li>
          </ul>

          <h2 className="mb-6 mt-12 text-xl font-medium sm:text-2xl">
            2. Eligibility Criteria
          </h2>
          <p className="mb-4">
            To be eligible for a refund, you must meet the following conditions:{" "}
          </p>
          <ul className="list-inside list-disc space-y-4">
            <li>
              You have requested a refund within 30 days of the initial payment
              date.
            </li>
            <li>
              You have provided a valid reason for the refund request, such as
              dissatisfaction with the service quality or failure to deliver the
              promised results.
            </li>
            <li>
              You have allowed us a reasonable opportunity to address your
              concerns and provide a solution.
            </li>
          </ul>
          <h2 className="mb-6 mt-12 text-xl font-medium sm:text-2xl">
            3. Refund Process
          </h2>
          <p className="mb-4">
            To request a refund, please contact us at{" "}
            <a href="mailto:info@axonstudio.in">info@axonstudio.in</a>. We will
            review your request and respond within 3 business days. If your
            refund request is approved, we will issue a refund within 7 business
            days to the original payment method used. If your refund request is
            not approved, we will provide an explanation for the denial.
          </p>
          <p className="mb-4">
            For SaaS subscriptions, if you have purchased a multi-month package
            and request a refund partway through the subscription period, we
            will issue a refund for the unused months only.
          </p>

          <h2 className="mb-6 mt-12 text-xl font-medium sm:text-2xl">
            {" "}
            4. Exceptions
          </h2>
          <p className="mb-4">
            We do not offer refunds for the following services:{" "}
          </p>
          <ul className="list-inside list-disc space-y-4">
            <li>Consulting services</li>
            <li>Custom development projects</li>
            <li>One-time service fees</li>
            <li>Hosting and Domain Charges</li>
          </ul>

          <h2 className="mb-6 mt-12 text-xl font-medium sm:text-2xl">
            5. Changes to the Refund Policy
          </h2>
          <p className="mb-4">
            We may update this Refund Policy from time to time. The most current
            version of the policy will always be available on our website. By
            continuing to use our services after any changes to the policy, you
            agree to the updated terms.
          </p>

          <h2 className="mb-6 mt-12 text-xl font-medium sm:text-2xl">
            Contact Us
          </h2>
          <p className="mb-4">
            If you have any questions or concerns about our Refund Policy or our
            services, please contact us at
            <a href="mailto:info@axonstudio.in"> info@axonstudio.in</a>
          </p>
        </div>
      </div>
    </div>
  );
}
