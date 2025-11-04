import userOne from "../assets/images/chat-list/image-01.png";
import userTwo from "../assets/images/chat-list/image-02.png";
import userThree from "../assets/images/chat-list/image-03.png";
import userFour from "../assets/images/chat-list/image-04.png";
import userFive from "../assets/images/chat-list/image-05.png";

const chatList = [
  {
    active: true,
    image: userOne,
    name: "Devid Heilo",
    text: "Hello, how are you?",
    time: "1:34 PM",
    number: 3,
  },
  {
    active: true,
    image: userTwo,
    name: "Henry Fisher",
    text: "I am waiting for you",
    time: "5:54 PM",
    number: 0,
  },
  {
    active: false,
    image: userThree,
    name: "Wilium Smith",
    text: "Where are you now?",
    time: "10:12 PM",
    number: 0,
  },
  {
    active: true,
    image: userFour,
    name: "Henry Deco",
    text: "Thank you so much!",
    time: "Sun",
    number: 2,
  },
  {
    active: false,
    image: userFive,
    name: "Jubin Jack",
    text: "I really love that!",
    time: "Oct 23",
    number: 0,
  },
];

const ChatBox = () => {
  return (
    <>
      <div className="mx-auto max-w-[400px] rounded-lg bg-white py-[30px] shadow-1 dark:bg-dark-2 dark:shadow-box-dark">
        <div className="mb-8 flex items-center justify-between px-[30px]">
          <h3 className="text-xl font-semibold text-dark dark:text-white">
            Chats
          </h3>
          <div>
            <div className="relative z-20">
              <select className="relative z-20 appearance-none rounded-md border border-stroke bg-transparent py-[5px] pl-3 pr-10 text-base text-body-color outline-hidden dark:border-dark-3 dark:text-dark-6">
                <option value="" className="dark:bg-dark-2">
                  Latest
                </option>
                <option value="" className="dark:bg-dark-2">
                  Oldest
                </option>
              </select>
              <span className="absolute right-3 top-1/2 z-10 -translate-y-1/2 text-body-color dark:text-dark-6">
                <svg
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current"
                >
                  <path d="M9.5 12.825C9.33125 12.825 9.19062 12.7687 9.05 12.6562L2.58125 6.29999C2.32812 6.04687 2.32812 5.65312 2.58125 5.39999C2.83437 5.14687 3.22812 5.14687 3.48125 5.39999L9.5 11.2781L15.5187 5.34374C15.7719 5.09062 16.1656 5.09062 16.4187 5.34374C16.6719 5.59687 16.6719 5.99062 16.4187 6.24374L9.95 12.6C9.80937 12.7406 9.66875 12.825 9.5 12.825Z" />
                </svg>
              </span>
            </div>
          </div>
        </div>

        <div>
          {chatList.map((chat, index) => (
            <div
              key={index}
              className="flex cursor-pointer items-center px-[30px] py-3 hover:bg-gray-1 dark:hover:bg-dark-3"
            >
              <div className="relative mr-5 h-14 w-full max-w-[56px] rounded-full">
                <img
                  src={chat.image}
                  alt="profile"
                  className="h-full w-full object-cover object-center"
                />

                <span
                  className={`absolute bottom-0 right-0 block h-[14px] w-[14px] rounded-full border-2 border-white dark:border-dark-2 ${chat.active === true ? "bg-green" : "bg-red"}`}
                ></span>
              </div>

              <div className="flex w-full items-center justify-between">
                <div>
                  <h3 className="text-base font-medium text-dark dark:text-white">
                    {chat.name}
                  </h3>
                  <div className="flex items-center">
                    <p
                      className={`text-sm ${chat.number !== 0 ? "font-medium text-dark dark:text-white" : "text-body-color dark:text-dark-6"}`}
                    >
                      {chat.text}
                    </p>
                    <span className="mx-2 block h-0.5 w-0.5 rounded-full bg-body-color dark:bg-dark-6"></span>
                    <span className="text-xs text-body-color dark:text-dark-6">
                      {chat.time}
                    </span>
                  </div>
                </div>

                {chat.number !== 0 && (
                  <span className="flex h-6 w-full max-w-[24px] items-center justify-center rounded-full bg-secondary text-sm font-medium text-white">
                    {chat.number}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ChatBox;
