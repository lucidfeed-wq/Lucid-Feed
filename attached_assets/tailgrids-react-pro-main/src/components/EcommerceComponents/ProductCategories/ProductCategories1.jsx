import React from "react";

const ProductCategories = () => {
  return (
    <section className="bg-white pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] dark:bg-dark">
      <div className="container mx-auto">
        <div className="mx-auto mb-[60px] max-w-[510px] text-center">
          <h2 className="text-dark dark:text-white mb-4 text-3xl leading-[1.2] font-bold sm:text-4xl md:text-[40px]">
            Shop By Category
          </h2>
          <p className="text-body-color text-base dark:text-dark-6">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </p>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <CategoriesItem
            link="/#"
            img="https://cdn-tailgrids.b-cdn.net/1.0/assets/images/ecommerce/categories/category-01/image-01.jpg"
            title="Accessories"
            subtitle="8 Products Available"
          />
          <CategoriesItem
            link="/#"
            img="https://cdn-tailgrids.b-cdn.net/1.0/assets/images/ecommerce/categories/category-01/image-02.jpg"
            title="Bags"
            subtitle="4 Products Available"
          />
          <CategoriesItem
            link="/#"
            img="https://cdn-tailgrids.b-cdn.net/1.0/assets/images/ecommerce/categories/category-01/image-03.jpg"
            title="Electronics"
            subtitle="12 Products Available"
          />
          <CategoriesItem
            link="/#"
            img="https://cdn-tailgrids.b-cdn.net/1.0/assets/images/ecommerce/categories/category-01/image-04.jpg"
            title="Shoes"
            subtitle="24 Products Available"
          />
        </div>
        <div className="mt-10 text-center">
          <a
            href="/#"
            className="bg-primary inline-flex items-center justify-center rounded-md py-[13px] px-7 text-center text-base font-medium text-white hover:bg-blue-dark"
          >
            Explore All Category
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;

const CategoriesItem = ({ link, img, title, subtitle }) => {
  return (
    <div className="w-full px-4 sm:w-1/2 lg:w-1/4">
      <a href={link} className="group mb-10 block text-center">
        <div className="mb-5 overflow-hidden rounded-lg">
          <img src={img} alt="category" className="w-full" />
        </div>
        <h3 className="group-hover:text-primary mb-1 text-xl font-semibold text-dark dark:text-white md:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="text-body-color text-base dark:text-dark-6">{subtitle}</p>
      </a>
    </div>
  );
};
