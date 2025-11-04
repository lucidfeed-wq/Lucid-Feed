import React from "react";

const Card9 = () => {
  return (
    <section className="bg-gray-1 pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap justify-center">
          <SingleCard
            CardTitle="Ready for SaaS Websites Crafted by TailGrids"
            titleHref="#"
            CardDescription="Lorem ipsum dolor sit amet, vehiculaum ero felis loreum fitiona fringilla goes scelerisque Interdum et."
            authorImg="https://i.ibb.co/1zqPW4s/author-01.png"
            authorName="Naimur Rahman"
            authorTitle="Content Writer"
          />
          <SingleCard
            CardTitle="Ready for SaaS Websites Crafted by TailGrids"
            titleHref="#"
            CardDescription="Lorem ipsum dolor sit amet, vehiculaum ero felis loreum fitiona fringilla goes scelerisque Interdum et."
            authorImg="https://i.ibb.co/RcDxfS5/author-02.png"
            authorName="Musharof Chy"
            authorTitle="Serial maker"
          />
          <SingleCard
            CardTitle="Ready for SaaS Websites Crafted by TailGrids"
            titleHref="#"
            CardDescription="Lorem ipsum dolor sit amet, vehiculaum ero felis loreum fitiona fringilla goes scelerisque Interdum et."
            authorImg="https://i.ibb.co/C6vG7YP/author-03.png"
            authorName="Shafiq Hammad"
            authorTitle="Frontend Developer"
          />
        </div>
      </div>
    </section>
  );
};
export default Card9;

const SingleCard = ({
  CardDescription,
  CardTitle,
  titleHref,
  authorImg,
  authorName,
  authorTitle,
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
        <p className="mb-6 text-base font-medium leading-relaxed text-body-color dark:text-dark-6">
          {CardDescription}
        </p>
        <div className="flex items-center">
          <div className="mr-3 h-[40px] w-full max-w-[40px] overflow-hidden rounded-full">
            <img src={authorImg} alt="image" className="w-full" />
          </div>
          <div className="w-full">
            <h5 className="text-sm font-semibold text-dark dark:text-white sm:text-base">
              {authorName}
            </h5>
            <p className="text-xs font-medium text-body-color dark:text-dark-6">
              {authorTitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
