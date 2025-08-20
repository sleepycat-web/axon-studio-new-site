"use client"; // components/Footer.tsx
import React from "react";
import Image from "next/image";
import { PlaceholdersAndVanishInput } from "../aceternity/placeholders-and-vanish-input";
import Link from "next/link";

interface Link {
  name: string;
  href: string;
  isExternal: boolean;
}

interface LinkGroup {
  header: string;
  links: Link[];
}

const bottomLinks: LinkGroup[] = [
  {
    header: "Social",
    links: [
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/company/web-axon",
        isExternal: true,
      },
      {
        name: "Instagram",
        href: "https://www.instagram.com/web_axon/",
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
      {
        name: "YouTube",
        href: "https://www.youtube.com/@Web-Axon",
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
      className="bg-primary-400/10 mt-16  py-16 lg:mt-20 lg:py-20"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex flex-col justify-between gap-12 sm:gap-16 lg:flex-row">
          <div className="flex max-w-sm flex-col items-start gap-6 sm:gap-8">
            <Image
              className="h-12 w-auto"
              width={65}
              height={40}
              src="/assets/logo-inverted.png"
              alt="Logo"
            />
            <p className="text-primary-200/70 text-base">
              Axon Studio is a premier Software Development firm based in
              Siliguri.
            </p>
            <p className="text-primary-200/70 text-sm">© 2024 Axon Studio</p>
          </div>

          <div className="text-center  block lg:hidden">
            <div className="flex items-center justify-center">
              <p
                 className="text-base text-white pb-4 font-medium flex items-center  "
              >
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
          <div className="text-white grid max-w-xl flex-1 grid-cols-2 gap-8 sm:grid-cols-2">
            {bottomLinks.map((group) => (
              <div key={group.header} className="flex flex-col gap-4">
                <p className="text-base font-medium">{group.header}</p>
                <ul role="list" className="flex flex-col gap-3">
                  {group.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="focus-visible:outline-primary-200 inline-flex items-center gap-1 rounded-md text-base hover:underline focus-visible:outline focus-visible:outline-2"
                        target={link.isExternal ? "_blank" : undefined}
                        rel={
                          link.isExternal ? "noopener noreferrer" : undefined
                        }
                      >
                        {link.name}
                        {link.isExternal && (
                          <svg
                            className="h-4 w-4"
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
          <div className="hidden lg:block">
            <div className="relative">
              <p
                 className="text-base text-white pb-4 font-medium flex items-center  "
              >
                Subscribe to our Newsletter
               
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
    </footer>
  );
};

export default Footer;
