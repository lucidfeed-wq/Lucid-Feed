import React, { useState } from "react";

const Checkout3 = () => {
  return (
    <section className="bg-gray-2 pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 xl:w-8/12">
            <h3 className="mb-8 text-xl font-semibold text-dark dark:text-white sm:text-[28px] sm:leading-[40px]">
              Shopping Cart
            </h3>

            <div className="mb-10 overflow-hidden rounded-[10px] border border-stroke bg-white shadow-testimonial-6 dark:border-dark-3 dark:bg-dark-2 dark:shadow-box-dark">
              <div className="mb-8 max-w-full overflow-x-auto border-b border-stroke dark:border-dark-3">
                <table className="w-full table-auto">
                  <thead>
                    <tr className="text-left">
                      <th className="min-w-[300px] px-4 py-4 text-sm font-medium text-dark dark:text-white xl:pl-9">
                        Product
                      </th>
                      <th className="min-w-[150px] px-4 py-4 text-sm font-medium text-dark dark:text-white">
                        Quantity
                      </th>
                      <th className="min-w-[120px] px-4 py-4 text-sm font-medium text-dark dark:text-white">
                        Total Price
                      </th>

                      <th className="min-w-[100px] px-4 py-4 text-center text-sm font-medium text-dark dark:text-white xl:pr-9"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <CartItem
                      img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/checkout/checkout-03/image-01.jpg"
                      title="Red colour ladies bag"
                      subtitle="Red"
                      price="$110.99"
                    />
                    <CartItem
                      img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/checkout/checkout-03/image-02.jpg"
                      title="Orange colour ladies bag"
                      subtitle="Orange"
                      price="$110.99"
                    />
                    <CartItem
                      img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/checkout/checkout-03/image-03.jpg"
                      title="Black bag for man"
                      subtitle="Black"
                      price="$110.99"
                    />
                  </tbody>
                </table>
              </div>
              <div className="px-8 pb-10">
                <div className="-mx-4 flex flex-wrap justify-between">
                  <div className="mb-10 w-full px-4 md:mb-0 md:w-1/2">
                    <div className="lg:max-w-[300px]">
                      <div className="mb-8 border-b border-stroke pb-4 dark:border-dark-3">
                        <h4 className="mb-[6px] text-lg font-semibold text-dark dark:text-white">
                          Coupon Code
                        </h4>
                        <p className="text-sm text-body-color dark:text-dark-6">
                          Enter code to get discount instantly
                        </p>
                      </div>
                      <form className="relative">
                        <input
                          type="text"
                          placeholder="Coupon code"
                          className="w-full rounded-[5px] border border-stroke bg-transparent py-3 pl-5 pr-20 text-body-color outline-hidden transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD] dark:border-dark-3 dark:text-dark-6"
                        />
                        <button className="absolute right-2 top-1/2 mb-3 h-[34px] -translate-y-1/2 rounded-sm bg-dark px-5 text-sm font-medium text-white transition hover:bg-dark/90">
                          Apply
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="lg:max-w-[250px]">
                      <div className="space-y-4">
                        <p className="flex justify-between text-base text-dark dark:text-white">
                          <span> Subtotal </span>

                          <span className="font-medium"> $108 </span>
                        </p>

                        <p className="flex justify-between text-base text-dark dark:text-white">
                          <span> Shipping Cost </span>

                          <span className="font-medium"> $10.85 </span>
                        </p>

                        <p className="flex justify-between text-base text-dark dark:text-white">
                          <span> Discount </span>

                          <span className="font-medium"> $9.00 </span>
                        </p>
                      </div>
                      <div className="mt-[18px] border-t border-stroke pt-[18px] dark:border-dark-3">
                        <p className="flex justify-between text-base text-dark dark:text-white">
                          <span> Total Payable </span>

                          <span className="font-medium"> $88.15 </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full px-4 xl:w-4/12">
            <div>
              <h3 className="mb-8 text-xl font-semibold text-dark dark:text-white sm:text-[28px] sm:leading-[40px]">
                Payment Info
              </h3>

              <div className="overflow-hidden rounded-lg border border-stroke bg-white p-9 shadow-testimonial-6 dark:border-dark-3 dark:bg-dark-2 dark:shadow-box-dark">
                <h3 className="mb-6 text-xl font-semibold text-dark dark:text-white">
                  Payment Method
                </h3>

                <PaymentGroup id="paymentCheckbox" labelTitle="Credit Card" />
                <PaymentGroup id="paymentCheckbox2" labelTitle="Paypal" />
                <PaymentGroup
                  id="paymentCheckbox3"
                  labelTitle="Cash on delivery"
                />
                <div className="mt-8 border-t border-stroke pt-8 dark:border-dark-3">
                  <form>
                    <div className="-mx-2 flex flex-wrap">
                      <div className="w-full px-2">
                        <InputGroup
                          type="text"
                          placeholder="Jhon deo"
                          labelTitle="Name on Card:"
                        />
                      </div>
                      <div className="w-full px-2">
                        <InputGroup
                          type="text"
                          placeholder="0000 0000 0000 1248"
                          labelTitle="Card Number:"
                        />
                      </div>
                      <div className="w-full px-2 sm:w-9/12">
                        <label className="mb-2.5 block text-base font-medium text-dark dark:text-white">
                          Expiration Date:
                        </label>
                        <div className="-mx-2 flex">
                          <div className="w-5/12 px-2">
                            <InputGroup type="text" placeholder="05" />
                          </div>
                          <div className="w-7/12 self-end px-2">
                            <InputGroup type="text" placeholder="2000" />
                          </div>
                        </div>
                      </div>
                      <div className="w-full px-2 sm:w-3/12">
                        <InputGroup
                          type="text"
                          placeholder="248"
                          labelTitle="CVV"
                        />
                      </div>
                      <div className="w-full px-2">
                        <button className="flex w-full items-center justify-center rounded-md bg-primary px-7 py-3 text-center text-base font-medium text-white hover:bg-blue-dark">
                          Place Order
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout3;

const CartItem = ({ link, img, title, color, price }) => {
  const [count, setCount] = useState(1);

  const removeHandler = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const addHandler = () => {
    setCount(count + 1);
  };
  return (
    <tr>
      <td className="border-t border-stroke p-4 dark:border-dark-3 xl:pl-11">
        <div className="flex items-center">
          <img src={img} alt="image" className="mr-4 h-12 w-12 rounded-sm" />
          <div>
            <h5 className="text-base font-medium text-dark dark:text-white">
              <a href={link} className="hover:text-primary">
                {title}
              </a>
            </h5>
            <p className="text-sm text-body-color dark:text-dark-6">
              Color: {color}
            </p>
          </div>
        </div>
      </td>
      <td className="border-t border-stroke p-4 dark:border-dark-3">
        <div className="inline-flex h-9 items-center rounded-sm border-[0.5px] border-stroke bg-gray-1 text-base font-medium text-dark dark:border-dark-3 dark:bg-dark dark:text-white">
          <span
            onClick={removeHandler}
            className="cursor-pointer select-none border-r-[0.5px] border-stroke px-3 py-[6px] dark:border-dark-3"
          >
            -
          </span>
          <span className="px-[18px] py-[6px]">{count}</span>
          <span
            onClick={addHandler}
            className="cursor-pointer select-none border-l-[0.5px] border-stroke px-3 py-[6px] dark:border-dark-3"
          >
            +
          </span>
        </div>
      </td>
      <td className="border-t border-stroke p-4 dark:border-dark-3">
        <p className="text-base font-medium text-dark dark:text-white">
          {price}
        </p>
      </td>
      <td className="border-t border-stroke p-4 pr-11 text-center dark:border-dark-3">
        <button className="text-dark hover:text-red dark:text-white">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-current"
          >
            <g clipPath="url(#clip0_1006_33743)">
              <path
                d="M7.7001 6.99998L13.0376 1.66248C13.2345 1.4656 13.2345 1.15935 13.0376 0.962476C12.8407 0.765601 12.5345 0.765601 12.3376 0.962476L7.0001 6.29998L1.6626 0.962476C1.46572 0.765601 1.15947 0.765601 0.962598 0.962476C0.765723 1.15935 0.765723 1.4656 0.962598 1.66248L6.3001 6.99998L0.962598 12.3375C0.765723 12.5344 0.765723 12.8406 0.962598 13.0375C1.0501 13.125 1.18135 13.1906 1.3126 13.1906C1.44385 13.1906 1.5751 13.1469 1.6626 13.0375L7.0001 7.69998L12.3376 13.0375C12.4251 13.125 12.5563 13.1906 12.6876 13.1906C12.8188 13.1906 12.9501 13.1469 13.0376 13.0375C13.2345 12.8406 13.2345 12.5344 13.0376 12.3375L7.7001 6.99998Z"
                fill=""
              />
            </g>
            <defs>
              <clipPath id="clip0_1006_33743">
                <rect width="14" height="14" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </td>
    </tr>
  );
};

const PaymentGroup = ({ id, labelTitle }) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="flex cursor-pointer select-none items-center"
      >
        <div className="relative">
          <input type="radio" id={id} name="payment" className="sr-only" />
          <div className="box mr-4 flex h-5 w-5 items-center justify-center rounded-full border border-primary bg-primary/5">
            <span className="circle h-[10px] w-[10px] rounded-full bg-transparent"></span>
          </div>
        </div>
        <span className="text-dark dark:text-white">{labelTitle}</span>
      </label>
    </div>
  );
};

const InputGroup = ({ labelTitle, type, placeholder }) => {
  return (
    <div className="mb-5">
      {labelTitle && (
        <label className="mb-2.5 block text-base font-medium text-dark dark:text-white">
          {labelTitle}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-body-color outline-hidden focus:border-primary dark:border-dark-3 dark:text-dark-6"
      />
    </div>
  );
};
