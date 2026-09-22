import SectionHeading from "../../common/SectionHeading";
import ProjectCard from "../../ui/ProjectCard";

import projects from "../../../data/projects";

function FeaturedWork() {
  const featuredProjects = projects.filter((project) => project.featured);
  return (
    <section className="border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow="Our Work"
            title="Websites built with purpose."
            description="A selection of projects designed to help businesses establish credibility, connect with customers, and create better digital experiences."
          />
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedWork;
