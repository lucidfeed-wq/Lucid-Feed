import React, { useEffect, useRef, useState } from "react";

function Modal8() {
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
      <div class="container mx-auto py-20">
        <button
          ref={trigger}
          onClick={() => setModalOpen(!modalOpen)}
          class="rounded-full bg-primary px-6 py-3 text-base font-medium text-white"
        >
          Open Modal
        </button>
      </div>

      {modalOpen && (
        <div class="fixed left-0 top-0 flex h-screen w-full items-center justify-center overflow-y-scroll bg-gray-5 py-10 dark:bg-dark">
          <div
            ref={modal}
            onFocus={() => setModalOpen(true)}
            onBlur={() => setModalOpen(false)}
            class="relative mx-auto w-full max-w-[400px] rounded-xl bg-white p-6 shadow-xl dark:bg-dark-2"
          >
            <div class="mb-5 flex aspect-square w-12 items-center justify-center rounded-full bg-green-light-6 text-green">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2330_10465)">
                  <path
                    d="M11.9998 0.674999C5.7373 0.674999 0.674805 5.7375 0.674805 12C0.674805 18.2625 5.7373 23.3625 11.9998 23.3625C18.2623 23.3625 23.3623 18.2625 23.3623 12C23.3623 5.7375 18.2623 0.674999 11.9998 0.674999ZM11.9998 21.675C6.67481 21.675 2.3623 17.325 2.3623 12C2.3623 6.675 6.67481 2.3625 11.9998 2.3625C17.3248 2.3625 21.6748 6.7125 21.6748 12.0375C21.6748 17.325 17.3248 21.675 11.9998 21.675Z"
                    fill="currentColor"
                  />
                  <path
                    d="M15.2246 8.5125L10.7621 12.8625L8.73712 10.875C8.39962 10.5375 7.87462 10.575 7.53712 10.875C7.19962 11.2125 7.23712 11.7375 7.53712 12.075L9.93712 14.4C10.1621 14.625 10.4621 14.7375 10.7621 14.7375C11.0621 14.7375 11.3621 14.625 11.5871 14.4L16.4246 9.75C16.7621 9.4125 16.7621 8.8875 16.4246 8.55C16.0871 8.2125 15.5621 8.2125 15.2246 8.5125Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2330_10465">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div>
              <h3 class="mb-2 text-lg font-semibold text-dark dark:text-white">
                Do you want to publish it?
              </h3>
              <p class="mb-8 text-sm text-body-color">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                quis bibendum liquam nec ipsum commodo ligula.
              </p>

              <div class="flex items-center gap-3">
                <button
                  onClick={() => setModalOpen(false)}
                  class="flex h-12 w-full items-center justify-center rounded-lg border border-stroke bg-transparent px-6 py-3 font-medium text-dark duration-200 hover:border-dark hover:bg-dark hover:text-white dark:border-dark-3 dark:text-dark-7 dark:hover:border-dark dark:hover:text-white"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setModalOpen(false)}
                  class="flex h-12 w-full items-center justify-center rounded-lg border border-transparent bg-primary px-6 py-3 font-medium text-white duration-200 hover:bg-primary/90"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Modal8;
