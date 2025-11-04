import HeroArea from "../components/HeroArea.jsx";
import PricingPlans from "../components/PricingPlans.jsx";
import Team from "../components/Team.jsx";
import Testimonial from "../components/Testimonial.jsx";
import ContactUs from "../components/ContactUs.jsx";
import About from "../components/About.jsx";
import Services from "../components/Services.jsx";

const Home = () => {
  return (
    <>
      <HeroArea />
      <About />
      <Services />
      <Team />
      <PricingPlans />
      <Testimonial />
      <ContactUs />
    </>
  );
};

export default Home;
