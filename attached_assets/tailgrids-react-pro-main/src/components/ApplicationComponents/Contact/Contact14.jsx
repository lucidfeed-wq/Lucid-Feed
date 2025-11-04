import React from "react";

function Contact14() {
  return (
    <section className="relative z-10 overflow-hidden bg-gray-2 py-20 dark:bg-dark lg:py-[120px]">
      <div className="container">
        <div className="flex flex-wrap gap-10 lg:flex-nowrap">
          <div className="w-full">
            <div className="shadow-2xs rounded-[20px] bg-white p-8 dark:bg-dark-2 sm:p-[52px] lg:p-8 xl:p-[52px]">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Get in Touch
              </span>
              <h3 className="mb-3 text-3xl font-bold text-dark dark:text-white">
                Let’s Chat, Contact with Us
              </h3>
              <p className="mb-10 text-lg text-body-color dark:text-dark-6">
                Have any questions or feedback? We’re here to help. Send us a
                message, We’ll get back to you within 24 hours.
              </p>

              <div className="-mx-4 flex flex-wrap">
                <div className="w-full px-4 sm:w-1/2">
                  <div className="mb-6">
                    <label
                      for=""
                      className="mb-2.5 block text-base font-medium text-dark dark:text-white"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      placeholder="First name"
                      className="w-full rounded-lg border border-stroke bg-transparent px-5 py-3 text-dark placeholder-dark-5 outline-hidden duration-200 focus:border-primary dark:border-dark-3 dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>
                <div className="w-full px-4 sm:w-1/2">
                  <div className="mb-6">
                    <label
                      for=""
                      className="mb-2.5 block text-base font-medium text-dark dark:text-white"
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      placeholder="Last name"
                      className="h-[50px] w-full rounded-lg border border-stroke bg-transparent px-5 py-3 text-dark placeholder-dark-5 outline-hidden duration-200 focus:border-primary dark:border-dark-3 dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>
                <div className="w-full px-4">
                  <div className="mb-6">
                    <label
                      for=""
                      className="mb-2.5 block text-base font-medium text-dark dark:text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="yourname@company.com"
                      className="h-[50px] w-full rounded-lg border border-stroke bg-transparent px-5 py-3 text-dark placeholder-dark-5 outline-hidden duration-200 focus:border-primary dark:border-dark-3 dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>
                <div className="w-full px-4">
                  <div className="mb-6">
                    <label
                      for=""
                      className="mb-2.5 block text-base font-medium text-dark dark:text-white"
                    >
                      Phone number
                    </label>
                    <input
                      type="text"
                      placeholder="+1 (555) 444-0000"
                      className="h-[50px] w-full rounded-lg border border-stroke bg-transparent px-5 py-3 text-dark placeholder-dark-5 outline-hidden duration-200 focus:border-primary dark:border-dark-3 dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>
                <div className="w-full px-4">
                  <div className="mb-6">
                    <label
                      for=""
                      className="mb-2.5 block text-base font-medium text-dark dark:text-white"
                    >
                      Message
                    </label>
                    <textarea
                      type="text"
                      rows="5"
                      placeholder="Type your message"
                      className="w-full rounded-lg border border-stroke bg-transparent p-5 text-dark placeholder-dark-5 outline-hidden duration-200 focus:border-primary dark:border-dark-3 dark:text-white dark:focus:border-primary"
                    ></textarea>
                  </div>
                </div>
                <div className="w-full px-4">
                  <button className="flex h-[52px] w-full items-center justify-center rounded-lg bg-primary px-5 py-3 text-base font-medium text-white duration-200 hover:bg-primary/90">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col gap-8 lg:max-w-[530px]">
            <div className="relative z-10 aspect-530/450 overflow-hidden rounded-[20px] bg-[#CCDDF6]">
              <img
                src="https://i.ibb.co/N6xQ60F/person.png"
                alt="person image"
                className="w-full"
              />
              <div className="absolute -bottom-[140px] -left-[140px] -z-10 aspect-square w-[290px] rounded-full border-2 border-primary/20 bg-transparent"></div>
              <div className="absolute -right-[40px] -top-[164px] -z-10 aspect-square w-[390px] rounded-full border-2 border-primary/20 bg-transparent"></div>
            </div>

            <div className="shadow-2xs space-y-5 rounded-[20px] bg-dark-4 p-6">
              <div className="flex w-full items-center gap-5 rounded-[20px] bg-dark-2 p-5">
                <div className="flex aspect-square w-full max-w-[60px] items-center justify-center rounded-full bg-white/10 text-white">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.5 4.2002H3.5C2.0125 4.2002 0.743752 5.42519 0.743752 6.95644V21.1314C0.743752 22.6189 1.96875 23.8877 3.5 23.8877H24.5C25.9875 23.8877 27.2563 22.6627 27.2563 21.1314V6.9127C27.2563 5.4252 25.9875 4.2002 24.5 4.2002ZM24.5 6.16895C24.5438 6.16895 24.5875 6.16895 24.6313 6.16895L14 12.9939L3.36875 6.16895C3.4125 6.16895 3.45625 6.16895 3.5 6.16895H24.5ZM24.5 21.8314H3.5C3.0625 21.8314 2.7125 21.4814 2.7125 21.0439V8.09395L12.95 14.6564C13.2563 14.8752 13.6063 14.9627 13.9563 14.9627C14.3063 14.9627 14.6563 14.8752 14.9625 14.6564L25.2 8.09395V21.0877C25.2875 21.5252 24.9375 21.8314 24.5 21.8314Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div>
                  <h6 className="mb-1 text-lg font-semibold text-white">
                    Email
                  </h6>
                  <p className="text-base text-gray-7">
                    techsupport@yourmail.com
                  </p>
                </div>
              </div>

              <div className="flex w-full items-center gap-5 rounded-[20px] bg-dark-2 p-5">
                <div className="flex aspect-square w-full max-w-[60px] items-center justify-center rounded-full bg-white/10 text-white">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26.3375 24.1496L25.55 16.2309C25.4188 14.7871 24.1938 13.6934 22.75 13.6934H5.25C3.80625 13.6934 2.625 14.7871 2.45 16.2309L1.6625 24.1496C1.575 24.9371 1.8375 25.7246 2.3625 26.2934C2.8875 26.8621 3.63125 27.2121 4.41875 27.2121H23.4938C24.2813 27.2121 25.025 26.8621 25.55 26.2934C26.1625 25.7246 26.3813 24.9371 26.3375 24.1496ZM24.15 24.9809C23.975 25.1559 23.7563 25.2434 23.5375 25.2434H4.4625C4.24375 25.2434 4.025 25.1559 3.85 24.9809C3.675 24.8059 3.63125 24.5871 3.63125 24.3246L4.41875 16.4059C4.4625 15.9684 4.8125 15.6621 5.25 15.6621H22.75C23.1875 15.6621 23.5375 15.9684 23.5813 16.4059L24.3688 24.3246C24.3688 24.5871 24.325 24.8059 24.15 24.9809Z"
                      fill="currentColor"
                    />
                    <path
                      d="M14 17.1934C12.2063 17.1934 10.7188 18.6809 10.7188 20.4746C10.7188 22.3121 12.2063 23.7559 14 23.7559C15.8375 23.7559 17.2812 22.2684 17.2812 20.4746C17.2812 18.6809 15.8375 17.1934 14 17.1934ZM14 21.7871C13.2562 21.7871 12.6875 21.1746 12.6875 20.4746C12.6875 19.7309 13.3 19.1621 14 19.1621C14.7438 19.1621 15.3125 19.7746 15.3125 20.4746C15.3125 21.2184 14.7438 21.7871 14 21.7871Z"
                      fill="currentColor"
                    />
                    <path
                      d="M2.66875 9.01211C2.75625 10.9371 4.41875 11.9434 5.55625 11.9434H8.61875H8.6625C10.0625 11.8559 11.4625 10.9371 11.4625 9.01211V8.18086C12.95 8.18086 15.7938 8.18086 17.2375 8.18086V9.01211C17.2375 10.9371 18.6375 11.8559 20.0375 11.9434H23.1438C24.325 11.9434 25.9438 10.9371 26.0313 9.01211C26.0313 8.88086 26.0313 7.30586 26.0313 7.21836C26.0313 7.17461 26.0313 7.13086 26.0313 7.08711C25.9 5.81836 25.4625 4.76836 24.675 3.93711L24.6313 3.89336C23.4938 2.84336 22.1813 2.27461 21.175 1.92461C18.2 0.787109 14.4813 0.787109 14.3063 0.787109C11.6813 0.830859 10.0188 1.04961 7.48125 1.92461C6.43125 2.31836 5.11875 2.88711 3.98125 3.89336L3.9375 3.93711C3.15 4.76836 2.7125 5.81836 2.58125 7.08711C2.58125 7.13086 2.58125 7.17461 2.58125 7.21836C2.625 7.30586 2.66875 8.83711 2.66875 9.01211ZM5.38125 5.33711C6.25625 4.54961 7.30625 4.11211 8.18125 3.76211C10.4563 2.93086 11.9 2.79961 14.35 2.71211C14.5688 2.71211 17.8938 2.75586 20.5188 3.76211C21.4375 4.11211 22.4875 4.54961 23.3188 5.33711C23.7563 5.81836 24.0188 6.47461 24.1063 7.21836C24.1063 7.34961 24.1063 8.79336 24.1063 8.92461C24.0625 9.84336 23.1875 9.97461 23.1875 9.97461H20.1688C19.7313 9.93086 19.25 9.75586 19.25 9.01211V7.21836C19.25 6.78086 18.9875 6.38711 18.55 6.29961C18.2438 6.12461 10.5 6.12461 10.1938 6.25586C9.8 6.38711 9.49375 6.78086 9.49375 7.17461V9.01211C9.49375 9.75586 9.0125 9.93086 8.575 9.97461H5.55625C5.55625 9.97461 4.68125 9.84336 4.6375 8.96836C4.6375 8.83711 4.6375 8.35586 4.6375 7.91836C4.6375 7.61211 4.6375 7.39336 4.6375 7.26211C4.68125 6.43086 4.94375 5.81836 5.38125 5.33711Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div>
                  <h6 className="mb-1 text-lg font-semibold text-white">
                    Phone
                  </h6>
                  <p className="text-base text-gray-7">(+005) 432 986 450</p>
                </div>
              </div>

              <div className="flex w-full items-center gap-5 rounded-[20px] bg-dark-2 p-5">
                <div className="flex aspect-square w-full max-w-[60px] items-center justify-center rounded-full bg-white/10 text-white">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.675 9.66797C17.675 7.48047 15.925 5.73047 13.7375 5.73047C11.55 5.73047 9.8 7.48047 9.8 9.66797C9.8 11.8555 11.55 13.6055 13.7375 13.6055C15.925 13.6055 17.675 11.8555 17.675 9.66797ZM11.7688 9.66797C11.7688 8.57422 12.6438 7.69922 13.7375 7.69922C14.8313 7.69922 15.7063 8.57422 15.7063 9.66797C15.7063 10.7617 14.8313 11.6367 13.7375 11.6367C12.6438 11.6367 11.7688 10.7617 11.7688 9.66797Z"
                      fill="currentColor"
                    />
                    <path
                      d="M27.2125 25.7684L25.4188 17.6746C25.3313 17.2809 25.025 16.9746 24.5875 16.9309L19.3813 16.1871C21.0438 13.8246 22.4 11.3309 22.4 9.40586C22.4 4.76836 18.5063 1.00586 13.7375 1.00586C8.96875 1.00586 5.075 4.76836 5.075 9.40586C5.075 11.3309 6.43125 13.8246 8.09375 16.1871L2.84375 16.9309C2.40625 16.9746 2.1 17.3246 2.0125 17.7621L0.787504 25.8559C0.743754 26.2059 0.875004 26.5559 1.1375 26.7746C1.4 26.9934 1.75 27.0809 2.1 26.9496L7.875 24.9371L13.6938 26.9059C13.9125 26.9934 14.1313 26.9934 14.3063 26.9059L20.125 24.9371L25.9438 26.9059C26.0313 26.9496 26.1625 26.9496 26.25 26.9496C26.4688 26.9496 26.7313 26.8621 26.9063 26.6871C27.1688 26.5121 27.3 26.1184 27.2125 25.7684ZM13.7375 2.97461C17.4563 2.97461 20.4313 5.86211 20.4313 9.40586C20.4313 11.8121 16.975 16.4059 13.7375 19.9496C10.5 16.4496 7.04375 11.8121 7.04375 9.40586C7.04375 5.86211 10.0188 2.97461 13.7375 2.97461ZM20.4313 22.9684C20.2125 22.8809 19.9938 22.8809 19.8188 22.9684L14 24.9371L8.18125 22.9684C7.9625 22.8809 7.74375 22.8809 7.56875 22.9684L2.975 24.5434L3.85 18.8121L9.40625 17.9809C10.4125 19.2496 11.4625 20.4309 12.2938 21.3496C12.6438 21.7434 13.1688 21.9621 13.6938 21.9621C14.2188 21.9621 14.7438 21.7434 15.0938 21.3496C15.925 20.4309 16.975 19.2496 17.9813 17.9809L23.6688 18.8121L24.9375 24.4996L20.4313 22.9684Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div>
                  <h6 className="mb-1 text-lg font-semibold text-white">
                    Address
                  </h6>
                  <p className="text-base text-gray-7">
                    230 Norman Street New York, H8R 1A1
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

export default Contact14;
