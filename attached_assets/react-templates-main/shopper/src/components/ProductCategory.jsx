import productOne from "../assets/ecom-images/categories/category-03/image-01.jpg";
import productTwo from "../assets/ecom-images/categories/category-03/image-02.jpg";
import productThree from "../assets/ecom-images/categories/category-03/image-03.jpg";
import { Link } from "react-router-dom";

const productItems = [
  {
    bigImage: true,
    image: productOne,
    link: "#",
    title: "Express Your Beautiful Life Through Furniture",
    subtitle: "#House",
  },
  {
    image: productTwo,
    link: "#",
    title: "Discover Our Accessories Collection",
    subtitle: "#Accessories",
  },
  {
    image: productThree,
    link: "#",
    title: "Make Your Workspace More Comfortable",
    subtitle: "#Office",
  },
];

const ProductCategory = () => {
  return (
    <>
      <section className="bg-white py-20 dark:bg-dark">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            {productItems.map(
              (item, index) =>
                item.bigImage && (
                  <div key={index} className="w-full px-4 lg:w-1/2">
                    <div className="relative mb-10 sm:h-[500px] lg:h-[440px] xl:h-[500px]">
                      <img
                        src={item.image}
                        alt="category"
                        className="h-full w-full object-cover object-center"
                      />
                      <div className="absolute left-0 top-0 h-full w-full px-6 py-10 sm:px-10">
                        <div className="max-w-[400px]">
                          <span className="mb-3 block text-base font-medium text-body-color">
                            {item.subtitle}
                          </span>

                          <Link
                            to={item.link}
                            className="text-xl font-semibold text-dark lg:text-2xl xl:text-[28px] xl:leading-10"
                          >
                            {item.title}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ),
            )}

            <div className="w-full px-4 lg:w-1/2">
              {productItems.map(
                (item, index) =>
                  !item.bigImage && (
                    <div
                      key={index}
                      className="relative mb-10 h-[180px] sm:h-[230px] lg:h-[200px] xl:h-[230px]"
                    >
                      <img
                        src={item.image}
                        alt="category"
                        className="h-full w-full object-cover object-center"
                      />
                      <div className="absolute left-0 top-0 h-full w-full px-6 py-10 sm:px-10">
                        <div className="max-w-[400px]">
                          <span className="mb-3 block text-base font-medium text-body-color">
                            {item.subtitle}
                          </span>

                          <Link
                            to={item.link}
                            className="text-xl font-semibold text-dark lg:text-2xl xl:text-[28px] xl:leading-10"
                          >
                            {item.title}
                          </Link>
                        </div>
                      </div>
                    </div>
                  ),
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductCategory;
