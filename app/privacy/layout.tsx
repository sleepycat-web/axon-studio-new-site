import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Privacy Policy | Axon Studio",
  description:
    "Our privacy policy outlines how Axon Studio collects and uses your information. Understand what data we collect and how it's handled to ensure transparency and trust.",
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
          content="Our privacy policy outlines how Axon Studio collects and uses your information. Understand what data we collect and how it's handled to ensure transparency and trust."
        />
      </head>
      <link
        rel="canonical"
        href="https://axonstudio.in/privacy"
        key="canonical"
      />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
