import ShapeSeven from "./Shapes/ShapeSeven.jsx";
import ShapeEight from "./Shapes/ShapeEight.jsx";
import teamOne from "../assets/images/team/team-05/image-01.jpg";
import teamTwo from "../assets/images/team/team-05/image-02.jpg";
import teamThree from "../assets/images/team/team-05/image-03.jpg";
import teamFour from "../assets/images/team/team-05/image-04.jpg";
import { Link } from "react-router-dom";

const teamItems = [
  {
    image: teamOne,
    name: "Melissa Tatcher",
    profession: "MARKETING OPERATIONS",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
  },
  {
    image: teamTwo,
    name: "Stuard Ferrel",
    profession: "DIGITAL MARKETER",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
  },
  {
    image: teamThree,
    name: "Eva Hudson",
    profession: "UI/UX DESIGNER",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
  },
  {
    image: teamFour,
    name: "Martin Ethariam",
    profession: "GRAPHIC DESIGNER",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
  },
];

const Team = () => {
  return (
    <>
      <section className="overflow-hidden bg-tg-bg pb-20 pt-20 dark:bg-dark-2 lg:pb-[120px] lg:pt-[120px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                <span className="mb-2 block text-lg font-semibold text-primary">
                  Our Team
                </span>
                <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                  Our Team Members
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>

          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 xl:w-10/12 2xl:w-9/12">
              <div className="relative flex flex-wrap rounded-[10px] bg-white px-6 pt-10 shadow-team dark:bg-dark">
                {teamItems.map((item, index) => (
                  <div key={index} className="w-full px-4 sm:w-1/2 lg:w-1/4">
                    <div className="mx-auto mb-10 max-w-[200px]">
                      <div className="mb-4 overflow-hidden rounded-[5px]">
                        <img src={item.image} alt="image" className="w-full" />
                      </div>
                      <div className="text-center">
                        <h4 className="mb-1 text-base font-semibold text-dark dark:text-white">
                          {item.name}
                        </h4>
                        <p className="mb-5 text-[10px] uppercase leading-[16px] text-body-color dark:text-dark-6">
                          {item.profession}
                        </p>
                        <div className="flex items-center justify-center gap-5">
                          <Link
                            to={item.facebookLink}
                            className="text-dark-8 hover:text-primary"
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="fill-current"
                            >
                              <path
                                d="M11.8502 6.45H10.4502H9.9502V5.95V4.4V3.9H10.4502H11.5002C11.7752 3.9 12.0002 3.7 12.0002 3.4V0.75C12.0002 0.475 11.8002 0.25 11.5002 0.25H9.6752C7.7002 0.25 6.3252 1.65 6.3252 3.725V5.9V6.4H5.8252H4.1252C3.7752 6.4 3.4502 6.675 3.4502 7.075V8.875C3.4502 9.225 3.7252 9.55 4.1252 9.55H5.7752H6.2752V10.05V15.075C6.2752 15.425 6.5502 15.75 6.9502 15.75H9.3002C9.4502 15.75 9.5752 15.675 9.6752 15.575C9.7752 15.475 9.85019 15.3 9.85019 15.15V10.075V9.575H10.3752H11.5002C11.8252 9.575 12.0752 9.375 12.1252 9.075V9.05V9.025L12.4752 7.3C12.5002 7.125 12.4752 6.925 12.3252 6.725C12.2752 6.6 12.0502 6.475 11.8502 6.45Z"
                                fill=""
                              />
                            </svg>
                          </Link>
                          <Link
                            to={item.twitterLink}
                            className="text-dark-8 hover:text-primary"
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="fill-current"
                            >
                              <path
                                d="M14.6353 4.30004C14.7245 4.19615 14.6083 4.0604 14.4764 4.10903C14.1821 4.21757 13.9132 4.28916 13.5155 4.33335C14.0047 4.06095 14.2322 3.67161 14.4173 3.19475C14.4619 3.07973 14.3273 2.97535 14.2113 3.0303C13.7405 3.25356 13.2324 3.4192 12.6981 3.51707C12.1701 2.99371 11.4173 2.66669 10.5847 2.66669C8.98574 2.66669 7.68914 3.87253 7.68914 5.35947C7.68914 5.57056 7.71501 5.77618 7.76381 5.97305C5.46538 5.86597 3.41588 4.88275 1.992 3.37509C1.8944 3.27176 1.71732 3.28548 1.65655 3.41151C1.49444 3.74775 1.40407 4.12075 1.40407 4.51346C1.40407 5.44751 1.91508 6.27164 2.6919 6.75455C2.3436 6.74409 2.0105 6.67622 1.70354 6.56105C1.55409 6.50498 1.38277 6.60351 1.40285 6.75422C1.557 7.91149 2.49395 8.86622 3.70334 9.09182C3.46047 9.15362 3.20467 9.18642 2.94005 9.18642C2.87589 9.18642 2.81228 9.18442 2.74926 9.18055C2.58888 9.17062 2.45853 9.31409 2.52729 9.45135C2.98096 10.3568 3.96057 10.989 5.10054 11.0086C4.10968 11.731 2.86125 12.1614 1.50462 12.1614C1.33735 12.1614 1.26559 12.3765 1.41399 12.4494C2.56014 13.0128 3.86538 13.3334 5.25226 13.3334C10.5782 13.3334 13.4902 9.23022 13.4902 5.67173C13.4902 5.55525 13.4873 5.43876 13.482 5.32337C13.9143 5.03295 14.3029 4.68761 14.6353 4.30004Z"
                                fill=""
                              />
                            </svg>
                          </Link>
                          <Link
                            to={item.instagramLink}
                            className="text-dark-8 hover:text-primary"
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="fill-current"
                            >
                              <path
                                d="M8.0216 10.4947C9.39934 10.4947 10.5162 9.37786 10.5162 8.00012C10.5162 6.62237 9.39934 5.50549 8.0216 5.50549C6.64386 5.50549 5.52698 6.62237 5.52698 8.00012C5.52698 9.37786 6.64386 10.4947 8.0216 10.4947Z"
                                fill=""
                              />
                              <path
                                d="M10.7312 1.33331H5.26883C3.09678 1.33331 1.33334 3.09675 1.33334 5.2688V10.6882C1.33334 12.9032 3.09678 14.6666 5.26883 14.6666H10.6882C12.9032 14.6666 14.6667 12.9032 14.6667 10.7312V5.2688C14.6667 3.09675 12.9032 1.33331 10.7312 1.33331ZM8.02152 11.2688C6.19356 11.2688 4.7527 9.78493 4.7527 7.99998C4.7527 6.21503 6.21506 4.73116 8.02152 4.73116C9.80646 4.73116 11.2688 6.21503 11.2688 7.99998C11.2688 9.78493 9.82797 11.2688 8.02152 11.2688ZM12.5376 5.03224C12.3226 5.2688 12 5.39783 11.6344 5.39783C11.3118 5.39783 10.9893 5.2688 10.7312 5.03224C10.4946 4.79568 10.3656 4.4946 10.3656 4.12901C10.3656 3.76342 10.4946 3.48385 10.7312 3.22579C10.9678 2.96772 11.2688 2.83869 11.6344 2.83869C11.957 2.83869 12.3011 2.96772 12.5376 3.20428C12.7527 3.48385 12.9032 3.80643 12.9032 4.15052C12.8817 4.4946 12.7527 4.79568 12.5376 5.03224Z"
                                fill=""
                              />
                              <path
                                d="M11.6564 3.61273C11.3769 3.61273 11.1403 3.84929 11.1403 4.12886C11.1403 4.40843 11.3769 4.64499 11.6564 4.64499C11.936 4.64499 12.1726 4.40843 12.1726 4.12886C12.1726 3.84929 11.9575 3.61273 11.6564 3.61273Z"
                                fill=""
                              />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                <span className="absolute -left-12 -top-12 z-[-1]">
                  <ShapeSeven />
                </span>
                <span className="absolute -bottom-8 -right-8 z-[-1]">
                  <ShapeEight />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
