import imageOne from "../assets/images/blogs/blog-08/image-1.jpg";
import imageTwo from "../assets/images/blogs/blog-08/image-2.jpg";
import imageThree from "../assets/images/blogs/blog-08/image-3.jpg";
import { Link } from "react-router-dom";

const blogItems = [
  {
    image: imageOne,
    title: "How to use Facebook ads to sell online courses",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit duis vehicula orciut ultricies facilisis magna.",
  },
  {
    image: imageTwo,
    title: "What to do if template do not work properly",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit duis vehicula orciut ultricies facilisis magna.",
  },
  {
    image: imageThree,
    title: "Meet AutoManage, the best AI management tools",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit duis vehicula orciut ultricies facilisis magna.",
  },
];

const Blog = () => {
  return (
    <>
      <section className="bg-white py-20 dark:bg-dark lg:py-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            {blogItems.map((item, index) => (
              <div key={index} className="w-full px-4 md:w-1/2 lg:w-1/3">
                <div className="group mb-8 rounded-lg border border-stroke p-5 dark:border-dark-3">
                  <div className="mb-7 overflow-hidden rounded-sm">
                    <img
                      src={item.image}
                      alt="blog image"
                      className="w-full object-cover object-center duration-200 group-hover:rotate-6 group-hover:scale-125"
                    />
                  </div>
                  <div>
                    <h3>
                      <Link
                        to="#"
                        className="mb-5 line-clamp-2 cursor-pointer text-xl font-bold text-dark duration-200 hover:text-primary dark:text-white dark:hover:text-primary"
                      >
                        {item.title}
                      </Link>
                    </h3>
                    <p className="mb-7 line-clamp-3 text-base text-body-color dark:text-dark-6">
                      {item.subtitle}
                    </p>
                    <Link
                      to="#"
                      className="inline-flex items-center gap-2 text-dark duration-200 hover:gap-3.5 hover:text-primary dark:text-white dark:hover:text-primary"
                    >
                      Read More
                      <span>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.6875 16.0312C4.5 16.0312 4.3125 15.9687 4.1875 15.8125C3.90625 15.5312 3.90625 15.0938 4.1875 14.8125L13.6562 5.34375H6.09375C5.71875 5.34375 5.40625 5.03125 5.40625 4.65625C5.40625 4.28125 5.71875 3.96875 6.09375 3.96875H15.3125C15.6875 3.96875 16 4.28125 16 4.65625V13.9375C16 14.3125 15.6875 14.625 15.3125 14.625C14.9375 14.625 14.625 14.3125 14.625 13.9375V6.40625L5.1875 15.8438C5.0625 15.9688 4.875 16.0312 4.6875 16.0312Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
