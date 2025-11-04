import { useState, useEffect, useRef } from "react";

import { Link } from "react-router-dom";
import banner from "../../assets/ecom-images/navbars/navbar-02/bannder.jpg";

const allCategories = [
  { text: "Arts & Crafts", link: "#" },
  {
    text: "Fashion",
    link: "#",
    submenuGroup: [
      {
        title: "New Arrivals",
        groupItems: [
          { text: "Dresses", link: "#" },
          { text: "Jackets", link: "#" },
          { text: "Sweatshirts", link: "#" },
          { text: "Tops & Tees", link: "#" },
          { text: "Party Dresses", link: "#" },
        ],
      },
      {
        title: "New Arrivals",
        groupItems: [
          { text: "Dresses", link: "#" },
          { text: "Jackets", link: "#" },
          { text: "Sweatshirts", link: "#" },
          { text: "Tops & Tees", link: "#" },
          { text: "Party Dresses", link: "#" },
        ],
      },
      {
        image: banner,
        link: "#",
      },
    ],
  },
  { text: "Bags & Shoes", link: "#" },
  { text: "Jewelry & Watch", link: "#" },
];

const AllCategories = () => {
  const [openDropDown, setOpenDropDown] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const catRef = useRef(null);

  const handleDropDownToggle = () => {
    setOpenDropDown(!openDropDown);
  };

  const handleCategoryToggle = () => {
    setCategoryOpen(!categoryOpen);
  };

  // Close navbar when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (catRef.current && !catRef.current.contains(event.target)) {
        setNavbarOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <li ref={catRef} className="relative lg:py-4">
      <Link
        to="#"
        onClick={handleDropDownToggle}
        className="bg-gray-2 text-dark hover:text-primary dark:bg-dark-2 flex items-center justify-between rounded-sm px-4 py-2 text-base font-medium lg:inline-flex lg:px-5 lg:py-2 dark:text-white"
      >
        All categories
        <span className="pl-[22px]">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-current"
          >
            <path d="M7.99999 11.4C7.84999 11.4 7.72499 11.35 7.59999 11.25L1.84999 5.60005C1.62499 5.37505 1.62499 5.02505 1.84999 4.80005C2.07499 4.57505 2.42499 4.57505 2.64999 4.80005L7.99999 10.025L13.35 4.75005C13.575 4.52505 13.925 4.52505 14.15 4.75005C14.375 4.97505 14.375 5.32505 14.15 5.55005L8.39999 11.2C8.27499 11.325 8.14999 11.4 7.99999 11.4Z" />
          </svg>
        </span>
      </Link>

      <div
        className={`dark:bg-dark-2 lg:border-stroke dark:lg:border-dark-3 relative top-full left-0 z-10 rounded-lg bg-white transition-all lg:absolute lg:top-[112%] lg:w-[180px] lg:border-[.5px] lg:py-4 ${openDropDown ? "block" : "hidden"}`}
      >
        <span className="border-stroke dark:border-dark-3 dark:bg-dark-2 absolute -top-[6px] left-6 -z-10 hidden h-3 w-3 rotate-45 rounded-xs border-[.5px] border-r-0 border-b-0 bg-white lg:block"></span>

        {allCategories.map((item, index) =>
          item.submenuGroup ? (
            <div key={index} className="group relative px-2 lg:px-6">
              <Link
                to={item.link}
                onClick={handleCategoryToggle}
                className="text-body-color hover:text-primary group-hover:text-primary dark:text-dark-6 dark:hover:text-primary flex items-center justify-between py-[6px] text-sm"
              >
                {item.text}

                <span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current"
                  >
                    <path d="M4.52811 12.5344C4.39686 12.5344 4.28749 12.4906 4.17811 12.4031C3.98124 12.2063 3.98124 11.9 4.17811 11.7031L8.77186 7L4.17811 2.31875C3.98124 2.12188 3.98124 1.81563 4.17811 1.61875C4.37499 1.42188 4.68124 1.42188 4.87811 1.61875L9.82186 6.65C10.0187 6.84688 10.0187 7.15313 9.82186 7.35L4.87811 12.3813C4.79061 12.4688 4.65936 12.5344 4.52811 12.5344Z" />
                  </svg>
                </span>
              </Link>

              <div
                className={`border-stroke dark:border-dark-3 dark:bg-dark-2 top-0 left-full bg-white py-2 group-hover:visible group-hover:opacity-100 lg:invisible lg:absolute lg:w-[600px] lg:rounded-sm lg:border-[.5px] lg:px-8 lg:py-8 lg:opacity-0 xl:w-[650px] ${categoryOpen ? "block" : "hidden lg:block"}`}
              >
                <div className="-mx-2 flex flex-wrap">
                  {item.submenuGroup.map((group, groupIndex) =>
                    group.image ? (
                      <div key={groupIndex} className="w-full px-2 lg:w-1/3">
                        <Link to={group.link} className="rounded-sm">
                          <img
                            src={group.image}
                            alt="banner"
                            className="w-full rounded-sm"
                          />
                        </Link>
                      </div>
                    ) : (
                      <div key={groupIndex} className="w-full px-2 lg:w-1/3">
                        <div>
                          <h3 className="text-dark mb-[14px] text-base font-semibold dark:text-white">
                            {group.title}
                          </h3>

                          {group.groupItems.map((groupItem, groupItemIndex) => (
                            <Link
                              key={groupItemIndex}
                              to={groupItem.link}
                              className="text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary block py-[6px] text-base"
                            >
                              {groupItem.text}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div key={index} className="px-2 lg:pr-[18px] lg:pl-6">
              <Link
                to={item.link}
                onClick={handleCategoryToggle}
                className="text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary block py-[6px] text-base"
              >
                {item.text}
              </Link>
            </div>
          ),
        )}
      </div>
    </li>
  );
};

export default AllCategories;
