"use client";

import React from "react";
import PortfolioPage from "@/components/ui/portfolio/page";

export default function Page() {
  return (
    <React.Suspense fallback={null}>
      <PortfolioPage />
    </React.Suspense>
  );
}
