import React, { useEffect, useRef, useState } from "react";

const Modal6 = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const trigger = useRef(null);
  const modal = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!modal.current) return;
      if (
        !modalOpen ||
        modal.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setModalOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!modalOpen || keyCode !== 27) return;
      setModalOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <section>
      <div className="container mx-auto py-20">
        <button
          ref={trigger}
          onClick={() => setModalOpen(!modalOpen)}
          className="rounded-full bg-primary px-6 py-3 text-base font-medium text-white"
        >
          Open Modal
        </button>
      </div>

      <div
        className={`fixed left-0 top-0 flex h-screen w-full items-center justify-center overflow-y-scroll bg-gray-2 py-10 dark:bg-dark ${
          modalOpen ? "block" : "hidden"
        }`}
      >
        <div
          ref={modal}
          onFocus={() => setModalOpen(true)}
          onBlur={() => setModalOpen(false)}
          className="relative mx-auto w-full max-w-[445px] rounded-lg bg-white p-8 shadow-1 dark:bg-dark-2 dark:shadow-3"
        >
          <h3 className="mb-6 border-b border-stroke pb-5 text-2xl font-semibold text-dark dark:border-dark-3 dark:text-white sm:text-[28px]">
            Share Modal
          </h3>
          <p className="mb-[22px] text-lg font-medium text-dark dark:text-white">
            Share this link via
          </p>
          <div className="mb-7 flex items-center space-x-[18px]">
            <button className="flex h-[50px] w-[50px] items-center justify-center rounded-full border border-[#157BEE80] text-[#157BEE] hover:border-[#157BEE] hover:bg-[#157BEE] hover:text-white">
              <svg
                width="12"
                height="21"
                viewBox="0 0 12 21"
                className="fill-current"
              >
                <path d="M10.7197 8.01172H8.96043H8.33212V7.36656V5.36656V4.7214H8.96043H10.2799C10.6255 4.7214 10.9082 4.46333 10.9082 4.07624V0.65688C10.9082 0.302041 10.6569 0.0117188 10.2799 0.0117188H7.98654C5.50471 0.0117188 3.77685 1.81817 3.77685 4.49559V7.30204V7.9472H3.14854H1.01228C0.572465 7.9472 0.164062 8.30204 0.164062 8.81817V11.1408C0.164062 11.5924 0.509634 12.0117 1.01228 12.0117H3.08571H3.71402V12.6569V19.1408C3.71402 19.5924 4.0596 20.0117 4.56224 20.0117H7.51531C7.7038 20.0117 7.86088 19.9149 7.98654 19.7859C8.11221 19.6569 8.20645 19.4311 8.20645 19.2375V12.6891V12.044H8.86618H10.2799C10.6883 12.044 11.0024 11.7859 11.0653 11.3988V11.3666V11.3343L11.5051 9.10849C11.5365 8.88269 11.5051 8.62462 11.3166 8.36656C11.2538 8.20527 10.971 8.04398 10.7197 8.01172Z" />
              </svg>
            </button>
            <button className="flex h-[50px] w-[50px] items-center justify-center rounded-full border border-[#45C3F680] text-[#45C3F6] hover:border-[#45C3F6] hover:bg-[#45C3F6] hover:text-white">
              <svg
                width="23"
                height="18"
                viewBox="0 0 23 18"
                className="fill-current"
              >
                <path d="M19.624 3.54597L20.9658 1.98041C21.3542 1.55641 21.4601 1.23025 21.4955 1.06717C20.4361 1.65425 19.4474 1.84995 18.8119 1.84995H18.5647L18.4234 1.71949C17.576 1.03455 16.5167 0.675781 15.3868 0.675781C12.915 0.675781 10.973 2.5675 10.973 4.75275C10.973 4.88322 10.973 5.07891 11.0083 5.20937L11.1142 5.86169L10.3727 5.82907C5.85294 5.69861 2.14535 2.11088 1.54507 1.49118C0.556383 3.12196 1.12135 4.68752 1.72163 5.66599L2.92218 7.49248L1.01542 6.514C1.05073 7.88387 1.6157 8.96019 2.71032 9.74297L3.6637 10.3953L2.71032 10.7541C3.31059 12.4175 4.65239 13.1024 5.64108 13.3633L6.94757 13.6895L5.7117 14.4723C3.73432 15.7769 1.26259 15.679 0.167969 15.5812C2.39252 17.0163 5.0408 17.3424 6.87695 17.3424C8.25405 17.3424 9.27805 17.212 9.52523 17.1141C19.4121 14.9615 19.8712 6.80755 19.8712 5.17676V4.94845L20.083 4.81798C21.2836 3.77428 21.7779 3.21981 22.0604 2.89365C21.9545 2.92627 21.8132 2.9915 21.672 3.02412L19.624 3.54597Z" />
              </svg>
            </button>
            <button className="flex h-[50px] w-[50px] items-center justify-center rounded-full border border-[#CF437A80] text-[#CF437A] hover:border-[#CF437A] hover:bg-[#CF437A] hover:text-white">
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                className="fill-current"
              >
                <path d="M9.83553 14.0119C11.8589 14.0119 13.4992 12.4064 13.4992 10.4259C13.4992 8.44536 11.8589 6.83984 9.83553 6.83984C7.81215 6.83984 6.17188 8.44536 6.17188 10.4259C6.17188 12.4064 7.81215 14.0119 9.83553 14.0119Z" />
                <path d="M13.8077 0.835938H5.78558C2.59568 0.835938 0.00585938 3.37088 0.00585938 6.4932V14.2835C0.00585938 17.4677 2.59568 20.0026 5.78558 20.0026H13.7445C16.9976 20.0026 19.5874 17.4677 19.5874 14.3453V6.4932C19.5874 3.37088 16.9976 0.835938 13.8077 0.835938ZM9.82822 15.1182C7.14365 15.1182 5.02758 12.9851 5.02758 10.4193C5.02758 7.85341 7.17524 5.72035 9.82822 5.72035C12.4496 5.72035 14.5973 7.85341 14.5973 10.4193C14.5973 12.9851 12.4812 15.1182 9.82822 15.1182ZM16.4607 6.15314C16.1449 6.4932 15.6711 6.67868 15.1342 6.67868C14.6604 6.67868 14.1867 6.4932 13.8077 6.15314C13.4603 5.81309 13.2708 5.38029 13.2708 4.85475C13.2708 4.32922 13.4603 3.92734 13.8077 3.55637C14.1551 3.1854 14.5973 2.99992 15.1342 2.99992C15.6079 2.99992 16.1133 3.1854 16.4607 3.52545C16.7765 3.92734 16.9976 4.39105 16.9976 4.88567C16.966 5.38029 16.7765 5.81309 16.4607 6.15314Z" />
                <path d="M15.1681 4.10938C14.7576 4.10938 14.4102 4.44943 14.4102 4.85131C14.4102 5.25319 14.7576 5.59325 15.1681 5.59325C15.5787 5.59325 15.9261 5.25319 15.9261 4.85131C15.9261 4.44943 15.6103 4.10938 15.1681 4.10938Z" />
              </svg>
            </button>
            <button className="flex h-[50px] w-[50px] items-center justify-center rounded-full border border-[#45BB5C80] text-[#45BB5C] hover:border-[#45BB5C] hover:bg-[#45BB5C] hover:text-white">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3075_769)">
                  <path
                    d="M20.0182 3.93945C17.9036 1.82487 15.0234 0.658203 12.0703 0.658203C5.8724 0.658203 0.804687 5.68945 0.804687 11.8874C0.804687 13.8926 1.3151 15.7884 2.29948 17.5384L0.695312 23.3353L6.71094 21.804C8.35156 22.679 10.2109 23.1894 12.1068 23.1894C18.2682 23.153 23.2995 18.1217 23.2995 11.8874C23.2995 8.89778 22.1328 6.09049 20.0182 3.93945ZM12.0339 21.2572C10.3932 21.2572 8.67969 20.7832 7.25781 19.9082L6.89323 19.6894L3.35677 20.6009L4.34115 17.1738L4.1224 16.8092C3.21094 15.3144 2.70052 13.5644 2.70052 11.8144C2.70052 6.67383 6.85677 2.51758 12.0339 2.51758C14.513 2.51758 16.8464 3.50195 18.5964 5.25195C20.3464 7.00195 21.3307 9.37174 21.3307 11.8874C21.4036 17.1009 17.1745 21.2572 12.0339 21.2572ZM17.1745 14.2572C16.8828 14.1113 15.5339 13.4186 15.2057 13.3822C14.9505 13.2728 14.7318 13.2363 14.5859 13.528C14.4401 13.8197 13.8568 14.403 13.7109 14.6217C13.5651 14.7676 13.4193 14.8405 13.0911 14.6582C12.7995 14.5124 11.9245 14.2572 10.8307 13.2363C9.99219 12.5072 9.40885 11.5957 9.29948 11.2676C9.15364 10.9759 9.26302 10.8665 9.44531 10.6842C9.59114 10.5384 9.73698 10.3926 9.84635 10.1738C9.99219 10.028 9.99219 9.88216 10.138 9.69987C10.2839 9.55403 10.1745 9.33528 10.1016 9.18945C9.99219 9.04362 9.48177 7.6582 9.22656 7.07487C9.00781 6.49153 8.7526 6.60091 8.60677 6.60091C8.46094 6.60091 8.24219 6.60091 8.09635 6.60091C7.95052 6.60091 7.58594 6.63737 7.36719 6.96549C7.11198 7.25716 6.38281 7.94987 6.38281 9.33528C6.38281 10.7207 7.36719 11.9967 7.54948 12.2519C7.69531 12.3978 9.55469 15.278 12.3255 16.5176C12.9818 16.8092 13.4922 16.9915 13.9297 17.1374C14.5859 17.3561 15.2057 17.2832 15.6797 17.2467C16.2266 17.2103 17.3203 16.5905 17.5755 15.8978C17.7943 15.278 17.7943 14.6582 17.7214 14.5488C17.6484 14.4759 17.4297 14.3665 17.1745 14.2572Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3075_769">
                    <rect
                      width="23.3333"
                      height="23.3333"
                      fill="white"
                      transform="translate(0.330078 0.330078)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <button className="flex h-[50px] w-[50px] items-center justify-center rounded-full border border-[#008CD080] text-[#008CD0] hover:border-[#008CD0] hover:bg-[#008CD0] hover:text-white">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3075_775)">
                  <path
                    d="M23.2251 4.26834L19.798 20.31C19.5428 21.4402 18.8866 21.6954 17.9386 21.185L12.798 17.3933L10.2824 19.7996C10.0272 20.0548 9.77197 20.31 9.18863 20.31L9.58968 15.0235L19.1782 6.31001C19.5793 5.90897 19.0688 5.76313 18.5584 6.09126L6.63655 13.6017L1.49592 12.034C0.365713 11.6694 0.365713 10.9038 1.75113 10.3933L21.7303 2.62773C22.7147 2.33606 23.5532 2.84648 23.2251 4.26834Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3075_775">
                    <rect
                      width="23.3333"
                      height="23.3333"
                      fill="white"
                      transform="translate(0.330078 0.330078)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
          <p className="mb-4 text-lg font-medium text-dark dark:text-white">
            Or copy link
          </p>
          <form className="relative">
            <input
              type="text"
              defaultValue="example.com/share-link"
              className="h-12 w-full rounded-sm border border-stroke bg-transparent pl-[46px] pr-[86px] text-base text-dark placeholder-body-color outline-hidden focus:border-primary dark:border-dark-3 dark:text-white"
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-dark dark:text-white">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_2095_7720)">
                  <path
                    d="M14.725 10.575L12.7 8.55002C11.675 7.52502 10.075 7.42502 8.92501 8.25002L7.72501 7.05002C8.07501 6.57502 8.27501 6.00002 8.27501 5.37502C8.27501 4.60002 7.97501 3.85002 7.42501 3.30002L5.40001 1.27502C4.27501 0.150024 2.42501 0.150024 1.27501 1.27502C0.750012 1.85002 0.450012 2.57502 0.450012 3.35002C0.450012 4.12502 0.750012 4.85002 1.30001 5.40002L3.30001 7.42502C3.87501 8.00002 4.62501 8.27502 5.35001 8.27502C5.90001 8.27502 6.42501 8.12502 6.90001 7.82502L8.15001 9.07502C7.85001 9.52502 7.70001 10.075 7.70001 10.625C7.70001 11.4 8.00001 12.125 8.55001 12.675L10.55 14.7C11.125 15.275 11.875 15.55 12.6 15.55C13.35 15.55 14.1 15.275 14.65 14.7C15.2 14.15 15.5 13.425 15.5 12.65C15.575 11.875 15.275 11.15 14.725 10.575ZM4.10001 6.62502L2.10001 4.60002C1.75001 4.25002 1.57501 3.80002 1.57501 3.32502C1.57501 2.85002 1.75001 2.40002 2.10001 2.05002C2.45001 1.70002 2.90001 1.52502 3.37501 1.52502C3.82501 1.52502 4.30001 1.70002 4.65001 2.05002L6.67501 4.05002C7.00001 4.40002 7.20001 4.85002 7.20001 5.32502C7.20001 5.65002 7.12501 5.92502 6.97501 6.20002L6.35001 5.57502C6.12501 5.35002 5.77501 5.35002 5.55001 5.57502C5.32501 5.80002 5.32501 6.15002 5.55001 6.37502L6.12501 6.95002C5.42501 7.30002 4.62501 7.17502 4.10001 6.62502ZM13.9 13.9C13.2 14.6 12.05 14.6 11.375 13.9L9.37501 11.875C9.02501 11.525 8.85001 11.075 8.85001 10.6C8.85001 10.35 8.90001 10.1 9.00001 9.87502L9.57501 10.425C9.67501 10.525 9.82501 10.6 9.97501 10.6C10.125 10.6 10.275 10.55 10.375 10.425C10.6 10.2 10.6 9.85003 10.375 9.62502L9.75001 9.07502C10.025 8.92502 10.325 8.85003 10.625 8.85003C11.075 8.85003 11.55 9.02502 11.9 9.37502L13.925 11.375C14.25 11.725 14.45 12.175 14.45 12.65C14.425 13.125 14.25 13.575 13.9 13.9Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2095_7720">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <button className="absolute right-[10px] top-1/2 h-[30px] -translate-y-1/2 rounded-sm bg-primary px-5 text-sm font-medium text-white hover:bg-primary/90">
              Copy
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Modal6;
