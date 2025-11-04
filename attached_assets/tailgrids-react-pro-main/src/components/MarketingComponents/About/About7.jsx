import React from "react";

const About7 = () => {
  return (
    <>
      <section className="overflow-hidden py-20 bg-white dark:bg-dark lg:py-[120px]">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-end justify-between -mx-4">
            <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
              <div className="mb-10 lg:mb-0">
                <span className="block mb-2 text-lg font-semibold uppercase text-primary sm:text-xl">
                  ABOUT ME
                </span>
                <h2 className="mb-5 max-w-[400px] text-3xl font-bold leading-tight text-dark dark:text-white sm:text-4xl sm:leading-tight md:text-[40px]/[48px]">
                  Better design, better experience
                </h2>
                <p className="text-base text-body-color dark:text-dark-6 mb-9">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque dui ligula, malesuada vel convallis in, tincidunt ut
                  mi Vestibulum sit amet.
                </p>
                <div className="flex flex-wrap -mx-4">
                  <div className="w-full px-4 md:w-1/2 lg:w-full xl:w-7/12">
                    <div className="inline-flex items-center p-5 mb-8 bg-white rounded-lg dark:bg-dark-2 shadow-[0px_1px_4px_0px_rgba(0,0,0,0.12)] xl:mb-0">
                      <div className="bg-primary/5 dark:bg-white/5 text-primary mr-4 flex h-11 w-full max-w-[44px] items-center justify-center rounded-lg">
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19.25 3.30005H2.74998C1.58123 3.30005 0.584351 4.26255 0.584351 5.46567V16.6032C0.584351 17.7719 1.54685 18.7688 2.74998 18.7688H19.25C20.4187 18.7688 21.4156 17.8063 21.4156 16.6032V5.4313C21.4156 4.26255 20.4187 3.30005 19.25 3.30005ZM19.25 4.84692C19.2843 4.84692 19.3187 4.84692 19.3531 4.84692L11 10.2094L2.64685 4.84692C2.68123 4.84692 2.7156 4.84692 2.74998 4.84692H19.25ZM19.25 17.1532H2.74998C2.40623 17.1532 2.13123 16.8782 2.13123 16.5344V6.35942L10.175 11.5157C10.4156 11.6875 10.6906 11.7563 10.9656 11.7563C11.2406 11.7563 11.5156 11.6875 11.7562 11.5157L19.8 6.35942V16.5688C19.8687 16.9125 19.5937 17.1532 19.25 17.1532Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <div className="w-full">
                        <span className="text-sm font-medium text-body-color dark:text-dark-6">
                          Email address
                        </span>
                        <a
                          href="/#"
                          className="text-base font-semibold text-primary"
                        >
                          contact@tailgrids.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="w-full px-4 md:w-1/2 lg:w-full xl:w-5/12">
                    <div className="mb-8 xl:mb-0">
                      <h5 className="mb-3 text-base font-medium text-body-color dark:text-dark-6">
                        Follow Me On:
                      </h5>
                      <div className="flex items-center space-x-3">
                        <a
                          href="/#"
                          className="flex items-center justify-center border rounded-md border-stroke dark:border-dark-3 text-body-color dark:text-dark-6 hover:border-primary hover:bg-primary h-9 w-9 hover:text-white"
                        >
                          <svg
                            width="7"
                            height="14"
                            viewBox="0 0 7 14"
                            className="fill-current"
                          >
                            <path d="M6.50914 5.6H5.42429H5.03684V5.14839V3.74839V3.29677H5.42429H6.23793C6.45103 3.29677 6.62538 3.11613 6.62538 2.84516V0.451613C6.62538 0.203226 6.4704 0 6.23793 0H4.82374C3.29332 0 2.22783 1.26452 2.22783 3.13871V5.10323V5.55484H1.84038H0.523056C0.251842 5.55484 0 5.80323 0 6.16452V7.79032C0 8.10645 0.213097 8.4 0.523056 8.4H1.80164H2.18909V8.85161V13.3903C2.18909 13.7065 2.40218 14 2.71214 14H4.53315C4.64939 14 4.74625 13.9323 4.82374 13.8419C4.90123 13.7516 4.95935 13.5935 4.95935 13.4581V8.87419V8.42258H5.36617H6.23793C6.48977 8.42258 6.6835 8.24194 6.72224 7.97097V7.94839V7.92581L6.99346 6.36774C7.01283 6.20968 6.99345 6.02903 6.87722 5.84839C6.83848 5.73548 6.66412 5.62258 6.50914 5.6Z" />
                          </svg>
                        </a>
                        <a
                          href="/#"
                          className="flex items-center justify-center border rounded-md border-stroke dark:border-dark-3 text-body-color dark:text-dark-6 hover:border-primary hover:bg-primary h-9 w-9 hover:text-white"
                        >
                          <svg
                            width="19"
                            height="14"
                            viewBox="0 0 19 14"
                            className="fill-current"
                          >
                            <path d="M16.5892 2.41096L17.7333 1.09589C18.0645 0.739726 18.1548 0.465753 18.1849 0.328767C17.2817 0.821918 16.4387 0.986301 15.8968 0.986301H15.686L15.5656 0.876712C14.843 0.30137 13.9398 0 12.9763 0C10.8688 0 9.2129 1.58904 9.2129 3.42466C9.2129 3.53425 9.2129 3.69863 9.24301 3.80822L9.33333 4.35616L8.70107 4.32877C4.84731 4.21918 1.68602 1.20548 1.17419 0.684932C0.331183 2.05479 0.812903 3.36986 1.32473 4.19178L2.34839 5.72603L0.722581 4.90411C0.752688 6.05479 1.23441 6.9589 2.16774 7.61644L2.98064 8.16438L2.16774 8.46575C2.67957 9.86301 3.82366 10.4384 4.66667 10.6575L5.78064 10.9315L4.72688 11.589C3.04086 12.6849 0.933333 12.6027 0 12.5205C1.89677 13.726 4.15484 14 5.72043 14C6.89462 14 7.76774 13.8904 7.97849 13.8082C16.4086 12 16.8 5.15068 16.8 3.78082V3.58904L16.9806 3.47945C18.0043 2.60274 18.4258 2.13699 18.6667 1.86301C18.5763 1.89041 18.4559 1.94521 18.3355 1.9726L16.5892 2.41096Z" />
                          </svg>
                        </a>
                        <a
                          href="/#"
                          className="flex items-center justify-center border rounded-md border-stroke dark:border-dark-3 text-body-color dark:text-dark-6 hover:border-primary hover:bg-primary h-9 w-9 hover:text-white"
                        >
                          <svg
                            width="19"
                            height="14"
                            viewBox="0 0 19 14"
                            className="fill-current"
                          >
                            <path d="M18.2753 2.19355C18.0645 1.32258 17.4323 0.645161 16.6194 0.419355C15.1742 7.69092e-08 9.33333 0 9.33333 0C9.33333 0 3.49247 7.69092e-08 2.04731 0.419355C1.23441 0.645161 0.60215 1.32258 0.391398 2.19355C0 3.77419 0 7 0 7C0 7 0 10.2581 0.391398 11.8065C0.60215 12.6774 1.23441 13.3548 2.04731 13.5806C3.49247 14 9.33333 14 9.33333 14C9.33333 14 15.1742 14 16.6194 13.5806C17.4323 13.3548 18.0645 12.6774 18.2753 11.8065C18.6667 10.2581 18.6667 7 18.6667 7C18.6667 7 18.6667 3.77419 18.2753 2.19355ZM7.46667 10V4L12.314 7L7.46667 10Z" />
                          </svg>
                        </a>
                        <a
                          href="/#"
                          className="flex items-center justify-center border rounded-md border-stroke dark:border-dark-3 text-body-color dark:text-dark-6 hover:border-primary hover:bg-primary h-9 w-9 hover:text-white"
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            className="fill-current"
                          >
                            <path d="M13.0214 0H1.02084C0.453707 0 0 0.451613 0 1.01613V12.9839C0 13.5258 0.453707 14 1.02084 14H12.976C13.5432 14 13.9969 13.5484 13.9969 12.9839V0.993548C14.0422 0.451613 13.5885 0 13.0214 0ZM4.15142 11.9H2.08705V5.23871H4.15142V11.9ZM3.10789 4.3129C2.42733 4.3129 1.90557 3.77097 1.90557 3.11613C1.90557 2.46129 2.45002 1.91935 3.10789 1.91935C3.76577 1.91935 4.31022 2.46129 4.31022 3.11613C4.31022 3.77097 3.81114 4.3129 3.10789 4.3129ZM11.9779 11.9H9.9135V8.67097C9.9135 7.90323 9.89082 6.8871 8.82461 6.8871C7.73571 6.8871 7.57691 7.74516 7.57691 8.60322V11.9H5.51254V5.23871H7.53154V6.16452H7.55423C7.84914 5.62258 8.50701 5.08065 9.52785 5.08065C11.6376 5.08065 12.0232 6.43548 12.0232 8.2871V11.9H11.9779Z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="space-y-8">
                <div>
                  <h5 className="mb-5 text-lg font-semibold text-dark dark:text-white">
                    Design
                  </h5>
                  <div className="relative w-full h-2 rounded-2xl bg-stroke dark:bg-dark-3">
                    <div className="bg-primary absolute top-0 left-0 h-full w-[80%] rounded-2xl"></div>
                  </div>
                </div>
                <div>
                  <h5 className="mb-5 text-lg font-semibold text-dark dark:text-white">
                    Branding
                  </h5>
                  <div className="relative w-full h-2 rounded-2xl bg-stroke dark:bg-dark-3">
                    <div className="bg-primary absolute top-0 left-0 h-full w-[70%] rounded-2xl"></div>
                  </div>
                </div>
                <div>
                  <h5 className="mb-5 text-lg font-semibold text-dark dark:text-white">
                    Web Design
                  </h5>
                  <div className="relative w-full h-2 rounded-2xl bg-stroke dark:bg-dark-3">
                    <div className="bg-primary absolute top-0 left-0 h-full w-[92%] rounded-2xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About7;
