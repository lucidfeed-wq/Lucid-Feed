import React from "react";

const ProductCategories3 = () => {
  return (
    <section className="bg-white pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] dark:bg-dark">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            <CategoriesItem
              bigImg
              link="/#"
              img="https://cdn-tailgrids.b-cdn.net/1.0/assets/images/ecommerce/categories/category-03/image-01.jpg"
              subtitle="#House"
              title="Express Your Beautiful Life Through Furniture"
            />
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <CategoriesItem
              link="/#"
              img="https://cdn-tailgrids.b-cdn.net/1.0/assets/images/ecommerce/categories/category-03/image-02.jpg"
              subtitle="#Accessories"
              title="Discover Our Accessories Collection"
            />
            <CategoriesItem
              link="/#"
              img="https://cdn-tailgrids.b-cdn.net/1.0/assets/images/ecommerce/categories/category-03/image-03.jpg"
              subtitle="#Office"
              title="Make Your Workspace More Comfortable"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories3;

const CategoriesItem = ({ bigImg, link, img, title, subtitle }) => {
  return (
    <div
      className={` ${
        bigImg
          ? "relative mb-10 sm:h-[500px] lg:h-[440px] xl:h-[500px]"
          : "relative mb-10 h-[180px] sm:h-[230px] lg:h-[200px] xl:h-[230px]"
      }`}
    >
      <img
        src={img}
        alt="category"
        className="h-full w-full object-cover object-center"
      />
      <div className="absolute top-0 left-0 h-full w-full py-10 px-6 sm:px-10">
        <div className="max-w-[400px]">
          <span className="text-body-color mb-3 block text-base font-medium">
            {subtitle}
          </span>
          <a
            href={link}
            className="text-xl font-semibold text-dark lg:text-2xl xl:leading-10 xl:text-[28px]"
          >
            {title}
          </a>
        </div>
      </div>
    </div>
  );
};
