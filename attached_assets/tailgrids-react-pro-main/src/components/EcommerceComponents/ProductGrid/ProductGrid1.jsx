import React from "react";

const ProductGrid = () => {
  return (
    <section className="bg-white py-20 dark:bg-dark lg:py-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <SingleProduct
            img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/products-grids-01/image-01.jpg"
            link="/#"
            title="Leather Court Shoes"
            price="$39.00"
            reviews="14 reviews"
          />
          <SingleProduct
            img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/products-grids-01/image-02.jpg"
            link="/#"
            title="Black Shoes For Men"
            price="$39.00"
            prevPrice="$99.89"
            reviews="14 reviews"
          />
          <SingleProduct
            img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/products-grids-01/image-03.jpg"
            link="/#"
            title="Men's Sports Shoes"
            price="$39.00"
            reviews="14 reviews"
          />
          <SingleProduct
            img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/products-grids-01/image-04.jpg"
            link="/#"
            title="Women's Nike Shoes"
            price="$39.00"
            reviews="14 reviews"
          />
          <SingleProduct
            img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/products-grids-01/image-5.jpg"
            link="/#"
            title="Converse For Men"
            price="$39.00"
            reviews="14 reviews"
          />
          <SingleProduct
            img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/products-grids-01/image-06.jpg"
            link="/#"
            title="Men's Nike Shoes"
            price="$39.00"
            reviews="14 reviews"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;

const SingleProduct = ({ img, link, title, price, reviews, prevPrice }) => {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="mb-10">
        <div className="mb-5">
          <img src={img} alt="product" className="w-full" />
        </div>
        <div className="items-start justify-between xs:flex lg:block xl:flex">
          <div>
            <h3>
              <a
                href={link}
                className="mb-[6px] block text-lg font-semibold text-dark hover:text-primary dark:text-white md:text-xl 2xl:text-2xl"
              >
                {title}
              </a>
            </h3>
            <p className="flex items-center text-base font-medium text-dark dark:text-white md:text-lg">
              {price}
              {prevPrice && (
                <span className="pl-1 text-body-color line-through dark:text-dark-6">
                  {" "}
                  {prevPrice}
                </span>
              )}
            </p>
          </div>
          <div className="flex items-center whitespace-nowrap pt-1">
            <span className="text-base font-medium text-body-color dark:text-dark-6">
              {reviews}
            </span>
            <span className="pl-1">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.7903 6.72187L11.6997 5.93437L9.39346 1.09687C9.22471 0.759375 8.77471 0.759375 8.60596 1.09687L6.29971 5.9625L1.23721 6.72187C0.871586 6.77812 0.730961 7.25625 1.01221 7.50937L4.69659 11.3062L3.82471 16.6219C3.76846 16.9875 4.13409 17.2969 4.47159 17.0719L9.05596 14.5687L13.6122 17.0719C13.9216 17.2406 14.3153 16.9594 14.231 16.6219L13.3591 11.3062L17.0435 7.50937C17.2685 7.25625 17.156 6.77812 16.7903 6.72187Z"
                  fill="#FFA645"
                ></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
