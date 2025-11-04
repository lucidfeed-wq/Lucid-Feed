import { useState, useEffect, useRef } from "react";
import imageOne from "../../assets/ecom-images/checkout/checkout-02/image-02.jpg";
import imageTwo from "../../assets/ecom-images/checkout/checkout-02/image-03.jpg";
import { Link } from "react-router-dom";

const cartList = [
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
    price: "36.00",
    link: "/#",
  },
];

const CartDropdown = () => {
  const [openDropDown, setOpenDropDown] = useState(false);
  const cartRef = useRef(null);
  // Close navbar when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setOpenDropDown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleDropDownToggle = () => {
    setOpenDropDown(!openDropDown);
  };

  return (
    <>
      <div className="relative z-20" ref={cartRef}>
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
              <path d="M22.9125 7.96252H21.9375L19.2969 1.30002C19.0938 0.812515 18.5656 0.60939 18.1188 0.77189C17.6313 0.975015 17.4281 1.50314 17.5906 1.95002L19.9469 7.96252H6.05314L8.40939 1.99064C8.61251 1.50314 8.36876 0.975015 7.88126 0.812515C7.43439 0.60939 6.90626 0.812515 6.70314 1.30002L4.06251 7.96252H3.08751C2.35626 7.96252 1.74689 8.57189 1.74689 9.30314V12.5938C1.74689 13.2844 2.23439 13.8125 2.92501 13.8938L3.94064 22.75C4.10314 24.2125 5.32189 25.3094 6.78439 25.3094H19.2156C20.6781 25.3094 21.8969 24.2125 22.0594 22.75L23.075 13.8938C23.725 13.8125 24.2531 13.2438 24.2531 12.5938V9.26251C24.2531 8.53126 23.6438 7.96252 22.9125 7.96252ZM3.57501 9.79064H22.425V12.1063H3.57501V9.79064ZM19.2156 23.4813H6.78439C6.25626 23.4813 5.80939 23.075 5.72814 22.5469L4.75314 13.9344H21.2469L20.2719 22.5469C20.1906 23.075 19.7438 23.4813 19.2156 23.4813Z" />
              <path d="M8.85625 15.7626C8.36875 15.7626 7.92188 16.1688 7.92188 16.6969V19.7438C7.92188 20.2313 8.32812 20.6782 8.85625 20.6782C9.38437 20.6782 9.79062 20.2719 9.79062 19.7438V16.6563C9.79062 16.1688 9.38437 15.7626 8.85625 15.7626Z" />
              <path d="M17.1438 15.7626C16.6563 15.7626 16.2094 16.1688 16.2094 16.6969V19.7438C16.2094 20.2313 16.6156 20.6782 17.1438 20.6782C17.6719 20.6782 18.0781 20.2719 18.0781 19.7438V16.6563C18.0375 16.1688 17.6313 15.7626 17.1438 15.7626Z" />
            </svg>
            <span className="bg-primary absolute -top-2 -right-2 h-4 w-4 rounded-full text-[10px] font-normal text-white">
              1
            </span>
          </button>
        </div>

        <div
          className={`absolute top-full right-0 mt-3 w-[330px] ${openDropDown ? "block" : "hidden"}`}
        >
          <div className="shadow-1 dark:bg-dark-2 dark:shadow-box-dark overflow-hidden rounded-lg bg-white p-8">
            <div className="border-stroke dark:border-dark-3 mb-5 border-b pb-3">
              {cartList.map((item, index) => (
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

            <div className="border-stroke dark:border-dark-3 -mx-1 border-b pb-5">
              <div className="mb-3 flex items-center justify-between">
                <div className="px-1">
                  <p className="text-dark text-base dark:text-white">
                    Subtotal
                  </p>
                </div>
                <div className="px-1">
                  <p className="text-dark text-base font-medium dark:text-white">
                    $108
                  </p>
                </div>
              </div>
              <div className="mb-3 flex items-center justify-between">
                <div className="px-1">
                  <p className="text-dark text-base dark:text-white">
                    Shipping Cost (+)
                  </p>
                </div>
                <div className="px-1">
                  <p className="text-dark text-base font-medium dark:text-white">
                    $10.85
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="px-1">
                  <p className="text-dark text-base dark:text-white">
                    Discount (-)
                  </p>
                </div>
                <div className="px-1">
                  <p className="text-dark text-base font-medium dark:text-white">
                    $9.00
                  </p>
                </div>
              </div>
            </div>
            <div className="-mx-1 flex items-center justify-between pt-5 pb-6">
              <div className="px-1">
                <p className="text-dark text-base dark:text-white">
                  Total Payable
                </p>
              </div>
              <div className="px-1">
                <p className="text-dark text-base font-medium dark:text-white">
                  $88.15
                </p>
              </div>
            </div>

            <div>
              <Link
                to="/shopping-cart"
                className="bg-primary hover:bg-blue-dark flex w-full items-center justify-center rounded-md px-10 py-[13px] text-center text-base font-medium text-white"
              >
                Place Order
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDropdown;
