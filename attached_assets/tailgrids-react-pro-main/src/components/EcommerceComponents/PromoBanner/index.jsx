import React from "react";

const PromoBanner = () => {
  return (
    <section className="py-20 dark:bg-dark lg:py-[100px] xl:py-[120px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap gap-y-8">
          <PromoCard
            img="https://cdn.tailgrids.com/2.0/image/ecommerce/images/promo-banner/product-banner-01.png"
            title="For Women's"
            subtitle="New Bra & Tight Pairings"
            buttonLink="/#"
            buttonText="SHOP NOW"
          />
          <PromoCard
            img="https://cdn.tailgrids.com/2.0/image/ecommerce/images/promo-banner/product-banner-02.png"
            title="For Men's"
            subtitle="New Bra & Tight Pairings"
            buttonLink="/#"
            buttonText="SHOP NOW"
          />
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;

const PromoCard = ({ img, title, subtitle, buttonText, buttonLink }) => {
  return (
    <div className="w-full px-4 md:w-1/2">
      <div className="relative overflow-hidden rounded-xl bg-gray-2 px-6 py-11 dark:bg-dark-2 sm:px-10 lg:py-[88px]">
        <img
          className="absolute bottom-0 right-0 w-full"
          src={img}
          alt="Banner"
        />
        <div className="z-1 relative w-2/3 lg:w-3/4 xl:w-1/2">
          <h4 className="mb-3 text-lg font-semibold text-dark dark:text-white">
            {title}
          </h4>
          <h2 className="text-xl font-bold text-dark dark:text-white lg:text-3xl">
            {subtitle}
          </h2>
          <a
            href={buttonLink}
            className="mt-8 inline-flex items-center gap-3 font-medium text-dark hover:text-primary dark:text-white xl:mt-[70px]"
          >
            {buttonText}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.6 11.4L13.8375 3.525C13.5 3.1875 12.975 3.1875 12.6375 3.525C12.3 3.8625 12.3 4.3875 12.6375 4.725L18.9375 11.1375H2.99999C2.54999 11.1375 2.17499 11.5125 2.17499 11.9625C2.17499 12.4125 2.54999 12.825 2.99999 12.825H19.0125L12.6375 19.3125C12.3 19.65 12.3 20.175 12.6375 20.5125C12.7875 20.6625 13.0125 20.7375 13.2375 20.7375C13.4625 20.7375 13.6875 20.6625 13.8375 20.475L21.6 12.6C21.9375 12.2625 21.9375 11.7375 21.6 11.4Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
