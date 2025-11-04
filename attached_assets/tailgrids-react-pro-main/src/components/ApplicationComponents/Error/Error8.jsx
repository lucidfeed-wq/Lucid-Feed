import React from "react";

const Error8 = () => {
  return (
    <section className="relative z-10 flex min-h-screen items-center overflow-hidden bg-white py-20 dark:bg-dark lg:py-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            <div className="mb-12 w-full max-w-[470px] lg:mb-0">
              <h2 className="mb-6 text-[40px] font-bold uppercase text-primary sm:text-[54px]">
                404 Error
              </h2>
              <h3 className="mb-3 text-2xl font-semibold text-dark dark:text-white sm:text-3xl">
                Oops! The page you are looking for does not exist.
              </h3>
              <p className="mb-12 text-lg text-body-color dark:text-dark-6">
                Uh oh, we can't seem to find the page you're looking for,
                Contact us for more information
              </p>
              <a
                href="/#"
                className="inline-flex rounded-sm border border-transparent bg-primary px-8 py-3 text-base font-medium text-white transition hover:bg-primary/90"
              >
                Back to Homepage
              </a>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <div className="mx-auto text-center">
              <img
                src="https://cdn.tailgrids.com/2.0/image/application/images/404/image-08.svg"
                alt="404 image"
                className="mx-auto max-w-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-0 top-0 -z-10 block h-full w-full bg-gray dark:bg-dark-2 lg:w-1/2"></div>
    </section>
  );
};

export default Error8;
