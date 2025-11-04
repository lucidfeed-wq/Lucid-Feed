import imageOne from "../../assets/ecom-images/products-details/details-01/big-image-01.jpg";
import imageTwo from "../../assets/ecom-images/products-details/details-01/big-image-02.jpg";
import imageThree from "../../assets/ecom-images/products-details/details-01/big-image-03.jpg";
import thumbOne from "../../assets/ecom-images/products-details/details-01/thumbnail-01.jpg";
import thumbTwo from "../../assets/ecom-images/products-details/details-01/thumbnail-02.jpg";
import thumbThree from "../../assets/ecom-images/products-details/details-01/thumbnail-03.jpg";
import { useState } from "react";

const productTabItems = [
  {
    image: imageOne,
    thumbnail: thumbOne,
  },
  {
    image: imageTwo,
    thumbnail: thumbTwo,
  },
  {
    image: imageThree,
    thumbnail: thumbThree,
  },
];

const ProductTab = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTab = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      <div className="mb-12 lg:mb-0 lg:mr-5 xl:mr-10">
        <div className="mb-8 overflow-hidden rounded-lg">
          {productTabItems.map(
            (product, productIndex) =>
              activeTab === productIndex && (
                <img
                  key={productIndex}
                  src={product.image}
                  alt="product"
                  className="w-full"
                />
              ),
          )}
        </div>

        <div className="-mx-4 flex items-center justify-between">
          {productTabItems.map((tab, tabIndex) => (
            <div key={tabIndex} className="w-1/3 px-4">
              <button
                onClick={() => handleTab(tabIndex)}
                className={`w-full overflow-hidden rounded-lg ${activeTab === tabIndex && "opacity-60"}`}
              >
                <img
                  src={tab.thumbnail}
                  alt="thumbnail-01"
                  className="w-full"
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductTab;
