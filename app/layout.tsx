import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Axon Studio | Custom Software Solutions for Businesses",
  description:
    "Axon Studio builds custom software, automation and high-converting websites that help growing businesses standardise operations and scale.",
  authors: [{ name: "Axon Studio", url: "https://axonstudio.in/" }],
  alternates: {
    canonical: "https://axonstudio.in/",
    languages: {
      en: "https://axonstudio.in/",
    },
  },
  openGraph: {
    title: "Axon Studio | Custom Software Solutions for Businesses",
    description:
      "Axon Studio builds custom software, automation and high-converting websites that help growing businesses standardise operations and scale.",
    url: "https://axonstudio.in/",
    siteName: "Axon Studio",
    images: [
      {
        url: "https://axonstudio.in/assets/screenshots/ogi.jpg",
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
    title: "Axon Studio | Custom Software Solutions for Businesses",
    description:
      "Axon Studio builds custom software, automation and high-converting websites that help growing businesses standardise operations and scale.",
    images: ["https://axonstudio.in/assets/screenshots/ogi.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-neutral-950 overflow-x-hidden">
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
      <Script id="ld-organization" type="application/ld+json">
        {`
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Axon Studio",
  "alternateName": "The Axon Studio",
  "description": "Axon Studio builds custom software, automation, and high-converting websites that help growing businesses standardise operations and scale. Headquartered in Siliguri, India, with clients across India, the UK, and the US.",
  "foundingDate": "2024-01-01", 
  "url": "https://axonstudio.in/",
  "logo": {
    "@type": "ImageObject",
    "url": "https://axonstudio.in/assets/logos/axon-studio-logo.png",
    "width": "180",
    "height": "60"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Sevoke Road",
    "addressLocality": "Siliguri",
    "addressRegion": "West Bengal",
    "postalCode": "734001",
    "addressCountry": "IN"
  },
  "email": "info@axonstudio.in",
   "founder": [
    {
      "@type": "Person",
      "name": "Amlan Sarmah", 
      "jobTitle": "Founder",
      "url": "https://www.instagram.com/whyamlan/"  
   
    }
  ],
  "knowsAbout": ["Web Development", "App Development", "UI/UX Design", "SEO", "Enterprise Software", "SaaS Solutions"],
  "sameAs": [
    "https://twitter.com/WebAxon",
    "https://www.instagram.com/theaxonstudio/",
    "https://www.linkedin.com/company/theaxonstudio",
    "https://www.facebook.com/people/Axon-Studio/61557992653296/"
  ],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": "info@axonstudio.in",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi"]
    }
  ],
  "slogan": "Custom software, automation and websites for growing businesses."
}
`}
      </Script>

      <Script id="ld-localbusiness" type="application/ld+json">
        {`
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Axon Studio",
  "image": [
    "https://axonstudio.in/assets/screenshots/ogi.jpg"
  ],
  "description": "Axon Studio builds custom software, automation, and high-converting websites that help growing businesses standardise operations and scale. Headquartered in Siliguri, India, with clients across India, the UK, and the US.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Sevoke Road",
    "addressLocality": "Siliguri",
    "addressRegion": "West Bengal",
    "postalCode": "734001",
    "addressCountry": "IN"
  },
  "email": "info@axonstudio.in",
  "telephone": "",
  "url": "https://axonstudio.in/",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "09:00",
      "closes": "19:00"
    }
  ],
  "paymentAccepted": ["Cash", "UPI", "Bank Transfer"],
  "currenciesAccepted": "INR",
  "priceRange": "₹₹",
  "sameAs": [
    "https://twitter.com/WebAxon",
    "https://www.instagram.com/theaxonstudio/",
    "https://www.linkedin.com/company/the-axon-studio/",
    "https://www.facebook.com/people/Axon-Studio/61557992653296/"
  ]
}
`}
      </Script>
      {/* <Script id="ld-breadcrumbs" type="application/ld+json">
        {`
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://axonstudio.in/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "About",
      "item": "https://axonstudio.in/about"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Contact",
      "item": "https://axonstudio.in/contact"
    }
  ]
}
`}
      </Script> */}
      <Script id="ld-faq" type="application/ld+json">
        {`{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does it take to build a custom system for my business?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most projects take between 4 to 8 weeks from process mapping to deployment, depending on the scope and complexity of the system. After your discovery call, we'll give you a clear timeline based on what your business actually needs, not a generic package."
      }
    },
    {
      "@type": "Question",
      "name": "Do I own the software once it's built?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The software we build is yours, your code, your data, nothing held hostage. Most clients keep us on for hosting, support and ongoing improvements since we know the system best, but that's a partnership you choose, not a contract that traps you."
      }
    },
    {
      "@type": "Question",
      "name": "Our processes aren't documented yet. Can you still help us?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "That's actually where most engagements start. Process mapping is a core part of how we work. We document your workflows and define SOPs with you before writing a single line of code, so the system fits how your business actually runs."
      }
    },
    {
      "@type": "Question",
      "name": "Do you just build the software, or help us roll it out too?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Deployment and team training are part of every project. A system only creates value once your team is actually using it, so we stay involved through go-live and the weeks after to make sure adoption sticks."
      }
    },
    {
      "@type": "Question",
      "name": "How is pricing structured for a custom software project?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pricing depends on the scope of the system, whether it's a single internal tool or a multi-location platform. We walk you through a clear, itemised estimate during your discovery call, with no hidden costs added later."
      }
    },
    {
      "@type": "Question",
      "name": "Can the system grow with us if we open new branches or franchise?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, that's exactly what we design for. Our platforms are built with multi-location and franchise growth in mind from day one, so adding a new branch means switching on a new outlet, not rebuilding your operations from scratch."
      }
    },
    {
      "@type": "Question",
      "name": "What happens after launch? Do you offer ongoing support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We offer post-launch support and are available to extend or adjust the system as your business evolves. A number of our clients started with a single project and have grown with us into long-term partnerships."
      }
    }
  ]
}`}
      </Script>
      <body className={inter.className}>
        {/* global grid texture - sits behind all content */}
        <div className="fixed inset-0 grid-pattern opacity-30 pointer-events-none -z-m10" />
        {children}
      </body>
    </html>
  );
}
