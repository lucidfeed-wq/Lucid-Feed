import React from "react";

function Blog6() {
  return (
    <section className="bg-dark py-20 lg:py-[120px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <BlogItem
            tag="NEWS"
            publishedDate="March 20, 2028"
            title="The actual history of machine intelligence"
            paragraph="Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
          />
          <BlogItem
            tag="NEWS"
            publishedDate="May 20, 2028"
            title="The history of actual machine intelligence"
            paragraph="Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
          />
          <BlogItem
            tag="NEWS"
            publishedDate="June 20, 2028"
            title="History of the actual machine intelligence"
            paragraph="Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
          />
        </div>
      </div>
    </section>
  );
}

export default Blog6;

function BlogItem({ tag, publishedDate, title, paragraph }) {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="mb-8 rounded-xl bg-dark-2 p-8">
        <div className="mb-5 flex items-center gap-3">
          <span className="text-base uppercase text-white"> {tag} </span>
          <span className="block aspect-square h-1.5 w-1.5 rounded-full bg-secondary-color"></span>
          <span className="text-dark-6"> {publishedDate} </span>
        </div>
        <a
          href="#"
          className="mb-3 line-clamp-2 text-xl font-bold text-white hover:text-primary sm:text-2xl"
        >
          {title}
        </a>
        <p className="mb-7 line-clamp-3 text-base text-gray-5">{paragraph}</p>
        <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-white hover:bg-white/10">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.6 11.4001L13.8375 3.5251C13.5 3.1876 12.975 3.1876 12.6375 3.5251C12.3 3.8626 12.3 4.3876 12.6375 4.7251L18.9375 11.1376H2.99999C2.54999 11.1376 2.17499 11.5126 2.17499 11.9626C2.17499 12.4126 2.54999 12.8251 2.99999 12.8251H19.0125L12.6375 19.3126C12.3 19.6501 12.3 20.1751 12.6375 20.5126C12.7875 20.6626 13.0125 20.7376 13.2375 20.7376C13.4625 20.7376 13.6875 20.6626 13.8375 20.4751L21.6 12.6001C21.9375 12.2626 21.9375 11.7376 21.6 11.4001Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
