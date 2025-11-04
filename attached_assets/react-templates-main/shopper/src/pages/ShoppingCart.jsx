import Breadcrumb from "../components/Breadcrumb.jsx";
import paymentImage from "../assets/ecom-images/shopping-carts/shopping-cart-02/payment.svg";
import productOne from "../assets/ecom-images/shopping-carts/shopping-cart-04/image-01.jpg";
import productTwo from "../assets/ecom-images/shopping-carts/shopping-cart-04/image-02.jpg";
import { Link } from "react-router-dom";

const cartItems = [
  {
    image: productOne,
    link: "#",
    name: "Trendy Skirt Set for Women",
    color: "Blue",
    size: "S",
    price: 39.5,
    quantity: 1,
  },
  {
    image: productTwo,
    link: "#",
    name: "Trendy Men's Sneakers",
    color: "White",
    size: "L",
    price: 99.5,
    quantity: 1,
  },
];

const ShoppingCart = () => {
  return (
    <>
      <Breadcrumb pageName="Shopping Cart" />

      <section className="dark:bg-dark bg-white pt-24 pb-[120px]">
        <div className="container mx-auto">
          <h2 className="text-dark mb-[60px] text-2xl font-semibold sm:text-3xl md:text-4xl dark:text-white">
            Shopping cart
          </h2>

          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-8/12">
              <div className="mb-5 space-y-9">
                {cartItems.map((item, index) => (
                  <div
                    key={index}
                    className="border-stroke dark:border-dark-3 justify-between border-b pb-9 last:border-b-0 md:flex"
                  >
                    <div className="mr-8 mb-6 h-[180px] w-full max-w-[150px] md:mb-0">
                      <img
                        src={item.image}
                        alt="product"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div className="flex w-full flex-col justify-between">
                      <div className="mb-4 w-full justify-between sm:flex">
                        <div className="mr-4 mb-4">
                          <h3>
                            <Link
                              to={item.link}
                              className="text-dark hover:text-primary mb-3 block text-lg font-semibold sm:text-xl dark:text-white"
                            >
                              {item.name}
                            </Link>
                          </h3>
                          <p className="text-body-color dark:text-dark-6 mb-[5px] text-base font-medium">
                            Color: {item.color}
                          </p>
                          <p className="text-body-color dark:text-dark-6 mb-[5px] text-base font-medium">
                            Size: {item.size}
                          </p>
                          <p className="text-green text-base font-medium">
                            In Stock
                          </p>
                        </div>
                        <div className="mr-4 mb-4">
                          <p className="text-body-color dark:text-dark-6 mb-[10px] text-base font-medium">
                            Each
                          </p>
                          <p className="text-dark text-xl font-semibold dark:text-white">
                            ${item.price}
                          </p>
                        </div>
                        <div className="mr-4">
                          <label
                            htmlFor=""
                            className="text-body-color dark:text-dark-6 mb-[10px] block text-base font-medium"
                          >
                            Quantity
                          </label>
                          <div className="relative inline-block">
                            <select className="border-stroke text-body-color focus:border-primary active:border-primary dark:border-dark-3 w-full appearance-none border bg-transparent py-[6px] pr-[52px] pl-4 text-sm font-medium outline-hidden transition disabled:cursor-default disabled:bg-[#F5F7FD]">
                              <option value="" className="dark:bg-dark-2">
                                1
                              </option>
                              <option value="" className="dark:bg-dark-2">
                                2
                              </option>
                              <option value="" className="dark:bg-dark-2">
                                3
                              </option>
                              <option value="" className="dark:bg-dark-2">
                                4
                              </option>
                            </select>
                            <span className="text-body-color dark:text-dark-6 absolute top-1/2 right-[10px] -translate-y-1/2">
                              <svg
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="fill-current"
                              >
                                <path d="M7 9.97495C6.86875 9.97495 6.75937 9.9312 6.65 9.8437L1.61875 4.89995C1.42187 4.70308 1.42187 4.39683 1.61875 4.19995C1.81562 4.00308 2.12187 4.00308 2.31875 4.19995L7 8.77183L11.6812 4.1562C11.8781 3.95933 12.1844 3.95933 12.3812 4.1562C12.5781 4.35308 12.5781 4.65933 12.3812 4.8562L7.35 9.79995C7.24062 9.90933 7.13125 9.97495 7 9.97495Z" />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <button className="border-gray-7 text-body-color hover:border-primary hover:bg-primary dark:border-dark-3 dark:text-dark-6 border-[0.5px] px-4 py-1 text-sm transition hover:text-white">
                          Edit
                        </button>
                        <button className="border-gray-7 text-body-color hover:border-primary hover:bg-primary dark:border-dark-3 dark:text-dark-6 border-[0.5px] px-4 py-1 text-sm transition hover:text-white">
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full px-4 lg:w-4/12">
              <div className="2xl:pl-8">
                <div>
                  <h3 className="text-dark mb-5 text-xl font-semibold dark:text-white">
                    Apply Coupon to get discount!
                  </h3>
                  <form className="flex">
                    <input
                      type="email"
                      className="border-stroke text-body-color focus:border-primary dark:border-dark-3 dark:text-dark-6 mr-3 mb-3 h-10 w-full border bg-transparent px-4 text-sm outline-hidden focus-visible:shadow-none"
                      placeholder="Coupon code"
                    />
                    <button className="bg-primary hover:bg-blue-dark mb-3 h-10 px-[22px] text-sm font-semibold text-white transition">
                      Submit
                    </button>
                  </form>
                </div>

                <div className="border-stroke dark:border-dark-3 -mx-1 border-b py-6">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="px-1">
                      <p className="text-dark text-base font-medium dark:text-white">
                        Subtotal
                      </p>
                    </div>
                    <div className="px-1">
                      <p className="text-dark text-base font-medium dark:text-white">
                        $96.00
                      </p>
                    </div>
                  </div>
                  <div className="mb-4 flex items-center justify-between">
                    <div className="px-1">
                      <p className="text-dark text-base font-medium dark:text-white">
                        Shipping Cost (+)
                      </p>
                    </div>
                    <div className="px-1">
                      <p className="text-dark text-base font-medium dark:text-white">
                        $14.00
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="px-1">
                      <p className="text-dark text-base font-medium dark:text-white">
                        Discount (-)
                      </p>
                    </div>
                    <div className="px-1">
                      <p className="text-dark text-base font-medium dark:text-white">
                        $9.00
                      </p>
                    </div>
                  </div>
                </div>
                <div className="-mx-1 flex items-center justify-between pt-6 pb-8">
                  <div className="px-1">
                    <p className="text-dark text-base font-medium dark:text-white">
                      Estimated Total
                    </p>
                  </div>
                  <div className="px-1">
                    <p className="text-dark text-base font-medium dark:text-white">
                      $110.00
                    </p>
                  </div>
                </div>

                <div className="mb-3">
                  <Link
                    to="/order-summary"
                    className="bg-primary hover:bg-blue-dark flex w-full items-center justify-center px-10 py-3 text-center text-base font-medium text-white"
                  >
                    Checkout
                  </Link>
                </div>
                <p className="text-body-color dark:text-dark-6 text-center text-base">
                  <span>You&apos;re</span>
                  <span className="px-0.5 text-[#DC2626]"> $10.05 </span>
                  <span>away from free shipping!</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShoppingCart;
