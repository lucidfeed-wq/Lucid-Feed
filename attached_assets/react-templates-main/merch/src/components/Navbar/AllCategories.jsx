import { useState, useRef, useEffect } from "react";
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

  const handleDropDownToggle = () => {
    setOpenDropDown(!openDropDown);
  };

  const handleCategoryToggle = () => {
    setCategoryOpen(!categoryOpen);
  };

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !event.target.closest(".dropdown-toggle")
      ) {
        setOpenDropDown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="relative py-4">
        <Link
          to="#"
          onClick={handleDropDownToggle}
          className="bg-primary hover:bg-primary/90 dropdown-toggle inline-flex items-center justify-between rounded-[5px] py-[9px] pr-[18px] pl-4 text-base font-medium whitespace-nowrap text-white"
        >
          <span className="pr-[10px] text-white">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current"
            >
              <path d="M16.875 8.38125H1.12502C0.787524 8.38125 0.478149 8.6625 0.478149 9.02812C0.478149 9.36562 0.759399 9.675 1.12502 9.675H16.875C17.2125 9.675 17.5219 9.39375 17.5219 9.02812C17.5219 8.6625 17.2125 8.38125 16.875 8.38125Z" />
              <path d="M16.875 13.1625H1.12502C0.787524 13.1625 0.478149 13.4437 0.478149 13.8094C0.478149 14.175 0.759399 14.4562 1.12502 14.4562H16.875C17.2125 14.4562 17.5219 14.175 17.5219 13.8094C17.5219 13.4437 17.2125 13.1625 16.875 13.1625Z" />
              <path d="M1.12502 4.8375H16.875C17.2125 4.8375 17.5219 4.55625 17.5219 4.19062C17.5219 3.825 17.2406 3.54375 16.875 3.54375H1.12502C0.787524 3.54375 0.478149 3.825 0.478149 4.19062C0.478149 4.55625 0.787524 4.8375 1.12502 4.8375Z" />
            </svg>
          </span>
          All categories
          <span className="pl-3 text-white">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current"
            >
              <path d="M8.00002 11.4C7.85002 11.4 7.72502 11.35 7.60002 11.25L1.85002 5.6C1.62502 5.375 1.62502 5.025 1.85002 4.8C2.07502 4.575 2.42502 4.575 2.65002 4.8L8.00002 10.025L13.35 4.75C13.575 4.525 13.925 4.525 14.15 4.75C14.375 4.975 14.375 5.325 14.15 5.55L8.40002 11.2C8.27502 11.325 8.15002 11.4 8.00002 11.4Z" />
            </svg>
          </span>
        </Link>

        <div ref={dropdownRef}>
          <div
            className={`border-stroke dark:border-dark-3 dark:bg-dark-2 absolute top-[115%] left-0 z-10 w-[180px] rounded-lg border-[.5px] bg-white py-4 transition-all ${openDropDown ? "block" : "hidden"}`}
          >
            <span className="border-stroke dark:border-dark-3 dark:bg-dark-2 absolute -top-[6px] left-6 -z-10 hidden h-3 w-3 rotate-45 rounded-xs border-[.5px] border-r-0 border-b-0 bg-white lg:block"></span>

            {allCategories.map((item, index) =>
              item.submenuGroup ? (
                <div key={index} className="group relative pr-[18px] pl-6">
                  <Link
                    to={item.link}
                    onClick={handleCategoryToggle}
                    className="text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary flex items-center justify-between py-[6px] text-sm"
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
                    <div className="flex flex-wrap -mx-2">
                      {item.submenuGroup.map((group, groupIndex) =>
                        group.image ? (
                          <div
                            key={groupIndex}
                            className="w-full px-2 lg:w-1/3"
                          >
                            <Link to={group.link} className="rounded-sm">
                              <img
                                src={group.image}
                                alt="banner"
                                className="w-full rounded-sm"
                              />
                            </Link>
                          </div>
                        ) : (
                          <div
                            key={groupIndex}
                            className="w-full px-2 lg:w-1/3"
                          >
                            <div>
                              <h3 className="text-dark mb-[14px] text-base font-semibold dark:text-white">
                                {group.title}
                              </h3>

                              {group.groupItems.map(
                                (groupItem, groupItemIndex) => (
                                  <Link
                                    key={groupItemIndex}
                                    to={groupItem.link}
                                    className="text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary block py-[6px] text-base"
                                  >
                                    {groupItem.text}
                                  </Link>
                                ),
                              )}
                            </div>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div key={index} className="pr-[18px] pl-6">
                  <Link
                    to={item.link}
                    onClick={handleCategoryToggle}
                    className="text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary flex items-center justify-between py-[6px] text-sm"
                  >
                    {item.text}
                  </Link>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllCategories;
