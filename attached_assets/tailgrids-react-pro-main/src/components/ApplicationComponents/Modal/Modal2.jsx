import React, { useEffect, useRef, useState } from "react";

const Modal2 = () => {
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
    <div className="container mx-auto py-20">
      <button
        ref={trigger}
        onClick={() => setModalOpen(!modalOpen)}
        className="rounded-full bg-primary px-6 py-3 text-base font-medium text-white"
      >
        Open Modal
      </button>

      <div
        className={`fixed left-0 top-0 flex h-full min-h-screen w-full items-center justify-center bg-dark/90 px-4 py-5 ${
          modalOpen ? "block" : "hidden"
        }`}
      >
        <div
          ref={modal}
          onFocus={() => setModalOpen(true)}
          onBlur={() => setModalOpen(false)}
          className="w-full max-w-[570px] rounded-[20px] bg-white px-8 py-12 text-center dark:bg-dark-2 md:px-[70px] md:py-[50px]"
        >
          <div className="mx-auto mb-5 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-red-light-5 text-red-dark">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.6875 15.4875L14.6625 2.57498C14.025 1.71248 13.05 1.22498 12 1.22498C10.9125 1.22498 9.93753 1.71248 9.33753 2.57498L1.31253 15.4875C0.562527 16.5 0.450027 17.8125 1.01253 18.9375C1.57503 20.0625 2.70003 20.775 3.97503 20.775H20.025C21.3 20.775 22.425 20.0625 22.9875 18.9375C23.55 17.85 23.4375 16.5 22.6875 15.4875ZM21.4875 18.1875C21.1875 18.75 20.6625 19.0875 20.025 19.0875H3.97503C3.33753 19.0875 2.81253 18.75 2.51253 18.1875C2.25003 17.625 2.28753 16.9875 2.66253 16.5L10.6875 3.58748C10.9875 3.17498 11.475 2.91248 12 2.91248C12.525 2.91248 13.0125 3.13748 13.3125 3.58748L21.3375 16.5C21.7125 16.9875 21.75 17.625 21.4875 18.1875Z"
                fill="currentColor"
              />
              <path
                d="M12 8.20001C11.55 8.20001 11.1375 8.57501 11.1375 9.06251V13.15C11.1375 13.6 11.5125 14.0125 12 14.0125C12.4875 14.0125 12.8625 13.6375 12.8625 13.15V9.02501C12.8625 8.57501 12.45 8.20001 12 8.20001Z"
                fill="currentColor"
              />
              <path
                d="M12 15C11.55 15 11.1375 15.375 11.1375 15.8625V16.05C11.1375 16.5 11.5125 16.9125 12 16.9125C12.4875 16.9125 12.8625 16.5375 12.8625 16.05V15.825C12.8625 15.375 12.45 15 12 15Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <h3 className="pb-[22px] text-xl font-bold text-dark dark:text-white sm:text-2xl">
            Deactivate Your Account
          </h3>
          <p className="mb-4 text-base leading-relaxed text-body-color dark:text-dark-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry Lorem Ipsum been.
          </p>
          <div className="-mx-3 flex flex-wrap">
            <div className="w-1/2 px-3">
              <button
                onClick={() => setModalOpen(false)}
                className="block w-full rounded-md border border-stroke p-3 text-center text-base font-medium text-dark transition hover:border-red-dark hover:bg-red-dark hover:text-white dark:text-white"
              >
                Cancel
              </button>
            </div>
            <div className="w-1/2 px-3">
              <button className="block w-full rounded-md border border-red-dark bg-red-dark p-3 text-center text-base font-medium text-white transition hover:bg-red-dark/90">
                Deactivate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal2;
