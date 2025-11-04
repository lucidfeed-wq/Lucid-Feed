import React from "react";

function Contact11() {
  return (
    <section className="relative z-10 overflow-hidden bg-white py-16 dark:bg-dark md:py-20 lg:py-28">
      <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 dark:opacity-20">
        <img
          src="./images/contact/contact-11/grid-shape.svg"
          alt="grid-shape"
        />
      </div>
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="mb-3 text-4xl font-bold text-dark dark:text-white md:text-5xl">
            Get in Touch
          </h2>
          <p className="text-lg text-body-color dark:text-dark-6">
            We’ll get back to you within 24 hours.
          </p>
        </div>

        <div className="mx-auto w-full max-w-[540px]">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 sm:w-1/2">
              <div className="mb-6">
                <label
                  for=""
                  className="mb-2.5 block text-base font-medium text-dark dark:text-white"
                >
                  First name
                </label>
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full rounded-lg border border-stroke bg-transparent px-5 py-3 text-dark placeholder-dark-5 outline-hidden duration-200 focus:border-primary dark:border-dark-3 dark:text-white dark:focus:border-primary"
                />
              </div>
            </div>
            <div className="w-full px-4 sm:w-1/2">
              <div className="mb-6">
                <label
                  for=""
                  className="mb-2.5 block text-base font-medium text-dark dark:text-white"
                >
                  Last name
                </label>
                <input
                  type="text"
                  placeholder="Last name"
                  className="h-[46px] w-full rounded-lg border border-stroke bg-transparent px-5 py-3 text-dark placeholder-dark-5 outline-hidden duration-200 focus:border-primary dark:border-dark-3 dark:text-white dark:focus:border-primary"
                />
              </div>
            </div>
            <div className="w-full px-4">
              <div className="mb-6">
                <label
                  for=""
                  className="mb-2.5 block text-base font-medium text-dark dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="yourname@company.com"
                  className="h-[46px] w-full rounded-lg border border-stroke bg-transparent px-5 py-3 text-dark placeholder-dark-5 outline-hidden duration-200 focus:border-primary dark:border-dark-3 dark:text-white dark:focus:border-primary"
                />
              </div>
            </div>
            <div className="w-full px-4">
              <div className="mb-6">
                <label
                  for=""
                  className="mb-2.5 block text-base font-medium text-dark dark:text-white"
                >
                  Phone number
                </label>
                <input
                  type="text"
                  placeholder="+1 (555) 444-0000"
                  className="h-[46px] w-full rounded-lg border border-stroke bg-transparent px-5 py-3 text-dark placeholder-dark-5 outline-hidden duration-200 focus:border-primary dark:border-dark-3 dark:text-white dark:focus:border-primary"
                />
              </div>
            </div>
            <div className="w-full px-4">
              <div className="mb-6">
                <label
                  for=""
                  className="mb-2.5 block text-base font-medium text-dark dark:text-white"
                >
                  Message
                </label>
                <textarea
                  type="text"
                  rows="6"
                  placeholder="Type your message"
                  className="w-full rounded-lg border border-stroke bg-transparent p-5 text-dark placeholder-dark-5 outline-hidden duration-200 focus:border-primary dark:border-dark-3 dark:text-white dark:focus:border-primary"
                ></textarea>
              </div>
            </div>
            <div className="w-full px-4">
              <button className="flex h-12 w-full items-center justify-center rounded-lg bg-dark px-5 py-3 text-base font-medium text-white duration-200 hover:bg-dark/90 dark:bg-white dark:text-dark dark:hover:bg-white/90">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact11;
