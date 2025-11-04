import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Breadcrumb = ({ pageName }) => {
  return (
    <>
      <section className="border-y border-stroke dark:border-dark-3 dark:bg-dark">
        <div className="container mx-auto">
          <div className="w-full">
            <div className="bg-white py-4 dark:bg-dark md:py-5">
              <ul className="flex items-center">
                <li className="flex items-center">
                  <Link
                    to="/"
                    className="text-base font-semibold text-dark hover:text-primary dark:text-white dark:hover:text-primary"
                  >
                    Home
                  </Link>

                  <span className="px-3 text-body-color dark:text-dark-6">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.2 8.55001L10.3781 2.64376C10.125 2.39064 9.73126 2.39064 9.47813 2.64376C9.22501 2.89689 9.22501 3.29064 9.47813 3.54376L14.2031 8.35314H2.25001C1.91251 8.35314 1.63126 8.63439 1.63126 8.97189C1.63126 9.30939 1.91251 9.61876 2.25001 9.61876H14.2594L9.47813 14.4844C9.22501 14.7375 9.22501 15.1313 9.47813 15.3844C9.59063 15.4969 9.75938 15.5531 9.92813 15.5531C10.0969 15.5531 10.2656 15.4969 10.3781 15.3563L16.2 9.45001C16.4531 9.19689 16.4531 8.80314 16.2 8.55001Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </li>

                <li className="text-base font-semibold text-body-color dark:text-dark-6">
                  {pageName}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

Breadcrumb.propTypes = {
  pageName: PropTypes.string.isRequired,
};

export default Breadcrumb;
