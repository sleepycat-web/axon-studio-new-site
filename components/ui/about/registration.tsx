import React from 'react'
import Image from 'next/image';
const Registration = () => {
  return (
    <div>
      <section className="py-20 sm:py-28 relative overflow-hidden">
        {/* Gradient dividers */}
        <div className="absolute top-0 left-0 right-0 section-divider"></div>
        <div className="absolute bottom-0 left-0 right-0 section-divider"></div>

        {/* Background orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] orb-gradient orb-primary opacity-20"></div>

        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 relative">
          <div className="flex flex-col items-center gap-10 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card">
              <svg className="w-4 h-4 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <span className="text-sm text-neutral-300 font-medium">Government Verified</span>
            </div>

            <h2 className="text-white text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Officially <span className="gradient-text-subtle">Registered</span>
            </h2>
            <p className="text-neutral-400 max-w-2xl text-base sm:text-lg leading-relaxed">
              Axon Studio is proudly registered with the Ministry of MSME,
              Government of India. Ensuring our commitment to legal compliance
              and business excellence.
            </p>
            <div className="flex flex-col items-center gap-8 mt-4">
              <div className="glass-card rounded-2xl p-6">
                <Image
                  className="h-auto w-full max-w-md rounded-sm"
                  src="/assets/msme.png"
                  alt="MSME Registration Logo"
                  width={150}
                  height={200}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Registration