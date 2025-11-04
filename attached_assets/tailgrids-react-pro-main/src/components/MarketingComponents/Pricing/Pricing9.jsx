import React from "react";

const Pricing9 = () => {
  return (
    <section className="relative z-20 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Our Pricing Plans
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.208] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                Pricing & plans
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
            subTitle="Lorem Ipsum simply dummy text of the printing."
            trial="1 month free trial"
            price="9.99"
            subscription="month"
            title="Features"
            button="Buy Now"
          >
            <List>Application UI Components</List>
            <List>Use on Unlimited Projects</List>
            <List>Personal and Commercial Use</List>
            <List>Use on Unlimited Projects</List>
            <List>Downloadable Offline Files</List>
            <List>Figma Source File</List>
          </PricingCard>
          <PricingCard
            type="professional"
            subTitle="Lorem Ipsum simply dummy text of the printing."
            trial="1 month free trial"
            price="29.99"
            subscription="month"
            title="Features"
            button="Buy Now"
            active
          >
            <List>Application UI Components</List>
            <List>Use on Unlimited Projects</List>
            <List>Personal and Commercial Use</List>
            <List>Use on Unlimited Projects</List>
            <List>Downloadable Offline Files</List>
            <List>Figma Source File</List>
          </PricingCard>
          <PricingCard
            type="Premium"
            subTitle="Lorem Ipsum simply dummy text of the printing."
            trial="1 month free trial"
            price="99.99"
            subscription="month"
            title="Features"
            button="Buy Now"
          >
            <List>Application UI Components</List>
            <List>Use on Unlimited Projects</List>
            <List>Personal and Commercial Use</List>
            <List>Use on Unlimited Projects</List>
            <List>Downloadable Offline Files</List>
            <List>Figma Source File</List>
          </PricingCard>
        </div>
      </div>
    </section>
  );
};

export default Pricing9;

const PricingCard = ({
  children,
  subTitle,
  price,
  type,
  subscription,
  trial,
  button,
  active,
}) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="relative z-10 mb-10 overflow-hidden bg-white px-6 py-12 text-center shadow-pricing-7 dark:bg-dark-2 sm:px-12 lg:px-6 xl:px-[50px]">
          {active && (
            <p className="absolute -right-9 top-5 inline-flex rotate-45 bg-primary px-12 py-2 text-base font-medium text-white">
              Popular
            </p>
          )}
          <div className="mb-8 border-b border-stroke pb-8 dark:border-dark-3">
            <span className="mb-[14px] block text-[22px] font-semibold leading-[28px] text-dark dark:text-white">
              {type}
            </span>
            <p className="mx-auto max-w-[200px] text-sm text-body-color dark:text-dark-6">
              {subTitle}
            </p>
          </div>
          <div className="mb-11 space-y-[14px]">{children}</div>
          <h2 className="mb-6 text-4xl font-bold text-dark dark:text-white xl:text-[42px] xl:leading-[1.21]">
            <sup className="-top-5 text-xl font-medium text-body-color dark:text-dark-6">
              $
            </sup>
            <span> {price} </span>
            <span className="text-base font-medium text-body-color dark:text-dark-6">
              /{subscription}
            </span>
          </h2>

          <a
            href="/#"
            className={`mb-3 inline-block rounded-md border border-primary px-9 py-[11px] text-center text-base font-medium transition xl:px-[66px] ${
              active
                ? "bg-primary text-white hover:bg-blue-dark"
                : "bg-transparent text-primary hover:bg-primary hover:text-white"
            } `}
          >
            {button}
          </a>
          <p className="text-sm text-body-color dark:text-dark-6">{trial}</p>
        </div>
      </div>
    </>
  );
};

const List = ({ children }) => {
  return <p className="text-base text-body-color">{children}</p>;
};
