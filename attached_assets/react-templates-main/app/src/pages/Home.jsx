import HeroArea from "../components/HeroArea.jsx";
import PricingPlans from "../components/PricingPlans.jsx";
import Team from "../components/Team.jsx";
import Cta from "../components/Cta.jsx";
import Testimonial from "../components/Testimonial.jsx";
import ContactUs from "../components/ContactUs.jsx";
import About from "../components/About.jsx";
import Brands from "../components/Brands.jsx";

const Home = () => {
  return (
    <>
      <HeroArea />
      <Brands />
      <About />
      <PricingPlans />
      <Team />
      <Cta />
      <Testimonial />
      <ContactUs />
    </>
  );
};

export default Home;
