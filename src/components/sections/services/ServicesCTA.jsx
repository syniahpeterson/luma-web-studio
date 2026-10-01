import Button from "../../ui/Button";

function ServicesCTA() {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[var(--color-surface)] px-6 py-16 text-center sm:px-10 lg:px-16">
          <div className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_center,var(--color-brand),transparent_55%)] opacity-[0.14]" />

          <div className="relative z-10 mx-auto max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-brand)]">
              Let&apos;s Work Together
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
              Have a project in mind?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[var(--color-text-secondary)] sm:text-lg">
              Whether you&apos;re starting from scratch or improving an existing
              website, let&apos;s talk about what your business needs.
            </p>

            <div className="mt-8">
              <Button to="/contact">Start a Project</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesCTA;
