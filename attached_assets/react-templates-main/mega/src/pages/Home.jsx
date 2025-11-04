import ChartOne from "../components/Charts/ChartOne.jsx";
import DataStats from "../components/DataStats.jsx";
import ProductTable from "../components/ProductTable.jsx";
import MapOne from "../components/Maps/MapOne.jsx";

const Home = () => {
  return (
    <>
      <div className="w-full">
        <DataStats />
      </div>

      <div className="w-full">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-2/3 xl:w-7/12 2xl:w-2/3">
            <ChartOne />
          </div>
          <div className="w-full px-4 lg:w-1/3 xl:w-5/12 2xl:w-1/3">
            <MapOne />
          </div>
        </div>
      </div>

      <div className="w-full">
        <ProductTable />
      </div>
    </>
  );
};

export default Home;
