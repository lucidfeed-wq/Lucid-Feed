import React from "react";

const Checkout = () => {
  return (
    <>
      <section className="pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
        <div className="container mx-auto">
          <div className="mb-12">
            <h2 className="mb-3 text-4xl font-bold leading-[1.2] text-dark dark:text-white sm:text-[40px]">
              Checkout
            </h2>
            <p className="text-base text-body-color dark:text-dark-6">
              There are 3 products in your cart
            </p>
          </div>

          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
              <div className="mb-12 lg:mb-0">
                <h3 className="mb-8 text-2xl font-semibold text-dark dark:text-white">
                  Billing Details
                </h3>
                <form>
                  <div className="-mx-3 flex flex-wrap">
                    <InputGroup type="text" placeholder="First name*" />
                    <InputGroup type="text" placeholder="Last name*" />
                    <InputGroup type="text" placeholder="Address*" />
                    <InputGroup type="text" placeholder="Address line 2" />
                    <SelectGroup />
                    <InputGroup type="text" placeholder="City/Town*" />
                    <InputGroup type="text" placeholder="Postcode / ZIP*" />
                    <InputGroup type="text" placeholder="Phone*" />
                    <Textarea rows="06" placeholder="Additional information" />
                    <CheckboxGroup id="1" labelTitle="Create Account" />
                    <CheckboxGroup
                      id="2"
                      labelTitle="Ship to a different address?"
                    />
                    <CouponBox
                      tittle="Apply Coupon to get discount!"
                      button="Apply Code"
                    />
                  </div>
                </form>
              </div>
            </div>

            <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
              <h3 className="mb-8 text-2xl font-semibold text-dark dark:text-white">
                Your Order
              </h3>

              <div className="mb-8 overflow-hidden rounded-[10px] border border-stroke bg-white shadow-testimonial-6 dark:border-dark-3 dark:bg-dark-2 dark:shadow-box-dark">
                <div className="flex items-center justify-between bg-[#f9f9f9] px-6 py-[18px] dark:bg-dark-4 2xl:px-8">
                  <p className="text-base font-medium text-dark dark:text-white">
                    Product
                  </p>
                  <p className="text-right text-base font-medium text-dark dark:text-white">
                    Subtotal
                  </p>
                </div>

                <CartItem
                  img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/checkout/checkout-01/image-01.jpg"
                  title="Hollow Port"
                  color="Brown"
                  size="XL"
                  price="$36.00"
                />
                <CartItem
                  img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/checkout/checkout-01/image-02.jpg"
                  title="Mist Black Triblend"
                  color="White"
                  size="XL"
                  price="$36.00"
                />
                <CartItem
                  img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/checkout/checkout-01/image-03.jpg"
                  title="Realm Bone "
                  color="Black"
                  size="XL"
                  price="$36.00"
                />

                <div className="-mx-1 border-b border-stroke p-6 dark:border-dark-3 2xl:px-8">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="px-1">
                      <p className="text-base text-dark dark:text-white">
                        Subtotal
                      </p>
                    </div>
                    <div className="px-1">
                      <p className="text-base font-medium text-dark dark:text-white">
                        $108
                      </p>
                    </div>
                  </div>
                  <div className="mb-3 flex items-center justify-between">
                    <div className="px-1">
                      <p className="text-base text-dark dark:text-white">
                        Shipping Cost (+)
                      </p>
                    </div>
                    <div className="px-1">
                      <p className="text-base font-medium text-dark dark:text-white">
                        $10.85
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="px-1">
                      <p className="text-base text-dark dark:text-white">
                        Discount (-)
                      </p>
                    </div>
                    <div className="px-1">
                      <p className="text-base font-medium text-dark dark:text-white">
                        $9.00
                      </p>
                    </div>
                  </div>
                </div>

                <div className="-mx-1 p-6 sm:px-7 lg:px-6 2xl:px-7">
                  <div className="flex items-center justify-between">
                    <div className="px-1">
                      <p className="text-base text-dark dark:text-white">
                        Total Payable
                      </p>
                    </div>
                    <div className="px-1">
                      <p className="text-base font-medium text-dark dark:text-white">
                        $88.15
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8 overflow-hidden rounded-[10px] border border-stroke bg-white shadow-testimonial-6 dark:border-dark-3 dark:bg-dark-2 dark:shadow-box-dark">
                <div className="bg-[#f9f9f9] px-6 py-[18px] dark:bg-dark-4 2xl:px-8">
                  <h3 className="text-2xl font-bold text-dark dark:text-white">
                    Payment
                  </h3>
                </div>

                <div className="px-6 py-9 sm:px-7 lg:px-6 2xl:px-7">
                  <div className="mb-4">
                    <label
                      htmlFor="paymentCheckbox"
                      className="flex cursor-pointer select-none items-center"
                    >
                      <div className="relative">
                        <input
                          type="radio"
                          id="paymentCheckbox"
                          name="payment"
                          className="sr-only"
                        />
                        <div className="box mr-4 flex h-5 w-5 items-center justify-center rounded-full border">
                          <span className="circle h-[10px] w-[10px] rounded-full bg-transparent"></span>
                        </div>
                      </div>
                      <span className="text-dark dark:text-white">
                        Direct Bank Transfer
                      </span>
                    </label>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="paymentCheckbox2"
                      className="flex cursor-pointer select-none items-center"
                    >
                      <div className="relative">
                        <input
                          type="radio"
                          id="paymentCheckbox2"
                          name="payment"
                          className="sr-only"
                        />
                        <div className="box mr-4 flex h-5 w-5 items-center justify-center rounded-full border">
                          <span className="circle h-[10px] w-[10px] rounded-full bg-transparent"></span>
                        </div>
                      </div>
                      <span className="text-dark dark:text-white">
                        Cash on delivery
                      </span>
                    </label>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="paymentCheckbox3"
                      className="flex cursor-pointer select-none items-center"
                    >
                      <div className="relative">
                        <input
                          type="radio"
                          id="paymentCheckbox3"
                          name="payment"
                          className="sr-only"
                        />
                        <div className="box mr-4 flex h-5 w-5 items-center justify-center rounded-full border">
                          <span className="circle h-[10px] w-[10px] rounded-full bg-transparent"></span>
                        </div>
                      </div>
                      <span className="text-dark dark:text-white">
                        Online Getway
                      </span>
                    </label>
                  </div>
                  <div className="block pt-5">
                    <img
                      src="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/checkout/checkout-01/payment.svg"
                      alt="payment"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <button className="flex w-full items-center justify-center rounded-md bg-primary px-10 py-[13px] text-center text-base font-medium text-white hover:bg-blue-dark lg:px-8 xl:px-10">
                  Place an Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;

const InputGroup = ({ type, placeholder }) => {
  return (
    <div className="w-full px-3 md:w-1/2">
      <div className="mb-8">
        <input
          type={type}
          placeholder={placeholder}
          className="w-full rounded-md border border-stroke bg-transparent px-5 py-[14px] text-body-color outline-hidden transition placeholder:text-dark-5 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD] dark:border-dark-3 dark:bg-dark-2 dark:text-dark-6"
        />
      </div>
    </div>
  );
};

const SelectGroup = () => {
  return (
    <div className="w-full px-3 md:w-1/2">
      <div className="mb-8">
        <div className="relative">
          <select className="w-full appearance-none rounded-md border border-stroke bg-transparent px-5 py-[14px] text-dark-5 outline-hidden transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD] dark:border-dark-3 dark:bg-dark-2">
            <option value="" selected="" disabled="">
              Country*
            </option>
            <option value="">USA</option>
            <option value="">UK</option>
            <option value="">Canada</option>
          </select>
          <span className="absolute right-5 top-1/2 -translate-y-1/2 text-body-color dark:text-dark-6">
            <svg
              className="fill-current stroke-current"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
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
    </div>
  );
};

const Textarea = ({ placeholder, rows }) => {
  return (
    <div className="w-full px-3">
      <div className="mb-8">
        <textarea
          rows={rows}
          placeholder={placeholder}
          className="w-full rounded-md border border-stroke bg-transparent px-5 py-[14px] text-body-color outline-hidden transition placeholder:text-dark-5 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD] dark:border-dark-3 dark:bg-dark-2 dark:text-dark-6"
        />
      </div>
    </div>
  );
};

const CheckboxGroup = ({ id, labelTitle }) => {
  return (
    <div className="w-full px-3">
      <div className="mb-6">
        <label
          htmlFor={id}
          className="flex cursor-pointer select-none items-center"
        >
          <div className="relative">
            <input type="checkbox" id={id} className="sr-only" />
            <div className="box mr-4 flex h-5 w-5 items-center justify-center rounded-sm border">
              <span className="opacity-0">
                <svg
                  width="11"
                  height="8"
                  viewBox="0 0 11 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                    fill="#3056D3"
                    stroke="#3056D3"
                    strokeWidth="0.4"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
          <span className="text-dark dark:text-white">{labelTitle}</span>
        </label>
      </div>
    </div>
  );
};

const CouponBox = ({ title, button }) => {
  return (
    <div className="w-full px-4">
      <h3 className="mb-8 text-xl font-semibold text-dark dark:text-white">
        {title}
      </h3>

      <input
        type="email"
        className="mb-3 mr-5 h-[50px] w-full max-w-[325px] rounded-md border border-stroke bg-white px-5 text-base text-body-color outline-hidden placeholder:text-dark-6 focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:bg-dark-2 dark:text-dark-6"
        placeholder="Coupon code"
      />
      <button className="mb-3 h-[50px] rounded-md bg-dark px-7 py-2 text-base font-medium text-white transition hover:bg-dark/90 dark:bg-dark-2">
        {button}
      </button>
    </div>
  );
};

const CartItem = ({ img, title, color, size, price }) => {
  return (
    <div className="-mx-1 flex items-center justify-between border-b border-stroke p-6 dark:border-dark-3 2xl:px-8">
      <div className="flex items-center px-1">
        <div className="mr-4 h-12 w-full max-w-[48px] overflow-hidden rounded-sm">
          <img src={img} alt="product image" className="w-full" />
        </div>
        <div>
          <p className="mb-0.5 text-base font-medium text-dark dark:text-white">
            {title}
          </p>
          <p className="flex items-center space-x-3 text-sm text-body-color dark:text-dark-6 sm:space-x-5 lg:space-x-3 2xl:space-x-5">
            <span>{color}</span>
            <span>{size}</span>
            <span>1 X {price}</span>
          </p>
        </div>
      </div>
      <div className="px-1">
        <p className="text-base font-semibold text-dark dark:text-white">
          {price}
        </p>
      </div>
    </div>
  );
};
