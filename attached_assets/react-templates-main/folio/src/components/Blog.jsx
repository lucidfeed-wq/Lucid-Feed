import imageOne from "../assets/images/blogs/blog-07/image-1.jpg";
import imageTwo from "../assets/images/blogs/blog-07/image-2.jpg";
import imageThree from "../assets/images/blogs/blog-07/image-3.jpg";
import { Link } from "react-router-dom";

const blogItems = [
  {
    image: imageOne,
    title: "How to use Facebook ads to sell online courses",
    tag: "TECH",
    date: "March 20, 2028",
  },
  {
    image: imageTwo,
    title: "What to do if template do not work properly",
    tag: "MODERN",
    date: "March 20, 2028",
  },
  {
    image: imageThree,
    title: "Meet AutoManage, the best AI management tools",
    tag: "TOOLS",
    date: "March 20, 2028",
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
                <div className="mb-8">
                  <div className="mb-7">
                    <img
                      src={item.image}
                      alt="blog image"
                      className="w-full object-cover object-center"
                    />
                  </div>
                  <div className="flex gap-6">
                    <div className="mt-3 h-0.5 w-8 bg-dark dark:bg-white"></div>
                    <div>
                      <div className="mb-5 flex items-center gap-3">
                        <span className="text-base uppercase text-dark dark:text-white">
                          {item.tag}
                        </span>
                        <span className="block h-1.5 w-1.5 rounded-full bg-stroke dark:bg-dark-3"></span>

                        <span className="text-base text-body-color dark:text-dark-6">
                          {item.date}
                        </span>
                      </div>
                      <Link
                        to="#"
                        className="line-clamp-2 cursor-pointer text-xl font-bold text-dark hover:text-primary dark:text-white dark:hover:text-primary"
                      >
                        {item.title}
                      </Link>
                    </div>
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
