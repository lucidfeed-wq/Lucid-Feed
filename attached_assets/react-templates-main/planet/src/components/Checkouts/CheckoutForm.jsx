import Checkbox from "./Checkbox.jsx";
import CouponForm from "./CouponForm.jsx";

const formItems = [
  {
    type: "text",
    placeholder: "First name*",
  },
  {
    type: "text",
    placeholder: "Last name*",
  },
  {
    type: "text",
    placeholder: "Address*",
  },
  {
    type: "text",
    placeholder: "Address line 2",
  },
  {
    type: "select",
    options: [
      {
        value: "Country*",
        text: "Country*",
      },
      {
        value: "USA",
        text: "USA",
      },
      {
        value: "UK",
        text: "UK",
      },
      {
        value: "Canada",
        text: "Canada",
      },
    ],
  },
  {
    type: "text",
    placeholder: "City/Town*",
  },
  {
    type: "text",
    placeholder: "Postcode / ZIP*",
  },
  {
    type: "text",
    placeholder: "Phone*",
  },
  {
    type: "textarea",
    placeholder: "Additional information",
  },
];

const CheckoutForm = () => {
  return (
    <>
      <div className="mb-12 lg:mb-0">
        <h3 className="mb-8 text-2xl font-semibold text-dark dark:text-white">
          Billing Details
        </h3>

        <form>
          <div className="-mx-3 flex flex-wrap">
            {formItems.map((item, index) =>
              item.type === "select" ? (
                <div key={index} className="w-full px-3 md:w-1/2">
                  <div className="mb-8">
                    <div className="relative">
                      <select className="w-full appearance-none rounded-md border border-stroke bg-transparent px-5 py-[14px] text-dark-5 outline-hidden transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD] dark:border-dark-3 dark:bg-dark-2">
                        {item.options.map((option, optionIndex) =>
                          option.index === 0 ? (
                            <option
                              key={optionIndex}
                              value={option.value}
                              selected
                              disabled
                            >
                              {option.text}
                            </option>
                          ) : (
                            <option key={optionIndex} value={option.value}>
                              {option.text}
                            </option>
                          ),
                        )}
                      </select>
                      <span className="absolute right-5 top-1/2 -translate-y-1/2 text-body-color dark:text-dark-6">
                        <svg
                          className="fill-current stroke-current"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
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
              ) : item.type === "textarea" ? (
                <div key={index} className="w-full px-3">
                  <div className="mb-8">
                    <textarea
                      rows="6"
                      placeholder={item.placeholder}
                      className="w-full rounded-md border border-stroke bg-transparent px-5 py-[14px] text-body-color outline-hidden transition placeholder:text-dark-5 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD] dark:border-dark-3 dark:bg-dark-2 dark:text-dark-6"
                    ></textarea>
                  </div>
                </div>
              ) : (
                <div key={index} className="w-full px-3 md:w-1/2">
                  <div className="mb-8">
                    <input
                      type={item.type}
                      placeholder={item.placeholder}
                      className="w-full rounded-md border border-stroke bg-transparent px-5 py-[14px] text-body-color outline-hidden transition placeholder:text-dark-5 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD] dark:border-dark-3 dark:bg-dark-2 dark:text-dark-6"
                    />
                  </div>
                </div>
              ),
            )}

            <Checkbox id="1" labelTitle="Create Account" />
            <Checkbox id="2" labelTitle="Ship to a different address?" />
            <CouponForm />
          </div>
        </form>
      </div>
    </>
  );
};

export default CheckoutForm;
