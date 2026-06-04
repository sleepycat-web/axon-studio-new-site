import type { Metadata } from "next";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export const metadata: Metadata = {
  title: "Terms and Conditions | Axon Studio",
  description:
    "Discover our clear and comprehensive terms of service at Axon Studio. Learn about our commitment to transparency and client satisfaction.",
  alternates: {
    canonical: "https://axonstudio.in/terms",
  },
};

export default function TermsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
