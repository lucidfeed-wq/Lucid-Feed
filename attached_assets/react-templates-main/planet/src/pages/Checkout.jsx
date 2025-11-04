import Breadcrumb from "../components/Breadcrumb.jsx";
import CheckoutForm from "../components/Checkouts/CheckoutForm.jsx";
import CartBox from "../components/Checkouts/CartBox.jsx";
import PaymentBox from "../components/Checkouts/PaymentBox.jsx";

const Checkout = () => {
  return (
    <>
      <Breadcrumb pageName="Checkout" />

      <section className="bg-tg-bg pb-20 pt-24 dark:bg-dark">
        <div className="container mx-auto">
          <div className="mb-12">
            <h2 className="mb-3 text-4xl font-bold leading-[1.2] text-dark dark:text-white sm:text-[40px]">
              Checkout
            </h2>
            <p className="text-base text-body-color dark:text-dark-6">
              There are 3 products in your cart
            </p>
          </div>

          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
              <CheckoutForm />
            </div>

            <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
              <CartBox />

              <PaymentBox />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
