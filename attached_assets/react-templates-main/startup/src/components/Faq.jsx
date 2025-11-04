import { useState } from "react";

const header = `How long we deliver your first blog post?`;
const text = `It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available .`;

const faqs = [
  {
    header,
    text,
  },
  {
    header,
    text,
  },
  {
    header,
    text,
  },
  {
    header,
    text,
  },
  {
    header,
    text,
  },
  {
    header,
    text,
  },
];

const Faq = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const handleToggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };
  return (
    <>
      <section className="overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
                <span className="mb-2 block text-lg font-semibold text-primary">
                  FAQ
                </span>
                <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
                  Any Questions? Look Here
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>

          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/2">
              {faqs.map(
                (faq, index) =>
                  index % 2 === 0 && (
                    <div
                      key={index}
                      className="mb-8 w-full rounded-lg bg-white p-4 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] dark:bg-dark-2 dark:shadow-[0px_20px_95px_0px_rgba(0,0,0,0.30)] sm:p-8 lg:px-6 xl:px-8"
                    >
                      <button
                        className="faq-btn flex w-full text-left"
                        onClick={() => handleToggleFaq(index)}
                      >
                        <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary/5 text-primary dark:bg-white/5">
                          <svg
                            className={`${activeFaq === index && "rotate-180"} `}
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11 15.675C10.7937 15.675 10.6219 15.6062 10.45 15.4687L2.54374 7.69998C2.23436 7.3906 2.23436 6.90935 2.54374 6.59998C2.85311 6.2906 3.33436 6.2906 3.64374 6.59998L11 13.7844L18.3562 6.53123C18.6656 6.22185 19.1469 6.22185 19.4562 6.53123C19.7656 6.8406 19.7656 7.32185 19.4562 7.63123L11.55 15.4C11.3781 15.5719 11.2062 15.675 11 15.675Z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                        <div className="w-full">
                          <h4 className="mt-1 text-lg font-semibold text-dark dark:text-white">
                            {faq.header}
                          </h4>
                        </div>
                      </button>
                      {activeFaq === index && (
                        <div className="faq-content pl-[62px]">
                          <p className="py-3 text-base leading-relaxed text-body-color dark:text-dark-6">
                            {faq.text}
                          </p>
                        </div>
                      )}
                    </div>
                  ),
              )}
            </div>

            <div className="w-full px-4 lg:w-1/2">
              {faqs.map(
                (faq, index) =>
                  index % 2 !== 0 && (
                    <div
                      key={index}
                      className="mb-8 w-full rounded-lg bg-white p-4 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] dark:bg-dark-2 dark:shadow-[0px_20px_95px_0px_rgba(0,0,0,0.30)] sm:p-8 lg:px-6 xl:px-8"
                    >
                      <button
                        className="faq-btn flex w-full text-left"
                        onClick={() => handleToggleFaq(index)}
                      >
                        <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary/5 text-primary dark:bg-white/5">
                          <svg
                            className={`${activeFaq === index && "rotate-180"} `}
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11 15.675C10.7937 15.675 10.6219 15.6062 10.45 15.4687L2.54374 7.69998C2.23436 7.3906 2.23436 6.90935 2.54374 6.59998C2.85311 6.2906 3.33436 6.2906 3.64374 6.59998L11 13.7844L18.3562 6.53123C18.6656 6.22185 19.1469 6.22185 19.4562 6.53123C19.7656 6.8406 19.7656 7.32185 19.4562 7.63123L11.55 15.4C11.3781 15.5719 11.2062 15.675 11 15.675Z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                        <div className="w-full">
                          <h4 className="mt-1 text-lg font-semibold text-dark dark:text-white">
                            {faq.header}
                          </h4>
                        </div>
                      </button>
                      {activeFaq === index && (
                        <div className="faq-content pl-[62px]">
                          <p className="py-3 text-base leading-relaxed text-body-color dark:text-dark-6">
                            {faq.text}
                          </p>
                        </div>
                      )}
                    </div>
                  ),
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
