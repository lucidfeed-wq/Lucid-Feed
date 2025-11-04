import Breadcrumb from "../components/Breadcrumb.jsx";
import ProductGrid from "../components/Filters/ProductGrid.jsx";
import Pagination from "../components/Filters/Pagination.jsx";
import FilterBoxes from "../components/Filters/FilterBoxes.jsx";

const Filters = () => {
  return (
    <>
      <Breadcrumb pageName="Filters" />

      <section className="bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-4/12">
              <div className="xl:mr-8">
                <FilterBoxes />
              </div>
            </div>

            <div className="w-full px-4 lg:w-8/12">
              <div className="-mx-4 flex flex-wrap">
                <ProductGrid />

                <div className="mt-3 w-full px-4 text-center">
                  <Pagination totalPages={10} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Filters;
