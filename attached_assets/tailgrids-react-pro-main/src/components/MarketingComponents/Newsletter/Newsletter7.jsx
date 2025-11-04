import React, { useEffect, useRef, useState } from "react";

const Newsletter7 = () => {
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
        className={`fixed left-0 top-0 flex h-full min-h-screen w-full items-center justify-center bg-white px-4 py-5 dark:bg-dark ${
          modalOpen ? "block" : "hidden"
        }`}
      >
        <div className="mx-auto px-4 md:container">
          <div
            ref={divRef}
            className="relative mx-auto w-full max-w-[480px] rounded-lg bg-white p-8 shadow-four dark:bg-dark-2 sm:p-[50px]"
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
            <div className="mx-auto mb-9 flex h-[100px] w-[100px] items-center justify-center rounded-full bg-primary text-white">
              <svg
                width="46"
                height="46"
                viewBox="0 0 46 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M40.25 6.90002H5.74999C3.30624 6.90002 1.22186 8.91252 1.22186 11.4281V34.7156C1.22186 37.1594 3.23436 39.2438 5.74999 39.2438H40.25C42.6937 39.2438 44.7781 37.2313 44.7781 34.7156V11.3563C44.7781 8.91252 42.6937 6.90002 40.25 6.90002ZM40.25 10.1344C40.3219 10.1344 40.3937 10.1344 40.4656 10.1344L23 21.3469L5.53436 10.1344C5.60624 10.1344 5.67811 10.1344 5.74999 10.1344H40.25ZM40.25 35.8657H5.74999C5.03124 35.8657 4.45624 35.2906 4.45624 34.5719V13.2969L21.275 24.0781C21.7781 24.4375 22.3531 24.5813 22.9281 24.5813C23.5031 24.5813 24.0781 24.4375 24.5812 24.0781L41.4 13.2969V34.6438C41.5437 35.3625 40.9687 35.8657 40.25 35.8657Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="text-center">
              <h3 className="mb-3 text-xl font-semibold leading-tight! text-primary sm:text-[28px]">
                Get 50% Flat Discount
              </h3>
              <p className="mx-auto mb-9 max-w-[295px] text-base text-body-color dark:text-dark-6">
                Subscribe our Newsletter to get a 50% discount in your next
                shop.
              </p>

              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="h-[52px] w-full rounded-md border border-stroke bg-transparent px-6 text-center text-base text-body-color outline-hidden placeholder:opacity-60 focus:border-primary dark:border-dark-3 dark:text-dark-6"
                />
                <button className="h-[52px] w-full rounded-md bg-primary px-6 text-base font-medium text-white hover:bg-primary/90">
                  Subscribe Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter7;
