import SectionHeading from "../../common/SectionHeading";

import services from "../../../data/services";

function ServicesPreview() {
  return (
    <section className="border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow="What We Do"
            title="Websites designed around your business."
            description="From strategy and design to development and optimization, we build digital experiences that are designed to support your goals."
          />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.id}
              className="rounded-2xl border border-white/10 bg-[var(--color-surface)] p-6"
            >
              <h3 className="text-xl font-semibold text-[var(--color-text)]">
                {service.title}
              </h3>
              <p className="mt-3 leading-7 text-[var(--color-text-secondary)]">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesPreview;
