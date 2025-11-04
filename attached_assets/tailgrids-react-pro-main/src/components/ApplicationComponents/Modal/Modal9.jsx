import React, { useEffect, useRef, useState } from "react";

function Modal9() {
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

      {modalOpen && (
        <div className="fixed left-0 top-0 flex h-screen w-full items-center justify-center overflow-y-scroll bg-gray-5 py-10 dark:bg-dark">
          <div
            ref={modal}
            onFocus={() => setModalOpen(true)}
            onBlur={() => setModalOpen(false)}
            className="relative mx-auto w-full max-w-[770px] rounded-xl bg-white p-10 shadow-xl dark:bg-dark-2"
          >
            <button
              onClick={() => setModalOpen(false)}
              className="absolute right-10 top-10 text-dark-4 duration-200 hover:text-dark dark:hover:text-white"
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
              <h3 className="text-2xl font-bold text-dark dark:text-white">
                Members
              </h3>
              <p className="mb-5 text-base text-body-color dark:text-dark-6">
                Manage your users via send invitation link
              </p>

              <div className="mb-8 flex items-center gap-3.5">
                <div className="relative w-full">
                  <input
                    type="email"
                    placeholder="Enter user email"
                    className="placehoder-dark-6 h-12 w-full rounded-lg border border-stroke bg-transparent py-3 pl-12 pr-4 text-dark outline-hidden focus:border-primary dark:border-dark-3 dark:text-white"
                  />
                  <span className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center text-dark-5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.9998 2.40002H1.9998C1.1498 2.40002 0.424805 3.10002 0.424805 3.97502V12.075C0.424805 12.925 1.1248 13.65 1.9998 13.65H13.9998C14.8498 13.65 15.5748 12.95 15.5748 12.075V3.95002C15.5748 3.10002 14.8498 2.40002 13.9998 2.40002ZM13.9998 3.52502C14.0248 3.52502 14.0498 3.52502 14.0748 3.52502L7.9998 7.42502L1.9248 3.52502C1.9498 3.52502 1.9748 3.52502 1.9998 3.52502H13.9998ZM13.9998 12.475H1.9998C1.7498 12.475 1.5498 12.275 1.5498 12.025V4.62502L7.3998 8.37502C7.5748 8.50002 7.7748 8.55002 7.9748 8.55002C8.1748 8.55002 8.3748 8.50002 8.5498 8.37502L14.3998 4.62502V12.05C14.4498 12.3 14.2498 12.475 13.9998 12.475Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </div>
                <button className="flex h-12 items-center justify-center rounded-lg bg-primary px-5 py-3 text-base font-medium text-white hover:bg-primary/90">
                  Invite
                </button>
              </div>

              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-5">
                    <div className="aspect-square w-[52px] overflow-hidden rounded-full">
                      <img
                        src="https://i.ibb.co/VCdHCxg/image-1.jpg"
                        alt="modal image"
                        className="w-full object-cover object-center"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-dark dark:text-white">
                        Ethan Alex
                      </h3>
                      <p className="text-base text-body-color dark:text-dark-6">
                        ethanalex@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="relative">
                    <select
                      name=""
                      id=""
                      className="appearance-none rounded-lg bg-gray-3 py-2.5 pl-4 pr-9 text-base font-medium text-dark-4 outline-hidden dark:bg-white/5 dark:text-dark-7"
                    >
                      <option value="">Editor</option>
                      <option value="">Admin</option>
                      <option value="">Visitor</option>
                    </select>
                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-dark dark:text-white">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 11.4C7.85 11.4 7.725 11.35 7.6 11.25L1.85 5.6C1.625 5.375 1.625 5.025 1.85 4.8C2.075 4.575 2.425 4.575 2.65 4.8L8 10.025L13.35 4.75C13.575 4.525 13.925 4.525 14.15 4.75C14.375 4.975 14.375 5.325 14.15 5.55L8.4 11.2C8.275 11.325 8.15 11.4 8 11.4Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-5">
                    <div className="aspect-square w-[52px] overflow-hidden rounded-full">
                      <img
                        src="https://i.ibb.co/cLjs5Xb/image-2.jpg"
                        alt="modal image"
                        className="w-full object-cover object-center"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-dark dark:text-white">
                        Maren Lubin
                      </h3>
                      <p className="text-base text-body-color dark:text-dark-6">
                        lubinmaren@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="relative">
                    <select
                      name=""
                      id=""
                      className="appearance-none rounded-lg bg-gray-3 py-2.5 pl-4 pr-9 text-base font-medium text-dark-4 outline-hidden dark:bg-white/5 dark:text-dark-7"
                    >
                      <option value="">Editor</option>
                      <option value="">Admin</option>
                      <option value="">Visitor</option>
                    </select>
                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-dark dark:text-white">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 11.4C7.85 11.4 7.725 11.35 7.6 11.25L1.85 5.6C1.625 5.375 1.625 5.025 1.85 4.8C2.075 4.575 2.425 4.575 2.65 4.8L8 10.025L13.35 4.75C13.575 4.525 13.925 4.525 14.15 4.75C14.375 4.975 14.375 5.325 14.15 5.55L8.4 11.2C8.275 11.325 8.15 11.4 8 11.4Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-5">
                    <div className="aspect-square w-[52px] overflow-hidden rounded-full">
                      <img
                        src="https://i.ibb.co/dDjRX8P/image-3.jpg"
                        alt="modal image"
                        className="w-full object-cover object-center"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-dark dark:text-white">
                        Jakob Botosh
                      </h3>
                      <p className="text-base text-body-color dark:text-dark-6">
                        boxtosjack@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="relative">
                    <select
                      name=""
                      id=""
                      className="appearance-none rounded-lg bg-gray-3 py-2.5 pl-4 pr-9 text-base font-medium text-dark-4 outline-hidden dark:bg-white/5 dark:text-dark-7"
                    >
                      <option value="">Editor</option>
                      <option value="">Admin</option>
                      <option value="">Visitor</option>
                    </select>
                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-dark dark:text-white">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 11.4C7.85 11.4 7.725 11.35 7.6 11.25L1.85 5.6C1.625 5.375 1.625 5.025 1.85 4.8C2.075 4.575 2.425 4.575 2.65 4.8L8 10.025L13.35 4.75C13.575 4.525 13.925 4.525 14.15 4.75C14.375 4.975 14.375 5.325 14.15 5.55L8.4 11.2C8.275 11.325 8.15 11.4 8 11.4Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Modal9;
