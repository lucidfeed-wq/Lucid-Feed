import React, { useState } from "react";

const Filter4 = () => {
  return (
    <section className="bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-4/12">
            <div className="xl:mr-10">
              <SidebarCard title="Categories">
                <CheckboxGroup name="type" id="1" title="T-Shirt" />
                <CheckboxGroup name="type2" id="2" title="Sweat Shirt  " />
                <CheckboxGroup name="type3" id="3" title="Trousers" />
                <CheckboxGroup name="type4" id="4" title="Kitwears" />
                <CheckboxGroup name="type5" id="5" title="Jacket" />
              </SidebarCard>
              <SidebarCard title="Choose Color">
                <CheckboxGroup name="color" id="one" title="White" />
                <CheckboxGroup name="color" id="two" title="Blue  " />
                <CheckboxGroup name="color" id="three" title="Brown" />
                <CheckboxGroup name="color" id="four" title="Green" />
                <CheckboxGroup name="color" id="five" title="Purple" />
              </SidebarCard>
              <SidebarCard title="Select Size">
                <CheckboxGroup name="size" id="m" title="Small" />
                <CheckboxGroup name="size" id="l" title="Medium" />
                <CheckboxGroup name="size" id="xl" title="Large" />
                <CheckboxGroup name="size" id="xxl" title="Extra Large" />
              </SidebarCard>
            </div>
          </div>

          <div className="w-full px-4 lg:w-8/12">
            <div className="mb-8 flex h-full items-center justify-center rounded-lg border border-dashed border-stroke bg-white py-12 dark:border-dark-3 dark:bg-dark-2">
              <span className="text-3xl font-bold text-dark/10 dark:text-white sm:text-4xl md:text-[44px] md:leading-[55px]">
                Products
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filter4;

const SidebarCard = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="mb-9">
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="flex w-full items-center justify-between border-b border-stroke pb-[18px] text-lg font-semibold text-dark dark:border-dark-3 dark:text-white"
      >
        {title}
        <span className={`${isOpen ? "rotate-180" : "rotate-0"}`}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-current"
          >
            <path
              d="M9.00001 12.825C8.83126 12.825 8.69064 12.7688 8.55001 12.6563L2.08126 6.30002C1.82814 6.0469 1.82814 5.65315 2.08126 5.40002C2.33439 5.1469 2.72814 5.1469 2.98126 5.40002L9.00001 11.2781L15.0188 5.34377C15.2719 5.09065 15.6656 5.09065 15.9188 5.34377C16.1719 5.5969 16.1719 5.99065 15.9188 6.24377L9.45001 12.6C9.30939 12.7406 9.16876 12.825 9.00001 12.825Z"
              fill=""
            />
          </svg>
        </span>
      </button>
      <div className={`${isOpen ? "block" : "hidden"} space-y-4 pt-6`}>
        {children}
      </div>
    </div>
  );
};

const CheckboxGroup = ({ title, id, name }) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="flex cursor-pointer select-none items-center font-medium text-dark dark:text-white"
      >
        <div className="relative">
          <input type="radio" name={name} id={id} className="sr-only"></input>
          <div className="box mr-4 flex h-5 w-5 items-center justify-center rounded-sm border">
            <span className="opacity-0">
              <svg
                width="11"
                height="8"
                viewBox="0 0 11 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                  fill="#3056D3"
                  stroke="#3056D3"
                  strokeWidth="0.4"
                ></path>
              </svg>
            </span>
          </div>
        </div>
        {title}
      </label>
    </div>
  );
};
