import React from "react";

const OrderSummary4 = () => {
  return (
    <section className="bg-gray-2 dark:bg-dark py-20 lg:py-[120px]">
      <div className="container mx-auto">
        <div className="border border-stroke dark:border-dark-3 bg-white dark:bg-dark-2">
          <div className="flex flex-wrap justify-between p-5 sm:p-8 lg:p-11">
            <div className="w-full md:w-1/2">
              <div className="mb-6 md:mb-0">
                <h3 className="mb-[5px] text-2xl font-semibold text-dark dark:text-white">
                  Order Details
                </h3>
                <p className="text-body-color dark:text-dark-6 text-base">
                  Your order will be with soon
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="md:text-right">
                <p className="text-dark dark:text-white text-base font-medium lg:text-lg mb-1">
                  Order Number: #HD8845
                </p>
                <p className="text-body-color dark:text-dark-6 text-base">
                  Order Placement: 15th March, 2025
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-full overflow-x-auto border-y border-stroke dark:border-dark-3">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-white dark:bg-dark-2 text-left">
                  <th className="min-w-[370px] py-3 pl-5 text-base font-medium text-dark dark:text-white sm:pl-8 lg:pl-11">
                    Item
                  </th>
                  <th className="min-w-[120px] py-3 px-4 text-base font-medium text-dark dark:text-white">
                    Quantity
                  </th>
                  <th className="min-w-[120px] py-3 px-4 text-base font-medium text-dark dark:text-white">
                    Price
                  </th>
                  <th className="min-w-[200px] py-3 pr-5 text-right text-base font-medium text-dark dark:text-white sm:pr-8 lg:pr-11">
                    Delivery Expected
                  </th>
                </tr>
              </thead>
              <tbody>
                <ProductItem
                  img="https://cdn-tailgrids.b-cdn.net/1.0/assets/images/ecommerce/order-summaries/order-summary-04/image-01.jpg"
                  link="/#"
                  title="Mist black triblend"
                  color="White"
                  size="Medium"
                  number="01"
                  price="$120.00"
                  deliveryDate="23th Dec, 2025"
                />
                <ProductItem
                  img="https://cdn-tailgrids.b-cdn.net/1.0/assets/images/ecommerce/order-summaries/order-summary-04/image-02.jpg"
                  link="/#"
                  title="Awesome pest color t-shirt"
                  color="White"
                  size="Medium"
                  number="01"
                  price="$120.00"
                  deliveryDate="23th Dec, 2025"
                />
              </tbody>
            </table>
          </div>

          <div className="flex flex-wrap items-center justify-between px-5 pt-6 sm:px-8 lg:px-11">
            <div className="order-last w-full md:order-first md:w-2/3 lg:w-1/2">
              <div className="flex flex-wrap pb-1">
                <button className="bg-primary mr-[18px] mb-5 flex items-center justify-center rounded-md py-3 px-7 text-center text-base font-medium text-white hover:bg-blue-dark">
                  Track Your Order
                </button>
                <button className="mb-5 flex items-center justify-center rounded-md bg-dark py-3 px-7 text-center text-base font-medium text-white hover:bg-dark/90">
                  Cancel Order
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/3 lg:w-1/2">
              <div className="mb-6 text-right">
                <p className="text-base font-semibold text-dark dark:text-white">
                  Total: $210.00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSummary4;

const ProductItem = ({
  img,
  link,
  title,
  color,
  size,
  number,
  price,
  deliveryDate,
}) => {
  return (
    <tr>
      <td className="border-stroke dark:border-dark-3 border-t py-6 pr-4 pl-5 sm:pl-8 lg:pl-11">
        <div className="flex items-center">
          <img
            src={img}
            alt="product"
            className="mr-6 h-16 w-16 rounded-sm lg:h-20 lg:w-20"
          />
          <div>
            <a
              href={link}
              className="hover:text-primary inline-block text-base font-medium text-dark dark:text-white mb-1"
            >
              {title}
            </a>
            <p className="text-body-color dark:text-dark-6 flex flex-wrap text-sm">
              <span className="mr-5"> Color: {color} </span>
              <span className="mr-5"> Size: {size} </span>
            </p>
          </div>
        </div>
      </td>
      <td className="border-stroke dark:border-dark-3 border-t px-4 py-6">
        <p className="text-base text-dark dark:text-white">Qty: {number}</p>
      </td>
      <td className="border-stroke dark:border-dark-3 border-t p-4">
        <p className="text-base text-dark dark:text-white">{price}</p>
      </td>
      <td className="border-stroke dark:border-dark-3 border-t py-6 pl-4 pr-5 sm:pr-8 lg:pr-11">
        <p className="text-body-color dark:text-dark-6 text-right text-base">
          {deliveryDate}
        </p>
      </td>
    </tr>
  );
};
