import ReactApexChart from "react-apexcharts";

const ChartOne = () => {
  const series = [
    {
      name: "Media",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: "Photos",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
    {
      name: "Docs",
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
    },
  ];

  const options = {
    colors: ["#3056D3", "#13C296", "#F2994A"],

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
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
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
        radius: 12,
        offsetY: 2,
      },
    },
    yaxis: {
      title: false,
    },
    grid: {
      yaxis: {
        lines: {
          show: true,
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
    <>
      <div className="mb-8 w-full rounded-lg border border-stroke bg-white px-5 pb-5 pt-[30px] dark:border-dark-3 dark:bg-dark-2 sm:px-[30px]">
        <div className="flex justify-between">
          <div>
            <h5 className="mb-6 text-xl font-semibold text-dark dark:text-white">
              Activity Chart
            </h5>
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
          <div id="activityChart" className="-ml-5">
            <ReactApexChart
              options={options}
              series={series}
              type="bar"
              height={350}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChartOne;
