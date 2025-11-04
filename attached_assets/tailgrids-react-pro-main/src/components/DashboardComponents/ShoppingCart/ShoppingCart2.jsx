import React from "react";

const ShoppingCart2 = () => {
  return (
    <section className="bg-gray py-20 lg:py-[120px]">
      <div className="container mx-auto">
        <h2 className="mb-12 text-2xl font-semibold text-black sm:text-3xl md:text-4xl">
          Shopping cart
        </h2>
        <div className="space-y-10">
          <CartItem
            img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/shopping-carts/shopping-cart-02/image-01.jpg"
            link="/#"
            title="Modern Lounge Chair"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            Color="Color"
            price="$158.99"
          />
          <CartItem
            img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/shopping-carts/shopping-cart-02/image-01.jpg"
            link="/#"
            title="Mini Basic Table Lamp"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            Color="Color"
            price="$158.99"
          />

          <div className="flex flex-wrap justify-between">
            <div className="mb-10 ml-auto w-full md:mb-0 md:ml-0 md:max-w-[300px] lg:max-w-[360px]">
              <form className="relative">
                <input
                  type="text"
                  placeholder="Coupon code"
                  className="w-full border border-form-stroke px-6 py-[14px] font-medium text-body-color placeholder-body-color outline-hidden transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]"
                />
                <button className="absolute right-3 top-1/2 mb-3 h-[34px] -translate-y-1/2 bg-primary px-5 text-sm font-medium text-white transition hover:bg-primary/90">
                  Apply
                </button>
              </form>
            </div>
            <div className="ml-auto px-6 xl:pr-10">
              <div className="ml-auto w-full max-w-[320px]">
                <p className="mb-3 flex items-center justify-between text-xl font-semibold text-black">
                  <span> Subtotal </span>
                  <span> 403.99$ </span>
                </p>
                <p className="mb-5 text-base font-medium text-body-color">
                  Shipping, taxes, &amp; discounts calculated
                </p>
                <button className="mb-4 flex w-full justify-center bg-primary px-5 py-[10px] text-sm font-semibold text-white transition hover:bg-primary/90">
                  Checkout
                </button>
                <p className="mb-4 text-center text-base font-medium text-body-color">
                  Secured Payment By
                </p>
                <img
                  src="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/shopping-carts/shopping-cart-02/payment.svg"
                  alt="payment"
                  className="mx-auto text-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart2;

const CartItem = ({ img, link, title, subtitle, color, price }) => {
  return (
    <div className="bg-white px-6 py-6 shadow-card xl:pr-10">
      <div className="items-center md:flex">
        <div className="mb-5 mr-9 h-[150px] w-full max-w-[150px] md:mb-0">
          <img
            src={img}
            alt="product"
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="w-full">
          <h4>
            <a
              href={link}
              className="mb-2 block text-xl font-semibold text-black sm:text-2xl"
            >
              {title}
            </a>
          </h4>
          <p className="mb-4 text-base font-medium text-body-color">
            {subtitle}
          </p>
          <div className="w-full items-end justify-between sm:flex">
            <div className="mb-5">
              <label className="mb-1 block text-sm font-medium text-body-color">
                {color}
              </label>
              <div className="relative">
                <select className="w-full appearance-none border border-form-stroke py-2 pl-4 pr-7 text-sm font-semibold text-body-color outline-hidden transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]">
                  <option value="">White</option>
                  <option value="">Black</option>
                  <option value="">Blue</option>
                </select>
                <span className="absolute right-4 top-1/2 mt-[-2px] h-2 w-2 -translate-y-1/2 rotate-45 border-b-[1.5px] border-r-[1.5px] border-body-color"></span>
              </div>
            </div>
            <div className="mb-5 flex items-end sm:justify-end">
              <div className="mr-10">
                <span className="mb-1 block text-sm font-medium text-body-color">
                  Quantity
                </span>
                <div className="inline-flex items-center border border-[#e7e7e7] text-base font-medium text-black">
                  <span className="cursor-pointer select-none border-r border-[#e7e7e7] px-4 py-[6px]">
                    -
                  </span>
                  <span className="px-4 py-[6px]">1</span>
                  <span className="cursor-pointer select-none border-l border-[#e7e7e7] px-4 py-[6px]">
                    +
                  </span>
                </div>
              </div>
              <div>
                <span className="text-lg font-semibold text-black">
                  {price}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
