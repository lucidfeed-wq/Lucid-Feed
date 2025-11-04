import React from "react";

const Team3 = () => {
  return (
    <section className="pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Our Team
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                Meet Our Team
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          <TeamCard
            name="Jackie Sanders"
            profession="CONTENT WRITER"
            imageSrc="https://cdn.tailgrids.com/1.0/assets/images/team/team-03/image-01.jpg"
            details="Fermentum massa justo sit amet risus morbi leo."
            facebookLink="/#"
            twitterLink="/#"
            instagramLink="/#"
          />
          <TeamCard
            name="Andrieo Gloree"
            profession="WEB DEVELOPER"
            imageSrc="https://cdn.tailgrids.com/1.0/assets/images/team/team-03/image-02.jpg"
            details="Fermentum massa justo sit amet risus morbi leo."
            facebookLink="/#"
            twitterLink="/#"
            instagramLink="/#"
          />
          <TeamCard
            name="Adveen Desuza"
            profession="DIGITAL MARKETER"
            imageSrc="https://cdn.tailgrids.com/1.0/assets/images/team/team-03/image-03.jpg"
            details="Fermentum massa justo sit amet risus morbi leo."
            facebookLink="/#"
            twitterLink="/#"
            instagramLink="/#"
          />
        </div>
      </div>
    </section>
  );
};

export default Team3;

const TeamCard = ({
  imageSrc,
  name,
  profession,
  details,
  facebookLink,
  twitterLink,
  instagramLink,
}) => {
  return (
    <>
      <div className="w-full max-w-[270px] px-4">
        <div className="group relative mb-10 overflow-hidden rounded-lg border border-stroke bg-white p-8 dark:border-dark-3 dark:bg-dark-2">
          <div className="opacity-0 duration-300 group-hover:opacity-100">
            <span className="absolute right-0 top-0 z-20">
              <svg
                width="58"
                height="19"
                viewBox="0 0 58 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="29" cy="-10" r="29" fill="#13C296" />
              </svg>
            </span>
            <span className="absolute right-0 top-0 z-10">
              <svg
                width="35"
                height="62"
                viewBox="0 0 35 62"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse cx="46.5" cy="15" rx="46.5" ry="47" fill="#3056D3" />
              </svg>
            </span>
          </div>
          <div className="mb-6 h-20 w-20 overflow-hidden rounded-lg">
            <img src={imageSrc} alt="image" className="w-full" />
          </div>
          <div>
            <h4 className="text-lg font-medium text-dark dark:text-white">
              {name}
            </h4>
            <h6 className="mb-[10px] text-[10px] font-medium uppercase leading-loose text-body-color dark:text-dark-6">
              {profession}
            </h6>
            <p className="mb-8 max-w-[185px] text-xs text-body-color dark:text-dark-6">
              {details}
            </p>
            <div className="flex items-center gap-5">
              <a href={facebookLink} className="text-dark-8 hover:text-primary">
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  className="fill-current"
                >
                  <path d="M6.91729 5.35603H5.76441H5.35266V4.92409V3.58508V3.15314H5.76441H6.62907C6.85553 3.15314 7.04081 2.98037 7.04081 2.72121V0.431938C7.04081 0.194372 6.87611 0 6.62907 0H5.12621C3.49982 0 2.36752 1.20942 2.36752 3.00197V4.88089V5.31283H1.95578H0.555854C0.267633 5.31283 0 5.5504 0 5.89595V7.45092C0 7.75328 0.226459 8.03404 0.555854 8.03404H1.91461H2.32635V8.46598V12.8069C2.32635 13.1093 2.55281 13.3901 2.8822 13.3901H4.8174C4.94092 13.3901 5.04386 13.3253 5.12621 13.2389C5.20855 13.1525 5.27032 13.0013 5.27032 12.8717V8.48757V8.05563H5.70265H6.62907C6.8967 8.05563 7.10257 7.88286 7.14375 7.6237V7.6021V7.5805L7.43197 6.09032C7.45256 5.93914 7.43197 5.76637 7.30845 5.59359C7.26727 5.48561 7.08199 5.37762 6.91729 5.35603Z" />
                </svg>
              </a>
              <a href={twitterLink} className="text-dark-8 hover:text-primary">
                <svg
                  width="14"
                  height="11"
                  viewBox="0 0 14 11"
                  className="fill-current"
                >
                  <path d="M12.3388 2.28129L13.1595 1.30302C13.3971 1.03807 13.4619 0.834263 13.4835 0.73236C12.8356 1.09921 12.2309 1.2215 11.8421 1.2215H11.6909L11.6046 1.13997C11.0862 0.71198 10.4383 0.487793 9.74722 0.487793C8.23544 0.487793 7.04761 1.66987 7.04761 3.03537C7.04761 3.11689 7.04761 3.23918 7.06921 3.3207L7.134 3.72831L6.68046 3.70793C3.91606 3.62641 1.64839 1.38454 1.28124 0.997308C0.676531 2.01634 1.02208 2.99461 1.38923 3.60603L2.12352 4.74734L0.95729 4.13592C0.978887 4.99191 1.32444 5.66447 1.99394 6.1536L2.57706 6.56122L1.99394 6.7854C2.36109 7.82481 3.18177 8.25281 3.78648 8.41585L4.58557 8.61966L3.82967 9.10879C2.62025 9.92402 1.10847 9.86288 0.438965 9.80173C1.79957 10.6985 3.41933 10.9023 4.54237 10.9023C5.38465 10.9023 6.01096 10.8208 6.16214 10.7596C12.2093 9.4145 12.49 4.31935 12.49 3.30032V3.15765L12.6196 3.07613C13.3539 2.42395 13.6563 2.07748 13.829 1.87367C13.7642 1.89406 13.6779 1.93482 13.5915 1.9552L12.3388 2.28129Z" />
                </svg>
              </a>
              <a
                href={instagramLink}
                className="text-dark-8 hover:text-primary"
              >
                <svg
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  className="fill-current"
                >
                  <path d="M7.45148 9.81482C8.81564 9.81482 9.92151 8.70895 9.92151 7.34479C9.92151 5.98063 8.81564 4.87476 7.45148 4.87476C6.08732 4.87476 4.98145 5.98063 4.98145 7.34479C4.98145 8.70895 6.08732 9.81482 7.45148 9.81482Z" />
                  <path d="M10.1343 0.743896H4.72579C2.57516 0.743896 0.829102 2.48995 0.829102 4.64059V10.0065C0.829102 12.1997 2.57516 13.9458 4.72579 13.9458H10.0917C12.2849 13.9458 14.031 12.1997 14.031 10.0491V4.64059C14.031 2.48995 12.2849 0.743896 10.1343 0.743896ZM7.45134 10.5814C5.64141 10.5814 4.21475 9.1122 4.21475 7.34485C4.21475 5.5775 5.6627 4.10825 7.45134 4.10825C9.2187 4.10825 10.6666 5.5775 10.6666 7.34485C10.6666 9.1122 9.23999 10.5814 7.45134 10.5814ZM11.923 4.40636C11.71 4.64059 11.3906 4.76835 11.0286 4.76835C10.7092 4.76835 10.3898 4.64059 10.1343 4.40636C9.90009 4.17213 9.77232 3.87402 9.77232 3.51204C9.77232 3.15005 9.90009 2.87324 10.1343 2.61771C10.3685 2.36219 10.6666 2.23443 11.0286 2.23443C11.348 2.23443 11.6887 2.36219 11.923 2.59642C12.1359 2.87324 12.2849 3.19264 12.2849 3.53333C12.2637 3.87402 12.1359 4.17213 11.923 4.40636Z" />
                  <path d="M11.0496 3.00098C10.7728 3.00098 10.5386 3.2352 10.5386 3.51202C10.5386 3.78883 10.7728 4.02306 11.0496 4.02306C11.3264 4.02306 11.5607 3.78883 11.5607 3.51202C11.5607 3.2352 11.3477 3.00098 11.0496 3.00098Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
