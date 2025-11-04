import React from "react";

export default function Faq5() {
  return (
    <section className="relative z-20 overflow-hidden bg-white pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Check This Out
              </span>
              <h2 className="text-3xl font-bold text-dark dark:text-white sm:text-[40px]">
                Frequently Ask Questions
              </h2>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <AccordionItem
            header="Is TailGrids Well-documented?"
            text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content ui/ux strategy that we do writing your first blog post."
          />
          <AccordionItem
            header="Is it one-time payment?"
            text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content ui/ux strategy that we do writing your first blog post."
          />
          <AccordionItem
            header="Do you provide support?"
            text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content ui/ux strategy that we do writing your first blog post."
          />
          <AccordionItem
            header="Which license type is suitable for me?"
            text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content ui/ux strategy that we do writing your first blog post."
          />
        </div>
      </div>
    </section>
  );
}

const AccordionItem = ({ header, text }) => {
  return (
    <div className="w-full px-4 lg:w-1/2">
      <div className="relative mb-10 overflow-hidden rounded-lg border border-[#F3F4FE] p-6 dark:border-dark-3/50 sm:px-10 sm:py-11 lg:px-8 2xl:px-14">
        <h4 className="mb-6 text-lg font-semibold text-dark dark:text-white sm:text-xl lg:text-lg xl:text-xl">
          {header}
        </h4>
        <p className="text-base leading-relaxed text-body-color dark:text-dark-6">
          {text}
        </p>
        <span className="absolute left-0 top-0 z-[-1]">
          <svg
            width="155"
            height="245"
            viewBox="0 0 155 245"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="17.5"
              cy="124.5"
              rx="137.5"
              ry="139.5"
              fill="url(#paint0_linear)"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="17.5"
                y1="-15"
                x2="17.5"
                y2="264"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3056D3" stopOpacity="0.09" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </span>
        <span className="absolute bottom-2 right-2 z-[-1]">
          <DotShape />
        </span>
      </div>
    </div>
  );
};

const DotShape = () => {
  return (
    <>
      <svg
        width="23"
        height="44"
        viewBox="0 0 23 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="21.8062"
          cy="42.7256"
          r="1.17235"
          transform="rotate(180 21.8062 42.7256)"
          fill="#3056D3"
        />
        <circle
          cx="21.8062"
          cy="32.4089"
          r="1.17235"
          transform="rotate(180 21.8062 32.4089)"
          fill="#3056D3"
        />
        <circle
          cx="21.8062"
          cy="22.0923"
          r="1.17235"
          transform="rotate(180 21.8062 22.0923)"
          fill="#3056D3"
        />
        <circle
          cx="21.8062"
          cy="11.7754"
          r="1.17235"
          transform="rotate(180 21.8062 11.7754)"
          fill="#3056D3"
        />
        <circle
          cx="21.8062"
          cy="1.45875"
          r="1.17235"
          transform="rotate(180 21.8062 1.45875)"
          fill="#3056D3"
        />
        <circle
          cx="11.4898"
          cy="42.7256"
          r="1.17235"
          transform="rotate(180 11.4898 42.7256)"
          fill="#3056D3"
        />
        <circle
          cx="11.4898"
          cy="32.4089"
          r="1.17235"
          transform="rotate(180 11.4898 32.4089)"
          fill="#3056D3"
        />
        <circle
          cx="11.4898"
          cy="22.0923"
          r="1.17235"
          transform="rotate(180 11.4898 22.0923)"
          fill="#3056D3"
        />
        <circle
          cx="11.4898"
          cy="11.7754"
          r="1.17235"
          transform="rotate(180 11.4898 11.7754)"
          fill="#3056D3"
        />
        <circle
          cx="11.4898"
          cy="1.45875"
          r="1.17235"
          transform="rotate(180 11.4898 1.45875)"
          fill="#3056D3"
        />
        <circle
          cx="1.1714"
          cy="42.7256"
          r="1.17235"
          transform="rotate(180 1.1714 42.7256)"
          fill="#3056D3"
        />
        <circle
          cx="1.1714"
          cy="32.4089"
          r="1.17235"
          transform="rotate(180 1.1714 32.4089)"
          fill="#3056D3"
        />
        <circle
          cx="1.1714"
          cy="22.0923"
          r="1.17235"
          transform="rotate(180 1.1714 22.0923)"
          fill="#3056D3"
        />
        <circle
          cx="1.1714"
          cy="11.7754"
          r="1.17235"
          transform="rotate(180 1.1714 11.7754)"
          fill="#3056D3"
        />
        <circle
          cx="1.1714"
          cy="1.45875"
          r="1.17235"
          transform="rotate(180 1.1714 1.45875)"
          fill="#3056D3"
        />
      </svg>
    </>
  );
};
