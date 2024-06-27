import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Axon Studio | About",
  description:
    "Axon Studio is Web Development and SEO agency based in Siliguri. We work towards elevating your brand's potential one click at a time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={inter.className}>{children}</body>
    </html>
  );
}
