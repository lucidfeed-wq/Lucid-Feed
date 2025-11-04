import React from "react";

const ProductGrid2 = () => {
  return (
    <section className="bg-white py-20 dark:bg-dark lg:py-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <SingleProduct
            img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/products-grids-02/image-01.jpg"
            link="/#"
            title="Leather Court Shoes"
            price="$1299.00"
          >
            <InputGroup name="one" id="1" color="black" />
            <InputGroup name="one" id="2" color="body-color" />
            <InputGroup name="one" id="3" color="[#e7e7e7]" />
          </SingleProduct>
          <SingleProduct
            img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/products-grids-02/image-02.jpg"
            link="/#"
            title="Dell Inspiron 15"
            price="$1299.00"
            reviews="14 reviews"
          >
            <InputGroup name="two" id="4" color="black" />
            <InputGroup name="two" id="5" color="body-color" />
            <InputGroup name="two" id="6" color="[#e7e7e7]" />
          </SingleProduct>
          <SingleProduct
            img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/products-grids-02/image-03.jpg"
            link="/#"
            title="HP Probook 450"
            price="$1299.00"
          >
            <InputGroup name="three" id="7" color="black" />
            <InputGroup name="three" id="8" color="body-color" />
            <InputGroup name="three" id="9" color="[#e7e7e7]" />
          </SingleProduct>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid2;

const SingleProduct = ({ img, link, title, price, children }) => {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="mb-10 overflow-hidden rounded-lg border border-[#e7e7e7] bg-white dark:border-dark-3 dark:bg-dark-3">
        <a href={link} className="block">
          <img src={img} alt="product" className="w-full" />
        </a>
        <div className="justify-between p-6 sm:flex md:block xl:flex">
          <div>
            <h3>
              <a
                href={link}
                className="block text-lg font-semibold text-dark hover:text-primary dark:text-white sm:text-2xl md:text-xl 2xl:text-2xl"
              >
                {title}
              </a>
            </h3>
            <p className="flex items-center text-base font-semibold text-body-color dark:text-dark-6 sm:text-xl md:text-lg 2xl:text-xl">
              {price}
            </p>
          </div>
          <div className="mt-5 flex space-x-2 sm:mt-0 md:mt-5 xl:mt-0">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

const InputGroup = ({ id, color, name }) => {
  return (
    <div className="relative">
      <input type="radio" name={name} id={id} className="color sr-only" />
      <label
        htmlFor={id}
        className={`relative flex h-4 w-4 cursor-pointer items-center justify-center rounded-full border-2 border-${color}`}
      >
        <span
          className={`absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-${color}`}
        ></span>
        <span className="hidden border-[#e7e7e7] bg-[#e7e7e7]"></span>
      </label>
    </div>
  );
};
