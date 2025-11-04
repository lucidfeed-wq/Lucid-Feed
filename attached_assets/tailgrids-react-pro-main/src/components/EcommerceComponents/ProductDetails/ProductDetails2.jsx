import React, { useEffect, useRef, useState } from "react";

const ProductDetails2 = () => {
  const [open, setOpen] = useState(false);
  const [productOne, setProductOne] = useState(true);
  const [productTwo, setProductTwo] = useState(false);
  const [productThree, setProductThree] = useState(false);
  const [productFour, setProductFour] = useState(false);

  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

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
    <section className="bg-gray-2 dark:bg-dark pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
      <div className="container mx-auto">
        <div className="overflow-hidden rounded-xl border border-stroke dark:border-dark-3 bg-white dark:bg-dark-2 p-[22px]">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-12 lg:mb-0 lg:mr-5 xl:mr-10">
                <div className="relative mb-5 overflow-hidden">
                  <button
                    ref={menuTrigger}
                    onClick={() => setOpen(!open)}
                    className="shadow-card absolute top-6 right-6 flex h-[60px] w-[60px] drop-shadow-three items-center justify-center rounded-full bg-white dark:bg-dark-2 text-dark dark:text-white"
                  >
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-current"
                    >
                      <g clipPath="url(#clip0_1032_24424)">
                        <path d="M22.8374 21.6375L16.1624 14.9625C18.9374 11.5875 18.7499 6.56252 15.5999 3.41252C13.9874 1.80002 11.8124 0.900024 9.5249 0.900024C7.2374 0.900024 5.0624 1.80002 3.4499 3.41252C0.112402 6.75002 0.112402 12.225 3.4499 15.5625C5.0624 17.175 7.2374 18.075 9.5249 18.075C11.5499 18.075 13.4249 17.4 14.9624 16.125L21.6374 22.8C21.7874 22.95 22.0124 23.0625 22.2374 23.0625C22.4624 23.0625 22.6874 22.9875 22.8374 22.8C23.1749 22.5 23.1749 21.975 22.8374 21.6375ZM4.6499 14.4C1.9499 11.7 1.9499 7.31252 4.6499 4.61252C5.9624 3.30002 7.6874 2.58752 9.5249 2.58752C11.3624 2.58752 13.0874 3.30002 14.3999 4.61252C17.0999 7.31252 17.0999 11.7 14.3999 14.4C13.0874 15.7125 11.3624 16.425 9.5249 16.425C7.6874 16.425 5.9249 15.7125 4.6499 14.4Z" />
                        <path d="M11.7375 8.66248H10.35V7.27498C10.35 6.82498 9.975 6.41248 9.4875 6.41248C9 6.41248 8.625 6.78748 8.625 7.27498V8.66248H7.2375C6.7875 8.66248 6.375 9.03748 6.375 9.52498C6.375 10.0125 6.75 10.3875 7.2375 10.3875H8.625V11.775C8.625 12.225 9 12.6 9.4875 12.6C9.975 12.6 10.35 12.225 10.35 11.775V10.3875H11.7375C12.1875 10.3875 12.6 10.0125 12.6 9.52498C12.6 9.03748 12.1875 8.66248 11.7375 8.66248Z" />
                      </g>
                      <defs>
                        <clipPath id="clip0_1032_24424">
                          <rect width={24} height={24} fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                  <img
                    src="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products-details/details-02/big-image-01.jpg"
                    alt="products-details"
                    className={`${productOne ? "block" : "hidden"} w-full rounded-md`}
                  />
                  <img
                    src="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products-details/details-02/big-image-02.jpg"
                    alt="products-details"
                    className={`${productTwo ? "block" : "hidden"} w-full rounded-md`}
                  />
                  <img
                    src="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products-details/details-02/big-image-03.jpg"
                    alt="products-details"
                    className={`${productThree ? "block" : "hidden"} w-full rounded-md`}
                  />
                  <img
                    src="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products-details/details-02/big-image-04.jpg"
                    alt="products-details"
                    className={`${productFour ? "block" : "hidden"} w-full rounded-md`}
                  />
                </div>
                <div className="-mx-2 flex items-center justify-between">
                  <div className="w-1/4 px-2">
                    <button
                      onClick={() => {
                        setProductOne(true);
                        setProductTwo(false);
                        setProductThree(false);
                        setProductFour(false);
                      }}
                      className={`${
                        productOne ? "border-primary" : "border-transparent"
                      } w-full overflow-hidden rounded-md border-2`}
                    >
                      <img
                        src="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products-details/details-02/thumbnail-01.jpg"
                        alt="thumbnail-01"
                        className="w-full"
                      />
                    </button>
                  </div>
                  <div className="w-1/4 px-2">
                    <button
                      onClick={() => {
                        setProductOne(false);
                        setProductTwo(true);
                        setProductThree(false);
                        setProductFour(false);
                      }}
                      className={`${
                        productTwo ? "border-primary" : "border-transparent"
                      } w-full overflow-hidden rounded-md border-2`}
                    >
                      <img
                        src="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products-details/details-02/thumbnail-02.jpg"
                        alt="thumbnail-01"
                        className="w-full"
                      />
                    </button>
                  </div>
                  <div className="w-1/4 px-2">
                    <button
                      onClick={() => {
                        setProductOne(false);
                        setProductTwo(false);
                        setProductThree(true);
                        setProductFour(false);
                      }}
                      className={`${
                        productThree ? "border-primary" : "border-transparent"
                      } w-full overflow-hidden rounded-md border-2`}
                    >
                      <img
                        src="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products-details/details-02/thumbnail-03.jpg"
                        alt="thumbnail-01"
                        className="w-full"
                      />
                    </button>
                  </div>
                  <div className="w-1/4 px-2">
                    <button
                      onClick={() => {
                        setProductOne(false);
                        setProductTwo(false);
                        setProductThree(false);
                        setProductFour(true);
                      }}
                      className={`${
                        productFour ? "border-primary" : "border-transparent"
                      } w-full overflow-hidden rounded-md border-2`}
                    >
                      <img
                        src="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products-details/details-02/thumbnail-04.jpg"
                        alt="thumbnail-01"
                        className="w-full"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <h3 className="mb-4 text-xl font-semibold text-dark dark:text-white lg:text-2xl xl:leading-[1.2] xl:text-[28px]">
                Macbook Pro M1 8/256GB
              </h3>
              <p className="text-body-color mb-5 text-base dark:text-dark-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                non erat quam. Vestibulum aliquam nibh.
              </p>
              <div className="flex flex-wrap items-center">
                <div className="flex items-center pr-6">
                  <h3 className="text-lg font-bold text-dark dark:text-white sm:text-2xl lg:text-2xl xl:leading-[1.2] xl:text-[28px]">
                    <span className="pr-3"> $1200.99 </span>
                    <span className="text-body-color dark:text-dark-6 line-through">
                      {" "}
                      $1500.99{" "}
                    </span>
                  </h3>
                </div>
                <div className="flex items-center">
                  <span className="pr-2">
                    <svg
                      width={20}
                      height={21}
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 1.0625C4.78125 1.0625 0.5625 5.28125 0.5625 10.5C0.5625 15.7188 4.78125 19.9688 10 19.9688C15.2188 19.9688 19.4688 15.7188 19.4688 10.5C19.4688 5.28125 15.2188 1.0625 10 1.0625ZM10 18.5625C5.5625 18.5625 1.96875 14.9375 1.96875 10.5C1.96875 6.0625 5.5625 2.46875 10 2.46875C14.4375 2.46875 18.0625 6.09375 18.0625 10.5312C18.0625 14.9375 14.4375 18.5625 10 18.5625Z"
                        fill="#22AD5C"
                      />
                      <path
                        d="M12.6874 7.5938L8.96868 11.2188L7.28118 9.56255C6.99993 9.2813 6.56243 9.31255 6.28118 9.56255C5.99993 9.8438 6.03118 10.2813 6.28118 10.5626L8.28118 12.5001C8.46868 12.6876 8.71868 12.7813 8.96868 12.7813C9.21868 12.7813 9.46868 12.6876 9.65618 12.5001L13.6874 8.62505C13.9687 8.3438 13.9687 7.9063 13.6874 7.62505C13.4062 7.3438 12.9687 7.3438 12.6874 7.5938Z"
                        fill="#22AD5C"
                      />
                    </svg>
                  </span>
                  <span className="text-base font-medium text-dark dark:text-white">
                    {" "}
                    In Stock{" "}
                  </span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="mb-[18px] text-lg font-semibold text-dark dark:text-white">Color</h4>
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <input
                      type="radio"
                      name="productColor"
                      id="black"
                      className="productColor sr-only"
                    />
                    <label
                      htmlFor="black"
                      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-4 border-dark"
                    >
                      <span className="h-10 w-10 rounded-full bg-dark"></span>
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="radio"
                      name="productColor"
                      id="black2"
                      className="productColor sr-only"
                    />
                    <label
                      htmlFor="black2"
                      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-4 border-[#8B949B]"
                    >
                      <span className="h-10 w-10 rounded-full bg-[#8B949B]"></span>
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="radio"
                      name="productColor"
                      id="black3"
                      className="productColor sr-only"
                    />
                    <label
                      htmlFor="black3"
                      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-4 border-[#DFE4EA]"
                    >
                      <span className="h-10 w-10 rounded-full bg-[#DFE4EA]"></span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="mt-[22px]">
                  <h4 className="mb-4 text-lg font-semibold text-dark dark:text-white">
                    Specification
                  </h4>
                  <div className="space-y-3">
                    <p className="text-dark dark:text-white text-base sm:flex">
                      <span className="block w-28 font-medium"> Memory : </span>
                      <span> 8GB unified memory </span>
                    </p>
                    <p className="text-dark dark:text-white text-base sm:flex">
                      <span className="block w-28 font-medium"> Storage : </span>
                      <span> 256GB/512GB SSD storage </span>
                    </p>
                    <p className="text-dark dark:text-white text-base sm:flex">
                      <span className="block w-28 font-medium"> Display : </span>
                      <span> 13-inch Retina display with True Tone </span>
                    </p>
                    <p className="text-dark dark:text-white text-base sm:flex">
                      <span className="block w-28 font-medium"> Processor : </span>
                      <span> Apple M1 chip with 8-core CPU &amp; GPU </span>
                    </p>
                  </div>
                </div>

              <div className="mt-[22px] flex flex-wrap">
                <div className="mb-[22px] mr-[60px]">
                  <h4 className="mb-[18px] text-lg font-semibold text-dark dark:text-white">RAM</h4>
                  <div className="flex items-center space-x-3">
                    <div>
                      <input
                        type="radio"
                        name="ram"
                        id="8gb"
                        className="ram-size sr-only"
                      />
                      <label
                        htmlFor="8gb"
                        className="inline-block cursor-pointer rounded-sm border border-stroke dark:border-dark-3 py-2 px-4 text-base font-semibold text-dark dark:text-white"
                      >
                        8GB
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        name="ram"
                        id="16gb"
                        className="ram-size sr-only"
                      />
                      <label
                        htmlFor="16gb"
                        className="inline-block cursor-pointer rounded-sm border border-stroke dark:border-dark-3 py-2 px-4 text-base font-semibold text-dark dark:text-white"
                      >
                        16GB
                      </label>
                    </div>
                  </div>
                </div>
                <div className="mb-5">
                  <h4 className="mb-4 text-lg font-semibold text-black">
                    Storage
                  </h4>
                  <div className="flex items-center space-x-3">
                    <div>
                      <input
                        type="radio"
                        name="storage"
                        id="256gb"
                        className="ram-size sr-only"
                      />
                      <label
                        htmlFor="256gb"
                        className="inline-block cursor-pointer rounded-sm border border-stroke dark:border-dark-3 py-2 px-4 text-base font-semibold text-dark dark:text-white"
                      >
                        256GB
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        name="storage"
                        id="512gb"
                        className="ram-size sr-only"
                      />
                      <label
                        htmlFor="512gb"
                        className="inline-block cursor-pointer rounded-sm border border-stroke dark:border-dark-3 py-2 px-4 text-base font-semibold text-dark dark:text-white"
                      >
                        512GB
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        name="storage"
                        id="1tb"
                        className="ram-size sr-only"
                      />
                      <label
                        htmlFor="1tb"
                        className="inline-block cursor-pointer rounded-sm border border-stroke dark:border-dark-3 py-2 px-4 text-base font-semibold text-dark dark:text-white"
                      >
                        1TB
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap">
                <div className="mr-5 mb-4 inline-flex items-center rounded-sm border border-stroke dark:border-dark-3 text-base font-medium text-dark dark:text-white">
                  <span 
                    className="cursor-pointer select-none flex items-center justify-center w-9 h-12 text-dark dark:text-white" 
                    onClick={decrement}
                  >
                    <svg
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-current"
                    >
                      <path d="M11.0626 6.43135H0.937598C0.712598 6.43135 0.506348 6.24385 0.506348 6.0001C0.506348 5.7751 0.693848 5.56885 0.937598 5.56885H11.0626C11.2876 5.56885 11.4938 5.75635 11.4938 6.0001C11.4938 6.2251 11.2876 6.43135 11.0626 6.43135Z" />
                    </svg>
                  </span>
                  <span className="py-3 px-5 border-x border-stroke dark:border-dark-3">{quantity}</span>
                  <span 
                    className="cursor-pointer select-none flex items-center justify-center w-9 h-12 text-dark dark:text-white"
                    onClick={increment}
                  >
                    <svg
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-current"
                    >
                      <g clipPath="url(#clip0_1032_24236)">
                        <path d="M11.2501 5.5876H6.43135V0.750098C6.43135 0.525098 6.24385 0.318848 6.0001 0.318848C5.7751 0.318848 5.56885 0.506348 5.56885 0.750098V5.5876H0.750098C0.525098 5.5876 0.318848 5.7751 0.318848 6.01885C0.318848 6.24385 0.506348 6.4501 0.750098 6.4501H5.5876V11.2501C5.5876 11.4751 5.7751 11.6813 6.01885 11.6813C6.24385 11.6813 6.4501 11.4938 6.4501 11.2501V6.43135H11.2501C11.4751 6.43135 11.6813 6.24385 11.6813 6.0001C11.6813 5.7751 11.4751 5.5876 11.2501 5.5876Z" />
                      </g>
                      <defs>
                        <clipPath id="clip0_1032_24236">
                          <rect width={12} height={12} fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </div>
                <div className="mb-4 mr-4">
                  <button className="bg-primary inline-flex items-center justify-center rounded-md py-3 px-7 text-center text-base font-medium text-white hover:bg-blue-dark">
                    Add to Cart
                  </button>
                </div>
                <div className="mb-4 mr-4">
                  <button className="inline-flex items-center justify-center rounded-md bg-dark py-3 px-7 text-center text-base font-medium text-white hover:bg-dark/90">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`fixed left-0 top-0 z-20 flex h-full w-full items-center justify-center bg-black/50 py-10 ${
              !open && "hidden"
            } `}
          >
            <div
              ref={menuRef}
              onFocus={() => setOpen(true)}
              onBlur={() => setOpen(false)}
              className="mx-auto inline-block w-4/5 sm:w-3/4 lg:w-1/2"
            >
              <img
                src="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products-details/details-02/big-image-01.jpg"
                alt="products-details"
                className={`w-full ${productOne ? "block" : "hidden"}`}
              />
              <img
                src="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products-details/details-02/big-image-02.jpg"
                alt="products-details"
                className={`w-full ${productTwo ? "block" : "hidden"}`}
              />
              <img
                src="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products-details/details-02/big-image-03.jpg"
                alt="products-details"
                className={`w-full ${productThree ? "block" : "hidden"}`}
              />
              <img
                src="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products-details/details-02/big-image-04.jpg"
                alt="products-details"
                className={`w-full ${productFour ? "block" : "hidden"}`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails2;
