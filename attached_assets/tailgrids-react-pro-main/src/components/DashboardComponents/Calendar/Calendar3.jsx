import React from "react";

const Calender3 = () => {
  return (
    <>
      <section className="relative z-10 bg-gray-2 py-[120px] dark:bg-dark">
        <div className="mx-auto px-4 lg:container">
          <div className="relative mx-auto mb-5 w-full max-w-[370px]">
            <input
              type="date"
              className="custom-input-date h-[50px] w-full appearance-none rounded-md border border-stroke bg-white px-5 text-secondary-color outline-hidden focus:border-primary dark:border-dark-3 dark:bg-dark-2 dark:text-dark-6"
            />

            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary-color dark:text-dark-6">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current stroke-current"
              >
                <path d="M12.15 2.64999V3.14999H12.65H14C14.5843 3.14999 15.075 3.63644 15.075 4.19999V12.9C15.075 13.4937 14.579 13.975 14 13.975H2C1.40628 13.975 0.925003 13.479 0.925003 12.9V4.19999C0.925003 3.60627 1.42098 3.12499 2 3.12499H3.325H3.825V2.62499V2.09999C3.825 2.069 3.8356 2.05275 3.84418 2.04417C3.85276 2.03559 3.86901 2.02499 3.9 2.02499C3.9167 2.02499 3.93397 2.03111 3.95059 2.04823C3.96925 2.06746 3.975 2.08852 3.975 2.09999V2.62499V3.12499H4.475H11.5H12V2.62499V2.09999C12 2.069 12.0106 2.05275 12.0192 2.04417C12.0278 2.03559 12.044 2.02499 12.075 2.02499C12.0917 2.02499 12.109 2.03111 12.1256 2.04823C12.1443 2.06746 12.15 2.08852 12.15 2.09999V2.64999ZM3.85 3.77499V3.27499H3.35H2C1.75452 3.27499 1.51267 3.36351 1.33306 3.5506C1.15468 3.73642 1.075 3.98014 1.075 4.22499V5.87499V6.37499H1.575H14.45H14.95V5.87499V4.22499C14.95 3.69885 14.5261 3.27499 14 3.27499H12.725H12.225V3.77499V4.27499C12.225 4.30599 12.2144 4.32223 12.2058 4.33081C12.1972 4.3394 12.181 4.34999 12.15 4.34999C12.1333 4.34999 12.116 4.34387 12.0994 4.32676C12.0807 4.30752 12.075 4.28646 12.075 4.27499V3.77499V3.27499H11.575H4.5H4V3.77499V4.27499C4 4.30599 3.9894 4.32223 3.98082 4.33082C3.97224 4.3394 3.956 4.34999 3.925 4.34999C3.9083 4.34999 3.89103 4.34387 3.87442 4.32676C3.85575 4.30752 3.85 4.28646 3.85 4.27499V3.77499ZM1.55 6.47499H1.05V6.97499V12.875C1.05 13.4011 1.47386 13.825 2 13.825H14C14.4664 13.825 14.9675 13.4732 14.925 12.8792V6.97499V6.47499H14.425H1.55Z" />
                <path d="M6.90001 8.22499V8.17499H6.95001V8.22499H6.90001Z" />
                <path d="M9.475 7.67499H8.925C8.775 7.67499 8.675 7.77499 8.675 7.92499V8.47499C8.675 8.62499 8.775 8.72499 8.925 8.72499H9.475C9.625 8.72499 9.725 8.62499 9.725 8.47499V7.92499C9.725 7.77499 9.625 7.67499 9.475 7.67499Z" />
                <path d="M11.75 7.67499H11.2C11.05 7.67499 10.95 7.77499 10.95 7.92499V8.47499C10.95 8.62499 11.05 8.72499 11.2 8.72499H11.75C11.9 8.72499 12 8.62499 12 8.47499V7.92499C12 7.77499 11.9 7.67499 11.75 7.67499Z" />
                <path d="M4.8 9.60001H4.25C4.1 9.60001 4 9.70001 4 9.85001V10.4C4 10.55 4.1 10.65 4.25 10.65H4.8C4.95 10.65 5.05 10.55 5.05 10.4V9.85001C5.05 9.70001 4.925 9.60001 4.8 9.60001Z" />
                <path d="M7.20001 9.60001H6.65001C6.50001 9.60001 6.40001 9.70001 6.40001 9.85001V10.4C6.40001 10.55 6.50001 10.65 6.65001 10.65H7.20001C7.35001 10.65 7.45001 10.55 7.45001 10.4V9.85001C7.45001 9.70001 7.32501 9.60001 7.20001 9.60001Z" />
                <path d="M9.475 9.60001H8.925C8.775 9.60001 8.675 9.70001 8.675 9.85001V10.4C8.675 10.55 8.775 10.65 8.925 10.65H9.475C9.625 10.65 9.725 10.55 9.725 10.4V9.85001C9.725 9.70001 9.625 9.60001 9.475 9.60001Z" />
                <path d="M11.75 9.60001H11.2C11.05 9.60001 10.95 9.70001 10.95 9.85001V10.4C10.95 10.55 11.05 10.65 11.2 10.65H11.75C11.9 10.65 12 10.55 12 10.4V9.85001C12 9.70001 11.9 9.60001 11.75 9.60001Z" />
                <path d="M4.8 11.525H4.25C4.1 11.525 4 11.625 4 11.775V12.325C4 12.475 4.1 12.575 4.25 12.575H4.8C4.95 12.575 5.05 12.475 5.05 12.325V11.775C5.05 11.625 4.925 11.525 4.8 11.525Z" />
                <path d="M7.20001 11.525H6.65001C6.50001 11.525 6.40001 11.625 6.40001 11.775V12.325C6.40001 12.475 6.50001 12.575 6.65001 12.575H7.20001C7.35001 12.575 7.45001 12.475 7.45001 12.325V11.775C7.45001 11.625 7.32501 11.525 7.20001 11.525Z" />
                <path d="M9.475 11.525H8.925C8.775 11.525 8.675 11.625 8.675 11.775V12.325C8.675 12.475 8.775 12.575 8.925 12.575H9.475C9.625 12.575 9.725 12.475 9.725 12.325V11.775C9.725 11.625 9.625 11.525 9.475 11.525Z" />
              </svg>
            </span>
          </div>
          <div className="relative mx-auto w-full max-w-[370px] rounded-sm border border-stroke bg-white p-6 shadow-testimonial-6 dark:border-dark-3 dark:bg-dark-2 dark:shadow-box-dark sm:p-[30px]">
            <div className="mb-3 flex items-center space-x-5">
              <div className="relative inline-flex">
                <select
                  name=""
                  id=""
                  className="appearance-none bg-transparent pr-5 text-base font-medium text-dark outline-hidden dark:text-white"
                >
                  <option value="" className="dark:bg-dark-2">
                    January
                  </option>
                  <option value="" className="dark:bg-dark-2">
                    February
                  </option>
                  <option value="" className="dark:bg-dark-2">
                    March
                  </option>
                  <option value="" className="dark:bg-dark-2">
                    April
                  </option>
                  <option value="" className="dark:bg-dark-2">
                    May
                  </option>
                  <option value="" className="dark:bg-dark-2">
                    Jun
                  </option>
                  <option value="" className="dark:bg-dark-2">
                    July
                  </option>
                  <option value="" className="dark:bg-dark-2">
                    August
                  </option>
                  <option value="" className="dark:bg-dark-2">
                    September
                  </option>
                  <option value="" className="dark:bg-dark-2">
                    October
                  </option>
                  <option value="" className="dark:bg-dark-2">
                    November
                  </option>
                  <option value="" className="dark:bg-dark-2">
                    December
                  </option>
                </select>
                <span className="absolute right-0 top-1/2 -translate-y-1/2 text-dark dark:text-white">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current"
                  >
                    <path d="M9.00001 12.825C8.83126 12.825 8.69064 12.7687 8.55001 12.6562L2.08126 6.29999C1.82814 6.04687 1.82814 5.65312 2.08126 5.39999C2.33439 5.14687 2.72814 5.14687 2.98126 5.39999L9.00001 11.2781L15.0188 5.34374C15.2719 5.09062 15.6656 5.09062 15.9188 5.34374C16.1719 5.59687 16.1719 5.99062 15.9188 6.24374L9.45001 12.6C9.30939 12.7406 9.16876 12.825 9.00001 12.825Z" />
                  </svg>
                </span>
              </div>
              <div className="relative inline-flex">
                <select
                  name=""
                  id=""
                  className="appearance-none bg-transparent pr-7 text-base font-medium text-dark outline-hidden dark:text-white"
                >
                  <option value="" className="dark:bg-dark-2">
                    2023
                  </option>
                  <option value="" className="dark:bg-dark-2">
                    2024
                  </option>
                  <option value="" className="dark:bg-dark-2">
                    2025
                  </option>
                  <option value="" className="dark:bg-dark-2">
                    2026
                  </option>
                  <option value="" className="dark:bg-dark-2">
                    2027
                  </option>
                  <option value="" className="dark:bg-dark-2">
                    2028
                  </option>
                  <option value="" className="dark:bg-dark-2">
                    2029
                  </option>
                  <option value="" className="dark:bg-dark-2">
                    2030
                  </option>
                </select>
                <span className="absolute right-0 top-1/2 -translate-y-1/2 text-dark dark:text-white">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current"
                  >
                    <path d="M9.00001 12.825C8.83126 12.825 8.69064 12.7687 8.55001 12.6562L2.08126 6.29999C1.82814 6.04687 1.82814 5.65312 2.08126 5.39999C2.33439 5.14687 2.72814 5.14687 2.98126 5.39999L9.00001 11.2781L15.0188 5.34374C15.2719 5.09062 15.6656 5.09062 15.9188 5.34374C16.1719 5.59687 16.1719 5.99062 15.9188 6.24374L9.45001 12.6C9.30939 12.7406 9.16876 12.825 9.00001 12.825Z" />
                  </svg>
                </span>
              </div>
            </div>
            <table className="border-collapse">
              <WeekRow>
                <Week name="Sun" />
                <Week name="Mon" />
                <Week name="Tue" />
                <Week name="Wed" />
                <Week name="Thu" />
                <Week name="Fri" />
                <Week name="Sat" />
              </WeekRow>
              <tbody>
                <DayRow>
                  <Day number="01" />
                  <Day number="02" />
                  <Day number="03" />
                  <Day number="04" />
                  <Day number="05" />
                  <Day number="06" />
                  <Day number="07" active />
                </DayRow>
                <DayRow>
                  <Day number="08" />
                  <Day number="09" />
                  <Day number="10" />
                  <Day number="11" />
                  <Day number="12" />
                  <Day number="13" />
                  <Day number="14" />
                </DayRow>
                <DayRow>
                  <Day number="15" />
                  <Day number="16" />
                  <Day number="17" />
                  <Day number="18" />
                  <Day number="19" />
                  <Day number="20" />
                  <Day number="21" />
                </DayRow>
                <DayRow>
                  <Day number="22" />
                  <Day number="23" />
                  <Day number="24" />
                  <Day number="25" />
                  <Day number="26" />
                  <Day number="27" />
                  <Day number="28" />
                </DayRow>
                <DayRow>
                  <Day number="29" />
                  <Day number="30" />
                  <Day number="31" />
                </DayRow>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default Calender3;

const WeekRow = ({ children }) => {
  return (
    <thead>
      <tr className="text-sm font-normal text-body-color dark:text-dark-6">
        {children}
      </tr>
    </thead>
  );
};
const Week = ({ name }) => {
  return <th className="w-11 py-3">{name}</th>;
};

const DayRow = ({ children }) => {
  return <tr>{children}</tr>;
};
const Day = ({ active, number }) => {
  return (
    <td className="max-w-11 h-11 border border-stroke p-[3px] dark:border-dark-3">
      <span className="text-dark dark:text-white"></span>
      <span
        className={`${
          active ? "bg-primary text-white" : "text-dark dark:text-white"
        } max-w-9 mx-auto flex h-9 items-center justify-center text-sm font-medium`}
      >
        {number}
      </span>
    </td>
  );
};
