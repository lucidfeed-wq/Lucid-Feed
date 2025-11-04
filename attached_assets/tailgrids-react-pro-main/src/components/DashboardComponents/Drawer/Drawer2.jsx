import React, { useState } from "react";

const Drawer2 = () => {
  return (
    <>
      <section className="min-h-screen w-full bg-gray-2 dark:bg-dark"></section>
      <div className="fixed right-0 top-0 flex h-screen w-full max-w-[400px] flex-col justify-between overflow-y-auto bg-white px-5 py-9 dark:bg-dark-2 sm:px-9">
        <button className="absolute right-5 top-5 z-10 text-dark-5 hover:text-primary">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-current"
          >
            <path d="M9.9 9.00001L16.7625 2.13751C17.0156 1.88439 17.0156 1.49064 16.7625 1.23751C16.5094 0.984387 16.1156 0.984387 15.8625 1.23751L9 8.10001L2.1375 1.23751C1.88437 0.984387 1.49062 0.984387 1.2375 1.23751C0.984372 1.49064 0.984372 1.88439 1.2375 2.13751L8.1 9.00001L1.2375 15.8625C0.984372 16.1156 0.984372 16.5094 1.2375 16.7625C1.35 16.875 1.51875 16.9594 1.6875 16.9594C1.85625 16.9594 2.025 16.9031 2.1375 16.7625L9 9.90001L15.8625 16.7625C15.975 16.875 16.1437 16.9594 16.3125 16.9594C16.4812 16.9594 16.65 16.9031 16.7625 16.7625C17.0156 16.5094 17.0156 16.1156 16.7625 15.8625L9.9 9.00001Z" />
          </svg>
        </button>

        <div>
          <div className="mb-9 flex justify-between border-b border-stroke dark:border-dark-3">
            <h3 className="mb-5 text-2xl font-semibold text-dark dark:text-white">
              Cart
            </h3>
          </div>
          <div className="space-y-[30px] pb-5">
            <CartItem
              img="https://cdn.tailgrids.com/2.0/image/dashboard/images/drawer/image-01.jpg"
              link="/#"
              name="Aigo T98 Wireless Bluetooth Speaker"
              color="Black"
              price="$159.00"
            />
            <CartItem
              img="https://cdn.tailgrids.com/2.0/image/dashboard/images/drawer/image-02.jpg"
              link="/#"
              name="Xiaomi Mi Compact Mini Bluetooth Speaker"
              color="White"
              price="$159.00"
            />
          </div>
        </div>
        <div className="border-t border-stroke pt-5 dark:border-dark-3">
          <div className="mb-3 flex justify-between">
            <h3 className="text-2xl font-semibold text-dark dark:text-white">
              Cart
            </h3>
            <p className="text-base font-medium text-dark dark:text-white">
              $248.00
            </p>
          </div>
          <p className="mb-[18px] text-sm text-body-color dark:text-dark-6">
            Shipping, taxes, and discount codes calculated
          </p>

          <a
            href="/#"
            className="flex items-center justify-center rounded-md bg-primary px-10 py-[13px] text-base font-medium text-white hover:bg-blue-dark"
          >
            Checkout
          </a>
        </div>
      </div>
    </>
  );
};

export default Drawer2;

const CartItem = ({ img, link, name, color, price }) => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () =>
    setCount((prevCount) => {
      if (prevCount <= 0) return 0;
      return prevCount - 1;
    });

  return (
    <div className="flex w-full">
      <div className="mr-5 h-[86px] w-full max-w-[70px] overflow-hidden rounded-sm sm:max-w-[86px]">
        <img
          src={img}
          alt="product"
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="w-full">
        <h5>
          <a
            href={link}
            className="mb-[6px] inline-block text-base font-medium text-dark hover:text-primary dark:text-white"
          >
            {name}
          </a>
        </h5>
        <p className="mb-4 text-sm text-body-color dark:text-dark-6">{color}</p>
        <div className="flex justify-between">
          <div className="inline-flex items-center rounded-sm border border-stroke text-sm font-medium text-dark dark:border-dark-3 dark:text-white">
            <span
              onClick={decrease}
              className="flex h-8 w-8 cursor-pointer select-none items-center justify-center text-dark dark:text-white"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current"
              >
                <path d="M11.0626 6.43135H0.937598C0.712598 6.43135 0.506348 6.24385 0.506348 6.0001C0.506348 5.7751 0.693848 5.56885 0.937598 5.56885H11.0626C11.2876 5.56885 11.4938 5.75635 11.4938 6.0001C11.4938 6.2251 11.2876 6.43135 11.0626 6.43135Z" />
              </svg>
            </span>
            <span className="border-x border-stroke px-3 py-1 dark:border-dark-3">
              {count}
            </span>
            <span
              onClick={increase}
              className="flex h-8 w-8 cursor-pointer select-none items-center justify-center text-dark dark:text-white"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current"
              >
                <g clipPath="url(#clip0_1032_24236)">
                  <path d="M11.2501 5.5876H6.43135V0.750098C6.43135 0.525098 6.24385 0.318848 6.0001 0.318848C5.7751 0.318848 5.56885 0.506348 5.56885 0.750098V5.5876H0.750098C0.525098 5.5876 0.318848 5.7751 0.318848 6.01885C0.318848 6.24385 0.506348 6.4501 0.750098 6.4501H5.5876V11.2501C5.5876 11.4751 5.7751 11.6813 6.01885 11.6813C6.24385 11.6813 6.4501 11.4938 6.4501 11.2501V6.43135H11.2501C11.4751 6.43135 11.6813 6.24385 11.6813 6.0001C11.6813 5.7751 11.4751 5.5876 11.2501 5.5876Z" />
                </g>
                <defs>
                  <clipPath id="clip0_1032_24236">
                    <rect width="12" height="12" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
          <p className="text-sm font-medium text-dark dark:text-white">
            {price}
          </p>
        </div>
      </div>
    </div>
  );
};
