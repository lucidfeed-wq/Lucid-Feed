import React from "react";

const Checkout5 = () => {
  return (
    <>
      <section className="bg-white pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-7/12">
              <div className="mb-12 lg:mb-0 xl:mr-4 2xl:mr-8">
                <div className="mb-10 overflow-hidden rounded-[10px] border border-stroke px-6 py-10 shadow-testimonial-6 dark:border-dark-3 dark:bg-dark-2 dark:shadow-box-dark sm:px-10">
                  <h4 className="mb-9 text-lg font-semibold text-dark dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Personal Information
                  </h4>
                  <div>
                    <div className="mb-5">
                      <div className="-mx-3 flex flex-wrap">
                        <InputGroup
                          half
                          type="text"
                          placeholder="Mark Litho"
                          labelTitle="Full Name"
                        />
                        <InputGroup
                          half
                          type="email"
                          placeholder="yourmail@gmail.com"
                          labelTitle="Email"
                        />
                      </div>
                    </div>

                    <h4 className="mb-9 text-lg font-semibold text-dark dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                      Payment Details
                    </h4>
                    <div className="-mx-3 mb-9 flex">
                      <div className="px-3">
                        <input
                          type="radio"
                          name="paymentDetails"
                          id="paymentDetails1"
                          className="peer payment sr-only"
                        />
                        <label
                          htmlFor="paymentDetails1"
                          className="flex h-11 cursor-pointer items-center overflow-hidden rounded-md border border-stroke bg-transparent px-6 py-3 text-base font-medium text-dark peer-checked:border-transparent peer-checked:bg-primary/5 peer-checked:shadow-border dark:border-dark-3 dark:text-white"
                        >
                          Card
                        </label>
                      </div>
                      <div className="px-3">
                        <input
                          type="radio"
                          name="paymentDetails"
                          id="paymentDetails2"
                          className="peer payment sr-only"
                        />
                        <label
                          htmlFor="paymentDetails2"
                          className="flex h-11 cursor-pointer items-center overflow-hidden rounded-md border border-stroke bg-transparent px-6 py-3 text-base font-medium text-dark peer-checked:border-transparent peer-checked:bg-primary/5 peer-checked:shadow-border dark:border-dark-3 dark:text-white"
                        >
                          <Paypal />
                        </label>
                      </div>
                    </div>

                    <div className="-mx-3 flex flex-wrap">
                      <InputGroup
                        type="text"
                        placeholder="Cardholder Name"
                        labelTitle="Cardholder Name"
                      />
                      <InputGroup
                        type="text"
                        placeholder="Card Number"
                        labelTitle="Card Number"
                        carNumber
                      />
                      <InputGroup
                        type="text"
                        placeholder="MM"
                        labelTitle="Expiration"
                        threeHalf
                      />
                      <InputGroup type="text" placeholder="YYYY" threeHalf />
                      <InputGroup
                        type="text"
                        placeholder="CVC/CVV"
                        labelTitle="CVC/CVV"
                        threeHalf
                      />

                      <div className="w-full px-3">
                        <div className="mb-8">
                          <label
                            for="checkboxLabelTwo"
                            className="flex cursor-pointer select-none items-center"
                          >
                            <div className="relative">
                              <input
                                type="checkbox"
                                id="checkboxLabelTwo"
                                className="peer sr-only"
                              />
                              <div className="mr-[10px] flex h-5 w-5 items-center justify-center rounded-sm border border-stroke bg-transparent peer-checked:border-primary peer-checked:bg-primary dark:border-dark-3">
                                <span className="ml-0.5">
                                  <svg
                                    width="11"
                                    height="8"
                                    viewBox="0 0 11 8"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                                      fill="white"
                                      stroke="white"
                                      stroke-width="0.4"
                                    />
                                  </svg>
                                </span>
                              </div>
                            </div>
                            <span className="text-dark dark:text-white">
                              I agree to the company’s Terms of Service
                            </span>
                          </label>
                        </div>
                      </div>

                      <div className="w-full px-3">
                        <div>
                          <button className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-3 text-center text-base font-medium text-white hover:bg-blue-dark">
                            Confirm Payment
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-5/12">
              <div className="mb-10 overflow-hidden rounded-lg bg-primary px-6 py-10 sm:px-10 lg:px-8 2xl:px-[50px]">
                <h4 className="mb-9 text-lg font-semibold text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Personal Information
                </h4>
                <CartItem
                  img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/checkout/checkout-05/image-01.jpg"
                  title="SaaS - Tailwind CSS Template for SaaS and Software Site"
                  price="$19.00"
                />
                <CartItem
                  img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/checkout/checkout-05/image-02.jpg"
                  title="Lindy UI Kit - Free Bootstrap 5 Startup UI Kit"
                  price="$20.00"
                />
                <CartItem
                  img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/checkout/checkout-05/image-03.jpg"
                  title="Freelancer - CV, Resume and Portfolio HTML Template"
                  price="$14.00"
                />

                <div>
                  <p className="flex items-center justify-between text-base text-white">
                    <span className="font-medium">Total Amount</span>
                    <span className="font-semibold"> $124.99 </span>
                  </p>
                </div>
              </div>

              <div className="mb-10 overflow-hidden rounded-[10px] border border-stroke px-6 py-10 shadow-testimonial-6 dark:border-dark-3 dark:bg-dark-2 dark:shadow-box-dark sm:px-10 lg:px-8 2xl:px-10">
                <div className="mb-8 border-b border-stroke pb-3 dark:border-dark-3">
                  <h3 className="mb-1 text-lg font-semibold text-dark dark:text-white">
                    Coupon Code
                  </h3>
                  <p className="text-sm text-body-color dark:text-dark-6">
                    Enter code to get discount instantly
                  </p>
                </div>

                <form className="relative">
                  <input
                    type="text"
                    placeholder="Coupon code"
                    className="w-full rounded-lg border border-stroke bg-transparent py-3 pl-5 pr-20 text-body-color outline-hidden transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD] dark:border-dark-3 dark:text-dark-6"
                  />
                  <button className="absolute right-2 top-1/2 mb-3 h-[34px] -translate-y-1/2 rounded-sm bg-primary px-5 text-sm font-semibold text-white transition hover:bg-blue-dark">
                    Apply
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout5;

const CartItem = ({ img, title, price }) => {
  return (
    <div className="mb-8 flex items-center border-b border-dashed border-white/30 pb-8">
      <div className="mr-4 h-[70px] w-full max-w-[70px] overflow-hidden rounded-lg sm:mr-6 sm:max-w-[100px] lg:mr-4 lg:max-w-[80px] xl:mr-6 xl:max-w-[100px]">
        <img
          src={img}
          alt="product image"
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="w-full">
        <div className="w-full">
          <p className="mb-0.5 text-sm text-white sm:text-base">{title}</p>
          <p className="text-base font-medium text-white">{price}</p>
        </div>
      </div>
    </div>
  );
};

const InputGroup = ({
  type,
  placeholder,
  labelTitle,
  threeHalf,
  half,
  carNumber,
}) => {
  return (
    <div
      className={`w-full px-3 ${
        (threeHalf && "self-end md:w-1/3") || (half && "md:w-1/2")
      }`}
    >
      <div className="mb-6">
        {labelTitle && (
          <label className="mb-2.5 block text-base font-medium text-dark dark:text-white">
            {labelTitle}
          </label>
        )}
        <div className="relative">
          <input
            type={type}
            placeholder={placeholder}
            className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-body-color outline-hidden transition placeholder:text-dark-5 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD] dark:border-dark-3 dark:text-dark-6"
          />
          {carNumber && (
            <span className="absolute right-5 top-1/2 -translate-y-1/2">
              <svg
                width="60"
                height="10"
                viewBox="0 0 60 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M53.617 1.03516H49.1125V8.96614H53.617V1.03516Z"
                  fill="#F26122"
                ></path>
                <path
                  d="M49.6008 4.99991C49.5922 3.4701 50.3068 2.02137 51.5378 1.06982C49.4309 -0.542193 46.4047 -0.308103 44.5861 1.60748C42.7675 3.52315 42.7675 6.47691 44.5861 8.39258C46.4047 10.308 49.4309 10.5423 51.5378 8.93006C50.3068 7.97869 49.5922 6.52997 49.6008 4.99991Z"
                  fill="#EA1D25"
                ></path>
                <path
                  d="M59.8542 4.99987C59.8524 6.91413 58.7293 8.65997 56.9598 9.49664C55.1909 10.3333 53.0859 10.1145 51.5378 8.93291C53.7674 7.22479 54.1531 4.08261 52.4008 1.91136C52.1493 1.5969 51.8598 1.31348 51.5378 1.06725C53.0859 -0.114461 55.1909 -0.333395 56.9598 0.503353C58.7293 1.34011 59.8524 3.08592 59.8542 4.99987Z"
                  fill="#F69E1E"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22.3133 6.76452C22.3197 5.16311 20.9958 4.4717 19.968 3.93446C19.3175 3.59473 18.7857 3.31687 18.7857 2.90986C18.7857 2.56295 19.1224 2.19564 19.839 2.1008C20.6909 2.01676 21.5504 2.1656 22.3235 2.53176L22.7663 0.430964C22.0122 0.14886 21.2131 0.00300476 20.4076 0C17.9224 0 16.1952 1.3235 16.1952 3.21421C16.1952 4.61152 17.4485 5.38882 18.3963 5.85096C19.3441 6.31317 19.7126 6.63849 19.7018 7.05865C19.7018 7.70991 18.923 8.00397 18.1962 8.01477C17.2999 8.0262 16.4156 7.80952 15.6266 7.38453L15.1737 9.48532C16.0662 9.83287 17.0172 10.0076 17.9752 9.99975C20.6178 9.99975 22.3559 8.69722 22.3661 6.68048L22.3133 6.76452ZM15.4793 0.168667L13.3734 9.88451H10.8463L12.9522 0.168667H15.4793ZM26.0728 6.4704L27.3992 2.82588L28.1685 6.4704H26.0728ZM31.2221 9.91628H28.8844L28.5788 8.46675H25.4096L24.8931 9.91628H22.2396L26.02 0.914144C26.1941 0.485583 26.6089 0.204076 27.0733 0.199877H29.1792L31.2221 9.91628ZM7.84476 9.85269L11.9307 0.136853H9.19278L6.57107 6.7435L5.51783 1.12422C5.42444 0.552805 4.92895 0.134452 4.34896 0.136853H0.0635294L0 0.420157C0.8595 0.58822 1.69485 0.863127 2.48511 1.23946C2.82179 1.39732 3.04985 1.72085 3.08543 2.09057L5.09666 9.85269H7.84476Z"
                  fill="#212B36"
                ></path>
              </svg>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const Paypal = () => {
  return (
    <svg
      width={67}
      height={16}
      viewBox="0 0 67 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1759_423)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.76278 3.76562H10.2756C12.6986 3.76562 13.6108 4.99227 13.4698 6.79438C13.2368 9.76956 11.4382 11.4156 9.05248 11.4156H7.84797C7.52063 11.4156 7.30046 11.6322 7.21193 12.2194L6.70054 15.6325C6.66675 15.8539 6.55026 15.982 6.37553 15.9995H3.54014C3.27338 15.9995 3.17902 15.7956 3.24891 15.3541L4.97764 4.41215C5.0452 3.97415 5.28517 3.76562 5.76278 3.76562Z"
          fill="#009EE3"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25.3554 3.5625C26.8779 3.5625 28.2828 4.38842 28.0906 6.44681C27.8576 8.89312 26.5471 10.2467 24.4794 10.2526H22.6726C22.4128 10.2526 22.287 10.4646 22.2195 10.8991L21.87 13.1206C21.8176 13.4561 21.6452 13.6215 21.3912 13.6215H19.7103C19.4423 13.6215 19.3491 13.4502 19.4085 13.067L20.796 4.16359C20.8647 3.72559 21.0289 3.5625 21.3283 3.5625H25.3519H25.3554ZM22.6179 8.3293H23.9866C24.8428 8.29668 25.4113 7.70374 25.4684 6.63436C25.5033 5.97386 25.0572 5.5009 24.3478 5.5044L23.0594 5.51023L22.6179 8.3293ZM32.6605 12.94C32.8143 12.8002 32.9704 12.728 32.9483 12.9004L32.8935 13.3128C32.8656 13.5283 32.9506 13.6424 33.151 13.6424H34.6444C34.896 13.6424 35.0183 13.5411 35.0801 13.152L36.0003 7.37641C36.0469 7.08634 35.9759 6.94423 35.7557 6.94423H34.1132C33.9652 6.94423 33.893 7.02693 33.8546 7.25293L33.794 7.60822C33.7625 7.79344 33.6775 7.82606 33.5983 7.63968C33.3199 6.98034 32.6093 6.68445 31.6179 6.70775C29.3149 6.75551 27.7621 8.50404 27.5955 10.7453C27.4674 12.4787 28.7092 13.8405 30.347 13.8405C31.5352 13.8405 32.0664 13.491 32.6652 12.9435L32.6605 12.94ZM31.4094 12.0512C30.4181 12.0512 29.7273 11.2602 29.8706 10.291C30.0139 9.3218 30.9411 8.53083 31.9325 8.53083C32.9238 8.53083 33.6146 9.3218 33.4713 10.291C33.328 11.2602 32.4019 12.0512 31.4094 12.0512ZM38.9231 6.92559H37.4087C37.0965 6.92559 36.9695 7.15857 37.0686 7.44513L38.9487 12.9505L37.1047 15.5704C36.9497 15.7894 37.0697 15.9886 37.2876 15.9886H38.9895C39.0887 16 39.1891 15.9827 39.2787 15.9387C39.3683 15.8948 39.4434 15.8259 39.4951 15.7404L45.2777 7.4463C45.4559 7.19119 45.372 6.92326 45.0796 6.92326H43.4686C43.1925 6.92326 43.0818 7.03276 42.9234 7.26225L40.512 10.757L39.4345 7.25409C39.3716 7.04208 39.2143 6.92559 38.9243 6.92559H38.9231Z"
          fill="#113984"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M51.2932 3.56288C52.8157 3.56288 54.2206 4.3888 54.0284 6.44719C53.7954 8.8935 52.4849 10.2471 50.4172 10.2529H48.6116C48.3518 10.2529 48.226 10.465 48.1584 10.8995L47.809 13.1209C47.7565 13.4564 47.5841 13.6219 47.3302 13.6219H45.6492C45.3813 13.6219 45.2881 13.4506 45.3475 13.0674L46.7372 4.16164C46.806 3.72363 46.9702 3.56055 47.2696 3.56055H51.2932V3.56288ZM48.5557 8.32968H49.9244C50.7806 8.29706 51.3491 7.70412 51.4062 6.63474C51.4411 5.97424 50.995 5.50128 50.2856 5.50478L48.9972 5.5106L48.5557 8.32968ZM58.5983 12.9404C58.7521 12.8006 58.9082 12.7284 58.8861 12.9008L58.8313 13.3131C58.8034 13.5287 58.8884 13.6428 59.0888 13.6428H60.5822C60.8338 13.6428 60.9561 13.5415 61.0179 13.1524L61.9381 7.37678C61.9847 7.08672 61.9137 6.9446 61.6935 6.9446H60.0533C59.9054 6.9446 59.8332 7.02731 59.7947 7.2533L59.7341 7.6086C59.7027 7.79382 59.6176 7.82644 59.5384 7.64005C59.26 6.98072 58.5494 6.68483 57.5581 6.70813C55.2551 6.75589 53.7022 8.50442 53.5357 10.7457C53.4075 12.4791 54.6493 13.8409 56.2872 13.8409C57.4754 13.8409 58.0066 13.4914 58.6053 12.9439L58.5983 12.9404ZM57.3484 12.0516C56.3571 12.0516 55.6663 11.2606 55.8096 10.2914C55.9528 9.32218 56.8801 8.53121 57.8714 8.53121C58.8628 8.53121 59.5536 9.32218 59.4103 10.2914C59.267 11.2606 58.3397 12.0516 57.3484 12.0516ZM64.2365 13.6521H62.5124C62.4825 13.6535 62.4525 13.6482 62.4248 13.6366C62.3971 13.6251 62.3723 13.6075 62.3522 13.5853C62.332 13.563 62.3171 13.5366 62.3083 13.5079C62.2996 13.4792 62.2973 13.4489 62.3016 13.4192L63.816 3.82498C63.8304 3.7595 63.8666 3.70085 63.9186 3.65854C63.9707 3.61624 64.0355 3.59279 64.1025 3.592H65.8266C65.8566 3.59066 65.8865 3.59596 65.9142 3.60752C65.9419 3.61907 65.9667 3.63661 65.9869 3.65886C66.007 3.68112 66.022 3.70755 66.0307 3.73627C66.0395 3.76498 66.0418 3.79528 66.0375 3.82498L64.5231 13.4192C64.5091 13.4851 64.4731 13.5443 64.421 13.587C64.3689 13.6298 64.3039 13.6536 64.2365 13.6545V13.6521Z"
          fill="#009EE3"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.94052 0H7.45802C8.7301 0 10.2398 0.0407717 11.2486 0.931926C11.9231 1.52719 12.2772 2.47426 12.1957 3.49472C11.9184 6.94401 9.8554 8.87659 7.08758 8.87659H4.86028C4.48052 8.87659 4.23007 9.12821 4.12289 9.80851L3.50083 13.7692C3.46006 14.0255 3.3494 14.1769 3.15136 14.1956H0.363743C0.0550431 14.1956 -0.0544591 13.9626 0.0259194 13.4477L2.02956 0.752529C2.10994 0.2423 2.39068 0 2.94052 0Z"
          fill="#113984"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.18787 9.40727L4.97651 4.41332C5.04524 3.97531 5.28521 3.76562 5.76282 3.76562H10.2757C11.0224 3.76562 11.627 3.88212 12.0999 4.09762C11.6468 7.16832 9.6606 8.87374 7.06053 8.87374H4.83672C4.5385 8.87491 4.3195 9.02402 4.18787 9.40727Z"
          fill="#172C70"
        />
      </g>
      <defs>
        <clipPath id="clip0_1759_423">
          <rect width={66.0421} height={16} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
