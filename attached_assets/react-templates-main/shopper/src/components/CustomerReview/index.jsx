import userOne from "../../assets/ecom-images/reviews/review-05/image-01.png";
import userTwo from "../../assets/ecom-images/reviews/review-05/image-02.png";
import ReviewForm from "./ReviewForm.jsx";

const reviewItems = [
  {
    img: userOne,
    name: "Jhon Smith",
    time: "25, Nov 2025",
    rating: "5.0",
    like: "25",
    title: "This is one of the best product.",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac risus a risus elementum vehicula. Class aptent taciti sociosqu ad litora torquent per.",
    reply: {
      img: userTwo,
      name: "Frank Lerry",
      time: "22, April 2025",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac risus a risus elementum vehicula. Class aptent taciti socil ad litora torquent per conubia nostra, per inceptos himenaeos.",
    },
  },
  {
    img: userOne,
    name: "Jhon Smith",
    time: "25, Nov 2025",
    rating: "5.0",
    like: "25",
    title: "This is one of the best product.",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac risus a risus elementum vehicula. Class aptent taciti sociosqu ad litora torquent per.",
  },
  {
    img: userOne,
    name: "Jhon Smith",
    time: "25, Nov 2025",
    rating: "5.0",
    like: "25",
    title: "This is one of the best product.",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac risus a risus elementum vehicula. Class aptent taciti sociosqu ad litora torquent per.",
  },
];

const CustomerReview = () => {
  return (
    <>
      <section className="bg-white pb-[90px] pt-[120px] dark:bg-dark">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 xl:w-10/12">
              <div>
                {reviewItems.map((review, index) => (
                  <div
                    key={index}
                    className="mb-11 border-b border-stroke pb-11 last:mb-0! last:border-b-0! dark:border-dark-3"
                  >
                    <div className="mb-0">
                      <div className="items-center justify-between md:flex">
                        <div className="mb-4 flex items-center">
                          <div className="mr-4 h-14 w-14 overflow-hidden rounded-full">
                            <img
                              src={review.img}
                              alt="author"
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="flex flex-wrap items-center gap-3 sm:gap-6">
                            <h3 className="text-lg font-medium text-dark dark:text-white">
                              {review.name}
                            </h3>
                            <p className="text-base font-medium text-body-color dark:text-dark-6">
                              {review.time}
                            </p>
                          </div>
                        </div>

                        <div className="mb-4 flex items-center">
                          <div className="mr-2.5 flex items-center">
                            {[...Array(3).keys()].map((index) => (
                              <span className="mr-1" key={index}>
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
                                      <rect
                                        width="16"
                                        height="16"
                                        fill="white"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                              </span>
                            ))}

                            {[...Array(2).keys()].map((index) => (
                              <span className="mr-1" key={index}>
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clipPath="url(#clip0_1845_47)">
                                    <path
                                      d="M4.02502 15.55C3.80002 15.55 3.57502 15.475 3.40002 15.35C3.05002 15.1 2.85002 14.65 2.92502 14.225L3.57502 10.2L0.77502 7.32495C0.47502 7.02495 0.37502 6.57495 0.50002 6.14995C0.62502 5.74995 0.97502 5.44995 1.37502 5.39995L5.25002 4.77495L7.00002 1.09995C7.20002 0.699951 7.57502 0.449951 8.00002 0.449951C8.42502 0.449951 8.82502 0.699951 9.00002 1.09995L10.75 4.74995L14.6 5.34995C15 5.42495 15.35 5.69995 15.475 6.09995C15.625 6.52495 15.5 6.97495 15.2 7.27495L12.425 10.175L13.075 14.225C13.15 14.675 12.975 15.1 12.6 15.35C12.25 15.6 11.825 15.625 11.45 15.425L8.00002 13.55L4.55002 15.425C4.40002 15.525 4.20002 15.55 4.02502 15.55ZM1.57502 6.49995C1.57502 6.49995 1.57502 6.52495 1.57502 6.54995L4.50002 9.54995C4.67502 9.72495 4.75002 9.99995 4.72502 10.25L4.05002 14.425C4.05002 14.425 4.05002 14.425 4.05002 14.45L7.65002 12.5C7.87502 12.375 8.15002 12.375 8.40002 12.5L12 14.45C12 14.45 12 14.45 12 14.425L11.325 10.225C11.275 9.97495 11.375 9.72495 11.55 9.52495L14.475 6.52495C14.5 6.49995 14.475 6.47495 14.475 6.47495L10.45 5.84995C10.2 5.79995 9.97502 5.64995 9.87502 5.39995L8.00002 1.59995L6.20002 5.42495C6.10002 5.64995 5.87502 5.82495 5.62502 5.87495L1.57502 6.49995Z"
                                      fill="#FFA645"
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_1845_47">
                                      <rect
                                        width="16"
                                        height="16"
                                        fill="white"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                              </span>
                            ))}
                          </div>

                          <p className="text-base font-medium text-body-color dark:text-dark-6">
                            <span className="pr-0.5"> Rating: </span>
                            <span className="text-dark dark:text-white">
                              {" "}
                              {review.rating}{" "}
                            </span>
                          </p>
                        </div>
                      </div>

                      <div className="mb-11">
                        <h4 className="mb-5 text-lg font-semibold text-dark dark:text-white sm:text-xl">
                          {review.title}
                        </h4>
                        <p className="mb-6 text-base font-medium text-body-color">
                          {review.details}
                        </p>
                        <button className="inline-flex items-center justify-center rounded-sm bg-primary px-5 py-[5px] text-center text-base font-medium text-white hover:bg-blue-dark">
                          Reply
                        </button>
                      </div>
                    </div>

                    {review.reply && (
                      <div className="mb-0 sm:ml-10 md:ml-20">
                        <div className="items-center justify-between md:flex">
                          <div className="mb-4 flex items-center">
                            <div className="mr-4 h-14 w-14 overflow-hidden rounded-full">
                              <img
                                src={review.reply.img}
                                alt="author"
                                className="h-full w-full object-cover object-center"
                              />
                            </div>

                            <div className="flex flex-wrap items-center gap-3 sm:gap-6">
                              <h3 className="text-lg font-medium text-dark dark:text-white">
                                {review.reply.name}
                              </h3>
                              <p className="text-base font-medium text-body-color dark:text-dark-6">
                                {review.reply.time}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <p className="text-base font-medium text-body-color">
                            {review.reply.details}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <ReviewForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomerReview;
