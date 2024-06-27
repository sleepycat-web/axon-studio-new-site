"use client";

import React from "react";

const values = [
  [
    {
      ref: "01",
      name: "Excellence",
      description:
        "Excellence is the cornerstone of our ethos. At our core, we are driven by an unwavering commitment to surpassing expectations. Our relentless pursuit of excellence ensures that every project we undertake is executed with the highest standards of quality, setting new benchmarks and exceeding the aspirations of our clients. It's not just what we do, it's who we are.",
    },
    {
      ref: "02",
      name: "Innovation",
      description:
        "Innovation propels our journey forward. Embracing creativity and cutting-edge technology, we constantly push boundaries to pioneer new solutions. Through experimentation and forward thinking, we challenge the status quo and spark transformative change. Our relentless pursuit of innovation drives us to anticipate market trends and deliver groundbreaking results, positioning us as industry leaders and driving continuous growth.",
    },
  ],
  [
    {
      ref: "03",
      name: "Teamwork",
      description:
        "Teamwork is the bedrock of our success. United in purpose, we collaborate seamlessly to achieve shared goals. Each team member brings unique strengths, fostering creativity and innovation. Through open communication and mutual support, we overcome challenges and celebrate victories together. Our cohesive teamwork ensures efficient project delivery and client satisfaction, reflecting our commitment to collective excellence.",
    },
    {
      ref: "04",
      name: "Respect",
      description:
        "Respect is our guiding principle. We honor diverse perspectives, valuing each team member's contributions. By fostering a culture of empathy and understanding, we cultivate a supportive environment where everyone feels heard and valued. Mutual respect forms the foundation of our relationships, enabling collaboration, trust, and collective success.",
    },
  ],
];

export default function Values() {
  return (
    <section className="  text-white  py-16 sm:py-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex flex-col gap-8 lg:gap-12">
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
            Our Values
          </h2>
          <div className="grid gap-8 lg:grid-cols-2">
            {values.map((column, index) => (
              <div
                key={index}
                className={`space-y-8 ${index === 1 ? "lg:mt-16" : ""}`}
              >
                {column.map((value) => (
                  <div
                    key={value.ref}
                    className="bg-primary-400/10 flex flex-col gap-12 rounded-3xl px-6 py-8"
                  >
                    <p className="text-sm">{value.ref}</p>
                    <div className="flex flex-col gap-4">
                      <h3 className="text-xl font-medium">{value.name}</h3>
                      <p className="text-primary-200/70 text-base sm:text-lg">
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
