import { useState, useRef, useEffect } from "react";

import imageOne from "../../assets/ecom-images/checkout/checkout-02/image-02.jpg";
import imageTwo from "../../assets/ecom-images/checkout/checkout-02/image-03.jpg";
import { Link } from "react-router-dom";

const wishList = [
  {
    image: imageOne,
    title: "Circular Sienna",
    subtitle: "Awesome white shirt",
    price: "36.00",
    link: "/#",
  },
  {
    image: imageTwo,
    title: "Black T-shirt",
    subtitle: "It's a nice black t-shirt",
    price: "66.00",
    link: "/#",
  },
];

const WishListDropdown = () => {
  const [openDropDown, setOpenDropDown] = useState(false);
  const wishlistRef = useRef(null);
  const handleDropDownToggle = () => {
    setOpenDropDown(!openDropDown);
  };

  // Close navbar when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (wishlistRef.current && !wishlistRef.current.contains(event.target)) {
        setOpenDropDown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="relative z-20" ref={wishlistRef}>
        <div className="flex max-w-[200px] justify-end">
          <button
            onClick={handleDropDownToggle}
            className="text-dark relative flex items-center justify-center dark:text-white"
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
            <span className="bg-primary absolute -top-2 -right-2 h-4 w-4 rounded-full text-[10px] font-normal text-white">
              3
            </span>
          </button>
        </div>

        <div
          className={`absolute top-full right-0 mt-3 w-[330px] ${openDropDown ? "block" : "hidden"}`}
        >
          <div className="border-stroke shadow-1 dark:border-dark-3 dark:bg-dark-2 dark:shadow-box-dark overflow-hidden rounded-lg border bg-white px-6 py-8">
            <div className="border-stroke dark:border-dark-3 border-b pb-3">
              {wishList.map((item, index) => (
                <div
                  key={index}
                  className={`-mx-1 flex items-center justify-between ${index === 0 ? "pb-4" : "py-4"}`}
                >
                  <div className="flex items-center px-1">
                    <div className="mr-3 h-10 w-full max-w-[40px] overflow-hidden rounded-sm">
                      <img
                        src={item.image}
                        alt="product image"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <Link
                        to={item.link}
                        className="text-dark hover:text-primary text-sm font-medium dark:text-white"
                      >
                        {item.title}
                      </Link>
                      <p className="text-body-color dark:text-dark-6 truncate text-xs font-medium">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="px-1">
                    <p className="text-dark text-base font-semibold dark:text-white">
                      ${item.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <Link
                to="/wishlist"
                className="bg-primary hover:bg-blue-dark flex w-full items-center justify-center rounded-md px-10 py-[10px] text-center text-base font-medium text-white"
              >
                Add to Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WishListDropdown;
