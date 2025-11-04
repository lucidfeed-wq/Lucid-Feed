import React from "react";

const HorizontalMenu3 = () => {
  return (
    <header className="bg-gray-2 py-16 dark:bg-dark">
      <div className="mx-auto w-full px-4 lg:container">
        <div className="flex items-center justify-end bg-white px-6 py-4 dark:bg-dark-2 sm:justify-between">
          <div className="hidden sm:block">
            <div className="flex items-center">
              <span className="mr-4 text-body-color dark:text-dark-6">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current"
                >
                  <path d="M19.1875 17.4063L14.0313 13.2188C16.1563 10.3125 15.9375 6.15625 13.2813 3.53125C11.875 2.125 10 1.34375 8 1.34375C6 1.34375 4.125 2.125 2.71875 3.53125C-0.1875 6.4375 -0.1875 11.1875 2.71875 14.0938C4.125 15.5 6 16.2813 8 16.2813C9.90625 16.2813 11.6875 15.5625 13.0938 14.2813L18.3125 18.5C18.4375 18.5938 18.5938 18.6563 18.75 18.6563C18.9688 18.6563 19.1563 18.5625 19.2813 18.4063C19.5313 18.0938 19.5 17.6563 19.1875 17.4063ZM8 14.875C6.375 14.875 4.875 14.25 3.71875 13.0938C1.34375 10.7188 1.34375 6.875 3.71875 4.53125C4.875 3.375 6.375 2.75 8 2.75C9.625 2.75 11.125 3.375 12.2813 4.53125C14.6563 6.90625 14.6563 10.75 12.2813 13.0938C11.1563 14.25 9.625 14.875 8 14.875Z" />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Type to search..."
                className="w-full bg-transparent text-base text-secondary-color outline-hidden dark:text-dark-6"
              />
            </div>
          </div>

          <div className="flex items-center">
            <div className="mr-[18px] hidden md:block">
              <a
                href="/#"
                className="text-body-color hover:text-primary dark:text-dark-6"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current"
                >
                  <path d="M21 4.77596H19.05V3.98396C19.05 3.55196 18.675 3.15596 18.1875 3.15596C17.7 3.15596 17.325 3.51596 17.325 3.98396V4.77596H6.6375V3.98396C6.6375 3.55196 6.2625 3.15596 5.775 3.15596C5.2875 3.15596 4.9125 3.51596 4.9125 3.98396V4.77596H3C1.725 4.77596 0.637497 5.78396 0.637497 7.04396V19.572C0.637497 20.796 1.6875 21.84 3 21.84H21C22.275 21.84 23.3625 20.832 23.3625 19.572V7.00796C23.3625 5.78396 22.275 4.77596 21 4.77596ZM2.3625 11.472H5.55V15.036H2.3625V11.472ZM7.2375 11.472H11.175V15.036H7.2375V11.472ZM11.175 16.656V20.184H7.2375V16.656H11.175V16.656ZM12.8625 16.656H16.8V20.184H12.8625V16.656ZM12.8625 15.036V11.472H16.8V15.036H12.8625ZM18.45 11.472H21.6375V15.036H18.45V11.472ZM3 6.39596H4.95V7.15196C4.95 7.58396 5.325 7.97996 5.8125 7.97996C6.3 7.97996 6.675 7.61996 6.675 7.15196V6.39596H17.4V7.15196C17.4 7.58396 17.775 7.97996 18.2625 7.97996C18.75 7.97996 19.125 7.61996 19.125 7.15196V6.39596H21C21.375 6.39596 21.675 6.68396 21.675 7.04396V9.85196H2.3625V7.04396C2.3625 6.68396 2.625 6.39596 3 6.39596ZM2.3625 19.536V16.62H5.55V20.148H3C2.625 20.184 2.3625 19.896 2.3625 19.536ZM21 20.184H18.45V16.656H21.6375V19.572C21.675 19.896 21.375 20.184 21 20.184Z" />
                </svg>
              </a>
            </div>

            <div className="relative mr-[18px] hidden md:block">
              <a
                href="/#"
                className="relative text-body-color hover:text-primary dark:text-dark-6"
              >
                <span className="absolute -right-[2px] -top-[2px] block h-[10px] w-[10px] rounded-full border border-white bg-red-600 dark:border-dark-2"></span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current"
                >
                  <path d="M21.6 20.076L20.85 18.96C20.7 18.744 20.625 18.528 20.625 18.276V10.788C20.625 8.664 19.6875 6.684 17.9625 5.208C16.575 4.02 14.775 3.264 12.8625 3.12V2.4C12.8625 1.968 12.4875 1.572 12 1.572C11.55 1.572 11.1375 1.932 11.1375 2.4V3.084C11.0625 3.084 10.9875 3.084 10.9125 3.12C6.5625 3.588 3.3 6.936 3.3 10.932V18.276C3.2625 18.636 3.1875 18.816 3.1125 18.924L2.4 20.076C2.175 20.436 2.175 20.868 2.4 21.228C2.625 21.552 3 21.768 3.4125 21.768H11.175V22.56C11.175 22.992 11.55 23.388 12.0375 23.388C12.4875 23.388 12.9 23.028 12.9 22.56V21.768H20.625C21.0375 21.768 21.4125 21.552 21.6375 21.228C21.8625 20.868 21.8625 20.436 21.6 20.076ZM4.3125 20.148L4.575 19.716C4.8 19.356 4.9125 18.924 4.9875 18.42V10.932C4.9875 7.764 7.6125 5.1 11.1 4.74C13.2375 4.524 15.3375 5.136 16.875 6.432C18.225 7.584 18.975 9.132 18.975 10.788V18.276C18.975 18.816 19.125 19.32 19.4625 19.824L19.6875 20.148H4.3125V20.148Z" />
                </svg>
              </a>
            </div>

            <div className="relative mr-10 hidden md:block">
              <a
                href="/#"
                className="relative text-body-color hover:text-primary dark:text-dark-6"
              >
                <span className="absolute -right-[2px] -top-[2px] block h-[10px] w-[10px] rounded-full border border-white bg-red-600 dark:border-dark-2"></span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current"
                >
                  <path d="M21 3.6H3.00001C1.72501 3.6 0.637512 4.65 0.637512 5.9625V18.1125C0.637512 19.3875 1.68751 20.475 3.00001 20.475H21C22.275 20.475 23.3625 19.425 23.3625 18.1125V5.925C23.3625 4.65 22.275 3.6 21 3.6ZM21 5.2875C21.0375 5.2875 21.075 5.2875 21.1125 5.2875L12 11.1375L2.88751 5.2875C2.92501 5.2875 2.96251 5.2875 3.00001 5.2875H21ZM21 18.7125H3.00001C2.62501 18.7125 2.32501 18.4125 2.32501 18.0375V6.9375L11.1 12.5625C11.3625 12.75 11.6625 12.825 11.9625 12.825C12.2625 12.825 12.5625 12.75 12.825 12.5625L21.6 6.9375V18.075C21.675 18.45 21.375 18.7125 21 18.7125Z" />
                </svg>
              </a>
            </div>

            <div className="group relative">
              <button className="flex items-center">
                <p className="mr-4 text-right text-sm font-medium text-dark dark:text-white">
                  <span>Thomas Anree</span>
                  <span className="block text-xs font-normal text-body-color dark:text-dark-6">
                    Ux Designer
                  </span>
                </p>
                <img
                  src="https://cdn.tailgrids.com/2.0/image/assets/images/avatar/image-02.jpg"
                  alt="avatar"
                  className="h-12 w-[48px] rounded-full object-cover object-center"
                />

                <span className="ml-3 text-body-color dark:text-dark-6">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current"
                  >
                    <path d="M10 14.25C9.8125 14.25 9.65625 14.1875 9.5 14.0625L2.3125 7C2.03125 6.71875 2.03125 6.28125 2.3125 6C2.59375 5.71875 3.03125 5.71875 3.3125 6L10 12.5312L16.6875 5.9375C16.9688 5.65625 17.4063 5.65625 17.6875 5.9375C17.9687 6.21875 17.9687 6.65625 17.6875 6.9375L10.5 14C10.3437 14.1563 10.1875 14.25 10 14.25Z" />
                  </svg>
                </span>
              </button>
              <div className="invisible absolute right-0 top-[120%] mt-3 w-[200px] space-y-2 rounded-sm bg-white p-3 opacity-0 shadow-card-2 duration-200 group-hover:visible group-hover:top-full group-hover:opacity-100 dark:bg-dark-2">
                <SubmenuItem link="/#" name="Account Settings" />
                <SubmenuItem link="/#" name="Dashboard" />
                <SubmenuItem link="/#" name="Sign Out" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HorizontalMenu3;

const SubmenuItem = ({ link, name }) => {
  return (
    <a
      href={link}
      className="block rounded-sm px-4 py-2 text-sm font-medium text-body-color hover:bg-gray-2 hover:text-primary dark:text-dark-6 dark:hover:bg-dark"
    >
      {name}
    </a>
  );
};
