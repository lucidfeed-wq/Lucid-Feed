import HeroArea from "../components/HeroArea.jsx";
import ProductCategory from "../components/ProductCategory.jsx";
import ProductGrids from "../components/ProductGrids.jsx";
import ProductCarousel from "../components/ProductCarousel.jsx";
import Testimonial from "../components/Testimonial.jsx";
import Blog from "../components/Blog.jsx";

const Home = () => {
  return (
    <>
      <HeroArea />
      <ProductCategory />
      <ProductCarousel />
      <ProductGrids />
      <Testimonial />
      <Blog />
    </>
  );
};

export default Home;
