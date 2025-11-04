import React from "react";

function PromptToImageThree() {
  return (
    <section className="bg-gray-2 py-20 dark:bg-dark lg:py-[120px]">
      <div className="container space-y-24">
        <div className="flex w-full flex-wrap gap-10 rounded-2xl bg-white p-7 dark:bg-dark-2 lg:flex-nowrap">
          <div className="w-full">
            <div className="mb-7">
              <label
                htmlFor=""
                className="mb-5 block text-lg font-medium text-dark dark:text-white"
              >
                Create an image form text prompt
              </label>

              <textarea
                name=""
                id=""
                rows="5"
                placeholder="Generated content will appear here..."
                className="w-full rounded-lg border border-stroke bg-transparent p-5 text-dark placeholder-dark-7 outline-hidden focus:border-primary dark:border-dark-3 dark:text-white"
              ></textarea>
            </div>
            <div className="mb-7">
              <h5 className="mb-5 text-lg font-medium text-dark dark:text-white">
                Choose a model
              </h5>
              <div className="flex flex-wrap gap-3">
                <label htmlFor="model-1" className="group block cursor-pointer">
                  <input
                    type="radio"
                    name="model"
                    id="model-1"
                    className="peer sr-only"
                  />
                  <span className="flex items-center justify-center rounded-full border border-gray-7 px-5 py-2 text-base font-medium text-dark peer-checked:border-primary peer-checked:text-primary dark:text-white">
                    Standard
                  </span>
                </label>
                <label htmlFor="model-2" className="group block cursor-pointer">
                  <input
                    type="radio"
                    name="model"
                    id="model-2"
                    className="peer sr-only"
                  />
                  <span className="flex items-center justify-center rounded-full border border-gray-7 px-5 py-2 text-base font-medium text-dark peer-checked:border-primary peer-checked:text-primary dark:text-white">
                    HD
                  </span>
                </label>
                <label htmlFor="model-3" className="group block cursor-pointer">
                  <input
                    type="radio"
                    name="model"
                    id="model-3"
                    className="peer sr-only"
                  />
                  <span className="flex items-center justify-center rounded-full border border-gray-7 px-5 py-2 text-base font-medium text-dark peer-checked:border-primary peer-checked:text-primary dark:text-white">
                    Full HD
                  </span>
                </label>
              </div>
            </div>

            <div className="mb-7">
              <h5 className="mb-5 text-lg font-medium text-dark dark:text-white">
                Choose a style
              </h5>
              <div className="flex flex-wrap gap-7">
                <label
                  htmlFor="style-1"
                  className="group flex cursor-pointer flex-col items-center"
                >
                  <input
                    type="radio"
                    name="style"
                    id="style-1"
                    className="peer sr-only"
                  />
                  <div className="relative mb-3 flex aspect-square w-[60px] items-center justify-center overflow-hidden rounded-xl border-2 border-gray-3 peer-checked:border-primary">
                    <img
                      src="https://i.ibb.co/nsCkCxq/style-1.jpg"
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

                  <span className="block text-center text-sm text-dark dark:text-white">
                    No Style
                  </span>
                </label>
                <label
                  htmlFor="style-2"
                  className="group flex cursor-pointer flex-col items-center"
                >
                  <input
                    type="radio"
                    name="style"
                    id="style-2"
                    className="peer sr-only"
                  />
                  <div className="relative mb-3 flex aspect-square w-[60px] items-center justify-center overflow-hidden rounded-xl border-2 border-gray-3 peer-checked:border-primary">
                    <img
                      src="https://i.ibb.co/N9wTykZ/style-2.jpg"
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

                  <span className="block text-center text-sm text-dark dark:text-white">
                    Glass
                  </span>
                </label>
                <label
                  htmlFor="style-3"
                  className="group flex cursor-pointer flex-col items-center"
                >
                  <input
                    type="radio"
                    name="style"
                    id="style-3"
                    className="peer sr-only"
                  />
                  <div className="relative mb-3 flex aspect-square w-[60px] items-center justify-center overflow-hidden rounded-xl border-2 border-gray-3 peer-checked:border-primary">
                    <img
                      src="https://i.ibb.co/z6VTz7q/style-3.jpg"
                      alt="style 1"
                    />

                    <div className="absolute inset-0 flex h-full w-full items-center justify-center bg-[#000]/20">
                      <span className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/[.18] px-2.5 py-px text-xs font-medium text-white">
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

                  <span className="block text-center text-sm text-dark dark:text-white">
                    Art Work
                  </span>
                </label>
                <label
                  htmlFor="style-4"
                  className="group flex cursor-pointer flex-col items-center"
                >
                  <input
                    type="radio"
                    name="style"
                    id="style-4"
                    className="peer sr-only"
                  />
                  <div className="relative mb-3 flex aspect-square w-[60px] items-center justify-center overflow-hidden rounded-xl border-2 border-gray-3 peer-checked:border-primary">
                    <img
                      src="https://i.ibb.co/RPVdgRQ/style-4.jpg"
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

                  <span className="block text-center text-sm text-dark dark:text-white">
                    Tattoo
                  </span>
                </label>
                <label
                  htmlFor="style-5"
                  className="group flex cursor-pointer flex-col items-center"
                >
                  <input
                    type="radio"
                    name="style"
                    id="style-5"
                    className="peer sr-only"
                  />
                  <div className="relative mb-3 flex aspect-square w-[60px] items-center justify-center overflow-hidden rounded-xl border-2 border-gray-3 peer-checked:border-primary">
                    <img
                      src="https://i.ibb.co/cNcgpnh/style-5.jpg"
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

                  <span className="block text-center text-sm text-dark dark:text-white">
                    Nature
                  </span>
                </label>
              </div>
            </div>

            <div>
              <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-medium text-white hover:bg-primary/90">
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
          <div className="flex aspect-472/542 w-full max-w-[472px] items-center justify-center rounded-xl border border-dashed border-gray-5 bg-gray-2 text-dark-7 dark:border-dark-3 dark:bg-white/5 dark:text-dark-6">
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

        <div className="flex w-full flex-wrap gap-10 rounded-2xl bg-white p-7 dark:bg-dark-2 lg:flex-nowrap">
          <div className="w-full">
            <div className="mb-7">
              <label
                htmlFor=""
                className="mb-5 block text-lg font-medium text-dark dark:text-white"
              >
                Create an image form text prompt
              </label>

              <textarea
                name=""
                id=""
                rows="5"
                placeholder="Generated content will appear here..."
                className="w-full rounded-lg border border-stroke bg-transparent p-5 text-dark placeholder-dark-7 outline-hidden focus:border-primary dark:border-dark-3 dark:text-white"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                ultrices augue sit amet odio posuere, sit amet porttitor ex
                viverra. Vivamus odio nunc
              </textarea>
            </div>
            <div className="mb-7">
              <h5 className="mb-5 text-lg font-medium text-dark dark:text-white">
                Choose a model
              </h5>
              <div className="flex flex-wrap gap-3">
                <label
                  htmlFor="model-11"
                  className="group block cursor-pointer"
                >
                  <input
                    type="radio"
                    name="result-model"
                    id="model-11"
                    className="peer sr-only"
                  />
                  <span className="flex items-center justify-center rounded-full border border-gray-7 px-5 py-2 text-base font-medium text-dark peer-checked:border-primary peer-checked:text-primary dark:text-white">
                    Standard
                  </span>
                </label>
                <label
                  htmlFor="model-12"
                  className="group block cursor-pointer"
                >
                  <input
                    type="radio"
                    name="result-model"
                    id="model-12"
                    className="peer sr-only"
                  />
                  <span className="flex items-center justify-center rounded-full border border-gray-7 px-5 py-2 text-base font-medium text-dark peer-checked:border-primary peer-checked:text-primary dark:text-white">
                    HD
                  </span>
                </label>
                <label
                  htmlFor="model-33"
                  className="group block cursor-pointer"
                >
                  <input
                    type="radio"
                    name="result-model"
                    id="model-33"
                    className="peer sr-only"
                  />
                  <span className="flex items-center justify-center rounded-full border border-gray-7 px-5 py-2 text-base font-medium text-dark peer-checked:border-primary peer-checked:text-primary dark:text-white">
                    Full HD
                  </span>
                </label>
              </div>
            </div>

            <div className="mb-7">
              <h5 className="mb-5 text-lg font-medium text-dark dark:text-white">
                Choose a style
              </h5>
              <div className="flex flex-wrap gap-7">
                <label
                  htmlFor="style-11"
                  className="group flex cursor-pointer flex-col items-center"
                >
                  <input
                    type="radio"
                    name="result-style"
                    id="style-11"
                    className="peer sr-only"
                  />
                  <div className="relative mb-3 flex aspect-square w-[60px] items-center justify-center overflow-hidden rounded-xl border-2 border-gray-3 peer-checked:border-primary">
                    <img
                      src="https://i.ibb.co/nsCkCxq/style-1.jpg"
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

                  <span className="block text-center text-sm text-dark dark:text-white">
                    No Style
                  </span>
                </label>
                <label
                  htmlFor="style-22"
                  className="group flex cursor-pointer flex-col items-center"
                >
                  <input
                    type="radio"
                    name="result-style"
                    id="style-22"
                    className="peer sr-only"
                  />
                  <div className="relative mb-3 flex aspect-square w-[60px] items-center justify-center overflow-hidden rounded-xl border-2 border-gray-3 peer-checked:border-primary">
                    <img
                      src="https://i.ibb.co/N9wTykZ/style-2.jpg"
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

                  <span className="block text-center text-sm text-dark dark:text-white">
                    Glass
                  </span>
                </label>
                <label
                  htmlFor="style-33"
                  className="group flex cursor-pointer flex-col items-center"
                >
                  <input
                    type="radio"
                    name="result-style"
                    id="style-33"
                    className="peer sr-only"
                  />
                  <div className="relative mb-3 flex aspect-square w-[60px] items-center justify-center overflow-hidden rounded-xl border-2 border-gray-3 peer-checked:border-primary">
                    <img
                      src="https://i.ibb.co/z6VTz7q/style-3.jpg"
                      alt="style 1"
                    />

                    <div className="absolute inset-0 flex h-full w-full items-center justify-center bg-[#000]/20">
                      <span className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/[.18] px-2.5 py-px text-xs font-medium text-white">
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

                  <span className="block text-center text-sm text-dark dark:text-white">
                    Art Work
                  </span>
                </label>
                <label
                  htmlFor="style-44"
                  className="group flex cursor-pointer flex-col items-center"
                >
                  <input
                    type="radio"
                    name="result-style"
                    id="style-44"
                    className="peer sr-only"
                  />
                  <div className="relative mb-3 flex aspect-square w-[60px] items-center justify-center overflow-hidden rounded-xl border-2 border-gray-3 peer-checked:border-primary">
                    <img
                      src="https://i.ibb.co/RPVdgRQ/style-4.jpg"
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

                  <span className="block text-center text-sm text-dark dark:text-white">
                    Tattoo
                  </span>
                </label>
                <label
                  htmlFor="style-55"
                  className="group flex cursor-pointer flex-col items-center"
                >
                  <input
                    type="radio"
                    name="result-style"
                    id="style-55"
                    className="peer sr-only"
                  />
                  <div className="relative mb-3 flex aspect-square w-[60px] items-center justify-center overflow-hidden rounded-xl border-2 border-gray-3 peer-checked:border-primary">
                    <img
                      src="https://i.ibb.co/cNcgpnh/style-5.jpg"
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

                  <span className="block text-center text-sm text-dark dark:text-white">
                    Nature
                  </span>
                </label>
              </div>
            </div>

            <div>
              <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-medium text-white hover:bg-primary/90">
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
          <div className="relative flex aspect-472/542 w-full max-w-[472px] items-center justify-center overflow-hidden rounded-xl border border-gray-5 dark:border-dark-3">
            <img
              src="https://i.ibb.co/X5F06YQ/image-1.jpg"
              alt="result image"
              className="h-full w-full object-cover object-center"
            />

            <button className="absolute bottom-5 right-5 flex h-[46px] w-[46px] items-center justify-center rounded-lg bg-white text-dark shadow-xs hover:bg-primary hover:text-white dark:bg-dark dark:text-white">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2012_1699)">
                  <path
                    d="M20.625 15.125C20.2125 15.125 19.8344 15.4687 19.8344 15.9156V18.975C19.8344 19.2844 19.5938 19.525 19.2844 19.525H2.71563C2.40626 19.525 2.16563 19.2844 2.16563 18.975V15.9156C2.16563 15.4687 1.78751 15.125 1.37501 15.125C0.962506 15.125 0.584381 15.4687 0.584381 15.9156V18.975C0.584381 20.1438 1.51251 21.0719 2.68126 21.0719H19.2844C20.4531 21.0719 21.3813 20.1438 21.3813 18.975V15.9156C21.4156 15.4687 21.0375 15.125 20.625 15.125Z"
                    fill="currentColor"
                  />
                  <path
                    d="M10.45 15.9845C10.5875 16.122 10.7938 16.1907 11 16.1907C11.2063 16.1907 11.3781 16.122 11.55 15.9845L16.5344 11.1376C16.8438 10.8282 16.8438 10.347 16.5344 10.0376C16.225 9.72822 15.7438 9.72822 15.4344 10.0376L11.7906 13.6126V1.71885C11.7906 1.30635 11.4469 0.928223 11 0.928223C10.5875 0.928223 10.2094 1.27197 10.2094 1.71885V13.6126L6.56564 10.0376C6.25626 9.72822 5.77501 9.7626 5.46564 10.0376C5.15626 10.347 5.19064 10.8282 5.46564 11.1376L10.45 15.9845Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2012_1699">
                    <rect width="22" height="22" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PromptToImageThree;
