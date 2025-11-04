import React from "react";

function PromptToImageTwo() {
  return (
    <section className="bg-gray-2 py-20 dark:bg-dark lg:py-[120px]">
      <div className="container space-y-24">
        <div className="w-full space-y-7 rounded-2xl bg-white p-7 dark:bg-dark-2">
          <div className="rounded-xl border border-stroke p-8 dark:border-dark-3">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <label
                htmlFor=""
                className="block text-lg font-semibold text-dark dark:text-white"
              >
                Create an image form text prompt
              </label>
              <button className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-dark py-2.5 pl-4 pr-5 font-medium text-white hover:bg-dark/90">
                <span>
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.5832 18.9583C16.3499 18.9583 16.1165 18.9083 15.9082 18.8C15.6832 18.6917 15.5332 18.5333 15.2499 18.2583L9.87487 12.8833L8.0832 11.0917C7.79987 10.8083 7.64154 10.65 7.5332 10.4333C7.32487 10.0083 7.32487 9.50833 7.5332 9.08333C7.64154 8.85833 7.79987 8.7 8.0832 8.425C8.36654 8.15 8.52487 7.98333 8.74154 7.875C9.16654 7.66667 9.66654 7.66667 10.0915 7.875C10.3165 7.98333 10.4749 8.14167 10.7499 8.425L17.9082 15.5833C18.1832 15.85 18.3415 16.0167 18.4582 16.2417C18.6665 16.6667 18.6665 17.1667 18.4582 17.5917C18.3415 17.8167 18.1832 17.9833 17.9082 18.2583C17.6332 18.5333 17.4665 18.7 17.2415 18.8083C17.0332 18.9083 16.7999 18.9667 16.5665 18.9667L16.5832 18.9583ZM11.1999 12.4417L16.1332 17.375C16.2749 17.5167 16.4249 17.6583 16.4665 17.6917C16.5415 17.725 16.6249 17.725 16.7082 17.6917C16.7582 17.6667 16.8999 17.525 17.0415 17.3833C17.1832 17.2417 17.3332 17.0917 17.3582 17.0417C17.3915 16.9667 17.3915 16.875 17.3582 16.8C17.3332 16.7583 17.1832 16.6 17.0499 16.4667L12.1165 11.5333L11.2082 12.4417H11.1999ZM9.42487 8.95833C9.42487 8.95833 9.34154 8.96667 9.3082 8.98333C9.26654 9.00833 9.11654 9.15833 8.97487 9.3C8.8332 9.44167 8.6832 9.59167 8.6582 9.63333C8.62487 9.70833 8.62487 9.8 8.6582 9.875C8.6832 9.91667 8.8332 10.0667 8.97487 10.2083L10.3249 11.5583L11.2332 10.65L9.8832 9.3C9.74154 9.15833 9.59154 9.00833 9.54987 8.98333C9.51654 8.96667 9.47487 8.95833 9.4332 8.95833H9.42487Z"
                      fill="currentColor"
                    />
                    <path
                      d="M14.6668 8.95866C14.4085 8.95866 14.1751 8.79199 14.0835 8.55033L13.8418 7.88366C13.5335 7.04199 13.4001 6.70033 13.1835 6.48366C12.9668 6.26699 12.6251 6.13366 11.7918 5.82533L11.1251 5.58366C10.8835 5.49199 10.7168 5.25866 10.7168 5.00033C10.7168 4.74199 10.8835 4.50866 11.1251 4.41699L11.7918 4.17533C12.6335 3.86699 12.9751 3.73366 13.1918 3.51699C13.4085 3.30033 13.5418 2.95866 13.8501 2.11699L14.1001 1.45033C14.1918 1.20866 14.4251 1.04199 14.6835 1.04199C14.9418 1.04199 15.1751 1.20866 15.2668 1.45033L15.5085 2.11699C15.8168 2.95866 15.9501 3.30033 16.1668 3.51699C16.3751 3.72533 16.7251 3.85866 17.5585 4.16699L18.2335 4.41699C18.4751 4.50866 18.6418 4.74199 18.6418 5.00033C18.6418 5.25866 18.4751 5.49199 18.2335 5.58366L17.5668 5.82533C16.7335 6.13366 16.3835 6.26699 16.1668 6.48366C15.9501 6.70033 15.8168 7.04199 15.5085 7.88366L15.2585 8.55033C15.1668 8.79199 14.9335 8.95866 14.6751 8.95866H14.6668ZM13.1001 5.00033C13.5085 5.17533 13.8085 5.34199 14.0668 5.60866C14.3251 5.87533 14.5001 6.16699 14.6751 6.57533C14.8501 6.16699 15.0251 5.86699 15.2835 5.60866C15.5418 5.35033 15.8418 5.17533 16.2501 5.00033C15.8418 4.82533 15.5418 4.65033 15.2835 4.39199C15.0251 4.13366 14.8501 3.83366 14.6751 3.42533C14.5001 3.83366 14.3251 4.13366 14.0668 4.39199C13.8085 4.65033 13.5085 4.82533 13.1001 5.00033Z"
                      fill="currentColor"
                    />
                    <path
                      d="M5.5 8.95801C5.24167 8.95801 5.00833 8.79134 4.91667 8.54967L4.73333 8.04967C4.51667 7.45801 4.41667 7.19134 4.275 7.05801C4.13333 6.92467 3.875 6.81634 3.28333 6.59967L2.78333 6.41634C2.54167 6.32467 2.375 6.09134 2.375 5.83301C2.375 5.57467 2.54167 5.34134 2.78333 5.24967L3.28333 5.06634C3.875 4.84967 4.14167 4.74967 4.275 4.60801C4.40833 4.46634 4.51667 4.20801 4.73333 3.61634L4.91667 3.11634C5.00833 2.87467 5.24167 2.70801 5.5 2.70801C5.75833 2.70801 5.99167 2.87467 6.08333 3.11634L6.26667 3.61634C6.48333 4.20801 6.58333 4.47467 6.725 4.60801C6.86667 4.74134 7.125 4.84967 7.71667 5.06634L8.21667 5.24967C8.45833 5.34134 8.625 5.57467 8.625 5.83301C8.625 6.09134 8.45833 6.32467 8.21667 6.41634L7.71667 6.59967C7.125 6.81634 6.85833 6.91634 6.725 7.05801C6.59167 7.19967 6.48333 7.45801 6.26667 8.04967L6.08333 8.54967C5.99167 8.79134 5.75833 8.95801 5.5 8.95801ZM4.69167 5.83301C4.86667 5.93301 5.025 6.03301 5.15833 6.17467C5.3 6.31634 5.40833 6.46634 5.5 6.64134C5.6 6.45801 5.7 6.30801 5.84167 6.17467C5.98333 6.04134 6.13333 5.92467 6.30833 5.83301C6.13333 5.73301 5.975 5.63301 5.84167 5.49134C5.7 5.34967 5.59167 5.19967 5.5 5.02467C5.4 5.19967 5.3 5.34967 5.15833 5.49134C5.01667 5.63301 4.86667 5.74134 4.69167 5.83301Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span>I need a inspiration</span>
              </button>
            </div>
            <div className="mb-7">
              <textarea
                name=""
                id=""
                rows="5"
                placeholder="Type here a detailed description of what you want to see"
                className="w-full rounded-lg border border-stroke bg-transparent p-5 text-base text-dark placeholder-dark-6 outline-hidden focus:border-primary dark:border-dark-3 dark:text-white"
              ></textarea>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-4">
                <div className="relative">
                  <select
                    name=""
                    id=""
                    className="w-full appearance-none rounded-lg border border-stroke bg-transparent py-2.5 pl-4 pr-10 text-dark outline-hidden dark:border-dark-3 dark:text-white"
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
                <div className="relative">
                  <select
                    name=""
                    id=""
                    className="w-full appearance-none rounded-lg border border-stroke bg-transparent py-2.5 pl-4 pr-10 text-dark outline-hidden dark:border-dark-3 dark:text-white"
                  >
                    <option value="">Model One</option>
                    <option value="">Model Two</option>
                    <option value="">Model Three</option>
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
                <div className="relative">
                  <select
                    name=""
                    id=""
                    className="w-full appearance-none rounded-lg border border-stroke bg-transparent py-2.5 pl-4 pr-10 text-dark outline-hidden dark:border-dark-3 dark:text-white"
                  >
                    <option value="">Ratio One</option>
                    <option value="">Ratio Two</option>
                    <option value="">Ratio Three</option>
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

              <button className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 font-medium text-white hover:bg-primary/90 md:max-w-[270px]">
                <span>
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.5832 18.9583C16.3499 18.9583 16.1165 18.9083 15.9082 18.8C15.6832 18.6917 15.5332 18.5333 15.2499 18.2583L9.87487 12.8833L8.0832 11.0917C7.79987 10.8083 7.64154 10.65 7.5332 10.4333C7.32487 10.0083 7.32487 9.50833 7.5332 9.08333C7.64154 8.85833 7.79987 8.7 8.0832 8.425C8.36654 8.15 8.52487 7.98333 8.74154 7.875C9.16654 7.66667 9.66654 7.66667 10.0915 7.875C10.3165 7.98333 10.4749 8.14167 10.7499 8.425L17.9082 15.5833C18.1832 15.85 18.3415 16.0167 18.4582 16.2417C18.6665 16.6667 18.6665 17.1667 18.4582 17.5917C18.3415 17.8167 18.1832 17.9833 17.9082 18.2583C17.6332 18.5333 17.4665 18.7 17.2415 18.8083C17.0332 18.9083 16.7999 18.9667 16.5665 18.9667L16.5832 18.9583ZM11.1999 12.4417L16.1332 17.375C16.2749 17.5167 16.4249 17.6583 16.4665 17.6917C16.5415 17.725 16.6249 17.725 16.7082 17.6917C16.7582 17.6667 16.8999 17.525 17.0415 17.3833C17.1832 17.2417 17.3332 17.0917 17.3582 17.0417C17.3915 16.9667 17.3915 16.875 17.3582 16.8C17.3332 16.7583 17.1832 16.6 17.0499 16.4667L12.1165 11.5333L11.2082 12.4417H11.1999ZM9.42487 8.95833C9.42487 8.95833 9.34154 8.96667 9.3082 8.98333C9.26654 9.00833 9.11654 9.15833 8.97487 9.3C8.8332 9.44167 8.6832 9.59167 8.6582 9.63333C8.62487 9.70833 8.62487 9.8 8.6582 9.875C8.6832 9.91667 8.8332 10.0667 8.97487 10.2083L10.3249 11.5583L11.2332 10.65L9.8832 9.3C9.74154 9.15833 9.59154 9.00833 9.54987 8.98333C9.51654 8.96667 9.47487 8.95833 9.4332 8.95833H9.42487Z"
                      fill="currentColor"
                    />
                    <path
                      d="M14.6668 8.95866C14.4085 8.95866 14.1751 8.79199 14.0835 8.55033L13.8418 7.88366C13.5335 7.04199 13.4001 6.70033 13.1835 6.48366C12.9668 6.26699 12.6251 6.13366 11.7918 5.82533L11.1251 5.58366C10.8835 5.49199 10.7168 5.25866 10.7168 5.00033C10.7168 4.74199 10.8835 4.50866 11.1251 4.41699L11.7918 4.17533C12.6335 3.86699 12.9751 3.73366 13.1918 3.51699C13.4085 3.30033 13.5418 2.95866 13.8501 2.11699L14.1001 1.45033C14.1918 1.20866 14.4251 1.04199 14.6835 1.04199C14.9418 1.04199 15.1751 1.20866 15.2668 1.45033L15.5085 2.11699C15.8168 2.95866 15.9501 3.30033 16.1668 3.51699C16.3751 3.72533 16.7251 3.85866 17.5585 4.16699L18.2335 4.41699C18.4751 4.50866 18.6418 4.74199 18.6418 5.00033C18.6418 5.25866 18.4751 5.49199 18.2335 5.58366L17.5668 5.82533C16.7335 6.13366 16.3835 6.26699 16.1668 6.48366C15.9501 6.70033 15.8168 7.04199 15.5085 7.88366L15.2585 8.55033C15.1668 8.79199 14.9335 8.95866 14.6751 8.95866H14.6668ZM13.1001 5.00033C13.5085 5.17533 13.8085 5.34199 14.0668 5.60866C14.3251 5.87533 14.5001 6.16699 14.6751 6.57533C14.8501 6.16699 15.0251 5.86699 15.2835 5.60866C15.5418 5.35033 15.8418 5.17533 16.2501 5.00033C15.8418 4.82533 15.5418 4.65033 15.2835 4.39199C15.0251 4.13366 14.8501 3.83366 14.6751 3.42533C14.5001 3.83366 14.3251 4.13366 14.0668 4.39199C13.8085 4.65033 13.5085 4.82533 13.1001 5.00033Z"
                      fill="currentColor"
                    />
                    <path
                      d="M5.5 8.95801C5.24167 8.95801 5.00833 8.79134 4.91667 8.54967L4.73333 8.04967C4.51667 7.45801 4.41667 7.19134 4.275 7.05801C4.13333 6.92467 3.875 6.81634 3.28333 6.59967L2.78333 6.41634C2.54167 6.32467 2.375 6.09134 2.375 5.83301C2.375 5.57467 2.54167 5.34134 2.78333 5.24967L3.28333 5.06634C3.875 4.84967 4.14167 4.74967 4.275 4.60801C4.40833 4.46634 4.51667 4.20801 4.73333 3.61634L4.91667 3.11634C5.00833 2.87467 5.24167 2.70801 5.5 2.70801C5.75833 2.70801 5.99167 2.87467 6.08333 3.11634L6.26667 3.61634C6.48333 4.20801 6.58333 4.47467 6.725 4.60801C6.86667 4.74134 7.125 4.84967 7.71667 5.06634L8.21667 5.24967C8.45833 5.34134 8.625 5.57467 8.625 5.83301C8.625 6.09134 8.45833 6.32467 8.21667 6.41634L7.71667 6.59967C7.125 6.81634 6.85833 6.91634 6.725 7.05801C6.59167 7.19967 6.48333 7.45801 6.26667 8.04967L6.08333 8.54967C5.99167 8.79134 5.75833 8.95801 5.5 8.95801ZM4.69167 5.83301C4.86667 5.93301 5.025 6.03301 5.15833 6.17467C5.3 6.31634 5.40833 6.46634 5.5 6.64134C5.6 6.45801 5.7 6.30801 5.84167 6.17467C5.98333 6.04134 6.13333 5.92467 6.30833 5.83301C6.13333 5.73301 5.975 5.63301 5.84167 5.49134C5.7 5.34967 5.59167 5.19967 5.5 5.02467C5.4 5.19967 5.3 5.34967 5.15833 5.49134C5.01667 5.63301 4.86667 5.74134 4.69167 5.83301Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span className="max-xs:hidden">Generate</span>
              </button>
            </div>
          </div>

          <div className="rounded-xl border border-stroke p-8 dark:border-dark-3">
            <h3 className="mb-7 text-lg font-semibold text-dark dark:text-white">
              Choose a Style
            </h3>
            <div className="flex flex-wrap items-center gap-7">
              <div>
                <label
                  htmlFor="1"
                  className="group flex cursor-pointer flex-col items-center"
                >
                  <input
                    type="radio"
                    name="style"
                    id="1"
                    className="peer sr-only"
                  />
                  <div className="relative mb-3 flex aspect-square w-20 items-center justify-center overflow-hidden rounded-full border-[3px] border-gray-3 peer-checked:border-primary">
                    <img
                      src="https://i.ibb.co/HCHTnHF/style-1.jpg"
                      alt="style 1"
                    />

                    <span className="group-has-checked:bg-[#000]/20 group-has-checked:opacity-100 absolute flex h-full w-full items-center justify-center opacity-0">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_2201_2580)">
                          <path
                            d="M12 0.674988C5.73749 0.674988 0.674988 5.73749 0.674988 12C0.674988 18.2625 5.73749 23.3625 12 23.3625C18.2625 23.3625 23.3625 18.2625 23.3625 12C23.3625 5.73749 18.2625 0.674988 12 0.674988ZM12 21.675C6.67499 21.675 2.36249 17.325 2.36249 12C2.36249 6.67499 6.67499 2.36249 12 2.36249C17.325 2.36249 21.675 6.71249 21.675 12.0375C21.675 17.325 17.325 21.675 12 21.675Z"
                            fill="white"
                          />
                          <path
                            d="M15.225 8.51248L10.7625 12.8625L8.73749 10.875C8.39999 10.5375 7.87499 10.575 7.53749 10.875C7.19999 11.2125 7.23749 11.7375 7.53749 12.075L9.93749 14.4C10.1625 14.625 10.4625 14.7375 10.7625 14.7375C11.0625 14.7375 11.3625 14.625 11.5875 14.4L16.425 9.74998C16.7625 9.41248 16.7625 8.88748 16.425 8.54998C16.0875 8.21248 15.5625 8.21248 15.225 8.51248Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2201_2580">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                  </div>

                  <span className="block text-center text-base text-dark dark:text-white">
                    No Style
                  </span>
                </label>
              </div>

              <div>
                <label
                  htmlFor="2"
                  className="group flex cursor-pointer flex-col items-center"
                >
                  <input
                    type="radio"
                    name="style"
                    id="2"
                    className="peer sr-only"
                  />
                  <div className="relative mb-3 flex aspect-square w-20 items-center justify-center overflow-hidden rounded-full border-[3px] border-gray-3 peer-checked:border-primary">
                    <img
                      src="https://i.ibb.co/8B50Xg1/style-2.jpg"
                      alt="style 1"
                    />
                    <div className="absolute inset-0 flex h-full w-full items-center justify-center bg-[#000]/20">
                      <span className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/[.18] px-2.5 py-px text-sm font-medium text-white">
                        Pro
                      </span>
                    </div>

                    <span className="group-has-checked:bg-[#000]/20 group-has-checked:opacity-100 absolute flex h-full w-full items-center justify-center opacity-0">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_2201_2580)">
                          <path
                            d="M12 0.674988C5.73749 0.674988 0.674988 5.73749 0.674988 12C0.674988 18.2625 5.73749 23.3625 12 23.3625C18.2625 23.3625 23.3625 18.2625 23.3625 12C23.3625 5.73749 18.2625 0.674988 12 0.674988ZM12 21.675C6.67499 21.675 2.36249 17.325 2.36249 12C2.36249 6.67499 6.67499 2.36249 12 2.36249C17.325 2.36249 21.675 6.71249 21.675 12.0375C21.675 17.325 17.325 21.675 12 21.675Z"
                            fill="white"
                          />
                          <path
                            d="M15.225 8.51248L10.7625 12.8625L8.73749 10.875C8.39999 10.5375 7.87499 10.575 7.53749 10.875C7.19999 11.2125 7.23749 11.7375 7.53749 12.075L9.93749 14.4C10.1625 14.625 10.4625 14.7375 10.7625 14.7375C11.0625 14.7375 11.3625 14.625 11.5875 14.4L16.425 9.74998C16.7625 9.41248 16.7625 8.88748 16.425 8.54998C16.0875 8.21248 15.5625 8.21248 15.225 8.51248Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2201_2580">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                  </div>

                  <span className="block text-center text-base text-dark dark:text-white">
                    Midjourney
                  </span>
                </label>
              </div>

              <div>
                <label
                  htmlFor="3"
                  className="group flex cursor-pointer flex-col items-center"
                >
                  <input
                    type="radio"
                    name="style"
                    id="3"
                    className="peer sr-only"
                  />
                  <div className="relative mb-3 flex aspect-square w-20 items-center justify-center overflow-hidden rounded-full border-[3px] border-gray-3 peer-checked:border-primary">
                    <img
                      src="https://i.ibb.co/5nnZ2jg/style-3.jpg"
                      alt="style 1"
                    />
                    <div className="absolute inset-0 flex h-full w-full items-center justify-center bg-[#000]/20">
                      <span className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/[.18] px-2.5 py-px text-sm font-medium text-white">
                        Pro
                      </span>
                    </div>

                    <span className="group-has-checked:bg-[#000]/20 group-has-checked:opacity-100 absolute flex h-full w-full items-center justify-center opacity-0">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_2201_2580)">
                          <path
                            d="M12 0.674988C5.73749 0.674988 0.674988 5.73749 0.674988 12C0.674988 18.2625 5.73749 23.3625 12 23.3625C18.2625 23.3625 23.3625 18.2625 23.3625 12C23.3625 5.73749 18.2625 0.674988 12 0.674988ZM12 21.675C6.67499 21.675 2.36249 17.325 2.36249 12C2.36249 6.67499 6.67499 2.36249 12 2.36249C17.325 2.36249 21.675 6.71249 21.675 12.0375C21.675 17.325 17.325 21.675 12 21.675Z"
                            fill="white"
                          />
                          <path
                            d="M15.225 8.51248L10.7625 12.8625L8.73749 10.875C8.39999 10.5375 7.87499 10.575 7.53749 10.875C7.19999 11.2125 7.23749 11.7375 7.53749 12.075L9.93749 14.4C10.1625 14.625 10.4625 14.7375 10.7625 14.7375C11.0625 14.7375 11.3625 14.625 11.5875 14.4L16.425 9.74998C16.7625 9.41248 16.7625 8.88748 16.425 8.54998C16.0875 8.21248 15.5625 8.21248 15.225 8.51248Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2201_2580">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                  </div>

                  <span className="block text-center text-base text-dark dark:text-white">
                    B-W Tattoo
                  </span>
                </label>
              </div>

              <div>
                <label
                  htmlFor="4"
                  className="group flex cursor-pointer flex-col items-center"
                >
                  <input
                    type="radio"
                    name="style"
                    id="4"
                    className="peer sr-only"
                  />
                  <div className="relative mb-3 flex aspect-square w-20 items-center justify-center overflow-hidden rounded-full border-[3px] border-gray-3 peer-checked:border-primary">
                    <img
                      src="https://i.ibb.co/dkw9YJn/style-4.jpg"
                      alt="style 1"
                    />
                    <div className="absolute inset-0 flex h-full w-full items-center justify-center bg-[#000]/20">
                      <span className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/[.18] px-2.5 py-px text-sm font-medium text-white">
                        Pro
                      </span>
                    </div>

                    <span className="group-has-checked:bg-[#000]/20 group-has-checked:opacity-100 absolute flex h-full w-full items-center justify-center opacity-0">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_2201_2580)">
                          <path
                            d="M12 0.674988C5.73749 0.674988 0.674988 5.73749 0.674988 12C0.674988 18.2625 5.73749 23.3625 12 23.3625C18.2625 23.3625 23.3625 18.2625 23.3625 12C23.3625 5.73749 18.2625 0.674988 12 0.674988ZM12 21.675C6.67499 21.675 2.36249 17.325 2.36249 12C2.36249 6.67499 6.67499 2.36249 12 2.36249C17.325 2.36249 21.675 6.71249 21.675 12.0375C21.675 17.325 17.325 21.675 12 21.675Z"
                            fill="white"
                          />
                          <path
                            d="M15.225 8.51248L10.7625 12.8625L8.73749 10.875C8.39999 10.5375 7.87499 10.575 7.53749 10.875C7.19999 11.2125 7.23749 11.7375 7.53749 12.075L9.93749 14.4C10.1625 14.625 10.4625 14.7375 10.7625 14.7375C11.0625 14.7375 11.3625 14.625 11.5875 14.4L16.425 9.74998C16.7625 9.41248 16.7625 8.88748 16.425 8.54998C16.0875 8.21248 15.5625 8.21248 15.225 8.51248Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2201_2580">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                  </div>

                  <span className="block text-center text-base text-dark dark:text-white">
                    Sora
                  </span>
                </label>
              </div>

              <div>
                <label
                  htmlFor="5"
                  className="group flex cursor-pointer flex-col items-center"
                >
                  <input
                    type="radio"
                    name="style"
                    id="5"
                    className="peer sr-only"
                  />
                  <div className="relative mb-3 flex aspect-square w-20 items-center justify-center overflow-hidden rounded-full border-[3px] border-gray-3 peer-checked:border-primary">
                    <img
                      src="https://i.ibb.co/KbFtrvH/style-5.jpg"
                      alt="style 1"
                    />

                    <span className="group-has-checked:bg-[#000]/20 group-has-checked:opacity-100 absolute flex h-full w-full items-center justify-center opacity-0">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_2201_2580)">
                          <path
                            d="M12 0.674988C5.73749 0.674988 0.674988 5.73749 0.674988 12C0.674988 18.2625 5.73749 23.3625 12 23.3625C18.2625 23.3625 23.3625 18.2625 23.3625 12C23.3625 5.73749 18.2625 0.674988 12 0.674988ZM12 21.675C6.67499 21.675 2.36249 17.325 2.36249 12C2.36249 6.67499 6.67499 2.36249 12 2.36249C17.325 2.36249 21.675 6.71249 21.675 12.0375C21.675 17.325 17.325 21.675 12 21.675Z"
                            fill="white"
                          />
                          <path
                            d="M15.225 8.51248L10.7625 12.8625L8.73749 10.875C8.39999 10.5375 7.87499 10.575 7.53749 10.875C7.19999 11.2125 7.23749 11.7375 7.53749 12.075L9.93749 14.4C10.1625 14.625 10.4625 14.7375 10.7625 14.7375C11.0625 14.7375 11.3625 14.625 11.5875 14.4L16.425 9.74998C16.7625 9.41248 16.7625 8.88748 16.425 8.54998C16.0875 8.21248 15.5625 8.21248 15.225 8.51248Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2201_2580">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                  </div>

                  <span className="block text-center text-base text-dark dark:text-white">
                    Creepy
                  </span>
                </label>
              </div>

              <div>
                <label
                  htmlFor="6"
                  className="group flex cursor-pointer flex-col items-center"
                >
                  <input
                    type="radio"
                    name="style"
                    id="6"
                    className="peer sr-only"
                  />
                  <div className="relative mb-3 flex aspect-square w-20 items-center justify-center overflow-hidden rounded-full border-[3px] border-gray-3 peer-checked:border-primary">
                    <img
                      src="https://i.ibb.co/HdC5qSg/style-6.jpg"
                      alt="style 1"
                    />

                    <span className="group-has-checked:bg-[#000]/20 group-has-checked:opacity-100 absolute flex h-full w-full items-center justify-center opacity-0">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_2201_2580)">
                          <path
                            d="M12 0.674988C5.73749 0.674988 0.674988 5.73749 0.674988 12C0.674988 18.2625 5.73749 23.3625 12 23.3625C18.2625 23.3625 23.3625 18.2625 23.3625 12C23.3625 5.73749 18.2625 0.674988 12 0.674988ZM12 21.675C6.67499 21.675 2.36249 17.325 2.36249 12C2.36249 6.67499 6.67499 2.36249 12 2.36249C17.325 2.36249 21.675 6.71249 21.675 12.0375C21.675 17.325 17.325 21.675 12 21.675Z"
                            fill="white"
                          />
                          <path
                            d="M15.225 8.51248L10.7625 12.8625L8.73749 10.875C8.39999 10.5375 7.87499 10.575 7.53749 10.875C7.19999 11.2125 7.23749 11.7375 7.53749 12.075L9.93749 14.4C10.1625 14.625 10.4625 14.7375 10.7625 14.7375C11.0625 14.7375 11.3625 14.625 11.5875 14.4L16.425 9.74998C16.7625 9.41248 16.7625 8.88748 16.425 8.54998C16.0875 8.21248 15.5625 8.21248 15.225 8.51248Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2201_2580">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                  </div>

                  <span className="block text-center text-base text-dark dark:text-white">
                    Art Work
                  </span>
                </label>
              </div>

              <div>
                <label
                  htmlFor="7"
                  className="group flex cursor-pointer flex-col items-center"
                >
                  <input
                    type="radio"
                    name="style"
                    id="7"
                    className="peer sr-only"
                  />
                  <div className="relative mb-3 flex aspect-square w-20 items-center justify-center overflow-hidden rounded-full border-[3px] border-gray-3 peer-checked:border-primary">
                    <img
                      src="https://i.ibb.co/2gZ8DQv/style-7.jpg"
                      alt="style 1"
                    />

                    <span className="group-has-checked:bg-[#000]/20 group-has-checked:opacity-100 absolute flex h-full w-full items-center justify-center opacity-0">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_2201_2580)">
                          <path
                            d="M12 0.674988C5.73749 0.674988 0.674988 5.73749 0.674988 12C0.674988 18.2625 5.73749 23.3625 12 23.3625C18.2625 23.3625 23.3625 18.2625 23.3625 12C23.3625 5.73749 18.2625 0.674988 12 0.674988ZM12 21.675C6.67499 21.675 2.36249 17.325 2.36249 12C2.36249 6.67499 6.67499 2.36249 12 2.36249C17.325 2.36249 21.675 6.71249 21.675 12.0375C21.675 17.325 17.325 21.675 12 21.675Z"
                            fill="white"
                          />
                          <path
                            d="M15.225 8.51248L10.7625 12.8625L8.73749 10.875C8.39999 10.5375 7.87499 10.575 7.53749 10.875C7.19999 11.2125 7.23749 11.7375 7.53749 12.075L9.93749 14.4C10.1625 14.625 10.4625 14.7375 10.7625 14.7375C11.0625 14.7375 11.3625 14.625 11.5875 14.4L16.425 9.74998C16.7625 9.41248 16.7625 8.88748 16.425 8.54998C16.0875 8.21248 15.5625 8.21248 15.225 8.51248Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2201_2580">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                  </div>

                  <span className="block text-center text-base text-dark dark:text-white">
                    Dreamy
                  </span>
                </label>
              </div>

              <div>
                <label
                  htmlFor="8"
                  className="group flex cursor-pointer flex-col items-center"
                >
                  <input
                    type="radio"
                    name="style"
                    id="8"
                    className="peer sr-only"
                  />
                  <div className="relative mb-3 flex aspect-square w-20 items-center justify-center overflow-hidden rounded-full border-[3px] border-gray-3 peer-checked:border-primary">
                    <img
                      src="https://i.ibb.co/28bvjp0/style-8.jpg"
                      alt="style 1"
                    />

                    <span className="group-has-checked:bg-[#000]/20 group-has-checked:opacity-100 absolute flex h-full w-full items-center justify-center opacity-0">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_2201_2580)">
                          <path
                            d="M12 0.674988C5.73749 0.674988 0.674988 5.73749 0.674988 12C0.674988 18.2625 5.73749 23.3625 12 23.3625C18.2625 23.3625 23.3625 18.2625 23.3625 12C23.3625 5.73749 18.2625 0.674988 12 0.674988ZM12 21.675C6.67499 21.675 2.36249 17.325 2.36249 12C2.36249 6.67499 6.67499 2.36249 12 2.36249C17.325 2.36249 21.675 6.71249 21.675 12.0375C21.675 17.325 17.325 21.675 12 21.675Z"
                            fill="white"
                          />
                          <path
                            d="M15.225 8.51248L10.7625 12.8625L8.73749 10.875C8.39999 10.5375 7.87499 10.575 7.53749 10.875C7.19999 11.2125 7.23749 11.7375 7.53749 12.075L9.93749 14.4C10.1625 14.625 10.4625 14.7375 10.7625 14.7375C11.0625 14.7375 11.3625 14.625 11.5875 14.4L16.425 9.74998C16.7625 9.41248 16.7625 8.88748 16.425 8.54998C16.0875 8.21248 15.5625 8.21248 15.225 8.51248Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2201_2580">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                  </div>

                  <span className="block text-center text-base text-dark dark:text-white">
                    Natural
                  </span>
                </label>
              </div>

              <div>
                <label
                  htmlFor="9"
                  className="group flex cursor-pointer flex-col items-center"
                >
                  <input
                    type="radio"
                    name="style"
                    id="9"
                    className="peer sr-only"
                  />
                  <div className="relative mb-3 flex aspect-square w-20 items-center justify-center overflow-hidden rounded-full border-[3px] border-gray-3 peer-checked:border-primary">
                    <img
                      src="https://i.ibb.co/MSCb16v/style-9.jpg"
                      alt="style 1"
                    />

                    <span className="group-has-checked:bg-[#000]/20 group-has-checked:opacity-100 absolute flex h-full w-full items-center justify-center opacity-0">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_2201_2580)">
                          <path
                            d="M12 0.674988C5.73749 0.674988 0.674988 5.73749 0.674988 12C0.674988 18.2625 5.73749 23.3625 12 23.3625C18.2625 23.3625 23.3625 18.2625 23.3625 12C23.3625 5.73749 18.2625 0.674988 12 0.674988ZM12 21.675C6.67499 21.675 2.36249 17.325 2.36249 12C2.36249 6.67499 6.67499 2.36249 12 2.36249C17.325 2.36249 21.675 6.71249 21.675 12.0375C21.675 17.325 17.325 21.675 12 21.675Z"
                            fill="white"
                          />
                          <path
                            d="M15.225 8.51248L10.7625 12.8625L8.73749 10.875C8.39999 10.5375 7.87499 10.575 7.53749 10.875C7.19999 11.2125 7.23749 11.7375 7.53749 12.075L9.93749 14.4C10.1625 14.625 10.4625 14.7375 10.7625 14.7375C11.0625 14.7375 11.3625 14.625 11.5875 14.4L16.425 9.74998C16.7625 9.41248 16.7625 8.88748 16.425 8.54998C16.0875 8.21248 15.5625 8.21248 15.225 8.51248Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2201_2580">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                  </div>

                  <span className="block text-center text-base text-dark dark:text-white">
                    Glass Morphism
                  </span>
                </label>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-stroke p-8 dark:border-dark-3">
            <h3 className="mb-7 text-lg font-semibold text-dark dark:text-white">
              Result
            </h3>
            <div className="grid grid-cols-3 gap-8">
              <div className="flex aspect-326/304 items-center justify-center rounded-xl border border-dashed border-gray-5 bg-gray-2 text-dark-7 dark:border-white/10 dark:bg-white/5 dark:text-dark-5">
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
              <div className="flex aspect-326/304 items-center justify-center rounded-xl border border-dashed border-gray-5 bg-gray-2 text-dark-7 dark:border-white/10 dark:bg-white/5 dark:text-dark-5">
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
              <div className="flex aspect-326/304 items-center justify-center rounded-xl border border-dashed border-gray-5 bg-gray-2 text-dark-7 dark:border-white/10 dark:bg-white/5 dark:text-dark-5">
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

        <div className="w-full space-y-7 rounded-2xl bg-white p-7 dark:bg-dark-2">
          <div className="rounded-xl border border-stroke p-8 dark:border-dark-3">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <label
                htmlFor=""
                className="block text-lg font-semibold text-dark dark:text-white"
              >
                Create an image form text prompt
              </label>
              <button className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-dark py-2.5 pl-4 pr-5 font-medium text-white hover:bg-dark/90">
                <span>
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.5832 18.9583C16.3499 18.9583 16.1165 18.9083 15.9082 18.8C15.6832 18.6917 15.5332 18.5333 15.2499 18.2583L9.87487 12.8833L8.0832 11.0917C7.79987 10.8083 7.64154 10.65 7.5332 10.4333C7.32487 10.0083 7.32487 9.50833 7.5332 9.08333C7.64154 8.85833 7.79987 8.7 8.0832 8.425C8.36654 8.15 8.52487 7.98333 8.74154 7.875C9.16654 7.66667 9.66654 7.66667 10.0915 7.875C10.3165 7.98333 10.4749 8.14167 10.7499 8.425L17.9082 15.5833C18.1832 15.85 18.3415 16.0167 18.4582 16.2417C18.6665 16.6667 18.6665 17.1667 18.4582 17.5917C18.3415 17.8167 18.1832 17.9833 17.9082 18.2583C17.6332 18.5333 17.4665 18.7 17.2415 18.8083C17.0332 18.9083 16.7999 18.9667 16.5665 18.9667L16.5832 18.9583ZM11.1999 12.4417L16.1332 17.375C16.2749 17.5167 16.4249 17.6583 16.4665 17.6917C16.5415 17.725 16.6249 17.725 16.7082 17.6917C16.7582 17.6667 16.8999 17.525 17.0415 17.3833C17.1832 17.2417 17.3332 17.0917 17.3582 17.0417C17.3915 16.9667 17.3915 16.875 17.3582 16.8C17.3332 16.7583 17.1832 16.6 17.0499 16.4667L12.1165 11.5333L11.2082 12.4417H11.1999ZM9.42487 8.95833C9.42487 8.95833 9.34154 8.96667 9.3082 8.98333C9.26654 9.00833 9.11654 9.15833 8.97487 9.3C8.8332 9.44167 8.6832 9.59167 8.6582 9.63333C8.62487 9.70833 8.62487 9.8 8.6582 9.875C8.6832 9.91667 8.8332 10.0667 8.97487 10.2083L10.3249 11.5583L11.2332 10.65L9.8832 9.3C9.74154 9.15833 9.59154 9.00833 9.54987 8.98333C9.51654 8.96667 9.47487 8.95833 9.4332 8.95833H9.42487Z"
                      fill="currentColor"
                    />
                    <path
                      d="M14.6668 8.95866C14.4085 8.95866 14.1751 8.79199 14.0835 8.55033L13.8418 7.88366C13.5335 7.04199 13.4001 6.70033 13.1835 6.48366C12.9668 6.26699 12.6251 6.13366 11.7918 5.82533L11.1251 5.58366C10.8835 5.49199 10.7168 5.25866 10.7168 5.00033C10.7168 4.74199 10.8835 4.50866 11.1251 4.41699L11.7918 4.17533C12.6335 3.86699 12.9751 3.73366 13.1918 3.51699C13.4085 3.30033 13.5418 2.95866 13.8501 2.11699L14.1001 1.45033C14.1918 1.20866 14.4251 1.04199 14.6835 1.04199C14.9418 1.04199 15.1751 1.20866 15.2668 1.45033L15.5085 2.11699C15.8168 2.95866 15.9501 3.30033 16.1668 3.51699C16.3751 3.72533 16.7251 3.85866 17.5585 4.16699L18.2335 4.41699C18.4751 4.50866 18.6418 4.74199 18.6418 5.00033C18.6418 5.25866 18.4751 5.49199 18.2335 5.58366L17.5668 5.82533C16.7335 6.13366 16.3835 6.26699 16.1668 6.48366C15.9501 6.70033 15.8168 7.04199 15.5085 7.88366L15.2585 8.55033C15.1668 8.79199 14.9335 8.95866 14.6751 8.95866H14.6668ZM13.1001 5.00033C13.5085 5.17533 13.8085 5.34199 14.0668 5.60866C14.3251 5.87533 14.5001 6.16699 14.6751 6.57533C14.8501 6.16699 15.0251 5.86699 15.2835 5.60866C15.5418 5.35033 15.8418 5.17533 16.2501 5.00033C15.8418 4.82533 15.5418 4.65033 15.2835 4.39199C15.0251 4.13366 14.8501 3.83366 14.6751 3.42533C14.5001 3.83366 14.3251 4.13366 14.0668 4.39199C13.8085 4.65033 13.5085 4.82533 13.1001 5.00033Z"
                      fill="currentColor"
                    />
                    <path
                      d="M5.5 8.95801C5.24167 8.95801 5.00833 8.79134 4.91667 8.54967L4.73333 8.04967C4.51667 7.45801 4.41667 7.19134 4.275 7.05801C4.13333 6.92467 3.875 6.81634 3.28333 6.59967L2.78333 6.41634C2.54167 6.32467 2.375 6.09134 2.375 5.83301C2.375 5.57467 2.54167 5.34134 2.78333 5.24967L3.28333 5.06634C3.875 4.84967 4.14167 4.74967 4.275 4.60801C4.40833 4.46634 4.51667 4.20801 4.73333 3.61634L4.91667 3.11634C5.00833 2.87467 5.24167 2.70801 5.5 2.70801C5.75833 2.70801 5.99167 2.87467 6.08333 3.11634L6.26667 3.61634C6.48333 4.20801 6.58333 4.47467 6.725 4.60801C6.86667 4.74134 7.125 4.84967 7.71667 5.06634L8.21667 5.24967C8.45833 5.34134 8.625 5.57467 8.625 5.83301C8.625 6.09134 8.45833 6.32467 8.21667 6.41634L7.71667 6.59967C7.125 6.81634 6.85833 6.91634 6.725 7.05801C6.59167 7.19967 6.48333 7.45801 6.26667 8.04967L6.08333 8.54967C5.99167 8.79134 5.75833 8.95801 5.5 8.95801ZM4.69167 5.83301C4.86667 5.93301 5.025 6.03301 5.15833 6.17467C5.3 6.31634 5.40833 6.46634 5.5 6.64134C5.6 6.45801 5.7 6.30801 5.84167 6.17467C5.98333 6.04134 6.13333 5.92467 6.30833 5.83301C6.13333 5.73301 5.975 5.63301 5.84167 5.49134C5.7 5.34967 5.59167 5.19967 5.5 5.02467C5.4 5.19967 5.3 5.34967 5.15833 5.49134C5.01667 5.63301 4.86667 5.74134 4.69167 5.83301Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span>I need a inspiration</span>
              </button>
            </div>
            <div className="mb-7">
              <textarea
                name=""
                id=""
                rows="5"
                value="Type here a detailed description of what you want to see"
                className="w-full rounded-lg border border-stroke bg-transparent p-5 text-base text-dark placeholder-dark-6 outline-hidden focus:border-primary dark:border-dark-3 dark:text-white"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                ultrices augue sit amet odio posuere, sit amet porttitor ex
                viverra. Vivamus odio nunc
              </textarea>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-4">
                <div className="relative">
                  <select
                    name=""
                    id=""
                    className="w-full appearance-none rounded-lg border border-stroke bg-transparent py-2.5 pl-4 pr-10 text-dark outline-hidden dark:border-dark-3 dark:text-white"
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
                <div className="relative">
                  <select
                    name=""
                    id=""
                    className="w-full appearance-none rounded-lg border border-stroke bg-transparent py-2.5 pl-4 pr-10 text-dark outline-hidden dark:border-dark-3 dark:text-white"
                  >
                    <option value="">Model One</option>
                    <option value="">Model Two</option>
                    <option value="">Model Three</option>
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
                <div className="relative">
                  <select
                    name=""
                    id=""
                    className="w-full appearance-none rounded-lg border border-stroke bg-transparent py-2.5 pl-4 pr-10 text-dark outline-hidden dark:border-dark-3 dark:text-white"
                  >
                    <option value="">Ratio One</option>
                    <option value="">Ratio Two</option>
                    <option value="">Ratio Three</option>
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

              <button className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 font-medium text-white hover:bg-primary/90 md:max-w-[270px]">
                <span>
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.5832 18.9583C16.3499 18.9583 16.1165 18.9083 15.9082 18.8C15.6832 18.6917 15.5332 18.5333 15.2499 18.2583L9.87487 12.8833L8.0832 11.0917C7.79987 10.8083 7.64154 10.65 7.5332 10.4333C7.32487 10.0083 7.32487 9.50833 7.5332 9.08333C7.64154 8.85833 7.79987 8.7 8.0832 8.425C8.36654 8.15 8.52487 7.98333 8.74154 7.875C9.16654 7.66667 9.66654 7.66667 10.0915 7.875C10.3165 7.98333 10.4749 8.14167 10.7499 8.425L17.9082 15.5833C18.1832 15.85 18.3415 16.0167 18.4582 16.2417C18.6665 16.6667 18.6665 17.1667 18.4582 17.5917C18.3415 17.8167 18.1832 17.9833 17.9082 18.2583C17.6332 18.5333 17.4665 18.7 17.2415 18.8083C17.0332 18.9083 16.7999 18.9667 16.5665 18.9667L16.5832 18.9583ZM11.1999 12.4417L16.1332 17.375C16.2749 17.5167 16.4249 17.6583 16.4665 17.6917C16.5415 17.725 16.6249 17.725 16.7082 17.6917C16.7582 17.6667 16.8999 17.525 17.0415 17.3833C17.1832 17.2417 17.3332 17.0917 17.3582 17.0417C17.3915 16.9667 17.3915 16.875 17.3582 16.8C17.3332 16.7583 17.1832 16.6 17.0499 16.4667L12.1165 11.5333L11.2082 12.4417H11.1999ZM9.42487 8.95833C9.42487 8.95833 9.34154 8.96667 9.3082 8.98333C9.26654 9.00833 9.11654 9.15833 8.97487 9.3C8.8332 9.44167 8.6832 9.59167 8.6582 9.63333C8.62487 9.70833 8.62487 9.8 8.6582 9.875C8.6832 9.91667 8.8332 10.0667 8.97487 10.2083L10.3249 11.5583L11.2332 10.65L9.8832 9.3C9.74154 9.15833 9.59154 9.00833 9.54987 8.98333C9.51654 8.96667 9.47487 8.95833 9.4332 8.95833H9.42487Z"
                      fill="currentColor"
                    />
                    <path
                      d="M14.6668 8.95866C14.4085 8.95866 14.1751 8.79199 14.0835 8.55033L13.8418 7.88366C13.5335 7.04199 13.4001 6.70033 13.1835 6.48366C12.9668 6.26699 12.6251 6.13366 11.7918 5.82533L11.1251 5.58366C10.8835 5.49199 10.7168 5.25866 10.7168 5.00033C10.7168 4.74199 10.8835 4.50866 11.1251 4.41699L11.7918 4.17533C12.6335 3.86699 12.9751 3.73366 13.1918 3.51699C13.4085 3.30033 13.5418 2.95866 13.8501 2.11699L14.1001 1.45033C14.1918 1.20866 14.4251 1.04199 14.6835 1.04199C14.9418 1.04199 15.1751 1.20866 15.2668 1.45033L15.5085 2.11699C15.8168 2.95866 15.9501 3.30033 16.1668 3.51699C16.3751 3.72533 16.7251 3.85866 17.5585 4.16699L18.2335 4.41699C18.4751 4.50866 18.6418 4.74199 18.6418 5.00033C18.6418 5.25866 18.4751 5.49199 18.2335 5.58366L17.5668 5.82533C16.7335 6.13366 16.3835 6.26699 16.1668 6.48366C15.9501 6.70033 15.8168 7.04199 15.5085 7.88366L15.2585 8.55033C15.1668 8.79199 14.9335 8.95866 14.6751 8.95866H14.6668ZM13.1001 5.00033C13.5085 5.17533 13.8085 5.34199 14.0668 5.60866C14.3251 5.87533 14.5001 6.16699 14.6751 6.57533C14.8501 6.16699 15.0251 5.86699 15.2835 5.60866C15.5418 5.35033 15.8418 5.17533 16.2501 5.00033C15.8418 4.82533 15.5418 4.65033 15.2835 4.39199C15.0251 4.13366 14.8501 3.83366 14.6751 3.42533C14.5001 3.83366 14.3251 4.13366 14.0668 4.39199C13.8085 4.65033 13.5085 4.82533 13.1001 5.00033Z"
                      fill="currentColor"
                    />
                    <path
                      d="M5.5 8.95801C5.24167 8.95801 5.00833 8.79134 4.91667 8.54967L4.73333 8.04967C4.51667 7.45801 4.41667 7.19134 4.275 7.05801C4.13333 6.92467 3.875 6.81634 3.28333 6.59967L2.78333 6.41634C2.54167 6.32467 2.375 6.09134 2.375 5.83301C2.375 5.57467 2.54167 5.34134 2.78333 5.24967L3.28333 5.06634C3.875 4.84967 4.14167 4.74967 4.275 4.60801C4.40833 4.46634 4.51667 4.20801 4.73333 3.61634L4.91667 3.11634C5.00833 2.87467 5.24167 2.70801 5.5 2.70801C5.75833 2.70801 5.99167 2.87467 6.08333 3.11634L6.26667 3.61634C6.48333 4.20801 6.58333 4.47467 6.725 4.60801C6.86667 4.74134 7.125 4.84967 7.71667 5.06634L8.21667 5.24967C8.45833 5.34134 8.625 5.57467 8.625 5.83301C8.625 6.09134 8.45833 6.32467 8.21667 6.41634L7.71667 6.59967C7.125 6.81634 6.85833 6.91634 6.725 7.05801C6.59167 7.19967 6.48333 7.45801 6.26667 8.04967L6.08333 8.54967C5.99167 8.79134 5.75833 8.95801 5.5 8.95801ZM4.69167 5.83301C4.86667 5.93301 5.025 6.03301 5.15833 6.17467C5.3 6.31634 5.40833 6.46634 5.5 6.64134C5.6 6.45801 5.7 6.30801 5.84167 6.17467C5.98333 6.04134 6.13333 5.92467 6.30833 5.83301C6.13333 5.73301 5.975 5.63301 5.84167 5.49134C5.7 5.34967 5.59167 5.19967 5.5 5.02467C5.4 5.19967 5.3 5.34967 5.15833 5.49134C5.01667 5.63301 4.86667 5.74134 4.69167 5.83301Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span className="max-xs:hidden">Generate</span>
              </button>
            </div>
          </div>

          <div className="rounded-xl border border-stroke p-8 dark:border-dark-3">
            <h3 className="mb-7 text-lg font-semibold text-dark dark:text-white">
              Choose a Style
            </h3>
            <div className="flex flex-wrap items-center gap-7">
              <div>
                <label
                  htmlFor="11"
                  className="group flex cursor-pointer flex-col items-center"
                >
                  <input
                    type="radio"
                    name="result-style"
                    id="11"
                    className="peer sr-only"
                  />
                  <div className="relative mb-3 flex aspect-square w-20 items-center justify-center overflow-hidden rounded-full border-[3px] border-gray-3 peer-checked:border-primary">
                    <img
                      src="https://i.ibb.co/HCHTnHF/style-1.jpg"
                      alt="style 1"
                    />

                    <span className="group-has-checked:bg-[#000]/20 group-has-checked:opacity-100 absolute flex h-full w-full items-center justify-center opacity-0">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_2201_2580)">
                          <path
                            d="M12 0.674988C5.73749 0.674988 0.674988 5.73749 0.674988 12C0.674988 18.2625 5.73749 23.3625 12 23.3625C18.2625 23.3625 23.3625 18.2625 23.3625 12C23.3625 5.73749 18.2625 0.674988 12 0.674988ZM12 21.675C6.67499 21.675 2.36249 17.325 2.36249 12C2.36249 6.67499 6.67499 2.36249 12 2.36249C17.325 2.36249 21.675 6.71249 21.675 12.0375C21.675 17.325 17.325 21.675 12 21.675Z"
                            fill="white"
                          />
                          <path
                            d="M15.225 8.51248L10.7625 12.8625L8.73749 10.875C8.39999 10.5375 7.87499 10.575 7.53749 10.875C7.19999 11.2125 7.23749 11.7375 7.53749 12.075L9.93749 14.4C10.1625 14.625 10.4625 14.7375 10.7625 14.7375C11.0625 14.7375 11.3625 14.625 11.5875 14.4L16.425 9.74998C16.7625 9.41248 16.7625 8.88748 16.425 8.54998C16.0875 8.21248 15.5625 8.21248 15.225 8.51248Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2201_2580">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                  </div>

                  <span className="block text-center text-base text-dark dark:text-white">
                    No Style
                  </span>
                </label>
              </div>

              <div>
                <label
                  htmlFor="22"
                  className="group flex cursor-pointer flex-col items-center"
                >
                  <input
                    type="radio"
                    name="result-style"
                    id="22"
                    className="peer sr-only"
                  />
                  <div className="relative mb-3 flex aspect-square w-20 items-center justify-center overflow-hidden rounded-full border-[3px] border-gray-3 peer-checked:border-primary">
                    <img
                      src="https://i.ibb.co/8B50Xg1/style-2.jpg"
                      alt="style 1"
                    />
                    <div className="absolute inset-0 flex h-full w-full items-center justify-center bg-[#000]/20">
                      <span className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/[.18] px-2.5 py-px text-sm font-medium text-white">
                        Pro
                      </span>
                    </div>

                    <span className="group-has-checked:bg-[#000]/20 group-has-checked:opacity-100 absolute flex h-full w-full items-center justify-center opacity-0">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_2201_2580)">
                          <path
                            d="M12 0.674988C5.73749 0.674988 0.674988 5.73749 0.674988 12C0.674988 18.2625 5.73749 23.3625 12 23.3625C18.2625 23.3625 23.3625 18.2625 23.3625 12C23.3625 5.73749 18.2625 0.674988 12 0.674988ZM12 21.675C6.67499 21.675 2.36249 17.325 2.36249 12C2.36249 6.67499 6.67499 2.36249 12 2.36249C17.325 2.36249 21.675 6.71249 21.675 12.0375C21.675 17.325 17.325 21.675 12 21.675Z"
                            fill="white"
                          />
                          <path
                            d="M15.225 8.51248L10.7625 12.8625L8.73749 10.875C8.39999 10.5375 7.87499 10.575 7.53749 10.875C7.19999 11.2125 7.23749 11.7375 7.53749 12.075L9.93749 14.4C10.1625 14.625 10.4625 14.7375 10.7625 14.7375C11.0625 14.7375 11.3625 14.625 11.5875 14.4L16.425 9.74998C16.7625 9.41248 16.7625 8.88748 16.425 8.54998C16.0875 8.21248 15.5625 8.21248 15.225 8.51248Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2201_2580">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                  </div>

                  <span className="block text-center text-base text-dark dark:text-white">
                    Midjourney
                  </span>
                </label>
              </div>

              <div>
                <label
                  htmlFor="33"
                  className="group flex cursor-pointer flex-col items-center"
                >
                  <input
                    type="radio"
                    name="result-style"
                    id="33"
                    className="peer sr-only"
                  />
                  <div className="relative mb-3 flex aspect-square w-20 items-center justify-center overflow-hidden rounded-full border-[3px] border-gray-3 peer-checked:border-primary">
                    <img
                      src="https://i.ibb.co/5nnZ2jg/style-3.jpg"
                      alt="style 1"
                    />
                    <div className="absolute inset-0 flex h-full w-full items-center justify-center bg-[#000]/20">
                      <span className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/[.18] px-2.5 py-px text-sm font-medium text-white">
                        Pro
                      </span>
                    </div>

                    <span className="group-has-checked:bg-[#000]/20 group-has-checked:opacity-100 absolute flex h-full w-full items-center justify-center opacity-0">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_2201_2580)">
                          <path
                            d="M12 0.674988C5.73749 0.674988 0.674988 5.73749 0.674988 12C0.674988 18.2625 5.73749 23.3625 12 23.3625C18.2625 23.3625 23.3625 18.2625 23.3625 12C23.3625 5.73749 18.2625 0.674988 12 0.674988ZM12 21.675C6.67499 21.675 2.36249 17.325 2.36249 12C2.36249 6.67499 6.67499 2.36249 12 2.36249C17.325 2.36249 21.675 6.71249 21.675 12.0375C21.675 17.325 17.325 21.675 12 21.675Z"
                            fill="white"
                          />
                          <path
                            d="M15.225 8.51248L10.7625 12.8625L8.73749 10.875C8.39999 10.5375 7.87499 10.575 7.53749 10.875C7.19999 11.2125 7.23749 11.7375 7.53749 12.075L9.93749 14.4C10.1625 14.625 10.4625 14.7375 10.7625 14.7375C11.0625 14.7375 11.3625 14.625 11.5875 14.4L16.425 9.74998C16.7625 9.41248 16.7625 8.88748 16.425 8.54998C16.0875 8.21248 15.5625 8.21248 15.225 8.51248Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2201_2580">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                  </div>

                  <span className="block text-center text-base text-dark dark:text-white">
                    B-W Tattoo
                  </span>
                </label>
              </div>

              <div>
                <label
                  htmlFor="44"
                  className="group flex cursor-pointer flex-col items-center"
                >
                  <input
                    type="radio"
                    name="result-style"
                    id="44"
                    className="peer sr-only"
                  />
                  <div className="relative mb-3 flex aspect-square w-20 items-center justify-center overflow-hidden rounded-full border-[3px] border-gray-3 peer-checked:border-primary">
                    <img
                      src="https://i.ibb.co/dkw9YJn/style-4.jpg"
                      alt="style 1"
                    />
                    <div className="absolute inset-0 flex h-full w-full items-center justify-center bg-[#000]/20">
                      <span className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/[.18] px-2.5 py-px text-sm font-medium text-white">
                        Pro
                      </span>
                    </div>

                    <span className="group-has-checked:bg-[#000]/20 group-has-checked:opacity-100 absolute flex h-full w-full items-center justify-center opacity-0">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_2201_2580)">
                          <path
                            d="M12 0.674988C5.73749 0.674988 0.674988 5.73749 0.674988 12C0.674988 18.2625 5.73749 23.3625 12 23.3625C18.2625 23.3625 23.3625 18.2625 23.3625 12C23.3625 5.73749 18.2625 0.674988 12 0.674988ZM12 21.675C6.67499 21.675 2.36249 17.325 2.36249 12C2.36249 6.67499 6.67499 2.36249 12 2.36249C17.325 2.36249 21.675 6.71249 21.675 12.0375C21.675 17.325 17.325 21.675 12 21.675Z"
                            fill="white"
                          />
                          <path
                            d="M15.225 8.51248L10.7625 12.8625L8.73749 10.875C8.39999 10.5375 7.87499 10.575 7.53749 10.875C7.19999 11.2125 7.23749 11.7375 7.53749 12.075L9.93749 14.4C10.1625 14.625 10.4625 14.7375 10.7625 14.7375C11.0625 14.7375 11.3625 14.625 11.5875 14.4L16.425 9.74998C16.7625 9.41248 16.7625 8.88748 16.425 8.54998C16.0875 8.21248 15.5625 8.21248 15.225 8.51248Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2201_2580">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                  </div>

                  <span className="block text-center text-base text-dark dark:text-white">
                    Sora
                  </span>
                </label>
              </div>

              <div>
                <label
                  htmlFor="55"
                  className="group flex cursor-pointer flex-col items-center"
                >
                  <input
                    type="radio"
                    name="result-style"
                    id="55"
                    className="peer sr-only"
                  />
                  <div className="relative mb-3 flex aspect-square w-20 items-center justify-center overflow-hidden rounded-full border-[3px] border-gray-3 peer-checked:border-primary">
                    <img
                      src="https://i.ibb.co/KbFtrvH/style-5.jpg"
                      alt="style 1"
                    />

                    <span className="group-has-checked:bg-[#000]/20 group-has-checked:opacity-100 absolute flex h-full w-full items-center justify-center opacity-0">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_2201_2580)">
                          <path
                            d="M12 0.674988C5.73749 0.674988 0.674988 5.73749 0.674988 12C0.674988 18.2625 5.73749 23.3625 12 23.3625C18.2625 23.3625 23.3625 18.2625 23.3625 12C23.3625 5.73749 18.2625 0.674988 12 0.674988ZM12 21.675C6.67499 21.675 2.36249 17.325 2.36249 12C2.36249 6.67499 6.67499 2.36249 12 2.36249C17.325 2.36249 21.675 6.71249 21.675 12.0375C21.675 17.325 17.325 21.675 12 21.675Z"
                            fill="white"
                          />
                          <path
                            d="M15.225 8.51248L10.7625 12.8625L8.73749 10.875C8.39999 10.5375 7.87499 10.575 7.53749 10.875C7.19999 11.2125 7.23749 11.7375 7.53749 12.075L9.93749 14.4C10.1625 14.625 10.4625 14.7375 10.7625 14.7375C11.0625 14.7375 11.3625 14.625 11.5875 14.4L16.425 9.74998C16.7625 9.41248 16.7625 8.88748 16.425 8.54998C16.0875 8.21248 15.5625 8.21248 15.225 8.51248Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2201_2580">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                  </div>

                  <span className="block text-center text-base text-dark dark:text-white">
                    Creepy
                  </span>
                </label>
              </div>

              <div>
                <label
                  htmlFor="66"
                  className="group flex cursor-pointer flex-col items-center"
                >
                  <input
                    type="radio"
                    name="result-style"
                    id="66"
                    className="peer sr-only"
                  />
                  <div className="relative mb-3 flex aspect-square w-20 items-center justify-center overflow-hidden rounded-full border-[3px] border-gray-3 peer-checked:border-primary">
                    <img
                      src="https://i.ibb.co/HdC5qSg/style-6.jpg"
                      alt="style 1"
                    />

                    <span className="group-has-checked:bg-[#000]/20 group-has-checked:opacity-100 absolute flex h-full w-full items-center justify-center opacity-0">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_2201_2580)">
                          <path
                            d="M12 0.674988C5.73749 0.674988 0.674988 5.73749 0.674988 12C0.674988 18.2625 5.73749 23.3625 12 23.3625C18.2625 23.3625 23.3625 18.2625 23.3625 12C23.3625 5.73749 18.2625 0.674988 12 0.674988ZM12 21.675C6.67499 21.675 2.36249 17.325 2.36249 12C2.36249 6.67499 6.67499 2.36249 12 2.36249C17.325 2.36249 21.675 6.71249 21.675 12.0375C21.675 17.325 17.325 21.675 12 21.675Z"
                            fill="white"
                          />
                          <path
                            d="M15.225 8.51248L10.7625 12.8625L8.73749 10.875C8.39999 10.5375 7.87499 10.575 7.53749 10.875C7.19999 11.2125 7.23749 11.7375 7.53749 12.075L9.93749 14.4C10.1625 14.625 10.4625 14.7375 10.7625 14.7375C11.0625 14.7375 11.3625 14.625 11.5875 14.4L16.425 9.74998C16.7625 9.41248 16.7625 8.88748 16.425 8.54998C16.0875 8.21248 15.5625 8.21248 15.225 8.51248Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2201_2580">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                  </div>

                  <span className="block text-center text-base text-dark dark:text-white">
                    Art Work
                  </span>
                </label>
              </div>

              <div>
                <label
                  htmlFor="77"
                  className="group flex cursor-pointer flex-col items-center"
                >
                  <input
                    type="radio"
                    name="result-style"
                    id="77"
                    className="peer sr-only"
                  />
                  <div className="relative mb-3 flex aspect-square w-20 items-center justify-center overflow-hidden rounded-full border-[3px] border-gray-3 peer-checked:border-primary">
                    <img
                      src="https://i.ibb.co/2gZ8DQv/style-7.jpg"
                      alt="style 1"
                    />

                    <span className="group-has-checked:bg-[#000]/20 group-has-checked:opacity-100 absolute flex h-full w-full items-center justify-center opacity-0">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_2201_2580)">
                          <path
                            d="M12 0.674988C5.73749 0.674988 0.674988 5.73749 0.674988 12C0.674988 18.2625 5.73749 23.3625 12 23.3625C18.2625 23.3625 23.3625 18.2625 23.3625 12C23.3625 5.73749 18.2625 0.674988 12 0.674988ZM12 21.675C6.67499 21.675 2.36249 17.325 2.36249 12C2.36249 6.67499 6.67499 2.36249 12 2.36249C17.325 2.36249 21.675 6.71249 21.675 12.0375C21.675 17.325 17.325 21.675 12 21.675Z"
                            fill="white"
                          />
                          <path
                            d="M15.225 8.51248L10.7625 12.8625L8.73749 10.875C8.39999 10.5375 7.87499 10.575 7.53749 10.875C7.19999 11.2125 7.23749 11.7375 7.53749 12.075L9.93749 14.4C10.1625 14.625 10.4625 14.7375 10.7625 14.7375C11.0625 14.7375 11.3625 14.625 11.5875 14.4L16.425 9.74998C16.7625 9.41248 16.7625 8.88748 16.425 8.54998C16.0875 8.21248 15.5625 8.21248 15.225 8.51248Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2201_2580">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                  </div>

                  <span className="block text-center text-base text-dark dark:text-white">
                    Dreamy
                  </span>
                </label>
              </div>

              <div>
                <label
                  htmlFor="88"
                  className="group flex cursor-pointer flex-col items-center"
                >
                  <input
                    type="radio"
                    name="result-style"
                    id="88"
                    className="peer sr-only"
                  />
                  <div className="relative mb-3 flex aspect-square w-20 items-center justify-center overflow-hidden rounded-full border-[3px] border-gray-3 peer-checked:border-primary">
                    <img
                      src="https://i.ibb.co/28bvjp0/style-8.jpg"
                      alt="style 1"
                    />

                    <span className="group-has-checked:bg-[#000]/20 group-has-checked:opacity-100 absolute flex h-full w-full items-center justify-center opacity-0">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_2201_2580)">
                          <path
                            d="M12 0.674988C5.73749 0.674988 0.674988 5.73749 0.674988 12C0.674988 18.2625 5.73749 23.3625 12 23.3625C18.2625 23.3625 23.3625 18.2625 23.3625 12C23.3625 5.73749 18.2625 0.674988 12 0.674988ZM12 21.675C6.67499 21.675 2.36249 17.325 2.36249 12C2.36249 6.67499 6.67499 2.36249 12 2.36249C17.325 2.36249 21.675 6.71249 21.675 12.0375C21.675 17.325 17.325 21.675 12 21.675Z"
                            fill="white"
                          />
                          <path
                            d="M15.225 8.51248L10.7625 12.8625L8.73749 10.875C8.39999 10.5375 7.87499 10.575 7.53749 10.875C7.19999 11.2125 7.23749 11.7375 7.53749 12.075L9.93749 14.4C10.1625 14.625 10.4625 14.7375 10.7625 14.7375C11.0625 14.7375 11.3625 14.625 11.5875 14.4L16.425 9.74998C16.7625 9.41248 16.7625 8.88748 16.425 8.54998C16.0875 8.21248 15.5625 8.21248 15.225 8.51248Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2201_2580">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                  </div>

                  <span className="block text-center text-base text-dark dark:text-white">
                    Natural
                  </span>
                </label>
              </div>

              <div>
                <label
                  htmlFor="99"
                  className="group flex cursor-pointer flex-col items-center"
                >
                  <input
                    type="radio"
                    name="result-style"
                    id="99"
                    className="peer sr-only"
                  />
                  <div className="relative mb-3 flex aspect-square w-20 items-center justify-center overflow-hidden rounded-full border-[3px] border-gray-3 peer-checked:border-primary">
                    <img
                      src="https://i.ibb.co/MSCb16v/style-9.jpg"
                      alt="style 1"
                    />

                    <span className="group-has-checked:bg-[#000]/20 group-has-checked:opacity-100 absolute flex h-full w-full items-center justify-center opacity-0">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_2201_2580)">
                          <path
                            d="M12 0.674988C5.73749 0.674988 0.674988 5.73749 0.674988 12C0.674988 18.2625 5.73749 23.3625 12 23.3625C18.2625 23.3625 23.3625 18.2625 23.3625 12C23.3625 5.73749 18.2625 0.674988 12 0.674988ZM12 21.675C6.67499 21.675 2.36249 17.325 2.36249 12C2.36249 6.67499 6.67499 2.36249 12 2.36249C17.325 2.36249 21.675 6.71249 21.675 12.0375C21.675 17.325 17.325 21.675 12 21.675Z"
                            fill="white"
                          />
                          <path
                            d="M15.225 8.51248L10.7625 12.8625L8.73749 10.875C8.39999 10.5375 7.87499 10.575 7.53749 10.875C7.19999 11.2125 7.23749 11.7375 7.53749 12.075L9.93749 14.4C10.1625 14.625 10.4625 14.7375 10.7625 14.7375C11.0625 14.7375 11.3625 14.625 11.5875 14.4L16.425 9.74998C16.7625 9.41248 16.7625 8.88748 16.425 8.54998C16.0875 8.21248 15.5625 8.21248 15.225 8.51248Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2201_2580">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                  </div>

                  <span className="block text-center text-base text-dark dark:text-white">
                    Glass Morphism
                  </span>
                </label>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-stroke p-8 dark:border-dark-3">
            <h3 className="mb-7 text-lg font-semibold text-dark dark:text-white">
              Result
            </h3>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="text-center">
                <div className="mb-6 flex aspect-326/304 items-center justify-center overflow-hidden rounded-xl border border-gray-3 dark:border-dark-3">
                  <img
                    src="https://i.ibb.co/920rKYr/image-1.jpg"
                    alt="result image"
                    className="w-full"
                  />
                </div>
                <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-medium text-white hover:bg-primary/90">
                  Download
                  <span>
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.25 12.9688C18.875 12.9688 18.5313 13.2812 18.5313 13.6875V16.4688C18.5313 16.75 18.3125 16.9688 18.0313 16.9688H2.96875C2.6875 16.9688 2.46875 16.75 2.46875 16.4688V13.6875C2.46875 13.3125 2.15625 12.9688 1.75 12.9688C1.34375 12.9688 1.03125 13.2812 1.03125 13.6875V16.4688C1.03125 17.5313 1.875 18.375 2.9375 18.375H18.0313C19.0938 18.375 19.9375 17.5313 19.9375 16.4688V13.6875C19.9688 13.2812 19.625 12.9688 19.25 12.9688Z"
                        fill="currentColor"
                      />
                      <path
                        d="M9.99999 13.7187C10.125 13.8437 10.3125 13.9062 10.5 13.9062C10.6875 13.9062 10.8437 13.8437 11 13.7187L15.4687 9.375C15.75 9.09375 15.75 8.65625 15.5 8.375C15.2187 8.09375 14.7812 8.09375 14.5 8.34375L11.2187 11.5625V2.34375C11.2187 1.96875 10.9062 1.625 10.5 1.625C10.125 1.625 9.78124 1.9375 9.78124 2.34375V11.5625L6.49999 8.375C6.21874 8.09375 5.78124 8.125 5.49999 8.375C5.21874 8.65625 5.24999 9.09375 5.49999 9.375L9.99999 13.7187Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </button>
              </div>
              <div className="text-center">
                <div className="mb-6 flex aspect-326/304 items-center justify-center overflow-hidden rounded-xl border border-gray-3 dark:border-dark-3">
                  <img
                    src="https://i.ibb.co/ws04t7r/image-2.jpg"
                    alt="result image"
                    className="w-full"
                  />
                </div>
                <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-medium text-white hover:bg-primary/90">
                  Download
                  <span>
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.25 12.9688C18.875 12.9688 18.5313 13.2812 18.5313 13.6875V16.4688C18.5313 16.75 18.3125 16.9688 18.0313 16.9688H2.96875C2.6875 16.9688 2.46875 16.75 2.46875 16.4688V13.6875C2.46875 13.3125 2.15625 12.9688 1.75 12.9688C1.34375 12.9688 1.03125 13.2812 1.03125 13.6875V16.4688C1.03125 17.5313 1.875 18.375 2.9375 18.375H18.0313C19.0938 18.375 19.9375 17.5313 19.9375 16.4688V13.6875C19.9688 13.2812 19.625 12.9688 19.25 12.9688Z"
                        fill="currentColor"
                      />
                      <path
                        d="M9.99999 13.7187C10.125 13.8437 10.3125 13.9062 10.5 13.9062C10.6875 13.9062 10.8437 13.8437 11 13.7187L15.4687 9.375C15.75 9.09375 15.75 8.65625 15.5 8.375C15.2187 8.09375 14.7812 8.09375 14.5 8.34375L11.2187 11.5625V2.34375C11.2187 1.96875 10.9062 1.625 10.5 1.625C10.125 1.625 9.78124 1.9375 9.78124 2.34375V11.5625L6.49999 8.375C6.21874 8.09375 5.78124 8.125 5.49999 8.375C5.21874 8.65625 5.24999 9.09375 5.49999 9.375L9.99999 13.7187Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </button>
              </div>
              <div className="text-center">
                <div className="mb-6 flex aspect-326/304 items-center justify-center overflow-hidden rounded-xl border border-gray-3 dark:border-dark-3">
                  <img
                    src="https://i.ibb.co/w77yQtL/image-3.jpg"
                    alt="result image"
                    className="w-full"
                  />
                </div>
                <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-medium text-white hover:bg-primary/90">
                  Download
                  <span>
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.25 12.9688C18.875 12.9688 18.5313 13.2812 18.5313 13.6875V16.4688C18.5313 16.75 18.3125 16.9688 18.0313 16.9688H2.96875C2.6875 16.9688 2.46875 16.75 2.46875 16.4688V13.6875C2.46875 13.3125 2.15625 12.9688 1.75 12.9688C1.34375 12.9688 1.03125 13.2812 1.03125 13.6875V16.4688C1.03125 17.5313 1.875 18.375 2.9375 18.375H18.0313C19.0938 18.375 19.9375 17.5313 19.9375 16.4688V13.6875C19.9688 13.2812 19.625 12.9688 19.25 12.9688Z"
                        fill="currentColor"
                      />
                      <path
                        d="M9.99999 13.7187C10.125 13.8437 10.3125 13.9062 10.5 13.9062C10.6875 13.9062 10.8437 13.8437 11 13.7187L15.4687 9.375C15.75 9.09375 15.75 8.65625 15.5 8.375C15.2187 8.09375 14.7812 8.09375 14.5 8.34375L11.2187 11.5625V2.34375C11.2187 1.96875 10.9062 1.625 10.5 1.625C10.125 1.625 9.78124 1.9375 9.78124 2.34375V11.5625L6.49999 8.375C6.21874 8.09375 5.78124 8.125 5.49999 8.375C5.21874 8.65625 5.24999 9.09375 5.49999 9.375L9.99999 13.7187Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PromptToImageTwo;
