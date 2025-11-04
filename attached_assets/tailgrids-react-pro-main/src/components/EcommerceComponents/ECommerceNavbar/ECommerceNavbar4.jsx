import React, { useEffect, useRef, useState } from "react";

const ECommerceNavbar4 = () => {
  return (
    <>
      {/* <!-- ====== Navbar Section Start --> */}
      <header className="w-full bg-white dark:bg-dark">
        <div className="hidden border-b border-stroke dark:border-dark-3 sm:block">
          <div className="container mx-auto">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4 md:w-2/3 lg:w-1/2">
                <ul className="-mx-3 flex items-center">
                  <TopNavItem link="/#" name="About Us" />
                  <TopNavItem link="/#" name="Order Tracking" />
                  <TopNavItem link="/#" name="Contact Us" />
                  <TopNavItem link="/#" name="FAQs" />
                </ul>
              </div>
              <div className="w-full px-4 md:w-1/3 lg:w-1/2">
                <div className="-mx-3 hidden items-center justify-end md:flex">
                  <div className="px-3">
                    <div className="relative">
                      <select className="w-full appearance-none rounded-lg bg-transparent py-3 pl-3 pr-5 text-sm font-medium text-body-color outline-hidden transition dark:text-dark-6">
                        <option value="">English</option>
                        <option value="">Urdu</option>
                        <option value="">Hindi</option>
                      </select>
                      <span className="absolute right-0 top-1/2 -translate-y-1/2 text-body-color dark:text-dark-6">
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
                  </div>
                  <div className="px-3">
                    <div className="relative">
                      <select className="w-full appearance-none rounded-lg bg-transparent py-3 pl-3 pr-5 text-sm font-medium text-body-color outline-hidden transition dark:text-dark-6">
                        <option value="">USD</option>
                        <option value="">INR</option>
                        <option value="">ERU</option>
                      </select>
                      <span className="absolute right-0 top-1/2 -translate-y-1/2 text-body-color dark:text-dark-6">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <MiddleNavbar />
        <Navbar>
          <ListItem NavLink="/#" menuName="Mens" />
          <ListItem NavLink="/#" menuName="Womans" />
          <ListItem NavLink="/#" menuName="Kids" />
          <ListItem NavLink="/#" menuName="Electronic Items" />
          <ListItem NavLink="/#" menuName="Kitchen Accessories" />
          <ListItem NavLink="/#" menuName="News & Blogs" />
          <ListItem NavLink="/#" menuName="Contact Us" />
        </Navbar>
      </header>
      {/* <!-- ====== Navbar Section End -->    */}
    </>
  );
};

export default ECommerceNavbar4;

const TopNavItem = ({ link, name }) => {
  return (
    <li>
      <a
        href={link}
        className="inline-block px-3 py-4 text-sm font-medium text-body-color hover:text-primary dark:text-dark-6"
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
    <div className="border-b border-stroke dark:border-dark-3 lg:py-4">
      <div className="container mx-auto">
        <div className="relative -mx-4 flex items-center justify-center sm:justify-between">
          <div className="w-48 max-w-full px-4 sm:w-60 lg:w-48">
            <a href="/#" className="block w-full py-5 lg:py-3">
              <img
                src="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/logo/logo-primary.svg"
                alt="logo"
                className="w-full"
              />
            </a>
          </div>
          <div className="hidden w-full items-center justify-end px-4 sm:flex lg:justify-between">
            <div className="hidden w-full lg:flex">
              <form className="relative flex w-full items-center rounded-md border border-stroke bg-gray-2 dark:border-dark-3 dark:bg-dark-2">
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
                      <path d="M7.00001 9.975C6.86876 9.975 6.75938 9.93125 6.65001 9.84375L1.61876 4.9C1.42188 4.70312 1.42188 4.39687 1.61876 4.2C1.81563 4.00312 2.12188 4.00312 2.31876 4.2L7.00001 8.77187L11.6813 4.15625C11.8781 3.95937 12.1844 3.95937 12.3813 4.15625C12.5781 4.35312 12.5781 4.65937 12.3813 4.85625L7.35001 9.8C7.24063 9.90937 7.13126 9.975 7.00001 9.975Z" />
                    </svg>
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="I'm shopping for..."
                  className="w-full bg-transparent py-3 pl-6 pr-[58px] text-base text-body-color outline-hidden dark:text-dark-6"
                />
                <button className="absolute right-0 top-0 flex h-full w-[52px] items-center justify-center rounded-br-md rounded-tr-md border border-primary bg-primary text-white">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current"
                  >
                    <path d="M23.025 20.8875L16.8375 15.8625C19.3875 12.375 19.125 7.3875 15.9375 4.2375C14.25 2.55 12 1.6125 9.6 1.6125C7.2 1.6125 4.95 2.55 3.2625 4.2375C-0.225 7.725 -0.225 13.425 3.2625 16.9125C4.95 18.6 7.2 19.5375 9.6 19.5375C11.8875 19.5375 14.025 18.675 15.7125 17.1375L21.975 22.2C22.125 22.3125 22.3125 22.3875 22.5 22.3875C22.7625 22.3875 22.9875 22.275 23.1375 22.0875C23.4375 21.7125 23.4 21.1875 23.025 20.8875ZM9.6 17.85C7.65 17.85 5.85 17.1 4.4625 15.7125C1.6125 12.8625 1.6125 8.25 4.4625 5.4375C5.85 4.05 7.65 3.3 9.6 3.3C11.55 3.3 13.35 4.05 14.7375 5.4375C17.5875 8.2875 17.5875 12.9 14.7375 15.7125C13.3875 17.1 11.55 17.85 9.6 17.85Z" />
                  </svg>
                </button>
              </form>
            </div>

            <div className="flex w-full items-center justify-end space-x-4">
              <div className="hidden items-center pr-1 md:flex">
                <div className="mr-3 flex h-[42px] w-[42px] items-center justify-center rounded-full border-[.5px] border-stroke bg-gray-2 text-dark dark:border-dark-3 dark:bg-dark-2 dark:text-white">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current"
                  >
                    <path d="M20.6937 18.975L20.075 12.7531C19.9719 11.6187 19.0094 10.7594 17.875 10.7594H4.125C2.99062 10.7594 2.0625 11.6187 1.925 12.7531L1.30625 18.975C1.2375 19.5937 1.44375 20.2125 1.85625 20.6594C2.26875 21.1062 2.85312 21.3812 3.47187 21.3812H18.4594C19.0781 21.3812 19.6625 21.1062 20.075 20.6594C20.5562 20.2125 20.7281 19.5937 20.6937 18.975ZM18.975 19.6281C18.8375 19.7656 18.6656 19.8344 18.4937 19.8344H3.50625C3.33437 19.8344 3.1625 19.7656 3.025 19.6281C2.8875 19.4906 2.85312 19.3187 2.85312 19.1125L3.47187 12.8906C3.50625 12.5469 3.78125 12.3062 4.125 12.3062H17.875C18.2187 12.3062 18.4937 12.5469 18.5281 12.8906L19.1469 19.1125C19.1469 19.3187 19.1125 19.4906 18.975 19.6281Z" />
                    <path d="M11 13.5094C9.59063 13.5094 8.42188 14.6781 8.42188 16.0875C8.42188 17.5312 9.59063 18.6656 11 18.6656C12.4437 18.6656 13.5781 17.4969 13.5781 16.0875C13.5781 14.6781 12.4437 13.5094 11 13.5094ZM11 17.1187C10.4156 17.1187 9.96875 16.6375 9.96875 16.0875C9.96875 15.5031 10.45 15.0562 11 15.0562C11.5844 15.0562 12.0312 15.5375 12.0312 16.0875C12.0312 16.6719 11.5844 17.1187 11 17.1187Z" />
                    <path d="M2.09687 7.08124C2.16562 8.59374 3.47187 9.38437 4.36562 9.38437H6.77187H6.80625C7.90625 9.31562 9.00625 8.59374 9.00625 7.08124V6.42812C10.175 6.42812 12.4094 6.42812 13.5437 6.42812V7.08124C13.5437 8.59374 14.6437 9.31562 15.7437 9.38437H18.1844C19.1125 9.38437 20.3844 8.59374 20.4531 7.08124C20.4531 6.97812 20.4531 5.74062 20.4531 5.67187C20.4531 5.63749 20.4531 5.60312 20.4531 5.56874C20.35 4.57187 20.0062 3.74687 19.3875 3.09374L19.3531 3.05937C18.4594 2.23437 17.4281 1.78749 16.6375 1.51249C14.3 0.618744 11.3781 0.618744 11.2406 0.618744C9.17812 0.653119 7.87187 0.824994 5.87812 1.51249C5.05312 1.82187 4.02187 2.26874 3.12812 3.05937L3.09375 3.09374C2.475 3.74687 2.13125 4.57187 2.02812 5.56874C2.02812 5.60312 2.02812 5.63749 2.02812 5.67187C2.0625 5.74062 2.09687 6.94374 2.09687 7.08124ZM4.22812 4.19374C4.91562 3.57499 5.74062 3.23124 6.42812 2.95624C8.21562 2.30312 9.35 2.19999 11.275 2.13124C11.4469 2.13124 14.0594 2.16562 16.1219 2.95624C16.8437 3.23124 17.6687 3.57499 18.3219 4.19374C18.6656 4.57187 18.8719 5.08749 18.9406 5.67187C18.9406 5.77499 18.9406 6.90937 18.9406 7.01249C18.9062 7.73437 18.2187 7.83749 18.2187 7.83749H15.8469C15.5031 7.80312 15.125 7.66562 15.125 7.08124V5.67187C15.125 5.32812 14.9187 5.01874 14.575 4.94999C14.3344 4.81249 8.25 4.81249 8.00937 4.91562C7.7 5.01874 7.45937 5.32812 7.45937 5.63749V7.08124C7.45937 7.66562 7.08125 7.80312 6.7375 7.83749H4.36562C4.36562 7.83749 3.67812 7.73437 3.64375 7.04687C3.64375 6.94374 3.64375 6.56562 3.64375 6.22187C3.64375 5.98124 3.64375 5.80937 3.64375 5.70624C3.67812 5.05312 3.88437 4.57187 4.22812 4.19374Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-dark dark:text-white">
                    Need Help?
                    <br />
                    +001 123 456 789
                  </p>
                </div>
              </div>

              <div>
                <button className="relative flex h-[42px] w-[42px] items-center justify-center rounded-full border-[.5px] border-stroke bg-gray-2 text-dark dark:border-dark-3 dark:bg-dark-2 dark:text-white">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current"
                  >
                    <path d="M11 9.62499C8.42188 9.62499 6.35938 7.59687 6.35938 5.12187C6.35938 2.64687 8.42188 0.618744 11 0.618744C13.5781 0.618744 15.6406 2.64687 15.6406 5.12187C15.6406 7.59687 13.5781 9.62499 11 9.62499ZM11 2.16562C9.28125 2.16562 7.90625 3.50624 7.90625 5.12187C7.90625 6.73749 9.28125 8.07812 11 8.07812C12.7188 8.07812 14.0938 6.73749 14.0938 5.12187C14.0938 3.50624 12.7188 2.16562 11 2.16562Z" />
                    <path d="M18.2531 21.4156C17.8406 21.4156 17.4625 21.0719 17.4625 20.625V19.6281C17.4625 16.0531 14.575 13.1656 11 13.1656C7.42499 13.1656 4.53749 16.0531 4.53749 19.6281V20.625C4.53749 21.0375 4.19374 21.4156 3.74686 21.4156C3.29999 21.4156 2.95624 21.0719 2.95624 20.625V19.6281C2.95624 15.1937 6.56561 11.6187 10.9656 11.6187C15.3656 11.6187 18.975 15.2281 18.975 19.6281V20.625C19.0094 21.0375 18.6656 21.4156 18.2531 21.4156Z" />
                  </svg>
                </button>
              </div>

              <div className="relative z-20">
                <div className="flex max-w-[200px] justify-end">
                  <button
                    ref={wishlistTrigger}
                    onClick={() => setIsWishlist(!isWishlist)}
                    className="relative flex h-[42px] w-[42px] items-center justify-center rounded-full border-[.5px] border-stroke bg-gray-2 text-dark dark:border-dark-3 dark:bg-dark-2 dark:text-white"
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-current"
                    >
                      <path d="M11 20.2812C10.5531 20.2812 10.1062 20.1094 9.7625 19.8C8.97187 19.1125 8.24999 18.4937 7.59687 17.9438C5.63749 16.2594 3.91874 14.85 2.71562 13.4062C1.30624 11.6875 0.618744 10.0719 0.618744 8.25C0.618744 6.49687 1.23749 4.84688 2.33749 3.64375C3.47187 2.40625 5.05312 1.71875 6.73749 1.71875C8.00937 1.71875 9.21249 2.13125 10.2437 2.92188C10.5187 3.12812 10.7594 3.33438 11 3.60938C11.2406 3.36875 11.4812 3.12812 11.7562 2.92188C12.7875 2.13125 13.9562 1.71875 15.2625 1.71875C16.9812 1.71875 18.5281 2.40625 19.6625 3.64375C20.7969 4.84688 21.3812 6.49687 21.3812 8.25C21.3812 10.0719 20.7281 11.6875 19.2844 13.4062C18.0812 14.85 16.3625 16.2937 14.4031 17.9438C13.75 18.4937 12.9937 19.1469 12.2031 19.8C11.8937 20.1094 11.4469 20.2812 11 20.2812ZM6.73749 3.26562C5.46562 3.26562 4.29687 3.78125 3.43749 4.675C2.61249 5.60313 2.16562 6.875 2.16562 8.25C2.16562 9.65938 2.71562 11 3.88437 12.4094C5.01874 13.75 6.66874 15.1594 8.55937 16.775C9.21249 17.325 9.96874 17.9781 10.7594 18.6656C10.8969 18.7687 11.1031 18.7687 11.2406 18.6656C12.0312 17.9781 12.7875 17.3594 13.4406 16.775C15.3656 15.125 17.0156 13.75 18.1156 12.4094C19.2844 11 19.8344 9.65938 19.8344 8.25C19.8344 6.875 19.3531 5.60312 18.5281 4.70937C17.6687 3.78125 16.5 3.26562 15.2625 3.26562C14.3344 3.26562 13.475 3.575 12.7187 4.125C12.4094 4.36562 12.1344 4.64062 11.8594 4.95C11.6531 5.19062 11.3437 5.3625 11 5.3625C10.6562 5.3625 10.3812 5.225 10.1406 4.95C9.86562 4.64062 9.59062 4.36562 9.28125 4.125C8.55937 3.575 7.7 3.26562 6.73749 3.26562Z" />
                    </svg>

                    <span className="absolute -right-1 -top-1 h-[18px] w-[18px] rounded-full bg-primary text-[10px] font-semibold leading-[18px] text-white">
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

              <div className="relative z-20">
                <div className="flex max-w-[200px] justify-end">
                  <button
                    ref={cartTrigger}
                    onClick={() => setIsCartOpen(!isCartOpen)}
                    className="relative flex h-[42px] w-[42px] items-center justify-center rounded-full border-[.5px] border-stroke bg-gray-2 text-dark dark:border-dark-3 dark:bg-dark-2 dark:text-white"
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-current"
                    >
                      <path d="M19.3875 6.7375H18.5625L16.3281 1.1C16.1562 0.687499 15.7094 0.515624 15.3312 0.653124C14.9187 0.824999 14.7469 1.27187 14.8844 1.65L16.8781 6.7375H5.12187L7.11562 1.68437C7.28749 1.27187 7.08124 0.824999 6.66874 0.687499C6.29062 0.515624 5.84374 0.687499 5.67187 1.1L3.43749 6.7375H2.61249C1.99374 6.7375 1.47812 7.25312 1.47812 7.87187V10.6562C1.47812 11.2406 1.89062 11.6875 2.47499 11.7562L3.33437 19.25C3.47187 20.4875 4.50312 21.4156 5.74062 21.4156H16.2594C17.4969 21.4156 18.5281 20.4875 18.6656 19.25L19.525 11.7562C20.075 11.6875 20.5219 11.2062 20.5219 10.6562V7.8375C20.5219 7.21875 20.0062 6.7375 19.3875 6.7375ZM3.02499 8.28437H18.975V10.2437H3.02499V8.28437ZM16.2594 19.8687H5.74062C5.29374 19.8687 4.91562 19.525 4.84687 19.0781L4.02187 11.7906H17.9781L17.1531 19.0781C17.0844 19.525 16.7062 19.8687 16.2594 19.8687Z" />
                      <path d="M7.49375 13.3375C7.08125 13.3375 6.70312 13.6812 6.70312 14.1281V16.7062C6.70312 17.1187 7.04687 17.4969 7.49375 17.4969C7.94062 17.4969 8.28438 17.1531 8.28438 16.7062V14.0937C8.28438 13.6812 7.94062 13.3375 7.49375 13.3375Z" />
                      <path d="M14.5062 13.3375C14.0937 13.3375 13.7156 13.6812 13.7156 14.1281V16.7062C13.7156 17.1187 14.0594 17.4969 14.5062 17.4969C14.9531 17.4969 15.2969 17.1531 15.2969 16.7062V14.0937C15.2625 13.6812 14.9187 13.3375 14.5062 13.3375Z" />
                    </svg>

                    <span className="absolute -right-1 -top-1 h-[18px] w-[18px] rounded-full bg-primary text-[10px] font-semibold leading-[18px] text-white">
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
          <AllCategories link="/#">
            <SubmenuItem link="/#" name="Arts & Crafts" />
            <SubmenuItem link="/#" name="Fashion" submenu />
            <SubmenuItem link="/#" name="Bags & Shoes" />
            <SubmenuItem link="/#" name="Jewelry & Watch" />
          </AllCategories>

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
                className={`absolute right-4 top-full w-full max-w-[250px] justify-center rounded-lg bg-white px-6 py-5 shadow dark:bg-dark-2 lg:static lg:flex lg:w-full lg:max-w-full lg:justify-end lg:bg-transparent lg:px-0 lg:py-0 lg:shadow-none ${
                  !open && "hidden"
                } `}
              >
                <ul className="block items-center lg:flex">{children}</ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AllCategories = ({ link, children }) => {
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
    <div className="w-full max-w-full px-4 lg:w-60">
      <div className="relative py-4">
        <a
          href={link}
          ref={menuTrigger}
          onClick={() => setOpen(!open)}
          className="inline-flex items-center justify-between whitespace-nowrap rounded-[5px] bg-primary py-[9px] pl-4 pr-[18px] text-base font-medium text-white hover:bg-primary/90"
        >
          <span className="pr-[10px] text-white">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current"
            >
              <path d="M16.875 8.38125H1.12502C0.787524 8.38125 0.478149 8.6625 0.478149 9.02812C0.478149 9.36562 0.759399 9.675 1.12502 9.675H16.875C17.2125 9.675 17.5219 9.39375 17.5219 9.02812C17.5219 8.6625 17.2125 8.38125 16.875 8.38125Z" />
              <path d="M16.875 13.1625H1.12502C0.787524 13.1625 0.478149 13.4437 0.478149 13.8094C0.478149 14.175 0.759399 14.4562 1.12502 14.4562H16.875C17.2125 14.4562 17.5219 14.175 17.5219 13.8094C17.5219 13.4437 17.2125 13.1625 16.875 13.1625Z" />
              <path d="M1.12502 4.8375H16.875C17.2125 4.8375 17.5219 4.55625 17.5219 4.19062C17.5219 3.825 17.2406 3.54375 16.875 3.54375H1.12502C0.787524 3.54375 0.478149 3.825 0.478149 4.19062C0.478149 4.55625 0.787524 4.8375 1.12502 4.8375Z" />
            </svg>
          </span>
          All categories
          <span className="pl-3 text-white">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current"
            >
              <path d="M8.00002 11.4C7.85002 11.4 7.72502 11.35 7.60002 11.25L1.85002 5.6C1.62502 5.375 1.62502 5.025 1.85002 4.8C2.07502 4.575 2.42502 4.575 2.65002 4.8L8.00002 10.025L13.35 4.75C13.575 4.525 13.925 4.525 14.15 4.75C14.375 4.975 14.375 5.325 14.15 5.55L8.40002 11.2C8.27502 11.325 8.15002 11.4 8.00002 11.4Z" />
            </svg>
          </span>
        </a>
        <div
          ref={menuRef}
          className={`absolute left-0 top-[115%] z-10 w-[180px] rounded-lg border-[.5px] border-stroke bg-white py-4 transition-all dark:border-dark-3 dark:bg-dark-2 ${
            !open && "hidden"
          } `}
        >
          <span className="absolute -top-[6px] left-6 -z-10 hidden h-3 w-3 rotate-45 rounded-xs border-[.5px] border-b-0 border-r-0 border-stroke bg-white dark:border-dark-3 dark:bg-dark-2 lg:block"></span>
          {children}
        </div>
      </div>
    </div>
  );
};

const SubmenuItem = ({ link, name, submenu }) => {
  return (
    <>
      {!submenu && (
        <div className="px-6">
          <a
            href={link}
            className="flex items-center justify-between py-[6px] text-sm text-body-color hover:text-primary dark:text-dark-6"
          >
            {name}
          </a>
        </div>
      )}
      {submenu && (
        <div className="group relative px-6">
          <a
            href={link}
            className="flex items-center justify-between py-[6px] text-sm text-body-color hover:text-primary dark:text-dark-6"
          >
            {name}
            <span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current"
              >
                <path d="M4.52811 12.5344C4.39686 12.5344 4.28749 12.4906 4.17811 12.4031C3.98124 12.2063 3.98124 11.9 4.17811 11.7031L8.77186 7L4.17811 2.31875C3.98124 2.12188 3.98124 1.81563 4.17811 1.61875C4.37499 1.42188 4.68124 1.42188 4.87811 1.61875L9.82186 6.65C10.0187 6.84688 10.0187 7.15313 9.82186 7.35L4.87811 12.3813C4.79061 12.4688 4.65936 12.5344 4.52811 12.5344Z" />
              </svg>
            </span>
          </a>
          <div
            className={`left-full top-0 border-stroke bg-white py-2 group-hover:visible group-hover:opacity-100 dark:border-dark-3 dark:bg-dark-2 lg:invisible lg:absolute lg:w-[600px] lg:rounded-sm lg:border-[.5px] lg:px-8 lg:py-8 lg:opacity-0 xl:w-[650px]`}
          >
            <div className="-mx-2 flex flex-wrap">
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
        </div>
      )}
    </>
  );
};

const ListItem = ({ NavLink, menuName }) => {
  return (
    <li>
      <a
        href={NavLink}
        className="flex justify-between py-2 text-base font-medium text-body-color hover:text-primary dark:text-dark-6 lg:mx-4 lg:inline-flex lg:py-6"
      >
        {menuName}
      </a>
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
