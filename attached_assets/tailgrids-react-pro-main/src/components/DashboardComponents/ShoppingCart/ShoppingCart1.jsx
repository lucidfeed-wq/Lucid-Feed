import React, { useState } from "react";

const ShoppingCart = () => {
  const [modalOpen, setModalOpen] = useState(true);

  return (
    <>
      <section className="overflow-x-hidden">
        <div className="container mx-auto py-14 text-center">
          <button
            onClick={() => {
              setModalOpen(!modalOpen);
            }}
            className="bg-primary rounded-md py-3 px-8 text-base font-semibold text-white hover:bg-primary/90"
          >
            Open Modal
          </button>
        </div>

        <div
          onClick={() => setModalOpen(false)}
          className={`${
            modalOpen ? "translate-x-0" : "translate-x-full"
          } bg-body-color cursor-pointer fixed top-0 right-0 h-full w-full transition-all duration-100`}
        ></div>

        <div
          className={`${
            modalOpen ? "translate-x-0" : "translate-x-full"
          } fixed top-0 right-0 h-screen w-full max-w-[500px] overflow-y-auto bg-white py-10 px-5 transition-all duration-200 sm:px-8 md:p-12`}
        >
          <button
            onClick={() => setModalOpen(false)}
            className="absolute top-8 right-8"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.62996 8.00296L15.4749 1.1413C15.6478 0.968524 15.6478 0.69702 15.4749 0.524244C15.3019 0.351469 15.0301 0.351469 14.8571 0.524244L8.01219 7.3859L1.14259 0.548926C0.96961 0.376151 0.697791 0.376151 0.524815 0.548926C0.35184 0.721702 0.35184 0.993207 0.524815 1.16598L7.39442 8.00296L0.549526 14.8646C0.37655 15.0374 0.37655 15.3089 0.549526 15.4817C0.623658 15.5557 0.747213 15.6051 0.846056 15.6051C0.944899 15.6051 1.06845 15.5557 1.14259 15.4817L8.01219 8.62001L14.8571 15.4817C14.9312 15.5557 15.0548 15.6051 15.1536 15.6051C15.2525 15.6051 15.376 15.5557 15.4501 15.4817C15.6231 15.3089 15.6231 15.0374 15.4501 14.8646L8.62996 8.00296Z"
                fill="#637381"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.8571 0.524244C15.0301 0.351469 15.3019 0.351469 15.4749 0.524244C15.6478 0.69702 15.6478 0.968524 15.4749 1.1413L8.62996 8.00296L15.4501 14.8646C15.6231 15.0374 15.6231 15.3089 15.4501 15.4817C15.376 15.5557 15.2525 15.6051 15.1536 15.6051C15.0548 15.6051 14.9312 15.5557 14.8571 15.4817L8.01219 8.62001L1.14259 15.4817C1.06845 15.5557 0.944899 15.6051 0.846056 15.6051C0.747213 15.6051 0.623658 15.5557 0.549526 15.4817C0.37655 15.3089 0.37655 15.0374 0.549526 14.8646L7.39442 8.00296L0.524815 1.16598C0.35184 0.993207 0.35184 0.721702 0.524815 0.548926C0.697791 0.376151 0.96961 0.376151 1.14259 0.548926L8.01219 7.3859L14.8571 0.524244ZM8.01122 6.82741L14.577 0.245502C14.9044 -0.0814977 15.4271 -0.0820018 15.7545 0.244998C16.0817 0.57183 16.0818 1.09301 15.755 1.42004M15.755 1.42004L9.18763 8.00346L15.7298 14.5854C15.7299 14.5855 15.7296 14.5852 15.7298 14.5854C16.0567 14.9124 16.057 15.4341 15.7298 15.7609C15.5806 15.9099 15.3562 16 15.1537 16C14.9511 16 14.7267 15.9099 14.5776 15.7609L8.01172 9.17901L1.42219 15.7609C1.27307 15.9099 1.0486 16 0.846093 16C0.643587 16 0.419114 15.9099 0.269992 15.7609C-0.0573859 15.4339 -0.0573859 14.9124 0.269992 14.5854L6.83532 8.00397L0.245786 1.44573C-0.0815921 1.11873 -0.0820967 0.59668 0.245282 0.26968C0.572556 -0.0572156 1.09448 -0.0573195 1.42188 0.269368C1.42199 0.269472 1.42178 0.269265 1.42188 0.269368L8.01122 6.82741"
                fill="#637381"
              />
            </svg>
          </button>
          <h3 className="mb-10 text-2xl font-semibold text-black md:text-3xl">
            Shopping cart
          </h3>

          <div className="space-y-8">
            <CartItem
              img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/shopping-carts/shopping-cart-01/image-01.jpg"
              link="/#"
              title="Modern Lounge Chair"
              number="Quantity: 1"
              button="Edit"
              button2="Remove"
              price="$385"
            />
            <CartItem
              img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/shopping-carts/shopping-cart-01/image-02.jpg"
              link="/#"
              title="Mini Basic Table Lamp"
              number="Quantity: 2"
              button="Edit"
              button2="Remove"
              price="$129"
            />
            <CartItem
              img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/shopping-carts/shopping-cart-01/image-03.jpg"
              link="/#"
              title="Wooden Side Table"
              number="Quantity: 1"
              button="Edit"
              button2="Remove"
              price="$459"
            />

            <div className="flex items-center justify-end">
              <p className="text-body-color mr-5 flex items-center text-base font-medium">
                Subtotal:{" "}
                <span className="pl-2 font-semibold text-black">$973</span>
              </p>
              <button className="bg-primary inline-flex items-center justify-center rounded-sm py-[10px] px-7 text-center text-base font-semibold text-white hover:bg-primary/90">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShoppingCart;

const CartItem = ({ img, link, title, number, button, button2, price }) => {
  return (
    <div className="flex justify-between border-b border-[#e7e7e7] pb-8">
      <div className="flex items-center">
        <div className="xs:h-[100px] xs:max-w-[100px] mr-5 h-[90px] w-full max-w-[80px] overflow-hidden rounded-sm">
          <img
            src={img}
            alt="product"
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div>
          <a
            href={link}
            className="hover:text-primary block text-base font-medium text-black sm:text-lg"
          >
            {title}
          </a>
          <p className="text-body-color mb-2 text-sm font-medium sm:text-base">
            {number}
          </p>
          <div className="flex items-center space-x-3">
            <button className="hover:border-primary hover:bg-primary rounded-sm border border-black px-4 py-1 text-sm font-medium text-black transition hover:text-white">
              {button}
            </button>
            <button className="hover:border-danger hover:bg-danger rounded-sm border border-black px-4 py-1 text-sm font-medium text-black transition hover:text-white">
              {button2}
            </button>
          </div>
        </div>
      </div>
      <div className="text-right">
        <span className="text-lg font-semibold text-black"> {price} </span>
      </div>
    </div>
  );
};
