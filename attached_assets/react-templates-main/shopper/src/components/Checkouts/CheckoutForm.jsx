import cardOne from "../../assets/ecom-images/checkout/checkout-04/card-01.svg";
import cardTwo from "../../assets/ecom-images/checkout/checkout-04/card-02.svg";

const formItems = [
  {
    label: "Full Name",
    type: "text",
    placeholder: "Mark Litho",
    columnClasses: "md:w-1/2",
  },
  {
    label: "Phone Number",
    type: "text",
    placeholder: "883-992-145",
    columnClasses: "md:w-1/2",
  },
  {
    label: "Email",
    type: "email",
    placeholder: "yourmail@gmail.com",
    columnClasses: "md:w-1/2",
  },
  {
    label: "Address",
    type: "text",
    placeholder: "2707 Davis Anenue",
    columnClasses: "md:w-1/2",
  },
  {
    label: "Country",
    type: "select",
    columnClasses: "md:w-1/3",
    options: [
      {
        value: "United States",
        text: "United States",
      },
      {
        value: "United Kingdom",
        text: "United Kingdom",
      },
      {
        value: "Canada",
        text: "Canada",
      },
    ],
  },
  {
    label: "City",
    type: "text",
    placeholder: "New York",
    columnClasses: "md:w-1/3",
  },
  {
    label: "Post Code",
    type: "text",
    placeholder: "94612",
    columnClasses: "md:w-1/3",
  },
];

const cardItems = [
  {
    image: cardOne,
  },
  {
    image: cardTwo,
  },
];

const CheckoutForm = () => {
  return (
    <>
      <h3 className="mb-8 text-xl font-semibold text-dark dark:text-white sm:text-[28px] sm:leading-[40px]">
        Payment Information
      </h3>

      <div className="mb-10 overflow-hidden rounded-[10px] border border-stroke bg-white px-6 py-10 shadow-testimonial-6 dark:border-dark-3 dark:bg-dark-2 dark:shadow-box-dark sm:px-10">
        <h4 className="mb-8 text-lg font-semibold text-dark dark:text-white">
          Personal Details
        </h4>

        <form className="mb-10 border-b border-stroke pb-4 dark:border-dark-3">
          <div className="-mx-4 flex flex-wrap">
            {formItems.map((item, index) =>
              item.type === "select" ? (
                <div
                  key={index}
                  className={`w-full px-4 ${item.columnClasses}`}
                >
                  <div className="mb-5">
                    <label className="mb-2.5 block text-base font-medium text-dark dark:text-white">
                      {item.label}
                    </label>
                    <div className="relative">
                      <select className="w-full appearance-none rounded-md border border-stroke bg-transparent px-5 py-3 font-medium text-dark-5 outline-hidden transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD] dark:border-dark-3 dark:focus:border-primary">
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
                      <span className="absolute right-5 top-1/2 -translate-y-1/2 text-body-color dark:text-dark-6">
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
              ) : (
                <div
                  key={index}
                  className={`w-full px-4 ${item.columnClasses}`}
                >
                  <div className="mb-5">
                    <label className="mb-2.5 block text-base font-medium text-dark dark:text-white">
                      {item.label}
                    </label>
                    <input
                      type={item.type}
                      placeholder={item.placeholder}
                      className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-body-color outline-hidden transition placeholder:text-dark-5 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD] dark:border-dark-3 dark:text-dark-5 dark:focus:border-primary"
                    />
                  </div>
                </div>
              ),
            )}
          </div>
        </form>

        <h4 className="mb-6 text-xl font-semibold text-dark dark:text-white">
          Your Saved Cards
        </h4>

        <div className="-mx-4 flex flex-wrap">
          {cardItems.map((cardItem, cardIndex) => (
            <div key={cardIndex} className="w-1/2 px-4">
              <div>
                <img src={cardItem.image} alt="card" className="w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CheckoutForm;
