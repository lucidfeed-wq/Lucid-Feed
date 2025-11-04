import React from "react";

const ChatList = () => {
  return (
    <section className="bg-gray-2 py-[90px] dark:bg-dark">
      <div className="mx-auto px-4 md:container">
        <div className="mx-auto max-w-[335px] rounded-lg bg-white shadow-1 dark:bg-dark-2 dark:shadow-box-dark">
          <div className="border-b border-stroke p-5 dark:border-dark-3">
            <h3 className="text-xl font-medium text-dark dark:text-dark-6">
              <span>Active Conversations</span>
              <span className="ml-4 rounded-md border-[.5px] border-stroke bg-[#F8FAFC] px-[10px] py-[2px] text-base font-medium text-dark dark:border-dark-3 dark:bg-dark dark:text-white">
                7
              </span>
            </h3>
          </div>

          <div className="p-5">
            <form className="relative mb-7">
              <input
                type="text"
                className="w-full rounded-md border border-stroke bg-transparent py-3 pl-5 pr-10 text-base text-body-color outline-hidden focus:border-primary dark:border-dark-3 dark:text-dark-6"
                placeholder="Search..."
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-body-color hover:text-primary dark:text-dark-6">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current stroke-current"
                >
                  <path d="M15.0348 14.3131L15.0348 14.3132L15.0377 14.3154C15.0472 14.323 15.0514 14.3294 15.0536 14.3334C15.0559 14.3378 15.0576 14.343 15.0581 14.3496C15.0592 14.3621 15.0563 14.3854 15.0346 14.4127C15.0307 14.4175 15.0275 14.4196 15.0249 14.4208C15.0224 14.422 15.0152 14.425 15 14.425C15.0038 14.425 14.9998 14.4256 14.9885 14.4215C14.9785 14.4178 14.9667 14.4118 14.9549 14.4036L10.7893 11.0362L10.4555 10.7663L10.1383 11.0554C9.10154 12 7.79538 12.525 6.4 12.525C4.933 12.525 3.56006 11.953 2.52855 10.9215C0.398817 8.79172 0.398817 5.3083 2.52855 3.17857C3.56006 2.14706 4.933 1.57501 6.4 1.57501C7.867 1.57501 9.23994 2.14706 10.2714 3.17857L10.2714 3.17857L10.2735 3.18065C12.2161 5.10036 12.3805 8.14757 10.8214 10.2799L10.5409 10.6635L10.9098 10.9631L15.0348 14.3131ZM2.62145 10.8286C3.63934 11.8465 4.96616 12.4 6.4 12.4C7.82815 12.4 9.1825 11.8504 10.1798 10.8273C12.2759 8.75493 12.2713 5.36421 10.1786 3.27146C9.16066 2.25356 7.83384 1.70001 6.4 1.70001C4.96672 1.70001 3.64038 2.25313 2.62264 3.27027C0.524101 5.34244 0.527875 8.73499 2.62145 10.8286Z" />
                </svg>
              </button>
            </form>

            <div className="space-y-[10px]">
              <ChatItem
                active
                img="https://cdn.tailgrids.com/2.0/image/dashboard/images/chat-list/image-01.png"
                name="Henry Dholi"
                text="I cam across your profile and..."
              />
              <ChatItem
                active
                img="https://cdn.tailgrids.com/2.0/image/dashboard/images/chat-list/image-02.png"
                name="Mariya Desoja"
                text="I like your confidence 💪"
              />
              <ChatItem
                active
                img="https://cdn.tailgrids.com/2.0/image/dashboard/images/chat-list/image-03.png"
                name="Robert Jhon"
                text="Can you share your offer?"
              />
              <ChatItem
                img="https://cdn.tailgrids.com/2.0/image/dashboard/images/chat-list/image-04.png"
                name="Cody Fisher"
                text="I'm waiting for you response!"
              />
              <ChatItem
                active
                img="https://cdn.tailgrids.com/2.0/image/dashboard/images/chat-list/image-05.png"
                name="Jenny Wilson"
                text="I'm waiting for you response!"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatList;

const ChatItem = ({ img, name, text, active }) => {
  return (
    <div className="flex cursor-pointer items-center rounded-[5px] px-4 py-[10px] hover:bg-gray-1 dark:hover:bg-dark-3">
      <div className="relative mr-[14px] h-11 w-full max-w-[44px] rounded-full">
        <img
          src={img}
          alt="profile"
          className="h-full w-full object-cover object-center"
        />
        <span
          className={`absolute bottom-0 right-0 block h-3 w-3 rounded-full border-2 border-gray-2 dark:border-dark-2 ${
            active ? "bg-green" : "bg-red"
          }`}
        ></span>
      </div>
      <div className="w-full">
        <h5 className="text-sm font-medium text-dark dark:text-white">
          {name}
        </h5>
        <p className="text-xs text-dark dark:text-white">{text}</p>
      </div>
    </div>
  );
};
