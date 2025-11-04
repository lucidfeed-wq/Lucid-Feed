import React from "react";

const Error6 = () => {
  return (
    <section className="min-h-screen overflow-hidden bg-primary py-20 lg:py-[120px]">
      <div className="container mx-auto">
        <div className="text-center">
          <div className="relative z-10 inline-block text-center">
            <span className="text-[180px] font-black leading-none text-white md:text-[240px]">
              404
            </span>
            <span className="absolute left-8 top-12 -z-10">
              <svg
                width="911"
                height="518"
                viewBox="0 0 911 518"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.2"
                  d="M81 6L0 123L378 517.5H911L398 0L378 11.5L346.5 48L310.5 73L275.5 36.5C271.167 36 255.8 33.1 229 25.5C202.2 17.9 163.833 33.6667 148 42.5L106 0L81 6Z"
                  fill="url(#paint0_linear_3088_1257)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_3088_1257"
                    x1="194.5"
                    y1="17.5"
                    x2="446.488"
                    y2="548.728"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#212B36" />
                    <stop offset="1" stop-color="#212B36" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </div>
        </div>
        <div className="relative z-10 mx-auto max-w-[630px] text-center">
          <h2 className="mb-5 text-[60px] font-bold text-white">
            Opps, nothing here...
          </h2>
          <p className="mb-9 text-lg text-white">
            Uh oh, we can't seem to find the page you're looking for, Try going
            back to previous page or Contact us for more information
          </p>
          <div className="-mx-2 flex flex-wrap justify-center">
            <div className="mb-4 px-2">
              <a
                href="/#"
                className="inline-flex rounded-full border border-transparent bg-white px-8 py-3 text-base font-medium text-primary transition hover:bg-white/90"
              >
                Back to Homepage
              </a>
            </div>
            <div className="mb-4 px-2">
              <a
                href="/#"
                className="inline-flex rounded-full border border-white bg-transparent px-8 py-3 text-base font-medium text-white transition hover:bg-white hover:text-primary"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error6;
