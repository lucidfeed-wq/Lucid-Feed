import React from "react";

const FeaturedProduct = () => {
  return (
    <section className="bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <SingleFeaturedProduct
            big
            img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/featured-products-01/image-01.jpg"
            link="/#"
            subtitle="Winter Clothings"
            title="Women winter sweater"
            prevPrice="£48.00 "
            price="£24.00"
            discount="-50% Flat Discount"
          />
          <SingleFeaturedProduct
            img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/featured-products-01/image-02.jpg"
            link="/#"
            subtitle="Ladies Jacket"
            title="Ladies denim jacket"
            price="£49.00"
          />
          <SingleFeaturedProduct
            img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/featured-products-01/image-03.jpg"
            link="/#"
            subtitle="Sunglasses"
            title="Stylish black sunglass"
            price="£59.00"
          />
          <SingleFeaturedProduct
            big
            img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/featured-products-01/image-04.jpg"
            link="/#"
            subtitle="T-shirt"
            title="Men's regular fit sando t-shirt"
            prevPrice="£120.00"
            price="£60.00"
            discount="-50% Flat Discount"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;

const SingleFeaturedProduct = ({
  img,
  link,
  subtitle,
  title,
  price,
  prevPrice,
  discount,
  big,
}) => {
  return (
    <div className={`w-full px-4 ${big ? "lg:w-7/12" : "lg:w-5/12"}`}>
      <div className="group mb-10 overflow-hidden rounded-lg border border-stroke bg-white dark:border-dark-3 dark:bg-dark-2">
        <div className="relative">
          <img src={img} alt="product" className="w-full" />

          <div className="absolute bottom-0 left-0 flex h-3/4 w-full items-end bg-linear-to-t from-[#212C36B2] to-[#212B3600] p-8 opacity-0 transition-all group-hover:opacity-100">
            <div className="flex items-center space-x-3">
              <button className="flex h-9 w-9 items-center justify-center rounded-sm bg-white text-center text-dark shadow-1 hover:bg-primary hover:text-white dark:bg-dark-2 dark:text-white dark:shadow-none">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current"
                >
                  <path
                    d="M10.4343 13.4438C9.3093 13.4438 8.4093 14.3438 8.4093 15.4688C8.4093 16.5938 9.3093 17.4938 10.4343 17.4938C11.5593 17.4938 12.4593 16.5938 12.4593 15.4688C12.4593 14.372 11.5312 13.4438 10.4343 13.4438ZM10.4343 16.2563C10.0124 16.2563 9.67493 15.9188 9.67493 15.497C9.67493 15.0751 10.0124 14.7376 10.4343 14.7376C10.8562 14.7376 11.1937 15.0751 11.1937 15.497C11.1937 15.8907 10.8281 16.2563 10.4343 16.2563Z"
                    fill=""
                  />
                  <path
                    d="M5.09055 13.4438C3.96555 13.4438 3.06555 14.3438 3.06555 15.4688C3.06555 16.5938 3.96555 17.4938 5.09055 17.4938C6.21555 17.4938 7.11555 16.5938 7.11555 15.4688C7.11555 14.372 6.18743 13.4438 5.09055 13.4438ZM5.09055 16.2563C4.66868 16.2563 4.33118 15.9188 4.33118 15.497C4.33118 15.0751 4.66868 14.7376 5.09055 14.7376C5.51243 14.7376 5.84993 15.0751 5.84993 15.497C5.84993 15.8907 5.51243 16.2563 5.09055 16.2563Z"
                    fill=""
                  />
                  <path
                    d="M16.3687 0.506348H14.85C14.175 0.506348 13.5843 1.0126 13.5 1.6876L13.05 4.92197H1.9406C1.65935 4.92197 1.3781 5.0626 1.18122 5.2876C1.01247 5.5126 0.928096 5.82197 1.01247 6.10322C1.01247 6.13135 1.01247 6.13135 1.01247 6.15947L2.75622 11.4188C2.86872 11.8126 3.23435 12.0938 3.65622 12.0938H11.4187C12.4593 12.0938 13.3593 11.3063 13.5 10.2657L14.6812 1.85635C14.6812 1.8001 14.7375 1.77197 14.7937 1.77197H16.3125C16.65 1.77197 16.9593 1.49072 16.9593 1.1251C16.9593 0.759473 16.7062 0.506348 16.3687 0.506348ZM12.2906 10.0688C12.2343 10.4907 11.8687 10.8001 11.4468 10.8001H3.90935L2.3906 6.1876H12.8531L12.2906 10.0688Z"
                    fill=""
                  />
                </svg>
              </button>
              <button className="flex h-9 w-9 items-center justify-center rounded-sm bg-white text-center text-dark shadow-1 hover:bg-primary hover:text-white dark:bg-dark-2 dark:text-white dark:shadow-none">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current"
                >
                  <path
                    d="M9.00002 6.66577C7.70627 6.66577 6.66565 7.7064 6.66565 9.00015C6.66565 10.2939 7.70627 11.3345 9.00002 11.3345C10.2938 11.3345 11.3344 10.2939 11.3344 9.00015C11.3344 7.7064 10.2938 6.66577 9.00002 6.66577ZM9.00002 10.0689C8.4094 10.0689 7.93127 9.59077 7.93127 9.00015C7.93127 8.40952 8.4094 7.9314 9.00002 7.9314C9.59065 7.9314 10.0688 8.40952 10.0688 9.00015C10.0688 9.59077 9.59065 10.0689 9.00002 10.0689Z"
                    fill=""
                  />
                  <path
                    d="M17.2125 8.01567C15.6094 5.62505 13.3875 3.2063 9 3.2063C4.6125 3.2063 2.39062 5.62505 0.7875 8.01567C0.39375 8.6063 0.39375 9.3938 0.7875 9.98442C2.39062 12.3469 4.6125 14.7938 9 14.7938C13.3875 14.7938 15.6094 12.3469 17.2125 9.98442C17.6063 9.36567 17.6063 8.6063 17.2125 8.01567ZM16.1719 9.2813C14.1187 12.2907 12.0656 13.5282 9 13.5282C5.93438 13.5282 3.88125 12.2907 1.82812 9.2813C1.71563 9.11255 1.71563 8.88755 1.82812 8.7188C3.88125 5.70942 5.93438 4.47192 9 4.47192C12.0656 4.47192 14.1187 5.70942 16.1719 8.7188C16.2563 8.88755 16.2563 9.11255 16.1719 9.2813Z"
                    fill=""
                  />
                </svg>
              </button>
              <button className="flex h-9 w-9 items-center justify-center rounded-sm bg-white text-center text-dark shadow-1 hover:bg-primary hover:text-white dark:bg-dark-2 dark:text-white dark:shadow-none">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current"
                >
                  <path
                    d="M8.99998 16.5938C8.63435 16.5938 8.26873 16.4531 7.98748 16.2C7.3406 15.6375 6.74998 15.1313 6.2156 14.6813C4.61248 13.3031 3.20623 12.15 2.22185 10.9688C1.06873 9.5625 0.506226 8.24062 0.506226 6.75C0.506226 5.31562 1.01248 3.96563 1.91248 2.98125C2.8406 1.96875 4.13435 1.40625 5.51248 1.40625C6.5531 1.40625 7.53748 1.74375 8.38123 2.39062C8.60623 2.55938 8.8031 2.72812 8.99998 2.95312C9.19685 2.75625 9.39373 2.55938 9.61873 2.39062C10.4625 1.74375 11.4187 1.40625 12.4875 1.40625C13.8937 1.40625 15.1594 1.96875 16.0875 2.98125C17.0156 3.96563 17.4937 5.31562 17.4937 6.75C17.4937 8.24062 16.9594 9.5625 15.7781 10.9688C14.7937 12.15 13.3875 13.3313 11.7844 14.6813C11.25 15.1313 10.6312 15.6656 9.98435 16.2C9.73123 16.4531 9.3656 16.5938 8.99998 16.5938ZM5.51248 2.67188C4.47185 2.67188 3.5156 3.09375 2.81248 3.825C2.13748 4.58438 1.77185 5.625 1.77185 6.75C1.77185 7.90312 2.22185 9 3.1781 10.1531C4.10623 11.25 5.45623 12.4031 7.0031 13.725C7.53748 14.175 8.15623 14.7094 8.8031 15.2719C8.9156 15.3562 9.08435 15.3562 9.19685 15.2719C9.84373 14.7094 10.4625 14.2031 10.9969 13.725C12.5719 12.375 13.9219 11.25 14.8219 10.1531C15.7781 9 16.2281 7.90312 16.2281 6.75C16.2281 5.625 15.8344 4.58437 15.1594 3.85312C14.4562 3.09375 13.5 2.67188 12.4875 2.67188C11.7281 2.67188 11.025 2.925 10.4062 3.375C10.1531 3.57188 9.9281 3.79688 9.7031 4.05C9.53435 4.24687 9.28123 4.3875 8.99998 4.3875C8.71873 4.3875 8.49373 4.275 8.29685 4.05C8.07185 3.79688 7.84685 3.57188 7.59373 3.375C7.0031 2.925 6.29998 2.67188 5.51248 2.67188Z"
                    fill=""
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="relative justify-between px-6 py-8 sm:px-8 md:flex lg:px-6 2xl:px-8">
          {discount && (
            <div className="right-8 top-8 mb-2 sm:absolute sm:mb-0">
              <span className="text-sm font-medium text-primary sm:text-base">
                {discount}
              </span>
            </div>
          )}
          <div>
            <span className="mb-[10px] block text-base font-medium text-body-color dark:text-dark-6">
              {subtitle}
            </span>
            <h3>
              <a
                href={link}
                className="mb-2 block text-lg font-semibold text-dark hover:text-primary dark:text-white xl:text-[28px] xl:leading-[40px]"
              >
                {title}
              </a>
            </h3>

            <p className="text-lg font-semibold text-dark dark:text-white">
              {prevPrice && (
                <span className="mr-3 text-body-color line-through dark:text-dark-6">
                  {prevPrice}
                </span>
              )}
              <span>{price}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
