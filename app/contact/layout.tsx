import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Axon Studio",
  description: "Contact us today to get started on your online journey.",
  alternates: {
    canonical: "https://axonstudio.in/contact",
  },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
