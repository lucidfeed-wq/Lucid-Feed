import imageOne from "../../assets/ecom-images/checkout/checkout-01/payment.svg";
import imageTwo from "../../assets/ecom-images/checkout/checkout-01/payment-white.svg";
import { useState } from "react";

const paymentItems = [
  {
    id: "bank",
    text: "Direct Bank Transfer",
  },
  {
    id: "cash",
    text: "Cash on delivery",
  },
  {
    id: "online",
    text: "Online Gateway",
  },
];

const PaymentBox = () => {
  const [paymentMethod, setPaymentMethod] = useState("");

  return (
    <>
      <div className="mb-8 overflow-hidden rounded-[10px] border border-stroke bg-white shadow-testimonial-6 dark:border-dark-3 dark:bg-dark-2 dark:shadow-box-dark">
        <div className="bg-[#f9f9f9] px-6 py-[18px] dark:bg-dark-4 2xl:px-8">
          <h3 className="text-2xl font-bold text-dark dark:text-white">
            Payment
          </h3>
        </div>

        <div className="px-6 py-9 2xl:px-8">
          {paymentItems.map((item, index) => (
            <div key={index} className="mb-4">
              <label
                htmlFor={item.id + "-" + item.index}
                className="flex cursor-pointer select-none items-center"
              >
                <div className="relative">
                  <input
                    type="radio"
                    id={item.id + "-" + item.index}
                    name="payment"
                    className="sr-only"
                    onChange={() => setPaymentMethod(item.id)}
                  />
                  <div
                    className={`mr-[10px] flex h-5 w-5 items-center justify-center rounded-full border ${paymentMethod === item.id ? "border-primary" : "border-stroke dark:border-dark-3"}`}
                  >
                    <span
                      className={`h-[10px] w-[10px] rounded-full ${paymentMethod === item.id ? "bg-primary" : "bg-transparent"}`}
                    ></span>
                  </div>
                </div>
                <span className="text-dark dark:text-white">{item.text}</span>
              </label>
            </div>
          ))}

          <div className="block pt-9">
            <img src={imageOne} alt="payment" className="dark:hidden" />
            <img src={imageTwo} alt="payment" className="hidden dark:block" />
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentBox;
