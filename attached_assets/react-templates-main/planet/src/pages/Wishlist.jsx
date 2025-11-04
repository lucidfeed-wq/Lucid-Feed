import Breadcrumb from "../components/Breadcrumb.jsx";

import productOne from "../assets/ecom-images/wishlists/wishlist-01/image-01.jpg";
import productTwo from "../assets/ecom-images/wishlists/wishlist-01/image-02.jpg";
import productThree from "../assets/ecom-images/wishlists/wishlist-01/image-03.jpg";
import { Link } from "react-router-dom";

const wishlistItems = [
  {
    name: "Hollow Port",
    image: productOne,
    description: "Awesome yellow t-shirt",
    price: "$39.11",
    stockStatus: "In Stock",
    link: "#",
  },
  {
    name: "Red Horizon",
    image: productTwo,
    description: "Stylish red hoodie",
    price: "$49.99",
    stockStatus: "In Stock",
    link: "#",
  },
  {
    name: "Mountain Blue",
    image: productThree,
    description: "Comfortable blue jeans",
    price: "$29.95",
    stockStatus: "Stock Out",
    link: "#",
  },
];

const Wishlist = () => {
  return (
    <>
      <Breadcrumb pageName="Wishlist" />

      <section className="bg-tg-bg dark:bg-dark pt-24 pb-12 lg:pb-[90px]">
        <div className="container mx-auto">
          <div className="flex justify-center -mx-4">
            <div className="w-full px-4 xl:w-11/12 2xl:w-10/12">
              <div className="mb-9">
                <h2 className="mb-2 text-3xl font-semibold text-dark sm:text-4xl dark:text-white">
                  Your Favorite Items
                </h2>
                <p className="text-base font-medium text-body-color dark:text-dark-6">
                  There are 04 products in this list
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center -mx-4">
            <div className="w-full px-4 xl:w-11/12 2xl:w-10/12">
              <div className="border-stroke dark:border-dark-3 dark:bg-dark-2 max-w-full overflow-x-auto rounded-[10px] border bg-white">
                <table className="w-full table-auto">
                  <thead>
                    <tr className="text-left">
                      <th className="text-dark min-w-[300px] px-4 py-[18px] text-base font-medium xl:pl-9 dark:text-white">
                        Product
                      </th>
                      <th className="text-dark min-w-[90px] px-4 py-[18px] text-base font-medium dark:text-white">
                        Price
                      </th>
                      <th className="text-dark min-w-[150px] px-4 py-[18px] text-base font-medium dark:text-white">
                        Stock Status
                      </th>
                      <th className="text-dark min-w-[165px] px-4 py-[18px] text-base font-medium dark:text-white">
                        Action
                      </th>
                      <th className="text-dark min-w-[115px] px-4 py-[18px] text-center text-base font-medium xl:pr-9 dark:text-white">
                        Remove
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {wishlistItems.map((item, index) => (
                      <tr key={index}>
                        <td className="border-stroke dark:border-dark-3 border-t px-4 py-[30px] xl:pl-9">
                          <div className="flex items-center">
                            <img
                              src={item.image}
                              alt="image"
                              className="mr-5 h-[70px] w-[70px] rounded-[5px]"
                            />
                            <div>
                              <h5 className="text-dark mb-0.5 text-lg font-semibold dark:text-white">
                                <Link
                                  to={item.link}
                                  className="hover:text-primary"
                                >
                                  {item.name}
                                </Link>
                              </h5>
                              <p className="text-base text-body-color dark:text-dark-6">
                                {item.description}
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
                          <span
                            className={`inline-flex items-center justify-center rounded-full px-[10px] py-[3px] text-xs leading-[1.67] font-medium ${item.stockStatus === "In Stock" && "bg-green-light-6 text-green-dark"} ${item.stockStatus === "Stock Out" && "bg-red-light-5 text-red-dark"}`}
                          >
                            {item.stockStatus}
                          </span>
                        </td>
                        <td className="border-stroke dark:border-dark-3 border-t px-4 py-[30px]">
                          {item.stockStatus === "In Stock" && (
                            <button className="bg-primary hover:bg-blue-dark inline-block rounded-md px-5 py-2 text-sm leading-[1.57] font-medium text-white">
                              Add to Cart
                            </button>
                          )}

                          {item.stockStatus === "Stock Out" && (
                            <button className="bg-dark hover:bg-dark/90 inline-block rounded-md px-5 py-2 text-sm leading-[1.57] font-medium text-white">
                              Contact Us
                            </button>
                          )}
                        </td>
                        <td className="border-stroke dark:border-dark-3 border-t px-4 py-[30px] pr-9 text-center">
                          <button className="text-body-color hover:text-red dark:text-dark-6 dark:hover:text-red">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="fill-current"
                            >
                              <path d="M15.2812 2.75H12.875V2.21875C12.875 1.28125 12.125 0.53125 11.1875 0.53125H8.78125C7.84375 0.53125 7.09375 1.28125 7.09375 2.21875V2.75H4.6875C3.78125 2.75 3.03125 3.5 3.03125 4.40625V5.34375C3.03125 6.03125 3.4375 6.59375 4.03125 6.84375L4.53125 17.1875C4.59375 18.4687 5.65625 19.4687 6.9375 19.4687H13C14.2812 19.4687 15.3437 18.4687 15.4062 17.1875L15.9375 6.8125C16.5312 6.5625 16.9375 5.96875 16.9375 5.3125V4.375C16.9375 3.5 16.1875 2.75 15.2812 2.75ZM8.53125 2.21875C8.53125 2.0625 8.65625 1.9375 8.8125 1.9375H11.2188C11.375 1.9375 11.5 2.0625 11.5 2.21875V2.75H8.5625V2.21875H8.53125ZM4.46875 4.40625C4.46875 4.28125 4.5625 4.15625 4.71875 4.15625H15.2812C15.4062 4.15625 15.5312 4.25 15.5312 4.40625V5.34375C15.5312 5.46875 15.4375 5.59375 15.2812 5.59375H4.71875C4.59375 5.59375 4.46875 5.5 4.46875 5.34375V4.40625ZM13.0312 18.0625H6.96875C6.4375 18.0625 6 17.6562 5.96875 17.0937L5.5 6.96875H14.5312L14.0625 17.0937C14 17.625 13.5625 18.0625 13.0312 18.0625Z" />
                              <path d="M10 10.125C9.625 10.125 9.28125 10.4375 9.28125 10.8437V14.8125C9.28125 15.1875 9.59375 15.5312 10 15.5312C10.375 15.5312 10.7187 15.2188 10.7187 14.8125V10.8437C10.7187 10.4375 10.375 10.125 10 10.125Z" />
                              <path d="M12.5 10.75C12.0938 10.7187 11.7813 11 11.75 11.4062L11.5625 14.1562C11.5313 14.5312 11.8125 14.875 12.2188 14.9062C12.25 14.9062 12.25 14.9062 12.2813 14.9062C12.6563 14.9062 12.9688 14.625 12.9688 14.25L13.1563 11.5C13.1563 11.0937 12.875 10.7812 12.5 10.75Z" />
                              <path d="M7.46875 10.75C7.09375 10.7812 6.78125 11.125 6.8125 11.5L7.03125 14.25C7.0625 14.625 7.375 14.9062 7.71875 14.9062C7.75 14.9062 7.75 14.9062 7.78125 14.9062C8.15625 14.875 8.46875 14.5312 8.4375 14.1562L8.21875 11.4062C8.21875 11 7.875 10.7187 7.46875 10.75Z" />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Wishlist;
