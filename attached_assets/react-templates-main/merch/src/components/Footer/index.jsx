import FooterBottom from "./FooterBottom.jsx";
import logo from "../../assets/images/logo/logo.svg";
import logoWhite from "../../assets/images/logo/logo-white.svg";
import { Link } from "react-router-dom";

const footerMenu = [
  {
    items: [
      { text: "Legal & Privacy", link: "#" },
      { text: "Contact", link: "#" },
      { text: "Gift Card", link: "#" },
      { text: "Customer Service", link: "#" },
    ],
  },
  {
    items: [
      { text: "Women", link: "#" },
      { text: "Accessories", link: "#" },
      { text: "Men", link: "#" },
      { text: "Gift", link: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <>
      <footer className="dark:bg-dark">
        <div className="container mx-auto">
          <div className="px-6 pt-20 pb-6 border rounded-lg border-stroke bg-gray dark:border-dark-3 dark:bg-dark-2 sm:px-8 xl:px-14">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full px-4 md:w-5/12 lg:w-1/3">
                <div className="mb-14">
                  <Link to="/" className="inline-block mb-8">
                    <img
                      src={logo}
                      alt="logo"
                      className="max-w-full dark:hidden"
                    />
                    <img
                      src={logoWhite}
                      alt="logo"
                      className="hidden max-w-full dark:block"
                    />
                  </Link>

                  <p className="mb-10 text-base text-body-color dark:text-dark-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras eget lorem.
                  </p>

                  <div className="flex items-center space-x-3">
                    <Link
                      to="#"
                      className="border-stroke text-body-color hover:border-primary hover:bg-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6 dark:hover:border-primary dark:hover:bg-primary flex h-8 w-8 items-center justify-center rounded-full border-[.5px] bg-white transition-all hover:text-white dark:hover:text-white"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-current"
                      >
                        <path d="M11.8502 6.45H10.4502H9.9502V5.95V4.4V3.9H10.4502H11.5002C11.7752 3.9 12.0002 3.7 12.0002 3.4V0.75C12.0002 0.475 11.8002 0.25 11.5002 0.25H9.6752C7.7002 0.25 6.3252 1.65 6.3252 3.725V5.9V6.4H5.8252H4.1252C3.7752 6.4 3.4502 6.675 3.4502 7.075V8.875C3.4502 9.225 3.7252 9.55 4.1252 9.55H5.7752H6.2752V10.05V15.075C6.2752 15.425 6.5502 15.75 6.9502 15.75H9.3002C9.4502 15.75 9.5752 15.675 9.6752 15.575C9.7752 15.475 9.85019 15.3 9.85019 15.15V10.075V9.575H10.3752H11.5002C11.8252 9.575 12.0752 9.375 12.1252 9.075V9.05V9.025L12.4752 7.3C12.5002 7.125 12.4752 6.925 12.3252 6.725C12.2752 6.6 12.0502 6.475 11.8502 6.45Z" />
                      </svg>
                    </Link>
                    <Link
                      to="#"
                      className="border-stroke text-body-color hover:border-primary hover:bg-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6 dark:hover:border-primary dark:hover:bg-primary flex h-8 w-8 items-center justify-center rounded-full border-[.5px] bg-white transition-all hover:text-white dark:hover:text-white"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-current"
                      >
                        <path d="M14.6353 4.30004C14.7245 4.19615 14.6083 4.0604 14.4764 4.10903C14.1821 4.21757 13.9132 4.28916 13.5155 4.33335C14.0047 4.06095 14.2322 3.67161 14.4173 3.19475C14.4619 3.07973 14.3273 2.97535 14.2113 3.0303C13.7405 3.25356 13.2324 3.4192 12.6981 3.51707C12.1701 2.99371 11.4173 2.66669 10.5847 2.66669C8.98574 2.66669 7.68914 3.87253 7.68914 5.35947C7.68914 5.57056 7.71501 5.77618 7.76381 5.97305C5.46538 5.86597 3.41588 4.88275 1.992 3.37509C1.8944 3.27176 1.71732 3.28548 1.65655 3.41151C1.49444 3.74775 1.40407 4.12075 1.40407 4.51346C1.40407 5.44751 1.91508 6.27164 2.6919 6.75455C2.3436 6.74409 2.0105 6.67622 1.70354 6.56105C1.55409 6.50498 1.38277 6.60351 1.40285 6.75422C1.557 7.91149 2.49395 8.86622 3.70334 9.09182C3.46047 9.15362 3.20467 9.18642 2.94005 9.18642C2.87589 9.18642 2.81228 9.18442 2.74926 9.18055C2.58888 9.17062 2.45853 9.31409 2.52729 9.45135C2.98096 10.3568 3.96057 10.989 5.10054 11.0086C4.10968 11.731 2.86125 12.1614 1.50462 12.1614C1.33735 12.1614 1.26559 12.3765 1.41399 12.4494C2.56014 13.0128 3.86538 13.3334 5.25226 13.3334C10.5782 13.3334 13.4902 9.23022 13.4902 5.67173C13.4902 5.55525 13.4873 5.43876 13.482 5.32337C13.9143 5.03295 14.3029 4.68761 14.6353 4.30004Z" />
                      </svg>
                    </Link>
                    <Link
                      to="#"
                      className="border-stroke text-body-color hover:border-primary hover:bg-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6 dark:hover:border-primary dark:hover:bg-primary flex h-8 w-8 items-center justify-center rounded-full border-[.5px] bg-white transition-all hover:text-white dark:hover:text-white"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-current"
                      >
                        <path d="M15.425 4.27495C15.25 3.59995 14.725 3.07495 14.05 2.89995C12.85 2.57495 8 2.57495 8 2.57495C8 2.57495 3.15 2.57495 1.95 2.89995C1.275 3.07495 0.75 3.59995 0.575 4.27495C0.25 5.49995 0.25 7.99995 0.25 7.99995C0.25 7.99995 0.25 10.525 0.575 11.725C0.75 12.4 1.275 12.925 1.95 13.1C3.15 13.425 8 13.4249 8 13.4249C8 13.4249 12.85 13.425 14.05 13.1C14.725 12.925 15.25 12.4 15.425 11.725C15.75 10.525 15.75 7.99995 15.75 7.99995C15.75 7.99995 15.75 5.49995 15.425 4.27495ZM6.45 10.325V5.67495L10.475 7.99995L6.45 10.325Z" />
                      </svg>
                    </Link>
                    <Link
                      to="#"
                      className="border-stroke text-body-color hover:border-primary hover:bg-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6 dark:hover:border-primary dark:hover:bg-primary flex h-8 w-8 items-center justify-center rounded-full border-[.5px] bg-white transition-all hover:text-white dark:hover:text-white"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-current"
                      >
                        <path d="M13.6774 1.33331H2.30109C1.76345 1.33331 1.33334 1.76342 1.33334 2.30105V13.6989C1.33334 14.215 1.76345 14.6666 2.30109 14.6666H13.6344C14.1721 14.6666 14.6022 14.2365 14.6022 13.6989V2.27955C14.6452 1.76342 14.2151 1.33331 13.6774 1.33331ZM5.26884 12.6666H3.31185V6.32256H5.26884V12.6666ZM4.27959 5.44084C3.63443 5.44084 3.1398 4.92471 3.1398 4.30105C3.1398 3.6774 3.65593 3.16127 4.27959 3.16127C4.90324 3.16127 5.41937 3.6774 5.41937 4.30105C5.41937 4.92471 4.94626 5.44084 4.27959 5.44084ZM12.6882 12.6666H10.7312V9.59138C10.7312 8.8602 10.7097 7.89245 9.69894 7.89245C8.66669 7.89245 8.51615 8.70966 8.51615 9.52686V12.6666H6.55916V6.32256H8.47314V7.20428H8.49464C8.77421 6.68815 9.39787 6.17202 10.3656 6.17202C12.3656 6.17202 12.7312 7.46235 12.7312 9.22579V12.6666H12.6882Z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="w-full px-4 md:w-7/12 lg:w-1/3">
                <div className="mb-14">
                  <h3 className="mb-8 text-xl font-semibold text-dark dark:text-white">
                    Useful Links
                  </h3>
                  <div className="flex flex-wrap -mx-4 space-y-3 sm:space-y-0 lg:space-y-3 xl:space-y-0">
                    {footerMenu.map((group, groupIndex) => (
                      <div
                        key={groupIndex}
                        className="w-full px-4 sm:w-1/2 lg:w-full xl:w-1/2"
                      >
                        <ul className="space-y-3">
                          {group.items.map((item, index) => (
                            <li key={index}>
                              <Link
                                to={item.link}
                                className="inline-block text-base text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary"
                              >
                                {item.text}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="w-full px-4 md:w-8/12 lg:w-1/3">
                <div className="mb-14">
                  <h3 className="mb-6 text-xl font-semibold text-dark dark:text-white">
                    Subscribe Newsletter
                  </h3>

                  <p className="mb-8 text-base text-body-color dark:text-dark-6">
                    Enter your email to receive our valuable newsletters.
                  </p>

                  <form className="flex items-center justify-between">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="border-stroke focus:border-primary dark:border-dark-3 dark:bg-dark dark:focus:border-primary h-[54px] w-full rounded-tl-lg rounded-bl-lg border bg-white px-5 outline-hidden dark:text-white dark:placeholder:text-gray-500"
                    />
                    <button className="border-stroke dark:border-dark-3 dark:bg-dark h-[54px] rounded-tr-lg rounded-br-lg border border-l-0 bg-white px-5">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21 3.59998H3.00001C1.72501 3.59998 0.637512 4.64998 0.637512 5.96248V18.1125C0.637512 19.3875 1.68751 20.475 3.00001 20.475H21C22.275 20.475 23.3625 19.425 23.3625 18.1125V5.92498C23.3625 4.64998 22.275 3.59998 21 3.59998ZM21 5.28748C21.0375 5.28748 21.075 5.28748 21.1125 5.28748L12 11.1375L2.88751 5.28748C2.92501 5.28748 2.96251 5.28748 3.00001 5.28748H21ZM21 18.7125H3.00001C2.62501 18.7125 2.32501 18.4125 2.32501 18.0375V6.93748L11.1 12.5625C11.3625 12.75 11.6625 12.825 11.9625 12.825C12.2625 12.825 12.5625 12.75 12.825 12.5625L21.6 6.93748V18.075C21.675 18.45 21.375 18.7125 21 18.7125Z"
                          fill="#3758F9"
                        />
                      </svg>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <FooterBottom />
        </div>
      </footer>
    </>
  );
};

export default Footer;
