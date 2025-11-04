import React, { useEffect, useRef, useState } from "react";
import ReactApexChart from "react-apexcharts";

const DataStats2 = () => {
  return (
    <section className="bg-gray-2 py-20 dark:bg-dark lg:py-[120px]">
      <div className="mx-auto px-4 md:container">
        <div className="-mx-4 flex flex-wrap">
          <DataStatsCard
            name="Bitcoin"
            color="#F2994A"
            rate="0.223245 BTC"
            usdRate="11,032,37 USD"
            increment="+12.05"
            icon={
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_2955_1208)">
                  <path
                    d="M9.17388 19.912V17.4156H8.34779V19.912H6.69562V17.4156H2.59079L3.00384 14.9555H3.89519C4.62545 14.9555 5.04345 14.2525 5.04345 13.5454V6.20229C5.04345 5.51415 4.64279 5.04246 3.91584 5.04246H2.56519V2.5642H6.69562V0.0859375H8.34779V2.5642H9.17388V0.0859375H10.8261V2.60798C14.3906 2.72859 15.8024 4.07924 16.2072 5.60255C16.6863 7.40342 15.4992 8.91516 14.4782 9.28359C15.7181 9.59916 17.4348 10.5153 17.4348 12.6292C17.4348 15.5065 15.2142 17.4338 10.8261 17.4338V19.912H9.17388ZM8.34779 10.8201V14.9555C11.6265 14.9555 13.8727 14.6457 13.8727 12.8771C13.8727 10.9804 11.4456 10.8201 8.34779 10.8201ZM8.34779 9.17289C10.1743 9.17289 12.9557 9.04403 12.9557 7.10768C12.9557 5.4555 11.2391 5.04246 8.34779 5.04246V9.17289Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2955_1208">
                    <rect
                      width={19.8261}
                      height={19.8261}
                      fill="white"
                      transform="translate(0.0869141 0.0859375)"
                    />
                  </clipPath>
                </defs>
              </svg>
            }
          >
            <Chart name="Bitcoin" color="#F2994A" />
          </DataStatsCard>
          <DataStatsCard
            name="LITECOIN"
            color="#627EEA"
            rate="0.93245 ETH"
            usdRate="9,047,32 USD"
            increment="+8.05"
            icon={
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.26074 10.7537L12.3211 7.77143L19.1643 10.8299L12.3103 0L5.26074 10.7537ZM5.28247 14.0626L12.332 18.1551L19.5228 14.0626L12.3972 24L5.28247 14.0626Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.3537 9.23047L5 12.3325L12.3537 16.425L19.501 12.4196L12.3537 9.23047Z"
                  fill="white"
                />
              </svg>
            }
          >
            <Chart name="LITECOIN" color="#627EEA" />
          </DataStatsCard>
          <DataStatsCard
            name="ETHEREUM"
            color="#345d9d"
            rate="0.64347 LTC"
            usdRate="3,059,02 USD"
            increment="+5.09"
            icon={
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_2955_1293)">
                  <path
                    d="M9.99995 18.9174C14.925 18.9174 18.9176 14.9248 18.9176 9.99971C18.9176 5.07461 14.925 1.08203 9.99995 1.08203C5.07485 1.08203 1.08228 5.07461 1.08228 9.99971C1.08228 14.9248 5.07485 18.9174 9.99995 18.9174Z"
                    fill="#345D9D"
                  />
                  <path
                    d="M10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.34591 0.761209 6.17317C0.00433283 8.00043 -0.193701 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8079C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C20.0038 8.6906 19.7497 7.39326 19.2521 6.18207C18.7546 4.97087 18.0233 3.86954 17.1001 2.94096C16.1769 2.01237 15.0799 1.27471 13.8716 0.770101C12.6634 0.265491 11.3675 0.00381009 10.0581 0H10ZM10.1695 10.339L9.12833 13.8499H14.6973C14.7342 13.8486 14.771 13.8546 14.8056 13.8675C14.8402 13.8804 14.8718 13.9001 14.8988 13.9252C14.9258 13.9504 14.9476 13.9807 14.9629 14.0143C14.9781 14.0479 14.9866 14.0842 14.9879 14.1211V14.2131L14.5036 15.8838C14.4823 15.9628 14.4347 16.0322 14.3687 16.0806C14.3027 16.129 14.2222 16.1535 14.1404 16.1501H5.61744L7.04601 11.2833L5.44795 11.7676L5.81114 10.6538L7.40921 10.1695L9.41889 3.3414C9.44102 3.26284 9.48879 3.19394 9.55461 3.14567C9.62043 3.0974 9.70051 3.07255 9.78209 3.07506H11.9371C11.9739 3.07377 12.0107 3.07976 12.0453 3.09269C12.0799 3.10562 12.1116 3.12524 12.1385 3.15043C12.1655 3.17561 12.1873 3.20587 12.2026 3.23947C12.2178 3.27307 12.2264 3.30936 12.2276 3.34625V3.43826L10.5327 9.20097L12.1308 8.71671L11.7918 9.87894L10.1695 10.339Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2955_1293">
                    <rect width={20} height={20} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            }
          >
            <Chart name="ETHEREUM" color="#345d9d" />
          </DataStatsCard>
          <DataStatsCard
            name="RIPPLE"
            color="#9b51e0"
            rate="0.53453 RIP"
            usdRate="1,082,19 USD"
            decrement="-8.25"
            icon={
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 0C4.47717 0 0 4.47716 0 10C0 15.5228 4.47717 20 10 20C15.5228 20 20 15.5228 20 10C19.9937 4.47978 15.5202 0.00632384 10 0ZM14.9066 8.90009C14.5347 9.22856 14.1053 9.48537 13.6399 9.65714C13.3105 9.76371 13.0093 9.94266 12.7582 10.1811C12.4249 10.9748 12.6295 11.8928 13.2689 12.4698C13.2907 12.4916 13.3112 12.5149 13.3302 12.5395C14.1345 13.5702 14.0528 15.0365 13.139 15.9715C12.1273 16.9814 10.4887 16.9814 9.47686 15.9715C8.83662 15.2031 8.62738 14.1635 8.92033 13.2072C8.99119 12.6546 8.80219 12.1001 8.40828 11.706C8.01742 11.3293 7.47551 11.1525 6.93775 11.226C5.98146 11.5185 4.94212 11.3086 4.17416 10.6681C3.16297 9.65823 3.16206 8.01984 4.17197 7.00884C4.17264 7.00798 4.1735 7.00731 4.17416 7.00665C5.10864 6.09221 6.5757 6.01045 7.60609 6.8155C8.32742 7.52827 9.39595 7.76827 9.96381 7.38617C10.2031 7.13569 10.3823 6.83422 10.4883 6.50441C10.6601 6.03945 10.9164 5.61045 11.2445 5.23902C12.2557 4.22778 13.8949 4.22777 14.9062 5.23883C15.9176 6.25002 15.9176 7.88927 14.9066 8.90051V8.90009Z"
                  fill="white"
                />
                <path
                  d="M12.2547 6.24819C12.0598 6.49843 11.9057 6.7779 11.7985 7.07629C11.6029 7.66462 11.2419 8.18434 10.7591 8.5732C9.39758 9.3043 7.7141 9.02158 6.66605 7.88591C6.20323 7.57548 5.58637 7.62953 5.18461 8.01581C4.73118 8.46858 4.73075 9.20339 5.18351 9.65677C5.18394 9.65701 5.18418 9.65744 5.18461 9.65768C5.45794 9.92992 5.84728 9.97311 6.67867 9.82092C6.84719 9.79044 7.01805 9.77497 7.18938 9.77497C8.02234 9.78844 8.81906 10.1176 9.41873 10.6957C10.1453 11.4223 10.4823 12.4516 10.3257 13.4672C10.171 14.2966 10.2142 14.6872 10.4877 14.9612C10.9414 15.4139 11.6759 15.4139 12.1296 14.9612C12.5215 14.5425 12.5603 13.9044 12.2218 13.4414C11.1149 12.3914 10.8485 10.7299 11.5717 9.38649C11.9606 8.90387 12.4803 8.54334 13.0687 8.34844C13.3675 8.24077 13.6472 8.08577 13.8972 7.88962C14.3504 7.43619 14.3504 6.70114 13.897 6.24795C13.4434 5.79476 12.7086 5.79499 12.2554 6.24842L12.2547 6.24819Z"
                  fill="white"
                />
              </svg>
            }
          >
            <Chart name="RIPPLE" color="#9b51e0" />
          </DataStatsCard>
        </div>
      </div>
    </section>
  );
};

export default DataStats2;

const DataStatsCard = ({
  children,
  name,
  rate,
  usdRate,
  decrement,
  increment,
  color,
  icon,
}) => {
  return (
    <div className="w-full px-4 sm:w-1/2 lg:w-1/4">
      <div className="mb-8 rounded-[5px] bg-white p-4 shadow-pricing-4 dark:bg-dark-2 dark:shadow-box-dark">
        <div className="flex items-center justify-between">
          <p className="text-xs font-medium uppercase text-dark dark:text-white">
            {name}
          </p>
          <Dropdown />
        </div>
        {children}
        <div className="flex items-end justify-between">
          <div className="flex w-full items-center">
            <div
              className={`mr-[10px] flex h-[38px] w-full max-w-[38px] items-center justify-center rounded-md`}
              style={{ backgroundColor: color }}
            >
              {icon}
            </div>
            <div>
              <p className="mb-1 text-sm font-medium text-dark dark:text-white">
                {rate}
              </p>
              <p className="text-xs font-medium text-body-color dark:text-dark-6">
                {usdRate}
              </p>
            </div>
          </div>
          <div>
            <p
              className={`flex items-center justify-end text-xs font-medium ${
                increment ? "text-green" : "text-red"
              }`}
            >
              <span className="pr-1">
                {increment && (
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.35716 2.3925L0.908974 5.745L5.0443e-07 4.86125L5 -5.1656e-07L10 4.86125L9.09103 5.745L5.64284 2.3925L5.64284 10L4.35716 10L4.35716 2.3925Z"
                      fill="currentColor"
                    />
                  </svg>
                )}
                {decrement && (
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.64284 7.6075L9.09102 4.255L10 5.13875L5 10L-8.98488e-07 5.13875L0.908973 4.255L4.35716 7.6075L4.35716 7.6183e-07L5.64284 9.86625e-07L5.64284 7.6075Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                )}
              </span>
              {increment}
              {decrement}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

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
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-current"
        >
          <path d="M10.5 14.25C10.5 13.4216 9.82843 12.75 9 12.75C8.17157 12.75 7.5 13.4216 7.5 14.25C7.5 15.0784 8.17157 15.75 9 15.75C9.82843 15.75 10.5 15.0784 10.5 14.25Z" />
          <path d="M10.5 9C10.5 8.17157 9.82843 7.5 9 7.5C8.17157 7.5 7.5 8.17157 7.5 9C7.5 9.82843 8.17157 10.5 9 10.5C9.82843 10.5 10.5 9.82843 10.5 9Z" />
          <path d="M10.5 3.75C10.5 2.92157 9.82843 2.25 9 2.25C8.17157 2.25 7.5 2.92157 7.5 3.75C7.5 4.57843 8.17157 5.25 9 5.25C9.82843 5.25 10.5 4.57843 10.5 3.75Z" />
        </svg>
      </button>
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute right-0 top-full z-40 w-[150px] space-y-1 rounded bg-white p-2 shadow-card dark:bg-dark ${
          dropdownOpen === true ? "block" : "hidden"
        }`}
      >
        <button className="w-full rounded-sm px-3 py-1.5 text-left text-sm text-body-color hover:bg-gray-2 dark:text-dark-6 dark:hover:bg-dark-2">
          Edit
        </button>
        <button className="w-full rounded-sm px-3 py-1.5 text-left text-sm text-body-color hover:bg-gray-2 dark:text-dark-6 dark:hover:bg-dark-2">
          Delete
        </button>
      </div>
    </div>
  );
};

const Chart = (props) => {
  const series = [
    {
      name: props.name,
      data: [61, 45, 78, 41, 82, 109, 100],
    },
  ];
  const options = {
    grid: {
      show: false,
    },
    colors: [props.color],
    legend: {
      show: false,
    },
    chart: {
      height: 90,
      type: "area",
      parentHeightOffset: 0,

      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    yaxis: {
      show: false,
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };

  return (
    <div id="chartOne" className="-mx-[11px]">
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={90}
      />
    </div>
  );
};
