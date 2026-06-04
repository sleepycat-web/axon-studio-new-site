import type { Metadata } from "next";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export const metadata: Metadata = {
  title: "Refund Policy | Axon Studio",
  description:
    "Explore our straightforward refund policy at Axon Studio. Learn how we ensure satisfaction and handle refunds with transparency.",
  alternates: {
    canonical: "https://axonstudio.in/refund",
  },
};

export default function RefundLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
