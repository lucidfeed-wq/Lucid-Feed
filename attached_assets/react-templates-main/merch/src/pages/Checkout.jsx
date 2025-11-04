import Breadcrumb from "../components/Breadcrumb.jsx";
import CheckoutForm from "../components/Checkouts/CheckoutForm.jsx";
import CartBox from "../components/Checkouts/CartBox.jsx";
import CouponForm from "../components/Checkouts/CouponForm.jsx";

const Checkout = () => {
  return (
    <>
      <Breadcrumb pageName="Checkout" />

      <section className="bg-white pb-[120px] pt-24 dark:bg-dark">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
              <CartBox />

              <CouponForm />
            </div>

            <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
              <CheckoutForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
