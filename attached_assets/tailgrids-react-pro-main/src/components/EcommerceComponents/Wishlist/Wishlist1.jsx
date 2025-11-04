import React from "react";

const Wishlist = () => {
  return (
    <section className="bg-gray pb-12 pt-20 lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex justify-center">
          <div className="w-full px-4 xl:w-11/12 2xl:w-10/12">
            <div className="mb-[60px]">
              <h2 className="mb-4 text-3xl font-semibold text-black sm:text-4xl">
                Your Favorite Items
              </h2>
              <p className="text-base font-medium text-body-color md:text-lg">
                There are 04 products in this list
              </p>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex justify-center">
          <div className="w-full px-4 xl:w-11/12 2xl:w-10/12">
            <div className="max-w-full overflow-x-auto rounded-xl border border-[#e7e7e7] bg-white">
              <table className="w-full table-auto">
                <thead>
                  <tr className="bg-white text-left">
                    <th
                      className={`last::xl:pr-9 min-w-[300px] px-4 py-4 text-base font-semibold text-dark xl:first:pl-9`}
                    >
                      Product
                    </th>
                    <th
                      className={`last::xl:pr-9 min-w-[90px] px-4 py-4 text-base font-semibold text-dark xl:first:pl-9`}
                    >
                      Price
                    </th>
                    <th
                      className={`last::xl:pr-9 min-w-[150px] px-4 py-4 text-base font-semibold text-dark xl:first:pl-9`}
                    >
                      Stoke Stats
                    </th>
                    <th
                      className={`last::xl:pr-9 min-w-[165px] px-4 py-4 text-base font-semibold text-dark xl:first:pl-9`}
                    >
                      Action
                    </th>
                    <th
                      className={`last::xl:pr-9 min-w-[140px] px-4 py-4 text-base font-semibold text-dark xl:first:pl-9`}
                    >
                      Remove
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <TableDataRow
                    img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/wishlists/wishlist-01/image-01.jpg"
                    link="/#"
                    title="Hollow Port"
                    subtitle="Awesome yellow t-shirt"
                    price="$39.11"
                    button="Add to Cart"
                    stock
                  />
                  <TableDataRow
                    img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/wishlists/wishlist-01/image-02.jpg"
                    link="/#"
                    title="Circular Sienna"
                    subtitle="Awesome yellow t-shirt"
                    price="$24.89 "
                    button="Add to Cart"
                    stock
                  />
                  <TableDataRow
                    img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/wishlists/wishlist-01/image-03.jpg"
                    link="/#"
                    title="Realm Bone"
                    subtitle="Awesome yellow t-shirt"
                    price="$22.00"
                    button="Contact Us"
                  />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wishlist;

const TableDataRow = ({ img, title, subtitle, link, price, stock, button }) => {
  return (
    <tr>
      <td className="border-t p-4 xl:pl-11">
        <div className="flex items-center">
          <img
            src={img}
            alt="image"
            className="mr-4 h-[70px] w-[70px] rounded-sm"
          />
          <div>
            <h5 className="text-lg font-semibold text-dark">
              <a href={link} className="hover:text-primary">
                {title}
              </a>
            </h5>
            <p className="text-base font-medium text-body-color">{subtitle}</p>
          </div>
        </div>
      </td>
      <td className="border-t p-4">
        <p className="text-lg font-semibold text-black">{price}</p>
      </td>
      <td className="border-t p-4">
        <span
          className={`${
            stock ? "bg-secondary/[.15] text-secondary" : "bg-danger/[.15] text-danger"
          } inline-flex items-center justify-center rounded-full px-4 py-2 text-xs font-semibold`}
        >
          {stock && "In"} Stock {!stock && "Out"}
        </span>
      </td>
      <td className="border-t p-4">
        <button
          className={`${
            stock ? "bg-primary/90" : "bg-black/90"
          } inline-block rounded px-5 py-2 text-sm font-semibold text-white`}
        >
          {button}
        </button>
      </td>
      <td className="border-t p-4 pr-11 text-center">
        <button className="text-body-color hover:text-red-600">
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
  );
};
