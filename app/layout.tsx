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
  alternates: { canonical: "https://axonstudio.in/" },
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
  const schema = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    name: "Axon Studio",
    alternateName: "Axon Web",
    url: "https://axonstudio.in",
    logo: "https://axonstudio.in/assets/axon-studio-logo.png",
    sameAs: [
      "https://twitter.com/WebAxon",
      "https://www.instagram.com/web_axon/",
      "https://www.linkedin.com/company/web-axon",
      "https://axonstudio.in/",
      "https://www.facebook.com/people/Axon-Studio/61557992653296/",
    ],
  };

  return (
    <html lang="en" className="bg-neutral-950">
      <head>
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />

      </head>
      <body className={inter.className}>
        {children}
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-S882N1ZP71"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-S882N1ZP71');
            `,
          }}
        />
      </body>
    </html>
  );
}
