import { Link } from "react-router-dom";

const navList = [
  {
    link: "#",
    text: "About Us",
  },
  {
    link: "#",
    text: "Order Tracking",
  },
  {
    link: "#",
    text: "Contact Us",
  },
  {
    link: "#",
    text: "FAQs",
  },
];

const NavTop = () => {
  return (
    <>
      <div className="hidden border-b border-stroke dark:border-dark-3 sm:block">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 md:w-2/3 lg:w-1/2">
              <ul className="-mx-3 flex items-center">
                {navList.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.link}
                      className="inline-block px-3 py-4 text-sm font-medium text-body-color hover:text-primary dark:text-dark-6"
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full px-4 md:w-1/3 lg:w-1/2">
              <div className="hidden items-center justify-end md:flex">
                <div>
                  <div className="relative">
                    <select className="w-full appearance-none rounded-lg bg-transparent py-3 pl-3 pr-5 text-sm font-medium text-body-color outline-hidden transition dark:text-dark-6">
                      <option value="English" className="dark:bg-dark-2">
                        English
                      </option>
                      <option value="Urdu" className="dark:bg-dark-2">
                        Urdu
                      </option>
                      <option value="Hindi" className="dark:bg-dark-2">
                        Hindi
                      </option>
                    </select>
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 text-body-color dark:text-dark-6">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-current"
                      >
                        <path d="M7.00001 9.97501C6.86876 9.97501 6.75938 9.93126 6.65001 9.84376L1.61876 4.90001C1.42188 4.70314 1.42188 4.39689 1.61876 4.20001C1.81563 4.00314 2.12188 4.00314 2.31876 4.20001L7.00001 8.77189L11.6813 4.15626C11.8781 3.95939 12.1844 3.95939 12.3813 4.15626C12.5781 4.35314 12.5781 4.65939 12.3813 4.85626L7.35001 9.80001C7.24063 9.90939 7.13126 9.97501 7.00001 9.97501Z" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div>
                  <div className="relative">
                    <select className="w-full appearance-none rounded-lg bg-transparent py-3 pl-3 pr-5 text-sm font-medium text-body-color outline-hidden transition dark:text-dark-6">
                      <option value="USD" className="dark:bg-dark-2">
                        USD
                      </option>
                      <option value="INR" className="dark:bg-dark-2">
                        INR
                      </option>
                      <option value="ERU" className="dark:bg-dark-2">
                        ERU
                      </option>
                    </select>
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 text-body-color dark:text-dark-6">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-current"
                      >
                        <path d="M7.00001 9.97501C6.86876 9.97501 6.75938 9.93126 6.65001 9.84376L1.61876 4.90001C1.42188 4.70314 1.42188 4.39689 1.61876 4.20001C1.81563 4.00314 2.12188 4.00314 2.31876 4.20001L7.00001 8.77189L11.6813 4.15626C11.8781 3.95939 12.1844 3.95939 12.3813 4.15626C12.5781 4.35314 12.5781 4.65939 12.3813 4.85626L7.35001 9.80001C7.24063 9.90939 7.13126 9.97501 7.00001 9.97501Z" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavTop;
