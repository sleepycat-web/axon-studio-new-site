import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Contact | Axon Studio",
  description: "Contact us today to get started on your online journey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="bg-neutral-950" lang="en">
      <head>
        <meta
          name="description"
          content="Contact us today to get started on your online journey."
        />
      </head>
      <link
        rel="canonical"
        href="https://axonstudio.tech/contact"
        key="canonical"
      />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
