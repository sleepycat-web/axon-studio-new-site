import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Script from "next/script";
export const metadata: Metadata = {
  title: "Axon Studio | Custom Software Solutions for Businesses",
  description:
    "Axon Studio builds software platforms, automation and high-converting websites that help growing businesses standardise operations and scale.",
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
      "Software platforms, automation and high-converting websites that help growing businesses scale.",
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
      "Software platforms, automation and high-converting websites that help growing businesses scale.",
    images: ["https://axonstudio.in/assets/screenshots/ogi.jpg"],
  },
};

const sameAs = [
  "https://x.com/WebAxon",
  "https://www.instagram.com/theaxonstudio/",
  "https://www.linkedin.com/company/the-axon-studio/",
  "https://www.facebook.com/people/Axon-Studio/61557992653296/",
  "https://www.crunchbase.com/organization/axon-studio",
];

const address = {
  "@type": "PostalAddress",
  streetAddress: "Sevoke Road",
  addressLocality: "Siliguri",
  addressRegion: "West Bengal",
  postalCode: "734001",
  addressCountry: "IN",
};

const description =
  "Axon Studio builds custom software, automation, and high-converting websites that help growing businesses standardise operations and scale. Headquartered in Siliguri, India, with clients across India, the UK, and the US.";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Axon Studio",
  alternateName: "The Axon Studio",
  description,
  foundingDate: "2024-01-01",
  url: "https://axonstudio.in/",
  logo: {
    "@type": "ImageObject",
    url: "https://axonstudio.in/assets/logos/axon-studio-logo.png",
    width: "180",
    height: "60",
  },
  address,
  email: "info@axonstudio.in",
  founder: [
    {
      "@type": "Person",
      name: "Amlan Sarmah",
      jobTitle: "Founder",
      url: "https://www.instagram.com/whyamlan/",
    },
  ],
  knowsAbout: [
    "Web Development",
    "App Development",
    "UI/UX Design",
    "SEO",
    "Enterprise Software",
    "SaaS Solutions",
  ],
  sameAs,
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "info@axonstudio.in",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
  ],
  slogan: "Custom software, automation and websites for growing businesses.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Axon Studio",
  image: ["https://axonstudio.in/assets/screenshots/ogi.jpg"],
  description,
  address,
  email: "info@axonstudio.in",
  url: "https://axonstudio.in/",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  paymentAccepted: ["Cash", "UPI", "Bank Transfer"],
  currenciesAccepted: "INR",
  priceRange: "₹₹",
  sameAs,
};

const faqs = [
  {
    q: "How long does it take to build a custom system for my business?",
    a: "Most projects take between 4 to 8 weeks from process mapping to deployment, depending on the scope and complexity of the system. After your discovery call, we'll give you a clear timeline based on what your business actually needs, not a generic package.",
  },
  {
    q: "Do I own the software once it's built?",
    a: "Yes. The software we build is yours, your code, your data, nothing held hostage. Most clients keep us on for hosting, support and ongoing improvements since we know the system best, but that's a partnership you choose, not a contract that traps you.",
  },
  {
    q: "Our processes aren't documented yet. Can you still help us?",
    a: "That's actually where most engagements start. Process mapping is a core part of how we work. We document your workflows and define SOPs with you before writing a single line of code, so the system fits how your business actually runs.",
  },
  {
    q: "Do you just build the software, or help us roll it out too?",
    a: "Deployment and team training are part of every project. A system only creates value once your team is actually using it, so we stay involved through go-live and the weeks after to make sure adoption sticks.",
  },
  {
    q: "How is pricing structured for a custom software project?",
    a: "Pricing depends on the scope of the system, whether it's a single internal tool or a multi-location platform. We walk you through a clear, itemised estimate during your discovery call, with no hidden costs added later.",
  },
  {
    q: "Can the system grow with us if we open new branches or franchise?",
    a: "Yes, that's exactly what we design for. Our platforms are built with multi-location and franchise growth in mind from day one, so adding a new branch means switching on a new outlet, not rebuilding your operations from scratch.",
  },
  {
    q: "What happens after launch? Do you offer ongoing support?",
    a: "Yes. We offer post-launch support and are available to extend or adjust the system as your business evolves. A number of our clients started with a single project and have grown with us into long-term partnerships.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const schemas = [
  { id: "ld-organization", data: organizationSchema },
  { id: "ld-localbusiness", data: localBusinessSchema },
  { id: "ld-faq", data: faqSchema },
];

// escape "<" so no string in the schema can close the script tag early
const toJsonLd = (data: object) =>
  JSON.stringify(data).replace(/</g, "\\u003c");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-neutral-950 overflow-x-hidden">
      <body className={`${GeistSans.variable} font-sans`}>
        {/* plain script tags so the schema is in the server HTML, not injected after hydration */}
        {schemas.map(({ id, data }) => (
          <script
            key={id}
            id={id}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: toJsonLd(data) }}
          />
        ))}
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
        {/* global grid texture - sits behind all content */}
        <div className="fixed inset-0 grid-pattern opacity-30 pointer-events-none -z-m10" />
        {children}
      </body>
    </html>
  );
}
