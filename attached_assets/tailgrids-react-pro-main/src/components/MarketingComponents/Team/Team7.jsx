import React from "react";

const Team7 = () => {
  return (
    <section className="overflow-hidden bg-tg-bg pb-20 pt-20 dark:bg-dark lg:pb-[120px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Our Team Members
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                Our Creative Team
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
            imageSrc="https://cdn.tailgrids.com/1.0/assets/images/team/image-07/image-01.png"
            name="Melissa Tatcher"
            profession="Marketing Expert"
            facebookLink="/#"
            twitterLink="/#"
            instagramLink="/#"
          />
          <TeamCard
            imageSrc="https://cdn.tailgrids.com/1.0/assets/images/team/image-07/image-02.png"
            name="Stuard Ferrel"
            profession="Digital Marketer"
            facebookLink="/#"
            twitterLink="/#"
            instagramLink="/#"
          />
          <TeamCard
            imageSrc="https://cdn.tailgrids.com/1.0/assets/images/team/image-07/image-03.png"
            name="Eva Hudson"
            profession="Creative Designer"
            facebookLink="/#"
            twitterLink="/#"
            instagramLink="/#"
          />
          <TeamCard
            imageSrc="https://cdn.tailgrids.com/1.0/assets/images/team/image-07/image-04.png"
            name="Jackie Sanders"
            profession="SEO Expert"
            facebookLink="/#"
            twitterLink="/#"
            instagramLink="/#"
          />
        </div>
      </div>
    </section>
  );
};

export default Team7;

const TeamCard = ({
  imageSrc,
  name,
  profession,
  facebookLink,
  twitterLink,
  instagramLink,
}) => {
  return (
    <div className="w-full px-4 sm:w-1/2 lg:w-1/4 xl:w-1/4">
      <div className="group mb-8 rounded-[5px] bg-white px-5 pb-10 pt-12 shadow-1 dark:bg-dark-2 dark:shadow-box-dark">
        <div className="relative z-10 mx-auto mb-5 h-[120px] w-[120px]">
          <img
            src={imageSrc}
            alt="team"
            className="h-[120px] w-[120px] rounded-full"
          />
          <span className="absolute bottom-0 left-0 -z-10 h-10 w-10 rounded-full bg-secondary opacity-0 transition-all group-hover:opacity-100"></span>
          <span className="absolute right-0 top-0 -z-10 opacity-0 transition-all group-hover:opacity-100">
            <svg
              width="45"
              height="53"
              viewBox="0 0 45 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.54166 3.1009C3.39795 3.1009 4.09211 2.40674 4.09211 1.55045C4.09211 0.69416 3.39795 0 2.54166 0C1.68537 0 0.991211 0.69416 0.991211 1.55045C0.991211 2.40674 1.68537 3.1009 2.54166 3.1009Z"
                fill="#3056D3"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.5338 3.1009C13.3901 3.1009 14.0843 2.40674 14.0843 1.55045C14.0843 0.69416 13.3901 0 12.5338 0C11.6776 0 10.9834 0.69416 10.9834 1.55045C10.9834 2.40674 11.6776 3.1009 12.5338 3.1009Z"
                fill="#3056D3"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22.526 3.1009C23.3823 3.1009 24.0765 2.40674 24.0765 1.55045C24.0765 0.69416 23.3823 0 22.526 0C21.6697 0 20.9756 0.69416 20.9756 1.55045C20.9756 2.40674 21.6697 3.1009 22.526 3.1009Z"
                fill="#3056D3"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M32.5177 3.1009C33.374 3.1009 34.0682 2.40674 34.0682 1.55045C34.0682 0.69416 33.374 0 32.5177 0C31.6614 0 30.9673 0.69416 30.9673 1.55045C30.9673 2.40674 31.6614 3.1009 32.5177 3.1009Z"
                fill="#3056D3"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M42.5094 3.1009C43.3657 3.1009 44.0599 2.40674 44.0599 1.55045C44.0599 0.69416 43.3657 0 42.5094 0C41.6531 0 40.959 0.69416 40.959 1.55045C40.959 2.40674 41.6531 3.1009 42.5094 3.1009Z"
                fill="#3056D3"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.5338 13.0804C13.3901 13.0804 14.0843 12.3862 14.0843 11.5299C14.0843 10.6737 13.3901 9.97949 12.5338 9.97949C11.6776 9.97949 10.9834 10.6737 10.9834 11.5299C10.9834 12.3862 11.6776 13.0804 12.5338 13.0804Z"
                fill="#3056D3"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22.526 13.0804C23.3823 13.0804 24.0765 12.3862 24.0765 11.5299C24.0765 10.6737 23.3823 9.97949 22.526 9.97949C21.6697 9.97949 20.9756 10.6737 20.9756 11.5299C20.9756 12.3862 21.6697 13.0804 22.526 13.0804Z"
                fill="#3056D3"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M32.5177 13.0804C33.374 13.0804 34.0682 12.3862 34.0682 11.5299C34.0682 10.6737 33.374 9.97949 32.5177 9.97949C31.6614 9.97949 30.9673 10.6737 30.9673 11.5299C30.9673 12.3862 31.6614 13.0804 32.5177 13.0804Z"
                fill="#3056D3"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M42.5094 13.0804C43.3657 13.0804 44.0599 12.3862 44.0599 11.5299C44.0599 10.6737 43.3657 9.97949 42.5094 9.97949C41.6531 9.97949 40.959 10.6737 40.959 11.5299C40.959 12.3862 41.6531 13.0804 42.5094 13.0804Z"
                fill="#3056D3"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22.526 23.0604C23.3823 23.0604 24.0765 22.3662 24.0765 21.5099C24.0765 20.6536 23.3823 19.9595 22.526 19.9595C21.6697 19.9595 20.9756 20.6536 20.9756 21.5099C20.9756 22.3662 21.6697 23.0604 22.526 23.0604Z"
                fill="#3056D3"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M32.5177 23.0604C33.374 23.0604 34.0682 22.3662 34.0682 21.5099C34.0682 20.6536 33.374 19.9595 32.5177 19.9595C31.6614 19.9595 30.9673 20.6536 30.9673 21.5099C30.9673 22.3662 31.6614 23.0604 32.5177 23.0604Z"
                fill="#3056D3"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M42.5094 23.0604C43.3657 23.0604 44.0599 22.3662 44.0599 21.5099C44.0599 20.6536 43.3657 19.9595 42.5094 19.9595C41.6531 19.9595 40.959 20.6536 40.959 21.5099C40.959 22.3662 41.6531 23.0604 42.5094 23.0604Z"
                fill="#3056D3"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M32.5177 33.0404C33.374 33.0404 34.0682 32.3462 34.0682 31.4899C34.0682 30.6336 33.374 29.9395 32.5177 29.9395C31.6614 29.9395 30.9673 30.6336 30.9673 31.4899C30.9673 32.3462 31.6614 33.0404 32.5177 33.0404Z"
                fill="#3056D3"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M42.5094 33.0404C43.3657 33.0404 44.0599 32.3462 44.0599 31.4899C44.0599 30.6336 43.3657 29.9395 42.5094 29.9395C41.6531 29.9395 40.959 30.6336 40.959 31.4899C40.959 32.3462 41.6531 33.0404 42.5094 33.0404Z"
                fill="#3056D3"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M32.5177 43.0203C33.374 43.0203 34.0682 42.3262 34.0682 41.4699C34.0682 40.6136 33.374 39.9194 32.5177 39.9194C31.6614 39.9194 30.9673 40.6136 30.9673 41.4699C30.9673 42.3262 31.6614 43.0203 32.5177 43.0203Z"
                fill="#3056D3"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M42.5094 43.0203C43.3657 43.0203 44.0599 42.3262 44.0599 41.4699C44.0599 40.6136 43.3657 39.9194 42.5094 39.9194C41.6531 39.9194 40.959 40.6136 40.959 41.4699C40.959 42.3262 41.6531 43.0203 42.5094 43.0203Z"
                fill="#3056D3"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M42.5094 52.9998C43.3657 52.9998 44.0599 52.3057 44.0599 51.4494C44.0599 50.5931 43.3657 49.8989 42.5094 49.8989C41.6531 49.8989 40.959 50.5931 40.959 51.4494C40.959 52.3057 41.6531 52.9998 42.5094 52.9998Z"
                fill="#3056D3"
              />
            </svg>
          </span>
        </div>
        <div className="text-center">
          <h4 className="mb-1 text-lg font-semibold text-dark dark:text-white">
            {name}
          </h4>
          <p className="mb-5 text-sm text-body-color dark:text-dark-6">
            {profession}
          </p>
          <div className="flex items-center justify-center gap-5">
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
            <a href={instagramLink} className="text-dark-8 hover:text-primary">
              <svg
                width="15"
                height="14"
                viewBox="0 0 15 14"
                className="fill-current"
              >
                <path d="M7.45148 9.81506C8.81564 9.81506 9.92151 8.70919 9.92151 7.34503C9.92151 5.98087 8.81564 4.875 7.45148 4.875C6.08732 4.875 4.98145 5.98087 4.98145 7.34503C4.98145 8.70919 6.08732 9.81506 7.45148 9.81506Z" />
                <path d="M10.1343 0.744141H4.72579C2.57516 0.744141 0.829102 2.4902 0.829102 4.64083V10.0068C0.829102 12.2 2.57516 13.946 4.72579 13.946H10.0917C12.2849 13.946 14.031 12.2 14.031 10.0494V4.64083C14.031 2.4902 12.2849 0.744141 10.1343 0.744141ZM7.45134 10.5817C5.64141 10.5817 4.21475 9.11244 4.21475 7.34509C4.21475 5.57774 5.6627 4.1085 7.45134 4.1085C9.2187 4.1085 10.6666 5.57774 10.6666 7.34509C10.6666 9.11244 9.23999 10.5817 7.45134 10.5817ZM11.923 4.4066C11.71 4.64083 11.3906 4.76859 11.0286 4.76859C10.7092 4.76859 10.3898 4.64083 10.1343 4.4066C9.90009 4.17238 9.77232 3.87427 9.77232 3.51228C9.77232 3.15029 9.90009 2.87348 10.1343 2.61796C10.3685 2.36244 10.6666 2.23468 11.0286 2.23468C11.348 2.23468 11.6887 2.36244 11.923 2.59667C12.1359 2.87348 12.2849 3.19288 12.2849 3.53357C12.2637 3.87427 12.1359 4.17238 11.923 4.4066Z" />
                <path d="M11.0496 3.00098C10.7728 3.00098 10.5386 3.2352 10.5386 3.51202C10.5386 3.78883 10.7728 4.02306 11.0496 4.02306C11.3264 4.02306 11.5607 3.78883 11.5607 3.51202C11.5607 3.2352 11.3477 3.00098 11.0496 3.00098Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
