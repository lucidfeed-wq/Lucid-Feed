import React from "react";

const Team6 = () => {
  return (
    <section className="overflow-hidden bg-dark pb-20 pt-20 lg:pb-[120px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <span className="mb-2 block text-lg font-semibold text-white">
                Our Team Members
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-white sm:text-4xl md:text-[40px]">
                Our Creative Team
              </h2>
              <p className="text-base font-medium text-white/60">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          <TeamCard
            imageSrc="https://cdn.tailgrids.com/1.0/assets/images/team/team-06/image-01.jpg"
            name="Melissa Tatcher"
            profession="Marketing Expert"
            facebookLink="/#"
            twitterLink="/#"
            instagramLink="/#"
          />
          <TeamCard
            imageSrc="https://cdn.tailgrids.com/1.0/assets/images/team/team-06/image-02.jpg"
            name="Andrio Kemiliya"
            profession="UI/UX Designer"
            facebookLink="/#"
            twitterLink="/#"
            instagramLink="/#"
          />
          <TeamCard
            imageSrc="https://cdn.tailgrids.com/1.0/assets/images/team/team-06/image-03.jpg"
            name="Martin Ethariam"
            profession="Graphics Designer"
            facebookLink="/#"
            twitterLink="/#"
            instagramLink="/#"
          />
          <TeamCard
            imageSrc="https://cdn.tailgrids.com/1.0/assets/images/team/team-06/image-04.jpg"
            name="Naimur Rahman"
            profession="Product Designer"
            facebookLink="/#"
            twitterLink="/#"
            instagramLink="/#"
          />
        </div>
      </div>
    </section>
  );
};

export default Team6;

const TeamCard = ({
  imageSrc,
  name,
  profession,
  facebookLink,
  twitterLink,
  instagramLink,
}) => {
  return (
    <>
      <div className="w-full px-4 sm:w-1/2 lg:w-1/3 xl:w-1/4">
        <div className="group mb-8 bg-white dark:bg-dark-2">
          <div className="relative">
            <img src={imageSrc} alt="team" className="w-full" />
            <div className="absolute bottom-0 left-0 flex w-full items-center justify-center space-x-4 opacity-0 transition-all group-hover:bottom-6 group-hover:opacity-100">
              <a
                href={facebookLink}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4064AC]"
              >
                <svg
                  width="8"
                  height="16"
                  viewBox="0 0 8 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.43902 6.4H6.19918H5.75639V5.88387V4.28387V3.76774H6.19918H7.12906C7.3726 3.76774 7.57186 3.56129 7.57186 3.25161V0.516129C7.57186 0.232258 7.39474 0 7.12906 0H5.51285C3.76379 0 2.54609 1.44516 2.54609 3.5871V5.83226V6.34839H2.10329H0.597778C0.287819 6.34839 0 6.63226 0 7.04516V8.90323C0 9.26452 0.243539 9.6 0.597778 9.6H2.05902H2.50181V10.1161V15.3032C2.50181 15.6645 2.74535 16 3.09959 16H5.18075C5.31359 16 5.42429 15.9226 5.51285 15.8194C5.60141 15.7161 5.66783 15.5355 5.66783 15.3806V10.1419V9.62581H6.13276H7.12906C7.41688 9.62581 7.63828 9.41935 7.68256 9.10968V9.08387V9.05806L7.99252 7.27742C8.01466 7.09677 7.99252 6.89032 7.85968 6.68387C7.8154 6.55484 7.61614 6.42581 7.43902 6.4Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a
                href={twitterLink}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1C9CEA]"
              >
                <svg
                  width="16"
                  height="12"
                  viewBox="0 0 16 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.2194 2.06654L15.2 0.939335C15.4839 0.634051 15.5613 0.399217 15.5871 0.2818C14.8129 0.704501 14.0903 0.845401 13.6258 0.845401H13.4452L13.3419 0.751468C12.7226 0.258317 11.9484 0 11.1226 0C9.31613 0 7.89677 1.36204 7.89677 2.93542C7.89677 3.02935 7.89677 3.17025 7.92258 3.26419L8 3.73386L7.45806 3.71037C4.15484 3.61644 1.44516 1.03327 1.00645 0.587084C0.283871 1.76125 0.696774 2.88845 1.13548 3.59296L2.0129 4.90802L0.619355 4.20352C0.645161 5.18982 1.05806 5.96477 1.85806 6.52838L2.55484 6.99804L1.85806 7.25636C2.29677 8.45401 3.27742 8.94716 4 9.13503L4.95484 9.36986L4.05161 9.93346C2.60645 10.8728 0.8 10.8024 0 10.7319C1.62581 11.7652 3.56129 12 4.90323 12C5.90968 12 6.65806 11.9061 6.83871 11.8356C14.0645 10.2857 14.4 4.41487 14.4 3.2407V3.07632L14.5548 2.98239C15.4323 2.23092 15.7935 1.8317 16 1.59687C15.9226 1.62035 15.8194 1.66732 15.7161 1.6908L14.2194 2.06654Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a
                href={instagramLink}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#D9377B]"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.14959 9.79283C8.62236 9.79283 9.81627 8.59892 9.81627 7.12615C9.81627 5.65339 8.62236 4.45947 7.14959 4.45947C5.67682 4.45947 4.48291 5.65339 4.48291 7.12615C4.48291 8.59892 5.67682 9.79283 7.14959 9.79283Z"
                    fill="white"
                  />
                  <path
                    d="M10.046 0H4.20692C1.88507 0 0 1.88507 0 4.20692V10C0 12.3679 1.88507 14.2529 4.20692 14.2529H10C12.3679 14.2529 14.2529 12.3679 14.2529 10.046V4.20692C14.2529 1.88507 12.3679 0 10.046 0ZM7.14946 10.6207C5.19543 10.6207 3.65519 9.03453 3.65519 7.12647C3.65519 5.21842 5.21842 3.6322 7.14946 3.6322C9.05752 3.6322 10.6207 5.21842 10.6207 7.12647C10.6207 9.03453 9.0805 10.6207 7.14946 10.6207ZM11.9771 3.95404C11.7472 4.20692 11.4024 4.34485 11.0115 4.34485C10.6667 4.34485 10.3219 4.20692 10.046 3.95404C9.79315 3.70117 9.65522 3.37933 9.65522 2.98852C9.65522 2.59771 9.79315 2.29886 10.046 2.023C10.2989 1.74713 10.6207 1.6092 11.0115 1.6092C11.3564 1.6092 11.7242 1.74713 11.9771 2.00001C12.207 2.29886 12.3679 2.64369 12.3679 3.01151C12.3449 3.37933 12.207 3.70117 11.9771 3.95404Z"
                    fill="white"
                  />
                  <path
                    d="M11.0346 2.43701C10.7358 2.43701 10.4829 2.68989 10.4829 2.98874C10.4829 3.28759 10.7358 3.54047 11.0346 3.54047C11.3335 3.54047 11.5864 3.28759 11.5864 2.98874C11.5864 2.68989 11.3565 2.43701 11.0346 2.43701Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="px-4 py-6 text-center">
            <h3 className="mb-1 text-lg font-semibold text-dark dark:text-white">
              {name}
            </h3>
            <p className="text-sm text-body-color dark:text-dark-6">
              {profession}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
