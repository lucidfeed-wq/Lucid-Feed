import React from "react";

const TableGrid2 = () => {
  return (
    <section className="bg-gray-2 pb-[90px] pt-[120px] dark:bg-dark">
      <div className="mx-auto px-4 sm:container">
        <div className="-mx-4 flex justify-center">
          <div className="w-full px-4 xl:w-10/12">
            <div className="mb-9">
              <h2 className="mb-2 text-2xl font-semibold text-dark dark:text-white sm:text-[28px]">
                Available Freelance
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="-mx-4 flex flex-wrap">
              <TableGridItem
                image="https://cdn.tailgrids.com/2.0/image/application/images/table-grids/table-grid-02/image-01.jpg"
                name="Andro Strassmann"
                position="Web Developer"
                buttonText="Hire Now"
                title="About Person"
                details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere fermentum urna, eu condimentum mauris"
                phone="+990 343 23443"
                email="contact@devid.com"
              />
              <TableGridItem
                image="https://cdn.tailgrids.com/2.0/image/application/images/table-grids/table-grid-02/image-01.jpg"
                name="Andro Strassmann"
                position="Web Developer"
                buttonText="Hire Now"
                title="About Person"
                details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere fermentum urna, eu condimentum mauris"
                phone="+990 343 23443"
                email="contact@devid.com"
              />
              <TableGridItem
                image="https://cdn.tailgrids.com/2.0/image/application/images/table-grids/table-grid-02/image-01.jpg"
                name="Andro Strassmann"
                position="Web Developer"
                buttonText="Hire Now"
                title="About Person"
                details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere fermentum urna, eu condimentum mauris"
                phone="+990 343 23443"
                email="contact@devid.com"
              />
              <TableGridItem
                image="https://cdn.tailgrids.com/2.0/image/application/images/table-grids/table-grid-02/image-01.jpg"
                name="Andro Strassmann"
                position="Web Developer"
                buttonText="Hire Now"
                title="About Person"
                details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere fermentum urna, eu condimentum mauris"
                phone="+990 343 23443"
                email="contact@devid.com"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TableGrid2;

const TableGridItem = ({
  image,
  name,
  position,
  buttonText,
  title,
  details,
  phone,
  email,
}) => {
  return (
    <div className="w-full px-4 lg:w-1/2">
      <div className="mb-8 rounded-lg border border-stroke bg-white shadow-1 hover:shadow-none dark:border-dark-3 dark:bg-dark-2 dark:shadow-3">
        <div className="items-center justify-between border-b border-stroke p-5 dark:border-dark-3 sm:flex">
          <div className="flex items-center">
            <div className="mr-4 h-[50px] w-full max-w-[50px] overflow-hidden rounded-sm">
              <img
                src={image}
                alt="table grid"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div>
              <h4 className="text-base font-medium text-dark dark:text-white">
                {name}
              </h4>
              <p className="text-sm text-body-color dark:text-dark-6">
                {position}
              </p>
            </div>
          </div>
          <div className="ml-[66px] mt-1 sm:m-0">
            <button className="flex h-[30px] items-center justify-center rounded-sm bg-primary px-4 text-base font-medium text-white hover:bg-primary/90">
              {buttonText}
            </button>
          </div>
        </div>
        <div className="border-b border-stroke p-5 dark:border-dark-3">
          <h4 className="mb-1 text-base font-medium text-dark dark:text-white">
            {title}
          </h4>
          <p className="text-sm text-body-color dark:text-dark-6">{details}</p>
        </div>
        <div className="flex flex-wrap items-center px-5 pt-[14px]">
          <p className="mb-[14px] mr-7 flex items-center text-sm text-body-color dark:text-dark-6">
            <span className="mr-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1933_818)">
                  <path
                    d="M12.15 15.575C11.475 15.575 10.7 15.4 9.84998 15.075C8.14998 14.4 6.27498 13.1 4.59998 11.425C2.92498 9.74997 1.62498 7.87497 0.949985 6.14997C0.199985 4.29997 0.274985 2.77497 1.14998 1.92497C1.17498 1.89997 1.22498 1.87497 1.24998 1.84997L3.34998 0.599971C3.87498 0.299971 4.54998 0.449971 4.89998 0.949971L6.37498 3.14997C6.72498 3.67497 6.57498 4.37497 6.07498 4.72497L5.17498 5.34997C5.82498 6.39997 7.67498 8.97497 10.625 10.825L11.175 10.025C11.6 9.42497 12.275 9.24997 12.825 9.62497L15.025 11.1C15.525 11.45 15.675 12.125 15.375 12.65L14.125 14.75C14.1 14.8 14.075 14.825 14.05 14.85C13.6 15.325 12.95 15.575 12.15 15.575ZM1.89998 2.77497C1.42498 3.29997 1.44998 4.37497 1.99998 5.74997C2.62498 7.32497 3.82498 9.04997 5.39998 10.625C6.94998 12.175 8.69998 13.375 10.25 14C11.6 14.55 12.675 14.575 13.225 14.1L14.425 12.05C14.425 12.025 14.425 12.025 14.425 12L12.225 10.525C12.225 10.525 12.175 10.55 12.125 10.625L11.575 11.425C11.225 11.925 10.55 12.075 10.05 11.75C6.89998 9.79997 4.94998 7.07497 4.24998 5.97497C3.92498 5.44997 4.04998 4.77497 4.54998 4.42497L5.44998 3.79997V3.77497L3.97498 1.57497C3.97498 1.54997 3.94998 1.54997 3.92498 1.57497L1.89998 2.77497Z"
                    fill="currentColor"
                  />
                  <path
                    d="M14.65 7.12496C14.35 7.12496 14.125 6.89996 14.1 6.59996C13.9 4.07496 11.825 2.04996 9.27499 1.87496C8.97499 1.84996 8.72499 1.59996 8.74999 1.27496C8.77499 0.974956 9.02499 0.724956 9.34999 0.749956C12.45 0.949956 14.975 3.39996 15.225 6.49996C15.25 6.79996 15.025 7.07496 14.7 7.09996C14.7 7.12496 14.675 7.12496 14.65 7.12496Z"
                    fill="currentColor"
                  />
                  <path
                    d="M12.175 7.34997C11.9 7.34997 11.65 7.14997 11.625 6.84997C11.475 5.49997 10.425 4.44997 9.07499 4.27497C8.77499 4.24997 8.54999 3.94997 8.57499 3.64997C8.59999 3.34997 8.89999 3.12497 9.19999 3.14997C11.075 3.37497 12.525 4.82497 12.75 6.69997C12.775 6.99997 12.575 7.27497 12.25 7.32497C12.2 7.34997 12.175 7.34997 12.175 7.34997Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1933_818">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
            {phone}
          </p>
          <p className="mb-[14px] flex items-center text-sm text-body-color dark:text-dark-6">
            <span className="mr-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 2.40002H1.99999C1.14999 2.40002 0.424988 3.10002 0.424988 3.97502V12.075C0.424988 12.925 1.12499 13.65 1.99999 13.65H14C14.85 13.65 15.575 12.95 15.575 12.075V3.95002C15.575 3.10002 14.85 2.40002 14 2.40002ZM14 3.52502C14.025 3.52502 14.05 3.52502 14.075 3.52502L7.99999 7.42502L1.92499 3.52502C1.94999 3.52502 1.97499 3.52502 1.99999 3.52502H14ZM14 12.475H1.99999C1.74999 12.475 1.54999 12.275 1.54999 12.025V4.62502L7.39999 8.37502C7.57499 8.50002 7.77499 8.55002 7.97499 8.55002C8.17499 8.55002 8.37499 8.50002 8.54999 8.37502L14.4 4.62502V12.05C14.45 12.3 14.25 12.475 14 12.475Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            {email}
          </p>
        </div>
      </div>
    </div>
  );
};
