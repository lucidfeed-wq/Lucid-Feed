import PageTitle from "../components/PageTitle.jsx";
import ChartOne from "../components/Charts/ChartOne.jsx";
import ChartTwo from "../components/Charts/ChartTwo.jsx";
import DataStats from "../components/DataStats.jsx";
import ChartThree from "../components/Charts/ChartThree.jsx";
import ProductTable from "../components/ProductTable.jsx";

const Home = () => {
  return (
    <>
      <PageTitle />

      <div className="w-full">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2 xl:w-7/12 2xl:w-5/12">
            <ChartOne />
          </div>
          <div className="w-full px-4 lg:w-1/2 xl:w-5/12 2xl:w-4/12">
            <ChartTwo />
          </div>
          <div className="w-full px-4 2xl:w-3/12">
            <DataStats />
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 2xl:w-5/12">
            <ChartThree />
          </div>
          <div className="w-full px-4 2xl:w-7/12">
            <ProductTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
