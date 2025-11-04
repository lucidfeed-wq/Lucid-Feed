import jsVectorMap from "jsvectormap";
import "jsvectormap/dist/css/jsvectormap.css";
import React, { useEffect } from "react";
import "./us-aea-en";

const Map3 = () => {
  useEffect(() => {
    new jsVectorMap({
      selector: "#mapOne",
      map: "us_aea_en",
      zoomButtons: true,

      regionStyle: {
        initial: {
          fill: "#C8D0D8",
        },
        hover: {
          fillOpacity: 1,
          fill: "#3056D3",
        },
      },
      regionLabelStyle: {
        initial: {
          fontFamily: "Satoshi",
          fontWeight: "semibold",
          fill: "#fff",
        },
        hover: {
          cursor: "pointer",
        },
      },

      labels: {
        regions: {
          render(code) {
            return code.split("-")[1];
          },
        },
      },
    });
  }, []);

  return (
    <>
      <style>
        {`
        .jvm-zoom-btn{
          top: auto;
          bottom: 0px;
          left: auto;
          display: flex;
          height: 2rem;
          width: 2rem;
          align-items: center;
          justify-content: center;
          border-radius: 0.25rem;
          border-width: .5px;
          border-color: rgb(231 231 231);
          background-color: rgb(244 247 255);
          font-weight: 600;
          line-height: 1;
          color: rgb(99 115 129);
        }
        
        .jvm-zoom-btn:hover{
          border-color: rgb(48 86 211);
          background-color: rgb(48 86 211);
          color: rgb(255 255 255);
        }
        .mapOne .jvm-zoom-btn{
          top: auto;
          bottom: 0px;
          left: auto;
        }
        
        .mapOne .jvm-zoom-btn.jvm-zoomin{
          right: 2.25rem;
        }
        
        .mapOne .jvm-zoom-btn.jvm-zoomout{
          right: 0px;
        }
        `}
      </style>
      <section className="bg-gray-2 py-20 dark:bg-dark lg:py-[120px]">
        <div className="mx-auto px-4 md:container">
          <div className="mx-auto w-full max-w-[560px] overflow-hidden rounded-lg border border-stroke bg-white px-[30px] py-6 dark:border-dark-3 dark:bg-dark-2">
            <h4 className="mb-8 text-xl font-semibold text-dark dark:text-white">
              Region labels
            </h4>
            <div
              id="mapOne"
              className="mapThree mapOne h-[260px] overflow-visible"
            ></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Map3;
