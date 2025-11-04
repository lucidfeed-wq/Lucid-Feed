import React from "react";

const Pricing5 = () => {
  return (
    <section className="bg-white py-20 dark:bg-dark lg:py-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="relative z-10 overflow-hidden rounded-xl bg-white p-11 shadow-pricing-3 dark:bg-dark-2">
              <div className="w-full overflow-x-auto">
                <table className="table-auto">
                  <thead>
                    <tr>
                      <th className="w-1/4 min-w-[200px] px-5"></th>
                      <PricingTopItem
                        type="Starter"
                        price="$59"
                        subscription="Per Month"
                        subtitle="Best suited for freelancers who works individually."
                        button="Purchase Now"
                        buttonLink="/#"
                      />
                      <PricingTopItem
                        type="Agency"
                        price="$99"
                        subscription="Per Month"
                        subtitle="Best suited for freelancers who works individually."
                        button="Purchase Now"
                        buttonLink="/#"
                        active
                      />
                      <PricingTopItem
                        type="Extended"
                        price="$149"
                        subscription="Per Month"
                        subtitle="Best suited for freelancers who works individually."
                        button="Purchase Now"
                        buttonLink="/#"
                      />
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <PricingListTItle>Key Features</PricingListTItle>
                      <PricingListTItle styles="text-center">
                        Features Limits
                      </PricingListTItle>
                      <PricingListTItle styles="text-center">
                        Features Limits
                      </PricingListTItle>
                      <PricingListTItle styles="text-center">
                        Features Limits
                      </PricingListTItle>
                    </tr>
                    <tr>
                      <PricingData>Seats</PricingData>
                      <PricingData styles="text-center">
                        1 Developer
                      </PricingData>
                      <PricingData styles="text-center">
                        5 Developer
                      </PricingData>
                      <PricingData styles="text-center">
                        20 Developer
                      </PricingData>
                    </tr>
                    <tr>
                      <PricingData>Domains/Products</PricingData>
                      <PricingData styles="text-center">5 Products</PricingData>
                      <PricingData styles="text-center">5 Products</PricingData>
                      <PricingData styles="text-center">5 Products</PricingData>
                    </tr>
                    <tr>
                      <PricingData>Email Support</PricingData>
                      <PricingData styles="text-center">6 Months</PricingData>
                      <PricingData styles="text-center">6 Months</PricingData>
                      <PricingData styles="text-center">6 Months</PricingData>
                    </tr>
                    <tr>
                      <PricingData>All Pro Components</PricingData>
                      <CheckedData />
                      <CheckedData />
                      <CheckedData />
                    </tr>
                    <tr>
                      <PricingData>Design Source Files</PricingData>
                      <NotCheckedData />
                      <CheckedData />
                      <CheckedData />
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <span className="absolute left-0 top-0 z-[-1]">
                  <svg
                    width="213"
                    height="188"
                    viewBox="0 0 213 188"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="75"
                      cy="50"
                      r="138"
                      fill="url(#paint0_linear)"
                    ></circle>
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="75"
                        y1="-88"
                        x2="75"
                        y2="188"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#3056D3" stopOpacity="0.15"></stop>
                        <stop
                          offset="1"
                          stopColor="#C4C4C4"
                          stopOpacity="0"
                        ></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span className="absolute left-11 top-[120px] z-[-1]">
                  <svg
                    width="50"
                    height="109"
                    viewBox="0 0 50 109"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="47.71"
                      cy="107.259"
                      r="1.74121"
                      transform="rotate(180 47.71 107.259)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="47.71"
                      cy="91.9355"
                      r="1.74121"
                      transform="rotate(180 47.71 91.9355)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="47.71"
                      cy="76.6133"
                      r="1.74121"
                      transform="rotate(180 47.71 76.6133)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="47.71"
                      cy="47.0132"
                      r="1.74121"
                      transform="rotate(180 47.71 47.0132)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="47.71"
                      cy="16.7158"
                      r="1.74121"
                      transform="rotate(180 47.71 16.7158)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="47.71"
                      cy="61.6392"
                      r="1.74121"
                      transform="rotate(180 47.71 61.6392)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="47.71"
                      cy="32.0386"
                      r="1.74121"
                      transform="rotate(180 47.71 32.0386)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="47.71"
                      cy="1.74121"
                      r="1.74121"
                      transform="rotate(180 47.71 1.74121)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="32.3877"
                      cy="107.259"
                      r="1.74121"
                      transform="rotate(180 32.3877 107.259)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="32.3877"
                      cy="91.9355"
                      r="1.74121"
                      transform="rotate(180 32.3877 91.9355)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="32.3877"
                      cy="76.6133"
                      r="1.74121"
                      transform="rotate(180 32.3877 76.6133)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="32.3877"
                      cy="47.0132"
                      r="1.74121"
                      transform="rotate(180 32.3877 47.0132)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="32.3877"
                      cy="16.7158"
                      r="1.74121"
                      transform="rotate(180 32.3877 16.7158)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="32.3877"
                      cy="61.6392"
                      r="1.74121"
                      transform="rotate(180 32.3877 61.6392)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="32.3877"
                      cy="32.0386"
                      r="1.74121"
                      transform="rotate(180 32.3877 32.0386)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="32.3877"
                      cy="1.74121"
                      r="1.74121"
                      transform="rotate(180 32.3877 1.74121)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="17.0654"
                      cy="107.259"
                      r="1.74121"
                      transform="rotate(180 17.0654 107.259)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="17.0654"
                      cy="91.9355"
                      r="1.74121"
                      transform="rotate(180 17.0654 91.9355)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="17.0654"
                      cy="76.6133"
                      r="1.74121"
                      transform="rotate(180 17.0654 76.6133)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="17.0654"
                      cy="47.0132"
                      r="1.74121"
                      transform="rotate(180 17.0654 47.0132)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="17.0654"
                      cy="16.7158"
                      r="1.74121"
                      transform="rotate(180 17.0654 16.7158)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="17.0654"
                      cy="61.6392"
                      r="1.74121"
                      transform="rotate(180 17.0654 61.6392)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="17.0654"
                      cy="32.0386"
                      r="1.74121"
                      transform="rotate(180 17.0654 32.0386)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="17.0654"
                      cy="1.74121"
                      r="1.74121"
                      transform="rotate(180 17.0654 1.74121)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="1.74121"
                      cy="107.259"
                      r="1.74121"
                      transform="rotate(180 1.74121 107.259)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="1.74121"
                      cy="91.9355"
                      r="1.74121"
                      transform="rotate(180 1.74121 91.9355)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="1.74121"
                      cy="76.6133"
                      r="1.74121"
                      transform="rotate(180 1.74121 76.6133)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="1.74121"
                      cy="47.0132"
                      r="1.74121"
                      transform="rotate(180 1.74121 47.0132)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="1.74121"
                      cy="16.7158"
                      r="1.74121"
                      transform="rotate(180 1.74121 16.7158)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="1.74121"
                      cy="61.6392"
                      r="1.74121"
                      transform="rotate(180 1.74121 61.6392)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="1.74121"
                      cy="32.0386"
                      r="1.74121"
                      transform="rotate(180 1.74121 32.0386)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="1.74121"
                      cy="1.74121"
                      r="1.74121"
                      transform="rotate(180 1.74121 1.74121)"
                      fill="#3056D3"
                    ></circle>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing5;

const PricingTopItem = ({
  active,
  type,
  price,
  subscription,
  subtitle,
  buttonLink,
  button,
}) => {
  return (
    <th className="w-1/4 min-w-[200px] px-5 xl:pt-6">
      <div className="mb-10 text-left">
        <span className="mb-[18px] text-lg font-medium text-dark dark:text-white">
          {type}
        </span>
        <h4 className="mb-3 text-[28px] font-bold text-dark dark:text-white lg:text-[32px]">
          <span className="pr-2"> {price} </span>
          <span className="text-base font-medium text-body-color dark:text-dark-6">
            {subscription}
          </span>
        </h4>
        <p className="mb-6 text-sm font-normal text-body-color dark:text-dark-6">
          {subtitle}
        </p>
        <a
          href={buttonLink}
          className={`block w-full rounded-md p-3 text-center text-base font-medium text-white transition ${
            active ? "bg-secondary hover:bg-secondary/90" : "bg-primary hover:bg-primary/90"
          }`}
        >
          {button}
        </a>
      </div>
    </th>
  );
};

const CheckedData = () => {
  return (
    <td className="border-t border-[#EEEEEE] px-5 py-5 dark:border-dark-3">
      <p className="flex justify-center text-center text-base text-body-color">
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.5 24.5312C5.85937 24.5312 0.507812 19.1406 0.507812 12.5C0.507812 5.85937 5.85937 0.507812 12.5 0.507812C19.1406 0.507812 24.5312 5.85937 24.5312 12.5C24.5312 19.1406 19.1406 24.5312 12.5 24.5312ZM12.5 1.875C6.64062 1.875 1.875 6.64062 1.875 12.5C1.875 18.3594 6.64062 23.1641 12.5 23.1641C18.3594 23.1641 23.1641 18.3594 23.1641 12.5C23.1641 6.64062 18.3594 1.875 12.5 1.875Z"
            fill="#13C296"
          />
          <path
            d="M11.1719 15.2344C10.8984 15.2344 10.6641 15.1562 10.4297 14.9609L7.85156 12.4609C7.57812 12.1875 7.57812 11.7578 7.85156 11.4844C8.125 11.2109 8.55469 11.2109 8.82813 11.4844L11.1719 13.7891L16.1719 8.94531C16.4453 8.67187 16.875 8.67187 17.1484 8.94531C17.4219 9.21875 17.4219 9.64844 17.1484 9.92188L11.9531 15C11.6797 15.1563 11.4063 15.2344 11.1719 15.2344Z"
            fill="#13C296"
          />
        </svg>
      </p>
    </td>
  );
};
const NotCheckedData = () => {
  return (
    <td className="border-t border-[#EEEEEE] px-5 py-5 dark:border-dark-3">
      <p className="flex justify-center text-center text-base text-body-color">
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.4797 0C5.56911 0 0 5.56911 0 12.4797C0 19.3902 5.56911 25 12.4797 25C19.3902 25 25 19.3902 25 12.4797C25 5.56911 19.3902 0 12.4797 0ZM12.4797 23.5772C6.38211 23.5772 1.42276 18.5772 1.42276 12.4797C1.42276 6.38211 6.38211 1.42276 12.4797 1.42276C18.5772 1.42276 23.5772 6.38211 23.5772 12.4797C23.5772 18.5772 18.5772 23.5772 12.4797 23.5772Z"
            fill="#FF9494"
          ></path>
          <path
            d="M16.2204 8.73978C15.9359 8.45523 15.4887 8.45523 15.2042 8.73978L12.4806 11.4634L9.75702 8.73978C9.47247 8.45523 9.02531 8.45523 8.74076 8.73978C8.45621 9.02433 8.45621 9.47149 8.74076 9.75604L11.4643 12.4796L8.74076 15.2032C8.45621 15.4878 8.45621 15.9349 8.74076 16.2195C8.86271 16.3414 9.06596 16.4227 9.22856 16.4227C9.39117 16.4227 9.59442 16.3414 9.71637 16.2195L12.4399 13.4959L15.1635 16.2195C15.2855 16.3414 15.4887 16.4227 15.6513 16.4227C15.8139 16.4227 16.0172 16.3414 16.1391 16.2195C16.4237 15.9349 16.4237 15.4878 16.1391 15.2032L13.4969 12.4796L16.2204 9.75604C16.4643 9.47149 16.4643 9.02433 16.2204 8.73978Z"
            fill="#FF9494"
          ></path>
        </svg>
      </p>
    </td>
  );
};

const PricingListTItle = ({ children, styles }) => {
  return (
    <td className="border-t border-[#EEEEEE] px-5 py-5 dark:border-dark-3">
      <h5
        className={`text-base font-medium text-dark dark:text-white ${styles}`}
      >
        {children}
      </h5>
    </td>
  );
};

const PricingData = ({ styles, children }) => {
  return (
    <td className="border-t border-[#EEEEEE] px-5 py-5 dark:border-dark-3">
      <p className={`text-base text-body-color dark:text-dark-6 ${styles}`}>
        {children}
      </p>
    </td>
  );
};
