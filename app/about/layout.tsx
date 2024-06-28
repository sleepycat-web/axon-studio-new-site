import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "About | Axon Studio",
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
        {/* Open Graph Meta Tags */}
      <meta property="og:url" content="https://axonstudio.tech" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Axon Studio | Web Development Agency in Siliguri"
      />
      <meta
        property="og:description"
        content="Welcome to Axon Studio, your go-to partner for online growth!"
      />
      <meta
        property="og:image"
        content="https://axonstudio.tech/assets/hero.webp"
      />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="axonstudio.tech" />
      <meta property="twitter:url" content="https://axonstudio.tech" />
      <meta
        name="twitter:title"
        content="Axon Studio | Web Development Agency in Siliguri"
      />
      <meta
        name="twitter:description"
        content="Welcome to Axon Studio, your go-to partner for online growth! "
      />
      <meta
        name="twitter:image"
        content="https://axonstudio.tech/assets/hero.webp"
      />
      <link rel="canonical" href="https://axonstudio.tech/about" key="canonical" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
