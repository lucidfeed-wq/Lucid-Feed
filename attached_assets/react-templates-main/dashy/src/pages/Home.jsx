import ChartOne from "../components/Charts/ChartOne.jsx";
import DataStats from "../components/DataStats.jsx";
import ProductTable from "../components/ProductTable.jsx";
import ChatBox from "../components/ChatBox.jsx";
import MapOne from "../components/Maps/MapOne.jsx";

const Home = () => {
  return (
    <>
      <div className="w-full">
        <DataStats />
      </div>

      <div className="w-full">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 2xl:w-2/3">
            <ChartOne />
          </div>
          <div className="w-full px-4 lg:w-5/12 2xl:w-1/3">
            <ChatBox />
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 2xl:w-1/2">
            <MapOne />
          </div>
          <div className="w-full px-4 2xl:w-1/2">
            <ProductTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
