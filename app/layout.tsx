import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Axon Studio | Software Development Firm in Siliguri",
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
    title: "Axon Studio | Software Development Firm in Siliguri",
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
    title: "Axon Studio | Software Development Firm in Siliguri",
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
      <Script id="ld-organization" type="application/ld+json">
        {`
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Axon Studio",
  "alternateName": "Web Axon",
  "description": "A leading software development firm in Siliguri offering custom solutions for web and mobile applications.",
  "foundingDate": "2024-01-01", 
  "url": "https://axonstudio.in",
  "logo": {
    "@type": "ImageObject",
    "url": "https://axonstudio.in/assets/axon-studio-logo.png",
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
  "knowsAbout": ["Web Development", "App Development", "UI/UX Design", "SEO"],
  "sameAs": [
    "https://twitter.com/WebAxon",
    "https://www.instagram.com/web_axon/",
    "https://www.linkedin.com/company/web-axon",
    "https://www.facebook.com/people/Axon-Studio/61557992653296/",
    "https://www.youtube.com/@Web-Axon"
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
  "slogan": "Elevating your brand's potential one click at a time"
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
    "https://axonstudio.in/assets/ogi.jpg"
  ],
  "description": "A leading software development firm in Siliguri offering custom solutions for web and mobile applications.",
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
  "url": "https://axonstudio.in",
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
    "https://www.instagram.com/web_axon/",
    "https://www.linkedin.com/company/web-axon",
    "https://www.facebook.com/people/Axon-Studio/61557992653296/",
    "https://www.youtube.com/@Web-Axon"
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
      "item": "https://axonstudio.in"
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
      "name": "Are there any hidden costs I should be aware of?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Transparency is paramount to us. We strive to be upfront about all costs associated with our services. There are no hidden costs, and we'll provide a clear breakdown of pricing before any work begins."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer discounts for long-term contracts or bundled services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer discounts for clients who commit to long-term partnerships or opt for bundled services. Our goal is to reward loyalty and provide added value to our clients who choose to invest in ongoing collaboration."
      }
    },
    {
      "@type": "Question",
      "name": "How do I pay for your services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We accept various payment methods including online payments, bank transfers, and other convenient options. Our invoicing process is straightforward, and we will work with you to establish a payment schedule that suits your preferences."
      }
    },
    {
      "@type": "Question",
      "name": "What happens if I need to make changes to my service package?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We understand that business needs may evolve over time. If you need to make changes to your service package, simply reach out to us, and we'll discuss the best course of action. Depending on the nature of the changes, there may be adjustments to pricing or timelines."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer refunds if I'm not satisfied with the results?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We strive to provide high-quality services to our clients. However, we understand that sometimes a refund may be necessary. Please refer to the Refund Policy to understand about the refund process and the conditions under which refunds may be granted."
      }
    },
    {
      "@type": "Question",
      "name": "Can I upgrade or downgrade my service package as my needs change?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, you can upgrade or downgrade your service package as needed. We understand that business priorities may shift, and we're here to accommodate changes to your service level. We'll work with you to make the transition smooth and seamless."
      }
    },
    {
      "@type": "Question",
      "name": "How soon can I expect to see results from your services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "While the timeline for seeing results may vary depending on the nature of the project and other factors, we're committed to delivering tangible outcomes in a timely manner. During our initial consultation, we'll discuss realistic expectations and provide insights into typical timelines for achieving results."
      }
    }
  ]
}`}
      </Script>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
