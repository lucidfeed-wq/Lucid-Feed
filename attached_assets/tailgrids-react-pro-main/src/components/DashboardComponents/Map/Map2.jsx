import jsVectorMap from "jsvectormap";
import "jsvectormap/dist/css/jsvectormap.css";
import "jsvectormap/dist/maps/world";
import React, { useEffect } from "react";

const Map2 = () => {
  useEffect(() => {
    const map = new jsVectorMap({
      selector: "#mapTwo",
      map: "world",
      zoomButtons: true,

      regionStyle: {
        initial: {
          fill: "#A9BDFF",
        },
        hover: {
          fillOpacity: 1,
          fill: "#3056D3",
        },
      },
      regionLabelStyle: {
        initial: {
          fontFamily: "inter",
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
        .mapTwo .jvm-zoom-btn{
          top: auto;
          bottom: 0px;
        }
        
        .mapTwo .jvm-zoom-btn.jvm-zoomin{
          left: 0px;
        }
        
        .mapTwo .jvm-zoom-btn.jvm-zoomout{
          left: 2.25rem;
        }
        `}
      </style>
      <section className="bg-gray-2 py-20 dark:bg-dark lg:py-[120px]">
        <div className="mx-auto px-4 md:container">
          <div className="mx-auto w-full max-w-[770px] overflow-hidden rounded-lg border border-stroke bg-white dark:border-dark-3 dark:bg-dark-2">
            <div className="p-[30px]">
              <div className="justify-between sm:flex">
                <div className="mb-2">
                  <h3 className="mb-1 text-lg font-semibold leading-none text-dark dark:text-white sm:text-xl">
                    Sessions by country
                  </h3>
                  <p className="text-sm font-medium text-body-color dark:text-dark-6">
                    View website visitors by hovering over the map
                  </p>
                </div>
                <div className="mb-2">
                  <div className="relative z-20 inline-block rounded-sm">
                    <select
                      name=""
                      id=""
                      className="relative z-20 inline-flex appearance-none rounded-md border border-stroke bg-transparent py-[9px] pl-3 pr-10 text-sm text-body-color outline-hidden dark:border-dark-3 dark:text-dark-6"
                    >
                      <option value="" className="dark:bg-dark-2">Last 7 days</option>
                      <option value="" className="dark:bg-dark-2">Last 15 days</option>
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
                        <path d="M9.00001 12.8251C8.83126 12.8251 8.69064 12.7689 8.55001 12.6564L2.08126 6.30015C1.82814 6.04702 1.82814 5.65327 2.08126 5.40015C2.33439 5.14702 2.72814 5.14702 2.98126 5.40015L9.00001 11.2783L15.0188 5.3439C15.2719 5.09077 15.6656 5.09077 15.9188 5.3439C16.1719 5.59702 16.1719 5.99077 15.9188 6.2439L9.45001 12.6001C9.30939 12.7408 9.16876 12.8251 9.00001 12.8251Z" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div id="mapTwo" className="mapTwo h-[260px]"></div>
            </div>

            <div className="space-y-[14px] border-t border-stroke p-[30px] dark:border-dark-3">
              <MapItem
                img="https://cdn.tailgrids.com/2.0/image/assets/images/countries/usa.svg"
                name="United States"
                percent="35%"
              />
              <MapItem
                img="https://cdn.tailgrids.com/2.0/image/assets/images/countries/canada.svg"
                name="Canada"
                percent="26%"
              />
              <MapItem
                img="https://cdn.tailgrids.com/2.0/image/assets/images/countries/france.svg"
                name="France"
                percent="18%"
              />
              <MapItem
                img="https://cdn.tailgrids.com/2.0/image/assets/images/countries/italy.svg"
                name="Italy"
                percent="14%"
              />
              <MapItem
                img="https://cdn.tailgrids.com/2.0/image/assets/images/countries/australia.svg"
                name="Australia"
                percent="10%"
              />
              <MapItem
                img="https://cdn.tailgrids.com/2.0/image/assets/images/countries/india.svg"
                name="India"
                percent="7%"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Map2;

const MapItem = ({ img, name, percent }) => {
  return (
    <div className="items-center sm:flex">
      <div className="flex w-full max-w-[170px] items-center">
        <img src={img} alt="usa" className="mr-[14px] h-[14px]" />
        <p className="text-base font-medium text-dark dark:text-white">
          {name}
        </p>
      </div>
      <div className="relative block h-[18px] w-full rounded-sm bg-[#E5E7EB] dark:bg-dark-3">
        <div
          className="absolute left-0 top-0 flex h-full w-[35%] items-center justify-center rounded-sm bg-primary text-xs font-medium text-white"
          style={{ width: percent }}
        >
          {percent}
        </div>
      </div>
    </div>
  );
};
