import ReactApexChart from "react-apexcharts";

const ChartTwo = () => {
  const series = [
    {
      name: "Sales",
      data: [44, 55, 41, 67, 22, 43],
    },
    {
      name: "Revenue",
      data: [13, 23, 20, 8, 13, 27],
    },
  ];
  const options = {
    colors: ["#3056D3", "#13C296"],
    chart: {
      type: "bar",
      height: 320,
      stacked: true,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },

    responsive: [
      {
        breakpoint: 300,
        options: {
          legend: {
            position: "bottom",
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 8,
        columnWidth: "25%",
      },
    },
    dataLabels: {
      enabled: false,
    },

    xaxis: {
      type: "datetime",
      categories: [
        "01/01/2011 GMT",
        "01/02/2011 GMT",
        "01/03/2011 GMT",
        "01/04/2011 GMT",
        "01/05/2011 GMT",
        "01/06/2011 GMT",
      ],
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
      fontFamily: "inter",

      markers: {
        radius: 99,
      },
    },
    fill: {
      opacity: 1,
    },
  };

  return (
    <>
      <div className="mb-8 w-full rounded-lg border border-stroke bg-white px-5 pb-5 pt-[30px] dark:border-dark-3 dark:bg-dark-2 sm:px-[30px]">
        <div className="mb-4 justify-between sm:flex">
          <div className="mb-4 sm:mb-0">
            <h5 className="text-xl font-semibold text-dark dark:text-white">
              Sales Graph
            </h5>
            <p className="text-sm text-body-color dark:text-dark-6">
              your total sales data analytics
            </p>
          </div>
          <div>
            <div className="relative z-20 inline-block">
              <select className="relative z-20 inline-flex appearance-none bg-transparent py-[5px] pl-3 pr-10 text-base text-body-color outline-hidden dark:text-dark-6">
                <option value="This Week" className="dark:bg-dark-2">
                  This Week
                </option>
                <option value="Last Week" className="dark:bg-dark-2">
                  Last Week
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
          <div id="chartTwo" className="-ml-5">
            <ReactApexChart
              options={options}
              series={series}
              type="bar"
              height={320}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChartTwo;
