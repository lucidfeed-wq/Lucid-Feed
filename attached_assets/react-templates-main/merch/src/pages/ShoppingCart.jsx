import Breadcrumb from "../components/Breadcrumb.jsx";
import paymentImage from "../assets/ecom-images/shopping-carts/shopping-cart-02/payment.svg";
import productOne from "../assets/ecom-images/shopping-carts/shopping-cart-02/image-01.jpg";
import productTwo from "../assets/ecom-images/shopping-carts/shopping-cart-02/image-02.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    {
      name: "Modern Lounge Chair",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: productOne,
      link: "#",
      quantity: 1,
      price: "158.99$",
      colorOptions: [
        { label: "White", value: "white" },
        { label: "Black", value: "black" },
        { label: "Blue", value: "blue" },
      ],
    },
    {
      name: "Mini Basic Table Lamp",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: productTwo,
      link: "#",
      quantity: 1,
      price: "158.99$",
      colorOptions: [
        { label: "White", value: "white" },
        { label: "Black", value: "black" },
        { label: "Blue", value: "blue" },
      ],
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
      <Breadcrumb pageName="Shopping Cart" />

      <section className="dark:bg-dark bg-white pt-24 pb-[120px]">
        <div className="container mx-auto">
          <h2 className="mb-12 text-2xl font-semibold text-dark sm:text-3xl md:text-4xl dark:text-white">
            Shopping cart
          </h2>

          <div className="space-y-10">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="px-6 py-6 bg-white shadow-1 dark:bg-dark-2 dark:shadow-box-dark xl:pr-10"
              >
                <div className="items-center md:flex">
                  <div className="mr-9 mb-5 h-[150px] w-full max-w-[150px] md:mb-0">
                    <img
                      src={item.image}
                      alt="product"
                      className="object-cover object-center w-full h-full"
                    />
                  </div>

                  <div className="w-full">
                    <h4>
                      <Link
                        to={item.link}
                        className="block mb-2 text-xl font-semibold text-dark sm:text-2xl dark:text-white"
                      >
                        {item.name}
                      </Link>
                    </h4>
                    <p className="mb-4 text-base text-body-color dark:text-dark-6">
                      {item.description}
                    </p>

                    <div className="items-end justify-between w-full sm:flex">
                      <div className="mb-5">
                        <label className="text-body-color dark:text-dark-6 mb-[6px] block text-sm">
                          Color
                        </label>
                        <div className="relative">
                          <select className="border-stroke text-body-color focus:border-primary active:border-primary dark:border-dark-3 dark:text-dark-6 w-full appearance-none border bg-transparent py-2 pr-10 pl-4 text-sm font-medium outline-hidden transition disabled:cursor-default disabled:bg-[#F5F7FD]">
                            {item.colorOptions.map((color, colorIndex) => (
                              <option
                                key={colorIndex}
                                value={color.value}
                                className="dark:bg-dark-2"
                              >
                                {color.label}
                              </option>
                            ))}
                          </select>
                          <span className="absolute -translate-y-1/2 text-body-color dark:text-dark-6 top-1/2 right-3">
                            <svg
                              width="14"
                              height="15"
                              viewBox="0 0 14 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="fill-current"
                            >
                              <path d="M7.00001 10.475C6.86876 10.475 6.75938 10.4313 6.65001 10.3438L1.61876 5.40001C1.42188 5.20314 1.42188 4.89689 1.61876 4.70001C1.81563 4.50314 2.12188 4.50314 2.31876 4.70001L7.00001 9.27189L11.6813 4.65626C11.8781 4.45939 12.1844 4.45939 12.3813 4.65626C12.5781 4.85314 12.5781 5.15939 12.3813 5.35626L7.35001 10.3C7.24063 10.4094 7.13126 10.475 7.00001 10.475Z" />
                            </svg>
                          </span>
                        </div>
                      </div>

                      <div className="flex items-end mb-5 sm:justify-end">
                        <div className="mr-10">
                          <span className="text-body-color dark:text-dark-6 mb-[6px] block text-sm">
                            Quantity
                          </span>

                          <div className="inline-flex items-center text-base font-medium border border-stroke text-dark dark:border-dark-3 dark:text-white">
                            <span
                              onClick={() => decrement(index)}
                              className="flex items-center justify-center h-10 cursor-pointer select-none text-dark w-9 dark:text-white"
                            >
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="fill-current"
                              >
                                <path d="M11.0626 6.43135H0.937598C0.712598 6.43135 0.506348 6.24385 0.506348 6.0001C0.506348 5.7751 0.693848 5.56885 0.937598 5.56885H11.0626C11.2876 5.56885 11.4938 5.75635 11.4938 6.0001C11.4938 6.2251 11.2876 6.43135 11.0626 6.43135Z" />
                              </svg>
                            </span>
                            <span className="px-6 py-2 border-stroke dark:border-dark-3 border-x">
                              {item.quantity}
                            </span>
                            <span
                              onClick={() => increment(index)}
                              className="flex items-center justify-center h-10 cursor-pointer select-none text-dark w-9 dark:text-white"
                            >
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="fill-current"
                              >
                                <g clipPath="url(#clip0_1032_24236)">
                                  <path d="M11.2501 5.5876H6.43135V0.750098C6.43135 0.525098 6.24385 0.318848 6.0001 0.318848C5.7751 0.318848 5.56885 0.506348 5.56885 0.750098V5.5876H0.750098C0.525098 5.5876 0.318848 5.7751 0.318848 6.01885C0.318848 6.24385 0.506348 6.4501 0.750098 6.4501H5.5876V11.2501C5.5876 11.4751 5.7751 11.6813 6.01885 11.6813C6.24385 11.6813 6.4501 11.4938 6.4501 11.2501V6.43135H11.2501C11.4751 6.43135 11.6813 6.24385 11.6813 6.0001C11.6813 5.7751 11.4751 5.5876 11.2501 5.5876Z" />
                                </g>
                                <defs>
                                  <clipPath id="clip0_1032_24236">
                                    <rect width="12" height="12" fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </span>
                          </div>
                        </div>
                        <div>
                          <span className="text-lg font-medium text-dark dark:text-white">
                            {item.price}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="flex flex-wrap justify-between">
              <div className="mb-10 ml-auto w-full md:mb-0 md:ml-0 md:max-w-[300px] lg:max-w-[360px]">
                <form className="relative">
                  <input
                    type="text"
                    placeholder="Coupon code"
                    className="border-stroke text-body-color focus:border-primary active:border-primary dark:border-dark-3 dark:bg-dark-2 dark:text-dark-6 w-full border bg-white py-3 pr-[84px] pl-5 outline-hidden transition disabled:cursor-default disabled:bg-[#F5F7FD]"
                  />
                  <button className="bg-primary hover:bg-blue-dark absolute top-1/2 right-2 mb-3 h-[34px] -translate-y-1/2 px-4 text-sm font-medium text-white transition">
                    Apply
                  </button>
                </form>
              </div>

              <div className="px-6 ml-auto xl:pr-10">
                <div className="ml-auto w-full max-w-[320px]">
                  <p className="text-dark mb-[14px] flex items-center justify-between text-xl font-semibold dark:text-white">
                    <span> Subtotal </span>
                    <span> 403.99$ </span>
                  </p>
                  <p className="mb-5 text-base text-body-color dark:text-dark-6">
                    Shipping, taxes, & discounts calculated
                  </p>
                  <Link
                    to="/order-summary"
                    className="bg-primary hover:bg-blue-dark mb-[22px] flex w-full justify-center px-5 py-3 text-base font-medium text-white transition"
                  >
                    Checkout
                  </Link>
                  <p className="mb-4 text-base text-center text-body-color dark:text-dark-6">
                    Secured Payment By
                  </p>
                  <img
                    src={paymentImage}
                    alt="payment"
                    className="mx-auto text-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShoppingCart;
