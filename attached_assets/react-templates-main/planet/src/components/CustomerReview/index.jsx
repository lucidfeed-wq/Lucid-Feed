import ReviewOverviewBox from "./ReviewOverviewBox.jsx";
import ReviewForm from "./ReviewForm.jsx";

import userOne from "../../assets/ecom-images/reviews/review-03/image-01.png";
import userTwo from "../../assets/ecom-images/reviews/review-03/image-02.png";
import userThree from "../../assets/ecom-images/reviews/review-03/image-03.png";

const reviewItems = [
  {
    img: userOne,
    name: "Jhon Smith",
    time: "25, Nov 2025",
    rating: "5",
    like: "25",
    title: "Quality was not good but it can be better.",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac risus a risus elementum vehicula. Class aptent taciti sociosqu ad litora torquent consectetur adipiscing elit. Maecenas ac risus a risus elementum",
  },
  {
    img: userTwo,
    name: "Jemmy Delium",
    time: "12, Dec 2024",
    rating: "5",
    like: "55",
    title: "Absolutely fantastic!",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac risus a risus elementum vehicula. Class aptent taciti sociosqu ad litora torquent consectetur adipiscing elit. Maecenas ac risus a risus elementum",
  },
  {
    img: userThree,
    name: "Wilium Heli",
    time: "23, April 2024",
    rating: "4",
    like: "35",
    title: "This is one of the best product.",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac risus a risus elementum vehicula. Class aptent taciti sociosqu ad litora torquent consectetur adipiscing elit. Maecenas ac risus a risus elementum",
  },
];

const CustomerReview = () => {
  return (
    <>
      <section className="bg-tg-bg pb-10 dark:bg-dark lg:pb-20">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-5/12">
              <ReviewOverviewBox />
            </div>

            <div className="w-full px-4 lg:w-7/12">
              {reviewItems.map((review, index) => (
                <div
                  key={index}
                  className="mb-9 overflow-hidden rounded-lg bg-white shadow-1 dark:bg-dark-2 dark:shadow-box-dark"
                >
                  <div className="px-6 py-8 sm:py-9 md:px-8 xl:px-9">
                    <h4 className="mb-[18px] text-lg font-semibold text-dark dark:text-white sm:text-xl">
                      {review.title}
                    </h4>
                    <p className="text-base text-body-color dark:text-dark-6">
                      {review.details}
                    </p>
                  </div>

                  <div className="items-center justify-between border-t border-stroke px-6 pt-5 dark:border-dark-3 md:flex md:px-8 xl:px-9">
                    <div className="mb-5 flex items-center">
                      <div className="mr-3 h-10 w-10 overflow-hidden rounded-full">
                        <img
                          src={review.img}
                          alt="author"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="flex flex-wrap items-center">
                        <h3 className="pr-6 text-base font-medium text-dark dark:text-white">
                          {review.name}
                        </h3>
                        <p className="text-base text-body-color dark:text-dark-6">
                          12, Dec 2024
                        </p>
                      </div>
                    </div>

                    <div className="mb-5 flex items-center space-x-5">
                      <button className="flex items-center text-body-color hover:text-primary dark:text-dark-6">
                        <span className="mr-2">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_1008_11877)">
                              <path
                                d="M18.6562 7.46875L12.9999 6.59375L10.4375 1.21875C10.25 0.84375 9.74995 0.84375 9.56245 1.21875L6.99995 6.625L1.37495 7.46875C0.9687 7.53125 0.81245 8.0625 1.12495 8.34375L5.2187 12.5625L4.24995 18.4687C4.18745 18.875 4.5937 19.2188 4.9687 18.9688L10.0624 16.1875L15.1249 18.9688C15.4687 19.1563 15.9062 18.8437 15.8124 18.4687L14.8437 12.5625L18.9374 8.34375C19.1874 8.0625 19.0624 7.53125 18.6562 7.46875Z"
                                fill="#FFA645"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_1008_11877">
                                <rect width="20" height="20" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        <span className="text-base font-medium"> 4 of 5 </span>
                      </button>
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
                        <span className="text-base font-medium"> 25 </span>
                      </button>
                      <button className="text-base font-medium text-body-color hover:text-primary dark:text-dark-6">
                        Reply
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              <ReviewForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomerReview;
