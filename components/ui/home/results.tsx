import React from "react";
import { COMPANY_METRICS } from "@/constants/metrics";

const stats = [
  {
    id: 1,
    name: "Countries",
    value: COMPANY_METRICS.countriesServed,
    suffix: "",
  },
  {
    id: 2,
    name: "Users Managed",
    value: COMPANY_METRICS.usersManaged,
    suffix: "",
  },
  {
    id: 3,
    name: "Projects Delivered",
    value: COMPANY_METRICS.projects,
    suffix: "",
  },
];

const Results = () => {
  return (
    <section className="py-20 sm:py-28 relative text-white overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[500px] orb-gradient orb-primary opacity-20 pointer-events-none rounded-[100%] blur-[120px]"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium uppercase tracking-widest text-accent-400 mb-4 block">
            Impact & Results
          </span>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Software built for <span className="gradient-text-subtle">Scale</span>
          </h2>
          <p className="mt-4 text-neutral-400 text-lg">
            Built by us. Run every day by our clients. These are the numbers behind the systems.
          </p>
        </div>

        <dl className="grid grid-cols-2 gap-4 text-center sm:grid-cols-3">
          {stats.map((stat, i) => (
            <div
              key={stat.id}
              className={`${i === 2 ? "col-span-2 sm:col-span-1" : ""} flex justify-center`}
            >
              <div className={`${i === 2 ? "w-1/2 sm:w-full" : "w-full"} glass-card glass-card-hover rounded-2xl p-6 text-center group`}>
                <p className="text-4xl font-semibold tracking-tight gradient-text-subtle group-hover:scale-105 transition-transform duration-500">
                  {stat.value}{stat.suffix}
                </p>
                <p className="mt-2 text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors">
                  {stat.name}
                </p>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Results;
