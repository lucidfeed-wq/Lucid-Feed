import React from "react";

function Contact13() {
  return (
    <section className="relative z-10 overflow-hidden bg-white py-20 dark:bg-dark lg:py-[120px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
            <div>
              <div className="mb-12 w-full max-w-[435px]">
                <h2 className="mb-5 text-4xl font-bold leading-[1.2]! text-dark dark:text-white sm:text-5xl md:text-[60px] lg:text-5xl xl:text-[60px]">
                  Let’s get in touch with us
                </h2>
                <p className="text-lg font-medium text-body-color dark:text-dark-6">
                  Email, call or complete the form to connect with us We’ll get
                  back to you within 24 hours.
                </p>
              </div>
              <div className="mb-6">
                <p className="text-base text-body-color dark:text-dark-6">
                  Phone
                </p>
                <p className="text-base font-medium text-dark dark:text-white">
                  +(5) 534-093-762
                </p>
              </div>
              <div className="mb-6">
                <p className="text-base text-body-color dark:text-dark-6">
                  Email
                </p>
                <p className="text-base font-medium text-dark dark:text-white">
                  hello@company.com
                </p>
              </div>
              <div className="mb-6">
                <p className="text-base text-body-color dark:text-dark-6">
                  Office
                </p>
                <p className="text-base font-medium text-dark dark:text-white">
                  230 Norman Street New York, <br />
                  QC (USA) H8R 1A1
                </p>
              </div>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2 xl:w-7/12">
            <div className="rounded-[20px] bg-white p-8 shadow-xl dark:bg-dark-2 sm:p-[52px] lg:p-8 xl:ml-16 xl:p-[52px]">
              <h3 className="mb-3 text-3xl font-bold text-dark dark:text-white">
                Get in Touch
              </h3>
              <p className="mb-10 text-lg text-body-color dark:text-dark-6">
                We’ll get back to you within 24 hours.
              </p>

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
                      className="h-[50px] w-full rounded-lg border border-stroke bg-transparent px-5 py-3 text-dark placeholder-dark-5 outline-hidden duration-200 focus:border-primary dark:border-dark-3 dark:text-white dark:focus:border-primary"
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
                      className="h-[50px] w-full rounded-lg border border-stroke bg-transparent px-5 py-3 text-dark placeholder-dark-5 outline-hidden duration-200 focus:border-primary dark:border-dark-3 dark:text-white dark:focus:border-primary"
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
                      className="h-[50px] w-full rounded-lg border border-stroke bg-transparent px-5 py-3 text-dark placeholder-dark-5 outline-hidden duration-200 focus:border-primary dark:border-dark-3 dark:text-white dark:focus:border-primary"
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
                  <button className="flex h-[52px] w-full items-center justify-center rounded-lg bg-dark px-5 py-3 text-base font-medium text-white duration-200 hover:bg-dark/90 dark:bg-white dark:text-dark dark:hover:bg-white/90">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- graphics --> */}
      <div className="absolute bottom-0 left-0 -z-10">
        <img src="./images/contact/contact-13/shape-1.svg" alt="shape-1" />
      </div>

      <div className="absolute right-0 top-0 -z-10">
        <img src="./images/contact/contact-13/shape-2.svg" alt="shape-2" />
      </div>

      <div className="absolute right-0 top-0 -z-10 dark:opacity-40 max-lg:hidden">
        <img src="./images/contact/contact-13/line-1.svg" alt="line-1" />
      </div>

      <div className="absolute right-0 top-0 -z-10 dark:opacity-40 max-lg:hidden">
        <img src="./images/contact/contact-13/line-2.svg" alt="line-2" />
      </div>
    </section>
  );
}

export default Contact13;
