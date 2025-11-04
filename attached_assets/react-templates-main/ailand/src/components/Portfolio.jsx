import portfolioOne from "../assets/images/portfolio/portfolio-07/image-1.jpg";
import portfolioTwo from "../assets/images/portfolio/portfolio-07/image-2.jpg";
import portfolioThree from "../assets/images/portfolio/portfolio-07/image-3.jpg";
import portfolioFour from "../assets/images/portfolio/portfolio-07/image-4.jpg";

const Portfolio = () => {
  return (
    <>
      <section className="bg-gray-1 py-20 dark:bg-dark lg:py-[120px]">
        <div className="container">
          <div className="mb-11 flex items-end justify-between gap-4 max-md:flex-wrap">
            <div className="w-full max-w-[500px]">
              <h2 className="text-3xl font-bold leading-tight! -tracking-[.72px] text-dark dark:text-white sm:text-4xl">
                Exploring the Artistry Within Our Community
              </h2>
            </div>
            <div>
              <button className="inline-flex items-center justify-center rounded-lg border border-primary px-6 py-3 text-base font-medium text-primary duration-200 hover:bg-primary hover:text-white">
                Browse All
              </button>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-7">
              <div className="w-full md:col-span-2">
                <img
                  src={portfolioOne}
                  alt=""
                  className="w-full overflow-hidden rounded-xl object-cover object-center"
                />
              </div>
              <div className="space-y-6 md:col-span-3">
                <div>
                  <img
                    src={portfolioTwo}
                    alt=""
                    className="w-full overflow-hidden rounded-xl object-cover object-center"
                  />
                </div>
                <div>
                  <img
                    src={portfolioThree}
                    alt=""
                    className="w-full overflow-hidden rounded-xl object-cover object-center"
                  />
                </div>
              </div>
              <div className="md:col-span-2">
                <img
                  src={portfolioFour}
                  alt=""
                  className="w-full overflow-hidden rounded-xl object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
