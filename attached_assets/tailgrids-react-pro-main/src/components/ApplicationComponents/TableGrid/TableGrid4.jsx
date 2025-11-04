import React from "react";

const TableGrid4 = () => {
  return (
    <section className="bg-gray-2 py-20 dark:bg-dark lg:py-[120px]">
      <div className="mx-auto px-4 sm:container">
        <div className="mb-9">
          <h2 className="mb-2 text-2xl font-semibold text-dark dark:text-white sm:text-[28px]">
            Most Popular Items
          </h2>
          <p className="text-base text-body-color dark:text-dark-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="rounded-lg border border-stroke bg-white dark:border-dark-3 dark:bg-dark-2">
          <div className="flex flex-wrap lg:[&>*:nth-child(3n)]:border-r-0 lg:[&>*:nth-child(4)]:border-b-0 md:[&>*:nth-child(5)]:border-b-0">
            <TableGridItem
              image="https://cdn.tailgrids.com/2.0/image/application/images/table-grids/table-grid-04/image-01.jpg"
              price="$59.55"
              link="/#"
              title="Table Top Showpiece"
              review="115 Reviews"
            />
            <TableGridItem
              image="https://cdn.tailgrids.com/2.0/image/application/images/table-grids/table-grid-04/image-02.jpg"
              price="$40.00"
              link="/#"
              title="Ceramic Coffee Mug"
              review="55 Reviews"
            />
            <TableGridItem
              image="https://cdn.tailgrids.com/2.0/image/application/images/table-grids/table-grid-04/image-03.jpg"
              price="$80.00"
              link="/#"
              title="Modern Coffee Mug"
              review="8 Reviews"
            />
            <TableGridItem
              image="https://cdn.tailgrids.com/2.0/image/application/images/table-grids/table-grid-04/image-04.jpg"
              price="$49.55"
              link="/#"
              title="Metal Table Lamp"
              review="49 Reviews"
            />
            <TableGridItem
              image="https://cdn.tailgrids.com/2.0/image/application/images/table-grids/table-grid-04/image-05.jpg"
              price="$25.55"
              link="/#"
              title="Rubik's Cube"
              review="35 Reviews"
            />
            <TableGridItem
              image="https://cdn.tailgrids.com/2.0/image/application/images/table-grids/table-grid-04/image-06.jpg"
              price="$85.55"
              link="/#"
              title="Table Showpiece"
              review="97 Reviews"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TableGrid4;

const TableGridItem = ({ image, price, link, title, review }) => {
  return (
    <div className="w-full border-stroke px-4 dark:border-dark-3 md:w-1/2 md:odd:border-r lg:w-1/3 lg:even:border-r not-last:border-b">
      <div className="mb-10 mt-6">
        <div className="mb-5 overflow-hidden rounded-md">
          <img src={image} alt="product" className="w-full" />
        </div>
        <div>
          <span className="mb-2 block text-base font-semibold text-dark dark:text-white sm:text-lg">
            {price}
          </span>
          <h3>
            <a
              href={link}
              className="mb-2 block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-2xl md:text-lg 2xl:text-2xl"
            >
              {title}
            </a>
          </h3>
          <p className="flex items-center gap-3 text-base text-body-color dark:text-dark-6">
            <span className="flex items-center gap-1">
              <span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.925 5.975L10.4 5.275L8.34996 0.975C8.19996 0.675 7.79996 0.675 7.64996 0.975L5.59996 5.3L1.09996 5.975C0.77496 6.025 0.64996 6.45 0.89996 6.675L4.17496 10.05L3.39996 14.775C3.34996 15.1 3.67496 15.375 3.97496 15.175L8.04996 12.95L12.1 15.175C12.375 15.325 12.725 15.075 12.65 14.775L11.875 10.05L15.15 6.675C15.35 6.45 15.25 6.025 14.925 5.975Z"
                    fill="#FFA645"
                  />
                </svg>
              </span>
              <span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.925 5.975L10.4 5.275L8.34996 0.975C8.19996 0.675 7.79996 0.675 7.64996 0.975L5.59996 5.3L1.09996 5.975C0.77496 6.025 0.64996 6.45 0.89996 6.675L4.17496 10.05L3.39996 14.775C3.34996 15.1 3.67496 15.375 3.97496 15.175L8.04996 12.95L12.1 15.175C12.375 15.325 12.725 15.075 12.65 14.775L11.875 10.05L15.15 6.675C15.35 6.45 15.25 6.025 14.925 5.975Z"
                    fill="#FFA645"
                  />
                </svg>
              </span>
              <span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.925 5.975L10.4 5.275L8.34996 0.975C8.19996 0.675 7.79996 0.675 7.64996 0.975L5.59996 5.3L1.09996 5.975C0.77496 6.025 0.64996 6.45 0.89996 6.675L4.17496 10.05L3.39996 14.775C3.34996 15.1 3.67496 15.375 3.97496 15.175L8.04996 12.95L12.1 15.175C12.375 15.325 12.725 15.075 12.65 14.775L11.875 10.05L15.15 6.675C15.35 6.45 15.25 6.025 14.925 5.975Z"
                    fill="#FFA645"
                  />
                </svg>
              </span>
              <span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.925 5.975L10.4 5.275L8.34996 0.975C8.19996 0.675 7.79996 0.675 7.64996 0.975L5.59996 5.3L1.09996 5.975C0.77496 6.025 0.64996 6.45 0.89996 6.675L4.17496 10.05L3.39996 14.775C3.34996 15.1 3.67496 15.375 3.97496 15.175L8.04996 12.95L12.1 15.175C12.375 15.325 12.725 15.075 12.65 14.775L11.875 10.05L15.15 6.675C15.35 6.45 15.25 6.025 14.925 5.975Z"
                    fill="#FFA645"
                  />
                </svg>
              </span>
              <span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.925 5.975L10.4 5.275L8.34996 0.975C8.19996 0.675 7.79996 0.675 7.64996 0.975L5.59996 5.3L1.09996 5.975C0.77496 6.025 0.64996 6.45 0.89996 6.675L4.17496 10.05L3.39996 14.775C3.34996 15.1 3.67496 15.375 3.97496 15.175L8.04996 12.95L12.1 15.175C12.375 15.325 12.725 15.075 12.65 14.775L11.875 10.05L15.15 6.675C15.35 6.45 15.25 6.025 14.925 5.975Z"
                    stroke="#FFA645"
                  />
                </svg>
              </span>
            </span>
            {review}
          </p>
        </div>
      </div>
    </div>
  );
};
