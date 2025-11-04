import React from "react";

const Team4 = () => {
  return (
    <section className="pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-[70px]">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Our Team
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
            imageSrc="https://cdn.tailgrids.com/1.0/assets/images/team/team-04/image-01.jpg"
            name="Jackie Sanders"
            profession="CONTENT WRITER"
            details="There are many variations of passages of Lorem Ipsum available, but the majority."
            facebookLink="/#"
            twitterLink="/#"
            instagramLink="/#"
          />
          <TeamCard
            imageSrc="https://cdn.tailgrids.com/1.0/assets/images/team/team-04/image-02.jpg"
            name="Adveen Desuza"
            profession="UI DESIGNER"
            facebookLink="/#"
            twitterLink="/#"
            instagramLink="/#"
          />
          <TeamCard
            imageSrc="https://cdn.tailgrids.com/1.0/assets/images/team/team-04/image-03.jpg"
            name="Andrieo Gloree"
            profession="App Developer"
            facebookLink="/#"
            twitterLink="/#"
            instagramLink="/#"
          />
          <TeamCard
            imageSrc="https://cdn.tailgrids.com/1.0/assets/images/team/team-04/image-04.jpg"
            name="Mario Donale"
            profession="DIGITAL MARKETER"
            facebookLink="/#"
            twitterLink="/#"
            instagramLink="/#"
          />
        </div>
      </div>
    </section>
  );
};

export default Team4;

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
    <div className="w-full px-4 lg:w-1/2">
      <div className="mx-auto mb-10 max-w-[320px] items-stretch sm:flex sm:max-w-full">
        <div className="mr-9 w-full overflow-hidden rounded-sm sm:max-w-[200px]">
          <img src={imageSrc} alt="image" className="w-full" />
        </div>
        <div className="relative flex w-full items-center">
          <div className="py-4">
            <h4 className="mb-1 text-lg font-semibold text-dark dark:text-white">
              {name}
            </h4>
            <h6 className="mb-[14px] text-xs font-medium uppercase leading-[1.66] text-body-color dark:text-dark-6">
              {profession}
            </h6>
            <p className="mb-5 max-w-[290px] text-sm text-body-color dark:text-dark-6">
              {details}
            </p>
            <div className="flex items-center gap-[14px]">
              <a href={facebookLink}>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
                    fill="#4064AC"
                  />
                  <path
                    d="M19.439 14.4H18.1992H17.7564V13.8839V12.2839V11.7677H18.1992H19.1291C19.3726 11.7677 19.5719 11.5613 19.5719 11.2516V8.51613C19.5719 8.23226 19.3947 8 19.1291 8H17.5128C15.7638 8 14.5461 9.44516 14.5461 11.5871V13.8323V14.3484H14.1033H12.5978C12.2878 14.3484 12 14.6323 12 15.0452V16.9032C12 17.2645 12.2435 17.6 12.5978 17.6H14.059H14.5018V18.1161V23.3032C14.5018 23.6645 14.7454 24 15.0996 24H17.1807C17.3136 24 17.4243 23.9226 17.5128 23.8194C17.6014 23.7161 17.6678 23.5355 17.6678 23.3806V18.1419V17.6258H18.1328H19.1291C19.4169 17.6258 19.6383 17.4194 19.6826 17.1097V17.0839V17.0581L19.9925 15.2774C20.0147 15.0968 19.9925 14.8903 19.8597 14.6839C19.8154 14.5548 19.6161 14.4258 19.439 14.4Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a href={twitterLink}>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
                    fill="#1C9CEA"
                  />
                  <path
                    d="M22.2194 12.0665L23.2 10.9393C23.4839 10.6341 23.5613 10.3992 23.5871 10.2818C22.8129 10.7045 22.0903 10.8454 21.6258 10.8454H21.4452L21.3419 10.7515C20.7226 10.2583 19.9484 10 19.1226 10C17.3161 10 15.8968 11.362 15.8968 12.9354C15.8968 13.0294 15.8968 13.1703 15.9226 13.2642L16 13.7339L15.4581 13.7104C12.1548 13.6164 9.44516 11.0333 9.00645 10.5871C8.28387 11.7613 8.69677 12.8885 9.13548 13.593L10.0129 14.908L8.61935 14.2035C8.64516 15.1898 9.05806 15.9648 9.85806 16.5284L10.5548 16.998L9.85806 17.2564C10.2968 18.454 11.2774 18.9472 12 19.135L12.9548 19.3699L12.0516 19.9335C10.6065 20.8728 8.8 20.8024 8 20.7319C9.62581 21.7652 11.5613 22 12.9032 22C13.9097 22 14.6581 21.9061 14.8387 21.8356C22.0645 20.2857 22.4 14.4149 22.4 13.2407V13.0763L22.5548 12.9824C23.4323 12.2309 23.7935 11.8317 24 11.5969C23.9226 11.6204 23.8194 11.6673 23.7161 11.6908L22.2194 12.0665Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a href={instagramLink}>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.8862 31.7723C24.6598 31.7723 31.7723 24.6598 31.7723 15.8862C31.7723 7.11248 24.6598 0 15.8862 0C7.11248 0 0 7.11248 0 15.8862C0 24.6598 7.11248 31.7723 15.8862 31.7723Z"
                    fill="#D9377B"
                  />
                  <path
                    d="M16.1496 18.7931C17.6224 18.7931 18.8163 17.5992 18.8163 16.1264C18.8163 14.6536 17.6224 13.4597 16.1496 13.4597C14.6768 13.4597 13.4829 14.6536 13.4829 16.1264C13.4829 17.5992 14.6768 18.7931 16.1496 18.7931Z"
                    fill="white"
                  />
                  <path
                    d="M19.046 9H13.2069C10.8851 9 9 10.8851 9 13.2069V19C9 21.3679 10.8851 23.2529 13.2069 23.2529H19C21.3679 23.2529 23.2529 21.3679 23.2529 19.046V13.2069C23.2529 10.8851 21.3679 9 19.046 9ZM16.1495 19.6207C14.1954 19.6207 12.6552 18.0345 12.6552 16.1265C12.6552 14.2184 14.2184 12.6322 16.1495 12.6322C18.0575 12.6322 19.6207 14.2184 19.6207 16.1265C19.6207 18.0345 18.0805 19.6207 16.1495 19.6207ZM20.9771 12.954C20.7472 13.2069 20.4024 13.3448 20.0115 13.3448C19.6667 13.3448 19.3219 13.2069 19.046 12.954C18.7932 12.7012 18.6552 12.3793 18.6552 11.9885C18.6552 11.5977 18.7932 11.2989 19.046 11.023C19.2989 10.7471 19.6207 10.6092 20.0115 10.6092C20.3564 10.6092 20.7242 10.7471 20.9771 11C21.207 11.2989 21.3679 11.6437 21.3679 12.0115C21.3449 12.3793 21.207 12.7012 20.9771 12.954Z"
                    fill="white"
                  />
                  <path
                    d="M20.0346 11.4368C19.7358 11.4368 19.4829 11.6896 19.4829 11.9885C19.4829 12.2873 19.7358 12.5402 20.0346 12.5402C20.3335 12.5402 20.5864 12.2873 20.5864 11.9885C20.5864 11.6896 20.3565 11.4368 20.0346 11.4368Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="absolute bottom-0 right-0">
            <svg
              width="68"
              height="68"
              viewBox="0 0 68 68"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="9.82911"
                cy="57.9829"
                r="1.29337"
                transform="rotate(-45 9.82911 57.9829)"
                fill="#3056D3"
              />
              <circle
                cx="17.8765"
                cy="66.0308"
                r="1.29337"
                transform="rotate(-45 17.8765 66.0308)"
                fill="#3056D3"
              />
              <circle
                cx="1.82911"
                cy="65.8291"
                r="1.29337"
                transform="rotate(-45 1.82911 65.8291)"
                fill="#3056D3"
              />
              <circle
                cx="17.877"
                cy="49.9348"
                r="1.29337"
                transform="rotate(-45 17.877 49.9348)"
                fill="#3056D3"
              />
              <circle
                cx="25.9248"
                cy="57.9824"
                r="1.29337"
                transform="rotate(-45 25.9248 57.9824)"
                fill="#3056D3"
              />
              <circle
                cx="33.9736"
                cy="66.0312"
                r="1.29337"
                transform="rotate(-45 33.9736 66.0312)"
                fill="#3056D3"
              />
              <circle
                cx="25.9248"
                cy="41.8867"
                r="1.29337"
                transform="rotate(-45 25.9248 41.8867)"
                fill="#3056D3"
              />
              <circle
                cx="49.8862"
                cy="17.9255"
                r="1.29337"
                transform="rotate(-45 49.8862 17.9255)"
                fill="#3056D3"
              />
              <circle
                cx="33.9727"
                cy="49.9346"
                r="1.29337"
                transform="rotate(-45 33.9727 49.9346)"
                fill="#3056D3"
              />
              <circle
                cx="57.9341"
                cy="25.9731"
                r="1.29337"
                transform="rotate(-45 57.9341 25.9731)"
                fill="#3056D3"
              />
              <circle
                cx="42.0215"
                cy="57.9834"
                r="1.29337"
                transform="rotate(-45 42.0215 57.9834)"
                fill="#3056D3"
              />
              <circle
                cx="65.9829"
                cy="34.022"
                r="1.29337"
                transform="rotate(-45 65.9829 34.022)"
                fill="#3056D3"
              />
              <circle
                cx="50.0689"
                cy="66.0305"
                r="1.29337"
                transform="rotate(-45 50.0689 66.0305)"
                fill="#3056D3"
              />
              <circle
                cx="33.9731"
                cy="33.8386"
                r="1.29337"
                transform="rotate(-45 33.9731 33.8386)"
                fill="#3056D3"
              />
              <circle
                cx="57.9346"
                cy="9.87744"
                r="1.29337"
                transform="rotate(-45 57.9346 9.87744)"
                fill="#3056D3"
              />
              <circle
                cx="42.021"
                cy="41.8865"
                r="1.29337"
                transform="rotate(-45 42.021 41.8865)"
                fill="#3056D3"
              />
              <circle
                cx="65.9824"
                cy="17.925"
                r="1.29337"
                transform="rotate(-45 65.9824 17.925)"
                fill="#3056D3"
              />
              <circle
                cx="50.0698"
                cy="49.9351"
                r="1.29337"
                transform="rotate(-45 50.0698 49.9351)"
                fill="#3056D3"
              />
              <circle
                cx="58.1167"
                cy="57.9824"
                r="1.29337"
                transform="rotate(-45 58.1167 57.9824)"
                fill="#3056D3"
              />
              <circle
                cx="66.165"
                cy="66.0308"
                r="1.29337"
                transform="rotate(-45 66.165 66.0308)"
                fill="#3056D3"
              />
              <circle
                cx="42.021"
                cy="25.7905"
                r="1.29337"
                transform="rotate(-45 42.021 25.7905)"
                fill="#3056D3"
              />
              <circle
                cx="65.9824"
                cy="1.8291"
                r="1.29337"
                transform="rotate(-45 65.9824 1.8291)"
                fill="#3056D3"
              />
              <circle
                cx="50.0689"
                cy="33.8384"
                r="1.29337"
                transform="rotate(-45 50.0689 33.8384)"
                fill="#3056D3"
              />
              <circle
                cx="58.1177"
                cy="41.8872"
                r="1.29337"
                transform="rotate(-45 58.1177 41.8872)"
                fill="#3056D3"
              />
              <circle
                cx="66.165"
                cy="49.9343"
                r="1.29337"
                transform="rotate(-45 66.165 49.9343)"
                fill="#3056D3"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
