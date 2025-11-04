import Breadcrumb from "../components/Breadcrumb.jsx";
import ProductTab from "../components/ProductDetails/ProductTab.jsx";
import DetailsBox from "../components/ProductDetails/DetailsBox.jsx";
import CustomerReview from "../components/CustomerReview/index.jsx";

const ProductDetails = () => {
  return (
    <>
      <Breadcrumb pageName="Product Details" />

      <section className="bg-tg-bg pt-24 dark:bg-dark lg:pb-[90px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/2 xl:w-7/12">
              <ProductTab />
            </div>

            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
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
