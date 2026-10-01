import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-[var(--color-surface)]">
      <Link to={`/work/${project.slug}`} className="block">
        <div className="aspect-[16/10] overflow-hidden bg-[var(--color-surface-elevated)]">
          <img
            src={project.image}
            alt={`${project.title} website`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-6">
          <p className="text-sm font-medium text-[var(--color-brand)]">
            {project.category}
          </p>

          <h3 className="mt-2 text-xl font-semibold text-[var(--color-text)]">
            {project.title}
          </h3>

          <p className="mt-3 leading-7 text-[var(--color-text-secondary)]">
            {project.description}
          </p>

          <span className="mt-5 inline-flex text-sm font-medium text-[var(--color-text)]">
            View Case Study →
          </span>
        </div>
      </Link>
    </article>
  );
}

export default ProjectCard;
