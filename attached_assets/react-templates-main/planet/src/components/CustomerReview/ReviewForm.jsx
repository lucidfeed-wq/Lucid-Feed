const formItems = [
  {
    type: "text",
    placeholder: "First Name",
    columnClasses: "sm:w-1/2",
  },
  {
    type: "text",
    placeholder: "Last Name",
    columnClasses: "sm:w-1/2",
  },
  {
    type: "text",
    placeholder: "Type review headline",
  },
  {
    type: "textarea",
    placeholder: "Write your Review",
  },
];

const ReviewForm = () => {
  return (
    <>
      <div className="mb-9 overflow-hidden rounded-lg bg-white shadow-1 dark:bg-dark-2 dark:shadow-box-dark">
        <div className="px-6 py-8 sm:py-9 md:px-8 xl:px-9">
          <h4 className="mb-5 text-xl font-semibold text-dark dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            Write a Review
          </h4>
          <p className="mb-[10px] text-base font-medium text-dark dark:text-white">
            Click on star to review
          </p>
          <div className="mb-8 flex items-center">
            {[...Array(3).keys()].map((index) => (
              <span key={index} className="mr-1">
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
              <span key={index} className="mr-1">
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

          <form>
            <div className="-mx-3 flex flex-wrap">
              {formItems.map((item, index) =>
                item.type === "textarea" ? (
                  <div key={index} className="w-full px-3">
                    <div className="mb-8">
                      <textarea
                        rows="6"
                        placeholder={item.placeholder}
                        className="w-full rounded-lg border border-stroke bg-transparent px-5 py-5 text-body-color outline-hidden transition placeholder:text-dark-5 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD] dark:border-dark-3 dark:text-dark-6"
                      ></textarea>
                    </div>
                  </div>
                ) : (
                  <div
                    key={index}
                    className={`w-full px-3 ${item.columnClasses}`}
                  >
                    <div className="mb-6">
                      <input
                        type={item.type}
                        placeholder={item.placeholder}
                        className="w-full rounded-lg border border-stroke bg-transparent px-5 py-3 text-body-color outline-hidden transition placeholder:text-dark-5 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD] dark:border-dark-3 dark:text-dark-6"
                      />
                    </div>
                  </div>
                ),
              )}

              <div className="w-full px-3">
                <div>
                  <button className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-[13px] text-center text-base font-medium text-white hover:bg-blue-dark">
                    Submit Review
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ReviewForm;
