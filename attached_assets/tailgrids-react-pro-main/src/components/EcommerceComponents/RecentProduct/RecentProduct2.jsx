import React from "react";

const RecentProduct2 = () => {
  return (
    <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] dark:bg-dark">
      <div className="container mx-auto">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-dark dark:text-white sm:leading-[35px] sm:text-[28px]">
            Best Selling Items
          </h2>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <ProductCard
            white
            link="/#"
            img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/recent-products-02/product-01.jpg"
            title="New Man Collections"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet molestie nunc."
            button="View All"
          />
          <ProductCard
            link="/#"
            img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/recent-products-02/product-02.jpg"
            title="Woman Winter Collections "
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet molestie nunc."
            button="View All"
          />
        </div>
      </div>
    </section>
  );
};

export default RecentProduct2;

const ProductCard = ({ link, img, title, subtitle, button, white }) => {
  return (
    <div className="w-full px-4 lg:w-1/2">
      <div
        style={{ backgroundImage: `url(${img})` }}
        className="mb-10 overflow-hidden rounded-sm bg-cover bg-center bg-no-repeat py-8 px-8 sm:px-10 sm:py-[55px] lg:px-8 xl:px-10"
      >
        <h3
          className={`${
            white ? "text-white" : "text-dark"
          } mb-4 text-xl font-bold  sm:text-2xl`}
        >
          {title}
        </h3>
        <p
          className={`${
            white ? "text-white" : "text-body-color"
          } mb-8 max-w-[250px] text-base sm:mb-10`}
        >
          {subtitle}
        </p>
        <a
          href={link}
          className={`${
            white
              ? "border-white hover:border-primary hover:bg-primary"
              : "border-primary bg-primary hover:bg-blue-dark"
          } inline-flex rounded border py-[7px] px-5 text-base font-medium text-white transition-all`}
        >
          {button}
        </a>
      </div>
    </div>
  );
};
