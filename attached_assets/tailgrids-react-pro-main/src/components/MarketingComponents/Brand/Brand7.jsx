import React from "react";

const Brand7 = () => {
  return (
    <section className="relative z-10 bg-primary py-20 lg:py-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
            <div>
              <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-3xl xl:text-[33px] 2xl:text-4xl">
                Tailwind CSS UI Components for Modern Web Apps
              </h2>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2 xl:w-7/12">
            <div className="mt-12 flex flex-wrap items-center justify-center lg:mt-0 xl:justify-end">
              <SingleImage
                href="#"
                Alt="Brand Image"
                imgSrc="https://cdn.tailgrids.com/2.0/image/assets/images/brands/graygrids-white.svg"
              />
              <SingleImage
                href="#"
                Alt="Brand Image"
                imgSrc="https://cdn.tailgrids.com/2.0/image/assets/images/brands/lineIcons-white.svg"
              />
              <SingleImage
                href="#"
                Alt="Brand Image"
                imgSrc="https://cdn.tailgrids.com/2.0/image/assets/images/brands/ayroui-white.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <span className="absolute left-4 top-4 z-[-1]">
          <DotShape />
        </span>
        <span className="absolute bottom-4 right-4 z-[-1]">
          <DotShape />
        </span>
      </div>
    </section>
  );
};

export default Brand7;

const SingleImage = ({ href, imgSrc, Alt }) => {
  return (
    <a
      href={href}
      className="mx-4 flex min-w-[150px] max-w-[200px] items-center justify-center py-5 lg:min-w-min lg:max-w-[110px] xl:max-w-[200px]"
    >
      <img src={imgSrc} alt={Alt} className="h-10 w-full" />
    </a>
  );
};

const DotShape = () => {
  return (
    <>
      <svg
        width="50"
        height="49"
        viewBox="0 0 50 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="47.7119"
          cy="46.3164"
          r="1.74121"
          transform="rotate(180 47.7119 46.3164)"
          fill="white"
        />
        <circle
          cx="47.7119"
          cy="16.7161"
          r="1.74121"
          transform="rotate(180 47.7119 16.7161)"
          fill="white"
        />
        <circle
          cx="47.7119"
          cy="31.3423"
          r="1.74121"
          transform="rotate(180 47.7119 31.3423)"
          fill="white"
        />
        <circle
          cx="47.7119"
          cy="1.74121"
          r="1.74121"
          transform="rotate(180 47.7119 1.74121)"
          fill="white"
        />
        <circle
          cx="32.3916"
          cy="46.3162"
          r="1.74121"
          transform="rotate(180 32.3916 46.3162)"
          fill="white"
        />
        <circle
          cx="32.3916"
          cy="16.7161"
          r="1.74121"
          transform="rotate(180 32.3916 16.7161)"
          fill="white"
        />
        <circle
          cx="32.3916"
          cy="31.342"
          r="1.74121"
          transform="rotate(180 32.3916 31.342)"
          fill="white"
        />
        <circle
          cx="32.3916"
          cy="1.74145"
          r="1.74121"
          transform="rotate(180 32.3916 1.74145)"
          fill="white"
        />
        <circle
          cx="17.0674"
          cy="46.3162"
          r="1.74121"
          transform="rotate(180 17.0674 46.3162)"
          fill="white"
        />
        <circle
          cx="17.0674"
          cy="16.7161"
          r="1.74121"
          transform="rotate(180 17.0674 16.7161)"
          fill="white"
        />
        <circle
          cx="17.0674"
          cy="31.342"
          r="1.74121"
          transform="rotate(180 17.0674 31.342)"
          fill="white"
        />
        <circle
          cx="17.0674"
          cy="1.74145"
          r="1.74121"
          transform="rotate(180 17.0674 1.74145)"
          fill="white"
        />
        <circle
          cx="1.74316"
          cy="46.3162"
          r="1.74121"
          transform="rotate(180 1.74316 46.3162)"
          fill="white"
        />
        <circle
          cx="1.74316"
          cy="16.7161"
          r="1.74121"
          transform="rotate(180 1.74316 16.7161)"
          fill="white"
        />
        <circle
          cx="1.74316"
          cy="31.342"
          r="1.74121"
          transform="rotate(180 1.74316 31.342)"
          fill="white"
        />
        <circle
          cx="1.74316"
          cy="1.74145"
          r="1.74121"
          transform="rotate(180 1.74316 1.74145)"
          fill="white"
        />
      </svg>
    </>
  );
};
