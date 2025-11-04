import React from "react";

const Card12 = () => {
  return (
    <section className="bg-gray-2 pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap justify-center">
          <SingleCard
            CardTitle="Card Title here"
            titleHref="#"
            CardDescription="Lorem ipsum dolor sit amet, vehiculaum ero felis loreum fitiona fringilla goes scelerisque Interdum et."
          />
          <SingleCard
            CardTitle="Card Title here"
            titleHref="#"
            CardDescription="Lorem ipsum dolor sit amet, vehiculaum ero felis loreum fitiona fringilla goes scelerisque Interdum et."
          />
          <SingleCard
            CardTitle="Card Title here"
            titleHref="#"
            CardDescription="Lorem ipsum dolor sit amet, vehiculaum ero felis loreum fitiona fringilla goes scelerisque Interdum et."
          />
        </div>
      </div>
    </section>
  );
};

export default Card12;

const SingleCard = ({ CardDescription, CardTitle, titleHref }) => {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="mb-10 border border-stroke bg-white dark:border-dark-3 dark:bg-dark-2">
        <div className="border-b border-stroke px-7 py-5 dark:border-dark-3">
          <h3>
            <a
              href={titleHref}
              className="inline-block text-lg font-semibold text-dark hover:text-primary dark:text-white sm:text-xl lg:text-lg xl:text-xl"
            >
              {CardTitle}
            </a>
          </h3>
        </div>
        <div className="px-7 pb-9 pt-6">
          <p className="text-base text-body-color dark:text-dark-6">
            {CardDescription}
          </p>
        </div>
      </div>
    </div>
  );
};
