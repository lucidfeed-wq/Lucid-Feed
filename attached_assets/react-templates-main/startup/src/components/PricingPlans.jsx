import { Link } from "react-router-dom";
import ShapeFive from "./Shapes/ShapeFive.jsx";
import ShapeSix from "./Shapes/ShapeSix.jsx";

const plans = [
  {
    name: "Personal",
    price: "$59",
    description: "Perfect for using in a personal website or a client project.",
    features: [
      "1 User",
      "All UI components",
      "Lifetime access",
      "Free updates",
      "Use on 1 (one) project",
      "3 Months support",
    ],
    button: {
      text: "Choose Personal",
    },
  },
  {
    popular: true,
    name: "Business",
    price: "$199",
    description: "Perfect for using in a Business website or a client project.",
    features: [
      "5 Users",
      "All UI components",
      "Lifetime access",
      "Free updates",
      "Use on 3 (Three) project",
      "4 Months support",
    ],
    button: {
      text: "Choose Business",
    },
  },
  {
    name: "Professional",
    price: "$256",
    description:
      "Perfect for using in a Professional website or a client project.",
    features: [
      "Unlimited Users",
      "All UI components",
      "Lifetime access",
      "Free updates",
      "Use on Unlimited project",
      "12 Months support",
    ],
    button: {
      text: "Choose Professional",
    },
  },
];

const PricingPlans = () => {
  return (
    <>
      <section className="dark:bg-dark overflow-hidden bg-white pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                <span className="block mb-2 text-lg font-semibold text-primary">
                  Pricing Table
                </span>
                <h2 className="text-dark mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px] dark:text-white">
                  Our Pricing Plan
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center -mx-4">
            {plans.map((item, index) => (
              <div key={index} className="w-full px-4 md:w-1/2 lg:w-1/3">
                <div className="border-stroke shadow-pricing dark:border-dark-3 dark:bg-dark-2 relative z-10 mb-10 overflow-hidden rounded-[10px] border-2 bg-white px-8 py-10 sm:p-12 lg:px-6 lg:py-10 xl:p-[50px]">
                  <span className="block mb-3 text-lg font-semibold text-primary">
                    {item.name}
                  </span>
                  <h2 className="text-dark mb-5 text-[42px] font-bold dark:text-white">
                    <span>{item.price}</span>
                    <span className="text-base font-medium text-body-color dark:text-dark-6">
                      / year
                    </span>
                  </h2>
                  <p className="pb-8 mb-8 text-base border-b border-stroke text-body-color dark:border-dark-3 dark:text-dark-6">
                    {item.description}
                  </p>
                  <div className="mb-9 flex flex-col gap-[14px]">
                    {item.features.map((feature, featureIndex) => (
                      <p
                        key={featureIndex}
                        className="text-base text-body-color dark:text-dark-6"
                      >
                        {feature}
                      </p>
                    ))}
                  </div>
                  <Link
                    to={item.button.link}
                    className={`${item.popular ? "border-primary bg-primary hover:bg-primary/90 text-white" : "border-stroke text-primary hover:border-primary hover:bg-primary dark:border-dark-3 bg-transparent hover:text-white"} text-primary block w-full rounded-md border p-3 text-center text-base font-medium transition`}
                  >
                    {item.button.text}
                  </Link>

                  <div>
                    <span className="absolute top-7 right-0 z-[-1]">
                      <ShapeFive />
                    </span>
                    <span className="absolute top-4 right-4 z-[-1]">
                      <ShapeSix />
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
