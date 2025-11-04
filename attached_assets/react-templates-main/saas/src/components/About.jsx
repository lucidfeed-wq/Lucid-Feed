import serviceImage from "../assets/images/services/services-09/image-01.png";

const serviceItems = [
  {
    title: "Beautifully handcrafted templates",
    details:
      "Lorem ipsum amet consectetur adipiscing do eiusmod tempor incididunt ut labore.",
  },
  {
    title: "Pixel perfect design and code",
    details:
      "Lorem ipsum amet consectetur adipiscing do eiusmod tempor incididunt ut labore.",
  },
  {
    title: "Fully responsive design",
    details:
      "Lorem ipsum amet consectetur adipiscing do eiusmod tempor incididunt ut labore.",
  },
];

const About = () => {
  return (
    <>
      <section className="relative bg-tg-bg pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
        <div className="container mx-auto">
          <div className="-mx-4 mb-10 flex flex-wrap items-center lg:mb-[60px]">
            <div className="w-full px-4 lg:w-6/12">
              <div className="mb-[60px] max-w-[500px] xl:mb-[70px]">
                <span className="mb-2 block text-lg font-semibold text-primary">
                  Crafted with TailGrids Components
                </span>
                <h2 className="text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px]">
                  200+ Tailwind CSS UI Components & Counting
                </h2>
              </div>
              <div className="-mx-4 flex flex-wrap">
                {serviceItems.map((item, index) => (
                  <div key={index} className="w-full max-w-[520px] px-4">
                    <div className="group mb-12 flex">
                      <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center rounded-full border-2 border-primary bg-primary text-xl font-semibold text-white group-hover:bg-transparent group-hover:text-primary md:h-[80px] md:max-w-[80px] md:text-2xl">
                        {`${(index + 1).toString().padStart(2, "0")}`}
                      </div>
                      <div className="w-full">
                        <h3 className="mb-4 text-xl font-semibold text-dark dark:text-white 2xl:text-[22px]">
                          {item.title}
                        </h3>
                        <p className="text-base leading-relaxed text-body-color dark:text-dark-6">
                          {item.details}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="right-0 top-1/2 hidden w-1/2 lg:absolute lg:flex lg:-translate-y-1/2">
                <img
                  src={serviceImage}
                  alt="image"
                  className="ml-auto max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
