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
    <section className="py-16 sm:py-20 text-white">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">
          <div>
            <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
              Frequently asked questions
            </h2>
          </div>
          <div className="lg:col-span-2">
            <dl className="-mt-3">
              {questions.map((question, index) => (
                <div
                  key={question.id}
                  className={`rounded-3xl px-4 transition ${
                    selected === index
                      ? "bg-primary-400/10"
                      : ""
                  }`}
                >
                  <dt
                    className={`border-b text-lg transition ${
                      selected === index || selected === index + 1
                        ? "border-transparent"
                        : "border-primary-800/70"
                    }`}
                  >
                    <button
                      type="button"
                      className="group block w-full py-6 text-left transition focus-visible:outline-none"
                      aria-controls={question.id}
                      onClick={() => toggle(index)}
                      aria-expanded={selected === index}
                    >
                      <div className="group-focus-visible:outline-primary-200 flex items-center justify-between rounded-3xl group-focus-visible:outline group-focus-visible:outline-2 group-focus-visible:outline-offset-2">
                        <span className="font-medium">{question.title}</span>
                        <span className="ml-6 flex h-7 items-center">
                          <svg
                            className={`text-primary-400 h-6 w-6 transform transition duration-200 ease-in-out ${
                              selected === index ? "-rotate-180" : "rotate-0"
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
                    className="pb-6 pr-6"
                    id={question.id}
                    style={{ display: selected === index ? "block" : "none" }}
                  >
                    <p className="text-primary-200/70 text-base">
                      {question.answer}
                    </p>
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
