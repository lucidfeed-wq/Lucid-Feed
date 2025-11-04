import React, { useEffect, useRef, useState } from "react";

function Modal7() {
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
            <div class="mb-8 overflow-hidden rounded-lg">
              <img
                src="https://i.ibb.co/mHn7111/image.jpg"
                alt="modal image"
                class="w-full object-cover object-center"
              />
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

export default Modal7;
