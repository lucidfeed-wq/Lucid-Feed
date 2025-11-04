import React from "react";

const Blog5 = () => {
  return (
    <>
      <section className="mb-8 bg-white pt-20 dark:bg-dark lg:mb-[70px] lg:pt-[120px]">
        <div className="container mx-auto">
          <div className="-mx-4 mb-[60px] flex flex-wrap items-center justify-center lg:mb-20">
            <div className="w-full px-4 lg:w-8/12">
              <div className="mb-10 max-w-[510px] lg:mb-0">
                <span className="mb-2 block text-lg font-semibold text-primary">
                  Latest News
                </span>
                <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px]">
                  Recent Blog Articles
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
            <div className="w-full px-4 lg:w-4/12">
              <div className="lg:text-right">
                <div className="inline-flex justify-end rounded-sm bg-[#F1F3FC] px-5 dark:bg-white/5">
                  <a
                    href="#"
                    className="py-3 pr-7 text-base font-semibold text-primary dark:text-white"
                  >
                    Most Popular
                  </a>
                  <a
                    href="#"
                    className="py-3 text-base font-semibold text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-white"
                  >
                    Most Popular
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="-mx-4 flex flex-wrap">
            <BlogItem
              image="https://i.ibb.co/gSK9D0d/image-01.jpg"
              authorImg="https://i.ibb.co/c3DqVgM/author-01.png"
              metaText="Online Courses"
              authorName="Samuyl Joshi"
              title="How to use Facebook ads to sell online courses"
              description="Avoid burnout, reduce stress, and keep yourself healthy with these practical self-care tips for entrepreneurs."
            />
            <BlogItem
              image="https://i.ibb.co/ZK4mPhG/image-02.jpg"
              authorImg="https://i.ibb.co/zrf1JFz/author-02.png"
              metaText="Online Courses"
              authorName="Devid Leon"
              title="How to earn more money as a wellness coach"
              description="Avoid burnout, reduce stress, and keep yourself healthy with these practical self-care tips for entrepreneurs."
            />
            <BlogItem
              image="https://i.ibb.co/C70VvMy/image-03.jpg"
              authorImg="https://i.ibb.co/G9ZrDxd/author-03.png"
              metaText="Online Courses"
              authorName="Miller Demo"
              title="The no-fuss guide to upselling and cross selling"
              description="Avoid burnout, reduce stress, and keep yourself healthy with these practical self-care tips for entrepreneurs."
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog5;

const BlogItem = ({
  image,
  authorImg,
  metaText,
  authorName,
  title,
  description,
}) => {
  return (
    <div className="w-full px-4">
      <div className="-mx-4 mb-12 flex flex-wrap items-center">
        <div className="w-full px-4 lg:w-6/12 xl:w-6/12">
          <div className="mb-8 w-full overflow-hidden rounded-sm lg:mb-0">
            <img src={image} alt="image" className="w-full" />
          </div>
        </div>
        <div className="w-full px-4 lg:w-6/12 xl:w-6/12">
          <div className="w-full">
            <span className="mb-8 inline-block rounded-sm bg-primary px-5 py-3 text-sm font-semibold text-white">
              {metaText}
            </span>
            <div className="mb-5 flex items-center">
              <div className="mr-4 h-10 w-10 overflow-hidden rounded-full">
                <img src={authorImg} alt="image" className="w-full" />
              </div>
              <p className="text-base font-medium text-body-color dark:text-dark-6">
                By{" "}
                <a
                  href="#"
                  className="text-body-color hover:text-primary dark:text-dark-6"
                >
                  {authorName}
                </a>
              </p>
            </div>
            <div>
              <h3>
                <a
                  href="#"
                  className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
                >
                  {title}
                </a>
              </h3>
              <p className="text-base text-body-color dark:text-dark-6">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
