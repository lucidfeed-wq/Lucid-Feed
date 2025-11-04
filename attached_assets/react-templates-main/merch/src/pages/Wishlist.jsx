import Breadcrumb from "../components/Breadcrumb.jsx";

import productOne from "../assets/ecom-images/wishlists/wishlist-03/image-01.jpg";
import productTwo from "../assets/ecom-images/wishlists/wishlist-03/image-02.jpg";
import productThree from "../assets/ecom-images/wishlists/wishlist-03/image-03.jpg";
import productFour from "../assets/ecom-images/wishlists/wishlist-03/image-04.jpg";
import { Link } from "react-router-dom";

const wishlistItems = [
  {
    name: "Warm Sweatshirt",
    image: productOne,
    link: "/product-details",
    color: "White",
    price: "$24.99",
  },
  {
    name: "Cold Sweatshirt",
    image: productTwo,
    link: "/product-details",
    color: "Maroon",
    price: "$39.00",
  },
  {
    name: "Women's Sweatshirt",
    image: productThree,
    link: "/product-details",
    color: "Gray",
    price: "$55.99",
  },
  {
    name: "Green Sweatshirt",
    image: productFour,
    link: "/product-details",
    color: "Green",
    price: "$85.00",
  },
];

const Wishlist = () => {
  return (
    <>
      <Breadcrumb pageName="Wishlist" />

      <section className="dark:bg-dark bg-white pt-24 pb-[120px]">
        <div className="container mx-auto">
          <div className="flex -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[575px] text-center lg:mb-[70px]">
                <h2 className="text-dark mb-[6px] text-3xl font-semibold sm:text-4xl dark:text-white">
                  Your Favorite Items
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  There are 04 products in this list
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap -mx-4">
            {wishlistItems.map((item, index) => (
              <div
                key={index}
                className="w-full px-4 sm:w-1/2 lg:w-1/3 xl:w-1/4"
              >
                <div className="mb-10">
                  <Link to={item.link} className="block mb-4">
                    <img src={item.image} alt="product" className="w-full" />
                  </Link>
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-body-color dark:text-dark-5 mb-[10px] block text-base font-medium">
                        {item.color}
                      </span>
                      <span className="text-dark mb-[10px] block text-base font-semibold dark:text-white">
                        {item.price}
                      </span>
                    </div>
                    <h3>
                      <Link
                        to={item.link}
                        className="block mb-5 text-lg font-semibold text-dark hover:text-primary md:text-xl dark:text-white"
                      >
                        {item.name}
                      </Link>
                    </h3>

                    <div className="space-y-3">
                      <Link
                        to="#"
                        className="bg-primary hover:bg-blue-dark flex w-full items-center justify-center border border-transparent px-10 py-[9px] text-center text-base font-medium text-white"
                      >
                        Checkout
                      </Link>
                      <Link
                        to="#"
                        className="border-primary text-primary hover:bg-primary flex w-full items-center justify-center border px-10 py-[9px] text-center text-base font-medium transition-all hover:text-white"
                      >
                        Remove Item
                      </Link>
                    </div>
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

export default Wishlist;
