import React from "react";

const ECommerceFooter5 = () => {
  return (
    <footer className="bg-white pt-[100px] dark:bg-dark">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
            <div className="mb-16">
              <h3 className="mb-9 text-xl font-bold uppercase text-dark dark:text-white">
                CONTACT INFO
              </h3>
              <h4 className="mb-2 text-base font-semibold text-dark dark:text-white">
                ADDRESS:
              </h4>
              <p className="mb-5 text-base text-body-color dark:text-dark-6">
                Shop 009A, Level 4, Block A, Demo Park, New York, USA
              </p>
              <h4 className="mb-2 text-base font-semibold text-dark dark:text-white">
                PHONE:
              </h4>
              <p className="mb-5 text-base text-body-color dark:text-dark-6">
                +056 9004 6743 883
              </p>
            </div>
          </div>

          <LinkGroup header="QUICK LINKS">
            <ul className="space-y-3">
              <NavLink link="/#" name="Legal & Privacy" />
              <NavLink link="/#" name="Contact" />
              <NavLink link="/#" name="Gift Card" />
              <NavLink link="/#" name="Customer Service " />
              <NavLink link="/#" name="My Account" />
            </ul>
          </LinkGroup>
          <LinkGroup header="POPULAR TAGS">
            <ul className="-mr-3 flex flex-wrap items-center">
              <NavTag link="/#" name="Fashion" />
              <NavTag link="/#" name="Clothings" />
              <NavTag link="/#" name="Shirt" />
              <NavTag link="/#" name="Shoes" />
              <NavTag link="/#" name="Sweater" />
              <NavTag link="/#" name="Bag" />
              <NavTag link="/#" name="Table Lamp" />
              <NavTag link="/#" name="Smart Watch" />
              <NavTag link="/#" name="Laptops" />
              <NavTag link="/#" name="Accessories" />
            </ul>
          </LinkGroup>

          <div className="w-full px-4 md:w-1/2 lg:w-6/12 xl:w-4/12">
            <div className="mb-16">
              <h3 className="mb-9 text-xl font-bold uppercase text-dark dark:text-white">
                LATEST PRODUCTS
              </h3>

              <div className="space-y-5">
                <ProductsItem
                  link="/#"
                  img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/footers/footer-05/image-01.jpg"
                  title="Trendy Yellow T-shirt"
                  subtitle="Lorem Ipsum is simply dummy."
                  price="$35.00"
                />
                <ProductsItem
                  link="/#"
                  img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/footers/footer-05/image-02.jpg"
                  title="Black T-shirt for Men"
                  subtitle="Lorem Ipsum is simply dummy."
                  price="$59.00"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-stroke py-6 text-center dark:border-dark-3">
          <p className="text-base font-medium text-body-color dark:text-dark-6">
            © {new Date().getFullYear()} TailGrids. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ECommerceFooter5;

const LinkGroup = ({ children, header }) => {
  return (
    <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-2/12 lg:nth-3:w-4/12 xl:nth-3:w-3/12">
      <div className="mb-16">
        <h3 className="mb-9 text-xl font-bold uppercase text-dark dark:text-white">
          {header}
        </h3>
        {children}
      </div>
    </div>
  );
};

const NavLink = ({ name, link }) => {
  return (
    <li>
      <a
        href={link}
        className="text-base text-body-color hover:text-primary dark:text-dark-6"
      >
        {name}
      </a>
    </li>
  );
};

const NavTag = ({ link, name }) => {
  return (
    <li className="mb-3 mr-3">
      <a
        href={link}
        className="inline-block rounded-sm bg-primary/[0.08] px-[14px] py-[5px] text-base text-dark transition-all hover:bg-primary hover:text-white dark:bg-dark-2 dark:text-white"
      >
        {name}
      </a>
    </li>
  );
};

const ProductsItem = ({ img, link, title, subtitle, price }) => {
  return (
    <div className="flex">
      <div className="mr-5 h-[60px] w-full max-w-[60px] overflow-hidden rounded-sm">
        <img
          src={img}
          alt="blog"
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div>
        <a
          href={link}
          className="block text-base font-medium text-dark hover:text-primary dark:text-white"
        >
          {title}
        </a>
        <p className="mb-1 text-sm text-body-color dark:text-dark-6">
          {subtitle}
        </p>
        <p className="text-sm font-medium text-dark dark:text-white">{price}</p>
      </div>
    </div>
  );
};
