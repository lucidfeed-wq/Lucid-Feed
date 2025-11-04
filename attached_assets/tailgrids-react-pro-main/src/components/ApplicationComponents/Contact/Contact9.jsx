import React from "react";

const Contact9 = () => {
  return (
    <section className="relative z-10 bg-primary py-20 lg:py-[120px]">
      <div className="container mx-auto">
        <div className="bg-white dark:bg-dark-2">
          <div className="flex flex-wrap items-stretch">
            <div className="w-full lg:w-7/12">
              <div className="relative flex h-full w-full overflow-hidden">
                <div className="flex h-full items-end">
                  <img
                    src="https://cdn.tailgrids.com/2.0/image/application/images/contact/contact-image-9.jpg"
                    alt="image"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="absolute bottom-14 left-0 right-0 mx-auto w-full max-w-[560px] px-5">
                  <div className="w-full flex-wrap items-center rounded-sm bg-white px-4 py-9 shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)] dark:bg-dark-2 md:inline-flex md:px-4 lg:px-0 xl:px-4">
                    <div className="mb-4 border-stroke px-3 dark:border-dark-3 md:mb-0 md:border-r">
                      <h5 className="text-lg font-semibold text-dark dark:text-white">
                        Email
                      </h5>
                      <p className="text-base text-body-color dark:text-dark-6">
                        info@example.com
                      </p>
                    </div>
                    <div className="mb-4 border-stroke px-3 dark:border-dark-3 md:mb-0 md:border-r">
                      <h5 className="text-lg font-semibold text-dark dark:text-white">
                        Phone
                      </h5>
                      <p className="text-base text-body-color dark:text-dark-6">
                        +99 021 324 258
                      </p>
                    </div>
                    <div className="px-3">
                      <h5 className="text-lg font-semibold text-dark dark:text-white">
                        Address
                      </h5>
                      <p className="text-base text-body-color dark:text-dark-6">
                        340 Main St, USA
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-5/12">
              <div className="2xl:px-70 w-full px-8 py-14 sm:p-[70px] lg:px-14">
                <span className="mb-5 block text-base font-medium text-dark dark:text-white">
                  CONTACT US
                </span>
                <h2 className="mb-9 text-3xl font-semibold leading-tight text-dark dark:text-white sm:text-4xl sm:leading-tight">
                  Let's talk about <br />
                  your problem.
                </h2>
                <form>
                  <InputBox
                    labelTitle="Your Name"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                  />
                  <InputBox
                    labelTitle="Your Email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                  />
                  <TextArea
                    labelTitle="Your Message"
                    row="5"
                    placeholder="Enter your message"
                    name="message"
                    defaultValue=""
                  />
                  <div>
                    <button
                      type="submit"
                      className="cursor-pointer rounded-md border border-transparent bg-primary px-7 py-3 text-white transition hover:bg-primary/90"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact9;

const InputBox = ({ type, placeholder, name, labelTitle }) => {
  return (
    <div className="mb-5">
      <label className="mb-2.5 block text-base font-medium text-dark dark:text-white">
        {labelTitle}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-hidden focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-dark-6"
      />
    </div>
  );
};

const TextArea = ({ row, placeholder, name, defaultValue, labelTitle }) => {
  return (
    <>
      <div className="mb-6">
        <label className="mb-2.5 block text-base font-medium text-dark dark:text-white">
          {labelTitle}
        </label>
        <textarea
          rows={row}
          placeholder={placeholder}
          name={name}
          className="w-full resize-none rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-hidden focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-dark-6"
          defaultValue={defaultValue}
        />
      </div>
    </>
  );
};
