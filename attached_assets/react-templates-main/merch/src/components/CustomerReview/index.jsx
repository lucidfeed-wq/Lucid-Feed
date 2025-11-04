const reviewItems = [
  {
    name: "Jhon Smith",
    time: "25, Nov 2025",
    rating: "5.0",
    like: "25",
    title: "Quality was not good but it can be better.",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac risus a risus elementum vehicula. Class aptent taciti sociosqu ad litora torquent per.",
  },
  {
    name: "Jemmy Delium",
    time: "12, Dec 2024",
    rating: "5.0",
    like: "55",
    title: "Absolutely fantastic!",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac risus a risus elementum vehicula. Class aptent taciti sociosqu ad litora torquent per.",
  },
  {
    name: "Wilium Heli",
    time: "23, April 2024",
    rating: "4.0",
    like: "35",
    title: "This is one of the best product.",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac risus a risus elementum vehicula. Class aptent taciti sociosqu ad litora torquent per.",
  },
  {
    name: "Wilium Heli",
    time: "23, April 2024",
    rating: "4.0",
    like: "35",
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
          <div className="mb-8 sm:mb-10">
            <h3 className="text-2xl font-semibold text-dark dark:text-white sm:text-3xl">
              Most recent reviews
            </h3>
          </div>

          <div className="-mx-4 flex flex-wrap">
            {reviewItems.map((review, index) => (
              <div key={index} className="w-full px-4 lg:w-1/2">
                <div className="mb-9 overflow-hidden rounded-lg border border-stroke bg-white dark:border-dark-3 dark:bg-dark-2">
                  <div className="items-center justify-between border-b border-stroke px-6 pt-[18px] dark:border-dark-3 sm:flex md:px-8">
                    <div className="mb-[18px] flex items-center">
                      <div className="mr-2.5 flex items-center gap-1">
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
                                  <rect width="16" height="16" fill="white" />
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
                                  <rect width="16" height="16" fill="white" />
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

                    <p className="mb-[18px] text-base font-medium text-body-color dark:text-dark-6">
                      {" "}
                      {review.time}{" "}
                    </p>
                  </div>

                  <div className="px-6 py-8 sm:py-10 md:px-8">
                    <h4 className="mb-4 text-lg font-semibold text-dark dark:text-white sm:text-xl">
                      {review.title}
                    </h4>
                    <p className="text-base text-body-color dark:text-dark-6">
                      {review.details}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-between border-t border-stroke px-6 pt-[18px] dark:border-dark-3 md:px-8">
                    <div className="mb-[18px] flex items-center">
                      <h3 className="flex items-center gap-2 text-base font-medium text-dark dark:text-white">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="fill-current"
                        >
                          <g clipPath="url(#clip0_1845_197)">
                            <path d="M10 4.84375C8.28125 4.84375 6.875 6.21875 6.875 7.875C6.875 9.53125 8.28125 10.9375 10 10.9375C11.7188 10.9375 13.125 9.5625 13.125 7.90625C13.125 6.25 11.7188 4.84375 10 4.84375ZM10 9.53125C9.0625 9.53125 8.28125 8.8125 8.28125 7.90625C8.28125 7 9.0625 6.25 10 6.25C10.9375 6.25 11.7188 6.96875 11.7188 7.875C11.7188 8.78125 10.9375 9.53125 10 9.53125Z" />
                            <path d="M10 0.5625C4.78125 0.5625 0.5625 4.78125 0.5625 10C0.5625 15.2188 4.78125 19.4688 10 19.4688C15.2188 19.4688 19.4688 15.2188 19.4688 10C19.4688 4.78125 15.2188 0.5625 10 0.5625ZM6.1875 17.0625V14.5C6.1875 13.5 7 12.6875 8 12.6875H12.0625C13.0625 12.6875 13.875 13.5 13.875 14.5V17.0625C12.75 17.6875 11.4375 18.0312 10.0312 18.0312C8.625 18.0625 7.3125 17.6875 6.1875 17.0625ZM15.25 16.0938V14.5C15.25 12.7188 13.8125 11.2812 12.0312 11.2812H7.96875C6.1875 11.2812 4.75 12.7188 4.75 14.5V16.0938C3.03125 14.625 1.9375 12.4375 1.9375 10C1.96875 5.5625 5.5625 1.96875 10 1.96875C14.4375 1.96875 18.0625 5.59375 18.0625 10.0312C18.0625 12.4375 16.9688 14.625 15.25 16.0938Z" />
                          </g>
                          <defs>
                            <clipPath id="clip0_1845_197">
                              <rect width="20" height="20" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <span>{review.name}</span>
                      </h3>
                    </div>

                    <div className="mb-[18px] flex items-center space-x-5">
                      <button className="flex items-center text-body-color hover:text-primary dark:text-dark-6">
                        <span className="mr-2">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-current"
                          >
                            <path d="M18.0625 7.1875C17.5 6.71875 16.8125 6.46875 16.0937 6.46875H13.125V4.53125C13.125 3.1875 12.7187 2.1875 11.875 1.59375C11.3437 1.21875 10.7187 1.03125 9.96875 1.03125C9.28125 1.03125 8.78125 1.1875 8.78125 1.1875C8.3125 1.3125 8 1.78125 8 2.25V5.21875C8 6.40625 7.03125 7.09375 6.34375 7.4375C6.25 7.1875 6 7 5.6875 7H2.5C1.59375 7 0.875 7.75 0.875 8.625V17.4062C0.875 18.3125 1.625 19.0312 2.5 19.0312H5.6875C5.96875 19.0312 6.21875 18.8438 6.34375 18.625C6.6875 18.75 7.0625 18.8438 7.4375 18.8438H14.6875C16.6562 18.8438 17.9687 17.75 18.1875 15.9375L19.125 10.125C19.2812 9 18.875 7.90625 18.0625 7.1875ZM5 17.5938H2.5C2.375 17.5938 2.25 17.5 2.25 17.3438V8.59375C2.25 8.46875 2.34375 8.34375 2.5 8.34375H5V17.5938ZM17.7187 9.84375L16.7812 15.6875C16.5937 17.0938 15.5312 17.375 14.6875 17.375H7.4375C7.0625 17.375 6.71875 17.25 6.40625 17V8.9375C7.65625 8.46875 9.40625 7.28125 9.40625 5.21875V2.46875C9.53125 2.4375 9.75 2.40625 9.96875 2.40625C10.4062 2.40625 10.75 2.5 11.0312 2.71875C11.4687 3.0625 11.7187 3.65625 11.7187 4.53125V6.59375C11.7187 7.3125 12.2812 7.875 13 7.875H16.0937C16.4687 7.875 16.8437 8.03125 17.1562 8.28125C17.5938 8.65625 17.8125 9.25 17.7187 9.84375Z" />
                          </svg>
                        </span>
                        <span className="text-base font-medium">
                          {" "}
                          {review.like}{" "}
                        </span>
                      </button>
                      <button className="text-base font-medium text-body-color hover:text-primary dark:text-dark-6">
                        Reply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomerReview;
