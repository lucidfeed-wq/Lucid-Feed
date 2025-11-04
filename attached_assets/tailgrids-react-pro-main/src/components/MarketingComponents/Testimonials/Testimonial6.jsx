import React from "react";

export default function Testimonial6() {
  return (
    <section className="bg-white py-20 lg:py-[120px] dark:bg-dark">
      <div className="container">
        <div className="mx-auto mb-[60px] w-full max-w-[510px] text-center">
          <span className="mb-2 block text-lg font-semibold text-primary">
            {" "}
            Testimonials{" "}
          </span>
          <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark sm:text-4xl md:text-[40px] dark:text-white">
            What our Clients Says
          </h2>
          <p className="text-base text-body-color dark:text-dark-6">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </p>
        </div>

        <div>
          <div className="gap-8 md:columns-2 lg:columns-3">
            <TestimonialItem
              name="Melissa Hart"
              image="https://i.ibb.co/8dR7xzj/image-1.png"
              designation="Software Engineer"
              review="I believe in lifelong learning and learn is a great place to learn from erts. I've learned a lot  it to all my friends and familys and more."
            />
            <TestimonialItem
              name="Maria Baptista"
              image="https://i.ibb.co/FY021ry/image-2.png"
              designation="Software Engineer"
              review="I believe in lifelong learning and learn is a great place to learn from erts. I've learned a lot  it to all my friends and familys and more. lot  it to all my friends and familys and more. learn is a great place to learn from erts"
            />
            <TestimonialItem
              name="Giana Franci"
              image="https://i.ibb.co/C2kL78m/image-3.png"
              designation="Software Engineer"
              review="I believe in lifelong learning and learn is a great place to learn from erts. I've learned a lot  it to all my friends and familys and more."
            />
            <TestimonialItem
              name="Maren Press"
              image="https://i.ibb.co/YLY8Wzn/image-4.png"
              designation="Software Engineer"
              review="I believe in lifelong learning and learn is a great place to learn from erts. I've learned a lot  it to all my friends and familys and more."
            />
            <TestimonialItem
              name="Rayan Dhal"
              image="https://i.ibb.co/cCycXd0/image-5.png"
              designation="Software Engineer"
              review="I believe in lifelong learning and learn is a great place to learn from erts. I've learned a lot  it to all my friends and familys and more. a great place to learn from erts. I've learned a lot  it to all my friends and familys and more. I've learned a lot  it to all "
            />
            <TestimonialItem
              name="Abir Sabil"
              image="https://i.ibb.co/tb6pVKC/image-6.png"
              designation="Software Engineer"
              review="I believe in lifelong learning and learn is a great place to learn from erts. I've learned a lot  it to all my friends and familys and more."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialItem({ image, name, designation, review }) {
  return (
    <div className="mb-8 rounded-xl bg-white p-10 shadow-lg dark:bg-dark-2">
      <div className="mb-6 flex items-center gap-4">
        <div className="aspect-square w-[52px] overflow-hidden rounded-full">
          <img
            src={image}
            alt={name}
            className="w-full overflow-hidden rounded-full object-cover object-center"
          />
        </div>
        <div>
          <h5 className="text-base font-medium text-black dark:text-white">
            {name}
          </h5>
          <p className="text-sm text-body-color dark:text-dark-6">
            {designation}
          </p>
        </div>
      </div>
      <div>
        <p className="text-base text-body-color dark:text-dark-6">
          " {review} "
        </p>
      </div>
    </div>
  );
}
