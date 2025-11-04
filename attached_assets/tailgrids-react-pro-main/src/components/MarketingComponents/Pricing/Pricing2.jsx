import React from "react";

const Pricing2 = () => {
  return (
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

        <div className="flex flex-wrap items-center justify-center lg:flex-nowrap">
          <PricingCard
            type="STARTING FROM"
            price="€ 19.99"
            subscription="mo"
            buttonText="Purchase Now"
            first
          >
            <List>1 User</List>
            <List>All UI components</List>
            <List>Lifetime access</List>
            <List>Free updates</List>
            <List>Use on 1 (one) project</List>
            <List>3 Months support</List>
          </PricingCard>
          <PricingCard
            type="STARTING FROM"
            price="€ 19.99"
            subscription="mo"
            buttonText="Purchase Now"
            active
          >
            <List active>5 User</List>
            <List active>All UI components</List>
            <List active>Lifetime access</List>
            <List active>Free updates</List>
            <List active>Use on31 (Three) project</List>
            <List active>4 Months support</List>
          </PricingCard>
          <PricingCard
            type="STARTING FROM"
            price="€ 70.99"
            subscription="mo"
            buttonText="Purchase Now"
            last
          >
            <List>Unlimited User</List>
            <List>All UI components</List>
            <List>Lifetime access</List>
            <List>Free updates</List>
            <List>Unlimited project</List>
            <List>12 Months support</List>
          </PricingCard>
        </div>
      </div>
    </section>
  );
};

export default Pricing2;

const PricingCard = ({
  children,
  price,
  type,
  subscription,
  buttonText,
  active,
  first,
  last,
}) => {
  return (
    <div
      className={`w-full ${active ? "lg:max-w-[370px]" : "lg:max-w-[406px]"}`}
    >
      <div
        className={` ${
          active
            ? "relative z-10 mb-10 overflow-hidden rounded-xl bg-primary bg-linear-to-b from-primary to-[#179BEE] px-8 py-10 text-center shadow-pricing sm:p-12 lg:px-6 lg:py-10 xl:px-[50px] xl:pb-10 xl:pt-[55px]"
            : `relative z-10 mb-10 overflow-hidden rounded-xl border-2 border-[#D4DEFF] bg-white px-8 py-10 text-center drop-shadow-pricing dark:border-dark-3 dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:px-[50px] xl:pb-[50px] xl:pt-[45px]`
        } ${first && "lg:rounded-r-none lg:border-r-0"} ${
          last && "lg:rounded-l-none lg:border-l-0"
        } `}
      >
        {active && (
          <span className="mb-5 inline-block rounded-full border px-6 py-2 text-base font-semibold uppercase text-white">
            POPULAR
          </span>
        )}
        <span
          className={`mb-2 block text-base font-medium uppercase ${
            active ? `text-white` : `text-dark dark:text-white`
          }`}
        >
          {type}
        </span>
        <h2
          className={`mb-9 text-[28px] font-semibold ${
            active ? `text-white` : `text-primary`
          }`}
        >
          {price} / {subscription}
        </h2>
        <div className="mb-9 flex flex-col gap-4">{children}</div>
        <div className="w-full">
          <a
            href="/#"
            className={` ${
              active
                ? "inline-block rounded-full border border-white bg-white px-[50px] py-3 text-center text-base font-medium text-primary shadow-1 transition hover:bg-gray-2 hover:text-body-color"
                : "inline-block rounded-full border border-stroke bg-transparent px-[50px] py-3 text-center text-base font-medium text-primary shadow-1 transition hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:shadow-none"
            } `}
          >
            {buttonText}
          </a>
        </div>
        {first && (
          <span className="absolute bottom-0 left-0 z-[-1] block h-14 w-14 rounded-tr-full bg-primary"></span>
        )}
        {last && (
          <span className="absolute right-0 top-0 z-[-1] block h-14 w-14 rounded-bl-full bg-secondary"></span>
        )}
        {active && (
          <div>
            <span className="absolute right-0 top-0 z-[-1]">
              <svg
                width="115"
                height="188"
                viewBox="0 0 115 188"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.8728 74.7487C-7.29746 54.3102 0.420245 11.2655 2.4266 -7.93432L142.717 -13.0439C158.15 54.3102 178.924 188.74 138.55 187.625C88.0822 186.231 71.1788 165.278 69.562 139.316C67.7108 109.587 53.1242 96.6453 21.8728 74.7487Z"
                  fill="white"
                  fillOpacity="0.06"
                ></path>
              </svg>
            </span>
            <span className="absolute bottom-0 left-0 z-[-1]">
              <svg
                width="61"
                height="222"
                viewBox="0 0 61 222"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M54.4989 22.7537C40.0989 -6.94625 0.165607 -1.32733 -18.0011 5.19463C-36.1677 76.1 -36.4871 199.841 -18.0011 245.002C4.99936 301.191 67.5 262.561 54.4989 217.911C48.8553 198.528 22.9989 168.244 34.9989 136.637C46.9989 105.031 72.4989 59.8787 54.4989 22.7537Z"
                  fill="white"
                  fillOpacity="0.06"
                ></path>
              </svg>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

const List = ({ children, active }) => {
  return (
    <p
      className={`mb-1 text-base font-medium leading-loose ${
        active ? `text-white` : `text-body-color dark:text-dark-6`
      }`}
    >
      {children}
    </p>
  );
};
