import React from "react";

const OrderSummary3 = () => {
  return (
    <>
      <section className="bg-white dark:bg-dark py-20 lg:py-[120px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2">
              <div className="mb-12">
                <h2 className="text-3xl font-semibold text-dark dark:text-white sm:text-4xl">
                  Order Summary
                </h2>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2">
              <div className="mb-[50px] md:text-right">
                <h3 className="text-xl font-semibold text-dark dark:text-white sm:text-2xl">
                  Order #15478
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-2 dark:bg-dark-2 mb-[50px] py-[50px]">
          <div className="container mx-auto">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4 md:w-1/2 lg:w-4/12">
                <div className="mb-8 max-w-[270px]">
                  <h4 className="mb-[10px] text-base font-medium text-dark dark:text-white">
                    Note:
                  </h4>
                  <p className="text-body-color dark:text-dark-6 text-base">
                    Your order has been confirmed and will be shipping soon.
                  </p>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2 lg:w-5/12 xl:w-4/12">
                <div className="mb-12">
                  <h4 className="mb-[10px] text-base font-medium text-dark dark:text-white">
                    Receiver Details
                  </h4>
                  <p className="mb-1 text-base font-medium text-body-color dark:text-dark-6">
                    Name: Jhon Smith
                  </p>
                  <p className="mb-1 text-base font-medium text-body-color dark:text-dark-6">
                    Email: contact@yourmail.com
                  </p>
                  <p className="text-body-color dark:text-dark-6 text-base">
                    Address: New York, USA 2707 Davis Anenue
                  </p>
                </div>
              </div>
            </div>

            <ProductItem
              img="https://cdn-tailgrids.b-cdn.net/1.0/assets/images/ecommerce/order-summaries/order-summary-03/image-01.jpg"
              link="/#"
              title="Mist black triblend"
              color="White"
              size="Medium"
              number="01"
              price="$120.00"
            />
          </div>
        </div>

        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
              <div className="mb-10">
                <h3 className="mb-[18px] text-xl font-semibold text-dark dark:text-white md:text-2xl">
                  Shipping Method
                </h3>
                <p className="text-body-color dark:text-dark-6 text-base">
                  FedEx - Take up to 3 <br />
                  working days.
                </p>
              </div>
            </div>
            <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
              <div className="mb-10">
                <h3 className="mb-[18px] text-xl font-semibold text-dark dark:text-white md:text-2xl">
                  Payment Method
                </h3>
                <p className="text-body-color dark:text-dark-6 text-base">
                  Apply Pay Mastercard <br />
                  **** **** **** 5874
                </p>
              </div>
            </div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="mr-10 text-right md:ml-auto md:max-w-[370px] lg:max-w-[270px]">
                <p className="mb-4 flex justify-between text-base text-dark dark:text-white">
                  <span> Subtotal </span>
                  <span className="font-semibold"> $108 </span>
                </p>
                <p className="mb-6 flex justify-between text-base text-dark dark:text-white">
                  <span> Shipping Cost (+) </span>
                  <span className="font-semibold"> $10.00 </span>
                </p>
                <p className="mb-[18px] flex justify-between border-t border-stroke dark:border-dark-3 pt-6 text-base text-dark dark:text-white">
                  <span> Total Payable </span>
                  <span className="font-semibold"> $99.99 </span>
                </p>
                <button className="flex w-full items-center justify-center rounded-md bg-dark dark:bg-dark-2 py-[10px] px-10 text-center text-base font-semibold text-white hover:bg-dark/90">
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OrderSummary3;

const ProductItem = ({ img, link, title, color, size, number, price }) => {
  return (
    <div className="rounded-md border-[.5px] border-stroke dark:border-dark-3 bg-white dark:bg-dark-2 py-5 pl-5 pr-8">
      <div className="items-center sm:flex">
        <div className="mb-3 mr-6 h-20 w-full max-w-[80px] sm:mb-0 rounded-sm overflow-hidden">
          <img
            src={img}
            alt="product"
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="w-full items-center justify-between md:flex">
          <div className="mb-3 md:mb-0">
            <a
              href={link}
              className="hover:text-primary inline-block text-base font-medium text-dark dark:text-white mb-1"
            >
              {title}
            </a>
            <p className="text-body-color dark:text-dark-6 flex text-sm">
              <span className="mr-5"> Color: {color} </span>
              <span className="mr-5"> Size: {size} </span>
            </p>
          </div>
          <div className="flex items-center md:justify-end">
            <p className="mr-20 text-base font-medium text-dark dark:text-white">
              Qty: {number}
            </p>
            <p className="mr-5 text-base font-medium text-dark dark:text-white">{price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
