import React from "react";

const RecentProduct4 = () => {
  return (
    <section className="bg-gray-1 pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] dark:bg-dark">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap items-center justify-center">
          <div className="w-full px-4 lg:w-1/2">
            <div className="mb-12 max-w-[465px] lg:mb-0">
              <span className="text-primary xs:text-xl mb-[18px] block text-lg font-semibold">
                FEATURED PRODUCT
              </span>
              <h2 className="mb-6 text-2xl font-semibold leading-tight! text-dark dark:text-white xl:text-[36px]">
                New Arrival From Creative Clock Collections
              </h2>
              <span className="bg-primary mb-6 block h-[3px] w-[100px]"></span>
              <p className="text-body-color dark:text-dark-6 mb-9 text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit
                amet molestie nunc. Vestibulum tempus justo et venenatis tempus.
                Nulla tincidunt,
              </p>
              <a
                href="/#"
                className="bg-primary inline-flex items-center justify-center rounded-md py-[13px] px-7 text-center text-base font-medium text-white hover:bg-blue-dark"
              >
                Only at $150
              </a>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2 2xl:w-5/12">
            <div className="rounded-3xl border-8 border-white bg-white shadow-testimonial-6 dark:shadow-box-dark">
              <img
                src="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/recent-products-04/product-01.jpg"
                alt="Recent Product"
                className="w-full rounded-[20px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentProduct4;
