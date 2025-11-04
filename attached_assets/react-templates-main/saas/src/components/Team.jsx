import teamOne from "../assets/images/team/team-02/image-01.png";
import teamTwo from "../assets/images/team/team-02/image-02.png";
import teamThree from "../assets/images/team/team-02/image-03.png";
import teamFour from "../assets/images/team/team-02/image-04.png";
import { Link } from "react-router-dom";
import ShapeFive from "./Shapes/ShapeFive.jsx";
import ShapeSix from "./Shapes/ShapeSix.jsx";

const teamItems = [
  {
    image: teamOne,
    name: "Adveen Desuza",
    profession: "UI Designer",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
  },
  {
    image: teamTwo,
    name: "Jezmin uniya",
    profession: "Product Designer",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
  },
  {
    image: teamThree,
    name: "Andrieo Gloree",
    profession: "App Developer",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
  },
  {
    image: teamFour,
    name: "Jackie Sanders",
    profession: "Content Writer",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
  },
];

const Team = () => {
  return (
    <>
      <section className="pb-10 pt-20 dark:bg-dark-2 lg:pb-20 lg:pt-[120px]">
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
            {teamItems.map((item, index) => (
              <div key={index} className="w-full px-4 sm:w-1/2 lg:w-1/4">
                <div className="mb-10">
                  <div className="h-170px] relative z-10 mx-auto mb-6 w-[170px] rounded-full">
                    <img
                      src={item.image}
                      alt="image"
                      className="w-full rounded-full"
                    />
                    <span className="absolute left-0 top-0 z-[-1]">
                      <ShapeFive />
                    </span>
                    <span className="absolute bottom-0 right-0">
                      <ShapeSix />
                    </span>
                  </div>
                  <div className="text-center">
                    <h4 className="mb-1 text-lg font-medium text-dark dark:text-white">
                      {item.name}
                    </h4>
                    <p className="mb-5 text-xs font-medium text-body-color dark:text-dark-6">
                      {item.profession}
                    </p>
                    <div className="flex items-center justify-center gap-5">
                      <Link
                        to={item.facebookLink}
                        className="flex text-dark-8 hover:text-primary"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="fill-current"
                        >
                          <path
                            d="M14.8127 8.0625H13.0627H12.4377V7.4375V5.5V4.875H13.0627H14.3752C14.719 4.875 15.0002 4.625 15.0002 4.25V0.9375C15.0002 0.59375 14.7502 0.3125 14.3752 0.3125H12.094C9.62524 0.3125 7.90649 2.0625 7.90649 4.65625V7.375V8H7.28149H5.15649C4.71899 8 4.31274 8.34375 4.31274 8.84375V11.0938C4.31274 11.5312 4.65649 11.9375 5.15649 11.9375H7.21899H7.84399V12.5625V18.8438C7.84399 19.2812 8.18774 19.6875 8.68774 19.6875H11.6252C11.8127 19.6875 11.969 19.5938 12.094 19.4688C12.219 19.3438 12.3127 19.125 12.3127 18.9375V12.5938V11.9688H12.969H14.3752C14.7815 11.9688 15.094 11.7188 15.1565 11.3438V11.3125V11.2812L15.594 9.125C15.6252 8.90625 15.594 8.65625 15.4065 8.40625C15.344 8.25 15.0627 8.09375 14.8127 8.0625Z"
                            fill=""
                          />
                        </svg>
                      </Link>
                      <Link
                        to={item.twitterLink}
                        className="flex text-dark-8 hover:text-primary"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="fill-current"
                        >
                          <path
                            d="M18.2942 5.37494C18.4056 5.24509 18.2603 5.07539 18.0955 5.13618C17.7277 5.27185 17.3915 5.36134 16.8943 5.41659C17.5058 5.07609 17.7902 4.58941 18.0216 3.99333C18.0773 3.84955 17.9091 3.71909 17.7642 3.78777C17.1756 4.06684 16.5405 4.27389 15.8727 4.39623C15.2126 3.74204 14.2717 3.33325 13.2308 3.33325C11.2322 3.33325 9.61141 4.84056 9.61141 6.69923C9.61141 6.96309 9.64374 7.22012 9.70474 7.46621C6.8317 7.33235 4.26983 6.10333 2.48997 4.21876C2.36798 4.08959 2.14662 4.10674 2.07066 4.26428C1.86803 4.68458 1.75506 5.15083 1.75506 5.64172C1.75506 6.80929 2.39383 7.83944 3.36485 8.44308C2.92947 8.43 2.51311 8.34517 2.12941 8.2012C1.94259 8.13112 1.72844 8.25429 1.75354 8.44267C1.94623 9.88925 3.11741 11.0827 4.62915 11.3647C4.32556 11.4419 4.00581 11.4829 3.67504 11.4829C3.59484 11.4829 3.51533 11.4804 3.43655 11.4756C3.23607 11.4632 3.07314 11.6425 3.15909 11.8141C3.72618 12.9459 4.95069 13.7361 6.37565 13.7607C5.13707 14.6637 3.57654 15.2017 1.88076 15.2017C1.67166 15.2017 1.58196 15.4705 1.76746 15.5617C3.20016 16.2659 4.83171 16.6666 6.5653 16.6666C13.2227 16.6666 16.8627 11.5377 16.8627 7.08955C16.8627 6.94395 16.8591 6.79834 16.8525 6.65411C17.3928 6.29109 17.8786 5.85941 18.2942 5.37494Z"
                            fill=""
                          />
                        </svg>
                      </Link>
                      <Link
                        to={item.instagramLink}
                        className="flex text-dark-8 hover:text-primary"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="fill-current"
                        >
                          <path
                            d="M10.027 13.1186C11.7491 13.1186 13.1453 11.7225 13.1453 10.0004C13.1453 8.27818 11.7491 6.88208 10.027 6.88208C8.30479 6.88208 6.90869 8.27818 6.90869 10.0004C6.90869 11.7225 8.30479 13.1186 10.027 13.1186Z"
                            fill=""
                          />
                          <path
                            d="M13.414 1.66675H6.58601C3.87096 1.66675 1.66666 3.87105 1.66666 6.5861V13.3603C1.66666 16.1291 3.87096 18.3334 6.58601 18.3334H13.3602C16.129 18.3334 18.3333 16.1291 18.3333 13.4141V6.5861C18.3333 3.87105 16.129 1.66675 13.414 1.66675ZM10.0269 14.0861C7.74193 14.0861 5.94085 12.2313 5.94085 10.0001C5.94085 7.7689 7.76881 5.91406 10.0269 5.91406C12.2581 5.91406 14.086 7.7689 14.086 10.0001C14.086 12.2313 12.2849 14.0861 10.0269 14.0861ZM15.672 6.2904C15.4032 6.5861 15 6.74739 14.543 6.74739C14.1398 6.74739 13.7365 6.5861 13.414 6.2904C13.1183 5.99471 12.957 5.61836 12.957 5.16137C12.957 4.70438 13.1183 4.35492 13.414 4.03234C13.7097 3.70976 14.086 3.54847 14.543 3.54847C14.9462 3.54847 15.3763 3.70976 15.672 4.00546C15.9409 4.35492 16.129 4.75815 16.129 5.18825C16.1021 5.61836 15.9409 5.99471 15.672 6.2904Z"
                            fill=""
                          />
                          <path
                            d="M14.5705 4.51611C14.2211 4.51611 13.9254 4.81181 13.9254 5.16127C13.9254 5.51074 14.2211 5.80644 14.5705 5.80644C14.92 5.80644 15.2157 5.51074 15.2157 5.16127C15.2157 4.81181 14.9469 4.51611 14.5705 4.51611Z"
                            fill=""
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
