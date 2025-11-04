import React from "react";

const Popover = () => {
  return (
    <section className="flex min-h-screen bg-gray-2 dark:bg-dark py-20 lg:py-[120px]">
      <div className="mx-auto px-4 lg:container">
        <div className="block text-center">
          <div className="group relative lg:inline-block">
            <div className="inline-flex items-center justify-center">
              <img
                className="h-[70px] w-[70px] rounded-full border-4 border-white dark:border-dark-3"
                src="https://cdn.tailgrids.com/2.0/image/dashboard/images/popover/popover-01/avatar-01.png"
                alt="avatar"
              />
              <img
                className="-ml-6 h-[70px] w-[70px] rounded-full border-4 border-white dark:border-dark-3"
                src="https://cdn.tailgrids.com/2.0/image/dashboard/images/popover/popover-01/avatar-02.png"
                alt="avatar"
              />
              <img
                className="-ml-6 h-[70px] w-[70px] rounded-full border-4 border-white dark:border-dark-3"
                src="https://cdn.tailgrids.com/2.0/image/dashboard/images/popover/popover-01/avatar-03.png"
                alt="avatar"
              />
            </div>
            <div className="invisible absolute top-[110%] left-1/2 w-[250px] -translate-x-1/2 opacity-0 group-hover:visible group-hover:opacity-100 xs:w-[330px] lg:top-0 lg:left-full lg:translate-x-0">
              <div className="relative ml-3 rounded-lg bg-white dark:bg-dark-2 shadow-product dark:shadow-box-dark">
                <span className="absolute left-1/2 -top-3 block -translate-x-1/2 rotate-90 lg:-left-[11px] lg:top-8 lg:translate-x-0 lg:rotate-0 text-white dark:text-dark-2">
                  <svg
                    width="11"
                    height="21"
                    viewBox="0 0 11 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current"
                  >
                    <path
                      d="M1.58026 12.7577C0.214281 11.5625 0.214281 9.4375 1.58026 8.24227L11 -5.24537e-07L11 21L1.58026 12.7577Z"
                    />
                  </svg>
                </span>
                <div className="flex items-center justify-between border-b border-stroke dark:border-dark-3 py-[18px] px-[22px]">
                  <div className="text-left">
                    <h5 className="text-sm font-medium text-dark dark:text-white sm:text-base">
                      Musharof Chowdhury
                    </h5>
                    <p className="text-xs text-body-color dark:text-dark-6 sm:text-sm">
                      Founder @Pimjolabs
                    </p>
                  </div>
                  <div>
                    <button className="flex h-7 w-7 items-center justify-center rounded-full border border-dashed border-stroke dark:border-dark-3 text-body-color dark:text-dark-6 hover:border-primary hover:text-primary sm:h-[34px] sm:w-[34px]">
                      <svg
                        width={14}
                        height={14}
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-current"
                      >
                        <g clipPath="url(#clip0_1070_23810)">
                          <path d="M13.125 6.5187H7.50312V0.874951C7.50312 0.612451 7.28437 0.371826 7 0.371826C6.7375 0.371826 6.49687 0.590576 6.49687 0.874951V6.5187H0.875C0.6125 6.5187 0.371875 6.73745 0.371875 7.02183C0.371875 7.28433 0.590625 7.52495 0.875 7.52495H6.51875V13.125C6.51875 13.3875 6.7375 13.6281 7.02187 13.6281C7.28437 13.6281 7.525 13.4093 7.525 13.125V7.50308H13.125C13.3875 7.50308 13.6281 7.28433 13.6281 6.99995C13.6281 6.73745 13.3875 6.5187 13.125 6.5187Z" />
                        </g>
                        <defs>
                          <clipPath id="clip0_1070_23810">
                            <rect width={14} height={14} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="pt-[22px] pb-5 px-[22px]">
                  <h4 className="mb-4 text-lg font-semibold text-dark dark:text-white">
                    Products
                  </h4>
                  <div>
                    <div className="mb-4 overflow-hidden rounded-sm">
                      <img
                        src="https://cdn.tailgrids.com/2.0/image/dashboard/images/popover/popover-01/image-01.jpg"
                        alt="product"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <h5 className="mb-2 text-base font-medium text-dark dark:text-white">
                      Pimjolabs
                    </h5>
                    <p className="text-sm text-body-color dark:text-dark-6">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      jesium desotional..
                    </p>
                  </div>
                </div>
                <div className="border-t border-stroke dark:border-dark-3 py-3 px-[22px]">
                  <a
                    href="/#"
                    className="block w-full text-center text-sm font-medium text-body-color dark:text-dark-6 hover:text-primary"
                  >
                    Connect with me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Popover;
