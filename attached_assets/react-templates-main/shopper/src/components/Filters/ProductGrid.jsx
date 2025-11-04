import productOne from "../../assets/ecom-images/products/product-carousel-05/image-01.jpg";
import productTwo from "../../assets/ecom-images/products/product-carousel-05/image-02.jpg";
import productThree from "../../assets/ecom-images/products/product-carousel-05/image-03.jpg";
import { Link } from "react-router-dom";

const productList = [
  {
    image: productOne,
    link: "/product-details",
    title: "Apple Watch Series 7",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit enim luctus et lorem.",
    price: "$299",
    review: "55",
  },
  {
    image: productTwo,
    link: "/product-details",
    title: "iPhone 13 Pro Max",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit enim luctus et lorem.",
    price: "$999",
    review: "32",
  },
  {
    image: productThree,
    link: "/product-details",
    title: "Macbook Pro 13” M1 2020",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit enim luctus et lorem.",
    price: "$1299",
    review: "15",
  },
  {
    image: productTwo,
    link: "/product-details",
    title: "iPhone 13 Pro Max",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit enim luctus et lorem.",
    price: "$999",
    review: "32",
  },
];

const ProductGrid = () => {
  return (
    <>
      {productList.map((item, index) => (
        <div key={index} className="w-full px-4 md:w-1/2">
          <div className="border-stroke shadow-1 dark:border-dark-3 dark:bg-dark-2 dark:shadow-box-dark mb-10 overflow-hidden rounded-lg border bg-white">
            <div>
              <img src={item.image} alt="product" className="w-full" />
            </div>
            <div className="p-6">
              <Link
                to={item.link}
                className="text-dark hover:text-primary mb-3 block text-lg font-semibold xl:text-xl dark:text-white"
              >
                {item.title}
              </Link>
              <p className="text-body-color dark:text-dark-6 text-base">
                {item.details}
              </p>
            </div>
            <div className="border-stroke dark:border-dark-3 flex justify-between border-t">
              <div className="xs:px-4 flex items-center px-3 py-4 lg:px-3 xl:px-4">
                {[...Array(5).keys()].map((index) => (
                  <span className="mr-[2px]" key={index}>
                    <svg
                      className="xs:h-4 xs:w-4 h-3 w-3 sm:h-5 sm:w-5 lg:h-3 lg:w-3 xl:h-5 xl:w-5"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.6562 7.46875L12.9999 6.59375L10.4375 1.21875C10.25 0.84375 9.74995 0.84375 9.56245 1.21875L6.99995 6.625L1.37495 7.46875C0.9687 7.53125 0.81245 8.0625 1.12495 8.34375L5.2187 12.5625L4.24995 18.4688C4.18745 18.875 4.5937 19.2188 4.9687 18.9688L10.0624 16.1875L15.1249 18.9688C15.4687 19.1562 15.9062 18.8438 15.8124 18.4688L14.8437 12.5625L18.9374 8.34375C19.1874 8.0625 19.0624 7.53125 18.6562 7.46875Z"
                        fill="#FFA645"
                      />
                    </svg>
                  </span>
                ))}

                <span className="text-body-color pl-2 text-sm font-semibold">
                  ({item.review}) Reviews
                </span>
              </div>
              <div className="border-stroke dark:border-dark-3 xs:px-4 border-l px-3 py-4 lg:px-3 xl:px-4">
                <span className="text-body-color dark:text-dark-6 text-sm font-medium">
                  {item.price}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductGrid;
