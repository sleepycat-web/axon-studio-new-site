import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Axon Studio | Web Development Agency in Siliguri",
  description:
    "Welcome to Axon Studio, your go-to partner for online growth! We are a team of experts who will elevate your brand's potential one click at a time.",
  authors: [{ name: "Axon Studio", url: "https://axonstudio.in" }],
  alternates: {
    canonical: "https://axonstudio.in/",
    languages: {
      en: "https://axonstudio.in/",
    },
  },
  openGraph: {
    title: "Axon Studio | Web Development Agency in Siliguri",
    description:
      "Welcome to Axon Studio, your go-to partner for online growth! We are a team of experts who will elevate your brand's potential one click at a time.",
    url: "https://axonstudio.in",
    siteName: "Axon Studio",
    images: [
      {
        url: "https://axonstudio.in/assets/ogi.jpg",
        width: 1200,
        height: 630,
        alt: "Axon Studio preview image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@WebAxon",
    title: "Axon Studio | Web Development Agency in Siliguri",
    description:
      "Welcome to Axon Studio, your go-to partner for online growth! We are a team of experts who will elevate your brand's potential one click at a time.",
    images: ["https://axonstudio.in/assets/ogi.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-neutral-950">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-S882N1ZP71"
        strategy="afterInteractive"
      />
      <Script id="gtag-init">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-S882N1ZP71');
      `}</Script>
      <Script id="ld-json" type="application/ld+json">
        {`
{
  "@context": "https://schema.org",
  "@type": "Corporation",
  "name": "Axon Studio",
  "alternateName": "Web Axon",
  "url": "https://axonstudio.in",
  "logo": "https://axonstudio.in/assets/axon-studio-logo.png",
  "sameAs": [
    "https://twitter.com/WebAxon",
    "https://www.instagram.com/web_axon/",
    "https://www.linkedin.com/company/web-axon",
    "https://axonstudio.in/",
    "https://www.facebook.com/people/Axon-Studio/61557992653296/"
  ]
}
`}
      </Script>
      <Script id="ld-localbusiness" type="application/ld+json">
        {`
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Axon Studio",
  "image": "https://axonstudio.in/assets/msme.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Sevoke Road",
    "addressLocality": "Siliguri",
    "addressRegion": "West Bengal",
    "postalCode": "734001",
    "addressCountry": "IN"
  },
  "email": "info@axonstudio.in",
  "url": "https://axonstudio.in",
  "openingHours": "Mo,Tu,We,Th,Fr 09:00-19:00",
  "sameAs": [
    "https://twitter.com/WebAxon",
    "https://www.instagram.com/web_axon/",
    "https://www.linkedin.com/company/web-axon",
    "https://www.facebook.com/people/Axon-Studio/61557992653296/"
  ]
}
`}
      </Script>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
