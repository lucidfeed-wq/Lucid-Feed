import React, { useEffect, useRef, useState } from "react";

const About6 = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  const trigger = useRef(null);
  const popup = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!popup.current) return;
      if (
        !popupOpen ||
        popup.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setPopupOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!popupOpen || keyCode !== 27) return;
      setPopupOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <>
      <section className="relative z-10 overflow-hidden bg-white dark:bg-dark py-20 lg:py-[110px]">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 lg:w-1/2">
              <div className="bg-primary relative z-10 mb-12 py-12 px-5 sm:px-12 lg:mb-0 2xl:p-[70px]">
                <h2 className="mb-6 text-xl font-bold text-white">
                  OUR VISION
                </h2>
                <p className="mb-6 text-base leading-relaxed text-white/70">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  eget feugiat nisi. Nam eu odio iaculis neque vestibu pharetra
                  eu eget enim. Vestibulum eu risus porttitor, commodo magna ut,
                  eleifend ex.
                </p>
                <p className="mb-8 text-base leading-relaxed text-white/70">
                  Curabitur ut rutrum tellus. Nullam ornare nunc non felis
                  viverra tempus.
                </p>
                <div className="items-end justify-between md:flex lg:block xl:flex">
                  <div className="">
                    <div className="flex items-center">
                      <span className="text-5xl font-extrabold text-white">
                        {" "}
                        05{" "}
                      </span>
                      <p className="pl-3 text-base">
                        <span className="block font-semibold text-white">
                          {" "}
                          We have{" "}
                        </span>
                        <span className="font-medium text-white/70">
                          Years of experience
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 md:text-right lg:text-left xl:text-right">
                    <a
                      href="#"
                      className="flex items-center text-base font-semibold text-white"
                    >
                      Meet the Team
                      <span className="pl-2">
                        <svg
                          width="19"
                          height="20"
                          viewBox="0 0 19 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.45 6.58601C10.1828 6.31882 9.76719 6.31882 9.5 6.58601C9.23281 6.8532 9.23281 7.26882 9.5 7.53601L11.2812 9.34695H6.14531C5.78906 9.34695 5.49219 9.64382 5.49219 10.0001C5.49219 10.3563 5.78906 10.6532 6.14531 10.6532H11.2812L9.5 12.4641C9.23281 12.7313 9.23281 13.1469 9.5 13.4141C9.61875 13.5329 9.79687 13.5923 9.975 13.5923C10.1531 13.5923 10.3312 13.5329 10.45 13.3844L13.3594 10.4454C13.6266 10.1782 13.6266 9.76257 13.3594 9.49539L10.45 6.58601Z"
                            fill="white"
                          />
                          <path
                            d="M9.5 1.03442C4.54218 1.03442 0.504684 5.04224 0.504684 10C0.504684 14.9579 4.54218 18.9657 9.5 18.9657C14.4578 18.9657 18.4953 14.9579 18.4953 10C18.4953 5.04224 14.4578 1.03442 9.5 1.03442ZM9.5 17.6594C5.28437 17.6594 1.84062 14.2157 1.84062 10C1.84062 5.78442 5.28437 2.34067 9.5 2.34067C13.7156 2.34067 17.1594 5.78442 17.1594 10C17.1594 14.2157 13.7156 17.6594 9.5 17.6594Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
                <span className="absolute top-4 right-4 -z-10">
                  <svg
                    width="33"
                    height="47"
                    viewBox="0 0 33 47"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="16.6667"
                      cy="30.9998"
                      r="1.66667"
                      transform="rotate(-90 16.6667 30.9998)"
                      fill="white"
                    />
                    <circle
                      cx="1.99992"
                      cy="30.9998"
                      r="1.66667"
                      transform="rotate(-90 1.99992 30.9998)"
                      fill="white"
                    />
                    <circle
                      cx="30.9999"
                      cy="30.9998"
                      r="1.66667"
                      transform="rotate(-90 30.9999 30.9998)"
                      fill="white"
                    />
                    <circle
                      cx="16.6667"
                      cy="16.3333"
                      r="1.66667"
                      transform="rotate(-90 16.6667 16.3333)"
                      fill="white"
                    />
                    <circle
                      cx="1.99992"
                      cy="16.3333"
                      r="1.66667"
                      transform="rotate(-90 1.99992 16.3333)"
                      fill="white"
                    />
                    <circle
                      cx="30.9999"
                      cy="16.3333"
                      r="1.66667"
                      transform="rotate(-90 30.9999 16.3333)"
                      fill="white"
                    />
                    <circle
                      cx="16.6667"
                      cy="45.3333"
                      r="1.66667"
                      transform="rotate(-90 16.6667 45.3333)"
                      fill="white"
                    />
                    <circle
                      cx="16.6667"
                      cy="1.66683"
                      r="1.66667"
                      transform="rotate(-90 16.6667 1.66683)"
                      fill="white"
                    />
                    <circle
                      cx="1.99992"
                      cy="45.3333"
                      r="1.66667"
                      transform="rotate(-90 1.99992 45.3333)"
                      fill="white"
                    />
                    <circle
                      cx="1.99992"
                      cy="1.66683"
                      r="1.66667"
                      transform="rotate(-90 1.99992 1.66683)"
                      fill="white"
                    />
                    <circle
                      cx="30.9999"
                      cy="45.3333"
                      r="1.66667"
                      transform="rotate(-90 30.9999 45.3333)"
                      fill="white"
                    />
                    <circle
                      cx="30.9999"
                      cy="1.66683"
                      r="1.66667"
                      transform="rotate(-90 30.9999 1.66683)"
                      fill="white"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="flex items-center justify-center w-full h-full">
                <img
                  src="https://i.ibb.co/3T9rRM3/video-thumbnail.jpg"
                  alt="image"
                  className="top-0 left-0 z-[-1] h-full w-full"
                />
                <button
                  ref={trigger}
                  onClick={() => setPopupOpen(!popupOpen)}
                  className="absolute z-40 flex h-20 w-20 items-center justify-center rounded-full bg-white md:h-[100px] md:w-[100px]"
                >
                  <span className="absolute top-0 right-0 z-[-1] h-full w-full animate-ping rounded-full bg-white/25 delay-300 duration-1000"></span>
                  <svg
                    width="23"
                    height="27"
                    viewBox="0 0 23 27"
                    className="fill-current text-primary"
                  >
                    <path d="M22.5 12.634C23.1667 13.0189 23.1667 13.9811 22.5 14.366L2.25 26.0574C1.58333 26.4423 0.750001 25.9611 0.750001 25.1913L0.750002 1.80866C0.750002 1.03886 1.58334 0.557731 2.25 0.942631L22.5 12.634Z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`fixed top-0 left-0 z-50 flex h-screen w-full items-center justify-center bg-black/80 ${
            popupOpen === true ? "block" : "hidden"
          }`}
        >
          <div
            ref={popup}
            onFocus={() => setPopupOpen(true)}
            onBlur={() => setPopupOpen(false)}
            className="mx-auto w-full max-w-[550px] bg-white"
          >
            <iframe
              className="h-[320px] w-full"
              src={
                popupOpen === true
                  ? `https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1&mute=1`
                  : ""
              }
            ></iframe>
          </div>
          <button
            onClick={() => setPopupOpen(false)}
            className="absolute top-0 right-0 flex items-center justify-center w-20 h-20 bg-black cursor-pointer text-body-color hover:bg-dark"
          >
            <svg viewBox="0 0 16 15" className="w-8 h-8 fill-current">
              <path d="M3.37258 1.27L8.23258 6.13L13.0726 1.29C13.1574 1.19972 13.2596 1.12749 13.373 1.07766C13.4864 1.02783 13.6087 1.00141 13.7326 1C13.9978 1 14.2522 1.10536 14.4397 1.29289C14.6272 1.48043 14.7326 1.73478 14.7326 2C14.7349 2.1226 14.7122 2.24439 14.6657 2.35788C14.6193 2.47138 14.5502 2.57419 14.4626 2.66L9.57258 7.5L14.4626 12.39C14.6274 12.5512 14.724 12.7696 14.7326 13C14.7326 13.2652 14.6272 13.5196 14.4397 13.7071C14.2522 13.8946 13.9978 14 13.7326 14C13.6051 14.0053 13.478 13.984 13.3592 13.9375C13.2404 13.8911 13.1326 13.8204 13.0426 13.73L8.23258 8.87L3.38258 13.72C3.29809 13.8073 3.19715 13.8769 3.08559 13.925C2.97402 13.9731 2.85405 13.9986 2.73258 14C2.46737 14 2.21301 13.8946 2.02548 13.7071C1.83794 13.5196 1.73258 13.2652 1.73258 13C1.73025 12.8774 1.753 12.7556 1.79943 12.6421C1.84586 12.5286 1.91499 12.4258 2.00258 12.34L6.89258 7.5L2.00258 2.61C1.83777 2.44876 1.74112 2.23041 1.73258 2C1.73258 1.73478 1.83794 1.48043 2.02548 1.29289C2.21301 1.10536 2.46737 1 2.73258 1C2.97258 1.003 3.20258 1.1 3.37258 1.27Z" />
            </svg>
          </button>
        </div>
      </section>
    </>
  );
};

export default About6;
