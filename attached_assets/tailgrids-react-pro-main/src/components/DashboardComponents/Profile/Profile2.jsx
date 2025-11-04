import React from "react";

const Profile2 = () => {
  return (
    <section className="bg-gray-2 py-24 dark:bg-dark">
      <div className="mx-auto px-4 md:container">
        <div className="mx-auto w-full max-w-[470px] overflow-hidden rounded-lg border border-stroke bg-white dark:border-dark-3 dark:bg-dark-2">
          <div className="flex items-center justify-between border-b border-stroke p-5 dark:border-dark-3">
            <div className="items-center xs:flex">
              <div className="mb-3 mr-4 h-[50px] w-full max-w-[50px] overflow-hidden rounded-sm xs:mb-0">
                <img
                  src="https://cdn.tailgrids.com/2.0/image/dashboard/images/profiles/profile-02/profile.jpg"
                  alt="profile"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div>
                <h5 className="text-base font-medium text-dark dark:text-white">
                  Devid Strassmann
                </h5>
                <p className="text-sm text-body-color dark:text-dark-6">
                  UI/UX Designer
                </p>
              </div>
            </div>
            <div>
              <button className="inline-flex items-center justify-center rounded-sm bg-primary px-4 py-[10px] text-sm font-medium text-white hover:bg-primary/90">
                <span className="pr-[6px]">
                  <svg
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    className="fill-current"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.59606 2.26256C1.92425 1.93437 2.36937 1.75 2.8335 1.75H6.91683C7.239 1.75 7.50016 2.01117 7.50016 2.33333C7.50016 2.6555 7.239 2.91667 6.91683 2.91667H2.8335C2.67879 2.91667 2.53041 2.97812 2.42102 3.08752C2.31162 3.19692 2.25016 3.34529 2.25016 3.5V11.6667C2.25016 11.8214 2.31162 11.9697 2.42102 12.0791C2.53041 12.1885 2.67879 12.25 2.8335 12.25H11.0002C11.1549 12.25 11.3032 12.1885 11.4126 12.0791C11.522 11.9697 11.5835 11.8214 11.5835 11.6667V7.58333C11.5835 7.26117 11.8447 7 12.1668 7C12.489 7 12.7502 7.26117 12.7502 7.58333V11.6667C12.7502 12.1308 12.5658 12.5759 12.2376 12.9041C11.9094 13.2323 11.4643 13.4167 11.0002 13.4167H2.8335C2.36937 13.4167 1.92425 13.2323 1.59606 12.9041C1.26787 12.5759 1.0835 12.1308 1.0835 11.6667V3.5C1.0835 3.03587 1.26787 2.59075 1.59606 2.26256Z"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.1668 1.67839C11.9934 1.67839 11.827 1.7473 11.7043 1.86997L6.2769 7.29739L5.96856 8.53078L7.20195 8.22243L12.6294 2.79501C12.752 2.67234 12.8209 2.50597 12.8209 2.33249C12.8209 2.15901 12.752 1.99264 12.6294 1.86997C12.5067 1.7473 12.3403 1.67839 12.1668 1.67839ZM10.8794 1.04501C11.2208 0.703549 11.6839 0.511719 12.1668 0.511719C12.6497 0.511719 13.1129 0.703549 13.4543 1.04501C13.7958 1.38647 13.9876 1.84959 13.9876 2.33249C13.9876 2.81539 13.7958 3.27851 13.4543 3.61997L7.91265 9.16164C7.8379 9.23639 7.74422 9.28943 7.64165 9.31507L5.30832 9.89841C5.10954 9.9481 4.89925 9.88986 4.75436 9.74497C4.60947 9.60008 4.55123 9.3898 4.60093 9.19101L5.18426 6.85768C5.2099 6.75511 5.26294 6.66144 5.3377 6.58668L10.8794 1.04501Z"
                    />
                  </svg>
                </span>
                Edit
              </button>
            </div>
          </div>
          <div className="p-5">
            <h5 className="mb-2 text-base font-medium text-dark dark:text-white">
              About Me
            </h5>
            <p className="mb-6 text-sm text-body-color dark:text-dark-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque posuere fermentum urna, eu condimentum mauris
            </p>
            <div className="-mx-5 flex flex-wrap items-center">
              <div className="border-r border-stroke px-5 dark:border-dark-3">
                <h6 className="text-base font-semibold text-dark dark:text-white">
                  79
                </h6>
                <p className="text-sm text-body-color dark:text-dark-6">
                  Followers
                </p>
              </div>
              <div className="border-r border-stroke px-5 dark:border-dark-3">
                <h6 className="text-base font-semibold text-dark dark:text-white">
                  528
                </h6>
                <p className="text-sm text-body-color dark:text-dark-6">
                  Following
                </p>
              </div>
              <div className="px-5">
                <h6 className="text-base font-semibold text-dark dark:text-white">
                  38
                </h6>
                <p className="text-sm text-body-color dark:text-dark-6">
                  Lightning
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile2;
