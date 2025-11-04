import React from "react";

const Checkout4 = () => {
  return (
    <>
      <section className="bg-white pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
              <div className="mb-12 lg:mb-0">
                <h3 className="mb-8 text-xl font-semibold text-dark dark:text-white sm:text-[28px] sm:leading-[40px]">
                  Payment Information
                </h3>

                <div className="mb-10 overflow-hidden rounded-[10px] border border-stroke bg-white px-6 py-10 shadow-testimonial-6 dark:border-dark-3 dark:bg-dark-2 dark:shadow-box-dark sm:px-10">
                  <h4 className="mb-8 text-lg font-semibold text-dark dark:text-white">
                    Personal Details
                  </h4>
                  <form className="mb-10 border-b border-stroke pb-4 dark:border-dark-3">
                    <div className="-mx-3 flex flex-wrap">
                      <div className="w-full px-3 md:w-1/2">
                        <InputGroup
                          type="text"
                          placeholder="Mark Litho"
                          labelTitle="Full Name"
                        />
                      </div>

                      <div className="w-full px-3 md:w-1/2">
                        <InputGroup
                          type="text"
                          placeholder="883-992-145"
                          labelTitle="Phone Number"
                        />
                      </div>

                      <div className="w-full px-3 md:w-1/2">
                        <InputGroup
                          type="email"
                          placeholder="yourmail@gmail.com"
                          labelTitle="Email"
                        />
                      </div>

                      <div className="w-full px-3 md:w-1/2">
                        <InputGroup
                          type="text"
                          placeholder="2707 Davis Anenue"
                          labelTitle="Address"
                        />
                      </div>

                      <div className="w-full px-3 md:w-1/3">
                        <SelectGroup labelTitle="Country" />
                      </div>

                      <div className="w-full px-3 md:w-1/3">
                        <InputGroup
                          type="text"
                          placeholder="New York"
                          labelTitle="City"
                        />
                      </div>

                      <div className="w-full px-3 md:w-1/3">
                        <InputGroup
                          type="text"
                          placeholder="94612"
                          labelTitle="Post Code"
                        />
                      </div>
                    </div>
                  </form>

                  <h4 className="mb-6 text-xl font-semibold text-dark dark:text-white">
                    Your Saved Cards
                  </h4>
                  <div className="-mx-3 flex flex-wrap">
                    <div className="w-1/2 px-3">
                      <div>
                        <img
                          src="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/checkout/checkout-04/card-01.svg"
                          alt="card"
                          className="w-full"
                        />
                      </div>
                    </div>
                    <div className="w-1/2 px-3">
                      <div>
                        <img
                          src="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/checkout/checkout-04/card-02.svg"
                          alt="card"
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="mb-8 text-xl font-semibold text-dark dark:text-white sm:text-[28px] sm:leading-[40px]">
                  Shipping Details
                </h3>
                <div className="overflow-hidden rounded-lg border border-stroke bg-white px-6 py-10 shadow-testimonial-6 dark:border-dark-3 dark:bg-dark-2 dark:shadow-box-dark sm:px-10">
                  <h4 className="mb-[22px] text-lg font-semibold text-dark dark:text-white">
                    Shipping Address
                  </h4>
                  <div className="-mx-3 mb-8 flex flex-wrap">
                    <AddressItem
                      id="shippingAddress1"
                      title="Same as Personal"
                      address1="New York, USA"
                      address2="2707 Davis Anenue"
                    />
                    <AddressItem
                      id="shippingAddress2"
                      title="Register Now"
                      address1="Create an account now to have multiple address."
                    />
                  </div>

                  <h4 className="mb-6 text-lg font-semibold text-black">
                    Shipping Method
                  </h4>
                  <div className="-mx-3 mb-8 flex flex-wrap">
                    <MethodItem
                      id="shipping1"
                      img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/checkout/checkout-04/fedex.svg"
                      title="FedEx Fast Delivery"
                      time="Delivery: Friday, 25"
                      price="$10.99"
                    />
                    <MethodItem
                      id="shipping2"
                      img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/checkout/checkout-04/dhl-express.svg"
                      title="DHL Fast Delivery"
                      time="Delivery: Friday, 25"
                      price="$10.99"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
              <h3 className="mb-8 text-xl font-semibold text-dark dark:text-white sm:text-[28px] sm:leading-[40px]">
                Payment Information
              </h3>

              <div className="mb-10 overflow-hidden rounded-[10px] border border-stroke px-6 py-10 dark:border-dark-3 dark:bg-dark-2 sm:px-10 lg:px-8 2xl:px-10">
                <CartItem
                  img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/checkout/checkout-04/product-01.jpg"
                  title="Trendy Ladies Pants"
                  price="$59.99"
                  quantity="1"
                />
                <CartItem
                  img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/checkout/checkout-04/product-02.jpg"
                  title="Men's Sendo T-shirt"
                  price="$80.99"
                  quantity="2"
                />

                <div className="border-t border-stroke pt-6 dark:border-dark-3">
                  <p className="mb-[10px] flex items-center justify-between text-base text-dark dark:text-white">
                    <span>Subtotal</span>
                    <span className="font-medium"> $140.98 </span>
                  </p>
                  <p className="mb-[10px] flex items-center justify-between text-base text-dark dark:text-white">
                    <span>Shipping Cost</span>
                    <span className="font-medium"> $10.99 </span>
                  </p>
                  <p className="mb-5 flex items-center justify-between text-base text-dark dark:text-white">
                    <span>Discount</span>
                    <span className="font-medium"> $5.00 </span>
                  </p>
                </div>
                <div className="border-t border-stroke pt-5 dark:border-dark-3">
                  <p className="mb-6 flex items-center justify-between text-base text-dark dark:text-white">
                    <span>Total Amount</span>
                    <span className="font-medium"> $124.99 </span>
                  </p>
                </div>
                <button className="flex w-full items-center justify-center rounded-md bg-primary px-10 py-3 text-center text-base font-medium text-white hover:bg-blue-dark">
                  Get Started
                </button>
              </div>

              <div className="mb-10 overflow-hidden rounded-lg border border-stroke px-6 py-10 shadow-testimonial-6 dark:border-dark-3 dark:bg-dark-2 dark:shadow-box-dark sm:px-10 lg:px-8 2xl:px-10">
                <div className="mb-8 border-b border-stroke pb-3 dark:border-dark-3">
                  <h3 className="mb-1 text-lg font-semibold text-dark dark:text-white">
                    Coupon Code
                  </h3>
                  <p className="text-sm font-medium text-body-color dark:text-dark-6">
                    Enter code to get discount instantly
                  </p>
                </div>

                <form className="relative">
                  <input
                    type="text"
                    placeholder="Coupon code"
                    className="w-full rounded-lg border border-stroke bg-transparent py-3 pl-5 pr-20 font-medium text-body-color outline-hidden transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD] dark:border-dark-3 dark:text-dark-6"
                  />
                  <button className="absolute right-3 top-1/2 mb-3 h-[34px] -translate-y-1/2 rounded-sm bg-primary px-5 text-sm font-semibold text-white transition hover:bg-blue-dark">
                    Apply
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout4;

const CartItem = ({ img, title, quantity, price }) => {
  return (
    <div className="mb-9 flex items-center">
      <div className="mr-6 h-[90px] w-full max-w-[80px] overflow-hidden rounded-lg border border-stroke dark:border-dark-3 sm:h-[110px] sm:max-w-[100px]">
        <img src={img} alt="product image" className="w-full" />
      </div>
      <div className="w-full">
        <div className="w-full">
          <p className="mb-[6px] text-base font-medium text-dark dark:text-white">
            {title}
          </p>
          <p className="text-sm font-medium text-body-color dark:text-dark-6">
            {price}
          </p>
          <p className="text-sm font-medium text-body-color dark:text-dark-6">
            <span className="pr-0.5"> Quantity: </span> <span>{quantity}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

const InputGroup = ({ type, placeholder, labelTitle }) => {
  return (
    <div className="mb-5">
      <label className="mb-2.5 block text-base font-medium text-dark dark:text-white">
        {labelTitle}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-body-color outline-hidden transition placeholder:text-dark-5 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD] dark:border-dark-3 dark:text-dark-5"
      />
    </div>
  );
};

const SelectGroup = ({ labelTitle }) => {
  return (
    <div className="mb-5">
      <label
        for=""
        className="mb-2.5 block text-base font-medium text-dark dark:text-white"
      >
        {labelTitle}
      </label>
      <div className="relative">
        <select className="w-full appearance-none rounded-md border border-stroke bg-transparent px-5 py-3 font-medium text-dark-5 outline-hidden transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD] dark:border-dark-3">
          <option value="" className="dark:bg-dark-2">
            United States
          </option>
          <option value="" className="dark:bg-dark-2">
            United Kingdom
          </option>
          <option value="" className="dark:bg-dark-2">
            Canada
          </option>
        </select>
        <span className="absolute right-5 top-1/2 -translate-y-1/2 text-body-color dark:text-dark-6">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-current stroke-current"
          >
            <path
              d="M2.4142 5.03575L2.41418 5.03577L2.417 5.03852L7.767 10.2635L8.00101 10.4921L8.23393 10.2624L13.5839 4.98741L13.5839 4.98741L13.5856 4.98575C13.6804 4.89093 13.8194 4.89093 13.9142 4.98575C14.0087 5.0803 14.009 5.2187 13.915 5.31351C13.9148 5.31379 13.9145 5.31407 13.9142 5.31435L8.16628 10.9623L8.16627 10.9623L8.1642 10.9643C8.06789 11.0607 8.02303 11.0667 7.9999 11.0667C7.94098 11.0667 7.88993 11.0523 7.82015 10.9991L2.08477 5.36351C1.99078 5.26871 1.99106 5.1303 2.0856 5.03575C2.18043 4.94093 2.31937 4.94093 2.4142 5.03575Z"
              fill=""
              stroke=""
              stroke-width="0.666667"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

const AddressItem = ({ id, title, address1, address2 }) => {
  return (
    <div className="w-full px-3 md:w-1/2 xl:w-1/2">
      <div className="mb-3">
        <input
          type="radio"
          name="shippingAddress"
          id={id}
          className="shipping sr-only"
        />
        <label
          htmlFor={id}
          className="block cursor-pointer overflow-hidden rounded-md border border-transparent bg-white px-6 py-4 dark:bg-white/5 sm:px-4 md:px-6 lg:px-4 xl:px-6"
        >
          <span className="title mb-1 block text-sm font-semibold text-dark dark:text-white sm:text-base md:text-sm lg:text-base">
            {title}
          </span>
          <span className="block text-sm text-dark dark:text-white">
            {address1} <br />
            {address2}
          </span>
        </label>
      </div>
    </div>
  );
};

const MethodItem = ({ id, img, title, time, price }) => {
  return (
    <div className="w-full px-3 md:w-1/2 lg:w-full xl:w-1/2">
      <div className="mb-3">
        <input
          type="radio"
          name="shipping"
          id={id}
          className="shipping sr-only"
        />
        <label
          htmlFor={id}
          className="flex cursor-pointer items-center overflow-hidden rounded-md border border-transparent bg-white px-6 py-4 dark:bg-white/5 sm:px-4 md:px-6 lg:px-4 xl:px-6"
        >
          <div className="mr-4 w-full max-w-[40px] sm:max-w-[65px]">
            <img src={img} alt="fedex" />
          </div>
          <div className="border-l border-stroke pl-5 dark:border-dark-3">
            <span className="mb-1 block text-sm font-semibold text-dark dark:text-white sm:text-base md:text-sm lg:text-base">
              {title}
            </span>
            <span className="block text-sm text-body-color dark:text-dark-6">
              {time}
            </span>
            <span className="block text-sm font-medium text-body-color dark:text-dark-6">
              {price}
            </span>
          </div>
        </label>
      </div>
    </div>
  );
};
