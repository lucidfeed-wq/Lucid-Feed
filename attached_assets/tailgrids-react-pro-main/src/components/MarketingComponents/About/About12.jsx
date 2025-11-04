import React from "react";

export default function About12() {
  return (
    <section className="bg-white py-20 lg:py-[120px] dark:bg-dark">
      <div className="container">
        <div className="mx-auto mb-16 w-full max-w-[970px] text-center">
          <p className="mb-9 text-xl text-body-color md:text-2xl dark:text-dark-6">
            “Lorem ipsum dolor sit amet, consectetur
            <span className="font-semibold italic text-dark dark:text-white">
              adipiscing elit fusce
            </span>
            et varius ex. Morbi ac tellus tortor orci varius natoque penatibus
            et magnis dis parturient montes, nascetur ridiculus mus. Curabitur
            <span className="font-semibold text-dark dark:text-white">
              tincidunt consectetur
            </span>
            arcu eu fermentum. Cras rhoncus dapibus quam penatibus et magnis dis
            parturient.
          </p>
          <a
            href="javascript:void(0)"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-stroke px-6 py-3 text-base font-medium text-dark duration-300 hover:border-dark hover:bg-dark hover:text-white dark:border-dark-3 dark:text-white dark:hover:bg-white dark:hover:text-dark"
          >
            Learn More
            <span>
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.1875 16.0312C5 16.0312 4.8125 15.9687 4.6875 15.8125C4.40625 15.5312 4.40625 15.0938 4.6875 14.8125L14.1562 5.34375H6.59375C6.21875 5.34375 5.90625 5.03125 5.90625 4.65625C5.90625 4.28125 6.21875 3.96875 6.59375 3.96875H15.8125C16.1875 3.96875 16.5 4.28125 16.5 4.65625V13.9375C16.5 14.3125 16.1875 14.625 15.8125 14.625C15.4375 14.625 15.125 14.3125 15.125 13.9375V6.40625L5.6875 15.8438C5.5625 15.9688 5.375 16.0312 5.1875 16.0312Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </a>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12">
            <div className="w-full overflow-hidden rounded-2xl max-lg:mb-8">
              <img
                src="https://i.ibb.co/s6Wnmvn/image-1.jpg"
                alt="about image"
                className="w-full object-cover object-center"
              />
            </div>
          </div>

          <div className="w-full px-4 lg:w-5/12">
            <div className="md:grid- grid gap-8">
              <div className="relative z-10 w-full overflow-hidden rounded-2xl bg-primary p-7">
                <p className="mb-14 text-base text-gray-3">
                  Lorem Ipsum is simply dummy text of the printing global tech
                  dapibus quam penatibus et.
                </p>
                <div className="flex items-end justify-between gap-2">
                  <p className="text-2xl font-bold text-white">
                    Read Our <br />
                    Blog
                  </p>
                  <span className="flex aspect-square w-full max-w-[40px] items-center justify-center rounded-full border border-white/50 text-white duration-200 hover:border-white hover:bg-white hover:text-dark">
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.71876 14.928C4.55001 14.928 4.38126 14.8718 4.26876 14.7312C4.01564 14.478 4.01564 14.0843 4.26876 13.8312L12.7906 5.30928H5.98439C5.64689 5.30928 5.36564 5.02803 5.36564 4.69053C5.36564 4.35303 5.64689 4.07178 5.98439 4.07178H14.2813C14.6188 4.07178 14.9 4.35303 14.9 4.69053V13.0437C14.9 13.3812 14.6188 13.6624 14.2813 13.6624C13.9438 13.6624 13.6625 13.3812 13.6625 13.0437V6.26553L5.16876 14.7593C5.05626 14.8718 4.88751 14.928 4.71876 14.928Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </div>

                <div className="absolute right-0 top-0 -z-10">
                  <img
                    src="./images/about/about-12/shape-1.svg"
                    alt="shape-1"
                  />
                </div>
              </div>
              <div className="relative z-10 w-full overflow-hidden rounded-2xl bg-dark p-7 dark:bg-dark-2">
                <p className="mb-14 text-base text-gray-3">
                  Lorem Ipsum is simply dummy text of the printing global tech
                  dapibus quam penatibus et.
                </p>
                <div className="flex items-end justify-between gap-2">
                  <p className="text-2xl font-bold text-white">
                    Explore Our <br />
                    Services
                  </p>
                  <span className="flex aspect-square w-full max-w-[40px] items-center justify-center rounded-full border border-white/50 text-white duration-200 hover:border-white hover:bg-white hover:text-dark">
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.71876 14.928C4.55001 14.928 4.38126 14.8718 4.26876 14.7312C4.01564 14.478 4.01564 14.0843 4.26876 13.8312L12.7906 5.30928H5.98439C5.64689 5.30928 5.36564 5.02803 5.36564 4.69053C5.36564 4.35303 5.64689 4.07178 5.98439 4.07178H14.2813C14.6188 4.07178 14.9 4.35303 14.9 4.69053V13.0437C14.9 13.3812 14.6188 13.6624 14.2813 13.6624C13.9438 13.6624 13.6625 13.3812 13.6625 13.0437V6.26553L5.16876 14.7593C5.05626 14.8718 4.88751 14.928 4.71876 14.928Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </div>

                <div className="absolute right-0 top-0 -z-10">
                  <img
                    src="./images/about/about-12/shape-2.svg"
                    alt="shape-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
