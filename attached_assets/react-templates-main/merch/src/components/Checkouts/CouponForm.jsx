const CouponForm = () => {
  return (
    <>
      <div className="border-stroke shadow-testimonial-6 dark:border-dark-3 dark:bg-dark-2 dark:shadow-box-dark mb-10 overflow-hidden rounded-[10px] border bg-white px-8 pt-6 pb-8">
        <div className="pb-4 mb-8 border-b border-stroke dark:border-dark-3">
          <h3 className="mb-2 text-lg font-semibold text-dark dark:text-white">
            Coupon Code
          </h3>
          <p className="text-sm text-body-color dark:text-dark-6">
            Enter code to get discount instantly
          </p>
        </div>

        <form className="relative">
          <input
            type="text"
            placeholder="Coupon code"
            className="border-stroke text-body-color focus:border-primary active:border-primary dark:border-dark-3 dark:text-dark-6 w-full rounded-lg border bg-transparent py-3 pr-20 pl-5 font-medium outline-hidden transition disabled:cursor-default disabled:bg-[#F5F7FD]"
          />
          <button className="bg-dark hover:bg-dark/90 absolute top-1/2 right-2 mb-3 h-[34px] -translate-y-1/2 rounded-sm px-5 text-sm font-medium text-white transition">
            Apply
          </button>
        </form>
      </div>
    </>
  );
};

export default CouponForm;
