import React from "react";

const Pricing8 = () => {
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
                Choose your best plan
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
            type="BASIC"
            price="25"
            subscription="per Month"
            subTitle="Lorem Ipsum simply dummy text of the printing."
            button="Purchase Now"
          >
            <List>Up to 1 User</List>
            <List>All UI components</List>
            <List>Lifetime access</List>
            <List>Free updates</List>
            <List>Community Support</List>
            <List>Downloadable Files</List>
          </PricingCard>
          <PricingCard
            type="BUSINESS"
            price="89"
            subscription="per Month"
            subTitle="Lorem Ipsum simply dummy text of the printing."
            button="Purchase Now"
            active
          >
            <List active>Up to 5 User</List>
            <List active>All UI components</List>
            <List active>Lifetime access</List>
            <List active>Free updates</List>
            <List active>Community Support</List>
            <List active>Downloadable Files</List>
          </PricingCard>
          <PricingCard
            type="ENTERPRISE"
            price="395"
            subscription="per Month"
            subTitle="Lorem Ipsum simply dummy text of the printing."
            button="Purchase Now"
          >
            <List>Up to 50 User</List>
            <List>All UI components</List>
            <List>Lifetime access</List>
            <List>Free updates</List>
            <List>Community Support</List>
            <List>Downloadable Files</List>
          </PricingCard>
        </div>
      </div>
    </section>
  );
};

export default Pricing8;

const PricingCard = ({
  children,
  price,
  type,
  subscription,
  subTitle,
  button,
  active,
}) => {
  return (
    <div className="w-full max-w-[300px] px-4">
      <div
        className={` ${
          active
            ? `relative z-10 mb-10 overflow-hidden rounded-xl bg-primary px-7 py-10 text-center shadow-card sm:px-9`
            : `relative z-10 mb-10 overflow-hidden rounded-xl bg-white px-7 py-10 text-center shadow-pricing-6 dark:bg-dark-2 sm:px-9`
        } `}
      >
        <span
          className={`mb-5 block text-lg font-medium uppercase ${
            active ? `text-white` : `text-body-color dark:text-dark-6`
          }`}
        >
          {type}
        </span>
        <h2
          className={`mb-4 text-4xl font-extrabold xl:text-[42px] xl:leading-[1.21] ${
            active ? `text-white` : `text-primary`
          }`}
        >
          <sup className="-top-5 text-xl font-semibold">$</sup>
          <span> {price} </span>
          <span
            className={`block text-base font-normal ${
              active ? `text-white` : `text-body-color dark:text-dark-6`
            }`}
          >
            {subscription}
          </span>
        </h2>
        <p
          className={`mb-8 text-sm ${
            active ? `text-white` : `text-body-color dark:text-dark-6`
          }`}
        >
          {subTitle}
        </p>
        <div className="mb-9">
          <a
            href="/#"
            className={` ${
              active
                ? `inline-block rounded-full bg-white px-7 py-[13px] text-center text-base font-medium text-dark transition hover:bg-white/90`
                : `inline-block rounded-full bg-primary px-7 py-[13px] text-center text-base font-medium text-white transition hover:bg-blue-dark`
            } `}
          >
            {button}
          </a>
        </div>
        <div className="space-y-[14px]">{children}</div>
        {active && (
          <div>
            <span className="absolute -top-10 left-0 -z-10">
              <svg
                width="310"
                height="279"
                viewBox="0 0 310 279"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  opacity="0.15"
                  x="-15.1777"
                  y="36.5864"
                  width="271.285"
                  height="275.397"
                  transform="rotate(-28.5338 -15.1777 36.5864)"
                  fill="url(#paint0_linear_1343_342)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1343_342"
                    x1="120.465"
                    y1="36.5864"
                    x2="120.465"
                    y2="311.984"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span className="absolute left-0 top-7 -z-10">
              <svg
                width="90"
                height="197"
                viewBox="0 0 90 197"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  opacity="0.15"
                  x="-38"
                  y="17.0093"
                  width="34.1632"
                  height="204.648"
                  transform="rotate(-28.5338 -38 17.0093)"
                  fill="url(#paint0_linear_1343_343)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1343_343"
                    x1="-20.9184"
                    y1="17.0093"
                    x2="-20.9184"
                    y2="221.658"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span className="absolute -bottom-10 right-0 -z-10">
              <svg
                width="310"
                height="269"
                viewBox="0 0 310 269"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  opacity="0.15"
                  x="313.564"
                  y="234.562"
                  width="270.976"
                  height="266.92"
                  transform="rotate(151.466 313.564 234.562)"
                  fill="url(#paint0_linear_1343_344)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1343_344"
                    x1="449.053"
                    y1="234.562"
                    x2="449.053"
                    y2="501.482"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span className="absolute bottom-7 right-0 -z-10">
              <svg
                width="91"
                height="191"
                viewBox="0 0 91 191"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  opacity="0.15"
                  x="129.059"
                  y="170.938"
                  width="40.8041"
                  height="194.57"
                  transform="rotate(151.466 129.059 170.938)"
                  fill="url(#paint0_linear_1343_345)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1343_345"
                    x1="149.461"
                    y1="170.937"
                    x2="149.461"
                    y2="365.508"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                </defs>
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
      className={`text-base ${
        active ? `text-white` : `text-body-color dark:text-dark-6`
      }`}
    >
      {children}
    </p>
  );
};
