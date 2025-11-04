import React from "react";

const FeaturedProduct4 = () => {
  return (
    <section className="bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 md:w-1/2 xl:w-1/3">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4">
                <SingleFeaturedProduct
                  img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/featured-products-04/image-01.jpg"
                  link="/#"
                  title="T-shirt for Men's"
                  price="$24.00"
                />
              </div>
              <div className="w-full px-4">
                <SingleFeaturedProduct
                  img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/featured-products-04/image-02.jpg"
                  link="/#"
                  title="Men's Converse Sneakers"
                  price="$120.00"
                />
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 xl:w-1/3">
            <SingleFeaturedProduct
              img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/featured-products-04/image-03.jpg"
              link="/#"
              title="Orange Sweater for Women"
              price="$59.00"
            />
          </div>
          <div className="w-full px-4 md:w-1/2 xl:w-1/3">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4 md:w-1/2 xl:w-full">
                <SingleFeaturedProduct
                  img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/featured-products-04/image-04.jpg"
                  link="/#"
                  title="T-shirt for Women's"
                  price="$38.00"
                />
              </div>
              <div className="w-full px-4 md:w-1/2 xl:w-full">
                <SingleFeaturedProduct
                  img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/featured-products-04/image-05.jpg"
                  link="/#"
                  title="Fashionable Bag women"
                  price="$24.00"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct4;

const SingleFeaturedProduct = ({ img, link, title, price }) => {
  return (
    <div className="mb-10">
      <div className="mb-6">
        <img src={img} alt="product" className="w-full" />
      </div>
      <div className="flex justify-between">
        <div>
          <h3>
            <a
              href={link}
              className="mb-[10px] block text-lg font-semibold text-dark hover:text-primary dark:text-white xl:text-xl"
            >
              {title}
            </a>
          </h3>
          <div className="flex items-center space-x-1">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
        </div>
        <div>
          <span className="text-lg font-medium text-dark dark:text-white">
            {price}
          </span>
        </div>
      </div>
    </div>
  );
};

const Star = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1760_1321)">
        <path
          d="M16.7906 6.72187L11.7 5.93438L9.39371 1.09688C9.22495 0.759375 8.77495 0.759375 8.6062 1.09688L6.29995 5.9625L1.23746 6.72187C0.87183 6.77812 0.731205 7.25625 1.01246 7.50938L4.69683 11.3063L3.82495 16.6219C3.7687 16.9875 4.13433 17.2969 4.47183 17.0719L9.0562 14.5687L13.6125 17.0719C13.9218 17.2406 14.3156 16.9594 14.2312 16.6219L13.3593 11.3063L17.0437 7.50938C17.2687 7.25625 17.1562 6.77812 16.7906 6.72187Z"
          fill="#FFA645"
        />
      </g>
      <defs>
        <clipPath id="clip0_1760_1321">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
