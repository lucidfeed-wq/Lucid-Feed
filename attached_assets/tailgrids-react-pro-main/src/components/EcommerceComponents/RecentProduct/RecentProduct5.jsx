import React from "react";

const RecentProduct5 = () => {
  return (
    <section className="bg-white pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] dark:bg-dark">
      <div className="container mx-auto">
        <div className="mb-[50px] max-w-[575px]">
          <h2 className="mb-[22px] text-3xl font-bold text-dark dark:text-white sm:text-4xl">
            Trending Items
          </h2>
          <p className="text-body-color dark:text-dark-6 text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet
            molestie nunc. Vestibulum tempus justo.
          </p>
        </div>

        <div className="-mx-4 flex flex-wrap items-center justify-center">
          <ProductCard
            bgColor="primary"
            subtitle="Start From $35"
            title="Watch Collections"
            details="Lorem ipsum dolor sit amet, consectetur adipis."
            link="/#"
            img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/recent-products-05/product-01.jpg"
          />
          <ProductCard
            bgColor="secondary"
            subtitle="Start From $25"
            title="Sunglass Collections"
            details="Lorem ipsum dolor sit amet, consectetur adipis."
            link="/#"
            img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/recent-products-05/product-02.jpg"
          />
          <ProductCard
            bgColor="dark"
            subtitle="Start From $89"
            title="Converse Collections"
            details="Lorem ipsum dolor sit amet, consectetur adipis."
            link="/#"
            img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/recent-products-05/product-03.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default RecentProduct5;

const ProductCard = ({ subtitle, title, details, link, img, bgColor }) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="relative mb-10 overflow-hidden rounded-lg">
          <img
            src={img}
            alt="Recent Product"
            className="w-full object-cover object-center"
          />
          <div
            className={`from-${bgColor} xs:px-8 absolute left-0 top-0 flex h-full w-full items-end justify-between rounded-md bg-linear-to-tr to-transparent py-8 px-5 md:px-5 xl:px-8`}
          >
            <div className="w-full">
              <span 
                className="mb-2 block text-base font-semibold text-white"
                style={{
                  textShadow: "0px 1px 5px rgba(0, 0, 0, 0.14)",
                }}
              >
                {subtitle}
              </span>
              <a
                href={link}
                className="mb-3 block text-lg font-bold text-white 2xl:text-2xl"
                style={{
                  textShadow: "0px 1px 5px rgba(0, 0, 0, 0.14)",
                }}
              >
                {title}
              </a>
              <p 
                className="max-w-[255px] text-sm text-white/80"
                style={{
                  textShadow: "0px 1px 5px rgba(0, 0, 0, 0.14)",
                }}
              >
                {details}
              </p>
            </div>
            <div className="w-full max-w-[36px] text-right">
              <a
                href={link}
                className="hover:bg-primary flex h-[34px] w-[34px] items-center justify-center rounded-full drop-shadow-three bg-white dark:bg-dark-2 text-dark dark:text-white hover:text-white"
              >
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current"
                >
                  <path d="M14.4 7.5999L9.22495 2.3499C8.99995 2.1249 8.64995 2.1249 8.42495 2.3499C8.19995 2.5749 8.19995 2.9249 8.42495 3.1499L12.625 7.4249H1.99995C1.69995 7.4249 1.44995 7.6749 1.44995 7.9749C1.44995 8.2749 1.69995 8.5499 1.99995 8.5499H12.675L8.42495 12.8749C8.19995 13.0999 8.19995 13.4499 8.42495 13.6749C8.52495 13.7749 8.67495 13.8249 8.82495 13.8249C8.97495 13.8249 9.12495 13.7749 9.22495 13.6499L14.4 8.3999C14.625 8.1749 14.625 7.8249 14.4 7.5999Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <span className="hidden from-primary"></span>
      <span className="hidden from-secondary"></span>
      <span className="hidden from-dark"></span>
    </>
  );
};
