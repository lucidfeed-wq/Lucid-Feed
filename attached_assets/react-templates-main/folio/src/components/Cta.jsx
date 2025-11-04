import ShapeTwo from "./Shapes/ShapeTwo.jsx";
import ShapeThree from "./Shapes/ShapeThree.jsx";

const Cta = () => {
  return (
    <>
      <section className="relative z-10 overflow-hidden bg-white py-20 dark:bg-dark lg:py-[120px]">
        <div className="container">
          <div className="mx-auto w-full max-w-[790px] text-center">
            <h2 className="mx-auto mb-6 w-full max-w-[550px] text-3xl font-bold leading-tight! -tracking-[.72px] text-dark dark:text-white sm:text-4xl">
              Have a Project Idea In Mind? Let’s Work Together.
            </h2>
            <p className="mb-8 text-base text-body-color dark:text-dark-6 sm:text-lg">
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered alteration in some form, by more and
              more injected humour.
            </p>
            <button className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-medium text-white duration-200 hover:bg-primary/90">
              Get Started for Free
            </button>
          </div>
        </div>

        <div className="absolute left-20 top-0 -z-10">
          <ShapeTwo />
        </div>
        <div className="absolute bottom-0 right-6 -z-10">
          <ShapeThree />
        </div>
      </section>
    </>
  );
};

export default Cta;
