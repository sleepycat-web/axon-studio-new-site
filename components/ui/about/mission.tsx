"use client";
import Image from "next/image";
import React from "react";
import Registration from "./registration";

const stats = [
  {
    name: "Years",
    value: "2",
  },
  {
    name: "Projects",
    value: "19",
  },
  {
    name: "Orders Processed",
    value: "23.5K",
  },
  {
    name: "Users",
    value: "6.9K",
  },
];

const Mission: React.FC = () => {
  return (
    <section className="relative">
      {/* Hero section */}
      <section className="text-white pt-16 pb-20 sm:pt-24 sm:pb-28 relative overflow-hidden">
        {/* Background orbs */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] orb-gradient orb-primary opacity-40"></div>
        <div className="absolute top-0 -right-40 w-[400px] h-[400px] orb-gradient orb-secondary opacity-30"></div>

        <div className="mx-auto mt-12 max-w-2xl px-4 text-center sm:px-6 lg:max-w-7xl lg:px-8 relative">
          <div className="flex flex-col gap-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mx-auto">
              <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse"></span>
              <span className="text-sm text-neutral-300 font-medium">About Axon Studio</span>
            </div>

            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-7xl leading-[1.1]">
              Building <span className="gradient-text-subtle">Tomorrow&apos;s</span>
              <br />Digital Infrastructure
            </h1>
            <p className="text-neutral-400 mx-auto max-w-xl text-lg sm:text-xl">
              Creating  solutions that scale businesses beyond limits.
            </p>
          </div>
        </div>
      </section>

      {/* Mission section */}
      <section className="py-20 sm:py-28 relative">
        <div className="absolute top-0 left-0 right-0 section-divider"></div>

        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-accent-500/10 to-violet-500/10 blur-2xl"></div>
              <Image
                className="relative mx-auto h-auto w-full max-w-xl rounded-3xl ring-1 ring-white/10"
                src="/assets/about.webp"
                alt="About Image"
                width={576}
                height={864}
              />
            </div>
            <div className="flex flex-col gap-12">
              {/* Mission description */}
              <div className="space-y-8 sm:space-y-12">
                <div>
                  <span className="text-sm font-medium uppercase tracking-widest text-accent-400">
                    Our Story
                  </span>
                  <h2 className="text-white text-3xl font-semibold tracking-tight sm:text-4xl mt-4">
                    Our Mission
                  </h2>
                </div>
                <div className="space-y-6">
                  <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
                    Welcome to Axon Studio, where creativity meets innovation to
                    forge exceptional digital experiences. We are a dynamic team
                    of forward-thinkers, dedicated to shaping the digital
                    landscape with our passion for design and technology.
                  </p>
                  <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
                    We believe in the power of imagination to transform ideas
                    into reality. With a keen eye for aesthetics and a mastery
                    of the latest digital tools, we craft immersive experiences
                    that resonate with audiences on a profound level.
                  </p>
                  <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
                    Driven by our commitment to excellence we are more than just
                    a creative agency; we are pioneers of possibility, pushing
                    the boundaries of what&apos;s conceivable to deliver
                    unparalleled results for our clients.
                  </p>
                </div>
              </div>

              {/* Stats */}
              <dl className="grid text-white grid-cols-2 gap-4 sm:grid-cols-4">
                {stats.map((stat) => (
                  <div
                    key={stat.name}
                    className="glass-card glass-card-hover rounded-2xl p-6"
                  >
                    <dd className="text-3xl font-semibold tracking-tight gradient-text-subtle">
                      {stat.value}
                    </dd>
                    <dt className="text-sm text-neutral-400 mt-1">{stat.name}</dt>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>
      <Registration />
    </section>
  );
};

export default Mission;
