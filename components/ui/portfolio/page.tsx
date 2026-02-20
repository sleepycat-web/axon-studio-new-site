"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/ui/layout/header";
import Footer from "@/components/ui/layout/footer";
import Cta1 from "@/components/ui/cta/cta1";
import Reviews from "@/components/ui/home/reviews";

const projects = [
  {
    title: "Multi-Outlet Restaurant POS & Franchise Control System",
    industry: "Restaurant & Hospitality",
    tag: "Operations Infrastructure",
    mobileTag: "Restaurant Operations Infrastructure",
    description:
      "Centralized POS and operations system built for restaurant franchises to manage billing, table flow, kitchen coordination, self-ordering, and performance tracking across multiple outlets.",

    results: [
      "Unified billing and kitchen operations across outlets",
      "Self-ordering kiosks reduced front-of-house dependency",
      "Centralized reporting for franchise-level decision making",
    ],
  },
  {
    title: "Salon Chain Appointment & Workforce Management Platform",
    industry: "Salon & Wellness",
    tag: "Franchise Operations System",
    mobileTag: "Salon Franchise Operations System",
    description:
      "End-to-end management platform for salon franchises covering appointments, staff allocation, inventory tracking, and customer retention workflows across branches.",

    results: [
      "Single dashboard for multi-location franchise control",
      "Dynamic staff scheduling aligned to appointment load",
      "Staff performance and payroll tracking in one system",
    ],
  },
  {
    title: "Manufacturing CRM & Supply Chain Suite",
    industry: "Manufacturing & Industrial",
    tag: "Enterprise Workflow System",
    mobileTag: "Manufacturing Workflow System",
    description:
      "Custom-built CRM and supply chain platform enabling manufacturers to manage leads, vendor coordination, procurement cycles, inventory movement, and order fulfillment within a structured operational workflow.",

    results: [
      "Reduced procurement delays with automated supplier workflows",
      "Full visibility from raw material intake to dispatch",
      "Real-time operational reporting across sales, procurement, and logistics teams",
    ],
  },
  {
    title: "Automotive Dealership Service Records & Workshop Automation System",
    industry: "Automotive",
    tag: "Dealership Operations Platform",
    mobileTag: "Automotive Dealership Operations Platform",
    description:
      "Centralized dealership system designed to manage vehicle records, service history, workshop scheduling, automated reminders, and customer communication through integrated workflows.",
    results: [
      "Complete digital service history tracking for every vehicle",
      "Automated service reminders with WhatsApp integration",
      "Workshop job allocation and status tracking in one dashboard",
    ],
  },
  {
    title: "Diagnostic Centre Booking & Home Sample Collection Management System",
    industry: "Healthcare & Diagnostics",
    tag: "Healthcare Operations Platform",
    mobileTag: "Healthcare Operations Platform",
    description:
      "Online booking and payment system built for diagnostic centres to manage lab test scheduling, home sample collection logistics, digital reports, and staff coordination through a unified platform.",
    results: [
      "Secure online test booking with integrated payment processing",
      "Field staff dashboard for viewing assigned home collections and updating status in real time",
      "Central lab panel to coordinate technicians, routes, and report delivery",
    ],
  },
  {
    title: "High-Converting Business Websites & Lead Systems",
    industry: "Cross-Industry",
    tag: "Web Development & SEO ",
    mobileTag: "Cross Industry Lead Systems",
    description:
      "Performance-focused websites and landing systems engineered to generate qualified leads, establish authority, and align directly with revenue goals.",

    results: [
      "Optimized build structure for strong performance scores",
      "Clear conversion journeys aligned with sales objectives",
      "SEO-aligned architecture for long-term organic visibility",
    ],
  },
];

const capabilities = [
  {
    title: "Revenue Infrastructure Systems",
    description:
      "We build structured digital systems that eliminate operational chaos and unlock predictable revenue growth for businesses.",
    items: [
      "POS, ordering, reservation systems",
      "Franchise and multi-location management platforms",
      "CRM, supply chain, and operations software",
      "Dashboards, reporting, and analytics tools",
    ],
  },
  {
    title: "Operational ERP & Internal Platforms",
    description:
      "Purpose-built internal systems engineered around your workflow, from multi-location management to role-based operational control.",
    items: [
      "Custom ERP for service businesses",
      "Multi-branch & franchise management platforms",
      "Role-based admin dashboards & access control",
      "Inventory, supply chain & process automation",
    ],
  },
  {
    title: "Automation & Scalable Architecture",
    description:
      "Backend systems structured for long-term scale. Resilient, secure, and designed to handle growth without breaking operations.",
    items: [
      "Automated workflows and system integrations",
      "Payment lifecycle & reconciliation logic",
      "API integrations & workflow automation",
      "Architecture designed for long-term expansion",
    ],
  },
];

const stats = [
  { value: "19+", label: "Projects Delivered" },
  { value: "7+", label: "Industries Served" },
  { value: "11+", label: "Clients Worldwide" },
  { value: "6.8K+", label: "Users Managed" },
];

export default function PortfolioPage() {
  const workRef = useRef<HTMLElement | null>(null);
  const [scrollToWork, setScrollToWork] = useState(false);

  useEffect(() => {
    if (scrollToWork && workRef.current) {
      workRef.current.scrollIntoView({ behavior: "smooth" });
      setScrollToWork(false);
    }
  }, [scrollToWork]);

  return (
    <div className="bg-neutral-950 text-white">
      <Navbar />

      {/* ── Hero ── */}
      <section className="pt-10 pb-20 sm:pt-24 sm:pb-28">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="flex flex-col items-center text-center">
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight sm:text-6xl">
              Software that runs businesses.{" "}
              <span className="text-primary-400">Websites that grow them.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-neutral-400 sm:text-xl">
              We partner with businesses across industries to designand build software platforms, internal systems and high-converting
              websites engineered to deliver real, measurable results.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact">
                <button className="bg-primary-400 hover:bg-primary-300 text-primary-950 inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold transition">
                  Start a project
                </button>
              </Link>
              <button
                onClick={() => setScrollToWork(true)}
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-base font-medium text-white transition hover:bg-white/10"
              >
                View our work
              </button>
            </div>
          </div>

          {/* Stats bar */}
          <div className="mt-16 grid grid-cols-2 gap-6 sm:mt-20 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-6 text-center"
              >
                <p className="text-3xl font-semibold tracking-tight text-primary-400 sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-neutral-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What We Do ── */}
      <section className="border-b border-white/10 pb-20 sm:pb-28">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="flex flex-col gap-4">
            <span className="text-sm font-medium uppercase tracking-widest text-primary-400">
              What We Do
            </span>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Our Capabilities
            </h2>
            <p className="max-w-7xl text-base text-neutral-400 sm:text-lg">
              We design and engineer business-critical systems that improve efficiency, visibility, and revenue control.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="flex flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-8"
              >
                <h3 className="text-xl font-semibold">{cap.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                  {cap.description}
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {cap.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-neutral-300"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="border-t border-white/10 py-20 sm:py-28">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="flex flex-col gap-4">
            <span className="text-sm font-medium uppercase tracking-widest text-primary-400">
              How We Work
            </span>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Our Process
            </h2>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Discovery",
                text: "We learn your business, your goals, and the problem you need solved.",
              },
              {
                step: "02",
                title: "Strategy & Design",
                text: "We define system architecture and workflows and design user interfaces around real operational needs.",
              },
              {
                step: "03",
                title: "Development",
                text: "We develop in structured phases, ship iteratively, and maintain full transparency throughout delivery.",
              },
              {
                step: "04",
                title: "Launch & Support",
                text: "We deploy, monitor, and continue improving post-launch.",
              },
            ].map((s) => (
              <div key={s.step} className="bg-neutral-950 p-8">
                <span className="text-2xl font-bold text-primary-400">
                  {s.step}
                </span>
                <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Work ── */}
      <section ref={workRef} className="border-t border-b border-white/10 pt-20 pb-20 sm:pt-24 sm:pb-28">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="flex flex-col gap-4">
            <span className="text-sm font-medium uppercase tracking-widest text-primary-400">
              Portfolio
            </span>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Featured Projects
            </h2>
            <p className="max-w-7xl text-base text-neutral-400 sm:text-lg">
              A selection of operational systems we&apos;ve built for
              our clients across industries.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-primary-400/30 hover:bg-primary-400/[0.04]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-primary-400/10 px-3 py-1 text-xs font-medium text-primary-300">
                      <span className="sm:hidden">{project.mobileTag}</span>
                      <span className="hidden sm:inline">{project.tag}</span>
                    </span>
                    <span className="hidden sm:inline text-xs text-neutral-500">
                      {project.industry}
                    </span>
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold">{project.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-neutral-400">
                    {project.description}
                  </p>
                </div>
                <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-5">
                  {project.results.map((r) => (
                    <li
                      key={r}
                      className="flex items-start gap-2 text-sm text-neutral-300"
                    >
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-primary-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Reviews />
      <Cta1 />
      <Footer />
    </div>
  );
}
