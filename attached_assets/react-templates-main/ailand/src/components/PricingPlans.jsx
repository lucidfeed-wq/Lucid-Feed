import { Link } from "react-router-dom";
import { useState } from "react";

const plans = [
  {
    price: 85,
    discountedPriceDollar: 38,
    discountedPriceCent: 89,
    savePrice: 54.89,
    features: [
      "Priority email & chat support",
      "Lifetime Access and Free Updates",
      "Generate 1,000 AI Words/month",
      "Personal and Commercial Use",
      "Personal and Commercial Use",
    ],
    button: {
      text: "Choose Plan",
      link: "#",
    },
  },
  {
    popular: true,
    price: 85,
    discountedPriceDollar: 38,
    discountedPriceCent: 89,
    savePrice: 54.89,
    features: [
      "Priority email & chat support",
      "Lifetime Access and Free Updates",
      "Generate 1,000 AI Words/month",
      "Personal and Commercial Use",
      "Personal and Commercial Use",
    ],
    button: {
      text: "Choose Plan",
      link: "#",
    },
  },
  {
    price: 85,
    discountedPriceDollar: 38,
    discountedPriceCent: 89,
    savePrice: 54.89,
    features: [
      "Priority email & chat support",
      "Lifetime Access and Free Updates",
      "Generate 1,000 AI Words/month",
      "Personal and Commercial Use",
      "Personal and Commercial Use",
    ],
    button: {
      text: "Choose Plan",
      link: "#",
    },
  },
];

const PricingPlans = () => {
  const [yearly, setYearly] = useState(false);

  return (
    <>
      <section className="relative z-20 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                <span className="mb-2 block text-lg font-semibold text-primary">
                  Our Pricing Plans
                </span>
                <h2 className="mb-3 text-3xl font-bold leading-[1.208] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                  Pricing and Plans
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-10 text-center">
            <div className="flex items-center justify-center gap-5">
              <button
                onClick={() => setYearly(false)}
                className={`text-base font-medium ${yearly ? "text-dark dark:text-white" : "text-primary"}`}
              >
                Pay Monthly
              </button>

              <span
                onClick={() => setYearly(!yearly)}
                className="flex h-8 w-14 cursor-pointer items-center rounded-full bg-dark px-0.5 py-1 duration-200
              dark:bg-white"
              >
                <span
                  className={`block aspect-square w-7 rounded-full bg-white duration-200 dark:bg-primary ${yearly ? "translate-x-6" : "translate-x-0"} `}
                ></span>
              </span>

              <button
                onClick={() => setYearly(true)}
                className={`text-base font-medium ${yearly ? "text-primary" : "text-dark dark:text-white"}`}
              >
                Pay Yearly
              </button>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[1100px]">
            <div className="grid place-items-end gap-10 md:grid-cols-2 lg:grid-cols-3">
              {plans.map((item, index) => (
                <div
                  key={index}
                  className={`w-full max-w-[340px] rounded-xl border-2 ${item.popular ? "relative border-primary bg-white p-10 pt-[60px] shadow-md dark:bg-dark" : " border-transparent bg-gray-2 p-10 dark:bg-dark-2"}`}
                >
                  {item.popular && (
                    <span className="absolute left-1/2 top-0 inline-flex -translate-x-1/2 items-center justify-center rounded-b-lg bg-primary px-4 py-2 text-sm font-semibold text-white">
                      BEST CHOICE
                    </span>
                  )}

                  <div className="text-center">
                    <h4 className="mb-4 text-xl font-semibold text-dark dark:text-white">
                      Standard Plan
                    </h4>

                    <div className="mb-1 flex items-center justify-center gap-1">
                      <span className="text-2xl font-semibold text-body-color line-through">
                        ${yearly ? item.price * 12 : item.price}
                      </span>
                      <span className="text-4xl font-bold text-dark dark:text-white">
                        $
                        {yearly
                          ? item.discountedPriceDollar * 12
                          : item.discountedPriceDollar}
                        <span className="text-2xl">
                          .{item.discountedPriceCent}
                        </span>
                      </span>
                    </div>

                    <p className="mb-4 text-sm font-medium text-body-color">
                      /Month (annually billed)
                    </p>

                    <div className="relative mb-8 inline-flex items-center justify-center overflow-hidden bg-blue-light-5 px-4 py-1 text-xs font-semibold uppercase text-primary">
                      <span className="absolute -right-[5px] top-1/2 block aspect-square w-2.5 -translate-y-1/2 rounded-full bg-gray-2 dark:bg-dark-2"></span>
                      SAVE UP TO ${item.savePrice}
                      <span className="absolute -left-[5px] top-1/2 block aspect-square w-2.5 -translate-y-1/2 rounded-full bg-gray-2 dark:bg-dark-2"></span>
                    </div>

                    <Link
                      to={item.button.link}
                      className={`flex w-full items-center justify-center gap-2 rounded-lg bg-dark px-6 py-3 text-base font-medium text-white duration-200 ${
                        item.popular
                          ? "bg-primary hover:bg-primary/90"
                          : "bg-dark hover:bg-dark/90"
                      } `}
                    >
                      {item.button.text}
                      <span>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.46875 17.9062C6.28125 17.9062 6.125 17.8438 5.96875 17.7188C5.6875 17.4375 5.6875 17 5.96875 16.7188L12.5312 10L5.96875 3.3125C5.6875 3.03125 5.6875 2.59375 5.96875 2.3125C6.25 2.03125 6.6875 2.03125 6.96875 2.3125L14.0313 9.5C14.3125 9.78125 14.3125 10.2187 14.0313 10.5L6.96875 17.6875C6.84375 17.8125 6.65625 17.9062 6.46875 17.9062Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                    </Link>
                  </div>

                  <div className="mt-8">
                    <ul className="list-inside list-disc space-y-4 marker:text-primary">
                      {item.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className={`flex items-start gap-3 text-base font-medium text-dark dark:text-white`}
                        >
                          <span className="mt-2.5 block aspect-square w-1.5 rounded-full bg-primary"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingPlans;
