import React from "react";

const Step5 = () => {
  return (
    <section className="overflow-hidden py-20 lg:py-[120px]">
      <div className="mx-auto px-4 sm:container">
        <div className="mx-auto w-max">
          <SingleStep done number="Step 1" name="Create Account" />
          <SingleStep inProgress number="Step 2" name="Login" />
          <SingleStep number="Step 3" name="Payment" />
          <SingleStep number="Step 4" name="Confirm" />
        </div>
      </div>
    </section>
  );
};

export default Step5;

const SingleStep = ({ number, name, done, inProgress }) => {
  return (
    <div className="group relative flex items-center justify-end pb-[62px]">
      <span
        className={`${
          (done && "bg-primary") ||
          (inProgress &&
            "bg-linear-to-b from-primary via-[#3056d37f] to-[#3056d300]")
        } absolute right-[18px] top-4 -z-10 h-full w-1 bg-gray group-last:hidden`}
      ></span>
      <div className="mr-8 text-right">
        <span className="text-sm text-body-color sm:text-base"> {number} </span>
        <h3 className="text-base font-medium text-black sm:text-lg">{name}</h3>
      </div>
      <div>
        <div
          className={`${
            done || inProgress ? "bg-primary" : "bg-gray"
          } flex h-10 w-10 items-center justify-center rounded-full`}
        >
          <span
            className={`${
              done || inProgress ? "bg-primary" : "bg-white"
            } flex h-6 w-6 items-center justify-center rounded-full`}
          >
            {done || inProgress ? (
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
            ) : null}
          </span>
        </div>
      </div>
    </div>
  );
};
