import React from "react";

const RecentProduct = () => {
  return (
    <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] dark:bg-dark">
      <div className="container mx-auto">
        <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-[70px]">
          <span className="text-primary mb-2 block text-lg font-semibold">
            Recent Products
          </span>
          <h2 className="text-dark dark:text-white mb-3 text-3xl font-bold sm:text-4xl md:leading-[1.2] md:text-[40px]">
            Top Collections
          </h2>
          <p className="text-body-color dark:text-dark-6 text-base">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </p>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <ProductCard
            link="/#"
            img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/recent-products-01/product-01.jpg"
            title="Men Winter Jacket"
            subtitle="Item Descriptions"
            price="$35.00"
          />
          <ProductCard
            link="/#"
            img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/recent-products-01/product-02.jpg"
            title="Women Collection"
            subtitle="Item Descriptions"
            price="$35.00"
          />
          <ProductCard
            link="/#"
            img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/recent-products-01/product-03.jpg"
            title="Men Winter Jacket"
            subtitle="Item Descriptions"
            price="$35.00"
          />
          <ProductCard
            link="/#"
            img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/recent-products-01/product-04.jpg"
            title="Man in Black"
            subtitle="Item Descriptions"
            price="$35.00"
          />
        </div>
      </div>
    </section>
  );
};

export default RecentProduct;

const ProductCard = ({ link, img, title, subtitle, price }) => {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3 xl:w-1/4">
      <div className="mb-10">
        <div className="mb-5 overflow-hidden rounded-[5px]">
          <img src={img} alt="category" className="w-full" />
        </div>
        <div className="xs:flex flex-wrap justify-between">
          <div className="xs:mb-0 mb-3">
            <h3>
              <a
                href={link}
                className="hover:text-primary inline-block mb-1 text-lg font-semibold text-dark dark:text-white transition 2xl:text-xl"
              >
                {title}
              </a>
            </h3>
            <p className="text-body-color dark:text-dark-6 text-base">{subtitle}</p>
          </div>
          <div>
            <p className="text-primary text-base font-semibold">{price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
