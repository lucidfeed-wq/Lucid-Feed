import React from "react";

const Wishlist2 = () => {
  return (
    <section className="bg-white pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[575px] text-center">
              <h2 className="mb-4 text-3xl font-semibold text-black sm:text-4xl">
                Your Favorite Items
              </h2>
              <p className="text-body-color text-base font-medium md:text-lg">
                There are 04 products in this list
              </p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="max-w-full overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="border-t text-left">
                  <th
                    className={`min-w-[300px] text-dark py-4 px-4 text-base font-medium xl:first:pl-11 xl:last:pr-11`}
                  >
                    {" "}
                    Product Name{" "}
                  </th>
                  <th
                    className={`min-w-[180px] text-dark py-4 px-4 text-base font-medium xl:first:pl-11 xl:last:pr-11`}
                  >
                    {" "}
                    Unit Price{" "}
                  </th>
                  <th
                    className={`min-w-[140px] text-dark py-4 px-4 text-base font-medium xl:first:pl-11 xl:last:pr-11`}
                  >
                    {" "}
                    Stock Status{" "}
                  </th>
                  <th
                    className={`min-w-[150px] text-dark py-4 px-4 text-base font-medium xl:first:pl-11 xl:last:pr-11`}
                  >
                    {" "}
                    Action{" "}
                  </th>
                  <th
                    className={`min-w-[140px] text-dark py-4 px-4 text-base font-medium xl:first:pl-11 xl:last:pr-11`}
                  >
                    {" "}
                  </th>
                </tr>
              </thead>

              <tbody>
                <TableDataRow
                  img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/wishlists/wishlist-02/image-01.png"
                  link="/#"
                  title="Stylish table lamp"
                  price="$155"
                  prevPrice="$259"
                  button="Add to Cart"
                  stock
                />
                <TableDataRow
                  img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/wishlists/wishlist-02/image-02.png"
                  link="/#"
                  title="White energy bulb"
                  price="$59"
                  prevPrice="$85"
                  button="Add to Cart"
                  stock
                />
                <TableDataRow
                  img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/wishlists/wishlist-02/image-03.png"
                  link="/#"
                  title="Stylish LED bulb"
                  price="$99"
                  button="Add to Cart"
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wishlist2;

const TableDataRow = ({
  img,
  title,
  subtitle,
  link,
  price,
  prevPrice,
  stock,
  button,
}) => {
  return (
    <tr>
      <td className="border-t p-4 xl:pl-11">
        <div className="flex items-center">
          <img
            src={img}
            alt="image"
            className="mr-4 h-[90px] w-[90px] rounded-full"
          />
          <div>
            <h5 className="text-dark text-lg font-medium">
              <a href={link} className="hover:text-primary">
                {title}
              </a>
            </h5>
            <p className="text-body-color text-base font-medium">{subtitle}</p>
          </div>
        </div>
      </td>
      <td className="border-t p-4">
        <p className="text-body-color flex items-center text-lg font-medium">
          {prevPrice && <span className="mr-2 line-through">{prevPrice}</span>}
          {price}
        </p>
      </td>
      <td className="border-t p-4">
        <span className="text-body-color text-lg font-medium">
          {stock && "In"} Stock {!stock && "Out"}
        </span>
      </td>
      <td className="border-t p-4">
        <button className="bg-primary inline-block rounded-full py-1 px-5 text-sm font-medium text-white hover:bg-primary/90">
          {button}
        </button>
      </td>
      <td className="border-t p-4 text-center xl:pr-11">
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
