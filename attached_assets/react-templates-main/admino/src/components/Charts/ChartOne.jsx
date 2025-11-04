import ReactApexChart from "react-apexcharts";

const ChartOne = () => {
  const series = [72, 27];

  const options = {
    chart: {
      fontFamily: "Inter, sans-serif",
      height: 380,
      type: "radialBar",
    },

    responsive: [
      {
        breakpoint: 768,
        options: {
          chart: {
            height: 300,
          },
        },
      },
    ],

    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            show: true,
            fontSize: "22px",
            offsetY: -2,
          },
          value: {
            fontSize: "16px",
            offsetY: 2,
          },
          total: {
            show: true,
            label: "Total",
          },
        },
      },
    },

    dataLabels: {
      enabled: true,
    },
    colors: ["#3056D3", "#13C296"],
    labels: ["Sent", "Receive"],
    legend: {
      show: true,
      position: "bottom",
      horizontalAlign: "center",
    },
  };

  return (
    <>
      <div className="mb-8 w-full rounded-lg border border-stroke bg-white px-5 pb-5 pt-[30px] dark:border-dark-3 dark:bg-dark-2 sm:px-[30px]">
        <div className="justify-between sm:flex">
          <div className="mb-4 sm:mb-0">
            <h5 className="text-xl font-semibold text-dark dark:text-white">
              Email Sent
            </h5>
            <p className="text-sm text-body-color dark:text-dark-6">
              Detailed data of your email inbox
            </p>
          </div>
          <div>
            <div className="relative z-20 inline-block rounded-md bg-transparent">
              <select className="relative z-20 inline-flex appearance-none rounded-md border border-stroke bg-transparent py-[5px] pl-3 pr-10 text-base text-body-color outline-hidden dark:border-dark-3 dark:text-dark-6">
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
          <div id="chartOne" className="-ml-5">
            <ReactApexChart
              options={options}
              series={series}
              type="radialBar"
              height={380}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChartOne;
