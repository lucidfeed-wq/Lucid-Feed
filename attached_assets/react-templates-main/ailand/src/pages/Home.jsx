import HeroArea from "../components/HeroArea.jsx";
import Services from "../components/Services.jsx";
import Portfolio from "../components/Portfolio.jsx";
import Cta from "../components/Cta.jsx";
import PricingPlans from "../components/PricingPlans.jsx";
import Testimonial from "../components/Testimonial.jsx";
import Faq from "../components/Faq.jsx";
import Blog from "../components/Blog.jsx";
import ContactUs from "../components/ContactUs.jsx";
import Brands from "../components/Brands.jsx";

const Home = () => {
  return (
    <>
      <HeroArea />
      <Services />
      <Portfolio />
      <Cta />
      <PricingPlans />
      <Testimonial />
      <Faq />
      <Blog />
      <ContactUs />
      <Brands />
    </>
  );
};

export default Home;
