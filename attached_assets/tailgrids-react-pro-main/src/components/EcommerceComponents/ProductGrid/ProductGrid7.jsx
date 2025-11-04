import React from "react";

const ProductGrid7 = () => {
  return (
    <section className="bg-white py-20 dark:bg-dark lg:py-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <SingleProduct
            img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/products-grids-07/image-01.jpg"
            link="/#"
            title="T-shirt for Men's"
            prevPrice="$50.00"
            price="$24.00"
            buttonLink="/#"
            button="Shop Now"
          />
          <SingleProduct
            img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/products-grids-07/image-02.jpg"
            link="/#"
            title="T-shirt for Women's"
            price="$39.00"
            buttonLink="/#"
            button="Shop Now"
          />
          <SingleProduct
            img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/products-grids-07/image-03.jpg"
            link="/#"
            title="Men's Sneakers"
            prevPrice="$89.00"
            price="$78.00"
            buttonLink="/#"
            button="Shop Now"
          />
          <SingleProduct
            img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/products-grids-07/image-04.jpg"
            link="/#"
            title="Fashionable Bag women"
            price="$159.00"
            buttonLink="/#"
            button="Shop Now"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductGrid7;

const SingleProduct = ({
  img,
  link,
  title,
  price,
  prevPrice,
  buttonLink,
  button,
}) => {
  return (
    <div className="w-full px-4 sm:w-1/2 lg:w-1/3 xl:w-1/4">
      <div className="mb-10">
        <div className="relative mb-5 overflow-hidden rounded-sm">
          <img src={img} alt="product" className="w-full" />
        </div>
        <div className="text-center">
          <h3>
            <a
              href={link}
              className="mb-2 block text-lg font-semibold text-dark hover:text-primary dark:text-white xs:text-xl sm:text-lg md:text-xl"
            >
              {title}
            </a>
          </h3>
          <p className="mb-4 text-base font-semibold text-dark dark:text-white">
            {prevPrice && (
              <span className="pr-1 text-body-color line-through dark:text-dark-6">
                {" "}
                {prevPrice}{" "}
              </span>
            )}
            {price}
          </p>
          <a
            href={buttonLink}
            className="inline-flex items-center justify-center rounded-md border border-dark px-5 py-2 text-center text-sm font-semibold text-dark transition hover:bg-dark hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-dark"
          >
            {button}
          </a>
        </div>
      </div>
    </div>
  );
};
