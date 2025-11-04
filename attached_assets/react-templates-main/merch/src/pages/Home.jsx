import HeroArea from "../components/HeroArea.jsx";
import RecentProduct from "../components/RecentProduct.jsx";
import ProductCategory from "../components/ProductCategory.jsx";
import FeaturedProduct from "../components/FeaturedProduct.jsx";
import ProductGrids from "../components/ProductGrids.jsx";

const Home = () => {
  return (
    <>
      <HeroArea />
      <RecentProduct />
      <FeaturedProduct />
      <ProductCategory />
      <ProductGrids />
    </>
  );
};

export default Home;
