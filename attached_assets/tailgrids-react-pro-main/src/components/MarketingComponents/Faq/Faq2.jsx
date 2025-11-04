import React, { useState } from "react";

export default function Faq2() {
  return (
    <section className="bg-white pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                FAQ
              </span>
              <h2 className="text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
                Frequently ask questions
              </h2>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 xl:w-10/12">
            <AccordionItem
              header="Can I use TailGrids Pro for my clients projects?"
              text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything."
            />
            <AccordionItem
              header="Which license type is suitable for me?"
              text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything."
            />
            <AccordionItem
              header="Is TailGrids Well-documented?"
              text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything."
            />
            <AccordionItem
              header="Do you provide support?"
              text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything."
            />
            <AccordionItem
              header="Can I get the Feature Updates?"
              text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const AccordionItem = ({ header, text }) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    event.preventDefault();
    setActive(!active);
  };

  return (
    <div className="mb-10 rounded-lg bg-white px-7 py-6 shadow-[0px_4px_18px_0px_rgba(0,0,0,0.07)] dark:bg-dark-2 md:px-10 md:py-8">
      <button
        className={`faq-btn flex w-full items-center justify-between text-left`}
        onClick={() => handleToggle()}
      >
        <h4 className="mr-2 text-base font-semibold text-dark dark:text-white sm:text-lg md:text-xl lg:text-2xl">
          {header}
        </h4>
        <span className="icon inline-flex h-8 w-full max-w-[32px] items-center justify-center rounded-full border-2 border-primary text-lg font-semibold text-primary">
          {active ? "-" : "+"}
        </span>
      </button>

      <div className={`${active ? "block" : "hidden"}`}>
        <p className="text-relaxed pt-6 text-base text-body-color dark:text-dark-6">
          {text}
        </p>
      </div>
    </div>
  );
};
