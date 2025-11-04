import React from "react";

const Calender1 = () => {
  return (
    <section className="relative z-10 bg-gray-2 py-[120px] dark:bg-dark">
      <div className="mx-auto px-4 lg:container">
        <div className="mx-auto flex w-full max-w-[510px] flex-col rounded-xl bg-white p-4 shadow-four dark:bg-dark-2 dark:shadow-box-dark sm:p-[30px]">
          <div className="flex items-center justify-between pb-4">
            <div className="flex h-[38px] w-[38px] cursor-pointer items-center justify-center rounded-[7px] border-[.5px] border-stroke bg-gray-2 text-dark hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:bg-dark dark:text-white sm:h-[46px] sm:w-[46px]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current"
              >
                <path d="M16.2375 21.4875C16.0125 21.4875 15.7875 21.4125 15.6375 21.225L7.16249 12.6C6.82499 12.2625 6.82499 11.7375 7.16249 11.4L15.6375 2.77498C15.975 2.43748 16.5 2.43748 16.8375 2.77498C17.175 3.11248 17.175 3.63748 16.8375 3.97498L8.96249 12L16.875 20.025C17.2125 20.3625 17.2125 20.8875 16.875 21.225C16.65 21.375 16.4625 21.4875 16.2375 21.4875Z" />
              </svg>
            </div>
            <span className="text-xl font-medium capitalize text-dark dark:text-white">
              january - 2022
            </span>
            <div className="flex h-[38px] w-[38px] cursor-pointer items-center justify-center rounded-[7px] border-[.5px] border-stroke bg-gray-2 text-dark hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:bg-dark dark:text-white sm:h-[46px] sm:w-[46px]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current"
              >
                <path d="M7.7625 21.4875C7.5375 21.4875 7.35 21.4125 7.1625 21.2625C6.825 20.925 6.825 20.4 7.1625 20.0625L15.0375 12L7.1625 3.97498C6.825 3.63748 6.825 3.11248 7.1625 2.77498C7.5 2.43748 8.025 2.43748 8.3625 2.77498L16.8375 11.4C17.175 11.7375 17.175 12.2625 16.8375 12.6L8.3625 21.225C8.2125 21.375 7.9875 21.4875 7.7625 21.4875Z" />
              </svg>
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
            <Day number="30" otherMonth />
            <Day number="31" otherMonth />
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
            <Day number="01" otherMonth />
            <Day number="02" otherMonth />
          </DayRow>

          <div className="flex items-center space-x-3 pt-4 sm:space-x-5">
            <button className="flex h-[50px] w-full items-center justify-center rounded-md bg-dark text-base font-medium text-white hover:bg-dark/90">
              Remove
            </button>
            <button className="flex h-[50px] w-full items-center justify-center rounded-md bg-primary text-base font-medium text-white hover:bg-blue-dark">
              Done
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calender1;

const WeekRow = ({ children }) => {
  return (
    <div className="flex justify-between pb-2 pt-4 text-sm font-medium capitalize text-body-color dark:text-dark-6 sm:text-lg">
      {children}
    </div>
  );
};
const Week = ({ name }) => {
  return (
    <span className="flex h-[38px] w-[38px] items-center justify-center sm:h-[46px] sm:w-[47px]">
      {name}
    </span>
  );
};

const DayRow = ({ children }) => {
  return (
    <div className="flex justify-between pb-2 text-sm font-medium sm:text-lg">
      {children}
    </div>
  );
};
const Day = ({ active, number, otherMonth }) => {
  return (
    <span
      className={`${active && "border-primary! bg-primary! text-white!"} ${
        otherMonth && "text-body-color! dark:text-dark-6!"
      } flex h-[38px] w-[38px] items-center justify-center rounded-md border-[.5px] border-transparent text-dark hover:border-stroke hover:bg-gray-2 dark:text-white dark:hover:border-dark-3 dark:hover:bg-dark sm:h-[46px] sm:w-[47px]`}
    >
      {number}
    </span>
  );
};
