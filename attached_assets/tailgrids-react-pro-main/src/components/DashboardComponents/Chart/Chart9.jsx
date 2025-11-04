import React, { useEffect, useRef, useState } from "react";
import ReactApexChart from "react-apexcharts";

const Chart9 = () => {
  const series = [85];
  const options = {
    chart: {
      fontFamily: "Inter, sans-serif",
      height: 300,
      type: "radialBar",
    },

    responsive: [
      {
        breakpoint: 1024,
        options: {
          chart: {
            height: 180,
          },
          plotOptions: {
            radialBar: {
              dataLabels: {
                total: {
                  fontSize: "12px",
                },
              },
            },
          },
        },
      },
      {
        breakpoint: 1280,
        options: {
          chart: {
            height: 250,
          },
        },
      },
    ],

    plotOptions: {
      radialBar: {
        hollow: {
          size: "70%",
        },
        dataLabels: {
          name: {
            fontSize: "22px",
          },
          value: {
            fontSize: "24px",
            fontFamily: "'Inter'",
            fontWeight: "bold",
            offsetY: 8,
          },
          total: {
            show: true,
            fontSize: "16px",
            label: "Conversion Rate",
            fontFamily: "'Inter'",
          },
        },
      },
    },
    dataLabels: {
      enabled: true,
    },
    colors: ["#3758F9"],
    legend: {
      show: false,
      position: "bottom",
    },
  };

  return (
    <section className="bg-gray-2 py-20 dark:bg-dark lg:py-[120px]">
      <div className="mx-auto px-4 md:container">
        <div className="mx-auto w-full max-w-[500px] rounded-lg border border-stroke bg-white px-5 pb-5 pt-[30px] dark:border-dark-3 dark:bg-dark-2 sm:px-[30px]">
          <div className="flex justify-between">
            <div>
              <h5 className="text-sm font-semibold text-dark dark:text-white">
                Conversion Details
              </h5>
              <p className="text-xs text-body-color dark:text-dark-6">
                your total sales data analytics
              </p>
            </div>
            <div>
              <Dropdown />
            </div>
          </div>
          <div>
            <div id="chartOne" className="-ml-5">
              <ReactApexChart
                options={options}
                series={series}
                type="radialBar"
                height={300}
              />
            </div>
          </div>
          <div>
            <p className="flex flex-wrap items-center justify-center text-xs font-medium text-body-color dark:text-dark-6">
              <span className="mr-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#E6F9EC] text-green dark:bg-green-light-4">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.464 4.76249L3.59043 7.63606L2.83293 6.87856L6.99972 2.71178L11.1665 6.87856L10.409 7.63606L7.53543 4.76249L7.53543 11.2832L6.464 11.2832L6.464 4.76249Z"
                    fill="currentcolor"
                  />
                </svg>
              </span>
              <span className="pl-1 text-sm text-green"> (+8%) </span>
              <span className="pl-1"> Compared to prev month</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chart9;

const Dropdown = () => {
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
    <div className="relative">
      <button
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="text-body-color dark:text-dark-6"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-current"
        >
          <path d="M5 14C6.10457 14 7 13.1046 7 12C7 10.8954 6.10457 10 5 10C3.89543 10 3 10.8954 3 12C3 13.1046 3.89543 14 5 14Z" />
          <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" />
          <path d="M19 14C20.1046 14 21 13.1046 21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14Z" />
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
          Edit
        </button>
        <button className="w-full rounded-sm px-3 py-2 text-left text-sm text-body-color hover:bg-gray-2 dark:text-dark-6 dark:hover:bg-dark-2">
          Delete
        </button>
      </div>
    </div>
  );
};
