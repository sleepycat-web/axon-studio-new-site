"use client";
import React from "react";
// Define the type for the services
type Service = {
  step: string;
  name: string;
  description: string;
};

const services: Service[] = [
  {
    step: "01",
    name: "Web Development",
    description:
      "Crafting captivating digital experiences. Our Web Development solutions merge creativity, functionality, and innovation for an unforgettable online presence.",
  },
  {
    step: "02",
    name: "Search Engine Optimisation",
    description:
      "Elevate your online presence with our industry-leading SEO solutions, driving visibility, traffic, and sustainable growth for your business with lasting impact.",
  },
];

const Services: React.FC = () => {
  return (
    <section>
      <section className="  py-16 sm:py-20">
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
            <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
              About
            </h2>
            <div className="flex flex-col items-start gap-8 sm:gap-10 lg:col-span-2">
              <p className="text-primary-200/70 text-base sm:text-lg">
                Welcome to Axon Studio, your premier SEO and Web Development
                Agency in Siliguri. With an expert team and one year of
                experience, we&apos;re dedicated to elevating your brand&apos;s
                potential one click at a time. Strategically positioned to serve
                businesses locally and globally, we offer tailored strategies
                and cutting-edge solutions. Trust us to optimize your digital
                footprint and drive growth. Let&apos;s unlock your brand&apos;s
                full potential together.
              </p>
              <a
                href="/about"
                className="bg-primary-400 hover:bg-primary-300 focus-visible:outline-primary-400 text-primary-950 inline-flex items-center justify-center rounded-full border border-transparent px-5 py-3 text-base font-medium  transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Read about us
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Services;
