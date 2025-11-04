import Breadcrumb from "../components/Breadcrumb.jsx";

import productOne from "../assets/ecom-images/order-summaries/order-summary-02/image-01.jpg";
import productTwo from "../assets/ecom-images/order-summaries/order-summary-02/image-02.jpg";
import { Link } from "react-router-dom";

const orderItems = [
  {
    image: productOne,
    link: "#",
    title: "Mist Black Triblend",
    color: "White",
    size: "Medium",
    quantity: "01",
    price: "120.00",
  },
  {
    image: productTwo,
    link: "#",
    title: "Yellow Hollow Port",
    color: "Yellow",
    size: "Medium",
    quantity: "01",
    price: "120.00",
  },
];

const OrderSummary = () => {
  return (
    <>
      <Breadcrumb pageName="Order Summary" />

      <section className="bg-tg-bg pb-[120px] pt-24 dark:bg-dark">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2">
              <div className="mb-14">
                <h2 className="mb-4 text-3xl font-semibold text-dark dark:text-white sm:text-4xl">
                  Your Order Confirmed!
                </h2>
                <p className="mb-2 text-lg font-medium text-dark dark:text-white">
                  HI, Musharoff!
                </p>
                <p className="text-base text-body-color dark:text-dark-6">
                  Your order has been confirmed and will be shipping soon.
                </p>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2">
              <div className="mb-14 max-w-[400px] md:ml-auto md:text-right">
                <p className="mb-[10px] text-base text-body-color dark:text-dark-6">
                  We&apos;ll send you shipping confirmation when your item(s)
                  are on the way!
                </p>
                <h3 className="text-xl font-semibold text-dark dark:text-white">
                  Thank You!
                </h3>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="mb-10 mr-16">
              <h3 className="mb-1 text-base font-medium text-dark dark:text-white">
                Order Date
              </h3>
              <p className="text-base text-body-color dark:text-dark-6">
                25 March, 2025
              </p>
            </div>
            <div className="mb-10 mr-16">
              <h3 className="mb-1 text-base font-medium text-dark dark:text-white">
                Order Number
              </h3>
              <p className="text-base text-body-color dark:text-dark-6">
                #127853
              </p>
            </div>
            <div className="mb-10 mr-16">
              <h3 className="mb-1 text-base font-medium text-dark dark:text-white">
                Payment
              </h3>
              <p className="text-base text-body-color dark:text-dark-6">
                VISA - 3324
              </p>
            </div>
            <div className="mb-10 mr-16">
              <h3 className="mb-1 text-base font-medium text-dark dark:text-white">
                Shipping Address
              </h3>
              <p className="text-base text-body-color dark:text-dark-6">
                New York, USA 2707 Davis Anenue
              </p>
            </div>
          </div>

          <div className="mb-7">
            {orderItems.map((item, index) => (
              <div
                key={index}
                className="items-center border-b border-stroke py-8 first:border-t dark:border-dark-3 sm:flex"
              >
                <div className="mb-3 mr-6 h-20 w-full max-w-[80px] overflow-hidden rounded-sm sm:mb-0">
                  <img
                    src={item.image}
                    alt="product"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="w-full items-center justify-between md:flex">
                  <div className="mb-3 md:mb-0">
                    <Link
                      to={item.link}
                      className="mb-1 inline-block text-base font-medium text-dark hover:text-primary dark:text-white"
                    >
                      {item.title}
                    </Link>

                    <p className="flex text-sm text-body-color dark:text-dark-6">
                      <span className="mr-5"> Color: {item.color} </span>
                      <span className="mr-5"> Size: {item.size} </span>
                    </p>
                  </div>

                  <div className="flex items-center md:justify-end">
                    <p className="mr-20 text-base font-medium text-dark dark:text-white">
                      Qty: {item.quantity}
                    </p>
                    <p className="mr-5 text-base font-medium text-dark dark:text-white">
                      ${item.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <div className="ml-auto max-w-[360px] text-right">
              <p className="mb-4 flex justify-between text-base font-medium text-dark dark:text-white">
                <span> Subtotal </span>
                <span className="font-semibold"> $120.00 </span>
              </p>
              <p className="mb-4 flex justify-between text-base font-medium text-dark dark:text-white">
                <span> Shipping Cost (+) </span>
                <span className="font-semibold"> $10.00 </span>
              </p>
              <p className="mb-4 flex justify-between text-base font-medium text-dark dark:text-white">
                <span> Discount (-) </span>
                <span className="font-semibold"> $1.00 </span>
              </p>
              <p className="mb-4 mt-2 flex justify-between border-t border-stroke pt-6 text-base font-medium text-dark dark:border-dark-3 dark:text-white">
                <span> Total Payable </span>
                <span className="font-semibold"> $130.00 </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OrderSummary;
