import React from "react";

const Calender2 = () => {
  return (
    <>
      <section className="relative z-10 bg-white py-[120px] dark:bg-dark">
        <div className="mx-auto px-4 lg:container">
          <div className="mb-[30px] flex items-center justify-between rounded-lg border border-stroke bg-gray-2 py-3 pl-[30px] pr-4 dark:border-dark-3 dark:bg-dark-2">
            <p className="text-base font-semibold text-dark dark:text-white sm:text-xl">
              December 2026
            </p>
            <div className="relative z-20 inline-flex rounded-[5px] bg-white dark:bg-dark">
              <select
                name=""
                id=""
                className="relative z-20 h-11 appearance-none rounded-[5px] border border-stroke bg-transparent pl-5 pr-10 text-dark outline-hidden dark:border-dark-3 dark:text-white"
              >
                <option value="">Week</option>
                <option value="">Month</option>
                <option value="">Year</option>
              </select>
              <span className="absolute right-5 top-1/2 z-10 -translate-y-1/2 text-dark dark:text-white">
                <svg
                  width="11"
                  height="6"
                  viewBox="0 0 11 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current"
                >
                  <path d="M5.49652 5.57195C5.29784 5.57195 5.09917 5.50239 4.93361 5.34588L0.496609 0.963677C0.380718 0.841949 0.380718 0.650662 0.480054 0.528935C0.595945 0.407207 0.778061 0.407207 0.893953 0.511545L5.33096 4.89375C5.41374 4.9807 5.56274 4.9807 5.66208 4.89375L10.0991 0.511545C10.215 0.389817 10.3971 0.407207 10.513 0.528935C10.6289 0.650662 10.6123 0.841949 10.4964 0.963677L6.05942 5.32849C5.89386 5.485 5.69519 5.57195 5.49652 5.57195Z" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.65444 5.65773L0.212873 1.27101L0.208441 1.26636C-0.0635564 0.980663 -0.0621445 0.535609 0.170632 0.250361L0.180818 0.237879L0.191885 0.226255C0.463883 -0.0594399 0.887599 -0.0579557 1.15917 0.186543L1.16629 0.192953L5.49652 4.4697L9.81622 0.203348C10.1204 -0.109866 10.5585 -0.0286158 10.8011 0.226255C11.1055 0.545928 11.0287 1.01 10.7846 1.26636L10.7799 1.27131L6.3321 5.64672C6.10301 5.86329 5.8101 6 5.49652 6C5.20451 6 4.90666 5.89629 4.66099 5.66405L4.65444 5.65773ZM10.0991 0.511545L5.66208 4.89375C5.56274 4.9807 5.41374 4.9807 5.33096 4.89375L0.893953 0.511545C0.778061 0.407207 0.595945 0.407207 0.480054 0.528935C0.380718 0.650662 0.380718 0.841949 0.496609 0.963677L4.93361 5.34588C5.09917 5.50239 5.29784 5.57195 5.49652 5.57195C5.69519 5.57195 5.89386 5.485 6.05942 5.32849L10.4964 0.963677C10.6123 0.841949 10.6289 0.650662 10.513 0.528935C10.3971 0.407207 10.215 0.389817 10.0991 0.511545Z"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div className="w-full max-w-full overflow-x-auto bg-white dark:bg-dark-2">
            <table className="w-full">
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
                  <Day
                    number="01"
                    active
                    eventTitle="Redesign Website"
                    eventDate="1 Dec - 2 Dec"
                  />
                  <Day number="02" />
                  <Day number="03" />
                  <Day number="04" />
                  <Day number="05" />
                  <Day number="06" />
                  <Day number="07" />
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
                  <Day number="01" />
                  <Day number="02" />
                  <Day number="03" />
                  <Day number="04" />
                </DayRow>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default Calender2;

const WeekRow = ({ children }) => {
  return (
    <thead>
      <tr className="rounded-t-lg bg-primary text-white">{children}</tr>
    </thead>
  );
};
const Week = ({ name }) => {
  return (
    <th className="h-10 w-10 p-2 text-xs first:rounded-tl last:rounded-tr lg:w-28 xl:text-sm 2xl:w-40">
      <span className="flex justify-center">
        <span>{name}</span>
        <span className="hidden lg:block">day</span>
      </span>
    </th>
  );
};

const DayRow = ({ children }) => {
  return <tr className="h-20 text-center">{children}</tr>;
};

const Day = ({ active, number, eventTitle, eventDate }) => {
  return (
    <td className="ease relative h-28 w-10 cursor-pointer border border-stroke p-1 transition duration-500 hover:bg-gray-2 dark:border-dark-3 dark:hover:bg-dark md:h-[125px] lg:w-28 2xl:w-40">
      <div className="mx-auto flex h-24 w-10 flex-col overflow-hidden sm:w-full md:h-40 md:w-20 lg:w-28 2xl:w-40">
        <div className="top h-5 w-full">
          <span className="text-base font-semibold text-dark dark:text-white">
            {number}
          </span>
        </div>
        {active && (
          <div className="bottom md:h-30 group h-16 w-full grow cursor-pointer py-1">
            <span className="text-dark group-hover:text-primary dark:text-white md:hidden">
              More
            </span>
            <div className="event invisible absolute left-2 z-10 mb-1 w-[200%] rounded-sm border-l-[3px] border-primary bg-gray-2 px-[18px] py-[6px] text-left opacity-0 group-hover:visible group-hover:opacity-100 dark:bg-dark md:visible md:w-[190%] md:opacity-100">
              <span className="event-name block text-sm font-medium text-dark dark:text-white">
                {eventTitle}
              </span>
              <span className="time text-sm text-body-color dark:text-dark-6">
                {eventDate}
              </span>
            </div>
          </div>
        )}
      </div>
    </td>
  );
};
