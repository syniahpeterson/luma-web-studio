import SectionHeading from "../../common/SectionHeading";

import processSteps from "../../../data/process";

function Process() {
  return (
    <section className="border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow="Our Process"
            title="A clear path from idea to launch."
            description="Our process keeps the project focused, collaborative, and moving toward a finished website without unnecessary complexity."
          />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {processSteps.map((step) => (
            <article
              key={step.id}
              className="rounded 2xl border border-white/10 bg-[var(--color-surface)] p-6"
            >
              <p className="text-sm font-medium text-[var(--color-brand)]">
                {step.number}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-[var(--color-text)]">
                {step.title}
              </h3>
              <p className="mt-3 leading-7 text-[var(--color-text-secondary)]">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
