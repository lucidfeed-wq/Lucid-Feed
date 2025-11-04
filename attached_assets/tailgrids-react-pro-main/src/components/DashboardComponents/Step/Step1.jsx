import React from "react";

const Step = () => {
  return (
    <>
      <section className="overflow-hidden py-20 lg:py-[120px]">
        <div className="mx-auto px-4 sm:container">
          <div className="-mx-3 flex items-center justify-center sm:-mx-7 md:-mx-10 lg:-mx-[50px]">
            <SingleStep done number="1" name="Step 1" />
            <SingleStep ongoing number="2" name="Step 2" />
            <SingleStep number="3" name="Step 3" />
            <SingleStep number="4" name="Step 4" />
            <SingleStep number="5" name="Step 5" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Step;

const SingleStep = ({ number, name, done, ongoing }) => {
  return (
    <div className="group relative px-3 text-center sm:px-7 md:px-10 lg:px-[50px]">
      <span
        className={`${
          done && "bg-primary"
        } absolute -right-[45px] top-[17px] block h-[2px] w-[80px] bg-gray group-last:hidden sm:-right-[60px] sm:top-[25px] sm:w-[120px]`}
      ></span>
      <span
        className={`${
          (done && "border-primary bg-primary text-white") ||
          (ongoing && "border-primary text-primary")
        } relative z-10 mx-auto mb-[10px] flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#e7e7e7] bg-gray text-base font-medium text-black  sm:h-[50px] sm:w-[50px] sm:text-xl`}
      >
        {number}
      </span>
      <span className="text-[10px] font-medium text-black sm:text-base md:text-xl">
        {name}
      </span>
    </div>
  );
};
