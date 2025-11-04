import imageOne from "../../assets/ecom-images/checkout/checkout-01/image-01.jpg";
import imageTwo from "../../assets/ecom-images/checkout/checkout-01/image-02.jpg";
import imageThree from "../../assets/ecom-images/checkout/checkout-01/image-03.jpg";

const cartList = [
  {
    image: imageOne,
    title: "Hollow Port",
    color: "Brown",
    size: "XL",
    unitPrice: "1 X 36.00",
    price: "36.00",
  },
  {
    image: imageTwo,
    title: "Mist Black Triblend",
    color: "White",
    size: "XL",
    unitPrice: "1 X 36.00",
    price: "36.00",
  },
  {
    image: imageThree,
    title: "Realm Bone",
    color: "Black",
    size: "XL",
    unitPrice: "1 X 36.00",
    price: "36.00",
  },
];

const CartBox = () => {
  return (
    <>
      <h3 className="mb-8 text-2xl font-semibold text-dark dark:text-white">
        Your Order
      </h3>
      <div className="mb-8 overflow-hidden rounded-[10px] border border-stroke bg-white shadow-testimonial-6 dark:border-dark-3 dark:bg-dark-2 dark:shadow-box-dark">
        <div className="flex items-center justify-between bg-[#f9f9f9] px-6 py-[18px] dark:bg-dark-4 2xl:px-8">
          <p className="text-base font-medium text-dark dark:text-white">
            Product
          </p>
          <p className="text-right text-base font-medium text-dark dark:text-white">
            Subtotal
          </p>
        </div>

        {cartList.map((item, index) => (
          <div
            key={index}
            className="-mx-1 flex items-center justify-between border-b border-stroke p-6 dark:border-dark-3 2xl:px-8"
          >
            <div className="flex items-center px-1">
              <div className="mr-4 h-12 w-full max-w-[48px] overflow-hidden rounded-sm">
                <img src={item.image} alt="product image" className="w-full" />
              </div>
              <div>
                <p className="mb-0.5 text-base font-medium text-dark dark:text-white">
                  {item.title}
                </p>
                <p className="flex items-center space-x-3 text-sm text-body-color dark:text-dark-6 sm:space-x-5 lg:space-x-3 2xl:space-x-5">
                  <span>{item.color}</span>
                  <span>{item.size}</span>
                  <span>{item.unitPrice}</span>
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

        <div className="-mx-1 border-b border-stroke p-6 dark:border-dark-3 2xl:px-8">
          <div className="mb-3 flex items-center justify-between">
            <div className="px-1">
              <p className="text-base text-dark dark:text-white">Subtotal</p>
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

        <div className="-mx-1 p-6 sm:px-7 lg:px-6 2xl:px-7">
          <div className="flex items-center justify-between">
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
        </div>
      </div>
    </>
  );
};

export default CartBox;
