import Breadcrumb from "../components/Breadcrumb.jsx";
import ProductTab from "../components/ProductDetails/ProductTab.jsx";
import DetailsBox from "../components/ProductDetails/DetailsBox.jsx";
import CustomerReview from "../components/CustomerReview/index.jsx";

const ProductDetails = () => {
  return (
    <>
      <Breadcrumb pageName="Product Details" />

      <section className="bg-white pt-[120px] dark:bg-dark">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <ProductTab />

            <div className="w-full px-4 lg:w-5/12">
              <div>
                <DetailsBox />
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
