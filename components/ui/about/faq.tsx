import { useState } from "react";

interface Question {
  id: string;
  title: string;
  answer: string;
}

const questions: Question[] = [
  {
    id: "faq-1",
    title: "Are there any hidden costs I should be aware of?",
    answer:
      "Transparency is paramount to us. We strive to be upfront about all costs associated with our services. There are no hidden costs, and we'll provide a clear breakdown of pricing before any work begins.",
  },
  {
    id: "faq-2",
    title:
      "Do you offer discounts for long-term contracts or bundled services?",
    answer:
      "Yes, we offer discounts for clients who commit to long-term partnerships or opt for bundled services. Our goal is to reward loyalty and provide added value to our clients who choose to invest in ongoing collaboration.",
  },
  {
    id: "faq-3",
    title: "How do I pay for your services?",
    answer:
      "We accept various payment methods including online payments, bank transfers, and other convenient options. Our invoicing process is straightforward, and we will work with you to establish a payment schedule that suits your preferences.",
  },
  {
    id: "faq-4",
    title: "What happens if I need to make changes to my service package?",
    answer:
      "We understand that business needs may evolve over time. If you need to make changes to your service package, simply reach out to us, and we'll discuss the best course of action. Depending on the nature of the changes, there may be adjustments to pricing or timelines.",
  },
  {
    id: "faq-5",
    title: "Do you offer refunds if I'm not satisfied with the results?",
    answer:
      "We strive to provide high-quality services to our clients. However, we understand that sometimes a refund may be necessary. Please refer to the Refund Policy to understand about the refund process and the conditions under which refunds may be granted.",
  },
  {
    id: "faq-6",
    title: "Can I upgrade or downgrade my service package as my needs change?",
    answer:
      "Yes, you can upgrade or downgrade your service package as needed. We understand that business priorities may shift, and we're here to accommodate changes to your service level. We'll work with you to make the transition smooth and seamless.",
  },
  {
    id: "faq-7",
    title: "How soon can I expect to see results from your services?",
    answer:
      "While the timeline for seeing results may vary depending on the nature of the project and other factors, we're committed to delivering tangible outcomes in a timely manner. During our initial consultation, we'll discuss realistic expectations and provide insights into typical timelines for achieving results.",
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
