import React from "react";

const Contact4 = () => {
  return (
    <section className="relative z-40 overflow-hidden bg-white py-20 dark:bg-dark lg:py-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div className="mb-14 w-full lg:mb-0">
              <h2 className="mb-6 text-[32px] font-bold leading-tight text-dark dark:text-white sm:text-[42px] md:pr-5">
                Let’s chat. <br />
                Tell us about your project.
              </h2>
              <p className="mb-8 text-base text-body-color dark:text-dark-6">
                Let’s create something together
              </p>

              <div className="flex w-max items-center rounded-lg bg-white p-5 shadow-[0px_4px_16px_0px_rgba(0,0,0,0.04)] dark:bg-dark-2">
                <div className="mr-4 flex h-11 min-w-[44px] items-center justify-center rounded-xl bg-primary/5 text-primary">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.25 3.30005H2.74998C1.58123 3.30005 0.584351 4.26255 0.584351 5.46567V16.6032C0.584351 17.7719 1.54685 18.7688 2.74998 18.7688H19.25C20.4187 18.7688 21.4156 17.8063 21.4156 16.6032V5.4313C21.4156 4.26255 20.4187 3.30005 19.25 3.30005ZM19.25 4.84692C19.2843 4.84692 19.3187 4.84692 19.3531 4.84692L11 10.2094L2.64685 4.84692C2.68123 4.84692 2.7156 4.84692 2.74998 4.84692H19.25ZM19.25 17.1532H2.74998C2.40623 17.1532 2.13123 16.8782 2.13123 16.5344V6.35942L10.175 11.5157C10.4156 11.6875 10.6906 11.7563 10.9656 11.7563C11.2406 11.7563 11.5156 11.6875 11.7562 11.5157L19.8 6.35942V16.5688C19.8687 16.9125 19.5937 17.1532 19.25 17.1532Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="w-full">
                  <span className="block text-sm font-medium text-body-color dark:text-dark-6">
                    Mail us at
                  </span>
                  <a
                    href="javascript;void(0)"
                    className="text-base font-semibold text-primary"
                  >
                    contact@tailgrids.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="relative z-20">
              <div className="rounded-xl bg-primary px-8 py-10 sm:p-[60px]">
                <h2 className="mb-8 text-2xl font-bold text-white sm:text-[28px]">
                  Send us a message
                </h2>
                <form>
                  <InputBox type="text" name="name" placeholder="Full Name*" />
                  <InputBox
                    type="email"
                    name="email"
                    placeholder="Email Address*"
                  />
                  <InputBox type="text" name="subject" placeholder="Subject*" />
                  <TextArea
                    labelTitle="Tell us more about your project"
                    row="4"
                    placeholder="Type your message*"
                    name="details"
                    defaultValue=""
                  />
                  <div>
                    <button
                      type="submit"
                      className="w-full rounded-md bg-white px-10 py-3 text-center text-base font-semibold text-black transition hover:bg-white/90"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
                <div>
                  <span className="absolute -left-6 -top-6 z-[-1]">
                    <svg
                      width="48"
                      height="134"
                      viewBox="0 0 48 134"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="45.6673"
                        cy="132"
                        r="1.66667"
                        transform="rotate(180 45.6673 132)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="45.6673"
                        cy="117.333"
                        r="1.66667"
                        transform="rotate(180 45.6673 117.333)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="45.6673"
                        cy="102.667"
                        r="1.66667"
                        transform="rotate(180 45.6673 102.667)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="45.6673"
                        cy="88.0001"
                        r="1.66667"
                        transform="rotate(180 45.6673 88.0001)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="45.6673"
                        cy="73.3333"
                        r="1.66667"
                        transform="rotate(180 45.6673 73.3333)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="45.6673"
                        cy="45.0001"
                        r="1.66667"
                        transform="rotate(180 45.6673 45.0001)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="45.6673"
                        cy="16.0001"
                        r="1.66667"
                        transform="rotate(180 45.6673 16.0001)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="45.6673"
                        cy="59.0001"
                        r="1.66667"
                        transform="rotate(180 45.6673 59.0001)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="45.6673"
                        cy="30.6668"
                        r="1.66667"
                        transform="rotate(180 45.6673 30.6668)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="45.6673"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(180 45.6673 1.66683)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="31.0013"
                        cy="132"
                        r="1.66667"
                        transform="rotate(180 31.0013 132)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="31.0013"
                        cy="117.333"
                        r="1.66667"
                        transform="rotate(180 31.0013 117.333)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="31.0013"
                        cy="102.667"
                        r="1.66667"
                        transform="rotate(180 31.0013 102.667)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="31.0013"
                        cy="88.0001"
                        r="1.66667"
                        transform="rotate(180 31.0013 88.0001)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="31.0013"
                        cy="73.3333"
                        r="1.66667"
                        transform="rotate(180 31.0013 73.3333)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="31.0013"
                        cy="45.0001"
                        r="1.66667"
                        transform="rotate(180 31.0013 45.0001)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="31.0013"
                        cy="16.0001"
                        r="1.66667"
                        transform="rotate(180 31.0013 16.0001)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="31.0013"
                        cy="59.0001"
                        r="1.66667"
                        transform="rotate(180 31.0013 59.0001)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="31.0013"
                        cy="30.6668"
                        r="1.66667"
                        transform="rotate(180 31.0013 30.6668)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="31.0013"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(180 31.0013 1.66683)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="16.3333"
                        cy="132"
                        r="1.66667"
                        transform="rotate(180 16.3333 132)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="16.3333"
                        cy="117.333"
                        r="1.66667"
                        transform="rotate(180 16.3333 117.333)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="16.3333"
                        cy="102.667"
                        r="1.66667"
                        transform="rotate(180 16.3333 102.667)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="16.3333"
                        cy="88.0001"
                        r="1.66667"
                        transform="rotate(180 16.3333 88.0001)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="16.3333"
                        cy="73.3333"
                        r="1.66667"
                        transform="rotate(180 16.3333 73.3333)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="16.3333"
                        cy="45.0001"
                        r="1.66667"
                        transform="rotate(180 16.3333 45.0001)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="16.3333"
                        cy="16.0001"
                        r="1.66667"
                        transform="rotate(180 16.3333 16.0001)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="16.3333"
                        cy="59.0001"
                        r="1.66667"
                        transform="rotate(180 16.3333 59.0001)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="16.3333"
                        cy="30.6668"
                        r="1.66667"
                        transform="rotate(180 16.3333 30.6668)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="16.3333"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(180 16.3333 1.66683)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="1.66732"
                        cy="132"
                        r="1.66667"
                        transform="rotate(180 1.66732 132)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="1.66732"
                        cy="117.333"
                        r="1.66667"
                        transform="rotate(180 1.66732 117.333)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="1.66732"
                        cy="102.667"
                        r="1.66667"
                        transform="rotate(180 1.66732 102.667)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="1.66732"
                        cy="88.0001"
                        r="1.66667"
                        transform="rotate(180 1.66732 88.0001)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="1.66732"
                        cy="73.3333"
                        r="1.66667"
                        transform="rotate(180 1.66732 73.3333)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="1.66732"
                        cy="45.0001"
                        r="1.66667"
                        transform="rotate(180 1.66732 45.0001)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="1.66732"
                        cy="16.0001"
                        r="1.66667"
                        transform="rotate(180 1.66732 16.0001)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="1.66732"
                        cy="59.0001"
                        r="1.66667"
                        transform="rotate(180 1.66732 59.0001)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="1.66732"
                        cy="30.6668"
                        r="1.66667"
                        transform="rotate(180 1.66732 30.6668)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="1.66732"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(180 1.66732 1.66683)"
                        fill="#13C296"
                      ></circle>
                    </svg>
                  </span>
                  <span className="absolute -bottom-6 -right-6 z-[-1]">
                    <svg
                      width="48"
                      height="134"
                      viewBox="0 0 48 134"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="45.6673"
                        cy="132"
                        r="1.66667"
                        transform="rotate(180 45.6673 132)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="45.6673"
                        cy="117.333"
                        r="1.66667"
                        transform="rotate(180 45.6673 117.333)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="45.6673"
                        cy="102.667"
                        r="1.66667"
                        transform="rotate(180 45.6673 102.667)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="45.6673"
                        cy="88.0001"
                        r="1.66667"
                        transform="rotate(180 45.6673 88.0001)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="45.6673"
                        cy="73.3333"
                        r="1.66667"
                        transform="rotate(180 45.6673 73.3333)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="45.6673"
                        cy="45.0001"
                        r="1.66667"
                        transform="rotate(180 45.6673 45.0001)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="45.6673"
                        cy="16.0001"
                        r="1.66667"
                        transform="rotate(180 45.6673 16.0001)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="45.6673"
                        cy="59.0001"
                        r="1.66667"
                        transform="rotate(180 45.6673 59.0001)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="45.6673"
                        cy="30.6668"
                        r="1.66667"
                        transform="rotate(180 45.6673 30.6668)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="45.6673"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(180 45.6673 1.66683)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="31.0013"
                        cy="132"
                        r="1.66667"
                        transform="rotate(180 31.0013 132)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="31.0013"
                        cy="117.333"
                        r="1.66667"
                        transform="rotate(180 31.0013 117.333)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="31.0013"
                        cy="102.667"
                        r="1.66667"
                        transform="rotate(180 31.0013 102.667)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="31.0013"
                        cy="88.0001"
                        r="1.66667"
                        transform="rotate(180 31.0013 88.0001)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="31.0013"
                        cy="73.3333"
                        r="1.66667"
                        transform="rotate(180 31.0013 73.3333)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="31.0013"
                        cy="45.0001"
                        r="1.66667"
                        transform="rotate(180 31.0013 45.0001)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="31.0013"
                        cy="16.0001"
                        r="1.66667"
                        transform="rotate(180 31.0013 16.0001)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="31.0013"
                        cy="59.0001"
                        r="1.66667"
                        transform="rotate(180 31.0013 59.0001)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="31.0013"
                        cy="30.6668"
                        r="1.66667"
                        transform="rotate(180 31.0013 30.6668)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="31.0013"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(180 31.0013 1.66683)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="16.3333"
                        cy="132"
                        r="1.66667"
                        transform="rotate(180 16.3333 132)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="16.3333"
                        cy="117.333"
                        r="1.66667"
                        transform="rotate(180 16.3333 117.333)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="16.3333"
                        cy="102.667"
                        r="1.66667"
                        transform="rotate(180 16.3333 102.667)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="16.3333"
                        cy="88.0001"
                        r="1.66667"
                        transform="rotate(180 16.3333 88.0001)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="16.3333"
                        cy="73.3333"
                        r="1.66667"
                        transform="rotate(180 16.3333 73.3333)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="16.3333"
                        cy="45.0001"
                        r="1.66667"
                        transform="rotate(180 16.3333 45.0001)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="16.3333"
                        cy="16.0001"
                        r="1.66667"
                        transform="rotate(180 16.3333 16.0001)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="16.3333"
                        cy="59.0001"
                        r="1.66667"
                        transform="rotate(180 16.3333 59.0001)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="16.3333"
                        cy="30.6668"
                        r="1.66667"
                        transform="rotate(180 16.3333 30.6668)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="16.3333"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(180 16.3333 1.66683)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="1.66732"
                        cy="132"
                        r="1.66667"
                        transform="rotate(180 1.66732 132)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="1.66732"
                        cy="117.333"
                        r="1.66667"
                        transform="rotate(180 1.66732 117.333)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="1.66732"
                        cy="102.667"
                        r="1.66667"
                        transform="rotate(180 1.66732 102.667)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="1.66732"
                        cy="88.0001"
                        r="1.66667"
                        transform="rotate(180 1.66732 88.0001)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="1.66732"
                        cy="73.3333"
                        r="1.66667"
                        transform="rotate(180 1.66732 73.3333)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="1.66732"
                        cy="45.0001"
                        r="1.66667"
                        transform="rotate(180 1.66732 45.0001)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="1.66732"
                        cy="16.0001"
                        r="1.66667"
                        transform="rotate(180 1.66732 16.0001)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="1.66732"
                        cy="59.0001"
                        r="1.66667"
                        transform="rotate(180 1.66732 59.0001)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="1.66732"
                        cy="30.6668"
                        r="1.66667"
                        transform="rotate(180 1.66732 30.6668)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="1.66732"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(180 1.66732 1.66683)"
                        fill="#13C296"
                      ></circle>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <span className="absolute left-0 top-0 z-[-1]">
          <svg
            width="518"
            height="818"
            viewBox="0 0 518 818"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_f)">
              <ellipse
                cx="19.7737"
                cy="319.774"
                rx="364"
                ry="364"
                transform="rotate(-45 19.7737 319.774)"
                fill="url(#paint0_linear)"
              />
            </g>
            <defs>
              <filter
                id="filter0_f"
                x="-478.227"
                y="-178.226"
                width="996"
                height="996"
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
                  stdDeviation="67"
                  result="effect1_foregroundBlur"
                />
              </filter>
              <linearGradient
                id="paint0_linear"
                x1="19.7737"
                y1="-44.2263"
                x2="19.7737"
                y2="683.774"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#13C296" stop-opacity="0.4" />
                <stop offset="1" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </span>
        <span className="absolute bottom-0 right-0 z-[-1] dark:opacity-10">
          <svg
            width="1243"
            height="716"
            viewBox="0 0 1243 716"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.5 738C62.5 703.667 138 633 317 625.5C496 618 664 700 792.5 727C921 754 1185 693 1273 547.5"
              stroke="#F3F2FA"
              stroke-width="2"
            />
            <path
              d="M217.5 743.5C224.667 627.5 217.5 390 357.5 275.5C497.5 161 669.5 183 847 246C1024.5 309 1129.5 457 1318.5 435.5"
              stroke="#F3F2FA"
              stroke-width="2"
            />
            <path
              d="M412.499 736.5C394.332 578.833 363 289 602.999 169C842.998 49 1143 183 1271.5 1"
              stroke="#F3F2FA"
              stroke-width="2"
            />
            <path
              d="M426.5 759C476.833 726.833 586.7 632.8 623.5 514C669.5 365.5 1041 175 1277.5 223"
              stroke="#F3F2FA"
              stroke-width="2"
            />
          </svg>
        </span>
      </div>
    </section>
  );
};

export default Contact4;

const InputBox = ({ type, placeholder, name, labelTitle }) => {
  return (
    <div className="mb-6">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className="w-full rounded-lg border border-transparent bg-white/20 px-[14px] py-3 text-base text-white placeholder-white/60 outline-hidden focus:border-white focus-visible:shadow-none"
      />
    </div>
  );
};

const TextArea = ({ row, placeholder, name, defaultValue, labelTitle }) => {
  return (
    <>
      <div className="mb-6">
        <textarea
          rows={row}
          placeholder={placeholder}
          name={name}
          className="w-full resize-none rounded-lg border border-transparent bg-white/20 px-[14px] py-3 text-base text-white placeholder-white/60 outline-hidden focus:border-white focus-visible:shadow-none"
          defaultValue={defaultValue}
        />
        <label className="mt-6 block text-base font-medium text-white">
          {labelTitle}
        </label>
      </div>
    </>
  );
};
