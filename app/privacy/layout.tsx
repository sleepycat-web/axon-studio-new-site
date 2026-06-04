import type { Metadata } from "next";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export const metadata: Metadata = {
  title: "Privacy Policy | Axon Studio",
  description:
    "Our privacy policy outlines how Axon Studio collects and uses your information. Understand what data we collect and how it's handled to ensure transparency and trust.",
  alternates: {
    canonical: "https://axonstudio.in/privacy",
  },
};

export default function PrivacyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
