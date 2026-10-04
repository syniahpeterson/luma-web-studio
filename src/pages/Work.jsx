import CTASection from "../components/common/CTASection";
import ProjectsGrid from "../components/sections/work/ProjectsGrid";
import WorkHero from "../components/sections/work/WorkHero";

function Work() {
  return (
    <>
      <WorkHero />
      <ProjectsGrid />
      <CTASection
        eyebrow="Start Your Project"
        title="Ready to create something like this?"
        description="Tell us about your business and what you're looking to build. We'll help you turn your ideas into a website that works for your customers."
      />
    </>
  );
}

export default Work;
