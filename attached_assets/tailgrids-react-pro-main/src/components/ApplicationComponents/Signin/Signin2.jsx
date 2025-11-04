import React from "react";

const Signin2 = () => {
  return (
    <section className="bg-tg-bg py-20 dark:bg-dark lg:py-[120px]">
      <div className="container mx-auto">
        <div className="bg-white dark:bg-dark-2">
          <div className="flex flex-wrap items-stretch">
            <div className="w-full lg:w-1/2">
              <div className="w-full px-6 py-14 sm:p-[70px] sm:px-12 xl:px-[90px]">
                <h2 className="mb-10 text-[32px] font-bold text-dark dark:text-white">
                  Sign In
                </h2>
                <form>
                  <InputBox
                    labelTitle="Email Address"
                    type="email"
                    name="email"
                  />
                  <InputBox
                    labelTitle="Your Password"
                    type="password"
                    name="password"
                  />
                  <div className="mb-8">
                    <input
                      type="submit"
                      value="Sign In"
                      className="w-full cursor-pointer rounded-md border border-primary bg-primary px-[14px] py-3 text-white transition hover:bg-primary/90"
                    />
                  </div>
                </form>
                <div className="flex flex-wrap justify-between">
                  <a
                    href="/#"
                    className="mb-2 mr-2 inline-block text-base text-body-color hover:text-primary hover:underline dark:text-dark-6"
                  >
                    Forget Password?
                  </a>
                  <p className="mb-2 text-base text-body-color dark:text-dark-6">
                    <span className="pr-0.5"> Not a member yet? </span>

                    <a
                      href="/#"
                      className="text-primary hover:underline"
                    >
                      Sign Up
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative h-full w-full overflow-hidden bg-primary">
                <div className="flex h-full items-end p-8 sm:p-14">
                  <h3 className="text-[28px]/[34px] font-bold text-white">
                    Hey <br />
                    Welcome <br />
                    Back
                  </h3>
                  <div>
                    <span className="absolute left-0 top-0">
                      <svg
                        width="415"
                        height="355"
                        viewBox="0 0 415 355"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M415 107.5C415 244.19 304.19 355 167.5 355C30.8095 355 -80 244.19 -80 107.5C-80 -29.1905 30.8095 -140 167.5 -140C304.19 -140 415 -29.1905 415 107.5Z"
                          fill="url(#paint0_linear_1179_8)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_1179_8"
                            x1="167.5"
                            y1="-140"
                            x2="167.5"
                            y2="355"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop
                              offset="0.177083"
                              stopColor="white"
                              stopOpacity="0.16"
                            />
                            <stop
                              offset="1"
                              stopColor="white"
                              stopOpacity="0"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                    <span className="absolute left-0 top-0">
                      <svg
                        width="177"
                        height="354"
                        viewBox="0 0 177 354"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M177 177C177 274.754 97.7544 354 0 354C-97.7544 354 -177 274.754 -177 177C-177 79.2456 -97.7544 0 0 0C97.7544 0 177 79.2456 177 177Z"
                          fill="url(#paint0_linear_1179_7)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_1179_7"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="354"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop
                              offset="0.177083"
                              stopColor="white"
                              stopOpacity="0.2"
                            />
                            <stop
                              offset="1"
                              stopColor="white"
                              stopOpacity="0"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                    <span className="absolute bottom-16 right-20">
                      <svg
                        width="85"
                        height="85"
                        viewBox="0 0 85 85"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M42.5 -1.85773e-06C65.9721 -2.88373e-06 85 19.0279 85 42.5C85 65.9721 65.9721 85 42.5 85C19.0279 85 -8.31736e-07 65.9721 -1.85773e-06 42.5C-2.88373e-06 19.0279 19.0279 -8.31736e-07 42.5 -1.85773e-06Z"
                          fill="url(#paint0_linear_1179_6)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_1179_6"
                            x1="-1.85774e-06"
                            y1="42.5"
                            x2="85"
                            y2="42.5"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop
                              offset="0.177083"
                              stopColor="white"
                              stopOpacity="0.16"
                            />
                            <stop
                              offset="1"
                              stopColor="white"
                              stopOpacity="0"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
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

export default Signin2;

const InputBox = ({ type, name, labelTitle }) => {
  return (
    <div className="mb-8">
      <label className="mb-2.5 block text-xs text-dark dark:text-white">
        {labelTitle}
      </label>
      <input
        type={type}
        name={name}
        className="w-full rounded-md border border-[#E9EDF4] bg-transparent px-5 py-3 text-body-color outline-hidden focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white"
      />
    </div>
  );
};
