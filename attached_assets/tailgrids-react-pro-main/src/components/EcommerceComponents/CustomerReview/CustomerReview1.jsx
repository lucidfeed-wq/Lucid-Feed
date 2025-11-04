import React from "react";

const CustomerReview = () => {
  return (
    <section className="bg-gray-2 pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
      <div className="container mx-auto">
        <SingleCustomerReview
          img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/reviews/review-01/image-01.png"
          name="Jhon Smith"
          date="25, Nov 2025"
          rating="5.0"
          title="I Really Love This Product!"
          details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac risus a risus elementum vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean tristique nisl nec fermentum eleifend. Fusce tincidunt, tortor a elementum vehicula, magna ligula iaculis lacus, vel feugiat velit felis a metus."
        />
        <SingleCustomerReview
          img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/reviews/review-01/image-02.png"
          name="Andrio Gelario"
          date="12, Dec 2024"
          rating="5.0"
          title="This is one of the best product."
          details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac risus a risus elementum vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean tristique nisl nec fermentum eleifend. Fusce tincidunt, tortor a elementum vehicula, magna ligula iaculis lacus, vel feugiat velit felis a metus."
        />
        <SingleCustomerReview
          img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/reviews/review-01/image-03.png"
          name="Juliya Gessy"
          date="23, April 2024"
          rating="5.0"
          title="Quality was not good but it can be better."
          details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac risus a risus elementum vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean tristique nisl nec fermentum eleifend. Fusce tincidunt, tortor a elementum vehicula, magna ligula iaculis lacus, vel feugiat velit felis a metus."
        />
      </div>
    </section>
  );
};

export default CustomerReview;

const SingleCustomerReview = ({ img, name, date, rating, title, details }) => {
  return (
    <div className="mb-10 overflow-hidden rounded-lg bg-white shadow-1 dark:bg-dark-2 dark:shadow-box-dark">
      <div className="items-center justify-between border-b border-stroke px-6 pt-5 dark:border-dark-3 sm:flex md:px-8">
        <div className="mb-4 flex items-center">
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
        <div className="mb-4">
          <div className="flex items-center">
            <p className="mr-[10px] text-base font-medium text-dark dark:text-white">
              <span className="pr-0.5"> Rating: </span>
              <span> {rating} </span>
            </p>
            <div className="flex items-center gap-1">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 py-8 md:px-8">
        <h4 className="mb-4 text-lg font-semibold text-dark dark:text-white sm:text-xl">
          {title}
        </h4>
        <p className="text-base text-body-color dark:text-dark-6">{details}</p>
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
