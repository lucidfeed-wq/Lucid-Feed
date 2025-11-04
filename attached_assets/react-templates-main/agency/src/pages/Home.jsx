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

const Home = () => {
  return (
    <>
      <HeroArea />
      <Brands />
      <Features />
      <About />
      <Team />
      <Testimonial />
      <PricingPlans />
      <Cta />
      <ContactUs />
      <Blog />
    </>
  );
};

export default Home;
