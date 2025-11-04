import React from "react";

const Popover2 = () => {
  return (
    <section className="min-h-screen bg-gray-2 dark:bg-dark py-20 lg:py-[120px]">
      <div className="mx-auto px-4 lg:container">
        <div className="group relative text-center">
          <a
            href="/#"
            className="mb-3 inline-block text-base font-medium text-dark dark:text-white underline"
          >
            Popover Text
          </a>
          <div
            className="invisible absolute top-full left-0 right-0 mx-auto w-[312px] rounded-sm bg-white dark:bg-dark-2 text-center opacity-0 shadow-2 dark:shadow-box-dark group-hover:visible group-hover:opacity-100"
          >
            <span className="absolute -top-[9px] left-1/2 -translate-x-1/2 text-white dark:text-dark-2">
              <svg
                width={18}
                height={10}
                viewBox="0 0 18 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current"
              >
                <path d="M6.77012 1.47765C7.96184 0.153508 10.0382 0.153506 11.2299 1.47765L18 9L0 9L6.77012 1.47765Z" />
              </svg>
            </span>
            <h3 className="border-b border-stroke dark:border-dark-3 p-3 text-xl font-semibold text-dark dark:text-white">
              Popover Title
            </h3>
            <div className="p-5">
              <p className="text-sm text-body-color dark:text-dark-6">
                Lorem ipsum dolor sit amet, consect adipiscing elit. Mauris
                facilisis congue exclamate justo nec facilisis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Popover2;
