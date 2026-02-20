import React from "react";
import Image from "next/image";
const testimonials = [
  // {
  //   name: "Government of Sikkim",
  //   description: "State Government, Sikkim",
  //   image: "/assets/sikkimlogo.png",
  //   message: "Axon Studio has been instrumental in modernizing our digital presence. Their expertise in web development and SEO has significantly improved our outreach and efficiency.",
  //   prominent: true,
  // },
  {
    name: "U First Coaching",
    description: "Life Coaching, United Kingdom",
    image: "/assets/ufirstlogo.png",
    message:
      "I had the pleasure of working with Axon Studio to redesign my coaching's landing page. The insights and the client acquisition funnel have been incredibly helpful for me.",
  },
  {
    name: "Clayo AI",
    description: "AI Call Screening Solutions, United States",
    image: "/assets/clayologo.jpg",
    message:
      "We were able to draw in the right audience and improve our online visibility thanks to Axon Studio's SEO work. Real results, a well-defined plan and seamless execution.",
  }, {
    name: "Chai Mine",
    description: "Cafe, Siliguri",
    image: "/assets/cmlogo.png",
    message:
      "We got connected by fate and good deeds. Amlan has always been in the most understanding position during my journey and helped me in the technicality of my business. Axon Studio❤️",
  },

  {
    name: "Astita Media",
    description: "Content Agency, Noida",
    image: "/assets/astitalogo.png",
    message:
      "The Axon Studio team did a fantastic job with our website. Super easy to work with, quick delivery, and the end result fits our brand perfectly.",
  },

  {
    name: "3 Hour Creator",
    description: "Creative Studio, Noida",
    image: "/assets/3hclogo.png",
    message:
      "I had called Amlan one day before our opening and the very next morning our website is live. No one can match Team Axon's speed.",
  },

  {
    name: "Shree Shyam Mobile",
    description: "Mobile Store, Siliguri",
    image: "/assets/ssmlogo.jpg",
    message:
      "Axon Studio brings your imagination to light with minimal follow ups, they do a great job and are open to further service and developments with no delay thats the best part.",
  },
  {
    name: "Tukuche",
    description: "Restaurant, Siliguri",
    image: "/assets/tklogo.png",
    message:
      "Table Pro has helped us streamline our management and daily operations. It's easy to use and has helped us deliver exceptional service.",
  },
];

const Reviews = () => {
  return (
    <section className="py-16 sm:py-20 border-y border-primary-300/10 text-white">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex flex-col items-center gap-12 sm:gap-16">
          <h2 className="mx-auto max-w-xl text-center text-3xl font-medium tracking-tight sm:text-4xl">
            What our clients say
          </h2>
          <div className="grid gap-8 lg:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <figure
                key={index}
                // className={`transition-colors rounded-3xl p-6 flex flex-col items-center text-center gap-6
                //   ${testimonial.prominent ? 'bg-gray-900 hover:bg-gray-800/60 col-span-2' : 'bg-primary-400/10 hover:bg-primary-400/20'}
                //   `}
                className={`transition-colors rounded-3xl p-6 flex flex-col items-center text-center gap-6 bg-primary-400/10  hover:bg-primary-400/20`}
              >
                <div
                  className="flex flex-row gap-2"
                  aria-label="5 out of 5 stars"
                >
                  {[...Array(5)].map((_, starIndex) => (
                    <svg
                      key={starIndex}
                      className="h-5 w-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-primary-200/70 text-base sm:text-lg italic leading-relaxed">
                  <p>{testimonial.message}</p>
                </blockquote>
                <figcaption className="flex flex-col items-center gap-3">
                  <Image
                    className="mx-auto rounded-full ring-1 ring-primary-300/20"
                    src={testimonial.image}
                    alt={`${testimonial.name} logo`}
                    width={48}
                    height={48}
                  />
                  <div>
                    <div className="text-base font-medium">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-primary-200/70">
                      {testimonial.description}
                    </div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
