import React, { useState } from "react";

function HeroFour() {
  return (
    <div className="relative z-20 bg-[#020342]">
      <div
        className="absolute inset-0 -z-10 h-full w-full opacity-60 mix-blend-overlay"
        style={{
          backgroundImage: "url(https://i.ibb.co/6w5ftpm/bg-noise.png)",
        }}
      ></div>

      <Navbar />

      <section className="relative overflow-hidden pb-[150px] pt-[120px]">
        <div className="container">
          <div className="relative">
            <div className="mx-auto w-full max-w-[590px] text-center">
              <h1 className="mb-4 text-3xl font-extrabold text-white sm:text-4xl md:text-[52px]/[62px]">
                Turn your Text into the
                <span className="bg-linear-to-r from-primary via-primary to-[#F566D5] bg-clip-text text-transparent">
                  Images
                </span>
                in Seconds
              </h1>

              <p className="mx-auto mb-8 w-full max-w-[570px] text-base text-dark-7">
                Convert words into an image in mere seconds with the Image
                Generator. Type a detailed description for the better result
              </p>

              <div className="mb-8 rounded-xl bg-white p-3">
                <div className="flex w-full gap-3">
                  <input
                    type="text"
                    placeholder="Describe what you want to see"
                    className="h-12 w-full bg-transparent px-5 py-3 text-black outline-hidden dark:text-white"
                  />
                  <button className="h-12 rounded-lg bg-primary px-6 py-3 text-base font-medium text-white hover:bg-primary/90">
                    Generate
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4">
                <p className="text-sm font-medium text-dark-7">Popular Tags:</p>

                <div className="flex gap-2.5">
                  <button className="rounded-sm bg-white/[.12] px-3 py-1 text-sm font-medium text-dark-7 hover:bg-white/30">
                    Creative
                  </button>
                  <button className="rounded-sm bg-white/[.12] px-3 py-1 text-sm font-medium text-dark-7 hover:bg-white/30">
                    Sport
                  </button>
                  <button className="rounded-sm bg-white/[.12] px-3 py-1 text-sm font-medium text-dark-7 hover:bg-white/30">
                    Animation
                  </button>
                  <button className="rounded-sm bg-white/[.12] px-3 py-1 text-sm font-medium text-dark-7 hover:bg-white/30">
                    Fantasy
                  </button>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 -z-10 aspect-174/291 w-full max-w-[174px] rounded-full border border-dashed bg-clip-border p-3 max-xl:hidden">
              <div className="absolute bottom-3 left-1/2 aspect-150/220 w-full max-w-[150px] -translate-x-1/2 overflow-hidden rounded-full">
                <img
                  src="https://i.ibb.co/Jykt1jX/image-1.jpg"
                  alt="shape image"
                />
              </div>

              <span className="absolute right-4 top-3.5">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.9612 0.470215L16.3945 11.8018L27.7261 14.2351L16.3945 16.6684L13.9612 28L11.5279 16.6684L0.196289 14.2351L11.5279 11.8018L13.9612 0.470215Z"
                    fill="url(#paint0_linear_1963_809)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1963_809"
                      x1="13.9612"
                      y1="0.470215"
                      x2="13.9612"
                      y2="28"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#4459F7" />
                      <stop offset="1" stopColor="#D83BB5" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className="absolute right-8 top-0">
                <svg
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.47437 0.00244141L11.0649 7.40944L18.4719 9L11.0649 10.5906L9.47437 17.9976L7.88381 10.5906L0.476807 9L7.88381 7.40944L9.47437 0.00244141Z"
                    fill="url(#paint0_linear_1964_102)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1964_102"
                      x1="9.47437"
                      y1="0.00244141"
                      x2="9.47437"
                      y2="17.9976"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#4459F7" />
                      <stop offset="1" stopColor="#D83BB5" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </div>
            <div className="absolute right-0 top-0 -z-10 aspect-174/291 w-full max-w-[174px] rounded-full border border-dashed bg-clip-border p-3 max-xl:hidden">
              <div className="absolute left-1/2 top-3 aspect-150/220 w-full max-w-[150px] -translate-x-1/2 overflow-hidden rounded-full">
                <img
                  src="https://i.ibb.co/525y0z1/image-2.jpg"
                  alt="shape image"
                />
              </div>

              <span className="absolute bottom-0 left-8">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.9612 0.470215L16.3945 11.8018L27.7261 14.2351L16.3945 16.6684L13.9612 28L11.5279 16.6684L0.196289 14.2351L11.5279 11.8018L13.9612 0.470215Z"
                    fill="url(#paint0_linear_1963_809)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1963_809"
                      x1="13.9612"
                      y1="0.470215"
                      x2="13.9612"
                      y2="28"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#4459F7" />
                      <stop offset="1" stopColor="#D83BB5" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className="absolute bottom-4 left-4">
                <svg
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.47437 0.00244141L11.0649 7.40944L18.4719 9L11.0649 10.5906L9.47437 17.9976L7.88381 10.5906L0.476807 9L7.88381 7.40944L9.47437 0.00244141Z"
                    fill="url(#paint0_linear_1964_102)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1964_102"
                      x1="9.47437"
                      y1="0.00244141"
                      x2="9.47437"
                      y2="17.9976"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#4459F7" />
                      <stop offset="1" stopColor="#D83BB5" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2">
          <svg
            width="376"
            height="150"
            viewBox="0 0 376 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.3">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.848267 299.786L0.848281 0.862872L1.49753 0.862872L1.49752 299.786H0.848267Z"
                fill="url(#paint0_radial_1962_763)"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M38.2137 299.786L38.2137 0.862872L38.863 0.862872L38.8629 299.786H38.2137Z"
                fill="url(#paint1_radial_1962_763)"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M374.503 299.786H0.848267L0.848281 299.137H374.503V299.786Z"
                fill="url(#paint2_radial_1962_763)"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M75.5791 299.786L75.5791 0.862872L76.2284 0.862872L76.2284 299.786H75.5791Z"
                fill="url(#paint3_radial_1962_763)"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M374.503 262.421H0.848281V261.772H374.503V262.421Z"
                fill="url(#paint4_radial_1962_763)"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M112.945 299.786L112.945 0.862872L113.594 0.862872L113.594 299.786H112.945Z"
                fill="url(#paint5_radial_1962_763)"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M374.503 225.056H0.848281V224.406H374.503V225.056Z"
                fill="url(#paint6_radial_1962_763)"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M150.31 299.786L150.31 0.862872L150.959 0.862872L150.959 299.786H150.31Z"
                fill="url(#paint7_radial_1962_763)"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M374.503 187.69H0.848281V187.041H374.503V187.69Z"
                fill="url(#paint8_radial_1962_763)"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M187.675 299.786L187.675 0.862872L188.325 0.862872L188.325 299.786H187.675Z"
                fill="url(#paint9_radial_1962_763)"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M374.503 150.325H0.848281V149.675H374.503V150.325Z"
                fill="url(#paint10_radial_1962_763)"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M225.041 299.786L225.041 0.862872L225.69 0.862872L225.69 299.786H225.041Z"
                fill="url(#paint11_radial_1962_763)"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M374.503 112.959H0.848281V112.31H374.503V112.959Z"
                fill="url(#paint12_radial_1962_763)"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M262.406 299.786L262.406 0.862872L263.055 0.862872V299.786H262.406Z"
                fill="url(#paint13_radial_1962_763)"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M374.503 75.5937H0.848281V74.9445H374.503V75.5937Z"
                fill="url(#paint14_radial_1962_763)"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M299.772 299.786L299.772 0.862872L300.421 0.862872V299.786H299.772Z"
                fill="url(#paint15_radial_1962_763)"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M374.503 38.2283H0.848281V37.579H374.503V38.2283Z"
                fill="url(#paint16_radial_1962_763)"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M337.137 299.786V0.862872L337.786 0.862872V299.786H337.137Z"
                fill="url(#paint17_radial_1962_763)"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M374.503 0.862872L0.848281 0.862872V0.213623L374.503 0.213623V0.862872Z"
                fill="url(#paint18_radial_1962_763)"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M374.503 299.786V0.862872H375.152V299.786H374.503Z"
                fill="url(#paint19_radial_1962_763)"
              />
            </g>
            <defs>
              <radialGradient
                id="paint0_radial_1962_763"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(188 150) rotate(90) scale(167.145 208.841)"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </radialGradient>
              <radialGradient
                id="paint1_radial_1962_763"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(188 150) rotate(90) scale(167.145 208.841)"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </radialGradient>
              <radialGradient
                id="paint2_radial_1962_763"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(188 150) rotate(90) scale(167.145 208.841)"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </radialGradient>
              <radialGradient
                id="paint3_radial_1962_763"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(188 150) rotate(90) scale(167.145 208.841)"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </radialGradient>
              <radialGradient
                id="paint4_radial_1962_763"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(188 150) rotate(90) scale(167.145 208.841)"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </radialGradient>
              <radialGradient
                id="paint5_radial_1962_763"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(188 150) rotate(90) scale(167.145 208.841)"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </radialGradient>
              <radialGradient
                id="paint6_radial_1962_763"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(188 150) rotate(90) scale(167.145 208.841)"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </radialGradient>
              <radialGradient
                id="paint7_radial_1962_763"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(188 150) rotate(90) scale(167.145 208.841)"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </radialGradient>
              <radialGradient
                id="paint8_radial_1962_763"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(188 150) rotate(90) scale(167.145 208.841)"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </radialGradient>
              <radialGradient
                id="paint9_radial_1962_763"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(188 150) rotate(90) scale(167.145 208.841)"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </radialGradient>
              <radialGradient
                id="paint10_radial_1962_763"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(188 150) rotate(90) scale(167.145 208.841)"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </radialGradient>
              <radialGradient
                id="paint11_radial_1962_763"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(188 150) rotate(90) scale(167.145 208.841)"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </radialGradient>
              <radialGradient
                id="paint12_radial_1962_763"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(188 150) rotate(90) scale(167.145 208.841)"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </radialGradient>
              <radialGradient
                id="paint13_radial_1962_763"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(188 150) rotate(90) scale(167.145 208.841)"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </radialGradient>
              <radialGradient
                id="paint14_radial_1962_763"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(188 150) rotate(90) scale(167.145 208.841)"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </radialGradient>
              <radialGradient
                id="paint15_radial_1962_763"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(188 150) rotate(90) scale(167.145 208.841)"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </radialGradient>
              <radialGradient
                id="paint16_radial_1962_763"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(188 150) rotate(90) scale(167.145 208.841)"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </radialGradient>
              <radialGradient
                id="paint17_radial_1962_763"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(188 150) rotate(90) scale(167.145 208.841)"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </radialGradient>
              <radialGradient
                id="paint18_radial_1962_763"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(188 150) rotate(90) scale(167.145 208.841)"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </radialGradient>
              <radialGradient
                id="paint19_radial_1962_763"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(188 150) rotate(90) scale(167.145 208.841)"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </section>
    </div>
  );
}

export default HeroFour;

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex w-full items-center py-6">
      <div className="container mx-auto">
        <div className="rounded-full border border-transparent bg-linear-to-t from-transparent to-white/10 px-5 backdrop-blur-[10px]">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4">
              <a href="#" className="block w-full py-5">
                <img
                  src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-white.svg"
                  alt="logo"
                  className="block"
                />
              </a>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={() => setOpen(!open)}
                  id="navbarToggler"
                  className={` ${
                    open && "navbarTogglerActive"
                  } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
                >
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                </button>
                <nav
                  id="navbarCollapse"
                  className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-dark-2 px-6 py-4 shadow lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:shadow-none ${
                    !open && "hidden"
                  }`}
                >
                  <ul className="block lg:flex lg:gap-2">
                    <li>
                      <a
                        href="#"
                        className="hover:border-white/15 flex rounded-full border border-transparent px-3.5 py-1.5 text-base font-medium text-white/50 hover:bg-white/5 hover:text-white lg:inline-flex"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:border-white/15 flex rounded-full border border-transparent px-3.5 py-1.5 text-base font-medium text-white/50 hover:bg-white/5 hover:text-white lg:inline-flex"
                      >
                        Payment
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:border-white/15 flex rounded-full border border-transparent px-3.5 py-1.5 text-base font-medium text-white/50 hover:bg-white/5 hover:text-white lg:inline-flex"
                      >
                        Features
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="hidden justify-end gap-3 pr-16 sm:flex lg:pr-0">
                <a
                  href="#"
                  className="rounded-full px-5 py-2.5 text-base font-medium text-white hover:text-primary"
                >
                  Login
                </a>
                <a
                  href="#"
                  className="rounded-full bg-white px-5 py-2.5 text-base font-medium text-dark hover:bg-white/90"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
