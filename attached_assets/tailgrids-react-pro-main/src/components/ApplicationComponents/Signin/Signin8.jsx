import React, { useState } from "react";

const Signin8 = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <section className="bg-white py-20 dark:bg-dark lg:py-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <h2 className="mb-4 text-3xl font-bold leading-[1.22]! text-dark dark:text-white sm:text-[45px]">
              Sign Up
            </h2>
            <p className="mb-8 max-w-[510px] text-base text-body-color dark:text-dark-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non
              dui aliquet, pellentesque tellus ac, faucibus ex.
            </p>

            <div>
              <div className="mb-8 flex items-center">
                <span className="pr-3 text-lg font-medium text-primary">
                  Sign Up With
                </span>
                <span className="h-[2px] w-12 bg-primary"></span>
              </div>
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 md:w-1/2 xl:w-1/2">
                  <button className="mb-8 flex w-full items-center justify-center rounded-md border border-stroke p-4 text-sm text-body-color hover:border-primary hover:text-primary dark:border-dark-3 dark:text-dark-6 sm:text-base lg:px-2 lg:text-sm xl:px-4 xl:text-base">
                    <span className="pr-3">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_1368_888)">
                          <path
                            d="M20.001 10.2216C20.0131 9.53416 19.9407 8.84776 19.7853 8.17725H10.2051V11.8883H15.8286C15.7221 12.539 15.4823 13.1618 15.1238 13.7194C14.7653 14.2769 14.2955 14.7577 13.7425 15.1327L13.7229 15.257L16.7522 17.5567L16.9619 17.5772C18.8892 15.8328 20.0006 13.266 20.0006 10.2216"
                            fill="#4285F4"
                          />
                          <path
                            d="M10.2035 20.0001C12.9585 20.0001 15.2715 19.1111 16.961 17.5778L13.741 15.1332C12.8793 15.7223 11.7229 16.1334 10.2035 16.1334C8.91317 16.126 7.65795 15.7206 6.61596 14.9747C5.57397 14.2287 4.79812 13.1802 4.39848 11.9778L4.2789 11.9878L1.12906 14.3766L1.08789 14.4888C1.93622 16.1457 3.23812 17.5387 4.84802 18.512C6.45791 19.4852 8.31234 20.0005 10.2039 20.0001"
                            fill="#34A853"
                          />
                          <path
                            d="M4.39899 11.9777C4.1758 11.3411 4.06063 10.673 4.05807 9.99996C4.06218 9.32799 4.1731 8.66075 4.38684 8.02225L4.38115 7.88968L1.19269 5.4624L1.0884 5.51101C0.372763 6.90343 0 8.4408 0 9.99987C0 11.5589 0.372763 13.0963 1.0884 14.4887L4.39899 11.9777Z"
                            fill="#FBBC05"
                          />
                          <path
                            d="M10.2039 3.86663C11.6661 3.84438 13.0802 4.37803 14.1495 5.35558L17.0294 2.59996C15.1823 0.901848 12.7364 -0.0298855 10.2039 -3.6784e-05C8.31236 -0.000477834 6.45795 0.514732 4.84805 1.48798C3.23816 2.46124 1.93625 3.85416 1.08789 5.51101L4.3875 8.02225C4.79107 6.82005 5.5695 5.77231 6.61303 5.02675C7.65655 4.28118 8.91255 3.87541 10.2039 3.86663Z"
                            fill="#EB4335"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1368_888">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    Sign up with Google
                  </button>
                </div>
                <div className="w-full px-3 md:w-1/2 xl:w-1/2">
                  <button className="mb-8 flex w-full items-center justify-center rounded-md border border-stroke p-4 text-sm text-body-color hover:border-primary hover:text-primary dark:border-dark-3 dark:text-dark-6 sm:text-base lg:px-2 lg:text-sm xl:px-4 xl:text-base">
                    <span className="pr-3">
                      <svg
                        width="10"
                        height="20"
                        viewBox="0 0 10 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_1375_409)">
                          <path
                            d="M6.4908 19.9982V10.8773H9.43911L9.88051 7.3228H6.4908V5.05333C6.4908 4.02423 6.76604 3.32284 8.18733 3.32284L10 3.32197V0.14284C9.68636 0.0996795 8.61042 0.00292969 7.35864 0.00292969C4.74517 0.00292969 2.95593 1.65936 2.95593 4.70148V7.3229H0V10.8774H2.95584V19.9983L6.4908 19.9982Z"
                            fill="#3C5A9A"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1375_409">
                            <rect width="10" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    Sign up with Facebook
                  </button>
                </div>
              </div>
            </div>

            <form>
              <div className="-mx-2 flex flex-wrap">
                <div className="w-full px-2 sm:w-1/2">
                  <div className="mb-4">
                    <InputBox
                      labelTitle="Username"
                      type="text"
                      name="username"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="w-full px-2 sm:w-1/2">
                  <div className="mb-4">
                    <InputBox
                      labelTitle="Email address"
                      type="email"
                      name="email"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="w-full px-2">
                  <div className="mb-6">
                    <InputBox
                      labelTitle="Password"
                      type="password"
                      name="password"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="w-full px-2">
                  <div className="mb-8">
                    <label
                      htmlFor="checkboxLabel"
                      className="flex cursor-pointer text-base text-body-color dark:text-dark-6"
                    >
                      <div className="relative pt-[2px]">
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
                          <span className={`${!isChecked ? "opacity-0" : ""}`}>
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
                      <p className="text-base text-body-color dark:text-dark-6">
                        I’ve read and agree with Terms of Servicec and our
                        Privacy Policy
                      </p>
                    </label>
                  </div>
                </div>
                <div className="w-full px-2">
                  <button
                    type="submit"
                    className="flex items-center justify-center rounded-md bg-primary px-14 py-[14px] text-base font-medium text-white"
                  >
                    Create Account
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="hidden text-center lg:block">
              <img
                src="https://cdn.tailgrids.com/2.0/image/application/images/forms/forms-10.svg"
                alt="illustration"
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signin8;

const InputBox = ({ type, placeholder, name, labelTitle }) => {
  return (
    <div>
      <label className="mb-2.5 block text-base font-medium text-dark dark:text-white">
        {labelTitle}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-dark-3 dark:text-white"
      />
    </div>
  );
};
