import React from "react";

const ShoppingCart4 = () => {
  return (
    <section className="bg-white py-20 lg:py-[120px]">
      <div className="container mx-auto">
        <h2 className="mb-12 text-2xl font-semibold text-black sm:text-3xl md:text-4xl xl:mb-16">
          Shopping cart
        </h2>
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-8/12">
            <div className="mb-5 space-y-10">
              <CartItem
                img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/shopping-carts/shopping-cart-04/image-01.jpg"
                link="/#"
                title="Trendy Skirt Set for Women"
                color="Color: Blue"
                size="Size: S"
                price="$39.50"
                stock
              />
              <CartItem
                img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/shopping-carts/shopping-cart-04/image-02.jpg"
                link="/#"
                title="Trendy Men's Sneakers"
                color="Color: White"
                size="Size: L"
                price="$99.50"
                stock
              />
            </div>
          </div>

          <div className="w-full px-4 lg:w-4/12">
            <div className="2xl:pl-8">
              <div>
                <h3 className="mb-5 text-xl font-bold text-black">
                  Apply Coupon to get discount!
                </h3>
                <form className="flex">
                  <input
                    type="email"
                    className="border-form-stroke text-body-color focus:border-primary mr-3 mb-3 h-[48px] w-full border bg-white px-5 text-base font-medium outline-hidden focus-visible:shadow-none"
                    placeholder="Coupon code"
                  />
                  <button className="bg-primary mb-3 h-[48px] px-6 text-base font-medium text-white transition hover:bg-primary/90">
                    Submit
                  </button>
                </form>
              </div>
              <div className="-mx-1 border-b border-[#e7e7e7] py-7">
                <div className="mb-3 flex items-center justify-between">
                  <div className="px-1">
                    <p className="text-base font-semibold text-black">
                      Subtotal
                    </p>
                  </div>
                  <div className="px-1">
                    <p className="text-base font-semibold text-black">$96.00</p>
                  </div>
                </div>
                <div className="mb-3 flex items-center justify-between">
                  <div className="px-1">
                    <p className="text-base font-medium text-black">
                      Shipping Cost (+)
                    </p>
                  </div>
                  <div className="px-1">
                    <p className="text-base font-semibold text-black">$14.00</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="px-1">
                    <p className="text-base font-medium text-black">
                      Discount (-)
                    </p>
                  </div>
                  <div className="px-1">
                    <p className="text-base font-semibold text-black">$9.00</p>
                  </div>
                </div>
              </div>
              <div className="-mx-1 flex items-center justify-between pt-5 pb-6">
                <div className="px-1">
                  <p className="text-base font-medium text-black">
                    Estimated Total
                  </p>
                </div>
                <div className="px-1">
                  <p className="text-base font-semibold text-black">$110.00</p>
                </div>
              </div>
              <div className="mb-5">
                <button className="bg-primary flex w-full items-center justify-center py-[10px] px-10 text-center text-base font-normal text-white hover:bg-primary/90">
                  Checkout
                </button>
              </div>
              <p className="text-body-color text-center text-base font-medium">
                You're $10.05 away from free shipping!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart4;

const CartItem = ({ img, link, title, size, color, price, stock }) => {
  return (
    <div className="justify-between last:border-none border-b border-[#e7e7e7] pb-10 md:flex">
      <div className="mr-7 mb-6 h-[180px] w-full max-w-[150px] md:mb-0">
        <img
          src={img}
          alt="product"
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="flex w-full flex-col justify-between">
        <div className="mb-4 w-full justify-between sm:flex">
          <div className="mr-4 mb-4">
            <h3>
              <a
                href={link}
                className="hover:text-primary block text-lg font-semibold text-black sm:text-xl"
              >
                {title}
              </a>
            </h3>
            <p className="text-body-color text-base font-medium">{color}</p>
            <p className="text-body-color text-base font-medium">{size}</p>
            <p className="text-secondary text-base font-medium">{stock}</p>
          </div>
          <div className="mr-4 mb-4">
            <p className="mb-1 text-base font-medium text-black">Each</p>
            <p className="text-xl font-semibold text-black">{price}</p>
          </div>
          <div className="mr-4">
            <label className="mb-1 block text-base font-medium text-black">
              Quantity
            </label>
            <div className="relative inline-block">
              <select className="border-form-stroke text-body-color focus:border-primary active:border-primary w-full appearance-none border py-1 pl-4 pr-7 text-sm font-semibold outline-hidden transition disabled:cursor-default disabled:bg-[#F5F7FD]">
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
              </select>
              <span className="border-body-color absolute right-4 top-1/2 mt-[-2px] h-2 w-2 -translate-y-1/2 rotate-45 border-r-[1.5px] border-b-[1.5px]"></span>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <button className="border-body-color text-body-color hover:border-primary hover:bg-primary border px-4 py-1 text-sm font-medium transition hover:text-white">
            Edit
          </button>
          <button className="border-body-color text-body-color hover:border-danger hover:bg-danger border px-4 py-1 text-sm font-medium transition hover:text-white">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};
