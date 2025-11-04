import React, { useEffect, useRef, useState } from "react";

const ECommerceNavbar2 = () => {
  const [open, setOpen] = useState(false);
  const [searchFormOpen, setSearchFormOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlist, setIsWishlist] = useState(false);

  const trigger = useRef(null);
  const menuTrigger = useRef(null);
  const cartTrigger = useRef(null);
  const wishlistTrigger = useRef(null);
  const searchForm = useRef(null);
  const menuRef = useRef(null);
  const cartBox = useRef(null);
  const wishlistRef = useRef(null);

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
  useClickOutside([wishlistRef, wishlistTrigger], isWishlist, setIsWishlist);

  return (
    <>
      {/* <!-- ====== Navbar Section Start --> */}
      <header className="flex w-full items-center bg-white dark:bg-dark">
        <div className="container mx-auto">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4">
              <a href="/#" className="block w-full py-5 lg:py-3">
                <img
                  src="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/logo/logo-primary.svg"
                  alt="logo"
                  className="w-full"
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
                  <ul className="block items-center lg:flex">
                    <ListItem
                      NavLink="/#"
                      menuName="All categories"
                      dropdown
                    ></ListItem>
                    <ListItem NavLink="/#" menuName="Home"></ListItem>
                    <ListItem NavLink="/#" menuName="Shop"></ListItem>
                    <ListItem NavLink="/#" menuName="Products"></ListItem>
                    <ListItem
                      NavLink="/#"
                      menuName="Accessories"
                      submenu
                    ></ListItem>
                    <ListItem NavLink="/#" menuName="Contact"></ListItem>
                  </ul>
                </nav>
              </div>

              <div className="relative right-16 hidden items-center justify-end gap-5 sm:flex lg:right-0">
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
                      ref={wishlistTrigger}
                      onClick={() => setIsWishlist(!isWishlist)}
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
                        <path d="M13 23.9688C12.4719 23.9688 11.9438 23.7656 11.5375 23.4C10.6031 22.5875 9.75001 21.8563 8.97814 21.2063C6.66251 19.2156 4.63126 17.55 3.20939 15.8438C1.54376 13.8125 0.731262 11.9031 0.731262 9.75C0.731262 7.67813 1.46251 5.72813 2.76251 4.30625C4.10314 2.84375 5.97189 2.03125 7.96251 2.03125C9.46564 2.03125 10.8875 2.51875 12.1063 3.45312C12.4313 3.69688 12.7156 3.94062 13 4.26562C13.2844 3.98125 13.5688 3.69688 13.8938 3.45312C15.1125 2.51875 16.4938 2.03125 18.0375 2.03125C20.0688 2.03125 21.8969 2.84375 23.2375 4.30625C24.5781 5.72813 25.2688 7.67813 25.2688 9.75C25.2688 11.9031 24.4969 13.8125 22.7906 15.8438C21.3688 17.55 19.3375 19.2563 17.0219 21.2063C16.25 21.8563 15.3563 22.6281 14.4219 23.4C14.0563 23.7656 13.5281 23.9688 13 23.9688ZM7.96251 3.85938C6.45939 3.85938 5.07814 4.46875 4.06251 5.525C3.08751 6.62188 2.55939 8.125 2.55939 9.75C2.55939 11.4156 3.20939 13 4.59064 14.6656C5.93126 16.25 7.88126 17.9156 10.1156 19.825C10.8875 20.475 11.7813 21.2469 12.7156 22.0594C12.8781 22.1812 13.1219 22.1812 13.2844 22.0594C14.2188 21.2469 15.1125 20.5156 15.8844 19.825C18.1594 17.875 20.1094 16.25 21.4094 14.6656C22.7906 13 23.4406 11.4156 23.4406 9.75C23.4406 8.125 22.8719 6.62187 21.8969 5.56562C20.8813 4.46875 19.5 3.85938 18.0375 3.85938C16.9406 3.85938 15.925 4.225 15.0313 4.875C14.6656 5.15937 14.3406 5.48437 14.0156 5.85C13.7719 6.13437 13.4063 6.3375 13 6.3375C12.5938 6.3375 12.2688 6.175 11.9844 5.85C11.6594 5.48437 11.3344 5.15937 10.9688 4.875C10.1156 4.225 9.10001 3.85938 7.96251 3.85938Z" />
                      </svg>

                      <span className="absolute -right-2 -top-2 h-4 w-4 rounded-full bg-primary text-[10px] font-normal text-white">
                        3
                      </span>
                    </button>
                  </div>
                  <div
                    ref={wishlistRef}
                    onFocus={() => setIsWishlist(true)}
                    onBlur={() => setIsWishlist(false)}
                    className={`absolute right-0 top-full mt-5 w-[330px] ${
                      !isWishlist && "hidden"
                    }`}
                  >
                    <div className="overflow-hidden rounded-lg border border-stroke bg-white px-6 py-8 shadow-1 dark:border-dark-3 dark:bg-dark-2 dark:shadow-box-dark">
                      <div className="border-b border-stroke pb-3 dark:border-dark-3">
                        <div className="-mx-1 flex items-center justify-between pb-4">
                          <CartItem
                            link="/#"
                            image="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/checkout/checkout-02/image-02.jpg"
                            title="Circular Sienna"
                            desc="Awesome white shirt"
                            price="36.00"
                          />
                        </div>
                        <div className="-mx-1 flex items-center justify-between py-4">
                          <CartItem
                            link="/#"
                            image="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/checkout/checkout-02/image-03.jpg"
                            title="Black T-shirt"
                            desc="It's a nice black t-shirt"
                            price="66.00"
                          />
                        </div>
                      </div>
                      <div>
                        <button className="flex w-full items-center justify-center rounded-md bg-primary px-10 py-[10px] text-center text-base font-medium text-white hover:bg-blue-dark">
                          Add to Cart
                        </button>
                      </div>
                    </div>
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
                        <path d="M22.9125 7.96252H21.9375L19.2969 1.30002C19.0938 0.812515 18.5656 0.60939 18.1188 0.77189C17.6313 0.975015 17.4281 1.50314 17.5906 1.95002L19.9469 7.96252H6.05314L8.40939 1.99064C8.61251 1.50314 8.36876 0.975015 7.88126 0.812515C7.43439 0.60939 6.90626 0.812515 6.70314 1.30002L4.06251 7.96252H3.08751C2.35626 7.96252 1.74689 8.57189 1.74689 9.30314V12.5938C1.74689 13.2844 2.23439 13.8125 2.92501 13.8938L3.94064 22.75C4.10314 24.2125 5.32189 25.3094 6.78439 25.3094H19.2156C20.6781 25.3094 21.8969 24.2125 22.0594 22.75L23.075 13.8938C23.725 13.8125 24.2531 13.2438 24.2531 12.5938V9.26251C24.2531 8.53126 23.6438 7.96252 22.9125 7.96252ZM3.57501 9.79064H22.425V12.1063H3.57501V9.79064ZM19.2156 23.4813H6.78439C6.25626 23.4813 5.80939 23.075 5.72814 22.5469L4.75314 13.9344H21.2469L20.2719 22.5469C20.1906 23.075 19.7438 23.4813 19.2156 23.4813Z" />
                        <path d="M8.85625 15.7626C8.36875 15.7626 7.92188 16.1688 7.92188 16.6969V19.7438C7.92188 20.2313 8.32812 20.6782 8.85625 20.6782C9.38437 20.6782 9.79062 20.2719 9.79062 19.7438V16.6563C9.79062 16.1688 9.38437 15.7626 8.85625 15.7626Z" />
                        <path d="M17.1438 15.7626C16.6563 15.7626 16.2094 16.1688 16.2094 16.6969V19.7438C16.2094 20.2313 16.6156 20.6782 17.1438 20.6782C17.6719 20.6782 18.0781 20.2719 18.0781 19.7438V16.6563C18.0375 16.1688 17.6313 15.7626 17.1438 15.7626Z" />
                      </svg>

                      <span className="absolute -right-2 -top-2 h-4 w-4 rounded-full bg-primary text-[10px] font-normal text-white">
                        1
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
                            link="/#"
                            image="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/checkout/checkout-02/image-02.jpg"
                            title="Circular Sienna"
                            desc="Awesome white shirt"
                            price="36.00"
                          />
                        </div>
                        <div className="-mx-1 flex items-center justify-between py-4">
                          <CartItem
                            link="/#"
                            image="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/checkout/checkout-02/image-03.jpg"
                            title="Black T-shirt"
                            desc="It's a nice black t-shirt"
                            price="66.00"
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

export default ECommerceNavbar2;

const ListItem = ({ NavLink, dropdown, submenu, menuName }) => {
  const [open, setOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [innerDropdownOpen, setInnerDropdownOpen] = useState(false);

  const trigger = useRef(null);
  const submenuTrigger = useRef(null);
  const dropdownTrigger = useRef(null);
  const innerDropdownTrigger = useRef(null);
  const menuRef = useRef(null);
  const submenuRef = useRef(null);
  const dropdownRef = useRef(null);
  const innerDropdownRef = useRef(null);

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

  useClickOutside([menuRef, trigger], open, setOpen);
  useClickOutside([submenuTrigger], submenuOpen, setSubmenuOpen);
  useClickOutside([dropdownTrigger], dropdownOpen, setDropdownOpen);
  useClickOutside(
    [innerDropdownTrigger],
    innerDropdownOpen,
    setInnerDropdownOpen,
  );

  return (
    <li className={`relative lg:py-4 ${submenu ? "group" : null}`}>
      {!dropdown && !submenu && (
        <a
          href={NavLink}
          className="flex justify-between py-2 text-base font-medium text-dark hover:text-primary dark:text-white lg:mx-[18px] lg:hidden lg:py-6 xl:inline-flex"
        >
          {menuName}
        </a>
      )}
      {dropdown && (
        <>
          <a
            ref={dropdownRef}
            href={NavLink}
            className="flex items-center justify-between rounded-sm bg-gray-2 px-4 py-2 text-base font-medium text-dark hover:text-primary dark:bg-dark-2 dark:text-white lg:inline-flex lg:px-5 lg:py-2"
            onClick={() => {
              event.preventDefault();
              setDropdownOpen(!dropdownOpen);
            }}
          >
            {menuName}
            <span className="pl-[22px]">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current"
              >
                <path d="M7.99999 11.4C7.84999 11.4 7.72499 11.35 7.59999 11.25L1.84999 5.60005C1.62499 5.37505 1.62499 5.02505 1.84999 4.80005C2.07499 4.57505 2.42499 4.57505 2.64999 4.80005L7.99999 10.025L13.35 4.75005C13.575 4.52505 13.925 4.52505 14.15 4.75005C14.375 4.97505 14.375 5.32505 14.15 5.55005L8.39999 11.2C8.27499 11.325 8.14999 11.4 7.99999 11.4Z" />
              </svg>
            </span>
          </a>
          <div
            ref={dropdownRef}
            onFocus={() => setDropdownOpen(true)}
            onBlur={() => setDropdownOpen(false)}
            className={`${
              dropdownOpen ? "block" : "hidden"
            } relative left-0 top-full z-10 rounded-lg bg-white transition-all dark:bg-dark-2 lg:absolute lg:top-[112%] lg:w-[180px] lg:border-[.5px] lg:border-stroke lg:py-4 dark:lg:border-dark-3`}
          >
            <span className="absolute -top-[6px] left-6 -z-10 hidden h-3 w-3 rotate-45 rounded-xs border-[.5px] border-b-0 border-r-0 border-stroke bg-white dark:border-dark-3 dark:bg-dark-2 lg:block"></span>
            <div className="px-2 lg:px-6">
              <a
                href="/#"
                className="block py-[6px] text-base text-body-color hover:text-primary dark:text-dark-6"
              >
                Arts &amp; Crafts
              </a>
            </div>
            <div className="group relative px-2 lg:px-6">
              <a
                href="/#"
                ref={innerDropdownTrigger}
                onClick={() => {
                  event.preventDefault();
                  setInnerDropdownOpen(!innerDropdownOpen);
                }}
                className="flex items-center justify-between py-[6px] text-base text-body-color hover:text-primary group-hover:text-primary dark:text-dark-6"
              >
                Fashion
                <span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current"
                  >
                    <path d="M4.52811 12.5344C4.39686 12.5344 4.28749 12.4906 4.17811 12.4031C3.98124 12.2062 3.98124 11.9 4.17811 11.7031L8.77186 6.99998L4.17811 2.31873C3.98124 2.12185 3.98124 1.8156 4.17811 1.61873C4.37499 1.42185 4.68124 1.42185 4.87811 1.61873L9.82186 6.64998C10.0187 6.84685 10.0187 7.1531 9.82186 7.34998L4.87811 12.3812C4.79061 12.4687 4.65936 12.5344 4.52811 12.5344Z" />
                  </svg>
                </span>
              </a>
              <div
                ref={innerDropdownRef}
                onFocus={() => setInnerDropdownOpen(true)}
                onBlur={() => setInnerDropdownOpen(false)}
                className={`${
                  innerDropdownOpen ? "hidden lg:block" : "block"
                } left-full top-0 border-stroke bg-white py-2 group-hover:visible group-hover:opacity-100 dark:border-dark-3 dark:bg-dark-2 lg:invisible lg:absolute lg:w-[600px] lg:rounded-sm lg:border-[.5px] lg:px-8 lg:py-8 lg:opacity-0 xl:w-[650px]`}
              >
                <div className="-mx-2 flex flex-wrap">
                  <div className="w-full px-2 lg:w-1/3">
                    <div>
                      <h3 className="mb-[14px] text-base font-semibold text-dark dark:text-white">
                        New Arrivals
                      </h3>
                      <a
                        href="/#"
                        className="block py-[6px] text-base text-body-color hover:text-primary dark:text-dark-6"
                      >
                        Dresses
                      </a>
                      <a
                        href="/#"
                        className="block py-[6px] text-base text-body-color hover:text-primary dark:text-dark-6"
                      >
                        Jackets
                      </a>
                      <a
                        href="/#"
                        className="block py-[6px] text-base text-body-color hover:text-primary dark:text-dark-6"
                      >
                        Sweatshirts
                      </a>
                      <a
                        href="/#"
                        className="block py-[6px] text-base text-body-color hover:text-primary dark:text-dark-6"
                      >
                        Tops &amp; Tees
                      </a>
                      <a
                        href="/#"
                        className="block py-[6px] text-base text-body-color hover:text-primary dark:text-dark-6"
                      >
                        Party Dresses
                      </a>
                    </div>
                  </div>
                  <div className="w-full px-2 lg:w-1/3">
                    <div>
                      <h3 className="mb-[14px] text-base font-semibold text-dark dark:text-white">
                        New Arrivals
                      </h3>
                      <a
                        href="/#"
                        className="block py-[6px] text-base text-body-color hover:text-primary dark:text-dark-6"
                      >
                        Dresses
                      </a>
                      <a
                        href="/#"
                        className="block py-[6px] text-base text-body-color hover:text-primary dark:text-dark-6"
                      >
                        Jackets
                      </a>
                      <a
                        href="/#"
                        className="block py-[6px] text-base text-body-color hover:text-primary dark:text-dark-6"
                      >
                        Sweatshirts
                      </a>
                      <a
                        href="/#"
                        className="block py-[6px] text-base text-body-color hover:text-primary dark:text-dark-6"
                      >
                        Tops &amp; Tees
                      </a>
                      <a
                        href="/#"
                        className="block py-[6px] text-base text-body-color hover:text-primary dark:text-dark-6"
                      >
                        Party Dresses
                      </a>
                    </div>
                  </div>
                  <div className="w-full px-2 lg:w-1/3">
                    <a href="/#" className="rounded-sm">
                      <img
                        src="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/navbars/navbar-02/bannder.jpg"
                        alt="banner"
                        className="w-full rounded-sm"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-2 lg:px-6">
              <a
                href="/#"
                className="block py-[6px] text-base text-body-color hover:text-primary dark:text-dark-6"
              >
                Bags &amp; Shoes
              </a>
            </div>
            <div className="px-2 lg:px-6">
              <a
                href="/#"
                className="block py-[6px] text-base text-body-color hover:text-primary dark:text-dark-6"
              >
                Jewelry &amp; Watch
              </a>
            </div>
          </div>
        </>
      )}
      {submenu && (
        <>
          <a
            ref={submenuRef}
            href={NavLink}
            className="flex items-center justify-between py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:mx-[18px] lg:inline-flex lg:py-2"
            onClick={() => {
              event.preventDefault();
              setSubmenuOpen(!submenuOpen);
            }}
          >
            {menuName}
            <span className="pl-[6px]">
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current"
              >
                <path d="M8 11.9C7.85 11.9 7.725 11.85 7.6 11.75L1.85 6.10005C1.625 5.87505 1.625 5.52505 1.85 5.30005C2.075 5.07505 2.425 5.07505 2.65 5.30005L8 10.525L13.35 5.25005C13.575 5.02505 13.925 5.02505 14.15 5.25005C14.375 5.47505 14.375 5.82505 14.15 6.05005L8.4 11.7C8.275 11.825 8.15 11.9 8 11.9Z" />
              </svg>
            </span>
          </a>
          <div
            ref={submenuRef}
            onFocus={() => setSubmenuOpen(true)}
            onBlur={() => setSubmenuOpen(false)}
            className={`${
              !submenuOpen ? "hidden lg:block" : "block"
            } relative left-0 top-full rounded-lg bg-white px-2 transition-all group-hover:opacity-100 dark:bg-dark-2 lg:invisible lg:absolute lg:top-[115%] lg:w-[180px] lg:border-[.5px] lg:border-stroke lg:px-6 lg:py-4 lg:opacity-0 lg:group-hover:visible lg:group-hover:top-full dark:lg:border-dark-3`}
          >
            <a
              href="/#"
              className="block py-[6px] text-base text-body-color hover:text-primary dark:text-dark-6"
            >
              Arts &amp; Crafts
            </a>
            <a
              href="/#"
              className="block py-[6px] text-base text-body-color hover:text-primary dark:text-dark-6"
            >
              Fashion
            </a>
            <a
              href="/#"
              className="block py-[6px] text-base text-body-color hover:text-primary dark:text-dark-6"
            >
              Bags &amp; Shoes
            </a>
            <a
              href="/#"
              className="block py-[6px] text-base text-body-color hover:text-primary dark:text-dark-6"
            >
              Jewelry &amp; Watch
            </a>
          </div>
        </>
      )}
    </li>
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
