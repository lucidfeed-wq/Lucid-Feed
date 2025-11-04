import FooterBottom from "./FooterBottom.jsx";
import logoWhite from "../../assets/images/logo/logo-white.svg";
import { Link } from "react-router-dom";
import ShapeOne from "../Shapes/ShapeOne.jsx";
import ShapeTwo from "../Shapes/ShapeTwo.jsx";
import ShapeThree from "../Shapes/ShapeThree.jsx";

const footerMenu = [
  {
    title: "Top Categories",
    items: [
      { text: "Televisions", link: "#" },
      { text: "Washing Machines", link: "#" },
      { text: "Air Conditioners", link: "#" },
      { text: "Laptops", link: "#" },
      { text: "Accessories", link: "#" },
    ],
  },
  {
    title: "Important Links",
    items: [
      { text: "About us", link: "#" },
      { text: "Contact Us", link: "#" },
      { text: "Faq", link: "#" },
      { text: "Latest Posts", link: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <>
      <footer className="bg-dark">
        <div className="relative z-10 pt-20 lg:pt-[100px]">
          <div className="container mx-auto">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4 md:w-1/2 lg:w-5/12 xl:w-4/12">
                <div className="mb-16 max-w-[310px]">
                  <Link to="/" className="mb-9 inline-block">
                    <img src={logoWhite} alt="logo" className="max-w-full" />
                  </Link>
                  <p className="mb-9 flex items-center text-lg font-semibold text-white">
                    <span className="pr-3">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14 0.787506C7.9625 0.787506 3.0625 5.51251 3.0625 11.3313C3.0625 15.75 8.925 22.75 12.3812 26.5125C12.8187 26.9938 13.3875 27.2125 14 27.2125C14.6125 27.2125 15.1813 26.95 15.6188 26.5125C19.075 22.75 24.9375 15.75 24.9375 11.3313C24.9375 5.51251 20.0375 0.787506 14 0.787506ZM14.175 25.2C14.0875 25.2875 13.9563 25.2875 13.825 25.2C9.58125 20.5625 5.03125 14.525 5.03125 11.3313C5.03125 6.60626 9.05625 2.75626 14 2.75626C18.9438 2.75626 22.9688 6.60626 22.9688 11.3313C22.9688 14.525 18.4188 20.5625 14.175 25.2Z"
                          fill="white"
                        />
                        <path
                          d="M14 6.86876C11.375 6.86876 9.23126 9.01251 9.23126 11.6375C9.23126 14.2625 11.375 16.45 14 16.45C16.625 16.45 18.7688 14.3063 18.7688 11.6813C18.7688 9.05626 16.625 6.86876 14 6.86876ZM14 14.4813C12.425 14.4813 11.2 13.2125 11.2 11.6813C11.2 10.15 12.4688 8.88126 14 8.88126C15.5313 8.88126 16.8 10.15 16.8 11.6813C16.8 13.2125 15.575 14.4813 14 14.4813Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                    Our Store Locations
                  </p>

                  <p className="mb-4 flex text-base text-[#cacbcf]">
                    <span className="pr-4 font-semibold"> 01. </span>
                    <span>29 Holles Place, Dublin 2 D02 YY46</span>
                  </p>
                  <p className="flex text-base text-[#cacbcf]">
                    <span className="pr-4 font-semibold"> 02. </span>
                    <span>
                      68 Jay Street, Suite 902 New Side Brooklyn, NY 11201
                    </span>
                  </p>
                </div>
              </div>

              {footerMenu.map((group, groupIndex) => (
                <div
                  key={groupIndex}
                  className={`w-full px-4 sm:w-1/2 md:w-1/2 xl:w-2/12 ${groupIndex === 0 ? "lg:w-4/12" : "lg:w-3/12"}`}
                >
                  <div className="mb-16">
                    <h3 className="pb-5 text-xl font-semibold text-white">
                      {group.title}
                    </h3>
                    <span className="mb-8 block h-[3px] w-10 rounded-sm bg-white"></span>

                    <ul className="space-y-3">
                      {group.items.map((item, index) => (
                        <li key={index}>
                          <Link
                            to={item.link}
                            className="text-base text-[#cacbcf] transition-all hover:text-white hover:underline"
                          >
                            {item.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}

              <div className="w-full px-4 md:w-1/2 lg:w-5/12 xl:w-4/12">
                <div className="mb-16">
                  <h3 className="pb-5 text-xl font-semibold text-white">
                    Newsletter
                  </h3>
                  <span className="mb-8 block h-[3px] w-10 rounded-sm bg-white"></span>

                  <div>
                    <p className="mb-8 text-base text-[#cacbcf]">
                      Enter your email to receive our latest updates about our
                      products.
                    </p>
                    <form className="relative">
                      <input
                        type="email"
                        placeholder="Email address"
                        className="h-[50px] w-full bg-[#1f2735] pl-5 pr-[125px] text-[#CACBCF] outline-hidden placeholder:text-[#CACBCF]"
                      />
                      <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary px-5 py-2 text-sm font-medium text-white hover:bg-blue-dark">
                        Subscribe
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className="absolute bottom-0 left-0 -z-10">
              <ShapeOne />
            </span>
            <span className="absolute right-5 top-5 -z-10">
              <ShapeTwo />
            </span>
            <span className="absolute right-0 top-0 -z-10">
              <ShapeThree />
            </span>
          </div>
        </div>

        <FooterBottom />
      </footer>
    </>
  );
};

export default Footer;
