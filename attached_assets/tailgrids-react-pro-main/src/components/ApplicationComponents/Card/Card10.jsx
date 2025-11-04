import React from "react";

const Card10 = () => {
  return (
    <section className="bg-gray-2 pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap justify-center">
          <SingleCard
            image="https://i.ibb.co/zbRQkNH/image-01.jpg"
            CardTitle="Card Title here"
            titleHref="#"
            CardDescription="Lorem ipsum dolor sit amet, vehiculaum ero felis loreum fitiona fringilla goes scelerisque Interdum et."
            authorImg="https://i.ibb.co/JFfjWmj/author-01.png"
            authorName="Naimur Rahman"
            authorTitle="Content Writer"
          />
          <SingleCard
            image="https://i.ibb.co/VMMvMN0/image-02.jpg"
            CardTitle="Card Title here"
            titleHref="#"
            CardDescription="Lorem ipsum dolor sit amet, vehiculaum ero felis loreum fitiona fringilla goes scelerisque Interdum et."
            authorImg="https://i.ibb.co/RcDxfS5/author-02.png"
            authorName="Musharof Chy"
            authorTitle="CEO of PimjoLabs"
          />
          <SingleCard
            image="https://i.ibb.co/SrC6zbJ/image-03.jpg"
            CardTitle="Card Title here"
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

export default Card10;

const SingleCard = ({
  image,
  CardDescription,
  CardTitle,
  titleHref,
  authorImg,
  authorName,
  authorTitle,
}) => {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="mb-10 rounded-lg bg-white px-4 pb-6 pt-5 shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card">
        <div className="mb-5 flex items-center px-[10px]">
          <div className="mr-3 h-10 w-full max-w-[40px] overflow-hidden rounded-full">
            <img
              src={authorImg}
              alt="author"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div>
            <h5 className="text-base font-medium text-dark dark:text-white">
              {authorName}
            </h5>
            <p className="text-xs text-body-color dark:text-dark-6">
              {authorTitle}
            </p>
          </div>
        </div>
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
