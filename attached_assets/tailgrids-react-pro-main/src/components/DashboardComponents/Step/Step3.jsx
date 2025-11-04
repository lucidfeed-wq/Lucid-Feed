import React from "react";

const Step3 = () => {
  return (
    <>
      <section className="overflow-hidden bg-gray-2 py-20 lg:py-[120px]">
        <div className="mx-auto px-4 text-center sm:container">
          <div className="mx-auto inline-flex justify-center rounded-lg bg-white px-5 py-7 shadow-two sm:px-10 sm:py-9">
            <div className="-mx-3 flex items-center justify-center sm:-mx-6 md:-mx-10 lg:-mx-[50px]">
              <SingleStep done number="1" name="Customer" />
              <SingleStep done number="2" name="Shipping" />
              <SingleStep number="3" name="Payment" />
              <SingleStep number="4" name="Confirm" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Step3;

const SingleStep = ({ number, name, done }) => {
  return (
    <div className="group relative px-3 text-center sm:px-6 md:px-10 lg:px-[50px]">
      <span
        className={`${
          done && "bg-primary"
        } absolute -right-[45px] top-[16px] block h-[2px] w-[90px] bg-gray group-last:hidden sm:-right-[70px] sm:w-[140px] md:-right-[75px] md:w-[150px]`}
      ></span>
      <span
        className={`${
          done && "border-primary bg-primary text-white"
        } relative z-10 mx-auto mb-[10px] flex h-[34px] w-[34px] items-center justify-center rounded-full border-2 border-[#e7e7e7] bg-gray text-base font-medium text-black`}
      >
        {done ? (
          <svg
            width={16}
            height={12}
            viewBox="0 0 16 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.671 0.491162L15.6941 0.521153C16.1124 1.06264 16.1273 1.9008 15.5768 2.45815L7.29232 11.3732C6.92972 11.7721 6.43864 12 5.89584 12C5.38903 12 4.87105 11.7821 4.49894 11.3727L0.376545 6.92507C-0.125563 6.36795 -0.125491 5.51224 0.376618 4.95512C0.931025 4.33998 1.8678 4.33778 2.42493 4.94855L5.91939 8.71874L13.5978 0.455859C14.155 -0.154327 15.0914 -0.151944 15.6456 0.46301L15.671 0.491162Z"
              fill="white"
            />
          </svg>
        ) : (
          number
        )}
      </span>
      <span className="text-[10px] font-medium text-body-color sm:text-base">
        {name}
      </span>
    </div>
  );
};
