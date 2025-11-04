import { useState } from "react";
import fedex from "../../assets/ecom-images/checkout/checkout-04/fedex.svg";
import dhl from "../../assets/ecom-images/checkout/checkout-04/dhl-express.svg";

const ShippingOption = () => {
  const [address, setAddress] = useState(1);
  const [method, setMethod] = useState(1);

  return (
    <>
      <h3 className="mb-8 text-xl font-semibold text-dark dark:text-white sm:text-[28px] sm:leading-[40px]">
        Shipping Details
      </h3>

      <div className="overflow-hidden rounded-lg border border-stroke bg-white px-6 py-10 shadow-testimonial-6 dark:border-dark-3 dark:bg-dark-2 dark:shadow-box-dark sm:px-10">
        <h4 className="mb-[22px] text-lg font-semibold text-dark dark:text-white">
          Shipping Address
        </h4>
        <div className="mb-6 flex flex-wrap gap-6">
          <div className="w-full max-w-[232px]">
            <div className="mb-3">
              <input
                type="radio"
                name="shippingAddress"
                id="shippingAddress1"
                className="sr-only"
                onChange={() => setAddress(1)}
              />
              <label
                htmlFor="shippingAddress1"
                className={`block cursor-pointer overflow-hidden rounded-md border px-6 py-5 ${address === 1 ? "border-transparent bg-primary/5 shadow-border" : "border-stroke dark:border-dark-3"}`}
              >
                <span
                  className={`mb-[6px] block text-sm font-semibold sm:text-base md:text-sm lg:text-base ${address === 1 ? "text-primary" : "text-dark dark:text-white"}`}
                >
                  Same as Personal
                </span>
                <span className="block text-sm text-dark dark:text-white">
                  New York, USA <br />
                  2707 Davis Anenue
                </span>
              </label>
            </div>
          </div>

          <div className="w-full max-w-[232px]">
            <div className="mb-3">
              <input
                type="radio"
                name="shippingAddress"
                id="shippingAddress2"
                className="sr-only"
                onChange={() => setAddress(2)}
              />
              <label
                htmlFor="shippingAddress2"
                className={`block cursor-pointer overflow-hidden rounded-lg border px-6 py-5 ${address === 2 ? "border-transparent bg-primary/5 shadow-border" : "border-stroke dark:border-dark-3"}`}
              >
                <span
                  className={`mb-[6px] block text-sm font-semibold sm:text-base md:text-sm lg:text-base ${address === 2 ? "text-primary" : "text-dark dark:text-white"}`}
                >
                  Register Now
                </span>
                <span className="block text-sm text-body-color dark:text-dark-6">
                  Create an account now to have multiple address.
                </span>
              </label>
            </div>
          </div>
        </div>

        <h4 className="mb-[22px] text-lg font-semibold text-dark dark:text-white">
          Shipping Method
        </h4>
        <div className="-mx-3 flex flex-wrap">
          <div className="w-full px-3 md:w-1/2 lg:w-full xl:w-1/2">
            <div className="mb-3">
              <input
                type="radio"
                name="shipping"
                id="shipping1"
                className="sr-only"
                onChange={() => setMethod(1)}
              />
              <label
                htmlFor="shipping1"
                className={`flex cursor-pointer items-center overflow-hidden rounded-lg border px-6 py-5 ${method === 1 ? "border-transparent bg-primary/5 shadow-border" : "border-stroke shadow-1 dark:border-dark-3 dark:shadow-none"}`}
              >
                <div className="mr-5 w-full max-w-[40px] sm:max-w-[65px]">
                  <img src={fedex} alt="fedex" />
                </div>
                <div className="border-l border-stroke pl-5 dark:border-dark-3">
                  <span className="mb-1 block text-sm font-semibold text-dark dark:text-white sm:text-base md:text-sm lg:text-base">
                    FedEx Fast Delivery
                  </span>
                  <span className="block text-sm text-body-color dark:text-dark-6">
                    Delivery: Friday, 25
                  </span>
                  <span className="block text-sm font-medium text-body-color dark:text-dark-6">
                    $10.99
                  </span>
                </div>
              </label>
            </div>
          </div>

          <div className="w-full px-3 md:w-1/2 lg:w-full xl:w-1/2">
            <div className="mb-3">
              <input
                type="radio"
                name="shipping"
                id="shipping2"
                className="sr-only"
                onChange={() => setMethod(2)}
              />
              <label
                htmlFor="shipping2"
                className={`flex cursor-pointer items-center overflow-hidden rounded-lg border px-6 py-5 ${method === 2 ? "border-transparent bg-primary/5 shadow-border" : "border-stroke shadow-1 dark:border-dark-3 dark:shadow-none"}`}
              >
                <div className="mr-5 w-full max-w-[40px] sm:max-w-[65px]">
                  <img src={dhl} alt="fedex" />
                </div>
                <div className="border-l border-stroke pl-5 dark:border-dark-3">
                  <span className="mb-1 block text-sm font-semibold text-dark dark:text-white sm:text-base md:text-sm lg:text-base">
                    DHL Fast Delivery
                  </span>
                  <span className="block text-sm text-body-color dark:text-dark-6">
                    Delivery: Sunday, 27
                  </span>
                  <span className="block text-sm font-medium text-body-color dark:text-dark-6">
                    $10.99
                  </span>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShippingOption;
