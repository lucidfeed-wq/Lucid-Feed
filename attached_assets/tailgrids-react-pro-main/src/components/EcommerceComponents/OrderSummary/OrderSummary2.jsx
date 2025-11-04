import React from "react";

const OrderSummary2 = () => {
  return (
    <>
      <section className="bg-white dark:bg-dark py-20 lg:py-[120px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2">
              <div className="mb-14">
                <h2 className="mb-4 text-3xl font-semibold text-dark dark:text-white sm:text-4xl">
                  Your Order Confirmed!
                </h2>
                <p className="text-dark dark:text-white mb-2 text-lg font-medium">
                  HI, Musharof
                </p>
                <p className="text-body-color dark:text-dark-6 text-base">
                  Your order has been confirmed and will be shipping soon.
                </p>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2">
              <div className="mb-14 max-w-[400px] md:ml-auto md:text-right">
                <p className="text-body-color dark:text-dark-6 mb-[10px] text-base">
                  We'll send you shipping confirmation when your item(s) are on
                  the way!
                </p>
                <h3 className="text-xl font-semibold text-dark dark:text-white">Thank You!</h3>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="mr-16 mb-10">
              <h3 className="mb-1 text-base font-medium text-dark dark:text-white">
                Order Date
              </h3>
              <p className="text-body-color dark:text-dark-6 text-base">
                25 March, 2025
              </p>
            </div>
            <div className="mr-16 mb-10">
              <h3 className="mb-1 text-base font-medium text-dark dark:text-white">
                Order Number
              </h3>
              <p className="text-body-color dark:text-dark-6 text-base">#1278532</p>
            </div>
            <div className="mr-16 mb-10">
              <h3 className="mb-1 text-base font-medium text-dark dark:text-white">Payment</h3>
              <p className="text-body-color dark:text-dark-6 text-base">
                VISA - 3324
              </p>
            </div>
            <div className="mr-16 mb-10">
              <h3 className="mb-1 text-base font-medium text-dark dark:text-white">
                Shipping Address
              </h3>
              <p className="text-body-color dark:text-dark-6 text-base">
                New York, USA 2707 Davis Anenue
              </p>
            </div>
          </div>

          <div className="mb-7">
            <ProductItem
              img="https://cdn-tailgrids.b-cdn.net/1.0/assets/images/ecommerce/order-summaries/order-summary-02/image-01.jpg"
              link="/#"
              title="Mist black triblend"
              color="White"
              size="Medium"
              number="01"
              price="$120.00"
            />
            <ProductItem
              img="https://cdn-tailgrids.b-cdn.net/1.0/assets/images/ecommerce/order-summaries/order-summary-02/image-02.jpg"
              link="/#"
              title="Awesome pest color t-shirt"
              color="White"
              size="Medium"
              number="01"
              price="$120.00"
            />
          </div>

          <div>
            <div className="ml-auto max-w-[360px] text-right">
              <p className="mb-4 flex justify-between text-base font-medium text-dark dark:text-white">
                <span> Subtotal </span>
                <span className="font-semibold"> $108 </span>
              </p>
              <p className="mb-4 flex justify-between text-base font-medium text-dark dark:text-white">
                <span> Shipping Cost (+) </span>
                <span className="font-semibold"> $10.85 </span>
              </p>
              <p className="mb-4 flex justify-between text-base font-medium text-dark dark:text-white">
                <span> Discount (-) </span>
                <span className="font-semibold"> $9.00 </span>
              </p>
              <p className="mt-2 mb-4 flex justify-between border-t border-stroke dark:border-dark-3 pt-6 text-base font-medium text-dark dark:text-white">
                <span> Total Payable </span>
                <span className="font-semibold"> $88.15 </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OrderSummary2;

const ProductItem = ({ img, link, title, color, size, number, price }) => {
  return (
    <div className="items-center border-y border-stroke dark:border-dark-3 py-8 sm:flex">
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
  );
};
