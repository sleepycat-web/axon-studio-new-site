"use client";
import Link from "next/link";
import React from "react";
import { ArrowLeft } from "lucide-react";

export default function Page() {
  return (
    <div className="bg-neutral-950 text-white">
      <div className="navbar w-full ">
        <Link href="/" className="btn btn-ghost text-xl">
          <ArrowLeft />
        </Link>
      </div>
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="sm:pb:20 flex flex-col gap-4 pb-16 text-center">
          <h1 className="text-4xl font-medium tracking-tight sm:text-5xl">
            Terms and Conditions{" "}
          </h1>
          <p className="text-base">Last update: April 15, 2025</p>
        </div>
        <div>
          <p className="mb-4">
            These Terms and Conditions govern your use of the services provided
            by Axon Studio (&quot;we&quot; or &quot;us&quot;). By using our
            services, you agree to these terms and conditions.
          </p>

          <h2 className="mb-6 mt-12 text-xl font-medium sm:text-2xl">
            1. Services
          </h2>
          <p className="mb-6">
            We provide Website and App Development, Search Engine Optimisation (SEO), and
            Software as a Service (SaaS) solutions, including our TablePro
            platform. Our services may include, but are not limited to,
            designing and developing websites, modifying existing websites,
            providing SEO optimisation, developing strategies to improve website
            rankings, creating and publishing content, and offering access to
            our SaaS products.
          </p>

          <h2 className="mb-6 mt-12 text-xl font-medium sm:text-2xl">
            2. Payment{" "}
          </h2>
          <p className="mb-6">
            You agree to pay for our services in accordance with our pricing and
            payment policies. We may require payment upfront, on a monthly
            basis, or on a project basis, depending on the service. We reserve
            the right to modify our pricing and payment policies at any time.
          </p>

          <h2 className="mb-6 mt-12 text-xl font-medium sm:text-2xl">
            3. Intellectual Property{" "}
          </h2>
          <p className="mb-6">
            We retain all ownership and intellectual property rights to any
            materials we create for you as part of our services, including but
            not limited to website and website content, files and creatives made
            for the SEO process and our SaaS platforms like TablePro. You may use these materials solely for the
            purposes intended by the services, and you may not reproduce,
            modify, or distribute them without our prior consent.
          </p>

          <h2 className="mb-6 mt-12 text-xl font-medium sm:text-2xl">
            4. Confidentiality{" "}
          </h2>
          <p className="mb-6">
            We will keep all information provided to us by you confidential,
            including but not limited to, business plans, marketing strategies,
            and customer data. We will not disclose this information to any
            third party without your consent, except as required by law.
          </p>

          <h2 className="mb-6 mt-12 text-xl font-medium sm:text-2xl">
            5. Warranty and Limitation of Liability{" "}
          </h2>
          <p className="mb-6">
            We make no warranties or guarantees regarding the results of our
            services. We will use reasonable efforts to provide our services in
            a professional and timely manner, but we do not guarantee that our
            services will meet your expectations or requirements. Please refer
            to our refund policy for information on refunds for our services.
          </p>
          <p className="mb-6">
            In no event will we be liable for any indirect, consequential, or
            incidental damages arising from or in connection with our services,
            even if we have been advised of the possibility of such damages.
          </p>

          <h2 className="mb-6 mt-12 text-xl font-medium sm:text-2xl">
            6. Termination{" "}
          </h2>
          <p className="mb-6">
            Either party may terminate the services at any time upon written
            notice. If you terminate the services before the completion of a
            project, you will be responsible for paying for the services
            provided up to that point.
          </p>

          <h2 className="mb-6 mt-12 text-xl font-medium sm:text-2xl">
            7. Governing Law{" "}
          </h2>
          <p className="mb-6">
            These Terms and Conditions will be governed by and construed in
            accordance with the laws of India.
          </p>

          <h2 className="mb-6 mt-12 text-xl font-medium sm:text-2xl">
            8. Changes to These Terms and Conditions{" "}
          </h2>
          <p className="mb-6">
            We may update these Terms and Conditions from time to time. The most
            current version of the terms will always be available on our
            website. By continuing to use our services after any changes to the
            terms, you agree to the updated terms.
          </p>
          <h2 className="mb-6 mt-12 text-xl font-medium sm:text-2xl">
            Contact Us
          </h2>
          <p className="mb-4">
            If you have any questions or concerns about the Terms and Conditions
            or our services, please contact us at{" "}
            <a href="mailto:info@axonstudio.tech">info@axonstudio.tech</a>
          </p>
        </div>
      </div>
    </div>
  );
}
