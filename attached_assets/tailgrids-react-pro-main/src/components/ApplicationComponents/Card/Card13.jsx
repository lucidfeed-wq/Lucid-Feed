import React from "react";

const Card13 = () => {
  return (
    <section className="bg-gray-2 pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap justify-center">
          <SingleCard
            CardTitle="Card Title here"
            titleHref="#"
            CardDescription="Lorem ipsum dolor sit amet, vehiculaum ero felis loreum fitiona fringilla goes scelerisque Interdum et."
            authorImg="https://i.ibb.co/JFfjWmj/author-01.png"
            buttonHref="#"
            buttonText="Learn More"
          />
          <SingleCard
            CardTitle="Card Title here"
            titleHref="#"
            CardDescription="Lorem ipsum dolor sit amet, vehiculaum ero felis loreum fitiona fringilla goes scelerisque Interdum et."
            authorImg="https://i.ibb.co/RcDxfS5/author-02.png"
            buttonHref="#"
            buttonText="Learn More"
          />
          <SingleCard
            CardTitle="Card Title here"
            titleHref="#"
            CardDescription="Lorem ipsum dolor sit amet, vehiculaum ero felis loreum fitiona fringilla goes scelerisque Interdum et."
            authorImg="https://i.ibb.co/C6vG7YP/author-03.png"
            buttonHref="#"
            buttonText="Learn More"
          />
        </div>
      </div>
    </section>
  );
};

export default Card13;

const SingleCard = ({
  CardDescription,
  CardTitle,
  titleHref,
  buttonHref,
  buttonText,
  authorImg,
}) => {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="relative mb-10 flex border border-stroke bg-white p-6 dark:border-dark-3 dark:bg-dark-2">
        <div className="mr-5 h-11 w-full max-w-[44px] overflow-hidden rounded-full lg:mr-4 lg:h-10 lg:max-w-[40px] xl:mr-5 xl:h-11 xl:max-w-[44px]">
          <img
            src={authorImg}
            alt="author"
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="w-full">
          <h3>
            <a
              href={titleHref}
              className="mb-3 inline-block pr-4 text-base font-medium text-dark hover:text-primary dark:text-white sm:text-lg lg:text-base xl:text-lg"
            >
              {CardTitle}
            </a>
          </h3>
          <p className="mb-[18px] text-sm text-body-color dark:text-dark-6">
            {CardDescription}
          </p>
          <a
            href={buttonHref}
            className="group inline-flex items-center text-sm font-medium text-body-color duration-300 hover:text-primary dark:text-dark-6"
          >
            {buttonText}
            <span className="pl-2 duration-300 group-hover:translate-x-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.2001 8.5502L10.3782 2.64395C10.1251 2.39082 9.73135 2.39082 9.47822 2.64395C9.2251 2.89707 9.2251 3.29082 9.47822 3.54395L14.2032 8.35332H2.2501C1.9126 8.35332 1.63135 8.63457 1.63135 8.97207C1.63135 9.30957 1.9126 9.61895 2.2501 9.61895H14.2595L9.47822 14.4846C9.2251 14.7377 9.2251 15.1314 9.47822 15.3846C9.59072 15.4971 9.75947 15.5533 9.92822 15.5533C10.097 15.5533 10.2657 15.4971 10.3782 15.3564L16.2001 9.45019C16.4532 9.19707 16.4532 8.80332 16.2001 8.5502Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </a>
        </div>
        <button className="absolute right-[18px] top-[18px] text-body-color hover:text-primary dark:text-dark-6">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.8" clipPath="url(#clip0_3187_680)">
              <path
                d="M15.7234 2.80078C15.7234 2.60078 15.6484 2.42578 15.5234 2.30078C15.1984 1.97578 14.8984 1.67578 14.5984 1.37578C14.3234 1.10078 14.0484 0.825781 13.7734 0.550781C13.6734 0.400781 13.4984 0.300781 13.3234 0.275781C13.1234 0.250781 12.9234 0.300781 12.7484 0.425781L10.9984 2.20078H2.17344C1.12344 2.20078 0.273438 3.05078 0.273438 4.10078V13.8258C0.273438 14.8758 1.12344 15.7258 2.17344 15.7258H11.8984C12.9484 15.7258 13.7984 14.8758 13.7984 13.8258V5.00078L15.5234 3.30078C15.6484 3.15078 15.7234 2.97578 15.7234 2.80078ZM8.27344 9.10078C8.24844 9.12578 8.22344 9.15078 8.19844 9.15078L6.17344 9.82578L6.84844 7.80078C6.84844 7.77578 6.87344 7.75078 6.89844 7.72578L11.5984 3.00078L12.9984 4.40078L8.27344 9.10078ZM12.8234 13.8508C12.8234 14.3508 12.4234 14.7508 11.9234 14.7508H2.17344C1.67344 14.7508 1.27344 14.3508 1.27344 13.8508V4.10078C1.27344 3.60078 1.67344 3.20078 2.17344 3.20078H9.99844L6.17344 7.00078C6.04844 7.12578 5.94844 7.30078 5.87344 7.47578L4.92344 10.3758C4.87344 10.5508 4.89844 10.7258 4.99844 10.8508C5.07344 10.9508 5.19844 11.0758 5.44844 11.0758H5.52344L8.49844 10.0758C8.67344 10.0258 8.84844 9.92578 8.97344 9.77578L12.8234 6.00078V13.8508ZM13.6984 3.70078L12.2984 2.30078L13.2234 1.37578C13.4484 1.60078 13.6734 1.82578 13.8984 2.05078C14.1234 2.27578 14.3734 2.52578 14.6234 2.77578L13.6984 3.70078Z"
                fill="currentColor"
              />
            </g>
            <defs>
              <clipPath id="clip0_3187_680">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </div>
  );
};
