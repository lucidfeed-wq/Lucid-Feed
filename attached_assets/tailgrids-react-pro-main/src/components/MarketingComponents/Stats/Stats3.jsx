import React from "react";

const Stats3 = () => {
  return (
    <section className="bg-white pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
      <div className="mx-auto px-4 sm:container">
        <div className="mx-auto mb-[70px] max-w-[570px] text-center">
          <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white md:text-[40px]">
            Why Choose Us
          </h2>
          <p className="text-base text-body-color dark:text-dark-6">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </p>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <StatsItem
            number="01"
            title="Idea Creation"
            subtitle="Lorem ipsum dolor sit amet minim consectetur adipisicing elit."
          />
          <StatsItem
            number="02"
            title="Creative Design"
            subtitle="Lorem ipsum dolor sit amet minim consectetur adipisicing elit."
          />
          <StatsItem
            number="03"
            title="Awesome Support"
            subtitle="Lorem ipsum dolor sit amet minim consectetur adipisicing elit."
          />
        </div>
      </div>
    </section>
  );
};

export default Stats3;

const StatsItem = ({ subtitle, title, number }) => {
  return (
    <div className="w-full px-4 md:w-1/2 xl:w-1/3">
      <div className="mb-10 flex">
        <div className="mr-6">
          <span className="text-[40px] font-bold leading-[1.1] text-primary lg:text-[50px]">
            {number}
          </span>
        </div>
        <div className="w-full">
          <h3 className="mb-4 text-xl font-semibold text-dark dark:text-white sm:text-2xl">
            {title}
          </h3>
          <p className="text-base text-body-color dark:text-dark-6">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};
