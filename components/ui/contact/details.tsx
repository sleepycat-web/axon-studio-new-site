import React from "react";
import { MapPin, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="text-white pt-8">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <dl className="grid grid-cols-2 gap-4">
          {/* Address */}
          <div className="bg-primary-400/10 rounded-3xl px-6 py-8 w-full">
            <dd className="flex flex-col lg:flex-row lg:items-center items-start gap-4">
              <MapPin className="text-primary-400 h-8 w-8" />
              <div className="text-base font-medium">
                <div className="flex flex-col md:flex-row md:gap-1">
                  <span>Sevoke Road,</span>
                  <span>Siliguri - 734001</span>
                </div>
              </div>
            </dd>
          </div>

          {/* Email */}
          <div className="bg-primary-400/10 rounded-3xl px-6 py-8 w-full">
            <dd className="flex flex-col lg:flex-row lg:items-center items-start gap-4">
              <MessageCircle className="text-primary-400 h-8 w-8" />
              <p className="text-base font-medium">
                <a href="mailto:info@axonstudio.tech">info@axonstudio.tech</a>
              </p>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
};

export default ContactSection;
