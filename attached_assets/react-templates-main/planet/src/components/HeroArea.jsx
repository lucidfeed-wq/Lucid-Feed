import imageOne from "../assets/ecom-images/headers/header-04/image-01.jpg";
import imageTwo from "../assets/ecom-images/headers/header-04/image-02.jpg";
import imageThree from "../assets/ecom-images/headers/header-04/image-03.jpg";
import { Link } from "react-router-dom";

const heroItems = [
  {
    big: true,
    image: imageOne,
    title: "Mega Sale Up To 50% Off For All",
    link: "#",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare vestibulum mollis. Nam vitae augue purus. Integer ac accumsan nunc.",
    button: "Grab The Offer",
  },
  {
    image: imageTwo,
    title: "Summer Travel Collection",
    link: "#",
    button: "Discover Now",
  },
  {
    image: imageThree,
    title: "Get 30% Off On iPhone",
    link: "#",
    button: "Shop Now",
  },
];

const HeroArea = () => {
  return (
    <>
      <section className="py-10 dark:bg-dark">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-8/12">
              {heroItems.map(
                (item, index) =>
                  item.big && (
                    <div
                      key={index}
                      className="relative mb-8 h-[370px] md:h-[480px]"
                    >
                      <img
                        src={item.image}
                        alt="product"
                        className="h-full w-full object-cover object-center"
                      />

                      <div className="absolute left-0 top-0 flex h-full w-full items-center px-8 md:px-12">
                        <div className="max-w-[420px]">
                          <h3>
                            <Link
                              to={item.link}
                              className="mb-5 block text-2xl font-bold text-dark hover:text-primary sm:text-4xl"
                            >
                              {item.title}
                            </Link>
                          </h3>
                          <p className="mb-9 text-base text-body-color">
                            {item.details}
                          </p>
                          <Link
                            to={item.link}
                            className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-[13px] text-center text-base font-medium text-white hover:bg-blue-dark"
                          >
                            {item.button}
                          </Link>
                        </div>
                      </div>
                    </div>
                  ),
              )}
            </div>
            <div className="w-full px-4 lg:w-4/12">
              <div className="-mx-4 flex flex-wrap">
                {heroItems.map(
                  (item, index) =>
                    !item.big && (
                      <div
                        key={index}
                        className="w-full px-4 md:w-1/2 lg:w-full"
                      >
                        <div className="relative mb-8 h-[223px]">
                          <img
                            src={item.image}
                            alt="product"
                            className="h-full w-full object-cover object-center"
                          />

                          <div className="absolute left-0 top-0 flex h-full w-full items-end justify-end p-6 sm:p-9">
                            <div className="max-w-[180px] text-right">
                              <h3>
                                <Link
                                  to={item.link}
                                  className="mb-3 block text-xl font-bold text-dark hover:text-primary xl:text-2xl"
                                >
                                  {item.title}
                                </Link>
                              </h3>
                              <Link
                                to={item.link}
                                className="text-base font-medium text-dark hover:text-primary"
                              >
                                {item.button}
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroArea;
