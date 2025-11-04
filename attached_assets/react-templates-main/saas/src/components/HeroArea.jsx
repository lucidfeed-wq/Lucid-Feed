import heroImage from "../assets/images/hero/hero-image-05.jpg";
import ShapeFour from "./Shapes/ShapeFour.jsx";
import { Link } from "react-router-dom";
import { useState } from "react";
import ClickOutside from "./ClickOutside.jsx";

const HeroArea = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      <section className="bg-primary relative pt-[120px] md:pt-[130px] lg:pt-[160px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4">
              <div className="hero-content text-center">
                <h1 className="mx-auto mb-5 max-w-[530px] text-4xl leading-snug font-bold text-white sm:text-[42px]">
                  Ready for SaaS Websites Crafted by TailGrids
                </h1>

                <p className="mx-auto mb-8 max-w-[480px] text-base text-[#e4e4e4]">
                  Example Template for SaaS, Software, and App Landing Page.
                  Crafted with TailGrids UI Components by TailGrids Team
                </p>

                <ul className="flex flex-wrap items-center justify-center">
                  <li className="mx-2 mb-3 sm:mx-4">
                    <Link
                      to="/#"
                      className="text-dark inline-flex items-center justify-center rounded-lg bg-white px-5 py-4 text-center text-base font-normal hover:bg-white/90 sm:px-10"
                    >
                      Get Started Now
                    </Link>
                  </li>
                  <li className="mx-2 mb-3 sm:mx-4">
                    <Link
                      to="/#"
                      onClick={() => setVideoOpen(!videoOpen)}
                      className="flex items-center text-base font-medium text-white"
                    >
                      <span className="mr-4 flex h-14 w-14 items-center justify-center rounded-full bg-white">
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
                      Play Intro Video
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4">
              <div className="relative z-10 mx-auto max-w-[845px]">
                <div className="mt-16">
                  <img
                    src={heroImage}
                    alt="hero"
                    className="mx-auto max-w-full rounded-t-xl rounded-tr-xl"
                  />
                </div>

                <span className="absolute bottom-0 -left-9 z-[-1]">
                  <ShapeFour />
                </span>
                <span className="absolute -top-6 -right-6 z-[-1]">
                  <ShapeFour />
                </span>
              </div>
            </div>
          </div>
        </div>

        {videoOpen && (
          <div className="fixed top-0 left-0 z-1000 h-full w-full touch-pinch-zoom bg-black/70 select-none">
            <button
              onClick={() => setVideoOpen(false)}
              className="text-body-color absolute top-0 right-0 z-999 flex h-20 w-20 cursor-pointer items-center justify-center hover:bg-black"
            >
              <svg viewBox="0 0 16 15" className="h-8 w-8 fill-current">
                <path d="M3.37258 1.27L8.23258 6.13L13.0726 1.29C13.1574 1.19972 13.2596 1.12749 13.373 1.07766C13.4864 1.02783 13.6087 1.00141 13.7326 1C13.9978 1 14.2522 1.10536 14.4397 1.29289C14.6272 1.48043 14.7326 1.73478 14.7326 2C14.7349 2.1226 14.7122 2.24439 14.6657 2.35788C14.6193 2.47138 14.5502 2.57419 14.4626 2.66L9.57258 7.5L14.4626 12.39C14.6274 12.5512 14.724 12.7696 14.7326 13C14.7326 13.2652 14.6272 13.5196 14.4397 13.7071C14.2522 13.8946 13.9978 14 13.7326 14C13.6051 14.0053 13.478 13.984 13.3592 13.9375C13.2404 13.8911 13.1326 13.8204 13.0426 13.73L8.23258 8.87L3.38258 13.72C3.29809 13.8073 3.19715 13.8769 3.08559 13.925C2.97402 13.9731 2.85405 13.9986 2.73258 14C2.46737 14 2.21301 13.8946 2.02548 13.7071C1.83794 13.5196 1.73258 13.2652 1.73258 13C1.73025 12.8774 1.753 12.7556 1.79943 12.6421C1.84586 12.5286 1.91499 12.4258 2.00258 12.34L6.89258 7.5L2.00258 2.61C1.83777 2.44876 1.74112 2.23041 1.73258 2C1.73258 1.73478 1.83794 1.48043 2.02548 1.29289C2.21301 1.10536 2.46737 1 2.73258 1C2.97258 1.003 3.20258 1.1 3.37258 1.27Z" />
              </svg>
            </button>

            <div className="flex h-full w-full items-center justify-center">
              <div className="mx-auto w-full max-w-[550px] bg-white">
                <ClickOutside onClick={() => setVideoOpen(false)}>
                  <iframe
                    className="relative z-20 h-[320px] w-full"
                    src="https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1&mute=1"
                  ></iframe>
                </ClickOutside>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default HeroArea;
