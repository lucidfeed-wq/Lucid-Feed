import React, { useState } from "react";

const Pricing10 = () => {
  const [subscribe, setSubscribe] = useState("monthly");

  return (
    <section className="relative z-20 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Our Pricing Plans
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.208] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                Pricing and Plans
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-10 text-center">
          <div className="flex items-center justify-center">
            <button
              onClick={() => setSubscribe("monthly")}
              className={`relative border-b-[3px] px-6 py-4 text-lg font-semibold ${
                subscribe === "monthly"
                  ? "border-primary text-primary"
                  : "border-[#E9EEFF] text-dark dark:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setSubscribe("yearly")}
              className={`relative border-b-[3px] px-6 py-4 text-lg font-semibold ${
                subscribe === "yearly"
                  ? "border-primary text-primary"
                  : "border-[#E9EEFF] text-dark dark:text-white"
              }`}
            >
              Yearly
              <span className="absolute -right-14 top-0 whitespace-nowrap rounded-full bg-[#F47070] px-[10px] py-1 text-[10px] font-semibold leading-[15px] text-white">
                Save 40%
              </span>
            </button>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          <PricingCard
            type="Free Lite"
            subTitle="Lorem Ipsum simply dummy text of the printing."
            priceMonthly="29.99"
            priceYearly="59.00"
            title="Plan Includes:"
            button="Start 14 Days Free Trial"
            first
            active
            subscribe={subscribe}
          >
            <List>Core UI Components</List>
            <List>Use on Unlimited Projects</List>
            <List>Personal and Commercial Use</List>
            <List>Lifetime Free Updates</List>
            <List>Figma Source File</List>
          </PricingCard>
          <PricingCard
            type="Business Plan"
            subTitle="Lorem Ipsum simply dummy text of the printing."
            priceMonthly="59.00"
            priceYearly="99.00"
            title="Plan Includes:"
            button="Get The Plan Now"
            second
            subscribe={subscribe}
          >
            <List>Core UI Components</List>
            <List>Use on Unlimited Projects</List>
            <List>Personal and Commercial Use</List>
            <List>Lifetime Free Updates</List>
            <List>Figma Source File</List>
          </PricingCard>
          <PricingCard
            type="Extended Plan"
            subTitle="Lorem Ipsum simply dummy text of the printing."
            priceMonthly="229.99"
            priceYearly="179.00"
            title="Plan Includes:"
            button="Get The Plan Now"
            third
            subscribe={subscribe}
          >
            <List>Core UI Components</List>
            <List>Use on Unlimited Projects</List>
            <List>Personal and Commercial Use</List>
            <List>Lifetime Free Updates</List>
            <List>Figma Source File</List>
          </PricingCard>
        </div>
      </div>
    </section>
  );
};

export default Pricing10;

const PricingCard = ({
  children,
  title,
  subTitle,
  priceMonthly,
  priceYearly,
  type,
  button,
  first,
  second,
  third,
  active,
  subscribe,
}) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="relative z-10 mb-10 rounded-[15px] border-2 border-stroke bg-white px-8 py-11 dark:border-dark-3 dark:bg-dark-2 sm:px-11 md:px-9 lg:px-8 xl:px-11">
          <span className="absolute right-6 top-6 -z-10">
            {first && (
              <svg
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.2">
                  <path
                    d="M52.5001 38.5C51.4501 38.5 50.4876 39.375 50.4876 40.5125V48.3C50.4876 49.0875 49.875 49.7 49.0876 49.7H6.91255C6.12505 49.7 5.51255 49.0875 5.51255 48.3V40.5125C5.51255 39.375 4.55005 38.5 3.50005 38.5C2.45005 38.5 1.48755 39.375 1.48755 40.5125V48.3C1.48755 51.275 3.85005 53.6375 6.82505 53.6375H49.0876C52.0625 53.6375 54.4251 51.275 54.4251 48.3V40.5125C54.5126 39.375 53.5501 38.5 52.5001 38.5Z"
                    fill="#3758F9"
                  />
                  <path
                    d="M26.6 40.6875C26.95 41.0375 27.475 41.2125 28 41.2125C28.525 41.2125 28.9625 41.0375 29.4 40.6875L42.0875 28.35C42.875 27.5625 42.875 26.3375 42.0875 25.55C41.3 24.7625 40.075 24.7625 39.2875 25.55L30.0125 34.65V4.37505C30.0125 3.32505 29.1375 2.36255 28 2.36255C26.95 2.36255 25.9875 3.23755 25.9875 4.37505V34.65L16.7125 25.55C15.925 24.7625 14.7 24.85 13.9125 25.55C13.125 26.3375 13.2125 27.5625 13.9125 28.35L26.6 40.6875Z"
                    fill="#3758F9"
                  />
                </g>
              </svg>
            )}
            {second && (
              <svg
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.2">
                  <path
                    d="M21.9624 20.6498C21.9624 24.1498 24.7624 26.9498 28.2624 26.9498C31.7624 26.9498 34.5624 24.1498 34.5624 20.6498C34.5624 17.1498 31.7624 14.3498 28.2624 14.3498C24.8499 14.2623 21.9624 17.1498 21.9624 20.6498ZM31.1499 20.6498C31.1499 22.2248 29.8374 23.4498 28.3499 23.4498C26.8624 23.4498 25.5499 22.1373 25.5499 20.6498C25.5499 19.1623 26.8624 17.8498 28.3499 17.8498C29.8374 17.8498 31.1499 19.0748 31.1499 20.6498Z"
                    fill="#3758F9"
                  />
                  <path
                    d="M7.08751 27.7374C7.52501 27.7374 7.87501 27.5624 8.13751 27.3874L14.35 22.4874C15.1375 21.8749 15.225 20.8249 14.6125 20.0374C14 19.2499 12.95 19.1624 12.1625 19.7749L9.01251 22.3124C11.2875 13.3874 19.1625 7.1749 28.35 7.1749C37.5375 7.1749 45.5 13.3874 47.775 22.3124C48.0375 23.2749 49 23.7999 49.875 23.5374C50.8375 23.2749 51.3625 22.3124 51.1 21.4374C48.475 10.9374 39.025 3.5874 28.2625 3.5874C17.5875 3.5874 8.3125 10.7624 5.6 21.0874L3.5875 18.3749C2.975 17.5874 1.925 17.4124 1.1375 18.0249C0.350005 18.6374 0.175005 19.6874 0.787505 20.4749L5.6875 27.0374C5.95 27.3874 6.3875 27.6499 6.825 27.7374C6.9125 27.7374 7.00001 27.7374 7.08751 27.7374Z"
                    fill="#3758F9"
                  />
                  <path
                    d="M54.9499 39.1999L51.5374 31.7624C51.3624 31.3249 51.0124 30.9749 50.4874 30.7999C50.0499 30.6249 49.5249 30.7124 49.0874 30.8874L41.9999 34.3874C41.1249 34.8249 40.7749 35.8749 41.2124 36.7499C41.6499 37.6249 42.6999 37.9749 43.5749 37.5374L46.9874 35.8749C45.4124 40.0749 42.5249 43.4874 38.9374 45.7624V37.5374C38.9374 33.0749 35.6124 29.3999 31.4999 29.3999H24.7624C20.6499 29.3999 17.3249 33.0749 17.3249 37.6249V45.4999C13.6499 43.0499 10.8499 39.4624 9.44993 35.0874C9.18743 34.2124 8.13743 33.6874 7.26243 33.9499C6.38743 34.2124 5.86243 35.2624 6.12493 36.1374C9.27493 45.7624 18.1999 52.2374 28.3499 52.2374C38.0624 52.2374 46.7249 46.2874 50.2249 37.2749L51.7124 40.5999C51.9749 41.2124 52.6749 41.6499 53.2874 41.6499C53.5499 41.6499 53.8124 41.5624 53.9874 41.4749C54.9499 41.1249 55.2999 40.0749 54.9499 39.1999ZM20.8249 47.3374V37.5374C20.8249 34.9124 22.5749 32.8124 24.7624 32.8124H26.3374V38.8499C26.3374 39.8124 27.1249 40.5999 28.0874 40.5999C29.0499 40.5999 29.8374 39.8124 29.8374 38.8499V32.8124H31.4999C33.6874 32.8124 35.4374 34.9124 35.4374 37.4499V47.4249C33.1624 48.2999 30.7999 48.7374 28.2624 48.7374C25.6374 48.8249 23.0999 48.2999 20.8249 47.3374Z"
                    fill="#3758F9"
                  />
                </g>
              </svg>
            )}
            {third && (
              <svg
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.2">
                  <path
                    d="M32.4626 41.825C28.9626 41.825 26.1626 44.625 26.1626 48.125C26.1626 51.625 28.9626 54.425 32.4626 54.425C35.9626 54.425 38.7626 51.625 38.7626 48.125C38.7626 44.7125 35.8751 41.825 32.4626 41.825ZM32.4626 50.575C31.1501 50.575 30.1001 49.525 30.1001 48.2125C30.1001 46.9 31.1501 45.85 32.4626 45.85C33.7751 45.85 34.8251 46.9 34.8251 48.2125C34.8251 49.4375 33.6876 50.575 32.4626 50.575Z"
                    fill="#3758F9"
                  />
                  <path
                    d="M15.8376 41.825C12.3376 41.825 9.5376 44.625 9.5376 48.125C9.5376 51.625 12.3376 54.425 15.8376 54.425C19.3376 54.425 22.1376 51.625 22.1376 48.125C22.1376 44.7125 19.2501 41.825 15.8376 41.825ZM15.8376 50.575C14.5251 50.575 13.4751 49.525 13.4751 48.2125C13.4751 46.9 14.5251 45.85 15.8376 45.85C17.1501 45.85 18.2001 46.9 18.2001 48.2125C18.2001 49.4375 17.1501 50.575 15.8376 50.575Z"
                    fill="#3758F9"
                  />
                  <path
                    d="M50.9251 1.57495H46.2001C44.1001 1.57495 42.2626 3.14995 42.0001 5.24995L40.6001 15.3125H36.9251V8.92495C36.8376 7.34995 35.6126 6.12495 34.1251 6.12495H27.6501C27.3876 4.81245 26.2501 3.84995 24.9376 3.84995H17.3251C15.8376 3.84995 14.5251 5.16245 14.5251 6.82495V8.48745H8.1376C6.6501 8.48745 5.3376 9.71245 5.3376 11.1125V15.4C4.6376 15.575 4.1126 15.925 3.6751 16.45C3.1501 17.15 2.8876 18.1125 3.1501 18.9875C3.1501 19.075 3.1501 19.075 3.1501 19.1625L8.5751 35.5249C8.9251 36.7499 10.0626 37.6249 11.3751 37.6249H35.5251C38.7626 37.6249 41.5626 35.1749 42.0001 31.9374L45.6751 5.77495C45.6751 5.59995 45.8501 5.51245 46.0251 5.51245H50.7501C51.8001 5.51245 52.7626 4.63745 52.7626 3.49995C52.7626 2.36245 51.9751 1.57495 50.9251 1.57495ZM32.9001 15.3125H27.6501V10.0625H32.9001V15.3125ZM18.5501 7.78745H23.8001V8.92495V15.3125H18.5501V11.2V7.78745ZM9.3626 12.3375H14.6126V15.3125H9.3626V12.3375ZM38.2376 31.3249C38.0626 32.6374 36.9251 33.6 35.6126 33.6H12.1626L7.4376 19.25H39.9876L38.2376 31.3249Z"
                    fill="#3758F9"
                  />
                </g>
              </svg>
            )}
          </span>
          <div>
            <h3 className="mb-2 text-xl font-semibold text-dark dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
              {type}
            </h3>
            <p className="mb-8 max-w-[185px] text-sm text-body-color dark:text-dark-6">
              {subTitle}
            </p>
          </div>
          <div className="mb-9 rounded-[10px] bg-[#F1F4FF] py-[18px] text-center dark:bg-dark">
            <h2 className="text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-3xl xl:text-[38px] xl:leading-[46px]">
              <sup className="text-xl font-medium text-body-color dark:text-dark-6">
                $
              </sup>
              <span>
                {" "}
                {subscribe === "monthly" && priceMonthly}
                {subscribe === "yearly" && priceYearly}{" "}
              </span>
              <span className="text-base font-medium text-body-color dark:text-dark-6">
                /{subscribe === "monthly" && "month"}
                {subscribe === "yearly" && "year"}
              </span>
            </h2>
          </div>
          <h5 className="mb-6 text-lg font-medium text-dark dark:text-white">
            {title}
          </h5>
          <div className="mb-9 space-y-[14px]">{children}</div>
          <a
            href="/#"
            className={`flex w-full items-center justify-center rounded-md border p-3 text-base font-medium capitalize ${
              active
                ? "border-transparent bg-primary text-white hover:bg-blue-dark"
                : `border-primary text-primary hover:bg-primary hover:text-white`
            } `}
          >
            {button}
          </a>
        </div>
      </div>
    </>
  );
};

const List = ({ children }) => {
  return (
    <p className="flex items-center gap-3 text-base text-body-color dark:text-dark-6">
      <span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.9374 4.1875C18.6562 3.90625 18.2187 3.90625 17.9374 4.1875L7.31243 14.5L2.06243 9.34375C1.78118 9.0625 1.34368 9.09375 1.06243 9.34375C0.781178 9.625 0.812428 10.0625 1.06243 10.3437L6.59368 15.7187C6.78118 15.9062 7.03118 16 7.31243 16C7.59368 16 7.81243 15.9062 8.03118 15.7187L18.9374 5.125C19.2187 4.90625 19.2187 4.46875 18.9374 4.1875Z"
            fill="#13C296"
          />
        </svg>
      </span>
      {children}
    </p>
  );
};
