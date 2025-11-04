import * as noUiSlider from "nouislider";
import "nouislider/dist/nouislider.css";
import { useEffect } from "react";

const RangeSlider = () => {
  useEffect(() => {
    const stepsSlider = document.getElementById("slider-range");
    const input0 = document.getElementById("minAmount");
    const input1 = document.getElementById("maxAmount");
    const inputs = [input0, input1];
    noUiSlider.create(stepsSlider, {
      start: [200, 1200],
      connect: true,
      step: 1,
      range: {
        min: [0],
        max: 2000,
      },
    });

    stepsSlider.noUiSlider.on("update", function (values, handle) {
      inputs[handle].innerHTML = values[handle];
    });

    return () => {
      stepsSlider.noUiSlider.destroy();
    };
  }, []);

  return (
    <>
      <div className="mt-6 w-full">
        <div className="priceSlideTwo" id="pricingOne">
          <div className="price-range">
            <div className="price-amount flex items-center justify-between">
              <div className="amount-input w-1/2">
                <label className="mb-1 block text-xs text-body-color dark:text-dark-6">
                  Minimum Price
                </label>
                <span
                  id="minAmount"
                  className="text-block w-full rounded-sm border-[.3px] border-stroke bg-gray-1 px-3 py-1 text-center text-sm font-semibold text-dark outline-hidden dark:border-dark-3 dark:bg-dark-4 dark:text-white"
                >
                  200.00
                </span>
              </div>
              <div className="amount-input w-1/2 text-right">
                <label className="mb-1 block text-xs text-body-color dark:text-dark-6">
                  Maximum Price
                </label>
                <span
                  id="maxAmount"
                  className="text-block w-full rounded-sm border-[.3px] border-stroke bg-gray-1 px-3 py-1 text-center text-sm font-semibold text-dark outline-hidden dark:border-dark-3 dark:bg-dark-4 dark:text-white"
                >
                  1200.00
                </span>
              </div>
            </div>
            <div id="slider-range" className="slider-range"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RangeSlider;
