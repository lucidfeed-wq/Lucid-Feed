import { Link } from "react-router-dom";

const bottomMenu = [
  {
    link: "#",
    text: "Privacy policy",
  },
  {
    link: "#",
    text: "Legal notice",
  },
  {
    link: "#",
    text: "Terms of service",
  },
];

const FooterBottom = () => {
  return (
    <>
      <div className="mt-12 bg-[#101541] py-8 lg:mt-[60px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/3 lg:w-1/2">
              <div className="my-1 flex justify-center md:justify-start">
                <p className="text-base text-gray-7">&copy; 2025 TailGrids</p>
              </div>
            </div>
            <div className="w-full px-4 md:w-2/3 lg:w-1/2">
              <div className="my-1">
                <div className="-mx-3 flex flex-wrap items-center justify-center md:justify-end">
                  {bottomMenu.map((item, index) => (
                    <Link
                      key={index}
                      to={item.link}
                      className="px-3 text-base text-gray-7 hover:text-white"
                    >
                      {item.text}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterBottom;
