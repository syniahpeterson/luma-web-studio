import SectionHeading from "../components/common/SectionHeading";
import FeaturedWork from "../components/sections/home/FeaturedWork";
import Hero from "../components/sections/home/Hero";
import Process from "../components/sections/home/Process";
import ServicesPreview from "../components/sections/home/ServicesPreview";
import AboutPreview from "../components/sections/home/AboutPreview";
import HomeCTA from "../components/sections/home/HomeCTA";

function Home() {
  return (
   <>
    <Hero />
    <ServicesPreview />
    <FeaturedWork />
    <Process />
    <AboutPreview />
    <HomeCTA />
   </>
  );
}

export default Home;
