import React from "react";

function VideoGeneratorTwo() {
  return (
    <section className="bg-gray-2 py-20 dark:bg-dark">
      <div className="container">
        <div className="mx-auto w-full max-w-[1100px] space-y-12">
          <div className="rounded-xl border border-stroke bg-white p-8 dark:border-dark-3 dark:bg-dark-2">
            <div>
              <textarea
                name=""
                id=""
                rows="7"
                placeholder="Give me a detailed topic to generate video..."
                className="w-full rounded-lg border border-stroke bg-transparent p-5 text-base text-dark placeholder-dark-6 outline-hidden focus:border-primary dark:border-dark-3 dark:text-white"
              ></textarea>
            </div>

            <div className="flex flex-wrap items-end justify-between gap-4 pt-7">
              <div className="flex flex-wrap gap-5">
                <div>
                  <div className="relative">
                    <select
                      name=""
                      id=""
                      className="w-full appearance-none rounded-lg border border-stroke bg-transparent py-2.5 pl-4 pr-10 text-dark outline-hidden dark:border-dark-3 dark:text-white"
                    >
                      <option value="">Professional</option>
                      <option value="">Mid Label</option>
                      <option value="">Beginner</option>
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
                  <div className="relative">
                    <select
                      name=""
                      id=""
                      className="w-full appearance-none rounded-lg border border-stroke bg-transparent py-2.5 pl-4 pr-10 text-dark outline-hidden dark:border-dark-3 dark:text-white"
                    >
                      <option value="">English</option>
                      <option value="">Francais</option>
                      <option value="">Turkish</option>
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

          <div className="rounded-xl border border-stroke bg-white p-8 dark:border-dark-3 dark:bg-dark-2">
            <div className="flex gap-6">
              <div className="flex h-10 w-full max-w-[40px] items-center justify-center overflow-hidden rounded-full bg-primary text-base font-semibold text-white">
                NR
              </div>
              <div className="w-full">
                <h5 className="mb-2 text-base font-semibold text-dark dark:text-white">
                  Your prompt
                </h5>
                <p className="mb-4 text-base text-body-color dark:text-dark-6">
                  Craft a captivating video effortlessly with our
                  state-of-the-art Talking Avatar Video Creator!
                </p>
                <button className="inline-flex items-center gap-2 text-sm text-secondary-color duration-200 hover:text-dark dark:hover:text-white">
                  <span>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_2523_20636)">
                        <path
                          d="M17.4938 3.34687C17.4938 3.12187 17.4094 2.89688 17.2406 2.72813C16.9031 2.39062 16.5656 2.05313 16.2563 1.71563C15.9469 1.40625 15.6656 1.09688 15.3563 0.815625C15.2156 0.646875 15.0469 0.534375 14.8219 0.50625C14.5688 0.478125 14.3438 0.534375 14.1469 0.703125L12.2344 2.61563H2.27813C1.32188 2.61563 0.506256 3.40313 0.506256 4.3875V15.75C0.506256 16.7063 1.29376 17.5219 2.27813 17.5219H13.6688C14.625 17.5219 15.4406 16.7344 15.4406 15.75V5.76562L17.2688 3.9375C17.4094 3.76875 17.4938 3.57187 17.4938 3.34687ZM9.22501 10.125C9.19688 10.1531 9.19688 10.1531 9.16876 10.1531L7.14376 10.8281L7.81876 8.80313C7.81876 8.775 7.84688 8.775 7.84688 8.74688L12.9094 3.68438L14.3156 5.0625L9.22501 10.125ZM14.1469 15.75C14.1469 16.0312 13.9219 16.2563 13.6406 16.2563H2.27813C1.99688 16.2563 1.77188 16.0312 1.77188 15.75V4.35938C1.77188 4.07812 1.99688 3.85312 2.27813 3.85312H10.9406L6.94688 7.875C6.80626 8.01562 6.66563 8.2125 6.60938 8.4375L5.56876 11.5875C5.48438 11.8125 5.54063 12.0094 5.65313 12.2063C5.73751 12.3188 5.90626 12.4875 6.21563 12.4875H6.32813L9.56251 11.4187C9.75938 11.3625 9.95626 11.2219 10.0969 11.0813L14.1469 7.03125V15.75ZM15.1875 4.19062L13.7813 2.8125L14.6531 1.94063C14.8781 2.16563 15.8063 3.09375 16.0313 3.34687L15.1875 4.19062Z"
                          fill="currentColor"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2523_20636">
                          <rect width="18" height="18" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  Edit
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="relative my-8 aspect-square overflow-hidden rounded-2xl">
                <img
                  src="https://i.ibb.co/jwRYkr6/image-1.jpg"
                  alt="video cover"
                  className="w-full object-cover object-center"
                />

                <button className="absolute left-1/2 top-1/2 flex aspect-square w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white/30 bg-white/5 text-white backdrop-blur-[10px] duration-200 hover:bg-white/10">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.2438 27.2563C3.93755 27.2563 3.58755 27.1688 3.32505 26.9938C2.71255 26.6438 2.36255 26.075 2.36255 25.375V2.625C2.36255 1.96875 2.71255 1.35625 3.32505 1.00625C3.93755 0.65625 4.63755 0.7 5.25005 1.05L24.85 12.4688C25.4188 12.8188 25.725 13.3875 25.725 14.0437C25.725 14.6562 25.4188 15.2688 24.85 15.575L5.2063 26.95C4.90005 27.125 4.55005 27.2563 4.2438 27.2563ZM4.28755 2.8V25.2L23.5375 14L4.28755 2.8Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>

                <button className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-medium text-white duration-200 hover:bg-primary/90">
                  Download Video
                  <span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_2638_62)">
                        <path
                          d="M18.75 13.75C18.375 13.75 18.0313 14.0625 18.0313 14.4687V17.25C18.0313 17.5313 17.8125 17.75 17.5312 17.75H2.46875C2.1875 17.75 1.96875 17.5313 1.96875 17.25V14.4687C1.96875 14.0625 1.625 13.75 1.25 13.75C0.875 13.75 0.53125 14.0625 0.53125 14.4687V17.25C0.53125 18.3125 1.375 19.1563 2.4375 19.1563H17.5312C18.5938 19.1563 19.4375 18.3125 19.4375 17.25V14.4687C19.4688 14.0625 19.125 13.75 18.75 13.75Z"
                          fill="currentColor"
                        />
                        <path
                          d="M9.50005 14.5313C9.62505 14.6563 9.81255 14.7188 10.0001 14.7188C10.1876 14.7188 10.3438 14.6563 10.5 14.5313L15.0313 10.125C15.3125 9.84375 15.3125 9.40625 15.0313 9.125C14.7501 8.84375 14.3126 8.84375 14.0313 9.125L10.7188 12.375V1.5625C10.7188 1.1875 10.4063 0.84375 10.0001 0.84375C9.62505 0.84375 9.2813 1.15625 9.2813 1.5625V12.375L5.9688 9.125C5.68755 8.84375 5.25005 8.875 4.9688 9.125C4.68755 9.40625 4.7188 9.84375 4.9688 10.125L9.50005 14.5313Z"
                          fill="currentColor"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2638_62">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </button>
              </div>

              <div className="relative my-8 aspect-square overflow-hidden rounded-2xl">
                <img
                  src="https://i.ibb.co/nnqGWMs/image-2.jpg"
                  alt="video cover"
                  className="w-full object-cover object-center"
                />

                <button className="absolute left-1/2 top-1/2 flex aspect-square w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white/30 bg-white/5 text-white backdrop-blur-[10px] duration-200 hover:bg-white/10">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.2438 27.2563C3.93755 27.2563 3.58755 27.1688 3.32505 26.9938C2.71255 26.6438 2.36255 26.075 2.36255 25.375V2.625C2.36255 1.96875 2.71255 1.35625 3.32505 1.00625C3.93755 0.65625 4.63755 0.7 5.25005 1.05L24.85 12.4688C25.4188 12.8188 25.725 13.3875 25.725 14.0437C25.725 14.6562 25.4188 15.2688 24.85 15.575L5.2063 26.95C4.90005 27.125 4.55005 27.2563 4.2438 27.2563ZM4.28755 2.8V25.2L23.5375 14L4.28755 2.8Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>

                <button className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-medium text-white duration-200 hover:bg-primary/90">
                  Download Video
                  <span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_2638_62)">
                        <path
                          d="M18.75 13.75C18.375 13.75 18.0313 14.0625 18.0313 14.4687V17.25C18.0313 17.5313 17.8125 17.75 17.5312 17.75H2.46875C2.1875 17.75 1.96875 17.5313 1.96875 17.25V14.4687C1.96875 14.0625 1.625 13.75 1.25 13.75C0.875 13.75 0.53125 14.0625 0.53125 14.4687V17.25C0.53125 18.3125 1.375 19.1563 2.4375 19.1563H17.5312C18.5938 19.1563 19.4375 18.3125 19.4375 17.25V14.4687C19.4688 14.0625 19.125 13.75 18.75 13.75Z"
                          fill="currentColor"
                        />
                        <path
                          d="M9.50005 14.5313C9.62505 14.6563 9.81255 14.7188 10.0001 14.7188C10.1876 14.7188 10.3438 14.6563 10.5 14.5313L15.0313 10.125C15.3125 9.84375 15.3125 9.40625 15.0313 9.125C14.7501 8.84375 14.3126 8.84375 14.0313 9.125L10.7188 12.375V1.5625C10.7188 1.1875 10.4063 0.84375 10.0001 0.84375C9.62505 0.84375 9.2813 1.15625 9.2813 1.5625V12.375L5.9688 9.125C5.68755 8.84375 5.25005 8.875 4.9688 9.125C4.68755 9.40625 4.7188 9.84375 4.9688 10.125L9.50005 14.5313Z"
                          fill="currentColor"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2638_62">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between gap-3 max-md:flex-wrap">
              <div className="flex gap-2.5">
                <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-stroke bg-gray-2 text-body-color hover:bg-gray-1 dark:border-dark-3 dark:bg-white/5 dark:hover:bg-white/10 dark:hover:text-white">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_2567_5585)">
                      <path
                        d="M16.2562 6.46873C15.75 6.04685 15.1312 5.82185 14.4843 5.82185H11.8125V4.0781C11.8125 2.86873 11.4468 1.96873 10.6875 1.43435C10.2093 1.09685 9.64685 0.928101 8.97185 0.928101C8.3531 0.928101 7.9031 1.06873 7.9031 1.06873C7.48123 1.18123 7.19998 1.6031 7.19998 2.02498V4.69685C7.19998 5.7656 6.3281 6.38435 5.70935 6.69373C5.62498 6.46873 5.39998 6.29998 5.11873 6.29998H2.24998C1.43435 6.29998 0.787476 6.97498 0.787476 7.76248V15.6656C0.787476 16.4812 1.46248 17.1281 2.24998 17.1281H5.11873C5.37185 17.1281 5.59685 16.9594 5.70935 16.7625C6.01872 16.875 6.35623 16.9594 6.69373 16.9594H13.2187C14.9906 16.9594 16.1718 15.975 16.3687 14.3437L17.2125 9.11248C17.3531 8.09998 16.9875 7.1156 16.2562 6.46873ZM4.49998 15.8344H2.24998C2.13748 15.8344 2.02498 15.75 2.02498 15.6094V7.73435C2.02498 7.62185 2.10935 7.50935 2.24998 7.50935H4.49998V15.8344ZM15.9468 8.85935L15.1031 14.1187C14.9343 15.3844 13.9781 15.6375 13.2187 15.6375H6.69373C6.35623 15.6375 6.04685 15.525 5.7656 15.3V8.04373C6.8906 7.62185 8.4656 6.5531 8.4656 4.69685V2.22185C8.5781 2.19373 8.77497 2.1656 8.97185 2.1656C9.3656 2.1656 9.67497 2.24998 9.9281 2.44685C10.3218 2.75623 10.5469 3.2906 10.5469 4.0781V5.93435C10.5469 6.58123 11.0531 7.08748 11.7 7.08748H14.4843C14.8218 7.08748 15.1593 7.2281 15.4406 7.4531C15.8343 7.7906 16.0312 8.32498 15.9468 8.85935Z"
                        fill="currentColor"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2567_5585">
                        <rect width="18" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
                <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-stroke bg-gray-2 text-body-color hover:bg-gray-1 dark:border-dark-3 dark:bg-white/5 dark:hover:bg-white/10 dark:hover:text-white">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_2567_5587)">
                      <path
                        d="M17.1844 8.94373L16.3406 3.71248C16.1437 2.08123 14.9625 1.09685 13.1906 1.09685H6.69373C6.35623 1.09685 6.01873 1.1531 5.70935 1.29373C5.62498 1.06873 5.39998 0.928101 5.11873 0.928101H2.24998C1.43435 0.928101 0.787476 1.6031 0.787476 2.3906V10.2937C0.787476 11.1094 1.46248 11.7562 2.24998 11.7562H5.11873C5.39998 11.7562 5.62498 11.5875 5.70935 11.3625C6.3281 11.6719 7.19998 12.2906 7.19998 13.3594V16.0312C7.19998 16.4812 7.48123 16.875 7.9031 16.9875C7.9031 16.9875 8.38123 17.1562 8.99998 17.1562C9.67498 17.1562 10.2375 16.9875 10.7156 16.65C11.475 16.0875 11.8406 15.2156 11.8406 14.0062V12.2625H14.5125C15.1594 12.2625 15.7781 12.0375 16.2844 11.6156C16.9875 10.8844 17.3531 9.89998 17.1844 8.94373ZM4.49998 10.4625H2.24998C2.13748 10.4625 2.02498 10.3781 2.02498 10.2375V2.36248C2.02498 2.24998 2.13748 2.1656 2.24998 2.1656H4.49998V10.4625ZM15.4406 10.5469C15.1594 10.7719 14.8219 10.9125 14.4844 10.9125H11.7C11.0531 10.9125 10.5469 11.4187 10.5469 12.0656V13.9219C10.5469 14.7094 10.35 15.2719 9.9281 15.5531C9.67498 15.7219 9.3656 15.8344 8.97185 15.8344C8.77498 15.8344 8.5781 15.8062 8.4656 15.7781V13.3031C8.4656 11.4469 6.8906 10.3781 5.7656 9.95623V2.67185C6.01873 2.47498 6.35623 2.33435 6.69373 2.33435H13.2187C14.0062 2.33435 14.9625 2.58748 15.1312 3.88123L15.975 9.11248C16.0312 9.67498 15.8344 10.2094 15.4406 10.5469Z"
                        fill="currentColor"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2567_5587">
                        <rect width="18" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
                <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-stroke bg-gray-2 text-body-color hover:bg-gray-1 dark:border-dark-3 dark:bg-white/5 dark:hover:bg-white/10 dark:hover:text-white">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.29695 11.9813C8.63445 11.9813 8.94382 11.7 8.94382 11.3344V7.11566C8.94382 5.59691 10.1813 4.35941 11.7001 4.35941H15.0469L13.4157 5.90628C13.1626 6.15941 13.1626 6.55316 13.3876 6.80628C13.5001 6.94691 13.6688 7.00316 13.8376 7.00316C14.0063 7.00316 14.1469 6.94691 14.2594 6.83441L16.8469 4.38753C17.0157 4.21878 17.1282 3.96566 17.1282 3.71253C17.1282 3.45941 17.0157 3.23441 16.8469 3.06566L14.2594 0.675033C14.0063 0.450033 13.6126 0.450033 13.3594 0.703158C13.1344 0.956283 13.1344 1.35003 13.3876 1.60316L15.0188 3.12191H11.6438C9.42195 3.12191 7.62195 4.92191 7.62195 7.14378V11.3625C7.6782 11.7 7.95945 11.9813 8.29695 11.9813Z"
                      fill="currentColor"
                    />
                    <path
                      d="M16.5938 10.7156C16.2563 10.7156 15.9469 10.9969 15.9469 11.3625V15.4406C15.9469 15.8906 15.5813 16.2562 15.1313 16.2562H2.86877C2.41877 16.2562 2.05315 15.8906 2.05315 15.4406V11.3344C2.05315 10.9969 1.7719 10.6875 1.40627 10.6875C1.04065 10.6875 0.759399 10.9687 0.759399 11.3344V15.4125C0.759399 16.5656 1.68752 17.4938 2.84065 17.4938H15.1313C16.2844 17.4938 17.2125 16.5656 17.2125 15.4125V11.3344C17.2406 10.9969 16.9594 10.7156 16.5938 10.7156Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
                <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-stroke bg-gray-2 text-body-color hover:bg-gray-1 dark:border-dark-3 dark:bg-white/5 dark:hover:bg-white/10 dark:hover:text-white">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.5 14.25C10.5 13.4216 9.82843 12.75 9 12.75C8.17157 12.75 7.5 13.4216 7.5 14.25C7.5 15.0784 8.17157 15.75 9 15.75C9.82843 15.75 10.5 15.0784 10.5 14.25Z"
                      fill="currentColor"
                    />
                    <path
                      d="M10.5 9C10.5 8.17157 9.82843 7.5 9 7.5C8.17157 7.5 7.5 8.17157 7.5 9C7.5 9.82843 8.17157 10.5 9 10.5C9.82843 10.5 10.5 9.82843 10.5 9Z"
                      fill="currentColor"
                    />
                    <path
                      d="M10.5 3.75C10.5 2.92157 9.82843 2.25 9 2.25C8.17157 2.25 7.5 2.92157 7.5 3.75C7.5 4.57843 8.17157 5.25 9 5.25C9.82843 5.25 10.5 4.57843 10.5 3.75Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>

              <div className="flex items-center gap-2.5 md:justify-end">
                <button className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-stroke bg-transparent px-4 py-2.5 text-base font-medium text-dark shadow-xs duration-200 dark:border-dark-3 dark:text-white dark:hover:bg-white/5">
                  <span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_2638_623)">
                        <path
                          d="M19.125 4.0625C18.125 3 17.0625 1.9375 16 0.90625C15.7812 0.6875 15.5312 0.5625 15.25 0.5625C14.9687 0.5625 14.6875 0.65625 14.5 0.875L2.71872 12.5625C2.53122 12.75 2.40622 12.9688 2.31247 13.1875L0.593723 18.4375C0.499973 18.6875 0.562473 18.9375 0.687473 19.125C0.843723 19.3125 1.06247 19.4375 1.34372 19.4375H1.46872L6.81247 17.6563C7.06247 17.5625 7.28122 17.4375 7.43747 17.25L19.1562 5.5625C19.3437 5.375 19.4687 5.09375 19.4687 4.8125C19.4687 4.53125 19.3437 4.28125 19.125 4.0625ZM6.43747 16.2813C6.40622 16.3125 6.37497 16.3125 6.34372 16.3438L2.31247 17.6875L3.65622 13.6563C3.65622 13.625 3.68747 13.5938 3.71872 13.5625L12.3125 5L15.0312 7.71875L6.43747 16.2813ZM16 6.71875L13.2812 4L15.1875 2.09375C16.0937 2.96875 17 3.90625 17.875 4.8125L16 6.71875Z"
                          fill="currentColor"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2638_623">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  Edit Prompt
                </button>

                <button className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-dark px-4 py-2.5 text-base font-medium text-white duration-200 hover:bg-dark/90">
                  <span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_2638_628)">
                        <path
                          d="M13.1875 9.28125H10.6875V6.8125C10.6875 6.4375 10.375 6.125 9.96875 6.125C9.59375 6.125 9.28125 6.4375 9.28125 6.84375V9.3125H6.8125C6.4375 9.3125 6.125 9.625 6.125 10.0312C6.125 10.4062 6.4375 10.7187 6.84375 10.7187H9.3125V13.1875C9.3125 13.5625 9.625 13.875 10.0312 13.875C10.4062 13.875 10.7187 13.5625 10.7187 13.1562V10.6875H13.1875C13.5625 10.6875 13.875 10.375 13.875 9.96875C13.875 9.59375 13.5625 9.28125 13.1875 9.28125Z"
                          fill="currentColor"
                        />
                        <path
                          d="M10 0.5625C4.78125 0.5625 0.5625 4.78125 0.5625 10C0.5625 15.2188 4.8125 19.4688 10.0312 19.4688C15.25 19.4688 19.5 15.2188 19.5 10C19.4688 4.78125 15.2188 0.5625 10 0.5625ZM10 18.0625C5.5625 18.0625 1.96875 14.4375 1.96875 10C1.96875 5.5625 5.5625 1.96875 10 1.96875C14.4375 1.96875 18.0625 5.5625 18.0625 10C18.0625 14.4375 14.4375 18.0625 10 18.0625Z"
                          fill="currentColor"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2638_628">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  New Prompt
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoGeneratorTwo;
