import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Axon Studio",
  description:
    "Explore the software platforms, internal tools and high-converting websites Axon Studio has built for clients across industries worldwide.",
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
