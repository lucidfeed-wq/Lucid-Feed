import React, { useEffect, useRef, useState } from "react";

const TableGrid3 = () => {
  return (
    <section className="bg-gray-2 pb-[90px] pt-[120px] dark:bg-dark">
      <div className="mx-auto px-4 sm:container">
        <div className="mb-9">
          <h2 className="mb-2 text-2xl font-semibold text-dark dark:text-white sm:text-[28px]">
            Latest Items
          </h2>
          <p className="text-base text-body-color dark:text-dark-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="-mx-4 flex flex-wrap">
          <TableGridItem
            image="https://cdn.tailgrids.com/2.0/image/application/images/table-grids/table-grid-03/image-01.jpg"
            name="Modern Lounge Chair"
            details="Lorem ipsum dolor sit amet, consecte adipiscing elit."
            color="Color: White"
            price="158.99$"
            link="/"
          />
          <TableGridItem
            image="https://cdn.tailgrids.com/2.0/image/application/images/table-grids/table-grid-03/image-01.jpg"
            name="Modern Lounge Chair"
            details="Lorem ipsum dolor sit amet, consecte adipiscing elit."
            color="Color: White"
            price="158.99$"
            link="/"
          />
          <TableGridItem
            image="https://cdn.tailgrids.com/2.0/image/application/images/table-grids/table-grid-03/image-01.jpg"
            name="Modern Lounge Chair"
            details="Lorem ipsum dolor sit amet, consecte adipiscing elit."
            color="Color: White"
            price="158.99$"
            link="/"
          />
          <TableGridItem
            image="https://cdn.tailgrids.com/2.0/image/application/images/table-grids/table-grid-03/image-01.jpg"
            name="Modern Lounge Chair"
            details="Lorem ipsum dolor sit amet, consecte adipiscing elit."
            color="Color: White"
            price="158.99$"
            link="/"
          />
        </div>
      </div>
    </section>
  );
};

export default TableGrid3;

const TableGridItem = ({ image, name, details, color, price, link }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="w-full px-4 lg:w-1/2">
      <div className="relative mb-8 items-center rounded-lg bg-white p-3 shadow-1 duration-300 hover:shadow-none dark:bg-dark-2 dark:shadow-3 sm:flex">
        <div className="mb-4 mr-6 h-[166px] w-full max-w-[166px] overflow-hidden rounded-sm sm:mb-0 lg:h-[120px] lg:max-w-[120px] xl:h-[166px] xl:max-w-[166px]">
          <img
            src={image}
            alt="table grid"
            className="aspect-square h-full w-full"
          />
        </div>
        <div className="w-full">
          <a
            href={link}
            className="text-base font-semibold text-dark hover:text-primary dark:text-white sm:text-xl lg:text-lg xl:text-xl"
          >
            {name}
          </a>
          <p className="mb-4 text-base text-body-color dark:text-dark-6">
            {details}
          </p>
          <div className="flex items-center space-x-6">
            <p className="text-base font-medium text-body-color dark:text-dark-6">
              {color}
            </p>
            <p className="text-lg font-semibold text-dark dark:text-white">
              {price}
            </p>
          </div>
        </div>

        <div className="absolute right-4 top-4">
          <button
            ref={trigger}
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="text-secondary-color"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              className="fill-current"
            >
              <g clipPath="url(#clip0_3019_3039)">
                <path d="M15.75 6.75C14.5074 6.75 13.5 7.75736 13.5 9C13.5 10.2426 14.5074 11.25 15.75 11.25C16.9926 11.25 18 10.2426 18 9C18 7.75736 16.9926 6.75 15.75 6.75Z" />
                <path d="M9 6.75C7.75736 6.75 6.75 7.75736 6.75 9C6.75 10.2426 7.75736 11.25 9 11.25C10.2426 11.25 11.25 10.2426 11.25 9C11.25 7.75736 10.2426 6.75 9 6.75Z" />
                <path d="M2.25 6.75C1.00736 6.75 3.05336e-07 7.75736 1.96701e-07 9C8.80661e-08 10.2426 1.00736 11.25 2.25 11.25C3.49264 11.25 4.5 10.2426 4.5 9C4.5 7.75736 3.49264 6.75 2.25 6.75Z" />
              </g>
              <defs>
                <clipPath id="clip0_3019_3039">
                  <rect
                    width="18"
                    height="18"
                    fill="white"
                    transform="translate(18 18) rotate(-180)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>

          <div
            ref={dropdown}
            onFocus={() => setDropdownOpen(true)}
            onBlur={() => setDropdownOpen(false)}
            className={`absolute right-0 top-full z-40 w-[200px] space-y-1 rounded bg-white p-2 shadow-card dark:bg-dark ${
              dropdownOpen === true ? "block" : "hidden"
            }`}
          >
            <button className="w-full rounded-sm px-3 py-2 text-left text-sm text-body-color hover:bg-gray-2 dark:text-dark-6 dark:hover:bg-dark-2">
              Add to cart
            </button>
            <button className="w-full rounded-sm px-3 py-2 text-left text-sm text-body-color hover:bg-gray-2 dark:text-dark-6 dark:hover:bg-dark-2">
              Add to favorite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
