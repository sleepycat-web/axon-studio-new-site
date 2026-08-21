import { useState } from "react";

interface Question {
  id: string;
  title: string;
  answer: string;
}

const questions: Question[] = [
  {
    id: "faq-1",
    title: "How long does it take to build a custom system for my business?",
    answer:
      "Most projects take between 4 to 8 weeks from process mapping to deployment, depending on the scope and complexity of the system. After your discovery call, we'll give you a clear timeline based on what your business actually needs, not a generic package.",
  },
  {
    id: "faq-2",
    title: "Do I own the software once it's built?",
    answer:
      "Yes. The software we build is yours, your code, your data, nothing held hostage. Most clients keep us on for hosting, support and ongoing improvements since we know the system best, but that's a partnership you choose, not a contract that traps you.",
  },
  {
    id: "faq-3",
    title: "Our processes aren't documented yet. Can you still help us?",
    answer:
      "That's actually where most engagements start. Process mapping is a core part of how we work. We document your workflows and define SOPs with you before writing a single line of code, so the system fits how your business actually runs.",
  },
  {
    id: "faq-4",
    title: "Do you just build the software, or help us roll it out too?",
    answer:
      "Deployment and team training are part of every project. A system only creates value once your team is actually using it, so we stay involved through go-live and the weeks after to make sure adoption sticks.",
  },
  {
    id: "faq-5",
    title: "How is pricing structured for a custom software project?",
    answer:
      "Pricing depends on the scope of the system, whether it's a single internal tool or a multi-location platform. We walk you through a clear, itemised estimate during your discovery call, with no hidden costs added later.",
  },
  {
    id: "faq-6",
    title: "Can the system grow with us if we open new branches or franchise?",
    answer:
      "Yes, that's exactly what we design for. Our platforms are built with multi-location and franchise growth in mind from day one, so adding a new branch means switching on a new outlet, not rebuilding your operations from scratch.",
  },
  {
    id: "faq-7",
    title: "What happens after launch? Do you offer ongoing support?",
    answer:
      "Yes. We offer post-launch support and are available to extend or adjust the system as your business evolves. A number of our clients started with a single project and have grown with us into long-term partnerships.",
  },
];

const Faq = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const toggle = (index: number) => {
    setSelected(selected === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 text-white relative">
      <div className="absolute top-0 left-0 right-0 section-divider"></div>
      
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-12">
          <div className="grid grid-cols-1 items-start gap-8 md:gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="flex flex-col gap-4 lg:sticky lg:top-8 lg:col-span-4">
              <span className="text-accent-400 text-xs font-semibold uppercase tracking-widest">
                FAQ
              </span>
              <h2 className="text-white text-3xl font-medium tracking-tight md:text-4xl">
                Frequently Asked Questions
              </h2>
              <div className="text-neutral-400 text-base leading-relaxed md:text-lg">
                Find answers to common questions about our services and processes.
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="w-full">
                {questions.map((faq, index) => (
                  <div
                    key={faq.id}
                    className="border-b border-white/10 px-0 last:border-b-0 group"
                  >
                    <button
                      type="button"
                      className="flex items-center w-full py-5 text-left transition focus-visible:outline-none"
                      aria-controls={faq.id}
                      onClick={() => toggle(index)}
                      aria-expanded={selected === index}
                    >
                      <div className="flex flex-1 items-center gap-6">
                        <span className="text-white text-left text-lg font-medium transition-colors group-hover:text-accent-300 md:text-xl">
                          {faq.title}
                        </span>
                      </div>
                      <div className="text-neutral-500 ml-auto flex h-6 w-6 shrink-0 items-center justify-center transition-transform duration-200 group-hover:text-accent-400">
                        {selected === index ? (
                          <svg className="block h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                          </svg>
                        ) : (
                          <svg className="block h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                        )}
                      </div>
                    </button>
                    <div
                      className="overflow-hidden transition-all duration-300"
                      id={faq.id}
                      style={{
                        maxHeight: selected === index ? "500px" : "0",
                        opacity: selected === index ? 1 : 0
                      }}
                    >
                      <div className="pb-6 lg:pr-12 max-w-3xl">
                        <p className="text-neutral-400 text-base leading-relaxed md:text-lg">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default Faq;
