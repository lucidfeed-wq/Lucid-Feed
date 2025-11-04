import React from "react";

const Step8 = () => {
  return (
    <section className="overflow-hidden py-20 lg:py-[120px]">
      <div className="mx-auto px-4 sm:container">
        <div className="-mx-4 flex flex-wrap">
          <SingleStep
            done
            number="Step 1"
            name="Create Account"
            details="Lorem ipsum dolor sit standta amet consectetur adipiscing elit."
          />
          <SingleStep
            number="Step 2"
            name="Setup Account"
            details="Lorem ipsum dolor sit standta amet consectetur adipiscing elit."
          />
          <SingleStep
            number="Step 3"
            name="Start Using"
            details="Lorem ipsum dolor sit standta amet consectetur adipiscing elit."
          />
        </div>
      </div>
    </section>
  );
};

export default Step8;

const SingleStep = ({ number, name, details, done }) => {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div
        className={`${
          done ? "border-primary" : "border-[#E7E7E7]"
        } mb-8 border-b-[3px]`}
      >
        <span className="border-stroke mb-[18px] inline-block border py-1 px-4 text-sm font-medium text-black">
          {number}
        </span>
        <h3 className="mb-[10px] text-xl font-medium text-black">{name}</h3>
        <p className="text-body-color mb-5 text-base">{details}</p>
      </div>
    </div>
  );
};
