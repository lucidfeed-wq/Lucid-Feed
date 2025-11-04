import React from "react";

const Stats4 = () => {
  return (
    <section className="bg-gray-2 py-20 dark:bg-dark lg:py-[120px]">
      <div className="mx-auto px-4 sm:container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-7/12">
            <div className="mb-12 max-w-[560px] lg:mb-8">
              <span className="mb-4 inline-block rounded-sm bg-primary px-3 py-1 text-base font-medium text-white">
                Some Fun Facts
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white md:text-[40px]">
                Our achievements
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>

          <div className="w-full px-4 lg:w-5/12">
            <div className="-mx-3 flex flex-wrap md:-mx-4">
              <StatsItem user="56,825" title="Clients" />
              <StatsItem user="35,574" title="Commits" />
              <StatsItem user="570+" title="Team Member" />
              <StatsItem user="50%" title="First Year of use" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats4;

const StatsItem = ({ user, title }) => {
  return (
    <div className="w-full px-3 xs:w-1/2 md:px-4">
      <div className="group mb-6 rounded-[5px] bg-white px-4 py-6 text-center shadow-three hover:bg-primary dark:bg-dark-2 md:mb-8">
        <h4 className="mb-1 text-2xl font-bold leading-tight text-dark group-hover:text-white dark:text-white sm:text-[28px]">
          {user}
        </h4>
        <p className="text-base text-body-color group-hover:text-white dark:text-dark-6">
          {title}
        </p>
      </div>
    </div>
  );
};
