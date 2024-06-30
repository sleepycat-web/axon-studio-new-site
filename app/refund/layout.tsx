import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Refund Policy | Axon Studio",
  description:
    "Explore our straightforward refund policy at Axon Studio. Learn how we ensure satisfaction and handle refunds with transparency.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="description"
          content="Explore our straightforward refund policy at Axon Studio. Learn how we ensure satisfaction and handle refunds with transparency."
        />
      </head>
      <meta name="robots" content="noindex" />
      <link rel="canonical" href="https://axonstudio.tech/refund" key="canonical" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
