import imageOne from "../../assets/ecom-images/checkout/checkout-04/product-01.jpg";
import imageTwo from "../../assets/ecom-images/checkout/checkout-04/product-02.jpg";
import { Link } from "react-router-dom";

const cartList = [
  {
    image: imageOne,
    title: "Trendy Ladies Pants",
    quantity: 1,
    price: "$59.99",
  },
  {
    image: imageTwo,
    title: "Men's Sendo T-shirt",
    quantity: 2,
    price: "$80.99",
  },
];

const CartBox = () => {
  return (
    <>
      <h3 className="mb-8 text-xl font-semibold text-dark dark:text-white sm:text-[28px] sm:leading-[40px]">
        Payment Information
      </h3>

      <div className="mb-10 overflow-hidden rounded-[10px] border border-stroke px-6 py-10 dark:border-dark-3 dark:bg-dark-2 sm:px-10 lg:px-8 2xl:px-10">
        {cartList.map((item, index) => (
          <div key={index} className="mb-9 flex items-center">
            <div className="mr-6 h-[90px] w-full max-w-[80px] overflow-hidden rounded-lg border border-stroke dark:border-dark-3 sm:h-[110px] sm:max-w-[100px]">
              <img
                src={item.image}
                alt="product"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="w-full">
              <p className="mb-[6px] text-base font-medium text-dark dark:text-white">
                {item.title}
              </p>
              <p className="text-sm font-medium text-body-color dark:text-dark-6">
                {item.price}
              </p>
              <p className="text-sm font-medium text-body-color dark:text-dark-6">
                <span className="pr-0.5"> Quantity: </span>{" "}
                <span>{item.quantity}</span>
              </p>
            </div>
          </div>
        ))}

        <div className="border-t border-stroke pt-6 dark:border-dark-3">
          <p className="mb-[10px] flex items-center justify-between text-base text-dark dark:text-white">
            <span>Subtotal</span>
            <span className="font-medium"> $140.98 </span>
          </p>
          <p className="mb-[10px] flex items-center justify-between text-base text-dark dark:text-white">
            <span>Shipping Cost</span>
            <span className="font-medium"> $10.99 </span>
          </p>
          <p className="mb-5 flex items-center justify-between text-base text-dark dark:text-white">
            <span>Discount</span>
            <span className="font-medium"> $5.00 </span>
          </p>
        </div>

        <div className="border-t border-stroke pt-5 dark:border-dark-3">
          <p className="mb-6 flex items-center justify-between text-base text-dark dark:text-white">
            <span>Total Amount</span>
            <span className="font-medium"> $124.99 </span>
          </p>
        </div>
        <button className="flex w-full items-center justify-center rounded-md bg-primary px-10 py-3 text-center text-base font-medium text-white hover:bg-blue-dark">
          Get Started
        </button>
      </div>
    </>
  );
};

export default CartBox;
