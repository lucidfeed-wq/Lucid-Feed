import React, { useEffect, useRef, useState } from "react";

const ECommerceNavbar3 = () => {
  return (
    <>
      {/* <!-- ====== Navbar Section Start --> */}
      <header className="w-full bg-primary">
        <div className="hidden border-b border-white/20 sm:block">
          <div className="container mx-auto">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4 md:w-1/3 lg:w-1/2">
                <div className="-mx-3 hidden items-center md:flex">
                  <div className="px-3">
                    <div className="relative flex items-center">
                      <label className="hidden text-base font-medium text-white lg:inline-flex">
                        Language:
                      </label>
                      <select className="w-full appearance-none rounded-lg bg-transparent py-3 pl-2 pr-4 text-base font-medium text-white outline-hidden transition">
                        <option>English</option>
                        <option>Urdu</option>
                        <option>Hindi</option>
                      </select>
                      <span className="absolute right-0 top-1/2 mt-[-2px] h-2 w-2 -translate-y-1/2 rotate-45 border-b border-r border-white"></span>
                    </div>
                  </div>
                  <div className="px-3">
                    <div className="relative flex items-center">
                      <label className="hidden text-base font-medium text-white lg:inline-flex">
                        Currency:
                      </label>
                      <select className="w-full appearance-none rounded-lg bg-transparent py-3 pl-2 pr-4 text-base font-medium text-white outline-hidden transition">
                        <option value="">USD</option>
                        <option value="">INR</option>
                        <option value="">ERU</option>
                      </select>
                      <span className="absolute right-0 top-1/2 mt-[-2px] h-2 w-2 -translate-y-1/2 rotate-45 border-b border-r border-white"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 md:w-2/3 lg:w-1/2">
                <ul className="-mx-3 flex items-center justify-center md:justify-end">
                  <TopNavItem link="/#" name="About Us" />
                  <TopNavItem link="/#" name="Order Tracking" />
                  <TopNavItem link="/#" name="Contact Us" />
                  <TopNavItem link="/#" name="FAQs" />
                </ul>
              </div>
            </div>
          </div>
        </div>

        <MiddleNavbar />
        <Navbar>
          <ListItem NavLink="/#" menuName="Mens" />
          <ListItem NavLink="/#" menuName="Womans" />
          <ListItem NavLink="/#" menuName="Accessories" />
          <ListItem NavLink="/#" menuName="Kids" />
          <ListItem NavLink="/#" menuName="More Items" submenu></ListItem>
        </Navbar>
      </header>
      {/* <!-- ====== Navbar Section End -->    */}
    </>
  );
};

export default ECommerceNavbar3;

const TopNavItem = ({ link, name }) => {
  return (
    <li>
      <a
        href={link}
        className="inline-block px-[10px] py-4 text-base font-medium text-white hover:text-white/90"
      >
        {name}
      </a>
    </li>
  );
};

const MiddleNavbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlist, setIsWishlist] = useState(false);

  const cartTrigger = useRef(null);
  const wishlistTrigger = useRef(null);
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

  useClickOutside([cartBox, cartTrigger], isCartOpen, setIsCartOpen);
  useClickOutside([wishlistRef, wishlistTrigger], isWishlist, setIsWishlist);

  return (
    <div className="border-b border-white/20 lg:py-4">
      <div className="container mx-auto">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-48 max-w-full px-4 sm:w-60 lg:w-48">
            <a href="/#" className="block w-full py-5 lg:py-3">
              <img
                src="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/logo/logo-white.svg"
                alt="logo"
                className="w-full"
              />
            </a>
          </div>
          <div className="hidden w-full items-center justify-end px-4 sm:flex lg:justify-between">
            <div className="hidden w-full lg:flex">
              <form className="relative flex w-full items-center rounded-md bg-white dark:bg-dark-2">
                <div className="relative border-r border-stroke dark:border-dark-3">
                  <select className="appearance-none bg-transparent py-[14px] pl-[22px] pr-10 text-base font-medium text-dark outline-hidden dark:text-white">
                    <option className="dark:bg-dark-2">All categories</option>
                    <option className="dark:bg-dark-2">Best matches</option>
                    <option className="dark:bg-dark-2">Newest</option>
                  </select>
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-dark dark:text-white">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-current"
                    >
                      <path d="M7.00001 9.97501C6.86876 9.97501 6.75938 9.93126 6.65001 9.84376L1.61876 4.90001C1.42188 4.70314 1.42188 4.39689 1.61876 4.20001C1.81563 4.00314 2.12188 4.00314 2.31876 4.20001L7.00001 8.77189L11.6813 4.15626C11.8781 3.95939 12.1844 3.95939 12.3813 4.15626C12.5781 4.35314 12.5781 4.65939 12.3813 4.85626L7.35001 9.80001C7.24063 9.90939 7.13126 9.97501 7.00001 9.97501Z" />
                    </svg>
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="I'm shopping for..."
                  className="w-full bg-transparent py-[14px] pl-6 pr-[58px] text-base text-body-color outline-hidden dark:text-dark-6"
                />
                <button className="absolute right-0 top-0 flex h-full w-[52px] items-center justify-center rounded-br-md rounded-tr-md border-l border-stroke bg-white text-dark dark:border-dark-3 dark:bg-dark-2 dark:text-white">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current"
                  >
                    <path d="M23.025 20.8875L16.8375 15.8625C19.3875 12.375 19.125 7.38749 15.9375 4.23749C14.25 2.54999 12 1.61249 9.6 1.61249C7.2 1.61249 4.95 2.54999 3.2625 4.23749C-0.225001 7.72499 -0.225001 13.425 3.2625 16.9125C4.95 18.6 7.2 19.5375 9.6 19.5375C11.8875 19.5375 14.025 18.675 15.7125 17.1375L21.975 22.2C22.125 22.3125 22.3125 22.3875 22.5 22.3875C22.7625 22.3875 22.9875 22.275 23.1375 22.0875C23.4375 21.7125 23.4 21.1875 23.025 20.8875ZM9.6 17.85C7.65 17.85 5.85 17.1 4.4625 15.7125C1.6125 12.8625 1.6125 8.24999 4.4625 5.43749C5.85 4.04999 7.65 3.29999 9.6 3.29999C11.55 3.29999 13.35 4.04999 14.7375 5.43749C17.5875 8.28749 17.5875 12.9 14.7375 15.7125C13.3875 17.1 11.55 17.85 9.6 17.85Z" />
                  </svg>
                </button>
              </form>
            </div>
            <div className="flex w-full items-center justify-end space-x-4 pr-16 lg:pr-0">
              <div className="relative z-20">
                <div className="flex max-w-[200px] justify-end">
                  <button
                    ref={wishlistTrigger}
                    onClick={() => setIsWishlist(!isWishlist)}
                    className="hidden items-center pr-1 text-left md:flex"
                  >
                    <span className="relative mr-5 flex items-center justify-center">
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13 23.9688C12.4719 23.9688 11.9437 23.7656 11.5375 23.4C10.6031 22.5875 9.75 21.8563 8.97812 21.2063C6.6625 19.2156 4.63125 17.55 3.20937 15.8438C1.54375 13.8125 0.731247 11.9031 0.731247 9.75C0.731247 7.67813 1.4625 5.72813 2.7625 4.30625C4.10312 2.84375 5.97187 2.03125 7.9625 2.03125C9.46562 2.03125 10.8875 2.51875 12.1062 3.45312C12.4312 3.69688 12.7156 3.94062 13 4.26562C13.2844 3.98125 13.5687 3.69688 13.8937 3.45312C15.1125 2.51875 16.4937 2.03125 18.0375 2.03125C20.0687 2.03125 21.8969 2.84375 23.2375 4.30625C24.5781 5.72813 25.2687 7.67813 25.2687 9.75C25.2687 11.9031 24.4969 13.8125 22.7906 15.8438C21.3687 17.55 19.3375 19.2563 17.0219 21.2063C16.25 21.8563 15.3562 22.6281 14.4219 23.4C14.0562 23.7656 13.5281 23.9688 13 23.9688ZM7.9625 3.85938C6.45937 3.85938 5.07812 4.46875 4.0625 5.525C3.0875 6.62188 2.55937 8.125 2.55937 9.75C2.55937 11.4156 3.20937 13 4.59062 14.6656C5.93125 16.25 7.88125 17.9156 10.1156 19.825C10.8875 20.475 11.7812 21.2469 12.7156 22.0594C12.8781 22.1812 13.1219 22.1812 13.2844 22.0594C14.2187 21.2469 15.1125 20.5156 15.8844 19.825C18.1594 17.875 20.1094 16.25 21.4094 14.6656C22.7906 13 23.4406 11.4156 23.4406 9.75C23.4406 8.125 22.8719 6.62187 21.8969 5.56562C20.8812 4.46875 19.5 3.85938 18.0375 3.85938C16.9406 3.85938 15.925 4.225 15.0312 4.875C14.6656 5.15937 14.3406 5.48437 14.0156 5.85C13.7719 6.13437 13.4062 6.3375 13 6.3375C12.5937 6.3375 12.2687 6.175 11.9844 5.85C11.6594 5.48437 11.3344 5.15937 10.9687 4.875C10.1156 4.225 9.1 3.85938 7.9625 3.85938Z"
                          fill="white"
                        />
                      </svg>
                      <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-white text-[10px] font-semibold text-primary">
                        3
                      </span>
                    </span>

                    <span className="text-sm text-white">
                      <span>Favorite</span>
                      <br />
                      <span className="font-medium">My Wishlist</span>
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

              <div className="relative z-20">
                <div className="flex max-w-[200px] justify-end">
                  <button
                    ref={cartTrigger}
                    onClick={() => setIsCartOpen(!isCartOpen)}
                    className="flex items-center pr-1 text-left"
                  >
                    <span className="relative mr-5 flex items-center justify-center">
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22.9125 7.96252H21.9375L19.2969 1.30002C19.0938 0.812515 18.5656 0.60939 18.1188 0.77189C17.6313 0.975015 17.4281 1.50314 17.5906 1.95002L19.9469 7.96252H6.05314L8.40939 1.99064C8.61251 1.50314 8.36876 0.975015 7.88126 0.812515C7.43439 0.60939 6.90626 0.812515 6.70314 1.30002L4.06251 7.96252H3.08751C2.35626 7.96252 1.74689 8.57189 1.74689 9.30314V12.5938C1.74689 13.2844 2.23439 13.8125 2.92501 13.8938L3.94064 22.75C4.10314 24.2125 5.32189 25.3094 6.78439 25.3094H19.2156C20.6781 25.3094 21.8969 24.2125 22.0594 22.75L23.075 13.8938C23.725 13.8125 24.2531 13.2438 24.2531 12.5938V9.26251C24.2531 8.53126 23.6438 7.96252 22.9125 7.96252ZM3.57501 9.79064H22.425V12.1063H3.57501V9.79064ZM19.2156 23.4813H6.78439C6.25626 23.4813 5.80939 23.075 5.72814 22.5469L4.75314 13.9344H21.2469L20.2719 22.5469C20.1906 23.075 19.7438 23.4813 19.2156 23.4813Z"
                          fill="white"
                        />
                        <path
                          d="M8.85625 15.7625C8.36875 15.7625 7.92188 16.1688 7.92188 16.6969V19.7438C7.92188 20.2313 8.32812 20.6781 8.85625 20.6781C9.38437 20.6781 9.79062 20.2719 9.79062 19.7438V16.6563C9.79062 16.1688 9.38437 15.7625 8.85625 15.7625Z"
                          fill="white"
                        />
                        <path
                          d="M17.1438 15.7625C16.6563 15.7625 16.2094 16.1688 16.2094 16.6969V19.7438C16.2094 20.2313 16.6156 20.6781 17.1438 20.6781C17.6719 20.6781 18.0781 20.2719 18.0781 19.7438V16.6563C18.0375 16.1688 17.6313 15.7625 17.1438 15.7625Z"
                          fill="white"
                        />
                      </svg>

                      <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-white text-[10px] font-semibold text-primary">
                        1
                      </span>
                    </span>

                    <span className="text-sm text-white">
                      <span>Login</span>
                      <br />
                      <span className="font-medium">My Account</span>
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
    </div>
  );
};

const Navbar = ({ children }) => {
  const [open, setOpen] = useState(false);

  const menuTrigger = useRef(null);
  const menuRef = useRef(null);

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

  useClickOutside([menuRef, menuTrigger], open, setOpen);

  return (
    <div>
      <div className="container mx-auto">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="flex w-full items-center justify-between px-4">
            <div className="w-full">
              <button
                ref={menuTrigger}
                onClick={() => setOpen(!open)}
                className={` ${
                  open && "navbarTogglerActive"
                } absolute -top-10 right-4 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:top-1/2 lg:hidden`}
              >
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
              </button>
              <nav
                ref={menuRef}
                className={`absolute right-4 top-full w-full max-w-[250px] justify-center rounded-lg bg-primary px-6 py-5 shadow lg:static lg:flex lg:w-full lg:max-w-full lg:justify-start lg:bg-transparent lg:px-0 lg:py-0 lg:shadow-none ${
                  !open && "hidden"
                } `}
              >
                <ul className="block items-center lg:flex">{children}</ul>
              </nav>
            </div>
          </div>
          <div className="px-4">
            <div className="hidden items-center justify-end pr-1 lg:flex">
              <div className="mr-4 flex items-center justify-center text-white">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current"
                >
                  <path d="M24.4562 22.425L23.725 15.0719C23.6031 13.7313 22.4656 12.7156 21.125 12.7156H4.875C3.53437 12.7156 2.4375 13.7313 2.275 15.0719L1.54375 22.425C1.4625 23.1563 1.70625 23.8875 2.19375 24.4156C2.68125 24.9438 3.37187 25.2688 4.10312 25.2688H21.8156C22.5469 25.2688 23.2375 24.9438 23.725 24.4156C24.2938 23.8875 24.4969 23.1563 24.4562 22.425ZM22.425 23.1969C22.2625 23.3594 22.0594 23.4406 21.8562 23.4406H4.14375C3.94062 23.4406 3.7375 23.3594 3.575 23.1969C3.4125 23.0344 3.37187 22.8313 3.37187 22.5875L4.10312 15.2344C4.14375 14.8281 4.46875 14.5438 4.875 14.5438H21.125C21.5312 14.5438 21.8562 14.8281 21.8969 15.2344L22.6281 22.5875C22.6281 22.8313 22.5875 23.0344 22.425 23.1969Z" />
                  <path d="M13 15.9656C11.3344 15.9656 9.95312 17.3469 9.95312 19.0125C9.95312 20.7188 11.3344 22.0594 13 22.0594C14.7062 22.0594 16.0469 20.6781 16.0469 19.0125C16.0469 17.3469 14.7062 15.9656 13 15.9656ZM13 20.2313C12.3094 20.2313 11.7812 19.6625 11.7812 19.0125C11.7812 18.3219 12.35 17.7938 13 17.7938C13.6906 17.7938 14.2188 18.3625 14.2188 19.0125C14.2188 19.7031 13.6906 20.2313 13 20.2313Z" />
                  <path d="M2.47812 8.36876C2.55937 10.1563 4.10312 11.0906 5.15937 11.0906H8.00312H8.04374C9.34374 11.0094 10.6437 10.1563 10.6437 8.36876V7.59689C12.025 7.59689 14.6656 7.59689 16.0062 7.59689V8.36876C16.0062 10.1563 17.3062 11.0094 18.6062 11.0906H21.4906C22.5875 11.0906 24.0906 10.1563 24.1719 8.36876C24.1719 8.24689 24.1719 6.78439 24.1719 6.70314C24.1719 6.66251 24.1719 6.62189 24.1719 6.58126C24.05 5.40314 23.6437 4.42814 22.9125 3.65626L22.8719 3.61564C21.8156 2.64064 20.5969 2.11251 19.6625 1.78751C16.9 0.731262 13.4469 0.731262 13.2844 0.731262C10.8469 0.771887 9.30312 0.975012 6.94687 1.78751C5.97187 2.15314 4.75312 2.68126 3.69687 3.61564L3.65624 3.65626C2.92499 4.42814 2.51874 5.40314 2.39687 6.58126C2.39687 6.62189 2.39687 6.66251 2.39687 6.70314C2.43749 6.78439 2.47812 8.20626 2.47812 8.36876ZM4.99687 4.95626C5.80937 4.22501 6.78437 3.81876 7.59687 3.49376C9.70937 2.72189 11.05 2.60001 13.325 2.51876C13.5281 2.51876 16.6156 2.55939 19.0531 3.49376C19.9062 3.81876 20.8812 4.22501 21.6531 4.95626C22.0594 5.40314 22.3031 6.01251 22.3844 6.70314C22.3844 6.82501 22.3844 8.16564 22.3844 8.28751C22.3437 9.14064 21.5312 9.26251 21.5312 9.26251H18.7281C18.3219 9.22189 17.875 9.05939 17.875 8.36876V6.70314C17.875 6.29689 17.6312 5.93126 17.225 5.85001C16.9406 5.68751 9.74999 5.68751 9.46562 5.80939C9.09999 5.93126 8.81562 6.29689 8.81562 6.66251V8.36876C8.81562 9.05939 8.36874 9.22189 7.96249 9.26251H5.15937C5.15937 9.26251 4.34687 9.14064 4.30624 8.32814C4.30624 8.20626 4.30624 7.75939 4.30624 7.35314C4.30624 7.06876 4.30624 6.86564 4.30624 6.74376C4.34687 5.97189 4.59062 5.40314 4.99687 4.95626Z" />
                </svg>
              </div>
              <a
                href="/#"
                className="whitespace-nowrap text-base font-medium text-white"
              >
                Need Help? +001 123 456 789
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ListItem = ({ children, NavLink, submenu, menuName }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const submenuTrigger = useRef(null);
  const submenuRef = useRef(null);

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

  useClickOutside([submenuTrigger], submenuOpen, setSubmenuOpen);

  return (
    <li className={`${submenu && "group relative lg:py-4"}`}>
      {!submenu && (
        <a
          href={NavLink}
          className="flex justify-between py-2 text-base font-medium text-white hover:opacity-90 lg:mx-5 lg:py-6 xl:inline-flex 2xl:mx-4"
        >
          {menuName}
        </a>
      )}
      {submenu && (
        <>
          <a
            ref={submenuRef}
            href={NavLink}
            className="flex items-center justify-between py-2 text-base font-medium text-white hover:opacity-90 group-hover:opacity-90 lg:mx-4 lg:inline-flex lg:py-2"
            onClick={() => {
              event.preventDefault();
              setSubmenuOpen(!submenuOpen);
            }}
          >
            {menuName}
            <span className="pl-2">
              <svg
                width="11"
                height="6"
                viewBox="0 0 11 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.39683 5.40046C5.20176 5.40046 5.00669 5.33284 4.84413 5.1807L0.487528 0.920728C0.373737 0.802396 0.373737 0.616445 0.471272 0.498112C0.585064 0.37978 0.76388 0.37978 0.877671 0.481208L5.23427 4.74118C5.31555 4.8257 5.46185 4.8257 5.55939 4.74118L9.91599 0.481208C10.0298 0.362875 10.2086 0.37978 10.3224 0.498112C10.4362 0.616445 10.4199 0.802396 10.3061 0.920728L5.94953 5.16379C5.78697 5.31594 5.5919 5.40046 5.39683 5.40046Z"
                  fill="currentColor"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.56447 5.4667L0.199071 1.19812C-0.0611467 0.927515 -0.0588086 0.512326 0.16261 0.243696L0.172344 0.231887L0.182952 0.220855C0.450688 -0.0575644 0.874846 -0.0571462 1.14383 0.182609L1.15072 0.188754L5.39683 4.34069L9.63276 0.198704C9.93371 -0.108224 10.3725 -0.0268578 10.6107 0.220855C10.9 0.521698 10.829 0.954046 10.5944 1.19798L10.5854 1.20743L6.22292 5.4559C5.99907 5.66539 5.70971 5.80046 5.39683 5.80046C5.10561 5.80046 4.81129 5.69783 4.5708 5.47274L4.56447 5.4667ZM9.91599 0.481208L5.55939 4.74118C5.46185 4.8257 5.31555 4.8257 5.23427 4.74118L0.877671 0.481208C0.76388 0.37978 0.585064 0.37978 0.471272 0.498112C0.373737 0.616445 0.373737 0.802396 0.487528 0.920728L4.84413 5.1807C5.00669 5.33284 5.20176 5.40046 5.39683 5.40046C5.5919 5.40046 5.78697 5.31594 5.94953 5.16379L10.3061 0.920728C10.4199 0.802396 10.4362 0.616445 10.3224 0.498112C10.2086 0.37978 10.0298 0.362875 9.91599 0.481208Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
          </a>
          <div
            ref={submenuRef}
            onFocus={() => setSubmenuOpen(true)}
            onBlur={() => setSubmenuOpen(false)}
            className={`${
              !submenuOpen ? "hidden lg:block" : "block"
            } relative left-0 top-full rounded-lg px-2 transition-all group-hover:opacity-100 lg:invisible lg:absolute lg:top-[115%] lg:w-[250px] lg:border-[.5px] lg:border-[#e7e7e7] lg:bg-primary lg:px-6 lg:py-4 lg:opacity-0 lg:group-hover:visible lg:group-hover:top-full`}
          >
            <SubmenuItem link="/#" name="Arts &amp; Crafts" />
            <SubmenuItem link="/#" name="Fashion" />
            <SubmenuItem link="/#" name="Bags &amp; Shoes" />
            <SubmenuItem link="/#" name="Jewelry &amp; Watch" />
          </div>
        </>
      )}
    </li>
  );
};

const SubmenuItem = ({ link, name }) => {
  return (
    <a
      href={link}
      className="block rounded-sm py-2 text-sm font-medium text-white hover:opacity-90"
    >
      {name}
    </a>
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
