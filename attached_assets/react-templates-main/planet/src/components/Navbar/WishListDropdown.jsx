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

  const handleDropDownToggle = () => {
    setOpenDropDown(!openDropDown);
  };

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !event.target.closest(".dropdown-toggle")
      ) {
        setOpenDropDown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="relative z-20">
        <div className="flex max-w-[200px] justify-end">
          <button
            onClick={handleDropDownToggle}
            className="border-stroke dropdown-toggle bg-gray-2 text-dark dark:border-dark-3 dark:bg-dark-2 relative flex h-[42px] w-[42px] items-center justify-center rounded-full border-[.5px] dark:text-white"
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
            <span className="bg-primary absolute -top-1 -right-1 h-[18px] w-[18px] rounded-full text-[10px] leading-[18px] font-semibold text-white">
              3
            </span>
          </button>
        </div>

        <div ref={dropdownRef}>
          <div
            className={`absolute top-full right-0 mt-3 w-[330px] ${openDropDown ? "block" : "hidden"}`}
          >
            <div className="px-6 py-8 overflow-hidden bg-white border rounded-lg border-stroke shadow-1 dark:border-dark-3 dark:bg-dark-2 dark:shadow-box-dark">
              <div className="pb-3 border-b border-stroke dark:border-dark-3">
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
                          className="text-sm font-medium text-dark hover:text-primary dark:text-white"
                        >
                          {item.title}
                        </Link>
                        <p className="text-xs font-medium truncate text-body-color dark:text-dark-6">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                    <div className="px-1">
                      <p className="text-base font-semibold text-dark dark:text-white">
                        ${item.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <Link
                  to="/shopping-cart"
                  className="bg-primary hover:bg-blue-dark flex w-full items-center justify-center rounded-md px-10 py-[10px] text-center text-base font-medium text-white"
                >
                  Add to Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WishListDropdown;
