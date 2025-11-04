import React from "react";

const Card11 = () => {
  return (
    <section className="bg-gray-2 pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap justify-center">
          <SingleCard
            image="https://i.ibb.co/nrMrH4t/image-01.jpg"
            CardTitle="Card Title here"
            titleHref="#"
            CardDescription="Lorem ipsum dolor sit amet, vehiculaum ero felis loreum fitiona fringilla goes scelerisque Interdum et."
          />
          <SingleCard
            image="https://i.ibb.co/GRzQhCj/image-02.jpg"
            CardTitle="Card Title here"
            titleHref="#"
            CardDescription="Lorem ipsum dolor sit amet, vehiculaum ero felis loreum fitiona fringilla goes scelerisque Interdum et."
          />
          <SingleCard
            image="https://i.ibb.co/4RftrJK/image-03.jpg"
            CardTitle="Card Title here"
            titleHref="#"
            CardDescription="Lorem ipsum dolor sit amet, vehiculaum ero felis loreum fitiona fringilla goes scelerisque Interdum et."
          />
        </div>
      </div>
    </section>
  );
};

export default Card11;

const SingleCard = ({ image, CardDescription, CardTitle, titleHref }) => {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="mb-10 rounded-lg bg-white p-4 pb-6 shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card">
        <div className="mb-6 w-full overflow-hidden rounded-md">
          <img
            src={image}
            alt="card image"
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="px-[10px]">
          <h3>
            <a
              href={titleHref}
              className="mb-3 inline-block text-lg font-semibold text-dark hover:text-primary dark:text-white sm:text-xl lg:text-lg xl:text-xl"
            >
              {CardTitle}
            </a>
          </h3>
          <p className="text-base text-body-color dark:text-dark-6">
            {CardDescription}
          </p>
        </div>
      </div>
    </div>
  );
};
