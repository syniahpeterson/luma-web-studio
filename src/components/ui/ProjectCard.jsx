import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-[#161619]">
      <Link to={`/work/${project.slug}`} className="block">
        <div className="aspect-[16/10] overflow-hidden bg-[#222227]">
          <img
            src={project.image}
            alt={`${project.title} website`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-6">
          <p className="text-sm font-medium text-purple-400">
            {project.category}
          </p>

          <h3 className="mt-2 text-xl font-semibold text-white">
            {project.title}
          </h3>

          <p className="mt-3 leading-7 text-[#b7b7be]">{project.description}</p>

          <span className="mt-5 inline-flex text-sm font-medium text-white">
            View Case Study →
          </span>
        </div>
      </Link>
    </article>
  );
}

export default ProjectCard;
