import imageOne from "../assets/images/about/about-05/image-01.jpg";
import imageTwo from "../assets/images/about/about-05/image-02.jpg";
import ShapeOne from "./Shapes/ShapeOne.jsx";
import ShapeTwo from "./Shapes/ShapeTwo.jsx";

const About = () => {
  return (
    <>
      <section className="overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap items-center justify-between">
            <div className="w-full px-4 lg:w-6/12">
              <div className="relative mx-auto flex h-[500px] max-w-[440px]">
                <div className="absolute left-0 z-30 mr-14 max-w-[270px] rounded-lg">
                  <img
                    src={imageOne}
                    alt="about image"
                    className="w-full rounded-lg"
                  />
                  <span className="absolute -right-14 top-6 -z-10">
                    <ShapeOne />
                  </span>
                  <span className="absolute -bottom-10 left-5 z-[-1] sm:left-16">
                    <ShapeTwo />
                  </span>
                </div>
                <div className="absolute right-0 top-20 z-30 ml-14 max-w-[300px] rounded-lg">
                  <img
                    src={imageTwo}
                    alt="about image"
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 2xl:w-5/12">
              <div className="sm:mt-10 lg:mt-0">
                <span className="mb-2 block text-lg font-semibold uppercase text-primary">
                  WHAT WE ACHIEVED
                </span>
                <h2 className="mb-11 text-3xl font-bold leading-tight text-dark dark:text-white sm:text-4xl sm:leading-tight md:text-[40px]/[48px]">
                  We grow your business with full potential by the innovation.
                </h2>
                <h3 className="mb-4 text-lg font-bold text-dark dark:text-white">
                  Company Benefits
                </h3>
                <p className="mb-9 text-base text-body-color dark:text-dark-6">
                  Proin gravida nibh vel velit auctor aliquet. aks Aenean
                  sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                  ipsum, nec sagittis sem, tidiomic consequat ipsum.
                </p>
                <h3 className="mb-4 text-lg font-bold text-dark dark:text-white">
                  Competitive Salary
                </h3>
                <p className="text-base text-body-color dark:text-dark-6">
                  Proin gravida nibh vel velit auctor aliquet. aks Aenean
                  sollicitudin, lorem quis bibendum auctor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
