import React from "react";

const Profile5 = () => {
  return (
    <section className="bg-gray-2 py-24 dark:bg-dark">
      <div className="mx-auto px-4 md:container">
        <div className="mx-auto w-full max-w-[970px]">
          <div className="relative h-[130px] md:h-[260px]">
            <img
              src="https://cdn.tailgrids.com/2.0/image/dashboard/images/profiles/profile-05/cover.jpg"
              alt="profile"
              className="h-full w-full overflow-hidden rounded-sm object-cover object-center"
            />
            <label
              htmlFor="cover"
              className="absolute bottom-4 right-4 z-10 inline-flex cursor-pointer items-center justify-center rounded-sm bg-primary px-4 py-1 text-sm font-medium text-white hover:bg-primary/90"
            >
              <input type="file" name="cover" id="cover" className="sr-only" />
              <span className="pr-[6px]">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  className="fill-current"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.76464 1.42577C4.87283 1.26349 5.05496 1.16602 5.25 1.16602H8.75C8.94504 1.16602 9.12717 1.26349 9.23536 1.42577L10.2289 2.91602H12.25C12.7141 2.91602 13.1592 3.10039 13.4874 3.42858C13.8156 3.75677 14 4.20189 14 4.66602V11.0827C14 11.5468 13.8156 11.9919 13.4874 12.3201C13.1592 12.6483 12.7141 12.8327 12.25 12.8327H1.75C1.28587 12.8327 0.840752 12.6483 0.512563 12.3201C0.184375 11.9919 0 11.5468 0 11.0827V4.66602C0 4.20189 0.184374 3.75677 0.512563 3.42858C0.840752 3.10039 1.28587 2.91602 1.75 2.91602H3.77114L4.76464 1.42577ZM5.56219 2.33268L4.5687 3.82292C4.46051 3.98521 4.27837 4.08268 4.08333 4.08268H1.75C1.59529 4.08268 1.44692 4.14414 1.33752 4.25354C1.22812 4.36293 1.16667 4.51131 1.16667 4.66602V11.0827C1.16667 11.2374 1.22812 11.3858 1.33752 11.4952C1.44692 11.6046 1.59529 11.666 1.75 11.666H12.25C12.4047 11.666 12.5531 11.6046 12.6625 11.4952C12.7719 11.3858 12.8333 11.2374 12.8333 11.0827V4.66602C12.8333 4.51131 12.7719 4.36293 12.6625 4.25354C12.5531 4.14414 12.4047 4.08268 12.25 4.08268H9.91667C9.72163 4.08268 9.53949 3.98521 9.4313 3.82292L8.43781 2.33268H5.56219Z"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.00016 5.83268C6.03366 5.83268 5.25016 6.61618 5.25016 7.58268C5.25016 8.54918 6.03366 9.33268 7.00016 9.33268C7.96666 9.33268 8.75016 8.54918 8.75016 7.58268C8.75016 6.61618 7.96666 5.83268 7.00016 5.83268ZM4.0835 7.58268C4.0835 5.97185 5.38933 4.66602 7.00016 4.66602C8.61099 4.66602 9.91683 5.97185 9.91683 7.58268C9.91683 9.19351 8.61099 10.4993 7.00016 10.4993C5.38933 10.4993 4.0835 9.19351 4.0835 7.58268Z"
                  />
                </svg>
              </span>
              Edit
            </label>
          </div>
          <div className="relative">
            <div className="relative z-10 mx-auto -mt-[60px] h-[120px] w-full max-w-[120px] rounded-full p-2 md:-mt-[86px] md:h-[176px] md:max-w-[176px]">
              <div className="absolute left-0 top-0 -z-10 h-full w-full overflow-hidden rounded-full bg-white/20 backdrop-blur-sm"></div>
              <img
                src="https://cdn.tailgrids.com/2.0/image/dashboard/images/profiles/profile-05/profile.png"
                alt="profile"
                className="h-full w-full object-cover object-center"
              />
              <label
                htmlFor="profile"
                className="absolute bottom-3 right-3 z-40 flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-full bg-primary text-white hover:bg-primary/90"
              >
                <input
                  type="file"
                  name="profile"
                  id="profile"
                  className="sr-only"
                />
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  className="fill-current"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.76464 1.42577C4.87283 1.26349 5.05496 1.16602 5.25 1.16602H8.75C8.94504 1.16602 9.12717 1.26349 9.23536 1.42577L10.2289 2.91602H12.25C12.7141 2.91602 13.1592 3.10039 13.4874 3.42858C13.8156 3.75677 14 4.20189 14 4.66602V11.0827C14 11.5468 13.8156 11.9919 13.4874 12.3201C13.1592 12.6483 12.7141 12.8327 12.25 12.8327H1.75C1.28587 12.8327 0.840752 12.6483 0.512563 12.3201C0.184375 11.9919 0 11.5468 0 11.0827V4.66602C0 4.20189 0.184374 3.75677 0.512563 3.42858C0.840752 3.10039 1.28587 2.91602 1.75 2.91602H3.77114L4.76464 1.42577ZM5.56219 2.33268L4.5687 3.82292C4.46051 3.98521 4.27837 4.08268 4.08333 4.08268H1.75C1.59529 4.08268 1.44692 4.14414 1.33752 4.25354C1.22812 4.36293 1.16667 4.51131 1.16667 4.66602V11.0827C1.16667 11.2374 1.22812 11.3858 1.33752 11.4952C1.44692 11.6046 1.59529 11.666 1.75 11.666H12.25C12.4047 11.666 12.5531 11.6046 12.6625 11.4952C12.7719 11.3858 12.8333 11.2374 12.8333 11.0827V4.66602C12.8333 4.51131 12.7719 4.36293 12.6625 4.25354C12.5531 4.14414 12.4047 4.08268 12.25 4.08268H9.91667C9.72163 4.08268 9.53949 3.98521 9.4313 3.82292L8.43781 2.33268H5.56219Z"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.00016 5.83268C6.03366 5.83268 5.25016 6.61618 5.25016 7.58268C5.25016 8.54918 6.03366 9.33268 7.00016 9.33268C7.96666 9.33268 8.75016 8.54918 8.75016 7.58268C8.75016 6.61618 7.96666 5.83268 7.00016 5.83268ZM4.0835 7.58268C4.0835 5.97185 5.38933 4.66602 7.00016 4.66602C8.61099 4.66602 9.91683 5.97185 9.91683 7.58268C9.91683 9.19351 8.61099 10.4993 7.00016 10.4993C5.38933 10.4993 4.0835 9.19351 4.0835 7.58268Z"
                  />
                </svg>
              </label>
            </div>
          </div>
          <div className="mt-3 text-center">
            <h3 className="text-xl font-semibold text-dark dark:text-white sm:text-2xl">
              Danish Heilium
            </h3>
            <p className="mb-[18px] text-base font-medium text-body-color dark:text-dark-6">
              Ui/Ux Designer
            </p>
            <div className="-mx-[18px] mb-5 inline-flex rounded-sm bg-white py-[10px] shadow-profile-5 dark:bg-dark-2">
              <div className="border-r border-stroke px-[18px] dark:text-dark-3">
                <p className="text-sm text-body-color dark:text-dark-6">
                  <span className="text-base font-semibold text-dark dark:text-white">
                    259
                  </span>
                  Posts
                </p>
              </div>
              <div className="border-r border-stroke px-[18px] dark:border-dark-3">
                <p className="text-sm text-body-color dark:text-dark-6">
                  <span className="text-base font-semibold text-dark dark:text-white">
                    129K{" "}
                  </span>
                  Followers
                </p>
              </div>
              <div className="px-[18px]">
                <p className="text-sm text-body-color dark:text-dark-6">
                  <span className="text-base font-semibold text-dark dark:text-white">
                    120{" "}
                  </span>
                  Following
                </p>
              </div>
            </div>
            <h4 className="mb-[18px] text-base font-semibold text-dark dark:text-white">
              About Me
            </h4>
            <p className="mx-auto mb-7 max-w-[714px] text-sm text-body-color dark:text-dark-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque posuere fermentum urna, eu condimentum mauris tempus
              ut. Donec fermentum blandit aliquet. Etiam dictum dapibus
              ultricies. Sed vel aliquet libero. Nunc a augue fermentum,
              pharetra ligula sed, aliquam lacus.
            </p>
            <h5 className="mb-3 text-base font-medium text-dark dark:text-white">
              Follow me on
            </h5>
            <div className="mb-5 flex items-center justify-center space-x-4">
              <a
                href="/#"
                className="flex h-5 w-5 items-center justify-center text-body-color hover:text-primary dark:text-dark-6"
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
                className="flex h-5 w-5 items-center justify-center text-body-color hover:text-primary dark:text-dark-6"
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
                className="flex h-5 w-5 items-center justify-center text-body-color hover:text-primary dark:text-dark-6"
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
                className="flex h-5 w-5 items-center justify-center text-body-color hover:text-primary dark:text-dark-6"
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
              <a
                href="/#"
                className="flex h-5 w-5 items-center justify-center text-body-color hover:text-primary dark:text-dark-6"
                name="social-icon"
                aria-label="social-icon"
              >
                <svg
                  width="23"
                  height="22"
                  viewBox="0 0 23 22"
                  className="fill-current"
                >
                  <path d="M11.6662 1.83398C6.6016 1.83398 2.49951 5.93607 2.49951 11.0007C2.49847 12.925 3.10343 14.8008 4.22854 16.3619C5.35366 17.9231 6.94181 19.0903 8.76768 19.698C9.22602 19.7777 9.39743 19.5027 9.39743 19.2617C9.39743 19.0444 9.38552 18.323 9.38552 17.5548C7.08285 17.9792 6.48701 16.9938 6.30368 16.4777C6.2001 16.2137 5.75368 15.4007 5.3641 15.1825C5.04326 15.0111 4.58493 14.5866 5.35218 14.5757C6.07451 14.5637 6.58968 15.2402 6.76201 15.5152C7.58701 16.9012 8.90518 16.5117 9.43135 16.2715C9.51202 15.6757 9.75218 15.2751 10.0162 15.0459C7.9766 14.8167 5.84535 14.0257 5.84535 10.5194C5.84535 9.52207 6.2001 8.69798 6.78493 8.0554C6.69326 7.82623 6.37243 6.88665 6.8766 5.62623C6.8766 5.62623 7.64385 5.38607 9.39743 6.56673C10.1437 6.35962 10.9147 6.25538 11.6891 6.2569C12.4683 6.2569 13.2474 6.35957 13.9808 6.56582C15.7334 5.37415 16.5016 5.62715 16.5016 5.62715C17.0058 6.88757 16.6849 7.82715 16.5933 8.05632C17.1772 8.69798 17.5329 9.51107 17.5329 10.5194C17.5329 14.0376 15.3906 14.8167 13.351 15.0459C13.6829 15.3319 13.9698 15.8819 13.9698 16.7417C13.9698 17.9673 13.9579 18.9527 13.9579 19.2626C13.9579 19.5027 14.1302 19.7887 14.5885 19.6971C16.4081 19.0827 17.9893 17.9132 19.1094 16.3532C20.2296 14.7932 20.8323 12.9212 20.8329 11.0007C20.8329 5.93607 16.7308 1.83398 11.6662 1.83398Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile5;
