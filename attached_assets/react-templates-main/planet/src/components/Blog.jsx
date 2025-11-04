import imageOne from "../assets/images/blogs/blog-01/image-01.jpg";
import imageTwo from "../assets/images/blogs/blog-01/image-02.jpg";
import imageThree from "../assets/images/blogs/blog-01/image-03.jpg";
import { Link } from "react-router-dom";

const blogItems = [
  {
    image: imageOne,
    title: "Meet AutoManage, the best AI management tools",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    buttonText: "View Details",
    buttonLink: "#",
    date: "Dec 22, 2023",
  },
  {
    image: imageTwo,
    title: "How to earn more money as a wellness coach",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    buttonText: "View Details",
    buttonLink: "#",
    date: "Mar 15, 2023",
  },
  {
    image: imageThree,
    title: "The no-fuss guide to upselling and cross selling",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    buttonText: "View Details",
    buttonLink: "#",
    date: "Jan 05, 2023",
  },
];

const Blog = () => {
  return (
    <>
      <section className="pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                <span className="mb-2 block text-lg font-semibold text-primary">
                  Our Blogs
                </span>
                <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px]">
                  Our Recent News
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>

          <div className="-mx-4 flex flex-wrap">
            {blogItems.map((item, index) => (
              <div key={index} className="w-full px-4 md:w-1/2 lg:w-1/3">
                <div className="mb-10 w-full">
                  <div className="mb-8 overflow-hidden rounded-sm">
                    <img src={item.image} alt="image" className="w-full" />
                  </div>
                  <div>
                    <span className="mb-5 inline-block rounded-sm bg-primary px-4 py-1 text-center text-xs font-semibold leading-loose text-white">
                      {item.date}
                    </span>
                    <h3>
                      <Link
                        to={item.buttonLink}
                        className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
                      >
                        {item.title}
                      </Link>
                    </h3>
                    <p className="text-base text-body-color dark:text-dark-6">
                      {item.details}
                    </p>
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
