import { useState } from "react";
import ShapeTwo from "./Shapes/ShapeTwo.jsx";
import videoImage from "../assets/images/videos/image-01.jpg";
import { Link } from "react-router-dom";
import ClickOutside from "./ClickOutside.jsx";
import ShapeFour from "./Shapes/ShapeFour.jsx";
import ShapeThree from "./Shapes/ShapeThree.jsx";

const Video = () => {
  const [videoOpen, setVideoOpen] = useState(false);
  return (
    <>
      <section
        className={`bg-primary relative overflow-hidden ${videoOpen && "z-50"}`}
      >
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 lg:w-1/2">
              <div className="max-w-[490px] py-[100px] lg:py-[140px]">
                <span className="block mb-3 text-base font-medium text-white">
                  {" "}
                  Watch Our Intro Video{" "}
                </span>
                <h2 className="mb-5 text-3xl leading-[1.2]! font-bold text-white sm:text-4xl md:text-[40px]">
                  Innovative solutions to boost your projects
                </h2>
                <p className="text-base text-white mb-9">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  at quam fringilla, scelerisque nisl in, accumsan diam. Quisque
                  sollicitudin risus eu tortor euismod imperdiet.
                </p>
                <Link
                  to="#"
                  className="inline-block py-3 text-base font-medium text-white border border-white rounded-full hover:text-primary px-9 hover:bg-white"
                >
                  Know More
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="top-0 right-0 z-10 w-full h-full lg:absolute lg:w-1/2">
            <div className="flex items-center justify-center w-full h-full">
              <img
                src={videoImage}
                alt="image"
                className="top-0 left-0 object-cover object-center w-full h-full lg:absolute"
              />
              <Link
                to="#"
                onClick={() => setVideoOpen(!videoOpen)}
                className="bg-primary absolute z-40 flex h-20 w-20 items-center justify-center rounded-full md:h-[100px] md:w-[100px]"
              >
                <span className="bg-primary/20 absolute top-0 right-0 z-[-1] h-full w-full animate-ping rounded-full delay-300 duration-1000"></span>
                <svg
                  width="23"
                  height="27"
                  viewBox="0 0 23 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1"
                >
                  <path
                    d="M22.5 12.634C23.1667 13.0189 23.1667 13.9811 22.5 14.366L2.25 26.0574C1.58333 26.4423 0.750001 25.9611 0.750001 25.1913L0.750002 1.80866C0.750002 1.03886 1.58334 0.557731 2.25 0.942631L22.5 12.634Z"
                    fill="white"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <span className="absolute top-0 left-0 z-[1]">
            <ShapeTwo />
          </span>
          <span className="absolute top-0 left-0 z-[1]">
            <ShapeThree />
          </span>
          <span className="absolute top-3 right-3 z-[1] lg:right-1/2 lg:mr-3">
            <ShapeFour />
          </span>
        </div>

        {videoOpen && (
          <div className="fixed top-0 left-0 w-full h-full select-none z-10000 touch-pinch-zoom bg-black/70">
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute top-0 right-0 flex items-center justify-center w-20 h-20 cursor-pointer text-body-color z-999 hover:bg-black"
            >
              <svg viewBox="0 0 16 15" className="w-8 h-8 fill-current">
                <path d="M3.37258 1.27L8.23258 6.13L13.0726 1.29C13.1574 1.19972 13.2596 1.12749 13.373 1.07766C13.4864 1.02783 13.6087 1.00141 13.7326 1C13.9978 1 14.2522 1.10536 14.4397 1.29289C14.6272 1.48043 14.7326 1.73478 14.7326 2C14.7349 2.1226 14.7122 2.24439 14.6657 2.35788C14.6193 2.47138 14.5502 2.57419 14.4626 2.66L9.57258 7.5L14.4626 12.39C14.6274 12.5512 14.724 12.7696 14.7326 13C14.7326 13.2652 14.6272 13.5196 14.4397 13.7071C14.2522 13.8946 13.9978 14 13.7326 14C13.6051 14.0053 13.478 13.984 13.3592 13.9375C13.2404 13.8911 13.1326 13.8204 13.0426 13.73L8.23258 8.87L3.38258 13.72C3.29809 13.8073 3.19715 13.8769 3.08559 13.925C2.97402 13.9731 2.85405 13.9986 2.73258 14C2.46737 14 2.21301 13.8946 2.02548 13.7071C1.83794 13.5196 1.73258 13.2652 1.73258 13C1.73025 12.8774 1.753 12.7556 1.79943 12.6421C1.84586 12.5286 1.91499 12.4258 2.00258 12.34L6.89258 7.5L2.00258 2.61C1.83777 2.44876 1.74112 2.23041 1.73258 2C1.73258 1.73478 1.83794 1.48043 2.02548 1.29289C2.21301 1.10536 2.46737 1 2.73258 1C2.97258 1.003 3.20258 1.1 3.37258 1.27Z" />
              </svg>
            </button>

            <div className="flex items-center justify-center w-full h-full">
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

export default Video;
