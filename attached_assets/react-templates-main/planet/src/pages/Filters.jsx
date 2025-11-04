import Breadcrumb from "../components/Breadcrumb.jsx";
import FilterTop from "../components/Filters/FilterTop.jsx";
import FilterBoxes from "../components/Filters/FilterBoxes.jsx";
import ProductGrid from "../components/Filters/ProductGrid.jsx";

const Filters = () => {
  return (
    <>
      <Breadcrumb pageName="Filters" />

      <section className="bg-tg-bg pb-[90px] pt-24 dark:bg-dark">
        <div className="container mx-auto">
          <FilterTop />

          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-4/12 xl:w-3/12">
              <FilterBoxes />
            </div>
            <div className="w-full px-4 lg:w-8/12 xl:w-9/12">
              <ProductGrid />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Filters;
