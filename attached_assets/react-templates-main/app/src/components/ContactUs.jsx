import { Link } from "react-router-dom";
import ShapeEleven from "./Shapes/ShapeEleven.jsx";
import ShapeTwelve from "./Shapes/ShapeTwelve.jsx";
import ShapeThirteen from "./Shapes/ShapeThirteen.jsx";

const formItems = [
  {
    placeholder: "Full Name",
    type: "text",
  },
  {
    placeholder: "Email Address",
    type: "email",
  },
  {
    placeholder: "Phone Number",
    type: "text",
  },
  {
    placeholder: "Subject",
    type: "text",
  },
  {
    placeholder: "Type Your Message",
    type: "textarea",
  },
];

const ContactUs = () => {
  return (
    <>
      <section className="dark:bg-dark relative z-40 bg-white py-20 lg:py-[120px]">
        <div className="container mx-auto">
          <div className="shadow-contact-3 dark:bg-dark-2 relative bg-white">
            <div className="-mx-4 flex flex-row-reverse flex-wrap items-stretch lg:flex-row">
              <div className="w-full px-4 lg:w-4/12">
                <div className="bg-primary relative z-40 flex h-full w-full items-end overflow-hidden 2xl:max-w-[370px]">
                  <div>
                    <div className="top-[120px] -left-8 p-10 lg:absolute lg:-rotate-90 lg:p-0">
                      <h2 className="inline-flex items-center text-xl font-medium text-white uppercase">
                        <span className="mr-2 inline-block h-[2px] w-6 bg-white"></span>
                        CONTACT US
                      </h2>
                    </div>
                    <div className="w-full p-10">
                      <span className="mb-5 block text-base font-medium text-white">
                        Follow Us On
                      </span>
                      <div className="flex items-center">
                        <Link
                          to="#"
                          className="mr-7 text-white opacity-60 hover:opacity-100"
                        >
                          <svg
                            width="10"
                            height="18"
                            viewBox="0 0 10 18"
                            className="fill-current"
                          >
                            <path d="M9.00007 6.82105H7.50006H6.96434V6.27097V4.56571V4.01562H7.50006H8.62507C8.91971 4.01562 9.16078 3.79559 9.16078 3.46554V0.550085C9.16078 0.247538 8.9465 0 8.62507 0H6.66969C4.55361 0 3.08038 1.54024 3.08038 3.82309V6.21596V6.76605H2.54466H0.72322C0.348217 6.76605 0 7.06859 0 7.50866V9.48897C0 9.87402 0.294645 10.2316 0.72322 10.2316H2.49109H3.02681V10.7817V16.31C3.02681 16.6951 3.32145 17.0526 3.75003 17.0526H6.26791C6.42862 17.0526 6.56255 16.9701 6.66969 16.8601C6.77684 16.7501 6.8572 16.5576 6.8572 16.3925V10.8092V10.2591H7.4197H8.62507C8.97328 10.2591 9.24114 10.0391 9.29471 9.709V9.6815V9.65399L9.66972 7.7562C9.6965 7.56367 9.66972 7.34363 9.509 7.1236C9.45543 6.98608 9.21436 6.84856 9.00007 6.82105Z" />
                          </svg>
                        </Link>
                        <Link
                          to="#"
                          className="mr-7 text-white opacity-60 hover:opacity-100"
                        >
                          <svg
                            width="19"
                            height="15"
                            viewBox="0 0 19 15"
                            className="fill-current"
                          >
                            <path d="M16.2622 3.17884L17.33 1.93299C17.6391 1.59557 17.7234 1.33602 17.7515 1.20624C16.9085 1.67343 16.1217 1.82917 15.6159 1.82917H15.4192L15.3068 1.72534C14.6324 1.18028 13.7894 0.894775 12.8902 0.894775C10.9233 0.894775 9.37779 2.40018 9.37779 4.13919C9.37779 4.24301 9.37779 4.39874 9.40589 4.50256L9.49019 5.02167L8.90009 4.99571C5.30334 4.89189 2.35288 2.03681 1.87518 1.54366C1.08839 2.84142 1.53799 4.08728 2.01568 4.86594L2.97107 6.31943L1.45369 5.54077C1.48179 6.6309 1.93138 7.48742 2.80247 8.11035L3.56116 8.62945L2.80247 8.91496C3.28017 10.2387 4.34795 10.7837 5.13474 10.9914L6.17443 11.2509L5.19094 11.8739C3.61736 12.9121 1.65039 12.8342 0.779297 12.7563C2.54957 13.8984 4.65705 14.1579 6.11823 14.1579C7.21412 14.1579 8.02901 14.0541 8.2257 13.9762C16.0936 12.2632 16.4589 5.77437 16.4589 4.47661V4.29492L16.6275 4.1911C17.5829 3.36053 17.9763 2.91929 18.2011 2.65974C18.1168 2.68569 18.0044 2.7376 17.892 2.76356L16.2622 3.17884Z" />
                          </svg>
                        </Link>
                        <Link
                          to="#"
                          className="mr-7 text-white opacity-60 hover:opacity-100"
                        >
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            className="fill-current"
                          >
                            <path d="M8.91688 12.4993C10.6918 12.4993 12.1306 11.091 12.1306 9.35366C12.1306 7.61637 10.6918 6.20801 8.91688 6.20801C7.14197 6.20801 5.70312 7.61637 5.70312 9.35366C5.70312 11.091 7.14197 12.4993 8.91688 12.4993Z" />
                            <path d="M12.4078 0.947266H5.37075C2.57257 0.947266 0.300781 3.17092 0.300781 5.90981V12.7435C0.300781 15.5366 2.57257 17.7603 5.37075 17.7603H12.3524C15.2059 17.7603 17.4777 15.5366 17.4777 12.7977V5.90981C17.4777 3.17092 15.2059 0.947266 12.4078 0.947266ZM8.91696 13.4757C6.56206 13.4757 4.70584 11.6045 4.70584 9.35377C4.70584 7.10299 6.58976 5.23187 8.91696 5.23187C11.2165 5.23187 13.1004 7.10299 13.1004 9.35377C13.1004 11.6045 11.2442 13.4757 8.91696 13.4757ZM14.735 5.61152C14.4579 5.90981 14.0423 6.07252 13.5714 6.07252C13.1558 6.07252 12.7402 5.90981 12.4078 5.61152C12.103 5.31322 11.9368 4.93357 11.9368 4.47257C11.9368 4.01157 12.103 3.65904 12.4078 3.33363C12.7125 3.00821 13.1004 2.84551 13.5714 2.84551C13.9869 2.84551 14.4302 3.00821 14.735 3.30651C15.012 3.65904 15.2059 4.06581 15.2059 4.49969C15.1782 4.93357 15.012 5.31322 14.735 5.61152Z" />
                            <path d="M13.5985 3.82178C13.2383 3.82178 12.9336 4.12007 12.9336 4.4726C12.9336 4.82513 13.2383 5.12343 13.5985 5.12343C13.9587 5.12343 14.2634 4.82513 14.2634 4.4726C14.2634 4.12007 13.9864 3.82178 13.5985 3.82178Z" />
                          </svg>
                        </Link>
                        <Link
                          to="#"
                          className="mr-7 text-white opacity-60 hover:opacity-100"
                        >
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            className="fill-current"
                          >
                            <path d="M16.7821 0.947266H1.84847C1.14272 0.947266 0.578125 1.49735 0.578125 2.18496V16.7622C0.578125 17.4223 1.14272 17.9999 1.84847 17.9999H16.7257C17.4314 17.9999 17.996 17.4498 17.996 16.7622V2.15745C18.0525 1.49735 17.4879 0.947266 16.7821 0.947266ZM5.7442 15.442H3.17528V7.32825H5.7442V15.442ZM4.44563 6.20058C3.59873 6.20058 2.94944 5.54047 2.94944 4.74285C2.94944 3.94523 3.62696 3.28513 4.44563 3.28513C5.26429 3.28513 5.94181 3.94523 5.94181 4.74285C5.94181 5.54047 5.32075 6.20058 4.44563 6.20058ZM15.4835 15.442H12.9146V11.5089C12.9146 10.5738 12.8864 9.33606 11.5596 9.33606C10.2045 9.33606 10.0069 10.3812 10.0069 11.4264V15.442H7.438V7.32825H9.95046V8.45592H9.9787C10.3457 7.79582 11.1644 7.13572 12.4347 7.13572C15.0601 7.13572 15.54 8.78598 15.54 11.0413V15.442H15.4835Z" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div>
                    <span className="absolute top-2 right-2 z-[-1]">
                      <ShapeEleven />
                    </span>
                    <span className="absolute bottom-0 left-0 z-[-1]">
                      <ShapeTwelve />
                    </span>
                    <span className="absolute bottom-[140px] left-0 z-[-1]">
                      <ShapeThirteen />
                    </span>
                  </div>
                </div>
              </div>

              <div className="w-full px-4 lg:w-8/12">
                <div className="p-10 md:p-[70px] lg:p-14 xl:p-[70px]">
                  <h2 className="text-dark mb-5 text-[28px] font-bold dark:text-white">
                    Get In Touch With Us
                  </h2>
                  <p className="text-body-color dark:text-dark-6 mb-[60px] max-w-[490px] text-base">
                    There are many variations of passages of Lorem Ipsum
                    available but the majority have suffered alteration in some
                    form.
                  </p>

                  <form>
                    <div className="-mx-4 flex flex-wrap">
                      {formItems.map((item, index) =>
                        item.type === "textarea" ? (
                          <div key={index} className="w-full px-4">
                            <div className="mb-10">
                              <textarea
                                rows="4"
                                placeholder={item.placeholder}
                                className="border-stroke text-body-color focus:border-primary dark:border-dark-3 dark:text-dark-6 dark:focus:border-primary placeholder:text-body-color/50 dark:placeholder:text-body-color w-full resize-none border-b bg-transparent py-4 text-sm outline-hidden focus-visible:shadow-none"
                              ></textarea>
                            </div>
                          </div>
                        ) : (
                          <div key={index} className="w-full px-4 md:w-1/2">
                            <div className="mb-4">
                              <input
                                type={item.type}
                                placeholder={item.placeholder}
                                className="border-stroke text-body-color placeholder:text-body-color/50 focus:border-primary dark:border-dark-3 dark:text-dark-6 dark:focus:border-primary dark:placeholder:text-body-color w-full border-b bg-transparent py-4 text-sm outline-hidden focus-visible:shadow-none"
                              />
                            </div>
                          </div>
                        ),
                      )}

                      <div className="w-full px-4">
                        <button
                          type="submit"
                          className="bg-primary hover:bg-primary/90 rounded-sm px-9 py-3 text-base font-medium text-white transition"
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
