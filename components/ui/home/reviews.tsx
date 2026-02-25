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
      "Table Pro has streamlined our management and SOP. It's very user friendly and has helped our staff deliver exceptional service even during rush hours.",
  },
];

const Reviews = () => {
  return (
    <section className="py-20 sm:py-28 relative text-white overflow-hidden">
      {/* Gradient dividers */}
      <div className="absolute top-0 left-0 right-0 section-divider"></div>
      <div className="absolute bottom-0 left-0 right-0 section-divider"></div>

      {/* Background orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 orb-gradient orb-secondary opacity-30"></div>
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 orb-gradient orb-primary opacity-30"></div>

      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 relative">
        <div className="flex flex-col items-center gap-16 sm:gap-20">
          {/* Section header */}
          <div className="text-center">
            <span className="text-sm font-medium uppercase tracking-widest text-accent-400">
              Testimonials
            </span>
            <h2 className="mt-4 mx-auto max-w-3xl text-center text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Trusted by <span className="gradient-text-subtle">Industry Leaders</span>
            </h2>
            <p className="mt-4 text-neutral-400 text-lg max-w-2xl mx-auto">
              See what our clients have to say about working with us.
            </p>
          </div>

          {/* Testimonials grid */}
          <div className="grid gap-6 lg:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <figure
                key={index}
                className="glass-card glass-card-hover rounded-3xl p-8 flex flex-col gap-6 group"
              >
                {/* Stars */}
                <div className="flex items-center gap-3">
                  <div
                    className="flex flex-row gap-1"
                    aria-label="5 out of 5 stars"
                  >
                    {[...Array(5)].map((_, starIndex) => (
                      <svg
                        key={starIndex}
                        className="h-5 w-5 text-amber-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z" />
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-neutral-300 text-base sm:text-lg leading-relaxed flex-1">
                  <p>&ldquo;{testimonial.message}&rdquo;</p>
                </blockquote>

                {/* Author */}
                <figcaption className="flex items-center gap-4 pt-4 border-t border-white/5">
                  <Image
                    className="rounded-full ring-2 ring-accent-500/20"
                    src={testimonial.image}
                    alt={`${testimonial.name} logo`}
                    width={48}
                    height={48}
                  />
                  <div>
                    <div className="text-base font-semibold group-hover:text-accent-300 transition-colors">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-neutral-500">
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
