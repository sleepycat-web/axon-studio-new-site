import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Axon Studio | Software, Automation & Web Platforms",
  description:
    "Meet Axon Studio. We build custom software, automation and websites for businesses ready to outgrow manual work. 29+ projects delivered worldwide.",
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
