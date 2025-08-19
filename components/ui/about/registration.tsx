import React from 'react'
import Image from 'next/image';
const Registration = () => {
  return (
    <div>
      {" "}
      <section className="py-12 sm:py-20 border-y border-primary-300/10">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="flex flex-col items-center gap-8 text-center">
            <h2 className="text-white text-3xl font-medium tracking-tight sm:text-4xl">
              Officially Registered
            </h2>
            <p className="text-primary-200/70 max-w-2xl text-base sm:text-lg">
              Axon Studio is proudly registered with the Ministry of MSME,
              Government of India. Ensuring our commitment to legal compliance
              and business excellence.
            </p>
            <div className="flex flex-col items-center gap-6 mt-4">
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
      </section>
    </div>
  );
}

export default Registration