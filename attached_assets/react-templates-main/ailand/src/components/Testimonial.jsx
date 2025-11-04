import userOne from "../assets/images/testimonials/testimonial-06/image-1.png";
import userTwo from "../assets/images/testimonials/testimonial-06/image-2.png";
import userThree from "../assets/images/testimonials/testimonial-06/image-3.png";
import userFour from "../assets/images/testimonials/testimonial-06/image-4.png";
import userFive from "../assets/images/testimonials/testimonial-06/image-5.png";
import userSix from "../assets/images/testimonials/testimonial-06/image-6.png";

const testimonialItems = [
  {
    image: userOne,
    name: "Melissa Hart",
    role: "Software Engineer",
    details:
      "I believe in lifelong learning and learn is a great place to learn from erts. I've learned a lot it to all my friends and familys and more.",
  },
  {
    image: userTwo,
    name: "Giana Franci",
    role: "Software Engineer",
    details:
      "I believe in lifelong learning and learn is a great place to learn from erts. I've learned a lot it to all my friends and familys and more.” lot it to all my friends and familys and more.",
  },
  {
    image: userThree,
    name: "Ryan Donin",
    role: "Software Engineer",
    details:
      "I believe in lifelong learning and learn is a great place to learn from erts. I've learned a lot it to all my friends and familys and more.",
  },
  {
    image: userFour,
    name: "Maria Baptista",
    role: "Software Engineer",
    details:
      "I believe in lifelong learning and learn is a great place to learn from erts. I've learned a lot it to all my friends and familys and more lot it to all my friends and familys and more",
  },
  {
    image: userFive,
    name: "Maren Press",
    role: "Software Engineer",
    details:
      "I believe in lifelong learning and learn is a great place to learn from erts. I've learned a lot it to all my friends and familys and more lot it to all my friends ve learned a lot it and familys and more.",
  },
  {
    image: userSix,
    name: "Jakob Press",
    role: "Software Engineer",
    details:
      "I believe in lifelong learning and learn is a great place to learn from erts. I've learned a lot it to all my friends and familys and more.",
  },
];

const Testimonial = () => {
  return (
    <>
      <section className="bg-gray-1 py-20 dark:bg-dark-3 lg:py-[120px]">
        <div className="container">
          <div className="mx-auto mb-[60px] w-full max-w-[510px] text-center">
            <span className="mb-2 block text-lg font-semibold text-primary">
              Testimonials
            </span>
            <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
              What our Clients Says
            </h2>
            <p className="text-base text-body-color dark:text-dark-6">
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered alteration in some form.
            </p>
          </div>

          <div>
            <div className="gap-8 md:columns-2 lg:columns-3">
              {testimonialItems.map((item, index) => (
                <div
                  key={index}
                  className="mb-8 rounded-xl bg-white p-10 shadow-lg dark:bg-dark-2"
                >
                  <div className="mb-6 flex items-center gap-4">
                    <div className="aspect-square w-[52px] overflow-hidden rounded-full">
                      <img
                        src={item.image}
                        alt="testimonial image"
                        className="w-full overflow-hidden rounded-full object-cover object-center"
                      />
                    </div>
                    <div>
                      <h5 className="text-base font-medium text-black dark:text-white">
                        {item.name}
                      </h5>
                      <p className="text-sm text-body-color dark:text-dark-6">
                        {item.role}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-base text-body-color dark:text-dark-6">
                      “{item.details}”
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
