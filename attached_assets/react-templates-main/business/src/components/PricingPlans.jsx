import { Link } from "react-router-dom";
import ShapeSeven from "./Shapes/ShapeSeven.jsx";
import ShapeEight from "./Shapes/ShapeEight.jsx";

const plans = [
  {
    price: "19.99",
    features: [
      "1 User",
      "All UI components",
      "Lifetime access",
      "Free updates",
      "Use on 1 (one) project",
      "3 Months support",
    ],
    button: {
      text: "Purchase Now",
      link: "#",
    },
  },
  {
    popular: true,
    price: "59.00",
    features: [
      "5 Users",
      "All UI components",
      "Lifetime access",
      "Free updates",
      "Use on 3 (Three) project",
      "4 Months support",
    ],
    button: {
      text: "Purchase Now",
      link: "#",
    },
  },
  {
    price: "70.99",
    features: [
      "Unlimited Users",
      "All UI components",
      "Lifetime access",
      "Free updates",
      "Use on Unlimited project",
      "12 Months support",
    ],
    button: {
      text: "Purchase Now",
      link: "#",
    },
  },
];

const PricingPlans = () => {
  return (
    <>
      <section className="relative z-20 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-[75px]">
                <span className="mb-2 block text-lg font-semibold text-primary">
                  Pricing Table
                </span>
                <h2 className="mb-3 text-3xl font-bold leading-[1.208] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                  Our Pricing Plan
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center">
            {plans.map((item, index) => (
              <div
                key={index}
                className={`w-full ${item.popular ? "max-w-[370px]" : "max-w-[406px]"}`}
              >
                <div
                  className={`relative z-10 mb-10 overflow-hidden rounded-xl px-8 py-10 text-center sm:p-12 lg:px-6 lg:py-10 xl:px-[50px] ${
                    item.popular
                      ? "bg-primary bg-linear-to-b from-primary to-[#179BEE] shadow-pricing xl:pb-10 xl:pt-[55px]"
                      : "border-2 border-[#D4DEFF] bg-white drop-shadow-pricing dark:border-dark-3 dark:bg-dark-2 xl:pb-[50px] xl:pt-[45px]"
                  } ${index === 0 && "lg:rounded-r-none lg:border-r-0"} ${index === plans.length - 1 && "lg:rounded-l-none lg:border-l-0"}`}
                >
                  {item.popular && (
                    <span className="mb-5 inline-block rounded-full border px-6 py-2 text-base font-semibold uppercase text-white">
                      POPULAR
                    </span>
                  )}

                  <span
                    className={`mb-2 block text-base font-medium uppercase ${
                      item.popular ? `text-white` : `text-dark dark:text-white`
                    }`}
                  >
                    STARTING FROM
                  </span>
                  <h2
                    className={`mb-9 text-[28px] font-semibold ${
                      item.popular ? `text-white` : `text-primary`
                    }`}
                  >
                    € {item.price} / mo
                  </h2>
                  <div className="mb-16 flex flex-col gap-4">
                    {item.features.map((feature, featureIndex) => (
                      <p
                        key={featureIndex}
                        className={`mb-1 text-base font-medium leading-loose ${
                          item.popular
                            ? `text-white`
                            : `text-body-color dark:text-dark-6`
                        }`}
                      >
                        {feature}
                      </p>
                    ))}
                  </div>
                  <div className="w-full">
                    <Link
                      to={item.button.link}
                      className={`inline-block rounded-full border px-[50px] py-3 text-center text-base font-medium text-primary shadow-1 transition ${
                        item.popular
                          ? "border-white bg-white hover:bg-gray-2 hover:text-body-color"
                          : "border-stroke bg-transparent hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:shadow-none"
                      } `}
                    >
                      {item.button.text}
                    </Link>
                  </div>
                  {index === 0 && (
                    <span className="absolute bottom-0 left-0 z-[-1] block h-14 w-14 rounded-tr-full bg-primary"></span>
                  )}
                  {index === plans.length - 1 && (
                    <span className="absolute right-0 top-0 z-[-1] block h-14 w-14 rounded-bl-full bg-secondary"></span>
                  )}
                  {item.popular && (
                    <div>
                      <span className="absolute right-0 top-0 z-[-1]">
                        <ShapeSeven />
                      </span>
                      <span className="absolute bottom-0 left-0 z-[-1]">
                        <ShapeEight />
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingPlans;
