import React from "react";

const FeaturedProduct2 = () => {
  return (
    <section className="bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            <SingleFeaturedProduct
              img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/featured-products-02/image-01.jpg"
              link="/#"
              title="Fashionable Bag women"
              price="£95.00"
              rating="5.00 Rating"
            />
            <SingleFeaturedProduct
              img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/featured-products-02/image-02.jpg"
              link="/#"
              title="New Collections Running Shoes for Mens"
              price="£95.00"
              rating="5.00 Rating"
            />
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <SingleFeaturedProduct
              big
              img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/featured-products-02/image-03.jpg"
              link="/#"
              title="Elegant Always Clothing Jacquard Side Tie Wrap Mini Dress"
              price="£39.00"
              rating="5.00 Rating"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct2;

const SingleFeaturedProduct = ({ img, link, rating, title, price, big }) => {
  return (
    <div
      className={`relative mb-[30px] overflow-hidden ${
        big
          ? "min-h-[400px] md:min-h-[450px] lg:min-h-[570px]"
          : "min-h-[270px]"
      }`}
    >
      <img
        src={img}
        alt="product"
        className="absolute h-full w-full object-cover object-center"
      />
      <div className="absolute bottom-0 left-0 flex h-3/4 w-full items-end bg-linear-to-b from-[#212B3600] to-[#212B36DA] p-6">
        <div>
          <h3>
            <a
              href={link}
              className="mb-2 block text-lg font-semibold text-white hover:text-primary xl:text-xl"
            >
              {title}
            </a>
          </h3>
          <div className="flex flex-wrap items-center">
            <span className="mt-0.5 inline-block pr-[34px] text-lg font-medium leading-none text-white">
              {price}
            </span>
            <div className="flex items-center space-x-1">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
              <span className="pl-1 text-base font-medium text-white">
                {rating}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Star = () => {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 17 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.2908 6.72187L11.2002 5.93437L8.89395 1.09687C8.7252 0.759375 8.2752 0.759375 8.10645 1.09687L5.8002 5.9625L0.737699 6.72187C0.372074 6.77812 0.231449 7.25625 0.512699 7.50937L4.19707 11.3062L3.3252 16.6219C3.26895 16.9875 3.63457 17.2969 3.97207 17.0719L8.55645 14.5687L13.1127 17.0719C13.4221 17.2406 13.8158 16.9594 13.7314 16.6219L12.8596 11.3062L16.5439 7.50937C16.7689 7.25625 16.6564 6.77812 16.2908 6.72187Z"
        fill="#FFA645"
      ></path>
    </svg>
  );
};
