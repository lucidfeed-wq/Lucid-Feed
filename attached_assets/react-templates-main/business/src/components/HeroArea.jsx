import heroImage from "../assets/images/hero/hero-image-07.jpg";
import { Link } from "react-router-dom";

const HeroArea = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-white dark:bg-dark">
        <div className="relative z-10 pb-20 pt-[150px] lg:pb-[120px] lg:pt-[210px]">
          <img
            src={heroImage}
            alt="image"
            className="absolute left-0 top-0 z-[-1] h-full w-full object-cover object-center"
          />
          <div className="container mx-auto">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4">
                <div className="max-w-[570px] bg-white px-8 py-10 dark:bg-dark-2 sm:p-12 md:p-[60px]">
                  <span className="mb-3 block text-base font-medium text-primary">
                    Delivering beautiful digital products
                  </span>
                  <h1 className="mb-3 text-3xl font-bold leading-[1.208] text-dark dark:text-white md:text-[40px] xl:text-5xl">
                    Provide solutions to small agency
                  </h1>
                  <p className="mb-8 text-base font-medium text-body-color dark:text-dark-6 lg:mb-10">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      to="#"
                      className="bg-primary px-7 py-3 text-base font-medium text-white transition hover:bg-blue-dark"
                    >
                      Discover More
                    </Link>
                    <Link
                      to="#"
                      className="inline-flex items-center bg-white px-6 py-3 text-base font-medium text-dark shadow-1 hover:text-primary dark:bg-dark-2 dark:text-white dark:shadow-none"
                    >
                      Explore Services
                      <span className="ml-2">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="fill-current"
                        >
                          <path
                            d="M18 9.5L11.5312 2.9375C11.25 2.65625 10.8125 2.65625 10.5312 2.9375C10.25 3.21875 10.25 3.65625 10.5312 3.9375L15.7812 9.28125H2.5C2.125 9.28125 1.8125 9.59375 1.8125 9.96875C1.8125 10.3437 2.125 10.6875 2.5 10.6875H15.8437L10.5312 16.0938C10.25 16.375 10.25 16.8125 10.5312 17.0938C10.6562 17.2188 10.8437 17.2813 11.0312 17.2813C11.2187 17.2813 11.4062 17.2188 11.5312 17.0625L18 10.5C18.2812 10.2187 18.2812 9.78125 18 9.5Z"
                            fill=""
                          />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroArea;
