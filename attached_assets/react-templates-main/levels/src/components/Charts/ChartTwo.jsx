import ReactApexChart from "react-apexcharts";

const ChartTwo = () => {
  const series = [85];
  const options = {
    colors: ["#3056D3", "#13C296"],

    chart: {
      fontFamily: "Inter, sans-serif",
      height: 150,
      type: "radialBar",
    },

    plotOptions: {
      radialBar: {
        hollow: {
          size: "50%",
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            fontSize: "16px",
            offsetY: 8,
          },
          total: {
            show: false,
          },
        },
      },
    },
    dataLabels: {
      enabled: true,
    },

    legend: {
      show: false,
    },
  };

  return (
    <>
      <div className="relative mb-8 w-full rounded-lg border border-stroke bg-white px-5 py-6 dark:border-dark-3 dark:bg-dark-2 sm:px-[30px]">
        <button className="absolute -right-[22px] top-[41%] -rotate-90 rounded-t-md bg-secondary px-4 py-1 text-sm font-medium text-white">
          Clean
        </button>
        <div className="flex items-center">
          <div className="w-full">
            <div id="chartOne" className="-ml-5">
              <ReactApexChart
                options={options}
                series={series}
                type="radialBar"
                height={150}
              />
            </div>
          </div>

          <div className="w-full">
            <p className="mb-2 text-xl font-semibold leading-none text-dark dark:text-white">
              Available Storage
            </p>
            <p className="text-sm font-medium text-dark dark:text-white">
              <span>150</span>{" "}
              <span className="text-xs text-body-color dark:text-dark-6">
                GB
              </span>{" "}
              <span>/ 512</span>{" "}
              <span className="text-xs text-body-color dark:text-dark-6">
                GB
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChartTwo;
