import React from "react";

const ShoppingCart3 = () => {
  return (
    <section className="bg-gray py-20 lg:py-[120px]">
      <div className="container mx-auto">
        <h2 className="mb-12 flex items-center text-2xl font-semibold text-black sm:text-3xl md:text-4xl">
          Shopping cart
          <span className="pl-5 text-lg text-body-color"> (04 Items) </span>
        </h2>
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 xl:w-8/12">
            <div className="mb-10 max-w-full overflow-x-auto rounded-xl border border-[#e7e7e7] bg-white">
              <table className="w-full table-auto">
                <thead>
                  <tr className="bg-white text-left">
                    <th
                      className={`min-w-[300px] px-4 py-4 text-base font-semibold text-dark xl:first:pl-9 xl:last:pr-9`}
                    >
                      Product
                    </th>
                    <th
                      className={`min-w-[90px] px-4 py-4 text-base font-semibold text-dark xl:first:pl-9 xl:last:pr-9`}
                    >
                      Price
                    </th>
                    <th
                      className={`min-w-[150px] px-4 py-4 text-base font-semibold text-dark xl:first:pl-9 xl:last:pr-9`}
                    >
                      Quantity
                    </th>
                    <th
                      className={`min-w-[140px] px-4 py-4 text-base font-semibold text-dark xl:first:pl-9 xl:last:pr-9`}
                    >
                      Remove
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <TableRow
                    img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/shopping-carts/shopping-cart-03/image-01.jpg"
                    link="/#"
                    title="Hollow Port"
                    subtitle="Awesome yellow t-shirt"
                    price="$39.11"
                  />
                  <TableRow
                    img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/shopping-carts/shopping-cart-03/image-02.jpg"
                    link="/#"
                    title="Circular Sienna"
                    subtitle="Awesome yellow t-shirt"
                    price="$24.89"
                  />
                  <TableRow
                    img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/shopping-carts/shopping-cart-03/image-03.jpg"
                    link="/#"
                    title="Realm Bone"
                    subtitle="Awesome yellow t-shirt"
                    price="$22.00"
                  />
                  <TableRow
                    img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/shopping-carts/shopping-cart-03/image-04.jpg"
                    link="/#"
                    title="Pest color shirt"
                    subtitle="Awesome yellow t-shirt"
                    price="$22.00"
                  />
                </tbody>
              </table>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2 xl:w-4/12">
            <div className="mb-8 overflow-hidden rounded-xl border border-[#e7e7e7] bg-white px-6 py-6 xs:px-8">
              <div className="mb-6">
                <h3 className="mb-2 text-lg font-semibold text-black sm:text-xl">
                  Apply Coupon
                </h3>
                <p className="text-sm font-medium text-body-color">
                  Using A Promo Code?
                </p>
              </div>
              <form className="items-center xs:flex">
                <input
                  type="text"
                  placeholder="Coupon code"
                  className="mb-3 flex h-10 w-full items-center rounded-sm border border-form-stroke px-6 text-sm font-medium text-body-color outline-hidden transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD] xs:mr-4"
                />
                <button className="mb-3 h-10 rounded-sm bg-primary px-5 text-sm font-semibold text-white transition hover:bg-primary/90">
                  Apply
                </button>
              </form>
            </div>
            <div className="mb-8 overflow-hidden rounded-xl border border-[#e7e7e7] bg-white px-6 py-6 xs:px-8">
              <div className="border-b border-[#e7e7e7] pb-5">
                <h3 className="text-lg font-semibold text-black sm:text-xl">
                  Total
                </h3>
              </div>
              <div className="-mx-1 border-b border-[#e7e7e7] py-7">
                <div className="mb-3 flex items-center justify-between">
                  <div className="px-1">
                    <p className="text-base font-semibold text-black">Total</p>
                  </div>
                  <div className="px-1">
                    <p className="text-base font-semibold text-black">$96.00</p>
                  </div>
                </div>
                <div className="mb-3 flex items-center justify-between">
                  <div className="px-1">
                    <p className="text-base font-medium text-black">Delivery</p>
                  </div>
                  <div className="px-1">
                    <p className="text-base font-semibold text-black">$14.00</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="px-1">
                    <p className="text-base font-medium text-black">Discount</p>
                  </div>
                  <div className="px-1">
                    <p className="text-base font-semibold text-black"> -$0 </p>
                  </div>
                </div>
              </div>
              <div className="-mx-1 flex items-center justify-between pb-6 pt-5">
                <div className="px-1">
                  <p className="text-base font-medium text-black">Subtotal</p>
                </div>
                <div className="px-1">
                  <p className="text-base font-semibold text-black">
                    {" "}
                    $110.00{" "}
                  </p>
                </div>
              </div>
              <div className="mb-5">
                <button className="flex w-full items-center justify-center rounded-md bg-primary px-10 py-[10px] text-center text-base font-normal text-white hover:bg-primary/90">
                  Checkout
                </button>
              </div>
              <p className="mb-4 text-base font-medium text-body-color">
                We Accept:
              </p>
              <img
                src="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/shopping-carts/shopping-cart-02/payment.svg"
                alt="payment"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart3;

const TableRow = ({ img, link, title, subtitle, price }) => {
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
        <div className="inline-flex items-center border border-[#e7e7e7] text-base font-medium text-black">
          <span className="cursor-pointer select-none border-r border-[#e7e7e7] px-4 py-[6px]">
            -
          </span>
          <span className="px-4 py-[6px]">1</span>
          <span className="cursor-pointer select-none border-l border-[#e7e7e7] px-4 py-[6px]">
            +
          </span>
        </div>
      </td>
      <td className="border-t p-4 pr-11 text-center">
        <button className="text-red-600">
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
