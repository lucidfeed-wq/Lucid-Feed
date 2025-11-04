import brandOne from "../assets/images/brands/graygrids.svg";
import brandTwo from "../assets/images/brands/lineicons.svg";
import brandThree from "../assets/images/brands/uideck.svg";
import brandFour from "../assets/images/brands/ayroui.svg";
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
  {
    image: brandFour,
    link: "#",
  },
];

const Brands = () => {
  return (
    <>
      <section className="bg-white pb-10 pt-20 dark:bg-dark lg:pt-[120px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="h-10 w-full px-4">
              <div className="flex flex-wrap items-center justify-center">
                {brandList.map((brand, index) => (
                  <Link
                    key={index}
                    to={brand.link}
                    className="flex h-20 min-w-[150px] max-w-[225px] items-center justify-center rounded-full border border-transparent px-7 hover:border-primary/20 hover:bg-primary/5"
                  >
                    <img
                      src={brand.image}
                      alt="image"
                      className="h-10 max-w-full"
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
