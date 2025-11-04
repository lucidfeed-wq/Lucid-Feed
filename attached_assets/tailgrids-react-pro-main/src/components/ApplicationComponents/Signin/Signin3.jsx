import React, { useState } from "react";

const Signin3 = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <section className="relative z-10 bg-gray-2 py-20 dark:bg-dark lg:py-[120px]">
      <div className="absolute left-0 top-0 z-[-1] h-full w-1/4 bg-primary"></div>
      <div className="container mx-auto">
        <div className="bg-white dark:bg-dark-2">
          <div className="flex flex-wrap items-stretch">
            <div className="w-full lg:w-1/2">
              <div className="relative hidden h-full w-full overflow-hidden lg:flex">
                <div className="flex h-full items-end">
                  <img
                    src="https://cdn.tailgrids.com/2.0/image/application/images/forms/image-01.jpg"
                    alt="image"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="w-full px-8 py-14 sm:p-[70px] lg:px-14 xl:px-[90px]">
                <h2 className="mb-3 text-3xl font-bold text-dark dark:text-white">
                  Welcome to TailGrids
                </h2>
                <p className="mb-14 text-base text-secondary-color dark:text-dark-7 xl:mb-20">
                  <span className="sm:block">
                    We make it easy for everyone to
                  </span>
                  <span>access their account</span>
                </p>
                <form>
                  <div className="mb-6">
                    <InputBox
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mb-6">
                    <InputBox
                      type="password"
                      name="password"
                      placeholder="Enter your Password"
                    />
                  </div>
                  <div className="mb-8 flex flex-wrap justify-between">
                    <div className="mb-2 mr-2">
                      <label
                        htmlFor="checkboxLabel"
                        className="flex cursor-pointer items-center text-base text-body-color dark:text-dark-6"
                      >
                        <div className="relative">
                          <input
                            type="checkbox"
                            id="checkboxLabel"
                            className="sr-only"
                            onChange={() => {
                              setIsChecked(!isChecked);
                            }}
                          />
                          <div
                            className={`mr-3 flex h-5 w-5 items-center justify-center rounded border ${
                              isChecked
                                ? "border-primary"
                                : "border-stroke dark:border-dark-3"
                            }`}
                          >
                            <span
                              className={`${!isChecked ? "opacity-0" : ""}`}
                            >
                              <svg
                                width="11"
                                height="8"
                                viewBox="0 0 11 8"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                                  fill="#3056D3"
                                  stroke="#3056D3"
                                  strokeWidth="0.4"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                        Remember Me
                      </label>
                    </div>

                    <div>
                      <a
                        href="/#"
                        className="mb-2 text-base text-primary hover:underline"
                      >
                        {" "}
                        Forget Password?{" "}
                      </a>
                    </div>
                  </div>
                  <div className="-mx-3 flex flex-wrap">
                    <div className="w-full px-3 md:w-1/2">
                      <button
                        type="submit"
                        className="mb-3 inline-flex h-[50px] w-full cursor-pointer items-center justify-center bg-primary px-5 font-medium text-white transition hover:bg-primary/90"
                      >
                        Sign In
                      </button>
                    </div>

                    <div className="w-full px-3 md:w-1/2">
                      <a
                        href="/#"
                        className="mb-3 inline-flex h-[50px] w-full cursor-pointer items-center justify-center bg-secondary px-5 font-medium text-white transition hover:bg-secondary/90"
                      >
                        Create Account
                      </a>
                    </div>
                  </div>
                </form>
                <div className="mt-6 flex flex-wrap items-center md:mt-10">
                  <p className="mb-3 mr-5 text-xs font-medium text-body-color dark:text-dark-6">
                    Login With
                  </p>
                  <div className="mb-3 flex items-center">
                    <a
                      href="/#"
                      className="mr-4 text-xs font-medium text-dark hover:text-primary hover:underline dark:text-white"
                    >
                      Facebook
                    </a>
                    <a
                      href="/#"
                      className="mr-4 text-xs font-medium text-dark hover:text-primary hover:underline dark:text-white"
                    >
                      Twitter
                    </a>
                    <a
                      href="/#"
                      className="mr-4 text-xs font-medium text-dark hover:text-primary hover:underline dark:text-white"
                    >
                      Google
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signin3;

const InputBox = ({ type, placeholder, name }) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className="h-12 w-full border border-transparent bg-gray-2 px-5 text-body-color outline-hidden focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:bg-dark dark:text-white"
      />
    </div>
  );
};
