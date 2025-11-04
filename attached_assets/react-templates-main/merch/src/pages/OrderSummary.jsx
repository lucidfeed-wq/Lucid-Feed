import Breadcrumb from "../components/Breadcrumb.jsx";

import productOne from "../assets/ecom-images/order-summaries/order-summary-04/image-01.jpg";
import productTwo from "../assets/ecom-images/order-summaries/order-summary-04/image-02.jpg";
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
    deliveryDate: "23th Dec, 2025",
  },
  {
    image: productTwo,
    link: "#",
    title: "Yellow Hollow Port",
    color: "Yellow",
    size: "Medium",
    quantity: "01",
    price: "120.00",
    deliveryDate: "13th Dec, 2025",
  },
];

const OrderSummary = () => {
  return (
    <>
      <Breadcrumb pageName="Order Summary" />

      <section className="dark:bg-dark bg-white py-[120px]">
        <div className="container mx-auto">
          <div className="bg-white border border-stroke dark:border-dark-3 dark:bg-dark-2">
            <div className="flex flex-wrap justify-between p-5 sm:p-8 lg:p-11">
              <div className="w-full md:w-1/2">
                <div className="mb-6 md:mb-0">
                  <h3 className="text-dark mb-[5px] text-2xl font-semibold dark:text-white">
                    Order Details
                  </h3>
                  <p className="text-base text-body-color dark:text-dark-6">
                    Your order will be with soon
                  </p>
                </div>
              </div>

              <div className="w-full md:w-1/2">
                <div className="md:text-right">
                  <p className="mb-1 text-base font-medium text-dark lg:text-lg dark:text-white">
                    Order Number: #HD8845
                  </p>
                  <p className="text-base text-body-color dark:text-dark-6">
                    Order Placement: 15th March, 2025
                  </p>
                </div>
              </div>
            </div>

            <div className="max-w-full overflow-x-auto border-stroke dark:border-dark-3 border-y">
              <table className="w-full table-auto">
                <thead>
                  <tr className="text-left bg-white dark:bg-dark-2">
                    <th className="text-dark min-w-[370px] py-3 pl-5 text-base font-medium sm:pl-8 lg:pl-11 dark:text-white">
                      Item
                    </th>
                    <th className="text-dark min-w-[120px] px-4 py-3 text-base font-medium dark:text-white">
                      Quantity
                    </th>
                    <th className="text-dark min-w-[120px] px-4 py-3 text-base font-medium dark:text-white">
                      Price
                    </th>

                    <th className="text-dark min-w-[200px] py-3 pr-5 text-right text-base font-medium sm:pr-8 lg:pr-11 dark:text-white">
                      Delivery Expected
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {orderItems.map((item, index) => (
                    <tr key={index}>
                      <td className="py-6 pl-5 pr-4 border-t border-stroke dark:border-dark-3 sm:pl-8 lg:pl-11">
                        <div className="flex items-center">
                          <img
                            src={item.image}
                            alt="product"
                            className="w-16 h-16 mr-6 rounded-sm lg:h-20 lg:w-20"
                          />
                          <div>
                            <Link
                              to={item.link}
                              className="inline-block mb-1 text-base font-medium text-dark hover:text-primary dark:text-white"
                            >
                              {item.title}
                            </Link>

                            <p className="flex flex-wrap text-sm text-body-color dark:text-dark-6">
                              <span className="mr-5">
                                {" "}
                                Color: {item.color}{" "}
                              </span>
                              <span className="mr-5"> Size: {item.size} </span>
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="px-4 py-6 border-t border-stroke dark:border-dark-3">
                        <p className="text-base text-dark dark:text-white">
                          Qty: {item.price}
                        </p>
                      </td>

                      <td className="p-4 border-t border-stroke dark:border-dark-3">
                        <p className="text-base text-dark dark:text-white">
                          {item.price}
                        </p>
                      </td>

                      <td className="py-6 pl-4 pr-5 border-t border-stroke dark:border-dark-3 sm:pr-8 lg:pr-11">
                        <p className="text-base text-right text-body-color dark:text-dark-6">
                          {item.deliveryDate}
                        </p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex flex-wrap items-center justify-between px-5 pt-6 sm:px-8 lg:px-11">
              <div className="order-last w-full md:order-first md:w-2/3 lg:w-1/2">
                <div className="flex flex-wrap pb-1">
                  <button className="bg-primary hover:bg-blue-dark mr-[18px] mb-5 flex items-center justify-center rounded-md px-7 py-3 text-center text-base font-medium text-white">
                    Track Your Order
                  </button>
                  <button className="flex items-center justify-center py-3 mb-5 text-base font-medium text-center text-white rounded-md bg-dark hover:bg-dark/90 px-7">
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
    </>
  );
};

export default OrderSummary;
