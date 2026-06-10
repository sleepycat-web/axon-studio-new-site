import React from "react";
import { COMPANY_METRICS } from "@/constants/metrics";

const stats = [
  {
    id: 1,
    name: "Orders Processed",
    value: COMPANY_METRICS.ordersProcessed,
    suffix: "+",
  },
  {
    id: 2,
    name: "Reservations Handled",
    value: COMPANY_METRICS.reservationsProcessed,
    suffix: "+",
  },
  {
    id: 3,
    name: "Users Managed",
    value: COMPANY_METRICS.usersManaged,
    suffix: "",
  },
  {
    id: 4,
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
            Built by us. Run every day by our clients. These are the numbers behind the systems.          </p>
        </div>

        <dl className="grid grid-cols-2 gap-x-8 gap-y-12 text-center lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="mx-auto flex max-w-xs flex-col gap-y-3 glass-card glass-card-hover rounded-3xl p-8 w-full group"
            >
              <dt className="text-sm sm:text-base text-neutral-400 group-hover:text-neutral-300 transition-colors">
                {stat.name}
              </dt>
              <dd className="order-first text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight gradient-text-subtle group-hover:scale-105 transition-transform duration-500">
                {stat.value}{stat.suffix}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Results;
