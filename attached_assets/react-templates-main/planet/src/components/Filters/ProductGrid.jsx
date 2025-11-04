import productOne from "../../assets/ecom-images/products/product-carousel-02/image-01.jpg";
import productTwo from "../../assets/ecom-images/products/product-carousel-02/image-02.jpg";
import productThree from "../../assets/ecom-images/products/product-carousel-02/image-03.jpg";
import productFour from "../../assets/ecom-images/products/product-carousel-02/image-04.jpg";
import Pagination from "./Pagination.jsx";
import { Link } from "react-router-dom";

const productList = [
  {
    hotItem: true,
    image: productOne,
    link: "/product-details",
    title: "Stylish Women Bag",
    price: "£75.00",
    button: "Add to Cart",
  },
  {
    discount: true,
    image: productTwo,
    link: "/product-details",
    title: "Stylish Watch For Man",
    price: "£150.00",
    priceBeforeDiscount: "£75.00",
    button: "Add to Cart",
  },
  {
    image: productThree,
    link: "/product-details",
    title: "Polo T-shirt For Man",
    price: "£25.00",
    button: "Add to Cart",
  },
  {
    newItem: true,
    image: productFour,
    link: "/product-details",
    title: "Luxury Wallet For Male",
    price: "£95.00",
    button: "Add to Cart",
  },
  {
    discount: true,
    image: productTwo,
    link: "/product-details",
    title: "Stylish Watch For Man",
    price: "£75.00",
    priceBeforeDiscount: "£150.00",
    button: "Add to Cart",
  },
  {
    image: productFour,
    link: "/product-details",
    title: "Luxury Wallet For Male",
    price: "£95.00",
    button: "Add to Cart",
  },
];

const ProductGrid = () => {
  return (
    <>
      <div className="flex flex-wrap -mx-4">
        {productList.map((item, index) => (
          <div key={index} className="w-full h-full px-4 md:w-1/2 xl:w-1/3">
            <div className="mb-10 overflow-hidden bg-white rounded-lg shadow-1 dark:bg-dark-2 dark:shadow-box-dark">
              <div className="relative">
                <img src={item.image} alt="product" className="w-full" />
                {item.discount && (
                  <span className="absolute inline-flex items-center justify-center px-3 py-1 text-sm font-semibold text-white rounded-sm bg-primary top-5 left-5">
                    -50%
                  </span>
                )}
                {item.newItem && (
                  <span className="absolute inline-flex items-center justify-center px-3 py-1 text-sm font-semibold text-white rounded-sm bg-secondary top-5 left-5">
                    New
                  </span>
                )}
                {item.hotItem && (
                  <span className="absolute inline-flex items-center justify-center px-3 py-1 text-sm font-semibold text-white bg-red-600 rounded-sm top-5 left-5">
                    Hot
                  </span>
                )}
              </div>
              <div className="px-5 pt-6 pb-8 text-center">
                <h3>
                  <Link
                    to={item.link}
                    className="text-dark hover:text-primary xs:text-xl mb-[5px] block text-lg font-semibold dark:text-white"
                  >
                    {item.title}
                  </Link>
                </h3>
                <p className="text-lg font-medium text-dark dark:text-white">
                  {item.priceBeforeDiscount && (
                    <span>
                      <span className="text-base line-through text-secondary-color dark:text-dark-6">
                        {item.price}
                        {"  "}
                      </span>
                      {item.priceBeforeDiscount}
                    </span>
                  )}
                  {!item.priceBeforeDiscount && item.price}
                </p>
                <div className="flex items-center justify-center gap-px pt-4 pb-6">
                  {[...Array(4).keys()].map((index) => (
                    <span key={index}>
                      <svg
                        width="20"
                        height="20"
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

                  <span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.6562 7.46875L12.9999 6.59375L10.4375 1.21875C10.25 0.84375 9.74995 0.84375 9.56245 1.21875L6.99995 6.625L1.37495 7.46875C0.9687 7.53125 0.81245 8.0625 1.12495 8.34375L5.2187 12.5625L4.24995 18.4688C4.18745 18.875 4.5937 19.2188 4.9687 18.9688L10.0624 16.1875L15.1249 18.9688C15.4687 19.1562 15.9062 18.8438 15.8124 18.4688L14.8437 12.5625L18.9374 8.34375C19.1874 8.0625 19.0624 7.53125 18.6562 7.46875Z"
                        stroke="#FFA645"
                      />
                    </svg>
                  </span>
                </div>
                <div className="text-center">
                  <button className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white rounded-md bg-primary hover:bg-dark px-7">
                    {item.button}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="w-full px-4 text-center">
          <Pagination totalPages={10} />
        </div>
      </div>
    </>
  );
};

export default ProductGrid;
