import bgNoise from "../assets/images/hero/hero-04/bg-noise.png";
import imageOne from "../assets/images/hero/hero-04/image-1.jpg";
import imageTwo from "../assets/images/hero/hero-04/image-2.jpg";
import ShapeOne from "./Shapes/ShapeOne.jsx";
import ShapeTwo from "./Shapes/ShapeTwo.jsx";
import ShapeThree from "./Shapes/ShapeThree.jsx";

const tagItems = [
  { name: "Creative" },
  { name: "Sport" },
  { name: "Animation" },
  { name: "Fantasy" },
];

const HeroArea = () => {
  return (
    <>
      <section className="relative z-50 bg-[#020342] pt-[120px]">
        <div
          className="absolute inset-0 -z-10 h-full w-full opacity-60 mix-blend-overlay"
          style={{
            backgroundImage: `url(${bgNoise})`,
          }}
        ></div>
        <div className="relative overflow-hidden pb-[150px] pt-[120px]">
          <div className="container">
            <div className="relative">
              <div className="mx-auto w-full max-w-[590px] text-center">
                <h1 className="mb-4 text-3xl font-extrabold text-white sm:text-4xl md:text-[52px]/[62px]">
                  Turn your Text into the{" "}
                  <span className="bg-linear-to-r from-primary via-primary to-[#F566D5] bg-clip-text text-transparent">
                    Images{" "}
                  </span>
                  in Seconds
                </h1>

                <p className="mx-auto mb-8 w-full max-w-[570px] text-base text-dark-7">
                  Convert words into an image in mere seconds with the Image
                  Generator. Type a detailed description for the better result
                </p>

                <div className="mb-8 rounded-xl bg-white p-3 dark:bg-white/10">
                  <div className="flex w-full gap-3">
                    <input
                      type="text"
                      placeholder="Describe what you want to see"
                      className="h-12 w-full bg-transparent px-5 py-3 text-black outline-hidden dark:text-white"
                    />
                    <button className="h-12 rounded-lg bg-primary px-6 py-3 text-base font-medium text-white hover:bg-primary/90">
                      Generate
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-4">
                  <p className="text-sm font-medium text-dark-7">
                    Popular Tags:
                  </p>

                  <div className="flex gap-2.5">
                    {tagItems.map((item, index) => (
                      <button
                        key={index}
                        className="rounded-sm bg-white/[.12] px-3 py-1 text-sm font-medium text-dark-7 hover:bg-white/30"
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/*graphics*/}
              <div className="absolute bottom-0 left-0 -z-10 aspect-174/291 w-full max-w-[174px] rounded-full border border-dashed bg-clip-border p-3 max-xl:hidden">
                <div className="absolute bottom-3 left-1/2 aspect-150/220 w-full max-w-[150px] -translate-x-1/2 overflow-hidden rounded-full">
                  <img src={imageOne} alt="shape image" />
                </div>

                <span className="absolute right-4 top-3.5">
                  <ShapeOne />
                </span>

                <span className="absolute right-8 top-0">
                  <ShapeTwo />
                </span>
              </div>

              <div className="absolute right-0 top-0 -z-10 aspect-174/291 w-full max-w-[174px] rounded-full border border-dashed bg-clip-border p-3 max-xl:hidden">
                <div className="absolute left-1/2 top-3 aspect-150/220 w-full max-w-[150px] -translate-x-1/2 overflow-hidden rounded-full">
                  <img src={imageTwo} alt="shape image" />
                </div>

                <span className="absolute bottom-0 left-8">
                  <ShapeOne />
                </span>

                <span className="absolute bottom-4 left-4">
                  <ShapeTwo />
                </span>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2">
            <ShapeThree />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroArea;
