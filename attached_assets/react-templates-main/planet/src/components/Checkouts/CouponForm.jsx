const CouponForm = () => {
  return (
    <>
      <div className="w-full px-4 mt-4">
        <h3 className="mb-8 text-xl font-semibold text-dark dark:text-white">
          Apply Coupon to get discount!
        </h3>
        <div className="mb-7 flex max-w-[495px] flex-wrap">
          <input
            type="email"
            className="border-stroke text-body-color placeholder:text-dark-6 focus:border-primary dark:border-dark-3 dark:bg-dark-2 dark:text-dark-6 mr-5 mb-3 h-[50px] w-full max-w-[325px] rounded-md border bg-white px-5 text-base outline-hidden focus-visible:shadow-none"
            placeholder="Coupon code"
          />
          <button className="bg-dark hover:bg-dark/90 dark:bg-dark-2 mb-3 h-[50px] rounded-md px-7 py-2 text-base font-medium text-white transition">
            Apply Code
          </button>
        </div>
      </div>
    </>
  );
};

export default CouponForm;
