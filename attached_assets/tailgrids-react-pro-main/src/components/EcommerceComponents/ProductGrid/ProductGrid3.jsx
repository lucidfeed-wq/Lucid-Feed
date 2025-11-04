import React from "react";

const ProductGrid3 = () => {
  return (
    <section className="bg-white py-20 dark:bg-dark lg:py-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <SingleProduct
            img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/products-grids-03/image-01.jpg"
            link="/#"
            title="Macbook Pro 13” M1 2020"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit enim luctus et lorem."
            price="$299"
            reviews="(15) Reviews"
          />
          <SingleProduct
            img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/products-grids-03/image-02.jpg"
            link="/#"
            title="iPhone 13 Pro Max"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit enim luctus et lorem."
            price="$999"
            reviews="(15) Reviews"
          />
          <SingleProduct
            img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/products-grids-03/image-03.jpg"
            link="/#"
            title="Macbook Pro 13” M1 8/256GB"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit enim luctus et lorem."
            price="$1299"
            reviews="(15) Reviews"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductGrid3;

const SingleProduct = ({ img, link, title, subtitle, price, reviews }) => {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="mb-10 overflow-hidden rounded-lg border border-[#e7e7e7] bg-white dark:border-dark-3 dark:bg-dark-2">
        <div>
          <img src={img} alt="product" className="w-full" />
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
          <p className="text-base font-medium text-body-color dark:text-dark-6">
            {subtitle}
          </p>
        </div>
        <div className="flex justify-between border-t border-[#e7e7e7] dark:border-dark-3">
          <div className="w-1/2 border-r border-[#e7e7e7] py-4 text-center dark:border-dark-3">
            <span className="text-base font-semibold text-dark dark:text-white">
              Price: {price}
            </span>
          </div>
          <div className="flex w-1/2 items-center justify-center py-4">
            <span className="mr-[2px]">
              <svg
                className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 lg:h-3 lg:w-3 xl:h-5 xl:w-5"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.6562 7.46875L12.9999 6.59375L10.4375 1.21875C10.25 0.84375 9.74995 0.84375 9.56245 1.21875L6.99995 6.625L1.37495 7.46875C0.9687 7.53125 0.81245 8.0625 1.12495 8.34375L5.2187 12.5625L4.24995 18.4688C4.18745 18.875 4.5937 19.2188 4.9687 18.9688L10.0624 16.1875L15.1249 18.9688C15.4687 19.1562 15.9062 18.8438 15.8124 18.4688L14.8437 12.5625L18.9374 8.34375C19.1874 8.0625 19.0624 7.53125 18.6562 7.46875Z"
                  fill="#FFA645"
                ></path>
              </svg>
            </span>
            <span className="pl-2 text-sm font-semibold text-body-color">
              {reviews}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
