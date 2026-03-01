"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/ui/layout/header";
import Footer from "@/components/ui/layout/footer";
import Cta1 from "@/components/ui/cta/cta1";
import Reviews from "@/components/ui/home/reviews";
import { useRouter } from "next/navigation";

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
  { value: "6.9K+", label: "Users Managed" },
];

export default function PortfolioPage() {
  const workRef = useRef<HTMLElement | null>(null);
  const [scrollToWork, setScrollToWork] = useState(false);
  const router = useRouter();

  // scroll when the button on this page is clicked
  useEffect(() => {
    if (scrollToWork && workRef.current) {
      workRef.current.scrollIntoView({ behavior: "smooth" });
      setScrollToWork(false);
    }
  }, [scrollToWork]);

  // if the URL contains a hash when the page loads, scroll to the section
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash === "#work" && workRef.current) {
      workRef.current.scrollIntoView({ behavior: "smooth" });
      // clear the hash from url without scrolling again
      router.replace("/portfolio", { scroll: false });
    }
  }, [router]);

  return (
    <div className="bg-neutral-950 text-white relative overflow-x-hidden ">
      {/* Grid pattern background */}
      {/* grid pattern is global; removed to avoid double overlay */}

      <Navbar />

      {/* ── Hero ── */}
      <section className="pt-16 pb-24 sm:pt-28 sm:pb-32 relative overflow-hidden">
        {/* Background orbs */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] orb-gradient orb-primary opacity-40"></div>
        <div className="absolute top-20 -right-40 w-[400px] h-[400px] orb-gradient orb-secondary opacity-30"></div>

        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 relative">
          <div className="flex flex-col items-center text-center mt-12">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
              <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse"></span>
              <span className="text-sm text-neutral-300 font-medium">Our Work</span>
            </div>

            <h1 className="max-w-6xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-7xl leading-[1.1]">
              Software that runs businesses.
              <br />
              <span className="gradient-text-subtle">Websites that grow them.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-neutral-400 sm:text-xl leading-relaxed">
              We partner with businesses across industries to design and build software platforms, internal systems and high-converting websites engineered to deliver real, measurable results.
            </p>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact">
                <button className="btn-premium inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold text-white">
                  Start a project
                  <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </Link>
              <button
                onClick={() => setScrollToWork(true)}
                className="btn-secondary inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-medium text-white"
              >
                View our work
              </button>
            </div>
          </div>

          {/* Stats bar */}
          <div className="mt-20 grid grid-cols-2 gap-4 sm:mt-24 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass-card glass-card-hover rounded-2xl px-6 py-8 text-center"
              >
                <p className="text-3xl font-semibold tracking-tight gradient-text-subtle sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-neutral-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What We Do ── */}
      <section className="relative py-24 sm:py-32">
        <div className="absolute bottom-0 left-0 right-0 section-divider"></div>

        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="flex flex-col gap-4">
            <span className="text-sm font-medium uppercase tracking-widest text-accent-400">
              What We Do
            </span>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Our Capabilities
            </h2>
            <p className="max-w-2xl text-base text-neutral-400 sm:text-lg">
              We design and engineer business-critical systems that improve efficiency, visibility, and revenue control.
            </p>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {capabilities.map((cap, index) => (
              <div
                key={cap.title}
                className="glass-card glass-card-hover flex flex-col rounded-3xl p-8 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center mb-6 group-hover:bg-accent-500/20 transition-colors">
                  <span className="text-accent-400 font-semibold">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="text-xl font-semibold group-hover:text-accent-300 transition-colors">{cap.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                  {cap.description}
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {cap.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-neutral-300"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" />
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
      <section className="relative py-24 sm:py-32">
        <div className="absolute top-0 left-0 right-0 section-divider"></div>

        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="flex flex-col gap-4">
            <span className="text-sm font-medium uppercase tracking-widest text-accent-400">
              How We Work
            </span>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Our Process
            </h2>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-3xl glass-card sm:grid-cols-2 lg:grid-cols-4">
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
            ].map((s, index) => (
              <div key={s.step} className="bg-neutral-950/50 p-8 relative group hover:bg-accent-500/5 transition-colors">
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-6 transform -translate-y-1/2 z-10">
                    <svg className="w-6 h-6 text-accent-500/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
                <span className="text-2xl font-bold gradient-text-subtle">
                  {s.step}
                </span>
                <h3 className="mt-4 text-lg font-semibold group-hover:text-accent-300 transition-colors">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Work ── */}
      <section id="work" ref={workRef} className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 section-divider"></div>
        <div className="absolute bottom-0 left-0 right-0 section-divider"></div>

        {/* Background orbs */}
        <div className="absolute top-1/3 -left-40 w-96 h-96 orb-gradient orb-secondary opacity-20"></div>
        <div className="absolute bottom-1/4 -right-40 w-80 h-80 orb-gradient orb-primary opacity-20"></div>

        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 relative">
          <div className="flex flex-col gap-4">
            <span className="text-sm font-medium uppercase tracking-widest text-accent-400">
              Portfolio
            </span>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Featured Projects
            </h2>
            <p className="max-w-2xl text-base text-neutral-400 sm:text-lg">
              A selection of operational systems we&apos;ve built for
              our clients across industries.
            </p>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="glass-card glass-card-hover group relative flex flex-col justify-between rounded-3xl p-8"
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="rounded-full bg-accent-500/10 border border-accent-500/20 px-4 py-1.5 text-xs font-medium text-accent-300">
                      <span className="sm:hidden">{project.mobileTag}</span>
                      <span className="hidden sm:inline">{project.tag}</span>
                    </span>
                    <span className="hidden sm:inline text-xs text-neutral-500 font-medium">
                      {project.industry}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold group-hover:text-accent-300 transition-colors sm:text-2xl">{project.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-neutral-400">
                    {project.description}
                  </p>
                </div>
                <ul className="mt-8 space-y-3 border-t border-white/5 pt-6">
                  {project.results.map((r) => (
                    <li
                      key={r}
                      className="flex items-start gap-3 text-sm text-neutral-300"
                    >
                      <svg
                        className="mt-0.5 h-5 w-5 shrink-0 text-accent-400"
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
