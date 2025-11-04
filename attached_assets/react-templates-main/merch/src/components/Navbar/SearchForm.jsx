const SearchForm = () => {
  return (
    <>
      <div className="hidden w-full lg:flex">
        <form className="relative flex w-full items-center rounded-md border border-stroke bg-gray-2 dark:border-dark-3 dark:bg-dark-2">
          <div className="relative border-r border-stroke dark:border-dark-3">
            <select className="appearance-none bg-transparent py-[14px] pl-[22px] pr-10 text-base font-medium text-dark outline-hidden dark:text-white">
              <option className="dark:bg-dark-2">All categories</option>
              <option className="dark:bg-dark-2">Best matches</option>
              <option className="dark:bg-dark-2">Newest</option>
            </select>
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-dark dark:text-white">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current"
              >
                <path d="M7.00001 9.975C6.86876 9.975 6.75938 9.93125 6.65001 9.84375L1.61876 4.9C1.42188 4.70312 1.42188 4.39687 1.61876 4.2C1.81563 4.00312 2.12188 4.00312 2.31876 4.2L7.00001 8.77187L11.6813 4.15625C11.8781 3.95937 12.1844 3.95937 12.3813 4.15625C12.5781 4.35312 12.5781 4.65937 12.3813 4.85625L7.35001 9.8C7.24063 9.90937 7.13126 9.975 7.00001 9.975Z" />
              </svg>
            </span>
          </div>
          <input
            type="text"
            placeholder="I'm shopping for..."
            className="w-full bg-transparent py-3 pl-6 pr-[58px] text-base text-body-color outline-hidden dark:text-dark-6"
          />
          <button className="absolute right-0 top-0 flex h-full w-[52px] items-center justify-center rounded-br-md rounded-tr-md border border-primary bg-primary text-white">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current"
            >
              <path d="M23.025 20.8875L16.8375 15.8625C19.3875 12.375 19.125 7.3875 15.9375 4.2375C14.25 2.55 12 1.6125 9.6 1.6125C7.2 1.6125 4.95 2.55 3.2625 4.2375C-0.225 7.725 -0.225 13.425 3.2625 16.9125C4.95 18.6 7.2 19.5375 9.6 19.5375C11.8875 19.5375 14.025 18.675 15.7125 17.1375L21.975 22.2C22.125 22.3125 22.3125 22.3875 22.5 22.3875C22.7625 22.3875 22.9875 22.275 23.1375 22.0875C23.4375 21.7125 23.4 21.1875 23.025 20.8875ZM9.6 17.85C7.65 17.85 5.85 17.1 4.4625 15.7125C1.6125 12.8625 1.6125 8.25 4.4625 5.4375C5.85 4.05 7.65 3.3 9.6 3.3C11.55 3.3 13.35 4.05 14.7375 5.4375C17.5875 8.2875 17.5875 12.9 14.7375 15.7125C13.3875 17.1 11.55 17.85 9.6 17.85Z" />
            </svg>
          </button>
        </form>
      </div>
    </>
  );
};

export default SearchForm;
