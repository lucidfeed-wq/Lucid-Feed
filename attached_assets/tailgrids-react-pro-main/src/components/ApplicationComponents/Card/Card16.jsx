import React from "react";

function Card16() {
  return (
    <section className="bg-gray-2 pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="mx-auto w-full max-w-[570px] overflow-hidden rounded-xl bg-white shadow-md dark:bg-dark-2">
          <div className="relative bg-linear-to-t from-[#F7F8F2] via-[#E2E2FA] to-[#E7D3EF] p-7 pb-0 dark:from-dark-2 sm:p-11 sm:pb-0">
            <div className="mb-10 overflow-hidden rounded-2xl border border-dark-6">
              <img
                src="https://i.ibb.co/G7yJZnY/image-1.jpg"
                alt="image alt text"
                className="shaow-[0px_-7px_10px_0px_rgba(166,175,195,0.15)] w-full"
              />
            </div>
            <div className="absolute bottom-0 left-0 h-1/2 w-full bg-linear-to-b from-transparent to-white dark:to-dark-2"></div>
          </div>
          <div className="p-7 pt-0 sm:p-11 sm:pt-0">
            <h3 className="mb-3 text-xl font-bold text-dark dark:text-white sm:text-2xl">
              Create a free company profile
            </h3>
            <p className="mb-7 text-base text-body-color dark:text-dark-6 sm:text-lg">
              Lorem ipsum dolor sit amet, vehiculaum ero felis loreum fitiona
              fringilla goes scelerisque Interdum et.
            </p>

            <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-base font-medium text-white hover:bg-primary/90 sm:text-lg">
              Get Started Now
              <span>
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 9.5144L11.5312 2.9519C11.25 2.67065 10.8125 2.67065 10.5312 2.9519C10.25 3.23315 10.25 3.67065 10.5312 3.9519L15.7812 9.29565H2.5C2.125 9.29565 1.8125 9.60815 1.8125 9.98315C1.8125 10.3582 2.125 10.7019 2.5 10.7019H15.8437L10.5312 16.1082C10.25 16.3894 10.25 16.8269 10.5312 17.1082C10.6562 17.2332 10.8437 17.2957 11.0312 17.2957C11.2187 17.2957 11.4062 17.2332 11.5312 17.0769L18 10.5144C18.2812 10.2332 18.2812 9.79565 18 9.5144Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Card16;
