import Breadcrumb from "../components/Breadcrumb.jsx";

import productOne from "../assets/ecom-images/wishlists/wishlist-02/image-01.png";
import productTwo from "../assets/ecom-images/wishlists/wishlist-02/image-02.png";
import productThree from "../assets/ecom-images/wishlists/wishlist-02/image-03.png";
import { Link } from "react-router-dom";

const wishlistItems = [
  {
    name: "Stylish table lamp",
    image: productOne,
    link: "#",
    stock: true,
    price: "155",
    beforePrice: "259",
  },
  {
    name: "White energy bulb",
    image: productTwo,
    link: "#",
    stock: false,
    price: "59",
    beforePrice: "85",
  },
  {
    name: "Stylish LED bulb",
    image: productThree,
    link: "#",
    stock: true,
    price: "99",
  },
];

const Wishlist = () => {
  return (
    <>
      <Breadcrumb pageName="Wishlist" />

      <section className="bg-white pb-[120px] pt-24 dark:bg-dark">
        <div className="container mx-auto">
          <div className="-mx-4 flex">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[575px] text-center">
                <h2 className="mb-[6px] text-3xl font-semibold text-dark dark:text-white sm:text-4xl">
                  Your Favorite Items
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  There are 04 products in this list
                </p>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="max-w-full overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="border-t border-stroke text-left dark:border-dark-3">
                    <th className="min-w-[300px] px-4 py-[14px] text-base font-medium text-dark dark:text-white xl:pl-10">
                      Product Name
                    </th>
                    <th className="min-w-[180px] py-[14px] text-base font-medium text-dark dark:text-white">
                      Unit Price
                    </th>
                    <th className="min-w-[140px] py-[14px] text-base font-medium text-dark dark:text-white">
                      Stock Status
                    </th>
                    <th className="min-w-[150px] py-[14px] text-base font-medium text-dark dark:text-white">
                      Action
                    </th>
                    <th className="min-w-[140px] px-4 py-[14px] text-base font-medium text-dark dark:text-white xl:pr-10"></th>
                  </tr>
                </thead>
                <tbody>
                  {wishlistItems.map((item, index) => (
                    <tr key={index}>
                      <td className="border-t border-stroke py-[30px] dark:border-dark-3">
                        <div className="flex items-center">
                          <img
                            src={item.image}
                            alt="image"
                            className="mr-8 h-[90px] w-[90px] rounded-full"
                          />
                          <div>
                            <h5 className="text-lg font-medium text-dark dark:text-white">
                              <Link
                                to={item.link}
                                className="hover:text-primary"
                              >
                                {item.name}
                              </Link>
                            </h5>
                          </div>
                        </div>
                      </td>
                      <td className="border-t border-stroke py-[30px] dark:border-dark-3">
                        <p className="flex items-center text-lg font-medium text-body-color dark:text-dark-6">
                          {item.beforePrice && (
                            <span className="mr-[10px] line-through">
                              ${item.beforePrice}
                            </span>
                          )}

                          <span>${item.price}</span>
                        </p>
                      </td>
                      <td className="border-t border-stroke py-[30px] dark:border-dark-3">
                        <p
                          className={`text-lg font-medium  ${item.stock ? "text-green" : "text-red"}`}
                        >
                          {item.stock ? "In Stock" : "Stock Out"}
                        </p>
                      </td>
                      <td className="border-t border-stroke py-[30px] dark:border-dark-3">
                        <button className="inline-block rounded-full bg-primary px-5 py-2 text-base font-medium text-white hover:bg-blue-dark">
                          Add to Cart
                        </button>
                      </td>
                      <td className="border-t border-stroke py-[30px] text-center dark:border-dark-3">
                        <button className="text-body-color hover:text-red">
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
                            <path d="M12.5 10.75C12.0938 10.7187 11.7813 11 11.75 11.4062L11.5625 14.1562C11.5313 14.5312 11.8125 14.875 12.2188 14.9062C12.25 14.9062 12.25 14.9062 12.2813 14.9062C12.6563 14.9062 12.9688 14.625 12.9688 14.25L13.1562 11.5C13.1562 11.0937 12.875 10.7812 12.5 10.75Z" />
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
      </section>
    </>
  );
};

export default Wishlist;
