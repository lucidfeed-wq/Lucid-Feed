import React, { useEffect, useRef, useState } from "react";

const Hero5 = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const trigger = useRef(null);
  const modal = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!modal.current) return;
      if (
        !modalOpen ||
        modal.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setModalOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!modalOpen || keyCode !== 27) return;
      setModalOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <>
      <Navbar />

      <div className="relative bg-primary pt-[120px] md:pt-[130px] lg:pt-[160px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4">
              <div className="hero-content text-center">
                <h1 className="mx-auto mb-3 max-w-[680px] text-4xl font-bold leading-[1.208]! text-white sm:text-5xl">
                  Landing Template For Startups
                </h1>
                <p className="mx-auto mb-9 max-w-[480px] text-base text-white">
                  With TailGrids, business and students thrive together.
                  Business can perfectly match their staffing to changing demand
                  throughout the dayed.
                </p>
                <ul className="flex flex-wrap items-center justify-center">
                  <li className="mx-2 mb-3 sm:mx-4">
                    <a
                      href="/#"
                      className="inline-flex items-center justify-center rounded-md bg-white px-7 py-[14px] text-center text-base font-medium text-dark hover:bg-white/90"
                    >
                      Get Started
                    </a>
                  </li>
                  <li className="mx-2 mb-3 sm:mx-4">
                    <button
                      ref={trigger}
                      onClick={() => setModalOpen(!modalOpen)}
                      className="flex items-center text-base font-medium text-white hover:opacity-90"
                    >
                      <span className="mr-4 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-white">
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.6077 6.63397C14.2743 7.01887 14.2743 7.98112 13.6077 8.36602L2.35767 14.8612C1.691 15.2461 0.857665 14.765 0.857665 13.9952L0.857666 1.00481C0.857666 0.23501 1.691 -0.246117 2.35767 0.138783L13.6077 6.63397Z"
                            fill="#3056D3"
                          />
                        </svg>
                      </span>
                      Play Intro
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4">
              <div className="relative z-10 mx-auto max-w-[845px]">
                <div className="mt-16">
                  <img
                    src="https://cdn.tailgrids.com/2.0/image/marketing/images/hero/hero-image-05.jpg"
                    alt="hero"
                    className="mx-auto max-w-full rounded-t-xl rounded-tr-xl"
                  />
                </div>
                <div className="absolute -left-9 bottom-0 z-[-1]">
                  <DotShape />
                </div>
                <div className="absolute -right-6 -top-6 z-[-1]">
                  <DotShapeTwo />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`fixed left-0 top-0 z-50 flex h-screen w-full items-center justify-center bg-black/70 ${
            modalOpen ? "block" : "hidden"
          }`}
        >
          <div
            ref={modal}
            onFocus={() => setModalOpen(true)}
            onBlur={() => setModalOpen(false)}
            className="mx-auto w-full max-w-[550px] bg-white"
          >
            <iframe
              className="h-[320px] w-full"
              src={
                modalOpen === true
                  ? "https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1&mute=1"
                  : ""
              }
            ></iframe>
          </div>

          <button
            onClick={() => setModalOpen(false)}
            className="absolute right-0 top-0 flex h-20 w-20 cursor-pointer items-center justify-center text-body-color hover:bg-black"
          >
            <svg viewBox="0 0 16 15" className="h-8 w-8 fill-current">
              <path d="M3.37258 1.27L8.23258 6.13L13.0726 1.29C13.1574 1.19972 13.2596 1.12749 13.373 1.07766C13.4864 1.02783 13.6087 1.00141 13.7326 1C13.9978 1 14.2522 1.10536 14.4397 1.29289C14.6272 1.48043 14.7326 1.73478 14.7326 2C14.7349 2.1226 14.7122 2.24439 14.6657 2.35788C14.6193 2.47138 14.5502 2.57419 14.4626 2.66L9.57258 7.5L14.4626 12.39C14.6274 12.5512 14.724 12.7696 14.7326 13C14.7326 13.2652 14.6272 13.5196 14.4397 13.7071C14.2522 13.8946 13.9978 14 13.7326 14C13.6051 14.0053 13.478 13.984 13.3592 13.9375C13.2404 13.8911 13.1326 13.8204 13.0426 13.73L8.23258 8.87L3.38258 13.72C3.29809 13.8073 3.19715 13.8769 3.08559 13.925C2.97402 13.9731 2.85405 13.9986 2.73258 14C2.46737 14 2.21301 13.8946 2.02548 13.7071C1.83794 13.5196 1.73258 13.2652 1.73258 13C1.73025 12.8774 1.753 12.7556 1.79943 12.6421C1.84586 12.5286 1.91499 12.4258 2.00258 12.34L6.89258 7.5L2.00258 2.61C1.83777 2.44876 1.74112 2.23041 1.73258 2C1.73258 1.73478 1.83794 1.48043 2.02548 1.29289C2.21301 1.10536 2.46737 1 2.73258 1C2.97258 1.003 3.20258 1.1 3.37258 1.27Z" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero5;

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={`absolute left-0 top-0 z-20 flex w-full items-center`}>
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <a href="/#" className="block w-full py-5">
              <img
                src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-white.svg"
                alt="logo"
                className="w-full"
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
                // :className="!navbarOpen && 'hidden' "
                id="navbarCollapse"
                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:shadow-none lg:dark:bg-transparent ${
                  !open && "hidden"
                } `}
              >
                <ul className="block lg:flex">
                  <ListItem NavLink="/#">Home</ListItem>
                  <ListItem NavLink="/#">Payment</ListItem>
                  <ListItem NavLink="/#">About</ListItem>
                  <ListItem NavLink="/#">Blog</ListItem>
                </ul>
              </nav>
            </div>
            <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
              <a
                href="/#"
                className="inline-block px-5 py-2 text-base font-medium text-white hover:opacity-50"
              >
                Sign in
              </a>

              <a
                href="/#"
                className="inline-block rounded-md bg-white/[0.12] px-7 py-2 text-base font-medium text-white hover:bg-white hover:text-dark"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const ListItem = ({ children, NavLink }) => {
  return (
    <>
      <li>
        <a
          href={NavLink}
          className="flex py-2 text-base font-medium text-dark hover:text-primary hover:opacity-100 dark:text-white lg:ml-10 lg:inline-flex lg:text-white lg:hover:text-white lg:hover:opacity-50"
        >
          {children}
        </a>
      </li>
    </>
  );
};

const DotShape = () => {
  return (
    <div>
      <svg
        width="134"
        height="106"
        viewBox="0 0 134 106"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="1.66667"
          cy="104"
          r="1.66667"
          transform="rotate(-90 1.66667 104)"
          fill="white"
        />
        <circle
          cx="16.3333"
          cy="104"
          r="1.66667"
          transform="rotate(-90 16.3333 104)"
          fill="white"
        />
        <circle
          cx="31"
          cy="104"
          r="1.66667"
          transform="rotate(-90 31 104)"
          fill="white"
        />
        <circle
          cx="45.6667"
          cy="104"
          r="1.66667"
          transform="rotate(-90 45.6667 104)"
          fill="white"
        />
        <circle
          cx="60.3333"
          cy="104"
          r="1.66667"
          transform="rotate(-90 60.3333 104)"
          fill="white"
        />
        <circle
          cx="88.6667"
          cy="104"
          r="1.66667"
          transform="rotate(-90 88.6667 104)"
          fill="white"
        />
        <circle
          cx="117.667"
          cy="104"
          r="1.66667"
          transform="rotate(-90 117.667 104)"
          fill="white"
        />
        <circle
          cx="74.6667"
          cy="104"
          r="1.66667"
          transform="rotate(-90 74.6667 104)"
          fill="white"
        />
        <circle
          cx="103"
          cy="104"
          r="1.66667"
          transform="rotate(-90 103 104)"
          fill="white"
        />
        <circle
          cx="132"
          cy="104"
          r="1.66667"
          transform="rotate(-90 132 104)"
          fill="white"
        />
        <circle
          cx="1.66667"
          cy="89.3333"
          r="1.66667"
          transform="rotate(-90 1.66667 89.3333)"
          fill="white"
        />
        <circle
          cx="16.3333"
          cy="89.3333"
          r="1.66667"
          transform="rotate(-90 16.3333 89.3333)"
          fill="white"
        />
        <circle
          cx="31"
          cy="89.3333"
          r="1.66667"
          transform="rotate(-90 31 89.3333)"
          fill="white"
        />
        <circle
          cx="45.6667"
          cy="89.3333"
          r="1.66667"
          transform="rotate(-90 45.6667 89.3333)"
          fill="white"
        />
        <circle
          cx="60.3333"
          cy="89.3338"
          r="1.66667"
          transform="rotate(-90 60.3333 89.3338)"
          fill="white"
        />
        <circle
          cx="88.6667"
          cy="89.3338"
          r="1.66667"
          transform="rotate(-90 88.6667 89.3338)"
          fill="white"
        />
        <circle
          cx="117.667"
          cy="89.3338"
          r="1.66667"
          transform="rotate(-90 117.667 89.3338)"
          fill="white"
        />
        <circle
          cx="74.6667"
          cy="89.3338"
          r="1.66667"
          transform="rotate(-90 74.6667 89.3338)"
          fill="white"
        />
        <circle
          cx="103"
          cy="89.3338"
          r="1.66667"
          transform="rotate(-90 103 89.3338)"
          fill="white"
        />
        <circle
          cx="132"
          cy="89.3338"
          r="1.66667"
          transform="rotate(-90 132 89.3338)"
          fill="white"
        />
        <circle
          cx="1.66667"
          cy="74.6673"
          r="1.66667"
          transform="rotate(-90 1.66667 74.6673)"
          fill="white"
        />
        <circle
          cx="1.66667"
          cy="31.0003"
          r="1.66667"
          transform="rotate(-90 1.66667 31.0003)"
          fill="white"
        />
        <circle
          cx="16.3333"
          cy="74.6668"
          r="1.66667"
          transform="rotate(-90 16.3333 74.6668)"
          fill="white"
        />
        <circle
          cx="16.3333"
          cy="31.0003"
          r="1.66667"
          transform="rotate(-90 16.3333 31.0003)"
          fill="white"
        />
        <circle
          cx="31"
          cy="74.6668"
          r="1.66667"
          transform="rotate(-90 31 74.6668)"
          fill="white"
        />
        <circle
          cx="31"
          cy="31.0003"
          r="1.66667"
          transform="rotate(-90 31 31.0003)"
          fill="white"
        />
        <circle
          cx="45.6667"
          cy="74.6668"
          r="1.66667"
          transform="rotate(-90 45.6667 74.6668)"
          fill="white"
        />
        <circle
          cx="45.6667"
          cy="31.0003"
          r="1.66667"
          transform="rotate(-90 45.6667 31.0003)"
          fill="white"
        />
        <circle
          cx="60.3333"
          cy="74.6668"
          r="1.66667"
          transform="rotate(-90 60.3333 74.6668)"
          fill="white"
        />
        <circle
          cx="60.3333"
          cy="31.0001"
          r="1.66667"
          transform="rotate(-90 60.3333 31.0001)"
          fill="white"
        />
        <circle
          cx="88.6667"
          cy="74.6668"
          r="1.66667"
          transform="rotate(-90 88.6667 74.6668)"
          fill="white"
        />
        <circle
          cx="88.6667"
          cy="31.0001"
          r="1.66667"
          transform="rotate(-90 88.6667 31.0001)"
          fill="white"
        />
        <circle
          cx="117.667"
          cy="74.6668"
          r="1.66667"
          transform="rotate(-90 117.667 74.6668)"
          fill="white"
        />
        <circle
          cx="117.667"
          cy="31.0001"
          r="1.66667"
          transform="rotate(-90 117.667 31.0001)"
          fill="white"
        />
        <circle
          cx="74.6667"
          cy="74.6668"
          r="1.66667"
          transform="rotate(-90 74.6667 74.6668)"
          fill="white"
        />
        <circle
          cx="74.6667"
          cy="31.0001"
          r="1.66667"
          transform="rotate(-90 74.6667 31.0001)"
          fill="white"
        />
        <circle
          cx="103"
          cy="74.6668"
          r="1.66667"
          transform="rotate(-90 103 74.6668)"
          fill="white"
        />
        <circle
          cx="103"
          cy="31.0001"
          r="1.66667"
          transform="rotate(-90 103 31.0001)"
          fill="white"
        />
        <circle
          cx="132"
          cy="74.6668"
          r="1.66667"
          transform="rotate(-90 132 74.6668)"
          fill="white"
        />
        <circle
          cx="132"
          cy="31.0001"
          r="1.66667"
          transform="rotate(-90 132 31.0001)"
          fill="white"
        />
        <circle
          cx="1.66667"
          cy="60.0003"
          r="1.66667"
          transform="rotate(-90 1.66667 60.0003)"
          fill="white"
        />
        <circle
          cx="1.66667"
          cy="16.3336"
          r="1.66667"
          transform="rotate(-90 1.66667 16.3336)"
          fill="white"
        />
        <circle
          cx="16.3333"
          cy="60.0003"
          r="1.66667"
          transform="rotate(-90 16.3333 60.0003)"
          fill="white"
        />
        <circle
          cx="16.3333"
          cy="16.3336"
          r="1.66667"
          transform="rotate(-90 16.3333 16.3336)"
          fill="white"
        />
        <circle
          cx="31"
          cy="60.0003"
          r="1.66667"
          transform="rotate(-90 31 60.0003)"
          fill="white"
        />
        <circle
          cx="31"
          cy="16.3336"
          r="1.66667"
          transform="rotate(-90 31 16.3336)"
          fill="white"
        />
        <circle
          cx="45.6667"
          cy="60.0003"
          r="1.66667"
          transform="rotate(-90 45.6667 60.0003)"
          fill="white"
        />
        <circle
          cx="45.6667"
          cy="16.3336"
          r="1.66667"
          transform="rotate(-90 45.6667 16.3336)"
          fill="white"
        />
        <circle
          cx="60.3333"
          cy="60.0003"
          r="1.66667"
          transform="rotate(-90 60.3333 60.0003)"
          fill="white"
        />
        <circle
          cx="60.3333"
          cy="16.3336"
          r="1.66667"
          transform="rotate(-90 60.3333 16.3336)"
          fill="white"
        />
        <circle
          cx="88.6667"
          cy="60.0003"
          r="1.66667"
          transform="rotate(-90 88.6667 60.0003)"
          fill="white"
        />
        <circle
          cx="88.6667"
          cy="16.3336"
          r="1.66667"
          transform="rotate(-90 88.6667 16.3336)"
          fill="white"
        />
        <circle
          cx="117.667"
          cy="60.0003"
          r="1.66667"
          transform="rotate(-90 117.667 60.0003)"
          fill="white"
        />
        <circle
          cx="117.667"
          cy="16.3336"
          r="1.66667"
          transform="rotate(-90 117.667 16.3336)"
          fill="white"
        />
        <circle
          cx="74.6667"
          cy="60.0003"
          r="1.66667"
          transform="rotate(-90 74.6667 60.0003)"
          fill="white"
        />
        <circle
          cx="74.6667"
          cy="16.3336"
          r="1.66667"
          transform="rotate(-90 74.6667 16.3336)"
          fill="white"
        />
        <circle
          cx="103"
          cy="60.0003"
          r="1.66667"
          transform="rotate(-90 103 60.0003)"
          fill="white"
        />
        <circle
          cx="103"
          cy="16.3336"
          r="1.66667"
          transform="rotate(-90 103 16.3336)"
          fill="white"
        />
        <circle
          cx="132"
          cy="60.0003"
          r="1.66667"
          transform="rotate(-90 132 60.0003)"
          fill="white"
        />
        <circle
          cx="132"
          cy="16.3336"
          r="1.66667"
          transform="rotate(-90 132 16.3336)"
          fill="white"
        />
        <circle
          cx="1.66667"
          cy="45.3336"
          r="1.66667"
          transform="rotate(-90 1.66667 45.3336)"
          fill="white"
        />
        <circle
          cx="1.66667"
          cy="1.66683"
          r="1.66667"
          transform="rotate(-90 1.66667 1.66683)"
          fill="white"
        />
        <circle
          cx="16.3333"
          cy="45.3336"
          r="1.66667"
          transform="rotate(-90 16.3333 45.3336)"
          fill="white"
        />
        <circle
          cx="16.3333"
          cy="1.66683"
          r="1.66667"
          transform="rotate(-90 16.3333 1.66683)"
          fill="white"
        />
        <circle
          cx="31"
          cy="45.3336"
          r="1.66667"
          transform="rotate(-90 31 45.3336)"
          fill="white"
        />
        <circle
          cx="31"
          cy="1.66683"
          r="1.66667"
          transform="rotate(-90 31 1.66683)"
          fill="white"
        />
        <circle
          cx="45.6667"
          cy="45.3336"
          r="1.66667"
          transform="rotate(-90 45.6667 45.3336)"
          fill="white"
        />
        <circle
          cx="45.6667"
          cy="1.66683"
          r="1.66667"
          transform="rotate(-90 45.6667 1.66683)"
          fill="white"
        />
        <circle
          cx="60.3333"
          cy="45.3338"
          r="1.66667"
          transform="rotate(-90 60.3333 45.3338)"
          fill="white"
        />
        <circle
          cx="60.3333"
          cy="1.66707"
          r="1.66667"
          transform="rotate(-90 60.3333 1.66707)"
          fill="white"
        />
        <circle
          cx="88.6667"
          cy="45.3338"
          r="1.66667"
          transform="rotate(-90 88.6667 45.3338)"
          fill="white"
        />
        <circle
          cx="88.6667"
          cy="1.66707"
          r="1.66667"
          transform="rotate(-90 88.6667 1.66707)"
          fill="white"
        />
        <circle
          cx="117.667"
          cy="45.3338"
          r="1.66667"
          transform="rotate(-90 117.667 45.3338)"
          fill="white"
        />
        <circle
          cx="117.667"
          cy="1.66707"
          r="1.66667"
          transform="rotate(-90 117.667 1.66707)"
          fill="white"
        />
        <circle
          cx="74.6667"
          cy="45.3338"
          r="1.66667"
          transform="rotate(-90 74.6667 45.3338)"
          fill="white"
        />
        <circle
          cx="74.6667"
          cy="1.66707"
          r="1.66667"
          transform="rotate(-90 74.6667 1.66707)"
          fill="white"
        />
        <circle
          cx="103"
          cy="45.3338"
          r="1.66667"
          transform="rotate(-90 103 45.3338)"
          fill="white"
        />
        <circle
          cx="103"
          cy="1.66707"
          r="1.66667"
          transform="rotate(-90 103 1.66707)"
          fill="white"
        />
        <circle
          cx="132"
          cy="45.3338"
          r="1.66667"
          transform="rotate(-90 132 45.3338)"
          fill="white"
        />
        <circle
          cx="132"
          cy="1.66707"
          r="1.66667"
          transform="rotate(-90 132 1.66707)"
          fill="white"
        />
      </svg>
    </div>
  );
};

const DotShapeTwo = () => {
  return (
    <div>
      <svg
        width="134"
        height="106"
        viewBox="0 0 134 106"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="1.66667"
          cy="104"
          r="1.66667"
          transform="rotate(-90 1.66667 104)"
          fill="white"
        />
        <circle
          cx="16.3333"
          cy="104"
          r="1.66667"
          transform="rotate(-90 16.3333 104)"
          fill="white"
        />
        <circle
          cx="31"
          cy="104"
          r="1.66667"
          transform="rotate(-90 31 104)"
          fill="white"
        />
        <circle
          cx="45.6667"
          cy="104"
          r="1.66667"
          transform="rotate(-90 45.6667 104)"
          fill="white"
        />
        <circle
          cx="60.3333"
          cy="104"
          r="1.66667"
          transform="rotate(-90 60.3333 104)"
          fill="white"
        />
        <circle
          cx="88.6667"
          cy="104"
          r="1.66667"
          transform="rotate(-90 88.6667 104)"
          fill="white"
        />
        <circle
          cx="117.667"
          cy="104"
          r="1.66667"
          transform="rotate(-90 117.667 104)"
          fill="white"
        />
        <circle
          cx="74.6667"
          cy="104"
          r="1.66667"
          transform="rotate(-90 74.6667 104)"
          fill="white"
        />
        <circle
          cx="103"
          cy="104"
          r="1.66667"
          transform="rotate(-90 103 104)"
          fill="white"
        />
        <circle
          cx="132"
          cy="104"
          r="1.66667"
          transform="rotate(-90 132 104)"
          fill="white"
        />
        <circle
          cx="1.66667"
          cy="89.3333"
          r="1.66667"
          transform="rotate(-90 1.66667 89.3333)"
          fill="white"
        />
        <circle
          cx="16.3333"
          cy="89.3333"
          r="1.66667"
          transform="rotate(-90 16.3333 89.3333)"
          fill="white"
        />
        <circle
          cx="31"
          cy="89.3333"
          r="1.66667"
          transform="rotate(-90 31 89.3333)"
          fill="white"
        />
        <circle
          cx="45.6667"
          cy="89.3333"
          r="1.66667"
          transform="rotate(-90 45.6667 89.3333)"
          fill="white"
        />
        <circle
          cx="60.3333"
          cy="89.3338"
          r="1.66667"
          transform="rotate(-90 60.3333 89.3338)"
          fill="white"
        />
        <circle
          cx="88.6667"
          cy="89.3338"
          r="1.66667"
          transform="rotate(-90 88.6667 89.3338)"
          fill="white"
        />
        <circle
          cx="117.667"
          cy="89.3338"
          r="1.66667"
          transform="rotate(-90 117.667 89.3338)"
          fill="white"
        />
        <circle
          cx="74.6667"
          cy="89.3338"
          r="1.66667"
          transform="rotate(-90 74.6667 89.3338)"
          fill="white"
        />
        <circle
          cx="103"
          cy="89.3338"
          r="1.66667"
          transform="rotate(-90 103 89.3338)"
          fill="white"
        />
        <circle
          cx="132"
          cy="89.3338"
          r="1.66667"
          transform="rotate(-90 132 89.3338)"
          fill="white"
        />
        <circle
          cx="1.66667"
          cy="74.6673"
          r="1.66667"
          transform="rotate(-90 1.66667 74.6673)"
          fill="white"
        />
        <circle
          cx="1.66667"
          cy="31.0003"
          r="1.66667"
          transform="rotate(-90 1.66667 31.0003)"
          fill="white"
        />
        <circle
          cx="16.3333"
          cy="74.6668"
          r="1.66667"
          transform="rotate(-90 16.3333 74.6668)"
          fill="white"
        />
        <circle
          cx="16.3333"
          cy="31.0003"
          r="1.66667"
          transform="rotate(-90 16.3333 31.0003)"
          fill="white"
        />
        <circle
          cx="31"
          cy="74.6668"
          r="1.66667"
          transform="rotate(-90 31 74.6668)"
          fill="white"
        />
        <circle
          cx="31"
          cy="31.0003"
          r="1.66667"
          transform="rotate(-90 31 31.0003)"
          fill="white"
        />
        <circle
          cx="45.6667"
          cy="74.6668"
          r="1.66667"
          transform="rotate(-90 45.6667 74.6668)"
          fill="white"
        />
        <circle
          cx="45.6667"
          cy="31.0003"
          r="1.66667"
          transform="rotate(-90 45.6667 31.0003)"
          fill="white"
        />
        <circle
          cx="60.3333"
          cy="74.6668"
          r="1.66667"
          transform="rotate(-90 60.3333 74.6668)"
          fill="white"
        />
        <circle
          cx="60.3333"
          cy="31.0001"
          r="1.66667"
          transform="rotate(-90 60.3333 31.0001)"
          fill="white"
        />
        <circle
          cx="88.6667"
          cy="74.6668"
          r="1.66667"
          transform="rotate(-90 88.6667 74.6668)"
          fill="white"
        />
        <circle
          cx="88.6667"
          cy="31.0001"
          r="1.66667"
          transform="rotate(-90 88.6667 31.0001)"
          fill="white"
        />
        <circle
          cx="117.667"
          cy="74.6668"
          r="1.66667"
          transform="rotate(-90 117.667 74.6668)"
          fill="white"
        />
        <circle
          cx="117.667"
          cy="31.0001"
          r="1.66667"
          transform="rotate(-90 117.667 31.0001)"
          fill="white"
        />
        <circle
          cx="74.6667"
          cy="74.6668"
          r="1.66667"
          transform="rotate(-90 74.6667 74.6668)"
          fill="white"
        />
        <circle
          cx="74.6667"
          cy="31.0001"
          r="1.66667"
          transform="rotate(-90 74.6667 31.0001)"
          fill="white"
        />
        <circle
          cx="103"
          cy="74.6668"
          r="1.66667"
          transform="rotate(-90 103 74.6668)"
          fill="white"
        />
        <circle
          cx="103"
          cy="31.0001"
          r="1.66667"
          transform="rotate(-90 103 31.0001)"
          fill="white"
        />
        <circle
          cx="132"
          cy="74.6668"
          r="1.66667"
          transform="rotate(-90 132 74.6668)"
          fill="white"
        />
        <circle
          cx="132"
          cy="31.0001"
          r="1.66667"
          transform="rotate(-90 132 31.0001)"
          fill="white"
        />
        <circle
          cx="1.66667"
          cy="60.0003"
          r="1.66667"
          transform="rotate(-90 1.66667 60.0003)"
          fill="white"
        />
        <circle
          cx="1.66667"
          cy="16.3336"
          r="1.66667"
          transform="rotate(-90 1.66667 16.3336)"
          fill="white"
        />
        <circle
          cx="16.3333"
          cy="60.0003"
          r="1.66667"
          transform="rotate(-90 16.3333 60.0003)"
          fill="white"
        />
        <circle
          cx="16.3333"
          cy="16.3336"
          r="1.66667"
          transform="rotate(-90 16.3333 16.3336)"
          fill="white"
        />
        <circle
          cx="31"
          cy="60.0003"
          r="1.66667"
          transform="rotate(-90 31 60.0003)"
          fill="white"
        />
        <circle
          cx="31"
          cy="16.3336"
          r="1.66667"
          transform="rotate(-90 31 16.3336)"
          fill="white"
        />
        <circle
          cx="45.6667"
          cy="60.0003"
          r="1.66667"
          transform="rotate(-90 45.6667 60.0003)"
          fill="white"
        />
        <circle
          cx="45.6667"
          cy="16.3336"
          r="1.66667"
          transform="rotate(-90 45.6667 16.3336)"
          fill="white"
        />
        <circle
          cx="60.3333"
          cy="60.0003"
          r="1.66667"
          transform="rotate(-90 60.3333 60.0003)"
          fill="white"
        />
        <circle
          cx="60.3333"
          cy="16.3336"
          r="1.66667"
          transform="rotate(-90 60.3333 16.3336)"
          fill="white"
        />
        <circle
          cx="88.6667"
          cy="60.0003"
          r="1.66667"
          transform="rotate(-90 88.6667 60.0003)"
          fill="white"
        />
        <circle
          cx="88.6667"
          cy="16.3336"
          r="1.66667"
          transform="rotate(-90 88.6667 16.3336)"
          fill="white"
        />
        <circle
          cx="117.667"
          cy="60.0003"
          r="1.66667"
          transform="rotate(-90 117.667 60.0003)"
          fill="white"
        />
        <circle
          cx="117.667"
          cy="16.3336"
          r="1.66667"
          transform="rotate(-90 117.667 16.3336)"
          fill="white"
        />
        <circle
          cx="74.6667"
          cy="60.0003"
          r="1.66667"
          transform="rotate(-90 74.6667 60.0003)"
          fill="white"
        />
        <circle
          cx="74.6667"
          cy="16.3336"
          r="1.66667"
          transform="rotate(-90 74.6667 16.3336)"
          fill="white"
        />
        <circle
          cx="103"
          cy="60.0003"
          r="1.66667"
          transform="rotate(-90 103 60.0003)"
          fill="white"
        />
        <circle
          cx="103"
          cy="16.3336"
          r="1.66667"
          transform="rotate(-90 103 16.3336)"
          fill="white"
        />
        <circle
          cx="132"
          cy="60.0003"
          r="1.66667"
          transform="rotate(-90 132 60.0003)"
          fill="white"
        />
        <circle
          cx="132"
          cy="16.3336"
          r="1.66667"
          transform="rotate(-90 132 16.3336)"
          fill="white"
        />
        <circle
          cx="1.66667"
          cy="45.3336"
          r="1.66667"
          transform="rotate(-90 1.66667 45.3336)"
          fill="white"
        />
        <circle
          cx="1.66667"
          cy="1.66683"
          r="1.66667"
          transform="rotate(-90 1.66667 1.66683)"
          fill="white"
        />
        <circle
          cx="16.3333"
          cy="45.3336"
          r="1.66667"
          transform="rotate(-90 16.3333 45.3336)"
          fill="white"
        />
        <circle
          cx="16.3333"
          cy="1.66683"
          r="1.66667"
          transform="rotate(-90 16.3333 1.66683)"
          fill="white"
        />
        <circle
          cx="31"
          cy="45.3336"
          r="1.66667"
          transform="rotate(-90 31 45.3336)"
          fill="white"
        />
        <circle
          cx="31"
          cy="1.66683"
          r="1.66667"
          transform="rotate(-90 31 1.66683)"
          fill="white"
        />
        <circle
          cx="45.6667"
          cy="45.3336"
          r="1.66667"
          transform="rotate(-90 45.6667 45.3336)"
          fill="white"
        />
        <circle
          cx="45.6667"
          cy="1.66683"
          r="1.66667"
          transform="rotate(-90 45.6667 1.66683)"
          fill="white"
        />
        <circle
          cx="60.3333"
          cy="45.3338"
          r="1.66667"
          transform="rotate(-90 60.3333 45.3338)"
          fill="white"
        />
        <circle
          cx="60.3333"
          cy="1.66707"
          r="1.66667"
          transform="rotate(-90 60.3333 1.66707)"
          fill="white"
        />
        <circle
          cx="88.6667"
          cy="45.3338"
          r="1.66667"
          transform="rotate(-90 88.6667 45.3338)"
          fill="white"
        />
        <circle
          cx="88.6667"
          cy="1.66707"
          r="1.66667"
          transform="rotate(-90 88.6667 1.66707)"
          fill="white"
        />
        <circle
          cx="117.667"
          cy="45.3338"
          r="1.66667"
          transform="rotate(-90 117.667 45.3338)"
          fill="white"
        />
        <circle
          cx="117.667"
          cy="1.66707"
          r="1.66667"
          transform="rotate(-90 117.667 1.66707)"
          fill="white"
        />
        <circle
          cx="74.6667"
          cy="45.3338"
          r="1.66667"
          transform="rotate(-90 74.6667 45.3338)"
          fill="white"
        />
        <circle
          cx="74.6667"
          cy="1.66707"
          r="1.66667"
          transform="rotate(-90 74.6667 1.66707)"
          fill="white"
        />
        <circle
          cx="103"
          cy="45.3338"
          r="1.66667"
          transform="rotate(-90 103 45.3338)"
          fill="white"
        />
        <circle
          cx="103"
          cy="1.66707"
          r="1.66667"
          transform="rotate(-90 103 1.66707)"
          fill="white"
        />
        <circle
          cx="132"
          cy="45.3338"
          r="1.66667"
          transform="rotate(-90 132 45.3338)"
          fill="white"
        />
        <circle
          cx="132"
          cy="1.66707"
          r="1.66667"
          transform="rotate(-90 132 1.66707)"
          fill="white"
        />
      </svg>
    </div>
  );
};
