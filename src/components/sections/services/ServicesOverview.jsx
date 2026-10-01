import SectionHeading from "../../common/SectionHeading";
import services from "../../../data/services";

function ServicesOverview() {
  return (
    <section className="border-b border-white/10">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow="What We Do"
            title="Services built around your goals."
            description="Whether you need a new website or want to improve an existing one, our services are designed to create a stronger digital experience for your business and your customers."
          />
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.id}
              className="rounded-2xl border border-white/10 bg-[var(--color-surface)] p-7"
            >
              <h3 className="text-xl font-semibold text-[var(--color-text)]">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-[var(--color-text-secondary)]">
                {service.details}
              </p>

              <ul className="mt-6 space-y-3 border-t border-white/10 pt-6">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm leading-6 text-[var(--color-text-secondary)]"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-brand)]"
                      aria-hidden="true"
                    />

                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesOverview;
