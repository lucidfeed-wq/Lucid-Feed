import React from "react";

const ECommerceHero4 = () => {
  return (
    <section className="pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-8/12">
            <div className="relative mb-8 h-[370px] md:h-[480px]">
              <img
                src="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/headers/header-04/image-01.jpg"
                alt="product"
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute left-0 top-0 flex h-full w-full items-center px-8 md:px-12">
                <div className="max-w-[420px]">
                  <h3>
                    <a
                      href="/#"
                      className="mb-5 block text-2xl font-bold text-dark hover:text-primary sm:text-4xl"
                    >
                      Mega Sale Up To 50% Off For All
                    </a>
                  </h3>
                  <p className="mb-9 text-base text-body-color">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum ornare vestibulum mollis. Nam vitae augue purus.
                    Integer ac accumsan nunc.
                  </p>
                  <a
                    href="/#"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-[13px] text-center text-base font-medium text-white hover:bg-blue-dark"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-4/12">
            <HeroSmallItem
              img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/headers/header-04/image-02.jpg"
              title="Summer Travel Collection"
              button="Discover Now"
              link="/#"
            />
            <HeroSmallItem
              img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/headers/header-04/image-03.jpg"
              title="Get 30% Off On iPhone"
              button="Shop Now"
              link="/#"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ECommerceHero4;

const HeroSmallItem = ({ img, link, title, button }) => {
  return (
    <div className="relative mb-8 h-[223px]">
      <img
        src={img}
        alt="product"
        className="h-full w-full object-cover object-center"
      />
      <div className="absolute left-0 top-0 flex h-full w-full items-end justify-end p-6 sm:p-9">
        <div className="max-w-[180px] text-right">
          <h3>
            <a
              href={link}
              className="mb-3 block text-xl font-bold text-dark hover:text-primary xl:text-2xl"
            >
              {title}
            </a>
          </h3>
          <a
            href={link}
            className="text-base font-medium text-dark hover:text-primary"
          >
            {button}
          </a>
        </div>
      </div>
    </div>
  );
};
