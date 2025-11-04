import React from "react";

function Contact12() {
  return (
    <section className="bg-white pb-20 dark:bg-dark lg:pb-[120px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-stretch">
          <div className="w-full px-4 lg:w-1/2">
            <div className="h-full border-l border-stroke px-4 pt-20 dark:border-dark-3 max-lg:border-r lg:pt-[120px]">
              <div className="mx-auto w-full max-w-[400px]">
                <h2 className="mb-24 text-4xl font-bold leading-[1.2]! tracking-[-1.2px] text-dark dark:text-white sm:text-5xl md:text-[60px] lg:text-5xl xl:text-[60px]">
                  Let’s get in touch with us
                </h2>

                <h3 className="mb-12 w-full max-w-[310px] text-2xl font-bold text-dark dark:text-white md:text-3xl">
                  Feel free to say hello with us!
                </h3>
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
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <div className="h-full border-x border-stroke pt-20 dark:border-dark-3 lg:pt-[120px]">
              <p className="mx-auto mb-20 w-full max-w-[442px] px-4 text-lg text-body-color dark:text-dark-6">
                Great! We’re excited to hear from you and let’s start something
                special together.
              </p>

              <div className="mb-9 bg-dark p-7 dark:bg-dark-2 sm:p-10 lg:p-7 xl:p-10">
                <div className="mb-6">
                  <label
                    for=""
                    className="mb-2.5 block text-base font-medium text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="yourname@company.com"
                    className="h-[50px] w-full border border-stroke/10 bg-white/5 px-5 py-3 text-white placeholder-dark-5 outline-hidden duration-200 focus:border-primary"
                  />
                </div>
                <div className="mb-6">
                  <label
                    for=""
                    className="mb-2.5 block text-base font-medium text-white"
                  >
                    Phone number
                  </label>
                  <input
                    type="text"
                    placeholder="+1 (555) 444-0000"
                    className="h-[50px] w-full border border-stroke/10 bg-white/5 px-5 py-3 text-white placeholder-dark-5 outline-hidden duration-200 focus:border-primary"
                  />
                </div>
                <div className="mb-6">
                  <label
                    for=""
                    className="mb-2.5 block text-base font-medium text-white"
                  >
                    Message
                  </label>
                  <textarea
                    rows="6"
                    placeholder="Type your message"
                    className="w-full border border-stroke/10 bg-white/5 p-5 text-white placeholder-dark-5 outline-hidden duration-200 focus:border-primary"
                  ></textarea>
                </div>
                <div className="mb-6">
                  <button className="flex h-[52px] w-full items-center justify-center bg-primary px-6 py-3 text-base font-medium text-white duration-200 hover:bg-primary/90">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div>
            <object
              style={{ border: "0", height: "350px", width: "100%" }}
              data="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3102.7887109309127!2d-77.44196278417968!3d38.95165507956235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDU3JzA2LjAiTiA3N8KwMjYnMjMuMiJX!5e0!3m2!1sen!2sbd!4v1545420879707"
            ></object>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact12;
