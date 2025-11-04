import React from "react";
import ReactApexChart from "react-apexcharts";

const Chart4 = () => {
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
      type: "area",
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
      width: [2, 2],
      curve: "straight",
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
          show: true,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 4,
      colors: "#fff",
      strokeColors: ["#3758F9", "#13C296"],
      strokeWidth: 3,
      strokeOpacity: 0.9,
      strokeDashArray: 0,
      fillOpacity: 1,
      discrete: [],
      hover: {
        size: undefined,
        sizeOffset: 5,
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
    },
  };

  return (
    <section className="bg-gray-2 py-20 dark:bg-dark lg:py-[120px]">
      <div className="mx-auto px-4 md:container">
        <div className="mx-auto w-full max-w-[1000px] rounded-lg border border-stroke bg-white px-5 pb-5 pt-[30px] dark:border-dark-3 dark:bg-dark-2 sm:px-[30px]">
          <div className="flex flex-wrap items-start justify-between sm:flex-nowrap">
            <div className="mb-3 flex w-full flex-wrap sm:mb-0">
              <div className="mr-8 flex min-w-[190px]">
                <span className="mr-[10px] mt-[5px] flex h-4 w-full max-w-[16px] rounded-full border border-primary">
                  <span className="m-auto flex h-[10px] w-full max-w-[10px] rounded-full bg-primary"></span>
                </span>
                <div className="w-full">
                  <p className="text-base font-semibold text-primary">
                    Total Revenue
                  </p>
                  <p className="text-sm text-body-color dark:text-dark-6">
                    12.04.2022 - 12.05.2022
                  </p>
                </div>
              </div>
              <div className="flex min-w-[190px]">
                <span className="mr-[10px] mt-[5px] flex h-4 w-full max-w-[16px] rounded-full border border-secondary">
                  <span className="m-auto flex h-[10px] w-full max-w-[10px] rounded-full bg-secondary"></span>
                </span>
                <div className="w-full">
                  <p className="text-base font-semibold text-secondary">
                    Total Sales
                  </p>
                  <p className="text-sm text-body-color dark:text-dark-6">
                    12.04.2022 - 12.05.2022
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-full max-w-[180px] justify-end">
              <div className="inline-flex items-center rounded-md border-[0.5px] border-stroke bg-[#F5F7FA] p-[6px] dark:border-dark-3 dark:bg-dark">
                <button className="rounded-sm bg-white px-3 py-1 text-sm text-dark shadow-card dark:bg-dark-2 dark:text-white">
                  Day
                </button>
                <button className="rounded-sm px-3 py-1 text-sm text-dark hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-dark-2">
                  Week
                </button>
                <button className="rounded-sm px-3 py-1 text-sm text-dark hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-dark-2">
                  Month
                </button>
              </div>
            </div>
          </div>

          <div id="chartOne" className="-mx-5">
            <ReactApexChart
              options={options}
              series={series}
              type="area"
              height={450}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chart4;
