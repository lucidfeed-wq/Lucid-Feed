import React from "react";

function Blog8() {
  return (
    <section className="bg-white py-20 dark:bg-dark lg:py-[120px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <BlogItem
            image="https://i.ibb.co/7nd0pdm/image-1.jpg"
            title="How to use Facebook ads to sell online courses"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit duis vehicula orciut ultricies facilisis magna."
          />

          <BlogItem
            image="https://i.ibb.co/MhJsVk9/image-2.jpg"
            title="What to do if template do not work properly"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit duis vehicula orciut ultricies facilisis magna."
          />

          <BlogItem
            image="https://i.ibb.co/YWCPRHf/image-3.jpg"
            title="Meet AutoManage, the best AI management tools"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit duis vehicula orciut ultricies facilisis magna."
          />
        </div>
      </div>
    </section>
  );
}

export default Blog8;

function BlogItem({ title, image, paragraph }) {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="group mb-8 rounded-lg border border-stroke p-5 dark:border-dark-3">
        <div className="mb-7 overflow-hidden rounded-sm">
          <img
            src={image}
            alt={title}
            className="w-full object-cover object-center duration-200 group-hover:rotate-6 group-hover:scale-125"
          />
        </div>
        <div>
          <h3 className="mb-5 line-clamp-2 cursor-pointer text-xl font-bold text-dark duration-200 hover:text-primary dark:text-white dark:hover:text-primary">
            {title}
          </h3>
          <p className="mb-7 line-clamp-3 text-base text-body-color dark:text-dark-6">
            {paragraph}
          </p>
          <a
            href="javascript:void(0)"
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
          </a>
        </div>
      </div>
    </div>
  );
}
