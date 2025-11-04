import React from "react";

const Pricing7 = () => {
  return (
    <section className="relative z-20 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Pricing Table
              </span>
              <h2 className="mb-4 text-3xl font-bold leading-[1.208] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                Our Pricing Plan
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          <PricingCard
            type="Starter"
            price="25"
            subscription="Month"
            button="Purchase Now"
            buttonSecondary
          >
            <List>Core UI Components</List>
            <List>Use on Unlimited Projects</List>
            <List>Personal and Commercial Use</List>
            <List>Lifetime Free Updates</List>
            <List>Lifetime Free Updates</List>
            <List>Figma Source File</List>
          </PricingCard>
          <PricingCard
            type="Business"
            price="59"
            subscription="Month"
            button="Purchase Now"
            buttonPrimary
          >
            <List>Core UI Components</List>
            <List>Use on Unlimited Projects</List>
            <List>Personal and Commercial Use</List>
            <List>Lifetime Free Updates</List>
            <List>Lifetime Free Updates</List>
            <List>Figma Source File</List>
          </PricingCard>
          <PricingCard
            type="Extended"
            price="199"
            subscription="Month"
            button="Purchase Now"
            buttonBlack
          >
            <List>Core UI Components</List>
            <List>Use on Unlimited Projects</List>
            <List>Personal and Commercial Use</List>
            <List>Lifetime Free Updates</List>
            <List>Lifetime Free Updates</List>
            <List>Figma Source File</List>
          </PricingCard>
        </div>
      </div>
    </section>
  );
};

export default Pricing7;

const PricingCard = ({
  children,
  price,
  type,
  subscription,
  button,
  buttonPrimary,
  buttonSecondary,
  buttonBlack,
  active,
}) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="relative z-10 mb-10 overflow-hidden rounded-xl bg-white px-8 py-10 text-center shadow-pricing-5 dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-14">
          <span className="mb-4 block text-xl font-medium text-dark dark:text-white">
            {type}
          </span>
          <h2 className="mb-10 text-4xl font-semibold text-dark dark:text-white xl:mb-[50px] xl:text-[42px] xl:leading-[1.24]">
            <sup className="-top-5 text-xl font-medium">$</sup>
            <span className="px-0.5"> {price} </span>
            <span className="text-base text-body-color dark:text-dark-6">
              {subscription}
            </span>
          </h2>
          <div className="mb-12 space-y-3">{children}</div>

          <a
            href="/#"
            className={`inline-block rounded-md px-7 py-[13px] text-center text-base font-medium text-white transition ${
              buttonPrimary && "bg-primary hover:bg-primary/90"
            } ${buttonSecondary && "bg-secondary hover:bg-secondary/90"} ${
              buttonBlack && "bg-dark hover:bg-dark/90"
            } `}
          >
            {button}
          </a>

          <div>
            <span className="absolute bottom-3 left-3 -z-10">
              <svg
                width="28"
                height="64"
                viewBox="0 0 28 64"
                className={`fill-current ${
                  (buttonPrimary && "text-primary") ||
                  (buttonSecondary && "text-secondary") ||
                  (buttonBlack && "text-dark")
                }`}
              >
                <circle
                  cx="26.4157"
                  cy="62.489"
                  r="1.42021"
                  transform="rotate(180 26.4157 62.489)"
                />
                <circle
                  cx="26.4157"
                  cy="38.3454"
                  r="1.42021"
                  transform="rotate(180 26.4157 38.3454)"
                />
                <circle
                  cx="26.4157"
                  cy="13.6335"
                  r="1.42021"
                  transform="rotate(180 26.4157 13.6335)"
                />
                <circle
                  cx="26.4157"
                  cy="50.2751"
                  r="1.42021"
                  transform="rotate(180 26.4157 50.2751)"
                />
                <circle
                  cx="26.4157"
                  cy="26.1315"
                  r="1.42021"
                  transform="rotate(180 26.4157 26.1315)"
                />
                <circle
                  cx="26.4157"
                  cy="1.42012"
                  r="1.42021"
                  transform="rotate(180 26.4157 1.42012)"
                />
                <circle
                  cx="13.9177"
                  cy="62.489"
                  r="1.42021"
                  transform="rotate(180 13.9177 62.489)"
                />
                <circle
                  cx="13.9177"
                  cy="38.3454"
                  r="1.42021"
                  transform="rotate(180 13.9177 38.3454)"
                />
                <circle
                  cx="13.9177"
                  cy="13.6335"
                  r="1.42021"
                  transform="rotate(180 13.9177 13.6335)"
                />
                <circle
                  cx="13.9177"
                  cy="50.2751"
                  r="1.42021"
                  transform="rotate(180 13.9177 50.2751)"
                />
                <circle
                  cx="13.9177"
                  cy="26.1315"
                  r="1.42021"
                  transform="rotate(180 13.9177 26.1315)"
                />
                <circle
                  cx="13.9177"
                  cy="1.42012"
                  r="1.42021"
                  transform="rotate(180 13.9177 1.42012)"
                />
                <circle
                  cx="1.41963"
                  cy="62.489"
                  r="1.42021"
                  transform="rotate(180 1.41963 62.489)"
                />
                <circle
                  cx="1.41963"
                  cy="38.3454"
                  r="1.42021"
                  transform="rotate(180 1.41963 38.3454)"
                />
                <circle
                  cx="1.41963"
                  cy="13.6335"
                  r="1.42021"
                  transform="rotate(180 1.41963 13.6335)"
                />
                <circle
                  cx="1.41963"
                  cy="50.2751"
                  r="1.42021"
                  transform="rotate(180 1.41963 50.2751)"
                />
                <circle
                  cx="1.41963"
                  cy="26.1315"
                  r="1.42021"
                  transform="rotate(180 1.41963 26.1315)"
                />
                <circle
                  cx="1.41963"
                  cy="1.42012"
                  r="1.42021"
                  transform="rotate(180 1.41963 1.42012)"
                />
              </svg>
            </span>
            <span className="absolute right-3 top-3 -z-10">
              <svg
                width="28"
                height="64"
                viewBox="0 0 28 64"
                className={`fill-current ${
                  (buttonPrimary && "text-primary") ||
                  (buttonSecondary && "text-secondary") ||
                  (buttonBlack && "text-black")
                }`}
              >
                <circle
                  cx="26.4157"
                  cy="62.489"
                  r="1.42021"
                  transform="rotate(180 26.4157 62.489)"
                />
                <circle
                  cx="26.4157"
                  cy="38.3454"
                  r="1.42021"
                  transform="rotate(180 26.4157 38.3454)"
                />
                <circle
                  cx="26.4157"
                  cy="13.6335"
                  r="1.42021"
                  transform="rotate(180 26.4157 13.6335)"
                />
                <circle
                  cx="26.4157"
                  cy="50.2751"
                  r="1.42021"
                  transform="rotate(180 26.4157 50.2751)"
                />
                <circle
                  cx="26.4157"
                  cy="26.1315"
                  r="1.42021"
                  transform="rotate(180 26.4157 26.1315)"
                />
                <circle
                  cx="26.4157"
                  cy="1.42012"
                  r="1.42021"
                  transform="rotate(180 26.4157 1.42012)"
                />
                <circle
                  cx="13.9177"
                  cy="62.489"
                  r="1.42021"
                  transform="rotate(180 13.9177 62.489)"
                />
                <circle
                  cx="13.9177"
                  cy="38.3454"
                  r="1.42021"
                  transform="rotate(180 13.9177 38.3454)"
                />
                <circle
                  cx="13.9177"
                  cy="13.6335"
                  r="1.42021"
                  transform="rotate(180 13.9177 13.6335)"
                />
                <circle
                  cx="13.9177"
                  cy="50.2751"
                  r="1.42021"
                  transform="rotate(180 13.9177 50.2751)"
                />
                <circle
                  cx="13.9177"
                  cy="26.1315"
                  r="1.42021"
                  transform="rotate(180 13.9177 26.1315)"
                />
                <circle
                  cx="13.9177"
                  cy="1.42012"
                  r="1.42021"
                  transform="rotate(180 13.9177 1.42012)"
                />
                <circle
                  cx="1.41963"
                  cy="62.489"
                  r="1.42021"
                  transform="rotate(180 1.41963 62.489)"
                />
                <circle
                  cx="1.41963"
                  cy="38.3454"
                  r="1.42021"
                  transform="rotate(180 1.41963 38.3454)"
                />
                <circle
                  cx="1.41963"
                  cy="13.6335"
                  r="1.42021"
                  transform="rotate(180 1.41963 13.6335)"
                />
                <circle
                  cx="1.41963"
                  cy="50.2751"
                  r="1.42021"
                  transform="rotate(180 1.41963 50.2751)"
                />
                <circle
                  cx="1.41963"
                  cy="26.1315"
                  r="1.42021"
                  transform="rotate(180 1.41963 26.1315)"
                />
                <circle
                  cx="1.41963"
                  cy="1.42012"
                  r="1.42021"
                  transform="rotate(180 1.41963 1.42012)"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

const List = ({ children }) => {
  return (
    <p className="text-base text-body-color dark:text-dark-6">{children}</p>
  );
};
