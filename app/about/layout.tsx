import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Axon Studio",
  description:
    "Welcome to Axon Studio! We are a team of experts who build powerful, tailored solutions that scale businesses beyond limits.",
  alternates: {
    canonical: "https://axonstudio.in/about",
  },
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
