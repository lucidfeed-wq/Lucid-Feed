import React from "react";

const ProductGrid9 = () => {
  return (
    <section className="bg-tg-bg pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <SingleProduct
          newItem
          img="https://cdn.tailgrids.com/2.0/image/ecommerce/images/products/product-carousel-01/image-01.jpg"
          link="/#"
          title="Men Winter Jacket"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla bibendum lacus nec ante fermentum, quis feugiat velit dapibus. Aliquam fermentum fringilla orci, a"
          price="$35.00"
        />
      </div>
    </section>
  );
};

export default ProductGrid9;

const SingleProduct = ({ img, link, title, subtitle, price, newItem }) => {
  return (
    <div className="mx-auto flex w-full max-w-[870px] flex-wrap items-center rounded-md border border-stroke bg-white p-5 dark:border-dark-3 dark:bg-dark-2 sm:flex-nowrap">
      <div className="relative mb-5 w-full overflow-hidden rounded-md sm:mb-0 sm:max-w-[270px]">
        <img src={img} alt="product" className="w-full" />
        {newItem && (
          <span className="absolute right-4 top-4 inline-flex items-center justify-center rounded-sm bg-secondary px-3 py-1 text-sm font-semibold text-white">
            New
            <span className="pl-1">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.1937 4.48125L7.79997 3.95625L6.26247 0.73125C6.14997 0.50625 5.84997 0.50625 5.73747 0.73125L4.19997 3.975L0.82497 4.48125C0.58122 4.51875 0.48747 4.8375 0.67497 5.00625L3.13122 7.5375L2.54997 11.0812C2.51247 11.325 2.75622 11.5312 2.98122 11.3813L6.03747 9.7125L9.07497 11.3813C9.28122 11.4938 9.54372 11.3062 9.48747 11.0812L8.90622 7.5375L11.3625 5.00625C11.5125 4.8375 11.4375 4.51875 11.1937 4.48125Z"
                  fill="white"
                ></path>
              </svg>
            </span>
          </span>
        )}

        <div className="absolute bottom-7 left-0 right-0 mx-auto flex w-full items-center justify-center space-x-3">
          <div className="group relative">
            <button className="mx-auto mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-white text-center text-dark dark:bg-dark dark:text-white">
              <svg
                width="16"
                height="18"
                viewBox="0 0 16 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5032 13.5557C9.40635 13.5557 8.50635 14.4838 8.50635 15.6088C8.50635 16.7338 9.40635 17.6619 10.5032 17.6619C11.6001 17.6619 12.5001 16.7338 12.5001 15.6088C12.5282 14.4838 11.6282 13.5557 10.5032 13.5557ZM10.5032 16.6775C9.94072 16.6775 9.49072 16.1994 9.49072 15.6088C9.49072 15.0182 9.94072 14.54 10.5032 14.54C11.0657 14.54 11.5157 15.0182 11.5157 15.6088C11.5438 16.1994 11.0657 16.6775 10.5032 16.6775Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M4.1187 13.5557C3.02183 13.5557 2.12183 14.4838 2.12183 15.6088C2.12183 16.7338 3.02183 17.6619 4.1187 17.6619C5.21557 17.6619 6.11557 16.7338 6.11557 15.6088C6.1437 14.4838 5.2437 13.5557 4.1187 13.5557ZM4.1187 16.6775C3.5562 16.6775 3.1062 16.1994 3.1062 15.6088C3.1062 15.0182 3.5562 14.54 4.1187 14.54C4.6812 14.54 5.1312 15.0182 5.1312 15.6088C5.15932 16.1994 4.6812 16.6775 4.1187 16.6775Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M15.2563 0.365234H13.4563C13.0344 0.365234 12.6688 0.674609 12.6125 1.09648L12.1063 4.80898H1.05315C0.800022 4.80898 0.575022 4.92148 0.434397 5.11836C0.293772 5.31523 0.237522 5.56836 0.293772 5.79336V5.82148L2.0094 11.1371C2.09377 11.4746 2.40315 11.7277 2.7969 11.7277H11.0938C11.7125 11.7277 12.2188 11.2777 12.3031 10.659L13.5969 1.32148H15.2844C15.5656 1.32148 15.7906 1.09648 15.7906 0.815234C15.7906 0.533984 15.5375 0.365234 15.2563 0.365234ZM11.2906 10.5184C11.2625 10.6309 11.1781 10.7434 11.0375 10.7434H2.88127L1.27815 5.79336H11.9375L11.2906 10.5184Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
            <div className="absolute -top-full left-1/2 z-50 mb-10 -translate-x-1/2 whitespace-nowrap rounded-sm bg-white px-2 py-2 text-sm font-semibold text-dark opacity-0 group-hover:opacity-100 dark:bg-dark dark:text-white">
              <p className="absolute -bottom-1 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-white dark:bg-dark"></p>
              <span>Add to Card</span>
            </div>
          </div>
          <div className="group relative">
            <button className="mx-auto mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-white text-center text-dark dark:bg-dark dark:text-white">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 7.03125C7.90312 7.03125 7.03125 7.93125 7.03125 9C7.03125 10.0687 7.93125 10.9688 9 10.9688C10.0687 10.9688 10.9687 10.0687 10.9687 9C10.9687 7.93125 10.0969 7.03125 9 7.03125ZM9 9.98438C8.46562 9.98438 8.01562 9.53437 8.01562 9C8.01562 8.46563 8.46562 8.01562 9 8.01562C9.53437 8.01562 9.98437 8.46563 9.98437 9C9.98437 9.53437 9.53437 9.98438 9 9.98438Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M17.5501 8.66289C15.6938 5.73789 12.4876 3.99414 9.0001 3.99414C5.5126 3.99414 2.30635 5.73789 0.450098 8.66289C0.337598 8.85976 0.337598 9.11289 0.450098 9.30976C2.30635 12.2348 5.5126 13.9785 9.0001 13.9785C12.4876 13.9785 15.6938 12.2348 17.5501 9.30976C17.6907 9.11289 17.6907 8.85976 17.5501 8.66289ZM9.0001 12.9941C5.93447 12.9941 3.09385 11.5035 1.40635 8.97227C3.09385 6.46914 5.93447 4.97852 9.0001 4.97852C12.0657 4.97852 14.9063 6.46914 16.5938 8.97227C14.9063 11.5035 12.0657 12.9941 9.0001 12.9941Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
            <div className="absolute -top-full left-1/2 z-50 mb-10 -translate-x-1/2 whitespace-nowrap rounded-sm bg-white px-2 py-2 text-sm font-semibold text-dark opacity-0 group-hover:opacity-100 dark:bg-dark dark:text-white">
              <p className="absolute -bottom-1 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-white dark:bg-dark"></p>
              <span>Quick View</span>
            </div>
          </div>
          <div className="group relative">
            <button className="mx-auto mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-white text-center text-dark dark:bg-dark dark:text-white">
              <svg
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.9999 15.7066C8.6624 15.7066 8.29678 15.5941 8.04365 15.341C7.39678 14.7785 6.7499 14.2441 6.1874 13.766C4.52803 12.3598 3.09365 11.1504 2.08115 9.94102C0.899902 8.53477 0.337402 7.18477 0.337402 5.69414C0.337402 4.23164 0.843653 2.88164 1.77178 1.89727C2.6999 0.884766 3.99365 0.322266 5.3999 0.322266C6.44053 0.322266 7.4249 0.659766 8.26865 1.30664C8.52178 1.50352 8.7749 1.72852 8.9999 1.98164C9.2249 1.72852 9.47803 1.50352 9.73115 1.30664C10.5749 0.659766 11.5312 0.322266 12.5999 0.322266C14.0062 0.322266 15.2718 0.884766 16.228 1.89727C17.1562 2.88164 17.6624 4.23164 17.6624 5.69414C17.6624 7.18477 17.0999 8.53477 15.9187 9.94102C14.9062 11.1504 13.4718 12.3598 11.8124 13.766C11.2499 14.2441 10.603 14.7785 9.95615 15.341C9.70303 15.566 9.3374 15.7066 8.9999 15.7066ZM5.3999 1.27852C4.2749 1.27852 3.23428 1.72852 2.50303 2.54414C1.74365 3.35977 1.3499 4.45664 1.3499 5.66602C1.3499 6.90352 1.82803 8.05664 2.84053 9.29414C3.79678 10.4473 5.20303 11.6285 6.83428 13.0066C7.39678 13.4848 8.04365 14.0191 8.69053 14.6098C8.85928 14.7504 9.14053 14.7504 9.30928 14.6098C9.98428 14.0473 10.603 13.4848 11.1655 13.0066C12.7968 11.6285 14.203 10.4473 15.1593 9.29414C16.1718 8.05664 16.6499 6.90352 16.6499 5.66602C16.6499 4.45664 16.228 3.35977 15.4968 2.54414C14.7374 1.72852 13.7249 1.27852 12.5999 1.27852C11.7562 1.27852 10.9968 1.53164 10.3499 2.06602C10.0687 2.26289 9.84365 2.51602 9.59053 2.79727C9.4499 2.96602 9.2249 3.07852 8.9999 3.07852C8.7749 3.07852 8.5499 2.96602 8.40928 2.79727C8.18428 2.51602 7.93115 2.26289 7.6499 2.06602C7.00303 1.55977 6.24365 1.27852 5.3999 1.27852Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
            <div className="absolute -top-full left-1/2 z-50 mb-10 -translate-x-1/2 whitespace-nowrap rounded-sm bg-white px-2 py-2 text-sm font-semibold text-dark opacity-0 group-hover:opacity-100 dark:bg-dark dark:text-white">
              <p className="absolute -bottom-1 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-white dark:bg-dark"></p>
              <span>Favorite</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full sm:ml-6 md:ml-9">
        <h3 className="mb-2">
          <a
            href={link}
            className="text-lg font-semibold text-dark hover:text-primary dark:text-white xs:text-xl"
          >
            {title}
          </a>
        </h3>
        <p className="mb-6 text-base font-medium text-body-color dark:text-dark-6">
          {price}
        </p>
        <p className="text-base text-body-color dark:text-dark-6">{subtitle}</p>
      </div>
    </div>
  );
};
