import imageOne from "../assets/images/services/image-1.jpg";
import imageTwo from "../assets/images/services/image-2.jpg";
import imageThree from "../assets/images/services/image-3.jpg";
import ShapeOne from "./Shapes/ShapeOne.jsx";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <section className="dark:bg-dark overflow-hidden bg-white pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap items-center justify-between">
            <div className="w-full px-4 lg:w-6/12">
              <div className="-mx-3 flex items-center sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <img src={imageOne} alt="" className="w-full rounded-2xl" />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img src={imageTwo} alt="" className="w-full rounded-2xl" />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <img
                      src={imageThree}
                      alt=""
                      className="w-full rounded-2xl"
                    />
                    <span className="absolute -right-7 -bottom-7 z-[-1]">
                      <ShapeOne />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <span className="text-primary mb-4 block text-lg font-semibold">
                  Why Choose Us
                </span>
                <h2 className="text-dark mb-5 text-3xl font-bold sm:text-[40px]/[48px] dark:text-white">
                  Make your customers happy by giving services.
                </h2>
                <p className="text-body-color dark:text-dark-6 mb-5 text-base">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less.
                </p>
                <p className="text-body-color dark:text-dark-6 mb-8 text-base">
                  A domain name is one of the first steps to establishing your
                  brand. Secure a consistent brand image with a domain name that
                  matches your business.
                </p>
                <Link
                  to="#"
                  className="bg-primary hover:bg-primary/90 inline-flex items-center justify-center rounded-md border border-transparent px-7 py-3 text-center text-base font-medium text-white"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
