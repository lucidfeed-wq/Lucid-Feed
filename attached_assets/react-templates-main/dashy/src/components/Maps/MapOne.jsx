import jsVectorMap from "jsvectormap";
import { useEffect } from "react";
import "../../assets/js/us-aea-en.js";

const MapOne = () => {
  useEffect(() => {
    const vectorMapOne = () => {
      new jsVectorMap({
        selector: "#mapFour",
        map: "us_aea_en",
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
      console.log("render");
    };

    return () => {
      vectorMapOne();
    };
  }, []);

  return (
    <>
      <div className="mb-8 w-full overflow-hidden rounded-lg border border-stroke bg-white px-[30px] py-6 dark:border-dark-3 dark:bg-dark-2 2xl:mb-0">
        <div className="mb-8">
          <h4 className="mb-1 text-xl font-semibold text-dark dark:text-white">
            States statistics
          </h4>
          <p className="text-sm text-body-color dark:text-dark-6">
            View states statistics by hovering over the map
          </p>
        </div>

        <div className="h-[260px]">
          <div id="mapFour" className="mapFour overflow-visible!"></div>
        </div>
      </div>
    </>
  );
};

export default MapOne;
