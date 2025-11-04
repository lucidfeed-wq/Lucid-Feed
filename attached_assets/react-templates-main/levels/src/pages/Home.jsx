import ChartOne from "../components/Charts/ChartOne.jsx";
import DataStats from "../components/DataStats.jsx";
import ProductTable from "../components/ProductTable.jsx";
import ChartTwo from "../components/Charts/ChartTwo.jsx";
import StorageList from "../components/StorageList.jsx";

const Home = () => {
  return (
    <>
      <div className="w-full">
        <DataStats />
      </div>

      <div className="w-full">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 2xl:w-2/3">
            <ChartOne />
          </div>
          <div className="w-full px-4 2xl:w-1/3">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4 md:w-1/2 2xl:w-full">
                <ChartTwo />
              </div>

              <div className="w-full px-4 md:w-1/2 2xl:w-full">
                <StorageList />
              </div>
            </div>
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
