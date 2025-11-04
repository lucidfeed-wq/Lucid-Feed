import React from "react";

const Cta3 = () => {
  return (
    <section className="bg-white py-20 dark:bg-dark lg:py-[120px]">
      <div className="container mx-auto">
        <div className="relative z-10 overflow-hidden rounded-sm bg-[#c4c4c4] dark:bg-dark-3">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/2">
              <div className="px-6 py-14 sm:px-10 md:px-[70px] md:py-20 lg:pl-11 lg:pr-0">
                <h2 className="mb-9 text-2xl font-bold leading-snug text-dark dark:text-white md:text-[40px]/[48px]">
                  Get support through our application.
                </h2>
                <p className="mb-11 text-lg text-body-color dark:text-dark-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut.
                </p>
                <div className="flex flex-wrap items-center">
                  <a
                    href="/#"
                    className="my-1 mr-4 inline-flex h-[70px] items-center justify-center rounded-lg bg-white px-5 text-center text-base font-medium text-dark shadow-[0px_5px_18px_0px_rgba(0,0,0,0.08)] transition duration-200 hover:text-primary dark:bg-dark-2 dark:text-white sm:px-6 md:text-lg"
                  >
                    <span className="mr-4 flex h-11 w-11 items-center justify-center rounded-md bg-dark dark:bg-white/10">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.8608 8.35849C20.7259 8.4615 18.3449 9.78251 18.3449 12.7199C18.3449 16.1175 21.3747 17.3194 21.4653 17.3492C21.4514 17.4225 20.984 18.9953 19.8679 20.5979C18.8727 22.0082 17.8333 23.4163 16.2522 23.4163C14.671 23.4163 14.2641 22.5119 12.4388 22.5119C10.66 22.5119 10.0275 23.446 8.58124 23.446C7.13494 23.446 6.12577 22.141 4.96549 20.5384C3.62153 18.6565 2.53564 15.7328 2.53564 12.958C2.53564 8.50733 5.47474 6.14685 8.3673 6.14685C9.90427 6.14685 11.1855 7.14049 12.1504 7.14049C13.0689 7.14049 14.5013 6.08734 16.2498 6.08734C16.9125 6.08734 19.2936 6.14685 20.8608 8.35849ZM15.4197 4.20311C16.1429 3.3583 16.6544 2.1861 16.6544 1.01389C16.6544 0.851341 16.6405 0.686502 16.6102 0.553711C15.4337 0.597211 14.0339 1.32526 13.1898 2.28912C12.5271 3.03091 11.9086 4.20311 11.9086 5.39134C11.9086 5.56995 11.9389 5.74849 11.9528 5.80571C12.0272 5.81948 12.1481 5.83549 12.2691 5.83549C13.3247 5.83549 14.6524 5.13949 15.4197 4.20311Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    <span>App Store</span>
                  </a>
                  <a
                    href="/#"
                    className="group my-1 inline-flex h-[70px] items-center justify-center rounded-lg px-5 text-center text-base font-medium text-dark transition duration-200 hover:bg-white hover:text-primary dark:text-dark-6 dark:hover:bg-dark-2 sm:px-6 md:text-lg"
                  >
                    <span className="mr-4">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.85245 0.375L14.0977 10.6184L16.7415 7.9746C13.1289 5.78276 8.29042 2.84244 6.11441 1.52043L4.65656 0.637253C4.3989 0.480274 4.12297 0.395734 3.85245 0.375ZM2.28856 1.60143C2.26783 1.71398 2.25 1.82709 2.25 1.94853V22.1922C2.25 22.2771 2.26708 22.3562 2.27892 22.4372L12.7016 12.0145L2.28856 1.60143ZM18.4789 9.0294L15.4938 12.0145L18.4269 14.9475C19.9809 14.0056 21.0572 13.3515 21.1767 13.2795C21.7049 12.9566 22.0032 12.4695 21.9943 11.9373C21.9864 11.415 21.688 10.9481 21.1805 10.6608C21.067 10.5956 20.0053 9.95449 18.4789 9.0294ZM14.0977 13.4106L3.88331 23.625C4.08176 23.5905 4.27995 23.5312 4.46951 23.4167C4.73216 23.2568 11.8269 18.9523 16.6894 16.0023L14.0977 13.4106Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    <span>Play Store</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full self-end px-4 lg:w-1/2">
              <div className="hidden text-center lg:block">
                <img
                  src="https://cdn.tailgrids.com/2.0/image/marketing/images/cta/mobile-01.svg"
                  alt="image"
                  className="mx-auto max-w-full"
                />
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <span className="absolute right-0 top-0 z-[-1]">
              <svg
                width="329"
                height="218"
                viewBox="0 0 329 218"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="182" cy="36" r="182" fill="#13C296" />
              </svg>
            </span>
            <span className="absolute right-0 top-20 z-[-1]">
              <svg
                width="95"
                height="161"
                viewBox="0 0 95 161"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="80.5" cy="80.5" r="80.5" fill="#3056D3" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta3;
