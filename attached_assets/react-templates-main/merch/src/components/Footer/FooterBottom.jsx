import { Link } from "react-router-dom";
import payment from "../../assets/ecom-images/footers/footer-02/payment.svg";

const bottomMenus = [
  { text: "Payment", link: "#" },
  { text: "Shipping & Returns", link: "#" },
  { text: "Gift Cards", link: "#" },
  { text: "Privacy Policy", link: "#" },
  { text: "Stockists", link: "#" },
];

const FooterBottom = () => {
  return (
    <>
      <div className="px-6 py-8 pb-6 sm:px-8 xl:px-14">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 xl:w-8/12">
            <div className="-mx-3 flex flex-wrap justify-center xl:justify-start">
              {bottomMenus.map((item, index) => (
                <Link
                  key={index}
                  to={item.link}
                  className="mb-4 inline-flex px-3 text-base text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary"
                >
                  {item.text}
                </Link>
              ))}
            </div>
          </div>
          <div className="w-full px-4 xl:w-4/12">
            <div className="mt-2 xl:mb-4 xl:mt-0">
              <img
                src={payment}
                alt="payment"
                className="mx-auto max-w-full xl:ml-0"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterBottom;
