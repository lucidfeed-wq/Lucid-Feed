import React, { useEffect, useRef, useState } from "react";

function Modal11() {
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
            class="relative mx-auto w-full max-w-[550px] rounded-xl bg-white p-8 shadow-xl dark:bg-dark-2"
          >
            <button
              onClick={() => setModalOpen(false)}
              class="absolute right-10 top-10 text-dark-4 duration-200 hover:text-dark dark:hover:text-white"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.0998 11L20.4873 2.61249C20.7967 2.30311 20.7967 1.82186 20.4873 1.51249C20.1779 1.20311 19.6967 1.20311 19.3873 1.51249L10.9998 9.89999L2.6123 1.51249C2.30293 1.20311 1.82168 1.20311 1.5123 1.51249C1.20293 1.82186 1.20293 2.30311 1.5123 2.61249L9.8998 11L1.5123 19.3875C1.20293 19.6969 1.20293 20.1781 1.5123 20.4875C1.6498 20.625 1.85605 20.7281 2.0623 20.7281C2.26855 20.7281 2.4748 20.6594 2.6123 20.4875L10.9998 12.1L19.3873 20.4875C19.5248 20.625 19.7311 20.7281 19.9373 20.7281C20.1436 20.7281 20.3498 20.6594 20.4873 20.4875C20.7967 20.1781 20.7967 19.6969 20.4873 19.3875L12.0998 11Z"
                  fill="currentColor"
                />
              </svg>
            </button>
            <div>
              <h3 class="mb-3 text-2xl font-semibold text-dark dark:text-white sm:text-3xl">
                Share your file
              </h3>
              <p class="mb-8 text-base text-body-color">
                You’ve created a sharable file. Invite users of Publish your
                file for public viewing.
              </p>

              <div class="mb-8">
                <label
                  for=""
                  class="mb-2.5 block text-base font-medium text-dark dark:text-white"
                >
                  Link
                </label>
                <div class="flex items-center gap-3">
                  <input
                    type="text"
                    value="www.tailgrids.com/figma"
                    class="h-12 w-full rounded-lg border border-stroke bg-transparent px-5 py-3 text-base text-dark outline-hidden focus:border-primary dark:border-dark-3 dark:text-white"
                  />
                  <button class="flex h-12 items-center justify-center gap-2 rounded-lg bg-gray-2 px-6 py-3 text-dark duration-200 hover:bg-primary hover:text-white dark:bg-white/5 dark:text-white dark:hover:bg-primary">
                    <span>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.6875 4.125L14.4062 0.875C14.1875 0.65625 13.875 0.53125 13.5625 0.53125H7.875C6.96875 0.53125 6.21875 1.28125 6.21875 2.1875V13.5938C6.21875 14.5 6.96875 15.25 7.875 15.25H16.375C17.2812 15.25 18.0312 14.5 18.0312 13.5938V4.96875C18.0312 4.65625 17.9062 4.34375 17.6875 4.125ZM14.4687 2.9375L15.6562 4.125H14.4687V2.9375ZM16.375 13.8438H7.875C7.75 13.8438 7.625 13.7188 7.625 13.5938V2.1875C7.625 2.0625 7.75 1.9375 7.875 1.9375H13.0625V4.8125C13.0625 5.1875 13.375 5.53125 13.7812 5.53125H16.625V13.625C16.625 13.75 16.5 13.8438 16.375 13.8438Z"
                          fill="currentColor"
                        />
                        <path
                          d="M13.7812 7.03125H9.65625C9.28125 7.03125 8.9375 7.34375 8.9375 7.75C8.9375 8.15625 9.25 8.46875 9.65625 8.46875H13.7812C14.1562 8.46875 14.5 8.15625 14.5 7.75C14.5 7.34375 14.1562 7.03125 13.7812 7.03125Z"
                          fill="currentColor"
                        />
                        <path
                          d="M13.7812 9.65625H9.65625C9.28125 9.65625 8.9375 9.96875 8.9375 10.375C8.9375 10.75 9.25 11.0938 9.65625 11.0938H13.7812C14.1562 11.0938 14.5 10.7813 14.5 10.375C14.4688 9.96875 14.1562 9.65625 13.7812 9.65625Z"
                          fill="currentColor"
                        />
                        <path
                          d="M13.0625 16.25C12.6875 16.25 12.3437 16.5625 12.3437 16.9688V17.8125C12.3437 17.9375 12.2187 18.0625 12.0937 18.0625H3.625C3.5 18.0625 3.375 17.9375 3.375 17.8125V6.375C3.375 6.25 3.5 6.125 3.625 6.125H4.6875C5.0625 6.125 5.40625 5.8125 5.40625 5.40625C5.40625 5 5.09375 4.6875 4.6875 4.6875H3.625C2.71875 4.6875 1.96875 5.4375 1.96875 6.34375V17.8125C1.96875 18.7188 2.71875 19.4688 3.625 19.4688H12.125C13.0312 19.4688 13.7812 18.7188 13.7812 17.8125V16.9688C13.7812 16.5625 13.4687 16.25 13.0625 16.25Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    Copy
                  </button>
                </div>
              </div>

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

export default Modal11;
