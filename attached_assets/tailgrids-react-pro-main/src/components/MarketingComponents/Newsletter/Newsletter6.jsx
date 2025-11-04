import React from "react";

const Newsletter6 = () => {
  return (
    <section className="bg-white py-20 dark:bg-dark lg:py-[120px]">
      <div className="mx-auto px-4 md:container">
        <div className="rounded-lg bg-primary p-8 sm:p-12">
          <div className="flex flex-wrap items-center space-y-8 lg:flex-nowrap lg:justify-between lg:space-x-6 lg:space-y-0">
            <div className="w-full lg:max-w-[370px]">
              <h2 className="text-[22px] font-semibold leading-tight! text-white sm:text-[28px]">
                Subscribe to Receive All of Our Future Updates
              </h2>
            </div>
            <div className="w-full lg:max-w-[530px]">
              <form className="flex flex-wrap space-y-4 sm:flex-nowrap sm:space-x-4 sm:space-y-0">
                <input
                  type="email"
                  placeholder="Enter your email to join"
                  className="h-[52px] w-full rounded-md bg-white px-6 text-base text-body-color outline-hidden"
                />
                <button className="h-[52px] w-full rounded-md border border-white px-7 text-base text-white duration-150 hover:bg-white hover:text-primary sm:w-auto">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter6;
