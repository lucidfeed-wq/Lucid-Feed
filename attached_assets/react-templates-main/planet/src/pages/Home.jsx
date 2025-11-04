import HeroArea from "../components/HeroArea.jsx";
import ProductCarousel from "../components/ProductCarousel.jsx";
import RecentProduct from "../components/RecentProduct.jsx";
import ProductCategory from "../components/ProductCategory.jsx";
import Blog from "../components/Blog.jsx";

const Home = () => {
  return (
    <>
      <HeroArea />
      <ProductCarousel />
      <RecentProduct />
      <ProductCategory />
      <Blog />
    </>
  );
};

export default Home;
