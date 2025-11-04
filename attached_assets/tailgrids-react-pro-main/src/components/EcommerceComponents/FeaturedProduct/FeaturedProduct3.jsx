import React from "react";

const FeaturedProduct3 = () => {
  return (
    <section className="bg-gray-2 pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex">
          <div className="w-full px-4">
            <div className="mb-[60px] max-w-[575px]">
              <h2 className="sm:ledaing-[45px] mb-4 text-3xl font-bold text-dark dark:text-white sm:text-[36px]">
                Featured Products
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit
                amet molestie nunc. Vestibulum tempus justo.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <SingleFeaturedProduct
            newItem
            img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/featured-products-03/image-01.jpg"
            link="/#"
            title="Apple Watch Series 7"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit enim luctus et lorem."
            prevPrice="£120.00 "
            price="£60.00"
          />
          <SingleFeaturedProduct
            img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/featured-products-03/image-02.jpg"
            link="/#"
            title="iPhone 13 Pro Max"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit enim luctus et lorem."
            price="£889.00"
          />
          <SingleFeaturedProduct
            hotItem
            img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/featured-products-03/image-03.jpg"
            link="/#"
            title="Macbook Pro 13” M1 2020"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit enim luctus et lorem."
            price="£1459.00"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct3;

const SingleFeaturedProduct = ({
  img,
  link,
  subtitle,
  title,
  price,
  prevPrice,
  discount,
  newItem,
  hotItem,
}) => {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="mb-10 overflow-hidden rounded-lg border border-stroke bg-white hover:shadow-card-2 dark:border-dark-3 dark:bg-dark-2">
        <div className="relative">
          <img src={img} alt="product" className="w-full" />

          {newItem && (
            <span className="absolute left-5 top-5 inline-block rounded-sm bg-secondary px-[10px] py-1 text-sm font-medium text-white">
              New
            </span>
          )}
          {hotItem && (
            <span className="absolute left-5 top-5 inline-block rounded-sm bg-red-600 px-[10px] py-1 text-sm font-medium text-white">
              Hot
            </span>
          )}
        </div>

        <div className="p-6">
          <h3>
            <a
              href={link}
              className="mb-4 block text-lg font-semibold text-dark hover:text-primary dark:text-white xl:text-xl"
            >
              {title}
            </a>
          </h3>
          <p className="mb-5 text-base text-body-color dark:text-dark-6">
            {subtitle}
          </p>
          <p className="text-lg font-medium text-dark dark:text-white">
            {prevPrice && (
              <span className="mr-[10px] text-body-color line-through dark:text-dark-6">
                {prevPrice}
              </span>
            )}
            <span>{price}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
