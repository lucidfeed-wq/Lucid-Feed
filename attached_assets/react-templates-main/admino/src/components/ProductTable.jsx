import DropdownTwo from "./Dropdowns/DropdownTwo.jsx";
import imageOne from "../assets/images/tables/table-12/image-01.jpg";
import imageTwo from "../assets/images/tables/table-12/image-02.jpg";
import imageThree from "../assets/images/tables/table-12/image-03.jpg";
import imageFour from "../assets/images/tables/table-12/image-04.jpg";

const tableDataList = [
  {
    image: imageOne,
    name: "Apple Watch Series 7",
    category: "Electronics",
    price: 269,
    sold: 22,
    profit: 45,
  },
  {
    image: imageTwo,
    name: "Macbook Pro M1",
    category: "Electronics",
    price: 546,
    sold: 34,
    profit: 125,
  },
  {
    image: imageThree,
    name: "Dell Inspiron 15",
    category: "Electronics",
    price: 444,
    sold: 64,
    profit: 247,
  },
  {
    image: imageFour,
    name: "HP Probook 450",
    category: "Electronics",
    price: 499,
    sold: 72,
    profit: 103,
  },
];

const ProductTable = () => {
  return (
    <>
      <div className="w-full rounded-lg border border-stroke bg-white dark:border-dark-3 dark:bg-dark-2">
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="border-b border-stroke dark:border-dark-3">
                <th className="min-w-[300px] py-5 pl-8 pr-4">
                  <p className="text-left text-base font-medium text-dark dark:text-white">
                    Product Name
                  </p>
                </th>
                <th className="min-w-[90px] px-4 py-5">
                  <p className="text-left text-base font-medium text-dark dark:text-white">
                    Category
                  </p>
                </th>
                <th className="min-w-[90px] px-4 py-5">
                  <p className="text-left text-base font-medium text-dark dark:text-white">
                    Price
                  </p>
                </th>
                <th className="min-w-[90px] px-4 py-5">
                  <p className="text-left text-base font-medium text-dark dark:text-white">
                    Sold
                  </p>
                </th>
                <th className="min-w-[90px] py-5 pl-4 pr-8">
                  <p className="text-left text-base font-medium text-dark dark:text-white">
                    Profit
                  </p>
                </th>
              </tr>
            </thead>

            <tbody>
              {tableDataList.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-stroke last-of-type:border-none dark:border-dark-3"
                >
                  <td className="py-[18px] pl-6 pr-3">
                    <div className="flex items-center">
                      <div className="relative">
                        <input
                          type="checkbox"
                          name="tableCheckbox"
                          id={`checkbox-${index}`}
                          className="tableCheckbox sr-only"
                        />

                        <label
                          htmlFor={`checkbox-${index}`}
                          className="flex cursor-pointer items-center text-base text-body-color dark:text-dark-6"
                        >
                          <span className="icon-box mr-5 flex h-5 w-5 items-center justify-center rounded-[3px] border-[.5px] border-stroke bg-transparent text-white dark:border-dark-3">
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 10 10"
                              className="icon opacity-0"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M8.62796 2.20602C8.79068 2.36874 8.79068 2.63256 8.62796 2.79528L4.04463 7.37861C3.88191 7.54133 3.61809 7.54133 3.45537 7.37861L1.37204 5.29528C1.20932 5.13256 1.20932 4.86874 1.37204 4.70602C1.53476 4.5433 1.79858 4.5433 1.96129 4.70602L3.75 6.49473L8.03871 2.20602C8.20142 2.0433 8.46524 2.0433 8.62796 2.20602Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                        </label>
                      </div>

                      <div className="flex items-center">
                        <img
                          src={item.image}
                          alt="product"
                          className="mr-4 h-[50px] w-[60px] rounded-sm object-cover object-center"
                        />
                        <p className="text-base text-body-color dark:text-dark-6">
                          {item.name}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-[18px]">
                    <p className="text-base text-body-color dark:text-dark-6">
                      {item.category}
                    </p>
                  </td>
                  <td className="px-4 py-[18px]">
                    <p className="text-base text-body-color dark:text-dark-6">
                      ${item.price}
                    </p>
                  </td>
                  <td className="px-4 py-[18px]">
                    <p className="text-base text-body-color dark:text-dark-6">
                      {item.sold}
                    </p>
                  </td>
                  <td className="px-4 py-[18px]">
                    <p className="text-base text-body-color dark:text-dark-6">
                      ${item.profit}
                    </p>
                  </td>
                  <td className="py-[18px] pl-4 pr-6">
                    <DropdownTwo />
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
