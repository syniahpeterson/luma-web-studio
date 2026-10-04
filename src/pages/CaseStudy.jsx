import { Link, useParams } from "react-router-dom";

import Button from "../components/ui/Button";
import Container from "../components/common/Container";
import CTASection from "../components/common/CTASection";

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
              <Button to="/work">Back to Our Work</Button>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <>
      <section className="border-b border-white/10">
        <Container className="py-20 sm:py-24 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-20">
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

              <div className="mt-8 flex flex-wrap gap-4">
                {project.liveUrl && (
                  <Button href={project.liveUrl}>View Live Website</Button>
                )}

                <Button to="/work" variant="secondary">
                  Back to Our Work
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 border-t border-white/10 pt-6 lg:border-t-0 lg:border-l lg:pl-8">
              <div>
                <p className="text-sm text-[#7d7d85]">Client</p>
                <p className="mt-2 font-medium text-white">{project.client}</p>
              </div>

              <div>
                <p className="text-sm text-[#7d7d85]">Year</p>
                <p className="mt-2 font-medium text-white">{project.year}</p>
              </div>

              <div className="col-span-2">
                <p className="text-sm text-[#7d7d85]">Services</p>

                <div className="mt-2 flex flex-wrap gap-2">
                  {project.services.map((service) => (
                    <span
                      key={service}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-[#b7b7be]"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 overflow-hidden rounded-3xl border border-white/10 bg-[#222227] lg:mt-20">
            <img
              src={project.image}
              alt={`${project.title} website`}
              className="h-auto w-full object-cover"
            />
          </div>

          <div className="mt-24 grid gap-16 lg:grid-cols-3 lg:gap-12">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-purple-400">
                The Challenge
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                Creating a stronger digital presence.
              </h2>

              <p className="mt-5 leading-7 text-[#b7b7be]">
                {project.challenge}
              </p>
            </div>

            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-purple-400">
                Our Approach
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                Designing with purpose.
              </h2>

              <p className="mt-5 leading-7 text-[#b7b7be]">
                {project.approach}
              </p>
            </div>

            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-purple-400">
                The Outcome
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                A better experience for the business.
              </h2>

              <p className="mt-5 leading-7 text-[#b7b7be]">{project.outcome}</p>
            </div>
          </div>

          <section className="mt-24">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-purple-400">
                Project Gallery
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                A closer look at the work.
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#b7b7be]">
                Explore a selection of screens and details from this project.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {project.gallery.map((image, index) => (
                <div
                  key={image}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-[#222227]"
                >
                  <img
                    src={image}
                    alt={`${project.title} project screenshot ${index + 1}`}
                    className="h-auto w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </section>
        </Container>
      </section>

      <CTASection
        eyebrow="Start Your Project"
        title="Ready to build something like this?"
        description="Tell us about your business and what you're looking to build. We'll help you create a website designed around your goals."
      />
    </>
  );
}

export default CaseStudy;
