import React, { useState } from "react";

function NavbarFour() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="bg-dark">
        <div className="container mx-auto">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4">
              <a href="#" className="block w-full py-5">
                <img
                  src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-white.svg"
                  alt="logo"
                  className="block"
                />
              </a>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={() => setOpen(!open)}
                  id="navbarToggler"
                  className={` ${
                    open && "navbarTogglerActive"
                  } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
                >
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                </button>
                <nav
                  id="navbarCollapse"
                  className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-dark-2 px-6 py-5 shadow lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:shadow-none ${
                    !open && "hidden"
                  }`}
                >
                  <ul className="block lg:flex">
                    <li>
                      <a
                        href="#"
                        className="flex py-2 text-base font-medium text-dark-6 hover:text-white lg:ml-12 lg:inline-flex"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex py-2 text-base font-medium text-dark-6 hover:text-white lg:ml-12 lg:inline-flex"
                      >
                        Payment
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex py-2 text-base font-medium text-dark-6 hover:text-white lg:ml-12 lg:inline-flex"
                      >
                        Features
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="hidden justify-end gap-3 pr-16 sm:flex lg:pr-0">
                <div className="hidden items-center justify-center gap-3 rounded-full border border-white/30 px-5 py-2 text-base font-medium text-white xl:flex">
                  Lets Connect
                  <button className="text-dark-6 hover:text-white">
                    <svg
                      width="18"
                      height="19"
                      viewBox="0 0 18 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.9 8.83585V6.32664C9.9 5.35529 10.7059 4.56785 11.7 4.56785H13.5V1.92966L11.0565 1.75912C8.97255 1.61368 7.2 3.22636 7.2 5.26777V8.83585H4.5V11.474H7.2V16.75H9.9V11.474H12.6L13.5 8.83585H9.9Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                  <button className="text-dark-6 hover:text-white">
                    <svg
                      width="18"
                      height="19"
                      viewBox="0 0 18 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.4407 16L8.03531 11.1462L3.77229 16H1.96875L7.23518 10.0054L1.96875 2.5H6.59922L9.80871 7.07467L13.83 2.5H15.6336L10.6115 8.21694L16.0711 16H11.4407ZM13.4491 14.6316H12.2349L4.55113 3.86842H5.76551L8.84292 8.1781L9.37505 8.92594L13.4491 14.6316Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                  <button className="text-dark-6 hover:text-white">
                    <svg
                      width="18"
                      height="19"
                      viewBox="0 0 18 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.3871 1.75H2.58871C1.98387 1.75 1.5 2.23387 1.5 2.83871V15.6613C1.5 16.2419 1.98387 16.75 2.58871 16.75H15.3387C15.9436 16.75 16.4274 16.2661 16.4274 15.6613V2.81452C16.4758 2.23387 15.9919 1.75 15.3871 1.75ZM5.92743 14.5H3.72582V7.3629H5.92743V14.5ZM4.81453 6.37097C4.08872 6.37097 3.53226 5.79032 3.53226 5.08871C3.53226 4.3871 4.11291 3.80645 4.81453 3.80645C5.51614 3.80645 6.09678 4.3871 6.09678 5.08871C6.09678 5.79032 5.56453 6.37097 4.81453 6.37097ZM14.2742 14.5H12.0726V11.0403C12.0726 10.2177 12.0484 9.12903 10.9113 9.12903C9.75001 9.12903 9.58065 10.0484 9.58065 10.9677V14.5H7.37904V7.3629H9.53227V8.35484H9.55646C9.87098 7.77419 10.5726 7.19355 11.6613 7.19355C13.9113 7.19355 14.3226 8.64516 14.3226 10.629V14.5H14.2742Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>
                <button className="flex items-center justify-center rounded-full border border-white/30 px-5 py-2 text-base font-medium text-white hover:bg-white hover:text-dark">
                  Join
                </button>
                <button className="flex items-center justify-center rounded-full bg-white px-5 py-2 text-base font-medium text-dark hover:bg-white/90">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavbarFour;
