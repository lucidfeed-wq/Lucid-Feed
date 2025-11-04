const FooterNewsletter = () => {
  return (
    <>
      <div className="border-gray-7/20 border-b pt-[70px] pb-10">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div className="mb-5 w-full">
              <h3 className="text-2xl font-bold text-white sm:text-[28px] sm:leading-snug">
                Signup for latest news and insights from TailGrids UI
              </h3>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <div className="mb-5 w-full">
              <form className="flex flex-wrap">
                <div className="relative mr-5 mb-3 w-full max-w-[370px]">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="text-dark-6 focus:border-primary h-[52px] w-full rounded-sm border border-white/[.08] bg-white/5 pr-5 pl-14 outline-hidden focus-visible:shadow-none"
                  />
                  <label className="text-dark-6 absolute top-1/2 left-5 -translate-y-1/2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 7C6.125 7 4.625 5.525 4.625 3.725C4.625 1.925 6.125 0.449997 8 0.449997C9.875 0.449997 11.375 1.925 11.375 3.725C11.375 5.525 9.875 7 8 7ZM8 1.575C6.75 1.575 5.75 2.55 5.75 3.725C5.75 4.9 6.75 5.875 8 5.875C9.25 5.875 10.25 4.9 10.25 3.725C10.25 2.55 9.25 1.575 8 1.575Z"
                        fill="currentColor"
                      />
                      <path
                        d="M12.925 15.575H3.075C2.575 15.575 2.175 15.175 2.175 14.675V12.425C2.175 9.97501 4.175 7.97501 6.625 7.97501H9.4C11.85 7.97501 13.85 9.97501 13.85 12.425V14.675C13.825 15.15 13.425 15.575 12.925 15.575ZM3.3 14.45H12.725V12.425C12.725 10.6 11.225 9.10001 9.4 9.10001H6.6C4.775 9.10001 3.275 10.6 3.275 12.425V14.45H3.3Z"
                        fill="currentColor"
                      />
                    </svg>
                  </label>
                </div>
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary/90 mb-3 h-[52px] rounded-sm border border-transparent px-7 text-white transition"
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
