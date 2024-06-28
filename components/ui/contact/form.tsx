import { useState, FormEvent } from "react";

const ContactForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateEmail = (email: string) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const newErrors: { [key: string]: string } = {};

    if (!fullName) {
      newErrors.fullName = "Name is required.";
    }
    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!validateEmail(email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!phoneNumber) {
      newErrors.phoneNumber = "Phone number is required.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Reset form fields and errors
    setFullName("");
    setEmail("");
    setPhoneNumber("");
    setMessage("");
    setErrors({});

    // API call to submit form data to MongoDB
    try {
      const response = await fetch("/api/submitForm2", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          email,
          phoneNumber,
          message,
        }),
      });

      if (response.status === 201) {
        // Show success modal if the form submission is successful
        console.log("Form submitted successfully");
        console.log("Form data:", {
          Name: fullName,
          Email: email,
          Phone: phoneNumber,
          Message: message,
        });
        const modal = document.getElementById(
          "my_modal_1"
        ) as HTMLDialogElement | null;
        if (modal) {
          modal.showModal();
        }
      } else {
        // Handle errors if the form submission is not successful
        const result = await response.json();
        console.error("Form submission failed:", result);
      }
    } catch (error) {
      // Handle errors if the API call fails
      console.error("Error submitting form:", error);
    }

   
    
   
  };

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col gap-4 sm:gap-6">
            <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
              Let&apos;s work together
            </h2>
            <p className="text-primary-200/70 max-w-lg text-lg sm:text-xl">
              We&apos;d love to learn more about you and what we can build
              together.
            </p>
          </div>
          <form
            id="contact"
            className="mt-3  flex flex-col gap-y-6"
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor="full-name" className="sr-only">
                Full Name
              </label>
              <input
                type="text"
                name="full-name"
                id="full-name"
                autoComplete="name"
                className="hover:ring-primary-400 focus:ring-primary-400 bg-neutral-950 ring-primary-200/40 placeholder:text-primary-200/60 block w-full appearance-none rounded-md border-0 px-4 py-4 text-base ring-1 transition focus:outline-none focus:ring-2"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                aria-invalid={errors.fullName ? "true" : undefined}
                aria-describedby={
                  errors.fullName ? "full-name-error" : undefined
                }
              />
              {errors.fullName && (
                <p id="full-name-error" className="text-red-500 mt-2">
                  {errors.fullName}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="hover:ring-primary-400  focus:ring-primary-400 bg-neutral-950 ring-primary-200/40 placeholder:text-primary-200/60 block w-full appearance-none rounded-md border-0 px-4 py-4 text-base ring-1 transition focus:outline-none focus:ring-2"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-invalid={errors.email ? "true" : undefined}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p id="email-error" className="text-red-500 mt-2">
                  {errors.email}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="phone-number" className="sr-only">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone-number"
                id="phone-number"
                autoComplete="tel"
                className="hover:ring-primary-400 focus:ring-primary-400 bg-neutral-950 ring-primary-200/40 placeholder:text-primary-200/60 block w-full appearance-none rounded-md border-0 px-4 py-4 text-base ring-1 transition focus:outline-none focus:ring-2"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                aria-invalid={errors.phoneNumber ? "true" : undefined}
                aria-describedby={
                  errors.phoneNumber ? "phone-number-error" : undefined
                }
              />
              {errors.phoneNumber && (
                <p id="phone-number-error" className="text-red-500 mt-2">
                  {errors.phoneNumber}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={3}
                className="hover:ring-primary-400 focus:ring-primary-400 bg-neutral-950 ring-primary-200/40 placeholder:text-primary-200/60 block w-full appearance-none rounded-md border-0 px-4 py-4 text-base ring-1 transition focus:outline-none focus:ring-2"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                aria-invalid={errors.message ? "true" : undefined}
                aria-describedby={errors.message ? "message-error" : undefined}
              ></textarea>
            </div>
            <div>
              <button
                className="bg-primary-400 hover:bg-primary-300 focus-visible:outline-primary-400 text-primary-950 inline-flex items-center justify-center rounded-full border border-transparent px-5 py-3 text-base font-medium  transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <dialog id="my_modal_1" className="modal ">
        <div className="modal-box bg-neutral-900">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Thanks for contacting us, we will get back to you shortly.
          </p>
          <div className="modal-action">
            <button
              className="bg-neutral-800 hover:bg-neutral-700 text-white btn"
              onClick={() => {
                const modal = document.getElementById(
                  "my_modal_1"
                ) as HTMLDialogElement | null;
                if (modal) {
                  modal.close();
                }
              }}
            >
              Close
            </button>
          </div>
        </div>
      </dialog>
    </section>
  );
};

export default ContactForm;
