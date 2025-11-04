import React from "react";

const Error7 = () => {
  return (
    <section className="flex min-h-screen items-center justify-center bg-gray py-20 dark:bg-dark lg:py-[120px]">
      <div className="container mx-auto">
        <div className="mx-auto max-w-[600px] rounded-[10px] bg-white p-10 text-center shadow-1 dark:bg-dark-2 dark:shadow-card md:px-[70px] md:py-[55px]">
          <div className="mx-auto mb-14 text-center">
            <img
              src="https://cdn.tailgrids.com/2.0/image/application/images/404/image-07.svg"
              alt="404 image"
              className="mx-auto w-full max-w-full"
            />
          </div>
          <h2 className="mb-3 text-2xl font-semibold text-dark dark:text-white sm:text-3xl">
            Sorry, we can't find that page
          </h2>
          <p className="mb-5 text-base text-body-color dark:text-dark-6">
            Oops! The page you are looking for does not exist. It might have
            been moved or deleted.
          </p>
          <a
            href="/#"
            className="inline-flex items-center rounded-md bg-white px-6 py-3 text-base font-medium text-primary shadow-1 hover:bg-gray-2 dark:bg-white/5 dark:shadow-card dark:hover:bg-white/10"
          >
            Go Back to Home
            <span className="pl-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 9.5L11.5312 2.9375C11.25 2.65625 10.8125 2.65625 10.5312 2.9375C10.25 3.21875 10.25 3.65625 10.5312 3.9375L15.7812 9.28125H2.5C2.125 9.28125 1.8125 9.59375 1.8125 9.96875C1.8125 10.3437 2.125 10.6875 2.5 10.6875H15.8437L10.5312 16.0938C10.25 16.375 10.25 16.8125 10.5312 17.0938C10.6562 17.2188 10.8437 17.2813 11.0312 17.2813C11.2187 17.2813 11.4062 17.2188 11.5312 17.0625L18 10.5C18.2812 10.2187 18.2812 9.78125 18 9.5Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Error7;
