import React from "react";

const ECommerceHero5 = () => {
  return (
    <section className="py-20 dark:bg-dark lg:py-[120px]">
      <div className="mx-auto px-4 sm:container">
        <div className="bg-gray dark:bg-dark-2">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mt-20 max-w-[570px] px-8 md:pl-12 md:pr-0 lg:mt-0 xl:pl-16">
                <h1 className="mb-5 text-3xl font-bold leading-[1.2]! text-dark dark:text-white sm:text-4xl xl:text-[40px]">
                  Our Newest & Trendy Shoes Collection
                </h1>
                <h2 className="mb-4 text-lg font-semibold text-dark dark:text-white sm:text-xl xl:text-2xl">
                  Discover Your Own Shoes
                </h2>
                <p className="mb-10 text-base text-body-color dark:text-dark-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum ornare vestibulum mollis.
                </p>
                <a
                  href="/#"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-[13px] text-center text-base font-medium text-white hover:bg-blue-dark"
                >
                  Our New Collection
                </a>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative z-10 my-20 text-center">
                <img
                  src="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/headers/header-05/image-01.png"
                  alt="product"
                  className="mx-auto max-w-full"
                />
                <span className="absolute left-1/2 top-1/2 -z-10 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 scale-75 rounded-full bg-primary/5 sm:scale-100 lg:scale-75 xl:scale-100"></span>
                <span className="absolute left-1/2 top-1/2 -z-10 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 scale-75 rounded-full bg-primary/[.03] sm:scale-100 lg:scale-75 xl:scale-100"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ECommerceHero5;
