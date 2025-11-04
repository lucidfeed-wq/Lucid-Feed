import React from "react";
import ReactApexChart from "react-apexcharts";

const Chart5 = () => {
  const series = [
    {
      name: "Total Revenue",
      data: [76, 85, 101, 98, 105, 91, 115],
    },
    {
      name: "Total Pipeline",
      data: [44, 57, 56, 61, 58, 60, 66],
    },
  ];

  const options = {
    colors: ["#3758F9", "#13C296"],
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
      categories: ["Sun", "Mon", "Twe", "Wed", "Thu", "Fri", "Sat"],
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
        <div className="mx-auto w-full max-w-[510px] rounded-lg border border-stroke bg-white px-5 pb-5 pt-[30px] dark:border-dark-3 dark:bg-dark-2 sm:px-[30px]">
          <div className="mb-4 justify-between sm:flex">
            <div className="mb-4 sm:mb-0">
              <h5 className="text-lg font-semibold text-dark dark:text-white">
                Revenue Analytics
              </h5>
            </div>
            <div>
              <div className="relative z-20 inline-block rounded-md bg-transparent">
                <select
                  name=""
                  id=""
                  className="relative z-20 inline-flex appearance-none rounded-md border border-stroke bg-transparent py-[5px] pl-3 pr-10 text-base text-body-color outline-hidden dark:border-dark-3 dark:text-dark-6"
                >
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

export default Chart5;
