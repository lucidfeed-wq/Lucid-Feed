import HeroArea from "../components/HeroArea.jsx";
import Services from "../components/Services.jsx";
import Video from "../components/Video.jsx";
import PricingPlans from "../components/PricingPlans.jsx";
import Team from "../components/Team.jsx";
import Faq from "../components/Faq.jsx";
import Cta from "../components/Cta.jsx";
import Testimonials from "../components/Testimonials.jsx";
import ContactUs from "../components/ContactUs.jsx";

const Home = () => {
  return (
    <>
      <HeroArea />
      <Services />
      <Video />
      <PricingPlans />
      <Team />
      <Faq />
      <Cta />
      <Testimonials />
      <ContactUs />
    </>
  );
};

export default Home;
