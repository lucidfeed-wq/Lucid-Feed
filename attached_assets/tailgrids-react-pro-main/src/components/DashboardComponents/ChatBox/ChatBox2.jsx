import React from "react";

const ChatBox2 = () => {
  const active = true;
  const activePartner = false;

  return (
    <section className="bg-white py-20 dark:bg-dark lg:py-[120px]">
      <div className="mx-auto px-4 md:container">
        <div className="mx-auto w-full max-w-[630px] overflow-hidden rounded-lg border border-stroke bg-[#F8FAFC] dark:border-dark-3 dark:bg-dark-2">
          <div className="flex items-center justify-between border-b border-stroke bg-white px-6 py-[18px] dark:border-dark-3 dark:bg-dark-2">
            <div className="flex items-center">
              <div className="mr-4 h-[50px] w-full max-w-[50px] overflow-hidden rounded-full">
                <img
                  src="https://cdn.tailgrids.com/2.0/image/dashboard/images/chat-box/chat-box-03/image-01.jpg"
                  alt="avatar"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div>
                <h5 className="text-base font-medium text-dark dark:text-white">
                  Robert Henry
                </h5>
                <p className="text-sm text-body-color dark:text-dark-6">
                  Lase seen 5min ago
                </p>
              </div>
            </div>
            <div>
              <div className="inline-flex h-[25px] items-center rounded-[3px] border-stroke text-sm font-medium text-dark dark:border-dark-3 dark:text-white sm:border sm:bg-[#F8FAFC] sm:px-2 dark:sm:bg-dark">
                <span
                  className={`block h-2 w-2 rounded-full ${
                    active ? "bg-green" : "bg-red"
                  }`}
                ></span>
                <span className="ml-[6px] hidden sm:inline">
                  {active ? "Active Now" : "Inactive Now"}
                </span>
              </div>
            </div>
          </div>

          <div className="p-[25px] pt-[30px]">
            <div className="mb-8 space-y-3">
              <Chat
                img="https://cdn.tailgrids.com/2.0/image/dashboard/images/chat-box/chat-box-02/image-02.jpg"
                time="5h ago"
                text="Hey Bill, nice to meed you!"
                activePartner={activePartner}
              />
              <Reply
                img="https://cdn.tailgrids.com/2.0/image/dashboard/images/chat-box/chat-box-02/image-01.jpg"
                time="2min ago"
                text="Nice to meet you too, How can I help you?"
                active
              />
              <Chat
                img="https://cdn.tailgrids.com/2.0/image/dashboard/images/chat-box/chat-box-02/image-02.jpg"
                time="1min ago"
                text="I am interested to know more about your prices and services you offer"
                activePartner={activePartner}
              />
              <Reply
                img="https://cdn.tailgrids.com/2.0/image/dashboard/images/chat-box/chat-box-02/image-01.jpg"
                time="Just now"
                text="sure, please check bellow link to see details price https://ayroui.com/pricing"
                active
              />
            </div>

            <form className="flex items-center justify-between space-x-[14px] rounded-md bg-white p-4 shadow-team-3 dark:bg-dark-2 dark:shadow-box-dark">
              <button className="text-body-color dark:text-dark-6">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current"
                >
                  <path d="M9.225 17.5219C9.16875 17.5219 9.14062 17.5219 9.08437 17.5219C7.79062 17.5219 6.38438 16.9875 5.5125 16.1719C4.58438 15.3 4.07812 14.1188 4.07812 12.9094V4.19063C4.07812 2.98126 4.66875 1.88438 5.70937 1.18126C6.72187 0.478134 7.9875 0.309384 9.16875 0.731259L9.225 0.759384C9.36562 0.815634 9.53438 0.843759 9.70312 0.956259C10.9969 1.63126 11.7844 2.84063 11.7844 4.21876V11.6719C11.7844 12.4313 11.5312 13.1344 11.0531 13.6969C10.9688 13.8094 10.9125 13.8656 10.8562 13.8938C10.3219 14.3719 9.70312 14.625 9 14.625C8.2125 14.625 7.45313 14.2594 6.94688 13.6688C6.46875 13.1063 6.1875 12.375 6.1875 11.6156V5.40001C6.1875 5.06251 6.46875 4.75313 6.83437 4.75313C7.2 4.75313 7.48125 5.03438 7.48125 5.40001V11.6438C7.48125 12.0938 7.65 12.5438 7.93125 12.8813C8.18438 13.1906 8.60625 13.3875 9 13.3875C9.36562 13.3875 9.675 13.2469 9.95625 12.9938C9.98438 12.9656 10.0125 12.9375 10.0687 12.8813C10.35 12.5438 10.5188 12.1219 10.5188 11.6719V4.19063C10.5188 3.29063 10.0125 2.50313 9.1125 2.05313L9.08437 2.02501C9.02812 1.99688 8.97188 1.96876 8.85938 1.94063L8.775 1.91251C7.95938 1.63126 7.11562 1.74376 6.4125 2.22188C5.70937 2.67188 5.34375 3.37501 5.34375 4.16251V12.8813C5.34375 13.725 5.7375 14.5969 6.38438 15.2156C7.03125 15.8063 8.12813 16.2281 9.1125 16.2281C10.0688 16.2563 10.9688 15.8906 11.6719 15.2438C12.3469 14.5969 12.7125 13.7531 12.6844 12.8813V6.10313C12.6844 5.76563 12.9656 5.45626 13.3313 5.45626C13.6969 5.45626 13.9781 5.73751 13.9781 6.10313V12.8813C14.0063 14.0906 13.5 15.2719 12.5719 16.1719C11.6438 17.0156 10.4344 17.5219 9.225 17.5219Z" />
                </svg>
              </button>

              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Type something here..."
                  className="h-11 w-full rounded-[5px] border border-stroke bg-transparent pl-[18px] pr-12 text-base text-body-color outline-hidden focus:border-primary dark:border-dark-3 dark:text-dark-6"
                />

                <button className="absolute right-[18px] top-1/2 -translate-y-1/2">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1058_11452)">
                      <path
                        d="M13.0219 9.92812H4.97812C4.78125 9.92812 4.58437 10.0125 4.47187 10.1812C4.35937 10.35 4.30312 10.5469 4.35937 10.7437C4.95 12.825 6.8625 14.2875 9 14.2875C11.1937 14.2875 13.05 12.8812 13.6406 10.7437C13.6969 10.5469 13.6687 10.35 13.5281 10.1812C13.4156 10.0125 13.2187 9.92812 13.0219 9.92812ZM9 12.9937C7.70625 12.9937 6.55312 12.2906 5.90625 11.1937H12.0937C11.475 12.2906 10.3219 12.9937 9 12.9937Z"
                        fill="#F59E0B"
                      />
                      <path
                        d="M9 0.224998C4.1625 0.224998 0.224998 4.1625 0.224998 9C0.224998 13.8375 4.1625 17.8031 9.02812 17.8031C13.8937 17.8031 17.8312 13.8656 17.8312 9C17.8312 4.13437 13.8375 0.224998 9 0.224998ZM9 16.5375C4.8375 16.5375 1.4625 13.1625 1.4625 9C1.4625 4.8375 4.86562 1.49062 9 1.49062C13.1344 1.49062 16.5375 4.86562 16.5375 9.02812C16.5375 13.1906 13.1625 16.5375 9 16.5375Z"
                        fill="#F59E0B"
                      />
                      <path
                        d="M5.625 7.5375C6.24632 7.5375 6.75 7.03382 6.75 6.4125C6.75 5.79118 6.24632 5.2875 5.625 5.2875C5.00368 5.2875 4.5 5.79118 4.5 6.4125C4.5 7.03382 5.00368 7.5375 5.625 7.5375Z"
                        fill="#F59E0B"
                      />
                      <path
                        d="M12.375 7.5375C12.9963 7.5375 13.5 7.03382 13.5 6.4125C13.5 5.79118 12.9963 5.2875 12.375 5.2875C11.7537 5.2875 11.25 5.79118 11.25 6.4125C11.25 7.03382 11.7537 7.5375 12.375 7.5375Z"
                        fill="#F59E0B"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1058_11452">
                        <rect width="18" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>

              <button className="inline-flex h-11 items-center justify-center whitespace-nowrap rounded-md bg-primary px-5 text-base font-medium text-white hover:bg-blue-dark">
                <span className="hidden pr-[10px] sm:inline"> Send </span>
                <span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.625 9.28125C18.5 9.0625 18.3125 8.90625 18.0937 8.78125L3.6875 0.718748C3.4375 0.593748 3.15625 0.531248 2.875 0.562498C2.59375 0.593748 2.34375 0.687498 2.125 0.874998C1.90625 1.0625 1.75 1.3125 1.6875 1.5625C1.59375 1.84375 1.625 2.125 1.71875 2.40625L4.40625 10L1.71875 17.5937C1.625 17.875 1.625 18.1562 1.6875 18.4062C1.75 18.6875 1.90625 18.9062 2.125 19.0937C2.34375 19.2812 2.59375 19.375 2.875 19.4062C2.90625 19.4062 2.96875 19.4062 3 19.4062C3.21875 19.4062 3.46875 19.3437 3.6875 19.2187L18.0937 11.1562C18.3125 11.0312 18.5 10.875 18.625 10.6562C18.75 10.4375 18.8125 10.1875 18.8125 9.96875C18.8125 9.75 18.75 9.5 18.625 9.28125ZM3.0625 1.96875L16.125 9.28125H5.65625L3.0625 1.96875ZM3.0625 18.0312L5.6875 10.7187H16.1562L3.0625 18.0312Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatBox2;

const Chat = ({ img, time, text, activePartner }) => {
  return (
    <div className={`flex w-full max-w-[470px]`}>
      <div className="relative mr-[14px] h-10 w-full max-w-[40px] rounded-full">
        <img
          src={img}
          alt="avatar"
          className="h-full w-full rounded-full object-cover object-center"
        />
        <span
          className={`absolute bottom-0 right-0 block h-3 w-3 rounded-full border-2 border-white dark:border-dark-2 ${
            activePartner ? "bg-green" : "bg-red"
          }`}
        ></span>
      </div>

      <div>
        <div className="mb-[10px] inline-block rounded-[5px] bg-white px-5 py-3 shadow-card dark:bg-dark-3">
          <p className="text-base text-body-color dark:text-dark-6">{text}</p>
        </div>
        <span className="block text-sm text-body-color dark:text-dark-6">
          {time}
        </span>
      </div>
    </div>
  );
};

const Reply = ({ img, time, text, active }) => {
  return (
    <div className={`ml-auto flex w-full max-w-[470px] justify-end`}>
      <div>
        <div className="mb-[10px] inline-block rounded-sm bg-dark px-5 py-3 shadow-card">
          <p className="text-base text-white">{text}</p>
        </div>
        <span className="block text-right text-sm text-body-color dark:text-dark-6">
          {time}
        </span>
      </div>

      <div className="relative ml-[14px] h-10 w-full max-w-[40px] rounded-full">
        <img
          src={img}
          alt="avatar"
          className="h-full w-full rounded-full object-cover object-center"
        />
        <span
          className={`absolute bottom-0 right-0 block h-3 w-3 rounded-full border-2 border-white dark:border-dark-2 ${
            active ? "bg-green" : "bg-red"
          }`}
        ></span>
      </div>
    </div>
  );
};
