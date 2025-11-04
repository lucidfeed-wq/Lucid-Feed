import React from "react";

const ProductCategories4 = () => {
  return (
    <section className="bg-gray-1 pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] dark:bg-dark">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap items-end">
          <div className="w-full px-4 lg:w-2/3">
            <div className="mb-[60px] max-w-[510px] lg:mb-20">
              <h2 className="text-dark dark:text-white mb-4 text-3xl font-bold md:leading-[45px] md:text-[38px]">
                Shop By Category
              </h2>
              <p className="text-body-color text-base dark:text-dark-6">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/3">
            <div className="mb-[60px] lg:mb-20 lg:text-right">
              <a
                href="/#"
                className="border-primary dark:border-white text-primary dark:text-white hover:border-primary hover:bg-primary inline-flex items-center justify-center rounded-md border py-3 px-7 text-center text-base transition hover:text-white"
              >
                Explore All
              </a>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <CategoriesItem
            link="/#"
            img="https://cdn-tailgrids.b-cdn.net/1.0/assets/images/ecommerce/categories/category-04/image-01.jpg"
            tag="#House"
            title="Beautiful Furniture"
          />
          <CategoriesItem
            link="/#"
            img="https://cdn-tailgrids.b-cdn.net/1.0/assets/images/ecommerce/categories/category-04/image-02.jpg"
            tag="#Accessories"
            title="Accessories Collection"
          />
          <CategoriesItem
            link="/#"
            img="https://cdn-tailgrids.b-cdn.net/1.0/assets/images/ecommerce/categories/category-04/image-03.jpg"
            tag="#Kitchen"
            title="Kitchen Set Collection"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductCategories4;

const CategoriesItem = ({ link, img, title, tag }) => {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="mb-10 rounded-xl border border-stroke dark:border-dark-3 bg-white dark:bg-dark-2 p-3">
        <a href={link} className="block">
          <img src={img} alt="category" className="w-full rounded-lg" />
        </a>
        <div className="px-3 pt-6 pb-3">
          <span className="text-body-color dark:text-dark-6 mb-1 text-base font-medium">{tag}</span>
          <a
            href={link}
            className="hover:text-primary block text-lg font-semibold text-dark dark:text-white sm:text-2xl md:text-xl lg:text-lg xl:text-2xl"
          >
            {title}
          </a>
        </div>
      </div>
    </div>
  );
};
