import HeroArea from "../components/HeroArea.jsx";
import PricingPlans from "../components/PricingPlans.jsx";
import Team from "../components/Team.jsx";
import Cta from "../components/Cta.jsx";
import Testimonial from "../components/Testimonial.jsx";
import ContactUs from "../components/ContactUs.jsx";
import About from "../components/About.jsx";
import Brands from "../components/Brands.jsx";
import Features from "../components/Features.jsx";
import Blog from "../components/Blog.jsx";
import Portfolio from "../components/Portfolio.jsx";

const Home = () => {
  return (
    <>
      <HeroArea />
      <About />
      <Features />
      <Portfolio />
      <Team />
      <PricingPlans />
      <Brands />
      <Testimonial />
      <Blog />
      <Cta />
      <ContactUs />
    </>
  );
};

export default Home;
