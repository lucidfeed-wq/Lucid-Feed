import React from "react";

const DataStats8 = () => {
  return (
    <section className="bg-gray-2 py-20 dark:bg-dark lg:py-[120px]">
      <div className="mx-auto px-4 md:container">
        <div className="flex justify-center">
          <div className="mb-14 inline-flex w-full max-w-[845px] flex-wrap rounded-sm bg-white py-[30px] shadow-1 dark:bg-dark-2 dark:shadow-box-dark">
            <DataStatsCard
              total="30.529"
              totalTitle="Total Subscribers"
              increment="+8%"
            />
            <DataStatsCard
              total="129K"
              totalTitle="Total Likes"
              increment="+58%"
            />
            <DataStatsCard
              total="4,341"
              totalTitle="Total Comments"
              increment="+8%"
            />
            <DataStatsCard
              total="30.529"
              totalTitle="Total Saved"
              decrement="-10%"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataStats8;

const DataStatsCard = ({ totalTitle, total, increment, decrement }) => {
  return (
    <div className="mb-7 w-full border-stroke px-[30px] last-of-type:border-none dark:border-dark-3 sm:w-1/2 sm:border-r lg:mb-0 lg:w-1/4">
      <p className="text-sm font-medium text-body-color dark:text-dark-6">
        {totalTitle}
      </p>
      <p className="mb-2 text-2xl font-semibold text-dark dark:text-white">
        {total}
      </p>
      <div className="flex items-center">
        <span
          className={`mr-1 flex h-4 w-4 items-center justify-center rounded-full ${
            increment ? "bg-green/10" : "bg-red/10"
          } ${increment ? "text-green" : "text-red"}`}
        >
          {increment && (
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_2965_1178)">
                <path
                  d="M5.57113 4.20921L3.27227 6.50807L2.66627 5.90207L5.9997 2.56864L9.33313 5.90207L8.72713 6.50807L6.42827 4.20921L6.42827 9.42578L5.57113 9.42578L5.57113 4.20921Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="clip0_2965_1178">
                  <rect
                    width="10.2857"
                    height="10.2857"
                    fill="white"
                    transform="translate(11.1426 11.1406) rotate(180)"
                  />
                </clipPath>
              </defs>
            </svg>
          )}
          {decrement && (
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_2965_1213)">
                <path
                  d="M6.42899 7.79079L8.72785 5.49193L9.33385 6.09793L6.00042 9.43136L2.66699 6.09793L3.27299 5.49193L5.57185 7.79079L5.57185 2.57422L6.42899 2.57422L6.42899 7.79079Z"
                  fill="currentColor"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_2965_1213">
                  <rect
                    width="10.2857"
                    height="10.2857"
                    fill="white"
                    transform="translate(0.857666 0.859375)"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
          )}
        </span>
        <p className="whitespace-nowrap text-xs text-body-color">
          <span className={`text-${increment ? "success" : "danger"}`}>
            {increment}
            {decrement}
          </span>{" "}
          than last week
        </p>
      </div>
    </div>
  );
};
