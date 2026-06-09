import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Axon Studio | Start a Project",
  description:
    "Book a call with Axon Studio to scope your custom software, automation or website project. We work with clients across India, the UK and the US.",
  alternates: {
    canonical: "https://axonstudio.in/contact",
  },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
