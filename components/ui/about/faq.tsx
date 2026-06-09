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
  const [selected, setSelected] = useState<number | null>(null); // Explicitly typing selected as number or null

  const toggle = (index: number) => {
    // Explicitly typing index as number
    setSelected(selected === index ? null : index);
  };

  return (
    <section className="py-20 sm:py-28 text-white relative">
      {/* Gradient divider */}
      <div className="absolute top-0 left-0 right-0 section-divider"></div>

      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid gap-16 lg:grid-cols-3 lg:gap-12">
          <div>
            <span className="text-sm font-medium uppercase tracking-widest text-accent-400">
              FAQ
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-neutral-400">
              Find answers to common questions about our services and processes.
            </p>
          </div>
          <div className="lg:col-span-2">
            <dl className="space-y-2">
              {questions.map((question, index) => (
                <div
                  key={question.id}
                  className={`glass-card rounded-2xl transition-all duration-300 ${selected === index
                      ? "border-accent-500/30 bg-accent-500/5"
                      : ""
                    }`}
                >
                  <dt>
                    <button
                      type="button"
                      className="group block w-full px-6 py-5 text-left transition focus-visible:outline-none"
                      aria-controls={question.id}
                      onClick={() => toggle(index)}
                      aria-expanded={selected === index}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-base group-hover:text-accent-300 transition-colors">{question.title}</span>
                        <span className="ml-6 flex h-8 w-8 items-center justify-center rounded-full bg-white/5 group-hover:bg-accent-500/20 transition-colors">
                          <svg
                            className={`text-accent-400 h-5 w-5 transform transition duration-300 ease-out ${selected === index ? "rotate-180" : "rotate-0"
                              }`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z" />
                          </svg>
                        </span>
                      </div>
                    </button>
                  </dt>
                  <dd
                    className="overflow-hidden transition-all duration-300"
                    id={question.id}
                    style={{
                      maxHeight: selected === index ? "500px" : "0",
                      opacity: selected === index ? 1 : 0
                    }}
                  >
                    <div className="px-6 pb-5 pr-12">
                      <p className="text-neutral-400 text-base leading-relaxed">
                        {question.answer}
                      </p>
                    </div>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
