import React from "react";

const ProductCategories2 = () => {
  return (
    <section className="bg-white pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] dark:bg-dark">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <CategoriesItem
            link="/#"
            img="https://cdn-tailgrids.b-cdn.net/1.0/assets/images/ecommerce/categories/category-02/image-01.jpg"
            title="Men Collections"
            subtitle="Lorem ipsum adipiscing elit ante mauris, tempor sit amet."
            button="Get Started"
          />
          <CategoriesItem
            link="/#"
            img="https://cdn-tailgrids.b-cdn.net/1.0/assets/images/ecommerce/categories/category-02/image-02.jpg"
            title="Women Collections"
            subtitle="Lorem ipsum adipiscing elit ante mauris, tempor sit amet."
            button="Get Started"
          />
          <CategoriesItem
            link="/#"
            img="https://cdn-tailgrids.b-cdn.net/1.0/assets/images/ecommerce/categories/category-02/image-03.jpg"
            title="Kids Collections"
            subtitle="Lorem ipsum adipiscing elit ante mauris, tempor sit amet."
            button="Get Started"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductCategories2;

const CategoriesItem = ({ link, img, title, subtitle, button }) => {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="relative z-10 mb-10">
        <img src={img} alt="category" className="w-full" />
        <div className="absolute bottom-0 left-0 flex h-3/4 w-full items-end justify-center bg-linear-to-b from-[#3056D300] to-[#3056D3E5] py-10 px-5">
          <div className="text-center">
            <a
              href={link}
              className="mb-2 block text-xl font-bold text-white hover:text-white/80 sm:text-2xl xl:leading-10 xl:text-[28px]"
            >
              {title}
            </a>
            <p className="mx-auto mb-5 max-w-[280px] text-base text-white">
              {subtitle}
            </p>
            <button className="inline-flex items-center justify-center rounded-md bg-white py-[10px] px-7 text-center text-base font-medium text-dark hover:bg-gray-4">
              {button}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
