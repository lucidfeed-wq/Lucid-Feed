import React from "react";

const Card4 = () => {
  return (
    <section className="bg-white pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap justify-center">
          <SingleCard
            image="https://i.ibb.co/z7HBQDM/image-01.jpg"
            CardTitle="Play – Free HTML App & SaaS Landing Page Template"
            CardSubtitle="Startup Template"
            titleHref="#"
            CardDescription="Play is free startup, saas, app landing page template."
          />
          <SingleCard
            image="https://i.ibb.co/zf4Xq4V/image-02.jpg"
            CardTitle="EventGrids is HTML template for Event, Seminar"
            CardSubtitle="Events Template"
            titleHref="#"
            CardDescription="EventGrids is HTML template for Event, Seminar"
          />
          <SingleCard
            image="https://i.ibb.co/z7HBQDM/image-01.jpg"
            CardTitle="Xpeedo is a high-quality landing page template"
            CardSubtitle="App Landing Template"
            titleHref="#"
            CardDescription="Xpeedo is a high-quality landing page template"
          />
        </div>
      </div>
    </section>
  );
};

export default Card4;

const SingleCard = ({
  image,
  CardDescription,
  CardTitle,
  CardSubtitle,
  titleHref,
}) => {
  return (
    <div className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3">
      <div className="relative mb-10 flex w-full items-center border border-gray-3 bg-white p-5 dark:border-dark-3 dark:bg-dark-2">
        <span className="absolute -left-px -top-px h-[3px] w-[calc(100%+1.5px)] bg-primary"></span>
        <div className="mr-4 w-full">
          <span className="mb-3 block text-xs font-semibold text-primary">
            {CardSubtitle}
          </span>
          <h3>
            <a
              href={titleHref}
              className="mb-4 block text-sm font-semibold text-dark hover:text-primary dark:text-white"
            >
              {CardTitle}
            </a>
          </h3>
          <p className="text-xs text-body-color dark:text-dark-6">
            {CardDescription}
          </p>
        </div>
        <div className="mx-auto w-full max-w-[120px] sm:max-w-[140px]">
          <img src={image} alt="image" className="w-full" />
        </div>
      </div>
    </div>
  );
};
