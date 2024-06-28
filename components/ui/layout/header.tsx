import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { ref: "", name: "Home", href: "/" },
  { ref: "", name: "About", href: "/about" },
  {
    ref: "",
    name: "Newsletter",
    href: "https://grow.axonstudio.tech/",
    target: "_blank",
  },
  { ref: "", name: "Contact", href: "/contact" },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="z-index-10">
      <header className={`transition}`}>
        <div className="mx-auto flex max-w-2xl items-center justify-between px-4 py-4 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8">
          {/* Brand logo */}
          <div className="flex">
            <Link href="/">
              <div className="group-focus-visible:outline-primary-200 rounded-md focus-visible:outline focus-visible:outline-2">
                <span className="sr-only">Axon</span>
                <Image
                  className="h-12 w-auto"
                  width={65}
                  height={40}
                  src="/assets/logo-inverted.png"
                  alt="Logo"
                />
              </div>
            </Link>
          </div>

          {/* Actions */}
          <div className="-mr-2 flex items-center space-x-2 sm:space-x-3">
            {/* Toggle menu */}
            <button
              type="button"
              className="text-primary-200 hover:bg-primary-400/10 ring-primary-950 inline-flex h-14 w-14 items-center justify-center rounded-full transition focus:outline-none focus-visible:ring-2"
              onClick={() => setOpen(!open)}
              aria-controls="website-menu"
              aria-expanded={open}
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                className={`h-8 w-8 ${open ? "hidden" : "block"}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M19 8H5V10H19V8ZM19 14H5V16H19V14Z"></path>
              </svg>
              <svg
                className={`h-8 w-8 ${open ? "block" : "hidden"}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Menu content */}
        <div
          className={`mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 ${
            open ? "block" : "hidden"
          }`}
          id="website-menu"
        >
          <div className="grid grid-cols-1 gap-16 pb-24 pt-6 lg:grid-cols-2 lg:pt-12">
            <div className="bg-primary-400/10 hidden items-center justify-center rounded-3xl px-6 py-8 lg:flex">
              <p className="text-primary-200/70 max-w-sm text-xl italic leading-loose">
                <span className="font-medium">Axon Studio</span> is an SEO and
                Web Development agency based in Siliguri. We work towards
                elevating your brand&apos;s potential one click at a time
              </p>
            </div>

            {/* Navigation */}
            <nav className="divide-primary-300/10 flex flex-col gap-1 divide-y">
              {links.map((link, index) => (
                <Link href={link.href} key={index}>
                  <div className="text-primary-200 group inline-flex py-6 text-3xl font-medium tracking-tight transition focus-visible:outline-none sm:py-8 sm:text-4xl cursor-pointer">
                    <div className="group-focus-visible:outline-primary-200 flex flex-1 items-center justify-between rounded-3xl group-focus-visible:outline group-focus-visible:outline-2 group-focus-visible:outline-offset-2">
                      <div className="flex items-center gap-6">
                        <span className="text-xs">{link.ref}</span>
                        <span className="group-hover:underline">
                          {link.name}
                        </span>
                      </div>
                      <svg
                        className="text-primary-400 h-6 w-6 sm:h-8 sm:w-8"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
