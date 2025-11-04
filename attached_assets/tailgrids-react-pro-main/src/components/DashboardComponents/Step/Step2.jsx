import React from "react";

const Step2 = () => {
  return (
    <section className="overflow-hidden py-20 lg:py-[120px]">
      <div className="mx-auto px-4 sm:container">
        <div className="mx-auto w-full max-w-[920px]">
          <SingleStep
            done
            number="1"
            name="Step 1"
            title="Step one title"
            details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at sagittis sapien, eget sodales arcu. Aenean arcu velit, tincidunt ut enim vitae, scelerisque tempus lorem."
          />
          <SingleStep
            ongoing
            number="2"
            name="Step 2"
            title="Step two title"
            details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at sagittis sapien, eget sodales arcu. Aenean arcu velit, tincidunt ut enim vitae, scelerisque tempus lorem."
          />
          <SingleStep
            number="3"
            name="Step 3"
            title="Step three title"
            details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at sagittis sapien, eget sodales arcu. Aenean arcu velit, tincidunt ut enim vitae, scelerisque tempus lorem."
          />
        </div>
      </div>
    </section>
  );
};

export default Step2;

const SingleStep = ({ number, title, details, done, ongoing }) => {
  return (
    <div className="group relative flex pb-16 md:pb-[90px]">
      <span
        style={{ height: "calc(100% - 70px)" }}
        className={`${
          done && "border-primary"
        } absolute left-6 top-[60px] w-[2px] border-l-2 border-dashed border-[#e7e7e7] group-last:border-none`}
      ></span>
      <div
        className={`${
          (done && "border-primary bg-primary text-white") ||
          (ongoing && "border-primary text-primary")
        } mr-4 flex h-11 w-full max-w-[44px] items-center justify-center rounded-full border border-[#e7e7e7] bg-gray text-base font-semibold text-black md:mr-9 md:h-[50px] md:max-w-[50px] md:text-xl`}
      >
        {number}
      </div>
      <div className="w-full">
        <h3 className="mb-[10px] text-lg font-semibold text-black md:text-2xl">
          {title}
        </h3>
        <p className="text-base font-medium text-body-color">{details}</p>
      </div>
    </div>
  );
};
