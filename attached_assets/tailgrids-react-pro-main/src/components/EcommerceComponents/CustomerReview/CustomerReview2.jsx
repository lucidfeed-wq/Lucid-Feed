import React from "react";

const CustomerReview2 = () => {
  return (
    <>
      <section className="bg-white pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
        <div className="container mx-auto">
          <h3 className="mb-8 text-2xl font-semibold text-dark dark:text-white sm:mb-[54px] sm:text-[28px] sm:leading-[35px]">
            Most recent reviews
          </h3>
          <div className="rounded-lg border border-stroke bg-white px-8 py-8 dark:border-dark-3 dark:bg-dark-2 lg:px-10 lg:py-10 xl:px-[50px] xl:py-[50px]">
            <ReviewItem
              img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/reviews/review-02/image-01.png"
              name="Jhon Smith"
              date="25, Nov 2025"
              rating="5.0"
              title="I Really Love This Product!"
              details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac risus a risus elementum vehicula. Class aptent taciti sociosqu ad litora torquent per."
            />
            <ReviewItem
              img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/reviews/review-01/image-02.png"
              name="Andrio Gelario"
              date="12, Dec 2024"
              rating="5.0"
              title="This is one of the best product."
              details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac risus a risus elementum vehicula. Class aptent taciti sociosqu ad litora torquent per."
            />
            <ReviewItem
              img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/reviews/review-01/image-03.png"
              name="Juliya Gessy"
              date="23, April 2024"
              rating="5.0"
              title="Quality was not good but it can be better."
              details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac risus a risus elementum vehicula. Class aptent taciti sociosqu ad litora torquent per."
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomerReview2;

const ReviewItem = ({ img, name, date, rating, title, details }) => {
  return (
    <div className="-mx-3 flex flex-wrap border-b border-stroke py-10 first-of-type:pt-0 last-of-type:border-none last-of-type:pb-0 dark:border-dark-3">
      <div className="w-full px-3 sm:w-1/2 lg:w-3/12 xl:w-3/12">
        <div className="flex items-center">
          <div className="mr-4 h-14 w-14 overflow-hidden rounded-full">
            <img
              src={img}
              alt="author"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div>
            <h3 className="text-base font-medium text-dark dark:text-white">
              {name}
            </h3>
            <p className="text-sm text-body-color dark:text-dark-6">{date}</p>
          </div>
        </div>
      </div>
      <div className="w-full px-3 sm:w-1/2 lg:w-3/12 xl:w-3/12">
        <div className="flex items-center sm:justify-end lg:justify-center">
          <div className="flex items-center gap-1">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
          <p className="ml-3 text-lg font-semibold text-dark dark:text-white">
            {rating}
          </p>
        </div>
      </div>
      <div className="w-full px-3 lg:w-6/12 xl:w-6/12">
        <div className="mt-8 lg:mt-0">
          <h4 className="mb-4 text-lg font-semibold text-dark dark:text-white sm:text-xl">
            {title}
          </h4>
          <p className="text-base text-body-color dark:text-dark-6">
            {details}
          </p>
        </div>
      </div>
    </div>
  );
};

const Star = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1845_41)">
        <path
          d="M14.925 5.975L10.4 5.275L8.34996 0.975C8.19996 0.675 7.79996 0.675 7.64996 0.975L5.59996 5.3L1.09996 5.975C0.77496 6.025 0.64996 6.45 0.89996 6.675L4.17496 10.05L3.39996 14.775C3.34996 15.1 3.67496 15.375 3.97496 15.175L8.04996 12.95L12.1 15.175C12.375 15.325 12.725 15.075 12.65 14.775L11.875 10.05L15.15 6.675C15.35 6.45 15.25 6.025 14.925 5.975Z"
          fill="#FFA645"
        />
      </g>
      <defs>
        <clipPath id="clip0_1845_41">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
