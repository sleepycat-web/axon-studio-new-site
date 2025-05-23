import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Terms and Conditions | Axon Studio",
  description:
    "Discover our clear and comprehensive terms of service at Axon Studio. Learn about our commitment to transparency and client satisfaction.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link
        rel="canonical"
        href="https://axonstudio.in/terms"
        key="canonical"
      />
      <head>
        <meta
          name="description"
          content="Discover our clear and comprehensive terms of service at Axon Studio. Learn about our commitment to transparency and client satisfaction."
        />
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
