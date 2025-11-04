const tableDataList = [
  {
    userName: "Musharof Chowdhury",
    userEmail: "musharof@gmail.com",
    productName: "Apple Macbook Pro M1",
    size: "8/256 GB",
    orderNumber: "#WE234343",
    date: "25 Dec 2024",
    status: "Pending",
  },
  {
    userName: "Shafiq Hammad",
    userEmail: "shafiq@gmail.com",
    productName: "iPhone 13 Pro Max",
    size: "4/256 GB",
    orderNumber: "#WE234343",
    date: "25 Dec 2024",
    status: "Pending",
  },
  {
    userName: "Naimur Rahman",
    userEmail: "naim@gmail.com",
    productName: "Apple watch series 7",
    orderNumber: "#WE234343",
    date: "25 Dec 2024",
    status: "Cancelled",
  },
  {
    userName: "Jhon Smith",
    userEmail: "smith@gmail.com",
    productName: "Apple Macbook air M1",
    size: "8/256 GB",
    orderNumber: "#WE234343",
    date: "25 Dec 2024",
    status: "Shipped",
  },
];

const ProductTable = () => {
  return (
    <>
      <div className="mb-9">
        <h2 className="mb-2 text-2xl font-semibold text-dark dark:text-white">
          Recent Orders
        </h2>
        <p className="text-sm font-medium text-body-color dark:text-dark-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices
          lectus sem.
        </p>
      </div>

      <div className="mb-8 items-center justify-between rounded-lg bg-[#F8F9FD] px-5 py-4 dark:bg-dark-2 md:flex">
        <div className="mb-4 w-full md:mb-0 md:max-w-[220px] lg:max-w-[415px]">
          <div className="relative">
            <input
              type="text"
              placeholder="Search here..."
              className="h-[50px] w-full rounded-lg border border-stroke bg-white pl-14 pr-6 text-base text-body-color outline-hidden focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
            />
            <span className="absolute left-6 top-1/2 -translate-y-1/2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.25 3C5.3505 3 3 5.3505 3 8.25C3 11.1495 5.3505 13.5 8.25 13.5C11.1495 13.5 13.5 11.1495 13.5 8.25C13.5 5.3505 11.1495 3 8.25 3ZM1.5 8.25C1.5 4.52208 4.52208 1.5 8.25 1.5C11.9779 1.5 15 4.52208 15 8.25C15 11.9779 11.9779 15 8.25 15C4.52208 15 1.5 11.9779 1.5 8.25Z"
                  fill="#637381"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.957 11.958C12.2499 11.6651 12.7247 11.6651 13.0176 11.958L16.2801 15.2205C16.573 15.5133 16.573 15.9882 16.2801 16.2811C15.9872 16.574 15.5124 16.574 15.2195 16.2811L11.957 13.0186C11.6641 12.7257 11.6641 12.2508 11.957 11.958Z"
                  fill="#637381"
                />
              </svg>
            </span>
          </div>
        </div>

        <div className="w-full">
          <div className="items-center space-y-4 sm:flex sm:space-x-4 sm:space-y-0 md:justify-end">
            <button className="flex h-[50px] items-center justify-center rounded-md border border-stroke bg-white px-5 text-body-color hover:border-primary hover:text-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6">
              <span className="mr-2">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.7499 2.9812H14.2874V2.36245C14.2874 2.02495 14.0062 1.71558 13.6405 1.71558C13.2749 1.71558 12.9937 1.99683 12.9937 2.36245V2.9812H4.97803V2.36245C4.97803 2.02495 4.69678 1.71558 4.33115 1.71558C3.96553 1.71558 3.68428 1.99683 3.68428 2.36245V2.9812H2.2499C1.29365 2.9812 0.478027 3.7687 0.478027 4.75308V14.5406C0.478027 15.4968 1.26553 16.3125 2.2499 16.3125H15.7499C16.7062 16.3125 17.5218 15.525 17.5218 14.5406V4.72495C17.5218 3.7687 16.7062 2.9812 15.7499 2.9812ZM1.77178 8.21245H4.1624V10.9968H1.77178V8.21245ZM5.42803 8.21245H8.38115V10.9968H5.42803V8.21245ZM8.38115 12.2625V15.0187H5.42803V12.2625H8.38115ZM9.64678 12.2625H12.5999V15.0187H9.64678V12.2625ZM9.64678 10.9968V8.21245H12.5999V10.9968H9.64678ZM13.8374 8.21245H16.228V10.9968H13.8374V8.21245ZM2.2499 4.24683H3.7124V4.83745C3.7124 5.17495 3.99365 5.48433 4.35928 5.48433C4.7249 5.48433 5.00615 5.20308 5.00615 4.83745V4.24683H13.0499V4.83745C13.0499 5.17495 13.3312 5.48433 13.6968 5.48433C14.0624 5.48433 14.3437 5.20308 14.3437 4.83745V4.24683H15.7499C16.0312 4.24683 16.2562 4.47183 16.2562 4.75308V6.94683H1.77178V4.75308C1.77178 4.47183 1.96865 4.24683 2.2499 4.24683ZM1.77178 14.5125V12.2343H4.1624V14.9906H2.2499C1.96865 15.0187 1.77178 14.7937 1.77178 14.5125ZM15.7499 15.0187H13.8374V12.2625H16.228V14.5406C16.2562 14.7937 16.0312 15.0187 15.7499 15.0187Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              Mar 28, 2022 - Apr 29, 2022
            </button>

            <button className="flex h-[50px] items-center justify-center rounded-md border border-stroke bg-white px-5 text-body-color hover:border-primary hover:text-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6">
              <span className="mr-2">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.36874 17.4937C7.19999 17.4937 7.03124 17.4374 6.86249 17.353C6.58124 17.1843 6.44062 16.903 6.44062 16.5937V7.6499L1.51874 1.94053C1.32187 1.65928 1.26562 1.29365 1.40624 0.984277C1.54687 0.674902 1.88437 0.478027 2.24999 0.478027H15.75C16.1156 0.478027 16.4531 0.703027 16.5937 1.04053C16.7344 1.37803 16.6781 1.71553 16.425 1.99678L11.5875 7.62178V14.1749C11.5875 14.3437 11.5312 14.5968 11.2781 14.8499L11.2219 14.9062L7.84687 17.4093C7.70624 17.4655 7.53749 17.4937 7.36874 17.4937ZM7.50937 6.91865C7.64999 7.0874 7.73437 7.34053 7.73437 7.50928V15.9187L10.35 13.978V7.50928C10.35 7.36865 10.35 7.11553 10.575 6.89053L14.9625 1.77178H3.03749L7.50937 6.91865ZM6.52499 7.73428L6.55312 7.7624L6.52499 7.73428Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              Filter
            </button>
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-stroke bg-white dark:border-dark-3 dark:bg-dark-2">
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto rounded-lg">
            <thead>
              <tr className="border-b border-stroke dark:border-dark-3">
                <th className="min-w-[260px] py-5 pl-9 pr-4">
                  <p className="text-left text-base font-medium text-dark dark:text-white">
                    Customer
                  </p>
                </th>
                <th className="min-w-[260px] px-4 py-5">
                  <p className="text-left text-base font-medium text-dark dark:text-white">
                    Product
                  </p>
                </th>
                <th className="min-w-[160px] px-4 py-5">
                  <p className="text-left text-base font-medium text-dark dark:text-white">
                    Order Number
                  </p>
                </th>
                <th className="min-w-[170px] px-4 py-5">
                  <p className="text-left text-base font-medium text-dark dark:text-white">
                    Date
                  </p>
                </th>
                <th className="min-w-[150px] px-4 py-5">
                  <p className="text-left text-base font-medium text-dark dark:text-white">
                    Status
                  </p>
                </th>
                <th className="min-w-[200px] py-5 pl-4 pr-9">
                  <p className="text-right text-base font-medium text-black">
                    Confirmation
                  </p>
                </th>
              </tr>
            </thead>

            <tbody>
              {tableDataList.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-stroke last:border-b-0 dark:border-dark-3"
                >
                  <td className="py-6 pl-9 pr-4">
                    <h5 className="text-base font-medium text-body-color dark:text-dark-6">
                      {item.userName}
                    </h5>
                    <p className="text-sm text-body-color dark:text-dark-6">
                      {item.userEmail}
                    </p>
                  </td>

                  <td className="px-4 py-6">
                    <h5 className="text-base font-medium text-body-color dark:text-dark-6">
                      {item.productName}
                    </h5>
                    <p className="text-sm text-body-color dark:text-dark-6">
                      {item.size}
                    </p>
                  </td>

                  <td className="px-4 py-6">
                    <p className="text-base text-body-color dark:text-dark-6">
                      {item.orderNumber}
                    </p>
                  </td>
                  <td className="px-4 py-6">
                    <p className="text-base text-body-color dark:text-dark-6">
                      {item.date}
                    </p>
                  </td>
                  <td className="px-4 py-6">
                    <p
                      className={`inline-flex items-center justify-center rounded-full px-[14px] py-1 text-sm font-medium ${item.status === "Pending" && "bg-yellow-light-4 text-yellow-dark-2"} ${item.status === "Cancelled" && "bg-red-light-5 text-red-dark"} ${item.status === "Shipped" && "bg-green-light-6 text-green-dark"}`}
                    >
                      {item.status}
                    </p>
                  </td>
                  <td className="py-6 pl-4 pr-9 text-right">
                    {item.status === "Pending" && (
                      <button className="inline-flex items-center justify-center rounded-md border border-primary px-5 py-2 text-base font-medium text-primary hover:bg-primary hover:text-white">
                        Confirm Order
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ProductTable;
