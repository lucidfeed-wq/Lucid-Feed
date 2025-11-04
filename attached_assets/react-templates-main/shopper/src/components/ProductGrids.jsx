import productOne from "../assets/ecom-images/products/products-grids-05/image-01.jpg";
import productTwo from "../assets/ecom-images/products/products-grids-05/image-02.jpg";
import productThree from "../assets/ecom-images/products/products-grids-05/image-03.jpg";
import productFour from "../assets/ecom-images/products/products-grids-05/image-04.jpg";
import productFive from "../assets/ecom-images/products/products-grids-05/image-05.jpg";
import productSix from "../assets/ecom-images/products/products-grids-05/image-06.jpg";
import { Link } from "react-router-dom";

const productItems = [
  {
    image: productOne,
    name: "Table Top Showpiece",
    price: "$59.55",
    reviews: 115,
    link: "#",
  },
  {
    image: productTwo,
    name: "Ceramic Coffee Mug",
    price: "$40.00",
    reviews: 55,
    link: "#",
  },
  {
    image: productThree,
    name: "Modern Coffee Mug",
    price: "$80.00",
    reviews: 8,
    link: "#",
  },
  {
    image: productFour,
    name: "Metal Table Lamp",
    price: "$49.55",
    reviews: 49,
    link: "#",
  },
  {
    image: productFive,
    name: "Rubik's Cube",
    price: "$25.55",
    reviews: 35,
    link: "#",
  },
  {
    image: productSix,
    name: "Table Showpiece",
    price: "$85.55",
    reviews: 97,
    link: "#",
  },
];

const ProductGrids = () => {
  return (
    <>
      <section className="bg-white py-20 dark:bg-dark lg:py-[120px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-[70px]">
                <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px]">
                  Trending Products
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[10px] border border-stroke dark:border-dark-3">
            <div className="flex flex-wrap">
              {productItems.map((item, index) => (
                <div
                  key={index}
                  className="odd:md-border-r w-full border-[#e7e7e7] px-4 dark:border-dark-3 md:w-1/2 lg:w-1/3 lg:border-r not-last:border-b lg:nth-[2n]:border-r"
                >
                  <div className="mb-10 mt-6">
                    <div className="mb-5 overflow-hidden rounded-md">
                      <img src={item.image} alt="product" className="w-full" />
                    </div>
                    <div>
                      <span className="mb-2 block text-base font-semibold text-dark dark:text-white sm:text-xl md:text-lg 2xl:text-xl">
                        {item.price}
                      </span>
                      <h3>
                        <Link
                          to={item.link}
                          className="mb-2 block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-2xl md:text-lg 2xl:text-2xl"
                        >
                          {item.title}
                        </Link>
                      </h3>
                      <p className="flex items-center text-base font-medium text-body-color dark:text-dark-6">
                        {[...Array(4).keys()].map((index) => (
                          <span className="pr-1" key={index}>
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_1833_519)">
                                <path
                                  d="M14.925 5.975L10.4 5.275L8.34996 0.975C8.19996 0.675 7.79996 0.675 7.64996 0.975L5.59996 5.3L1.09996 5.975C0.77496 6.025 0.64996 6.45 0.89996 6.675L4.17496 10.05L3.39996 14.775C3.34996 15.1 3.67496 15.375 3.97496 15.175L8.04996 12.95L12.1 15.175C12.375 15.325 12.725 15.075 12.65 14.775L11.875 10.05L15.15 6.675C15.35 6.45 15.25 6.025 14.925 5.975Z"
                                  fill="#FFA645"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_1833_519">
                                  <rect width="16" height="16" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </span>
                        ))}

                        {[...Array(1).keys()].map((index) => (
                          <span className="pr-2.5" key={index}>
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_1833_525)">
                                <path
                                  d="M4.02502 15.55C3.80002 15.55 3.57502 15.475 3.40002 15.35C3.05002 15.1 2.85002 14.65 2.92502 14.225L3.57502 10.2L0.77502 7.32501C0.47502 7.02501 0.37502 6.57501 0.50002 6.15001C0.62502 5.75001 0.97502 5.45001 1.37502 5.40001L5.25002 4.77501L7.00002 1.10001C7.20002 0.700012 7.57502 0.450012 8.00002 0.450012C8.42502 0.450012 8.82502 0.700012 9.00002 1.10001L10.75 4.75001L14.6 5.35001C15 5.42501 15.35 5.70001 15.475 6.10001C15.625 6.52501 15.5 6.97501 15.2 7.27501L12.425 10.175L13.075 14.225C13.15 14.675 12.975 15.1 12.6 15.35C12.25 15.6 11.825 15.625 11.45 15.425L8.00002 13.55L4.55002 15.425C4.40002 15.525 4.20002 15.55 4.02502 15.55ZM1.57502 6.50001C1.57502 6.50001 1.57502 6.52501 1.57502 6.55001L4.50002 9.55001C4.67502 9.72501 4.75002 10 4.72502 10.25L4.05002 14.425C4.05002 14.425 4.05002 14.425 4.05002 14.45L7.65002 12.5C7.87502 12.375 8.15002 12.375 8.40002 12.5L12 14.45C12 14.45 12 14.45 12 14.425L11.325 10.225C11.275 9.97501 11.375 9.72501 11.55 9.52501L14.475 6.52501C14.5 6.50001 14.475 6.47501 14.475 6.47501L10.45 5.85001C10.2 5.80001 9.97502 5.65001 9.87502 5.40001L8.00002 1.60001L6.20002 5.42501C6.10002 5.65001 5.87502 5.82501 5.62502 5.87501L1.57502 6.50001Z"
                                  fill="#FFA645"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_1833_525">
                                  <rect width="16" height="16" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </span>
                        ))}

                        <span className="pl-2">{item.reviews}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductGrids;
