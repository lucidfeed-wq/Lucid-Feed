import teamOne from "../assets/images/team/team-01/image-01.jpg";
import teamTwo from "../assets/images/team/team-01/image-02.jpg";
import teamThree from "../assets/images/team/team-01/image-03.jpg";
import teamFour from "../assets/images/team/team-01/image-04.jpg";
import ShapeTwo from "./Shapes/ShapeTwo.jsx";
import ShapeThree from "./Shapes/ShapeThree.jsx";

const teamItems = [
  {
    image: teamOne,
    name: "Coriss Ambady",
    profession: "Web Developer",
  },
  {
    image: teamTwo,
    name: "Glorius Cristian",
    profession: "App Developer",
  },
  {
    image: teamThree,
    name: "Jackie Sanders",
    profession: "UI/UX Designer",
  },
  {
    image: teamFour,
    name: "Nikolas Brooten",
    profession: "Sales Manager",
  },
];

const Team = () => {
  return (
    <>
      <section className="bg-tg-bg pb-10 pt-20 dark:bg-dark-2 lg:pb-20 lg:pt-[120px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                <span className="mb-2 block text-lg font-semibold text-primary">
                  {" "}
                  Our Team{" "}
                </span>
                <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                  Our Awesome Team
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>

          <div className="-mx-4 flex flex-wrap justify-center">
            {teamItems.map((item, index) => (
              <div key={index} className="w-full px-4 md:w-1/2 xl:w-1/4">
                <div className="mx-auto mb-10 w-full max-w-[370px]">
                  <div className="relative overflow-hidden rounded-lg">
                    <img src={item.image} alt="image" className="w-full" />
                    <div className="absolute bottom-5 left-0 w-full text-center">
                      <div className="relative mx-5 overflow-hidden rounded-lg bg-white px-3 py-5 dark:bg-dark-2">
                        <h3 className="text-base font-semibold text-dark dark:text-white">
                          {item.name}
                        </h3>
                        <p className="text-xs text-body-color dark:text-dark-6">
                          {item.profession}
                        </p>
                        <div>
                          <span className="absolute bottom-0 left-0">
                            <ShapeTwo />
                          </span>
                          <span className="absolute right-0 top-0">
                            <ShapeThree />
                          </span>
                        </div>
                      </div>
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

export default Team;
