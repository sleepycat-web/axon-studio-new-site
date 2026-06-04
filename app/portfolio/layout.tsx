import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Axon Studio",
  description:
    "Explore Axon Studio's portfolio across platforms and custom software services.",
  alternates: {
    canonical: "https://axonstudio.in/portfolio",
  },
};

export default function PortfolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
