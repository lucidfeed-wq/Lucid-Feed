import React from "react";

const Calender4 = () => {
  return (
    <section className="relative z-10 bg-gray-2 py-[120px] dark:bg-dark">
      <div className="mx-auto px-4 lg:container">
        <div className="mx-auto flex w-full max-w-[380px] flex-col rounded-lg bg-white px-4 py-6 shadow-1 dark:bg-dark-2 dark:shadow-box-dark sm:px-6 sm:py-[30px]">
          <div className="flex items-center justify-between pb-2">
            <p className="text-base font-medium text-dark dark:text-white">
              December 2025
            </p>
            <div className="flex items-center justify-end space-x-[10px]">
              <span className="flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-sm border-[.5px] border-stroke bg-gray-2 text-dark hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:bg-dark dark:text-white">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current"
                >
                  <path d="M10.825 14.325C10.675 14.325 10.525 14.275 10.425 14.15L4.77501 8.40002C4.55001 8.17502 4.55001 7.82502 4.77501 7.60002L10.425 1.85002C10.65 1.62502 11 1.62502 11.225 1.85002C11.45 2.07502 11.45 2.42502 11.225 2.65002L5.97501 8.00003L11.25 13.35C11.475 13.575 11.475 13.925 11.25 14.15C11.1 14.25 10.975 14.325 10.825 14.325Z" />
                </svg>
              </span>
              <span className="flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-sm border-[.5px] border-stroke bg-gray-2 text-dark hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:bg-dark dark:text-white">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current"
                >
                  <path d="M5.17501 14.325C5.02501 14.325 4.90001 14.275 4.77501 14.175C4.55001 13.95 4.55001 13.6 4.77501 13.375L10.025 8.00003L4.77501 2.65002C4.55001 2.42502 4.55001 2.07502 4.77501 1.85002C5.00001 1.62502 5.35001 1.62502 5.57501 1.85002L11.225 7.60002C11.45 7.82502 11.45 8.17502 11.225 8.40002L5.57501 14.15C5.47501 14.25 5.32501 14.325 5.17501 14.325Z" />
                </svg>
              </span>
            </div>
          </div>

          <WeekRow>
            <Week name="Mo" />
            <Week name="Tu" />
            <Week name="We" />
            <Week name="Th" />
            <Week name="Fr" />
            <Week name="Sa" />
            <Week name="Su" />
          </WeekRow>
          <DayRow>
            <Day number="" />
            <Day number="" />
            <Day number="01" />
            <Day number="02" />
            <Day number="03" />
            <Day number="04" />
            <Day number="05" />
          </DayRow>
          <DayRow>
            <Day number="06" />
            <Day number="07" active />
            <Day number="08" />
            <Day number="09" />
            <Day number="10" />
            <Day number="11" />
            <Day number="12" />
          </DayRow>
          <DayRow>
            <Day number="13" />
            <Day number="14" />
            <Day number="15" />
            <Day number="16" />
            <Day number="17" />
            <Day number="18" />
            <Day number="19" />
          </DayRow>
          <DayRow>
            <Day number="20" />
            <Day number="21" />
            <Day number="22" />
            <Day number="23" />
            <Day number="24" />
            <Day number="25" />
            <Day number="26" />
          </DayRow>
          <DayRow>
            <Day number="27" />
            <Day number="28" />
            <Day number="29" />
            <Day number="30" />
            <Day number="31" />
            <Day number="" />
            <Day number="" />
          </DayRow>

          <div className="flex items-center justify-center space-x-3 pt-4 sm:space-x-4">
            <button className="h-[37px] rounded-sm border border-stroke bg-transparent px-5 text-sm font-medium text-body-color hover:border-primary focus:border-primary dark:border-dark-3 dark:text-dark-6">
              10/09/2025
            </button>
            <button className="h-[37px] rounded-sm border border-stroke bg-transparent px-5 text-sm font-medium text-body-color hover:border-primary focus:border-primary dark:border-dark-3 dark:text-dark-6">
              25/09/2025
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calender4;

const WeekRow = ({ children }) => {
  return (
    <div className="flex justify-between pb-2 pt-4 text-sm font-normal capitalize text-body-color dark:text-dark-6">
      {children}
    </div>
  );
};
const Week = ({ name }) => {
  return (
    <span className="flex h-[38px] w-[38px] items-center justify-center">
      {name}
    </span>
  );
};

const DayRow = ({ children }) => {
  return (
    <div className="flex justify-between pb-2 text-sm font-medium text-dark dark:text-white">
      {children}
    </div>
  );
};
const Day = ({ active, number }) => {
  return (
    <span
      className={`${
        active && "border-primary bg-primary! text-white"
      } flex h-[38px] w-[38px] items-center justify-center rounded-full hover:bg-gray dark:hover:bg-dark`}
    >
      {number}
    </span>
  );
};
