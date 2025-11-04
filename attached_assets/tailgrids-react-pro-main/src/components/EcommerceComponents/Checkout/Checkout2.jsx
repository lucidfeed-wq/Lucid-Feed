import React, { useState } from "react";

const Checkout2 = () => {
  return (
    <section className="bg-gray-2 pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <div className="mb-10 overflow-hidden rounded-[10px] border border-stroke bg-white p-8 shadow-testimonial-6 dark:border-dark-3 dark:bg-dark-2 dark:shadow-box-dark">
              <div className="mb-4 border-b border-stroke pb-4 dark:border-dark-3">
                <h3 className="mb-2 text-lg font-semibold text-dark dark:text-white">
                  Shopping Cart
                </h3>
                <p className="text-sm text-body-color dark:text-dark-6">
                  You have 3 items in your cart
                </p>
              </div>

              <div className="border-b border-stroke pb-6 dark:border-dark-3">
                <CartItem
                  img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/checkout/checkout-02/image-01.jpg"
                  title="Hollow Port"
                  subtitle="Blue jeans pant for man"
                  price="$36.00"
                />
                <CartItem
                  img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/checkout/checkout-02/image-02.jpg"
                  title="Mist Black Triblend"
                  subtitle="Awesome white shirt"
                  price="$36.00"
                />
                <CartItem
                  img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/checkout/checkout-02/image-03.jpg"
                  title="Realm Bone "
                  subtitle="It's a nice black t-shirt"
                  price="$36.00"
                />
              </div>

              <div className="-mx-1 border-b border-stroke pb-5 pt-6 dark:border-dark-3">
                <div className="mb-4 flex items-center justify-between">
                  <div className="px-1">
                    <p className="text-base text-dark dark:text-white">Subtotal</p>
                  </div>
                  <div className="px-1">
                    <p className="text-base font-medium text-dark dark:text-white">
                      $108
                    </p>
                  </div>
                </div>
                <div className="mb-4 flex items-center justify-between">
                  <div className="px-1">
                    <p className="text-base text-dark dark:text-white">
                      Shipping Cost (+)
                    </p>
                  </div>
                  <div className="px-1">
                    <p className="text-base font-medium text-dark dark:text-white">
                      $10.85
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="px-1">
                    <p className="text-base text-dark dark:text-white">
                      Discount (-)
                    </p>
                  </div>
                  <div className="px-1">
                    <p className="text-base font-medium text-dark dark:text-white">
                      $9.00
                    </p>
                  </div>
                </div>
              </div>
              <div className="-mx-1 flex items-center justify-between pb-6 pt-5">
                <div className="px-1">
                  <p className="text-base text-dark dark:text-white">
                    Total Payable
                  </p>
                </div>
                <div className="px-1">
                  <p className="text-base font-medium text-dark dark:text-white">
                    $88.15
                  </p>
                </div>
              </div>

              <div className="mb-3">
                <button
                  href="/#"
                  className="flex w-full items-center justify-center rounded-md bg-primary px-10 py-3 text-center text-base font-medium text-white hover:bg-blue-dark"
                >
                  Place Order
                </button>
              </div>
              <div>
                <p className="text-sm text-body-color dark:text-dark-6">
                  By placing your order, you agree to our company{" "}
                  <a
                    href="/#"
                    className="text-primary hover:underline"
                  >
                    Privacy Policy
                  </a>
                  <span className="px-0.5"> and </span>
                  <a
                    href="/#"
                    className="text-primary hover:underline"
                  >
                    Conditions of Use
                  </a>
                </p>
              </div>
            </div>

            <div className="mb-10 overflow-hidden rounded-[10px] border border-stroke bg-white px-8 pb-8 pt-6 shadow-testimonial-6 dark:border-dark-3 dark:bg-dark-2 dark:shadow-box-dark">
              <div className="mb-8 border-b border-stroke pb-4 dark:border-dark-3">
                <h3 className="mb-2 text-lg font-semibold text-dark dark:text-white">
                  Coupon Code
                </h3>
                <p className="text-sm text-body-color dark:text-dark-6">
                  Enter code to get discount instantly
                </p>
              </div>

              <form className="relative">
                <input
                  type="text"
                  placeholder="Coupon code"
                  className="w-full rounded-lg border border-stroke bg-transparent py-3 pl-5 pr-20 font-medium text-body-color outline-hidden transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD] dark:border-dark-3 dark:text-dark-6"
                />
                <button className="absolute right-2 top-1/2 mb-3 h-[34px] -translate-y-1/2 rounded-sm bg-dark px-5 text-sm font-medium text-white transition hover:bg-dark/90">
                  Apply
                </button>
              </form>
            </div>
          </div>

          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div className="mb-10 overflow-hidden rounded-[10px] border border-stroke bg-white px-5 py-8 shadow-testimonial-6 dark:border-dark-3 dark:bg-dark-2 dark:shadow-box-dark xl:p-9">
              <FormStep title="Your Personal Details">
                <InputGroup
                  labelTitle="First Name"
                  type="text"
                  placeholder="First Name"
                />
                <InputGroup
                  labelTitle="Last Name"
                  type="text"
                  placeholder="Last Name"
                />
                <InputGroup
                  labelTitle="Email Address"
                  type="email"
                  placeholder="Email Address"
                />
                <InputGroup
                  labelTitle="Phone"
                  type="text"
                  placeholder="Enter your Phone"
                />
                <InputGroup
                  fullColumn
                  labelTitle="Mailing Address"
                  type="text"
                  placeholder="Mailing Address"
                />
                <InputGroup labelTitle="City" type="text" placeholder="City" />
                <InputGroup
                  labelTitle="Post Code"
                  type="text"
                  placeholder="Post Code"
                />
                <InputGroup
                  labelTitle="Country"
                  type="text"
                  placeholder="Country"
                />
                <SelectGroup labelTitle="Region/State" />
                <CheckboxGroup labelTitle="My delivery and mailing addresses are the same." />
                <div className="w-full px-3">
                  <button className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-[10px] text-center text-sm font-semibold text-white hover:bg-primary/90">
                    Next Step
                  </button>
                </div>
              </FormStep>

              <FormStep title="Shipping Address">
                <InputGroup
                  labelTitle="First Name"
                  type="text"
                  placeholder="First Name"
                />
                <InputGroup
                  labelTitle="Last Name"
                  type="text"
                  placeholder="Last Name"
                />
                <InputGroup
                  labelTitle="Email Address"
                  type="email"
                  placeholder="Email Address"
                />
                <InputGroup
                  labelTitle="Phone"
                  type="text"
                  placeholder="Enter your Phone"
                />
                <InputGroup
                  fullColumn
                  labelTitle="Mailing Address"
                  type="text"
                  placeholder="Mailing Address"
                />
                <InputGroup labelTitle="City" type="text" placeholder="City" />
                <InputGroup
                  labelTitle="Post Code"
                  type="text"
                  placeholder="Post Code"
                />
                <InputGroup
                  labelTitle="Country"
                  type="text"
                  placeholder="Country"
                />
                <SelectGroup labelTitle="Region/State" />
                <div className="w-full px-3">
                  <div className="-mx-3 flex flex-wrap items-center">
                    <ShippingOption
                      name="shipping"
                      id="one"
                      img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/checkout/checkout-02/fedex-express.svg"
                      price="$12.50"
                      title="Standard Shipping"
                    />
                    <ShippingOption
                      name="shipping"
                      id="two"
                      img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/checkout/checkout-02/dhl-express.svg"
                      price="$12.50"
                      title="Standard Shipping"
                    />
                  </div>
                </div>
                <div className="w-full px-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <button className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-[10px] text-center text-sm font-semibold text-white hover:bg-primary/90">
                      Previous
                    </button>
                    <button className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-[10px] text-center text-sm font-semibold text-white hover:bg-primary/90">
                      Save & Continue
                    </button>
                  </div>
                </div>
              </FormStep>

              <FormStep title="Payment Info">
                <InputGroup
                  fullColumn
                  labelTitle="Cardholder Name"
                  type="text"
                  placeholder="Cardholder Name"
                />
                <InputGroup
                  fullColumn
                  cardNumber
                  labelTitle="Card Number"
                  type="text"
                  placeholder="0000 0000 0000 0000"
                />
                <div className="-mx-3 w-full px-3 md:w-1/3">
                  <InputGroup
                    fullColumn
                    labelTitle="Expiration"
                    type="text"
                    placeholder="MM"
                  />
                </div>
                <div className="-mx-3 w-full self-end px-3 md:w-1/3">
                  <InputGroup fullColumn type="text" placeholder="YYYY" />
                </div>
                <div className="-ml-3 w-full px-3 md:w-1/3">
                  <InputGroup
                    fullColumn
                    labelTitle="CVC/CVV"
                    type="text"
                    placeholder="CVC/CVV"
                  />
                </div>
                <div className="w-full px-3">
                  <button className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-[10px] text-center text-sm font-semibold text-white hover:bg-primary/90">
                    Pay Now
                  </button>
                </div>
              </FormStep>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout2;

const CartItem = ({ img, title, subtitle, price }) => {
  return (
    <div className="-mx-1 flex items-center justify-between py-4">
      <div className="flex items-center px-1">
        <div className="mr-4 h-12 w-full max-w-[48px] overflow-hidden rounded-sm">
          <img src={img} alt="product image" className="w-full" />
        </div>
        <div>
          <p className="mb-0.5 text-base font-medium text-dark dark:text-white">
            {title}
          </p>
          <p className="truncate text-sm text-body-color dark:text-dark-6">
            {subtitle}
          </p>
        </div>
      </div>
      <div className="px-1">
        <p className="text-base font-medium text-dark dark:text-white">{price}</p>
      </div>
    </div>
  );
};

const InputGroup = ({
  labelTitle,
  type,
  placeholder,
  fullColumn,
  cardNumber,
}) => {
  return (
    <div className={`${fullColumn ? "w-full px-3" : "w-full px-3 md:w-1/2"}`}>
      <div className="mb-6">
        {labelTitle && (
          <label className="mb-2.5 block text-base font-medium text-dark dark:text-white">
            {labelTitle}
          </label>
        )}
        <div className="relative">
          <input
            type={type}
            placeholder={placeholder}
            className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 font-medium text-body-color outline-hidden transition placeholder:text-dark-5 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD] dark:border-dark-3 dark:text-dark-6"
          />
          {cardNumber && (
            <span className="absolute right-5 top-1/2 -translate-y-1/2">
              <svg
                width="60"
                height="10"
                viewBox="0 0 60 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M53.617 1.03516H49.1125V8.96614H53.617V1.03516Z"
                  fill="#F26122"
                ></path>
                <path
                  d="M49.6008 4.99991C49.5922 3.4701 50.3068 2.02137 51.5378 1.06982C49.4309 -0.542193 46.4047 -0.308103 44.5861 1.60748C42.7675 3.52315 42.7675 6.47691 44.5861 8.39258C46.4047 10.308 49.4309 10.5423 51.5378 8.93006C50.3068 7.97869 49.5922 6.52997 49.6008 4.99991Z"
                  fill="#EA1D25"
                ></path>
                <path
                  d="M59.8542 4.99987C59.8524 6.91413 58.7293 8.65997 56.9598 9.49664C55.1909 10.3333 53.0859 10.1145 51.5378 8.93291C53.7674 7.22479 54.1531 4.08261 52.4008 1.91136C52.1493 1.5969 51.8598 1.31348 51.5378 1.06725C53.0859 -0.114461 55.1909 -0.333395 56.9598 0.503353C58.7293 1.34011 59.8524 3.08592 59.8542 4.99987Z"
                  fill="#F69E1E"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22.3133 6.76452C22.3197 5.16311 20.9958 4.4717 19.968 3.93446C19.3175 3.59473 18.7857 3.31687 18.7857 2.90986C18.7857 2.56295 19.1224 2.19564 19.839 2.1008C20.6909 2.01676 21.5504 2.1656 22.3235 2.53176L22.7663 0.430964C22.0122 0.14886 21.2131 0.00300476 20.4076 0C17.9224 0 16.1952 1.3235 16.1952 3.21421C16.1952 4.61152 17.4485 5.38882 18.3963 5.85096C19.3441 6.31317 19.7126 6.63849 19.7018 7.05865C19.7018 7.70991 18.923 8.00397 18.1962 8.01477C17.2999 8.0262 16.4156 7.80952 15.6266 7.38453L15.1737 9.48532C16.0662 9.83287 17.0172 10.0076 17.9752 9.99975C20.6178 9.99975 22.3559 8.69722 22.3661 6.68048L22.3133 6.76452ZM15.4793 0.168667L13.3734 9.88451H10.8463L12.9522 0.168667H15.4793ZM26.0728 6.4704L27.3992 2.82588L28.1685 6.4704H26.0728ZM31.2221 9.91628H28.8844L28.5788 8.46675H25.4096L24.8931 9.91628H22.2396L26.02 0.914144C26.1941 0.485583 26.6089 0.204076 27.0733 0.199877H29.1792L31.2221 9.91628ZM7.84476 9.85269L11.9307 0.136853H9.19278L6.57107 6.7435L5.51783 1.12422C5.42444 0.552805 4.92895 0.134452 4.34896 0.136853H0.0635294L0 0.420157C0.8595 0.58822 1.69485 0.863127 2.48511 1.23946C2.82179 1.39732 3.04985 1.72085 3.08543 2.09057L5.09666 9.85269H7.84476Z"
                  fill="#212B36"
                ></path>
              </svg>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const SelectGroup = ({ fullColumn, labelTitle }) => {
  return (
    <div className={`${fullColumn ? "w-full px-3" : "w-full px-3 md:w-1/2"}`}>
      <div className="mb-6">
        <label className="mb-2.5 block text-base font-medium text-dark dark:text-white">
          {labelTitle}
        </label>
        <div className="relative">
          <select className="w-full appearance-none rounded-md border border-stroke bg-transparent px-5 py-3 font-medium text-dark-5 outline-hidden transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD] dark:border-dark-3">
            <option value="">Option</option>
            <option value="">Option</option>
            <option value="">Option</option>
          </select>
          <span className="absolute right-4 top-1/2 mt-[-2px] h-[10px] w-[10px] -translate-y-1/2 rotate-45 border-b-2 border-r-2 border-body-color dark:border-dark-6"></span>
        </div>
      </div>
    </div>
  );
};

const FormStep = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="mb-6 overflow-hidden rounded-md border border-stroke dark:border-dark-3">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-5 py-4 xl:px-8"
      >
        <span className="text-lg font-semibold text-dark dark:text-white">
          {title}
        </span>
        <span
          className={`text-body-color dark:text-dark-6 ${open && "rotate-180"}`}
        >
          <svg
            width="16"
            height="8"
            viewBox="0 0 16 8"
            className="fill-current"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.249946 1.42237L6.79504 7.57672L6.80132 7.58248C7.12214 7.87122 7.51003 8 7.89233 8C8.29531 8 8.67847 7.83258 8.9834 7.55814L15.5344 1.42264L15.539 1.41812C15.8326 1.12446 15.9148 0.607154 15.5634 0.255739C15.2711 -0.0365603 14.7572 -0.119319 14.4059 0.226496L7.89233 6.35117L1.36851 0.216817L1.36168 0.21097C1.04167 -0.0633254 0.541712 -0.0646794 0.221294 0.255739L0.21069 0.266343L0.20093 0.27773C-0.0733652 0.59774 -0.0747181 1.0977 0.2457 1.41812L0.249946 1.42237ZM15.3914 0.916253C15.3713 0.998351 15.3276 1.07705 15.2629 1.14175L8.72219 7.26758C8.47813 7.48723 8.18526 7.60926 7.89239 7.60926C7.59952 7.60926 7.30666 7.51164 7.0626 7.29199L0.521876 1.14175C0.406459 1.02633 0.369015 0.86636 0.402021 0.722033C0.368915 0.866425 0.406335 1.02652 0.521818 1.142L7.06254 7.29224C7.3066 7.51189 7.59947 7.60951 7.89233 7.60951C8.1852 7.60951 8.47807 7.48748 8.72213 7.26783L15.2628 1.142C15.3276 1.07723 15.3713 0.99844 15.3914 0.916253Z"
            ></path>
          </svg>
        </span>
      </button>
      <div
        className={`${
          !open && "hidden"
        } border-t border-stroke px-4 pb-8 pt-6 dark:border-dark-3 lg:px-5 xl:px-8`}
      >
        <form>
          <div className="-mx-3 flex flex-wrap">{children}</div>
        </form>
      </div>
    </div>
  );
};

const ShippingOption = ({ name, id, img, price, title }) => {
  return (
    <div className="mb-4 w-full px-3 md:w-1/2 lg:w-full xl:w-1/2">
      <input type="radio" name={name} id={id} className="shipping sr-only" />
      <label
        htmlFor={id}
        className="flex cursor-pointer items-center overflow-hidden rounded-md border border-transparent bg-gray px-4 py-[18px] dark:bg-white/5 xl:px-[22px]"
      >
        <div className="mr-4">
          <img src={img} alt="shipping" />
        </div>
        <div className="border-l border-[#E0E0E0] pl-4 dark:border-dark-3">
          <span className="block text-base font-semibold text-dark dark:text-white">
            {price}
          </span>
          <span className="block text-xs font-medium text-body-color dark:text-dark-6">
            {title}
          </span>
        </div>
      </label>
    </div>
  );
};

const CheckboxGroup = ({ labelTitle }) => {
  return (
    <div className="w-full px-3">
      <div className="mb-7">
        <label
          htmlFor="checkboxLabelTwo"
          className="flex cursor-pointer select-none items-center text-body-color dark:text-dark-6"
        >
          <div className="relative">
            <input type="checkbox" id="checkboxLabelTwo" className="sr-only" />
            <div className="box mr-4 flex h-5 w-5 items-center justify-center rounded-sm bg-primary">
              <span className="opacity-0">
                <svg
                  width="11"
                  height="8"
                  viewBox="0 0 11 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                    fill="white"
                    stroke="white"
                    strokeWidth="0.4"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
          <span className="text-dark dark:text-white">{labelTitle}</span>
        </label>
      </div>
    </div>
  );
};
