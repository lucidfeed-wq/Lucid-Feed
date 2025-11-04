const FooterNewsletter = () => {
  return (
    <>
      <div className="border-gray-7/20 border-b pt-[70px] pb-10">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full px-4 lg:w-1/2">
            <div className="mb-5 w-full max-w-[470px]">
              <h3 className="text-2xl font-bold text-white sm:text-[28px] sm:leading-snug">
                Signup for latest news and insights from TailGrids UI
              </h3>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="w-full mb-5">
              <form className="flex flex-wrap">
                <div className="relative mr-5 mb-3 w-full max-w-[370px]">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="placeholder-dark-8 h-[52px] w-full rounded-md border border-white/[.08] bg-white/5 pr-5 pl-14 text-white outline-hidden focus:border-white/40 focus-visible:shadow-none"
                  />
                  <label className="absolute -translate-y-1/2 top-1/2 left-5">
                    <svg
                      width="18"
                      height="13"
                      viewBox="0 0 18 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.3052 0H1.69481C0.75974 0 0 0.799055 0 1.78251V11.2175C0 12.2009 0.75974 13 1.69481 13H16.3052C17.2403 13 18 12.2009 18 11.2175V1.78251C18 0.799055 17.2403 0 16.3052 0ZM16.3052 1.07565C16.4513 1.07565 16.5682 1.10638 16.6851 1.19858L9.40909 5.83924C9.1461 5.99291 8.8539 5.99291 8.59091 5.83924L1.31494 1.19858C1.43182 1.13712 1.5487 1.07565 1.69481 1.07565H16.3052ZM16.3052 11.8936H1.69481C1.34416 11.8936 1.02273 11.5863 1.02273 11.1868V2.27423L8.03572 6.76123C8.32792 6.94563 8.64935 7.03782 8.97078 7.03782C9.29221 7.03782 9.61364 6.94563 9.90584 6.76123L16.9188 2.27423V11.1868C16.9773 11.5863 16.6558 11.8936 16.3052 11.8936Z"
                        fill="white"
                      />
                    </svg>
                  </label>
                </div>
                <button
                  type="submit"
                  className="text-dark mb-3 h-[52px] rounded-md border border-transparent bg-white px-7 font-medium transition hover:bg-white/90"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterNewsletter;
