import { useState } from "react";

const contactList = [
  {
    icon: (
      <svg
        width="43"
        height="42"
        viewBox="0 0 43 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M37.25 6.30005H5.75001C3.51876 6.30005 1.61563 8.13755 1.61563 10.4344V31.6969C1.61563 33.9282 3.45313 35.8313 5.75001 35.8313H37.25C39.4813 35.8313 41.3844 33.9938 41.3844 31.6969V10.3688C41.3844 8.13755 39.4813 6.30005 37.25 6.30005ZM37.25 9.25317C37.3156 9.25317 37.3813 9.25317 37.4469 9.25317L21.5 19.4907L5.55313 9.25317C5.61876 9.25317 5.68438 9.25317 5.75001 9.25317H37.25ZM37.25 32.7469H5.75001C5.09376 32.7469 4.56876 32.2219 4.56876 31.5657V12.1407L19.925 21.9844C20.3844 22.3125 20.9094 22.4438 21.4344 22.4438C21.9594 22.4438 22.4844 22.3125 22.9438 21.9844L38.3 12.1407V31.6313C38.4313 32.2875 37.9063 32.7469 37.25 32.7469Z"
          fill="currentColor"
        />
      </svg>
    ),
    title: "Email Address",
    child: ["info@example.com", "sales@yourmail.com"],
  },
  {
    icon: (
      <svg
        width="42"
        height="42"
        viewBox="0 0 42 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M31.8937 40.8843C30.1219 40.8843 28.0875 40.425 25.8563 39.5718C21.3938 37.8 16.4719 34.3875 12.075 29.9906C7.67812 25.5937 4.26563 20.6718 2.49375 16.1437C0.525 11.2875 0.721875 7.28433 3.01875 5.05308C3.08438 4.98745 3.21563 4.92183 3.28125 4.8562L8.79375 1.57495C10.1719 0.787455 11.9438 1.1812 12.8625 2.4937L16.7344 8.2687C17.6531 9.64683 17.2594 11.4843 15.9469 12.4031L13.5844 14.0437C15.2906 16.8 20.1469 23.5593 27.8906 28.4156L29.3344 26.3156C30.45 24.7406 32.2219 24.2812 33.6656 25.2656L39.4406 29.1375C40.7531 30.0562 41.1469 31.8281 40.3594 33.2062L37.0781 38.7187C37.0125 38.85 36.9469 38.9156 36.8813 38.9812C35.7 40.2281 33.9937 40.8843 31.8937 40.8843ZM4.9875 7.28433C3.74063 8.66246 3.80625 11.4843 5.25 15.0937C6.89063 19.2281 10.0406 23.7562 14.175 27.8906C18.2437 31.9593 22.8375 35.1093 26.9062 36.75C30.45 38.1937 33.2719 38.2593 34.7156 37.0125L37.8656 31.6312C37.8656 31.5656 37.8656 31.5656 37.8656 31.5L32.0906 27.6281C32.0906 27.6281 31.9594 27.6937 31.8281 27.8906L30.3844 29.9906C29.4656 31.3031 27.6938 31.6968 26.3813 30.8437C18.1125 25.725 12.9938 18.5718 11.1563 15.6843C10.3031 14.3062 10.6313 12.5343 11.9438 11.6156L14.3062 9.97495V9.90933L10.4344 4.13433C10.4344 4.0687 10.3688 4.0687 10.3031 4.13433L4.9875 7.28433Z"
          fill="currentColor"
        />
        <path
          d="M38.4562 18.7031C37.6688 18.7031 37.0781 18.1125 37.0125 17.325C36.4875 10.6969 31.0406 5.38126 24.3469 4.92189C23.5594 4.85626 22.9031 4.20001 22.9688 3.34689C23.0344 2.55939 23.6906 1.90314 24.5438 1.96876C32.6813 2.49376 39.3094 8.92501 39.9656 17.0625C40.0313 17.85 39.4406 18.5719 38.5875 18.6375C38.5875 18.7031 38.5219 18.7031 38.4562 18.7031Z"
          fill="currentColor"
        />
        <path
          d="M31.9594 19.2938C31.2375 19.2938 30.5812 18.7688 30.5156 17.9813C30.1219 14.4375 27.3656 11.6813 23.8219 11.2219C23.0344 11.1563 22.4437 10.3688 22.5094 9.58127C22.575 8.79377 23.3625 8.20315 24.15 8.26877C29.0719 8.8594 32.8781 12.6656 33.4687 17.5875C33.5344 18.375 33.0094 19.0969 32.1562 19.2282C32.025 19.2938 31.9594 19.2938 31.9594 19.2938Z"
          fill="currentColor"
        />
      </svg>
    ),
    title: "Phone Number",
    child: ["+88 (800) 123 4567", "+99 094 5445 433"],
  },
  {
    icon: (
      <svg
        width="42"
        height="42"
        viewBox="0 0 42 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21 1.18127C11.9437 1.18127 4.59375 8.26877 4.59375 16.9969C4.59375 23.625 13.3875 34.125 18.5719 39.7688C19.2281 40.4907 20.0813 40.8188 21 40.8188C21.9188 40.8188 22.7719 40.425 23.4281 39.7688C28.6125 34.125 37.4062 23.625 37.4062 16.9969C37.4062 8.26877 30.0562 1.18127 21 1.18127ZM21.2625 37.8C21.1313 37.9313 20.9344 37.9313 20.7375 37.8C14.3719 30.8438 7.54688 21.7875 7.54688 16.9969C7.54688 9.9094 13.5844 4.1344 21 4.1344C28.4156 4.1344 34.4531 9.9094 34.4531 16.9969C34.4531 21.7875 27.6281 30.8438 21.2625 37.8Z"
          fill="currentColor"
        />
        <path
          d="M21 10.3031C17.0625 10.3031 13.8469 13.5187 13.8469 17.4562C13.8469 21.3937 17.0625 24.675 21 24.675C24.9375 24.675 28.1531 21.4594 28.1531 17.5219C28.1531 13.5844 24.9375 10.3031 21 10.3031ZM21 21.7218C18.6375 21.7218 16.8 19.8187 16.8 17.5219C16.8 15.225 18.7031 13.3219 21 13.3219C23.2969 13.3219 25.2 15.225 25.2 17.5219C25.2 19.8187 23.3625 21.7218 21 21.7218Z"
          fill="currentColor"
        />
      </svg>
    ),
    title: "Our Address",
    child: ["82 12th Street, Office 14,", "Edinburgh, UK"],
  },
];

const formItems = [
  {
    required: true,
    label: "Your Name",
    type: "text",
  },
  {
    required: true,
    label: "Your Email",
    type: "email",
  },
  {
    required: true,
    label: "Your Message",
    type: "textarea",
  },
];

const ContactUs = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <section>
        <div className="dark:bg-dark bg-white pt-20 pb-10 lg:pt-[110px] lg:pb-[70px]">
          <div className="container mx-auto">
            <div className="-mx-4 flex flex-wrap">
              {contactList.map((contact, contactIndex) => (
                <div key={contactIndex} className="w-full px-4 md:w-1/3">
                  <div className="mb-10 text-center">
                    <div className="bg-tg-bg text-primary mx-auto mb-5 flex h-[100px] w-[100px] items-center justify-center rounded-full sm:h-[130px] sm:w-[130px] dark:bg-white/5">
                      {contact.icon}
                    </div>
                    <div className="text-center">
                      <h4 className="text-dark mb-3 text-lg font-semibold dark:text-white">
                        {contact.title}
                      </h4>
                      {contact.child.map((child, childIndex) => (
                        <p
                          key={childIndex}
                          className="text-body-color dark:text-dark-6 text-base"
                        >
                          {child}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-tg-bg dark:bg-dark-2 py-20 lg:py-[120px]">
          <div className="container mx-auto">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4">
                <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                  <span className="text-primary mb-2 block text-lg font-semibold">
                    Contact Us
                  </span>
                  <h2 className="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px] dark:text-white">
                    How Can We Help You?
                  </h2>
                  <p className="text-body-color dark:text-dark-6 text-base">
                    There are many variations of passages of Lorem Ipsum
                    available but the majority have suffered alteration in some
                    form.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <form>
                <div className="-mx-4 flex flex-wrap justify-center">
                  {formItems.map((item, index) =>
                    item.type === "textarea" ? (
                      <div key={index} className="w-full px-4">
                        <div className="mb-7 lg:mb-9">
                          <label className="text-dark mb-3 block text-base font-medium md:mb-5 dark:text-white">
                            <span>{item.label}</span>
                            {item.required && (
                              <span className="text-red-500">*</span>
                            )}
                          </label>
                          <textarea
                            rows="4"
                            className="border-stroke text-body-color focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6 dark:focus:border-primary w-full resize-none rounded-sm border bg-white px-[14px] py-3 text-base leading-relaxed outline-hidden focus-visible:shadow-none md:px-[18px] md:py-4"
                          ></textarea>
                        </div>
                      </div>
                    ) : (
                      <div key={index} className="w-full px-4 md:w-1/2">
                        <div className="mb-7 lg:mb-9">
                          <label className="text-dark mb-3 block text-base font-medium md:mb-5 dark:text-white">
                            <span>{item.label}</span>
                            {item.required && (
                              <span className="text-red-500">*</span>
                            )}
                          </label>
                          <input
                            type={item.type}
                            className="border-stroke text-body-color focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6 dark:focus:border-primary w-full rounded-sm border bg-white px-[14px] py-3 text-base leading-relaxed outline-hidden focus-visible:shadow-none md:px-[18px] md:py-4"
                          />
                        </div>
                      </div>
                    ),
                  )}

                  <div className="w-full px-4">
                    <label
                      htmlFor="checkboxLabelTwo"
                      className="text-body-color mb-12 flex cursor-pointer items-center text-base md:mb-[70px]"
                    >
                      <div className="relative">
                        <input
                          type="checkbox"
                          id="checkboxLabelTwo"
                          className="sr-only"
                          onChange={() => {
                            setIsChecked(!isChecked);
                          }}
                        />
                        <div
                          className={`dark:bg-dark mr-4 flex h-5 w-5 items-center justify-center rounded border ${
                            isChecked
                              ? "border-primary"
                              : "border-stroke dark:border-dark-3"
                          }`}
                        >
                          <span
                            className={`text-primary dark:text-white ${!isChecked ? "opacity-0" : ""}`}
                          >
                            <svg
                              width="11"
                              height="8"
                              viewBox="0 0 11 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                                fill="#3056D3"
                                stroke="#3056D3"
                                strokeWidth="0.4"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                      <span>
                        I agree that my submitted data is being collected and
                        stored.
                      </span>
                    </label>
                  </div>

                  <div className="w-full px-4 sm:w-8/12 lg:w-4/12">
                    <div className="text-center">
                      <button
                        type="submit"
                        className="bg-primary hover:bg-primary/90 block w-full rounded-md px-10 py-5 text-center text-base font-medium text-white transition"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
