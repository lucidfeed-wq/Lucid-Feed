import React from "react";

function PromptToImageFour() {
  return (
    <section className="bg-gray-2 py-20 dark:bg-dark lg:py-[120px]">
      <div className="container space-y-24">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="w-full rounded-2xl bg-white p-7 dark:bg-dark-2">
            <div className="w-full">
              <div className="mb-7">
                <label
                  htmlFor=""
                  className="mb-5 block text-lg font-medium text-dark dark:text-white"
                >
                  What image do you want to generate?
                </label>

                <textarea
                  name=""
                  id=""
                  rows="5"
                  placeholder="Generated content will appear here..."
                  className="mb-4 w-full rounded-lg border border-stroke bg-transparent p-5 text-dark placeholder-dark-7 outline-hidden focus:border-primary dark:border-dark-3 dark:text-white"
                ></textarea>
                <p className="flex items-center gap-2.5 text-base text-body-color dark:text-dark-6">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.1875 14.0937L16.7188 11.5312C16.4375 11.2499 16 11.2499 15.7188 11.4999C15.4375 11.7812 15.4375 12.2187 15.6875 12.4999L17.2188 14.0624H13.9688L10.7188 9.99993L13.9688 5.90618H17.1875L15.6562 7.46868C15.375 7.74993 15.4062 8.18743 15.6875 8.46868C15.8125 8.59368 16 8.65618 16.1875 8.65618C16.375 8.65618 16.5625 8.59368 16.6875 8.43743L19.1562 5.87493C19.5312 5.49993 19.5312 4.87493 19.1562 4.46868L16.6875 1.90618C16.4062 1.62493 15.9688 1.62493 15.6875 1.87493C15.4062 2.15618 15.4062 2.59368 15.6562 2.87493L17.1875 4.43743H13.7812C13.4687 4.43743 13.1875 4.56243 13 4.81243L9.8125 8.87493L6.625 4.87493C6.4375 4.62493 6.15625 4.49993 5.84375 4.49993H1.25C0.875 4.49993 0.53125 4.81243 0.53125 5.21868C0.53125 5.62493 0.84375 5.93743 1.25 5.93743H5.65625L8.9375 9.99993L5.65625 14.0937H1.25C0.875 14.0937 0.53125 14.4062 0.53125 14.8124C0.53125 15.2187 0.84375 15.5312 1.25 15.5312H5.84375C6.15625 15.5312 6.4375 15.4062 6.625 15.1562L9.8125 11.1874L13 15.1562C13.1875 15.4062 13.4687 15.5312 13.7812 15.5312H17.1875L15.6562 17.0937C15.375 17.3749 15.4062 17.8124 15.6875 18.0937C15.8125 18.2187 16 18.2812 16.1875 18.2812C16.375 18.2812 16.5625 18.2187 16.6875 18.0624L19.1562 15.4999C19.5312 15.0937 19.5312 14.4687 19.1875 14.0937Z"
                      fill="currentColor"
                    />
                  </svg>
                  Random prompt
                </p>
              </div>

              <div className="mb-10 space-y-5">
                <div>
                  <label
                    htmlFor=""
                    className="mb-2.5 block text-base text-dark dark:text-white"
                  >
                    Style
                    <span className="text-body-color dark:text-dark-6">
                      (optional)
                    </span>
                  </label>

                  <div className="relative">
                    <select
                      name=""
                      id=""
                      className="w-full appearance-none rounded-lg border border-stroke bg-transparent py-3 pl-5 pr-10 text-dark outline-hidden dark:border-dark-3 dark:text-white"
                    >
                      <option value="">Style One</option>
                      <option value="">Style Two</option>
                      <option value="">Style Three</option>
                    </select>
                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-dark dark:text-white">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 11.4C7.85 11.4 7.725 11.35 7.6 11.25L1.85 5.6C1.625 5.375 1.625 5.025 1.85 4.8C2.075 4.575 2.425 4.575 2.65 4.8L8 10.025L13.35 4.75C13.575 4.525 13.925 4.525 14.15 4.75C14.375 4.975 14.375 5.325 14.15 5.55L8.4 11.2C8.275 11.325 8.15 11.4 8 11.4Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor=""
                    className="mb-2.5 block text-base text-dark dark:text-white"
                  >
                    Artist
                    <span className="text-body-color dark:text-dark-6">
                      (optional)
                    </span>
                  </label>

                  <div className="relative">
                    <select
                      name=""
                      id=""
                      className="w-full appearance-none rounded-lg border border-stroke bg-transparent py-3 pl-5 pr-10 text-dark outline-hidden dark:border-dark-3 dark:text-white"
                    >
                      <option value="">Artist One</option>
                      <option value="">Artist Two</option>
                      <option value="">Artist Three</option>
                    </select>
                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-dark dark:text-white">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 11.4C7.85 11.4 7.725 11.35 7.6 11.25L1.85 5.6C1.625 5.375 1.625 5.025 1.85 4.8C2.075 4.575 2.425 4.575 2.65 4.8L8 10.025L13.35 4.75C13.575 4.525 13.925 4.525 14.15 4.75C14.375 4.975 14.375 5.325 14.15 5.55L8.4 11.2C8.275 11.325 8.15 11.4 8 11.4Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor=""
                    className="mb-2.5 block text-base text-dark dark:text-white"
                  >
                    Dimensions
                    <span className="text-body-color dark:text-dark-6">
                      (optional)
                    </span>
                  </label>

                  <div className="relative">
                    <select
                      name=""
                      id=""
                      className="w-full appearance-none rounded-lg border border-stroke bg-transparent py-3 pl-5 pr-10 text-dark outline-hidden dark:border-dark-3 dark:text-white"
                    >
                      <option value="">800*400</option>
                      <option value="">1200*600</option>
                      <option value="">1600*800</option>
                    </select>
                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-dark dark:text-white">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 11.4C7.85 11.4 7.725 11.35 7.6 11.25L1.85 5.6C1.625 5.375 1.625 5.025 1.85 4.8C2.075 4.575 2.425 4.575 2.65 4.8L8 10.025L13.35 4.75C13.575 4.525 13.925 4.525 14.15 4.75C14.375 4.975 14.375 5.325 14.15 5.55L8.4 11.2C8.275 11.325 8.15 11.4 8 11.4Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-8 sm:flex-nowrap">
                <button className="inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-stroke bg-transparent px-5 py-3 text-base font-medium text-dark dark:border-dark-3 dark:text-white">
                  <span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_2015_2370)">
                        <path
                          d="M8.80002 7.9999L14.9 1.8999C15.125 1.6749 15.125 1.3249 14.9 1.0999C14.675 0.874902 14.325 0.874902 14.1 1.0999L8.00002 7.1999L1.90002 1.0999C1.67502 0.874902 1.32502 0.874902 1.10002 1.0999C0.875024 1.3249 0.875024 1.6749 1.10002 1.8999L7.20002 7.9999L1.10002 14.0999C0.875024 14.3249 0.875024 14.6749 1.10002 14.8999C1.20002 14.9999 1.35002 15.0749 1.50002 15.0749C1.65002 15.0749 1.80002 15.0249 1.90002 14.8999L8.00002 8.7999L14.1 14.8999C14.2 14.9999 14.35 15.0749 14.5 15.0749C14.65 15.0749 14.8 15.0249 14.9 14.8999C15.125 14.6749 15.125 14.3249 14.9 14.0999L8.80002 7.9999Z"
                          fill="currentColor"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2015_2370">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  Clear inputs
                </button>
                <button className="flex h-12 w-full max-w-[230px] items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-base font-medium text-white hover:bg-primary/90">
                  <span>
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.5833 18.9583C16.35 18.9583 16.1167 18.9083 15.9083 18.8C15.6833 18.6917 15.5333 18.5333 15.25 18.2583L9.87499 12.8833L8.08333 11.0917C7.79999 10.8083 7.64166 10.65 7.53333 10.4333C7.32499 10.0083 7.32499 9.50833 7.53333 9.08333C7.64166 8.85833 7.79999 8.7 8.08333 8.425C8.36666 8.15 8.52499 7.98333 8.74166 7.875C9.16666 7.66667 9.66666 7.66667 10.0917 7.875C10.3167 7.98333 10.475 8.14167 10.75 8.425L17.9083 15.5833C18.1833 15.85 18.3417 16.0167 18.4583 16.2417C18.6667 16.6667 18.6667 17.1667 18.4583 17.5917C18.3417 17.8167 18.1833 17.9833 17.9083 18.2583C17.6333 18.5333 17.4667 18.7 17.2417 18.8083C17.0333 18.9083 16.8 18.9667 16.5667 18.9667L16.5833 18.9583ZM11.2 12.4417L16.1333 17.375C16.275 17.5167 16.425 17.6583 16.4667 17.6917C16.5417 17.725 16.625 17.725 16.7083 17.6917C16.7583 17.6667 16.9 17.525 17.0417 17.3833C17.1833 17.2417 17.3333 17.0917 17.3583 17.0417C17.3917 16.9667 17.3917 16.875 17.3583 16.8C17.3333 16.7583 17.1833 16.6 17.05 16.4667L12.1167 11.5333L11.2083 12.4417H11.2ZM9.42499 8.95833C9.42499 8.95833 9.34166 8.96667 9.30832 8.98333C9.26666 9.00833 9.11666 9.15833 8.97499 9.3C8.83333 9.44167 8.68333 9.59167 8.65833 9.63333C8.62499 9.70833 8.62499 9.8 8.65833 9.875C8.68333 9.91667 8.83333 10.0667 8.97499 10.2083L10.325 11.5583L11.2333 10.65L9.88333 9.3C9.74166 9.15833 9.59166 9.00833 9.54999 8.98333C9.51666 8.96667 9.47499 8.95833 9.43333 8.95833H9.42499Z"
                        fill="white"
                      />
                      <path
                        d="M14.6667 8.95841C14.4083 8.95841 14.175 8.79175 14.0833 8.55008L13.8417 7.88341C13.5333 7.04175 13.4 6.70008 13.1833 6.48341C12.9667 6.26675 12.625 6.13341 11.7917 5.82508L11.125 5.58341C10.8833 5.49175 10.7167 5.25841 10.7167 5.00008C10.7167 4.74175 10.8833 4.50841 11.125 4.41675L11.7917 4.17508C12.6333 3.86675 12.975 3.73341 13.1917 3.51675C13.4083 3.30008 13.5417 2.95841 13.85 2.11675L14.1 1.45008C14.1917 1.20841 14.425 1.04175 14.6833 1.04175C14.9417 1.04175 15.175 1.20841 15.2667 1.45008L15.5083 2.11675C15.8167 2.95841 15.95 3.30008 16.1667 3.51675C16.375 3.72508 16.725 3.85841 17.5583 4.16675L18.2333 4.41675C18.475 4.50841 18.6417 4.74175 18.6417 5.00008C18.6417 5.25841 18.475 5.49175 18.2333 5.58341L17.5667 5.82508C16.7333 6.13341 16.3833 6.26675 16.1667 6.48341C15.95 6.70008 15.8167 7.04175 15.5083 7.88341L15.2583 8.55008C15.1667 8.79175 14.9333 8.95841 14.675 8.95841H14.6667ZM13.1 5.00008C13.5083 5.17508 13.8083 5.34175 14.0667 5.60841C14.325 5.87508 14.5 6.16675 14.675 6.57508C14.85 6.16675 15.025 5.86675 15.2833 5.60841C15.5417 5.35008 15.8417 5.17508 16.25 5.00008C15.8417 4.82508 15.5417 4.65008 15.2833 4.39175C15.025 4.13341 14.85 3.83341 14.675 3.42508C14.5 3.83341 14.325 4.13341 14.0667 4.39175C13.8083 4.65008 13.5083 4.82508 13.1 5.00008Z"
                        fill="white"
                      />
                      <path
                        d="M5.5 8.95825C5.24167 8.95825 5.00833 8.79159 4.91667 8.54992L4.73333 8.04992C4.51667 7.45825 4.41667 7.19159 4.275 7.05825C4.13333 6.92492 3.875 6.81659 3.28333 6.59992L2.78333 6.41659C2.54167 6.32492 2.375 6.09159 2.375 5.83325C2.375 5.57492 2.54167 5.34159 2.78333 5.24992L3.28333 5.06659C3.875 4.84992 4.14167 4.74992 4.275 4.60825C4.40833 4.46659 4.51667 4.20825 4.73333 3.61659L4.91667 3.11659C5.00833 2.87492 5.24167 2.70825 5.5 2.70825C5.75833 2.70825 5.99167 2.87492 6.08333 3.11659L6.26667 3.61659C6.48333 4.20825 6.58333 4.47492 6.725 4.60825C6.86667 4.74159 7.125 4.84992 7.71667 5.06659L8.21667 5.24992C8.45833 5.34159 8.625 5.57492 8.625 5.83325C8.625 6.09159 8.45833 6.32492 8.21667 6.41659L7.71667 6.59992C7.125 6.81659 6.85833 6.91659 6.725 7.05825C6.59167 7.19992 6.48333 7.45825 6.26667 8.04992L6.08333 8.54992C5.99167 8.79159 5.75833 8.95825 5.5 8.95825ZM4.69167 5.83325C4.86667 5.93325 5.025 6.03325 5.15833 6.17492C5.3 6.31659 5.40833 6.46659 5.5 6.64159C5.6 6.45825 5.7 6.30825 5.84167 6.17492C5.98333 6.04159 6.13333 5.92492 6.30833 5.83325C6.13333 5.73325 5.975 5.63325 5.84167 5.49159C5.7 5.34992 5.59167 5.19992 5.5 5.02492C5.4 5.19992 5.3 5.34992 5.15833 5.49159C5.01667 5.63325 4.86667 5.74159 4.69167 5.83325Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  Generate
                </button>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-wrap gap-10 rounded-2xl bg-white p-7 dark:bg-dark-2 lg:flex-nowrap">
            <div className="w-full">
              <div className="mb-7">
                <h3 className="mb-3 block text-xl font-bold text-dark dark:text-white">
                  Generated Image
                </h3>
                <p className="text-base text-body-color dark:text-dark-6">
                  Generated image will be appear here.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex aspect-490/254 w-full items-center justify-center rounded-xl border border-dashed border-gray-5 bg-gray-2 text-dark-7 dark:border-dark-3 dark:bg-white/5 dark:text-dark-6">
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.26367 29.9951C6.26367 18.7993 6.26367 13.2013 9.74177 9.72322C13.2199 6.24512 18.8178 6.24512 30.0137 6.24512C41.2094 6.24512 46.8074 6.24512 50.2857 9.72322C53.7637 13.2013 53.7637 18.7993 53.7637 29.9951C53.7637 41.1909 53.7637 46.7889 50.2857 50.2671C46.8074 53.7451 41.2094 53.7451 30.0137 53.7451C18.8178 53.7451 13.2199 53.7451 9.74177 50.2671C6.26367 46.7889 6.26367 41.1909 6.26367 29.9951Z"
                      stroke="currentColor"
                      stroke-width="3.78506"
                    />
                    <path
                      d="M41.25 22.5C43.3211 22.5 45 20.8211 45 18.75C45 16.6789 43.3211 15 41.25 15C39.1789 15 37.5 16.6789 37.5 18.75C37.5 20.8211 39.1789 22.5 41.25 22.5Z"
                      stroke="currentColor"
                      stroke-width="3.78506"
                    />
                    <path
                      d="M40 55.0068C38.4512 49.444 34.8362 44.462 29.6912 40.8423C24.144 36.939 17.1791 34.8733 10.0392 35.0135C9.19145 35.0115 8.3444 35.0385 7.5 35.0945"
                      stroke="currentColor"
                      stroke-width="3.78506"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M32.5137 44.9931C36.7674 41.6763 41.3499 39.9751 45.9792 39.9933C48.6042 39.9906 51.2167 40.5471 53.7637 41.6473"
                      stroke="currentColor"
                      stroke-width="3.78506"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex aspect-490/254 w-full items-center justify-center rounded-xl border border-dashed border-gray-5 bg-gray-2 text-dark-7 dark:border-dark-3 dark:bg-white/5 dark:text-dark-6">
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.26367 29.9951C6.26367 18.7993 6.26367 13.2013 9.74177 9.72322C13.2199 6.24512 18.8178 6.24512 30.0137 6.24512C41.2094 6.24512 46.8074 6.24512 50.2857 9.72322C53.7637 13.2013 53.7637 18.7993 53.7637 29.9951C53.7637 41.1909 53.7637 46.7889 50.2857 50.2671C46.8074 53.7451 41.2094 53.7451 30.0137 53.7451C18.8178 53.7451 13.2199 53.7451 9.74177 50.2671C6.26367 46.7889 6.26367 41.1909 6.26367 29.9951Z"
                      stroke="currentColor"
                      stroke-width="3.78506"
                    />
                    <path
                      d="M41.25 22.5C43.3211 22.5 45 20.8211 45 18.75C45 16.6789 43.3211 15 41.25 15C39.1789 15 37.5 16.6789 37.5 18.75C37.5 20.8211 39.1789 22.5 41.25 22.5Z"
                      stroke="currentColor"
                      stroke-width="3.78506"
                    />
                    <path
                      d="M40 55.0068C38.4512 49.444 34.8362 44.462 29.6912 40.8423C24.144 36.939 17.1791 34.8733 10.0392 35.0135C9.19145 35.0115 8.3444 35.0385 7.5 35.0945"
                      stroke="currentColor"
                      stroke-width="3.78506"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M32.5137 44.9931C36.7674 41.6763 41.3499 39.9751 45.9792 39.9933C48.6042 39.9906 51.2167 40.5471 53.7637 41.6473"
                      stroke="currentColor"
                      stroke-width="3.78506"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="w-full rounded-2xl bg-white p-7 dark:bg-dark-2">
            <div className="w-full">
              <div className="mb-7">
                <label
                  htmlFor=""
                  className="mb-5 block text-lg font-medium text-dark dark:text-white"
                >
                  What image do you want to generate?
                </label>

                <textarea
                  name=""
                  id=""
                  rows="6"
                  placeholder="Generated content will appear here..."
                  className="mb-4 w-full rounded-lg border border-stroke bg-transparent p-5 text-dark placeholder-dark-7 outline-hidden focus:border-primary dark:border-dark-3 dark:text-white"
                ></textarea>
                <p className="flex items-center gap-2.5 text-base text-body-color dark:text-dark-6">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.1875 14.0937L16.7188 11.5312C16.4375 11.2499 16 11.2499 15.7188 11.4999C15.4375 11.7812 15.4375 12.2187 15.6875 12.4999L17.2188 14.0624H13.9688L10.7188 9.99993L13.9688 5.90618H17.1875L15.6562 7.46868C15.375 7.74993 15.4062 8.18743 15.6875 8.46868C15.8125 8.59368 16 8.65618 16.1875 8.65618C16.375 8.65618 16.5625 8.59368 16.6875 8.43743L19.1562 5.87493C19.5312 5.49993 19.5312 4.87493 19.1562 4.46868L16.6875 1.90618C16.4062 1.62493 15.9688 1.62493 15.6875 1.87493C15.4062 2.15618 15.4062 2.59368 15.6562 2.87493L17.1875 4.43743H13.7812C13.4687 4.43743 13.1875 4.56243 13 4.81243L9.8125 8.87493L6.625 4.87493C6.4375 4.62493 6.15625 4.49993 5.84375 4.49993H1.25C0.875 4.49993 0.53125 4.81243 0.53125 5.21868C0.53125 5.62493 0.84375 5.93743 1.25 5.93743H5.65625L8.9375 9.99993L5.65625 14.0937H1.25C0.875 14.0937 0.53125 14.4062 0.53125 14.8124C0.53125 15.2187 0.84375 15.5312 1.25 15.5312H5.84375C6.15625 15.5312 6.4375 15.4062 6.625 15.1562L9.8125 11.1874L13 15.1562C13.1875 15.4062 13.4687 15.5312 13.7812 15.5312H17.1875L15.6562 17.0937C15.375 17.3749 15.4062 17.8124 15.6875 18.0937C15.8125 18.2187 16 18.2812 16.1875 18.2812C16.375 18.2812 16.5625 18.2187 16.6875 18.0624L19.1562 15.4999C19.5312 15.0937 19.5312 14.4687 19.1875 14.0937Z"
                      fill="currentColor"
                    />
                  </svg>
                  Random prompt
                </p>
              </div>

              <div className="mb-10 space-y-5">
                <div>
                  <label
                    htmlFor=""
                    className="mb-2.5 block text-base text-dark dark:text-white"
                  >
                    Style
                    <span className="text-body-color dark:text-dark-6">
                      (optional)
                    </span>
                  </label>

                  <div className="relative">
                    <select
                      name=""
                      id=""
                      className="w-full appearance-none rounded-lg border border-stroke bg-transparent py-3 pl-5 pr-10 text-dark outline-hidden dark:border-dark-3 dark:text-white"
                    >
                      <option value="">Style One</option>
                      <option value="">Style Two</option>
                      <option value="">Style Three</option>
                    </select>
                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-dark dark:text-white">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 11.4C7.85 11.4 7.725 11.35 7.6 11.25L1.85 5.6C1.625 5.375 1.625 5.025 1.85 4.8C2.075 4.575 2.425 4.575 2.65 4.8L8 10.025L13.35 4.75C13.575 4.525 13.925 4.525 14.15 4.75C14.375 4.975 14.375 5.325 14.15 5.55L8.4 11.2C8.275 11.325 8.15 11.4 8 11.4Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor=""
                    className="mb-2.5 block text-base text-dark dark:text-white"
                  >
                    Artist
                    <span className="text-body-color dark:text-dark-6">
                      (optional)
                    </span>
                  </label>

                  <div className="relative">
                    <select
                      name=""
                      id=""
                      className="w-full appearance-none rounded-lg border border-stroke bg-transparent py-3 pl-5 pr-10 text-dark outline-hidden dark:border-dark-3 dark:text-white"
                    >
                      <option value="">Artist One</option>
                      <option value="">Artist Two</option>
                      <option value="">Artist Three</option>
                    </select>
                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-dark dark:text-white">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 11.4C7.85 11.4 7.725 11.35 7.6 11.25L1.85 5.6C1.625 5.375 1.625 5.025 1.85 4.8C2.075 4.575 2.425 4.575 2.65 4.8L8 10.025L13.35 4.75C13.575 4.525 13.925 4.525 14.15 4.75C14.375 4.975 14.375 5.325 14.15 5.55L8.4 11.2C8.275 11.325 8.15 11.4 8 11.4Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor=""
                    className="mb-2.5 block text-base text-dark dark:text-white"
                  >
                    Dimensions
                    <span className="text-body-color dark:text-dark-6">
                      (optional)
                    </span>
                  </label>

                  <div className="relative">
                    <select
                      name=""
                      id=""
                      className="w-full appearance-none rounded-lg border border-stroke bg-transparent py-3 pl-5 pr-10 text-dark outline-hidden dark:border-dark-3 dark:text-white"
                    >
                      <option value="">800*400</option>
                      <option value="">1200*600</option>
                      <option value="">1600*800</option>
                    </select>
                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-dark dark:text-white">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 11.4C7.85 11.4 7.725 11.35 7.6 11.25L1.85 5.6C1.625 5.375 1.625 5.025 1.85 4.8C2.075 4.575 2.425 4.575 2.65 4.8L8 10.025L13.35 4.75C13.575 4.525 13.925 4.525 14.15 4.75C14.375 4.975 14.375 5.325 14.15 5.55L8.4 11.2C8.275 11.325 8.15 11.4 8 11.4Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-8 sm:flex-nowrap">
                <button className="inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-stroke bg-transparent px-5 py-3 text-base font-medium text-dark dark:border-dark-3 dark:text-white">
                  <span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_2015_2370)">
                        <path
                          d="M8.80002 7.9999L14.9 1.8999C15.125 1.6749 15.125 1.3249 14.9 1.0999C14.675 0.874902 14.325 0.874902 14.1 1.0999L8.00002 7.1999L1.90002 1.0999C1.67502 0.874902 1.32502 0.874902 1.10002 1.0999C0.875024 1.3249 0.875024 1.6749 1.10002 1.8999L7.20002 7.9999L1.10002 14.0999C0.875024 14.3249 0.875024 14.6749 1.10002 14.8999C1.20002 14.9999 1.35002 15.0749 1.50002 15.0749C1.65002 15.0749 1.80002 15.0249 1.90002 14.8999L8.00002 8.7999L14.1 14.8999C14.2 14.9999 14.35 15.0749 14.5 15.0749C14.65 15.0749 14.8 15.0249 14.9 14.8999C15.125 14.6749 15.125 14.3249 14.9 14.0999L8.80002 7.9999Z"
                          fill="currentColor"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2015_2370">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  Clear inputs
                </button>
                <button className="flex h-12 w-full max-w-[230px] items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-base font-medium text-white hover:bg-primary/90">
                  <span>
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.5833 18.9583C16.35 18.9583 16.1167 18.9083 15.9083 18.8C15.6833 18.6917 15.5333 18.5333 15.25 18.2583L9.87499 12.8833L8.08333 11.0917C7.79999 10.8083 7.64166 10.65 7.53333 10.4333C7.32499 10.0083 7.32499 9.50833 7.53333 9.08333C7.64166 8.85833 7.79999 8.7 8.08333 8.425C8.36666 8.15 8.52499 7.98333 8.74166 7.875C9.16666 7.66667 9.66666 7.66667 10.0917 7.875C10.3167 7.98333 10.475 8.14167 10.75 8.425L17.9083 15.5833C18.1833 15.85 18.3417 16.0167 18.4583 16.2417C18.6667 16.6667 18.6667 17.1667 18.4583 17.5917C18.3417 17.8167 18.1833 17.9833 17.9083 18.2583C17.6333 18.5333 17.4667 18.7 17.2417 18.8083C17.0333 18.9083 16.8 18.9667 16.5667 18.9667L16.5833 18.9583ZM11.2 12.4417L16.1333 17.375C16.275 17.5167 16.425 17.6583 16.4667 17.6917C16.5417 17.725 16.625 17.725 16.7083 17.6917C16.7583 17.6667 16.9 17.525 17.0417 17.3833C17.1833 17.2417 17.3333 17.0917 17.3583 17.0417C17.3917 16.9667 17.3917 16.875 17.3583 16.8C17.3333 16.7583 17.1833 16.6 17.05 16.4667L12.1167 11.5333L11.2083 12.4417H11.2ZM9.42499 8.95833C9.42499 8.95833 9.34166 8.96667 9.30832 8.98333C9.26666 9.00833 9.11666 9.15833 8.97499 9.3C8.83333 9.44167 8.68333 9.59167 8.65833 9.63333C8.62499 9.70833 8.62499 9.8 8.65833 9.875C8.68333 9.91667 8.83333 10.0667 8.97499 10.2083L10.325 11.5583L11.2333 10.65L9.88333 9.3C9.74166 9.15833 9.59166 9.00833 9.54999 8.98333C9.51666 8.96667 9.47499 8.95833 9.43333 8.95833H9.42499Z"
                        fill="white"
                      />
                      <path
                        d="M14.6667 8.95841C14.4083 8.95841 14.175 8.79175 14.0833 8.55008L13.8417 7.88341C13.5333 7.04175 13.4 6.70008 13.1833 6.48341C12.9667 6.26675 12.625 6.13341 11.7917 5.82508L11.125 5.58341C10.8833 5.49175 10.7167 5.25841 10.7167 5.00008C10.7167 4.74175 10.8833 4.50841 11.125 4.41675L11.7917 4.17508C12.6333 3.86675 12.975 3.73341 13.1917 3.51675C13.4083 3.30008 13.5417 2.95841 13.85 2.11675L14.1 1.45008C14.1917 1.20841 14.425 1.04175 14.6833 1.04175C14.9417 1.04175 15.175 1.20841 15.2667 1.45008L15.5083 2.11675C15.8167 2.95841 15.95 3.30008 16.1667 3.51675C16.375 3.72508 16.725 3.85841 17.5583 4.16675L18.2333 4.41675C18.475 4.50841 18.6417 4.74175 18.6417 5.00008C18.6417 5.25841 18.475 5.49175 18.2333 5.58341L17.5667 5.82508C16.7333 6.13341 16.3833 6.26675 16.1667 6.48341C15.95 6.70008 15.8167 7.04175 15.5083 7.88341L15.2583 8.55008C15.1667 8.79175 14.9333 8.95841 14.675 8.95841H14.6667ZM13.1 5.00008C13.5083 5.17508 13.8083 5.34175 14.0667 5.60841C14.325 5.87508 14.5 6.16675 14.675 6.57508C14.85 6.16675 15.025 5.86675 15.2833 5.60841C15.5417 5.35008 15.8417 5.17508 16.25 5.00008C15.8417 4.82508 15.5417 4.65008 15.2833 4.39175C15.025 4.13341 14.85 3.83341 14.675 3.42508C14.5 3.83341 14.325 4.13341 14.0667 4.39175C13.8083 4.65008 13.5083 4.82508 13.1 5.00008Z"
                        fill="white"
                      />
                      <path
                        d="M5.5 8.95825C5.24167 8.95825 5.00833 8.79159 4.91667 8.54992L4.73333 8.04992C4.51667 7.45825 4.41667 7.19159 4.275 7.05825C4.13333 6.92492 3.875 6.81659 3.28333 6.59992L2.78333 6.41659C2.54167 6.32492 2.375 6.09159 2.375 5.83325C2.375 5.57492 2.54167 5.34159 2.78333 5.24992L3.28333 5.06659C3.875 4.84992 4.14167 4.74992 4.275 4.60825C4.40833 4.46659 4.51667 4.20825 4.73333 3.61659L4.91667 3.11659C5.00833 2.87492 5.24167 2.70825 5.5 2.70825C5.75833 2.70825 5.99167 2.87492 6.08333 3.11659L6.26667 3.61659C6.48333 4.20825 6.58333 4.47492 6.725 4.60825C6.86667 4.74159 7.125 4.84992 7.71667 5.06659L8.21667 5.24992C8.45833 5.34159 8.625 5.57492 8.625 5.83325C8.625 6.09159 8.45833 6.32492 8.21667 6.41659L7.71667 6.59992C7.125 6.81659 6.85833 6.91659 6.725 7.05825C6.59167 7.19992 6.48333 7.45825 6.26667 8.04992L6.08333 8.54992C5.99167 8.79159 5.75833 8.95825 5.5 8.95825ZM4.69167 5.83325C4.86667 5.93325 5.025 6.03325 5.15833 6.17492C5.3 6.31659 5.40833 6.46659 5.5 6.64159C5.6 6.45825 5.7 6.30825 5.84167 6.17492C5.98333 6.04159 6.13333 5.92492 6.30833 5.83325C6.13333 5.73325 5.975 5.63325 5.84167 5.49159C5.7 5.34992 5.59167 5.19992 5.5 5.02492C5.4 5.19992 5.3 5.34992 5.15833 5.49159C5.01667 5.63325 4.86667 5.74159 4.69167 5.83325Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  Generate
                </button>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-wrap gap-10 rounded-2xl bg-white p-7 dark:bg-dark-2 lg:flex-nowrap">
            <div className="w-full">
              <div className="mb-7">
                <h3 className="mb-3 block text-xl font-bold text-dark dark:text-white">
                  Generated Image
                </h3>
                <p className="text-base text-body-color dark:text-dark-6">
                  Generated image will be appear here.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex aspect-490/254 w-full items-center justify-center overflow-hidden rounded-lg border border-gray-5 bg-gray-2 text-dark-7 dark:border-dark-3">
                  <img
                    src="https://i.ibb.co/7p3gMqp/image-1.jpg"
                    alt="result text"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="flex aspect-490/254 w-full items-center justify-center overflow-hidden rounded-lg border border-gray-5 bg-gray-2 text-dark-7 dark:border-dark-3">
                  <img
                    src="https://i.ibb.co/smQS8CF/image-2.jpg"
                    alt="result text"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PromptToImageFour;
