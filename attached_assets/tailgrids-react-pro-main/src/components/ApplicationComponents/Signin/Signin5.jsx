import React from "react";

const Signin5 = () => {
  return (
    <section className="bg-gray-1 py-20 dark:bg-dark lg:py-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="relative mx-auto w-full max-w-[440px] overflow-hidden rounded-[20px] bg-white px-7 py-16 shadow-[0px_39px_23px_-27px_rgba(0,0,0,0.10)] dark:bg-dark-2 sm:px-12">
              <div className="mb-10 items-center justify-between text-center sm:flex sm:text-left">
                <div className="mb-2 inline-block max-w-[120px] sm:mb-0">
                  <img
                    src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-primary.svg"
                    alt="logo"
                  />
                </div>
                <p className="text-base font-medium text-black dark:text-white">
                  <span className="pr-0.5">Have account?</span>
                  <a href="/#" className="text-primary hover:underline">
                    Log in
                  </a>
                </p>
              </div>
              <div className="text-left">
                <h2 className="mb-2 text-xl font-bold leading-[1.6]! text-dark dark:text-white sm:text-[28px]">
                  Sign up to TailGrids
                </h2>
                <p className="mb-8 text-base text-body-color dark:text-dark-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <form>
                <div className="mb-6">
                  <InputBox
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                  />
                </div>
                <div className="mb-6">
                  <InputBox type="email" name="email" placeholder="Email" />
                </div>
                <div className="mb-6">
                  <InputBox
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                </div>
                <div className="mb-9">
                  <button
                    type="submit"
                    className="w-full cursor-pointer rounded-md border border-primary bg-primary px-5 py-3 text-base font-medium text-white transition hover:bg-primary/90"
                  >
                    Get Started
                  </button>
                </div>
              </form>
              <div className="relative z-10 mb-8 flex items-center justify-center">
                <span className="absolute left-0 top-1/2 -z-10 hidden h-[1px] w-full -translate-y-1/2 bg-stroke dark:bg-dark-3 sm:block"></span>
                <p className="bg-white text-base font-medium text-body-color dark:bg-dark-2 dark:text-dark-6 sm:px-4">
                  Sign Up with Social Account
                </p>
              </div>
              <div className="flex items-center justify-center space-x-5">
                <a
                  href="/#"
                  className="flex h-[50px] w-[50px] items-center justify-center rounded-[14px] border border-stroke hover:bg-primary/10 dark:border-dark-3"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1369_296)">
                      <path
                        d="M21.8349 11.2416C21.848 10.4968 21.7695 9.75324 21.6013 9.02686H11.2227V13.0472H17.3148C17.1994 13.7521 16.9397 14.4268 16.5513 15.0308C16.1629 15.6349 15.6539 16.1557 15.0549 16.5619L15.0336 16.6966L18.3153 19.1879L18.5426 19.2102C20.6305 17.3203 21.8345 14.5397 21.8345 11.2416"
                        fill="#4285F4"
                      />
                      <path
                        d="M11.2229 21.8348C14.2075 21.8348 16.7132 20.8718 18.5435 19.2107L15.0551 16.5624C14.1217 17.2006 12.8689 17.646 11.2229 17.646C9.82505 17.6379 8.46522 17.1987 7.3364 16.3907C6.20757 15.5826 5.36707 14.4466 4.93413 13.144L4.80458 13.1549L1.39226 15.7428L1.34766 15.8643C2.26668 17.6593 3.67707 19.1683 5.42113 20.2227C7.16518 21.2771 9.17414 21.8353 11.2234 21.8348"
                        fill="#34A853"
                      />
                      <path
                        d="M4.93354 13.1437C4.69175 12.4541 4.56699 11.7303 4.56421 11.0011C4.56867 10.2732 4.68883 9.55033 4.92038 8.85862L4.91422 8.715L1.46005 6.08545L1.34707 6.13811C0.571795 7.64656 0.167969 9.31205 0.167969 11.001C0.167969 12.69 0.571795 14.3555 1.34707 15.864L4.93354 13.1437Z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M11.2234 4.35664C12.8074 4.33253 14.3393 4.91065 15.4977 5.96967L18.6176 2.98441C16.6166 1.14479 13.9668 0.13541 11.2234 0.167746C9.17416 0.167268 7.16522 0.725413 5.42117 1.77977C3.67711 2.83413 2.26671 4.34313 1.34766 6.13805L4.92224 8.85856C5.35944 7.55618 6.20273 6.42113 7.33322 5.61343C8.46371 4.80574 9.82437 4.36615 11.2234 4.35664Z"
                        fill="#EB4335"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1369_296">
                        <rect
                          width="21.6667"
                          height="21.6667"
                          fill="white"
                          transform="translate(0.167969 0.167969)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a
                  href="/#"
                  className="flex h-[50px] w-[50px] items-center justify-center rounded-[14px] border border-stroke hover:bg-primary/10 dark:border-dark-3"
                >
                  <svg
                    width="11"
                    height="22"
                    viewBox="0 0 11 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1369_292)">
                      <path
                        d="M7.0317 21.831V11.9501H10.2257L10.7039 8.0993H7.0317V5.6407C7.0317 4.52584 7.32987 3.76601 8.86961 3.76601L10.8333 3.76506V0.321004C10.4936 0.274246 9.32795 0.169434 7.97186 0.169434C5.1406 0.169434 3.20226 1.9639 3.20226 5.25953V8.0994H0V11.9502H3.20216V21.8311L7.0317 21.831Z"
                        fill="#3C5A9A"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1369_292">
                        <rect
                          width="10.8333"
                          height="21.6667"
                          fill="white"
                          transform="translate(0 0.166504)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a
                  href="/#"
                  className="flex h-[50px] w-[50px] items-center justify-center rounded-[14px] border border-stroke hover:bg-primary/10 dark:border-dark-3"
                >
                  <svg
                    width="29"
                    height="22"
                    viewBox="0 0 29 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1369_288)">
                      <path
                        d="M28.166 2.73064C27.1316 3.16818 26.0375 3.45898 24.9175 3.5941C26.0978 2.91501 26.9803 1.83967 27.3976 0.571849C26.2928 1.20727 25.084 1.65479 23.8236 1.89506C23.0505 1.09418 22.0469 0.53734 20.9432 0.296945C19.8395 0.0565495 18.6867 0.14372 17.6348 0.547121C16.5828 0.950522 15.6803 1.65149 15.0447 2.5589C14.4091 3.4663 14.0697 4.53815 14.0706 5.6351C14.0663 6.05369 14.1101 6.47145 14.2013 6.88061C11.9585 6.77398 9.76407 6.20954 7.7616 5.22417C5.75913 4.23881 3.99367 2.85472 2.58064 1.16238C1.85518 2.365 1.63036 3.79077 1.95208 5.14866C2.2738 6.50654 3.1178 7.69419 4.31182 8.46917C3.41978 8.4458 2.54661 8.21485 1.76587 7.79579V7.85535C1.76734 9.11782 2.21729 10.3413 3.03999 11.3197C3.86269 12.2982 5.00789 12.9719 6.28284 13.2275C5.80052 13.3508 5.30343 13.4114 4.80464 13.4076C4.44649 13.4137 4.08869 13.3824 3.73746 13.3142C4.10183 14.3992 4.80406 15.348 5.7475 16.03C6.69093 16.712 7.82917 17.0937 9.00553 17.1225C7.00995 18.6358 4.54884 19.4568 2.01549 19.4543C1.56447 19.4571 1.11372 19.432 0.666016 19.379C3.24392 20.9898 6.24787 21.842 9.31463 21.8324C19.6888 21.8324 25.361 13.4991 25.361 6.27573C25.361 6.03394 25.3523 5.80081 25.3403 5.56904C26.4523 4.79735 27.4099 3.83548 28.166 2.73064Z"
                        fill="#03A9F4"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1369_288">
                        <rect
                          width="27.5"
                          height="21.6667"
                          fill="white"
                          transform="translate(0.666016 0.166504)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signin5;

const InputBox = ({ type, placeholder, name }) => {
  return (
    <div className="mb-6">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className="w-full border-b border-stroke bg-transparent py-[10px] text-base font-medium text-body-color outline-hidden focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white"
      />
    </div>
  );
};
