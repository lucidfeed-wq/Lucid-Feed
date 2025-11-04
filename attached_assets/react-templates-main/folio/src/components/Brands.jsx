import brandOne from "../assets/images/brands/graygrids.svg";
import darkBrandOne from "../assets/images/brands/graygrids-white.svg";
import brandTwo from "../assets/images/brands/lineicons.svg";
import darkBrandTwo from "../assets/images/brands/lineIcons-white.svg";
import brandThree from "../assets/images/brands/uideck.svg";
import darkBrandThree from "../assets/images/brands/uideck-white.svg";
import brandFour from "../assets/images/brands/ayroui.svg";
import darkBrandFour from "../assets/images/brands/ayroui-white.svg";
import { Link } from "react-router-dom";

const brandList = [
  {
    image: brandOne,
    darkImage: darkBrandOne,
    link: "#",
  },
  {
    image: brandTwo,
    darkImage: darkBrandTwo,
    link: "#",
  },
  {
    image: brandThree,
    darkImage: darkBrandThree,
    link: "#",
  },
  {
    image: brandFour,
    darkImage: darkBrandFour,
    link: "#",
  },
];

const Brands = () => {
  return (
    <>
      <section className="bg-gray-1 py-10 dark:bg-dark-2 lg:py-20">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="flex flex-wrap items-center justify-center">
                {brandList.map((brand, index) => (
                  <Link
                    key={index}
                    to={brand.link}
                    className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                  >
                    <img
                      src={brand.image}
                      alt="image"
                      className="h-10 w-full dark:hidden"
                    />
                    <img
                      src={brand.darkImage}
                      alt="image"
                      className="hidden h-10 w-full dark:block"
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
