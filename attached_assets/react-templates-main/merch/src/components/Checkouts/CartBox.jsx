import imageOne from "../../assets/ecom-images/checkout/checkout-02/image-01.jpg";
import imageTwo from "../../assets/ecom-images/checkout/checkout-02/image-02.jpg";
import imageThree from "../../assets/ecom-images/checkout/checkout-02/image-03.jpg";
import { Link } from "react-router-dom";

const cartList = [
  {
    image: imageOne,
    title: "Jeans Pant",
    subtitle: "Blue jeans pant for man",
    price: "$36.00",
  },
  {
    image: imageTwo,
    title: "Circular Sienna",
    subtitle: "Awesome white shirt",
    price: "$36.00",
  },
  {
    image: imageThree,
    title: "Black T-shirt ",
    subtitle: "It's a nice black t-shirt",
    price: "$36.00",
  },
];

const CartBox = () => {
  return (
    <>
      <div className="mb-10 overflow-hidden rounded-[10px] border border-stroke bg-white p-8 shadow-testimonial-6 dark:border-dark-3 dark:bg-dark-2 dark:shadow-box-dark">
        <div className="mb-4 border-b border-stroke pb-4 dark:border-dark-3">
          <h3 className="mb-2 text-lg font-semibold text-dark dark:text-white">
            Shopping Cart
          </h3>
          <p className="text-sm text-body-color dark:text-dark-6">
            You have 3 items in your cart
          </p>
        </div>
        <div className="border-b border-stroke pb-6 dark:border-dark-3">
          {cartList.map((item, index) => (
            <div
              key={index}
              className="-mx-1 flex items-center justify-between py-4"
            >
              <div className="flex items-center px-1">
                <div className="mr-4 h-12 w-full max-w-[48px] overflow-hidden rounded-sm">
                  <img
                    src={item.image}
                    alt="product image"
                    className="w-full"
                  />
                </div>
                <div>
                  <p className="mb-0.5 text-base font-medium text-dark dark:text-white">
                    {item.title}
                  </p>
                  <p className="truncate text-sm text-body-color dark:text-dark-6">
                    {item.subtitle}
                  </p>
                </div>
              </div>
              <div className="px-1">
                <p className="text-base font-medium text-dark dark:text-white">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="-mx-1 border-b border-stroke pb-5 pt-6 dark:border-dark-3">
          <div className="mb-4 flex items-center justify-between">
            <div className="px-1">
              <p className="text-base text-dark dark:text-white">Subtotal</p>
            </div>
            <div className="px-1">
              <p className="text-base font-medium text-dark dark:text-white">
                $108
              </p>
            </div>
          </div>
          <div className="mb-4 flex items-center justify-between">
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
            <p className="text-base text-dark dark:text-white">Total Payable</p>
          </div>
          <div className="px-1">
            <p className="text-base font-medium text-dark dark:text-white">
              $88.15
            </p>
          </div>
        </div>

        <div className="mb-3">
          <button className="flex w-full items-center justify-center rounded-md bg-primary px-10 py-3 text-center text-base font-medium text-white hover:bg-blue-dark">
            Place Order
          </button>
        </div>
        <div>
          <p className="text-sm text-body-color dark:text-dark-6">
            By placing your order, you agree to our company
            <Link to="#" className="text-primary hover:underline">
              Privacy Policy
            </Link>
            <span className="px-0.5">and</span>
            <Link to="#" className="text-primary hover:underline">
              Conditions of Use
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default CartBox;
