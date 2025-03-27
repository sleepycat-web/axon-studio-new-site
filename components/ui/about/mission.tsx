"use client";
import Image from "next/image";
import React from "react";

const stats = [
  {
    name: "Years",
    value: "1.5",
  },
  {
    name: "Projects",
    value: "23",
  },
  {
    name: "Client Revenue Generated",
    value: "₹21 Lakhs",
  },
  {
    name: "Users",
    value: "2.6K",
  },
];

const Mission: React.FC = () => {
  return (
    <section>
      <section className=" text-white  py-16 sm:py-20">
        {" "}
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:max-w-7xl lg:px-8">
          {" "}
          <div className="flex flex-col gap-4 sm:gap-6">
            {" "}
            <h1 className="text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
              About
            </h1>{" "}
            <p className="text-primary-200/70 mx-auto max-w-xl text-lg sm:text-xl">
              Unlocking Your Brand&apos;s Potential, One Click at a Time.
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </section>
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <Image
              className="mx-auto h-auto w-full max-w-xl rounded-3xl"
              src="/assets/about.webp"
              alt="About Image"
              width={576}
              height={864}
            />
            <div className="flex flex-col gap-10">
              {/* Mission description */}
              <div className="space-y-8 sm:space-y-12">
                <h2 className=" text-white  text-3xl font-medium tracking-tight sm:text-4xl">
                  Our mission
                </h2>
                <div className="space-y-6">
                  <p className="text-primary-200/70 text-base sm:text-lg">
                    Welcome to Axon Studio, where creativity meets innovation to
                    forge exceptional digital experiences. We are a dynamic team
                    of forward-thinkers, dedicated to shaping the digital
                    landscape with our passion for design and technology.
                  </p>
                  <p className="text-primary-200/70 text-base sm:text-lg">
                    We believe in the power of imagination to transform ideas
                    into reality. With a keen eye for aesthetics and a mastery
                    of the latest digital tools, we craft immersive experiences
                    that resonate with audiences on a profound level.
                  </p>
                  <p className="text-primary-200/70 text-base sm:text-lg">
                    Driven by our commitment to excellence we are more than just
                    a creative agency; we are pioneers of possibility, pushing
                    the boundaries of what&apos;s conceivable to deliver
                    unparalleled results for our clients. Join us on a journey
                    of creativity, innovation, and limitless potential.
                  </p>
                </div>
              </div>

              {/* Stats */}
              <dl className="grid text-white  grid-cols-1 gap-6 sm:grid-cols-2">
                {stats.map((stat) => (
                  <div
                    key={stat.name}
                    className="border-primary-300/10 rounded-3xl border p-6"
                  >
                    <dt className="text-base">{stat.name}</dt>
                    <dd className="text-3xl font-medium tracking-tight">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Mission;
