import React from "react";

const Popover5 = () => {
  return (
    <section className="flex min-h-screen items-center bg-gray-2 dark:bg-dark py-20 lg:py-[120px]">
      <div className="mx-auto w-full px-4 lg:container">
        <div className="group relative block pt-2 lg:inline-block">
          <a
            href="/#"
            className="mb-3 inline-block text-base font-medium text-primary underline"
          >
            Popover Text
          </a>
          <div className="invisible absolute top-full left-0 w-full opacity-0 group-hover:visible group-hover:opacity-100 sm:w-[530px] lg:top-1/2 lg:left-full lg:-translate-y-1/2">
            <div className="relative rounded-md bg-white dark:bg-dark-2 text-left shadow-testimonial-6 dark:shadow-box-dark lg:ml-5">
              <span className="absolute -left-3 top-1/2 hidden -translate-y-1/2 lg:block text-white dark:text-dark-2">
                <svg
                  width={13}
                  height={21}
                  viewBox="0 0 11 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current"
                >
                  <path d="M1.58026 12.7577C0.214281 11.5625 0.214281 9.4375 1.58026 8.24227L11 -5.24537e-07L11 21L1.58026 12.7577Z" />
                </svg>
              </span>
              <div className="items-center justify-between border-b border-stroke dark:border-dark-3 py-4 px-[30px] xs:flex">
                <div className="mb-4 flex items-center xs:mb-0">
                  <div className="mr-3 h-[50px] w-full max-w-[50px] rounded-full">
                    <img
                      src="https://cdn.tailgrids.com/2.0/image/dashboard/images/popover/popover-05/avatar-01.png"
                      alt="avatar"
                      className="h-full w-full rounded-full object-cover object-center"
                    />
                  </div>
                  <div>
                    <h5 className="text-base font-medium text-dark dark:text-white">
                      Naimur Rahman
                    </h5>
                    <p className="text-sm text-body-color dark:text-dark-6">
                      Product Designer
                    </p>
                  </div>
                </div>
                <div>
                  <button className="rounded-sm bg-yellow-dark h-[26px] px-[10px] text-xs font-medium text-white hover:bg-yellow-dark/90">
                    In Progress
                  </button>
                </div>
              </div>
              <div className="pt-6 pb-[30px] px-[30px]">
                <h3 className="mb-3 text-xl font-semibold text-dark dark:text-white">
                  From Pimjo Labs Team
                </h3>
                <p className="mb-5 text-base text-body-color dark:text-dark-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris facilisis congue justo nec facilisis. Quisque quis
                  augue ipsum. Aliquam suscipit dui ac dui commodo.
                </p>
                <p className="flex items-center text-base text-body-color dark:text-dark-6">
                  <span className="mr-[10px] inline">
                    <svg
                      width={22}
                      height={22}
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-current"
                    >
                      <g clipPath="url(#clip0_1071_23923)">
                        <path d="M11.5156 11.3437V5.80935C11.5156 5.39685 11.1719 5.0531 10.7594 5.0531C10.3469 5.0531 10.0031 5.39685 10.0031 5.80935V11.6531C10.0031 11.8594 10.0719 12.0656 10.2094 12.2031L14.025 16.0875C14.1625 16.225 14.3687 16.3281 14.575 16.3281C14.7812 16.3281 14.9531 16.2594 15.125 16.1219C15.4344 15.8125 15.4344 15.3312 15.125 15.0219L11.5156 11.3437Z" />
                        <path d="M11 0.515625C5.25937 0.515625 0.618744 5.225 0.618744 11C0.618744 16.775 5.29374 21.4844 11 21.4844C16.7062 21.4844 21.3812 16.775 21.3812 11C21.3812 5.225 16.7406 0.515625 11 0.515625ZM11 19.9375C6.11874 19.9375 2.13124 15.9156 2.13124 11C2.13124 6.08437 6.11874 2.0625 11 2.0625C15.8812 2.0625 19.8687 6.08437 19.8687 11C19.8687 15.9156 15.8812 19.9375 11 19.9375Z" />
                      </g>
                      <defs>
                        <clipPath id="clip0_1071_23923">
                          <rect width={22} height={22} fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  From 9:00 AM to 5:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Popover5;
