import React from "react";

const Portfolio5 = () => {
  return (
    <section className="pt-20 pb-5 lg:pt-[120px] lg:pb-[60px] dark:bg-dark">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            <div className="mb-[60px] max-w-[510px]">
              <span className="text-primary mb-2 block text-lg font-semibold">
                Portfolio
              </span>
              <h2 className="text-dark dark:text-white mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]">
                Check out some of our recent projects below.
              </h2>
              <p className="text-body-color dark:text-dark-6 text-base">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>

            <PortfolioCard
              img="https://cdn.tailgrids.com/2.0/image/marketing/images/portfolio/portfolio-05/image-01.jpg"
              subtitle="INVITATION"
              title="Mollis Ipsum Mattis"
              link="/#"
            />
            <PortfolioCard
              img="https://cdn.tailgrids.com/2.0/image/marketing/images/portfolio/portfolio-05/image-02.jpg"
              subtitle="STATIONARY"
              title="Ipsum Ultricies Cursus"
              link="/#"
            />
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <PortfolioCard
              img="https://cdn.tailgrids.com/2.0/image/marketing/images/portfolio/portfolio-05/image-03.jpg"
              subtitle="INVITATION"
              title="Mollis Ipsum Mattis"
              link="/#"
            />
            <PortfolioCard
              img="https://cdn.tailgrids.com/2.0/image/marketing/images/portfolio/portfolio-05/image-04.jpg"
              subtitle="PRODUCT"
              title="Inceptos Euismod Egestas"
              link="/#"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio5;

const PortfolioCard = ({ img, subtitle, link, title }) => {
  return (
    <div className="mb-[60px] mr-0 lg:mr-4">
      <div className="mb-9 overflow-hidden rounded-xl">
        <img src={img} alt="image" className="w-full" />
      </div>
      <div className="content">
        <div className="mb-4 flex items-center">
          <span className="bg-primary mr-3 inline-block h-px w-6"></span>
          <span className="text-primary text-sm font-semibold uppercase">
            {subtitle}
          </span>
        </div>
        <h3>
          <a
            href={link}
            className="text-dark dark:text-white hover:text-primary inline-block text-xl font-bold sm:text-2xl"
          >
            {title}
          </a>
        </h3>
      </div>
    </div>
  );
};
