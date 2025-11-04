import Breadcrumb from "../components/Breadcrumb.jsx";
import FilterTop from "../components/Filters/FilterTop.jsx";
import ProductGrid from "../components/Filters/ProductGrid.jsx";
import Pagination from "../components/Filters/Pagination.jsx";

const Filters = () => {
  return (
    <>
      <Breadcrumb pageName="Filters" />

      <section className="bg-white pb-[90px] pt-[120px] dark:bg-dark">
        <div className="container mx-auto">
          <div className="-mx-4 flex">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[570px] text-center">
                <h2 className="mb-4 text-3xl font-semibold text-dark dark:text-white sm:text-[40px] sm:leading-[1.2]">
                  Our Newest Items
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  sit amet molestie nunc. Vestibulum tempus justo.
                </p>
              </div>
            </div>
          </div>

          <FilterTop />

          <div>
            <div className="-mx-4 flex flex-wrap">
              <ProductGrid />
            </div>

            <div className="w-full px-4 text-center">
              <Pagination totalPages={4} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Filters;
