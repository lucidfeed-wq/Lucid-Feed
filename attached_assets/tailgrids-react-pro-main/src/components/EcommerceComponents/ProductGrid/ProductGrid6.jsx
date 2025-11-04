import React from "react";

const ProductGrid6 = () => {
  return (
    <section className="bg-white py-20 dark:bg-dark lg:py-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <SingleProduct
            newItem
            img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/products-grids-03/image-01.jpg"
            link="/#"
            title="Apple Watch Series 7"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit enim luctus et lorem."
            prevPrice="£120.00"
            price="£1459.00"
          />
          <SingleProduct
            img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/products-grids-03/image-02.jpg"
            link="/#"
            title="iPhone 13 Pro Max"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit enim luctus et lorem."
            price="£889.00"
          />
          <SingleProduct
            hotItem
            img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/products-grids-03/image-03.jpg"
            link="/#"
            title="Macbook Pro 13” M1 8/256GB"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit enim luctus et lorem."
            price="£1459.00"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductGrid6;

const SingleProduct = ({
  img,
  link,
  title,
  subtitle,
  price,
  prevPrice,
  newItem,
  hotItem,
}) => {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="mb-10 overflow-hidden rounded-lg border border-[#e7e7e7] bg-white hover:shadow-card-2 dark:border-dark-3 dark:bg-dark-2">
        <div className="relative">
          <img src={img} alt="product" className="w-full" />
          {newItem && (
            <span className="absolute left-5 top-5 inline-block rounded-sm bg-secondary px-2 py-1 text-sm font-bold text-white">
              New
            </span>
          )}
          {hotItem && (
            <span className="absolute left-5 top-5 inline-block rounded-sm bg-red-600 px-2 py-1 text-sm font-bold text-white">
              Hot
            </span>
          )}
        </div>
        <div className="p-6">
          <h3>
            <a
              href={link}
              className="mb-4 block text-lg font-semibold text-dark hover:text-primary dark:text-white xs:text-xl lg:text-lg xl:text-xl"
            >
              {title}
            </a>
          </h3>
          <p className="mb-5 text-base font-medium text-body-color dark:text-dark-6">
            {subtitle}
          </p>
          <p className="text-lg font-semibold text-dark dark:text-white">
            {prevPrice && (
              <span className="mr-2 text-body-color line-through dark:text-dark-6">
                {" "}
                {prevPrice}{" "}
              </span>
            )}
            {price}
          </p>
        </div>
      </div>
    </div>
  );
};
