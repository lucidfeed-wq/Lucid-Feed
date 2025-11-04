import React from "react";

export default function Services11() {
  return (
    <section className="bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="mb-10 lg:mb-[70px]">
          <span className="mb-2 block text-lg font-semibold uppercase text-primary">
            FEATURES
          </span>
          <h2 className="text-3xl font-bold leading-[1.2] text-white sm:text-5xl">
            Our Best Features
          </h2>
        </div>

        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div className="relative overflow-hidden rounded-xl max-lg:mb-12 xl:px-3">
              <img
                src="https://i.ibb.co/bv6mt6w/image-1.jpg"
                alt="service image"
                className="w-full object-cover object-center"
              />

              <div className="absolute inset-0 flex h-full w-full items-center justify-center">
                <button className="inline-flex items-center justify-center gap-3 rounded-full border-2 border-white bg-[#a1a1a1]/50 px-8 py-4 text-lg font-semibold text-white backdrop-blur-[6px] duration-200 hover:bg-white hover:text-primary">
                  <span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.63752 23.3624C3.37502 23.3624 3.07502 23.2874 2.85002 23.1374C2.32502 22.8374 2.02502 22.3499 2.02502 21.7499V2.2499C2.02502 1.6874 2.32502 1.1624 2.85002 0.8624C3.37502 0.5624 3.97502 0.5999 4.50002 0.8999L21.3 10.6874C21.7875 10.9874 22.05 11.4749 22.05 12.0374C22.05 12.5624 21.7875 13.0874 21.3 13.3499L4.46252 23.0999C4.20002 23.2499 3.90002 23.3624 3.63752 23.3624ZM3.67502 2.3999V21.5999L20.175 11.9999L3.67502 2.3999Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  Play Video
                </button>
              </div>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <div className="xl:px-4">
              <div className="mb-11 border-b border-stroke pb-11 dark:border-dark-3">
                <p className="text-semibold text-lg text-dark dark:text-white">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a distribution
                  of letters
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="mb-7 text-primary">
                    <svg
                      width="33"
                      height="33"
                      viewBox="0 0 33 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M27.25 19.9002L26.85 19.7002L27.35 19.4002C28.35 18.8002 28.9 17.7502 28.9 16.5502C28.9 15.4002 28.25 14.3502 27.25 13.7502L26.2 13.1502L27.35 12.4502C28.35 11.8502 28.9 10.8002 28.9 9.60019C28.9 8.4502 28.25 7.4002 27.25 6.85019L18.2 1.8002C17.2 1.2502 15.95 1.2502 15 1.8002L5.7 7.20019C4.7 7.80019 4.1 8.85019 4.1 10.0002C4.1 11.1502 4.7 12.2502 5.7 12.8002L6.8 13.4502L5.7 14.1002C4.7 14.7002 4.1 15.7502 4.1 16.9002C4.1 18.0502 4.7 19.1502 5.7 19.7002L6.15 19.9502L5.7 20.2002C4.7 20.8002 4.05 21.8502 4.05 23.0002C4.05 24.2002 4.65 25.2502 5.65 25.8002L14.85 31.1502C15.35 31.4502 15.9 31.6002 16.5 31.6002C17.1 31.6002 17.7 31.4502 18.2 31.1002L27.4 25.5002C28.4 24.9002 28.95 23.8502 28.95 22.6502C28.9 21.5002 28.3 20.4502 27.25 19.9002ZM6.3 10.0002C6.3 9.85019 6.35 9.40019 6.8 9.15019L16.1 3.7502C16.4 3.5502 16.8 3.5502 17.1 3.7502L26.2 8.8002C26.65 9.0502 26.7 9.50019 26.7 9.65019C26.7 9.80019 26.65 10.2502 26.2 10.5502L17.05 16.2002C16.75 16.4002 16.35 16.4002 16 16.2002L6.8 10.8502C6.35 10.6002 6.3 10.1502 6.3 10.0002ZM6.8 16.0502L9 14.7502L14.85 18.1502C15.35 18.4502 15.9 18.6002 16.5 18.6002C17.1 18.6002 17.7 18.4502 18.2 18.1002L24 14.5502L26.15 15.7502C26.6 16.0002 26.65 16.4502 26.65 16.6002C26.65 16.7502 26.6 17.2002 26.15 17.5002L17.05 23.1002C16.75 23.3002 16.35 23.3002 16 23.1002L6.8 17.7502C6.35 17.5002 6.3 17.0502 6.3 16.9002C6.3 16.7502 6.35 16.3002 6.8 16.0502ZM26.2 23.6002L17.05 29.2502C16.75 29.4502 16.35 29.4502 16 29.2502L6.8 23.9002C6.35 23.6502 6.3 23.2002 6.3 23.0502C6.3 22.9002 6.35 22.4502 6.8 22.2002L8.35 21.3002L14.9 25.1002C15.4 25.4002 15.95 25.5502 16.55 25.5502C17.15 25.5502 17.75 25.4002 18.25 25.0502L24.7 21.1002L26.2 21.9002C26.65 22.1502 26.7 22.6002 26.7 22.7502C26.7 22.9002 26.65 23.3502 26.2 23.6002Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-5 text-xl font-bold text-dark dark:text-white">
                    Awesome Design
                  </h3>
                  <p className="text-base leading-normal text-body-color dark:text-dark-6">
                    Lorem ipsum dolor sit amet sitim consectetur elit estibulum
                    tincidunt rutrum.
                  </p>
                </div>
                <div>
                  <div className="mb-7 text-primary">
                    <svg
                      width="33"
                      height="33"
                      viewBox="0 0 33 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.25 1.3999C10.65 1.3999 6.15 6.3499 6.15 12.4499V20.5499C6.15 26.6499 10.7 31.5999 16.25 31.5999C18.85 31.5999 21.3 30.5499 23.15 28.6499C25.25 26.5499 26.4 23.5499 26.35 20.4999V12.4499C26.35 6.3499 21.8 1.3999 16.25 1.3999ZM24.1 12.4499V12.9999H17.45V3.7499C21.25 4.3999 24.1 8.0499 24.1 12.4499ZM15.2 3.6999V12.9999H8.35V12.4499C8.35 7.9499 11.35 4.2499 15.2 3.6999ZM21.55 27.0999C20.1 28.5499 18.2 29.3499 16.25 29.3499C11.9 29.3499 8.4 25.3999 8.4 20.5499V15.2499H24.15V20.5499C24.15 23.0499 23.2 25.4499 21.55 27.0999Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-5 text-xl font-bold text-dark dark:text-white">
                    Easy To Customize
                  </h3>
                  <p className="text-base leading-normal text-body-color dark:text-dark-6">
                    Lorem ipsum dolor sit amet sitim consectetur elit estibulum
                    tincidunt rutrum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
