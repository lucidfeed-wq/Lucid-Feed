import React, { useEffect, useRef, useState } from "react";

const ChatList2 = () => {
  return (
    <section className="bg-gray-2 py-[90px] dark:bg-dark">
      <div className="mx-auto px-4 md:container">
        <div className="mx-auto max-w-[400px] rounded-lg bg-white px-6 py-8 shadow-1 dark:bg-dark-2 dark:shadow-box-dark">
          <div className="mb-8 flex items-center justify-between">
            <h3 className="text-xl font-semibold text-dark dark:text-white">
              Messages
            </h3>
            <Dropdown />
          </div>

          <form className="relative mb-7">
            <input
              type="text"
              className="w-full rounded-full border border-stroke bg-transparent py-[10px] pl-5 pr-10 text-base text-body-color outline-hidden focus:border-primary dark:border-dark-3 dark:text-dark-6"
              placeholder="Search.."
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

          <div className="space-y-3">
            <ChatItem
              active
              img="https://cdn.tailgrids.com/2.0/image/dashboard/images/chat-list/image-01.png"
              name="Danish Hebo"
              text="Hello devid, how are you today?"
              time="Dec, 8"
              number="5"
            />
            <ChatItem
              active
              img="https://cdn.tailgrids.com/2.0/image/dashboard/images/chat-list/image-02.png"
              name="Mariya Desoja"
              text="How are you today?"
              time="Dec, 8"
            />
            <ChatItem
              active
              img="https://cdn.tailgrids.com/2.0/image/dashboard/images/chat-list/image-03.png"
              name="Jenny Wilson"
              text="I'm waiting for you response!"
              time="Dec, 8"
            />
            <ChatItem
              img="https://cdn.tailgrids.com/2.0/image/dashboard/images/chat-list/image-04.png"
              name="Henry Fisher"
              text="What do you think about it?"
              time="Dec, 8"
              number="2"
            />
            <ChatItem
              active
              img="https://cdn.tailgrids.com/2.0/image/dashboard/images/chat-list/image-05.png"
              name="Jubin Jack"
              text="I really love that!"
              time="Dec, 8"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatList2;

const Dropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="relative">
      <button
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="text-dark dark:text-white"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-current"
        >
          <path d="M5 14C6.10457 14 7 13.1046 7 12C7 10.8954 6.10457 10 5 10C3.89543 10 3 10.8954 3 12C3 13.1046 3.89543 14 5 14Z" />
          <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" />
          <path d="M19 14C20.1046 14 21 13.1046 21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14Z" />
        </svg>
      </button>
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute right-0 top-full z-40 w-[200px] space-y-1 rounded bg-white p-2 shadow-card dark:bg-dark ${
          dropdownOpen === true ? "block" : "hidden"
        }`}
      >
        <button className="w-full rounded-sm px-3 py-2 text-left text-sm text-body-color hover:bg-gray-2 dark:text-dark-6 dark:hover:bg-dark-2">
          All Conversations
        </button>
        <button className="w-full rounded-sm px-3 py-2 text-left text-sm text-body-color hover:bg-gray-2 dark:text-dark-6 dark:hover:bg-dark-2">
          Mark as Read
        </button>
      </div>
    </div>
  );
};

const ChatItem = ({ img, name, text, time, active, number }) => {
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
        <div className="mb-1 flex justify-between">
          <h5 className="text-sm font-medium text-dark dark:text-white">
            {name}
          </h5>
          <span className="text-xs text-body-color dark:text-dark-6">
            {" "}
            {time}{" "}
          </span>
        </div>
        <div className="flex justify-between">
          <p className="text-sm text-dark dark:text-white">{text}</p>
          {number && (
            <span className="flex h-4 w-full max-w-[16px] items-center justify-center rounded-full bg-primary text-[10px] font-medium leading-none text-white">
              {number}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
