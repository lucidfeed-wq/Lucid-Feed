import HeroArea from "../components/HeroArea.jsx";
import About from "../components/About.jsx";
import Services from "../components/Services.jsx";
import Portfolio from "../components/Portfolio.jsx";
import PricingPlans from "../components/PricingPlans.jsx";
import Testimonial from "../components/Testimonial.jsx";
import Faq from "../components/Faq.jsx";
import Cta from "../components/Cta.jsx";
import ContactUs from "../components/ContactUs.jsx";
import Blog from "../components/Blog.jsx";
import Brands from "../components/Brands.jsx";

const Home = () => {
  return (
    <>
      <HeroArea />
      <About />
      <Services />
      <Portfolio />
      <PricingPlans />
      <Testimonial />
      <Faq />
      <Cta />
      <ContactUs />
      <Blog />
      <Brands />
    </>
  );
};

export default Home;
