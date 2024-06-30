import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Axon Studio | Web Development Agency in Siliguri",
  description: "Welcome to Axon Studio, your go-to partner for online growth! We are a team of experts who will elevate your brand's potential one click at a time.",
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
    url: "https://axonstudio.tech",
    logo: "https://axonstudio.tech/assets/axon-studio-logo.png",
    sameAs: [
      "https://twitter.com/WebAxon",
      "https://www.instagram.com/web_axon/",
      "https://www.linkedin.com/company/axon-web",
      "https://axonstudio.tech/",
      "https://www.facebook.com/people/Axon-Studio/61557992653296/",
    ],
  };

  return (
    <html lang="en" className="bg-neutral-950">
      <head>
        <meta
          name="description"
          content="Welcome to Axon Studio, your go-to partner for online growth! We are a team of experts who will elevate your brand's potential one click at a time."
        />
        
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
          content="https://axonstudio.tech/assets/ogi.jpg"
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
          content="https://axonstudio.tech/assets/ogi.jpg"
        />

        <link rel="canonical" href="https://axonstudio.tech/" key="canonical" />

        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />

        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-S882N1ZP71"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-S882N1ZP71');
            `,
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
