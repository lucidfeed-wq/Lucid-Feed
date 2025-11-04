import React from "react";

const Step7 = () => {
  return (
    <section className="overflow-hidden py-20 lg:py-[120px]">
      <div className="container mx-auto">
        <div className="flex w-full flex-wrap items-center lg:justify-center">
          <SingleStep done number="1" name="Earings and Taxes" />
          <SingleStep number="2" name="Review Payments" />
          <SingleStep number="3" name="Complete Payment" />
        </div>
      </div>
    </section>
  );
};

export default Step7;

const SingleStep = ({ number, name, done }) => {
  return (
    <div className="group flex items-center">
      <div className="mb-5 inline-flex items-center pr-4 lg:pr-0">
        <span
          className={`${
            done ? "border-primary" : "border-[#E7E7E7]"
          } mr-3 flex h-[34px] w-[34px] items-center justify-center rounded-full border bg-gray-2 text-base font-medium text-black`}
        >
          {number}
        </span>
        <p className="text-base text-black">{name}</p>
      </div>
      <div className="mb-5 group-last:hidden hidden px-8 lg:block">
        <svg
          width={32}
          height={16}
          viewBox="0 0 32 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25.3431 0.929612L31.7071 7.29357C32.0976 7.6841 32.0976 8.31726 31.7071 8.70779L25.3431 15.0717C24.9526 15.4623 24.3195 15.4623 23.9289 15.0717C23.5384 14.6812 23.5384 14.0481 23.9289 13.6575L28.5858 9.00068H1C0.447715 9.00068 0 8.55296 0 8.00068C0 7.4484 0.447715 7.00068 1 7.00068H28.5858L23.9289 2.34383C23.5384 1.9533 23.5384 1.32014 23.9289 0.929612C24.3195 0.539088 24.9526 0.539088 25.3431 0.929612Z"
            fill="#E7E7E7"
          />
        </svg>
      </div>
    </div>
  );
};
