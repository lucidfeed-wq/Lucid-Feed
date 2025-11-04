import React from "react";
import ReactApexChart from "react-apexcharts";

const Chart10 = () => {
  const series = [65, 34, 45, 12];
  const options = {
    chart: {
      fontFamily: "Inter, sans-serif",
      type: "donut",
      width: 380,
    },
    colors: ["#3758F9", "#13C296", "#F2C94C", "#F2994A"],
    labels: ["Desktop", "Tablet", "Mobile", "Unknown"],
    legend: {
      show: false,
      position: "bottom",
    },

    plotOptions: {
      pie: {
        donut: {
          size: "65%",
          background: "transparent",
        },
      },
    },

    dataLabels: {
      enabled: false,
    },
  };

  return (
    <section className="bg-gray-2 py-20 dark:bg-dark lg:py-[120px]">
      <div className="mx-auto px-4 md:container">
        <div className="mx-auto w-full max-w-[540px] rounded-lg border border-stroke bg-white px-5 pb-5 pt-[30px] dark:border-dark-3 dark:bg-dark-2 sm:px-[30px]">
          <div className="mb-3 justify-between sm:flex">
            <div className="mb-4 sm:mb-0">
              <h5 className="text-xl font-semibold text-dark dark:text-white">
                Website Visitors Analytics
              </h5>
              <p className="text-sm text-body-color dark:text-dark-6">
                your website visitors data
              </p>
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

          <div className="mb-2">
            <div id="chartOne" className="chart-10 mx-auto flex justify-center">
              <ReactApexChart
                options={options}
                series={series}
                type="donut"
                width={380}
              />
            </div>
          </div>

          <div className="-mx-8 flex flex-wrap items-center justify-center">
            <AnalyticsItem title="Desktop" percent="65%" color="#3758F9" />
            <AnalyticsItem title="Tablet" percent="65%" color="#13C296" />
            <AnalyticsItem title="Mobile" percent="65%" color="#F2C94C" />
            <AnalyticsItem title="Unknown" percent="65%" color="#F2994A" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chart10;

const AnalyticsItem = ({ title, percent, color }) => {
  return (
    <div className="mb-3 w-full px-8 sm:w-1/2">
      <div className="flex w-full items-center">
        <span
          className={`mr-2 block h-3 w-full max-w-[12px] rounded-full`}
          style={{ backgroundColor: color }}
        ></span>
        <p className="flex w-full justify-between text-sm text-dark dark:text-white">
          <span> {title} </span>
          <span> {percent} </span>
        </p>
      </div>
    </div>
  );
};
