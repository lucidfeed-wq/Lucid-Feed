import React from "react";

const Newsletter3 = () => {
  return (
    <section
      className="relative z-10 bg-cover bg-center bg-no-repeat py-[100px]"
      style={{
        backgroundImage: "url('https://i.ibb.co/B2GDfcQ/form-3-bg.jpg')",
      }}
    >
      <div className="absolute left-0 top-0 -z-10 h-full w-full bg-[#000]/70"></div>
      <div className="container mx-auto">
        <div className="mx-auto w-full max-w-[510px] text-center">
          <h2 className="mb-9 text-2xl font-bold text-white sm:text-4xl">
            Join Our Newsletter Now
          </h2>
          <form className="mb-5 flex flex-wrap items-center justify-center space-y-4 sm:flex-nowrap sm:justify-between sm:space-x-4 sm:space-y-0">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full border border-stroke bg-white px-6 py-3 text-base text-body-color outline-hidden focus:border-primary"
            />
            <button className="w-full whitespace-nowrap border border-transparent bg-primary px-7 py-3 text-center text-base font-medium uppercase text-white hover:bg-primary/90 sm:inline-block sm:w-auto">
              Sign up
            </button>
          </form>
          <p className="text-base text-white">You can unsubscribe anytime</p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter3;
