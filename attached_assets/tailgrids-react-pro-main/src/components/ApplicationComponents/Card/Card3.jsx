import React from "react";

const Card3 = () => {
  return (
    <section className="bg-gray-2 pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <SingleCard
            image="https://i.ibb.co/tzRpf3V/image-01.jpg"
            authorImg="https://i.ibb.co/6ymLQ1s/author-01.png"
            authorName="Samuyl Joshi"
            authorTitle="Graphics Designer"
            date="15 April, 2024"
            CardTitle="Top Graphic Design Courses Online"
            titleHref="#"
            CardDescription="Lorem ipsum dolor sitie amet, consec adipiscing elit. In pretium venenatis sed finibus orci imperdiet et.."
          />
          <SingleCard
            image="https://i.ibb.co/tJ0kcp7/image-02.jpg"
            authorImg="https://i.ibb.co/5GBwQDj/author-02.png"
            authorName="Devid Millar"
            authorTitle="Web Developer"
            date="15 April, 2024"
            CardTitle="Best Web Design Courses Online in 2021"
            titleHref="#"
            CardDescription="Lorem ipsum dolor sitie amet, consec adipiscing elit. In pretium venenatis sed finibus orci imperdiet et.."
          />
          <SingleCard
            image="https://i.ibb.co/0K4XMvN/image-03.jpg"
            authorImg="https://i.ibb.co/pKFrDT6/author-03.png"
            authorName="Rulius Hurry"
            authorTitle="App Developer"
            date="15 April, 2024"
            CardTitle="Android App Development Courses with in 30 days"
            titleHref="#"
            CardDescription="Lorem ipsum dolor sitie amet, consec adipiscing elit. In pretium venenatis sed finibus orci imperdiet et.."
          />
        </div>
      </div>
    </section>
  );
};

export default Card3;

const SingleCard = ({
  image,
  authorImg,
  authorName,
  authorTitle,
  CardDescription,
  CardTitle,
  titleHref,
  date,
}) => {
  return (
    <div className="w-full px-4 md:w-1/2 xl:w-1/3">
      <div className="mb-10 overflow-hidden rounded-lg bg-white shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card">
        <img src={image} alt="image" className="w-full" />
        <div className="px-6 py-8 sm:p-8 md:px-5 md:py-7 lg:px-5 lg:py-8 xl:px-5 xl:py-8 2xl:p-8">
          <h3>
            <a
              href={titleHref}
              className="mb-4 block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
            >
              {CardTitle}
            </a>
          </h3>
          <p className="mb-6 border-b border-gray-3 pb-7 text-base leading-relaxed text-body-color dark:border-dark-3 dark:text-dark-6">
            {CardDescription}
          </p>
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex w-max items-center">
              <div className="mr-4 h-[40px] w-full max-w-[40px] overflow-hidden rounded-full md:mr-2 md:h-[35px] md:max-w-[35px] lg:mr-4 lg:h-[40px] lg:max-w-[40px]">
                <img src={authorImg} alt="image" className="w-full" />
              </div>
              <div className="w-full">
                <h5 className="text-sm font-medium text-dark dark:text-white sm:text-[15px] md:text-sm lg:text-[15px]">
                  By {authorName}
                </h5>
                <p className="text-xs text-body-color dark:text-dark-6">
                  {authorTitle}
                </p>
              </div>
            </div>
            <div className="w-full max-w-[100px] text-right">
              <h5 className="text-sm font-medium text-dark dark:text-white sm:text-[15px] md:text-sm lg:text-[15px]">
                Date
              </h5>
              <p className="whitespace-nowrap text-xs text-body-color dark:text-dark-6">
                {date}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
