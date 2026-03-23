"use client";
import React from "react";
import Link from "next/link";
// Define the type for the services
import Image from "next/image";

const iconMap: { [key: string]: JSX.Element } = {
  "01": (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  "02": (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  ),
  "03": (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </svg>
  ),
  "04": (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
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
    name: "Enterprise Software",
    description:
      "Every platform is built from scratch to fit your unique workflows. We help you scale, streamline, and gain a competitive edge by turning your boldest ideas into reality.",
  },
  {
    step: "02",
    name: "Web Development & SEO",
    description:
      "We craft captivating digital experiences that engage your audience and drive results. Our creative web design and proven SEO strategies help you build an unforgettable online presence.",
  },
  // {
  //   step: "03",
  //   name: "TablePro (SaaS)",
  //   description:
  //     "Transform your restaurant workflow with an exceptional platform, empowering your business to boost operational efficiency and maximise staff productivity.",
  // },
  // {
  //   step: "04",
  //   name: "Aurea (SaaS)",
  //   description:
  //     "Streamline your salon and wellness center operations with our comprehensive management software, designed to enhance client experiences, optimize scheduling, and drive business growth.",
  // },
];

const Services: React.FC = () => {
  return (
    <section className="relative">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-pattern opacity-50"></div>

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
              <p className="max-w-2xl text-neutral-400 text-lg">
                Premium solutions designed to transform your business operations and accelerate growth.
              </p>
            </div>

            {/* Services grid */}
            <div className="grid gap-6 lg:grid-cols-2">
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
                Welcome to Axon Studio, your premier Software Development firm in Siliguri. Having successfully launched over 19 projects for our clients in the last 2 years, our team has the expertise to turn your vision into systems that drive unimaginable growth for your business.
              </p>
              <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">We partner with businesses locally and globally, delivering tailored strategies and cutting-edge digital solutions. From foundational websites to sophisticated enterprise software, we engineer systems designed for growth. Let&apos;s unite your vision with our technology to create something extraordinary.</p>
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
