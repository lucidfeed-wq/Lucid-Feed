import React from "react";

const Card5 = () => {
  return (
    <section className="bg-white pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <SingleCard
            image="https://i.ibb.co/RB6Jc9p/image-01.jpg"
            CardTitle="Mountain"
            titleHref="#"
            CardDescription="Lorem ipsum dolor sit amet, vehicula ero felis loreum fitiona fringilla scelerisque. Interdum et malesuada fames ac ante ipsum primis faucibus."
            meta={[
              { name: "#mountain", metaHref: "#" },
              { name: "#hill", metaHref: "#" },
              { name: "#rock", metaHref: "#" },
            ]}
          />
          <SingleCard
            image="https://i.ibb.co/1qpScyk/image-02.jpg"
            CardTitle="Sea beach"
            titleHref="#"
            CardDescription="Lorem ipsum dolor sit amet, vehicula ero felis loreum fitiona fringilla scelerisque. Interdum et malesuada fames ac ante ipsum primis faucibus."
            meta={[
              { name: "#sea-beach", metaHref: "#" },
              { name: "#sea", metaHref: "#" },
              { name: "#nature", metaHref: "#" },
            ]}
          />
          <SingleCard
            image="https://i.ibb.co/W6fXyVr/image-03.jpg"
            CardTitle="Ice land"
            titleHref="#"
            CardDescription="Lorem ipsum dolor sit amet, vehicula ero felis loreum fitiona fringilla scelerisque. Interdum et malesuada fames ac ante ipsum primis faucibus."
            meta={[
              { name: "#ice-land", metaHref: "#" },
              { name: "#ice", metaHref: "#" },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Card5;

const SingleCard = ({ image, CardDescription, CardTitle, titleHref, meta }) => {
  return (
    <div className="w-full px-4 md:w-1/2 xl:w-1/3">
      <div className="mb-10 overflow-hidden rounded-lg bg-white shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card">
        <img src={image} alt="image" className="w-full" />
        <div className="px-6 py-8 sm:p-8">
          <h3>
            <a
              href={titleHref}
              className="mb-4 block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
            >
              {CardTitle}
            </a>
          </h3>
          <p className="mb-5 text-base font-medium leading-relaxed text-body-color dark:text-dark-6">
            {CardDescription}
          </p>
          <div className="flex flex-wrap items-center rounded-md bg-tg-bg px-2 py-1 dark:bg-dark-3">
            {meta.map((item, i) => (
              <a
                key={i}
                href={item.metaHref}
                className="flex px-2 py-1 text-base font-medium text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-white"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
