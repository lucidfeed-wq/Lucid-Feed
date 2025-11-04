import React from "react";

const RecentProduct3 = () => {
  return (
    <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] dark:bg-dark">
      <div className="container mx-auto">
        <ProductCard
          subtitle="Start From $50"
          title="New Arrival From Creative Clock Collections"
          details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet molestie nunc. Vestibulum tempus justo et venenatis tempus. Nulla tincidunt,"
          link="/#"
          button="View All Items"
          img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/recent-products-03/product-01.jpg"
        />
        <ProductCard
          subtitle="Start From $49"
          title="New Summer Collections For Man's Fashion."
          details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet molestie nunc. Vestibulum tempus justo et venenatis tempus. Nulla tincidunt,"
          link="/#"
          button="View All Items"
          img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/recent-products-03/product-02.jpg"
        />
      </div>
    </section>
  );
};

export default RecentProduct3;

const ProductCard = ({ subtitle, title, details, link, button, img }) => {
  return (
    <>
      <div className="group -mx-4 flex sm:odd:flex-row sm:even:flex-row-reverse flex-wrap items-center justify-center mb-24 last:mb-5">
        <div className="w-full px-4 lg:w-1/2 2xl:w-5/12">
          <div className="mb-12 max-w-[465px] lg:mb-0 lg:group-even:ml-auto">
            <span className="text-primary mb-4 block text-lg font-semibold md:text-2xl">
              {subtitle}
            </span>
            <h2 className="mb-5 text-2xl font-semibold leading-tight! text-dark dark:text-white xl:text-4xl">
              {title}
            </h2>
            <p className="text-body-color dark:text-dark-6 mb-9 text-base">
              {details}
            </p>
            <a
              href={link}
              className="bg-primary inline-flex items-center justify-center rounded-md py-[13px] px-7 text-center text-base font-medium text-white hover:bg-blue-dark"
            >
              {button}
            </a>
          </div>
        </div>
        <div className="w-full px-4 lg:w-1/2 2xl:w-5/12">
          <div>
            <img src={img} alt="Recent Product" className="w-full rounded-lg" />
          </div>
        </div>
      </div>
    </>
  );
};
