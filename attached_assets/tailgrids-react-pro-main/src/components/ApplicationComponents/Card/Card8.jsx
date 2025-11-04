import React from "react";

const Card8 = () => {
  return (
    <section className="bg-gray-1 pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap justify-center">
          <SingleCard
            CardTitle="Ready for SaaS Websites Crafted by TailGrids"
            titleHref="#"
            btnHref="#"
            CardDescription="Lorem ipsum dolor sit amet, vehiculaum ero felis loreum fitiona fringilla goes scelerisque Interdum et."
            Button="Learn More"
          />
          <SingleCard
            CardTitle="Ready for SaaS Websites Crafted by TailGrids"
            titleHref="#"
            btnHref="#"
            CardDescription="Lorem ipsum dolor sit amet, vehiculaum ero felis loreum fitiona fringilla goes scelerisque Interdum et."
            Button="Learn More"
          />
          <SingleCard
            CardTitle="Ready for SaaS Websites Crafted by TailGrids"
            titleHref="#"
            btnHref="#"
            CardDescription="Lorem ipsum dolor sit amet, vehiculaum ero felis loreum fitiona fringilla goes scelerisque Interdum et."
            Button="Learn More"
          />
        </div>
      </div>
    </section>
  );
};

export default Card8;

const SingleCard = ({
  Button,
  CardDescription,
  CardTitle,
  titleHref,
  btnHref,
}) => {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="mb-8 rounded-lg bg-white px-6 py-8 shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card sm:px-8 lg:px-6 xl:px-8">
        <h3>
          <a
            href={titleHref}
            className="mb-3 block text-lg font-bold leading-tight text-dark hover:text-primary dark:text-white sm:text-xl sm:leading-tight lg:text-lg lg:leading-tight xl:text-xl xl:leading-tight"
          >
            {CardTitle}
          </a>
        </h3>
        <p className="mb-5 text-base font-medium leading-relaxed text-body-color dark:text-dark-6">
          {CardDescription}
        </p>
        <a
          href={btnHref}
          className="inline-flex items-center rounded-sm bg-primary px-4 py-2 font-semibold text-white hover:bg-primary/90"
        >
          {Button}
        </a>
      </div>
    </div>
  );
};
