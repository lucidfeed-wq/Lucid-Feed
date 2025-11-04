import { Link } from "react-router-dom";

import productOne from "../assets/ecom-images/products/recent-products-03/product-01.jpg";
import productTwo from "../assets/ecom-images/products/recent-products-03/product-02.jpg";

const collections = [
  {
    imageSrc: productOne,
    subtitle: "Start From $50",
    title: "New Arrival From Creative Clock Collections",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet molestie nunc. Vestibulum tempus justo et venenatis tempus. Nulla tincidunt,",
    link: "#",
  },
  {
    imageSrc: productTwo,
    subtitle: "Start From $49",
    title: "New Summer Collections For Man's Fashion.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet molestie nunc. Vestibulum tempus justo et venenatis tempus. Nulla tincidunt,",
    link: "j#",
  },
];

const RecentProduct = () => {
  return (
    <>
      <section className="pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
        <div className="container mx-auto">
          {collections.map((collection, index) => (
            <div
              key={index}
              className="group -mx-4 mb-24 flex flex-wrap items-center justify-center last:mb-5 sm:odd:flex-row sm:even:flex-row-reverse"
            >
              <div className="w-full px-4 lg:w-1/2 2xl:w-5/12">
                <div className="mb-12 max-w-[465px] lg:mb-0 lg:group-even:ml-auto">
                  <span className="mb-4 block text-lg font-semibold text-primary md:text-2xl">
                    {collection.subtitle}
                  </span>
                  <h2 className="mb-5 text-2xl font-semibold leading-tight! text-dark dark:text-white xl:text-4xl">
                    {collection.title}
                  </h2>
                  <p className="mb-9 text-base text-body-color dark:text-dark-6">
                    {collection.description}
                  </p>
                  <Link
                    to={collection.link}
                    className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-[13px] text-center text-base font-medium text-white hover:bg-blue-dark"
                  >
                    View All Items
                  </Link>
                </div>
              </div>
              <div className="w-full px-4 lg:w-1/2 2xl:w-5/12">
                <div>
                  <img
                    src={collection.imageSrc}
                    alt="Recent Product"
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default RecentProduct;
