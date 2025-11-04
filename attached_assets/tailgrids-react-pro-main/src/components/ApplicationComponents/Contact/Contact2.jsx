import React from "react";

const Contact2 = () => {
  return (
    <section className="relative z-40 bg-white py-20 dark:bg-dark lg:py-[120px]">
      <div className="absolute left-0 top-0 z-[-1] h-1/2 w-full bg-[#E9F9FF] dark:bg-dark-3"></div>
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-6/12 xl:w-7/12">
            <div className="mb-[60px] lg:mb-[100px] xl:mb-[150px]">
              <span className="mb-6 block text-base font-medium text-dark dark:text-white">
                CONTACT US
              </span>
              <h2 className="text-[35px] font-semibold leading-tight text-dark dark:text-white">
                Let’s talk about <br />
                your problem.
              </h2>
            </div>

            <div className="-mx-4 flex flex-wrap">
              <div className="w-full max-w-[330px] px-4">
                <div className="mb-12 w-full">
                  <div className="flex">
                    <div className="mr-6 h-9 w-9 text-primary">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16 0.899902C9.1 0.899902 3.5 6.2999 3.5 12.9499C3.5 17.9999 10.2 25.9999 14.15 30.2999C14.65 30.8499 15.3 31.0999 16 31.0999C16.7 31.0999 17.35 30.7999 17.85 30.2999C21.8 25.9999 28.5 17.9999 28.5 12.9499C28.5 6.2999 22.9 0.899902 16 0.899902ZM16.2 28.7999C16.1 28.8999 15.95 28.8999 15.8 28.7999C10.95 23.4999 5.75 16.5999 5.75 12.9499C5.75 7.5499 10.35 3.1499 16 3.1499C21.65 3.1499 26.25 7.5499 26.25 12.9499C26.25 16.5999 21.05 23.4999 16.2 28.7999Z"
                          fill="currentColor"
                        />
                        <path
                          d="M16 7.84985C13 7.84985 10.55 10.2999 10.55 13.2999C10.55 16.2999 13 18.7999 16 18.7999C19 18.7999 21.45 16.3499 21.45 13.3499C21.45 10.3499 19 7.84985 16 7.84985ZM16 16.5499C14.2 16.5499 12.8 15.0999 12.8 13.3499C12.8 11.5999 14.25 10.1499 16 10.1499C17.75 10.1499 19.2 11.5999 19.2 13.3499C19.2 15.0999 17.8 16.5499 16 16.5499Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div>
                      <h5 className="mb-4 text-lg font-medium text-dark dark:text-white">
                        Our Location
                      </h5>
                      <p className="text-base text-body-color dark:text-dark-6">
                        401 Broadway, 24th Floor, Orchard Cloud View, London
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full max-w-[330px] px-4">
                <div className="mb-12 w-full">
                  <div className="flex">
                    <div className="mr-6 h-9 w-9 text-primary">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M28 4.80005H4.00001C2.30001 4.80005 0.850006 6.20005 0.850006 7.95005V24.15C0.850006 25.85 2.25001 27.3 4.00001 27.3H28C29.7 27.3 31.15 25.9 31.15 24.15V7.90005C31.15 6.20005 29.7 4.80005 28 4.80005ZM28 7.05005C28.05 7.05005 28.1 7.05005 28.15 7.05005L16 14.85L3.85001 7.05005C3.90001 7.05005 3.95001 7.05005 4.00001 7.05005H28ZM28 24.9501H4.00001C3.50001 24.9501 3.10001 24.55 3.10001 24.05V9.25005L14.8 16.75C15.15 17 15.55 17.1 15.95 17.1C16.35 17.1 16.75 17 17.1 16.75L28.8 9.25005V24.1C28.9 24.6 28.5 24.9501 28 24.9501Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div>
                      <h5 className="mb-4 text-lg font-medium text-dark dark:text-white">
                        How Can We Help?
                      </h5>
                      <p className="mb-2 text-base text-body-color dark:text-dark-6">
                        info@yourdomain.com
                      </p>
                      <p className="text-base text-body-color dark:text-dark-6">
                        contact@yourdomain.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-6/12 xl:w-5/12">
            <div className="rounded-lg bg-white px-8 py-12 shadow-3 dark:bg-dark-2 sm:p-[60px] lg:px-12 xl:p-[60px]">
              <h3 className="mb-8 text-2xl font-semibold text-dark dark:text-white sm:text-[28px]">
                Send us a Message
              </h3>
              <form>
                <InputBox
                  labelTitle="Full Name*"
                  type="text"
                  name="name"
                  placeholder="Adam Gelius"
                />
                <InputBox
                  labelTitle="Email*"
                  type="email"
                  name="email"
                  placeholder="example@yourmail.com"
                />
                <InputBox
                  labelTitle="Phone*"
                  type="text"
                  name="phone"
                  placeholder="+885 1254 5211 552"
                />
                <TextArea
                  labelTitle="Message*"
                  row="1"
                  placeholder="Type your message here"
                  name="details"
                  defaultValue=""
                />
                <div>
                  <button
                    type="submit"
                    className="rounded-sm bg-primary px-10 py-3 text-base font-medium text-white transition hover:bg-primary/90"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact2;

const TextArea = ({ row, placeholder, name, defaultValue, labelTitle }) => {
  return (
    <>
      <div className="mb-6">
        <label className="block text-xs text-body-color dark:text-dark-6">
          {" "}
          {labelTitle}{" "}
        </label>
        <textarea
          rows={row}
          placeholder={placeholder}
          name={name}
          className="w-full resize-none border-b border-[#f1f1f1] bg-transparent py-4 text-base text-body-color outline-hidden placeholder:opacity-30 focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-dark-6"
          defaultValue={defaultValue}
        />
      </div>
    </>
  );
};

const InputBox = ({ type, placeholder, name, labelTitle }) => {
  return (
    <div className="mb-6">
      <label className="block text-xs text-body-color dark:text-dark-6">
        {" "}
        {labelTitle}{" "}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className="w-full border-b border-[#f1f1f1] bg-transparent py-4 text-base text-body-color outline-hidden placeholder:opacity-30 focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-dark-6"
      />
    </div>
  );
};
