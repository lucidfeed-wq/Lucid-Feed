import React from "react";

const Pricing3 = () => {
  return (
    <section className="relative z-20 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Pricing Table
              </span>
              <h2 className="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px]">
                Awesome Pricing Plan
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
            price="25.00"
            subscription="Per Month"
            title="Features"
            buttonText="Purchase Now"
          >
            <List>Up to 1 User</List>
            <List>All UI components</List>
            <List>Lifetime access</List>
            <List>Free updates</List>
          </PricingCard>
          <PricingCard
            type="Basic"
            price="59.00"
            subscription="Per Month"
            title="Features"
            buttonText="Purchase Now"
            active
          >
            <List>Up to 1 User</List>
            <List>All UI components</List>
            <List>Lifetime access</List>
            <List>Free updates</List>
          </PricingCard>
          <PricingCard
            type="Premium"
            price="99.00"
            subscription="Per Month"
            title="Features"
            buttonText="Purchase Now"
          >
            <List>Up to 1 User</List>
            <List>All UI components</List>
            <List>Lifetime access</List>
            <List>Free updates</List>
          </PricingCard>
        </div>
      </div>
    </section>
  );
};

export default Pricing3;

const PricingCard = ({
  children,
  title,
  price,
  type,
  subscription,
  buttonText,
  active,
}) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="relative z-10 mb-10 overflow-hidden rounded-xl bg-white px-8 py-10 shadow-pricing-2 dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-14">
          {active && (
            <p className="absolute right-[-50px] top-[60px] inline-block -rotate-90 rounded-bl-md rounded-tl-md bg-primary px-5 py-2 text-base font-medium text-white">
              Recommended
            </p>
          )}
          <span className="mb-5 block text-xl font-medium text-dark dark:text-white">
            {type}
          </span>
          <h2 className="mb-11 text-4xl font-semibold text-dark dark:text-white xl:text-[42px]">
            <span className="text-xl font-medium">$ </span>
            {price}
            <span className="pl-1 text-base text-body-color dark:text-dark-6">
              {subscription}
            </span>
          </h2>
          <div className="mb-7">
            <h5 className="mb-5 text-lg font-medium text-dark dark:text-white">
              {title}
            </h5>
            <div className="flex flex-col gap-[14px]">{children}</div>
          </div>
          <a
            href="/#"
            className="inline-block rounded-md bg-primary px-7 py-3 text-center text-base font-medium text-white transition hover:bg-blue-dark"
          >
            {buttonText}
          </a>
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
