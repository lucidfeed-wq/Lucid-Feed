import React, { useEffect, useRef, useState } from "react";

const ECommerceNavbar = () => {
  const [open, setOpen] = useState(false);
  const [searchFormOpen, setSearchFormOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const trigger = useRef(null);
  const menuTrigger = useRef(null);
  const cartTrigger = useRef(null);
  const searchForm = useRef(null);
  const menuRef = useRef(null);
  const cartBox = useRef(null);

  const useClickOutside = (refs, isOpen, setIsOpen) => {
    useEffect(() => {
      const clickHandler = ({ target }) => {
        if (
          !refs.some((ref) => ref.current) ||
          !isOpen ||
          refs.some((ref) => ref.current.contains(target))
        )
          return;
        setIsOpen(false);
      };

      document.addEventListener("click", clickHandler);
      return () => document.removeEventListener("click", clickHandler);
    }, [refs, isOpen, setIsOpen]);
  };

  useClickOutside([searchForm, trigger], searchFormOpen, setSearchFormOpen);
  useClickOutside([cartBox, cartTrigger], isCartOpen, setIsCartOpen);
  useClickOutside([menuRef, menuTrigger], open, setOpen);

  return (
    <>
      {/* <!-- ====== Navbar Section Start --> */}
      <header className="flex w-full items-center bg-white dark:bg-dark">
        <div className="container mx-auto">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4">
              <a href="/#" className="block w-full py-5 lg:py-3">
                <img
                  src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo.svg"
                  alt="logo"
                  className="w-full dark:hidden"
                />
                <img
                  src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-white.svg"
                  alt="logo"
                  className="hidden w-full dark:block"
                />
              </a>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div className="w-full">
                <button
                  ref={menuTrigger}
                  onClick={() => setOpen(!open)}
                  className={` ${
                    open && "navbarTogglerActive"
                  } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
                >
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-dark-6"></span>
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-dark-6"></span>
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-dark-6"></span>
                </button>
                <nav
                  ref={menuRef}
                  className={`absolute right-4 top-full z-50 w-full max-w-[250px] justify-center rounded-lg bg-white px-6 py-5 shadow dark:bg-dark-2 lg:static lg:flex lg:w-full lg:max-w-full lg:bg-transparent lg:py-0 lg:shadow-none ${
                    !open && "hidden"
                  } `}
                >
                  <ul className="block lg:flex">
                    <ListItem NavLink="/#">Home</ListItem>
                    <ListItem NavLink="/#">Men</ListItem>
                    <ListItem NavLink="/#">Women</ListItem>
                    <ListItem NavLink="/#">Accessories</ListItem>
                  </ul>
                </nav>
              </div>
              <div className="relative right-16 hidden items-center justify-end gap-6 sm:flex lg:right-0">
                <div className="flex max-w-[200px] justify-end">
                  <button
                    ref={trigger}
                    onClick={() => setSearchFormOpen(!searchFormOpen)}
                    className="flex items-center justify-center text-dark dark:text-white"
                  >
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-current"
                    >
                      <path d="M24.9437 22.6281L18.2406 17.1843C21.0031 13.4062 20.7187 8.00308 17.2656 4.59058C15.4375 2.76245 13 1.74683 10.4 1.74683C7.79999 1.74683 5.36249 2.76245 3.53437 4.59058C-0.243756 8.3687 -0.243756 14.5437 3.53437 18.3218C5.36249 20.15 7.79999 21.1656 10.4 21.1656C12.8781 21.1656 15.1937 20.2312 17.0219 18.5656L23.8062 24.05C23.9687 24.1718 24.1719 24.2531 24.375 24.2531C24.6594 24.2531 24.9031 24.1312 25.0656 23.9281C25.3906 23.5218 25.35 22.9531 24.9437 22.6281ZM10.4 19.3375C8.28749 19.3375 6.33749 18.525 4.83437 17.0218C1.74687 13.9343 1.74687 8.93745 4.83437 5.89058C6.33749 4.38745 8.28749 3.57495 10.4 3.57495C12.5125 3.57495 14.4625 4.38745 15.9656 5.89058C19.0531 8.97808 19.0531 13.975 15.9656 17.0218C14.5031 18.525 12.5125 19.3375 10.4 19.3375Z" />
                    </svg>
                  </button>
                  <div
                    ref={searchForm}
                    onFocus={() => setSearchFormOpen(true)}
                    onBlur={() => setSearchFormOpen(false)}
                    className={`absolute right-0 top-full mt-5 w-[330px] ${
                      !searchFormOpen && "hidden"
                    }`}
                  >
                    <form className="flex items-center justify-between">
                      <input
                        type="text"
                        placeholder="Search Components or UI"
                        className="w-full rounded-md border border-transparent bg-white py-4 pl-5 pr-8 text-body-color shadow-1 outline-hidden focus:border-primary focus-visible:shadow-none dark:bg-dark-2 dark:text-dark-6 dark:shadow-none"
                      />
                      <button className="absolute right-5 top-1/2 -translate-y-1/2 text-body-color">
                        <svg
                          width="26"
                          height="26"
                          viewBox="0 0 26 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="fill-current"
                        >
                          <path d="M24.9437 22.6281L18.2406 17.1843C21.0031 13.4062 20.7187 8.00308 17.2656 4.59058C15.4375 2.76245 13 1.74683 10.4 1.74683C7.79999 1.74683 5.36249 2.76245 3.53437 4.59058C-0.243756 8.3687 -0.243756 14.5437 3.53437 18.3218C5.36249 20.15 7.79999 21.1656 10.4 21.1656C12.8781 21.1656 15.1937 20.2312 17.0219 18.5656L23.8062 24.05C23.9687 24.1718 24.1719 24.2531 24.375 24.2531C24.6594 24.2531 24.9031 24.1312 25.0656 23.9281C25.3906 23.5218 25.35 22.9531 24.9437 22.6281ZM10.4 19.3375C8.28749 19.3375 6.33749 18.525 4.83437 17.0218C1.74687 13.9343 1.74687 8.93745 4.83437 5.89058C6.33749 4.38745 8.28749 3.57495 10.4 3.57495C12.5125 3.57495 14.4625 4.38745 15.9656 5.89058C19.0531 8.97808 19.0531 13.975 15.9656 17.0218C14.5031 18.525 12.5125 19.3375 10.4 19.3375Z" />
                        </svg>
                      </button>
                    </form>
                  </div>
                </div>

                <div className="relative">
                  <div className="flex max-w-[200px] justify-end">
                    <button
                      ref={cartTrigger}
                      onClick={() => setIsCartOpen(!isCartOpen)}
                      className="relative flex items-center justify-center text-dark dark:text-white"
                    >
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-current"
                      >
                        <path d="M15.0719 19.4187C13.4469 19.4187 12.1469 20.7187 12.1469 22.3437C12.1469 23.9687 13.4469 25.2687 15.0719 25.2687C16.6969 25.2687 17.9969 23.9687 17.9969 22.3437C17.9969 20.7593 16.6562 19.4187 15.0719 19.4187ZM15.0719 23.4812C14.4625 23.4812 13.975 22.9937 13.975 22.3843C13.975 21.775 14.4625 21.2875 15.0719 21.2875C15.6812 21.2875 16.1687 21.775 16.1687 22.3843C16.1687 22.9531 15.6406 23.4812 15.0719 23.4812Z" />
                        <path d="M7.3531 19.4187C5.7281 19.4187 4.4281 20.7187 4.4281 22.3437C4.4281 23.9687 5.7281 25.2687 7.3531 25.2687C8.9781 25.2687 10.2781 23.9687 10.2781 22.3437C10.2781 20.7593 8.93748 19.4187 7.3531 19.4187ZM7.3531 23.4812C6.74373 23.4812 6.25623 22.9937 6.25623 22.3843C6.25623 21.775 6.74373 21.2875 7.3531 21.2875C7.96248 21.2875 8.44998 21.775 8.44998 22.3843C8.44998 22.9531 7.96248 23.4812 7.3531 23.4812Z" />
                        <path d="M23.6437 0.731201H21.45C20.475 0.731201 19.6219 1.46245 19.5 2.43745L18.85 7.10933H2.80311C2.39686 7.10933 1.99061 7.31245 1.70623 7.63745C1.46248 7.96245 1.34061 8.40933 1.46249 8.81558C1.46249 8.8562 1.46249 8.8562 1.46249 8.89683L3.98124 16.4937C4.14374 17.0624 4.67186 17.4687 5.28124 17.4687H16.4937C17.9969 17.4687 19.2969 16.3312 19.5 14.8281L21.2062 2.6812C21.2062 2.59995 21.2875 2.55933 21.3687 2.55933H23.5625C24.05 2.55933 24.4969 2.15308 24.4969 1.62495C24.4969 1.09683 24.1312 0.731201 23.6437 0.731201ZM17.7531 14.5437C17.6719 15.1531 17.1437 15.6 16.5344 15.6H5.64686L3.45311 8.93745H18.5656L17.7531 14.5437Z" />
                      </svg>

                      <span className="absolute -right-2 -top-2 h-4 w-4 rounded-full bg-primary text-[10px] font-semibold text-white">
                        3
                      </span>
                    </button>
                  </div>
                  <div
                    ref={cartBox}
                    onFocus={() => setIsCartOpen(true)}
                    onBlur={() => setIsCartOpen(false)}
                    className={`absolute right-0 top-full mt-5 w-[330px] ${
                      !isCartOpen && "hidden"
                    }`}
                  >
                    <div className="overflow-hidden rounded-lg bg-white p-8 shadow-1 dark:bg-dark-2 dark:shadow-box-dark">
                      <div className="mb-5 border-b border-stroke pb-3 dark:border-dark-3">
                        <div className="-mx-1 flex items-center justify-between pb-4">
                          <CartItem
                            image="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/checkout/checkout-02/image-02.jpg"
                            title="Circular Sienna"
                            desc="Awesome white shirt"
                            price="36.00"
                            link="/#"
                          />
                        </div>
                        <div className="-mx-1 flex items-center justify-between py-4">
                          <CartItem
                            image="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/checkout/checkout-02/image-03.jpg"
                            title="Black T-shirt"
                            desc="It's a nice black t-shirt"
                            price="66.00"
                            link="/#"
                          />
                        </div>
                      </div>
                      <div className="-mx-1 border-b border-stroke pb-5 dark:border-dark-3">
                        <div className="mb-3 flex items-center justify-between">
                          <div className="px-1">
                            <p className="text-base text-dark dark:text-white">
                              Subtotal
                            </p>
                          </div>
                          <div className="px-1">
                            <p className="text-base font-medium text-dark dark:text-white">
                              $108
                            </p>
                          </div>
                        </div>
                        <div className="mb-3 flex items-center justify-between">
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

                      <div>
                        <button
                          href="/#"
                          className="flex w-full items-center justify-center rounded-md bg-primary px-10 py-[13px] text-center text-base font-medium text-white hover:bg-blue-dark"
                        >
                          Place Order
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- ====== Navbar Section End -->    */}
    </>
  );
};

export default ECommerceNavbar;

const ListItem = ({ children, NavLink }) => {
  return (
    <>
      <li>
        <a
          href={NavLink}
          className="flex py-2 text-base font-medium text-dark hover:text-primary dark:text-white lg:mx-5 lg:inline-flex lg:py-6"
        >
          {children}
        </a>
      </li>
    </>
  );
};

const CartItem = ({ image, link, title, desc, price }) => {
  return (
    <>
      <div className="flex items-center px-1">
        <div className="mr-3 h-10 w-full max-w-[40px] overflow-hidden rounded-sm">
          <img src={image} alt="product image" className="w-full" />
        </div>
        <div>
          <a
            href={link}
            className="text-sm font-medium text-dark hover:text-primary dark:text-white"
          >
            {title}
          </a>
          <p className="truncate text-xs font-medium text-body-color dark:text-dark-6">
            {desc}
          </p>
        </div>
      </div>
      <div className="px-1">
        <p className="text-base font-semibold text-dark dark:text-white">
          ${price}
        </p>
      </div>
    </>
  );
};
