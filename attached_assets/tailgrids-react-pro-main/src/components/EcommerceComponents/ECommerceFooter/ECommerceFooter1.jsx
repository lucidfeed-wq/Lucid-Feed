import React from "react";

const ECommerceFooter = () => {
  return (
    <>
      <footer className="pt-20 dark:bg-dark lg:pt-[100px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <LinkGroup header="Useful Links">
              <NavLink link="/#" text="SaaS Development" />
              <NavLink link="/#" text="Our Products" />
              <NavLink link="/#" text="User Flow" />
              <NavLink link="/#" text="User Strategy" />
              <NavLink link="/#" text="User Strategy" />
            </LinkGroup>
            <LinkGroup header="Shop">
              <NavLink link="/#" text="SaaS Development" />
              <NavLink link="/#" text="Our Products" />
              <NavLink link="/#" text="User Flow" />
              <NavLink link="/#" text="User Strategy" />
              <NavLink link="/#" text="User Strategy" />
            </LinkGroup>
            <LinkGroup header="My Account">
              <NavLink link="/#" text="About TailGrids" />
              <NavLink link="/#" text="Contact & Support" />
              <NavLink link="/#" text="Success History" />
              <NavLink link="/#" text="Setting & Privacy" />
              <NavLink link="/#" text="Setting & Privacy" />
            </LinkGroup>
            <LinkGroup header="Company">
              <NavLink link="/#" text="About Us" />
              <NavLink link="/#" text="Our Services" />
              <NavLink link="/#" text="Know Our Team" />
              <NavLink link="/#" text="Download App" />
              <NavLink link="/#" text="Download App" />
            </LinkGroup>

            <div className="w-full px-4 sm:w-1/2 md:w-6/12 lg:w-4/12 xl:w-3/12 2xl:w-3/12">
              <div className="mb-14 xl:text-right">
                <h3 className="mb-3 text-xl font-semibold text-dark dark:text-white">
                  Need Help? Call Us Now
                </h3>
                <div>
                  <a
                    href="/#"
                    className="mb-6 block text-lg font-semibold text-dark dark:text-white"
                  >
                    +99 0214 2542 223
                  </a>
                  <p className="mb-[10px] text-base text-body-color dark:text-dark-6">
                    Monday - Friday: 9:00-20:00
                  </p>
                  <p className="mb-[50px] text-base text-body-color dark:text-dark-6">
                    Saturday: 11:00 - 15:00
                  </p>
                </div>
                <div className="flex items-center space-x-[18px] xl:justify-end">
                  <a
                    href="/#"
                    className="inline-block text-body-color hover:text-primary dark:text-dark-6"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-current"
                    >
                      <path
                        d="M17.7753 9.675H15.6753H14.9253V8.925V6.6V5.85H15.6753H17.2503C17.6628 5.85 18.0003 5.55 18.0003 5.1V1.125C18.0003 0.7125 17.7003 0.375 17.2503 0.375H14.5128C11.5503 0.375 9.48779 2.475 9.48779 5.5875V8.85V9.6H8.73779H6.18779C5.66279 9.6 5.17529 10.0125 5.17529 10.6125V13.3125C5.17529 13.8375 5.58779 14.325 6.18779 14.325H8.66279H9.41279V15.075V22.6125C9.41279 23.1375 9.82529 23.625 10.4253 23.625H13.9503C14.1753 23.625 14.3628 23.5125 14.5128 23.3625C14.6628 23.2125 14.7753 22.95 14.7753 22.725V15.1125V14.3625H15.5628H17.2503C17.7378 14.3625 18.1128 14.0625 18.1878 13.6125V13.575V13.5375L18.7128 10.95C18.7503 10.6875 18.7128 10.3875 18.4878 10.0875C18.4128 9.9 18.0753 9.7125 17.7753 9.675Z"
                        fill=""
                      />
                    </svg>
                  </a>
                  <a
                    href="/#"
                    className="inline-block text-body-color hover:text-primary dark:text-dark-6"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-current"
                    >
                      <path
                        d="M21.953 6.45003C22.0867 6.2942 21.9124 6.09057 21.7146 6.16351C21.2732 6.32632 20.8698 6.43371 20.2732 6.5C21.007 6.0914 21.3483 5.50739 21.6259 4.79209C21.6928 4.61956 21.4909 4.463 21.317 4.54542C20.6107 4.88031 19.8486 5.12877 19.0472 5.27557C18.2551 4.49054 17.126 4 15.877 4C13.4786 4 11.5337 5.80877 11.5337 8.03917C11.5337 8.35581 11.5725 8.66424 11.6457 8.95955C8.19805 8.79892 5.12381 7.32409 2.98798 5.06261C2.84159 4.90761 2.57596 4.92819 2.48481 5.11723C2.24165 5.62159 2.10609 6.18109 2.10609 6.77016C2.10609 8.17124 2.87261 9.40743 4.03783 10.1318C3.51538 10.1161 3.01574 10.0143 2.5553 9.84154C2.33112 9.75744 2.07414 9.90524 2.10426 10.1313C2.33549 11.8672 3.74091 13.2993 5.55499 13.6377C5.19069 13.7304 4.80699 13.7796 4.41006 13.7796C4.31382 13.7796 4.21841 13.7766 4.12387 13.7708C3.8833 13.7559 3.68778 13.9711 3.79092 14.177C4.47143 15.5352 5.94084 16.4834 7.65079 16.5129C6.1645 17.5965 4.29186 18.2421 2.25692 18.2421C2.00601 18.2421 1.89837 18.5647 2.12097 18.6741C3.8402 19.5192 5.79806 20 7.87837 20C15.8673 20 20.2353 13.8453 20.2353 8.50756C20.2353 8.33284 20.2309 8.15811 20.223 7.98503C20.8714 7.5494 21.4543 7.03139 21.953 6.45003Z"
                        fill=""
                      />
                    </svg>
                  </a>
                  <a
                    href="/#"
                    className="inline-block text-body-color hover:text-primary dark:text-dark-6"
                  >
                    <svg
                      width="20"
                      height="19"
                      viewBox="0 0 20 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.68534 12.8888C11.6575 12.8888 13.2562 11.3239 13.2562 9.39361C13.2562 7.46328 11.6575 5.89844 9.68534 5.89844C7.71322 5.89844 6.1145 7.46328 6.1145 9.39361C6.1145 11.3239 7.71322 12.8888 9.68534 12.8888Z"
                        fill="currentColor"
                      />
                      <path
                        d="M13.5638 0.0527344H5.74487C2.63578 0.0527344 0.111572 2.52346 0.111572 5.56668V13.1596C0.111572 16.2631 2.63578 18.7338 5.74487 18.7338H13.5022C16.6729 18.7338 19.1971 16.2631 19.1971 13.2199V5.56668C19.1971 2.52346 16.6729 0.0527344 13.5638 0.0527344ZM9.68511 13.9732C7.06855 13.9732 5.00608 11.8941 5.00608 9.39329C5.00608 6.89243 7.09933 4.8134 9.68511 4.8134C12.2401 4.8134 14.3334 6.89243 14.3334 9.39329C14.3334 11.8941 12.2709 13.9732 9.68511 13.9732ZM16.1496 5.23524C15.8417 5.56668 15.38 5.74746 14.8567 5.74746C14.3949 5.74746 13.9332 5.56668 13.5638 5.23524C13.2252 4.9038 13.0405 4.48197 13.0405 3.96974C13.0405 3.45752 13.2252 3.06582 13.5638 2.70425C13.9024 2.34268 14.3334 2.16189 14.8567 2.16189C15.3184 2.16189 15.8109 2.34268 16.1496 2.67412C16.4574 3.06582 16.6729 3.51778 16.6729 3.99987C16.6421 4.48197 16.4574 4.9038 16.1496 5.23524Z"
                        fill="currentColor"
                      />
                      <path
                        d="M14.8877 3.24609C14.4875 3.24609 14.1489 3.57753 14.1489 3.96923C14.1489 4.36093 14.4875 4.69237 14.8877 4.69237C15.2879 4.69237 15.6265 4.36093 15.6265 3.96923C15.6265 3.57753 15.3187 3.24609 14.8877 3.24609Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                  <a
                    href="/#"
                    className="inline-block text-body-color hover:text-primary dark:text-dark-6"
                  >
                    <svg
                      width="20"
                      height="19"
                      viewBox="0 0 20 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.2014 0.0527344H1.60852C0.824353 0.0527344 0.197021 0.66394 0.197021 1.42795V17.6249C0.197021 18.3583 0.824353 19.0001 1.60852 19.0001H18.1387C18.9229 19.0001 19.5502 18.3889 19.5502 17.6249V1.39739C19.6129 0.66394 18.9856 0.0527344 18.2014 0.0527344ZM5.9371 16.158H3.08275V7.14272H5.9371V16.158ZM4.49424 5.88975C3.55324 5.88975 2.83181 5.1563 2.83181 4.27005C2.83181 3.3838 3.58461 2.65036 4.49424 2.65036C5.40387 2.65036 6.15667 3.3838 6.15667 4.27005C6.15667 5.1563 5.4666 5.88975 4.49424 5.88975ZM16.7586 16.158H13.9042V11.7879C13.9042 10.7488 13.8728 9.37362 12.3986 9.37362C10.893 9.37362 10.6735 10.5349 10.6735 11.6962V16.158H7.8191V7.14272H10.6107V8.39569H10.6421C11.0499 7.66224 11.9595 6.9288 13.371 6.9288C16.2881 6.9288 16.8213 8.76241 16.8213 11.2684V16.158H16.7586Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-stroke py-7 dark:border-dark-3">
            <div className="-mx-4 flex flex-wrap">
              <div className="order-last w-full px-4 lg:order-first lg:w-1/2">
                <div className="mt-7 lg:mt-0">
                  <p className="text-center text-base font-medium text-body-color dark:text-dark-6 lg:text-left">
                    Copyright © {new Date().getFullYear()} TailGrids. All
                    Rights Reserved.
                  </p>
                </div>
              </div>
              <div className="w-full px-4 lg:w-1/2">
                <div className="flex items-center justify-center lg:justify-end">
                  <span className="whitespace-nowrap pr-4 text-base font-medium text-body-color dark:text-dark-6">
                    We Accept:
                  </span>
                  <div>
                    <img
                      src="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/footers/footer-01/payments.svg"
                      alt="payments"
                      className="max-w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ECommerceFooter;

const LinkGroup = ({ children, header }) => {
  return (
    <div className="w-full px-4 sm:w-1/2 md:w-4/12 lg:w-4/12 xl:w-2/12 xl:first:w-3/12 2xl:w-2/12 2xl:first:w-3/12">
      <div className="mb-14">
        <h3 className="mb-8 text-xl font-semibold text-dark dark:text-white">
          {" "}
          {header}{" "}
        </h3>
        <div className="space-y-3">{children}</div>
      </div>
    </div>
  );
};

const NavLink = ({ text, link }) => {
  return (
    <a
      href={link}
      className="block text-base text-body-color hover:text-primary dark:text-dark-6"
    >
      {text}
    </a>
  );
};
