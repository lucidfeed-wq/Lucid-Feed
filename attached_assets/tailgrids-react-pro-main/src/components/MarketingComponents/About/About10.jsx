import React from "react";

export default function About10() {
  return (
    <section className="bg-white py-20 lg:py-[120px] dark:bg-dark">
      <div className="container">
        <div className="flex flex-wrap items-center gap-10 lg:flex-nowrap lg:gap-14 2xl:gap-[100px]">
          <div className="w-full">
            <div className="overflow-hidden rounded-[20px]">
              <img
                src="https://i.ibb.co/z4dQnyz/image-1.jpg"
                alt="about image"
                className="w-full object-cover object-center"
              />
            </div>
          </div>

          <div className="w-full">
            <div>
              <span className="mb-2 block text-lg font-semibold text-primary">
                Sub Heading
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-tight! text-dark sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl dark:text-white">
                Making Credit history with nightcard
              </h2>
              <p className="mb-12 text-base text-body-color dark:text-dark-6">
                Proin gravida nibh vel velit auctor aliquet. aks Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem
              </p>

              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full border border-stroke px-6 py-3 text-dark duration-200 hover:bg-dark/5 dark:border-dark-3 dark:text-white dark:hover:bg-white/5"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
