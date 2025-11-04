import imageOne from "../../assets/ecom-images/products-details/details-02/big-image-01.jpg";
import imageTwo from "../../assets/ecom-images/products-details/details-02/big-image-02.jpg";
import imageThree from "../../assets/ecom-images/products-details/details-02/big-image-03.jpg";
import imageFour from "../../assets/ecom-images/products-details/details-02/big-image-04.jpg";
import thumbOne from "../../assets/ecom-images/products-details/details-02/thumbnail-01.jpg";
import thumbTwo from "../../assets/ecom-images/products-details/details-02/thumbnail-02.jpg";
import thumbThree from "../../assets/ecom-images/products-details/details-02/thumbnail-03.jpg";
import thumbFour from "../../assets/ecom-images/products-details/details-02/thumbnail-04.jpg";
import { useState, useRef, useEffect } from "react";

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
  {
    image: imageFour,
    thumbnail: thumbFour,
  },
];

const ProductTab = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const handleTab = (index) => {
    setActiveTab(index);
  };

  const handleModalOpen = () => {
    setModalOpen(!modalOpen);
  };

  const tabRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (tabRef.current && !tabRef.current.contains(event.target)) {
        setNavbarOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="w-full px-4 lg:w-1/2">
        <div className="mb-12 lg:mr-5 lg:mb-0 xl:mr-10">
          <div className="relative mb-5 overflow-hidden">
            {productTabItems.map(
              (product, productIndex) =>
                activeTab === productIndex && (
                  <div key={productIndex}>
                    <button
                      onClick={handleModalOpen}
                      className="text-dark shadow-card drop-shadow-three dark:bg-dark-2 absolute top-6 right-6 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-white dark:text-white"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-current"
                      >
                        <g clipPath="url(#clip0_1032_24424)">
                          <path d="M22.8374 21.6375L16.1624 14.9625C18.9374 11.5875 18.7499 6.56252 15.5999 3.41252C13.9874 1.80002 11.8124 0.900024 9.5249 0.900024C7.2374 0.900024 5.0624 1.80002 3.4499 3.41252C0.112402 6.75002 0.112402 12.225 3.4499 15.5625C5.0624 17.175 7.2374 18.075 9.5249 18.075C11.5499 18.075 13.4249 17.4 14.9624 16.125L21.6374 22.8C21.7874 22.95 22.0124 23.0625 22.2374 23.0625C22.4624 23.0625 22.6874 22.9875 22.8374 22.8C23.1749 22.5 23.1749 21.975 22.8374 21.6375ZM4.6499 14.4C1.9499 11.7 1.9499 7.31252 4.6499 4.61252C5.9624 3.30002 7.6874 2.58752 9.5249 2.58752C11.3624 2.58752 13.0874 3.30002 14.3999 4.61252C17.0999 7.31252 17.0999 11.7 14.3999 14.4C13.0874 15.7125 11.3624 16.425 9.5249 16.425C7.6874 16.425 5.9249 15.7125 4.6499 14.4Z" />
                          <path d="M11.7375 8.66248H10.35V7.27498C10.35 6.82498 9.975 6.41248 9.4875 6.41248C9 6.41248 8.625 6.78748 8.625 7.27498V8.66248H7.2375C6.7875 8.66248 6.375 9.03748 6.375 9.52498C6.375 10.0125 6.75 10.3875 7.2375 10.3875H8.625V11.775C8.625 12.225 9 12.6 9.4875 12.6C9.975 12.6 10.35 12.225 10.35 11.775V10.3875H11.7375C12.1875 10.3875 12.6 10.0125 12.6 9.52498C12.6 9.03748 12.1875 8.66248 11.7375 8.66248Z" />
                        </g>
                        <defs>
                          <clipPath id="clip0_1032_24424">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                    <img
                      src={product.image}
                      alt="product"
                      className="w-full rounded-md"
                    />
                  </div>
                ),
            )}
          </div>

          <div className="-mx-[10px] flex items-center justify-between">
            {productTabItems.map((tab, tabIndex) => (
              <div key={tabIndex} className="w-1/4 px-[10px]">
                <button
                  onClick={() => handleTab(tabIndex)}
                  className={`w-full overflow-hidden rounded-md border-2 ${activeTab === tabIndex ? "border-primary" : "border-transparent"}`}
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

        {productTabItems.map(
          (product, productIndex) =>
            activeTab === productIndex && (
              <div key={productIndex}>
                {modalOpen && (
                  <div className="fixed top-0 left-0 z-20 flex h-full w-full items-center justify-center bg-black/50">
                    <div className="mx-auto inline-block w-4/5 sm:w-3/4 lg:w-1/2">
                      <div ref={tabRef}>
                        <img
                          src={product.image}
                          alt="product"
                          className="w-full rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ),
        )}
      </div>
    </>
  );
};

export default ProductTab;
