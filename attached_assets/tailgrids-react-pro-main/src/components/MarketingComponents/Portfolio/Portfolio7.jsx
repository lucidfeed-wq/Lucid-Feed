import React from "react";

export default function Portfolio7() {
  return (
    <section className="bg-white py-20 lg:py-[120px] dark:bg-dark">
      <div className="container">
        <div className="mb-11 flex items-end justify-between gap-4 max-md:flex-wrap">
          <div className="w-full max-w-[500px]">
            <h2 className="text-3xl font-bold leading-tight! -tracking-[.72px] text-dark sm:text-4xl dark:text-white">
              Exploring the Artistry Within Our Community
            </h2>
          </div>
          <div>
            <button className="inline-flex items-center justify-center rounded-lg border border-primary px-6 py-3 text-base font-medium text-primary duration-200 hover:bg-primary hover:text-white">
              Browse All
            </button>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-7">
            <div className="w-full md:col-span-2">
              <img
                src="https://i.ibb.co/wddhDTZ/image-1.jpg"
                alt=""
                className="w-full overflow-hidden rounded-xl object-cover object-center"
              />
            </div>
            <div className="space-y-6 md:col-span-3">
              <div>
                <img
                  src="https://i.ibb.co/Jpr6cwK/image-2.jpg"
                  alt=""
                  className="w-full overflow-hidden rounded-xl object-cover object-center"
                />
              </div>
              <div>
                <img
                  src="https://i.ibb.co/thFy0nr/image-3.jpg"
                  alt=""
                  className="w-full overflow-hidden rounded-xl object-cover object-center"
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <img
                src="https://i.ibb.co/zX86hvz/image-4.jpg"
                alt=""
                className="w-full overflow-hidden rounded-xl object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
