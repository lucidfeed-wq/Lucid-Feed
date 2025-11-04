import React from "react";

const Pricing4 = () => {
  return (
    <section className="relative z-20 overflow-hidden bg-[#090E34] py-20 lg:py-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 xl:w-10/12">
            <div className="mb-[60px] max-w-[510px]">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Pricing Plan
              </span>
              <h2 className="mb-3 text-3xl font-bold text-white sm:text-4xl">
                Our Best Pricing
              </h2>
              <p className="text-base text-body-color">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          <PricingCard
            type="Basic Pricing"
            price="$59"
            subscription="Only once within 6 months"
            buttonLink="/#"
            buttonText="Buy Now"
          >
            <div className="w-full px-4 md:w-1/3 lg:w-1/4">
              <List>Up to 1 User</List>
              <List>All UI components</List>
              <List>Lifetime access</List>
              <List>Free updates</List>
            </div>
            <div className="w-full px-4 md:w-1/3 lg:w-1/4">
              <List>Up to 1 User</List>
              <List>All UI components</List>
              <List notChecked>Lifetime access</List>
              <List>Free updates</List>
            </div>
            <div className="w-full px-4 md:w-1/3 lg:w-1/4">
              <List notChecked>Up to 1 User</List>
              <List>All UI components</List>
              <List>Lifetime access</List>
              <List notChecked>Free updates</List>
            </div>
          </PricingCard>
          <PricingCard
            type="Premium Pricing"
            price="$130"
            subscription="Only once within 6 months"
            buttonLink="/#"
            buttonText="Buy Now"
            active
          >
            <div className="w-full px-4 md:w-1/3 lg:w-1/4">
              <List>Up to 1 User</List>
              <List>All UI components</List>
              <List>Lifetime access</List>
              <List>Free updates</List>
            </div>
            <div className="w-full px-4 md:w-1/3 lg:w-1/4">
              <List>Up to 1 User</List>
              <List>All UI components</List>
              <List notChecked>Lifetime access</List>
              <List>Free updates</List>
            </div>
            <div className="w-full px-4 md:w-1/3 lg:w-1/4">
              <List notChecked>Up to 1 User</List>
              <List>All UI components</List>
              <List>Lifetime access</List>
              <List notChecked>Free updates</List>
            </div>
          </PricingCard>
        </div>
      </div>
    </section>
  );
};

export default Pricing4;

const PricingCard = ({
  children,
  price,
  type,
  subscription,
  buttonText,
  buttonLink,
  active,
}) => {
  return (
    <div className="w-full px-4 xl:w-10/12">
      <div className="relative z-10 mb-[50px] overflow-hidden rounded-xl border-2 border-white/20 px-11 py-10">
        <h3 className="mb-11 text-[22px] font-medium text-white">{type}</h3>
        <div className="-mx-4 flex flex-wrap">
          {children}
          <div className="w-full px-4 md:w-1/2 lg:w-1/4">
            <div className="mt-10 w-full lg:mt-0">
              <h3 className="mb-[22px] text-[35px] font-bold leading-none text-white">
                {price}
              </h3>
              <a
                href={buttonLink}
                className={`mb-[18px] inline-block rounded-md px-7 py-2 text-base font-medium text-white ${
                  active ? "bg-secondary hover:bg-secondary/90" : "bg-primary hover:bg-primary/90"
                }`}
              >
                {buttonText}
              </a>
              <p className="text-base text-secondary-color">{subscription}</p>
            </div>
          </div>
        </div>
        <span className="absolute right-4 top-4 z-[-1]">
          <svg
            width="28"
            height="64"
            viewBox="0 0 28 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="26.4177"
              cy="62.4892"
              r="1.42021"
              transform="rotate(180 26.4177 62.4892)"
              fill="white"
              fillOpacity="0.72"
            />
            <circle
              cx="26.4177"
              cy="38.3457"
              r="1.42021"
              transform="rotate(180 26.4177 38.3457)"
              fill="white"
              fillOpacity="0.72"
            />
            <circle
              cx="26.4177"
              cy="13.634"
              r="1.42021"
              transform="rotate(180 26.4177 13.634)"
              fill="white"
              fillOpacity="0.72"
            />
            <circle
              cx="26.4177"
              cy="50.2753"
              r="1.42021"
              transform="rotate(180 26.4177 50.2753)"
              fill="white"
              fillOpacity="0.72"
            />
            <circle
              cx="26.4177"
              cy="26.1318"
              r="1.42021"
              transform="rotate(180 26.4177 26.1318)"
              fill="white"
              fillOpacity="0.72"
            />
            <circle
              cx="26.4177"
              cy="1.42012"
              r="1.42021"
              transform="rotate(180 26.4177 1.42012)"
              fill="white"
              fillOpacity="0.72"
            />
            <circle
              cx="13.9196"
              cy="62.4892"
              r="1.42021"
              transform="rotate(180 13.9196 62.4892)"
              fill="white"
              fillOpacity="0.72"
            />
            <circle
              cx="13.9196"
              cy="38.3457"
              r="1.42021"
              transform="rotate(180 13.9196 38.3457)"
              fill="white"
              fillOpacity="0.72"
            />
            <circle
              cx="13.9196"
              cy="13.634"
              r="1.42021"
              transform="rotate(180 13.9196 13.634)"
              fill="white"
              fillOpacity="0.72"
            />
            <circle
              cx="13.9196"
              cy="50.2753"
              r="1.42021"
              transform="rotate(180 13.9196 50.2753)"
              fill="white"
              fillOpacity="0.72"
            />
            <circle
              cx="13.9196"
              cy="26.1318"
              r="1.42021"
              transform="rotate(180 13.9196 26.1318)"
              fill="white"
              fillOpacity="0.72"
            />
            <circle
              cx="13.9196"
              cy="1.42012"
              r="1.42021"
              transform="rotate(180 13.9196 1.42012)"
              fill="white"
              fillOpacity="0.72"
            />
            <circle
              cx="1.42159"
              cy="62.4892"
              r="1.42021"
              transform="rotate(180 1.42159 62.4892)"
              fill="white"
              fillOpacity="0.72"
            />
            <circle
              cx="1.42159"
              cy="38.3457"
              r="1.42021"
              transform="rotate(180 1.42159 38.3457)"
              fill="white"
              fillOpacity="0.72"
            />
            <circle
              cx="1.42159"
              cy="13.634"
              r="1.42021"
              transform="rotate(180 1.42159 13.634)"
              fill="white"
              fillOpacity="0.72"
            />
            <circle
              cx="1.42159"
              cy="50.2753"
              r="1.42021"
              transform="rotate(180 1.42159 50.2753)"
              fill="white"
              fillOpacity="0.72"
            />
            <circle
              cx="1.42159"
              cy="26.1318"
              r="1.42021"
              transform="rotate(180 1.42159 26.1318)"
              fill="white"
              fillOpacity="0.72"
            />
            <circle
              cx="1.42159"
              cy="1.42012"
              r="1.42021"
              transform="rotate(180 1.42159 1.42012)"
              fill="white"
              fillOpacity="0.72"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

const List = ({ children, notChecked }) => {
  return (
    <p
      className={`mb-4 flex text-base ${
        notChecked ? "text-body-color" : "text-gray-7"
      }`}
    >
      <span className="mr-2 pt-[3px]">
        {notChecked ? (
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            className="fill-current"
          >
            <path d="M9.13828 0.365479C4.35703 0.365479 0.503906 4.2186 0.503906 8.99985C0.503906 13.7811 4.35703 17.6624 9.13828 17.6624C13.9195 17.6624 17.8008 13.7811 17.8008 8.99985C17.8008 4.2186 13.9195 0.365479 9.13828 0.365479ZM9.13828 16.678C4.91953 16.678 1.48828 13.2186 1.48828 8.99985C1.48828 4.7811 4.91953 1.34985 9.13828 1.34985C13.357 1.34985 16.8164 4.7811 16.8164 8.99985C16.8164 13.2186 13.357 16.678 9.13828 16.678Z"></path>
            <path d="M11.727 6.4123C11.5301 6.21543 11.2207 6.21543 11.0238 6.4123L9.13945 8.29668L7.25508 6.4123C7.0582 6.21543 6.74883 6.21543 6.55195 6.4123C6.35508 6.60918 6.35508 6.91855 6.55195 7.11543L8.43633 8.99981L6.55195 10.8842C6.35508 11.0811 6.35508 11.3904 6.55195 11.5873C6.63633 11.6717 6.77695 11.7279 6.88945 11.7279C7.00195 11.7279 7.14258 11.6717 7.22695 11.5873L9.11133 9.70293L10.9957 11.5873C11.0801 11.6717 11.2207 11.7279 11.3332 11.7279C11.4457 11.7279 11.5863 11.6717 11.6707 11.5873C11.8676 11.3904 11.8676 11.0811 11.6707 10.8842L9.84258 8.99981L11.727 7.11543C11.8957 6.91855 11.8957 6.60918 11.727 6.4123Z"></path>
          </svg>
        ) : (
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            className="fill-current"
          >
            <path d="M8.9547 17.6624C4.19724 17.6624 0.363281 13.7811 0.363281 8.99985C0.363281 4.2186 4.19724 0.365479 8.9547 0.365479C13.7122 0.365479 17.5741 4.2186 17.5741 8.99985C17.5741 13.7811 13.7122 17.6624 8.9547 17.6624ZM8.9547 1.34985C4.75694 1.34985 1.34276 4.7811 1.34276 8.99985C1.34276 13.2186 4.75694 16.678 8.9547 16.678C13.1525 16.678 16.5946 13.2186 16.5946 8.99985C16.5946 4.7811 13.1525 1.34985 8.9547 1.34985Z" />
            <path d="M8.00222 10.9688C7.80632 10.9688 7.63841 10.9125 7.4705 10.7719L5.62348 8.97187C5.42759 8.775 5.42759 8.46563 5.62348 8.26875C5.81938 8.07187 6.12722 8.07187 6.32311 8.26875L8.00222 9.92812L11.5843 6.44062C11.7802 6.24375 12.088 6.24375 12.2839 6.44062C12.4798 6.6375 12.4798 6.94688 12.2839 7.14375L8.56192 10.8C8.36602 10.9125 8.17013 10.9688 8.00222 10.9688Z" />
          </svg>
        )}
      </span>
      {children}
    </p>
  );
};
