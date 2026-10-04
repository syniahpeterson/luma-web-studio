import SectionHeading from "../../common/SectionHeading";
import Container from "../../common/Container";
import ProjectCard from "../../ui/ProjectCard";
import projects from "../../../data/projects";

function ProjectsGrid() {
  return (
    <section className="border-b border-white/10">
      <Container className="py-24 lg:py-32">
        <SectionHeading
          eyebrow="Selected Work"
          title="A selection of projects we're proud of."
          description="Explore projects designed to help businesses create stronger first impressions, communicate clearly, and give their customers better online experiences."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ProjectsGrid;
