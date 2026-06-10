import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Axon Studio | Our Story & Approach",
  description:
    "Learn how Axon Studio works, what drives us, and the thinking behind the systems we build for businesses worldwide.",
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
