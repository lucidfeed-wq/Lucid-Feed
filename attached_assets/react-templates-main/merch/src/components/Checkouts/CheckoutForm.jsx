import Checkbox from "./Checkbox.jsx";
import { useState } from "react";
import ShippingOption from "./ShippingOption.jsx";
import fedex from "../../assets/ecom-images/checkout/checkout-02/fedex-express.svg";
import dhl from "../../assets/ecom-images/checkout/checkout-02/dhl-express.svg";
import { Link } from "react-router-dom";

const CheckoutForm = () => {
  const [formSteps, setFormSteps] = useState([
    {
      active: true,
      title: "Your Personal Details",
      buttons: [
        {
          nextButton: true,
          text: "Next Step",
        },
      ],
      formItems: [
        {
          label: "First Name",
          type: "text",
          placeholder: "First Name",
          columnClasses: "md:w-1/2",
        },
        {
          label: "Last Name",
          type: "text",
          placeholder: "Last Name",
          columnClasses: "md:w-1/2",
        },
        {
          label: "Email Address",
          type: "email",
          placeholder: "Email Address",
          columnClasses: "md:w-1/2",
        },
        {
          label: "Phone",
          type: "text",
          placeholder: "Enter your Phone",
          columnClasses: "md:w-1/2",
        },
        {
          label: "Mailing Address",
          type: "text",
          placeholder: "Mailing Address",
        },
        {
          label: "City",
          type: "text",
          placeholder: "City",
          columnClasses: "md:w-1/2",
        },
        {
          label: "Post Code",
          type: "text",
          placeholder: "Post Code",
          columnClasses: "md:w-1/2",
        },
        {
          label: "Country",
          type: "text",
          placeholder: "Country",
          columnClasses: "md:w-1/2",
        },
        {
          label: "Region/State",
          type: "select",
          columnClasses: "md:w-1/2",
          options: [
            {
              value: "Option",
              text: "Option",
            },
            {
              value: "Option",
              text: "Option",
            },
            {
              value: "Option",
              text: "Option",
            },
          ],
        },
        {
          type: "checkbox",
          text: "My delivery and mailing addresses are the same",
        },
      ],
    },
    {
      active: false,
      title: "Shipping Address",
      buttons: [
        {
          prevButton: true,
          text: "Previous",
        },
        {
          nextButton: true,
          text: "Save & Continue",
        },
      ],
      formItems: [
        {
          label: "First Name",
          type: "text",
          placeholder: "First Name",
          columnClasses: "md:w-1/2",
        },
        {
          label: "Last Name",
          type: "text",
          placeholder: "Last Name",
          columnClasses: "md:w-1/2",
        },
        {
          label: "Email Address",
          type: "email",
          placeholder: "Email Address",
          columnClasses: "md:w-1/2",
        },
        {
          label: "Phone",
          type: "text",
          placeholder: "Enter your Phone",
          columnClasses: "md:w-1/2",
        },
        {
          label: "Mailing Address",
          type: "text",
          placeholder: "Mailing Address",
        },
        {
          label: "City",
          type: "text",
          placeholder: "City",
          columnClasses: "md:w-1/2",
        },
        {
          label: "Post Code",
          type: "text",
          placeholder: "Post Code",
          columnClasses: "md:w-1/2",
        },
        {
          label: "Country",
          type: "text",
          placeholder: "Country",
          columnClasses: "md:w-1/2",
        },
        {
          label: "Region/State",
          type: "select",
          columnClasses: "md:w-1/2",
          options: [
            {
              value: "Option",
              text: "Option",
            },
            {
              value: "Option",
              text: "Option",
            },
            {
              value: "Option",
              text: "Option",
            },
          ],
        },
        {
          label: "Select Delivery Option",
          type: "shipping",
          options: [
            {
              image: fedex,
              price: "$12.50",
              title: "Standard Shipping",
            },
            {
              image: dhl,
              price: "$12.50",
              title: "Standard Shipping",
            },
          ],
        },
      ],
    },
    {
      active: false,
      title: "Payment Info",
      buttons: [
        {
          text: "Pay Now",
        },
      ],
      formItems: [
        {
          label: "Cardholder Name",
          type: "text",
          placeholder: "Cardholder Name",
        },
        {
          cardNumber: true,
          label: "Card Number",
          type: "text",
          placeholder: "0000 0000 0000 0000",
        },
        {
          label: "Expiration",
          type: "text",
          placeholder: "MM",
          columnClasses: "md:w-1/3",
        },
        {
          type: "text",
          placeholder: "YYYY",
          columnClasses: "md:w-1/3 self-end",
        },
        {
          label: "CVC/CVV",
          type: "text",
          placeholder: "CVC/CVV",
          columnClasses: "md:w-1/3",
        },
      ],
    },
  ]);

  const handleButtonToggle = (index, buttonType) => {
    if (!buttonType) {
      const updatedFormSteps = formSteps.map((step, i) => {
        return {
          ...step,
          active: i === index ? !step.active : false,
        };
      });
      setFormSteps(updatedFormSteps);
      return;
    }

    let newIndex;
    if (buttonType === "prevButton") {
      newIndex = index - 1 >= 0 ? index - 1 : index;
    } else if (buttonType === "nextButton") {
      newIndex = index + 1 < formSteps.length ? index + 1 : index;
    }

    const updatedFormSteps = formSteps.map((step, i) => {
      return {
        ...step,
        active: i === newIndex,
      };
    });
    setFormSteps(updatedFormSteps);
  };

  return (
    <>
      <div className="border-stroke shadow-testimonial-6 dark:border-dark-3 dark:bg-dark-2 dark:shadow-box-dark mb-10 overflow-hidden rounded-[10px] border bg-white px-5 py-8 xl:p-9">
        {formSteps.map((step, stepIndex) => (
          <div
            key={stepIndex}
            className="mb-6 overflow-hidden border rounded-md border-stroke dark:border-dark-3"
          >
            <button
              onClick={() => handleButtonToggle(stepIndex)}
              className="flex items-center justify-between w-full px-5 py-4 xl:px-8"
            >
              <span className="text-lg font-semibold text-dark dark:text-white">
                {step.title}
              </span>

              <span
                className={`text-body-color dark:text-dark-6 ${step.active ? "rotate-180" : ""}`}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current stroke-current"
                >
                  <path
                    d="M10.6707 15.2182L2.7795 7.46427C2.7792 7.46397 2.7789 7.46367 2.7786 7.46337C2.6003 7.28416 2.6006 7.01458 2.7795 6.83568C2.9587 6.65648 3.2289 6.65648 3.4081 6.83568L3.40808 6.83569L3.4109 6.83845L10.7671 14.0228L11.0012 14.2514L11.2341 14.0217L18.5903 6.76859L18.592 6.76693C18.7712 6.58773 19.0414 6.58773 19.2206 6.76693C19.3995 6.94584 19.3998 7.21544 19.2215 7.39464C19.2212 7.39494 19.2209 7.39523 19.2206 7.39552L11.3164 15.1622L11.3164 15.1622L11.3143 15.1643C11.1712 15.3075 11.0794 15.3416 11 15.3416C10.8856 15.3416 10.788 15.3091 10.6707 15.2182Z"
                    fill=""
                    stroke=""
                    strokeWidth="0.666667"
                  />
                </svg>
              </span>
            </button>

            <div
              className={`border-stroke dark:border-dark-3 border-t px-4 pt-6 pb-8 lg:px-5 xl:px-8 ${step.active ? "block" : "hidden"}`}
            >
              <form>
                <div className="flex flex-wrap -mx-3">
                  {step.formItems.map((item, index) =>
                    item.type === "select" ? (
                      <div key={index} className="w-full px-3 md:w-1/2">
                        <div className="mb-6">
                          <label className="text-dark mb-2.5 block text-base font-medium dark:text-white">
                            {item.label}
                          </label>
                          <div className="relative">
                            <select className="border-stroke text-dark-5 focus:border-primary active:border-primary dark:border-dark-3 w-full appearance-none rounded-md border bg-transparent px-5 py-3 font-medium outline-hidden transition disabled:cursor-default disabled:bg-[#F5F7FD]">
                              {item.options.map((option, optionIndex) =>
                                option.index === 0 ? (
                                  <option
                                    key={optionIndex}
                                    value={option.value}
                                    selected
                                    disabled
                                    className="dark:bg-dark-2"
                                  >
                                    {option.text}
                                  </option>
                                ) : (
                                  <option
                                    key={optionIndex}
                                    value={option.value}
                                    className="dark:bg-dark-2"
                                  >
                                    {option.text}
                                  </option>
                                ),
                              )}
                            </select>
                            <span className="absolute -translate-y-1/2 text-body-color dark:text-dark-6 top-1/2 right-5">
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="fill-current stroke-current"
                              >
                                <path
                                  d="M2.4142 5.03575L2.41418 5.03577L2.417 5.03852L7.767 10.2635L8.00101 10.4921L8.23393 10.2624L13.5839 4.98741L13.5839 4.98741L13.5856 4.98575C13.6804 4.89093 13.8194 4.89093 13.9142 4.98575C14.0087 5.0803 14.009 5.2187 13.915 5.31351C13.9148 5.31379 13.9145 5.31407 13.9142 5.31435L8.16628 10.9623L8.16627 10.9623L8.1642 10.9643C8.06789 11.0607 8.02303 11.0667 7.9999 11.0667C7.94098 11.0667 7.88993 11.0523 7.82015 10.9991L2.08477 5.36351C1.99078 5.26871 1.99106 5.1303 2.0856 5.03575C2.18043 4.94093 2.31937 4.94093 2.4142 5.03575Z"
                                  fill=""
                                  stroke=""
                                  strokeWidth="0.666667"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    ) : item.type === "checkbox" ? (
                      <div key={index} className="w-full px-3">
                        <Checkbox id="1" labelTitle={item.text} />
                      </div>
                    ) : item.type === "shipping" ? (
                      <div key={index} className="w-full px-3">
                        <ShippingOption
                          label={item.label}
                          options={item.options}
                        />
                      </div>
                    ) : item.cardNumber ? (
                      <div
                        key={index}
                        className={`w-full px-3 ${item.columnClasses}`}
                      >
                        <div className="mb-6">
                          <label className="text-dark mb-2.5 block text-base font-medium dark:text-white">
                            {item.label}
                          </label>
                          <div className="relative">
                            <input
                              type={item.type}
                              placeholder={item.placeholder}
                              className="border-stroke text-body-color placeholder:text-dark-5 focus:border-primary active:border-primary dark:border-dark-3 dark:text-dark-6 dark:focus:border-primary w-full rounded-md border bg-transparent px-5 py-3 font-medium outline-hidden transition disabled:cursor-default disabled:bg-[#F5F7FD]"
                            />

                            <span className="absolute -translate-y-1/2 top-1/2 right-5">
                              <svg
                                width="60"
                                height="10"
                                viewBox="0 0 60 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M53.617 1.03516H49.1125V8.96614H53.617V1.03516Z"
                                  fill="#F26122"
                                />
                                <path
                                  d="M49.6008 4.99991C49.5922 3.4701 50.3068 2.02137 51.5378 1.06982C49.4309 -0.542193 46.4047 -0.308103 44.5861 1.60748C42.7675 3.52315 42.7675 6.47691 44.5861 8.39258C46.4047 10.308 49.4309 10.5423 51.5378 8.93006C50.3068 7.97869 49.5922 6.52997 49.6008 4.99991Z"
                                  fill="#EA1D25"
                                />
                                <path
                                  d="M59.8542 4.99987C59.8524 6.91413 58.7293 8.65997 56.9598 9.49664C55.1909 10.3333 53.0859 10.1145 51.5378 8.93291C53.7674 7.22479 54.1531 4.08261 52.4008 1.91136C52.1493 1.5969 51.8598 1.31348 51.5378 1.06725C53.0859 -0.114461 55.1909 -0.333395 56.9598 0.503353C58.7293 1.34011 59.8524 3.08592 59.8542 4.99987Z"
                                  fill="#F69E1E"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  className="fill-dark dark:fill-white"
                                  d="M22.3133 6.76452C22.3197 5.16311 20.9958 4.4717 19.968 3.93446C19.3175 3.59473 18.7857 3.31687 18.7857 2.90986C18.7857 2.56295 19.1224 2.19564 19.839 2.1008C20.6909 2.01676 21.5504 2.1656 22.3235 2.53176L22.7663 0.430964C22.0122 0.14886 21.2131 0.00300476 20.4076 0C17.9224 0 16.1952 1.3235 16.1952 3.21421C16.1952 4.61152 17.4485 5.38882 18.3963 5.85096C19.3441 6.31317 19.7126 6.63849 19.7018 7.05865C19.7018 7.70991 18.923 8.00397 18.1962 8.01477C17.2999 8.0262 16.4156 7.80952 15.6266 7.38453L15.1737 9.48532C16.0662 9.83287 17.0172 10.0076 17.9752 9.99975C20.6178 9.99975 22.3559 8.69722 22.3661 6.68048L22.3133 6.76452ZM15.4793 0.168667L13.3734 9.88451H10.8463L12.9522 0.168667H15.4793ZM26.0728 6.4704L27.3992 2.82588L28.1685 6.4704H26.0728ZM31.2221 9.91628H28.8844L28.5788 8.46675H25.4096L24.8931 9.91628H22.2396L26.02 0.914144C26.1941 0.485583 26.6089 0.204076 27.0733 0.199877H29.1792L31.2221 9.91628ZM7.84476 9.85269L11.9307 0.136853H9.19278L6.57107 6.7435L5.51783 1.12422C5.42444 0.552805 4.92895 0.134452 4.34896 0.136853H0.0635294L0 0.420157C0.8595 0.58822 1.69485 0.863127 2.48511 1.23946C2.82179 1.39732 3.04985 1.72085 3.08543 2.09057L5.09666 9.85269H7.84476Z"
                                  fill=""
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div
                        key={index}
                        className={`w-full px-3 ${item.columnClasses}`}
                      >
                        <div className="mb-6">
                          <label className="text-dark mb-2.5 block text-base font-medium dark:text-white">
                            {item.label}
                          </label>
                          <input
                            type={item.type}
                            placeholder={item.placeholder}
                            className="border-stroke text-body-color placeholder:text-dark-5 focus:border-primary active:border-primary dark:border-dark-3 dark:text-dark-6 dark:focus:border-primary w-full rounded-md border bg-transparent px-5 py-3 font-medium outline-hidden transition disabled:cursor-default disabled:bg-[#F5F7FD]"
                          />
                        </div>
                      </div>
                    ),
                  )}

                  <div className="w-full px-3">
                    <div className="flex flex-wrap items-center -mx-2">
                      {step.buttons.map((button, buttonIndex) => (
                        <div key={buttonIndex} className="px-2">
                          <Link
                            to="#"
                            onClick={() =>
                              handleButtonToggle(
                                stepIndex,
                                button.prevButton ? "prevButton" : "nextButton",
                              )
                            }
                            className={`inline-flex items-center justify-center rounded-md px-7 py-3 text-center text-base font-medium text-white ${button.nextButton && buttonIndex === 1 ? "bg-secondary hover:bg-secondary/90 whitespace-nowrap" : "bg-primary hover:bg-blue-dark"}`}
                          >
                            {button.text}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CheckoutForm;
