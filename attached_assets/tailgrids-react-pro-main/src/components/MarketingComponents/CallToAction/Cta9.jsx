import React from "react";

export default function Cta9() {
  return (
    <section className="relative z-10 overflow-hidden bg-white py-20 lg:py-[120px] dark:bg-dark">
      <div className="container">
        <div className="mx-auto w-full max-w-[790px] text-center">
          <h2 className="mx-auto mb-6 w-full max-w-[550px] text-3xl font-bold leading-tight! -tracking-[.72px] text-dark sm:text-4xl dark:text-white">
            Have a Project Idea In Mind? Let’s Work Together.
          </h2>
          <p className="mb-8 text-base text-body-color sm:text-lg dark:text-dark-6">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form, by more and more
            injected humour.
          </p>
          <button className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-medium text-white duration-200 hover:bg-primary/90">
            Get Started for Free
          </button>
        </div>
      </div>

      <div className="absolute left-20 top-0 -z-10">
        <svg
          width="605"
          height="237"
          viewBox="0 0 605 237"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.2" filter="url(#filter0_f_2651_11432)">
            <path
              d="M341.26 -146.484L393.515 -99.0466L172.361 136.563L84.3048 136.563L341.26 -146.484Z"
              fill="#8646F4"
            />
            <path
              d="M452.745 -208.391L505 -160.953L283.846 74.6569L195.79 74.6569L452.745 -208.391Z"
              fill="#18BFFF"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_2651_11432"
              x="-15.6953"
              y="-308.391"
              width="620.695"
              height="544.954"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="50"
                result="effect1_foregroundBlur_2651_11432"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="absolute bottom-0 right-6 -z-10">
        <svg
          width="531"
          height="197"
          viewBox="0 0 531 197"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.2" filter="url(#filter0_f_2651_11493)">
            <path
              d="M264.045 383.485L211.79 336.048L432.944 100.438L521 100.438L264.045 383.485Z"
              fill="#8646F4"
            />
            <path
              d="M152.56 445.392L100.305 397.954L321.459 162.344L409.515 162.344L152.56 445.392Z"
              fill="#18BFFF"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_2651_11493"
              x="0.304688"
              y="0.437744"
              width="620.695"
              height="544.954"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="50"
                result="effect1_foregroundBlur_2651_11493"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </section>
  );
}
