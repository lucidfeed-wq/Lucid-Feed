import { Link } from "react-router-dom";
import ShapeThree from "./Shapes/ShapeThree.jsx";

const pricingPlans = [
  {
    dotShape: "text-secondary",
    type: "Starter",
    price: "25",
    button: {
      text: "Purchase Now",
      bg: "bg-secondary",
    },
    features: [
      "Core UI Components",
      "Use on Unlimited Projects",
      "Personal and Commercial Use",
      "Lifetime Free Updates",
      "Figma Source File",
    ],
  },
  {
    dotShape: "text-primary",
    type: "Business",
    price: "59",
    button: {
      text: "Purchase Now",
      bg: "bg-primary",
    },
    features: [
      "Core UI Components",
      "Use on Unlimited Projects",
      "Personal and Commercial Use",
      "Lifetime Free Updates",
      "Figma Source File",
    ],
  },
  {
    dotShape: "text-dark",
    type: "Extended",
    price: "199",
    button: {
      text: "Purchase Now",
      link: "#",
      bg: "bg-dark",
    },
    features: [
      "Core UI Components",
      "Use on Unlimited Projects",
      "Personal and Commercial Use",
      "Lifetime Free Updates",
      "Figma Source File",
    ],
  },
];

const PricingPlans = () => {
  return (
    <>
      <section className="dark:bg-dark-2 relative z-20 overflow-hidden bg-white pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                <span className="text-primary mb-2 block text-lg font-semibold">
                  {" "}
                  Pricing Table{" "}
                </span>
                <h2 className="text-dark mb-4 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px] dark:text-white">
                  Our Pricing Plan
                </h2>
                <p className="text-body-color dark:text-dark-6 text-base">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>

          <div className="-mx-4 flex flex-wrap justify-center">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="w-full px-4 md:w-1/2 lg:w-1/3">
                <div className="shadow-pricing-5 dark:bg-dark-3 relative z-10 mb-10 overflow-hidden rounded-xl bg-white px-8 py-10 text-center sm:p-12 lg:px-6 lg:py-10 xl:p-14">
                  <span className="text-dark mb-4 block text-xl font-medium dark:text-white">
                    {plan.type}
                  </span>
                  <h2 className="text-dark mb-10 text-4xl font-semibold xl:mb-[50px] xl:text-[42px] xl:leading-[1.24] dark:text-white">
                    <sup className="-top-5 text-xl font-medium">$</sup>
                    <span className="px-0.5">{plan.price}</span>
                    <span className="text-body-color dark:text-dark-6 text-base">
                      {" "}
                      Month{" "}
                    </span>
                  </h2>
                  <div className="mb-11 space-y-[14px]">
                    {plan.features.map((feature, featureIndex) => (
                      <p
                        key={featureIndex}
                        className="text-body-color dark:text-dark-6 text-base"
                      >
                        {feature}
                      </p>
                    ))}
                  </div>
                  <Link
                    to={plan.button.link}
                    className={`inline-block rounded-md px-7 py-[13px] text-center text-base font-medium text-white transition hover:${plan.button.bg}/90 ${plan.button.bg}`}
                  >
                    {plan.button.text}
                  </Link>

                  <div>
                    <span
                      className={`absolute bottom-3 left-3 -z-10 ${plan.dotShape}`}
                    >
                      <ShapeThree />
                    </span>
                    <span
                      className={`absolute top-3 right-3 -z-10 ${plan.dotShape}`}
                    >
                      <ShapeThree />
                    </span>
                  </div>
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
