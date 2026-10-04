import { Link, useParams } from "react-router-dom";

import Container from "../components/common/Container";

import projects from "../data/projects";

function CaseStudy() {
  const { slug } = useParams();

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    return (
      <section>
        <Container className="py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-purple-400">
              Project Not Found
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              We couldn't find that project.
            </h1>

            <p className="mt-6 text-lg leading-8 text-[#b7b7be]">
              The project you're looking for may have been removed or the URL
              may be incorrect.
            </p>

            <div className="mt-8">
              <Link
                to="/work"
                className="inline-flex items-center justify-center rounded-full bg-purple-500 px-5 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-purple-400"
              >
                Back to Our Work
              </Link>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section>
      <Container className="py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-purple-400">
            {project.category}
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-[#b7b7be]">
            {project.description}
          </p>
        </div>
      </Container>
    </section>
  );
}

export default CaseStudy;
