import jsVectorMap from "jsvectormap";
import "jsvectormap/dist/maps/world-merc";
import { useEffect } from "react";

const MapOne = () => {
  useEffect(() => {
    const markers = [
      { name: "Russia", coords: [61, 105], sales: 580 },
      { name: "Geenland", coords: [72, -42], sales: 600 },
      { name: "Canada", coords: [56.1304, -106.3468], sales: 820 },
      { name: "Palestine", coords: [31.5, 34.8], sales: 350 },
      { name: "Brazil", coords: [-14.235, -51.9253], sales: 490 },
    ];

    const vectorMapOne = () => {
      new jsVectorMap({
        map: "world_merc",
        selector: "#mapOne",
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
      });
    };

    return () => {
      vectorMapOne();
    };
  }, []);

  return (
    <>
      <div className="mb-10 w-full overflow-hidden rounded-lg border border-stroke bg-white px-[30px] py-6 dark:border-dark-3 dark:bg-dark-2">
        <h4 className="mb-2 text-lg font-semibold text-dark dark:text-white">
          Sells by State
        </h4>
        <div className="h-[260px]">
          <div id="mapOne" className="mapOne overflow-visible!"></div>
        </div>

        <p className="mt-2 text-sm text-body-color dark:text-dark-6">
          Last updated:
          <span className="text-dark dark:text-white"> 7 days </span> ago
        </p>
      </div>
    </>
  );
};

export default MapOne;
