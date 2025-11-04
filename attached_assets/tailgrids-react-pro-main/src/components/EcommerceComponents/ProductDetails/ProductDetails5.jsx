import React from "react";

const ProductDetails5 = () => {
  return (
    <section className="bg-gray-2 dark:bg-dark pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-8/12">
            <div>
              <div className="rounded-[10px] border border-stroke dark:border-dark-3 bg-white dark:bg-dark-2">
                <div className="overflow-hidden rounded-md p-5">
                  <img
                    src="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products-details/details-05/image-01.jpg"
                    alt="product"
                    className="h-full w-full"
                  />
                </div>

                <div className="p-5 pt-5 pb-9">
                  <h3
                    className="mb-5 text-2xl font-bold text-dark dark:text-white lg:text-2xl xl:leading-[35px] xl:text-[28px]"
                  >
                    SaaSwind - Tailwind CSS SaaS Web Template
                  </h3>
                  <p className="text-body-color dark:text-dark-6 mb-[18px] text-base">
                    SaaSwind is a powerful Tailwind CSS website template for
                    SaaS, web apps, software websites, and other similar
                    websites. It boasts all the essential sections to launch
                    your SaaS website with style and sophistication.
                  </p>

                  <p className="text-body-color dark:text-dark-6 mb-6 text-base">
                    The design is well-thought-out and will look great not only
                    on desktop screens, but also on mobile screens. But that's
                    not all! It comes with a bunch of cool features that will
                    take your website to the next level.
                  </p>

                  <h4 className="mb-[18px] text-xl font-semibold text-dark dark:text-white">
                    Template Features
                  </h4>
                  <div className="space-y-[10px]">
                    <FeaturesItem feature="High-quality Design" />
                    <FeaturesItem feature="All Essential Sections and Pages" />
                    <FeaturesItem feature="Crafted for SaaS and Software sites" />
                    <FeaturesItem feature="Fully Responsive" />
                    <FeaturesItem feature="Detailed Documentation" />
                    <FeaturesItem feature="Fully SEO friendly" />
                  </div>
                </div>

                <div className="border-t border-stroke dark:border-dark-3 px-5 py-5 sm:px-10">
                  <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-1/2">
                      <span className="mb-4 inline-block text-sm font-semibold text-dark dark:text-white">
                        Tags :
                      </span>
                      <div className="flex flex-wrap items-center gap-[10px]">
                        <TagItem tag="Tailwind" />
                        <TagItem tag="Startup" />
                        <TagItem tag="SaaS" />
                      </div>
                    </div>
                    <div className="w-full md:w-1/2">
                      <span className="text-body-color dark:text-dark-6 mb-4 block text-sm font-medium md:text-right">
                        Share this post :
                      </span>
                      <div className="flex flex-wrap md:justify-end gap-3">
                        <a
                          href="/#"
                          className="bg-gray-2 dark:bg-dark text-body-color hover:bg-primary flex h-[34px] w-[34px] items-center justify-center rounded-sm hover:text-white"
                        >
                          <svg
                            width={18}
                            height={18}
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-current"
                          >
                            <path d="M15.3871 1.5H2.58871C1.98387 1.5 1.5 1.98387 1.5 2.58871V15.4113C1.5 15.9919 1.98387 16.5 2.58871 16.5H15.3387C15.9436 16.5 16.4274 16.0161 16.4274 15.4113V2.56452C16.4758 1.98387 15.9919 1.5 15.3871 1.5ZM5.92743 14.25H3.72582V7.1129H5.92743V14.25ZM4.81453 6.12097C4.08872 6.12097 3.53226 5.54032 3.53226 4.83871C3.53226 4.1371 4.11291 3.55645 4.81453 3.55645C5.51614 3.55645 6.09678 4.1371 6.09678 4.83871C6.09678 5.54032 5.56453 6.12097 4.81453 6.12097ZM14.2742 14.25H12.0726V10.7903C12.0726 9.96774 12.0484 8.87903 10.9113 8.87903C9.75001 8.87903 9.58065 9.79839 9.58065 10.7177V14.25H7.37904V7.1129H9.53227V8.10484H9.55646C9.87098 7.52419 10.5726 6.94355 11.6613 6.94355C13.9113 6.94355 14.3226 8.39516 14.3226 10.379V14.25H14.2742Z" />
                          </svg>
                        </a>
                        <a
                          href="/#"
                          className="bg-gray-2 dark:bg-dark text-body-color hover:bg-primary flex h-[34px] w-[34px] items-center justify-center rounded-sm hover:text-white"
                        >
                          <svg
                            width={18}
                            height={18}
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-current"
                          >
                            <path d="M5.70937 16.1437C12.3469 16.1437 15.9469 10.6593 15.9469 5.9062C15.9469 5.7937 15.9469 5.59682 15.9187 5.42807C16.6219 4.92182 17.2406 4.27495 17.7188 3.57182C17.0437 3.8812 16.3688 4.04995 15.6656 4.13432C16.425 3.68432 16.9875 2.9812 17.2406 2.13745C16.5375 2.5312 15.8062 2.84057 14.9344 3.00932C14.2594 2.3062 13.3594 1.8562 12.3187 1.8562C10.3219 1.8562 8.69062 3.48745 8.69062 5.48432C8.69062 5.76557 8.71875 6.04682 8.775 6.32807C5.87813 6.1312 3.23438 4.69682 1.43437 2.5312C1.125 3.0937 0.95625 3.68432 0.95625 4.3312C0.95625 5.59682 1.60312 6.66557 2.5875 7.31245C1.99687 7.28432 1.43438 7.11557 0.95625 6.86245C0.95625 6.89057 0.95625 6.89057 0.95625 6.89057C0.95625 8.6062 2.19375 10.0968 3.825 10.4343C3.51563 10.5187 3.17812 10.5468 2.925 10.5468C2.7 10.5468 2.44687 10.5187 2.25 10.4624C2.72813 11.8968 4.05 12.9375 5.625 12.9656C4.3875 13.9218 2.84062 14.5125 1.18125 14.5125C0.84375 14.5687 0.5625 14.5124 0.28125 14.4843C1.8 15.5531 3.68437 16.1437 5.70937 16.1437Z" />
                          </svg>
                        </a>
                        <a
                          href="/#"
                          className="bg-gray-2 dark:bg-dark text-body-color hover:bg-primary flex h-[34px] w-[34px] items-center justify-center rounded-sm hover:text-white"
                        >
                          <svg
                            width={18}
                            height={18}
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-current"
                          >
                            <path d="M9.9 8.58585V6.07664C9.9 5.10529 10.7059 4.31785 11.7 4.31785H13.5V1.67966L11.0565 1.50912C8.97255 1.36368 7.2 2.97636 7.2 5.01777V8.58585H4.5V11.224H7.2V16.5H9.9V11.224H12.6L13.5 8.58585H9.9Z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full px-4 lg:w-4/12">
            <div className="mb-10 rounded-[10px] bg-white dark:bg-dark-2">
              <div className="border-b border-stroke dark:border-dark-3 pt-[18px] pb-4 px-8">
                <h3 className="text-lg font-semibold text-dark dark:text-white">
                  Download Details
                </h3>
              </div>
              <div className="p-8">
                <DownloadOption
                  id="free"
                  price="Free Lite - $0.00"
                  title="Personal use only"
                />
                <DownloadOption
                  id="starter"
                  price="Starter - $19.00"
                  title="Single site"
                />
                <DownloadOption
                  id="business"
                  price="Business - $39.00"
                  title="Unlimited sites"
                />
                <DownloadOption
                  id="extended"
                  price="Extended - $119.00"
                  title="For paying users"
                />
              </div>
              <div className="border-t border-stroke dark:border-dark-3 pt-7 pb-8 px-8">
                <a
                  href="/#"
                  className="bg-primary flex w-full items-center justify-center rounded-md py-3 px-10 text-center text-base font-medium text-white hover:bg-blue-dark"
                >
                  Purchase Now
                </a>
                <a
                  href="/#"
                  className="mt-4 flex w-full items-center justify-center rounded-md bg-dark py-3 px-10 text-center text-base font-medium text-white hover:bg-dark/90"
                >
                  Live Demo
                </a>
              </div>
            </div>

            <div className="rounded-[10px] bg-white dark:bg-dark-2">
              <div className="border-b border-stroke dark:border-dark-3 pt-[18px] pb-4 px-8">
                <h3 className="text-lg font-semibold text-dark dark:text-white">
                  Template Information
                </h3>
              </div>
              <div className="p-8">
                <p className="mb-[10px] flex text-base font-medium gap-1">
                  <span className="text-dark dark:text-white"> Released on: </span>
                  <span className="text-body-color dark:text-dark-6"> Nov 30, 2022 </span>
                </p>
                <p className="mb-[10px] flex text-base font-medium gap-1">
                  <span className="text-dark dark:text-white"> Last Updated on: </span>
                  <span className="text-body-color dark:text-dark-6"> Dec 13, 2022 </span>
                </p>
                <p className="mb-[10px] flex text-base font-medium gap-1">
                  <span className="text-dark dark:text-white"> Built with: </span>
                  <a href="/#" className="text-primary">
                    Tailwind
                  </a>
                </p>
                <p className="flex text-base font-medium gap-1">
                  <span className="text-dark dark:text-white"> Version: </span>
                  <span className="text-body-color dark:text-dark-6"> 1.0 </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails5;

const DownloadOption = ({ id, price, title }) => {
  return (
    <div className="mb-[14px]">
      <input
        type="radio"
        name="download"
        id={id}
        className="download-radio sr-only"
      />
      <label
        htmlFor={id}
        className="flex cursor-pointer items-center justify-between rounded-md border border-stroke dark:border-dark-3 py-3 px-5"
      >
        <span>
          <span className="block text-base font-medium text-dark dark:text-white">
            {price}
          </span>
          <span className="text-body-color dark:text-dark-6 block text-xs">
            {title}
          </span>
        </span>
        <span className="flex h-6 w-6 items-center justify-center rounded-full border border-stroke dark:border-dark-3 bg-white dark:bg-dark-2">
          <svg
            width={14}
            height={15}
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="icon opacity-0"
          >
            <path
              d="M13.2562 3.43123C13.0593 3.23435 12.7531 3.23435 12.5562 3.43123L5.1187 10.65L1.4437 7.0406C1.24682 6.84373 0.940575 6.8656 0.7437 7.0406C0.546825 7.23748 0.5687 7.54373 0.7437 7.7406L4.61557 11.5031C4.74682 11.6344 4.92182 11.7 5.1187 11.7C5.31557 11.7 5.4687 11.6344 5.62183 11.5031L13.2562 4.08748C13.4531 3.93435 13.4531 3.6281 13.2562 3.43123Z"
              fill="#3758F9"
            />
          </svg>
        </span>
      </label>
    </div>
  );
};
const TagItem = ({ tag }) => {
  return (
    <button className="bg-primary/[0.08] text-dark dark:text-white hover:bg-primary inline-block rounded-sm py-[5px] px-[14px] text-base hover:text-white">
      {tag}
    </button>
  );
};
const FeaturesItem = ({ feature }) => {
  return <p className="text-body-color dark:text-dark-6 text-base">{feature}</p>;
};
