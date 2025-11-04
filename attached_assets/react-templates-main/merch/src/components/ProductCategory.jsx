import productOne from "../assets/ecom-images/categories/category-04/image-01.jpg";
import productTwo from "../assets/ecom-images/categories/category-04/image-02.jpg";
import productThree from "../assets/ecom-images/categories/category-04/image-03.jpg";
import { Link } from "react-router-dom";

const productItems = [
  {
    image: productOne,
    link: "#",
    title: "Beautiful Furniture",
    subtitle: "#House",
  },
  {
    image: productTwo,
    link: "#",
    title: "Accessories Collection",
    subtitle: "#Accessories",
  },
  {
    image: productThree,
    link: "#",
    title: "Kitchen Set Collection",
    subtitle: "#Office",
  },
];

const ProductCategory = () => {
  return (
    <>
      <section className="bg-white pt-[90px] dark:bg-dark">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap items-end">
            <div className="w-full px-4 lg:w-2/3">
              <div className="mb-[60px] max-w-[510px] lg:mb-20">
                <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white md:text-[38px] md:leading-[45px]">
                  Shop By Category
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/3">
              <div className="mb-[60px] lg:mb-20 lg:text-right">
                <Link
                  to="#"
                  className="inline-flex items-center justify-center rounded-md border border-primary px-7 py-3 text-center text-base text-primary transition hover:border-primary hover:bg-primary hover:text-white dark:border-white dark:text-white"
                >
                  Explore All
                </Link>
              </div>
            </div>
          </div>

          <div className="-mx-4 flex flex-wrap">
            {productItems.map((item, index) => (
              <div key={index} className="w-full px-4 md:w-1/2 lg:w-1/3">
                <div className="mb-10 rounded-xl border border-stroke bg-white p-3 dark:border-dark-3 dark:bg-dark-2">
                  <Link to={item.link} className="block">
                    <img
                      src={item.image}
                      alt="category"
                      className="w-full rounded-lg"
                    />
                  </Link>
                  <div className="px-3 pb-3 pt-6">
                    <span className="mb-1 text-base font-medium text-body-color dark:text-dark-6">
                      {item.subtitle}
                    </span>
                    <Link
                      to={item.link}
                      className="block text-lg font-semibold text-dark hover:text-primary dark:text-white sm:text-2xl md:text-xl lg:text-lg xl:text-2xl"
                    >
                      {item.title}
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

export default ProductCategory;
