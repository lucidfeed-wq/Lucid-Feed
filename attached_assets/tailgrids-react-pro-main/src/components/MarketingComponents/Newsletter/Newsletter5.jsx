import React, { useEffect, useRef, useState } from "react";

const Newsletter5 = () => {
  const [modalOpen, setModalOpen] = useState(true);

  const divRef = useRef(null);
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const handleClickOutside = (event) => {
    if (divRef.current && !divRef.current.contains(event.target)) {
      setModalOpen(false);
    }
  };

  return (
    <section>
      <div className="container mx-auto py-20">
        <button
          onClick={() => setModalOpen(true)}
          className="rounded-full bg-primary px-6 py-3 text-base font-medium text-white"
        >
          Open Modal
        </button>
      </div>
      <div
        className={`fixed left-0 top-0 flex h-full min-h-screen w-full items-center justify-center bg-body-color px-4 py-5 dark:bg-dark-3 ${
          modalOpen ? "block" : "hidden"
        }`}
      >
        <div className="mx-auto px-4 lg:container">
          <div
            ref={divRef}
            className="relative mx-auto w-full max-w-[970px] bg-white shadow-[0px_12px_60px_0px_rgba(0,0,0,0.10)] dark:bg-dark-2"
          >
            <button
              onClick={() => setModalOpen(false)}
              className="absolute right-5 top-5 text-body-color hover:text-dark dark:hover:text-white"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M21.5504 6.44997C21.8541 6.75371 21.8541 7.24618 21.5504 7.54992L7.55041 21.5499C7.24666 21.8537 6.7542 21.8537 6.45046 21.5499C6.14672 21.2462 6.14672 20.7537 6.45046 20.45L20.4505 6.44997C20.7542 6.14623 21.2467 6.14623 21.5504 6.44997Z"
                  fill="currentColor"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.45046 6.44997C6.7542 6.14623 7.24666 6.14623 7.55041 6.44997L21.5504 20.45C21.8541 20.7537 21.8541 21.2462 21.5504 21.5499C21.2467 21.8537 20.7542 21.8537 20.4505 21.5499L6.45046 7.54992C6.14672 7.24618 6.14672 6.75371 6.45046 6.44997Z"
                  fill="currentColor"
                />
              </svg>
            </button>
            <div className="flex items-center">
              <div className="hidden w-full max-w-[430px] md:block lg:max-w-[470px]">
                <div className="w-full">
                  <img
                    src="https://i.ibb.co/n85Hwt5/form-5.jpg"
                    alt="forms image"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="px-8 py-9 sm:px-14 sm:py-12 md:px-8 lg:px-12 lg:py-14 xl:px-[60px]">
                  <h2 className="mb-5 text-xl font-bold leading-tight! text-dark dark:text-white sm:text-[28px] md:text-xl lg:text-[28px]">
                    Subscribe Now to Get Our Latest Offers!
                  </h2>
                  <p className="mb-10 text-base text-body-color dark:text-dark-6">
                    There are many variations of passages of Lorem Ipsum
                    available but the majority have.
                  </p>
                  <form className="mb-5 space-y-4">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="h-[52px] w-full border border-stroke bg-transparent px-6 text-center text-base text-body-color outline-hidden placeholder:opacity-50 focus:border-primary dark:border-dark-3 dark:text-dark-6"
                    />
                    <button className="h-[52px] w-full border border-transparent bg-primary px-6 text-base font-medium text-white hover:bg-primary/90">
                      Subscribe Now
                    </button>
                  </form>
                  <p className="text-center text-base text-body-color dark:text-dark-6">
                    No spam guaranteed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter5;
