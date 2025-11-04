import Breadcrumb from "../components/Breadcrumb.jsx";
import paymentImage from "../assets/ecom-images/shopping-carts/shopping-cart-03/payment.svg";
import productOne from "../assets/ecom-images/shopping-carts/shopping-cart-03/image-01.jpg";
import productTwo from "../assets/ecom-images/shopping-carts/shopping-cart-03/image-02.jpg";
import productThree from "../assets/ecom-images/shopping-carts/shopping-cart-03/image-03.jpg";
import productFour from "../assets/ecom-images/shopping-carts/shopping-cart-03/image-04.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    {
      name: "Hollow Port",
      description: "Awesome yellow t-shirt",
      image: productOne,
      link: "#",
      quantity: 1,
      price: "$39.11",
    },
    {
      name: "Circular Sienna",
      description: "Awesome white t-shirt",
      image: productTwo,
      link: "#",
      quantity: 1,
      price: "$24.89",
    },
    {
      name: "Realm Bone",
      description: "Awesome black t-shirt",
      image: productThree,
      link: "#",
      quantity: 1,
      price: "$22.00",
    },
    {
      name: "Pest color shirt",
      description: "Awesome black t-shirt",
      image: productFour,
      link: "#",
      quantity: 1,
      price: "$22.00",
    },
  ]);

  const increment = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity++;
    setCartItems(updatedCartItems);
  };

  const decrement = (index) => {
    const updatedCartItems = [...cartItems];
    if (updatedCartItems[index].quantity > 0) {
      updatedCartItems[index].quantity--;
      setCartItems(updatedCartItems);
    }
  };

  return (
    <>
      <Breadcrumb pageName="Sopping Cart" />

      <section className="py-24 bg-tg-bg dark:bg-dark">
        <div className="container mx-auto">
          <h2 className="flex items-end mb-10 text-2xl font-semibold text-dark sm:text-3xl md:text-4xl dark:text-white">
            <span>Shopping cart</span>
            <span className="pl-5 text-lg font-medium text-body-color dark:text-dark-6">
              (04 Items)
            </span>
          </h2>

          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 xl:w-8/12">
              <div className="border-stroke dark:border-dark-3 dark:bg-dark-2 mb-10 max-w-full overflow-x-auto rounded-[10px] border bg-white">
                <table className="w-full table-auto">
                  <thead>
                    <tr className="text-left">
                      <th className="text-dark min-w-[300px] px-4 py-[18px] text-base font-semibold xl:pl-9 dark:text-white">
                        Product
                      </th>
                      <th className="text-dark min-w-[90px] px-4 py-[18px] text-base font-semibold dark:text-white">
                        Price
                      </th>
                      <th className="text-dark min-w-[150px] px-4 py-[18px] text-base font-semibold dark:text-white">
                        Quantity
                      </th>
                      <th className="text-dark min-w-[115px] px-4 py-[18px] text-center text-base font-semibold xl:pr-9 dark:text-white">
                        Remove
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {cartItems.map((item, index) => (
                      <tr key={index}>
                        <td className="border-stroke dark:border-dark-3 border-t px-4 py-[30px] xl:pl-9">
                          <div className="flex items-center">
                            <img
                              src={item.image}
                              alt="image"
                              className="mr-4 h-[70px] w-[70px] rounded-sm"
                            />
                            <div>
                              <h5 className="text-lg font-medium text-dark dark:text-white">
                                <Link
                                  to={item.link}
                                  className="hover:text-primary"
                                >
                                  {item.title}
                                </Link>
                              </h5>
                              <p className="text-body-color dark:text-dark-6 mt-0.5 text-base">
                                {item.subtitle}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="border-stroke dark:border-dark-3 border-t px-4 py-[30px]">
                          <p className="text-lg font-medium text-dark dark:text-white">
                            {item.price}
                          </p>
                        </td>
                        <td className="border-stroke dark:border-dark-3 border-t px-4 py-[30px]">
                          <div className="border-stroke text-dark dark:border-dark-3 inline-flex items-center rounded-[5px] border text-base font-medium dark:text-white">
                            <span
                              onClick={() => decrement(index)}
                              className="text-dark flex h-[42px] w-9 cursor-pointer items-center justify-center select-none dark:text-white"
                            >
                              -
                            </span>
                            <span className="border-stroke dark:border-dark-3 border-x px-6 py-[9px]">
                              {item.quantity}
                            </span>
                            <span
                              onClick={() => increment(index)}
                              className="text-dark flex h-[42px] w-9 cursor-pointer items-center justify-center select-none dark:text-white"
                            >
                              +
                            </span>
                          </div>
                        </td>
                        <td className="border-stroke dark:border-dark-3 border-t px-4 py-[30px] pr-9 text-center">
                          <button className="text-red">
                            <svg
                              width="16"
                              height="20"
                              viewBox="0 0 16 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M13.8438 2.6875H10.8125V1.5625C10.8125 0.90625 10.2812 0.375 9.625 0.375H6.375C5.71875 0.40625 5.1875 0.90625 5.1875 1.5625V2.6875H2.15625C1.5 2.6875 0.96875 3.21875 0.96875 3.875V6.15625C0.96875 6.46875 1.21875 6.71875 1.53125 6.71875H2V17.3125C2 18.5938 3.0625 19.6563 4.34375 19.6563H11.6875C12.9688 19.6563 14.0312 18.5938 14.0312 17.3125V6.65625H14.5C14.8125 6.65625 15.0625 6.40625 15.0625 6.09375V3.8125C15 3.1875 14.5 2.6875 13.8438 2.6875ZM6.28125 1.5625C6.28125 1.53125 6.3125 1.46875 6.375 1.46875H9.625C9.65625 1.46875 9.71875 1.5 9.71875 1.5625V2.6875H6.28125V1.5625ZM2.09375 3.84375C2.09375 3.8125 2.125 3.75 2.1875 3.75H5.78125H10.2812H13.875C13.9062 3.75 13.9688 3.78125 13.9688 3.84375V5.5625H2.09375V3.84375ZM12.9062 17.2813C12.9062 17.9688 12.3438 18.5313 11.6562 18.5313H4.34375C3.65625 18.5313 3.09375 17.9688 3.09375 17.2813V6.65625H12.9375V17.2813H12.9062Z"
                                fill="currentColor"
                              ></path>
                              <path
                                d="M8 15.0938C8.3125 15.0938 8.5625 14.8438 8.5625 14.5313V10.4375C8.5625 10.125 8.3125 9.875 8 9.875C7.6875 9.875 7.4375 10.125 7.4375 10.4375V14.5625C7.46875 14.875 7.6875 15.0938 8 15.0938Z"
                                fill="currentColor"
                              ></path>
                              <path
                                d="M10.625 15.0938C10.9375 15.0938 11.1875 14.8438 11.1875 14.5313V10.4375C11.1875 10.125 10.9375 9.875 10.625 9.875C10.3125 9.875 10.0625 10.125 10.0625 10.4375V14.5625C10.0938 14.875 10.3438 15.0938 10.625 15.0938Z"
                                fill="currentColor"
                              ></path>
                              <path
                                d="M5.375 15.0938C5.6875 15.0938 5.9375 14.8438 5.9375 14.5313V10.4375C5.9375 10.125 5.6875 9.875 5.375 9.875C5.0625 9.875 4.8125 10.125 4.8125 10.4375V14.5625C4.8125 14.875 5.0625 15.0938 5.375 15.0938Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 xl:w-4/12">
              <div className="border-stroke dark:border-dark-3 dark:bg-dark-2 xs:px-8 mb-8 overflow-hidden rounded-[10px] border bg-white px-6 pt-8 pb-5">
                <div className="mb-5">
                  <h3 className="mb-2 text-lg font-semibold text-dark sm:text-xl dark:text-white">
                    Apply Coupon
                  </h3>
                  <p className="text-base text-body-color dark:text-dark-6">
                    Using A Promo Code?
                  </p>
                </div>

                <form className="items-center xs:flex">
                  <input
                    type="text"
                    placeholder="Coupon code"
                    className="border-stroke text-body-color focus:border-primary active:border-primary dark:border-dark-3 dark:text-dark-6 xs:mr-4 mb-3 flex h-10 w-full items-center rounded-[5px] border bg-transparent px-[18px] text-sm outline-hidden transition disabled:cursor-default disabled:bg-[#F5F7FD]"
                  />
                  <button className="h-10 px-5 mb-3 text-sm font-semibold text-white transition rounded-md bg-primary hover:bg-blue-dark">
                    Apply
                  </button>
                </form>
              </div>

              <div className="border-stroke dark:border-dark-3 dark:bg-dark-2 xs:px-8 mb-8 overflow-hidden rounded-[10px] border bg-white px-6 py-8">
                <div className="pb-5 border-b border-stroke dark:border-dark-3">
                  <h3 className="text-lg font-semibold text-dark sm:text-xl dark:text-white">
                    Total
                  </h3>
                </div>
                <div className="py-5 -mx-1 border-b border-stroke dark:border-dark-3">
                  <div className="flex items-center justify-between mb-3">
                    <div className="px-1">
                      <p className="text-base font-medium text-dark dark:text-white">
                        Total
                      </p>
                    </div>
                    <div className="px-1">
                      <p className="text-base font-medium text-dark dark:text-white">
                        $96.00
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="px-1">
                      <p className="text-base font-medium text-dark dark:text-white">
                        Delivery
                      </p>
                    </div>
                    <div className="px-1">
                      <p className="text-base font-medium text-dark dark:text-white">
                        $14.00
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="px-1">
                      <p className="text-base font-medium text-dark dark:text-white">
                        Discount
                      </p>
                    </div>
                    <div className="px-1">
                      <p className="text-base font-medium text-dark dark:text-white">
                        -$0
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between py-5 -mx-1">
                  <div className="px-1">
                    <p className="text-base font-medium text-dark dark:text-white">
                      Subtotal
                    </p>
                  </div>
                  <div className="px-1">
                    <p className="text-base font-medium text-dark dark:text-white">
                      $110.00
                    </p>
                  </div>
                </div>

                <div className="mb-3">
                  <Link
                    to="/order-summary"
                    className="flex items-center justify-center w-full px-10 py-3 text-base font-medium text-center text-white rounded-md bg-primary hover:bg-blue-dark"
                  >
                    CHECKOUT
                  </Link>
                </div>
                <p className="text-body-color dark:text-dark-6 mb-[14px] text-base">
                  We Accept:
                </p>
                <img src={paymentImage} alt="payment" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShoppingCart;
