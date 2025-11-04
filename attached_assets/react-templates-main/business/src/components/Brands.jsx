import brandOne from "../assets/images/brands/graygrids-white.svg";
import brandTwo from "../assets/images/brands/lineIcons-white.svg";
import brandThree from "../assets/images/brands/ayroui-white.svg";
import { Link } from "react-router-dom";
import ShapeFour from "./Shapes/ShapeFour.jsx";

const brandList = [
  {
    image: brandOne,
    link: "#",
  },
  {
    image: brandTwo,
    link: "#",
  },
  {
    image: brandThree,
    link: "#",
  },
];

const Brands = () => {
  return (
    <>
      <section className="relative z-10 bg-primary py-20 lg:py-[120px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div>
                <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-3xl xl:text-[33px] 2xl:text-4xl">
                  Tailwind CSS UI Components for Modern Web Apps
                </h2>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-7/12">
              <div className="mt-12 flex flex-wrap items-center justify-center lg:mt-0 xl:justify-end">
                {brandList.map((brand, index) => (
                  <Link
                    key={index}
                    to={brand.link}
                    className="mx-4 flex min-w-[150px] max-w-[200px] items-center justify-center py-5 lg:min-w-min lg:max-w-[110px] xl:max-w-[200px]"
                  >
                    <img
                      src={brand.image}
                      alt="image"
                      className="h-10 w-full"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div>
          <span className="absolute left-4 top-4 z-[-1]">
            <ShapeFour />
          </span>
          <span className="absolute bottom-4 right-4 z-[-1]">
            <ShapeFour />
          </span>
        </div>
      </section>
    </>
  );
};

export default Brands;
