import productOne from "../assets/ecom-images/products/products-grids-07/image-01.jpg";
import productTwo from "../assets/ecom-images/products/products-grids-07/image-02.jpg";
import productThree from "../assets/ecom-images/products/products-grids-07/image-03.jpg";
import productFour from "../assets/ecom-images/products/products-grids-07/image-04.jpg";
import { Link } from "react-router-dom";

const productItems = [
  {
    image: productOne,
    name: "T-shirt for Men's",
    originalPrice: "$50.00",
    price: "$24.00",
    link: "/product-details",
  },
  {
    image: productTwo,
    name: "T-shirt for Women's",
    price: "$39.00",
    link: "/product-details",
  },
  {
    image: productThree,
    name: "Men's Sneakers",
    originalPrice: "$89.00",
    price: "$78.00",
    link: "/product-details",
  },
  {
    image: productFour,
    name: "Fashionable Bag women",
    price: "$159.00",
    link: "/product-details",
  },
];

const ProductGrids = () => {
  return (
    <>
      <section className="py-20 bg-white dark:bg-dark">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            {productItems.map((item, index) => (
              <div
                key={index}
                className="w-full px-4 sm:w-1/2 lg:w-1/3 xl:w-1/4"
              >
                <div className="mb-10">
                  <div className="relative mb-5 overflow-hidden rounded-sm">
                    <img src={item.image} alt="product" className="w-full" />
                  </div>
                  <div className="text-center">
                    <h3>
                      <Link
                        to={item.link}
                        className="block mb-2 text-lg font-semibold text-dark hover:text-primary xs:text-xl sm:text-lg md:text-xl dark:text-white"
                      >
                        {item.name}
                      </Link>
                    </h3>
                    <p className="mb-4 text-base font-semibold text-dark dark:text-white">
                      {item.originalPrice && (
                        <span className="pr-1 line-through text-body-color dark:text-dark-6">
                          {" "}
                          {item.originalPrice}{" "}
                        </span>
                      )}
                      {item.price}
                    </p>
                    <Link
                      to={item.link}
                      className="border-dark-2 hover:bg-dark-2 inline-flex items-center justify-center rounded-md border px-5 py-[9px] text-center text-base font-medium transition hover:text-white dark:text-white"
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductGrids;
