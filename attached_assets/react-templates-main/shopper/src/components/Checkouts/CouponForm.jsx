const CouponForm = () => {
  return (
    <>
      <div className="mb-10 overflow-hidden rounded-lg border border-stroke px-6 py-10 shadow-testimonial-6 dark:border-dark-3 dark:bg-dark-2 dark:shadow-box-dark sm:px-10 lg:px-8 2xl:px-10">
        <div className="mb-8 border-b border-stroke pb-3 dark:border-dark-3">
          <h3 className="mb-1 text-lg font-semibold text-dark dark:text-white">
            Coupon Code
          </h3>
          <p className="text-sm font-medium text-body-color dark:text-dark-6">
            Enter code to get discount instantly
          </p>
        </div>

        <form className="relative">
          <input
            type="text"
            placeholder="Coupon code"
            className="w-full rounded-lg border border-stroke bg-transparent py-3 pl-5 pr-20 font-medium text-body-color outline-hidden transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD] dark:border-dark-3 dark:text-dark-6 dark:focus:border-primary"
          />
          <button className="absolute right-3 top-1/2 mb-3 h-[34px] -translate-y-1/2 rounded-sm bg-primary px-5 text-sm font-semibold text-white transition hover:bg-blue-dark">
            Apply
          </button>
        </form>
      </div>
    </>
  );
};

export default CouponForm;
