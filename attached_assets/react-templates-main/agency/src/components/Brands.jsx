import brandOne from "../assets/images/brands/graygrids.svg";
import brandTwo from "../assets/images/brands/lineicons.svg";
import brandThree from "../assets/images/brands/ayroui.svg";
import { Link } from "react-router-dom";

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
      <section className="bg-tg-bg py-20 dark:bg-dark-2">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div>
                <h2 className="text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-3xl xl:text-[33px] 2xl:text-4xl">
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
      </section>
    </>
  );
};

export default Brands;
