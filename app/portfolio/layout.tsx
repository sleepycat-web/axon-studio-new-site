import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Axon Studio",
  description:
    "Explore Axon Studio's portfolio across platforms and custom software services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="bg-neutral-950" lang="en">
      <head>
        <meta
          name="description"
          content="Explore Axon Studio's portfolio across platforms and custom software services."
        />
      </head>
      <link
        rel="canonical"
        href="https://axonstudio.in/portfolio"
        key="canonical"
      />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
