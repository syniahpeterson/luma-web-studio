import AboutCTA from "../components/sections/about/AboutCTA";
import AboutHero from "../components/sections/about/AboutHero";
import AboutIntro from "../components/sections/about/AboutIntro";
import AboutProcess from "../components/sections/about/AboutProcess";
import Values from "../components/sections/about/Values";

function About() {
  return (
    <>
      <AboutHero />
      <AboutIntro />
      <Values />
      <AboutProcess />
      <AboutCTA />
    </>
  );
}

export default About;
