import React from "react";

const Stats5 = () => {
  return (
    <section className="bg-white pb-20 dark:bg-dark lg:pb-[120px]">
      <div className="bg-primary pb-[140px] pt-20 lg:pt-[120px]">
        <div className="mx-auto px-4 sm:container">
          <div className="mx-auto max-w-[570px] text-center">
            <span className="mb-2 block text-lg font-semibold text-white">
              Some Fun Facts
            </span>
            <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-white md:text-[40px]">
              Our achievements
            </h2>
            <p className="text-base text-gray-7">
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered alteration in some form.
            </p>
          </div>
        </div>
      </div>

      <div className="-mt-[100px]">
        <div className="mx-auto px-4 sm:container">
          <div className="mx-auto flex max-w-[970px] flex-wrap items-center justify-center rounded-xl bg-white px-10 py-[65px] shadow-2 dark:bg-dark-2 dark:shadow-box-dark">
            <StatsItem count="220" title="Projects" />
            <StatsItem count="150K" title="Earned" />
            <StatsItem count="24/7" title="Delivery" />
            <StatsItem count="99%" title="Success" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats5;

const StatsItem = ({ count, title }) => {
  return (
    <div className="w-1/2 md:w-1/4">
      <div className="mb-10 text-center md:mb-0">
        <p className="mb-1 text-body-color dark:text-dark-6">{title}</p>
        <span className="block text-4xl font-bold leading-[1.2] text-dark dark:text-white sm:text-[40px]">
          {count}
        </span>
      </div>
    </div>
  );
};
