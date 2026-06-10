"use client";
import React from "react";
import Link from "next/link";
// Define the type for the services
import Image from "next/image";
import { COMPANY_METRICS } from "@/constants/metrics";

const iconMap: { [key: string]: JSX.Element } = {
  "01": (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
    </svg>
  ),
  "02": (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
    </svg>
  ),
  "03": (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  ),
};

type Service = {
  step: string;
  name: string;
  description: string;
};

const services: Service[] = [
  {
    step: "01",
    name: "Custom Software",
    description:
      "We build the systems that run your business. Software platforms and internal tools designed around your SOPs, team, and operations.",
  },
  {
    step: "02",
    name: "AI Automation Systems",
    description:
      "We connect your tools and rebuild manual processes into automated workflows,so your team can focus on what actually grows the business.",
  },
  {
    step: "03",
    name: "Web Platforms",
    description:
      "High-converting websites and SEO infrastructure that turn your online presence into a measurable growth channel that drives leads."
  },
];

const Services: React.FC = () => {
  return (
    <section className="relative">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-pattern opacity-50"></div>

      {/* Gradient divider above What We Offer */}
      <div className="section-divider mx-auto max-w-7xl"></div>

      <section className="text-white py-20 sm:py-28 relative">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="flex flex-col gap-16 sm:gap-20">
            {/* Section header */}
            <div className="flex flex-col gap-4">
              <span className="text-sm font-medium uppercase tracking-widest text-accent-400">
                What We Offer
              </span>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                Our Services
              </h2>
              <p className="max-w-5xl text-neutral-400 text-lg">
                Premium solutions designed to transform your business operations and accelerate growth.
              </p>
            </div>

            {/* Services grid */}
            <div className="grid gap-6 lg:grid-cols-3">
              {services.map((service, index) => (
                <div
                  key={service.step}
                  className="glass-card glass-card-hover flex flex-col gap-6 rounded-3xl p-8 group"
                >
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center text-accent-400 group-hover:bg-accent-500/20 transition-colors">
                      {iconMap[service.step]}
                    </div>
                    <span className="text-sm font-medium text-neutral-500">{service.step}</span>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-semibold group-hover:text-accent-300 transition-colors">{service.name}</h3>
                    <p className="text-neutral-400 text-base leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  {/* <div className="mt-auto pt-4">
                    <span className="inline-flex items-center text-sm font-medium text-accent-400 group-hover:text-accent-300 transition-colors">
                      Learn more
                      <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gradient divider */}
      <div className="section-divider mx-auto max-w-7xl"></div>

      <section className="py-20 sm:py-28 relative">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">
            <div>
              <span className="text-sm font-medium uppercase tracking-widest text-accent-400">
                Who We Are
              </span>
              <h2 className="text-white text-3xl font-semibold tracking-tight sm:text-4xl mt-4">
                About Axon Studio
              </h2>
            </div>
            <div className="flex flex-col items-start gap-8 sm:gap-10 lg:col-span-2">
              <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
                Axon Studio is a software development firm focused on building systems that help businesses scale efficiently.
              </p>
              <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">Over the last two years we&apos;ve shipped {COMPANY_METRICS.projectsNumeric}+ projects for clients across India, the UK and the US. We learn how your business actually runs, then build the software that runs it better. </p>
              <Link href="/about">
                <button className="btn-premium inline-flex items-center justify-center rounded-full px-6 py-3.5 text-base font-semibold text-white">
                  Read about us
                  <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Services;
