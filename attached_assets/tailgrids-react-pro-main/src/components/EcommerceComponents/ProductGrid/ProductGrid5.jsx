import React from "react";

const ProductGrid5 = () => {
  return (
    <section className="bg-white py-20 dark:bg-dark lg:py-[120px]">
      <div className="container mx-auto">
        <div className="rounded-lg border border-[#e7e7e7] dark:border-dark-3">
          <div className="flex flex-wrap">
            <SingleProduct
              img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/products-grids-05/image-01.jpg"
              link="/#"
              title="Table Top Showpiece"
              price="$59.55"
              reviews="115 Reviews"
            />
            <SingleProduct
              img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/products-grids-05/image-02.jpg"
              link="/#"
              title="Black Shoes For Men"
              price="$39.00"
              prevPrice="$99.89"
              reviews="14 reviews"
            />
            <SingleProduct
              img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/products-grids-05/image-03.jpg"
              link="/#"
              title="Men's Sports Shoes"
              price="$39.00"
              reviews="14 reviews"
            />
            <SingleProduct
              img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/products-grids-05/image-04.jpg"
              link="/#"
              title="Women's Nike Shoes"
              price="$39.00"
              reviews="14 reviews"
            />
            <SingleProduct
              img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/products-grids-05/image-05.jpg"
              link="/#"
              title="Converse For Men"
              price="$39.00"
              reviews="14 reviews"
            />
            <SingleProduct
              img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/products-grids-05/image-06.jpg"
              link="/#"
              title="Men's Nike Shoes"
              price="$39.00"
              reviews="14 reviews"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid5;

const SingleProduct = ({ img, link, title, price, reviews }) => {
  return (
    <div className="odd:md-border-r w-full border-[#e7e7e7] px-4 dark:border-dark-3 md:w-1/2 lg:w-1/3 lg:border-r not-last:border-b lg:nth-[2n]:border-r">
      <div className="mb-10 mt-6">
        <div className="mb-5 overflow-hidden rounded-md">
          <img src={img} alt="product" className="w-full" />
        </div>
        <div>
          <span className="mb-2 block text-base font-semibold text-dark dark:text-white sm:text-xl md:text-lg 2xl:text-xl">
            {price}
          </span>
          <h3>
            <a
              href={link}
              className="mb-2 block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-2xl md:text-lg 2xl:text-2xl"
            >
              {title}
            </a>
          </h3>
          <p className="flex items-center text-base font-medium text-body-color dark:text-dark-6">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
            <span className="pl-2">{reviews}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
const Star = () => {
  return (
    <span className="pr-1">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.925 5.975L10.4 5.275L8.34996 0.975C8.19996 0.675 7.79996 0.675 7.64996 0.975L5.59996 5.3L1.09996 5.975C0.77496 6.025 0.64996 6.45 0.89996 6.675L4.17496 10.05L3.39996 14.775C3.34996 15.1 3.67496 15.375 3.97496 15.175L8.04996 12.95L12.1 15.175C12.375 15.325 12.725 15.075 12.65 14.775L11.875 10.05L15.15 6.675C15.35 6.45 15.25 6.025 14.925 5.975Z"
          fill="#FFA645"
        ></path>
      </svg>
    </span>
  );
};
