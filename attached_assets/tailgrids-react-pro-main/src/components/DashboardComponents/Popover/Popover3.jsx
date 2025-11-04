import React from "react";

const Popover3 = () => {
  return (
    <section className="min-h-screen bg-gray-2 dark:bg-dark py-20 lg:py-[120px]">
      <div className="mx-auto px-4 lg:container">
        <div className="group relative block pt-2 lg:inline-block">
          <a
            href="/#"
            className="mb-3 inline-block text-base font-medium text-dark dark:text-white underline"
          >
            Popover Text
          </a>
          <div className="invisible absolute top-full left-0 w-full opacity-0 group-hover:visible group-hover:opacity-100 sm:w-[530px] lg:top-0 lg:left-full">
            <div className="relative rounded-lg bg-white dark:bg-dark-2 shadow-testimonial-6 dark:shadow-box-dark p-[30px] text-left lg:ml-5">
              <span className="absolute -left-3 top-4 hidden lg:block text-white dark:text-dark-2">
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
              <h3 className="mb-[18px] text-xl font-semibold text-dark dark:text-white sm:text-2xl">
                Do you want to add this?
              </h3>
              <p className="mb-[14px] text-base text-body-color dark:text-dark-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                facilisis congue justo nec facilisis. Quisque quis augue ipsum.
                Aliquam suscipit dui ac dui commodo.
              </p>
              <p className="mb-7 text-base text-body-color dark:text-dark-6">
                Quisque quis augue ipsum. Aliquam suscipit dui ac dui.
              </p>
              <div className="flex items-center space-x-3">
                <button className="rounded-md bg-primary px-[22px] py-[6px] text-base font-medium text-white hover:bg-blue-dark">
                  Yes
                </button>
                <button className="rounded-md bg-dark px-[22px] py-[6px] text-base font-medium text-white hover:bg-dark/90">
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Popover3;
