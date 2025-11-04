import { Link } from "react-router-dom";
import ShapeSeven from "./Shapes/ShapeSeven.jsx";
import ShapeEight from "./Shapes/ShapeEight.jsx";
import ShapeNine from "./Shapes/ShapeNine.jsx";
import ShapeTen from "./Shapes/ShapeTen.jsx";

const Cta = () => {
  return (
    <>
      <section className="bg-primary relative z-10 overflow-hidden py-20 lg:py-[110px]">
        <div className="container mx-auto">
          <div className="relative overflow-hidden">
            <div className="-mx-4 flex flex-wrap items-stretch">
              <div className="w-full px-4">
                <div className="mx-auto max-w-[570px] text-center">
                  <h2 className="mb-6 text-3xl leading-snug font-semibold text-white md:text-[40px]">
                    What Are You Looking For?
                    <span className="font-light"> Get Started Now </span>
                  </h2>
                  <p className="mb-8 text-base leading-relaxed text-white md:pr-10">
                    There are many variations of passages of Lorem Ipsum but the
                    majority have suffered in some form.
                  </p>
                  <Link
                    to="#"
                    className="inline-block rounded-sm bg-[#13C296] px-7 py-3 text-base font-medium text-white transition hover:bg-[#13C296]/90"
                  >
                    Explore Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <span className="absolute top-0 left-0">
            <ShapeNine />
          </span>
          <span className="absolute right-0 bottom-0">
            <ShapeTen />
          </span>
        </div>
      </section>
    </>
  );
};

export default Cta;
