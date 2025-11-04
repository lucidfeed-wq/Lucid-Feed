import React from "react";

const Wishlist3 = () => {
  return (
    <section className="bg-gray pb-12 pt-20 lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[575px] text-center">
              <h2 className="mb-4 text-3xl font-semibold text-black sm:text-4xl">
                Your Favorite Items
              </h2>
              <p className="text-base font-medium text-body-color md:text-lg">
                There are 04 products in this list
              </p>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap">
          <WishlistItem
            img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/wishlists/wishlist-03/image-01.jpg"
            link="/#"
            color="White"
            title="Warm Sweatshirt"
            price="$24.99"
            button="Checkout"
            button2="Checkout"
          />
          <WishlistItem
            img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/wishlists/wishlist-03/image-02.jpg"
            link="/#"
            color="Maroon"
            title="Cold Sweatshirt"
            price="$39.00"
            button="Checkout"
            button2="Checkout"
          />
          <WishlistItem
            img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/wishlists/wishlist-03/image-03.jpg"
            link="/#"
            color="Gray"
            title="Women's Sweatshirt"
            price="$55.99"
            button="Checkout"
            button2="Checkout"
          />
          <WishlistItem
            img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/wishlists/wishlist-03/image-04.jpg"
            link="/#"
            color="Green"
            title="Green Sweatshirt"
            price="$85.00"
            button="Checkout"
            button2="Checkout"
          />
        </div>
      </div>
    </section>
  );
};

export default Wishlist3;

const WishlistItem = ({ img, title, color, link, price, button2, button }) => {
  return (
    <div className="w-full px-4 sm:w-1/2 lg:w-1/3 xl:w-1/4">
      <div className="mb-10">
        <a href={link} className="mb-4 block">
          <img src={img} alt="product" className="w-full" />
        </a>
        <div>
          <div className="flex items-center justify-between">
            <span className="mb-2 block text-base font-medium text-body-color">
              {color}
            </span>
            <span className="mb-2 block text-base font-semibold text-black">
              {price}
            </span>
          </div>
          <h3>
            <a
              href={link}
              className="mb-4 block text-lg font-semibold text-black hover:text-primary md:text-xl"
            >
              {title}
            </a>
          </h3>

          <div className="space-y-3">
            <a
              href={link}
              className="flex w-full items-center justify-center border border-transparent bg-primary px-10 py-2 text-center text-sm font-semibold text-white hover:bg-primary/90"
            >
              {button}
            </a>
            <a
              href={link}
              className="flex w-full items-center justify-center border border-primary px-10 py-2 text-center text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-white"
            >
              {button2}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
