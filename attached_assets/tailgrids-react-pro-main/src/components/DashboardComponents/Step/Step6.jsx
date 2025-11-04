import React from "react";

const Step6 = () => {
  return (
    <section className="overflow-hidden py-20 lg:py-[120px]">
      <div className="mx-auto px-4 sm:container">
        <div className="flex flex-wrap gap-[30px]">
          <SingleStep
            done
            number="Step 1"
            name="Credit line Assignment"
            status="Completed"
          />
          <SingleStep
            inProgress
            number="Step 2"
            name="Bank Acceptance"
            status="In Progress"
          />
          <SingleStep number="Step 3" name="Bank Acceptance" status="Pending" />
        </div>
      </div>
    </section>
  );
};

export default Step6;

const SingleStep = ({ number, name, status, done, inProgress }) => {
  return (
    <div className="w-full max-w-[210px]">
      <div
        className={`${
          (done && "border-primary bg-primary") ||
          (inProgress && "border-primary bg-gray") ||
          "border-[#e7e7e7] bg-gray"
        } rounded-lg border p-[18px]`}
      >
        <div
          className={`${
            (done && "bg-white text-primary") ||
            (inProgress && "bg-primary text-white") ||
            "text-body-color"
          } mb-[10px] flex h-[30px] w-[30px] items-center justify-center rounded-full border`}
        >
          <svg
            className="fill-current"
            width={18}
            height={18}
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.5303 3.96967C15.8232 4.26256 15.8232 4.73744 15.5303 5.03033L7.28033 13.2803C6.98744 13.5732 6.51256 13.5732 6.21967 13.2803L2.46967 9.53033C2.17678 9.23744 2.17678 8.76256 2.46967 8.46967C2.76256 8.17678 3.23744 8.17678 3.53033 8.46967L6.75 11.6893L14.4697 3.96967C14.7626 3.67678 15.2374 3.67678 15.5303 3.96967Z"
              fill=""
            />
          </svg>
        </div>
        <span
          className={`${
            (done && "text-white") ||
            (inProgress && "text-black") ||
            "text-body-color"
          } mb-1 block text-xs uppercase`}
        >
          {number}
        </span>
        <h3
          className={`${
            (done && "text-white") ||
            (inProgress && "text-black") ||
            "text-body-color"
          } mb-[10px] text-sm font-semibold`}
        >
          {name}
        </h3>
        <span
          className={`${
            (done && "bg-white text-primary") ||
            (inProgress && "bg-primary text-white") ||
            "bg-body-color text-white"
          } inline-block rounded px-2 py-1 text-xs font-medium`}
        >
          {status}
        </span>
      </div>
    </div>
  );
};
