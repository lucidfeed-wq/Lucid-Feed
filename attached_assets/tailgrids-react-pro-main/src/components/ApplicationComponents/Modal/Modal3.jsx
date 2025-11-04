import React, { useEffect, useRef, useState } from "react";

const Modal3 = () => {
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
          className="relative w-full max-w-[570px] rounded-[20px] bg-primary px-8 py-12 text-center md:px-[70px] md:py-[50px]"
        >
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white/10 text-white">
            <svg
              width="47"
              height="47"
              viewBox="0 0 47 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.6134 0.900024C11.0362 0.900024 0.900391 11.0358 0.900391 23.613C0.900391 36.1903 11.0362 46.4 23.6134 46.4C36.1906 46.4 46.4004 36.1903 46.4004 23.613C46.4004 11.0358 36.1906 0.900024 23.6134 0.900024ZM23.6134 43.8106C12.5158 43.8106 3.48982 34.7106 3.48982 23.613C3.48982 12.5155 12.5158 3.48946 23.6134 3.48946C34.711 3.48946 43.811 12.5155 43.811 23.613C43.811 34.7106 34.711 43.8106 23.6134 43.8106Z"
                fill="white"
              />
              <path
                d="M33.6768 26.2024H13.5532C12.8874 26.2024 12.2955 26.4983 11.8516 27.0162C11.4817 27.5341 11.2597 28.126 11.4077 28.7918C12.5174 34.5626 17.6223 38.8536 23.615 38.8536C29.6077 38.8536 34.7126 34.6365 35.8223 28.7918C35.9703 28.2 35.7483 27.5341 35.3784 27.0162C35.0085 26.4983 34.3426 26.2024 33.6768 26.2024ZM23.615 36.2642C19.102 36.2642 15.1808 33.1569 14.0711 28.7918H33.2329C32.0491 33.1569 28.128 36.2642 23.615 36.2642Z"
                fill="white"
              />
              <path
                d="M14.8109 19.6919C16.4386 19.6919 17.7703 18.3602 17.7703 16.7325C17.7703 15.1049 16.4386 13.7732 14.8109 13.7732C13.1833 13.7732 11.8516 15.1049 11.8516 16.7325C11.9255 18.4342 13.2573 19.6919 14.8109 19.6919Z"
                fill="white"
              />
              <path
                d="M32.4183 19.766C34.0527 19.766 35.3777 18.441 35.3777 16.8066C35.3777 15.1722 34.0527 13.8473 32.4183 13.8473C30.7839 13.8473 29.459 15.1722 29.459 16.8066C29.459 18.441 30.7839 19.766 32.4183 19.766Z"
                fill="white"
              />
            </svg>
          </div>
          <h3 className="pb-4 text-3xl font-bold text-white md:text-4xl">
            Congratulations!
          </h3>
          <p className="mb-9 text-base leading-relaxed text-white">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry Lorem Ipsum been.
          </p>
          <a
            href="/#"
            className="inline-block rounded-md border border-white px-[50px] py-3 text-center text-base font-medium text-white transition hover:bg-white hover:text-primary"
          >
            Know More
          </a>
          <button
            onClick={() => setModalOpen(false)}
            className="absolute right-6 top-6 flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white hover:text-primary"
          >
            <svg
              width="10"
              height="10"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.4917 7.65579L11.106 12.2645C11.2545 12.4128 11.4715 12.5 11.6738 12.5C11.8762 12.5 12.0931 12.4128 12.2416 12.2645C12.5621 11.9445 12.5623 11.4317 12.2423 11.1114C12.2422 11.1113 12.2422 11.1113 12.2422 11.1113C12.242 11.1111 12.2418 11.1109 12.2416 11.1107L7.64539 6.50351L12.2589 1.91221L12.2595 1.91158C12.5802 1.59132 12.5802 1.07805 12.2595 0.757793C11.9393 0.437994 11.4268 0.437869 11.1064 0.757418C11.1063 0.757543 11.1062 0.757668 11.106 0.757793L6.49234 5.34931L1.89459 0.740581L1.89396 0.739942C1.57364 0.420019 1.0608 0.420019 0.740487 0.739944C0.42005 1.05999 0.419837 1.57279 0.73985 1.89309L6.4917 7.65579ZM6.4917 7.65579L1.89459 12.2639L1.89395 12.2645C1.74546 12.4128 1.52854 12.5 1.32616 12.5C1.12377 12.5 0.906853 12.4128 0.758361 12.2645L1.1117 11.9108L0.758358 12.2645C0.437984 11.9445 0.437708 11.4319 0.757539 11.1116C0.757812 11.1113 0.758086 11.111 0.75836 11.1107L5.33864 6.50287L0.740487 1.89373L6.4917 7.65579Z"
                className="fill-current stroke-current"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal3;
