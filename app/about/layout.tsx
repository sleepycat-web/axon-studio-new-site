import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "About | Axon Studio",
  description:
    "Welcome to Axon Studio! We are a team of experts who build powerful, tailored solutions that scale businesses beyond limits.",
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
        href="https://axonstudio.in/about"
        key="canonical"
      />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
