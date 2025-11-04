import React from "react";

const Profile3 = () => {
  return (
    <section className="bg-gray-2 py-24 dark:bg-dark">
      <div className="mx-auto px-4 md:container">
        <div className="mx-auto w-full max-w-[370px] overflow-hidden rounded-lg border border-stroke bg-white shadow-card dark:border-dark-3 dark:bg-dark-2">
          <div className="px-3 pb-8 pt-10">
            <div className="mx-auto mb-5 h-[130px] w-full max-w-[130px] overflow-hidden rounded-full">
              <img
                src="https://cdn.tailgrids.com/2.0/image/dashboard/images/profiles/profile-03/profile.png"
                alt="profile"
                className="h-full w-full overflow-hidden rounded-full"
              />
            </div>
            <div className="text-center">
              <h5 className="font-semibold text-dark dark:text-white">
                Devid Strassmann
              </h5>
              <p className="mb-5 text-sm text-body-color dark:text-dark-6">
                UI/UX Designer
              </p>
              <p className="mx-auto mb-4 w-full max-w-[265px] text-sm text-body-color dark:text-dark-6">
                Lorem ipsum dolor sit amet, consectetur solium adipiscing elit
                Pellentesque so ferme.
              </p>
              <a
                href="/#"
                className="mb-5 flex items-center justify-center text-sm font-medium text-dark hover:text-primary dark:text-white"
              >
                <span className="pr-2">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    className="fill-current"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9 2.25C5.27208 2.25 2.25 5.27208 2.25 9C2.25 12.7279 5.27208 15.75 9 15.75C12.7279 15.75 15.75 12.7279 15.75 9C15.75 5.27208 12.7279 2.25 9 2.25ZM0.75 9C0.75 4.44365 4.44365 0.75 9 0.75C13.5564 0.75 17.25 4.44365 17.25 9C17.25 13.5564 13.5564 17.25 9 17.25C4.44365 17.25 0.75 13.5564 0.75 9Z"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.75 9C0.75 8.58579 1.08579 8.25 1.5 8.25H16.5C16.9142 8.25 17.25 8.58579 17.25 9C17.25 9.41421 16.9142 9.75 16.5 9.75H1.5C1.08579 9.75 0.75 9.41421 0.75 9Z"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.75017 8.99996C6.80157 11.3061 7.59469 13.5263 9 15.3369C10.4053 13.5263 11.1984 11.3061 11.2498 8.99996C11.1984 6.69383 10.4053 4.47359 9 2.66306C7.59469 4.47359 6.80157 6.69383 6.75017 8.99996ZM9 1.49996L8.44624 0.994141C6.44767 3.18214 5.31188 6.0216 5.25016 8.98434C5.24995 8.99475 5.24995 9.00517 5.25016 9.01558C5.31188 11.9783 6.44767 14.8178 8.44624 17.0058C8.58834 17.1613 8.78931 17.25 9 17.25C9.21069 17.25 9.41166 17.1613 9.55376 17.0058C11.5523 14.8178 12.6881 11.9783 12.7498 9.01558C12.7501 9.00517 12.7501 8.99475 12.7498 8.98434C12.6881 6.0216 11.5523 3.18214 9.55376 0.994141L9 1.49996Z"
                    />
                  </svg>
                </span>
                https://www.yoursite.com
              </a>
              <div className="flex items-center justify-center space-x-[10px]">
                <button className="h-[34px] rounded-full border border-transparent bg-primary px-5 text-sm font-medium text-white hover:bg-primary/90">
                  Follow
                </button>
                <button className="flex h-[34px] w-[34px] items-center justify-center rounded-full border border-stroke bg-white text-[#98A6AD] hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:bg-dark dark:text-white">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    className="fill-current"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.66667 7.33398C3.03486 7.33398 3.33333 7.63246 3.33333 8.00065V13.334C3.33333 13.5108 3.40357 13.6804 3.5286 13.8054C3.65362 13.9304 3.82319 14.0007 4 14.0007H12C12.1768 14.0007 12.3464 13.9304 12.4714 13.8054C12.5964 13.6804 12.6667 13.5108 12.6667 13.334V8.00065C12.6667 7.63246 12.9651 7.33398 13.3333 7.33398C13.7015 7.33398 14 7.63246 14 8.00065V13.334C14 13.8644 13.7893 14.3731 13.4142 14.7482C13.0391 15.1233 12.5304 15.334 12 15.334H4C3.46957 15.334 2.96086 15.1233 2.58579 14.7482C2.21071 14.3731 2 13.8644 2 13.334V8.00065C2 7.63246 2.29848 7.33398 2.66667 7.33398Z"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.52843 0.861278C7.78878 0.600928 8.21089 0.600928 8.47124 0.861278L11.1379 3.52794C11.3983 3.78829 11.3983 4.2104 11.1379 4.47075C10.8776 4.7311 10.4554 4.7311 10.1951 4.47075L7.99984 2.27549L5.80458 4.47075C5.54423 4.7311 5.12212 4.7311 4.86177 4.47075C4.60142 4.2104 4.60142 3.78829 4.86177 3.52794L7.52843 0.861278Z"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.00016 0.666016C8.36835 0.666016 8.66683 0.964492 8.66683 1.33268V9.99935C8.66683 10.3675 8.36835 10.666 8.00016 10.666C7.63197 10.666 7.3335 10.3675 7.3335 9.99935V1.33268C7.3335 0.964492 7.63197 0.666016 8.00016 0.666016Z"
                    />
                  </svg>
                </button>
                <button className="flex h-[34px] w-[34px] items-center justify-center rounded-full border border-stroke bg-white text-[#98A6AD] hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:bg-dark dark:text-white">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    className="fill-current"
                  >
                    <g clipPath="url(#clip0_3019_3044)">
                      <path d="M12.25 5.25C11.2835 5.25 10.5 6.0335 10.5 7C10.5 7.9665 11.2835 8.75 12.25 8.75C13.2165 8.75 14 7.9665 14 7C14 6.0335 13.2165 5.25 12.25 5.25Z" />
                      <path d="M7 5.25C6.0335 5.25 5.25 6.0335 5.25 7C5.25 7.9665 6.0335 8.75 7 8.75C7.9665 8.75 8.75 7.9665 8.75 7C8.75 6.0335 7.9665 5.25 7 5.25Z" />
                      <path d="M1.75 5.25C0.783502 5.25 2.37484e-07 6.0335 1.5299e-07 7C6.84959e-08 7.9665 0.783502 8.75 1.75 8.75C2.7165 8.75 3.5 7.9665 3.5 7C3.5 6.0335 2.7165 5.25 1.75 5.25Z" />
                    </g>
                    <defs>
                      <clipPath id="clip0_3019_3044">
                        <rect
                          width="14"
                          height="14"
                          fill="white"
                          transform="translate(14 14) rotate(-180)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-stroke py-4 dark:border-dark-3">
            <div className="flex items-center justify-center space-x-3 px-3">
              <a
                href="/#"
                className="flex h-5 w-5 items-center justify-center text-[#98A6AD] hover:text-primary"
                name="social-icon"
                aria-label="social-icon"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  className="fill-current"
                >
                  <path d="M10.5 10.125H12.375L13.125 7.125H10.5V5.625C10.5 4.8525 10.5 4.125 12 4.125H13.125V1.605C12.8805 1.57275 11.9572 1.5 10.9822 1.5C8.946 1.5 7.5 2.74275 7.5 5.025V7.125H5.25V10.125H7.5V16.5H10.5V10.125Z" />
                </svg>
              </a>
              <a
                href="/#"
                className="flex h-5 w-5 items-center justify-center text-[#98A6AD] hover:text-primary"
                name="social-icon"
                aria-label="social-icon"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  className="fill-current"
                >
                  <path d="M16.6217 4.24121C16.0491 4.49448 15.4419 4.66082 14.8202 4.73471C15.4755 4.34279 15.966 3.72597 16.2002 2.99921C15.5852 3.36521 14.911 3.62171 14.2082 3.76046C13.7362 3.2554 13.1105 2.92043 12.4284 2.80765C11.7464 2.69487 11.0462 2.81058 10.4367 3.1368C9.82716 3.46302 9.34251 3.98147 9.05806 4.61156C8.7736 5.24164 8.70528 5.94805 8.86372 6.62096C7.61655 6.55845 6.39647 6.23435 5.28269 5.66971C4.1689 5.10507 3.18632 4.3125 2.39872 3.34346C2.11994 3.8223 1.97344 4.36663 1.97422 4.92071C1.97422 6.00821 2.52772 6.96896 3.36922 7.53146C2.87123 7.51578 2.3842 7.3813 1.94872 7.13921V7.17821C1.94887 7.90249 2.1995 8.60442 2.65811 9.16501C3.11672 9.72559 3.75508 10.1103 4.46497 10.254C4.00268 10.3792 3.51795 10.3977 3.04747 10.308C3.24762 10.9314 3.63773 11.4766 4.16317 11.8673C4.6886 12.258 5.32307 12.4746 5.97772 12.4867C5.32708 12.9977 4.5821 13.3754 3.78538 13.5983C2.98866 13.8212 2.15582 13.8849 1.33447 13.7857C2.76825 14.7078 4.43729 15.1973 6.14197 15.1957C11.9117 15.1957 15.067 10.416 15.067 6.27071C15.067 6.13571 15.0632 5.99921 15.0572 5.86571C15.6714 5.42184 16.2014 4.87198 16.6225 4.24196L16.6217 4.24121Z" />
                </svg>
              </a>
              <a
                href="/#"
                className="flex h-5 w-5 items-center justify-center text-[#98A6AD] hover:text-primary"
                name="social-icon"
                aria-label="social-icon"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  className="fill-current"
                >
                  <path d="M5.20508 3.75075C5.20488 4.14857 5.04665 4.53003 4.76521 4.81119C4.48376 5.09235 4.10215 5.2502 3.70433 5.25C3.3065 5.2498 2.92505 5.09157 2.64389 4.81013C2.36272 4.52868 2.20488 4.14707 2.20508 3.74925C2.20528 3.35143 2.3635 2.96997 2.64495 2.68881C2.92639 2.40765 3.308 2.2498 3.70583 2.25C4.10365 2.2502 4.48511 2.40843 4.76627 2.68987C5.04743 2.97132 5.20528 3.35293 5.20508 3.75075ZM5.25008 6.36075H2.25008V15.7507H5.25008V6.36075ZM9.99008 6.36075H7.00508V15.7507H9.96008V10.8232C9.96008 8.07825 13.5376 7.82325 13.5376 10.8232V15.7507H16.5001V9.80325C16.5001 5.17575 11.2051 5.34825 9.96008 7.62075L9.99008 6.36075Z" />
                </svg>
              </a>
              <a
                href="/#"
                className="flex h-5 w-5 items-center justify-center text-[#98A6AD] hover:text-primary"
                name="social-icon"
                aria-label="social-icon"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  className="fill-current"
                >
                  <path d="M14.9918 8.679C14.9303 7.49844 14.5197 6.3627 13.812 5.41575C13.5964 5.64797 13.3659 5.86593 13.122 6.06825C12.3727 6.69064 11.5354 7.19864 10.6373 7.57575C10.7625 7.83825 10.8773 8.0925 10.9785 8.3325V8.33475C11.0071 8.40181 11.0346 8.46932 11.061 8.53725C12.1965 8.40975 13.3935 8.45625 14.5538 8.613C14.7083 8.634 14.8538 8.6565 14.9918 8.679ZM7.953 3.0915C8.6839 4.12138 9.35791 5.19048 9.972 6.294C10.8893 5.9325 11.6475 5.4765 12.258 4.96875C12.4699 4.7941 12.6694 4.60489 12.855 4.4025C11.7757 3.49479 10.4102 2.998 9 3C8.64903 2.99976 8.2987 3.03013 7.953 3.09075V3.0915ZM3.18975 7.49775C3.70067 7.48486 4.21098 7.45409 4.71975 7.4055C5.94948 7.29551 7.16871 7.08938 8.36625 6.789C7.74039 5.70166 7.06467 4.64378 6.34125 3.61875C5.56854 4.00155 4.8872 4.54606 4.34343 5.21534C3.79967 5.88463 3.40622 6.66303 3.18975 7.49775ZM4.33725 12.7763C4.62825 12.351 5.01075 11.8725 5.5185 11.352C6.609 10.2345 7.896 9.3645 9.3855 8.8845L9.432 8.871C9.30825 8.598 9.192 8.35425 9.075 8.12475C7.698 8.526 6.2475 8.7765 4.80225 8.90625C4.09725 8.97 3.465 8.99775 3 9.00225C2.99867 10.3767 3.47122 11.7096 4.338 12.7763H4.33725ZM11.2538 14.5613C10.9645 13.1027 10.5551 11.6706 10.0298 10.2795C8.52825 10.8248 7.332 11.622 6.40725 12.573C6.03405 12.9498 5.70286 13.366 5.4195 13.8143C6.45361 14.5858 7.70976 15.0018 9 15C9.77244 15.0011 10.5378 14.8526 11.2538 14.5628V14.5613ZM12.6585 13.755C13.8295 12.8548 14.6271 11.5543 14.8988 10.1025C14.6438 10.0388 14.3205 9.975 13.965 9.9255C13.1746 9.81168 12.3726 9.80336 11.58 9.90075C12.0263 11.1599 12.3866 12.4478 12.6585 13.7558V13.755ZM9 16.5C4.85775 16.5 1.5 13.1423 1.5 9C1.5 4.85775 4.85775 1.5 9 1.5C13.1423 1.5 16.5 4.85775 16.5 9C16.5 13.1423 13.1423 16.5 9 16.5Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile3;
