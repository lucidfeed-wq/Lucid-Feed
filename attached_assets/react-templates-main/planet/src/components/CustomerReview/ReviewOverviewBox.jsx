const starCountList = [
  {
    number: 5,
    percent: 84,
  },
  {
    number: 4,
    percent: 9,
  },
  {
    number: 3,
    percent: 4,
  },
  {
    number: 2,
    percent: 2,
  },
  {
    number: 1,
    percent: 1,
  },
];

const ReviewOverviewBox = () => {
  return (
    <>
      <div className="mb-10 overflow-hidden rounded-lg bg-white px-8 py-10 text-center shadow-three dark:bg-dark-2 dark:shadow-box-dark lg:mb-0 xl:px-[60px]">
        <h3 className="mb-5 font-semibold text-dark dark:text-white lg:text-2xl xl:text-[28px] xl:leading-[1.43]">
          Customer reviews
        </h3>

        <div className="inline-flex flex-wrap items-center justify-center gap-4 rounded-md border-[.5px] border-stroke bg-gray-1 px-6 py-[10px] dark:border-dark-3 dark:bg-dark">
          <div className="flex items-center">
            {[...Array(4).keys()].map((index) => (
              <span className="mr-1" key={index}>
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
            ))}
          </div>
          <span className="text-base font-medium text-dark dark:text-white">
            4.7 out of 5
          </span>
        </div>

        <p className="pb-10 pt-3 text-base font-medium text-body-color dark:text-dark-6">
          40 customer ratings
        </p>

        <div className="space-y-4">
          {starCountList.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <span className="whitespace-nowrap text-base font-medium text-dark dark:text-white">
                {item.number} star
              </span>
              <div className="relative mx-3 h-[14px] w-full rounded-full bg-gray-2 dark:bg-dark">
                <div
                  className="absolute left-0 top-0 h-full rounded-full bg-[#FFA645]"
                  style={{ width: item.percent + "%" }}
                ></div>
              </div>
              <span className="whitespace-nowrap text-base font-medium text-dark dark:text-white">
                {item.percent}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ReviewOverviewBox;
