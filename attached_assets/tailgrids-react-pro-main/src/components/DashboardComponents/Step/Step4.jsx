import React from "react";
import ReactApexChart from "react-apexcharts";

const Step4 = () => {
  const series = [72];

  const options = {
    chart: {
      height: 200,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "66%",
        },
        dataLabels: {
          name: {
            show: true,
            fontSize: "16px",
            fontFamily: '"Inter"',
            offsetY: -12,
          },
          value: {
            fontSize: "28px",
            fontWeight: "bold",
            fontFamily: "inter",
            offsetY: 2,
          },
          total: {
            show: true,
            fontFamily: "inter",
            fontSize: "12px",
            label: "complete",
            offsetY: -16,
          },
        },
      },
    },
    dataLabels: {
      enabled: true,
    },
    colors: ["#3056D3"],
    legend: {
      show: false,
      position: "bottom",
    },
  };

  return (
    <section className="py-14 lg:py-20">
      <div id="chartOne" className="-mx-[11px]">
        <ReactApexChart
          options={options}
          series={series}
          type="radialBar"
          height={200}
        />
      </div>
    </section>
  );
};

export default Step4;
