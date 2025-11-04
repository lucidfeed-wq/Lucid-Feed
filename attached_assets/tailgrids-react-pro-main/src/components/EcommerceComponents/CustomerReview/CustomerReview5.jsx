import React from "react";

const CustomerReview5 = () => {
  return (
    <section className="bg-white pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 xl:w-10/12">
            <div className="mb-11 border-b border-stroke pb-11 dark:border-dark-3">
              <ReviewItem
                img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/reviews/review-05/image-01.png"
                name="Wilium Heli"
                date="22, April 2025"
                rating="5.0"
                title="This is one of the best product."
                details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac risus a risus elementum vehicula. Class aptent taciti socil ad litora torquent per conubia nostra, per inceptos himenaeos."
                replyButton="Reply"
              />
              <div className="mb-0 sm:ml-10 md:ml-20">
                <ReviewItem
                  replyItem
                  img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/reviews/review-05/image-02.png"
                  name="Frank Lerry"
                  date="22, April 2025"
                  title="This is one of the best product."
                  details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac risus a risus elementum vehicula. Class aptent taciti socil ad litora torquent per conubia nostra, per inceptos himenaeos."
                />
              </div>
            </div>
            <div className="mb-11 border-b border-stroke pb-11 dark:border-dark-3">
              <ReviewItem
                img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/reviews/review-05/image-01.png"
                name="Wilium Heli"
                date="22, April 2025"
                rating="5.0"
                title="This is one of the best product."
                details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac risus a risus elementum vehicula. Class aptent taciti socil ad litora torquent per conubia nostra, per inceptos himenaeos."
                replyButton="Reply"
              />
            </div>
            <div className="pb-12">
              <ReviewItem
                img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/reviews/review-05/image-01.png"
                name="Wilium Heli"
                date="22, April 2025"
                rating="5.0"
                title="This is one of the best product."
                details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac risus a risus elementum vehicula. Class aptent taciti socil ad litora torquent per conubia nostra, per inceptos himenaeos."
                replyButton="Reply"
              />
            </div>

            <div className="py-8 sm:py-9">
              <h4 className="mb-5 text-xl font-semibold text-dark dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Write a Review
              </h4>
              <p className="mb-[10px] text-base font-medium text-dark dark:text-white">
                Click on star to review
              </p>
              <div className="mb-8 flex items-center gap-1">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>

              <form>
                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2">
                    <InputGroup type="text" placeholder="First Name" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2">
                    <InputGroup type="text" placeholder="Last Name" />
                  </div>

                  <div className="w-full px-3">
                    <InputGroup
                      type="text"
                      placeholder="Type review headline"
                    />
                  </div>

                  <div className="w-full px-3">
                    <TextAreaGroup row="6" placeholder="Write your Review" />
                  </div>

                  <div className="w-full px-3">
                    <button className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-[13px] text-center text-base font-medium text-white hover:bg-blue-dark">
                      Submit Review
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReview5;

const ReviewItem = ({ img, name, date, rating, title, details, replyItem }) => {
  return (
    <div className={`${replyItem && "pt-11"}`}>
      <div className="items-center justify-between md:flex">
        <div className="mb-4 flex items-center">
          <div className="mr-4 h-14 w-14 overflow-hidden rounded-full">
            <img
              src={img}
              alt="author"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="flex flex-wrap items-center gap-3 sm:gap-6">
            <h3 className="text-lg font-medium text-dark dark:text-white">
              {name}
            </h3>
            <p className="text-base font-medium text-body-color dark:text-dark-6">
              {date}
            </p>
          </div>
        </div>
        {rating && (
          <div className="mb-4 flex items-center">
            <div className="mr-2.5 flex items-center gap-1">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <p className="text-base font-medium text-body-color dark:text-dark-6">
              <span className="pr-0.5"> Rating: </span>
              <span className="text-dark dark:text-white"> 5.0 </span>
            </p>
          </div>
        )}
      </div>

      <div>
        <h4 className="mb-5 text-lg font-semibold text-dark dark:text-white sm:text-xl">
          {title}
        </h4>
        <p className={`mb-6 text-base font-medium text-body-color`}>
          {details}
        </p>

        <button className="inline-flex items-center justify-center rounded-sm bg-primary px-5 py-[5px] text-center text-base font-medium text-white hover:bg-blue-dark">
          Reply
        </button>
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

const InputGroup = ({ type, placeholder }) => {
  return (
    <div className="mb-8">
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-body-color outline-hidden transition placeholder:text-dark-5 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD] dark:border-dark-3 dark:text-dark-6"
      />
    </div>
  );
};

const TextAreaGroup = ({ row, placeholder }) => {
  return (
    <div className="mb-6">
      <textarea
        rows={row}
        placeholder={placeholder}
        className="w-full rounded-md border border-stroke bg-transparent px-5 py-5 text-body-color outline-hidden transition placeholder:text-dark-5 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD] dark:border-dark-3 dark:text-dark-6"
      ></textarea>
    </div>
  );
};
