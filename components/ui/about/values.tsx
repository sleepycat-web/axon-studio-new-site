"use client";

import React from "react";

const valueIcons: { [key: string]: JSX.Element } = {
  "01": (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  ),
  "02": (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  "03": (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  "04": (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
};

const values = [
  [
    {
      ref: "01",
      name: "Excellence",
      description:
        "Excellence is the cornerstone of our ethos. At our core, we are driven by an unwavering commitment to surpassing expectations. Our relentless pursuit of excellence ensures that every project we undertake is executed with the highest standards of quality, setting new benchmarks and exceeding the aspirations of our clients.",
    },
    {
      ref: "02",
      name: "Innovation",
      description:
        "Innovation propels our journey forward. Embracing creativity and cutting-edge technology, we constantly push boundaries to pioneer new solutions. Through experimentation and forward thinking, we challenge the status quo and spark transformative change.",
    },
  ],
  [
    {
      ref: "03",
      name: "Teamwork",
      description:
        "Teamwork is the bedrock of our success. United in purpose, we collaborate seamlessly to achieve shared goals. Each team member brings unique strengths, fostering creativity and innovation. Through open communication and mutual support, we overcome challenges and celebrate victories together.",
    },
    {
      ref: "04",
      name: "Respect",
      description:
        "Respect is our guiding principle. We honor diverse perspectives, valuing each team member's contributions. By fostering a culture of empathy and understanding, we cultivate a supportive environment where everyone feels heard and valued.",
    },
  ],
];

export default function Values() {
  return (
    <section className="text-white py-20 sm:py-28 relative">
      <div className="absolute top-0 left-0 right-0 section-divider"></div>

      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex flex-col gap-12 lg:gap-16">
          <div>
            <span className="text-sm font-medium uppercase tracking-widest text-accent-400">
              What We Stand For
            </span>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl mt-4">
              Our Values
            </h2>
            <p className="mt-4 text-neutral-400 max-w-2xl">
              The principles that guide every decision we make and every solution we build.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {values.map((column, index) => (
              <div
                key={index}
                className={`space-y-6 ${index === 1 ? "lg:mt-12" : ""}`}
              >
                {column.map((value) => (
                  <div
                    key={value.ref}
                    className="glass-card glass-card-hover flex flex-col gap-6 rounded-3xl p-8 group"
                  >
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center text-accent-400 group-hover:bg-accent-500/20 transition-colors">
                        {valueIcons[value.ref]}
                      </div>
                      <span className="text-sm font-medium text-neutral-500">{value.ref}</span>
                    </div>
                    <div className="flex flex-col gap-3">
                      <h3 className="text-xl font-semibold group-hover:text-accent-300 transition-colors">{value.name}</h3>
                      <p className="text-neutral-400 text-base leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
