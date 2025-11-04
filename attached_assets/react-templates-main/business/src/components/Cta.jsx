import { Link } from "react-router-dom";
import ShapeEleven from "./Shapes/ShapeEleven.jsx";
import ShapeTwelve from "./Shapes/ShapeTwelve.jsx";

const Cta = () => {
  return (
    <>
      <section className="dark:bg-dark pt-20 lg:pt-[120px]">
        <div className="container mx-auto">
          <div className="bg-dark-2 relative z-10 overflow-hidden rounded-sm px-8 py-12 md:p-[70px]">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2">
                <span className="mb-4 block text-base font-medium text-white">
                  Find Your Next Dream App
                </span>
                <h2 className="mb-6 text-3xl leading-tight font-bold text-white sm:mb-8 sm:text-[40px]/[48px] lg:mb-0">
                  <span className="xs:block"> Get started with </span>
                  <span>our free trial</span>
                </h2>
              </div>
              <div className="w-full px-4 lg:w-1/2">
                <div className="flex flex-wrap lg:justify-end">
                  <Link
                    to="#"
                    className="text-primary hover:text-primary hover:shadow-1 my-1 mr-4 inline-block rounded-md border border-transparent bg-white px-7 py-3 text-base font-medium transition"
                  >
                    Get Pro Version
                  </Link>
                  <Link
                    to="#"
                    className="bg-primary hover:bg-primary/90 my-1 inline-block rounded-md border border-transparent px-7 py-3 text-base font-medium text-white transition"
                  >
                    Start Free Trial
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <span className="absolute top-0 left-0 z-[-1]">
                <ShapeEleven />
              </span>
              <span className="absolute right-0 bottom-0 z-[-1]">
                <ShapeTwelve />
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cta;
