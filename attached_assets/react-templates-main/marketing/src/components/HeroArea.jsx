import heroImage from "../assets/images/hero/hero-12/hero-bg.jpg";
import { Link } from "react-router-dom";
import HeroForm from "./HeroForm.jsx";

const HeroArea = () => {
  return (
    <>
      <div
        className="relative z-10 bg-cover bg-center bg-no-repeat pb-20 pt-[120px] md:pt-[150px]"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute left-0 top-0 -z-10 h-full w-full bg-[#090E34]/[85%]"></div>
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-16 max-w-[500px] lg:mb-0">
                <span className="mb-5 block text-base font-semibold text-white sm:text-lg md:text-xl">
                  Digital Marketing
                </span>
                <h1 className="mb-4 text-3xl font-bold leading-[1.208]! text-white sm:text-4xl lg:text-[42px] xl:text-5xl">
                  Grow your website traffic with TailGrids.
                </h1>
                <p className="mb-9 text-base text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  posuere arcu sit amet ligula feugiat eleifend.
                </p>
                <ul className="flex flex-wrap items-center gap-3">
                  <li>
                    <Link
                      to="#"
                      className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-3 text-center text-base font-medium text-white hover:bg-blue-dark"
                    >
                      Know More
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="inline-flex items-center rounded-md bg-white/5 px-6 py-3 text-base font-medium text-white hover:bg-gray-2 hover:text-body-color"
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
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <HeroForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroArea;
