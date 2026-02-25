"use client"; // components/Footer.tsx
import React from "react";
import Image from "next/image";
import { PlaceholdersAndVanishInput } from "../aceternity/placeholders-and-vanish-input";
import Link from "next/link";

interface FooterLink {
  name: string;
  href: string;
  isExternal: boolean;
}

interface LinkGroup {
  header: string;
  links: FooterLink[];
}

const bottomLinks: LinkGroup[] = [
  {
    header: "Social",
    links: [
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/company/the-axon-studio/",
        isExternal: true,
      },
      {
        name: "Instagram",
        href: "https://www.instagram.com/theaxonstudio/",
        isExternal: true,
      },
      {
        name: "Twitter",
        href: "https://twitter.com/WebAxon",
        isExternal: true,
      },
      {
        name: "Facebook",
        href: "https://www.facebook.com/people/Axon-Studio/61557992653296/",
        isExternal: true,
      },
    ],
  },
  {
    header: "Legal",
    links: [
      {
        name: "Privacy Policy",
        href: "/privacy",
        isExternal: false,
      },
      {
        name: "Refund Policy",
        href: "/refund",
        isExternal: false,
      },
      {
        name: "Terms and Conditions",
        href: "/terms",
        isExternal: false,
      },
    ],
  },
];

const Footer: React.FC = () => {
  const placeholders = ["Enter your email"];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <footer
      className="relative mt-20 lg:mt-24 overflow-hidden"
      aria-labelledby="footer-heading"
    >
      {/* Top border accent line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-accent-500/40 to-transparent"></div>

      {/* Footer background — darker than body to visually separate */}
      <div className="absolute inset-0 bg-neutral-950"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/60 via-neutral-950 to-black"></div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30"></div>

      {/* Decorative orbs */}
      <div className="absolute bottom-0 -left-32 w-96 h-96 orb-gradient orb-primary opacity-10"></div>
      <div className="absolute top-0 -right-32 w-80 h-80 orb-gradient orb-secondary opacity-10"></div>

      <div className="relative py-16 lg:py-20">

        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>

        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 relative">
          <div className="flex flex-col justify-between gap-16 sm:gap-20 lg:flex-row">
            <div className="flex max-w-sm flex-col items-start gap-8">
              <Image
                className="h-12 w-auto"
                width={65}
                height={40}
                src="/assets/logo-inverted.png"
                alt="Logo"
              />
              <p className="text-neutral-400 text-base leading-relaxed">
                Axon Studio is a premier Software Development firm based in
                Noida, building systems that power business growth.
              </p>
              <p className="text-neutral-600 text-sm">© 2024 Axon Studio. All rights reserved.</p>
            </div>

            <div className="text-center block lg:hidden">
              <div className="flex items-center justify-center">
                <p className="text-base text-white pb-4 font-semibold flex items-center">
                  Subscribe to our Newsletter
                </p>
              </div>

              <div className="relative flex flex-col items-center">
                <PlaceholdersAndVanishInput
                  placeholders={placeholders}
                  onChange={handleChange}
                  onSubmit={onSubmit}
                />
              </div>
            </div>

            {/* Bottom links */}
            <div className="text-white grid max-w-xl flex-1 grid-cols-2  sm:grid-cols-2">
              {bottomLinks.map((group) => (
                <div key={group.header} className="flex flex-col gap-5">
                  <p className="text-sm font-semibold uppercase tracking-wider text-accent-400">{group.header}</p>
                  <ul role="list" className="flex flex-col gap-4">
                    {group.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="inline-flex items-center gap-1.5 text-base text-neutral-400 hover:text-white transition-colors duration-200"
                          target={link.isExternal ? "_blank" : undefined}
                          rel={
                            link.isExternal ? "noopener noreferrer" : undefined
                          }
                        >
                          {link.name}
                          {link.isExternal && (
                            <svg
                              className="h-3.5 w-3.5 opacity-50"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z" />
                            </svg>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="hidden lg:block max-w-xs">
              <div className="relative">
                <p className="text-base text-white pb-4 font-semibold">
                  Subscribe to our Newsletter
                </p>
                <p className="text-sm text-neutral-500 pb-6">
                  Get the latest updates on our projects and industry insights.
                </p>
              </div>
              <PlaceholdersAndVanishInput
                placeholders={placeholders}
                onChange={handleChange}
                onSubmit={onSubmit}
              />
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
