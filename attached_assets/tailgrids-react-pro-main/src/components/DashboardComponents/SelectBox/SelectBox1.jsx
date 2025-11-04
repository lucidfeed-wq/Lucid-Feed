import React, { useState } from "react";

const SelectBox = () => {
  return (
    <section className="bg-gray-2 dark:bg-dark py-20 lg:py-[120px]">
      <div className="container mx-auto">
        <div>
          <h3 className="mb-6 text-lg font-medium text-dark dark:text-white">Team Members</h3>
          <div className="w-full max-w-[375px] space-y-[10px] rounded-md bg-white dark:bg-dark-2 p-4 shadow-1 dark:shadow-box-dark">
            <SelectBoxItem
              img="https://cdn.tailgrids.com/2.0/image/dashboard/images/box-select/box-select-01/image-01.png"
              name="Henry Dholi"
              position="Web Developer"
            />
            <SelectBoxItem
              img="https://cdn.tailgrids.com/2.0/image/dashboard/images/box-select/box-select-01/image-02.png"
              name="Mariya Desoja"
              position="Graphics Designer"
            />
            <SelectBoxItem
              img="https://cdn.tailgrids.com/2.0/image/dashboard/images/box-select/box-select-01/image-03.png"
              name="Robert Jhon"
              position="Ui/Ux Designer"
            />
            <SelectBoxItem
              img="https://cdn.tailgrids.com/2.0/image/dashboard/images/box-select/box-select-01/image-04.png"
              name="Cody Fisher"
              position="Content Writer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectBox;

const SelectBoxItem = ({ img, name, position }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        name={name}
        id={name}
        className="sr-only"
        onChange={() => {
          setIsChecked(!isChecked);
        }}
      />
      <label htmlFor={name} className="flex w-full items-center">
        <div
          className={`user-box flex w-full items-center rounded-[5px] py-[10px] px-4 hover:bg-gray-2 dark:hover:bg-dark  ${
            isChecked
              ? "bg-gray-2 dark:bg-dark"
              : ""
          }`}
        >
          <div className={`box mr-5 flex h-5 w-full max-w-[20px] cursor-pointer items-center justify-center rounded-sm border  ${isChecked ? "border-primary bg-primary" : "border-stroke dark:border-dark-3"}`}>
            <span className={`icon ${isChecked ? "" : "opacity-0"}`}>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.0791 3.08687C12.307 3.31468 12.307 3.68402 12.0791 3.91183L5.66248 10.3285C5.43467 10.5563 5.06533 10.5563 4.83752 10.3285L1.92085 7.41183C1.69305 7.18402 1.69305 6.81468 1.92085 6.58687C2.14866 6.35906 2.51801 6.35906 2.74581 6.58687L5.25 9.09106L11.2542 3.08687C11.482 2.85906 11.8513 2.85906 12.0791 3.08687Z"
                  fill="white"
                ></path>
              </svg>
            </span>
          </div>
          <div className="mr-5 h-11 w-full max-w-[44px] rounded-full">
            <img
              src={img}
              alt="author"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div>
            <h4 className="text-sm font-medium text-dark dark:text-white">{name}</h4>
            <p className="text-xs text-body-color dark:text-dark-6">{position}</p>
          </div>
        </div>
      </label>
    </div>
  );
};
