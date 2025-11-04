import React from "react";

const ProductCategories5 = () => {
  return (
    <section className="bg-white pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] dark:bg-dark">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <CategoriesItem
            link="/#"
            img="https://cdn-tailgrids.b-cdn.net/1.0/assets/images/ecommerce/categories/category-05/image-01.jpg"
            subtitle="MAN'S COLLECTION"
            title="Giordanor Shirt"
            details="Lorem ipsum dolor sit amet consectetur adipisc elit."
            button="Get Started"
          />
          <CategoriesItem
            link="/#"
            img="https://cdn-tailgrids.b-cdn.net/1.0/assets/images/ecommerce/categories/category-05/image-02.jpg"
            subtitle="MAN'S COLLECTION"
            title="Giordanor Shirt"
            details="Lorem ipsum dolor sit amet consectetur adipisc elit."
            button="Get Started"
          />
          <CategoriesItem
            link="/#"
            img="https://cdn-tailgrids.b-cdn.net/1.0/assets/images/ecommerce/categories/category-05/image-03.jpg"
            subtitle="MAN'S COLLECTION"
            title="Giordanor Shirt"
            details="Lorem ipsum dolor sit amet consectetur adipisc elit."
            button="Get Started"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductCategories5;

const CategoriesItem = ({ link, img, title, subtitle, details, button }) => {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="group relative z-10 mb-10">
        <img src={img} alt="category" className="w-full" />
        <div className="invisible absolute top-0 left-0 flex h-full w-full items-center justify-center p-5 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
          <div className="bg-primary flex h-full w-full flex-col items-center justify-center text-center">
            <span className="mb-1 block text-base font-medium uppercase text-white">
              {subtitle}
            </span>
            <a
              href={link}
              className="mb-3 block text-xl font-semibold text-white hover:text-white/80 md:text-2xl xl:leading-10 xl:text-[28px]"
            >
              {title}
            </a>
            <p className="mx-auto mb-8 max-w-[250px] text-base text-white/70 xl:mb-10">
              {details}
            </p>
            <button className="inline-flex items-center justify-center border border-white rounded-md py-[11px] px-7 text-center text-base font-medium text-white hover:bg-white hover:text-dark">
              {button}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
