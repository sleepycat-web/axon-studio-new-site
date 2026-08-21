"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ErrorHeroProps {
  code?: string;
  title?: string;
  description?: string;
  buttonLabel?: string;
}

function BackgroundGrid() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden rounded-[2rem] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]">
      <div className="grid h-full w-full grid-cols-12 grid-rows-6">
        {Array.from({ length: 72 }).map((_, index) => (
          <div
            key={index}
            className="border-white/5 hover:bg-accent-500/10 border transition-colors duration-300"
          />
        ))}
      </div>
    </div>
  );
}

function ErrorContent({
  title,
  description,
  buttonLabel,
}: Omit<ErrorHeroProps, "code">) {
  return (
    <div className="pointer-events-none relative z-10 flex max-w-md flex-col items-center justify-center gap-5 text-center sm:items-start sm:text-start">
      <div className="space-y-4">
        <h1 className="text-white text-4xl leading-tight font-bold tracking-tight sm:text-5xl">
          {title}
        </h1>

        <p className="text-neutral-400 max-w-sm text-sm leading-relaxed sm:text-base">
          {description}
        </p>
      </div>

      <Link href="/">
        <button className="btn-premium group pointer-events-auto mt-4 rounded-full px-8 py-4 flex items-center shadow-[inset_0_2px_4px_rgba(255,255,255,0.5),inset_0_-2px_5px_rgba(0,0,0,0.1),0_8px_20px_rgba(0,0,0,0.1)]">
          <span className="font-semibold text-white">{buttonLabel}</span>
          <span className="ml-2 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-1 text-white">
            <ArrowRight className="h-4 w-4" />
          </span>
        </button>
      </Link>
    </div>
  );
}

function ErrorCode({ code }: Pick<ErrorHeroProps, "code">) {
  return (
    <div className="pointer-events-none relative z-10 flex items-center justify-center">
      <span className="text-white/5 translate-y-10 text-[7rem] leading-none font-bold tracking-tight select-none sm:translate-y-0 sm:text-[9rem] md:text-[11rem] lg:text-[13rem]">
        {code}
      </span>
    </div>
  );
}

export default function NotFound({
  code = "404",
  title = "This destination isn't accessible.",
  description = "The resource you attempted to open may have been moved, archived, or temporarily disconnected from the network.",
  buttonLabel = "Return Home",
}: ErrorHeroProps) {
  return (
    <main className="flex-grow flex items-center justify-center p-4 py-24 sm:py-32">
      <div className="bg-neutral-900/30 border border-white/10 mx-auto relative overflow-hidden rounded-[2rem] px-4 sm:px-8 lg:px-14 w-full max-w-7xl min-h-[500px] flex items-center">
        <BackgroundGrid />

        <div className="pointer-events-none relative z-10 grid min-h-[420px] w-full grid-cols-1 gap-10 sm:grid-cols-2 sm:items-center">
          <div className="order-2 sm:order-1 flex justify-center sm:justify-start">
            <ErrorContent
              title={title}
              description={description}
              buttonLabel={buttonLabel}
            />
          </div>

          <div className="order-1 sm:order-2 flex justify-center sm:justify-end">
            <ErrorCode code={code} />
          </div>
        </div>
      </div>
    </main>
  );
}
