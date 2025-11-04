import ReactApexChart from "react-apexcharts";

const ChartThree = () => {
  const series = [
    {
      name: "Product One",
      data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 45],
    },

    {
      name: "Product Two",
      data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 51],
    },
  ];

  const options = {
    legend: {
      show: false,
      position: "top",
      horizontalAlign: "left",
    },
    colors: ["#3758F9", "#13C296"],
    chart: {
      fontFamily: "Inter, sans-serif",
      height: 450,
      type: "line",
      dropShadow: {
        enabled: true,
        color: "#623CEA14",
        top: 10,
        blur: 4,
        left: 0,
        opacity: 0.1,
      },

      toolbar: {
        show: false,
      },
    },
    responsive: [
      {
        breakpoint: 1024,
        options: {
          chart: {
            height: 300,
          },
        },
      },
      {
        breakpoint: 1366,
        options: {
          chart: {
            height: 350,
          },
        },
      },
    ],
    stroke: {
      width: [4, 4],
      curve: "smooth",
    },

    markers: {
      size: 0,
    },
    labels: {
      show: false,
      position: "top",
    },
    grid: {
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    xaxis: {
      type: "category",
      categories: [
        "Sep",
        "Oct",
        "Nov",
        "Dec",
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      title: {
        style: {
          fontSize: "0px",
        },
      },
      min: 0,
      max: 100,

      labels: {
        style: {
          colors: ["white"],
        },
      },
    },
  };

  return (
    <>
      <div className="mb-8 w-full rounded-lg border border-stroke bg-white px-5 pb-5 pt-[30px] dark:border-dark-3 dark:bg-dark-2 sm:px-[30px] 2xl:mb-0">
        <div className="flex justify-between">
          <div>
            <h3 className="mb-1 text-xl font-bold leading-none text-dark dark:text-white sm:text-[28px] sm:leading-[35px]">
              $35,8K
            </h3>
            <p className="text-sm text-body-color dark:text-dark-6 sm:text-base">
              Overall Revenue
            </p>
          </div>
          <div>
            <div className="relative z-20 inline-block rounded-md bg-transparent">
              <select className="relative z-20 inline-flex appearance-none rounded-md border border-stroke bg-transparent py-[7px] pl-3 pr-10 text-base text-body-color outline-hidden dark:border-dark-3 dark:text-dark-6">
                <option value="" className="dark:bg-dark-2">
                  Monthly
                </option>
                <option value="" className="dark:bg-dark-2">
                  Yearly
                </option>
              </select>
              <span className="absolute right-3 top-1/2 z-10 -translate-y-1/2 text-body-color dark:text-dark-6">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current"
                >
                  <path d="M9 12.8249C8.83125 12.8249 8.69062 12.7687 8.55 12.6562L2.08125 6.2999C1.82812 6.04678 1.82812 5.65303 2.08125 5.3999C2.33437 5.14678 2.72812 5.14678 2.98125 5.3999L9 11.278L15.0187 5.34365C15.2719 5.09053 15.6656 5.09053 15.9187 5.34365C16.1719 5.59678 16.1719 5.99053 15.9187 6.24365L9.45 12.5999C9.30937 12.7405 9.16875 12.8249 9 12.8249Z" />
                </svg>
              </span>
            </div>
          </div>
        </div>

        <div>
          <div id="chartThree" className="-ml-5">
            <ReactApexChart options={options} series={series} type="line" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChartThree;
