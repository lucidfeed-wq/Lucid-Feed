import React from "react";
import ReactApexChart from "react-apexcharts";

const Chart3 = () => {
  const series = [
    {
      data: [
        168, 385, 201, 298, 187, 195, 291, 110, 215, 390, 280, 112, 123, 212,
        270, 190, 310, 115, 90, 380, 112, 223, 292, 170, 290, 110, 115, 290,
        380, 312,
      ],
    },
  ];
  const options = {
    colors: ["#3758F9"],
    chart: {
      fontFamily: "Inter, sans-serif",
      type: "bar",
      height: 350,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded-sm",
        borderRadius: 2,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 4,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "30",
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    legend: {
      show: true,
      position: "top",
      horizontalAlign: "left",
      fontFamily: "inter",

      markers: {
        radius: 99,
      },
    },
    yaxis: {
      title: false,
    },
    grid: {
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    fill: {
      opacity: 1,
    },

    tooltip: {
      x: {
        show: false,
      },
      y: {
        formatter: function (val) {
          return val;
        },
      },
    },
  };

  return (
    <section className="bg-gray-2 py-20 dark:bg-dark lg:py-[120px]">
      <div className="mx-auto px-4 md:container">
        <div className="mx-auto w-full max-w-[930px] rounded-lg border border-stroke bg-white px-5 pb-5 pt-[30px] dark:border-dark-3 dark:bg-dark-2 sm:px-[30px]">
          <div className="mb-3 justify-between sm:flex">
            <div className="mb-4 sm:mb-0">
              <h3 className="mb-1 text-xl font-semibold text-dark dark:text-white sm:text-2xl">
                Daily Visitors
              </h3>
              <p className="text-sm text-body-color dark:text-dark-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="inline-flex items-center space-x-[14px] sm:justify-end">
              <div className="relative z-20 inline-block rounded-md bg-transparent">
                <select
                  name=""
                  id=""
                  className="relative z-20 inline-flex appearance-none rounded-md border border-stroke bg-transparent py-[7px] pl-3 pr-10 text-base text-body-color outline-hidden dark:border-dark-3 dark:text-dark-6"
                >
                  <option value="" className="dark:bg-dark-2">
                    January
                  </option>
                  <option value="" className="dark:bg-dark-2">
                    February
                  </option>
                  <option value="" className="dark:bg-dark-2">
                    March
                  </option>
                  <option value="" className="dark:bg-dark-2">
                    April
                  </option>
                  <option value="" className="dark:bg-dark-2">
                    May
                  </option>
                  <option value="" className="dark:bg-dark-2">
                    Jun
                  </option>
                  <option value="" className="dark:bg-dark-2">
                    July
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
              <div className="relative z-20 inline-block rounded-md bg-transparent">
                <select
                  name=""
                  id=""
                  className="relative z-20 inline-flex appearance-none rounded-md border border-stroke bg-transparent py-[7px] pl-3 pr-10 text-base text-body-color outline-hidden dark:border-dark-3 dark:text-dark-6"
                >
                  <option value="" className="dark:bg-dark-2">
                    Yearly
                  </option>
                  <option value="" className="dark:bg-dark-2">
                    Monthly
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

          <div id="chartOne" className="-mx-5">
            <ReactApexChart
              options={options}
              series={series}
              type="bar"
              height={350}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chart3;
