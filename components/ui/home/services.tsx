"use client";
import React from "react";
import Link from "next/link";
// Define the type for the services
import Image from "next/image";
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
  {
    step: "03",
    name: "TablePro (SaaS)",
    description:
      "Transform your restaurant workflow with an exceptional platform, empowering your business to boost operational efficiency and maximise staff productivity.",
  },
  {
    step: "04",
    name: "Aurea (SaaS)",
    description:
      "Streamline your salon and wellness center operations with our comprehensive management software, designed to enhance client experiences, optimize scheduling, and drive business growth.",
  },
];

const Services: React.FC = () => {
  return (
    <section>
      <section className=" text-white    py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="flex flex-col gap-12 sm:gap-16">
            <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
              Services
            </h2>
            <div className="grid gap-8 lg:grid-cols-2">
              {services.map((service) => (
                <div
                  key={service.step}
                  className="bg-primary-400/10 flex flex-col gap-12 rounded-3xl px-6 py-8"
                >
                  <p className="text-sm">{service.step}</p>
                  <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-medium">{service.name}</h3>
                    <p className="text-primary-200/70 text-base sm:text-lg">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">
            <h2 className="text-white text-3xl font-medium tracking-tight sm:text-4xl">
              About
            </h2>
            <div className="flex flex-col items-start gap-8 sm:gap-10 lg:col-span-2">
              <p className="text-primary-200/70 text-base sm:text-lg">
                Welcome to Axon Studio, your premier Software Development firm in Noida. Having successfully launched over 17 projects for our clients in the last 2 years, our team has the expertise to turn your vision into systems that drive unimaginable growth for your business.
              </p>
              <p className="text-primary-200/70 text-base sm:text-lg">We partner with businesses locally and globally, delivering tailored strategies and cutting-edge digital solutions. From foundational websites to sophisticated enterprise software, we engineer systems designed for growth.Let&apos;s unite your vision with our technology to create something extraordinary.</p>
              <Link href="/about">
                <button className="bg-primary-400 hover:bg-primary-300 focus-visible:outline-primary-400 text-primary-950 inline-flex items-center justify-center rounded-full border border-transparent px-5 py-3 text-base font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                  Read about us
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
