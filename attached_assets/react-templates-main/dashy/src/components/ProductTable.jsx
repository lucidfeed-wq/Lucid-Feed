import DropdownTwo from "./Dropdowns/DropdownTwo.jsx";
import imageOne from "../assets/images/prodcuts-list/image-01.jpg";
import imageTwo from "../assets/images/prodcuts-list/image-02.jpg";
import imageThree from "../assets/images/prodcuts-list/image-03.jpg";

const tableDataList = [
  {
    image: imageOne,
    name: "Apple Macbook M1 16'' 2022",
    size: "1TB SSD, 16GB Ram",
    status: "Shipped",
    price: 2999,
  },
  {
    image: imageTwo,
    name: "Apple Watch Series 7",
    size: "50m water resistant",
    status: "Processing",
    price: 400,
  },
  {
    image: imageThree,
    name: "Google Pixel 5",
    size: "8GB Ram 256GB Rom",
    status: "Shipped",
    price: 800,
  },
];

const ProductTable = () => {
  return (
    <>
      <div className="w-full rounded-lg border border-stroke bg-white py-7 dark:border-dark-3 dark:bg-dark-2">
        <div className="justify-between px-7 sm:flex">
          <h3 className="mb-8 text-2xl font-medium text-dark dark:text-white md:text-[28px]">
            Products List
          </h3>

          <div className="mb-8">
            <DropdownTwo />
          </div>
        </div>

        <div className="w-full overflow-x-auto">
          <table className="table w-full">
            <tbody>
              {tableDataList.map((item, index) => (
                <tr key={index}>
                  <td className="min-w-[375px] py-[15px] pl-7 pr-3">
                    <div className="flex items-center">
                      <div className="mr-[18px] h-[70px] w-full max-w-[70px] rounded-sm">
                        <img src={item.image} alt="product" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-dark dark:text-white">
                          {item.name}
                        </h3>
                        <p className="text-base text-body-color dark:text-dark-6">
                          {item.size}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="min-w-[130px] py-[18px]">
                    <span
                      className={`rounded-full px-4 py-1 text-sm font-medium ${item.status === "Shipped" && "text-success bg-[#D7F8E4]"} ${item.status === "Processing" && "bg-[#FCF3CB] text-[#9F531F]"}`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td className="min-w-[150px] py-[18px] pr-7 text-right">
                    <p className="text-lg font-semibold text-dark dark:text-white">
                      $ {item.price}
                    </p>
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
