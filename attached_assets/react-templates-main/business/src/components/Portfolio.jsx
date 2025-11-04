import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import portfolioOne from "../assets/images/portfolio/portfolio-01/image-01.jpg";
import portfolioTwo from "../assets/images/portfolio/portfolio-01/image-02.jpg";
import portfolioThree from "../assets/images/portfolio/portfolio-01/image-03.jpg";
import portfolioFour from "../assets/images/portfolio/portfolio-01/image-04.jpg";
import portfolioFive from "../assets/images/portfolio/portfolio-01/image-05.jpg";
import portfolioSix from "../assets/images/portfolio/portfolio-01/image-06.jpg";

const Portfolio = () => {
  const portfolioItemsData = [
    {
      image: portfolioOne,
      category: "Branding",
      title: "Branding Design",
      buttonText: "View Details",
      buttonLink: "#",
    },
    {
      image: portfolioTwo,
      category: "Marketing",
      title: "Best Marketing tips",
      buttonText: "View Details",
      buttonLink: "#",
    },
    {
      image: portfolioThree,
      category: "Development",
      title: "Web Design Trend",
      buttonText: "View Details",
      buttonLink: "#",
    },
    {
      image: portfolioFour,
      category: "Design",
      title: "Business Card Design",
      buttonText: "View Details",
      buttonLink: "#",
    },
    {
      image: portfolioFive,
      category: "Marketing",
      title: "Digital marketing",
      buttonText: "View Details",
      buttonLink: "#",
    },
    {
      image: portfolioSix,
      category: "Branding",
      title: "Creative Agency",
      buttonText: "View Details",
      buttonLink: "#",
    },
  ];

  const [portfolioItems, setPortfolioItems] = useState(portfolioItemsData);
  const [selectedCategory, setSelectedCategory] = useState("All Projects");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const allCategories = [
      "All Projects",
      ...new Set(portfolioItemsData.map((item) => item.category)),
    ];
    setCategories(allCategories);
  }, []);

  const filterItems = (category) => {
    if (category === "All Projects") {
      setPortfolioItems(portfolioItemsData);
    } else {
      const filteredItems = portfolioItemsData.filter(
        (item) => item.category === category,
      );
      setPortfolioItems(filteredItems);
    }
    setSelectedCategory(category);
  };

  return (
    <section className="dark:bg-dark pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <span className="text-primary mb-2 block text-lg font-semibold">
                Our Portfolio
              </span>
              <h2 className="text-dark mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]">
                Our Recent Projects
              </h2>
              <p className="text-body-color dark:text-dark-6 text-base">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex w-full flex-wrap justify-center">
          <div className="w-full px-4">
            <ul className="mb-12 flex flex-wrap justify-center space-x-1">
              {categories.map((category, index) => (
                <li className="mb-1" key={`${category}-${index}`}>
                  <button
                    onClick={() => filterItems(category)}
                    className={`inline-block rounded-lg px-5 py-2 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      selectedCategory === category
                        ? "bg-primary text-white"
                        : "text-body-color hover:bg-primary dark:text-dark-6 hover:text-white dark:hover:text-white"
                    }`}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          {portfolioItems.map((item) => (
            <div className="w-full px-4 md:w-1/2 xl:w-1/3" key={item.title}>
              <div className="relative mb-12">
                <div className="overflow-hidden rounded-[10px]">
                  <img src={item.image} alt="portfolio" className="w-full" />
                </div>
                <div className="shadow-portfolio dark:bg-dark-2 dark:shadow-box-dark relative z-10 mx-7 -mt-20 rounded-lg bg-white px-3 py-[34px] text-center">
                  <span className="text-primary mb-2 block text-sm font-medium">
                    {item.category}
                  </span>
                  <h3 className="text-dark mb-5 text-xl font-bold dark:text-white">
                    {item.title}
                  </h3>
                  <Link
                    to={item.buttonLink}
                    className="border-stroke text-body-color hover:border-primary hover:bg-primary dark:border-dark-3 dark:text-dark-6 inline-block rounded-md border px-7 py-[10px] text-sm font-medium transition hover:text-white dark:hover:text-white"
                  >
                    {item.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
