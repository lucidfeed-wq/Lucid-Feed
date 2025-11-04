import React from "react";

const ProductGrid4 = () => {
  return (
    <section className="bg-white py-20 dark:bg-dark lg:py-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <SingleProduct
            img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/products-grids-04/image-01.jpg"
            link="/#"
            color="Grey"
            title="Leather Court Shoes"
            price="$75.00"
            prevPrice="$150.00"
          >
            <InputGroup name="one" id="1" color="[#c7c7c7]" />
            <InputGroup name="one" id="2" color="[#DAB840]" />
            <InputGroup name="one" id="3" color="secondary" />
          </SingleProduct>
          <SingleProduct
            img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/products-grids-04/image-02.jpg"
            link="/#"
            color="White"
            title="Dell Inspiron 15"
            price="$75.00"
            reviews="14 reviews"
          >
            <InputGroup name="two" id="4" color="black" />
            <InputGroup name="two" id="5" color="[#c7c7c7]" />
            <InputGroup name="two" id="6" color="red-600" />
          </SingleProduct>
          <SingleProduct
            img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/products-grids-04/image-03.jpg"
            link="/#"
            color="Space Grey"
            title="HP Probook 450"
            price="$1200.00"
          >
            <InputGroup name="three" id="7" color="black" />
            <InputGroup name="three" id="8" color="[#c7c7c7]" />
          </SingleProduct>
          <SingleProduct
            img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/products-grids-04/image-04.jpg"
            link="/#"
            color="Black"
            title="HP Probook 450"
            price="$1299.00"
            prevPrice="$259.00"
          >
            <InputGroup name="four" id="9" color="black" />
            <InputGroup name="four" id="10" color="[#54B6ED]" />
            <InputGroup name="four" id="11" color="secondary" />
          </SingleProduct>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid4;

const SingleProduct = ({
  img,
  link,
  title,
  price,
  prevPrice,
  color,
  children,
}) => {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3 xl:w-1/4">
      <div className="mb-10 rounded-md border-[.5px] border-[#e7e7e7] bg-white p-[10px] shadow-card dark:border-dark-3 dark:bg-dark-3">
        <a href={link} className="block">
          <img src={img} alt="product" className="w-full" />
        </a>
        <div className="pb-6 pt-5 text-center">
          <span className="text-sm font-medium text-body-color dark:text-dark-6">
            {" "}
            {color}{" "}
          </span>
          <div>
            <h3>
              <a
                href={link}
                className="mb-2 block text-base font-semibold text-dark hover:text-primary dark:text-white"
              >
                {title}
              </a>
            </h3>
            <p className="mb-6 text-lg font-semibold text-dark dark:text-white">
              {price}
              <span className="pl-2 text-body-color line-through dark:text-dark-6">
                {" "}
                {prevPrice}{" "}
              </span>
            </p>
          </div>
          <div className="flex items-center justify-center space-x-2">
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
        className={`flex h-4 w-4 cursor-pointer items-center justify-center rounded-full border-2 border-${color}`}
      >
        <span
          className={`absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-${color}`}
        ></span>
        <span className="hidden border-[#c7c7c7] bg-[#c7c7c7]"></span>
        <span className="hidden border-[#DAB840] bg-[#DAB840]"></span>
        <span className="hidden border-[#54B6ED] bg-[#54B6ED]"></span>
      </label>
    </div>
  );
};
