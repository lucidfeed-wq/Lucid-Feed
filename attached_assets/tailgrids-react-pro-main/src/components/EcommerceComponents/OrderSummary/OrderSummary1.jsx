import React from "react";

const OrderSummary = () => {
  return (
    <section className="bg-white dark:bg-dark pt-20 pb-10 lg:pt-[120px] lg:pb-20">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 xl:w-8/12">
            <div>
              <div className="bg-white dark:bg-dark-2 mb-10 overflow-hidden rounded-[10px] border border-stroke dark:border-dark-3 shadow-testimonial-6 dark:shadow-box-dark p-10">
                <h4 className="mb-[5px] text-2xl font-semibold text-dark dark:text-white">
                  Order #15478
                </h4>
                <p className="text-body-color dark:text-dark-6 mb-9">
                  21st Mart 2021 at 10:34 PM
                </p>
                <div className="mb-8 max-w-full overflow-x-auto border-b border-stroke dark:border-dark-3">
                  <table className="w-full table-auto">
                    <thead className="rounded-md border border-blue">
                      <tr className="border border-stroke dark:border-dark-3 bg-gray-1 dark:bg-dark-2 text-left rounded-md">
                        <th className="min-w-[370px] py-[10px] px-6 text-base font-medium text-dark dark:text-white">
                          Product Details
                        </th>
                        <th className="min-w-[120px] py-[10px] px-4 text-base font-medium text-dark dark:text-white">
                          Quantity
                        </th>
                        <th className="min-w-[120px] py-[10px] px-4 text-base font-medium text-dark dark:text-white">
                          Price
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <ProductItem
                        img="https://cdn-tailgrids.b-cdn.net/1.0/assets/images/ecommerce/order-summaries/order-summary-01/image-01.jpg"
                        link="/#"
                        title="Mist black triblend"
                        color="White"
                        size="Medium"
                        number="01"
                        price="$120.00"
                      />
                      <ProductItem
                        img="https://cdn-tailgrids.b-cdn.net/1.0/assets/images/ecommerce/order-summaries/order-summary-01/image-02.jpg"
                        link="/#"
                        title="Awesome pest color t-shirt"
                        color="White"
                        size="Medium"
                        number="01"
                        price="$120.00"
                      />
                      <ProductItem
                        img="https://cdn-tailgrids.b-cdn.net/1.0/assets/images/ecommerce/order-summaries/order-summary-01/image-03.jpg"
                        link="/#"
                        title="Yellow t-shirt"
                        color="Yellow"
                        size="Medium"
                        number="01"
                        price="$90.00"
                      />
                    </tbody>
                  </table>
                </div>
                <div className="px-8">
                  <div className="ml-auto w-full max-w-[360px]">
                    <div className="space-y-4">
                      <p className="flex justify-between text-base text-dark dark:text-white">
                        <span> Subtotal </span>
                        <span className="font-medium">$108 </span>
                      </p>
                      <p className="flex justify-between text-base text-dark dark:text-white">
                        <span> Shipping Cost </span>
                        <span className="font-medium"> $10.85 </span>
                      </p>
                      <p className="flex justify-between text-base text-dark dark:text-white">
                        <span> Discount </span>
                        <span className="font-medium"> $9.00 </span>
                      </p>
                    </div>
                    <div className="mt-6 border-t border-stroke dark:border-dark-3 pt-6">
                      <p className="flex justify-between text-base text-dark dark:text-white">
                        <span> Total Payable </span>
                        <span className="font-medium"> $88.15 </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="w-full px-4 xl:w-4/12">
            <div>
              <div className="bg-white dark:bg-dark-2 shadow-testimonial-6 dark:shadow-box-dark overflow-hidden rounded-[10px] border border-stroke dark:border-dark-3 p-10">
                <h3 className="mb-8 text-xl font-semibold text-dark dark:text-white xl:text-2xl">
                  Customer
                </h3>
                <div className="mb-8 flex items-center">
                  <div className="mr-5 h-20 w-full max-w-[80px] rounded-sm overflow-hidden">
                    <img
                      src="https://cdn-tailgrids.b-cdn.net/1.0/assets/images/ecommerce/order-summaries/order-summary-01/customer.jpg"
                      alt="customer"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-dark dark:text-white mb-1">
                      Willium Deno
                    </h4>
                    <p className="text-body-color dark:text-dark-6 text-base">
                      10 Previous Orders
                    </p>
                  </div>
                </div>
                <div className="space-y-8">
                  <div className="flex">
                    <div className="mr-3 mt-1">
                      <svg 
                        width="20" 
                        height="20" 
                        viewBox="0 0 20 20" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path 
                          d="M10 0.5625C5.6875 0.5625 2.1875 3.9375 2.1875 8.09375C2.1875 11.25 6.375 16.25 8.84375 18.9375C9.15625 19.2813 9.5625 19.4375 10 19.4375C10.4375 19.4375 10.8438 19.25 11.1563 18.9375C13.625 16.25 17.8125 11.25 17.8125 8.09375C17.8125 3.9375 14.3125 0.5625 10 0.5625ZM10.125 18C10.0625 18.0625 9.96875 18.0625 9.875 18C6.84375 14.6875 3.59375 10.375 3.59375 8.09375C3.59375 4.71875 6.46875 1.96875 10 1.96875C13.5313 1.96875 16.4062 4.71875 16.4062 8.09375C16.4062 10.375 13.1563 14.6875 10.125 18Z" 
                          fill="#3758F9"
                        />
                        <path 
                          d="M10 4.90625C8.125 4.90625 6.59375 6.4375 6.59375 8.3125C6.59375 10.1875 8.125 11.75 10 11.75C11.875 11.75 13.4062 10.2188 13.4062 8.34375C13.4062 6.46875 11.875 4.90625 10 4.90625ZM10 10.3437C8.875 10.3437 8 9.4375 8 8.34375C8 7.25 8.90625 6.34375 10 6.34375C11.0937 6.34375 12 7.25 12 8.34375C12 9.4375 11.125 10.3437 10 10.3437Z" 
                          fill="#3758F9"
                        />
                      </svg>
                    </div>
                    <div>
                      <h5 className="mb-[5px] text-lg font-semibold text-dark dark:text-white">
                        Shipping Address
                      </h5>
                      <p className="text-body-color dark:text-dark-6 text-base">
                        New York, USA 2707 Davis Avenue
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mr-3 mt-1">
                      <svg 
                        width="20" 
                        height="20" 
                        viewBox="0 0 20 20" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path 
                          d="M10 0.5625C5.6875 0.5625 2.1875 3.9375 2.1875 8.09375C2.1875 11.25 6.375 16.25 8.84375 18.9375C9.15625 19.2813 9.5625 19.4375 10 19.4375C10.4375 19.4375 10.8438 19.25 11.1563 18.9375C13.625 16.25 17.8125 11.25 17.8125 8.09375C17.8125 3.9375 14.3125 0.5625 10 0.5625ZM10.125 18C10.0625 18.0625 9.96875 18.0625 9.875 18C6.84375 14.6875 3.59375 10.375 3.59375 8.09375C3.59375 4.71875 6.46875 1.96875 10 1.96875C13.5313 1.96875 16.4062 4.71875 16.4062 8.09375C16.4062 10.375 13.1563 14.6875 10.125 18Z" 
                          fill="#3758F9"
                        />
                        <path 
                          d="M10 4.90625C8.125 4.90625 6.59375 6.4375 6.59375 8.3125C6.59375 10.1875 8.125 11.75 10 11.75C11.875 11.75 13.4062 10.2188 13.4062 8.34375C13.4062 6.46875 11.875 4.90625 10 4.90625ZM10 10.3437C8.875 10.3437 8 9.4375 8 8.34375C8 7.25 8.90625 6.34375 10 6.34375C11.0937 6.34375 12 7.25 12 8.34375C12 9.4375 11.125 10.3437 10 10.3437Z" 
                          fill="#3758F9"
                        />
                      </svg>
                    </div>
                    <div>
                      <h5 className="mb-[5px] text-lg font-semibold text-dark dark:text-white">
                        Shipping Address
                      </h5>
                      <p className="text-body-color dark:text-dark-6 text-base">
                        New York, USA 2707 Davis Avenue
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mr-3 mt-1">
                      <svg 
                        width="20" 
                        height="20" 
                        viewBox="0 0 20 20" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path 
                          d="M17.5 3H2.5C1.4375 3 0.53125 3.875 0.53125 4.96875V15.0937C0.53125 16.1562 1.40625 17.0625 2.5 17.0625H17.5C18.5625 17.0625 19.4687 16.1875 19.4687 15.0937V4.9375C19.4687 3.875 18.5625 3 17.5 3ZM17.5 4.40625C17.5312 4.40625 17.5625 4.40625 17.5937 4.40625L10 9.28125L2.40625 4.40625C2.4375 4.40625 2.46875 4.40625 2.5 4.40625H17.5ZM17.5 15.5938H2.5C2.1875 15.5938 1.9375 15.3438 1.9375 15.0312V5.78125L9.25 10.4687C9.46875 10.625 9.71875 10.6875 9.96875 10.6875C10.2187 10.6875 10.4687 10.625 10.6875 10.4687L18 5.78125V15.0625C18.0625 15.375 17.8125 15.5938 17.5 15.5938Z" 
                          fill="#3758F9"
                        />
                      </svg>                        
                    </div>
                    <div>
                      <h5 className="mb-[5px] text-lg font-semibold text-dark dark:text-white">
                        Email Address
                      </h5>
                      <p className="text-body-color dark:text-dark-6 text-base">
                        contact@yourmail.com
                      </p>
                    </div>
                  </div>
                  <button className="bg-primary mr-5 mb-5 flex w-full items-center justify-center rounded-md py-[13px] px-8 text-center text-base font-medium text-white hover:bg-blue-dark">
                    Edit Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSummary;

const ProductItem = ({ img, link, title, color, size, number, price }) => {
  return (
    <tr>
      <td className="border-stroke dark:border-dark-3 border-t py-6 pr-4 pl-5 sm:pl-6">
        <div className="flex items-center">
          <img
            src={img}
            alt="product"
            className="mr-5 h-[60px] w-[60px] rounded-sm"
          />
          <div>
            <a
              href={link}
              className="hover:text-primary inline-block text-base font-medium text-dark dark:text-white mb-[5px]"
            >
              {title}
            </a>
            <p className="text-body-color dark:text-dark-6 flex flex-wrap text-sm">
              <span className="mr-6"> Color: {color} </span>
              <span> Size: {size} </span>
            </p>
          </div>
        </div>
      </td>
      <td className="border-stroke dark:border-dark-3 border-t px-4 py-6">
        <p className="text-base font-medium text-dark dark:text-white">{number}</p>
      </td>
      <td className="border-stroke dark:border-dark-3 border-t p-4">
        <p className="text-base font-medium text-dark dark:text-white">{price}</p>
      </td>
    </tr>
  );
};
