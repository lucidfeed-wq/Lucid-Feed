import Breadcrumb from "../components/Breadcrumb.jsx";
import ProductTab from "../components/ProductDetails/ProductTab.jsx";
import DetailsBox from "../components/ProductDetails/DetailsBox.jsx";
import CustomerReview from "../components/CustomerReview/index.jsx";

const ProductDetails = () => {
  return (
    <>
      <Breadcrumb pageName="Product Details" />

      <section className="bg-white pt-24 dark:bg-dark">
        <div className="container mx-auto">
          <div className="overflow-hidden rounded-xl border border-stroke bg-white p-[22px] dark:border-dark-3 dark:bg-dark-2">
            <div className="-mx-4 flex flex-wrap">
              <ProductTab />

              <div className="w-full px-4 lg:w-1/2">
                <div>
                  <DetailsBox />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CustomerReview />
    </>
  );
};

export default ProductDetails;
