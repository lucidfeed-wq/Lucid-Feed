import jsVectorMap from "jsvectormap";
import "jsvectormap/dist/css/jsvectormap.css";
import "jsvectormap/dist/maps/world-merc";
import React, { useEffect } from "react";

const Map1 = () => {
  useEffect(() => {
    const markers = [
      { name: "Russia", coords: [61, 105], sales: 580 },
      { name: "Geenland", coords: [72, -42], sales: 600 },
      { name: "Canada", coords: [56.1304, -106.3468], sales: 820 },
      { name: "Palestine", coords: [31.5, 34.8], sales: 350 },
      { name: "Brazil", coords: [-14.235, -51.9253], sales: 490 },
    ];

    const map = new jsVectorMap({
      selector: "#mapOne",
      map: "world_merc",
      zoomButtons: true,

      regionStyle: {
        initial: {
          fill: "#C8D0D8",
        },
      },

      markersSelectable: true,
      markers: markers,
      markerStyle: {
        initial: {
          r: 7,
          fill: "#3056D3",
          fillOpacity: 1,
          stroke: "#FFF",
          strokeWidth: 5,
          strokeOpacity: 1,
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
  });

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
          <div className="mx-auto w-full max-w-[430px] overflow-hidden rounded-lg border border-stroke bg-white px-[30px] pb-[30px] pt-6 dark:border-dark-3 dark:bg-dark-2">
            <h4 className="mb-2 text-lg font-semibold text-dark dark:text-white">
              Sells by State
            </h4>

            <div id="mapOne" className="mapOne h-[260px]"></div>
            <p className="mt-2 text-sm text-body-color dark:text-dark-6">
              <span className="pr-1">Last updated: </span>
              <span className="text-dark dark:text-white"> 7 days </span>
              <span className="pl-1">ago</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Map1;
