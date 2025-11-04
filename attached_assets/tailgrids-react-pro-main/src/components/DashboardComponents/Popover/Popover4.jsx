import React from "react";

const Popover4 = () => {
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
              <div className="rounded-t bg-primary py-[14px] px-[30px]">
                <h3 className="text-lg font-semibold text-white">
                  Detailed title about this popover
                </h3>
              </div>
              <div className="p-[30px]">
                <p className="mb-[14px] text-base text-body-color dark:text-dark-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris facilisis congue justo nec facilisis. Quisque quis
                  augue ipsum. Aliquam suscipit dui ac dui commodo.
                </p>
                <p className="text-base text-body-color dark:text-dark-6">
                  Quisque quis augue ipsum. Aliquam suscipit dui ac dui.
                </p>
              </div>
              <div className="flex items-center space-x-5 border-t border-stroke dark:border-dark-3 py-3 px-[30px]">
                <button className="inline-block text-base font-medium text-primary">
                  Quick Edit
                </button>
                <button className="inline-block text-base font-medium text-dark dark:text-white hover:text-primary">
                  Know Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Popover4;
