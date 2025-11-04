import React from "react";

const Newsletter4 = () => {
  return (
    <section className="bg-white py-20 dark:bg-dark lg:py-[120px]">
      <div className="mx-auto px-4 sm:container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2 xl:w-7/12">
            <div className="mb-14 lg:mb-0 lg:max-w-[520px]">
              <span className="mb-3 block text-lg font-semibold text-primary">
                Subscribe Our Newsletter
              </span>
              <h2 className="mb-5 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
                Get our new products updates on your inbox!
              </h2>
              <p className="mb-9 text-base text-body-color dark:text-dark-6">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
              <form className="flex flex-wrap space-y-4 sm:flex-nowrap sm:space-x-4 sm:space-y-0">
                <input
                  type="email"
                  placeholder="Enter your email to join"
                  className="w-full rounded-md border border-stroke bg-transparent px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-dark-3 dark:text-dark-6"
                />
                <button className="w-full whitespace-nowrap rounded-md border border-transparent bg-primary px-7 py-3 text-base font-medium text-white hover:bg-primary/90 sm:w-auto">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
            <div className="text-center">
              <img
                src="https://i.ibb.co/Ykv5hN7/form-4.png"
                alt="forms image"
                className="mx-auto max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter4;
