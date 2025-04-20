import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "About | Axon Studio",
  description:
    "Axon Studio is Software Development firm based in Siliguri. We work towards elevating your brand's potential one click at a time.",
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
          content="Axon Studio is Software Development firm based in Siliguri. We work towards elevating your brand's potential one click at a time."
        />
      </head>
      <link
        rel="canonical"
        href="https://axonstudio.in/about"
        key="canonical"
      />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
