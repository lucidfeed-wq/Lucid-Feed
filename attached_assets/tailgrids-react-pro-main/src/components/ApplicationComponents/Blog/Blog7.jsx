import React from "react";

function Blog7() {
  return (
    <section className="bg-white py-20 dark:bg-dark lg:py-[120px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <BlogItem
            image="https://i.ibb.co/mtGTbWq/image-3.jpg"
            title="How to use Facebook ads to sell online courses"
            tag="tech"
            publishedDate="March 20, 2028"
          />
          <BlogItem
            image="https://i.ibb.co/GdVRYQn/image-2.jpg"
            title="What to do if template do not work properly"
            tag="MODERN"
            publishedDate="May 20, 2028"
          />
          <BlogItem
            image="https://i.ibb.co/MVkqG5g/image-1.jpg"
            title="Meet AutoManage, the best AI management tools"
            tag="tools"
            publishedDate="June 20, 2028"
          />
        </div>
      </div>
    </section>
  );
}

export default Blog7;

function BlogItem({ image, title, tag, publishedDate }) {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="mb-8">
        <div className="mb-7">
          <img
            src={image}
            alt={title}
            className="w-full object-cover object-center"
          />
        </div>
        <div className="flex gap-6">
          <div className="mt-3 h-0.5 w-8 bg-dark dark:bg-white"></div>
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="text-base uppercase text-dark dark:text-white">
                {tag}
              </span>
              <span className="block h-1.5 w-1.5 rounded-full bg-stroke dark:bg-dark-3"></span>

              <span className="text-base text-body-color dark:text-dark-6">
                {publishedDate}
              </span>
            </div>
            <a
              href="#"
              className="line-clamp-2 cursor-pointer text-xl font-bold text-dark hover:text-primary dark:text-white dark:hover:text-primary"
            >
              {title}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
